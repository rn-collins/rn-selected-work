# Psych Ops Directory — Stage A Recertification Dossier

Audit date: August 13, 2026 (HST)  
Stage: A, read-only represented-site recertification  
Recommended disposition: **P — retain one canonical standalone case, but treat the current public release as blocked pending P0 security/data-integrity remediation**

## 1. Asset identity: repository, deployment, ownership, privacy and count

- **Canonical build:** Psych Ops Directory (`psych-ops-directory`).
- **Repository:** private `rn-collins/psych-ops-directory`, branch `main`; inspected tree `8e3d3d48ccb001bc9c16db22fe5be6af44f3cc6d`.
- **Complete repository surface:** `.gitignore`; `api/admin.js`, `analytics.js`, `flag.js`, `listings-static.js`, `listings.js`, `seed.js`, `submit.js`, `subscribe.js`, `track.js`; root `index.html`; `package.json`; `public/admin.html`; `public/index.html`; `vercel.json`.
- **Deployment:** public `https://psych-ops-directory.vercel.app/`; Vercel project `prj_vYCHMXH6etj1SLjlukA3QRMgqqLb`, production READY in the estate reconciliation.
- **Parent/practice:** an independently initiated psychedelic-operations research product, built with Aloha AI technical/product infrastructure. It is not NSAG, not Institutions of One and not a commissioned provider marketplace.
- **Privacy boundary:** the consumer directory is public; source and operational/admin infrastructure are private. Submission, flag, subscriber, analytics and administrative records must remain private.
- **Canonical count:** **one repository + one canonical deployment + one RN Selected Work case = one build**. The 177 displayed listings, backend records, 23 categories, APIs, comparison view and CSV are features/data, not separate builds. Keep it distinct from Psychedelic Operations Intelligence (operator intelligence), Entheogen Atlas (geographic/legal knowledge) and Psychedelic Law Library (legal education).
- **Current estate treatment:** `P`, private repository/public deployment, canonical parent/case `psych-ops-directory`. This Stage A recertification replaces the prior “not independently recertified” caveat.

## 2. Executive verdict

Psych Ops Directory is a genuine, useful public research artifact. A consumer can search and filter a large embedded data set, open record detail, select and compare up to three records, export the current result set, and inspect the three-tier editorial methodology. It demonstrates taxonomy design, ecosystem research and interaction design more strongly than a conventional static vendor list.

It is not currently a defensible “vetted” marketplace or verified provider system. The consumer page displays **177 embedded records**, while `/api/listings` returns **178 backend records**, including five duplicate IDs. The consumer does not load that API, so edits/approvals in the backend do not automatically change the directory users see. The live page claims 22 categories in metadata, displays 23 categories in the interface, and contains 23 distinct embedded values; one of those is a policy reference category, not a vendor category. The page says “v5 · reviewed August 2026,” while its own backend `lastUpdated` is June 13, 2026 and no per-record source, verifier, verified date or expiration exists.

The release also has a severe administrative risk: source falls back to a hard-coded admin PIN (`2029`) if the environment variable is absent, accepts the PIN in query strings, and exposes state-changing seed/admin operations without proper identity, RBAC, audit history, CSRF protection or rate limits. The public `/admin` route currently returns 404, but the vulnerable APIs exist and return 401 without a PIN. No exploit attempt was made.

The directory should continue to exist and retain a standalone portfolio case because its real information architecture and working consumer tools are substantial. Public promotion and conversion should wait until administrative access is rebuilt, the consumer/backoffice data path is unified, all records receive traceable evidence/currentness fields, “vetted” is replaced with bounded editorial language, sensitive analytics/submission flows receive privacy and abuse controls, and the 177/178/22/23 contradictions are resolved.

## 3. Complete route, source, API and external-surface map

### Live first-party routes

