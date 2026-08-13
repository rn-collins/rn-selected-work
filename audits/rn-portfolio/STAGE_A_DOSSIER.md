# RN Portfolio — Stage A Audit Dossier

Audit date: August 12–13, 2026 (HST)  
Stage: A, read-only  
Recommended disposition: **D — superseded portfolio deployment; production redirect now active, with legacy-path cleanup and private archival still required**

**Post-crawl production update (August 13, 2026):** During final verification, Vercel began returning HTTP 308 from the legacy root and all tested legacy subpaths to `https://rn-selected-work.vercel.app/` with the original path preserved. This contains direct public access to `/data/builds.json` and supersedes the old homepage. It does not erase the historical exposure, establish cache deletion, or correctly map legacy subpaths: `/privacy`, `/privacy.html`, `/data/builds.json`, `/api/lead`, and `/api/track` currently land on successor 404 pages. Findings below describe the artifact and the pre-redirect production state that justified retirement; current-state language is expressly marked.

## 1. Asset identity

- **Repository:** private `rn-collins/rn-portfolio`, default branch `main`, created July 1, 2026, last pushed July 26, 2026; repository homepage points to the deployment below.
- **Deployment:** `https://rn-portfolio-khaki.vercel.app/`; public/indexable old interface during the crawl, now returning HTTP 308 to RN Selected Work.
- **Implementation:** static HTML/CSS/JavaScript; `data/builds.json`; privacy page; sitemap/robots; workflow and Python validator for the registry; no package manifest or server application.
- **Purpose represented by source:** “RN Builds,” a public portfolio, editorial index, product/service storefront, biography, and hidden operations registry.
- **Canonical successor:** `https://rn-selected-work.vercel.app/` and repository `rn-collins/rn-selected-work`. RN Selected Work is the current, deliberately curated public portfolio with six featured case studies, 29 organized Build Atlas records, individual `/work/*` case studies, live-build links, and `/for/*` audience views.
- **Ownership:** RN Builds/public workbench. It should not redefine Aloha AI or NSAG.
- **Privacy boundary:** failed in the audited artifact. `data/builds.json` was publicly retrievable and contained operational `target` and `slack` fields. A four-digit PIN (`2029`) was hard-coded client-side and only hid already-downloaded data. The subsequent 308 contains ordinary public retrieval but does not substitute for cache/exposure follow-up.
- **Status:** superseded. It was live, indexable, self-canonicalized, and linked from multiple RN sites during the crawl. As of final verification August 13, its Vercel deployment returns 308 redirects to RN Selected Work. Cross-estate link replacement, correct path mapping, cache/exposure review, and repository archival remain open.

## 2. Executive verdict

`rn-portfolio` is a superseded all-in-one portfolio/storefront/operations dashboard. Before the retirement redirect propagated, it loaded and filtered an 82-record build registry, displayed 70 writing links across five publication groupings, rendered a long biography and service/product inventory, and exposed a privacy notice. It did not provide case studies or evidence for each build, and its central claim—“each one live, each one doing real work”—was contradicted by its own registry (72 Live, 6 soon, 2 archived, 1 pending-vercel, 1 internal) and by accepted site audits showing broken, simulated, duplicated, prelaunch, or release-blocked systems.

It should not remain a second public portfolio. The current RN Selected Work solves the information-architecture problem more credibly: curated work, truthful status language, case studies, direct build links, organized collections, and audience-specific `/for/` views. The old deployment creates search, brand, contact, analytics, pricing, and factual fragmentation.

Top risks:

