# NSAG M9 — Cannabis Healthcare Visibility Governance

## 1. Executive verdict

**Disposition: C — retain as an NSAG component, not a standalone RN build. Release hold.** The concept identifies a real clinical-information problem: cannabis-related information can be absent or unusable where medication and perioperative decisions are made. The production assessment is not releasable. Its own CSP blocks Chart.js and jsPDF; the promised PDF is never invoked; lead paths can falsely report success; sectors are cosmetic; all 12 questions reduce to six verbatim-duplicated pairs using one generic maturity ladder. It therefore does not measure its six advertised constructs.

The headline also materially overreads its source. The 35.1% and 4.8% figures come from one 2019 cross-sectional survey of 1,688 primary-care patients in a Washington State health system, not a current universal patient rate, and “confidential survey report” is not equivalent to clinical disclosure. The study does not establish that the gap is currently producing drug interactions, that the same identified patients compose both numerators, or that the proposed six-part governance model closes it.

## 2. Artifact identity and provenance

- Public tool: `https://nsag-m9.vercel.app/`.
- Private GitHub repository: `rn-collins/nsag-m9`; default branch `main`; repository ID `1285739998`.
- Inspected commit: `233659fcf4dcfb8ed0d5cdb33bb76473e11493bf` (August 2, 2026), “fix: remove dead Gumroad link, safe waitlist capture instead.”
- Static repository: `.gitignore`, `index.html`, `vercel.json`; no package manifest, tests, server code, schema, build step, or source map.
- Production HTML is byte/provenance-equivalent to Git: 71,396 bytes and Git blob `120c7afc7dc957fa374f1e116c66c73c8375e1eb`.
- Production headers include HSTS, `X-Frame-Options: DENY`, nosniff, restrictive permissions, and CSP. The CSP conflicts with the runtime dependencies.
- The experience links to NSAG, NSAG advisory, M3/M4/M11, Aloha AI, and a legacy RN portfolio. JSON-LD calls RN an “AI Educator & Consultant,” weakening current practice positioning.

## 3. Product purpose and audience

M9 is presented to hospitals, primary-care organizations, specialty practices, and cannabis clinics/medical dispensaries as a 12-scenario assessment across screening, EHR documentation, provider competency, drug interactions, disclosure safety, and QI tracking. A defensible purpose is a **nonvalidated discussion guide** that helps a multidisciplinary team inventory policies and identify evidence to review. It cannot presently function as a clinical-safety assessment, validated instrument, privacy or discrimination audit, legal-compliance review, competency test, healthcare-access measure, or institutional maturity score.

## 4. Route, state, and journey coverage

The complete inventory is in `ROUTE_CONTROL_LEDGER.md`. Intended journey: landing → sector choice → 12 items → mandatory email → cinematic tier → recommendations/toolkit/related modules. `/robots.txt` and `/sitemap.xml` return 404; no privacy or terms route exists; `/api/track` has no implementation in the static repository.

Production loads Chart.js from jsDelivr and jsPDF from cdnjs, while CSP allows neither origin. `initRadar()` therefore encounters an undefined `Chart`; radar updates and reliable questionnaire progression fail. Later states were inspected exhaustively from the deployed source and classified as inaccessible/code-backed rather than claimed as successful browser behavior.

## 5. Consumer and interaction audit

The problem statement is memorable and the six headings are legible. The interaction undermines trust:

- four sector choices produce no personalization; `selectedSector` is unused and defaults to unrelated `legal-aid`;
- both questions within every dimension are exact duplicates, including wording and options;
- all 12 items use the same visibly ordered, compound maturity response, encouraging socially desirable answers;
- no unknown, N/A, evidence status, respondent role, jurisdiction, product type, care setting, or confidence option exists;
- no discoverable back/review control exists although a dormant function does;
- an email is required to see a locally calculable reflection;
- a PDF is promised but cannot be delivered by this code;
- “share” transforms bounded “one respondent” language into “My organization scored…”;
- toolkit/contact actions signal success without establishing server acceptance.

