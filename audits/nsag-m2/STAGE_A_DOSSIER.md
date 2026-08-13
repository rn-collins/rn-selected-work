# NSAG M2 — Stage A Crawl Dossier

Audit date: August 12, 2026 HST  
Audit mode: read-only; no source, deployment, API, lead, booking, or RN Selected Work mutation  
Scope: the complete deployed M2 consumer interface and its role within the Neurocognitive Systems Advisory Group (NSAG)

## 1. Asset identity

- **Site:** `https://nsag-m2.vercel.app/`
- **Vercel project:** `nsag-m2`, project ID `prj_PK8GVuBVY4Za9DpxiqDPcMnAGjZj`, RN Collins team `team_6xuOmJL3MoIFarDpy9odi175`.
- **Production deployment inspected:** `dpl_Hq5zjxK6EFHLBZMwDN5bivsKx2FW`, READY, canonical project domain `nsag-m2.vercel.app`.
- **Repository:** private `rn-collins/nsag-m2`, default branch `main`, repository ID `1285739702`.
- **Commit linked to inspected deployment:** `d38a3ff2e801756b4a4ec3ed82ea14f87fdf8f5a`; message records replacement of a dead Gumroad link with a waitlist POST.
- **Architecture:** one 76,789-byte `index.html`, one `vercel.json`, and `.gitignore`; no framework, package manifest, serverless function, test suite, build step, or local data store.
- **Repository/deployment relationship:** direct Vercel deployment from the private repository. The live HTML and repository HTML are byte-equivalent except for a final newline. Twenty deployments are recorded for the project; the inspected domain serves the latest production artifact.
- **Parent practice:** NSAG. M2 is a consumer-facing implementation of the NSAG module “AI Legal Navigation,” not a separate practice and not a separate Aloha AI product. Aloha AI may properly receive technical implementation credit.
- **Status:** public, indexable, incomplete/broken assessment prototype presented as an active challenge and lead generator.
- **Privacy:** repository is private; deployed interface and assessment claims are public. Email, derived assessment results, waitlist interest, and contact data are sent to `nsag-api.vercel.app`. There is no privacy policy, terms page, consent control, retention statement, controller/contact statement, or deletion mechanism.
- **Canonical version:** for this module, the evidence supports the repository `rn-collins/nsag-m2` plus deployment `nsag-m2.vercel.app`. There is no evidence of an alternate M2 implementation or working `/m2` route on the parent site. This is canonical **as a component**, not an independent portfolio build.

## 2. Executive verdict

M2 is meant to be a free, email-gated, twelve-scenario institutional self-reflection that maps one respondent’s answers across six AI-governance dimensions, returns a maturity tier, and converts interested institutions into NSAG advisory or a future $500 toolkit. The product concept is coherent and belongs under NSAG.

The deployed product does **not work end to end**. Its Content Security Policy blocks Chart.js and jsPDF, the two remote scripts on which it relies. The page’s initialization therefore leaves `chart` undefined. A user can display the sector selector and first question, but the first answer invokes `updateRadar()`, throws on `chart.data`, and never advances. Even if this blocking defect is repaired, the promised PDF is not delivered: `generateResultPDF()` is defined but never called, and the API call only stores a lead/result payload. The result interpretation variable is also never inserted into the visible “What this means” field.

The product should exist **only as an NSAG component (C)** after remediation and evidence review. It should not receive its own RN Selected Work case study. Until the blocking journey and privacy/evidence defects are fixed, the public module should be deindexed or labelled unavailable; the parent NSAG case study should not imply the assessment is operational.

Top risks:

1. **P0 delivery failure:** assessment freezes on the first answer.
2. **P0 false deliverable:** the interface promises an immediate PDF, but no code path calls the PDF generator.
3. **P1 legal/evidentiary credibility:** quantitative, rights, outcome, and “real-world example” claims are uncited; two examples appear invented or anonymized without disclosure.
4. **P1 privacy/consent:** a mandatory email gate sends derived institutional governance scores while saying answers stay in the browser, bundles “optional updates” without separate consent, and provides no policy.
5. **P1 result integrity:** a transparent but unvalidated, leading 4/3/2/1 rubric produces authoritative maturity language and sales recommendations unsupported by validation.

