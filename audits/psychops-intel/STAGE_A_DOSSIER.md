# Stage A recertification dossier — Psych Ops Intel

Audit date: August 13, 2026 HST  
Audit round: represented-site recertification R3  
Mode: read-only diagnosis; no source, deployment, portfolio, or master-ledger edits  
Review lenses: consumer, software engineering, software/product development, copy/IA, psychedelic science-law-policy-regulatory communication, brand strategy, and business partnership

## 1. Asset identity

| Field | Evidence-backed identity |
|---|---|
| Public name | **Psych Ops Intel — Psilocybin Regulatory Monitor** |
| Canonical deployment | <https://psychops-intel.vercel.app/>; project `prj_JtivXXsZE08iwyZbZ2XE3UeHbvZ6` |
| Repository | `rn-collins/psychops-intel`; private/inaccessible with available credentials |
| Public product | Single-page Aloha AI dashboard that fetches a weekly six-category web-search result payload, offers source/status/search controls, and collects alert/contact leads |
| Backend surfaces found | public `/api/data`; write `/api/lead`; publicly executable `/api/sweep`; broken `/api/track` |
| Intended audience | psilocybin practitioners/operators, attorneys, researchers, policy teams, funders, and prospective custom-intelligence clients |
| Parent practice | Aloha AI regulatory/field-intelligence work. The unexplained “NSAG-aligned” JSON-LD phrase does not make this NSAG work. |
| Current publication | Public, indexable, wildcard-readable data API; no privacy/terms/methods/corrections pages |
| RN Selected Work | Same product appears twice: featured “Psychedelic Operations Intelligence” and Atlas “Psych Ops Intel.” It must become exactly one case. |
| Estate disposition | **P — one canonical public project; release-blocked** |

## 2. Executive verdict

The product idea should exist: operators need dated, source-traceable changes across fragmented state programs. The current implementation does not deliver that promise.

The backend is real enough to run scheduled search queries and persist a public result feed, but it is a **web-search candidate feed**, not an automated primary-source regulatory monitor. The 47-result Aug 10 dataset drew from at least 31 hostnames and included LinkedIn profiles/posts, Facebook, job sites, general news, advocacy, law-firm commentary, unrelated broadband/outdoor-equity/crime-survivor funding stories, cannabis news, and commercial press releases. It lacked normalized authority, instrument, jurisdiction, legal status, effective date, deadline, supersession, review, or action fields.

The UI/backend contract is broken. Live API results have `title/url/published/snippet`; the UI requires `source/status/date/link/summary/...`. Consequently source and urgency filters empty the dashboard, every record is mislabeled Stable, dates and links disappear, and users cannot reach controlling sources. The six unsupported seed records are more dangerous: on API failure the site labels them as fallback “verified” intelligence even though several conflict with official program status and rule structure.

Top risks:

1. **Public unauthenticated sweep execution:** even an `OPTIONS` request triggered a six-category run. This creates cost, write, notification, race, and abuse exposure.
2. **Action-affecting legal misinformation:** unsupported fallback claims include wrong/mismatched rule identifiers, renewal timing, fees/capitalization, a premature New Mexico practitioner registry, a PSFC grant cycle despite PSFC saying it is not a grantmaker, and an unlinked HAF study/mandate.
3. **Broken product delivery:** live schema mismatch destroys source/status/filter/link/date behavior while the UI still signals successful weekly monitoring.
4. **Primary-source misrepresentation:** the feed is predominantly secondary and often irrelevant.
5. **False-success subscriptions/contact:** PII flows report or imply success without checking status and have no privacy/unsubscribe/retention boundary.
6. **Portfolio duplication/overstatement:** one narrow public monitor is presented both as itself and as a broader private structured intelligence database that could not be evidenced.

Business decision: retain one canonical case, immediately place it under a release hold, and rebuild it as a human-reviewed regulatory candidate-and-verification workflow before promising compliance alerts.

## 3. Complete route map

The production surface is exhaustively mapped in [ROUTE_CONTROL_LEDGER.md](./ROUTE_CONTROL_LEDGER.md).

- `/` — only consumer dashboard route.
- `/api/data` — public persisted result JSON.
- `/api/lead` — contact/subscription write endpoint; GET rejected, OPTIONS allows wildcard cross-origin POST.
- `/api/sweep` — unauthenticated stateful/cost-bearing sweep; improperly executes on OPTIONS/GET.
- `/api/track` — missing client event endpoint (`404`).
- `/sitemap.xml`, `/robots.txt`, `/privacy`, `/terms` — all return homepage HTML as soft 404s.