## 6. Software-engineering audit

Critical implementation findings:

- CSP blocks both runtime libraries; permitting `'unsafe-inline'` and `'unsafe-eval'` simultaneously weakens the policy without making the external dependencies work.
- `generateResultPDF()` has no call site and cannot access blocked jsPDF.
- Cinematic result copy says “Your M1 governance tier,” a template residue.
- `selectedSector` is not used in questions, scoring, copy, result, or payload.
- `/api/track` is referenced but absent.
- lead and waitlist fetches treat any resolved HTTP status as success and suppress network errors.
- no tests cover startup under production CSP, all scoring branches, failed APIs, PDF, privacy payloads, keyboard use, assistive technology, or responsive layouts.
- external scripts lack SRI; the static single-file implementation mixes content, state, analytics, scoring, network operations, and presentation.

P0 acceptance begins with a production-header E2E test that completes the flow with zero CSP/console errors and truthfully handles every failed network response.

## 7. Accessibility and responsive audit

Native buttons and an email input help, but material gaps remain: no skip link/main landmark; no focus movement or announcement between hidden screens; rationale and completion flashes are not live regions; the cinematic overlay lacks reduced-motion handling; invalid email lacks linked error text; chart information has no robust semantic equivalent; contact modal lacks dialog roles, labelling, focus trap, Escape close, and focus return; fixed contact button can obscure small screens. Keyboard A–D shortcuts are global whenever a screen is active and are not explained as an accessible alternative.

No evidence documents verification at 320/375/768/1024/1440 widths, 200/400% zoom, keyboard-only, VoiceOver/NVDA, reduced motion, high contrast, or forced colors. Later responsive states are inaccessible because initialization is broken.

## 8. Information architecture and copy audit

Use a bounded hierarchy: **NSAG M9 · Cannabis Information and Medication-Safety Governance Reflection**. “Healthcare Visibility Governance Challenge” is opaque and can sound like patient surveillance. Replace “score/tier” with “response pattern”; replace “your institution has/does” with “this respondent reported.” “Validated screening instrument” must name the instrument, intended population, construct, administration method, validation population, and limitations; cannabis-use detection is not the same as clinical risk, diagnosis, disclosure safety, or quality.

The current legal-only disclaimer is inadequate. Add: not medical, pharmacy, public-health, privacy, disability, discrimination, employment, licensing, or legal advice; not a validated test, clinical decision-support system, diagnosis, drug-interaction checker, or substitute for clinician/pharmacist review; do not start, stop, or change medication based on the tool; emergencies and poisoning require appropriate local services. Legal statements must specify jurisdiction and date.

## 9. Scoring and measurement validity

Each item scores 1–4. Two items nominally form each dimension; dimension sums range 2–8; overall average produces PIONEERING ≥3.5, EMERGING ≥2.5, DEVELOPING ≥1.5, otherwise EARLY STAGE. These thresholds are authored, not validated.

More fundamentally, the 12-item representation is false precision. Each dimension’s two items are identical, and every dimension asks the same compound question: whether standards are documented, independently monitored, quarterly reviewed, and assigned to named roles. A high answer can mean some, not all, of those conditions; a low answer does not reveal which is absent. The instrument never tests actual screening design, EHR field semantics/access controls, clinician knowledge, interaction adjudication, patient disclosure experience, or QI measurement quality.

It measures one respondent’s repeated self-perception of generic policy formalization. There is no content-validation record, reliability/validity study, normative sample, threshold rationale, item independence, inter-rater process, missing-data rule, evidence corroboration, uncertainty, adverse-impact review, or outcome validation. It cannot support institutional tiers. Replace scoring with a construct-specific inventory and evidence-to-check ledger; if maturity labels remain, explicitly call them editorial heuristics and require multi-stakeholder corroboration.

## 10. Medical, pharmacology, public-health, and outcome claims