## 3. Complete route map

The entire repository and deployed application expose one content route, `/`. There is no client router and no server function in the repository. Discovery and policy routes were tested:

- `/` → 200.
- `/robots.txt` → 404.
- `/sitemap.xml` → 404, despite being advertised in HTML.
- `/privacy` → 404.
- `/terms` → 404.
- `/advisory` → 404 on the module domain.
- `/api/track` POST → 404; page-view and scroll-depth events silently fail.

External destinations were enumerated and checked where safe: M1 (200), M11 (200), NSAG `/advisory` (200), Aloha AI (200), and the legacy RN portfolio (200). The Outlook booking URL was not used to create an appointment. The lead API rejects GET/HEAD with 405; no consequential POST was made. Full detail is in `ROUTE_CONTROL_LEDGER.md`.

## 4. Complete interaction/control inventory

The interface contains:

- 1 begin button;
- 4 sector buttons and 1 continue button;
- 48 generated answer buttons across 12 scenarios;
- A/B/C/D keyboard shortcuts;
- 1 required-result email field and 1 reveal button;
- 1 results copy button;
- 3 generated result actions: share, print, retake;
- 2 conditional conversion routes per tier (advisory/toolkit plus discovery call);
- 2 related-module cards;
- 2 footer links;
- 1 fixed contact button, modal backdrop, 3 contact inputs, send, and cancel;
- generated radar, six dimension bars, rationale flashes, dimension-complete flashes, and cinematic tier reveal.

Every control and resulting state is recorded in `ROUTE_CONTROL_LEDGER.md`. The critical state dependency is: first answer → `selectOpt()` → `updateRadar()` → `chart.data` access → exception because Chart.js was blocked → no rationale completion and no next question.

## 5. Consumer journeys and observed results

### Journey A — Understand the product

The hero identifies the legal-institution audience, six governance dimensions, 12 scenarios, eight-to-ten-minute duration, and educational/not-validated boundary. It also makes the benefit legible: expose whether AI governance is explicit. Trust is weakened immediately by the uncited “65%” headline statistic and dense copy before the start control.

### Journey B — Select a sector and begin

The sector selector has four clear choices and enables Continue. Source tracing confirms the transition works independently of Chart.js. However, sector choice has no product effect: `selectedSector` is assigned and never read. The copy “Your sector shapes which scenarios feel most familiar” is therefore misleading.

### Journey C — Complete the assessment

**Failed at question 1.** The page’s CSP blocks Chart.js, `initRadar()` throws at load, and answer selection later throws in `updateRadar()`. Because the exception occurs before the scheduled transition, the consumer cannot reach question 2. Keyboard shortcuts fail through the same path.

### Journey D — Obtain results/report

**Unavailable.** The gate and results are unreachable through the deployed journey. Source tracing shows an email gate, tier calculation, dimension bands, results lead POST, and DOM rendering. It also shows no invocation of `generateResultPDF()` and no API instruction to email a report. The visible promise “Your results download as a PDF immediately after submission” is not implemented.

### Journey E — Act on results

**Unavailable live.** Conditional result CTAs would route PIONEERING respondents to advisory and all tiers to Outlook booking; lower tiers can join a $500 toolkit waitlist. The waitlist always shows success immediately even if the API fails. The product is explicitly unavailable for checkout, so this is lead capture rather than a purchase path.

### Journey F — Contact the architect

The modal can open and close without submission. It is not a real accessible dialog and treats every resolved HTTP response—including a 4xx/5xx—as success by closing/resetting. No safe POST was made.

### Return/back/empty/error behavior

