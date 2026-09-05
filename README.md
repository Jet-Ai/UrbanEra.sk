# UrbanEra combined website

Slovak company website with an integrated residential-interior portfolio at `/portfolio`.

The portfolio comes from [Jet-Ai/UrbanEra](https://github.com/Jet-Ai/UrbanEra), source commit `5e1f541992468a99dbdbcc807e561b74ef61028f`. It preserves all five house concepts, 20 room sets, 80 Google Drive image IDs, four original MP4 files, project folders, and documentation links. The original portfolio remains available at https://urbanera-sro.netlify.app/.

## Run

Use Node.js 22.13 or newer and pnpm:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

The current build targets Sites / Cloudflare Workers. It is not a drop-in replacement for the repository's original static Netlify deployment.

## Content

- `app/page.tsx`: company homepage and portfolio entry point.
- `app/portfolio/`: project overview, all room images, accessible enlargement dialog, videos, and document links.
- `lib/portfolio-data.ts`: original project names, rooms, Drive IDs, and archive URL.
- `public/portfolio/`: four supplied videos.
- `public/architecture.webp`: generated illustrative architectural concept, labelled on the homepage.

Images continue using the original public Google Drive thumbnail service. Availability therefore depends on those files retaining their existing sharing settings. Failed previews show a fallback and the original files remain accessible through project links. Supplied videos have no caption tracks.

## Validation

Production build and TypeScript check pass. Lint passes for the changed application files. All 80 unique portfolio image URLs returned valid image responses during integration. Local portfolio and video requests returned HTTP 200. Interactive browser testing was not requested.

Before a public business launch, supply verified company contact/legal details and confirm the copy and project descriptions. The site does not process contact submissions or property transactions.