No working export, source ledger, detail route, saved view, alert archive, methodology, correction, privacy, terms, or unsubscribe route exists.

## 4. Complete interaction/control inventory

- 7 source pills: All + OHA, DORA, DOR NMD, NMDOH, PSFC, HAF;
- 4 status buttons: All, Urgent, Watch, Stable;
- one dashboard search field;
- dynamic result grid/count/empty state;
- jurisdiction select with All/Oregon/Colorado/New Mexico;
- alert email and Subscribe button/status message;
- footer Contact and fixed Contact the Architect buttons;
- contact name/email/message, Send, Cancel, backdrop close;
- related links to Psych Ops Directory and Entheogen Atlas;
- Aloha AI, RN Builds, LinkedIn links;
- no export/download/copy/source-verification/correction controls.

The source/status/search interactions are not merely unverified: API shape comparison proves the source and status filters cannot match any live row and search is effectively title-only.

## 5. Consumer journeys and observed results

### “Show me current updates across my state program”

The page communicates a strong proposition, an Aug 10 sweep date, and 47/48 backend results. Yet successful API loading removes the category label and maps no jurisdiction/status/source. A consumer receives incomplete titles labeled Stable, without date, summary, tags, or links. The core task fails.

### “Show only Oregon/OHA or urgent changes”

Clicking any named source or non-All status produces zero results because live records lack those fields. The empty state does not explain a schema failure. A practitioner could incorrectly infer that no urgent or jurisdiction-specific developments exist.

### “Find an item by keyword”

Search works only against `title` in practice. Snippets are stored in the API but the UI checks `summary`, so substantive text is neither displayed nor searched.

### “Verify an action-affecting claim”

Live cards do not render the API’s `url`, and the backend mostly returns non-controlling sources. Even if links rendered, a news/social/search result is a candidate for review, not the governing agency instrument. The product gives no authority/status/effective-date trail.

### “Subscribe to a weekly state alert”

The user selects jurisdiction and supplies email. The UI posts to a generic lead endpoint, ignores response status, shows “you’re on the list,” and clears the field even on HTTP error. No subscription record, double opt-in, scheduler, digest composition, unsubscribe, privacy, or delivery was verified. This is a lead-capture concept, not a certified alert subscription.

### “Contact Aloha AI”

The modal sends name/email/message. Any resolved response resets/closes, network errors are swallowed, and there is no accessible status. No submission was made.

### “Use fallback during outage”

The product promises a plainly labelled last-verified dataset. Actual fallback is six hard-coded synthetic-looking claims, some demonstrably incompatible with official sources. Outage behavior increases rather than reduces legal-risk exposure.

## 6. Functional matrix

| Capability | Status | Evidence/result |
|---|---|---|
| Homepage | Working static shell | `200`, cached public HTML. |
| Weekly backend sweep | Real but unsafe/unreviewed | Aug 10 persisted completion; audit method probe executed Aug 13 run. Scheduler config unavailable. |
| Data persistence/read | Working/public | `/api/data` returns full raw payload with wildcard CORS. |
| Source normalization | Missing | backend categories discarded; result records lack source. |
| Urgency classification | Missing live | records lack status; UI defaults them visually to Stable. |
| Jurisdiction/instrument modeling | Missing | no authority/instrument/status/effective date/deadline fields. |
| Primary-source coverage | Broken | broad search results across secondary/off-topic hosts. |
| Source filters | Broken | all six named filters return zero on live API rows. |
| Status filters | Broken | Urgent/Watch/Stable return zero. |
| Search | Partial | title only under live schema. |
| Cards | Broken/partial | title renders; source/date/summary/detail/tags/link lost. |
| Empty state | Working but misleading | reports no matches rather than data-contract failure. |
| Fallback | Dangerous | six unsupported legal/funding records presented as verified fallback. |
| Alert subscription | Simulated/false-success | generic lead POST; no verified enrollment/delivery/unsubscribe. |
| Contact | Partial/false-success | write attempted, outcome not checked/announced. |
| Scroll tracking | Broken | `/api/track` `404`. |
| Export | Missing | no CSV/PDF/API download consumer control. |
| Corrections/methods | Missing | no provenance/review/correction workflow. |
| Privacy/terms | Missing | soft 404 to homepage. |
| Tests/build/source | Unverified | private repository inaccessible. |

