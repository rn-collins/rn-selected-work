# Zero to One concept gallery

New route: `/ideas`. Integrated with homepage navigation, portfolio navigation, discovery and sitemap.

## Content

102 catalogue entries: 77 curated portfolio records (including 15 related research modules), 23 proposal concepts, one recovered implementation prototype and one creative study. Twelve featured concepts. This is a recovered edition, not a certified inventory of every idea RN has conceived. Related concepts and modules are not counted as distinct inventions. The catalogue date is not a first-conception date.

Public fields omit proposal recipient names, correspondence, commercial terms and private source identifiers. No full proposal documents are shipped. Record-level limits preserve proposed versus delivered status and distinguish RN's proposed contribution from other people's existing intellectual property. Existing release holds are retained. The fifteen module records have contradictory current-availability descriptions in the underlying portfolio; the gallery does not assert live availability.

## Interaction

Lazy-loaded Three.js engine with a server-rendered sculptural fallback. The artwork is present before JavaScript loads; context loss suspends rendering and restores the fallback, and context restoration resumes the scene. Pause control, reduced-motion preference, offscreen/hidden-tab suspension and resource disposal. CSS visual studies, search, field filters, empty-state reset, native modal dialogs, keyboard close/focus return and shareable `?idea=` links. No forms, trackers, databases or new external data access.

## Verification

- Production build: passed (767 routes).
- TypeScript: passed with `--allowImportingTsExtensions`, needed by existing repository tests.
- Existing image-source tests: 4 passed.
- `node scripts/check-ideas.cjs`: unique IDs, required text, featured references, module count and recipient/private-identifier checks passed.
- Hosted browser: search, concept dialogs and Escape dismissal pass. WebGL creation explicitly reports graphics disabled in this browser; fallback rendering verified, GPU rendering and context restoration not browser-verified.
- Built HTML/CSS inspected in 320px, 390px and 768px iframe viewports: no horizontal page overflow; single-column cards, hero and register fit. This is responsive layout verification, not physical-device or mobile Safari testing.

## Remaining inventory work

Not certified exhaustive. Several recovered proposal versions describe the same concept; these are consolidated. The private proposal-factory archive documentation, expedition contribution note and website source, and two health-data creative proposal images have now been reviewed and consolidated into three entries. The creative-study entry is limited to the surviving visual proposal text; its full underlying research was not recovered. The legal-capacity employment proposal has not been recast as an original product. Other concepts may exist under filenames that do not include “proposal.”