1. **Contained P0 internal-data exposure requiring follow-up:** client/prospect targets, Slack channel names, and internal operational routing were publicly delivered; client-side PIN was cosmetic. The 308 now blocks ordinary access, but cache, exposure-window, retention, and notification analysis are not evidenced.
2. **Contained P0 false portfolio state:** the retired interface treated 82 items as deployable proof and marked 72 Live despite estate audits and incompatible statuses. The redirect removes the interface from ordinary access; source/archive truth still requires governance.
3. **P1 stale brand architecture:** the About copy says Aloha AI is the commercial vehicle through which NSAG is deployed and NSAG is its intellectual architecture, contradicting the current required separation of NSAG and Aloha AI.
4. **P1 stale/high-risk offerings:** unverified Gumroad products, legal templates, subscriptions, placements, NSAG licenses, and CLE/CNE/CME offerings appear with prices and “live” or waitlist states.
5. **P1 broken data/contact behavior:** `/api/lead` and `/api/track` return 404; form code does not inspect HTTP status and hides the modal on a 404; analytics are routed through an unrelated DEA tracker endpoint while the privacy policy says no analytics are used.

Disposition: **D**. The production 308 retirement is now active. Complete it by mapping legacy paths to valid successor routes, purging/confirming caches and exposure boundaries, replacing inbound links, preserving only useful registry/audit material in private infrastructure, and archiving the old repository after dependency review.

## 3. Complete route map

| Route | Result | Notes |
|---|---:|---|
| `/` | 200 during crawl; 308 at final verification | Retired to RN Selected Work root |
| `/privacy` | 200 during crawl; 308 → successor 404 | Requires mapping to a real successor privacy route |
| `/privacy.html` | 200 during crawl; 308 → successor 404 | Same mapping defect |
| `/robots.txt` | 200 during crawl; 308 | Successor robots reached after redirect |
| `/sitemap.xml` | 200 during crawl; 308 | Successor sitemap reached after redirect |
| `/data/builds.json` | 200 during crawl; 308 → successor 404 | Direct exposure contained; cache/exposure follow-up open |
| `/og-image.png` | 200 expected from repository | Social image; source present |
| `/api/track` | 404 during crawl; 308 → successor 404 | Broken historical target; remove rather than preserve path |
| `/api/lead` | 404 during crawl; 308 → successor 404 | Broken historical target; remove rather than preserve path |
| `/for/culturalyst` | 404 | Audience-specific views exist only on successor |
| `/case/ownership-platform` | 404 | Case-study architecture absent; successor uses `/work/*` |

In-page interface states are JS-rendered rather than routes: Builds, Writing, About; build type filters; publication filters; internal PIN overlay; product/service lists; contact modal. No project/case-study routes exist.

The source contains 72 literal `href` attributes. Combining them with 82 registry deployment URLs yields 149 unique destinations, 144 external HTTP(S) destinations, plus `/sitemap.xml`, `#main-content`, and `/privacy`. All were inventoried; bulk remote destination status was not verified under the environment’s network boundary.

## 4. Complete interaction/control inventory

- Skip link to `#main-content`.
- Primary tabs: Builds, Writing, About.
- Build filters: All, Dashboards (`Monitoring`), Prospect Tools, Products, Reference Docs (`Static`). These omit many actual registry types and are labels-to-schema mismatches.
- 82 generated build cards: name, status, brand, type, description, target, URL; Slack/target detail conditionally shown after “unlock.”
- Internal access button, PIN input, Unlock, Cancel, overlay close. PIN is visible in source and affords no access control.
- Writing filters: All 70 pieces, Cannabis Law Report, Fat Nugs Magazine, Journal of Biophilic Design, Academic, New Bones Mag.
- 70 external article/publication links: 36 CLR, 24 FNM, 5 JBD, 4 academic, 1 New Bones.
- About CTA: Microsoft Bookings scoping call and self-link back to the same old portfolio.
- Footer: Aloha AI, email-copy button, LinkedIn, CLR, FNM, Privacy, AIAPC launch link.
- Two overlapping contact interfaces: email-copy/mailto floating action and “Contact the Architect” modal.
- Contact modal: name, email, message, Send, Cancel, backdrop close. Submit POSTs to missing `/api/lead` and closes on any resolved response, including 404.
- Product/service arrays: live products, services, courses/toolkits, subscriptions, coming-soon products; numerous Gumroad links and `#` pseudo-waitlists.
- Analytics: outbound product-click tracking, page view, tab, time-on-page, scroll milestones to `aloha-dea-tracker.vercel.app/api/lead`; a second scroll tracker POSTs to missing `/api/track`; UTM capture in sessionStorage.

