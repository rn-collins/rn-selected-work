# Selected Work Portfolio — Control Ledger

This ledger is the frozen source of truth for the standing portfolio and its recipient-specific views. New requirements are added here; earlier requirements are not silently replaced.

## Canonical architecture

- [x] `/` is the permanent, reusable Selected Work portfolio.
- [x] `/work/[project]` provides a substantial case study for every selected project.
- [x] `/for/culturalyst` provides a Culturalyst-specific introduction, ordering, and evidence bridge without duplicating the canonical case studies.
- [x] `/for/culturalyst` is a four-page sequence: recipient thesis, selected evidence, opportunity map, and conversation brief.
- [x] A recipient-specific view never implies that the standing portfolio was commissioned for that recipient.

## Six required builds

- [x] Institutions of One / Ownership Platform
- [x] FlexJD Resource Hub
- [x] Psychedelic Operations Intelligence
- [x] Buechler Pacific — Claude for the Field
- [x] Keiki Robotics / Oʻahu AI
- [x] ThornCrest — Patent First Steps

Every build must include: problem/context; what RN noticed; research; concept; what was built; intended users; what it demonstrates; accurate commissioned/proposed/speculative/independently initiated status; screenshots or a controlled demonstration; a live prototype where appropriate; and GitHub only as secondary technical evidence.

## Advisory and institutional-design work

- [x] NSAG represented as the Neurocognitive Systems Advisory Group and home of Nervous-System-Aware Governance
- [x] NSAG represented as a distinct research-led institutional-design practice, not an Aloha AI advisory layer
- [x] Dedicated NSAG case study covering framework, fifteen modules, assessment system, intelligence, evidence, education, advisory practice, and applied systems
- [x] Correct relationship among NSAG, Aloha AI, RN Builds, and Institutions of One
- [x] Inflection Radar case study and accessible artifact links
- [x] Aloha Intelligence Institute case study
- [x] Aloha Intelligence Institute brief readable in the browser
- [x] Aloha Intelligence Institute brief downloadable as a PDF
- [x] Aloha Intelligence Institute non-commissioned disclosure
- [x] Sensitive or active-proposal material intentionally retained or redacted, never omitted accidentally

## Published writing

- [x] Inventory RN's complete Cannabis Law Report body of work (33 byline search records reviewed; 31 distinct publication URLs after duplicate-post reconciliation)
- [x] Inventory RN's complete Fat Nugs Magazine / Ask a Neuroscientist body of work (author archive reviewed across all three pages)
- [x] Read every featured candidate article end to end before selection
- [x] Link several articles from each publication directly
- [x] Give each article a specific blurb covering its question, argument/finding, evidence/disciplinary method, and what it demonstrates about RN's work
- [x] Select for range rather than allowing one article to stand in for an entire publication

- [x] Journal of Biophilic Design: five articles by RN (Issues 17, 18, 20, 21, 22) reproduced in full at `/writing/journal-of-biophilic-design/[slug]`, credited to the issue where each first appeared, with references (`data/journal/*.json`, text extracted from the issue PDFs and checked against the printed pages)
- [x] Archive re-crawled 9 Oct 2026: Fat Nugs Magazine author archive (32 articles) and Cannabis Law Report (50 articles incl. Series 3 No. 1–9); Cannabis Law Journal republications unchanged (3)

## Build windows

