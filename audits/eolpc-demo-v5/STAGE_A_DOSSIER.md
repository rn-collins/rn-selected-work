# eolpc-demo-v5 — Stage A Dossier

**Audit date:** August 12–13, 2026 HST  
**Scope:** Read-only Wave 8 reconciliation audit under `THREE_AGENT_SITE_CRAWL_PROTOCOL.md`  
**Disposition:** **D — superseded alternate version**  
**Canonical asset:** `rn-collins/eolpc-demo` → <https://eolpc-demo.vercel.app/>  
**Immediate release status of canonical:** **P0 privacy incident / release hold**

> **P0 incident finding.** The canonical deployment's unauthenticated `GET /api/queries` returned stored query and visit records because `QUERY_LOG_TOKEN` is absent and the code fails open. At the time of verification it exposed **13 query records and 26 visit records**. Those records include user-entered high-stakes questions and visit telemetry fields. The audit request itself was observed in the returned aggregate, proving persistence. This dossier intentionally contains no query text, visitor IDs, IP addresses, user agents, referrers, tokens, or identifying screenshots. Contain before any portfolio promotion or public testing.

## 1. Asset identity

| Field | `eolpc-demo-v5` | Canonical `eolpc-demo` |
|---|---|---|
| Repository | private `rn-collins/eolpc-demo-v5`, repo ID 1285739563 | private `rn-collins/eolpc-demo`, repo ID 1285747882 |
| Audited head | `bd49a18113210ae39a498704ec041155e4f608dc` (single initial commit, July 1, 2026) | `c249d1d46d37fd44a9be8f19351ac53ecda2e848` (August 2, 2026) |
| Vercel project | `prj_eDDCK4VS9Yxl4zPboYiPq3bsMGIf` | `prj_n1be4GDW5Q3aRHKGEHteqOVadJtZ` |
| Public alias | <https://eolpc-demo-v5.vercel.app/> | <https://eolpc-demo.vercel.app/> |
| Latest production deployment | `dpl_CcPGNtabywkHnxewrgd4JpeDcoMx`, READY, June 13, 2026 | `dpl_5Udy4T7HCJs8Wy4RXHXS9VSf6dnS`, READY, August 2, 2026 |
| Deployment linkage | Vercel metadata did not identify a GitHub commit; deployed source matches v5 repository surface | explicit GitHub linkage to `rn-collins/eolpc-demo`, branch `main`, audited head commit |
| Public/index status | public URL; HTML `noindex,nofollow`; no privacy notice | public URL; HTML `noindex,nofollow`; no privacy notice |
| Parent/owner | Aloha AI independently initiated organization-specific concept for End of Life Psychedelic Care / RiverStyx funding discussion | same; canonical later presentation |

The repositories are **not branches of one repository** and their latest page/API blobs are not byte-identical. They are separately owned version lines. The later `eolpc-demo` has multi-commit history, production metadata, security headers, accessibility/copy improvements, cross-links, and a repaired secondary contact endpoint. That evidence—not naming alone—makes it canonical.

## 2. Executive verdict

`eolpc-demo-v5` is a polished, one-page June 2026 proposal/prototype that combines a live multi-source research retrieval demonstration, hard-coded evidence previews, future-product architecture, funding options, a lead form, and visit/query telemetry. It has real retrieval code, but it does **not** deliver the five-layer RAG system, authentication, native apps, institutional administration, or internal knowledge-base ingestion shown in its mockups. Those are proposed future scope.

The v5 site should not exist as a second public portfolio build. It is a superseded predecessor of the canonical `eolpc-demo` and should be retired after evidence preservation. The canonical site is the correct single public case-study target, but it is not currently safe to promote because:

1. **P0:** its query/visit log endpoint fails open and exposes stored records without authentication;
2. **P1:** the principal inquiry form posts to a missing same-origin `/api/leads` and cannot deliver;
3. **P1:** the UI can display an error and a response simultaneously because the API call can complete after the client-side/browser timeout state;
4. **P1:** high-stakes medical/legal retrieval is presented as “verified,” “sourced,” and “citable” despite heuristic classification, unvalidated extraction/synthesis, no clinical/legal review workflow, and incomplete professional-advice detection;
5. **P1:** every page view transmits visit telemetry, including IP-derived data in server code, without a privacy notice or consent boundary.

