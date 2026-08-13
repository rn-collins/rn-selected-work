# NSAG M11 — Medical Technology & Evidence Standards

## 1. Asset identity

- **Canonical parent:** `https://nsag-site.vercel.app/m11`.
- **Interactive component:** `https://nsag-m11.vercel.app/`.
- **Repository:** private `rn-collins/nsag-m11` (ID 1285740092), `main`, static HTML, homepage mapped to the Vercel deployment.
- **Files:** `.gitignore`, `index.html`, `vercel.json`; no package, build system, tests, database schema, API implementation, or regulatory-content versioning.
- **Parent practice:** Neurocognitive Systems Advisory Group; Aloha AI receives builder attribution.
- **Privacy boundary:** public assessment; collects email plus derived overall/dimension results through the external NSAG lead API. Backend handling is unverified.
- **Recommended status:** **C — component of NSAG, release-blocked.**

## 2. Executive verdict

M11 should exist only as a bounded **clinical-AI governance reflection**, not as the broad “Medical Technology & Evidence Standards” assessment it claims to be. Its six proposed domains—inventory, demographic impact review, human override, transparency, error correction, and post-adoption monitoring—are useful clinical-AI governance prompts. The actual instrument is twelve duplicated template questions whose identical generic answer choices do not test those practices. It entirely omits most of the promised medical-technology/evidence lifecycle.

The deployed product is also functionally blocked: its CSP prevents Chart.js from loading, the first answer freezes, PDF delivery is never invoked and jsPDF is blocked, the result recommendation is blank, and API forms falsely communicate success. The highest risks are misleading clinical/regulatory scope, invalid institution-level scoring, stale copy from trauma-informed legal-space modules, unsupported claims/cases, and incomplete health-sector data/advice boundaries.

## 3. Complete route map

The assessment is a single static route. `/robots.txt`, `/sitemap.xml`, `/privacy`, `/terms`, and `/api/track` are missing/404. Discoverable destinations include the canonical NSAG M11 page, advisory, Outlook booking, M2/M9/M13, Aloha AI, legacy RN Builds, and the cross-origin lead API. Status and purpose are recorded in `ROUTE_CONTROL_LEDGER.md`. No hidden same-origin application routes or server functions exist in the repository.

## 4. Complete interaction/control inventory

Inventoried controls: Begin; four sector choices; Continue; 48 generated response buttons; A–D keyboard shortcuts; email input; Reveal; copy; share; print; retake; toolkit waitlist; advisory/booking links; three related-module cards; Contact the Architect open/cancel/submit; cinematic overlay; rationale flash; completion flash; progress bar; desktop/mobile radar; PDF generator. The ledger records each result. No consequential form was submitted.

## 5. Consumer journeys and observed results

### Leader taking the assessment

The opening efficiently communicates racial-bias risk and an institutional audience. Selecting a sector appears to promise relevance, but it changes nothing. The assessment cannot be completed in production because Chart.js is blocked and `updateRadar()` throws on the first response. Even if repaired, every dimension presents the same question twice with the same maturity ladder, making the eight-to-ten-minute estimate implausible and the output trivially gameable.

### User seeking a report

The site requires email, promises an immediate PDF, and says answers remain in the browser. Code sends email, tier, overall percentage, and six dimension sums to a general lead endpoint; no PDF call exists. Thus both the delivery and privacy expectation are false/incomplete.

### Patient or compliance reviewer

The tool raises important transparency/equity questions but supplies no path for patients to learn whether a specific product is regulated, validated, monitored, appealable, or subject to correction. “Explanation right” is presented without jurisdiction. A generic legal disclaimer cannot substitute for medical, regulatory, privacy, and professional boundaries.

## 6. Functional matrix

| Status | Features |
|---|---|
| Working | Static content, parent/related links, sector visual selection, print/reload in reachable state. |
| Partial | Copy/share, contact and waitlist, tier calculation, responsive CSS. |
| Simulated | Sector personalization; twelve-question assessment depth; “independent monitoring” maturity answers; toolkit content and exact-tier roadmap. |
| Broken | Production assessment progression, radar, PDF delivery, central recommendation, analytics endpoint, truthful API success. |
| Missing | Privacy/terms, classification/pathway logic, evidence-validation lifecycle, device/drug distinction, quality-system controls, adverse-event workflows, cybersecurity, change control, jurisdiction, tests. |
| Intentionally unavailable | Toolkit checkout replaced with waitlist; this must be clearly described as not yet available. |

