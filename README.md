# Abdullah Ibrahim — Backend / .NET Engineer Portfolio

A SaaS-landing-page-style portfolio built with React + TypeScript + Vite, generated entirely from the source CV. See `DESIGN_DECISIONS.md` for the reasoning behind every major choice.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS (utility styling, `darkMode: 'class'`)
- Framer Motion (subtle scroll/entry animation only)
- Lucide React (icons)
- React Router (single route today; wired for growth)
- React Helmet Async (SEO meta tags)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> docs/
npm run preview   # preview the production build locally
```

## Adding your resume

The "Download Resume" buttons already link to `/resume/Abdullah-Ibrahim-Resume.pdf`.
Drop your resume PDF into `public/resume/` with that exact filename and it will work immediately — no code changes needed.

## Editing content

All content lives in `src/data/*.ts`, typed against `src/types/index.ts`. There is no content inside the components themselves — to update a project, achievement, skill, or timeline entry, edit the corresponding data file only:

- `profile.ts` — name, title, summary, contact links
- `skills.ts` — categorized skill groups
- `experience.ts` — work history
- `training.ts` — DEPI program details
- `projects.ts` — all project case studies
- `timeline.ts` — the engineering timeline
- `awards.ts` — awards & recognition
- `education.ts` — formal education

## Deployment

### GitHub Pages (as `abdulllahhh.github.io`)

Since this deploys as a **user/organization site** (not a project site), it's served from the domain root, so no `base` path change is needed — `vite.config.ts` is already set to `base: '/'`.

1. Push this project to a repo named exactly `abdulllahhh.github.io`.
2. Run `npm run build` and commit the generated `docs/` folder.
3. In the repo's Settings → Pages, set the source to **Deploy from a branch**, branch `main`, folder `/docs`.
4. Your site will be live at `https://abdulllahhh.github.io`.

Do not publish from the repository root. The root `index.html` is Vite's development entry and points to `/src/main.tsx`; GitHub Pages will serve that `.tsx` file with the wrong MIME type instead of bundling it.

> If you later rename the repo to something other than `<username>.github.io`, it becomes a *project* site served at `/<repo-name>/`, and you'll need to set `base: '/<repo-name>/'` in `vite.config.ts`.

### Vercel

1. Push the project to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**. Build command `npm run build`, output directory `docs`.
4. Deploy — Vercel will give you a URL immediately and redeploy on every push.

### Netlify

1. Push the project to GitHub.
2. In Netlify, "Add new site" → "Import an existing project".
3. Build command: `npm run build`. Publish directory: `docs`.
4. Deploy.

## Accessibility & performance notes

- Visible focus rings on all interactive elements (`:focus-visible`).
- `prefers-reduced-motion` is respected — animations collapse to near-instant.
- Dark mode follows system preference by default and is togglable, persisted in `localStorage`.
- Fonts are loaded with `preconnect` and `display=swap` to avoid blocking render.
- Route-level code is minimal (single page) to keep the JS bundle small; Framer Motion animations are viewport-triggered (`whileInView`) so off-screen sections don't animate until needed.
