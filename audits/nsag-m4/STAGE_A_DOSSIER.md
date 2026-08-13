# NSAG M4 — Stage A Audit Dossier

Audit date: 2026-08-12 (HST)  
Companion evidence: [`ROUTE_CONTROL_LEDGER.md`](./ROUTE_CONTROL_LEDGER.md)

## 1. Asset identity

- **Asset:** M4 Governance Challenge — Cannabis Public Health Infrastructure.
- **Canonical production:** `https://nsag-m4.vercel.app/`; Vercel project `nsag-m4`, ID `prj_27SIOBCOoHRFX8JFl0beSi3krav6`.
- **Latest observed deployment:** `dpl_5JPoo9Vv8dGPrAsJ5xyHVrTqaxBC`, READY, production, deployed from commit `a1a50dbedb014971b6b7eb91b930114ba9f89c7e`.
- **Repository:** private `rn-collins/nsag-m4`, GitHub repo ID `1285739785`. Vercel metadata directly names this repository, branch, repo ID, and commit; the relationship is canonical and verified, not guessed.
- **Architecture:** `.gitignore`, 77,580-byte `index.html`, and `vercel.json`; no framework, package manifest, dependency lock, build pipeline, README, tests, CI, or source/content separation.
- **Deployment:** Vercel cloned the identified commit and completed static output in 19 ms. READY proves file deployment only.
- **Owner/parent:** NSAG. This is M4 of the NSAG module system. Aloha AI is credited as implementation. It is neither an independent Aloha AI practice nor a standalone RN Builds product.
- **Public/privacy boundary:** public consumer interface, private source. Email and derived assessment data can be sent to `nsag-api`; contact fields and waitlist interest also target that API. No privacy or terms page is linked.

## 2. Executive verdict

M4 is an attractive but non-completable cannabis-governance lead-generation assessment. A consumer can read the framing, choose an organizational context, and answer question 1. The first response then crashes the journey. The root cause is deterministic: `vercel.json` restricts scripts to same-origin, while Chart.js and jsPDF load from third-party CDNs. Chart.js is blocked at load; `updateRadar()` then dereferences the absent chart after the first answer. No user can reach question 2, scoring, recommendations, report, or tier-specific conversion.

The advertised PDF is doubly nonfunctional: jsPDF is CSP-blocked **and `generateResultPDF()` is never invoked anywhere**. The gate says both that the report will be received and that it downloads immediately, but neither behavior occurs.

Conceptually, a cannabis public-health governance reflection can be a useful NSAG component. The current instrument, however, combines an unvalidated and obvious self-report rubric with clinical, public-health, legal-adjacent, and service-outcome claims that exceed their evidence. The primary Lapham statistic is real but repeatedly generalized beyond a single Washington integrated health system and mischaracterized as direct proof of an institutional governance mechanism. Some M1 copy remains in the result logic. Cannabis operators are invited into an assessment whose “correct” answers require clinical EHR, preoperative, prescribing, and QI authority they generally do not possess.

Recommended disposition: **C — NSAG component**, with a release hold. Do not publish a separate portfolio card.

Top risks:

1. P0 consumer failure after the first answer.
2. P0/P1 nonexistent PDF/report fulfillment.
3. P1 clinical and legal-adjacent recommendations without adequate professional boundary, citations, jurisdiction, or uncertainty.
4. P1 unvalidated scoring presented as an institutional governance tier and “highest-leverage gap.”
5. P1 privacy/consent mismatch and false-success API behavior.
6. P1 unsupported claimed case outcome: documentation 4%→68% in 14 months and three interactions detected.

## 3. Complete route map

Only `/` is an application route. `/robots.txt`, `/sitemap.xml`, `/api/track`, and unknown routes return 404. The missing sitemap is especially contradictory because the HTML explicitly advertises it. Every internal/external destination and status appears in the companion ledger.

No canonical link, methodology route, source list, privacy notice, terms, medical disclaimer page, legal/jurisdiction guide, toolkit page, checkout, report-retrieval URL, support route, or result permalink exists.

## 4. Complete interaction/control inventory

Controls comprise Begin; four sector buttons; Continue; 48 generated answer buttons; generated Back controls after question 1; keyboard shortcuts; an email gate; result copy/share/print/retake; tier-specific toolkit/advisory/booking CTAs; and a contact modal with three fields, Send, and Cancel.

The ledger records every control and its resulting state. Source-defined controls after question 1 are classified **unreachable**, not “working.” Contact open and Cancel were safely tested; no consequential submission was made.

