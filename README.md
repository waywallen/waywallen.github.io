# Waywallen website

The official website for [Waywallen](https://github.com/waywallen/waywallen), published at [waywallen.org](https://waywallen.org).

## Requirements

- Node.js 24 LTS
- npm

## Development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run check
npm run build
npm run preview
```

The generated `dist/` directory is not committed.

## Formatting

```bash
npm run format
npm run format:check
```

## Deployment

A push to upstream `main` runs GitHub Actions, builds the static Astro site, uploads the Pages artifact, and deploys it to `waywallen.org`.

### Post-merge deployment step

After the first merge, a maintainer must select GitHub Actions as the publishing source:

**Repository Settings → Pages → Build and deployment → Source → GitHub Actions**

Please also verify that the custom domain remains `waywallen.org` and **Enforce HTTPS** is enabled.
