# Zero to One concept gallery

New route: `/ideas`. Integrated with homepage navigation, portfolio navigation, discovery and sitemap.

## Content

123 catalogue entries: 77 curated portfolio records (including 15 related research modules), 23 proposal concepts, one recovered implementation prototype, one creative study, one prepared curriculum, one editorial blueprint, one research framework draft, six editorial concepts, two documented methods/frameworks, one essay draft and one published essay with draft derivatives and eight additional published essays. Twelve featured concepts. This is a recovered edition, not a certified inventory of every idea RN has conceived. Related concepts and modules are not counted as distinct inventions. The catalogue date is not a first-conception date.

Public fields omit proposal recipient names, correspondence, commercial terms and private source identifiers. No full proposal documents are shipped. Record-level limits preserve proposed versus delivered status and distinguish RN's proposed contribution from other people's existing intellectual property. Existing release holds are retained. The fifteen related module records distinguish public scope pages from paused assessment collection and retired standalone deployments. This status reconciliation does not validate their scientific claims or assessment instruments.

## Interaction

Lazy-loaded Three.js engine with a server-rendered sculptural fallback. The artwork is present before JavaScript loads; context loss suspends rendering and restores the fallback, and context restoration resumes the scene. Pause control, reduced-motion preference, offscreen/hidden-tab suspension and resource disposal. CSS visual studies, search, field filters, empty-state reset, native modal dialogs, keyboard close/focus return and shareable `?idea=` links. Denied clipboard access exposes a selectable URL instead of silently failing. No forms, trackers, databases or new external data access.

## Verification

- Production build: passed (767 routes).
- TypeScript: passed with `--allowImportingTsExtensions`, needed by existing repository tests.
- Existing image-source tests: 4 passed.
- `node scripts/check-ideas.cjs`: unique IDs, required text, featured references, module count and recipient/private-identifier checks passed.
- Hosted browser: search, concept dialogs and Escape dismissal pass. WebGL creation explicitly reports graphics disabled in this browser; fallback rendering verified, GPU rendering and context restoration not browser-verified.
- Built HTML/CSS inspected in 320px, 390px and 768px iframe viewports: no horizontal page overflow; single-column cards, hero and register fit. This is responsive layout verification, not physical-device or mobile Safari testing.

## Remaining inventory work

Not certified exhaustive. Several recovered proposal versions describe the same concept; these are consolidated. The private proposal-factory archive documentation, expedition contribution note and website source, and two health-data creative proposal images have now been reviewed and consolidated into three entries. The creative-study entry is limited to the surviving visual proposal text; its full underlying research was not recovered. The legal-capacity employment proposal has not been recast as an original product. Other concepts may exist under filenames that do not include “proposal.”

## Recovery destination

`/ideas` holds recovered concepts, proposals, research, drafts and unfinished work with accurate stages; prior publication or completion is not an inclusion requirement. Confidential material and release holds remain protected. See PORTFOLIO_CONTROL.md for the current intake decisions.


## Description and contact standard — November 3, 2026 Hawaiʻi

RN requires descriptions that are complete, detailed, precise and easy to understand. Explain the purpose and intended reader, the actual contents or proposed method, and the established state and limits. Use concrete language, define specialist terms, preserve useful detail and remove repetition. Do not lengthen copy with invented features, outcomes or generic assurances. Unknown evidence stays explicit. Distinguish research, drafts, designed assets, prototypes, tested functions and published work; availability alone proves none of the others.

LinkedIn is RN’s preferred contact channel for enquiries, collaborations and introductions. Use the existing LinkedIn account in `data/social-links.json`; do not describe Instagram as the preferred or quickest contact route. Other social accounts remain publication destinations.

All 115 descriptions received an editorial review in this batch; every record changed. Fifteen module summaries now describe their individual proposed review areas, checked against the NSAG source pages at fafd916a74131cbac127330da9ec8effdc0f5fe1. Source claims were not independently validated. Set for Life and the operations directory were reconciled with the newer existing public-build records. Unverified claims of curriculum delivery readiness and active co-working sessions were removed. Keiki Robotics and AI for Small Business now show Release-held concept, consistent with their existing boundaries. No entries added or removed; 77 build cards unchanged.

Validation for this batch: full 1,053-page production build, TypeScript, Ideas identity/content/privacy checks and whitespace checks passed. All three description fields for all 115 entries were verified in generated Ideas output; the generated contact page contains the LinkedIn preference and established profile URL, without the old Instagram priority claim. Entry IDs/order and privacy-held flags are unchanged. Hosted acceptance is recorded in PR41 after deployment. This is editorial and rendering verification, not complete source fact-checking or project completion.


## Published-writing recovery — November 3, 2026 Hawaiʻi

Added six existing published essays: The Recognition Came Before the Credentials; Knowledge Is Not Finished When I Understand It; The Papaya Was Engineered. So Was the Rescue System.; The Two Marks Your Computer Had to Learn; Hawaiʻi Once Ran on a Half-Hour the Continent Forgot; and The 56% Problem. Seven source records resolve to six works because the overlapping Recognition draft stays with its published counterpart. No new publication, source edit, image reuse or derivative release is claimed.

A dedicated optional `publicationUrl` now provides a Read published essay action. Its check permits only clean HTTPS article paths on the verified Polymath publication, with no query, draft, credential or tracking suffix. The existing private-recipient/source checks still apply to all other fields. Future hosts require explicit review rather than relaxing the prose privacy rule. The source sites retain the complete writing.
