# Aman Bhamboo — Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS v4. Features a polished light-mode UI, custom cursor, SEO optimization, and a contact backend.

## Tech Stack

**Frontend:** React 18, Vite 5, Tailwind CSS v4, Lucide React, React Icons, React Helmet Async  
**Backend:** Express, PostgreSQL (Neon), Nodemailer  
**Deployment:** Vercel (serverless API + static SPA)

## Features

- Custom cursor (dot + ring) with hover detection on text and interactive elements
- Animated typing effect in the hero section
- Infinite scrolling tech strip with brand icons
- Smooth scroll snap sections (Hero, About, Skills, Projects, Publications, Contact)
- Dark/light mode removed — always light mode with warm off-white palette
- Responsive design with mobile hamburger menu
- Active section highlight in navbar
- Publications detail view with crossfade transitions
- Contact form with PostgreSQL persistence
- SEO: meta tags, Open Graph, Twitter Cards, JSON-LD structured data, sitemap, robots.txt
- Background star-fall animation
- Background music player (local mp3)
- Lazy-loaded project images

## Color Palette

| Role       | Color |
|------------|-------|
| Background | `#fdfbf7` (warm off-white) |
| Foreground | `#24272c` (deep charcoal) |
| Primary    | `#2962ff` (electric blue) |
| Border     | `#eeebe5` (warm border) |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (frontend)
npm run dev

# Start backend (separate terminal)
cd backend && npm install && node server.js
```

The Vite dev server proxies `/api` requests to `localhost:5050`.

## Build

```bash
npm run build
```

Output goes to `dist/`.

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

Deployed on Vercel. The `vercel.json` rewrites `/api/*` to the serverless function and all other routes to `index.html` for SPA support.
