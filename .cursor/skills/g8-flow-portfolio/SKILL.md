---
name: g8-flow-portfolio
description: >-
  Build or revise the G8 Flow freelancer portfolio (Next.js, Tailwind, GSAP).
  Use when implementing homepage sections, hero particle scroll, Flux-style
  process, featured work scroll demos, coverflow testimonials, pricing, CTA,
  or Capsules-style footer. Enforces brand tokens, Hormozi copy, and filtered QA.
---

# G8 Flow Portfolio Skill

## When to use

Any UI/copy/motion work on the G8 Flow portfolio site.

## Before coding

1. Read `.cursor/rules/g8-flow-brand.mdc`, `g8-flow-sections.mdc`, `g8-flow-copy.mdc`, `g8-flow-qa.mdc`.
2. Confirm materials exist (photo, testimonials, plan prices, CTA URLs). If missing, ask — do not invent client quotes or prices.
3. Prefer Figma MCP for layout sync, GSAP skills for scroll/timelines, Webflow MCP only if exporting/referencing Webflow patterns.

## Implementation order

1. Design tokens (CSS variables) + Britti Sans loading
2. Shell / nav / footer skeleton
3. S1 Hero + particle bridge into S2
4. S2 Process
5. S3 Featured work (3 cases)
6. S4 Testimonials coverflow + caption under active slide
7. S5 Pricing → S6 CTA → polish S7 Footer
8. SEO meta, a11y, reduced-motion, mobile perf pass

## Hero particle contract

- Start: photo visible
- On scroll (ScrollTrigger progress): image → glowing white particles/stars/dust
- Particles travel toward S2 and coalesce into a 3D object filling S2 empty space
- Tech: Canvas or WebGL; avoid heavy DOM particles; degrade gracefully when `prefers-reduced-motion: reduce` (static image + no dissolve)

## Testimonials

- Component reference: `docs/g8-flow/references/coverflow-testimonials.tsx`
- Extend slide model with `name` + `quote` (humanized); render under stage when `active` changes
- Keep 3D coverflow motion; brand colors for stage chrome

## Featured work media

- Prefer iframe or captured scroll video of the live site; autoplay muted; pause offscreen
- Always pair with outcome copy (revenue/leads/UX win), not only aesthetics

## Definition of done (section)

- Matches section job in rules
- Uses only G8 color mix
- Hormozi/humanized copy
- Mobile + reduced-motion checked
- No placeholder lorem unless user approved WIP