| Route | Observed result | Finding |
|---|---:|---|
| `/` | 200, 162,597-byte HTML | only public consumer page; renders 177 records from embedded JavaScript |
| `/admin` | 404 | intended admin page is not reachable at the live canonical deployment |
| `/robots.txt` | 404 | missing despite public/indexable product |
| `/sitemap.xml` | 404 | head advertises `/sitemap.xml`, but the file is absent |
| arbitrary route | 404 | no false SPA success; no additional consumer routes |
| `/api/listings` | 200 | returns 178 Redis-backed records and `lastUpdated`; GET also increments analytics |
| `/api/analytics` | 200 | publicly returns aggregate views, search terms, categories, compare and export counts |
| `/api/admin` | 401 without PIN | private admin data/action API exists; auth design is unsafe in source |
| `/api/seed` | 401 without PIN | seed/force-reseed API exists; unsafe query-PIN and state-changing GET design |
| `/api/listings-static` | 401 without PIN | static-seed API exists; same unsafe fallback-PIN design |
| `/api/submit` | 405 on safe GET | public POST submission endpoint; no submission made |
| `/api/flag` | 405 on safe GET | public POST flag endpoint; no flag made |
| `/api/subscribe` | 405 on safe GET | public POST subscription endpoint; no subscription made and no visible consumer subscribe control was found |
| `/api/track` | 405 on safe GET | public POST analytics endpoint; page sends page-view and interaction telemetry |
| `/api/verify` | 404 | `vercel.json` schedules a weekly `/api/verify` cron, but no function exists |

### Repository/deployment divergence

- `public/index.html` is the deployed consumer page. Root `index.html` is a second 105 KB page/source artifact and creates an avoidable stale-copy risk.
- `public/admin.html` exists in source, and `vercel.json` intends `/admin` to route to it, but production returned 404.
- `api/listings.js` is a dynamic data service, but the deployed consumer page reads a serialized `DATA` constant instead of calling it.
- `api/listings-static.js` says all 178 listings are seed data; the public page embeds 177.
- `vercel.json` declares a weekly verification cron for an absent `/api/verify` implementation.
- `package.json` contains no dependencies, scripts, tests or build command. This is a static HTML/function deployment rather than a tested application build.

### External destinations

The footer/related-work surface links to Psychedelic Operations Intelligence, Entheogen Atlas, Psychonaut Bookworm, Psychedelic Law Library, Aloha AI Consulting, LinkedIn and the retired `rn-portfolio-khaki` RN Builds URL. Each listing may link to a provider/institution domain. Those links are destinations, not citations: the directory supplies no claim-level source URLs, archived evidence or primary-source provenance that would let an auditor verify why a tier or sentence was assigned. The 177 provider destinations were inventoried from data, but a full independent due-diligence crawl of every third-party organization was not performed and must not be implied by this dossier.

## 4. Complete interaction/control inventory

| Surface/control | Count/state | Verified behavior or boundary |
|---|---:|---|
| skip link | 1 | targets `#main-content`; positive baseline |
| search field + Search | 2 | searches name/category/subcategory/services/note; live `oninput` search and Enter supported |
| Clear | 1 | resets query; category remains selected |
| category pills | 24 including All | filters against 23 distinct category values |
| example-query chips | 15 | write a query, rerender and track search telemetry |
| listing cards | 177 | click opens detail; card itself is a nonsemantic clickable `<div>` and is not keyboard-operable |
| provider-title links | data-dependent | open external provider domain in new tab; URL is force-prefixed with `https://` |
| Compare mode | 1 | visual mode toggle only; per-card compare controls exist regardless; state is not persisted |
| per-card Add/Compare | 177 | select up to three; fourth triggers alert |
| compare bar Clear/Compare | 2 | clears or opens comparison; comparison requires at least two records |
| comparison modal | 1 | side-by-side fields; raw dynamic values are inserted with `innerHTML` |
| Export CSV | 1 | downloads current filtered set and tracks export; no spreadsheet-formula hardening |
| Submit Listing modal | 9 fields + submit | client validation requires name/category/services; consequential POST intentionally not submitted |
| detail modal | 1 | shows description, pricing, editor note and destination; Escape/overlay close supported |
| per-card Flag | 177 | opens reason/optional email form; consequential POST intentionally not submitted |
| Contact the Architect | 3 fields + send/cancel | sends to external RN API; only email presence is checked; consequential lead not submitted |
| footer/related links | 7 | external navigation; several miss `rel="noopener"` despite `_blank` |
| subscription | no visible control | backend endpoint exists without a corresponding consumer surface |

