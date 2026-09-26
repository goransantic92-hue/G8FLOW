# G8 Flow — Goran Portfolio

Freelancer marketing site for **G8 Flow** (Goran Šantić).

## Live

- **Site:** https://g8flow-kappa.vercel.app/
- **Repo:** `goransantic92-hue/G8FLOW` · branch `main` (Vercel auto-deploy)
- **Production code:** static files in **`lumora/`** (`vercel.json` → `outputDirectory: "lumora"`)

## Continue on another machine / Cursor account

Start here: **[`docs/g8-flow/CONTINUE.md`](docs/g8-flow/CONTINUE.md)** — full handoff (stack, i18n, calculator, constraints, setup).

## Local preview

```bash
npx --yes serve lumora
```

Open the URL it prints. For the inquiry form + Resend, deploy on Vercel or run with serverless and fill `.env` from `.env.example`.

## Project map

| Path | Role |
|------|------|
| `lumora/` | **Live site** (HTML/CSS/JS, assets, i18n, legal) |
| `api/inquiry.js` | Vercel serverless inquiry → Resend |
| `docs/g8-flow/` | Brief, content drafts, QA, **CONTINUE** handoff |
| `.cursor/rules/g8-flow-*.mdc` | Brand, sections, copy, QA for agents |
| `.cursor/skills/g8-flow-portfolio/` | Build/revise skill |
| `src/` + Next.js | Scaffold only — **not** what Vercel serves |
| `claude-missions/`, `AGENTS.md` | Optional multi-agent scaffold |

## Brand quick ref

- Colors: `#08163C` · `#15389B` · `#264238`
- Text: **Onest** (body) · **Gebuk** (logo/watermarks only)
- Locales: EN + SR via `lumora/i18n.js`
- Primary CTA: https://calendly.com/goransantic/30min

## Docs index

| Doc | Purpose |
|-----|---------|
| [`docs/g8-flow/CONTINUE.md`](docs/g8-flow/CONTINUE.md) | Handoff for new Cursor account |
| [`docs/g8-flow/BRIEF.md`](docs/g8-flow/BRIEF.md) | Product brief |
| [`PORTFOLIO.md`](PORTFOLIO.md) | Agent/context index |
| [`docs/g8-flow/content/`](docs/g8-flow/content/) | Pricing, cases, CTAs, typography, i18n notes |