## 5. Consumer journeys and observed results

### Primary journey

1. Loaded the page; legal-only disclaimer, thesis, audience statement, six dimensions, and Begin CTA rendered.
2. Activated Begin; four organization types appeared.
3. Selected Primary Care; Continue appeared.
4. Activated Continue; question 1 appeared.
5. Selected answer A; answer buttons disappeared/disabled, `updateRadar()` threw, and progression stopped.

Console evidence:

- load: `ReferenceError: Chart is not defined at initRadar`
- first answer: `TypeError: Cannot read properties of undefined (reading 'data') at updateRadar`

### Personalization

The consumer must choose Hospital System, Primary Care, Public Health Department, or Cannabis Operator/Dispensary. `selectedSector` is written but never read by the assessment. Every audience receives identical clinical questions, scoring, and recommendations. This is simulated personalization and is particularly misleading for public-health departments and cannabis businesses lacking direct EHR/prescribing authority.

### Report/export

Unreachable. Static inspection proves the result path computes hard-coded scores and renders a tier. It defines a jsPDF report generator but never calls it. Therefore even a corrected CSP would not deliver a PDF. The only invoked export is browser print. There is no server-side report generation or demonstrated email delivery.

### Conversion and error paths

Waitlist and contact requests target `nsag-api`. Waitlist source changes the button to confirmed enrollment before any success response. Contact closes and clears on any resolved HTTP response without checking `response.ok`; failures are swallowed. No user-facing pending, success, error, retry, support, or delivery state exists.

### Persistence/return

Answers exist in page memory only. UTM values use session storage. There is no save/resume, result URL, authenticated history, downloadable result recovery, or versioned evidence trail. Refresh restarts the assessment.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Intro/deep-dive content | Working | Visible live. |
| Organization selector | Working visually; simulated substantively | Selection stored but unused. |
| 12-question assessment | Broken | Cannot advance after first response. |
| Radar | Broken | Chart.js blocked by CSP. |
| Scoring | Hard-coded/unvalidated and unreachable | Source reviewed. |
| Tier/recommendation | Simulated and unreachable | Four fixed bands, generic lowest-dimension text. |
| PDF report | Missing/broken | Library blocked and function never called. |
| Emailed report | Not demonstrated | Client sends lead/score data; no email delivery implementation in this repo. |
| Share/copy/print/retake | Unreachable | Defined only in result state. |
| $500 toolkit | Intentionally unavailable | Waitlist language says not available for checkout. Contents/fulfillment unverified. |
| Waitlist confirmation | Unreliable/false-success | UI confirms without API success. |
| Contact | Partial/unverified | Modal works; submission not made; status logic defective. |
| Custom analytics | Broken | `/api/track` 404; failures swallowed. |
| Vercel analytics/speed scripts | Present | No public disclosure. |
| Sources/methodology | Missing | Named studies/guidelines are not linked; promised six-source toolkit unavailable. |

### Scoring validity

Twelve questions allocate two questions to each of six dimensions. Each option is transparently ordered 4/3/2/1. Overall average yields PIONEERING ≥3.5, EMERGING ≥2.5, DEVELOPING ≥1.5, otherwise EARLY STAGE. Two-item dimension sums map Strong ≥7, Partial ≥5, Emerging ≥3, otherwise Absent. Only the lowest possible two-answer combination produces Absent.

There is no validation sample, criterion validity, reliability analysis, weighting rationale, reverse item, neutral/unknown/not-applicable choice, evidence submission, jurisdiction variable, organization-type adjustment, respondent-role check, multi-stakeholder reconciliation, confidence level, or audit. “Best” answers are obvious and sometimes prescribe a specific policy architecture. This can prompt social-desirability scoring and cannot establish real institutional maturity or a causally “highest-leverage” gap.

## 7. Copy and information-architecture findings

Strengths: the six-dimension model is concrete; the Lapham study gives the problem a useful anchor; audience and freshness notes are unusually explicit; and the site labels the quiz an educational, nonvalidated self-assessment.

Material defects:

- Meta description still says “revealing your institution’s governance tier,” undermining the nonvalidated boundary.
- “Concrete outcome” promises a governance tier and “highest-leverage gap,” neither validated.
- The Lapham numbers are repeatedly treated as a generic baseline and proof that the difference is a governance gap. The study compared confidential survey report with EHR documentation in one system; it did not validate NSAG’s six dimensions or establish causation.
- PIONEERING copy declares the organization “governance-mature.”
- “Most institutions at this tier cross into PIONEERING within one focused cycle” has no disclosed outcome dataset.
- “Your exact tier,” peer benchmarks, cohort program, policy templates, six primary sources, and measurement framework are asserted but not available for verification.
- EARLY STAGE uses artificial urgency: “not a committee,” “this week,” “before Monday.”
- A claimed community-health-center outcome (4%→68%, 14 months, three clinically significant interactions) is presented without a name, source, design, or verification. It reads as a fabricated or composite case but is not labeled as such.
- Result `dimInsight` contains leftover M1 concepts: “environmental awareness,” “physical and procedural governance.” These do not match M4’s dimensions.
- “Answers stay in your browser” omits transmission of email-linked tier, percent, and six dimension scores.
- “Receive” a PDF and “downloads immediately” conflict; neither is implemented.
- The legal disclaimer does not address medical/clinical/public-health advice even though the module prescribes screening, EHR, drug-interaction, and perioperative practices.
- Four audiences are collapsed into one information architecture despite distinct legal authority, clinical scope, and product needs.

## 8. Science/law/policy/regulatory claim ledger

No public claim has an inline link. “Lapham et al. (2022)” and ASRA are named but not connected to sources. The toolkit’s claimed six-source evidence base is unavailable.

| Claim | Verdict | Required boundary/correction |
|---|---|---|
| 35.1% confidential-survey health-reason use vs 4.8% EHR-documented medical use | Numerically supported but repeatedly overgeneralized | Lapham et al. studied 1,688 respondents in one Washington integrated system; 34% survey response; 35.1% was implicit health-reason use, 4.8% documented medical use. The authors warned about generalizability and could not know whether undocumented discussions occurred. Cite and preserve these limits. |
| “That 30-point gap … is a governance question” and each number describes governance | NSAG interpretation, not study finding | Label as an institutional-design hypothesis. The study suggested asking about health reasons may improve recognition/documentation; it did not validate causal dimensions. |
| “Disclosure safety … determines whether 35% or 5% disclose” | False inference | The 4.8% value is EHR documentation, not disclosure. Do not treat the two numbers as alternate disclosure rates. |
| Cannabis legal/medical/decriminalized across most of country | Vague and jurisdictionally incomplete | Specify medical vs adult-use, state vs federal, date, and product. As of the audit period, federal and state treatment remained divergent and federal rescheduling activity was ongoing. |
| “Validated cannabis screening instrument at every patient contact” is best governance | Prescriptive and uncited | Identify instrument, population, frequency evidence, workflow burden, and guideline authority. “Every contact” may not be appropriate universally. |
| Structured EHR product/frequency/route/quantity fields and referral-summary inclusion | Plausible design recommendation, not established universal standard | Label as NSAG recommendation; address minimum-necessary access, stigma, patient consent, sensitive-data segmentation, jurisdiction, and workflow evidence. |
| Cannabis/CBD CYP450 interactions, route-dependent differences, warfarin/antiepileptic scenarios | General interaction concern supported; operational specifics overbroad | CDC warns cannabis may change prescription-drug effects, but product composition, dose, route, enzyme, and evidence quality matter. Cite drug labels/interaction literature per medication; avoid a generic “affected pathway” protocol as clinical advice. |
| Two-year mandatory training refresh | Unsupported | No source or rationale for the interval. |
| ASRA-aligned universal pre-op cannabis screening | Supported in general by 2023 ASRA consensus | ASRA recommends universal perioperative screening including product, route, amount, frequency, and recency, while emphasizing evidence grades and clinical judgment. Link current guideline and do not reduce it to merely naming cannabis. |
| Pre-op disclosure is a “patient safety standard with documented consequences” | Overbroad | Identify guideline strength and outcomes; distinguish consensus guidance from binding law/accreditation. |
| Cannabis-opioid and cannabis-benzodiazepine “substitution patterns” should be standardized | Evidence-sensitive and potentially misleading | Observational/self-report substitution literature does not establish a uniform clinical pathway or safe substitution. Require qualified clinical review and cite current evidence. |
| Disclosure may affect employment testing/child custody reporting | Potentially true but highly jurisdiction/fact specific | Separate clinician confidentiality, compelled disclosure, mandated reporting, employer testing, federal employment, professional licensing, family-court evidence, and state protections. Do not imply a universal reporting pathway. |
| Intake language addressing these risks enables “informed consent to disclosure” | Legal/ethical conclusion unsupported | Informed consent has specific elements and applicable law. Use “supports informed decision-making” unless counsel/ethics review supports more. |
| Cannabis documentation rate is a patient-safety metric and benchmarks should trigger review | NSAG proposal, not universal validated measure | Define numerator, denominator, exclusions, purpose, measure validity, risk adjustment, target, and evidence that higher documentation improves outcomes without increasing stigma/harm. |
| PIONEERING organizations, exact tiers, and typical one-cycle improvement | Unsupported assessment/service outcome | Remove until a transparent validation/outcomes dataset exists. |
| 4%→68%/14 months/three interactions case | Unverifiable | Source it completely or label clearly as a hypothetical illustration; never present it as observed fact without evidence. |