| Claim | Assessment | Required correction |
|---|---|---|
| “35.1% … report cannabis use confidentially; 4.8% have it in their chart. The same patients.” | Misstates a single Washington primary-care study. 35.1% was survey-reported use for health reasons; 4.8% EHR-documented medical use. Response rate was 34%; sample was predominantly White/non-Hispanic and commercially insured. | Cite study, year, setting, definitions, CIs/limitations; do not generalize or say disclosure to clinicians. |
| The gap is “producing invisible drug interactions … right now.” | The cited prevalence study did not measure interactions or causation. | Say incomplete medication histories can create a potential safety blind spot; quantify only with appropriate evidence. |
| Cannabis “is metabolized through CYP450 … therefore undocumented use is a live interaction risk.” | Overbroad. Cannabis products differ by cannabinoid, dose, route, frequency, formulation, contaminants, and evidence; in-vitro/theoretical interactions are not automatically clinically significant. | Distinguish THC/CBD/products and metabolism vs inhibition/induction; use current drug-specific authoritative evidence and pharmacist/clinician review. |
| A structured EHR field makes information clinically actionable. | Not by itself. Accuracy, reconciliation, provenance, freshness, visibility, role access, interoperability, alert design, workflow, privacy, and action pathways matter. | Treat documentation as one component, not outcome proof. |
| Screening language determines truth; disclosure architecture “produces” 35% vs 5%. | Unsupported causal claims. | Present as hypotheses requiring patient-centered study and context-specific evidence. |
| “Most institutions” close the gap in one QI cycle. | No cohort/source/method. | Remove until measured. |
| Anonymous center/network examples, 100% screening, ≥85% completion, 12 interactions/18 months including warfarin/CBD. | No named source, denominator, protocol, adjudication, comparison, or outcome data. Reads as a real client result. | Cite auditable case data, clearly label hypothetical/composite, or remove. |

FDA recognizes interaction potential and limited cannabis/CBD evidence; it has approved only specific cannabis-derived/synthetic drugs, not cannabis generally as a treatment. The tool must not collapse legalization, common use, pharmacologic activity, and proven clinical harm into one causal chain. Public-health framing should also address impairment, pregnancy/lactation, youth, product variability, dose/route, poisoning, and equitable access only where supported and relevant—not imply that maximizing documentation is itself a validated health outcome.

## 11. Legal, regulatory, disability, discrimination, and healthcare-access audit

“Increasingly legal” is jurisdictionally unstable and clinically insufficient. Federal controlled-substance status, FDA approval, state medical/adult-use laws, clinician licensing, institutional accreditation, pharmacy rules, payer obligations, mandatory reporting, employment, immigration, family law, and tribal/federal settings can diverge. A date stamp does not replace jurisdiction-specific sourcing.

The ADA excludes current illegal-drug use from some protections when action is based on that use, but Titles II/III include important healthcare-service protections; underlying disabilities may independently be protected. State medical-cannabis nondiscrimination rules vary. The tool measures none of this. “Disclosure safety” without anti-discrimination and access controls can facilitate stigma, biased pain treatment, denial/delay of procedures, transplant or medication decisions, employment consequences, child-welfare exposure, or other harms.

A valid governance inventory should test: patient notice and consent/choice where applicable; nondiscrimination and equitable care; disability accommodation; appeal/review; consequences of positive documentation; language/cultural accessibility; clinician bias; access for uninsured/rural/Native/disabled populations; separation of care from punitive action; jurisdiction-specific reporting; and patient participation. It should never imply that a cannabis disclosure alone establishes impairment, misuse, diagnosis, nonadherence, or contraindication.

## 12. Patient privacy, API, and security audit

The page says answers stay in the browser, but submitting the result sends email, module, tier, total percentage, all six dimension sums, and timestamp to a general lead API. Raw item choices may stay local; derived assessment information does not. There is no controller identity, processing purpose detail, lawful basis/consent separation, processor list, retention, deletion/access method, security statement, breach contact, or response-status assurance.

