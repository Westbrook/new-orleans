# The Crescent City

A static, offline-capable New Orleans guide for a family of four, October 14–19, 2026. Home base: Kimpton Hotel Fontenot. Sunday is reserved for the group's existing plantation and swamp tour.

## Preview and build

Requires Node 22+. No package installation is needed; the actual En Rêve controls and all runtime assets are checked in.

```sh
npm run build
npm run check
npm test
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

The generated service worker caches every local file, including all 45 venue entries, six days, source notes, original list, photo and vector map. It verifies the saved files before claiming success. Saved places and checklist ticks are local to each browser; imported lists and your own saves remain separate. Share and load lists with JSON as described below. No booking or purchase is performed by this app.

External directions, reservations, tickets, ride requests, weather and updated concert calendars require internet. Save tour and flight confirmations separately. Browser storage is subject to browser clearing/eviction; physical iOS and Android device behavior should be tested before travel.

On an updated build, reconnect, open **Saved offline → Check saved guide**, then close all tabs for this site and reopen to activate a waiting version. Versioned, path-specific caches prevent a partial update from mixing guide versions.

## Finding things quickly

The phone navigation remains available at the bottom of every page. Places is the default view; Itinerary is last. Five dates are unscheduled. Only Sunday contains the booked tour, lunch stop, check-in and estimated finish.

Places can be filtered by performance date, neighborhood, category and saved person/state. Performance dates select venues with dated or clearly marked weekly listings, not assigned itinerary stops. Sort by guide order, name, neighborhood or approximate distance from Hotel Fontenot. Sorting works offline and the choice stays on this device. Search accepts accents, apostrophes and multiple words. Map numbers match the list; saved places have their own map view. Venue dialogs show performance details, ticket times and listening links, with a maximum height of 70dvh. Card titles link directly to venue websites. The checklist progress reflects only boxes checked on this device.

See [the visual review](docs/visual-review.md) for the design decisions and validation coverage.

## Content and sources

- `site/data/venues.json`: 39 retained original places, the hotel, Sunday’s tour meeting point and four additional options. Each entry has source URLs, a checked date, operating status, hours, advice, address and original note.
- `site/data/performances.json`: 39 sourced trip-week performance records, artist listening links and coverage notes; see [research evidence](docs/performance-research.md).
- `site/itinerary.js`: six trip dates, with only the fixed Sunday tour scheduled.
- `site/data/original-list.txt`: the unedited supplied list. Duplicate Jacques-Imo's and Maple Leaf mentions are combined in the directory.
- `site/data/map.json`: a local OSM extract with 4,091 road segments and 51 water shapes. Coordinates are `[longitude, latitude]`. Riverbank polygons include optional holes. Map pins are approximate; directions use venue addresses.

Venue research was checked September 14, with performance research and relevant venue updates checked September 15, 2026. Hours and prices are snapshots. Visit times and transport durations are recommendations/estimates. Dated listings, recurring weekly slots and unpublished schedules are clearly distinguished. Retained historical recommendations are clearly flagged where closed, renamed, relocated or unverified.

Sunday, October 18 follows the supplied booking: Gray Line at 400 Toulouse St, 9am departure, 7 hours 45 minutes, Whitney Plantation and a swamp visit with a lunch stop. The operator requests check-in 15 minutes early (8:45am). The roughly 4:45pm finish is calculated, not a guaranteed return time. Arrival/departure flight times remain flexible.

## Design System and licenses

The UI uses the actual En Rêve components and tokens from the local Design System repository (source commit `0310b65`). Navigation, buttons, links, cards, day and category selectors, dropdowns, saved-place and checklist checkboxes, accordions, badges, alerts, dialogs, search, map toolbar, checklist progress, text fields, textareas, file selection and icons use the bundled components. `site/vendor/en-reve.js` is a self-contained selected-component build; the normal production build does not depend on a sibling checkout. Build `@en-reve/elements` in the Design System checkout, then run `node scripts/vendor.mjs /absolute/path/to/design-system` to refresh it. `site/components.css` applies the trip theme through public tokens and CSS parts. Source MIT and dependency licenses are in `site/vendor/`.

Native anchors remain inside `en-navigation`, as its API requires, and for the brand/skip link. The SVG street map and its pins remain geographic graphics. Print content keeps simple document markup. Selectors use accepted `en-change` state after dispatch; rebuilding a control waits for `updateComplete` before restoring focus. No app-side CSS reaches into component shadow internals. All content uses uniform borders on all four sides, or no border, and no box shadows. This includes cards, alerts, dialogs, controls and the Developer UI return link. Selection uses fill, text and checkmarks; keyboard focus keeps a visible outline.

Photo: [Jackson Square by APK](https://commons.wikimedia.org/wiki/File:Jackson_Square_-_New_Orleans.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), cropped and color-treated for display. Photo license retained. Map data: [© OpenStreetMap contributors, ODbL](https://www.openstreetmap.org/copyright), September 14, 2026 snapshot, clipped and simplified. Attribution is visible in the app.

## Progress report

The independent report is outside the shipped app and production bundle. The local, Git-ignored `.progress-report/project.json` locates its canonical state and restart instructions. It is intentionally machine-specific and is not part of either published branch. Local preview: http://localhost:4175/. Entering the app with `?progress-report` shows its trusted return link; ordinary visitors do not see it. The parameter cannot supply a return URL or privileged access.

## Daily weather

Each itinerary day shows the New Orleans forecast from [Open-Meteo](https://open-meteo.com/en/docs): conditions, high/low °F, maximum precipitation probability and maximum wind in mph. Dates use America/Chicago. Forecasts reach up to 16 days ahead. The weather card stays hidden until its date enters that window and has usable forecast data. Loading, empty and failed requests show no placeholder; missing rain/wind values are omitted. Sunday uses the city forecast, with a note that tour conditions may differ.

A separate localStorage record retains only the six trip dates, with per-day fetch timestamps. Cached data renders immediately, followed by a network request on app load and reconnect. Foreground/focus/day navigation refresh after 15 minutes; a visible page also checks every 15 minutes. Automatic retries are limited to once a minute, requests time out after eight seconds, and Refresh allows a manual retry. Errors retain the last usable forecast. Data older than 24 hours is marked old; seven-day-old entries are discarded. The static service worker never caches this external API. No API key, geolocation permission or account is needed. Weather requires an initial connection and is separate from saving the static guide.

## Sharing saved locations

**Share Saved Locations** appears on Places when you have saved venues. It opens a dialog with an optional name, JSON preview, **Email saved locations** and **Download JSON**. The email action opens your mail app with a draft addressed to `westbrook.johnson@gmail.com`; sending remains a user action. For mail clients that limit draft length, download and attach the JSON manually. There is no email server, API credential or automatic message sending.

**Load Saved Locations** accepts a local JSON file or pasted JSON and a person/group name. It uses the export’s name if supplied, and you can override it. The format is `{ "version": 1, "trip": "new-orleans-2026", "name": "Alex and Sam", "venueIds": ["dba", "spotted-cat"] }`. Known IDs are deduplicated; removed/unknown IDs are skipped with feedback. Invalid/wrong-trip/oversized files are rejected. Maximum JSON size is 100 KB; names are limited to 80 characters and the device retains up to 20 imported lists. Imported strings are escaped and never supply navigation URLs or markup.

Loading the same name (case-insensitive) replaces that person’s imported list. It never modifies your own saves. Imported lists persist locally; when any exist, **Saved by** offers all places, your own saves, and each named list. It composes with search, neighborhood, performance date, category and sorting. **Remove imported list** removes the selected imported list from this device; it can be loaded again from its JSON. Sharing always exports your own saves, even while another person’s list is selected. Both **Saved by** and Map’s **Show** picker offer **Saved by 2 people**, **Saved by 3 people**, and higher counts only when matching locations exist. Counts mean **at least** that many people; your own saves and each imported list contribute one vote per venue (a group-named list counts as one list). Places also considers its active search, neighborhood, date and category filters when offering these options. Options refresh after saves or imported lists change; a selected overlap filter with no remaining matches falls back to all places. On Map, **Show** offers **Your saved places** and **Saved by [name]** for each loaded list. The selected list controls both numbered pins and the place list, and its URL restores the selection after reload on a device that has that list. **Map saved places** in Places also opens the selected person’s list. Empty lists have an explicit empty state; links to removed lists fall back to all current places.

Cake Café & Bakery was removed from the directory at the user’s request. The unedited original-list document retains its historical mention.