## 7. Copy and information architecture

Rename the deployed tool **“M11 Clinical AI Accountability Governance Reflection.”** If NSAG wants a genuine Medical Technology & Evidence Standards module, it requires a much larger, branching product by technology type, intended use, actor, risk, and jurisdiction.

Severe template contamination appears in results: “trauma-informed legal environment,” “physiological realities of trauma,” “legal aid organization in Chicago,” “M1 governance,” and “your legal space.” These statements are unrelated to M11 and could become visible to health-sector users. The result’s strongest/weakest-pattern explanation also refers to “environmental awareness,” “trained staff,” and “physical and procedural governance,” none derived from M11.

Replace “score” and “tier” with “self-reported response pattern.” Buttons must say what they do: “View results and optionally request follow-up,” not “receive PDF” when no report exists. Remove false urgency (“before Monday”), inevitability (“will eventually ask”), cohort/timeline promises, and unsupported peer benchmarking.

## 8. Science, law, policy, and regulatory claim ledger

### Evidence claims

The Obermeyer paper is real and important, but copy overstates it. The studied commercial algorithm used cost as a proxy and exhibited substantial racial bias; the paper’s broader prevalence estimate is not a 200-million-person study sample. “No hospital using the tool had an independent process” is not established as written. ASTP/ONC’s “fewer than half evaluate all models for bias” cannot be converted into “most hospitals have no governance infrastructure.” Preserve survey population, year, definitions, and denominators.

### Regulatory scope the module omits

The assessment never establishes whether a product is:

- administrative/wellness software, non-device CDS, a device software function/SaMD, software in a device, hardware device, IVD, drug/biologic support tool, or combination product;
- a manufacturer’s product, provider-deployed tool, payer algorithm, EHR-certified-health-IT intervention, or locally developed function;
- investigational, cleared via 510(k), De Novo-classified, PMA-approved, exempt, subject to enforcement discretion, or outside FDA device jurisdiction;
- intended for clinicians, patients/caregivers, diagnosis/treatment, time-critical use, or independent review.

FDA’s January 2026 final CDS guidance makes these distinctions function-specific. Regulatory clearance is neither blanket validation nor sufficient local-governance evidence, but the converse is also true: a hospital’s local disparity audit does not replace manufacturer duties, FDA authorization, quality systems, or legally required reporting.

Missing evidence standards include analytical/technical validation, clinical validation, clinical utility, representative development/external-validation data, calibration and subgroup performance, intended population/setting/workflow, comparator, prospective evaluation where appropriate, human factors, generalizability, uncertainty, drift, update/version control, benefit-risk, and reproducibility.

Missing lifecycle obligations include quality-system/design controls as applicable, labeling, cybersecurity and software-bill-of-materials practices, complaint handling, Medical Device Reporting under 21 CFR Part 803 where applicable, corrections/removals under Part 806, postmarket surveillance, recalls, incident response, and AI change management/PCCPs. FDA’s August 2025 final PCCP guidance is pathway-specific to AI-enabled devices reviewed through 510(k), De Novo, and PMA; it is not captured by “model updates require the same governance as initial adoption.”

### Other jurisdictions and institutional rules

The tool is US-coded but does not say so. It omits state privacy/AI laws, malpractice/product-liability allocation, payer nondiscrimination and appeals, research oversight, procurement/contract allocation, HIPAA/business-associate boundaries, FTC jurisdiction over non-HIPAA health data, certified health IT/ASTP requirements, and non-US regimes such as EU MDR/IVDR and the EU AI Act. “Explanation rights” and “public inventory” are not universal legal requirements.

## 9. Accessibility and responsive findings