### Advice and jurisdiction boundary

The top banner says only that the tool is not legal advice. Because the module targets clinical staff and gives medication, screening, perioperative, EHR, and patient-communication recommendations, it also needs explicit medical/clinical advice, emergency, scope-of-practice, institutional-policy, and current-guideline boundaries. A cannabis operator should not infer authority to provide clinical advice or access clinical records. Public-health and healthcare users need jurisdiction and setting-specific review by clinical, privacy, information-governance, employment, and family-law counsel as applicable.

## 9. Accessibility and responsive findings

Positive: `lang=en`, viewport, focus-visible styles, reduced-motion rules, semantic buttons for answers, and keyboard shortcuts. The source includes a mobile breakpoint and a result-only mobile radar.

Defects:

- Runtime failure blocks all users.
- Inactive screens are hidden via opacity/pointer events/position, without `hidden`, `inert`, or `aria-hidden`; the DOM snapshot exposes all twelve questions simultaneously, indicating likely screen-reader noise.
- Questions/options are not fieldset/legend or radio-group semantics; selection has no programmatic checked/pressed state.
- Email error only adds `aria-invalid`; no visible or live message.
- Radar canvas lacks an assessment-stage text/table equivalent.
- Auto-advance uses a timed rationale sequence; progression is not fully user-controlled.
- Contact overlay has no dialog role, `aria-modal`, programmatic name, focus trap, initial focus, Escape close, or focus restoration. Inputs use placeholders rather than labels.
- Escape handler is empty despite a comment promising overlay close.
- At ≤900 px the main radar is simply removed; context is lost until results.
- Fixed contact button can overlap content, though mobile CSS reduces it.

Desktop production and responsive source were inspected. Physical mobile/touch, screen-reader, measured contrast, 200%/400% zoom/reflow, and downloadable-file accessibility were not completed and remain unverified.

## 10. Brand-architecture findings

Correct ownership is **NSAG → M4**. Aloha AI may be credited for implementation, but the current “Built by” footer and old RN portfolio link need to align with the distinct-practice architecture. JSON-LD calls RN an “AI Educator & Consultant” and anchors authorship to `rn-portfolio-khaki`, underrepresenting NSAG’s institutional-design identity and bypassing RN Selected Work.

M4 strengthens NSAG conceptually by translating a governance framework into scenarios. It weakens the brand in production because the first answer crashes, evidence is not linked, an apparently invented outcome is presented as fact, and clinical authority is blurred. Hawaiʻi is absent; for a national clinical/governance module that is acceptable, but no Hawaiʻi-specific law or system insight should be inferred.

## 11. Business-model and conversion findings

- **User/beneficiary:** healthcare operational leaders, clinicians/pharmacists, informatics/EHR teams, QI/public-health personnel; secondarily regulated cannabis organizations coordinating with care systems.
- **Buyer:** hospital/clinic leadership, population-health or quality leader, compliance/privacy counsel, public-health department, payer/funder, or cannabis organization seeking a referral/education protocol.
- **Economic role:** free diagnostic lead magnet routing to a $500 toolkit, advisory, discovery call, other modules, and purported cohort benchmarking.
- **Potential value:** prompt structured discussion across screening, documentation, training, interaction, disclosure, and measurement.
- **Adoption/trust barriers:** broken flow, unvalidated tier, absent citations, fabricated-looking case, unclear privacy, no toolkit fulfillment terms, and clinical/legal scope ambiguity.
- **Conversion reality:** all result-dependent conversion is unreachable. Toolkit is waitlist-only; license, deliverables, versioning, clinical/legal review, support, refund, updates, ownership, data-processing terms, and availability are unspecified.

