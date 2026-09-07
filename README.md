# UrbanEra combined website

Company website with an integrated residential-interior portfolio. Available in Slovak, English, Turkish, Russian, Azerbaijani and Arabic.

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

- `components/home-page.tsx`: company homepage and portfolio entry point.
- `app/portfolio/`: project overview, all room images, accessible enlargement dialog, videos, and document links.
- `lib/portfolio-data.ts`: original project names, rooms, Drive IDs, and archive URL.
- `public/portfolio/`: four supplied videos.
- `public/architecture.webp`: generated illustrative architectural concept, labelled on the homepage.

Images continue using the original public Google Drive thumbnail service. Availability therefore depends on those files retaining their existing sharing settings. Failed previews show a fallback and the original files remain accessible through project links. Supplied videos have no caption tracks.

## Validation

Production build and TypeScript check pass. Lint passes for the changed application files. All 80 unique portfolio image URLs returned valid image responses during integration. Local portfolio and video requests returned HTTP 200. Interactive browser testing was not requested.

Contact details supplied by the owner: UrbanEra s.r.o., +421 908 375 787 (phone and WhatsApp), urbanera@proton.me. Before a public business launch, add any remaining company registration/legal details and confirm the copy and project descriptions. The site does not process contact submissions or property transactions.

## Languages and contact

Slovak uses / and /portfolio. The other languages use /en, /tr, /ru, /az, /ar and their /portfolio pages. /sk is also accepted and has the Slovak root as canonical. Language links preserve the current page. Arabic uses document and component direction settings; phone numbers and email remain left-to-right.

Translations are in lib/translations.json; language metadata is in lib/site-metadata.ts. middleware.ts determines locale from the URL and overwrites the internal locale header on every page request. components/contact-section.tsx owns the contact links.

With the development server running, run node scripts/check-locales.mjs to check all 12 primary routes, translations, contact links, language navigation, direction and unsupported-language handling. Set URBANERA_TEST_URL to check another local server.