There is no persistence; reload resets all answers. A back function exists but no back control is rendered. There is no recovery UI for blocked dependencies, chart errors, API failures, clipboard failures, or PDF failures. Invalid email receives only a visual error class and `aria-invalid`; no explanatory text is announced.

## 6. Functional matrix

| Capability | Classification | Evidence |
|---|---|---|
| Static explanation and disclaimer | Working | Served in HTML at `/`. |
| Sector selection UI | Partial | Selection styling/Continue operate; choice never affects content or score. |
| Question generation | Working in source | All 12 × 4 buttons are injected before the chart initialization error. |
| Assessment progression | **Broken** | First answer calls undefined chart and cannot advance. |
| Scoring math | Implemented but unvalidated | Sum 12 answers, mean thresholds, two-item dimension sums; unreachable live. |
| Recommendations | Partial/simulated | Hard-coded by tier; `rec` is calculated but never placed into `#rec-text`. |
| Radar visualization | Broken | Chart.js blocked by CSP. |
| Dimension bars | Implemented but unreachable | DOM generation exists after results gate. |
| PDF download | **Missing delivery** | Generator defined; zero call sites; jsPDF also blocked by CSP. |
| Email report | Missing | No report email instruction exists. API receives lead/result only. |
| Toolkit | Intentionally unavailable | Waitlist only; preview asserts contents but no artifact can be inspected. |
| Toolkit waitlist | Partial/simulated success | POST is fire-and-forget; UI declares success regardless of outcome. |
| Advisory CTA | Implemented but unreachable | Target returns 200. |
| Discovery booking | Implemented but unreachable | URL exists; no booking made. |
| Contact form | Partial | POST exists; no `response.ok`, pending, success, or error treatment. |
| Analytics | Broken | `/api/track` returns 404; failures swallowed. |
| Privacy/terms | Missing | Both expected routes return 404; no links. |
| Sitemap/robots | Broken/missing | Sitemap advertised but 404; robots 404. |
| Responsive layout | CSS present, runtime unverified | 900px and 480px media rules exist; mobile chart would share blocked dependency. |
| Print | CSS present, unreachable | Print control generated only after results. |

## 7. Copy and information-architecture findings

Strengths: the intended institutions are named; the six dimensions have concrete operational language; the “educational self-assessment, not a validated test or audit” disclaimer is prominent; tier results are later labelled as one respondent’s self-report. The primary framework is understandable.

Material defects:

- “Answer these six questions” contradicts the actual 12 scenarios.
- “Your sector shapes which scenarios feel most familiar” describes personalization that does not exist.
- “Your results download as a PDF immediately” and “enter an email to receive the PDF” describe an absent deliverable.
- “Runs entirely in your browser” is incomplete because a derived score, tier, and six dimension scores are posted to NSAG’s API.
- “Answers stay in your browser” is technically narrow but materially misleading: derived answer data leaves the browser.
- “Optional NSAG updates” is bundled into the required email gate without an opt-in control.
- The dense “Why This Module Exists” essay precedes the start CTA and makes the opening feel like a position paper rather than an eight-minute tool.
- All options are transparently ordered from ideal to worst and reinforced with normative rationales. This is useful for teaching but weak for measuring; call it a guided governance checklist, not a maturity assessment.
- “Most institutions at this tier cross into PIONEERING within one advisory engagement cycle” is an unsupported outcome/conversion claim.
- The two “What PIONEERING looks like” vignettes use concrete institutional outcomes as though factual. They need a named source, “composite hypothetical” label, or removal.
- “Your organization is functioning as a genuinely AI-accountable legal institution” overstates what one respondent’s 12 self-reports establish.
- “Copy Results” and share copy revert to “scored” despite the non-validated disclaimer.
- Generated copied/shared links point to `nsag-site.vercel.app/m2`, which returned no evidence of being the canonical module; use `nsag-m2.vercel.app` or establish a working canonical parent route.
- The footer calls a stale legacy portfolio “RN Builds.” This conflicts with the current RN Selected Work/RN Builds architecture.
- JSON-LD calls RN “AI Educator & Consultant,” points to the legacy portfolio, and omits NSAG authorship/organization semantics.

