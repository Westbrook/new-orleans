# The Crescent City

A static, offline-capable New Orleans guide for a family of four, October 14–19, 2026. Home base: Kimpton Hotel Fontenot. Sunday is reserved for the group's existing plantation and swamp tour.

## Preview and build

Requires Node 22+. No package installation is needed; the actual En Rêve controls and all runtime assets are checked in.

```sh
npm run build
npm run check
npm run preview
```

Open http://localhost:4173/. The preview server also exposes the same build at http://localhost:4173/new-orleans/ to test a GitHub project path. `npm run dev` serves the authored `site/` directory; offline caching should be tested with the built `dist/` preview.

## GitHub Pages

Repository: [Westbrook/new-orleans](https://github.com/Westbrook/new-orleans). `main` contains the editable source; `gh-pages` contains the built contents of `dist/` at the branch root.

The live site is [westbrook.github.io/new-orleans](https://westbrook.github.io/new-orleans/). Pages is configured to **Deploy from a branch**, using **gh-pages / (root)**.

To publish an update, run `npm run build` and `npm run check` locally, commit the source to `main`, then copy the contents of `dist/` into the `gh-pages` branch root and commit and push that branch. Include `.nojekyll` and all generated files. Pushing `main` alone does not update the website.

There is no custom GitHub Actions workflow. GitHub still uses its own internal “pages build and deployment” job to serve branch updates; that entry may appear in the Actions tab.

All application links and assets are relative. Hash routes work on repository paths without a server rewrite or custom 404 page. The service worker and manifest are scoped to that path. No API keys, backend, runtime CDN, external fonts or tile server are required.

See [GitHub's branch publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Offline use

1. Open the published HTTPS site on each phone while connected.
2. Choose **Save offline**, then **Save this guide**. Wait for the full-guide confirmation.
3. Reopen the page in airplane mode and check the itinerary and map.
4. Optionally add it to the home screen using the browser's Share/menu action.

The generated service worker caches every local file, including all 46 venue entries, six days, source notes, original list, photo and vector map. It verifies the saved files before claiming success. Saved places and checklist ticks are local to each browser; they are not shared among the group. No booking or purchase is performed by this app.

External directions, reservations, tickets, ride requests, weather and updated concert calendars require internet. Save tour and flight confirmations separately. Browser storage is subject to browser clearing/eviction; physical iOS and Android device behavior should be tested before travel.

On an updated build, reconnect, open **Saved offline → Check saved guide**, then close all tabs for this site and reopen to activate a waiting version. Versioned, path-specific caches prevent a partial update from mixing guide versions.

## Content and sources

- `site/data/venues.json`: 40 distinct original places, the hotel, Sunday’s tour meeting point and four additional options. Each entry has source URLs, a checked date, operating status, hours, advice, address and original note.
- `site/itinerary.js`: six day plans with explicit travel origins/modes and optional alternatives.
- `site/data/original-list.txt`: the unedited supplied list. Duplicate Jacques-Imo's and Maple Leaf mentions are combined in the directory.
- `site/data/map.json`: a local OSM extract with 4,091 road segments and 51 water shapes. Coordinates are `[longitude, latitude]`. Riverbank polygons include optional holes. Map pins are approximate; directions use venue addresses.

Research was checked September 14, 2026. Hours and prices are snapshots. Visit times and transport durations are recommendations/estimates. Future shows are unconfirmed unless explicitly marked as published. Retained historical recommendations are clearly flagged where closed, renamed, relocated or unverified.

Sunday, October 18 follows the supplied booking: Gray Line at 400 Toulouse St, 9am departure, 7 hours 45 minutes, Whitney Plantation and a swamp visit with a lunch stop. The operator requests check-in 15 minutes early (8:45am). The roughly 4:45pm finish is calculated, not a guaranteed return time. Arrival/departure flight times remain flexible.

## Design System and licenses

The UI uses the actual En Rêve components and tokens from the local Design System repository (source commit `fa8c4b1`). Navigation, buttons, links, cards, day and category selectors, dropdowns, saved-place and checklist checkboxes, accordions, badges, alerts, dialogs, search and icons use the bundled components. `site/vendor/en-reve.js` is a self-contained selected-component build; the normal production build does not depend on a sibling checkout. Build `@en-reve/elements` in the Design System checkout, then run `node scripts/vendor.mjs /absolute/path/to/design-system` to refresh it. `site/components.css` applies the trip theme through public tokens and CSS parts. Source MIT and dependency licenses are in `site/vendor/`.

Native anchors remain inside `en-navigation`, as its API requires, and for the brand/skip link. The SVG street map and its pins remain geographic graphics. Print content keeps simple document markup. Selectors use accepted `en-change` state after dispatch; rebuilding a control waits for `updateComplete` before restoring focus. No app-side CSS reaches into component shadow internals. Selection uses fill, text and checkmarks with balanced borders and no shadows. All alerts also use uniform borders without shadows.

Photo: [Jackson Square by APK](https://commons.wikimedia.org/wiki/File:Jackson_Square_-_New_Orleans.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), cropped and color-treated for display. Photo license retained. Map data: [© OpenStreetMap contributors, ODbL](https://www.openstreetmap.org/copyright), September 14, 2026 snapshot, clipped and simplified. Attribution is visible in the app.

## Progress report

The independent report is outside the shipped app and production bundle. The local, Git-ignored `.progress-report/project.json` locates its canonical state and restart instructions. It is intentionally machine-specific and is not part of either published branch. Local preview: http://localhost:4175/. Entering the app with `?progress-report` shows its trusted return link; ordinary visitors do not see it. The parameter cannot supply a return URL or privileged access.