The search uses **OR matching** across query words of length three or more, not phrase/all-term matching. “No results” is clear. Dynamic results are announced through `aria-live`. No pagination exists, so all 177 cards are injected at once.

## 5. Consumer journeys and observed results

### Find an operational provider

A visitor sees the directory purpose, counts, tier legend, search, category navigation and examples without an account. Search and filtering are real. Cards expose long service summaries and price signals. The result is useful for discovery, but “vetted” and “verified relationship” can be mistaken for quality, active license, legal availability, safety or recommendation.

### Compare candidates

Users can add two or three records and obtain a side-by-side view. This is a real working decision-support pattern. It compares editorial fields only; it does not compare jurisdiction, active licensure, insurance, complaint history, last verification, source strength, conflicts or engagement fit. It must be framed as a research worksheet, not due diligence completed by RN.

### Export a working list

CSV export is real and respects current filters. It exports the embedded consumer snapshot, not the 178-record backend. The generated cells are quoted but not neutralized against values beginning `=`, `+`, `-` or `@`; approved user-submitted content can therefore create spreadsheet-formula injection risk.

### Submit or correct a record

Both forms are implemented as POST flows and show success based on HTTP status. Source stores user content and optional contact data in Redis and may forward it to Slack. There is no privacy notice, consent statement, retention/deletion policy, CAPTCHA, rate limit, field-length policy or complaint/escalation route. No consequential submission was made.

### Contact RN

The fixed “Contact the Architect” form sends name, email and free text to `rn-api-rn-collins.vercel.app/api/lead`. It treats any fulfilled `fetch` as “Sent!” without checking `response.ok`; a 4xx/5xx can therefore be falsely reported as success. “Architect” is vague in a vendor-directory context. Use “Contact RN about the directory,” show what happens next and supply privacy terms.

## 6. Functional matrix: real, partial, simulated, broken and missing

| Capability | Status | Evidence |
|---|---|---|
| public 177-record directory | working snapshot | embedded client data renders 177 cards |
| keyword/category discovery | working | client-side filtering |
| detail | working with accessibility defects | client modal |
| compare up to three | working with injection/accessibility defects | client state/modal |
| filtered CSV | working with security defect | client data URI export |
| submission queue | implemented, not consumer-submitted in audit | POST API + Redis/admin flow |
| flag queue | implemented, not consumer-submitted in audit | POST API + Redis/admin flow |
| contact lead | implemented but false-success prone | external RN API call |
| analytics | working, undisclosed and poisonable | public POST/public aggregate GET |
| dynamic listings | backend works but not integrated | 178-record API unused by page |
| editorial approval | implemented but unsafe | admin API assigns approved submissions Tier 2 automatically |
| admin UI | broken/unavailable in production | `/admin` 404 |
| verification cycle | broken/missing | scheduled `/api/verify` is 404 |
| subscriber alerts | backend only/partial | no public control, no unsubscribe/double opt-in; success does not guarantee delivery |
| record-level evidence | missing | no source/verified-at/reviewer fields |
| legal/license/status monitoring | missing | prose snapshot only |
| recommendation/fit assessment | intentionally unavailable | must remain outside product claim |
| automated scraping | intentionally unavailable | copy correctly says editorial, not automatic |

## 7. Copy and information-architecture findings

### Strong

- The central problem and operational-category framing are clear.
- The tier legend is visible, and Tier 3 explicitly tells users to verify independently.
- “What this is,” “Why it exists,” methodology and usage instructions teach the interface.
- Submission/flag copy identifies RN Collins as editor and gives a correction pathway.

### Material corrections