## 7. Copy and information architecture

### Strengths

- Audience and problem are concrete.
- Regulatory acronym expansion and informational-not-legal-advice notice help orientation.
- “Urgent / Watch / Stable” could be useful if governed.
- Related-product framing connects monitoring, directory infrastructure, and background education.

### Material inaccuracies/overclaims

1. “Automated primary-source sweep” and “primary-source psilocybin intelligence” are false for the live dataset.
2. “Six regulators and funders” blurs four government surfaces and two nonprofits; the backend also includes a seventh conceptual class, Field Intelligence, while collapsing Colorado agencies.
3. “catch a renewal deadline or rule change before it becomes a compliance problem” promises completeness/timeliness the product cannot support.
4. “Updated weekly · Monday 9am UTC” lacks timezone/audience context, scheduler health/SLA, and human-review cutoff.
5. “If a sweep fails ... last verified dataset” is false; code uses hard-coded seed data.
6. Urgent/Watch/Stable definitions imply legal judgment and “no action required” without reviewer, criteria, jurisdiction, or disclaimer at the decision point.
7. “vetted” vendors on the Psych Ops Directory related card exceeds that directory’s verification/endorsement boundary.
8. “NSAG-aligned framework” appears only in metadata and improperly conflates practices.
9. “RN Builds” points to the superseded RN Portfolio, not RN Selected Work.
10. The page never says results are automated search candidates requiring human verification.

Recommended IA: jurisdiction → authority → instrument/event → lifecycle status → effective/deadline dates → verified summary → action/owner → controlling source → reviewer and checked date. Separate “candidate feed” from “published alerts.”

## 8. Psychedelic science, law, policy, regulatory, and evidence ledger

| Claim/evidence class | Finding | Required correction |
|---|---|---|
| Oregon program | Oregon is an active OHA-regulated psilocybin-services system, but the fallback 90-day renewal claim conflicts with OHA’s 60-day timely-renewal rule under OAR 333-333-4250. | Ingest direct OHA rules/notices; model proposal/adoption/effective date; remove unsupported seed. |
| Colorado allocation of authority | DORA regulates facilitators/training; DOR regulates natural-medicine businesses. Seed cites facially mismatched `3 CCR 702-7`; relevant regimes include 4 CCR 755-1 and 1 CCR 213-1. | Separate agencies, licenses, statutes, rules, and update channels; cite official code/register pages. |
| New Mexico | Official program was still under implementation with a Dec. 31, 2026 target. Seed claims 47 licensed practitioners and billable services in June 2026. | Remove; track enactment, advisory board, proposed/adopted rules, implementation milestones, and actual licensing commencement separately. |
| PSFC | Official PSFC identity is Psychedelic Science Funders **Collaborative** and its site says it is not a foundation or grantmaker. Seed claims a $4.2M PSFC grant cycle. | Remove unsupported grant alert; treat PSFC publications/events as nonprofit intelligence, not regulation. |
| HAF | HAF is a 501(c)(3) advocacy organization, not a regulator. Generic homepage does not support seed rate-study/mandate/deadline claims. | Classify as advocacy/context; link exact reports/comments and distinguish recommendation from agency proposal/action. |
| Federal status | Oregon itself states psilocybin remains Schedule I federally. State programs do not constitute FDA approval or general legality. | Add federal/state conflict and jurisdictional scope to every relevant alert. |
| Clinical/science results | Live feed contains a Nature paper, commercial biotech release, and generalized psychedelic claims without study design/evidence grade. | Separate science from regulation/funding; capture study type, population, intervention, comparator, endpoint, limitations, peer review, conflicts, and regulatory status. |
| Search result snippets | Search-engine excerpts are not source text, complete legal instruments, or verified summaries. | Never publish snippet as action guidance; human reviewer must open and trace controlling sources. |
| Urgency labels | No methodology/reviewer. Live rows have no status; fallback labels are authored assertions. | Define criteria, reviewer, confidence, legal status, correction/version history; prohibit “no action required” without qualified review. |
| Completeness/currentness | Six topic searches cannot guarantee capture; result precision is low and there is no recall audit. | Publish source register, coverage windows, failure states, last checked, omissions, and no-completeness warning. |