The correct estate decision is **D for v5; retain P for the canonical concept only after containment and remediation**. No separate RN Selected Work card should be created for v5.

## 3. Complete route map

Both repositories are static single-page Vercel applications with Node serverless endpoints. No client router, additional HTML file, sitemap file, or robots file exists.

| Route | v5 | canonical | Finding |
|---|---|---|---|
| `/` | 200, one-page preview | 200, one-page early-access prototype | sole consumer page |
| `/robots.txt` | 404 | 404 | HTML says noindex; no robots file |
| `/sitemap.xml` | 404 | 404 despite canonical `<link rel="sitemap">` | metadata points to missing file |
| arbitrary path | Vercel 404 | Vercel 404 | no hidden SPA fallback |
| `/api/chat` | POST implementation; GET 405 | POST implementation; GET 405 | live retrieval endpoint; CORS `*` |
| `/api/beacon` | POST/OPTIONS implementation | same byte-identical implementation | logs visit and may notify Slack; no method guard beyond OPTIONS |
| `/api/queries` | GET; currently returns “Upstash not configured” and empty arrays | **GET 200 returned stored records unauthenticated** | token check fails open when env missing |
| `/api/leads` | POST implementation; GET 405 | **404; code absent** | canonical's main inquiry form still posts here and fails |
| `/api/track` | absent | **404; client calls it on scroll** | silent telemetry failure |
| secondary external lead endpoint | absent | `rn-api-rn-collins.vercel.app/api/lead` in “Contact the Architect” modal | distinct form; current commit specifically repairs this URL |

External destinations are inventoried in `ROUTE_CONTROL_LEDGER.md`. Same-origin API POSTs that would persist contact or high-stakes form data were not submitted.

## 4. Complete interaction/control inventory

The page exposes two funding-path buttons, four suggested-query chips, a question textarea, Ask button, microphone button, response listen button, evidence-panel close button, five expandable knowledge-layer cards, a three-field inquiry form, the EOLPC homepage, connector directory, mail links, and dynamic source links. Canonical adds skip navigation, two related-tool links, Aloha AI and RN Builds links, and a second “Contact the Architect” modal with three fields plus Send/Cancel.

Observed states:

- Funding path buttons switch the visible budget and timeline. Path 2 correctly displayed year-one and year-two figures on both versions.
- Suggested-query chips populate the textarea and open hard-coded evidence panels. These previews do not prove live retrieval.
- The Hopkins/NYU Ask journey produced seven-source responses on both versions, but both also displayed “Unable to reach” at the same time; v5 produced a hand-authored detailed synthesis while canonical used the first abstract sentences.
- The main inquiry form's empty-email validation works. It was not consequentially submitted. Static and endpoint inspection proves canonical `/api/leads` is missing.
- v5's five layer cards use clickable non-semantic containers; keyboard affordance is not implemented. Canonical improves labels elsewhere but retains this pattern.
- Canonical contact modal opens and exposes Name, Email, Message, Send, Cancel. It lacks dialog semantics, focus trapping, Escape behavior, and a visible success/error state; its `.then()` treats any HTTP status as success because it does not test `response.ok`.
- Voice input is browser-dependent; canonical's own `Permissions-Policy: microphone=()` forbids microphone access, so the advertised control conflicts with deployment policy.
- Query-specific medical-advice testing was halted when the browser's safety policy denied entering a patient-specific medication scenario. Static code inspection establishes the classifier boundary documented below.

## 5. Consumer journeys and observed results

### Family member or patient seeking evidence

The initial promise is unusually clear, but the audience is vulnerable and the product language is stronger than the implementation. A prewritten question retrieves actual records from external services and exposes source links. However, users are not told that synthesis is deterministic extraction/templating rather than expert-reviewed clinical guidance, that logging occurs, or that an apparent “verified” label is not a quality grade.

### Clinician or practitioner seeking a citable answer

The system can retrieve PubMed/Europe PMC/Semantic Scholar/ClinicalTrials.gov/Exa records. It does not appraise study design, risk of bias, population fit, publication status, conflicts, evidence hierarchy, legal currency, or jurisdiction. It sometimes reports the number of retrieved records as proof of verification. The canonical response is not reliably “citable” as a synthesis; only the underlying source is.

### Person asking for individualized advice