## 8. Science/law/policy/regulatory claim ledger

No scientific, legal, policy, or quantitative source is cited anywhere in the module. The six “primary sources” are only promised as future toolkit contents. The exact “65%” phrase did not resolve to a credible source in an exact-phrase search.

| Claim | Site qualification/source | Assessment | Required correction/evidence |
|---|---|---|---|
| “65% of risk assessment algorithms…have never been independently evaluated for racial bias in the specific jurisdiction” | None; repeated twice | **Unsupported quantitative claim.** Exact phrase produced no supporting primary source. | Remove unless dataset, denominator, jurisdiction/timeframe, methodology, and primary source can be supplied. |
| AI tools “recommend who gets bail, what sentence… and how a case gets routed” | None | Broadly plausible but conflates heterogeneous tools and legal effects. | Name tool classes and jurisdictions; distinguish recommendation, information, and legally authorized decision. |
| AI involvement is “often” undisclosed to affected people | None | Unquantified prevalence claim. | Source or recast as a documented governance risk without frequency. |
| A defendant “has a right” to tool notice, limitations, challenge, and individual explanation beyond proprietary methodology | General legal-advice disclaimer only | **Overbroad legal conclusion.** Rights vary by constitution, statute, rule, discovery posture, jurisdiction, and tool use. | Replace with jurisdiction-specific authority or aspirational NSAG standard. State clearly when describing a recommended policy rather than law. |
| Plain-language notice “is a governance requirement” | None | Can be an NSAG normative requirement; currently sounds legally mandatory. | Say “NSAG treats this as a governance requirement”; separately cite any binding authority. |
| “Explanation rights are accountability rights. Opacity is not a vendor privilege.” | None | Advocacy/normative language presented categorically. | Identify as framework principle; do not imply universal enforceable law. |
| Independent demographic impact assessment is required annually and for every update | Embedded as highest-score answer | A proposed maturity criterion, not an established universal legal requirement. | Label as NSAG recommended practice and ground frequency/thresholds in evidence. |
| Community authority over adoption/discontinuation is necessary for governance | None | Normative institutional-design position. | Attribute to NSAG framework; explain governance model and legal authority constraints. |
| One advisory cycle commonly moves institutions to PIONEERING | None | Unsupported service outcome claim. | Remove or publish cohort definition, sample, measurement, time window, and outcomes. |
| Legal-aid example with protected escalation and automatic suspension | No institution/source; concrete narrative | Appears hypothetical/composite but is presented as fact. | Label “illustrative hypothetical” or cite the actual organization and documentation. |
| Public-defender office found disparities in two tools, discontinued one, and was cited in state legislation | No office/statute/source | Highly specific, presently unverifiable, and reputationally serious. | Remove until named primary records and legislation are cited; otherwise label hypothetical and delete fabricated outcome details. |
| “Most audits” surface less in a day than six/twelve answers | None | Unsupported superiority claim and internal inconsistency. | Remove. |
| NIST-compatible themes: transparency, explainability, fairness, accountability, human roles | Not cited on site | Primary official material supports these as risk-management characteristics, not this scoring instrument or legal mandates. | A defensible evidence base can begin with NIST AI RMF 1.0 and NIST SP 1270, while remaining explicit that AI RMF is voluntary and non-sector-specific. |

Primary-source context reviewed for this audit: NIST’s AI RMF describes a voluntary, rights-preserving, context-sensitive framework and warns that sociotechnical characteristics cannot be reduced to a single metric; NIST identifies validity, safety, accountability/transparency, explainability, privacy, and fairness as trustworthiness characteristics. This supports M2’s topics, not its quantitative claim, legal-rights statements, tier thresholds, or outcome claims.

The disclaimer “not legal advice” is helpful but does not cure categorical legal claims. A date label (“Last reviewed August 2026”) does not establish actual legal review or jurisdictional currency.