Official-source spot checks used in this audit establish program structure and expose contradictions; they do not independently recertify all 47/48 search results. A result count is not evidence quality.

## 9. Accessibility and responsive findings

Positive source evidence: visible skip link on focus, semantic main, labelled search, screen-reader labels for jurisdiction/email, live count/status regions, button-based filters, and a single-column breakpoint below 600px.

Defects/boundaries:

- source pills do not expose `aria-pressed`; toolbar keyboard conventions are absent;
- status emojis carry no hidden textual separation beyond visible words;
- no global `:focus-visible` treatment; color-only active/status styling is prominent;
- muted 45%-opacity body text likely has contrast failures on cream/white;
- contact modal has no dialog role/name, labelled inputs, focus management, Escape handling, or status/error announcement;
- fixed contact control may overlap content on small screens;
- dynamic card failure is an accessibility failure because meaningful source/date/summary/link information never enters the DOM;
- browser/touch/keyboard/zoom/screen-reader/computed contrast could not be executed.

## 10. Brand architecture

The live artifact is an **Aloha AI regulatory-intelligence prototype** grounded in psychedelic operations. It is not NSAG merely because metadata says “NSAG-aligned.” If NSAG concepts are actually used, name the specific framework/module/control and evidence; otherwise remove the claim.

The broader psychedelic estate includes Psych Ops Directory, Entheogen Atlas, Psychedelic Law Library, Psychedelic Operations Intelligence, and adjacent editorial/research work. Differentiation should be explicit:

- this artifact: verified regulatory event monitoring;
- Directory: provider/ecosystem discovery with tiered evidence, not endorsement;
- Atlas: educational science/law background;
- Law Library: legal research/reference;
- one parent “psychedelic operations intelligence” capability narrative may connect them without pretending one database powers all artifacts.

The current double portfolio presentation fragments identity and inflates output. One repository, deployment, UI, and business proposition equals one case.

## 11. Business model and conversion

Potential buyer: licensed service centers, facilitators, training programs, manufacturers/labs, attorneys/compliance teams, funders, and organizations entering these state systems. Buyer value is avoiding missed changes and reducing monitoring labor.

Current trust/adoption blockers are decisive: low precision, no controlling-source chain, nonfunctional filters, unsupported fallback, no reviewer/SLA/corrections, and false-success alert enrollment. A legal operator cannot responsibly rely on it.

The credible product path is a two-layer service:

1. private automated candidate ingestion across an explicit official-source register;
2. human legal/policy review before a public or customer alert receives verified status.

Define coverage, jurisdictions, reviewer qualifications, cutoff time, alert SLA, corrections, support, subscription terms, data responsibilities, and limits. Until then, the public page is a portfolio prototype/lead generator, not a paid compliance product.

## 12. Security, privacy, data, and operations

- `/api/sweep` executes without authentication and on OPTIONS/GET. The audit’s non-body method probe triggered a completed six-category sweep at `2026-08-13T14:49:53.697Z` with 48 results. This likely consumes search/provider resources and may write state or send notifications; private source/logs are unavailable.
- `/api/data` exposes the full persisted payload with wildcard CORS and public caching. The content is not confidential, but integrity/provenance/version semantics are absent.
- `/api/lead` permits wildcard-origin POST. Rate limits, bot controls, validation, escaping, storage, forwarding, provider success, retention, and deletion are unverified.
- Alert/contact clients ignore response status; contact errors are silent.
- `/api/track` is absent; scroll `fetch` lacks a catch and can create runtime rejection/noisy telemetry.
- Raw result text is HTML-escaped before insertion, which reduces stored-XSS risk; URL schemes are not visibly allowlisted before `href` creation, though live API links fail to render because of schema mismatch.
- No privacy, terms, methods, corrections, uptime, incident, or data-controller information exists.
- Private source prevented dependency, secret, build, cron, Redis/storage, provider, webhook, and test inspection.

## 13. Ranked defects

### P0 — blocking

1. Unsupported legal/regulatory/funding fallback claims can be shown precisely when the live API fails, under a “last verified dataset” promise.
2. Public unauthenticated sweep execution is method-unsafe and potentially cost/write/notification bearing. Treat as P0 until server logs/provider effects prove a narrower impact.

### P1 — serious

