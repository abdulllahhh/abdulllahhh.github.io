# Design decisions

This document explains why the site looks and is built the way it is, tied specifically to the engineering profile in the CV — not generic portfolio defaults.

## Visual direction

**Palette — deep navy-slate, not black-and-neon or cream-and-serif.**
Generic AI-generated portfolios cluster around a few looks: warm cream with a terracotta accent, or near-black with a single neon accent, or a hairline-rule broadsheet layout. None of those say "backend engineer." The palette here (`#0B1120` background, `#3B5FE0` / `#5C7FFF` accent blue, a muted signal green for status/achievement markers) reads closer to a systems dashboard or an API console than a personal blog — appropriate for someone whose actual work is ledgers, CQRS pipelines, and credit-metering systems.

**Typography — Space Grotesk + Inter + JetBrains Mono.**
Three roles, deliberately: Space Grotesk (display/headings) has a technical, geometric character without being a cliché "startup" font. Inter carries body copy because it's simply the most legible workhorse for long-form technical reading. JetBrains Mono is used for *structural* elements — the `// eyebrow` labels above each section heading, tech badges, dates — not decoration. The mono usage is meant to read like inline code comments or log timestamps, which fits someone whose daily tools are terminals and API clients.

**The `// eyebrow` motif as the signature element.**
Every section is introduced with a small monospace label like `// projects` or `// engineering timeline`, styled like a code comment. This is the one deliberately "loud" idea in an otherwise restrained design — it's a small, consistent signature rather than a splashy hero animation, and it's directly drawn from the subject's own vernacular (comments in source code) rather than a decorative flourish.

**Numbered markers were deliberately *not* used**, except implicitly in the Engineering Timeline, where order is real chronological information (education → graduation project → military service → training → freelance → current role). Elsewhere — Skills, Projects, Awards — order doesn't carry meaning, so no `01 / 02 / 03` numbering was added just for visual rhythm.

**Motion — restrained, viewport-triggered fades and lifts only.**
Framer Motion is used for a hero entry sequence and per-section scroll reveals (`whileInView`), plus a small hover lift on cards and buttons. There's no parallax, no scroll-jacking, no looping ambient animation. Recruiters and senior engineers skimming a portfolio are working, not browsing for delight — motion here supports readability (draws the eye to the next block of content) rather than performing.

## Structural decisions

**Project cards scale in depth by project size (`flagship` / `major` / `standard`), not by template.**
The ERP system and the AI image-generation platform get full engineering write-ups (business problem, engineering problems solved, architecture, implementation details, lessons learned) because they're the most substantial, highest-stakes work. Skinet — explicitly a pattern-practice training project — gets a shorter card, because padding it to the same length as the ERP write-up would misrepresent its actual scope. This directly follows the CV's own framing ("training project to internalize patterns") rather than treating every project as equally weighty.

**Bookify appears in both Professional Training and Projects, cross-linked.**
It's the DEPI capstone, so it belongs in the training narrative (why DEPI mattered), but it's also a real project with its own architecture and technical decisions, so it also gets a project card — deliberately shorter, since the deep narrative already lives in the Training section, and a link connects the two instead of duplicating content.

**Military service sits inline in the Engineering Timeline as a dated entry, not a gap.**
It's presented the same way as any other timeline entry — dated, iconified, one sentence of context — immediately followed by the return to backend work (Skinet, then DEPI). This was a specific instruction from the brief, and it matters for a CV where the timeline would otherwise show an unexplained 2023–2025 gap between graduation and the next project.

**Skills are grouped by how the work actually breaks down, not by a generic "Frontend / Backend / Other" split.**
Categories mirror the CV's own structure — Backend, Architecture & Design, Data/Caching/Infra, Frontend, Machine Learning, Working Style — so a technical reviewer can quickly locate exactly the competency they're screening for (e.g. a hiring manager scanning specifically for CQRS/DDD experience finds it under "Architecture & Design," not buried in a flat tag list).

**No invented content.**
Every skill, achievement, metric, and project detail traces back to the source CV. Where the CV didn't specify something (a GitHub link for the ERP or AI platform, a resume PDF, screenshots, architecture diagrams), the site says so honestly — "Private / client project," a labeled placeholder for a diagram, a wired-but-unfilled resume download — rather than fabricating a link or number to look more complete.

## Technical decisions

- **Data/type separation from components**: every section component reads from a typed data file in `src/data/`, so updating content never requires touching JSX/animation code, and a future reviewer can verify claims against a single source of truth.
- **`darkMode: 'class'` with system-preference default**: respects the reviewer's OS setting on first load (a small but real signal of attention to detail), while remaining toggleable and persisted.
- **Single-page app with React Router already wired**: there's only one route today, but Router is in place so a future `/projects/:id` deep-link page (for sharing a single project) is a small addition, not a rewrite.
