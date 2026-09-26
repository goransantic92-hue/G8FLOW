# G8 Flow — Portfolio brief (Cursor)

Canonical product brief. Agents follow `.cursor/rules/g8-flow-*.mdc`, `.cursor/skills/g8-flow-portfolio/SKILL.md`, and **`CONTINUE.md`** (live handoff). Locked/live content also lives in `lumora/` and `content/`.

## Identity

- **Brand:** G8 Flow (Gebuk wordmark + Onest UI)
- **Offer:** Sites (and apps) that sell — clear offer, clear path, one next step
- **Locales:** EN + SR (`lumora/i18n.js`; notes in `content/i18n.md`)
- **Hero media:** `lumora/assets/hero/portfolio-base.jpg` + `portfolio-clear.jpg` (16:9 liquid hover)
- **Primary conversion:** https://calendly.com/goransantic/30min (`content/ctas.md`)
- **Contact email:** goransantic92@gmail.com

## Design system

- **Colors:** `#08163C` ~60%, `#15389B` ~30%, `#264238` ~10%
- **Type:** **Onest** body/UI (latin + latin-ext + cyrillic); **Gebuk** logo/watermarks only — `content/typography.md`
- **Live stack:** Static HTML in **`lumora/`** + Vercel (`api/inquiry.js` for the form). Next.js under `src/` is not production.
- **Motion:** Lenis smooth scroll, GSAP-style reveals, hero liquid brush, process card scroll rail — degrade under `prefers-reduced-motion`

## Content sources

| Topic | File / live |
|-------|-------------|
| Handoff / continue | `CONTINUE.md` |
| Pricing + calculator | `content/pricing.md` · logic in `lumora/index.html` |
| Testimonials | Live in `i18n.js` / page; draft `content/testimonials.md` |
| Cases | Live work section · `content/cases.md` |
| CTAs | `content/ctas.md` |
| Logo | `content/logo.md` |
| Privacy / Terms | Live `lumora/privacy.html`, `terms.html` · drafts in `content/legal/` |
| Materials status | `materials-needed.md` |

## Still later (optional)

Britti Sans if licensed; deeper Next rewrite only if user requests; more case metrics only with real data.