1. UI/API schema mismatch breaks source/status/date/summary/link/filter delivery.
2. “Primary-source” positioning is contradicted by secondary/off-topic web results.
3. Alert/contact false success, undisclosed PII handling, no unsubscribe/privacy.
4. No human review, authority/instrument/status/effective-date/provenance model.
5. One product is double-presented and the featured case makes unsupported private-database claims.

### P2 — material

1. Soft-404 sitemap/robots/privacy/terms; broken tracking.
2. Accessibility/focus/modal/contrast defects.
3. Stale RN Portfolio link and unexplained NSAG alignment.
4. No export/corrections/methods/history/saved views.
5. No coverage/recall/precision/currentness metrics.

### P3 — polish

1. No OG/social image.
2. Ambiguous “six regulators and funders” terminology.
3. Fixed contact CTA redundancy.

## 14. Exact Stage B remediation plan

Private source paths are inferred from production routes and must be reconciled to actual repository names before editing.

1. **Sweep handler (`api/sweep.*`):** require server-held cron/admin authentication; allow only explicit method; reject OPTIONS without execution; rate/idempotency lock; separate provider call, validation, review queue, publish, persistence, notification; log cost/run IDs safely.
2. **Data contract (`api/data.*`, shared schema):** return normalized fields with category/source preserved; add authority, jurisdiction, instrument, lifecycle status, published/effective/deadline dates, controlling URL, candidate/verified/rejected state, reviewer, checked date, confidence, supersession/correction.
3. **Ingestion/search configuration:** replace broad queries with allowlisted official sources (agency pages, registers, rule dockets, statutes/rules, notices); move secondary sources to context candidates; add precision/recall review.
4. **Human review:** never auto-promote search snippets. Require qualified review for legal/action claims and an immutable evidence/version trail.
5. **Homepage loader/render:** transform or consume normalized schema; fail visibly on mismatch; never default unknown status to Stable; preserve category and URLs; show candidate vs verified.
6. **Fallback:** delete the six seed claims. Use a dated last-known verified snapshot only if its provenance/version is real; otherwise show unavailable/stale and direct users to official sources.
7. **Filters/search/export:** test all source/status/jurisdiction/date states; add source ledger, direct controlling links, CSV export of published verified records, no-results recovery, and correction control.
8. **Lead/subscription handler/client:** separate newsletter subscription from sales contact; validate, rate-limit, consent, status-check, double-opt-in, unsubscribe, retention/deletion, honest success/error/loading states.
9. **Tracking/privacy:** remove broken tracking or implement disclosed minimal analytics; add real privacy/terms/methodology/corrections pages and machine routes.
10. **Accessibility:** complete pressed/focus states, dialog semantics/focus/Escape/status, contrast, responsive/zoom/touch/keyboard testing.
11. **Brand/metadata:** remove unsupported NSAG alignment; replace superseded RN Portfolio with RN Selected Work; correct product naming and related-tool evidence language.
12. **Testing/build:** add contract tests, method/auth tests, result allowlist/precision fixtures, fallback tests, filter/card tests, false-success tests, accessibility/browser checks, link checks, and safe staging cron verification.
13. **Incident/operations review:** inspect the audit-triggered Aug 13 sweep logs/provider costs/writes/notifications; rotate/protect provider credentials if abuse is plausible; inspect historical anonymous sweep access.

## 15. Estate disposition

**P — retain exactly one canonical public project and case study; immediate release hold.**

The problem and artifact are distinct enough for one case. It is not reliable enough for operational promotion, customer reliance, or alert enrollment until Stage B is verified.

## 16. Exact RN Selected Work corrections and one-product treatment

### Canonicalization decision

Keep **one featured case study** titled **“Psychedelic Operations Intelligence — Psych Ops Intel”** (or simply “Psych Ops Intel” if concise naming is preferred). Remove the separate Atlas card/record from public navigation and counts. If the Atlas is structurally required, it must link to the same featured case as an alias, be excluded from counts/search duplication, and never repeat a second independent case.

Why featured rather than Atlas-only: the work represents a meaningful domain capability and can support RN’s research-to-operational-system narrative. But the featured content must describe the real public monitor, not an unevidenced private database.

### Delete or correct current featured claims

