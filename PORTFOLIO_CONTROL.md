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

- [x] `/sources/<account>/<slug>` (thirteen accounts: `ddw26`, `venues`, `makers`, `editions`, `ddw27`, `dda`, `htw`, `ioo`, `polymath`, `fatnugs`, `clr`, `kbyg`, `jbd`; for example `/sources/ddw26/s100`) lists the article, the sources and every slide image with its credit and record link. Ask a Neuroscientist keeps `/sources/<mon-dd>` and `data/aan-sources.json`, untouched.
- [x] `/sources/<account>` lists each post from its posting day on, in Europe/Amsterdam time (rebuilt daily). Pages exist ahead of time so the address printed on a slide works on posting day.
- [x] Data is generated, not hand-kept: `data/sources-<account>.json` comes from `render-kit/sources_export_ours.py`, with the same cleaning rules as the Ask a Neuroscientist export. Slugs are id-based (they do not change when a post is rescheduled).
- [x] Each page opens with RN's article in The Polymath: the newsletter's subscribe page until the issue exists, then the issue address.
- [x] Pages carry `rn:kind="reference"` and `rn:entries`.
- [x] Every sources page and account index links to RN Selected Work itself (a line under the title and a block at the end: home, selected work index, all sources).
- [x] `/sources` links to every account index (the only change to the Ask a Neuroscientist page; its addresses and behavior are unchanged).
- [ ] Refresh the maker, edition and Dutch Design Awards pages when their essays are rewritten (deep essays supply the sources where they exist).
- [x] Takeover packages (Oct 11, 2026): 155 pages from `scripts/export_takeover_sources.py` and `scripts/takeover-references.json` (references only, from each package's dossier and slide table). `/sources/polymath/pm-rnc-01` to `pm-rnc-15` (15, added to the existing Polymath account; `pm-01` to `pm-15` unchanged), `/sources/museum/<id>` (47 Exhibit in Progress packages, each noting the Inspiration Hawaiʻi Museum partnership) and `/sources/film/<id>` (93: FC, HF, PC, BR, OH, HF2, carrying RN's partnership disclosure where the package does). Dates come from the master calendar; eight museum packages without one have pages but are not listed. A reference with no public copy is listed without a link.

## Essay pages (noindex until RN flips one flag)

- [x] Each long-form essay behind a package has a page at `/essays/<account>/<id>`; the id is the same as the matching sources page (`/sources/<account>/<id>`, for example `/essays/ddw26/s100` goes with `/sources/ddw26/s100`). `/essays` lists the accounts and `/essays/<account>` lists the essays.
- [x] Accounts built: `ddw26` (28), `venues` (20), `makers` (44), `editions` (11), `dda` (8), `ddw27` (27): 138 essays. An account with no essays yet is left out of every page.
- [x] Page: byline RN Collins, the standfirst, plain-English headings, the section on what the record does not show, bracketed source numbers linking to a numbered source list (label and link only), a link to the matching sources page, a link to RN Selected Work, and a link to subscribe to The Polymath. A date is shown only if the essay file carries one; none does yet.
- [x] Data is generated, not hand-kept: `data/essays-<account>.json` comes from `scripts/export_essays.py`, which reads the studio's article registry (`render-kit/article_registry.json`) and each essay's `article.json` and `article.md`. Re-run `python3 scripts/export_essays.py <content-studio folder>` after an essay changes or a new one lands (for example the DDW 27 essays), then rebuild.
- [x] Indexing is off. One constant controls it: `ESSAYS_INDEXABLE` in `lib/essays-config.ts`, currently `false`. While it is `false`, every essay page and index carries `noindex` and none is in `sitemap.xml`.
- [ ] To turn indexing on (RN's packages post after October 17, 2026): change `export const ESSAYS_INDEXABLE = false;` to `true` in `lib/essays-config.ts`, commit and deploy. The pages become indexable and `/essays`, each account index and every essay join `sitemap.xml`. To turn it off again, set it back to `false`.
- [x] Journal of Biophilic Design: RN's five articles (Issues 17, 18, 20, 21, 22) as small PDFs at `public/journal/<slug>.pdf`, with an index at `/journal` and a landing page at `/journal/<slug>` (title, issue and date as printed, byline as printed, the PDF, the text version at `/writing/journal-of-biophilic-design/<slug>`, links to RN Selected Work and The Polymath). Each PDF holds only RN's article and its references (3 to 11 pages, 0.8 to 4.2 MB), cut from the full issue by `scripts/extract_journal_pages.py` with page size and content unchanged; the issue's document info is not carried over. The full issues are never hosted.
- [x] The journal pages follow the same flag: while `ESSAYS_INDEXABLE` is `false` they carry `noindex`, the PDFs get an `X-Robots-Tag: noindex` header (`next.config.ts` reads the same constant), and none is in `sitemap.xml`. Setting it to `true` lifts all three.
