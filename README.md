# Tip Calculator / Bill Splitter

A React + Vite + Tailwind CSS frontend project for splitting bills and calculating tips.
<img width="1540" height="823" alt="Screenshot 2026-05-27 224452" src="https://github.com/user-attachments/assets/10af32da-e0c3-4813-b53c-80a40e3fd77c" />

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
