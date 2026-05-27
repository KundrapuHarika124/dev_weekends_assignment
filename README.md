# Tip Calculator / Bill Splitter

A React + Vite + Tailwind CSS frontend project for splitting bills and calculating tips.

## Live Demo

https://tipcalculator000.netlify.app/

## Setup

1. Install dependencies.
2. Run the development server.

```bash
npm install
npm run dev
```

## Features

- Bill amount input with validation
- Pre-set tip buttons and a custom tip field
- Number of people input with validation
- Live tip, total, and per-person calculations
- Responsive two-column layout on desktop and stacked layout on mobile

## Deployment (Netlify)

This project is configured for Netlify with:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect support to `index.html`

If you connect this repository to Netlify, these settings are picked up from `netlify.toml`.