Native buttons and keyboard letters help, but the assessment lacks a skip link/landmark, question focus management, answer-group semantics, persistent instructions, live status announcements, linked error text, reduced-motion support, chart alternatives, and accessible dialog behavior. The contact modal has no role/name, focus trap/return, or Escape support. Rationale disappears in 900 ms. The fixed contact control can cover mobile content. No evidence exists for keyboard-only completion, VoiceOver/NVDA, 200–400% zoom/reflow, forced colors, reduced motion, or 320/375/768/1024/1440 viewport testing. Production breakage precludes a complete interactive AT run.

## 10. Brand architecture

M11 is clearly an NSAG component and should remain under the one canonical NSAG case study. It should not receive a standalone RN Selected Work card. Aloha AI may be named as the technical builder, but the health-governance framework, evidence, advice, data responsibility, and ongoing review belong to NSAG. The stale RN portfolio footer should route to the canonical RN Selected Work surface. Current copied legal-trauma language damages NSAG’s credibility most severely in a regulated healthcare context.

## 11. Business model and conversion

Potential buyers are health-system clinical-AI governance committees, compliance/quality leaders, CIO/CMIO teams, payers, and health-tech manufacturers. Beneficiaries include clinicians and patients. A credible paid offer would be a scoped inventory and evidence-governance workshop plus documented risk register—not a $500 generic policy kit promising movement to an invented tier.

Before commercialization, define scope (provider versus manufacturer), jurisdiction, deliverables, review cadence, client evidence responsibilities, professional roles, conflicts, data access/BAA needs, security, incident escalation, maintenance, regulatory-change monitoring, and explicit non-substitution for counsel, regulatory professionals, clinical safety officers, privacy/security, biostatistics, human factors, and quality-system experts.

## 12. Security, privacy, data, and operations

The CSP blocks required libraries while allowing unsafe-inline/unsafe-eval. External runtime libraries lack SRI and are not self-hosted. HSTS, XFO DENY, nosniff, permissions, and strict referrer headers are positives.

Privacy copy is incomplete: raw answers may remain local, but derived dimension data leaves the browser with email. There is no controller, purpose-specific consent, retention, access/deletion route, recipient/subprocessor statement, security description, breach contact, or clear separation of report delivery from marketing follow-up. Users may reveal sensitive institutional weaknesses through a generic lead API. No PHI is requested, but the product should explicitly prohibit PHI/patient identifiers in contact fields and explain that HIPAA coverage is actor/context-specific; HIPAA is not a general certification of the tool.

## 13. Ranked defects

| Priority | Defect |
|---|---|
| P0 | CSP blocks Chart.js; first answer freezes and assessment is unusable. |
| P0 | “Medical Technology & Evidence Standards” scope is materially false; instrument only gestures at clinical-AI accountability. |
| P0 | Twelve duplicated template items cannot measure six stated dimensions; institution-level tiers are invalid. |
| P0 | Promised PDF is never called and jsPDF is blocked. |
| P1 | Result copy is contaminated with M1/legal-trauma content and unsupported 34%/18-month cases. |
| P1 | Derived assessment data is sent under incomplete “answers stay in browser” language. |
| P1 | Device/CDS classification, authorization, validation, QMS, postmarket, cybersecurity, change-control, and jurisdiction boundaries absent. |
| P1 | Recommendation area blank; false-success contact/waitlist behavior. |
| P1 | Obermeyer/ONC evidence is overgeneralized; legal “rights” and inevitability claims unsupported. |
| P2 | Sector selection cosmetic/stale default; no back; progress misleading. |
| P2 | Accessibility and responsive verification absent; modal/timed feedback/motion defects. |
| P2 | Missing privacy/terms/robots/sitemap; analytics 404. |

## 14. Exact remediation plan