- Remove **“vetted vendors”** from description/Open Graph. Tier 1 proves at most that RN documented a named relationship, not competence, safety, legality, licensure, insurance, active availability or fit.
- Replace **“verified”** with “documented in a cited public source as of [date]” and link that source. Do not use one evidence tier to combine clients, publications, licenses and conference participation as equivalent signals.
- Resolve **22 versus 23 categories**. The embedded data has 23 values because “Banking” and “Banking & Financial Services” are separate and includes `B-SAFER`, a policy reference rather than a provider. Normalize taxonomy and label references separately.
- Resolve **177 versus 178**. The consumer product is 177; backend is 178 with duplicates. The case must report what the consumer can actually inspect.
- “v5 · reviewed August 2026” is not supported by per-record evidence and conflicts with backend `lastUpdated` June 13, 2026. Use a precise snapshot date and review coverage statement.
- Avoid superlatives (“leading,” “premier,” “world’s first/largest,” “nation’s leading”) unless sourced, scoped and dated.
- Price values are volatile estimates and sometimes provider segmentation, not quotes. Label source/date/currency/tax/scope or omit.
- “Contact the Architect” and “Operational Intelligence” overbrand a straightforward editorial directory. Lead with utility and editorial accountability.
- Footer points “RN Builds” to the retired `rn-portfolio-khaki.vercel.app`, not RN Selected Work.
- Add an always-visible boundary adjacent to search/results: inclusion and tiering are research signals, not endorsement, active-license confirmation, conflict check, legal/clinical/financial advice or engagement recommendation.

## 8. Science, health, law, policy and regulatory claim ledger

The data contains hundreds of fast-changing factual assertions—active practices, personnel, attorney admissions, DEA/FDA/OHA/DORA status, RFRA outcomes, service-center licenses, insurance products, prices, geographic coverage, trial stages, training approval, study results, session counts, institutional “firsts,” adverse events and policy status. No record contains a claim-level citation. Therefore the audit cannot certify the 177 records as current or accurate.

| Claim family/example | Risk | Required evidence/boundary |
|---|---|---|
| Tier 1 “verified named psychedelic relationship” | relationship evidence is not provider quality/authorization | public source URL, exact proposition, date accessed, reviewer, conflict disclosure |
| OHA/DORA “approved/licensed” programs and service centers | status can lapse or scope can differ | link authoritative live registry; license/program identifier, jurisdiction, status and checked date |
| DEA/RFRA/religious-use outcomes | settlement/exemption does not generalize to other churches/users | court/agency document, docket, scope, current status; no “legal” implication |
| ketamine/psilocybin/MDMA provider claims | medical, controlled-substance and jurisdictional risk | exact regulatory/clinical role; approval versus off-label/research/state program; safety boundary |
| CRO/trial/study claims | trial stage and collaboration can change | ClinicalTrials.gov/regulator/publication record with date and study identifier |
| Mindbloom 600,000 sessions/38 states/11,441-client study | marketing/outcome data and jurisdiction change | company-source label plus publication; design, comparator, limits; no efficacy endorsement |
| SAFER Banking Act “not enacted” | legislative status is time-sensitive | Congress.gov bill/status/version and checked date; keep reference separate from providers |
| OHA/Colorado registries “all/current/authoritative” | registry completeness/status depends on agency | direct official registry link and retrieval date |
| provider pricing and availability | high-volatility commercial claim | provider quote/page, date, inclusions/exclusions; “estimate—verify” |
| Soul Quest contested status/participant death | high reputational/defamation sensitivity | court/agency/public-record and reliable reporting citations; neutral attributed language; response/correction procedure |
| “Indigenous-aligned,” identity, church and peyote claims | cultural/identity and sacred-practice sensitivity | self-identification/primary source; avoid conferring legitimacy or collapsing distinct traditions |
| “leading/first/largest/premier” | unsupported comparative advertising | defined comparison set and authoritative source or remove |

The directory is informational and should not recommend a clinician, lawyer, bank, retreat, church or service. Users need independent professional due diligence. Clinical/retreat records need explicit emergency/safety, licensure and jurisdiction boundaries; a directory card is not evidence of treatment safety or efficacy. Legal records need jurisdiction/admission/scope checks. Financial and investment records need regulatory status and conflict checks. A single generic footer disclaimer is insufficient; boundaries must appear at decision points and in exports.

Minimum record schema: stable unique ID; entity and service type; jurisdiction; source proposition; source URL/type; verified date; reviewer; tier rationale; license/registration ID and authoritative status link where applicable; volatility/expiry; provider response; correction history; conflicts/compensation; archived/withdrawn state. Keep source evidence immutable and separately version editorial conclusions.

## 9. Accessibility, keyboard, responsive and metadata findings