## 9. Accessibility and responsive findings

Positive implementation: `lang="en"`, visible `:focus-visible` outline, `prefers-reduced-motion` rules, native buttons for most controls, email `aria-label`, four sector `aria-label`s, and print/mobile media rules.

Defects and unverified areas:

- The contact modal has no `role="dialog"`, `aria-modal`, accessible name association, focus trap, initial focus, Escape handling, or focus restoration.
- Contact fields rely on placeholders rather than labels; message is not required.
- Invalid email sets `aria-invalid` but provides no associated error text/live region.
- Progress, rationale flashes, dimension completion, cinematic reveal, result tier, and toolkit success lack live-region announcements.
- Radar charts have no text alternative. Dimension bars do provide visible names/bands when results render, but the desktop canvas’s changing state is not exposed to assistive tech during completion.
- Question auto-advance after 1.1 seconds can disrupt keyboard/screen-reader users; answered options are disabled through `pointerEvents` only, not native `disabled` state.
- The fixed contact button and overlay may cover content at mobile zoom. The media rule shrinks it but does not prove 200%/400% reflow.
- Related external links change the current tab without warning, while footer links open new tabs; behavior is inconsistent.
- Motion-reduction CSS disables some transitions but not every timer-driven reveal/auto-advance semantic.
- The sector Continue control is visually/interaction disabled with opacity and pointer events, but remains keyboard-focusable and invokable because native `disabled`/`aria-disabled` is absent.
- Heading and landmark semantics are sparse: there is no `main`, navigation landmark, fieldset/legend grouping, or form semantics around assessment questions.

A real browser executable was unavailable in this audit environment; therefore contrast ratios, focus order, mobile screenshots, touch hit areas, and zoom/reflow were not falsely certified. These require Stage B verification with automated and manual browser tooling.

## 10. Brand-architecture findings

M2’s correct owner is **NSAG**: it operationalizes an NSAG governance module and uses NSAG language, module numbering, and related-module pathways. The legal disclaimer, copyright, and NSAG parent CTA reinforce that. **Aloha AI** is correctly positioned only in the footer as builder, although the case study should phrase this as technical implementation rather than co-ownership. **RN Builds/RN Selected Work** is the portfolio/workbench layer and should document the parent NSAG system, not turn each module into an independent build.

The current surface fragments the brand in three ways: a standalone Vercel domain without clear return-to-NSAG navigation; a stale legacy RN portfolio link and JSON-LD identity; and a parent `nsag-site.vercel.app/m2` URL used in share/copy despite the deployed module living elsewhere. Establish either a real parent canonical route that redirects/proxies to this app or consistently use the module domain with a clear “Part of NSAG” header/back link.

The visual identity is coherent and institutional, but the unsupported statistics/examples and nonworking product actively weaken NSAG credibility in a high-trust legal-policy domain.

## 11. Business-model and conversion findings

- **Audience/users:** legal-aid organizations, public defenders, court administrators, law firms, policy/regulatory bodies.
- **Beneficiaries:** affected litigants/defendants, staff, communities, and institutional leadership.
- **Buyer/decision-maker:** executive director, chief counsel, court administrator, CIO/AI governance officer, risk/compliance leader, or funder.
- **Product role:** educational lead magnet and service-discovery layer; future paid toolkit; not an audit or accreditation.
- **Economic proposition:** identify governance gaps, sell a $500 toolkit or discovery/advisory engagement.
- **Trust barriers:** no evidence base on the public tool, nonworking experience, invented-looking examples, no privacy policy, unvalidated yet authoritative tiers, and no advisory scope/pricing/fulfillment explanation inside the module.
- **Adoption barriers:** institutional respondents may not know answers, one respondent cannot represent an institution, and governance data may be sensitive. There is no multi-stakeholder workflow, evidence upload, answer provenance, uncertainty response, or “I don’t know” option.
- **Conversion defects:** assessment cannot complete; toolkit is not available; waitlist lies about success on API failure; booking replaces the assessment; there is no confirmation that the submitted email will receive anything.