## 5. Consumer journeys and observed results

**Prospective client:** arrives at a confident “each one live” claim, then encounters a very large, mixed registry without evidence hierarchy. Filters work against static fields but cannot distinguish shipped product, concept, prospect tool, duplicate, broken module, internal system, or archived build. Clicking a card leaves for its deployment; there is no case study, limitations, or ownership/status context. RN Selected Work offers that missing context.

**Editor/researcher:** Writing provides a broad, useful index and working category filters. However, counts and publication/role claims are hard-coded, links have no dates/verification state, and article duplicates/alias bylines are possible. This material is valuable to migrate into the current portfolio, not a reason to preserve a second domain.

**Buyer:** product lists display exact prices, live labels, future launch dates, and waitlist offerings. Many `#` waitlist controls do nothing. Gumroad availability, fulfillment, refund/license terms, legal review, CE accreditation, and product currency are not established by this portfolio. The site therefore functions as an unreliable catalog.

**Contact:** email-copy opens mailto and tries to send analytics to an unrelated endpoint. The architect form accepts data but POSTs to 404 and then clears/hides because `fetch` resolves on HTTP error. A visitor reasonably believes submission succeeded without confirmation.

**Internal operator:** clicking the low-opacity triangle reveals a PIN dialog. Entering the source-visible PIN exposes Slack and target fields, but those fields were already delivered in public JSON. An attacker does not need the PIN.

**Mobile/keyboard:** one 640px grid collapse exists, but the dense content and modal/PIN flows are not fully managed. Tabs and filters are native buttons. Dialogs lack `role=dialog`, accessible names, Escape handling, focus trap, and focus return. Browser automation could not be initialized in this environment; source/runtime HTTP inspection provides the evidence boundary.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Static portfolio render | Working | 200 HTML, registry loads |
| Build registry | Working but unsafe/stale | 82 records; public internal fields |
| Build filters | Partial | only 4 of 12 registry types exposed; category labels mismatch |
| Build links | Partial/unverified | external destinations; no per-build evidence/status validation |
| Writing index/filter | Working | 70 hard-coded pieces across five groupings |
| About narrative | Working, stale | materially outdated practice/module relationship claims |
| Internal PIN | Simulated security | hard-coded `2029`; data public before unlock |
| Product storefront | Partial/unverified | links/prices rendered; fulfillment and availability unverified |
| Waitlists | Broken/simulated | many `href:'#'` controls |
| Email copy/mailto | Partial | clipboard and new window; tracking undisclosed/inconsistent |
| Contact form | Broken/false success | `/api/lead` 404; no `response.ok` check |
| Analytics | Broken/inconsistent | cross-site lead endpoint plus local 404; privacy says none |
| Privacy notice | Present but inaccurate | describes Upstash/Slack and no analytics contrary to runtime |
| Case studies | Missing | no project routes |
| Audience-specific views | Missing | no `/for/*` |
| SEO | Working but harmful | self-canonical and fully indexable duplicate |
| CI registry validation | Working as structural validation | checks JSON form, not product truth or deployment health |

## 7. Copy and information-architecture findings

The old site tries to be five products at once: portfolio, estate registry, writing archive, résumé, and store. This produces scale without proof. RN Selected Work’s smaller number of explicit case studies and organized Build Atlas is the correct public IA.

Stale or misleading copy includes:

- “each one live, each one doing real work” conflicts with `soon`, `archived`, `pending-vercel`, and `internal` records and accepted audits.
- “built for clients and deployed as live products” conflates commissioned client work, independently initiated prospect concepts, public resources, and simulated prototypes.
- About says “Twenty-three live tools” while registry now contains 82 records and current RN Selected Work accounts for 35 case-study records.
- About says nine NSAG modules; current system has fifteen.
- “Aloha AI Consulting is the commercial vehicle through which NSAG is deployed” and “NSAG is the intellectual architecture behind [Aloha AI]” contradict the current definition: NSAG is a separate research-led institutional-design practice; Aloha AI may build infrastructure that implements NSAG, but the practices remain distinct.
- Claims of “active service lines,” “seven law clerk positions secured as a 1L,” institutional roles, client/prospect relationships, word counts, directory sizes, and publication statuses require evidence and privacy review.
- “verified against current law through June 2026,” “practitioner reference,” regulatory kits, AI-law memos, placement services, and specific outcomes are high-risk sales claims without visible methodology, jurisdiction, authorship/supervision, or update policy.
- CLE/CNE/CME product copy risks implying approved credit despite “accreditation applications in process” appearing elsewhere. Do not display credit designations until the provider/activity approvals are real and precisely named.
- The AIAPC “Launching Nov 2026” link is now time-sensitive and conflicts with separate AIAPC prelaunch audit requirements.
- Biography is too long for a portfolio and includes confidential/professional-context detail better handled in a verified résumé or selective bio.
- “Products” is not a visible primary tab despite code comments/analytics calling it the default; product architecture is buried and confusing.

## 8. Science/law/policy/regulatory claim ledger

This audit does not re-audit every linked build or article; their site-specific dossiers govern those claims. Portfolio-level issues:

| Claim class | Finding | Required boundary |
|---|---|---|
| 72 builds marked Live | Status label means deployed, not tested or usable | Derive from accepted crawl disposition, not URL existence |
| NSAG modules as standalone readiness instruments | Accepted module audits found broken/shared assessment paths and unvalidated instruments | Label release-blocked prototypes/components; no standalone product claim |
| NSAG CE/CLE/CNE/CME hours | Accreditation and delivery unverified; exact credit claims appear | Remove until provider approval/activity accreditation and disclosure requirements are complete |
| Legal templates “verified against current law” | No jurisdiction/update/supervising-attorney/method visible | Treat as legal information; state scope/date/method and counsel boundary |
| Placement/matching services | Raises UPL, confidentiality, conflicts, employment, fee/classification, student and school-policy issues | Govern under Clerking dossier; do not sell via duplicate portfolio |
| Psychedelic/cannabis regulatory products | Time-sensitive federal/state law and health claims | Exact effective dates, jurisdictions, primary sources, update owner, non-advice boundaries |
| Clinical/neuroscience products | Health, outcome, credential and evidence claims appear in linked estate | Evidence ledger and appropriate professional review before promotion |
| Publication count/roles | Hard-coded 70 pieces and several role labels | Verify authorship, publication status, duplicates, byline aliases, and current role permission |
| Prospect/client names and target descriptions | Public registry can imply engagement | Label independently initiated concepts; remove confidential/prospect operational details |

The portfolio must inherit the most conservative truth state from each accepted dossier. A successful Vercel response is not evidence of scientific validity, legal currency, client use, or working consumer behavior.

## 9. Accessibility and responsive findings

Positive: skip link, one H1, native main tabs/filters, responsive one-column grid at 640px, and most outbound links use `rel=noopener`.

Defects:

- PIN overlay and contact modal lack dialog semantics, accessible naming, focus trap, Escape close, initial focus contract, and focus restoration.
- Contact fields use placeholders instead of persistent labels; submission has no status/error live region.
- Build, writing, and publication grids are replaced wholesale without `aria-live`, focus management, or state announcement.
- Active tab/filter state is visual only; no `aria-selected`, tablist/tab roles, or `aria-pressed`.
- Low-opacity internal button has no accessible name and uses a triangle glyph.
- The email-copy feedback is visual and transient, not announced.
- No `prefers-reduced-motion` support was found; hover transforms and skip-link transitions remain.
- Dense biography, cards, product catalog, and fixed overlapping contact buttons increase mobile scroll and obstruction; two fixed contact controls may overlap content and each other.
- Typography is often 0.65–0.75rem; contrast and 200%/400% reflow require verification.
- Article/card links often rely on card context; repeated external behaviors are not consistently announced.

