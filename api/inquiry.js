const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const MAX_FIELD = 4000;
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;

// Best-effort throttle. Serverless instances are recycled, so this only blunts
// bursts from a single warm instance — it is not a substitute for a real limiter.
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const bucket = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  bucket.push(now);
  hits.set(ip, bucket);
  if (hits.size > 500) hits.clear();
  return bucket.length > RATE_MAX;
}

function clean(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/\s+/g, ' ').trim().slice(0, MAX_FIELD);
}

function multiline(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/\r\n/g, '\n').trim().slice(0, MAX_FIELD);
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return {};
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    return {};
  }
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    'unknown';
  if (rateLimited(ip)) {
    return res.status(429).json({ ok: false, error: 'rate_limited' });
  }

  const body = await readBody(req);

  // Honeypot: real people never see this field.
  if (clean(body.company)) return res.status(200).json({ ok: true });

  const name = clean(body.name);
  const email = clean(body.email);
  const budget = clean(body.budget);
  const estimate = clean(body.estimate);
  const source = clean(body.source) || 'unknown';
  const page = clean(body.page);
  const lang = clean(body.lang) === 'sr' ? 'sr' : 'en';
  const notes = multiline(body.notes);

  if (!name || !validEmail(email)) {
    return res.status(400).json({ ok: false, error: 'invalid_input' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL || 'G8 Flow <onboarding@resend.dev>';

  if (!apiKey || !to) {
    // Not configured yet — tell the client to fall back to mailto so the lead
    // is never silently dropped.
    return res.status(503).json({ ok: false, error: 'not_configured', fallback: 'mailto' });
  }

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Budget', budget || '—'],
    ['Estimate', estimate || '—'],
    ['Source', source],
    ['Page', page || '—'],
    ['Language', lang],
  ];

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#08163C">
      <h2 style="margin:0 0 16px">New inquiry — G8 Flow</h2>
      <table style="border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#15389B;font-weight:600">${k}</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`
          )
          .join('')}
      </table>
      <h3 style="margin:24px 0 8px">About the project</h3>
      <p style="white-space:pre-wrap;font-size:14px;line-height:1.6;margin:0">${escapeHtml(notes) || '—'}</p>
    </div>
  `;

  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'About the project:',
    notes || '—',
  ].join('\n');

  try {
    const resend = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New inquiry — ${name}${budget ? ` (${budget})` : ''}`,
        html,
        text,
      }),
    });

    if (!resend.ok) {
      console.error('resend_failed', resend.status);
      return res.status(502).json({ ok: false, error: 'send_failed', fallback: 'mailto' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('resend_error', err?.message);
    return res.status(502).json({ ok: false, error: 'send_failed', fallback: 'mailto' });
  }
};