1. **`index.html` runtime:** self-host/bundle Chart.js/jsPDF or remove them; align CSP without unsafe-eval; render questions/results without chart dependency; add explicit error UI.
2. **`index.html` promises:** remove email gate and PDF copy until a tested export exists; call and test generator if retained; populate `rec-text`; check `response.ok`; provide retry/failure states.
3. **`index.html` content:** delete copied trauma/legal branches and unsupported vignettes; replace sector simulation or actually branch content.
4. **Instrument:** rebuild around distinct observable criteria, evidence-to-check, unknown/N/A, respondent role, product inventory entry, intended use, actor, risk, and jurisdiction. Do not aggregate into maturity until validated.
5. **Scope:** either narrow title to clinical AI governance or build separate pathways for device software, devices, drugs/biologics, combination products, non-device CDS, research, payer and provider use.
6. **Evidence layer:** create claim-to-source/version ledger with FDA/ASTP/HHS/FTC and jurisdiction-specific authorities; distinguish binding law, final guidance, draft guidance, standards, and recommended practice.
7. **Privacy:** local results by default; separate opt-in report delivery and marketing; publish privacy/retention/deletion; prohibit PHI; complete API/data-flow security review.
8. **Accessibility/tests:** semantic question fieldsets, focus/live/error/dialog management, reduced motion, text result alternatives; automated production-header E2E, API failure, all tiers, PDF, keyboard, mobile and AT verification.
9. **Parent `nsag-site` M11 page:** correct five-point claim (tool uses four options), narrow hospital/evidence conclusions, fix 200-million framing, qualify regulatory-clearance language, and mark tool prototype until verified.

Release gate: production E2E with zero CSP/console/network errors; promised outputs delivered; no email required for results; every item distinct and content-reviewed; no institutional/clinical/regulatory inference beyond evidence; regulatory/clinical/privacy/accessibility review completed; source dates and jurisdiction visible.

## 15. Estate disposition

**C — Component.** Canonicalize under NSAG’s parent case study. Maintain the deployed tool only after Stage B remediation and verification. Do not publish it as an independent medical-technology product, compliance assessment, or regulatory service.

## 16. RN Selected Work case-study corrections

Describe M11 as an **in-development clinical-AI governance reflection** that translates evidence on algorithmic bias and institutional accountability into six proposed review areas. State explicitly that the current production audit found an inoperable interaction, duplicated questions, no validated scoring, undelivered report, and unresolved regulatory/privacy boundaries. Do not claim a functional assessment, report generator, toolkit, validated tier, medical-device regulatory navigator, or measured outcomes. After remediation, link separately to the canonical NSAG module and the assessment component.

## 17. Evidence appendix and unverified areas

Inspected: full live HTML/JS and headers; all discoverable routes, links, controls, scoring branches and payloads; canonical parent page; GitHub repository metadata/tree; missing local routes; cited primary sources; responsive/accessibility implementation; copy and every promised output. No source/RN Selected Work files were edited.

Primary authorities checked:

- Obermeyer et al. (2019): `https://doi.org/10.1126/science.aax2342`
- ASTP/ONC hospital predictive-AI data brief: `https://www.healthit.gov/data/data-briefs/hospital-trends-use-evaluation-and-governance-predictive-ai-2023-2024`
- FDA Clinical Decision Support Software, final guidance (Jan. 2026): `https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-decision-support-software`
- FDA Digital Health Policy Navigator: `https://www.fda.gov/medical-devices/digital-health-center-excellence/step-6-software-function-intended-provide-clinical-decision-support`
- FDA AI-enabled-device lifecycle draft guidance (Jan. 2025; draft, not for implementation): `https://www.fda.gov/regulatory-information/search-fda-guidance-documents/artificial-intelligence-enabled-device-software-functions-lifecycle-management-and-marketing`
- FDA PCCP final guidance (Aug. 2025): `https://www.fda.gov/regulatory-information/search-fda-guidance-documents/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence`
- FDA MDR requirements: `https://www.fda.gov/medical-devices/postmarket-requirements-devices/mandatory-reporting-requirements-manufacturers-importers-and-device-user-facilities`
- FDA postmarket requirements: `https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/postmarket-requirements-devices`
- HHS/FTC health-information overview: `https://www.hhs.gov/hipaa/for-professionals/special-topics/hipaa-ftc-act/index.html`

Unverified: Vercel deployment-to-commit metadata was not available in the repository crawl; the external API’s storage, access, recipients, security, retention and deletion; any real toolkit/cohort/peer benchmarks; the two institutional vignettes; psychometric validation; formal regulatory/legal/clinical review; live assistive-technology matrix. Later interactive states are code-backed rather than browser-completed because production CSP blocks the flow.