- [x] Every build has a record page at `/builds/[repo]` with the browser-window demonstration; the six project case studies, the NSAG page and the public-build case studies use the same `LivePreview` component
- [x] The window is the live site only where the site permits embedding (X-Frame-Options / CSP frame-ancestors); otherwise it holds a dated screenshot. 64 of 83 probed sites forbid framing, so an iframe of them would be blank
- [x] Held builds (NARCH, Women's Neuro-Health) and non-visual surfaces (`nsag-admin`, `rn-agent-os`) show no window
- [ ] Re-run `python3 scripts/capture-previews.py` after a build's interface changes (screenshots are dated)

## Culturalyst view and Sean response

- [x] Lead with Ownership, FlexJD, and Keiki Robotics / Oʻahu AI
- [x] Explain relevance to creator/community infrastructure, Hawaiʻi-grounded design, discoverability, support, and funding
- [x] Answer what RN is building and where Culturalyst fits
- [x] Distinguish Aloha AI, RN Builds, and NSAG explicitly within the Culturalyst introduction
- [x] Answer whom the explainer/checklist serves and how it would be shared
- [x] Supply accessible evidence showing how RN works
- [x] Surface Psychedelic Operations Intelligence, Buechler Pacific, and ThornCrest directly in the guided work sequence
- [x] Present NSAG accurately as related evidence of RN's institutional method
- [ ] Rewrite the email only after the evidence it cites is public and verified

## Boundaries

- [x] Do not link unfinished Aloha AI, RN Builds, or Beehiiv destinations
- [x] Describe Aloha AI and RN Builds accurately as in development where relevant
- [x] Do not imply that independently initiated organization-specific concepts were commissioned
- [x] Do not expose private systems merely to create a link; use controlled evidence instead

## Final QA and release

- [x] Original six builds expose separate case-study and live-build actions
- [x] 28 additional verified live builds have readable portfolio records and direct live-build actions
- [x] All fifteen NSAG assessment modules have direct verified links
- [x] RN-branded Open Graph image, metadata, sitemap, and robots policy implemented
- [x] Production build passes and statically generates 46 routes
- [x] Reconcile the complete connected GitHub inventory (73 repositories) against the 50 projects exposed by the connected Vercel inventory
- [x] Distinguish portfolio builds from NSAG module repositories, APIs/admin infrastructure, duplicate deployments, private operational systems, and earlier versions
- [ ] Reconcile Vercel projects beyond the connector's hard 50-project response limit if/when a cursor-capable inventory surface becomes available
- [x] Deep case-study expansion for the 28 new public-build records
  - [x] Evidence expansion tranche 01: Sovereign Stack, AI Build Budget Calculator, Source Integrity Audit, One-Person-Firm OS, and AI for Developing Brains
  - [x] Evidence expansion tranche 02: Transform Drug Market Transition Observatory, Zero → Frontier, Psych Ops Directory, Set for Life, and The Psychonaut Bookworm
  - [x] Evidence expansion tranche 03: Startup Legal Risk Monitor, Nervous System Studio, The Psychedelic Law Library, EOLPC Knowledge System, and Entheogen Atlas
  - [x] Evidence expansion tranche 04: Cannabis Healthcare Education Impact Assessment, Destigmatization Toolkit, Evidence·Studio, Aloha Build Club, and REGAC
  - [x] Evidence expansion tranche 05: NARCH, Burgermeister Expansion Intel, Psych Ops Intel, GAPI, and Women’s Neuro-Health
  - [x] Evidence expansion tranche 06: SPORT, Creator Rights Framework, and Aloha AI
- [x] Add a sandboxed controlled visual demonstration to every expanded public-build case study while retaining the separate full-site action
- [x] Link checks for represented public builds, NSAG modules, writing, GitHub, and NSAG surfaces
- [x] Desktop visual inspection on the canonical production alias
- [ ] Mobile visual inspection (responsive rules and overflow checks pass; device-width rendered inspection remains pending)
- [x] Global skip link, keyboard focus states, landmark/heading semantics, duplicate-ID checks, and reduced-motion behavior
- [x] Signed-out public access on the canonical production domain, including homepage and Inflection Radar case-study route
- [x] GitHub `main` to Vercel automatic production deployment
- [ ] Culturalyst package explicitly marked ready only after every applicable gate passes

## Ask a Neuroscientist sources pages

- [x] `/sources/[slug]` (for example `/sources/oct-08`) lists, for each Ask a Neuroscientist post, the research it cites, its other sources, and every slide and Story image with its credit and record link.
- [x] `/sources` lists posts from their posting day on (Hawaii time; rebuilt daily). Pages for scheduled posts exist ahead of time so the address printed on a slide works the day it posts.
- [x] Data is generated, not hand-kept: `data/aan-sources.json` comes from `aan-studio/renders/sources_export.py` in `rn-content-second-brain`, which drops research notes, contact pages and API mirror links.
- [x] Each page opens with the article or listing the post was built from: RN's Polymath article (12 posts), the Dutch Design Week listing (48), or the post's main source (19); the six Receptor Card and Brain and Body posts start with their research list.
- [x] The slides print `rn-selected-work.vercel.app/sources/<mon-dd>` on the cover and the last slide.
- [x] Site tagline changed from "Find the break. Choose the form." to "Find the gap. Build what is missing." (footer, Culturalyst conversation page; the Culturalyst invitation reads "Understand the gap. Then build what is missing.").
- [ ] Extend the export to January to March 2027 posts once those packages are proofed.
- [x] Tech From Here (RN Collins) sources pages at `/sources/tfh/<set-id>` for the 38 ready DDW26 sets, from `data/sources-tfh.json` (`sources_export.py tfh`). They are not listed on `/sources/tfh` or in the sitemap until a set has a posting date; the address in each Threads first reply works now.
- [x] One shared page body (`components/sources-detail.tsx`) serves every account.
- [x] Sources pages carry `rn:kind="reference"` and `rn:entries`; the estate check judges them on completeness (every entry rendered, no empty section, links resolve) instead of the 400-word floor. Checked locally: /sources, /sources/oct-08 and /sources/oct-09 pass with 0 blocker, 0 major.

## RN Collins sources pages (one account per package family)

- [x] `/sources/<account>/<slug>` (fifteen accounts: `ddw26`, `venues`, `makers`, `editions`, `ddw27`, `dda`, `htw`, `ioo`, `polymath`, `fatnugs`, `clr`, `museum`, `film`, `kbyg`, `jbd`; for example `/sources/ddw26/s100`) lists the article, the sources and every slide image with its credit and record link. Ask a Neuroscientist keeps `/sources/<mon-dd>` and `data/aan-sources.json`, untouched.
- [x] `/sources/<account>` lists each post from its posting day on, in Europe/Amsterdam time (rebuilt daily). Pages exist ahead of time so the address printed on a slide works on posting day.
- [x] Data is generated, not hand-kept: `data/sources-<account>.json` comes from `render-kit/sources_export_ours.py`, with the same cleaning rules as the Ask a Neuroscientist export. Slugs are id-based (they do not change when a post is rescheduled).
- [x] Each page opens with RN's article in The Polymath: the newsletter's subscribe page until the issue exists, then the issue address.
- [x] Pages carry `rn:kind="reference"` and `rn:entries`.
- [x] Every sources page and account index links to RN Selected Work itself (a line under the title and a block at the end: home, selected work index, all sources).
- [x] `/sources` links to every account index (the only change to the Ask a Neuroscientist page; its addresses and behavior are unchanged).
- [ ] Refresh the maker, edition and Dutch Design Awards pages when their essays are rewritten (deep essays supply the sources where they exist).
- [x] Takeover packages (Oct 11, 2026): 155 pages from `scripts/export_takeover_sources.py` and `scripts/takeover-references.json` (references only, from each package's dossier and slide table). `/sources/polymath/pm-rnc-01` to `pm-rnc-15` (15, added to the existing Polymath account; `pm-01` to `pm-15` unchanged), `/sources/museum/<id>` (47 Exhibit in Progress packages, each noting the Inspiration Hawaiʻi Museum partnership) and `/sources/film/<id>` (93: FC, HF, PC, BR, OH, HF2, carrying RN's partnership disclosure where the package does). Dates come from the master calendar; eight museum packages without one have pages but are not listed. A reference with no public copy is listed without a link.

## Release record (what is public, and when)

- [x] `data/releases.json` is the one release record. One entry per piece: `id` (the sources address without `/sources/`: `ddw26/s12`, `htw/c14-02`, `aan/oct-08`, `tfh/12`), `releasedAt` (a Hawaii date, or empty), `hold`, `postUrls` (one per platform, for example `{"instagram": "https://..."}`), `longFormUrl`, `sourcePageUrl`, `galleryUrl`.
- [x] A piece is public only when `releasedAt` is today or earlier in Hawaii and `hold` is false. Its sources page, its essay (`/essays/<account>/<id>` and the copy under `/writing/dutch-design-week`), its index entries and its sitemap entry all follow that one rule. Before its day every one of those addresses returns 404, also when opened directly. A piece with no entry, or with no date, stays hidden.
- [x] `scripts/sync_releases.py` writes the file from the sources data (`data/sources-*.json`, `data/aan-sources.json`) and the essay files. It keeps `hold`, `postUrls` and `galleryUrl` as set by hand. After any sources or essay data change run `npm run releases:sync`; `npm run releases:check` fails if the file is out of date.
- [x] Each released piece's pages link to its posts (when `postUrls` has them), its sources page, its essay (in place of the newsletter subscribe page the DDW packages name), its gallery page (when `galleryUrl` is set), the index, and the previous and next released pieces.
- [x] Daily release: Vercel Cron (`vercel.json` `crons`) calls `/api/release-day` at 10:05 UTC (00:05 Hawaii), which refreshes every page, so each piece appears on its day with no hand edit. Pages also recheck themselves hourly. Optional: set `CRON_SECRET` in the Vercel project; the route then accepts only calls carrying it.

## Essay pages (noindex until RN flips one flag)

- [x] Each long-form essay behind a package has a page at `/essays/<account>/<id>`; the id is the same as the matching sources page (`/sources/<account>/<id>`, for example `/essays/ddw26/s100` goes with `/sources/ddw26/s100`). `/essays` lists the accounts and `/essays/<account>` lists the essays.
- [x] Accounts built: `ddw26` (29, with set 33 added Oct 12, 2026), `venues` (20), `makers` (44), `editions` (11), `dda` (8), `ddw27` (27), `kbyg` (12: Know Before You Grow kb17 to kb22 and kbr01 to kbr04, kbr06, kbr07, added Oct 12, 2026): 151 essays. An account with no essays yet is left out of every page. Know Before You Grow pieces that RN publishes as LinkedIn articles (kb23, kb24, kbr05) are not hosted here; the export skips any registry entry whose outlet starts with "LinkedIn article".
- [x] Page: byline RN Collins, the standfirst, plain-English headings, the section on what the record does not show, bracketed source numbers linking to a numbered source list (label and link only), a link to the matching sources page, a link to RN Selected Work, and a link to subscribe to The Polymath. A date is shown only if the essay file carries one; none does yet.
- [x] Data is generated, not hand-kept: `data/essays-<account>.json` comes from `scripts/export_essays.py`, which reads the studio's article registry (`render-kit/article_registry.json`) and each essay's `article.json` and `article.md`. Re-run `python3 scripts/export_essays.py <content-studio folder>` after an essay changes or a new one lands (for example the DDW 27 essays), then rebuild.
- [x] Indexing is off. One constant controls it: `ESSAYS_INDEXABLE` in `lib/essays-config.ts`, currently `false`. While it is `false`, every essay page and index carries `noindex` and none is in `sitemap.xml`.
- [ ] To turn indexing on (RN's packages post after October 17, 2026): change `export const ESSAYS_INDEXABLE = false;` to `true` in `lib/essays-config.ts`, commit and deploy. The pages become indexable and `/essays`, each account index and every essay join `sitemap.xml`. To turn it off again, set it back to `false`.
- [x] Journal of Biophilic Design: RN's five articles (Issues 17, 18, 20, 21, 22) as small PDFs at `public/journal/<slug>.pdf`, with an index at `/journal` and a landing page at `/journal/<slug>` (title, issue and date as printed, byline as printed, the PDF, the text version at `/writing/journal-of-biophilic-design/<slug>`, links to RN Selected Work and The Polymath). Each PDF holds only RN's article and its references (3 to 11 pages, 0.8 to 4.2 MB), cut from the full issue by `scripts/extract_journal_pages.py` with page size and content unchanged; the issue's document info is not carried over. The full issues are never hosted.
- [x] The journal pages follow the same flag: while `ESSAYS_INDEXABLE` is `false` they carry `noindex`, the PDFs get an `X-Robots-Tag: noindex` header (`next.config.ts` reads the same constant), and none is in `sitemap.xml`. Setting it to `true` lifts all three.


## Work register reconciliation — November 3, 2026 (Hawaiʻi)

Current source baseline: PR #40, `f89e3659400bf694f4b11f22f1a109fd81758f33`.
This section records a bounded correction batch, not completion of the estate audit.

### Existing homes and counts

- `/work`: 77 individual build cards, seven categories, six primary cases. Rendered production DOM rechecked in this session; category counts and navigation to `/builds` confirmed. At a 1363px desktop viewport, document scroll width was 1348px. Mobile inspection remains pending.
- `data/builds.json`: October 10 inventory snapshot, 127 repositories / 159 Vercel projects. Do not replace these with newer audit totals without regenerating and verifying the actual inventory.
- `data/ideas.json`: 102 concept records, overlapping the existing build records; not 102 additional completed works. The MJBizCon work is represented here under `cannabis-as-a-technical-system`.
- Open draft PR #38 adds two concepts to that existing catalog. Do not duplicate or overwrite its work; it is not merged. PR #25 retains its separate DDW review condition.
- Published writing uses `lib/publication-archive.ts` and `lib/journal-articles.ts`. This batch does not certify their completeness or refresh their publication evidence.
- The comprehensive private register is not equivalent to any of these public projections. Continue the existing audit and existing registry identities; no replacement full register was created here.

### Implemented correction scope

1. `/builds` now calls itself a dated public selection. Removed the promise that every entry is currently running, the automatic live-health implication, and “See it running” links for held or paused records.
2. The shared build-record component dates URL evidence and distinguishes it from curated project status. A successful response does not prove completion, research approval, background-service health or adoption.
3. Tool category copy no longer promises every tool is browser-local and account-free; the same category contains gated and self-hosted systems. Editorial category copy now includes held drafts and research modules.
4. MJBizCon build note and its existing concept record agree: paused research/draft work, six held release entries, no released pieces through the gallery. Removed unverified research-complete/searchable-public-archive wording. Existing destination stays separate; no release records or holds were changed.
5. Internal `lastDeployed` field renamed `repositoryPushedAt`, and `verifiedStatus` renamed `inventoryHttpStatus`: the upstream fields are GitHub push time and a dated HTTP observation, not deployment evidence.

### MJBizCon source evidence

Directly read current `scripts/build.mjs`, `scripts/releases.mjs`, `data/releases.json`, and `data/release-pause.json` in `rn-collins/tech-from-here-mjbizcon`.
Git blob SHAs respectively: `615398c96987860b3cfea4c5312296f350dcab2a`, `71134aee347dd5ef27e1c606b78e1e26414b2fc1`, `2f0aebc73c75d8a98749db2a3e9202efd32e0eeb`, `deb5ca6cc7d018006661928027b1c6e88e1273e6`.
All six entries are held with blank posting dates; pause is on with an empty live list. Builder excludes archive files from site output. That is not repository confidentiality or full research review. No scientific/legal conclusion was newly validated here.

### Next source-backed corrections

- NSAG: parent record says fifteen prototypes are retired and not part of the current site; module records say they are live there. Verify each destination and distinguish historical deployment from current module before resolving.
- Claude for Small Business and Keiki Robotics: primary case-study statuses say release-blocked, while build notes say live. Reconcile exact scope and approval evidence; reachability cannot settle authorization or collaboration claims.
- Netherlands: confirm the claimed 48 published investigations against current release records and the separate DDW destination. Do not equate a draft corpus with publication.
- Missing private/internal projects from the newest audit batch require permission-aware representation decisions, not automatic public cards. Preserve identities and all release holds.
- Read the two pending concepts in PR #38 and finish its checks without duplicating them.
- Continue discovery across Polymath, Aloha AI, research, writing and proposals. Full estate and work-register completeness remain open.

No design direction, imagery, client disclosure, underlying content release, or site consolidation is part of this batch.


## NSAG status reconciliation and hosted preview — November 3, 2026 (Hawaiʻi)

Continues PR #41; preserves PR #38 and #25. The first PR41 head `ef3b51de1ddcff60ab8f852bd84bc12d56ff61c8` is deployed to its Vercel preview, not merged to production. Browser inspection confirmed the corrected MJBizCon record, its separate empty public-gallery iframe, and the revised work gallery (77 cards, seven categories, no desktop horizontal overflow at 1363px). A screenshot was inspected. No mobile viewport API was available in this session; mobile acceptance remains open.

### Resolved discrepancy

The NSAG parent build record incorrectly said the fifteen modules were absent from the hub. Read `vercel.json`: deployed output is `public`, not the root-level legacy `index.html`. Read the operations matrix and inspect status/limitation sections of all fifteen `public/mN.html` files. The matrix says collection is paused for all fifteen; module pages describe educational prototypes and explicitly disavow validated institutional scores, audits, accreditation and certification. M14/M15 use different paused-interaction wording from M1–M13. The M1 legacy standalone index explicitly records retirement and points to the hub.

All fifteen module URLs and the operations-matrix URL returned 200, without redirects, and their complete response bytes match the corresponding inspected Git blobs below. This is route/content identity verification and targeted status review, not full scientific, legal, security or interaction review. No forms were submitted; no operational service or advisory outcome is certified.

Updated the parent note, fifteen generated module notes, corresponding sixteen existing concept records and CONCEPT_GALLERY.md. Preserved 77 build cards and 102 concepts; these are related records, not new builds or inventions. Preserved all links, preview configuration, release holds and exclusions.

| Public route | Matching Git blob SHA |
| --- | --- |
| https://nsag-site.vercel.app/assessment-status | `41d1db857c58f54151f6b28fc33d742d4055a5bb` |
| https://nsag-site.vercel.app/m1 | `36ecf9f7c7b244d07db2ebacb357455e0e049294` |
| https://nsag-site.vercel.app/m2 | `3e32d8bb7acecd0d96cdcb8ffde5e520250237d4` |
| https://nsag-site.vercel.app/m3 | `02a6185f65e6ed694a7affb44e3d1dc67b80deff` |
| https://nsag-site.vercel.app/m4 | `d91a1be4f08649213b19e60b85aa2c8de13722ab` |
| https://nsag-site.vercel.app/m5 | `6dff37124660548a78cef79366a37114cca96313` |
| https://nsag-site.vercel.app/m6 | `229d6c0cad4586c4603a77ebc1692043e00b11e3` |
| https://nsag-site.vercel.app/m7 | `6c85fa27b432ce40e0cc8faec93e21b9d6ab6cac` |
| https://nsag-site.vercel.app/m8 | `65fed7a5c49ef23286ae3f77c041489e090e3a66` |
| https://nsag-site.vercel.app/m9 | `1dd63f61e67fc0f899490889e516f9fd856c973a` |
| https://nsag-site.vercel.app/m10 | `d120baabd106775dd93adc878f7b5e1af7e3effa` |
| https://nsag-site.vercel.app/m11 | `4902359fb65d5999eb9cfd7fbf8778347429ecca` |
| https://nsag-site.vercel.app/m12 | `7ca24810bb301b0ca8153f15be6c84a8696f16b8` |
| https://nsag-site.vercel.app/m13 | `f2fe29efb3d5219301f55aa7982a05d1122ed622` |
| https://nsag-site.vercel.app/m14 | `328f922e970882953ee73685c726fa25a18bb4ee` |
| https://nsag-site.vercel.app/m15 | `e9fd875bf0dd8e9ca857ec8872c8ac397c738c30` |


Next: verify the updated PR41 preview, retain its production-unmerged state until the existing merge boundary is resolved, then reconcile the Claude for Small Business and Keiki case-study/card release-status conflicts from approval evidence. Netherlands publication-count review, PR38 validation, private-register coverage and mobile acceptance remain open. Do not rerun unchanged NSAG byte checks unless source or deployment changes.

## Continuation031 integration — November 3, 2026 (Hawaiʻi)

Read PR41 at `780b0f7137049f35140be665f0556a8095fc1063`, its current comments, and the existing GitHub Estate Audit automation before editing. The automation supplied [continuation031 source/status handoff](https://github.com/rn-collins/rn-selected-work/pull/41#issuecomment-6621322245). This batch integrates that handoff; it does not repeat the underlying source audit or invent approval evidence.

- Claude-small-business: build status now matches the existing release-blocked independent product-translation case. The record distinguishes suggested workflows from implemented integrations, print from a downloadable PDF, and public availability from Buechler tailoring/review/delivery/use. Current official product/security review remains required before reuse.
- Keiki: removed unsupported “built with Oʻahu A.I.” and live status. The build and existing concept boundary now match the independent, release-blocked family-resource case. No new commission, authorization, endorsement or relationship is asserted. Removed installability claims from both scoped build descriptions; a manifest is not evidence of installability.
- Netherlands atlas: status says 48 listed investigations. The count is the public-catalog count verified in continuation031, not 48 completed DDW packages or social releases. The atlas build and existing concept now retain the separate DDW destination and scientific/rights/security review limitations. Individual investigation bodies were not newly reviewed here.

Existing images, destination links, primary case studies, holds, exclusions and counts are preserved. No design changes, new imagery, private-source publication or changes to the separate DDW/AAN/AI-build sites. PR38 and PR25 remain outside this change.

Verification for this integration is recorded in PR41 after the checks run. Earlier NSAG route-byte checks remain valid as historical observations and were not repeated. Latest-head hosted browser acceptance and mobile inspection remain separate checks; a READY deployment is not browser acceptance. Next: finish hosted desktop/mobile acceptance, validate PR38's two pending concepts, and continue the private full register from continuation031. Do not restart the completed status reconciliation.

Hosted follow-up at head `780b0f7`: browser confirmed the corrected NSAG scope/paused status. At 390×844, `/work` retained 77 card links with document width 390px (no horizontal overflow); the opening viewport was visually inspected, not every card. NSAG embedding refused to connect, so this batch switches only that host to the existing October 9 dated screenshot fallback after inspecting its image. Direct destination remains available. This does not certify the old screenshot as current.


## HTW release-boundary correction — November 3, 2026 (Hawaiʻi)

Continued current PR41 at8277baa and current PR38 atc5b0c7f, preserving concurrent work. Read canonical audit continuation031 version32. Its HTW source/rendered-output review supersedes the older no-build-step and visible-post wording. Independently read the current builder and rechecked the public https://htw-field-kit.vercel.app/released.json response:200, released empty. No private release rows, client identities, approval records or media were copied into this public ledger.

Updated the existing HTW build, its linked detailed public-build record, and concept descriptions: public event media is distinct from held post examples; a release-gated static builder exists; availability does not certify consent, quote accuracy, rights or finished content packages. No media was newly reviewed or released, no underlying HTW source changed, and no counts were added to the portfolio.

PR38 source-review follow-up: full extracted text of the18-page product blueprint and12-page legal-AI strategic proposal was read. The bounded summaries accurately describe proposed architecture and proposed educational research. This is complete textual coverage of those two documents, not layout/media acceptance, citation verification, adoption evidence or proof of implementation. Private recipient details and source locations remain outside public records. PR38's existing description retains this scope.

Next: validate this HTW copy in its hosted preview; retain the source/preview distinction and all release holds. Remaining full estate audit is129partial/zero complete/nine first reviews at continuation031, not a completed register. AaN's release/deployment discrepancy remains an investigation item; do not expose private release detail or claim source holds are live without deployment evidence.

## AaN public companion reconciliation — November 3, 2026 Hawaiʻi

Continued audit continuation031/version32 and existing PR41 head53e515e; no duplicate register or schedule. Public-safe observation: https://askaneuroscientist.vercel.app home, archive, search.json and sitemap identify one reader piece, `/coa/`. Browser navigation from home to archive to that piece succeeds; article headings and sources section observed; desktop width1406 has no horizontal overflow. This is not scientific or media acceptance. Read-only route checks return200 for that reader and404 for seven other source-eligible paths. No private drafts or release rows are reproduced here.

Vercel production remains READY deployment dpl_EBbYykYdwbg6nXAui4HeM5GHHwtm, reporting older source commit df7c10bc0fafefe807a11d7dfdf8da5e3fee14ae. The current source release data and the deployment-reported commit's data select the same eight pieces as of November3, but the live index lists one. Thus commit metadata and release eligibility do not establish deployed contents. Build source's date/hold predicate, path mapping, indexes and output assembly were read; current source controls are not verified live. No new full AaN build or form/storage test was run, and no underlying deployment/release changed.

Updated existing build note and concept to remove the unsupported88-page/publishing claim, separate original magazine publication from companion release, and qualify the question workflow and review coverage. Counts remain77builds/102overlapping concepts. PR38's two additions and PR25's hold preserved. Broader mobile/interaction and full scientific/media/rights/security review remain open.

Next: compare AaN's deployed output with its source build inputs in the existing private audit evidence, including the missing eligible routes, before any production repair. Do not publish held entries or copy private content to this public control file. Continue the saved estate queue;129partial/zero complete/nine first reviews remains the latest canonical audit coverage.

## AaN deployment trace — November 3, 2026 Hawaiʻi

Continued the preceding checkpoint and audit continuation031/version32. The production deployment's uploaded file tree contains one reader directory; the absent eligible pages are absent from the upload, not merely omitted by the home page. Production was created October17 at03:40 Hawaiʻi. Its generated redirect config likewise contains only the one reader redirect.

Reproduction: recovered the unchanged builder (Git blob e7f9c1d1202611611fd173a0fbbf1a6d6c12008e), CSS and the eight date-eligible card/content pairs at the deployment-reported commit df7c10bc0fafefe807a11d7dfdf8da5e3fee14ae. Card/content bytes were checked against their Git blob hashes before the final runs. The complete release table was used, but only these eight content/card pairs were recovered: this is a bounded reproduction, not the complete113-piece site, media review or full native test suite.

- Actual builder run with `--today 2026-10-17`: one selected reader, ten generated text files. The home page, search index, sitemap and COA reader match read-only production responses byte for byte. Generated text/CSS hashes match the uploaded file IDs for the home, archive, ask, questions, inbox shell, reader, robots, search, sitemap, redirect config and stylesheet. No inbox contents or credentials were accessed. Images and API bundles were not compared.
- Same source and recovered input subset with `--today 2026-11-03`: eight selected readers, seventeen generated text files; no reported build problems. This demonstrates a change in output with build date, not publication approval or a complete full-site build.
- Current builder blob is identical. Current release records still allow the same eight as of November3. The daily-rebuild workflow's schedule is explicitly commented out for RN's pause, although push-to-main and manual dispatch can still deploy. Neither trigger was invoked. The workflow comments/README still describe daily publishing; those descriptions do not override the actual paused schedule.

Conclusion: the one-reader live index is reproduced by the October17 snapshot. Do not treat the seven absent routes as permission to publish them. A blind rebuild today would expand public output despite the instruction to pause new releases. Before a production repair, reconcile those seven release records against the actual pre-pause live set in the private source record, preserve the paused schedule, and inspect a non-production build's route diff. No underlying source, release records, public export or production deployment changed here. Existing portfolio wording remains accurate; PR41/PR38 remain unmerged. Full audit coverage remains129partial/zero complete/nine awaiting first review.

## Full-register return and continuation032 gallery reconciliation — November 3, 2026 Hawaiʻi

Read canonical audit version33/continuation032 and its public-safe handoff https://github.com/rn-collins/rn-selected-work/pull/41#issuecomment-6622165108 before changes. All138 members of the recovered accessible census now have a bounded first inspection; zero are fully audited. Historical census membership remains unresolved. This does not make77gallery cards or102overlapping concepts a complete work register.

Disposition of the nine newly inspected repository rows (private identities and source paths remain in the audit):

| Existing audit group | Rows | Gallery decision |
| --- | ---: | --- |
| Private operational scheduling | 1 | Excluded; no public-work permission established |
| Empty collaboration post scaffolds | 2 | No new cards; agreement/delivery claims unresolved |
| Related Bookworm source/export editions | 2 | Reconcile existing Bookworm entry; do not count editions as new builds |
| AaN card and fashion public exports | 2 | Link existing logical builds; no new work count or rights clearance |
| Private content export / work index | 1 | Register evidence only; inspect individual sources and permissions before inclusion |
| Protected field archive | 1 | Excluded; preserve separate destination and access controls |

Substantive public correction: Bookworm's live home has460unique `/item/` links and reports227drafts; the54mini-essays overlap those drafts, and Research Desk reports360indexed objects. Updated build note, existing concept and linked case from obsolete454/221counts, removed the unsupported rights-safe excerpt description, and explained the related export editions. Public source README says1204other ledger records withheld; no unseen record or full source/rights acceptance is inferred. Native460-record checks/build are attributed to continuation032, not rerun. Browser inspected public overview and unique item-link count; full460object content/interaction review was not performed.

Missing-work discovery: continuation032 recovered an existing3043-ID work index with source labels idea/scheduled/built and no posted marks. These labels do not establish completion or publication. Direct GitHub content retrieval of its7MBblob returned empty content in this session, so no additional record bodies are claimed reviewed and no blanket import was attempted. Resume its existing items[2] checkpoint through the canonical audit's recovery route. Keep primary evidence, permissions and source identity attached to existing IDs; do not create a competing inventory.

Next portfolio work: resume evidence-backed individual work-index reconciliation, prioritizing public writing/research and approved proposals missing from Selected Works. AaN deployment repair stays in the existing source-audit queue; it does not displace this full-register goal. Preserve PR38's two concept additions, PR25's review hold, privacy exclusions and separate DDW/AaN/AI-build destinations. No new schedule, merge or production change.

## Missing-work intake — Aloha AI curriculum — November 3, 2026 Hawaiʻi

This batch adds authored teaching work, not another build-status correction. The3043-ID work-index checkpoint remains at items[2]: contents/base64 returned empty, raw route rejected oversized content, and Git blob retrieval closed transport. No index-body advancement is claimed. Continued with accessible Aloha AI/Polymath materials rather than treating that blocker as a completed inventory.

| Candidate / related material | Decision | Evidence scope |
| --- | --- | --- |
| AI & Your Work teaching programme | Add `ai-and-your-work` to existing concept gallery as Curriculum draft | Prepared teaching text: four-stage method, five-part Opportunity Map, fictional demonstration and teaching/application boundary |
| Earlier masterclass deck variants | Same programme; no separate entries | Search metadata identifies related versions; neither all-slide visual QA nor delivery is inferred |
| Aloha AI commercial architecture dossier | Already represented by existing Aloha AI practice; no new build | Governing architecture describes the same practice and explicit implementation/availability decisions |
| Owner-only delivery operations and commercial details | Keep out of public entry | Public summary excludes presenter/producer notes, operational checklists, pricing, internal file identifiers and full source documents |

The curriculum record is a high-level description of RN's own prepared work. It does not claim a delivered Hawaiʻi Tech Week event, active booking, accreditation, client result or complete package. Source review here is extracted text for the described sections; slide visuals, animations, full citations and delivery have not been verified. A fictional example remains explicitly fictional. No images generated, no source deck republished, no changes to Aloha AI's separate site.

Added a relationship sentence to the existing Aloha AI case. PR41 now103concepts/77build cards; PR38's two distinct concepts would bring the combined catalogue to105, not105completed projects. Preserve its work and test merge compatibility. Next continue missing-work intake from accessible primary materials and the existing items[2]recovery checkpoint; keep source delivery/publication/permission evidence separate from source status labels.


## Ideas recovery priority and batch — November 3, 2026 Hawaiʻi

RN clarified that the existing `/ideas` gallery is the destination for recovered ideas, frameworks, proposals, research, drafts and unfinished work. Completion or prior publication is not required for an accurately labelled concept summary. Preserve confidential material and explicit release holds; keep DDW, AaN and AI-build production at their separate destinations. Continue this register and existing automation, not another inventory.

Added two missing related works: `the-nervous-system-in-the-room` (held editorial blueprint; one eight-feature programme, not eight completed works) and `salutogenic-legal-design` (research framework draft). Compared them with existing AaN, biophilic, legal-space and healthcare modules and PR38's two separate additions. The editorial blueprint's complete extracted text was reviewed; the research manuscript's opening problem statement and literature-plan sections were reviewed, not all 46 pages or citations. No source documents, prospective partner names or private source identifiers are included. An explicitly non-public research kit is excluded and retained in private continuation notes.

105 concept records now; 77 build cards unchanged. PR38 would add two further concepts if integrated. No completed manuscript, published season, partnership, fieldwork or validated intervention is inferred. Next recover additional source-backed concepts from the existing source audit, including the cultural-activation material; maintain the blocked large-index checkpoint separately.


## Cultural Activation source recovery — November 3, 2026 Hawaiʻi

Continued the existing September registry from its saved checkpoint. Reviewed relevant Object Audit, Identity Registry, Generator Rules, Sources & Decisions, Research Territories and project-summary rows. This is a bounded extracted-content review, not acceptance of all workbook formulas, mapped designs, citations or current release claims.

Added eight previously absent concepts: Anatomy of Everything; High Culture; Law Happens Somewhere; Herbal Histories; The Strange History of Now; System Anatomy; Polymath Cultural Activation System; and Familiar, Rewritten. The six editorial properties remain concepts, the workbook and its nested communication method remain documented frameworks. A registry row supports a conceptual description, not proof of a completed season, tested tool, incorporated institute or government commission.

A further institutional candidate was excluded after its primary brief proved confidential and distinguished RN's proposed contribution from an existing statutory concept. No recipient, source document or private proposal content is shipped.

Existing AaN, Institutions of One, fashion, Tech From Here and build records are related work, not duplicate additions. Editorial rooms, channels, internal formats, per-platform variants and the many visual-map rows were not multiplied into separate projects. Source release holds and private operational details are retained. No images or designed assets were produced or changed.

113 concepts / 77 build cards; PR38's two distinct additions remain separate. Next follow the existing registry's primary source pointers to the underlying editorial corpus and institutional proposal, reconciling individual works and current stages rather than accepting historical registry labels as publication evidence. Large work-index recovery remains at items[2].


## Individual writing recovery — November 3, 2026 Hawaiʻi

Read complete extracted text across the saved checkpoints for the retreat-economy essay manuscript and Issue 001 launch package. Added `why-men-are-going-to-the-jungle` as Essay draft and `cia-lilly-archival-investigation` as Published essay · draft derivatives. The essay draft and the archival derivative artifacts remain held. The latter uses a neutral portfolio title rather than treating the source headline's historical assertion as newly verified fact.

The essay has a full text and resource list but unresolved quotation locators and scientific/legal/market claims. Its older Unsettled introduction conflicts with the later corpus placement under High Culture; one work is retained, not two. The Issue 001 source contains carousel copy, a long-video script, five short scripts and social copy; no finished carousel, recorded video or cleared derivative visual set was recovered. A later check of the current existing editorial catalog located P181 and its public Polymath article, which was opened and publication confirmed. This supersedes the initial missing-article finding; historical claims and exact derivative/article version matching remain unverified. Placeholders and review gates remain. These two records describe authored work without republishing source assertions or claiming package completion.

Compared with existing concept IDs and repository writing/source records. Shared historical source material is not a duplicate article; no existing gallery entry for either recovered work was found. No changes to canonical writing hosts, Beehiiv, release controls or media. 115 concept records / 77 build cards. Continue from the existing 181-record editorial catalog and reconcile individual manuscripts, with source versions, holds and publication state distinguished.


## Full Ideas description review and LinkedIn preference — November 3, 2026 Hawaiʻi

RN requested detailed, complete, precise, easy-to-understand descriptions for every Ideas entry and LinkedIn instead of Instagram as the preferred contact route. Reviewed all 115 records and revised each against its existing evidence; no inventory additions. Removed vague fallback boundaries, unsupported generalizations and present-tense service assertions. Corrected the microdosing archive date-range contradiction, Set for Life’s obsolete sales description, the directory’s older count, and unverified curriculum delivery-readiness language. Keiki Robotics and AI for Small Business are explicitly Release-held concept.

Read the individual problem statements and six proposed dimensions in all fifteen NSAG module source pages, pinned at fafd916a74131cbac127330da9ec8effdc0f5fe1. Replaced repeated generic descriptions with distinct scope summaries. No scientific, clinical or legal source claims were adopted as verified conclusions. The module assessment pause and retired standalone status remain.

Gallery labels now explain purpose, contents or proposal, and current standing in plain language. Its discussion and footer contact links use RN’s existing LinkedIn profile; the contact page states that preference, and RN’s social list puts LinkedIn first. Other publication accounts remain. The durable rule is in AGENTS.md, with its detailed standard here and in CONCEPT_GALLERY.md. No new automation or register.

Audit continuation033 has advanced the formerly blocked work index to 18/3,043 reviewed records, next item18. This supersedes older items[2] blocker notes; retain its private evidence and four writing-candidate handoff for subsequent intake. Current task priority is this full-description review. The next recovery batch remains the existing editorial catalogue P099–P101 plus the audit handoff, deduplicated before inclusion. PR38 and production release holds remain unchanged.

Validation for this batch: full 1,053-page production build, TypeScript, Ideas identity/content/privacy checks and whitespace checks passed. All three description fields for all 115 entries were verified in generated Ideas output; the generated contact page contains the LinkedIn preference and established profile URL, without the old Instagram priority claim. Entry IDs/order and privacy-held flags are unchanged. Hosted acceptance is recorded in PR41 after deployment. This is editorial and rendering verification, not complete source fact-checking or project completion.