The server declines only a regex list such as “my mother,” “should I take,” “what dose,” and similar phrases. It misses many equivalent requests (first-person clinical facts without those phrases, drug interaction questions, contraindications, suicidality, urgent symptoms, minors, pregnancy, capacity, and indirect patient references). The safe-routing concept is present; the implementation is not an adequate clinical safety classifier.

### Legal-access user

Queries containing legal terms are sent only to Exa/web search in v5. The result lacks mandatory jurisdiction/date/source-authority logic and does not privilege statutes, administrative rules, agency license directories, or federal-state conflict. The static Oregon evidence preview is directionally correct but cannot support the broader “30+ jurisdictions” promise.

### Funder or partner evaluating the proposal

The architecture, budget paths, build timeline, and ownership story are persuasive. The product conflates working retrieval with a proposed full RAG/auth/native/admin system. Mock analytics (`247`, `18`, `94%`) look like operational metrics but are visual examples, not production measurements. Funding figures have no visible assumptions, rate card, phase table, validation, or maintenance/operating-cost boundary.

### Prospective client contacting the team

v5 has an implemented same-origin lead endpoint that can return success even when every downstream delivery integration is absent or fails. Canonical removed that endpoint but retained the form, making the principal CTA fail. Canonical's secondary modal uses a separate API, but success/error handling is not trustworthy.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Static proposal page | Working | both roots return 200 and render |
| Funding-path toggle | Working | both paths observed |
| Hard-coded evidence previews | Working but not live | `CHIP_EVIDENCE` embedded in HTML |
| PubMed retrieval | Real, partial | live query returned PubMed sources; API code calls NCBI |
| Semantic Scholar / Europe PMC / ClinicalTrials.gov / Exa | Real integrations, conditional/partial | code calls each; sample returned only PubMed + Exa while UI says all are searched simultaneously |
| Response synthesis | Simulated/heuristic | canonical takes first two abstract sentences; v5 contains special hard-coded survey response and query-specific synthesis rules |
| Five proprietary knowledge layers | Proposed, not implemented | no vector store, ingestion, authorization, or layer data in repository |
| Medical-advice safeguard | Partial and unsafe | narrow regex only |
| Legal research validation | Missing | web-only classification; no jurisdiction/date/authority engine |
| Authentication/RBAC | Mockup only | static cards, no auth code |
| Native iOS/Android | Proposed | no mobile repositories or build config here |
| Institutional admin/analytics | Mockup only | fixed static numbers |
| Voice input | Broken on canonical by policy | `microphone=()` conflicts with Web Speech control |
| Listen response | Browser-dependent, implemented | SpeechSynthesis code |
| Main contact form, v5 | Endpoint exists but delivery not guaranteed | handler returns 200 regardless of missing/failing integrations |
| Main contact form, canonical | Broken | `/api/leads` 404 |
| Secondary architect form, canonical | Endpoint URL repaired; success semantics incomplete | no `response.ok` check or user feedback |
| Visit telemetry | Real | byte-identical beacon; canonical stored visits confirmed |
| Query logging | Real | canonical stored queries confirmed |
| Log administration | **Critically broken** | canonical endpoint unauthenticated when secret absent |
| Scroll analytics | Broken | `/api/track` 404 |
| SEO metadata | Partial | canonical metadata/JSON-LD added but no canonical tag/OG image and sitemap is 404; noindex intentional |

No package dependencies or tests exist. v5 has no `package.json` or `vercel.json`; canonical has only an engines-only package file and headers/function-duration config. All repository JS and executable inline scripts passed syntax compilation; the JSON-LD script was correctly excluded as data. There is no meaningful build command to run.

## 7. Copy and information-architecture findings

Strengths: strong human-centered opening, clear audience, concrete funding paths, visible architecture boundary, calm visual language, and a persuasive connection between research, access, and practitioner referral. Canonical improves plain language, labels, disclaimers, author positioning, metadata, and related-work paths.

Material issues:

- “Every response retrieves from five verified data layers” is false for the prototype; only public retrieval services are queried, and classification may query a subset.
- “Every query searches [all five] at the same time” is contradicted by `classifyQuery`; legal questions are Exa-only and trials are conditional.
- “Nothing is simulated/invented” is false: survey answers, evidence previews, four product screens, analytics, and much of the future knowledge architecture are hard-coded or proposed.
- “The system works” overstates a prototype with simultaneous error/response UI, a broken CTA, an exposed admin endpoint, and no actual proprietary knowledge base.
- “Verified Research Response” / “Types A + B: Verified response” lacks a defined verification process.
- “That combination does not exist anywhere else” (v5) is an unsupported absolute; canonical's “rare” is better but still needs evidence or removal.
- “the only dataset of its kind globally” is an unsupported superlative.
- Funding ranges conflict slightly: $253k–$419k headline versus $252k–$422k two-grant sum. Assumptions are not shown.
- “Clinical Q&A” describes interview data without establishing clinical validation or participant role/licensure.
- The canonical adds “current as of August 2026,” but automated retrieval can produce older or unstable law and no update governance is implemented.
- The case-study/product boundary must say “independently initiated concept/prototype; not commissioned,” not imply EOLPC or RiverStyx engagement without documentary permission.

## 8. Science/law/policy/regulatory claim ledger

| Claim | Finding | Required correction/source |
|---|---|---|
| Griffiths 2016, N=51, sustained clinically significant improvement at six months | Substantively supported, but the static `78%/65%` outcome needs named measure/timepoint and should not be generalized to all patients | PubMed PMID 27909165; randomized double-blind crossover study |
| Ross 2016, N=29, 60–80% at 6.5 months | Supported with important design/context qualification | PubMed PMID 27909164; single dose with psychotherapy, cancer-related distress |
| Agin-Liebes 2020, effects at 4.5 years | Follow-up reports 60–80%, but explicitly says efficacy conclusions are limited by parent crossover design | PubMed PMID 31916890; site/server uses PMID 32876501 in v5, which must be rechecked because the public record found was 31916890 |
| Horowitz 2026 is first/largest real-world palliative KAP implementation, N=30 | Publication supports 30 participants and authors' “largest published cohort” wording; it is descriptive, not efficacy evidence | PubMed PMID 41783943; state “authors report” and observational/program description |
| psilocybin trial findings prove efficacy for EOL care broadly | Overgeneralized | describe small, selected cancer-distress samples, psychotherapy context, crossover/blinding limits, and investigational status |
| Oregon access | Directionally correct if limited to Oregon Psilocybin Services | Oregon requires age 21+, preparation, licensed facilitator and licensed service center; no prescription/referral required; psilocybin remains federal Schedule I. Cite Oregon Health Authority and current 2026 rules |
| legal availability for serious illness | Must not imply medical treatment or an EOL exception | Oregon access is a regulated services model, not FDA approval or a prescription treatment; federal law still applies |
| “compassionate-use pathways” across 30+ jurisdictions | Unverified and jurisdictionally unstable | separate FDA expanded access/Right to Try, Canadian SAP, national/local reforms, decriminalization, licensed adult services, and nonmedical retreat frameworks; date every record |
| psychedelic medicines are established treatment | Unsafe if implied | FDA issued final clinical-investigation guidance in July 2026; this is development guidance, not approval. FDA continues to describe psychedelic products in development/investigational terms |
| patient-specific queries are declined | Only partially true | replace with “a limited automated screen attempts to decline some individualized questions; do not enter personal health information”; rebuild safety routing |
| sources are “verified” | Unsupported | retrieval is not verification; define review status per claim/source and add human clinical/legal review |
| 36 interviews, 100 survey, 63 qualitative responses, 200+ course hours, 700+ students, 7,600+ event registrations, 30+ jurisdictions | Some survey counts are corroborated on EOLPC's site; other private/operational numbers were not independently verified | retain only with dated owner-supplied evidence and permission; label unpublished/forthcoming work accurately |
| “publication anticipated/forthcoming 2027” | Future claim | name manuscript/status/owner or remove |
| primary source citation attached to every response | False | synthesized output can have zero sources; Exa web pages are not necessarily primary; source blocks are separate from individual claims |

High-stakes boundary: the site should state that psilocybin remains federally controlled, is not FDA-approved as a treatment, ketamine's psychedelic/palliative uses may be off-label, legal access varies, and users should not rely on the product for diagnosis, treatment, emergencies, eligibility, or legal advice. A footer disclaimer is not enough when the interactive tool itself labels outputs “verified.”

## 9. Accessibility and responsive findings

Canonical improves on v5 with skip navigation, explicit labels for its primary form, some aria-labels, and a second mobile breakpoint. Both have a responsive grid at 640px and generally reflow a single-column page.

Defects:

- v5 has zero `<label>` elements and zero ARIA attributes; placeholders carry form meaning.
- Knowledge-layer expanders and suggested-query chips are non-semantic clickable containers, not keyboard-operable buttons.
- Funding tabs expose visual active state but no `aria-pressed`, `role=tab`, or associated panel semantics.
- Evidence close button lacks an accessible name beyond “✕” in v5.
- Dynamic loading, error, validation, and response states have no `aria-live`/status semantics.
- Contact modal lacks `role=dialog`, `aria-modal`, focus entry/trap/return, and Escape handling.
- No reduced-motion accommodation despite smooth scrolling/loading animation.
- Focus styling exists only in limited selectors; visible focus coverage was not comprehensive.
- Inline SVG architecture has a title but dense embedded text may not reflow and is not a concise equivalent description.
- Voice control is both accessibility-relevant and policy-blocked on canonical.
- No automated contrast test was available; gold/small muted text should be measured rather than assumed compliant.
- Browser viewport API did not expose resize in this session; mobile conclusions are based on responsive code inspection and the canonical 480/640px rules. This is an explicit unverified boundary.

## 10. Brand-architecture findings

The work belongs under **Aloha AI**, not NSAG or Institutions of One. It is an independently initiated organization-specific concept demonstrating research translation, evidence-system design, responsible AI boundaries, and build strategy for EOLPC. The canonical footer's Aloha AI link is better than v5's direct email-only credit.

Risks:

- “Technology preview for RiverStyx Foundation,” “the research you helped build,” named funding language, Christine availability, and “EOLPC's own legal counsel” can read as commissioned, authorized, or jointly marketed work. The portfolio and public demo need an explicit relationship/status statement.
- The site uses “Aloha AI Consulting” while the broader practice is being described as Aloha AI. Normalize naming.
- Canonical's RN Builds link goes to `rn-portfolio-khaki.vercel.app`, not RN Selected Work; estate canonicality must be reconciled.
- The proposed knowledge system and EOLPC's own public Knowledge Hub/Connector Directory may be mistaken for one operational product. Clarify that this is a prototype concept and link the official EOLPC destination as authority.
- A strong Hawaiʻi-based practice can build nationally oriented work, but the page provides no Hawaiʻi context; avoid superficial geographic branding.

## 11. Business-model and conversion findings

**Audience:** RiverStyx/EOLPC funders and leadership; secondary audiences are practitioners, serious-illness communities, and portfolio visitors.  
**Buyer/decision-maker:** nonprofit leadership, foundation/funder, or institutional program sponsor.  
**Beneficiary:** patients/families and practitioners, subject to safe governance.  
**Value:** reduce research discovery time, surface sources, preserve organization knowledge, route individualized questions to humans.  
**Trust barriers:** medical/legal risk, unpublished private data rights, privacy, accuracy, nonprofit/client authorization, and maintenance.  
**Adoption barriers:** content permissions, clinical/legal governance, source licensing, privacy/security program, operational funding, practitioner directory liability, and real product validation.

The plausible business object is a **portfolio demonstration plus proposal**, not a public clinical product. The funding CTA is specific, but there is no scope-of-work, acceptance criteria, ownership/licensing structure, support model, update obligation, hosting/API budget, data-controller allocation, insurance/indemnity boundary, clinical/legal reviewer role, or success metric. Before soliciting $253k–$419k, provide a phased scope, assumptions, operating costs, and go/no-go validation stage. Do not build native apps before validating the governed web product.

## 12. Security, privacy, data, and operational findings

### P0 — public log access

`api/queries.js` implements:

```js
const secret = process.env.QUERY_LOG_TOKEN;
if (secret && req.query.token !== secret) return 401;
```

When `QUERY_LOG_TOKEN` is missing, access is allowed. Canonical Upstash is configured, so anonymous GET returned stored records. Minimal containment options, in priority order:

1. **Immediate Vercel containment:** set a high-entropy `QUERY_LOG_TOKEN` for Production, Preview, and Development as applicable, then redeploy; verify anonymous requests return 401. This is possible without reading any existing secret.
2. **Fail-closed code fix in both repositories:** reject when the secret is missing and avoid query-string secrets (which leak into logs/history); use an Authorization header or remove the endpoint entirely. File: `api/queries.js`.
3. **Deployment access restriction:** apply Vercel protection to the administrative endpoint/project until fixed; if the prototype must remain public, isolate admin routes behind authenticated infrastructure rather than a public serverless GET.
4. **Incident response:** disable access first; preserve internal logs; determine exposure window; rotate relevant tokens if any could have been logged; delete or minimize stored IP/query data under an approved retention decision; assess notification/legal obligations with counsel; do not publish raw incident evidence.