## 10. Brand-architecture findings

This surface is the clearest example of the brand fragmentation RN Selected Work was created to fix. It treats Aloha AI as the umbrella for much of RN’s identity and turns NSAG into its internal architecture. Current brand governance requires:

- **RN Selected Work:** canonical public evidence/portfolio index.
- **RN Builds:** public workbench identity around research, testing, and making, not a store plus internal CRM.
- **Aloha AI:** developing client-facing strategy and build practice.
- **NSAG:** separate research-led institutional-design practice and home of Nervous-System-Aware Governance.
- **Institutions of One:** separate research/applied inquiry.

The old site’s 14 brand labels and 82 undifferentiated records make the estate look inflated and commercially overextended. The successor’s five work collections and explicit statuses are materially stronger. Keep writing breadth, but not the old ownership model.

## 11. Business-model and conversion findings

Audience is unclear: hiring manager, client, product buyer, student, institution, editor, collaborator, and internal operator all share one page. Conversion paths conflict: mailto, Microsoft Bookings tied to Northeastern, Gumroad, dead contact, inert waitlists, Aloha AI, AIAPC, and linked products.

The catalog contains prices from $9 products through $15,000 city licenses and retainers, plus legal placement subscriptions and CE tracks. There is no unified terms, refund, license, delivery, support, tax, renewal, privacy, accreditation, conflict, or maintenance framework. These are business proposals, not established offerings merely because an array says `live`.

The right business architecture is:

1. RN Selected Work earns trust through evidence and case studies.
2. Aloha AI owns a focused client-services conversion path.
3. NSAG owns its own advisory/education conversion only after governance and accreditation controls.
4. Product businesses use their own validated storefront/terms, not the portfolio.
5. Internal estate/status/CRM data stays authenticated and private.

## 12. Security, privacy, data, and operational findings

- **Critical:** `data/builds.json` publicly exposes target organizations/audiences and Slack channels. Several are named prospects or professional contexts. Remove from the deployment and search/cache layers; assess whether notifications, URLs, or client confidentiality were exposed elsewhere.
- Hard-coded PIN is not authentication. Anyone can read `2029`, call functions, or inspect JSON.
- Privacy policy says no tracking cookies or third-party analytics; source sends page view, time, tab, scroll, product-click, referrer, and synthetic analytics records to an Aloha DEA Tracker lead endpoint and stores UTMs in sessionStorage.
- Privacy says form data goes to Upstash/Slack, but local lead endpoint is absent; cross-site endpoint behavior and controller/processor ownership are not explained.
- Contact form treats HTTP 404 as success and gives no durable confirmation/error.
- No CSP, HSTS, frame-ancestors, Permissions-Policy, Referrer-Policy, or nosniff headers appear in `vercel.json`; only cache rules are configured.
- Public JSON lacks cache/privacy segregation. Client-side hiding cannot protect internal fields.
- Registry CI validates required fields, contiguous numbers, and URL uniqueness only. It does not crawl deployments, validate disposition, inspect claims, prevent confidential fields, or sync accepted dossiers.
- Repository contains audit reports, an evidence-management transcript, a twin constitution, scripts, and a 420KB embedded Entheogen Atlas HTML. These do not belong in a canonical public portfolio deployment artifact and increase operational/rights exposure.
- No package/build is required, which is maintainable, but 155KB of monolithic HTML plus large inline product/writing/about arrays creates update drift and XSS review risk.
- Dynamic HTML interpolates registry/content into `innerHTML`; currently repository-controlled, but future external ingestion would require sanitization.

## 13. Defects ranked P0–P3

**P0 — blocking**

1. Public exposure of operational target and Slack fields; cosmetic hard-coded PIN.
2. Duplicate indexable portfolio presenting unaudited/broken/private assets as live working systems.
3. Public commercial/legal/medical/CE product catalog without verified availability, terms, accreditation, and claim governance.