For the institutional recommendation itself, more EHR documentation is not unconditionally safer. HIPAA permits many treatment disclosures without authorization and does not create absolute confidentiality; Part 2 can impose additional protection on qualifying substance-use-disorder records, and state law may be stricter. Governance must cover purpose limitation, role-based access, minimum necessary where applicable, sensitive-data segmentation, provenance, correction, audit logs, retention, downstream exchange/HIE/portal visibility, patient notice, secondary use, subpoenas/law enforcement, and de-identification. M9 tests none of these.

Make results local and email optional. Do not send scores to a lead endpoint by default. Provide a just-in-time privacy notice before any transfer. Warn users not to enter patient information or protected health information into the contact field. The external API’s CORS, authentication, validation, encryption, storage, recipients, deletion, rate limiting, and incident handling remain unverified.

## 13. Brand, portfolio, and business-partner fit

M9 is an applied NSAG module, not one of 29 unrelated standalone builds. On RN Selected Work it should sit within the NSAG parent case study as an in-development component, with separate links to the module explanation and interactive tool only after remediation. Aloha AI may receive implementation credit, but NSAG must retain framework/evidence/advisory ownership; the current cross-links and legacy RN portfolio/JSON-LD blur that separation.

A credible business offer could be a scoped, multidisciplinary cannabis-information governance review involving clinical pharmacy, medicine, nursing, privacy/security, legal/compliance, health information management, accessibility/equity, and patient representatives. The $500 toolkit and “NSAG cohort program” must not be marketed as existing until contents, evidence version, delivery, terms, accessibility, support, refund expectations, privacy, and outcomes are verifiable. No paid product should promise movement through an unvalidated tier.

## 14. Defect and risk register

| Priority | Finding | Impact |
|---|---|---|
| P0 | CSP blocks Chart.js; core initialization/progression is unreliable. | Product unusable under production policy. |
| P0 | PDF promised; library blocked and function never called. | Deceptive conversion and failed deliverable. |
| P0 | Duplicated items/generic ladder presented as six-dimensional institutional tier. | Invalid clinical/governance inference. |
| P0 | Headline converts one bounded observational study into current causal patient-safety claim. | Medical/public-health misinformation risk. |
| P1 | Derived assessment data sent under incomplete “stays in browser” disclosure. | Privacy/trust risk. |
| P1 | EHR expansion promoted without privacy, Part 2, discrimination, access, and downstream-use safeguards. | Potential patient harm. |
| P1 | Uncited outcome examples, QI timeline, cohort, and interaction counts. | Evidence and marketing credibility risk. |
| P1 | Only legal disclaimer; clinical/pharmacy/public-health/privacy/disability boundaries missing. | Advice and reliance risk. |
| P1 | Contact/waitlist false-success semantics. | Lost leads and misleading assurance. |
| P2 | Sector simulation, stale `legal-aid` default, M1 reveal residue, stale share URL/brand metadata. | Trust and brand erosion. |
| P2 | Modal/focus/motion/status/error accessibility failures. | Exclusion. |
| P2 | Missing privacy/terms/robots/sitemap and dead analytics. | Governance/discovery weakness. |

## 15. Remediation plan and acceptance gates

1. Stabilize dependencies/CSP; remove unnecessary unsafe directives; pass production-header desktop/mobile E2E with zero errors.
2. Remove the email gate from local results; either implement/test an accessible export or remove every PDF promise.
3. Replace duplicated template items with construct-specific questions co-designed with patients and relevant clinical/privacy professionals; add unknown/N/A, jurisdiction, setting, evidence, and respondent-role fields.
4. Eliminate aggregate tier until content/construct/reliability/criterion validity and multi-rater method exist; present descriptive findings and uncertainty.
5. Rewrite the 35.1%/4.8% claim with exact source boundaries; remove causal, superlative, timeline, cohort, and anonymous outcome claims unless auditable.
6. Add medication-safety boundaries and product-specific evidence handling; require clinician/pharmacist adjudication, not generic CYP training/alerts.
7. Add privacy/Part 2/state-law, nondiscrimination/disability, patient-access, equity, appeal, and harm-monitoring modules before encouraging documentation expansion.
8. Make every network action await `response.ok`, expose failure/retry, minimize payloads, separate follow-up consent, and publish lifecycle disclosures.
9. Repair semantics, focus, live regions, reduced motion, modal, error messaging, charts, keyboard, zoom, and device testing.
10. Consolidate branding and portfolio treatment under NSAG; verify toolkit/advisory/cohort product reality before promotion.