The audit query persisted: aggregate counts increased and the audit-generated request was visible in the response. The dossier does not reproduce it.

### Other security/privacy findings

- `api/beacon.js` stores visitor ID, referrer, truncated forwarded IP, truncated user agent, and may send IP to Slack on every page open. No privacy notice, consent, retention, purpose, controller, deletion, or vendor disclosure exists.
- Query logging stores the complete question and synthesis. The interface invites health/legal questions but does not warn users not to submit personal or sensitive data.
- CORS is `*` on chat, beacon, and v5 leads, enabling cross-origin invocation and abuse; no rate limiting, request-size limit, bot control, origin check, or cost guard exists.
- `req.body.query` is not type-checked or length-limited; `.toLowerCase()` can throw on non-string input.
- External API failures are swallowed through `Promise.allSettled`, allowing degraded answers without a clear source-health warning.
- UI injects API-controlled source titles, abstracts, highlights, URLs, and synthesis via `innerHTML` without sanitization. This creates stored/reflected DOM-XSS risk through third-party content.
- v5 lead email HTML interpolates unsanitized name/message/email, enabling HTML injection into notification email.
- v5 lead handler returns success even if Upstash, Slack, and Resend are all unconfigured or fail; the UI then falsely claims named people were notified.
- Canonical CSP improves framing/HSTS but permits `'unsafe-inline'` and `'unsafe-eval'`; `connect-src 'self'` correctly permits same-origin API calls but the Permissions Policy breaks microphone functionality.
- No terms, privacy policy, data-processing notice, retention policy, cookie notice, incident contact, or accessibility statement is linked.
- No tests, dependency lockfile, CI, monitoring contract, health endpoint, error tracking, or documented environment schema exists.

## 13. Defects ranked by severity

### P0 — blocking

1. Canonical `/api/queries` exposes stored query/visit data unauthenticated when `QUERY_LOG_TOKEN` is missing.

### P1 — serious

1. Canonical main inquiry CTA posts to missing `/api/leads`.
2. High-stakes “verified/citable” output lacks adequate medical/legal safety, source appraisal, review, and jurisdiction controls.
3. Visit/query telemetry collects potentially sensitive data without notice or meaningful user choice.
4. Third-party results and user-derived synthesis are inserted via `innerHTML` without sanitization.
5. Narrow regex can fail to recognize individualized medical/adverse-event/interaction questions.
6. v5 lead endpoint can assert notification success when all delivery systems fail.
7. Separate v5 public deployment duplicates and fragments a high-stakes prototype.

### P2 — material

1. Error and successful result can display together.
2. Canonical microphone is blocked by its own Permissions Policy.
3. Claims that all five sources/layers are used, nothing is simulated, and responses are verified are inaccurate.
4. Static mock admin metrics appear operational.
5. Public-facing relationship/status with EOLPC/RiverStyx is ambiguous.
6. Missing sitemap despite canonical sitemap declaration; both robots files 404.
7. Broken scroll analytics endpoint.
8. Accessibility gaps in chips, expanders, tabs, dynamic states, and modal.
9. No rate limiting, input bounds, or cross-origin restriction.

### P3 — polish

1. Funding totals disagree across paths.
2. No OG image or canonical link; JSON-LD description includes unexplained “NSAG-aligned framework.”
3. Mixed “Aloha AI” / “Aloha AI Consulting” and obsolete RN Builds destination.
4. Unsupported superlatives and absolute differentiation language.

## 14. Exact remediation plan

### Containment before normal Stage B

1. Vercel project `eolpc-demo`: set `QUERY_LOG_TOKEN` immediately and redeploy, or protect the deployment/endpoint. Confirm anonymous `/api/queries` returns 401/404.
2. In `eolpc-demo/api/queries.js`, change to fail closed when secret is absent; accept an authorization header; restrict methods; add `Cache-Control: no-store`; return no configuration detail; add audit logging that does not include secrets.
3. Review/delete/minimize stored query and visit records under an approved incident/retention process. Do not copy them into tickets.