- Positive: semantic header/main/footer, skip link, search landmark, category-nav label, search labels and live result count.
- Listing cards are clickable `<div>` elements without role/tabindex/keyboard activation. Keyboard users can reach nested links/buttons but cannot open card detail from the card affordance.
- Dynamically created category pills and example chips are `<div>` click targets, not buttons.
- Compare/submit/flag overlays mostly lack `role="dialog"`, `aria-modal`, labelled-by relationships, initial focus, focus trap and focus return. Escape closes overlays but does not reliably restore focus/body state.
- Close-glyph controls have labels, positive; many other buttons depend on visible text only, acceptable where unambiguous.
- Cards and comparison modal render dynamic/untrusted values through `innerHTML`, compounding both accessibility and XSS risk.
- Fixed contact/compare bars can obscure content on small screens. CSS has one `max-width:640px` adaptation, but no browser runtime/mobile visual run was completed because the available Playwright installation lacked its Chromium executable. Desktop/mobile crop, touch target, 200% zoom, contrast and reflow remain an explicit verification gate.
- No reduced-motion media query was found. Focus styling is primarily border-color changes; a uniform `:focus-visible` system is absent.
- Title, description, canonical, Open Graph title/description/type/url, Twitter summary and Person/WebPage JSON-LD exist.
- Missing: Open Graph/Twitter image, author meta, durable product/dataset structured data, working sitemap and robots. JSON-LD calls RN “AI Educator & Consultant,” while visible authorship is “Editor”; align role with the artifact.

## 10. RN portrait and authorship inspection

**Status:** authorship **present but insufficiently governed**; portrait **missing**; portrait **strategically warranted once, not throughout the product**.

- Visible page evidence: “All submissions are reviewed by RN Collins,” “Curated by RN Collins · Editor · v5 June 2026,” LinkedIn and Aloha AI footer attribution. The header says reviewed August 2026, creating a June/August authorship-currentness conflict.
- Structured data identifies RN Collins as author, but there is no visible methodology owner biography, reviewer qualifications, conflicts/compensation statement, editorial policy, correction history or source-review accountability.
- No `<img>` or portrait asset exists in the live page/repository tree. There is no case-specific OG/social image.
- A portrait is not warranted in the search hero, every card, comparison, flag form or footer: repetition would distract from neutral discovery and could imply personal endorsement of listed providers.
- A single approved canonical RN portrait is strategically useful in an **“Editor and methodology”** block immediately after “How listings are vetted,” next to: RN’s exact role; relevant research/legal/science communication background stated without licensure implication; independence; compensation/conflicts; review cadence; corrections/contact; and last full/partial review dates.
- Use only the approved canonical portrait source, not an inferred LinkedIn scrape or AI substitute. Recommended derivative: face-safe 4:5 or square source, responsive `srcset`, approximately 128–192 px rendered, verified desktop/mobile crop and compression. Alt: “RN Collins, editor of Psych Ops Directory” if the adjacent text does not already supply the same information; otherwise empty alt to avoid duplication.
- RN Selected Work should use a product/interface thumbnail as the case-card image because the artifact is a directory. Inside the case, a small portrait can accompany the authorship/methodology section. Use a tailored directory/product OG image, not a portrait-only social card.
- Before publication test asset integrity, natural dimensions, lazy-loading below fold, crop at 390 px and desktop, alt behavior, Open Graph/Twitter preview and Person/WebPage/Dataset structured-data consistency.

## 11. Brand architecture findings

Psych Ops Directory strengthens RN’s portfolio when framed as evidence-aware ecosystem infrastructure: it makes scattered operational knowledge searchable and exposes the need for verification. It becomes a liability when framed as “vetted” provider selection without evidence provenance or when Aloha AI looks like a professional-services endorser of every listed business.

Correct architecture:

- **RN Collins:** editor/researcher and independent initiator; owns methodology and corrections.
- **Aloha AI:** technical/product build practice and possible service conversion (“build evidence-aware directories/knowledge systems”).
- **NSAG:** no ownership claim unless a separately documented NSAG governance assessment is actually applied.
- **Psychedelic Operations Intelligence:** separate operating-intelligence product, cross-linked as related work, not a duplicate or parent.
- **RN Selected Work:** canonical portfolio destination, replacing the retired RN Builds link.