Do not invest in expanded features first. Repair the core journey, define the assessment as an educational checklist, publish its evidence/method, give users an optional ungated on-device result, obtain separate marketing consent, and make the paid offer fulfilment real. Only then consider organizational evidence collection or benchmarking.

## 12. Security, privacy, data, and operational findings

Positive: HSTS, X-Frame-Options DENY, `frame-ancestors 'none'`, nosniff, strict-origin referrer policy, restrictive permissions policy, and a narrow `connect-src` are configured.

Critical/serious issues:

- CSP is internally inconsistent with application dependencies and blocks both Chart.js and jsPDF.
- CSP still permits `'unsafe-inline'` and `'unsafe-eval'`, reducing XSS protection despite blocking needed hosts. Prefer self-hosted pinned assets and nonces/hashes.
- The page says answers stay in the browser but posts `{tier, score, dimScores}` with email to the lead API. These are derived assessment answers and potentially sensitive institutional governance data.
- Email is mandatory to see results; “optional updates” are bundled without affirmative consent.
- No privacy policy explains controller, purpose, lawful basis/consent, vendors, retention, security, access/deletion, or marketing unsubscribe.
- Contact and waitlist functions never check `response.ok`; false success is built in.
- `/api/track` is missing and silently fails. If analytics is desired, either deploy/document it or remove the calls.
- No rate limiting, CORS policy, storage, email delivery, or retention could be verified because `nsag-api` is a separate private infrastructure audit target. No claim is made that the API safely persists data.
- Third-party CDNs lack Subresource Integrity and are incompatible with current CSP.
- All application logic, tier thresholds, sales copy, and endpoint are exposed client-side—as expected for static software—but there is no versioning or assessment methodology identifier in submissions/reports.
- There are no tests, dependency lockfile, build validation, error monitoring, or release checks.

## 13. Defects ranked by severity

### P0 — blocking

1. CSP blocks Chart.js; first answer throws and assessment cannot progress.
2. Immediate PDF/report is promised but `generateResultPDF()` has no call site; jsPDF is also CSP-blocked.

### P1 — serious

1. Uncited 65% statistic and overbroad legal-rights statements in a legal-policy product.
2. Specific institutional “PIONEERING” success stories appear factual but have no source or hypothetical label.
3. Mandatory email gate transmits derived results despite “answers stay in browser”; no privacy policy or separate updates consent.
4. Scoring/tier labels and strong institutional conclusions are not validated and are based on one easily gamed respondent.
5. Result interpretation `rec` is never assigned to `#rec-text`; a central result section is blank.
6. Contact/waitlist false-success behavior ignores HTTP error status.
7. “Most institutions…within one advisory engagement cycle” is an unsupported service outcome claim.

### P2 — material

1. Sector personalization is simulated; `selectedSector` is unused.
2. Analytics endpoint 404s; sitemap is advertised but 404; robots file missing while page is indexable.
3. No back control despite dead `prevQuestion()` code; no recovery/persistence/error states.
4. Copied/shared canonical URL is wrong or unestablished.
5. Modal and dynamic assessment states have major accessibility gaps.
6. Toolkit contents and $500 offer are advertised before fulfillment can be inspected.
7. Old RN portfolio/JSON-LD identity fragments brand architecture.
8. Booking link replaces current assessment and can lose results.

### P3 — polish

1. “Six questions” versus 12 scenarios.
2. Dense pre-assessment essay and repeated 65% claim.
3. Inconsistent new-tab behavior and stale copy.
4. Unused PDF percentage parameter and unused sector/back/counter code increase maintenance noise.

## 14. Exact remediation plan

Repository targets are `index.html` and `vercel.json`; add tests/config rather than continuing as an untested single file.