Recommendation: keep as an NSAG component but split into role-specific paths. For cannabis operators, focus on responsible referral, product-information transfer, consumer education, adverse-event escalation, and privacy—not EHR or prescribing governance. For health systems, offer a non-diagnostic readiness reflection followed by a separately scoped, evidence-reviewed facilitated assessment.

## 12. Security, privacy, data, and operations

- CSP blocks required Chart.js and jsPDF. It simultaneously allows `'unsafe-inline'` and `'unsafe-eval'`, weakening protection.
- CDN scripts lack local vendoring/integrity controls.
- Raw answers remain local, but email-linked tier, percentage, six dimension scores, source, and timestamp are posted. The privacy sentence is materially incomplete.
- “Optional NSAG follow-up” is bundled with report access; there is no separate affirmative marketing consent.
- No privacy notice identifies controller, processing purpose, retention, recipients/processors, security, deletion, analytics, or user rights.
- Email validation is an `@` substring test.
- Contact and waitlist requests suppress failures; contact ignores HTTP status; waitlist asserts success before confirmation.
- Page-view/scroll analytics POSTs to missing `/api/track`, silently generating 404s. Vercel analytics scripts are present but undisclosed.
- Report code places the user’s email inside the PDF, but there is no report because the function is unused.
- Positive headers include HSTS, frame denial, nosniff, restrictive permissions policy, and strict-origin referrer policy.
- There is no dependency management, test suite, monitoring, release smoke test, operational documentation, or evidence/content review workflow.

## 13. Defects by priority

### P0 — blocking

1. Chart.js blocked by CSP; first answer crashes and assessment cannot advance.
2. Promised PDF cannot be produced: jsPDF is CSP-blocked and `generateResultPDF()` has zero call sites.

### P1 — serious

1. Unsupported/unvalidated governance tiers and “highest-leverage” recommendations.
2. Medical/clinical recommendations with only a legal disclaimer and inadequate evidence/jurisdiction boundaries.
3. Lapham statistic misused as a universal baseline, causal governance proof, and alternate disclosure-rate comparison.
4. Unverifiable 4%→68% case and three detected interactions.
5. Privacy statement omits derived-data transfer; optional marketing consent is bundled; no privacy policy.
6. Waitlist/contact false-success behavior.
7. Screen state and modal accessibility failures.

### P2 — material

1. Sector selection is cosmetic; cannabis operators/public-health users get clinically mismatched questions.
2. Leftover M1 “environmental/physical/procedural” result copy.
3. No methodology, citation links, current-law guide, toolkit fulfillment detail, or support route.
4. Custom analytics endpoint 404s.
5. Missing advertised sitemap, robots file, and canonical link.
6. Old RN portfolio/schema identity and ambiguous Aloha AI implementation credit.
7. No save, edit-after-answer, resume, result permalink, or report recovery.

### P3 — polish

1. Remove urgency clichés and categorical tier prose.
2. Review contrast, zoom, touch, motion, fixed-control overlap, and print layout after functional repair.
3. Replace percentages with transparent qualitative reflection unless the score earns quantitative validity.

## 14. Exact remediation plan

Current file-level targets are `index.html` and `vercel.json`.

1. Vendor/bundle Chart.js and jsPDF locally or explicitly permit exact origins with integrity; remove unnecessary unsafe CSP allowances. Add visible dependency-failure states.
2. Make assessment progression independent of visualization success. Guard `initRadar`/`updateRadar`.
3. Actually call a verified report generator after result rendering, or remove the PDF/email promise. Test nonempty accessible output and filename.
4. Add production smoke tests for all four sectors, all 12 questions, Back, keyboard, validation, each tier threshold, ties, results, PDF, print, share/copy, retake, API failure, and mobile.
5. Split single-file code into versioned content, scoring, view, privacy, and citation data; add a package/lockfile, lint/build/test scripts, CI, and monitoring.
6. Reframe output as a preliminary self-reflection. Remove exact tier, causal highest-leverage, peer benchmark, typical cycle, and maturity declarations until validated.
7. Implement meaningful organization-type branching or remove the selector. Establish role/authority boundaries.
8. Publish methodology and claim-level citations with study population, year, jurisdiction, evidence strength, and update owner. Correct the Lapham inference and remove/source the 4→68% story.
9. Obtain clinical/pharmacy, privacy/information-governance, public-health, and jurisdiction-specific legal review for the relevant content. Add medical and institutional-policy boundaries.
10. Add unknown/not-applicable choices and evidence prompts; never infer institutional maturity from one respondent alone.
11. Rewrite privacy copy to disclose transmitted derived fields; separate report access from marketing consent; publish privacy/terms/data-retention details.
12. Await `response.ok` before confirmation; implement pending/success/error/retry states for lead, waitlist, and contact.
13. Remove or implement `/api/track`; disclose analytics.
14. Use `hidden`/`inert`, managed focus, semantic question groups and state, live errors, accessible chart alternatives, a real dialog, Escape close, and focus restoration.
15. Fix leftover M1 text, old RN Builds/schema links, canonical/robots/sitemap, and NSAG/Aloha AI credit hierarchy.
16. Deploy and repeat the full Stage A interaction/claim/privacy audit before RN Selected Work promotes the module.