Do not imply affiliation, authorization, client work, partnership, endorsement or commissioning by any listed organization. If a listing concerns RN or an RN product, mark self-interest visibly and exclude it from aggregate “vendor verification” counts or comparisons unless a transparent policy justifies it.

## 12. Business model and conversion findings

- **Beneficiaries:** psychedelic operators, research teams, clinicians, policy organizations and professional-service providers beginning vendor discovery.
- **Decision-makers/buyers:** founders/COOs, compliance/research leaders, program directors and ecosystem organizations that need a maintained private/public directory.
- **Economic value:** reduces discovery time, creates a diligence starting set and demonstrates RN’s ability to structure fragmented regulated-market information.
- **Current conversion:** free public resource → “Contact the Architect” → external Aloha/RN lead API. No paid placement or provider transaction is disclosed.
- **Trust barrier:** the product asks users to rely on editorial tiers without showing the underlying evidence, cadence, conflicts, limitations or maintenance service level.
- **Adoption barrier:** long unpaginated results, inconsistent data paths, volatile claims and no record-level provenance.
- **Recommended model:** keep the public directory free and non-transactional. Convert toward paid research/system design for organizations that need a governed taxonomy, internal vendor knowledge base or evidence/currentness workflow. If sponsorship, paid placement, referral or data licensing ever exists, separate it from editorial tiering and disclose it per record.
- **Maintenance reality:** a 177-record regulated/health directory is an ongoing editorial and risk obligation, not a one-time portfolio asset. Publish a sustainable cadence, change log and withdrawal policy or freeze/archive the snapshot.

## 13. Security, privacy, data and operational findings

### P0 — blocking

1. `api/admin.js`, `api/seed.js` and `api/listings-static.js` fall back to admin PIN `2029`; admin/seed accept PIN via header or query. Remove fallback and query authentication, rotate the real secret, and replace shared PINs with identity-based authorization.
2. Seed/admin permit high-impact state changes, including force reseed and a state-changing GET. Admin mutations lack RBAC, audit identity, CSRF controls and safe concurrency.
3. Consumer data and Redis data diverge. Backend approval does not update the embedded public snapshot; five backend IDs are duplicated (`FT-02`, `FT-03`, `FT-04`, `CM-01`, `RC-01`). No source of truth exists.
4. Hundreds of legal/clinical/licensure/reputational claims lack claim-level sources, verified dates and review history while the site markets records as vetted/verified.

### P1 — serious

- Open submission/flag/subscribe/track endpoints have wildcard CORS, no rate limiting/CAPTCHA, weak/no length/format validation and are vulnerable to queue/analytics poisoning and cost abuse.
- Submission/flag/email/search data are stored and/or forwarded to Slack/Resend without a privacy notice, consent, retention/deletion policy or data-subject process.
- `/api/analytics` publicly exposes popular search terms. Search intent in a psychedelic/health/legal directory can be sensitive; raw queries are not safe public analytics.
- HTML templates render record and approved user-submission values via `innerHTML`; stored XSS is possible. URL handling blindly prefixes `https://` and does not validate allowed schemes/host syntax before storage/rendering.
- CSV export lacks formula-injection neutralization.
- Admin reads/writes the full listings array using GET/SET, allowing concurrent lost updates and no atomic versioning.
- `/api/verify` cron is missing; there is no actual automated currentness check despite configuration.
- Contact reports success without `response.ok`; subscription reports success even when downstream email delivery is absent/fails.

### P2 — material

- Page-load instrumentation sends both a `page_view` event and a separate `view` event, risking double counting. `/api/listings` GET also increments a view counter.
- Analytics are unauthenticated, client-generated and unsuitable as portfolio outcome evidence.
- No tests, build validation, linting, dependency lock, schema validation, backups/restore procedure, monitoring or incident playbook is present.
- Missing working robots/sitemap; public admin route drift; duplicate root/public page.
- CSP allows `unsafe-inline` and `unsafe-eval`; reduce after moving scripts/styles out of HTML. Security headers otherwise include HSTS, frame denial, nosniff, referrer and permissions controls.

