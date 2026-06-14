# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # Start dev server at localhost:3000
yarn build      # Production build
yarn start      # Start production server (requires build first)
```

There are no test or lint scripts defined in package.json. ESLint and Prettier run automatically as a pre-commit hook via husky/lint-staged (scoped to `src/**` — note the actual source files are in the root, not `src/`, so the hooks effectively don't fire on most changes).

## Architecture

Single-page Next.js 13 app with a query-param-based router (`/?section=cv`, `/?section=contact`, default = home). All routing is shallow and client-side — there is only one page (`pages/index.tsx`).

**Layout split:**
- Desktop (≥875px): left half is the UI panel (sidebar + content), right half is a full-height Three.js canvas with an animated 3D background (`Portfoliobackground.tsx`). Mouse position is tracked via `useMove` and passed to the 3D scene to drive parallax.
- Mobile (<875px): canvas is hidden; UI takes full width with a solid background color.

**Component tree:**
- `App` — root component; owns theme, dark mode state, layout detection, mouse tracking. Wraps everything in `styled-components` `ThemeProvider` with a `CustomTheme`.
- `Sidebar` — fixed icon nav (Home, Contact, CV, GitHub). Active state derived from `router.query.section`.
- `WebContent` — content panel wrapper with title/subtitle slots.
- Section content components: `HomeContent`, `CVContent`, `ContactContent` — swapped in based on `router.query.section` via `viewMap()` in `App`.
- `Portfoliobackground` / `Particle` / `particlesFactory` — Three.js/R3F scene loaded inside a `<Suspense>` boundary.

**Styling:** styled-components throughout. Theme colors and fonts are defined in `App.tsx` (`CustomTheme` interface). Global styles in `styles/globals.css`; font imports in `styles/fonts.css`. The `.babelrc` includes `babel-plugin-styled-components` for SSR class name stability.

**Types:** Custom global type declarations live in `@types/alltypes.d.ts`.

**Deployment:** Vercel. Analytics via `@vercel/analytics`.
