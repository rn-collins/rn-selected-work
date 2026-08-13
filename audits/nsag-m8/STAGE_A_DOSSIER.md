# NSAG M8 — Burnout Recovery Infrastructure Governance

## 1. Executive verdict

**Disposition: C — retain as a component of NSAG, not a standalone RN build. Release hold.** The canonical version is the NSAG module page at `https://nsag-site.vercel.app/m8`; `https://nsag-m8.vercel.app/` is its interactive assessment component. The private repository is `rn-collins/nsag-m8`, and the live Vercel project is `nsag-m8` (`prj_mWA3bKseg484UwfMvMH4nrlFCnCe`). The inspected production deployment was READY and traced to commit `6cd1a2fe155cedca410580b042c5328e8fda6de1`.

The concept is strategically strong: the questions turn six recognized Areas of Worklife into concrete governance scenarios. The production experience is nevertheless not releasable. Its CSP blocks Chart.js and jsPDF, application initialization fails, the questionnaire cannot proceed, the promised PDF is never invoked, the central recommendation is blank, and lead forms falsely signal success. Substantively, a two-item-per-domain, single-respondent reflection is presented as an institutional maturity result. It does not measure burnout, psychosocial hazard exposure, disability, clinical status, intervention effectiveness, or organizational outcomes.

## 2. Artifact identity and provenance

- Public module/canonical page: `https://nsag-site.vercel.app/m8` (its canonical tag points to itself).
- Interactive tool: `https://nsag-m8.vercel.app/`.
- GitHub: private `rn-collins/nsag-m8`, default branch `main`.
- Latest inspected commit: `6cd1a2fe155cedca410580b042c5328e8fda6de1`, described as replacing a dead Gumroad link with a waitlist.
- Vercel: project `nsag-m8`; inspected deployment `dpl_Boc19DSRTGYgzYoi4n87SFgDERpU`; 20 deployments were visible in the project history.
- Repository is a static artifact: `index.html`, `vercel.json`, `.gitignore`; no package manifest, test suite, server function, schema, or build pipeline.
- The tool links back to NSAG, NSAG advisory, M10/M12/M13, Aloha AI, and a legacy RN portfolio.

## 3. Product purpose and audience

The tool asks organizational leaders to reflect on workload, autonomy, reward, community, fairness, and values using 12 scenarios. It targets hospitals, legal/professional services, education, and social-service/nonprofit institutions. Its legitimate purpose is **conversation-starting governance reflection**: surfacing where formal policy, measurement, accountability, and employee voice may be weak. It should not be described as a diagnostic, validated assessment, organizational audit, burnout measure, legal-compliance check, or proof of maturity.

## 4. Route, state, and journey coverage

The complete route/control ledger is in `ROUTE_CONTROL_LEDGER.md`. The intended journey is landing → sector → intro → 12 questions → email gate → cinematic tier result → recommendations/toolkit/related modules. `/robots.txt`, `/sitemap.xml`, `/privacy`, and `/terms` return 404; `/api/track` POST returns 404. Parent module and related module URLs tested live.

The production journey stops before question one: `initRadar()` executes `new Chart(...)`, while production CSP disallows the jsDelivr script. A conforming browser therefore has no `Chart`, initialization aborts before `buildQuestionScreens()`, and the questionnaire container remains empty. Later states were audited from code because they are not reachable in the deployed experience.

## 5. Consumer and interaction audit

The opening is clear, relevant, and unusually concrete for an organizational-governance product. Scenario language makes abstract domains understandable. However:

- sector choice is cosmetic; all sectors receive the same questions, thresholds, and advice;
- options are visibly maturity-ordered, leading, and easy to game;
- there is no “unknown,” “not applicable,” evidence request, respondent-role distinction, or confidence field;
- users cannot revisit an answer through the rendered interface;
- rationale flashes disappear quickly;
- progress reflects position, not completed answers;
- mandatory email is disproportionate to a “free reflection” and not necessary to calculate a result;
- “Copy” and “Share” convert a cautious on-screen disclaimer into “My organization scored…”.

## 6. Software-engineering audit

Production headers are generally security-conscious (HSTS, X-Frame-Options DENY, nosniff, restrictive permissions), but the CSP and implementation conflict:

- `script-src 'self' 'unsafe-inline' 'unsafe-eval'` blocks both `cdnjs.cloudflare.com` jsPDF and `cdn.jsdelivr.net` Chart.js;
- allowing `'unsafe-inline'` and `'unsafe-eval'` weakens an otherwise restrictive policy;
- `initRadar()` fails before question generation;
- `generateResultPDF()` exists but is never called and would also fail without jsPDF;
- `rec` is never written into `#rec-text`;
- `selectedSector` is never consumed beyond selection;
- analytics POSTs to nonexistent `/api/track` fail silently;
- contact/waitlist paths do not inspect `response.ok` and suppress errors;
- repeated result rendering would insert duplicate DOM blocks;
- third-party libraries are unpinned operational dependencies at runtime without SRI;
- no automated tests cover startup, scoring, PDF, API failure, accessibility, or viewport behavior.

P0: make the app initialize without CSP violation, then add an end-to-end smoke test that completes all 12 questions under production headers.

## 7. Accessibility and responsive audit

Strengths include native buttons, an email input, some `aria-label`s, and keyboard A–D shortcuts. Material gaps:

- no skip link or semantic landmark structure in the assessment;
- cinematic overlay has no reduced-motion handling, focus management, or live announcement;
- contact modal lacks `role=dialog`, `aria-modal`, labelled relationship, focus trap, focus return, and working Escape behavior;
- rationale and dimension-complete flashes are not live regions;
- error messaging is color/state only and lacks linked explanatory text;
- hidden screens/focus after navigation are not managed;
- charts lack equivalent structured summaries while running and are entirely broken under CSP;
- fixed contact control may obscure mobile content;
- no documented testing at 320/375/768/1024/1440 widths, zoom 200/400%, keyboard-only, VoiceOver, NVDA, or high-contrast/forced-colors.

## 8. Information architecture and copy audit

Use one naming hierarchy consistently: **NSAG M8 · Burnout-Related Work Design and Governance Reflection** (or comparably bounded language). “Burnout Recovery Infrastructure Governance Challenge” implies treatment/recovery and assessment authority the tool does not have. Replace “score” with “response pattern”; replace institution-level declarations with “Your responses suggest…”. Keep the parent page as the evidence/case-study layer and the Vercel tool as a component.

The legal-only disclaimer is insufficient. The page needs a concise boundary statement covering: not a validated instrument; not medical, mental-health, employment, disability, labor, or legal advice; not a substitute for worker consultation, confidential reporting, qualified occupational-health/clinical support, accommodation processes, collective bargaining, or emergency/crisis pathways.

## 9. Scoring and measurement validity

The six dimensions are content-relevant to the Areas of Worklife model, and each has two distinct governance scenarios. That is the strongest part of M8. The calculation is simple: each answer is 1–4; two items are summed per dimension (2–8); total average yields PIONEERING ≥3.5, EMERGING ≥2.5, DEVELOPING ≥1.5, otherwise EARLY STAGE. Dimension bands are Strong ≥7, Partial ≥5, Emerging ≥3, Absent otherwise.

Those thresholds are authored, not validated. There is no psychometric evidence, reliability analysis, construct validation, criterion validation, normative sample, weighting rationale, missing-data rule, inter-rater method, or sensitivity analysis. Ordinal choices are averaged as interval data. Two face-valid questions cannot establish institutional practice, especially from one respondent. The instrument measures **one respondent’s perception of policy maturity across six work-design areas**. It does not measure WHO burnout dimensions, incidence/prevalence, occupational hazard exposure, legal compliance, disability, individual health, causal mechanisms, or improvement.

Recommended output: no aggregate tier until validation. Show six descriptive response patterns with item text, uncertainty, evidence-to-check, affected-worker consultation prompts, and “cannot determine from this response” where appropriate. If tiers remain, label them editorial heuristics and require multi-stakeholder/evidence corroboration.

## 10. Scientific, clinical, occupational-health, and outcome claims

The parent cites real scholarship, but the tool often converts frameworks and associations into categorical causes, predictions, and superlatives.