1. **Restore runtime:** self-host pinned Chart.js/jsPDF assets or explicitly allow exact CDN hosts with SRI; wrap chart initialization/update so assessment logic works without visualization. Add a visible dependency-error fallback.
2. **Deliver or remove PDF:** call `generateResultPDF(tier, tierColor, pct, dimScores, dimPcts, rec, email)` only after result render, test the generated file, and change copy from “receive by email” unless actual email delivery exists. Prefer an ungated “Download result” button and optional email follow-up.
3. **Populate interpretation:** assign `rec` into `#rec-text`; prevent duplicate dynamic inserts on repeat invocation.
4. **Fix privacy:** do not send score/dimensions without explicit disclosure; provide `/privacy`; separate report delivery from marketing opt-in; state retention/deletion/contact; link policy at gate and contact form. Audit `nsag-api` independently.
5. **Correct evidence:** remove the 65% claim until sourced; distinguish binding law, jurisdiction-specific law, NSAG recommendations, and aspirational principles. Label examples hypothetical/composite or cite named primary evidence. Remove unsupported advisory-cycle outcome claim.
6. **Reframe instrument:** call it a guided self-reflection/checklist; add “I don’t know/not within my role”; identify respondent role; avoid institution-wide declarations from a single response. Publish rubric version, rationale, limitations, and evidence mapping.
7. **Fix sector step:** either branch scenario language/recommendations by sector or remove the claim and selector.
8. **Make submissions truthful:** await fetch, inspect `response.ok`, show pending/success/error states, and never report waitlist/contact success on failure.
9. **Accessibility:** semantic `main`, forms, fieldsets/legends, native disabled states, live regions, text chart alternative, accessible dialog/focus/Escape/restore, error associations, non-timed progression option, and keyboard/zoom/mobile tests.
10. **Discovery/SEO:** create real `robots.txt` and sitemap or remove advertised sitemap; add canonical URL, correct Open Graph URL, and NSAG Organization/CreativeWork schema. Update RN Selected Work destination.
11. **Canonical navigation:** establish `nsag-site.vercel.app/m2` as a redirect/route or use `nsag-m2.vercel.app` everywhere. Add persistent “Back to NSAG” navigation.
12. **Quality gate:** introduce package/lockfile or documented vendored dependencies, automated HTML/JS linting, unit tests for all score thresholds/dimension bands, browser tests for all four tier journeys, axe checks, CSP console assertion, PDF content test, API failure tests, and 360/768/1440px plus 200%/400% reflow checks.

Stage B acceptance should require: no console/network errors in primary journey; 12/12 completion by mouse, keyboard, and touch; exact tier boundary tests; accessible ungated results; working verified PDF; accurate disclosure of every outbound field; API success and failure behavior; cited/qualified claims; mobile/zoom screenshots; and production retest.

## 15. Recommended estate disposition

**C — Component**, retained under the canonical NSAG parent case study, with a public-release hold until P0/P1 defects are remediated.

Why not the alternatives:

- not **P**: it is one of fifteen NSAG modules and does not warrant independent portfolio cardinality;
- not **D**: no duplicate M2 deployment/repository was found;
- not **E** as final estate identity: it is incomplete in current state, but its durable architectural role is a component rather than a standalone experiment;
- not **X**: the module materially demonstrates the NSAG framework when functional;
- not **U**: repository, deployment, parent, and canonical relationship are evidenced.

Final operational decision: **maintain as a private-repository/public component, temporarily deindex or mark unavailable, repair, then relaunch beneath NSAG.**

## 16. Proposed RN Selected Work case-study corrections

Do not add an M2 card. In the NSAG parent case study:

- list M2 as “AI Legal Navigation — guided institutional governance self-reflection” and identify it as one applied module within NSAG’s fifteen-module framework;
- until Stage B passes, label it “prototype under remediation” or remove the live CTA;
- do not say it provides a working PDF report, validated assessment, audit, accreditation, benchmarking, or AI/legal advice;
- state the evidence boundary: 12 self-reported scenarios, six hard-coded dimensions, one respondent, educational output, no validation study;
- say NSAG owns the framework and Aloha AI built the technical interface;
- after repair, provide two explicit links: “Open M2 challenge” and “Read NSAG case study,” not a standalone case study;
- identify that email/derived results leave the browser only if that behavior remains, with privacy link;
- use the established canonical URL and retire legacy RN portfolio links.