## 15. Recommended estate disposition

**C — component**, under the canonical NSAG parent.

M4 is explicitly a numbered module, shares NSAG’s assessment/conversion architecture, and links sibling modules. It does not warrant its own RN Selected Work case study. Current production is release-blocked. Quality status does not convert the module to an independent product; if modules later consolidate into routes on the parent site, this standalone deployment may then become superseded/retired.

## 16. Proposed RN Selected Work corrections

Do not add a standalone M4 card. Within the NSAG parent case study, state:

- M4 is a deployed **prototype component** exploring cannabis public-health infrastructure across six proposed governance dimensions.
- Its current live version is not operational beyond question 1 and must not be linked as a completed interactive assessment until reverified.
- The scoring is a self-reported educational rubric, not validated measurement, audit, accreditation, legal review, clinical evaluation, safety certification, or compliance determination.
- PDF/email report delivery, sector personalization, peer benchmarking, toolkit availability, cohort outcomes, and cited case results are not established.
- The Lapham study supports a documentation gap in one Washington health system, not universal rates or validation of NSAG’s framework.

After remediation, label the interaction “guided governance reflection,” identify its version/review date, link methodology and privacy, and position it beneath NSAG rather than as an independent build.

## 17. Evidence appendix

### Live/runtime

- `https://nsag-m4.vercel.app/` returned 200.
- `/robots.txt`, `/sitemap.xml`, and `/api/track` returned 404.
- `nsag-api.vercel.app/api/lead` returned 405 to GET; POST not tested.
- Primary Care → Continue → answer A reproduced the block.
- Console: `Chart is not defined` at `initRadar`; then missing chart `.data` at `updateRadar`.
- Contact modal opened and Cancel closed it; submission was not attempted.

### Repository/deployment

- Repository tree: `.gitignore`, `index.html`, `vercel.json` only.
- Production commit: `a1a50dbedb014971b6b7eb91b930114ba9f89c7e`.
- Vercel build: cloned that commit; static output completed in 19 ms; no tests/build compilation.
- CSP: `script-src 'self' 'unsafe-inline' 'unsafe-eval'`; source imports Chart.js and jsPDF from external CDNs.
- Source search: one definition and no invocation of `generateResultPDF`.

### Strongest checked sources

- Lapham GT et al., JAMA Network Open (2022), DOI `10.1001/jamanetworkopen.2022.11677`: `https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2792539`
- ASRA Pain Medicine perioperative cannabis consensus guideline (2023), DOI `10.1136/rapm-2022-104013`: `https://rapm.bmj.com/content/48/3/97`
- CDC cannabis FAQ and drug-interaction caution: `https://www.cdc.gov/cannabis/faq/`
- Congressional Research Service on federal/state cannabis divergence (Dec. 2024): `https://www.congress.gov/crs-product/LSB10694`
- DEA 2026 marijuana rescheduling regulatory-actions page, establishing that federal status remained an active/current legal boundary: `https://www.dea.gov/marijuana-rescheduling-regulatory-actions`

### Explicitly unverified

- No contact, report, marketing, waitlist, booking, purchase, legal, or medical form was submitted.
- Private `nsag-api` code, retention, CRM/storage, email delivery, and deletion were outside this module’s source.
- Questions 2–12, gate, results, PDF, copy/share/print/retake, and conversion could not be exercised through production because of the P0; source paths were inspected.
- Outlook booking URL was not opened because it embeds a personal identifier.
- Toolkit contents, six sources, benchmarks, cohort, service outcomes, and cited/implicit organization case studies were unavailable.
- Full mobile-device, screen-reader, measured contrast, zoom/reflow, print, and generated-PDF accessibility testing remains pending.

Vercel READY means static files deployed; it is not evidence that the assessment or its report works.
