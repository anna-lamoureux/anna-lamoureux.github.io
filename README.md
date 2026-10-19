# anna-lamoureux.github.io

My personal site. Version 3 is a small React app built with Vite.

```bash
npm install
npm run dev      # local preview with hot reload
npm run build    # type-checks, then builds to dist/
```

## Where things are

- `index.html` is the page shell and loads the fonts.
- `src/content.ts` holds all of the text on the site.
- `src/components/` has one file per piece of the page, each with its own stylesheet.
- `src/styles/tokens.css` has the colors (light and dark) and fonts as CSS variables.
- `src/styles/global.css` has the page-wide styles.

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on every push to
`master`. For that to work, the repository's Pages source has to be set to "GitHub Actions"
(Settings > Pages).

Earlier versions (an Angular app) are in the history of `master` and on the `2.0` branch.
