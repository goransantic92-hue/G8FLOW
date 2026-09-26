# Continue G8 Flow on another Cursor account

Last sync: **2026-09-26** (git `main` through Onest latin-ext/Cyrillic font fix).

This file is the handoff. Read it before changing code. Product rules still live in `.cursor/rules/g8-flow-*.mdc`; **this file overrides stale “Next.js clean slate” docs** where they conflict.

---

## What ships today

| Item | Value |
|------|--------|
| Live site | https://g8flow-kappa.vercel.app/ |
| GitHub | `goransantic92-hue/G8FLOW` · branch **`main`** (auto-deploy) |
| Deploy root | **`lumora/`** (static HTML) — see `vercel.json` `outputDirectory` |
| API | `api/inquiry.js` (Vercel serverless) + Resend |
| Next.js under `src/` | **Not the live site** — leftover scaffold; do not treat as production |

### Run / preview locally

```bash
# Static site (what Vercel serves)
npx --yes serve lumora
# or open lumora/index.html via any static server
```

Inquiry form needs Vercel + `.env` (`RESEND_API_KEY`, `INQUIRY_TO_EMAIL`, optional `INQUIRY_FROM_EMAIL`). See `.env.example`. Never commit `.env`.

---

## Brand (unchanged)

- Name: **G8 Flow** (Goran Šantić)
- Colors: `#08163C` ~60%, `#15389B` ~30%, `#264238` ~10%
- Body/UI font: **Onest** (latin + latin-ext + cyrillic self-hosted under `lumora/assets/fonts/onest/`)
- Logo / watermarks only: **Gebuk** (`lumora/assets/fonts/gebuk/`)
- Contact: `goransantic92@gmail.com`
- Calendly: https://calendly.com/goransantic/30min

---

## Source of truth for the live page

| Concern | Path |
|---------|------|
| Markup + CSS + most JS | `lumora/index.html` |
| EN/SR dictionaries | `lumora/i18n.js` (`G8I18n`, `localStorage` key `g8-lang`, `?lang=sr`) |
| Privacy / Terms | `lumora/privacy.html`, `lumora/terms.html`, `lumora/legal.css` |
| Hero portraits | `lumora/assets/hero/portfolio-base.jpg`, `portfolio-clear.jpg` (16:9); squares kept as `*-square.jpg` |
| Work videos / posters | `lumora/assets/works/` |
| Form backend | `api/inquiry.js` |

SEO: `lumora/robots.txt`, `lumora/sitemap.xml`, JSON-LD in `index.html`.

---

## Locale rules (important)

- **EN** and **SR** are separate deliberate copy — do not calque English into Serbian.
- Serbian marketing voice: **Vi**, full sentences, SiteLab/Digantix-style clarity (see recent SR rewrite in `i18n.js`).
- Legal pages keep formal **Vi**.
- Brand names / plan names / URLs stay shared: G8 Flow, Launch, Growth, Custom, case URLs.
- Same font for EN and SR (Onest). Do not introduce a locale-specific body font.

---

## Pricing calculator (live behavior)

Flat EUR add — **never multiply, never lower**:

```
SITE_PAGES = { '1': 440, '3-6': 1520, '7-12': 2240, '13+': 3050 }
SITE_CMS   = { none: 0, cms: 350, shop: 800 }
SITE_EXTRA = { book: 160, member: 350, ecom: 350 }
SITE_CAP   = 3500
```

- **1 page:** booking included in €440 (checkbox checked + disabled). Shop CMS, ecom extras, membership disabled.
- **3+ pages:** booking optional +€160.
- Ecom extras only if CMS = shop. Membership only if CMS or shop.
- Apps: price only if ≥1 platform **and** screen count chosen.
- No `snapEight` digit-sum rounding.

Plans on page: Launch / Growth (recommended) / Custom — ranges shown; exact quote after 30‑min call.

---

## Section map (homepage)

1. Hero — 16:9 liquid hover portraits, solid `#15389B` field, 2 CTAs  
2. Selected work — 3 cases, **2 stats** each (build time + price range; no Live/sales third stat)  
3. About  
4. Process — 4 cards (Korak 01–04 / Step 01–04), aligned title baselines  
5. What I do (websites + apps)  
6. Industries  
7. Pricing + calculator + inquiry form  
8. Testimonials / feedback  
9. FAQ  
10. Footer CTA + legal links  

---

## Hard constraints (from user / prior agents)

- Do **not** edit hero JPG pixels or liquid/hover brush (`initLiquid`, `BASE_SRC` / `CLEAR_SRC`) unless hover fit must match CSS.
- Do **not** invent testimonial facts or prices.
- PowerShell: no `&&` chaining.
- Never echo Resend / secrets.
- Commit only when user asks; push only when asked.
- G8 brand rules win over generic AI UI defaults.

---

## Cursor setup on a new account

1. Clone `https://github.com/goransantic92-hue/G8FLOW.git` (or Cursor share/import).
2. Open repo root as workspace.
3. Confirm plugins if needed: Figma, Webflow, GSAP skills, browser MCP.
4. Read in order:
   - `docs/g8-flow/CONTINUE.md` (this file)
   - `.cursor/rules/g8-flow-brand.mdc`, `g8-flow-sections.mdc`, `g8-flow-copy.mdc`, `g8-flow-qa.mdc`
   - `.cursor/skills/g8-flow-portfolio/SKILL.md`
   - `docs/g8-flow/BRIEF.md`
5. Paste secrets into `.env` from `.env.example` (user supplies keys).
6. Edit **`lumora/`** for production UI/copy. Prefer Cursor Agent + rules over inventing a Next rewrite unless the user asks.

Claude Missions (`AGENTS.md`, `claude-missions/`) remain optional orchestration; they must not overwrite G8 section order or brand tokens.

---

## Recent shipped work (context)

- Full SR copy rewrite (Vi, process cards SiteLab-style, about/pricing phrasing)
- Process card title baseline alignment
- Work stats: drop 3rd “Live / sales” column
- Calculator rebuild: flat add-ons; 1-page booking included
- Onest self-host with latin-ext + Cyrillic so SR matches EN rendering
- Hero 16:9 portraits, solid blue field

When updating docs after a large change, bump the “Last sync” date at the top of this file and note the git SHA.