- Delete “Private working system · controlled demonstration”; the dashboard and full result API are public.
- Delete claims of a “structured dashboard and database environment” spanning scientific evidence, organizations, programs, and operational signals unless a separate private system is evidenced.
- Delete “private dashboard and structured database that connects entities, evidence, regulatory events, programs, and monitored signals.” The inspected product is a single public search-result dashboard.
- Delete “operational database remains private.” The public API exposes the operational result payload.
- Do not claim cross-domain taxonomy, evidence provenance, or decision support as delivered current functionality.

### Replace with evidence-backed case framing

- **Status:** “Public controlled prototype · release remediation pending.”
- **Purpose:** “Prototype a governed way to surface and verify state psilocybin regulatory developments across Oregon, Colorado, and New Mexico.”
- **Noticed:** retain fragmented official sources/deadline risk, qualified by non-completeness.
- **Researched:** describe the intended six-source taxonomy and the distinction among regulators, advocacy/funding context, controlling instruments, and secondary candidates.
- **Built:** “A single-page monitoring prototype with a scheduled six-category discovery pipeline, public result API, search/filter interface, explanatory methodology, and inquiry/alert concepts.”
- **Evidence:** disclose that the Aug 10 API held 47 raw search candidates from 44 unique URLs; it was mostly secondary and sometimes off-topic; UI/schema mismatch broke source/status/date/link/filter delivery; an audit method probe triggered the publicly unprotected sweep; fallback legal/funding records were unsupported; no alert delivery was verified.
- **Boundary:** informational prototype, not legal/scientific advice, exhaustive monitoring, human-reviewed regulatory intelligence, or a guaranteed alert service.
- **Privacy/security:** alert/contact writes and public sweep are release-blocked; no subscription claim until verified.
- **Live link:** retain only after Stage B or visibly gate/label the prototype.
- **Source link:** add only if repository publication is intentional; it was private/inaccessible during audit.

Suggested compact evidence statement:

> The inspected public prototype exposes a scheduled six-category discovery pipeline and a dated result API, but its current feed is a broad, unreviewed web-search candidate set—not verified primary-source regulatory intelligence. The August 10 payload contained 47 results across 44 unique URLs, and the current UI/data mismatch prevents source, urgency, date, link, and jurisdiction fields from working as represented. No compliance, completeness, alert-delivery, or source-verification claim should be made until the pipeline is restricted to authoritative sources, reviewed by a qualified human, secured, and reverified.

## 17. Evidence appendix and unverified areas

### Production evidence

- <https://psychops-intel.vercel.app/>
- <https://psychops-intel.vercel.app/api/data>
- safe GET/OPTIONS response headers for `/api/lead`
- method-safety discovery at `/api/sweep`, with audit-triggered execution timestamp documented above
- homepage source capture and inline-JavaScript syntax checks
- Aug 10 payload analysis: 47 rows, 44 unique URLs, six categories, 31+ hostnames, zero UI-required normalized fields
- homepage/soft-404 responses for sitemap, robots, privacy, terms; broken track route
- RN Selected Work featured/Atlas source records in `lib/portfolio.ts` and `lib/public-builds.ts` (read only)

### Official-source spot checks

- Oregon Health Authority OPS licensed facilitator/service-center guidance and OAR 333-333-4250 renewal framing;
- Colorado DORA/DPO natural-medicine facilitator program and Colorado DOR Natural Medicine Division responsibility split;
- New Mexico Department of Health Medical Psilocybin Program implementation status;
- PSFC official identity and statement that it is not a foundation/grantmaker;
- Healing Advocacy Fund official nonprofit/advocacy identity.

### Explicitly unverified

1. Private repository/server source, build, dependencies, cron, secrets, providers, storage, notification, logs, and tests.
2. Whether the audit-triggered sweep incurred billable provider cost, persisted its results, raced the scheduler, or emitted notifications; operational review is required.
3. Any form POST, lead delivery, subscription storage, digest delivery, unsubscribe, retention, or deletion.
4. Full currentness/entailment of all 47/48 candidate URLs.
5. Browser-rendered mobile, keyboard, focus, screen-reader, contrast, zoom, console, and network behavior.
6. Any broader private “Psychedelic Operations Intelligence” database beyond this repository/deployment; no evidence was accessible.

## Stage A decision

Freeze this dossier. Retain **P** for one canonical `psychops-intel` product, consolidate featured/Atlas presentation into exactly one case, and hold public operational claims and alert conversion until the sweep is secured, fallback removed, data contract repaired, authority/review model implemented, privacy/contact rebuilt, and production/browser verification passes.
