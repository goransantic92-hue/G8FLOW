---
name: g8-flow-portfolio
description: >-
  Build or revise the G8 Flow freelancer portfolio (live static site in lumora/).
  Use when implementing homepage sections, hero liquid portraits, process cards,
  featured work videos, testimonials, pricing calculator, CTA, or footer.
  Enforces brand tokens, Hormozi/local SR copy, and filtered QA.
---

# G8 Flow Portfolio Skill

## When to use

Any UI/copy/motion work on the **live** G8 Flow site (`lumora/`).

## Before coding

1. Read `docs/g8-flow/CONTINUE.md` (handoff) then `.cursor/rules/g8-flow-brand.mdc`, `g8-flow-sections.mdc`, `g8-flow-copy.mdc`, `g8-flow-qa.mdc`.
2. Edit **`lumora/index.html`** and/or **`lumora/i18n.js`** for production. Do not assume `src/` Next.js is live.
3. Confirm materials (`docs/g8-flow/materials-needed.md`). Do not invent client quotes or prices.
4. Prefer Figma/Webflow MCP and GSAP skills when relevant.

## Stack (live)

- Static HTML/CSS/JS in `lumora/`
- i18n: `lumora/i18n.js`
- Deploy: Vercel `outputDirectory: lumora`
- Form: `api/inquiry.js` + Resend

## Implementation order (if rebuilding a section)

1. Tokens + Onest/Gebuk (already wired)
2. Shell / nav / footer
3. Hero (liquid portraits — do not re-encode JPGs unless asked)
4. Work → About → Process
5. Solutions / industries
6. Pricing calculator + form
7. Feedback → FAQ → closing CTA
8. SEO / a11y / reduced-motion pass

## Hero contract (current)

- 16:9 base + clear portraits; liquid hover reveal
- Solid `#15389B` field (no side overlays)
- Exactly 2 CTAs
- Cache-bust query on assets when swapping files

## Process cards

- Four steps with Korak/Step labels; title block reserved height so body copy shares a baseline
- SR copy: Razgovor → Dogovor pre izrade → Izrada i dorada → Lansiranje i podrška

## Featured work

- Autoplay muted scroll videos; pause offscreen
- Two stats only (build time + package range)
- Cases: busystrong90.com, lenkolino.shop, thrivewithmarina.vercel.app

## Pricing calculator

See `docs/g8-flow/content/pricing.md` — flat EUR add-ons; 1-page booking included; never lower price.

## Definition of done (section)

- Matches section job in rules + CONTINUE.md
- Uses only G8 color mix
- EN + SR keys updated together
- Mobile + reduced-motion checked
- No placeholder lorem unless user approved WIP
