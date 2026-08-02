# Far Away Journey to Japan

A sponsorship-style event website built with React 19, TanStack Start, and Tailwind CSS 4, featuring the journey map, workshops, rounds, prizes, sponsors, and FAQ sections for the "Far Away Journey to Japan" initiative.

## Tech Stack

* React 19 + TypeScript
* TanStack Start / Router / Query
* Tailwind CSS 4 + shadcn/ui components
* Vite 7, deployed to Cloudflare Pages (see `wrangler.toml` and `vercel.json`)

## Getting Started

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

Lint and format:

```bash
npm run lint
npm run format
```

## Project Structure

* `src/routes/` - Page routes (index, about, faq, prizes, rounds, sponsors, workshops).
* `src/components/` - Reusable UI and feature components.
* `src/assets/` - Images and the sponsorship deck.
* `public/` - Static assets served as-is.
* `scripts/post-build.cjs` - Post-build step run by `npm run build`.

## Deployment

The project includes configuration for both Vercel (`vercel.json`) and Cloudflare (`wrangler.toml`, `public/_headers`, `public/_routes.json`).