### Canonical product repairs

1. `public/index.html`: remove the obsolete main form or point it to one verified endpoint; check `response.ok`; add a pending/success/failure state that names the actual next step.
2. `public/index.html`: remove `/api/track` call or implement a privacy-respecting endpoint; never silently imply tracking works.
3. `api/beacon.js`: remove IP/UA collection by default, add consent and retention boundary if analytics are necessary, fail safely, restrict method/CORS, and set `no-store`.
4. `api/chat.js`: validate string/length; rate-limit; restrict CORS; sanitize/encode outputs; implement source-level provenance; separate retrieval, evidence appraisal, and synthesis; make all degradation visible.
5. `api/chat.js`: replace regex-only medical routing with a governed safety policy including crisis/urgent escalation, medication interactions, contraindications, minors, pregnancy, capacity, individualized treatment/legal advice, and a conservative fallback.
6. `api/chat.js`: implement jurisdiction, effective-date, primary-authority, and federal/state conflict handling for legal questions; do not use Exa alone.
7. `public/index.html`: replace “verified/citable/nothing simulated” with exact prototype boundaries; visually distinguish live retrieval, hard-coded demo content, owner-supplied unpublished assets, and proposed future features.
8. `public/index.html`: correct study citations and qualifications; add FDA/investigational/federal-state and off-label boundaries near results.
9. `vercel.json`: remove `microphone=()` only if voice input is intentionally supported and privacy-reviewed; otherwise remove the control. Tighten CSP by moving inline JS/CSS to files and eliminating unsafe directives.
10. Add `public/privacy.html`, `public/terms.html`, an accessible data notice adjacent to the query box, retention/deletion contact, `public/robots.txt`, and either a real `public/sitemap.xml` or remove the declaration.
11. Replace div-based chips/expanders with buttons; add aria-expanded/control relationships, live regions, dialog semantics/focus management, reduced motion, and tested focus/contrast.
12. Add a real package/build/test contract: API unit tests, medical-routing adversarial tests, citation-integrity tests, link tests, axe checks, Playwright journeys, and deployment smoke tests.
13. Add an explicit “independently initiated; not commissioned/endorsed unless documented” relationship statement and normalize Aloha AI/RN Builds links.

### v5 retirement

1. Preserve the v5 repository privately as version history.
2. Remove public alias or redirect it to the repaired canonical site after checking that no stakeholder still relies on the preview URL.
3. Do not merge v5's larger `chat.js` blindly: its pinned-study/special-response code improves relevance but increases hard-coded synthesis and includes citation claims requiring review.
4. If retaining any unique v5 feature, port it through reviewed commits into canonical and test there; do not maintain two production projects.

## 15. Recommended estate disposition

**`eolpc-demo-v5`: D — duplicate/alternate predecessor; retire public deployment and preserve privately.**

**Canonical:** `rn-collins/eolpc-demo` at <https://eolpc-demo.vercel.app/>. It is the later repository and deployment, with explicit Vercel-to-GitHub commit linkage, current copy/metadata/accessibility/security configuration, and subsequent production fixes. It remains the sole **P** candidate already represented by the EOLPC Knowledge System case study, subject to a P0 release hold.

Why not P for v5: it is not an independent product, has the same audience/proposition/architecture/content, predates canonical, and would double-count one concept.  
Why not C: it is not a maintained component consumed by canonical.  
Why not E: it contains a working prototype, but the estate question is version duplication, not an independent experimental concept.  
Why not X: preserve it as documented project history rather than treating it as unrelated.

## 16. Proposed RN Selected Work case-study corrections

RN Selected Work should have **one** EOLPC Knowledge System record mapped only to canonical `eolpc-demo`.

Required case-study treatment:

- Do not add `eolpc-demo-v5` as a card, build count, or “version 5” case study.
- Record it in the internal handoff/asset ledger as a superseded June 2026 predecessor (D) with its archived deployment/repository relationship.
- Link “Open build” only to the repaired canonical URL.
- Until P0/P1 remediation and re-verification, label the canonical work: **“Independently initiated, uncommissioned concept prototype. Public-source retrieval layer only; the five-layer proprietary knowledge system, authentication, native apps, and institutional admin are proposed, not deployed.”**
- Do not claim a production RAG system, clinical tool, verified answers, five operational proprietary layers, live institutional analytics, or delivered client engagement.
- State what is real: one-page interactive prototype, real external research/API retrieval, deterministic synthesis, citations/source links, basic patient-specific-query routing, architecture/proposal, and funding-path exploration.
- State limitations: no medical/legal advice; no FDA-approved psychedelic treatment represented; access varies by jurisdiction; outputs require human clinical/legal review; public interaction is paused pending privacy remediation.
- Attribute EOLPC/RiverStyx names carefully and include “not commissioned or endorsed” unless written authorization proves otherwise.
- Update the case study only after the incident is contained, the principal form works, privacy notice exists, and the core interaction is re-tested.