Release gate: independent clinical-pharmacy, privacy/security, health-law/regulatory, disability/nondiscrimination, patient/public-health, measurement, accessibility, and copy review; claim-level source ledger; successful E2E/API-failure tests; no organization/clinical inference beyond evidence; exact data-flow disclosure; no fabricated or ambiguous case outcomes.

## 16. Case-study treatment recommendation

Do not publish a celebratory standalone case study. Within the NSAG case study, describe M9 honestly as an **in-development prototype exploring how cannabis-related information becomes clinically usable without making disclosure punitive or unsafe**. Show the research question, source limitations, six proposed governance areas, current audit findings, privacy/anti-discrimination tensions, and redesign/validation plan. Do not label it a functioning assessment, score, patient-safety intervention, or demonstrated outcome. Keep “Open assessment” disabled or explicitly marked prototype until release gates pass.

## 17. Evidence, methodology, and residual uncertainty

Stage A read the controlling protocol and reconciliation completely; inspected the full deployed HTML/JavaScript, all questions/options/rationales, score branches, result/lead/PDF/toolkit code, external links, production headers, private GitHub tree/config/history, and RN Selected Work relationship. Root provenance was verified by exact Git blob match. No product or RN Selected Work source was modified.

Primary anchors:

- Lapham et al., *JAMA Network Open* (2022), “Prevalence of Medical Cannabis Use and Associated Health Conditions Documented in Electronic Health Records…”: `https://doi.org/10.1001/jamanetworkopen.2022.11677` and `https://pmc.ncbi.nlm.nih.gov/articles/PMC9127557/`.
- FDA consumer cannabis/CBD evidence and safety overview: `https://www.fda.gov/consumers/consumer-updates/what-you-need-know-and-what-were-working-find-out-about-products-containing-cannabis-or-cannabis`.
- FDA drug-development interaction table/background: `https://www.fda.gov/drugs/drug-interactions-labeling/drug-development-and-drug-interactions-table-substrates-inhibitors-and-inducers`.
- CDC cannabis health-effects overview: `https://www.cdc.gov/cannabis/health-effects/`.
- HHS HIPAA Privacy Rule: `https://www.hhs.gov/hipaa/for-professionals/privacy/index.html`; treatment sharing FAQ: `https://www.hhs.gov/hipaa/for-professionals/faq/481/does-hipaa-permit-doctors-to-share-patient-information-for-treatment-without-authorization/index.html`; individual record rights: `https://www.hhs.gov/hipaa/for-individuals/medical-records/index.html`.
- HHS 42 CFR Part 2: `https://www.hhs.gov/hipaa/part-2/index.html`.
- ADA statutory text and healthcare-service provisions: `https://www.eeoc.gov/statutes/titles-i-and-v-americans-disabilities-act-1990-ada`; `https://www.ada.gov/law-and-regs/regulations/title-ii-2010-regulations/`; `https://www.ada.gov/law-and-regs/regulations/title-iii-regulations/`.

Residual uncertainty: the external lead API implementation, actual Vercel analytics collection, toolkit/cohort/advisory fulfillment, and any claimed client outcomes were not established. Browser automation was unavailable; reachable later-state behavior is therefore classified from code and production constraints rather than represented as successfully exercised. No formal psychometric validation, multi-user research, patient testing, legal review across jurisdictions, clinical outcome study, accessibility-device matrix, or secure data-flow documentation was present. Federal/state cannabis law and clinical guidance are time-sensitive and must be reverified for the relevant jurisdiction at release; this audit does not itself supply legal or medical advice.