**P1 — serious**

1. Aloha AI/NSAG relationship contradicts current brand architecture.
2. Contact form false-success behavior and 404 endpoint.
3. Privacy notice materially contradicts analytics and data flows.
4. Prospect/client descriptions can imply engagement or reveal strategy.
5. Old domain self-canonicalizes, appears in sitemap, and allows indexing instead of redirecting.
6. Accessibility defects in both dialogs and dynamic state changes.

**P2 — material**

1. Stale counts: 23 tools, nine NSAG modules, 82 registry records, 70 writing pieces, and varied launch dates.
2. Build filters do not cover registry taxonomy.
3. No case studies, evidence status, source methodology, or audience-specific views.
4. Multiple contradictory contact/conversion paths.
5. Missing security headers and registry truth validation.
6. Legacy RN-portfolio links persist in other deployed assets.

**P3 — polish**

1. Excessive biography length, small type, duplicate fixed contact controls.
2. Self-link “See the builds” on the About view.
3. Inconsistent labels/casing/status vocabulary.

## 14. Exact remediation plan with file-level targets

No source edits were made in Stage A.

1. **Emergency privacy action:** remove/protect `data/builds.json` and invalidate caches. Review all `target`/`slack` disclosures and notify affected owners if required. Do not rely on changing the PIN.
2. **Vercel project/domain:** temporarily set `X-Robots-Tag: noindex, nofollow`; after link/dependency mapping, configure permanent 308 redirects: `/` → `https://rn-selected-work.vercel.app/`; `/privacy` and `/privacy.html` → the current portfolio privacy route when available; unknown legacy paths → current home or a specific mapped case study. Preserve query parameters only if privacy-safe.
3. **`robots.txt`, `sitemap.xml`, canonical/OG metadata:** remove old sitemap from indexing and point canonical/public social identity to RN Selected Work during transition.
4. **`data/builds.json`:** migrate public-safe fields into the accepted RN Selected Work registry only after dossier reconciliation. Move `slack`, `target`, client/prospect state, release gates, and operations notes to authenticated internal infrastructure. Assign final P/C/I/D/E/X, parent, privacy and crawl status.
5. **`index.html`:** do not maintain two portfolio UIs. Replace with a minimal redirect/fallback notice during cutover, then retire. Remove PIN, products, analytics, contact forms, stale About copy, and cross-site DEA-tracker telemetry.
6. **`privacy.html`:** reconcile actual controllers/processors/events/retention/deletion before redirect. The canonical portfolio needs an accurate policy if it collects data.
7. **Repository non-deployment files:** move audit reports, internal constitution/transcript, scripts, estate registry, and embedded `entheogen-atlas-v5.html` into a private operations archive with ownership/access controls.
8. **Cross-estate links:** replace `rn-portfolio-khaki.vercel.app` in Fadiman Atlas and every other repo/deployment with RN Selected Work; search all repositories and Vercel environment/config references before retiring alias.
9. **RN Selected Work content:** selectively migrate verified writing not already present; preserve aliases/bylines/publication metadata; never import old `Live` labels or product claims automatically.
10. **Verification:** test redirects, old bookmarks, OG/canonical, noindex removal timing, internal-data purge/cache, current `/work/*` and `/for/*`, link map, keyboard/mobile, and analytics/privacy behavior.

## 15. Recommended estate disposition

**D — duplicate/superseded alternate portfolio.** Canonical public portfolio is **RN Selected Work** at `https://rn-selected-work.vercel.app/`. `rn-portfolio-khaki.vercel.app` is now redirected and should remain retired. The `rn-portfolio` repository may be archived only after useful registry/audit evidence is migrated into private operations and all external dependencies are removed.

This is not P: two public portfolio case-study systems should not coexist. It is not C: the deployment is not a consumer component of RN Selected Work. It is not E: its role is resolved, even though it contains experimental catalogs. It is not X immediately because redirects and data migration are required; after successful retirement, treat the deployment as D/retired and the residual historical code as X/private archive.

