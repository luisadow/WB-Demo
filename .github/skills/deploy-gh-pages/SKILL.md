---
name: deploy-gh-pages
description: "Use when: deploy static site to GitHub Pages via GitHub Actions; set up pages workflow cleanly"
---

# Deploy to GitHub Pages (GitHub Actions)

## Scope
- Use this skill to add or update a GitHub Actions workflow that deploys a static site to GitHub Pages.
- Works for a plain static folder or a built frontend (Vite/Astro/Next export/etc.).

## Inputs to confirm
- Default branch (usually `main`).
- Build command (if any), and output directory.
- Whether the site must be hosted at the repo subpath (e.g. `https://USER.github.io/REPO/`).
- Custom domain (optional).

## Steps
1. Inspect the repo for an existing workflow in `.github/workflows/` and a build system (`package.json`, `pnpm-lock.yaml`, `yarn.lock`).
2. If there is a build step, identify the output directory (common: `dist`, `build`, `out`). Ask if unclear.
3. Ensure GitHub Pages is set to **GitHub Actions** in repo settings.
4. Add or update a workflow at `.github/workflows/deploy-pages.yml`.
5. If the app is served from a repo subpath, ensure the build config sets a correct base path.
6. Explain how to trigger or verify the deployment.

## Default workflow (adjust to project)
Use this as the base and edit `build` and `path` as needed:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      # Uncomment if you have a Node build
      # - name: Setup Node
      #   uses: actions/setup-node@v4
      #   with:
      #     node-version: 20
      #     cache: npm
      # - name: Install
      #   run: npm ci
      # - name: Build
      #   run: npm run build

      # If no build step, set path to the static folder or repo root
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Notes on base path
- GitHub Pages serves project sites under `/REPO/`.
- If the site uses a router or assets with absolute paths, ensure the framework base path is set to `/REPO/` (or use a custom domain).

## Verification
- Check the Actions run for success.
- Visit the Pages URL (Settings -> Pages) to validate assets and routing.
