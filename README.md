# Venkatsai Caterers Website

Responsive React + Vite website with the supplied logo and existing visual design.

## Run locally
1. Install Node.js LTS.
2. Extract this ZIP.
3. Open the project folder in VS Code.
4. Run `npm install`.
5. Run `npm run dev` and open the local URL printed by Vite.

## Build / deploy
Run `npm run build`. Vite creates the production site in `dist/`.

- Vercel: deploy the project root; `vercel.json` provides React Router fallback.
- cPanel/Apache: upload the contents of `dist/` into `public_html`. The included `public/.htaccess` is copied to the build output and provides the route fallback.

## SEO included
- Page-specific title and meta description for Home, Menu, Packages, About and Contact.
- Canonical URLs, robots directives, Open Graph and Twitter metadata updated on route changes.
- Caterer JSON-LD structured data.
- `public/robots.txt` points to the XML sitemap.
- `public/sitemap.xml` lists the five public pages.
- Vercel domain is consistently set to `https://venkatasaicaterers.vercel.app`.

## Owner details that must be confirmed before publishing
The uploaded source did not contain verified business contact details or final package/menu data. The missing values were restored with clearly marked placeholders/sample content so the application has the variables its components need.

Edit the top section of `src/main.jsx`:
- `phoneNumber`
- `waNumber` (digits only, including country code)
- `businessEmail`
- `services`, `menuData` and `packages`

Also replace the placeholder business address, sample testimonial, and sample menu/package inclusions with accurate owner-approved information. Do not publish the sample WhatsApp number or sample package information as confirmed facts.

## Logo
The supplied logo remains at `public/images/logo.png` and is referenced as `/images/logo.png` (Vite public asset path).