## 16. Proposed RN Selected Work case-study corrections

- Do not add `rn-portfolio` as a build or case study. RN Selected Work is the index itself, not portfolio content.
- Add a master-ledger record: “`rn-portfolio` — D, superseded public portfolio and unsafe mixed internal/public registry; canonical successor `rn-selected-work`; purge internal fields, redirect domain, archive repository after migration.”
- RN Selected Work must not inherit the old claim that everything is live or working. Status comes from accepted dossiers.
- Preserve the user’s desired architecture: all legitimate builds organized in the main atlas; separate “Read case study” and “Open live build” actions; due-diligence-driven `/for/<client>` pages.
- Migrate verified writing coverage from the old 70-piece index only after article-by-article authorship/link/date audit, including RN Collins, Rayven-Nikkita Collins, Nikkita Collins, and RN Williams aliases.
- Correct any current RN Selected Work copy that still calls release-blocked modules/tools “live assessment,” “working,” or independently validated based solely on deployment.
- Keep NSAG and Aloha AI distinct in all successor bios and case studies, consistent with the current edited definition.

## 17. Evidence appendix

### Live and repository evidence

- Old deployment: `https://rn-portfolio-khaki.vercel.app/` — 200, 155,902-byte document during the initial audit; HTTP 308 to `https://rn-selected-work.vercel.app/` at final verification on August 13.
- Final redirect probes: `/`, `/privacy`, `/privacy.html`, `/robots.txt`, `/sitemap.xml`, `/data/builds.json`, `/api/lead`, and `/api/track` all returned 308. The root resolves successfully; `/privacy`, `/privacy.html`, `/data/builds.json`, `/api/lead`, and `/api/track` resolve to successor 404 pages because the redirect preserves paths.
- Canonical successor: `https://rn-selected-work.vercel.app/` — title “RN Selected Work”; six featured builds, 29 organized additional builds, `/work/*` case studies, separate live links.
- Repository: `https://github.com/rn-collins/rn-portfolio` (private; metadata and complete main tree inspected through connected GitHub access).
- Key repository files: `index.html`, `data/builds.json`, `privacy.html`, `vercel.json`, `robots.txt`, `sitemap.xml`, `.github/workflows/extract-builds.yml`, `scripts/extract_builds.py`, audit/evidence documents.
- Registry facts: 82 records; 72 Live, 6 soon, 2 archived, 1 pending-vercel, 1 internal; 46 Aloha AI, 22 NSAG, 14 other-brand records; 12 type values.
- Link inventory: 149 unique combined destinations; 144 external HTTP(S).
- Broken routes observed: `/api/track`, `/api/lead`, `/for/culturalyst`, `/case/ownership-platform` returned 404.
- Public privacy contradiction: `privacy.html` says no tracking analytics, while `index.html` tracks page views, tabs, time, scrolling, product clicks, referrer and UTMs.
- Hard-coded client-side PIN at `index.html` lines 687–706; public internal registry fields in `data/builds.json`.
- Full route/control evidence is in `audits/rn-portfolio/ROUTE_CONTROL_LEDGER.md`.

### Explicit unverified areas

- The browser-control runtime required by the audit skill was unavailable, so screenshots, computed styles, console logs, and assistive-technology runs were not captured. Live HTTP, source, repository, data and configuration were inspected instead.
- External destination health, Gumroad availability, checkout, Bookings, publication links, and all 82 linked deployments were inventoried but not re-crawled here; accepted per-site dossiers govern assets already audited.
- No contact, booking, purchase, signup, waitlist, or other consequential form was submitted.
- Vercel project settings, all aliases, analytics dashboard, caches, and environment variables were not available; repository `vercel.json` was inspected and live redirect behavior was independently probed.
- Publication roles/counts and all biography/employment/client claims were not independently verified.
- No claim is made that old portfolio data has been indexed, cached, or accessed by third parties; exposure means it was publicly retrievable.
