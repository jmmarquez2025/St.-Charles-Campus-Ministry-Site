# St. Charles Campus Ministry

One-page Astro site for St. Charles Campus Ministry, built for GitHub Pages.

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Content

Edit page content in `src/content/site/home.md`.

Replace placeholder values before launch:

- chaplain name
- chaplain email
- weekly schedule details

The current images are public, official St. Charles media. Sources are tracked in `docs/media-sources.md`. Replace them only with school-approved files or official school media.

No school logo is rendered in the site chrome. The header and footer use text branding plus a red rule so the site does not invent a fake mark.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds on pushes to `main`.

For a project site, output is configured for:

```txt
https://<github-user>.github.io/St.-Charles-Campus-Ministry-Site/
```

For a future custom domain:

1. Add `public/CNAME`.
2. Set `SITE_URL` to the custom domain.
3. Set `BASE_PATH` to `/`.