### P3 — polish

- Normalize naming (“Banking” versus “Banking & Financial Services”), record IDs and tier display for the `REF` record.
- Replace alerts with accessible inline status; improve modal focus and card semantics.
- Update external footer targets and `noopener` consistency.

## 14. Exact remediation plan and file-level targets

### Release gate 1 — secure administration and ingestion

- `api/admin.js`, `api/seed.js`, `api/listings-static.js`: require configured secret/identity; fail closed; remove query credentials/defaults/state-changing GET; add RBAC/action scope, audit log, CSRF/origin protection, rate limits and atomic version checks.
- `public/admin.html`: keep nonpublic until identity-based authorization is verified end to end; sanitize all output; never store secrets in URL/local storage.
- Rotate `ADMIN_PIN`/related secrets and inspect logs for query-string exposure. Do not publish actual secret values in remediation evidence.
- `api/submit.js`, `flag.js`, `subscribe.js`, `track.js`: schema/length/URL/email validation, bot/rate protection, safe logging, consent/privacy, retention and deletion. Escape Slack payloads and minimize personal data.

### Release gate 2 — one governed data source

- Replace serialized `DATA` in `public/index.html` with one versioned read model, or generate both API and page from one reviewed canonical file/database.
- Deduplicate IDs; enforce a unique constraint; separate `reference` from `provider`; normalize taxonomy.
- Add schema fields described in section 8, state transitions (draft/reviewed/published/stale/withdrawn), source version and correction log.
- Approvals must not automatically confer Tier 2. Require evidence review and a named reviewer.
- Implement `/api/verify` or remove the cron. Automated link/status checks cannot replace editorial/legal/clinical review.

### Release gate 3 — evidence and boundary reconstruction

- Audit every record against authoritative/primary sources; publish exact claim/source/date/rationale.
- Reframe tiers as evidence about a documented relationship/presence, not provider quality. Give source-specific confidence rather than one global badge.
- Add per-record jurisdiction, currentness/expiry, license/registration status and conflicts.
- Add boundary copy at search, detail, compare and export; exported CSV must include source/date/disclaimer columns.
- Establish correction, provider-response, removal, high-risk adverse-event, Indigenous/cultural review and legal-demand procedures.

### Release gate 4 — consumer, accessibility and metadata

- `public/index.html`: semantic buttons/cards, dialog roles/labels, focus trap/return, Escape/body cleanup, `aria-pressed` for toggles, keyboard operation, status messages, URL encoding/validation and text-node rendering.
- Neutralize CSV formula cells and consider Blob/ObjectURL rather than very large data URIs.
- Check mobile/touch/zoom/contrast/reduced motion in a browser matrix; add `:focus-visible`.
- Add working `robots.txt`/`sitemap.xml`, OG/Twitter product image, aligned author metadata and Dataset/CreativeWork schema.
- Add the single editor/methodology portrait treatment specified in section 10 after governance/asset approval.
- Change contact copy and check external API status before success.

### Release gate 5 — portfolio reconciliation

- Update only after Stage B production verification. Report the verified consumer count/taxonomy, not planned/dormant backend features.
- Link case to live directory and source only if source visibility is intentional. Keep private admin/data architecture out of public screenshots and descriptions.

## 15. Recommended estate disposition

**P — retain one canonical standalone case, with current public release blocked.**

Why P: this is a distinct working research/product artifact with a substantial curated data set and real search/filter/detail/compare/export workflows. It is not a mere component of another case. Its count is exactly one.

Why release-blocked: shared-secret administration, inconsistent public/backend data, missing evidence provenance, privacy/abuse weaknesses and high-stakes health/legal/licensure claims prevent calling the current version verified or safe to promote.

If RN cannot sustain a governed review cadence, the fallback is **E**: publish a dated read-only archival research snapshot with no submissions, admin, analytics or “vetted/current” promise.

## 16. Exact RN Selected Work case-study corrections

Retain slug `psych-ops-directory`, title **Psych Ops Directory**, practice **Independent**, status **Release blocked pending evidence/security remediation** until Stage B verification.

Recommended fields:

