# CTAs — live

Primary conversion: **book a call** via Calendly. Soft secondary: see work / estimate.

**Calendly:** https://calendly.com/goransantic/30min  
**Email:** goransantic92@gmail.com

## Hero (2 buttons)

| Role | EN | SR | Href |
|------|----|----|------|
| Primary | Talk to me / Book a call | Hajde da razgovaramo / Zakažite poziv | Calendly |
| Secondary | View Work | Pogledajte radove | `#works` |

Exact labels live in `lumora/i18n.js` (`cta.*`, `hero.*`).

## Pricing / quote

| Action | Href |
|--------|------|
| See number / build this | Scroll to calculator / Calendly |
| Custom | Calendly |
| Form submit | `POST` → `/api/inquiry` (Resend) |

## Footer / closing

| Role | Href |
|------|------|
| Book a call | Calendly |
| Email | mailto:goransantic92@gmail.com |
| See work | `#works` |
| Estimate | `#pricing` |

## Form

- Wired via `api/inquiry.js` + `RESEND_API_KEY` (see `.env.example`)
- Success copy offers Calendly deep-link
- Do not invent a new form provider without updating env + API
