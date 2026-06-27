# Aman Bhamboo — Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS v4. Light-mode UI with glassmorphism cards, project case studies, live Tableau dashboard embeds, and SEO optimization.

## Tech Stack

**Frontend:** React 18, Vite 5, Tailwind CSS v4, Lucide React, React Icons  
**Backend:** Express, PostgreSQL (Neon)  
**Deployment:** Vercel (serverless API + static SPA)

## Features

- Glassmorphism project & skill cards with theme-aligned hover colors (electric blue palette)
- Projects overview with image cards, Github/Tableau links, and click-to-open detail view
- Project detail view with left sidebar (project identity + link box)
- Live Tableau dashboard embed (full-screen modal on desktop; clickable links on mobile)
- Skills carousel with category filters and flip animation
- Animated typing effect in hero section
- Infinite scrolling tech strip with brand icons
- Publications detail view with crossfade transitions
- Contact form with PostgreSQL persistence (no email)
- Background star-fall animation (electric blue)
- Background music player (local mp3)
- SEO: meta tags, Open Graph, Twitter Cards, JSON-LD, sitemap, robots.txt
- Code-split bundles (vendor, UI icons, app)
- Font optimization (async Inter with display=swap)

## Color Palette

| Role       | Color                         |
|------------|-------------------------------|
| Background | `#fdfbf7` (warm off-white)    |
| Foreground | `#24272c` (deep charcoal)     |
| Primary    | `#2962ff` (electric blue)     |
| Border     | `#eeebe5` (warm border)       |

## Getting Started

```bash
npm install

# Start dev server (frontend)
npm run dev

# Start backend (separate terminal)
cd backend && npm install && node server.js
```

Vite dev server proxies `/api` requests to `localhost:5050`.

## Build

```bash
npm run build
```

Output goes to `dist/`. Produces split chunks: `vendor` (React), `ui` (icons), `index` (app code).

## Environment Variables (`.env`)

```
DATABASE_URL=postgresql://...
```

## Project Structure

```
├── api/               # Vercel serverless entry point
├── backend/           # Express server, routes, DB config
├── public/            # Static assets, resume, favicon, sitemap
├── src/
│   ├── components/    # React components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utilities
│   └── main.jsx       # App entry
├── index.html         # HTML shell with SEO meta tags
└── vercel.json        # Vercel deployment config
```

## Deployment

Deployed on Vercel. `vercel.json` rewrites `/api/*` to the serverless function and all other routes to `index.html` for SPA support.