## 17. Evidence appendix

### Repository and deployment evidence

- v5 commit: `bd49a18113210ae39a498704ec041155e4f608dc`
- canonical commit: `c249d1d46d37fd44a9be8f19351ac53ecda2e848`
- v5 files: `.gitignore`, `api/beacon.js`, `api/chat.js`, `api/leads.js`, `api/queries.js`, `public/index.html`
- canonical files: `api/beacon.js`, `api/chat.js`, `api/queries.js`, `package.json`, `public/index.html`, `vercel.json`
- `api/beacon.js` and `api/queries.js` are byte-identical across repositories; page and chat files differ; v5 alone has `api/leads.js`.
- canonical latest deployment metadata explicitly identifies repo ID 1285747882, branch `main`, and head SHA; v5 deployment metadata lacks GitHub commit metadata.
- Vercel listed 13 v5 deployments and at least 20 canonical deployments in the returned page; canonical history includes accessibility, content-currency, metadata, CTA, and API-endpoint fixes after v5.

### Live checks

- Both roots: 200.
- Both robots and sitemap paths: 404.
- Both arbitrary paths: 404.
- Both chat GETs: 405 with CORS `*`; POST consumer journey returned source-backed output.
- v5 queries endpoint: 200 configuration message and empty records because Upstash not configured.
- canonical queries endpoint: 200 unauthenticated stored records; aggregate only reported above.
- canonical leads and track endpoints: 404.
- Funding toggle, evidence preview, empty-email validation, and canonical contact modal were exercised without consequential submission.
- Browser policy blocked entry of a patient-specific medication scenario; safety conclusions additionally rely on direct source inspection of `isMedicalAdvice()`.
- Viewport resize was not available in the browser runtime; responsive CSS was inspected.

### Primary/authoritative source checks

- Griffiths et al., 2016, PubMed PMID 27909165: <https://pubmed.ncbi.nlm.nih.gov/27909165/>
- Ross et al., 2016, PubMed PMID 27909164: <https://pubmed.ncbi.nlm.nih.gov/27909164/>
- Agin-Liebes et al., 2020, PubMed PMID 31916890: <https://pubmed.ncbi.nlm.nih.gov/31916890/>
- Horowitz et al., 2026, PubMed PMID 41783943: <https://pubmed.ncbi.nlm.nih.gov/41783943/>
- FDA final psychedelic-drug clinical-investigation guidance (July 2026): <https://www.fda.gov/regulatory-information/search-fda-guidance-documents/psychedelic-drugs-considerations-clinical-investigations>
- FDA Right to Try: <https://www.fda.gov/patients/learn-about-expanded-access-and-other-treatment-options/right-try>
- Oregon Psilocybin Services access: <https://www.oregon.gov/oha/PH/PREVENTIONWELLNESS/Pages/Psilocybin-Access-Psilocybin-Services.aspx>
- Oregon description/federal Schedule I boundary: <https://www.oregon.gov/oha/ph/preventionwellness/pages/psilocybin-what-are-psilocybin-services.aspx>
- DEA scheduling: <https://www.dea.gov/drug-information/drug-scheduling>
- EOLPC public site and preliminary survey-count context: <https://eolpc.org/>

### Explicitly unverified

- Private interview/course/forum source rights, consent, accuracy, and ingestion readiness.
- Claimed hours, enrollment/registration totals, 30+ jurisdiction coverage, counsel review, funding relationship, and publication status beyond public statements.
- Vercel environment variable values, Slack/Resend delivery, and internal retention settings; no secrets were viewed.
- Full mobile/touch and screen-reader matrix.
- Every dynamically generated external source for arbitrary user queries; source quality is query-dependent.
- Whether EOLPC, RiverStyx, named practitioners, institutions, or employers authorized public use of names/claims.

