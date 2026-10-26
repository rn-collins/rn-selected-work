# Zero to One concept gallery

New route: `/ideas`. Integrated with homepage navigation, portfolio navigation, discovery and sitemap.

## Content

99 catalogue entries: 77 curated portfolio records (including 15 related research modules) and 22 proposal concepts recovered from authored proposal sources. Twelve featured concepts. This is a recovered edition, not a certified inventory of every idea RN has conceived. Related concepts and modules are not counted as distinct inventions. The catalogue date is not a first-conception date.

Public fields omit proposal recipient names, correspondence, commercial terms and private source identifiers. No full proposal documents are shipped. Record-level limits preserve proposed versus delivered status and distinguish RN's proposed contribution from other people's existing intellectual property. Existing release holds are retained. The fifteen module records have contradictory current-availability descriptions in the underlying portfolio; the gallery does not assert live availability.

## Interaction

Lazy-loaded Three.js sculpture with static fallback. Pause control, reduced-motion preference, offscreen/hidden-tab suspension and resource disposal. CSS visual studies, search, field filters, empty-state reset, native modal dialogs, keyboard close/focus return and shareable `?idea=` links. No forms, trackers, databases or new external data access.

## Verification

- Production build: passed (767 routes).
- TypeScript: passed with `--allowImportingTsExtensions`, needed by existing repository tests.
- Existing image-source tests: 4 passed.
- `node scripts/check-ideas.cjs`: unique IDs, required text, featured references, module count and recipient/private-identifier checks passed.
- Local browser: layout renders; development chunk request blocked by client, so interactive verification moves to the hosted preview.

## Remaining inventory work

Not certified exhaustive. Several recovered proposal versions describe the same concept; these are consolidated. Files not yet examined sufficiently for a concept entry include the private proposal-factory recovery, the temporary-city proposal source and some image-only creative briefs. The legal-capacity employment proposal has not been recast as an original product. Other concepts may exist under filenames that do not include “proposal.”
