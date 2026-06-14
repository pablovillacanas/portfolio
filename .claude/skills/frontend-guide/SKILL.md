---
name: frontend-guide
description: >
  Reference for the portfolio's frontend architecture (Next.js pages router, Graphite & Amber design system, CSS Modules, components).
  TRIGGER — read BEFORE editing any of these files or directories: pages/, components/, styles/, lib/, content/projects.md.
  Also trigger when the task involves: layout, styling, CSS variables, fonts, animations, ScrollReveal, ScrollProgress, DevNav, bgGrid, or the design system.
  SKIP when the task is purely about git, config files, or non-frontend tooling.
---

# Frontend Architecture — Portfolio

Read this before editing any frontend file. It documents the conventions this project enforces.

## Stack

- **Framework**: Next.js 13, pages router (NOT app router). Three routes: `/` → `pages/index.tsx`, `/cv` → `pages/cv.tsx`, `/freelance` → `pages/freelance.tsx`.
- **Analytics**: `@vercel/analytics` injected in `pages/_app.tsx`.
- **Path alias**: `@/` maps to the repo root (`tsconfig.json`).
- **Deployment**: Vercel. `next.config.js` sets `ignoreDuringBuilds: true` for ESLint — linting does not block builds.

## Design System: Graphite & Amber

All tokens are CSS variables defined in `styles/globals.css` under `:root`. Never hardcode colors or fonts — always use the variable.

| Variable | Value | Use |
|---|---|---|
| `--color-bg` | `#15171c` | Page background (graphite) |
| `--color-amber` | `#e3a857` | Primary accent |
| `--font-display` | Fraunces | Headings / display text |
| `--font-body` | Work Sans | Body copy |
| `--font-mono` | Space Mono | Labels, code, mono |
| `--container-width` | (set in globals) | Max content width |
| `--gutter` | (set in globals) | Horizontal padding |

## Global Utility Classes (`styles/globals.css`)

These classes are available globally — do NOT re-declare them in a CSS Module:

- `.container` — max-width centered wrapper
- `.bgGrid` — fixed full-viewport dot-grid texture (z-index 0, purely decorative; rendered on every page)
- `.nav`, `.navMark`, `.navLinks` — navigation bar
- `.btn`, `.btnSolid` — button styles
- `.sectionLabel`, `.lede`, `.eyebrow` — typographic roles
- `.footer`, `.footerInner`, `.footerLinks` — footer layout
- `.reveal`, `.revealLg`, `.revealFade`, `.revealVisible` — animation states (driven by ScrollReveal)
- `.grid2`, `.grid3` — two/three-column grid layouts

## Page-Specific Styles

Use CSS Modules for anything not in the list above:

| Module | Used by |
|---|---|
| `styles/Home.module.css` | `pages/index.tsx` |
| `styles/Cv.module.css` | `pages/cv.tsx` |
| `styles/Freelance.module.css` | `pages/freelance.tsx` |

## Components

### `ScrollReveal`

IntersectionObserver wrapper that plays a CSS animation once and then unobserves.

```tsx
<ScrollReveal variant="rise" delay={100}>
  <p>Content</p>
</ScrollReveal>
```

- `variant`: `"rise"` | `"rise-lg"` | `"fade"`
- `delay`: milliseconds, used for stagger effects
- Adds `.reveal` / `.revealLg` / `.revealFade` and toggles `.revealVisible` on intersection
- **Plays once** — stops observing after first trigger

### `ScrollProgress`

Thin amber progress bar fixed at the top of the viewport. No props. Drop it anywhere in a page and it self-manages.

### `DevNav`

Floating page-section nav. Renders **only in development** (`process.env.NODE_ENV !== "production"`). Invisible in prod — no need to remove it from pages.

## Data Layer

- `content/projects.md` — source of truth for portfolio projects. Custom block format: blocks separated by `---`, each starting with `## Title` and `- key: value` fields.
- `lib/projects.ts` — dependency-free parser for the above format. Filters by `mostrar_en_portfolio: si`; hides client name unless `exponer_cliente: si`.
- Data is loaded in `pages/freelance.tsx` via `getStaticProps` (static generation, no runtime fetching).

## PDF Asset

`public/CV-PabloVillacanas.pdf` is linked from `pages/cv.tsx`. Update the file in `public/` when the PDF changes; the link is hardcoded.

## Key Conventions

1. Use CSS variables from `globals.css` — never hardcode colors or fonts.
2. Keep page-specific styles in the corresponding CSS Module; never add page-specific rules to `globals.css`.
3. Add animations via `ScrollReveal` — do not write new IntersectionObserver logic.
4. `bgGrid` is rendered in the layout/page wrapper — do not add another one.
5. `DevNav` is dev-only; production users will never see it.
6. `getStaticProps` is the only data-fetching pattern in this codebase — do not introduce `getServerSideProps` or client-side fetching without discussion.
