# Goran Portfolio — G8 Flow

Cursor-first portfolio project for **G8 Flow**.

**Status (2026-09):** Live static site in `lumora/`, deployed on Vercel. Not a greenfield Next.js homepage.

## Continue elsewhere

→ **`docs/g8-flow/CONTINUE.md`** (clone, env, edit targets, calculator, locale rules).

## Design & agent context

| Resource | Path |
|----------|------|
| Handoff (other Cursor account) | `docs/g8-flow/CONTINUE.md` |
| Brand / sections / copy / QA rules | `.cursor/rules/g8-flow-*.mdc` |
| Missions ↔ Cursor bridge | `.cursor/rules/missions-cursor-bridge.mdc` |
| Portfolio build skill | `.cursor/skills/g8-flow-portfolio/SKILL.md` |
| Product brief | `docs/g8-flow/BRIEF.md` |
| Filtered QA checklists | `docs/g8-flow/qa-checklists.md` |
| Materials status | `docs/g8-flow/materials-needed.md` |
| Content drafts | `docs/g8-flow/content/` |

## Production surface

| Path | Notes |
|------|--------|
| `lumora/index.html` | Homepage markup + CSS + JS |
| `lumora/i18n.js` | EN/SR dictionaries |
| `lumora/privacy.html`, `terms.html` | Legal |
| `api/inquiry.js` | Form → Resend |
| `vercel.json` | `outputDirectory: "lumora"` |

## MCP & skills (UI/UX)

When plugins are enabled: Figma, Webflow, GSAP skills, browser MCP. Prefer editing `lumora/` over rewriting in Next unless the user asks.

## Claude Missions

`claude-missions/` and `AGENTS.md` remain optional execution scaffolding. When building this site in Cursor, **G8 Flow rules + CONTINUE.md override generic UI defaults and stale Next-only docs**.

## Local

```bash
npx --yes serve lumora
```