Suggested accurate status sentence: “M2 is an NSAG educational self-reflection prototype for examining AI governance practices in legal institutions; its public assessment and report flow are currently under remediation and are not a validated audit or legal-advice service.”

## 17. Evidence appendix

### Repository/deployment evidence

- Vercel project ID: `prj_PK8GVuBVY4Za9DpxiqDPcMnAGjZj`.
- Deployment ID: `dpl_Hq5zjxK6EFHLBZMwDN5bivsKx2FW`.
- Repository commit: `d38a3ff2e801756b4a4ec3ed82ea14f87fdf8f5a`.
- Repository files: `.gitignore`, `index.html`, `vercel.json`; no build/test package.
- Live response: HTTP 200, `content-length: 76788`, CSP and other headers documented in audit logs.
- Repository/live comparison: only terminal newline differs.
- `node --check` on extracted main application script: parses successfully. Delivery defects are runtime/state defects, not syntax defects.

### HTTP observations

- `/` 200.
- `/robots.txt`, `/sitemap.xml`, `/privacy`, `/terms`, `/advisory` 404.
- POST `/api/track` 404.
- lead API GET/HEAD 405; no POST sent.
- M1, M11, NSAG advisory, Aloha AI, legacy RN portfolio returned 200.

### Deterministic runtime evidence

- `vercel.json` CSP `script-src 'self' 'unsafe-inline' 'unsafe-eval'` excludes both `cdnjs.cloudflare.com` and `cdn.jsdelivr.net`.
- HTML imports jsPDF from cdnjs and Chart.js from jsDelivr.
- bottom-of-script order is `buildQuestionScreens(); initRadar(); updateProgress();`.
- `initRadar()` performs `new Chart(...)`; blocked dependency causes ReferenceError.
- `selectOpt()` calls `updateRadar()` before scheduling `nextQuestion()`; `updateRadar()` dereferences `chart.data`, so answer progression halts.
- `generateResultPDF()` has one definition and zero call sites.
- `rec` is assigned per tier but never written to `#rec-text`.
- API result payload includes email, tier, percentage score, and six dimension sums.

### Primary public context reviewed

- NIST, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, DOI `10.6028/NIST.AI.100-1` (voluntary, rights-preserving, context-sensitive AI risk management).
- NIST, *Towards a Standard for Identifying and Managing Bias in Artificial Intelligence*, NIST SP 1270, DOI `10.6028/NIST.SP.1270`.
- NIST Trustworthy and Responsible AI materials identifying validity/reliability, safety, security/resilience, accountability/transparency, explainability/interpretability, privacy, and fairness/mitigation of harmful bias.

These sources support the relevance of governance topics, not M2’s precise statistic, legal-rights language, rubric, thresholds, institutional vignettes, or claimed service outcomes.

### Explicitly unverified

- No browser executable was available, so no screenshot, touch-device, computed-contrast, focus-order, zoom/reflow, native-share, clipboard, print-dialog, or downloaded-PDF observation is claimed.
- No real email, lead, contact, waitlist, booking, or advisory submission was made.
- The separate private `nsag-api` storage, CORS, rate limits, retention, email behavior, and security were not within this site repository and require their own infrastructure audit.
- Toolkit files, claimed six primary sources, cohort program, peer benchmarks, advisory engagement outcomes, and the two institution examples were not available for inspection.
- Legal requirements were not evaluated jurisdiction by jurisdiction; therefore the site must not universalize them.

The crawl boundary is complete for the files and routes exposed by this repository/deployment. The unresolved items above are verification boundaries, not assumed functionality.
