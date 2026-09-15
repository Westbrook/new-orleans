# Travel guide visual review

Reviewed September 14, 2026. The goal is faster decisions on a phone while retaining the complete researched guide and its jazz/blues character.

| Finding | Delivered change | Design System use |
| --- | --- | --- |
| The large hero delayed access to the days. | Shorter introduction and hotel, Sunday-tour and saved-place shortcuts. | Buttons and links with clear labels. |
| Navigation disappeared on long pages. | Sticky desktop header and persistent phone navigation. | The existing navigation component retains native links and current-page semantics. |
| Reservation and transport notes followed every stop on phones. | A Plan ahead card precedes the stops; travel and rain notes expand in place. | Card and accordion. |
| Venue browsing could not match the selected trip day. | Day, neighborhood, category and saved filters compose; reset is always available when filtered. | Select, segmented control, checkbox and search input. |
| Search missed unaccented names and apostrophes. | Normalized, order-independent word matching, including “cafe monde” and “Dooky Chases”. | Existing search input; small shared search helper. |
| Bare save checkboxes were ambiguous. | Visible Save labels and checked state; one Details action per card avoids a duplicate keyboard stop. | Checkbox, card and button. |
| Venue dialogs were narrow and repeated titles; actions scrolled away. | One title, wider desktop details, readable phone layout, and a persistent action footer. Visit suggestions, orders and hours stay visible; supplementary notes use disclosures. | Dialog heading/body/footer Parts and slots; accordion, alert, button and link. |
| Map letters were ambiguous and tap targets shrank with SVG letterboxing. | Matching numbered pins/list entries, a saved-place view, consistent nominal 48px targets, fewer labels at city scale, and explicit outside-view notes. | Toolbar groups zoom actions with arrow-key navigation. Geography remains SVG. |
| A long checklist gave no summary. | Actual completed count and persistent preparation progress. | Progress bar and checkboxes. |
| Filters could leave misleading deep links. | Day and saved-scope fragments update with controls and reset. | Accepted component change events drive application state. |

All surfaces retain equal borders or no border and no box shadows. Focus uses a visible outline. No new runtime service, CDN, font, map provider or package install is needed. The two added component modules are toolbar and progress-bar; existing components do the rest.

A date picker, command palette, multi-step wizard or tabbed venue inspector would add interaction to a fixed six-day guide. They are intentionally omitted. The map keeps a plain, accessible place list so pins are never the only way to find an address.

Validation includes the production build and data/asset checks, focused tests for search/filter composition and map geometry, browser interaction and computed-style checks, desktop and small-phone layouts, keyboard navigation and an origin-offline reload. Browser review does not substitute for physical-device or screen-reader certification. No venue fact, reservation, ticket purchase or schedule was invented during this visual pass.

## September 15: venue-first guide and shared lists

Places is the default entry and Itinerary is last. Only the fixed Sunday tour has itinerary stops; date filters in Places now refer to published performances. Venue headings use direct website links. Venue dialogs cap at 70dvh, with fixed actions and a scrolling body; sourced performance listings appear first when available.

Added the actual Design System text-field, textarea and file-upload components for saved-list sharing/loading, alongside the existing dialog, alert, select and buttons. New content retains uniform borders and no box shadows. Imported lists are separate from the visitor's own saves and offer a Saved by filter when present.

Validation: build/data/offline checks and 13 tests pass. In-browser checks covered pasted JSON import, local JSON file selection and name prefill, automatic filtering after import, persistence across reload, own-save preservation, email recipient and JSON payload, fixture removal, Saturday performance filtering, direct card links, Sunday-only itinerary and absence of unavailable weather. At 390px and desktop widths, content had no horizontal overflow; the dialog measured 630px in a 900px viewport and 613.9px in an 877px viewport. A computed-style scan of rendered component internals found no box shadows. Physical iOS email-app handoff remains device-dependent; the JSON download is the fallback for mail clients that truncate a draft.
