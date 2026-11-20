# Venkatsai Caterers Website

A responsive multi-page React + Vite website based on the supplied Venkatsai Caterers brief and official logo.

## Run locally
1. Install Node.js (LTS).
2. Extract this ZIP.
3. Open the project folder in VS Code or another code editor.
4. Run `npm install` then `npm run dev`.
5. Open the local URL shown by Vite.

## Build / deploy
Run `npm run build`. The production website is generated in `dist/`. Upload the contents of `dist/` to a static hosting service or cPanel `public_html` folder. Configure SPA fallback to `index.html` for React Router routes.

## Owner edits
- Official logo: `public/images/logo.png` (kept unchanged from the uploaded asset).
- Page copy, service cards, menu categories, package inclusions and prices: `src/main.jsx`.
- Design, responsive behavior and theme colors: `src/style.css` (CSS variables at the top).
- Replace `waNumber`, `phoneNumber`, email and address placeholders in `src/main.jsx` before going live.
- Replace sample testimonial text with real reviews and use licensed/owned food photography.

## Website editor compatibility
This is an editable React/Vite source project. A visual builder that only imports HTML/CSS may not ingest React components as individually draggable blocks; use the builder's code/project import feature if it supports React/Vite, or edit the source in a code editor. The website itself is not locked or flattened.