| Claim | Assessment | Required correction |
|---|---|---|
| “Burnout is an organizational design failure.” | Compelling thesis, overly absolute. | “Work design and organizational conditions are major contributors and intervention targets.” |
| “25 years of evidence locates its causes in six workplace mismatches.” | Areas of Worklife is a recognized framework; “causes” overstates. | Say “conceptualizes six areas of person–job fit associated with burnout.” |
| Workload is “the strongest single predictor.” | Context-, occupation-, measure-, and study-dependent. | Cite a specific synthesis or remove superlative. |
| Low control “predicts disengagement and exit.” | Plausible but broad. | Scope and source. |
| Values mismatch is “the deepest driver of moral injury and exit.” | Unsupported superlative and conflates distinct constructs. | Remove; treat moral injury separately with domain-specific evidence. |
| Organizational interventions outperform individual ones. | Parent’s resident-physician meta-analysis supports a bounded comparison with small practical significance. | Preserve population, intervention heterogeneity, outcomes, and limitation; do not generalize to every sector. |
| Pilot hospital/clinic stories with reduced turnover/exhaustion and timelines. | No source, institution, method, baseline, or denominator. | Identify as documented case with citation/data, explicitly label hypothetical/composite, or remove. |
| “Most institutions” move tiers within one cycle / were early stage 2–3 years ago. | No cohort or data. | Remove until measured. |
| “When staff are depleted, no other governance holds.” | Rhetorical absolute. | Reframe as strategic importance, not fact. |

WHO distinguishes burnout as an occupational phenomenon—not a medical condition—and describes exhaustion, cynicism/distance, and reduced professional efficacy. These outcome dimensions are not the same as the six Areas of Worklife. M8 must present the relationship accurately.

## 11. Employment, disability, privacy, and governance audit

The highest-risk item says a staff member is “visibly struggling” and performance is slipping. Governance should not encourage managers to infer disability or diagnose distress. EEOC guidance makes reasonable accommodation fact-specific, limits disability-related inquiries/medical exams, and requires medical information confidentiality. The tool should separate performance expectations, voluntary confidential support, interactive accommodation processes, and safety/emergency escalation.

Additional issues:

- equity audits require defined lawful variables, access controls, small-cell suppression, labor/union consultation, remediation ownership, and anti-retaliation protections;
- “protected channel” needs independence, confidentiality limits, retention, escalation, due process, whistleblower/labor-law alignment, and non-retaliation enforcement;
- workload ceilings in clinical/public-safety settings must be integrated with staffing, licensure, duty-of-care, patient/client safety, and jurisdictional rules;
- the “structured team debrief by default” is dangerously ambiguous. Mandatory single-session psychological debriefing should not be implied; distinguish optional operational after-action review, evidence-based early support/psychological first aid, monitoring, referral, and qualified care;
- EAP availability is neither proof of trust nor treatment adequacy, and employees should not have to disclose to managers to receive help.

## 12. Privacy, API, and security audit

The page says answers stay in the browser, yet result submission sends email, tier, overall percentage, six dimension sums, source, and timestamp to `nsag-api.vercel.app/api/lead`. The statement is therefore incomplete: raw item choices may remain local, but derived assessment data leaves the browser. The user receives no controller identity, purpose, legal basis/consent choice, processor/subprocessor notice, retention period, access/deletion method, security description, or warning about using work email/device.

Email should be optional and collected only after on-device results. Separate assessment delivery from marketing/advisory follow-up consent. Do not send dimension results to a general lead endpoint by default. Provide an assessment-local privacy notice before submission. Explicitly state whether employers ever receive individual data. Never solicit health/disability details in the generic contact message field without appropriate controls.

## 13. Brand, portfolio, and strategic fit

M8 belongs inside NSAG because the framework, evidence claims, governance boundaries, advisory conversion, and related modules are inseparable from NSAG’s institutional-design practice. It should appear on RN Selected Work as a component or applied implementation within the NSAG case study, with “Open assessment” only after remediation. Aloha AI can retain builder attribution. The footer’s legacy “RN Builds” URL should be reconciled to the current canonical portfolio.

As a business product, M8 could credibly support a facilitated discovery workshop, multi-stakeholder evidence review, and governance roadmap. A $500 toolkit claim requires an actual defined product, terms, refund/delivery expectations, accessibility, evidence versioning, and no promises that a roadmap or “one advisory cycle” will move a client to an unvalidated tier.

## 14. Defect and risk register

