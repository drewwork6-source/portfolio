# Developer Portfolio — Drew Seidel

A fast, responsive personal portfolio site built with **plain HTML, CSS, and JavaScript** — no frameworks, no build step. Project and skill data are driven from a single JavaScript file so the site is easy to update.

## Features
- Fully responsive, mobile-first layout
- Data-driven projects and skills (edit one array in `script.js`)
- Smooth-scroll navigation with a mobile menu
- Zero dependencies — deploys anywhere, including GitHub Pages

## Run locally
No build tools required. Either:

```bash
# Option A: just open the file
open index.html

# Option B: serve it (recommended)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages
1. Push this folder to a repo (e.g. `drew-portfolio`).
2. In the repo: **Settings → Pages → Build from branch → main → /(root)**.
3. Your site goes live at `https://<username>.github.io/drew-portfolio/`.

## Customize
- **Projects / skills:** edit the `projects` and `skills` arrays in `script.js`.
- **Colors:** tweak the CSS variables at the top of `styles.css`.
- **Contact info:** update the links in the Contact section of `index.html`.

## Tech
HTML5 · CSS3 (custom properties, grid, flexbox) · Vanilla JavaScript

---
Built by Drew Seidel · Fort Myers, FL
