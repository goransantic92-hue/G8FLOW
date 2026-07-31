# Goran Portfolio — G8 Flow

Cursor-first portfolio project for **G8 Flow**.

## Design & agent context

| Resource | Path |
|----------|------|
| Brand / sections / copy / QA rules | `.cursor/rules/g8-flow-*.mdc` |
| Missions ↔ Cursor bridge | `.cursor/rules/missions-cursor-bridge.mdc` |
| Portfolio build skill | `.cursor/skills/g8-flow-portfolio/SKILL.md` |
| Product brief | `docs/g8-flow/BRIEF.md` |
| Filtered QA checklists | `docs/g8-flow/qa-checklists.md` |
| Materials still needed | `docs/g8-flow/materials-needed.md` |
| Original briefs | `docs/g8-flow/references/` |

## MCP & skills (UI/UX)

Already available in this Cursor workspace when plugins are enabled:

- **Figma** — design read/write, design-to-code
- **Webflow** — reference / CMS / code components if used
- **GSAP skills** (plugin cache) — scroll, timeline, React hooks, performance

Enable those plugins in Cursor if any are disabled. No extra MCP is required to start the Next.js portfolio; add analytics/form providers later via `/mission-connect` or env setup when chosen.

## Claude Missions

`claude-missions/` and `AGENTS.md` remain the multi-agent execution scaffold. When building this site in Cursor, **G8 Flow rules override generic UI defaults**.

## App status

Clean slate. Sections will be built **one at a time** — wait for user confirmation before the next.

```bash
npm run dev
```

Kept: `.cursor/rules`, `docs/g8-flow`, `public/images/goran-hero.png`, Next.js + deps.
Removed: all homepage sections, i18n routes, privacy/terms pages.