| Priority | Finding | Impact |
|---|---|---|
| P0 | CSP blocks Chart.js; initialization aborts before questions build. | Core product unusable. |
| P0 | Email gate promises immediate PDF; PDF function has no call site and jsPDF is blocked. | Materially deceptive conversion. |
| P0 | Instrument implies organization-level measurement/score without validation. | Scientific, employment, and reputational harm. |
| P1 | Derived assessment data sent to lead API under incomplete “answers stay in browser” disclosure. | Privacy/employee-trust risk. |
| P1 | Result recommendation blank (`rec-text` never populated). | Core result incomplete. |
| P1 | False-success contact/waitlist behavior. | Lost leads and misleading assurances. |
| P1 | Uncited outcome vignettes, timelines, and cohort claims. | Evidence/marketing credibility risk. |
| P1 | Medical/mental-health, disability/employment, labor, and crisis boundaries inadequate. | Advice and governance risk. |
| P1 | Default “structured debrief” ambiguous and potentially inconsistent with evidence. | Possible worker harm. |
| P2 | Sector choice unused; progress misleading; back unavailable. | UX/trust erosion. |
| P2 | Missing privacy/terms/robots/sitemap and dead analytics endpoint. | Governance/discovery weakness. |
| P2 | Modal, motion, focus, status, and error accessibility defects. | Exclusion and compliance risk. |

## 15. Remediation plan and acceptance gates

1. **Stabilize:** self-host/bundle dependencies or revise CSP safely; remove unsafe-eval; ensure no console/CSP error; add startup and full-flow browser test.
2. **Honor promises:** call and test an accessible export or remove PDF language; populate recommendation; make every network action await and visibly handle `response.ok`, timeout, and retry.
3. **Rebound claims:** rename as a reflection, rewrite organization-level output, remove unsupported superlatives/timelines/vignettes, and add claim-level citations/limitations.
4. **Repair measurement:** document construct and intended use; add unknown/N/A and respondent role; prefer dimension-by-dimension evidence prompts; pilot multi-stakeholder reliability before maturity tiers.
5. **Protect workers:** add disability/employment/labor/privacy boundaries, confidential and anti-retaliation design, safe crisis/clinical escalation language, and correct debrief guidance.
6. **Data minimization:** reveal locally without email; separate optional email delivery and follow-up consent; publish retention/deletion/controller disclosure; avoid derived-result lead ingestion by default.
7. **Accessibility:** semantic journey, focus management, live regions, reduced motion, labelled errors/dialog, non-chart equivalents, keyboard/screen-reader/zoom/device matrix.
8. **Portfolio:** parent page is canonical; assessment is an NSAG component; reconcile legacy footer destinations.

Release acceptance: successful production-header E2E completion at desktop/mobile; zero CSP/console errors; all network failures truthfully surfaced; accessible result without email; exact data-flow disclosure; claim ledger approved; no institution/clinical inference beyond evidence; legal/occupational/clinical review of high-risk guidance.

## 16. Case-study treatment recommendation

Do not publish a celebratory standalone case study yet. Present M8 within the NSAG case study as an **in-development applied governance reflection**, with honest status: 12 scenario prompts translate the Areas of Worklife into policy questions; current production audit identified reliability, validation, privacy, and advice-boundary work before public use. After remediation, the case study should show problem, source framework, question-to-domain mapping, bounded output design, privacy architecture, accessibility verification, and what remains unvalidated. Link separately to the canonical module explanation and interactive tool.

## 17. Evidence, methodology, and residual uncertainty

Stage A inspected the complete live HTML/JavaScript, production headers, all discoverable internal/external links and controls, scoring branches, API payloads, Vercel project/deployment metadata, private GitHub repository file tree/config, canonical parent module, and cited evidence links. Endpoint checks confirmed the missing routes and live related-module destinations. No source or RN Selected Work files were modified.

Primary interpretive anchors:

- Maslach, Schaufeli & Leiter (2001): `https://doi.org/10.1146/annurev.psych.52.1.397`
- Kiratipaisarl et al. (2024): `https://doi.org/10.1186/s12909-024-06195-3`
- WHO burnout FAQ: `https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon`
- EEOC performance/conduct and disability guidance: `https://www.eeoc.gov/laws/guidance/applying-performance-and-conduct-standards-employees-disabilities`
- EEOC mental-health accommodation guidance: `https://www.eeoc.gov/laws/guidance/depression-ptsd-other-mental-health-conditions-workplace-your-legal-rights`

Residual uncertainty: the external lead API’s implementation, storage, recipients, security, retention, and deletion behavior are outside this repository and were not established; no claim is made that it safely persists or discards submitted data. Later questionnaire states could not be exercised end-to-end because the deployed CSP prevents initialization; their behavior classifications are code-backed. Formal psychometric validation, legal review across jurisdictions, worker/user research, assistive-technology testing, and intervention outcome data were not present.
