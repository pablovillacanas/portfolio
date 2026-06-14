# CLAUDE.md

This file provides guidance when working with code in this repository or editing codebase files.

## Architecture

Next.js 13 with the **pages router**. Three routes: `/` (home), `/cv`, `/freelance`. Deployed on Vercel with `@vercel/analytics`.

**Pages:**

- `pages/index.tsx` — Minimal landing: avatar, name, contact links.
- `pages/cv.tsx` — Full CV (static content, no data fetching).
- `pages/freelance.tsx` — Freelance consulting page; uses `getStaticProps` to load projects from `content/projects.md`.

**Content / data layer:**

- `content/projects.md` — Source of truth for portfolio projects. Custom block format: blocks separated by `---`, each starting with `## Title` and `- key: value` fields (YAML-ish, supports `>` folded and `|` literal scalars).
- `lib/projects.ts` — Dependency-free custom parser for that format. A project is only returned if `mostrar_en_portfolio: si`; `exponer_cliente: si` controls whether the client name is shown publicly.
- To add a project: add a block to `content/projects.md` following the existing format. The `add-project` skill automates this.

**Components:**

- `ScrollReveal` — IntersectionObserver-based animation wrapper. Three variants: `rise`, `rise-lg`, `fade`. Accepts `delay` (ms) for stagger effects. Stops observing after first trigger (plays once).
- `ScrollProgress` — Thin amber progress bar fixed at the top of the viewport.
- `DevNav` — Floating page nav rendered only in `development` mode (`process.env.NODE_ENV !== "development"` short-circuits to null in prod).

**Styling:**

- Design system: **Graphite & Amber** — dark graphite background (`#15171c`), amber accent (`#e3a857`).
- All CSS variables (colors, fonts, container width, gutter) are defined in `styles/globals.css` under `:root`.
- Fonts: `Fraunces` (display/headings, `--font-display`), `Work Sans` (body, `--font-body`), `Space Mono` (mono/labels, `--font-mono`).
- Global utility classes live in `globals.css`: `.container`, `.bgGrid`, `.nav`, `.navMark`, `.navLinks`, `.btn`, `.btnSolid`, `.sectionLabel`, `.lede`, `.eyebrow`, `.footer`, `.footerInner`, `.footerLinks`, `.reveal`, `.revealLg`, `.revealFade`, `.revealVisible`, `.grid2`, `.grid3`.
- Page-specific styles use CSS Modules (`Cv.module.css`, `Freelance.module.css`, `Home.module.css`).

**Path alias:** `@/` maps to the repo root (configured via `tsconfig.json`).

**`bgGrid`:** A fixed full-viewport `div` rendered on every page for the subtle dot-grid background texture. It sits at `z-index: 0` and is purely decorative.

## Deployment

Vercel. No special build steps — standard `next build`. The `public/CV-PabloVillacanas.pdf` file is linked from the CV page as a downloadable asset; update it there when the PDF changes.