- **Purpose:** “Make the operational infrastructure around psychedelic research and regulated services easier to discover and compare—while making evidence, jurisdiction and currentness limits explicit.”
- **Noticed:** retain the distributed-infrastructure insight, but do not imply a complete market map.
- **Researched:** “The live consumer snapshot displays 177 records across 23 data categories, including one policy-reference record, and three editorial evidence labels. A separate backend currently contains 178 records and is not the consumer source of truth; it must be reconciled before promotion.”
- **Built:** “A client-side directory with keyword/category filtering, record detail, up-to-three comparison, filtered CSV export, and implemented submission/flag workflows.” Do not say “across twenty-two categories” until taxonomy is normalized.
- **Serves:** “Operators and research teams beginning discovery of professional, clinical, financial, training and ecosystem resources; it does not select or endorse providers.”
- **Demonstrates:** “Ecosystem taxonomy, editorial research architecture, directory interaction design and the governance challenges of maintaining regulated-market information.”
- **Evidence boundary:** “Stage A verified 177 rendered records, 23 distinct category values, working search/filter/detail/compare/export, and implemented APIs. It did not independently validate every provider claim. Evidence tiers describe public evidence RN associated with a relationship or field presence; they are not provider-quality ratings, endorsements, license checks, safety findings, legal conclusions, conflict checks or fit recommendations. Provider status, personnel, pricing, jurisdiction, licensure and service scope change. The backend/public data paths, administration, privacy controls and claim provenance require remediation before this directory is promoted as current or vetted.”
- **Authorship:** “Independently initiated and curated by RN Collins; not commissioned by, affiliated with or endorsed by listed organizations.” Add review/conflict qualifications after they exist.
- **Links:** live consumer URL; do not publish admin/API links. Replace retired RN portfolio footer destination with RN Selected Work.
- **Image:** product/interface thumbnail for card/OG; optional small approved RN portrait only in the editor/methodology subsection.

Delete or correct current claims that the directory is simply “177 listings across twenty-three categories and three evidence tiers” without explaining the backend divergence; delete “vetted”; resolve 22/23; do not imply every button/API is production-governed merely because code exists.

## 17. Evidence appendix and explicit limits

### Evidence inspected

- Live canonical page and response headers, August 13, 2026.
- Safe GET/status checks for every first-party route/API listed in section 3; no administrative credential was supplied and no consequential POST was made.
- Live `/api/listings`: 178 records, 23 distinct categories, tiers 134 Tier 1 / 36 Tier 2 / 7 Tier 3 / 1 REF, `lastUpdated` `2026-06-13T05:51:12.733Z`, duplicate IDs `FT-02`, `FT-03`, `FT-04`, `CM-01`, `RC-01`.
- Deployed embedded consumer data: 177 records, 23 distinct categories, 133 Tier 1 / 36 Tier 2 / 7 Tier 3 / 1 REF, no duplicate IDs.
- Live `/api/analytics` at inspection: total 20; public search-term and export data observed. These numbers are not trustworthy product KPIs because clients/bots can write them and the audit itself generated read/page activity.
- Private repository tree and source behavior for all files listed in section 1; deployment/master/estate records; current `lib/public-builds.ts` case.
- Head metadata, JSON-LD, CSS breakpoints, visible copy, data schema and JavaScript functions for search, render, detail, compare, CSV, submit, flag, contact and tracking.

### Not verified / prohibited

- No submission, flag, subscription, contact lead, admin action, seed/reseed or destructive operation was performed.
- The default PIN was not tested against production. Its existence in source is itself a blocking defect.
- No private Redis, Slack, Resend, Vercel environment values, logs, retention state, backups or subscriber data were opened.
- No external provider was contacted. The directory’s 177 third-party destinations were not each re-audited as organizations, and no provider listing is certified by this dossier.
- Browser visual/runtime automation could not launch because the available Playwright package lacked a Chromium executable; mobile, focus-order, screen-reader, contrast and social-preview rendering require Stage B browser verification.
- No existing automated tests/build existed to run. Static/API inspection is not a substitute for post-remediation end-to-end verification.

This dossier diagnoses the build; it does not certify the providers, medical treatments, legal services, licenses, religious exemptions, investment products, banks, retreats or claims described inside it.
