# NSAG M12 — Nervous-System-Aware Education Systems

## 1. Asset identity: site, repository, deployment, parent practice, status, privacy

- Live tool: `https://nsag-m12.vercel.app/`.
- Private repository: `rn-collins/nsag-m12` (ID `1285740139`), default `main`, static HTML.
- Inspected commit/tree: `0df3708288d1d753a282ba4d91d903d02be186a0`, August 2, 2026.
- Complete repository: `.gitignore`, `index.html` (75,208 bytes), `vercel.json`; no package, server, schema, tests, or build pipeline.
- Production is provenance-matched to Git: deployed file hashes to exact repository blob `3567fcea8f78c13ea58aa4816569afa3922520d8`.
- Parent practice: Neurocognitive Systems Advisory Group; Aloha AI is credited as builder. M12 is a component, not an independent portfolio build.
- Privacy: public consumer interface, but result/contact/waitlist data go to an external lead API without a complete notice; school-child information should never be entered.

## 2. Executive verdict

**Disposition: C — retain as an NSAG component; release hold.** The six themes could support a useful school-governance workshop, and unlike several modules the 12 prompts are not duplicates. The current artifact nevertheless fails technically and substantively. CSP blocks Chart.js and jsPDF, the promised PDF has no invocation, later flow is unreliable, sectors are cosmetic, and result copy is heavily contaminated by a legal-services M1 template.

The product also equates a bounded observational primary-school classroom study with institution-wide “nervous-system-aware education,” gives scientifically simplistic schedule advice, and infers trauma-informed/legal compliance and institutional maturity from one respondent. It omits IDEA/Section 504/ADA duties, individual evaluation/placement, student and parent participation, discipline/restraint, FERPA/COPPA, developmental variation, culturally responsive interpretation, and safeguards against turning behavior observations into disability/trauma profiling.

## 3. Complete route map

The only implemented same-origin application surface is `/`. HTML advertises `/sitemap.xml`, but the complete static repository contains no sitemap, robots, privacy, terms, or route handlers. `/api/track` is referenced client-side but absent. External destinations include NSAG parent/advisory, M1, M8, Aloha AI, legacy RN portfolio, Outlook booking, and `nsag-api.vercel.app`. The route/control ledger records every discoverable destination and its verification boundary.

The root returned 200 with security headers (HSTS, DENY framing, nosniff, permissions policy). CSP allows the lead API and Google Fonts but blocks both JavaScript libraries on which the application depends.

## 4. Complete interaction/control inventory

The interface contains: begin CTA; four institution-type buttons; continue; 12 generated scenario screens with four options each; A–D keyboard shortcut; progress/radar; mandatory email field and reveal CTA; cinematic overlay; six result bars; copy, share, print, retake; toolkit waitlist; advisory and booking links; related-module cards; and floating contact modal/form.

Every resulting state is classified in `ROUTE_CONTROL_LEDGER.md`. Most severe: Chart initialization fails under production CSP; PDF is definition-only and its library blocked; sector selection is unused; email/result submissions suppress failure; toolkit/contact can falsely report success; modal lacks accessible dialog behavior.

## 5. Consumer journeys and observed results

An education leader sees a compelling headline and recognizable facilities/schedule/wellbeing concerns. Trust falls quickly: a university or nonprofit selecting its sector still receives K–12 district scenarios; “8–10 minutes” leads to a mandatory email gate; a free local reflection promises an immediate PDF that cannot be generated; resulting advice can call a school a “trauma-informed legal environment,” discuss legal aid clients and AI legal tools, or claim the institution is re-traumatizing clients.

The questionnaire journey is not reliably completable under production CSP. Source reconstruction shows no back/review path, no unknown/N/A, no evidence prompt, and no safe way to distinguish “we do not know” from absence. A single administrator can produce an institution-wide “PIONEERING” share statement with maximally aspirational answers.

## 6. Functional matrix

| Function | Status | Evidence |
|---|---|---|
| Static landing/deep dive | Working | Root 200; full copy present. |
| Sector personalization | Simulated | `selectedSector` never consumed; stale `legal-aid` default. |
| Question generation | Partial | Generated before Chart failure; downstream answer update depends on Chart. |
| Assessment progression | Broken/inaccessible | CSP blocks Chart.js; `updateRadar()` cannot operate. |
| Scoring | Code-backed, invalid for claimed use | Deterministic authored thresholds; no validation. |
| Result interpretation | Partial/contaminated | Legal-space/M1 copy, unsupported outcomes and advice. |
| PDF | Broken | jsPDF blocked; no `generateResultPDF()` call. |
| Local analytics | Broken | No `/api/track` implementation. |
| Result/contact/waitlist API | Unverified/false success | External backend unavailable; callers ignore HTTP status. |
| Toolkit/cohort/advisory deliverables | Unverified | Marketing copy only; no contents/delivery evidence in repo. |
| Accessibility/mobile | Partial/unverified | Some native controls; major focus, semantics, motion, chart, zoom gaps. |

## 7. Copy and information-architecture findings

“Nervous-system-aware education systems” is broader than what the product measures. The dimensions combine facilities, school climate, scheduling, staff work design, belonging, and program evaluation, but never directly operationalize nervous-system constructs. Use a bounded name such as **M12 · School Environment, Belonging, and Work-Design Governance Reflection** until a construct model exists.

High-risk copy defects include “evidence-based self-assessment” adjacent to “not validated”; “governance tier” and “score”; unqualified “chronobiological governance”; “physiological recovery” and “downregulation” as if universal scheduling prescriptions; “burnout governance addresses the organizational cause”; and claims that written policy determines survival. Result branches contain extensive legal-template contamination, including “baseline legal requirements,” legal spaces/clients, Chicago legal aid, M1, M2, and AI-assisted legal tools.

Advice boundary must state: educational reflection only; not developmental, psychological, trauma, disability, special-education, clinical, architectural/engineering, occupational-health, accreditation, or legal advice; not a student screening/diagnosis or substitute for IEP/504 evaluation, qualified professionals, student/family participation, collective bargaining, building/health/safety codes, or emergency/safeguarding processes.

## 8. Science/law/policy/regulatory claim ledger

| Claim/domain | Assessment | Correction/boundary |
|---|---|---|
| HEAD study: seven parameters explain 16% of variation in academic progress | Real 2015 multilevel observational study: 153 classrooms, 27 English primary schools, 3,766 pupils aged roughly 5–11. “Explain” is statistical variance, not proof that adopting seven standards causes 16% improvement. | State setting, age, design, outcomes, uncertainty and external-validity limits. Do not generalize to universities, all K–12, nonprofits, trauma, disability, or nervous systems. |
| Effect “comparable to curriculum investment effects” | No source or comparison definition provided; potentially apples-to-oranges. | Supply bounded comparative evidence or remove. |
| HEAD parameters should be capital-design governance standards | Study parameters are not a building code, accessibility standard, exposure limit, or universal design specification. | Integrate current ventilation, thermal, acoustic, lighting, accessibility, safety, procurement, maintenance, and local code expertise. |
| Cognitive performance consistently declines in last two periods; schedule high-stakes exams in morning | Overgeneralized. Chronotype, age, sleep, start time, subject, individual disability, medication, feeding, culture and testing conditions matter. Adolescent evidence often supports later starts, making “morning” non-universal. | Use local outcome/equity analysis and accommodations; cite specific age/population/task evidence. |
| Structured “downregulation” and evidence-based break lengths | No source, dosage, age range, contraindications, or definition. May pathologize ordinary transitions. | Present optional, student-informed supports; do not impose physiological claims or one-size duration. |
| Burnout has one organizational cause / six Maslach domains | Work design is important; burnout is multifactorial. Areas of Worklife are not a diagnostic or automatic response threshold. | Use occupational-health evidence, staff voice, labor agreements and validated measures with boundaries. |
| Belonging disparities require governance response | Directionally sound, but subgroup measurement can stigmatize/reidentify and observational differences do not alone identify cause. | Predefine measures, intersectional/small-cell protections, student participation, qualitative context, nondiscrimination review. |
| ACE-informed transitions reduce stress/absence | ACE scores are population-risk research, not student diagnostics or prescriptions; no source connects this proposed intervention to claims. | Remove ACE branding unless accurately sourced and never screen/profile children through this tool. |
| School example: stress −22%, absenteeism −11%; legal-aid example satisfaction +34% | No named entity, method, denominator, comparator or source; legal-aid vignette irrelevant. | Cite auditable outcomes, clearly label hypothetical, or remove. |
| “Most institutions” advance within one advisory cycle / 90-day exact-tier roadmap | No cohort, validation or outcome evidence. | Remove until prospectively evaluated. |

Trauma-informed education should follow SAMHSA/NCTSN’s system framing—safety, trust, collaboration, empowerment, recognizing/responding while resisting retraumatization—not presume trauma from behavior, require disclosure, or substitute generic environmental changes for individualized services. Evidence for trauma-informed school programs is heterogeneous; framework plausibility is not proof of academic or clinical outcomes.

Legally, IDEA requires individualized identification/evaluation, FAPE, IEP processes, parent participation and procedural safeguards for eligible children; Section 504 requires nondiscrimination and individualized FAPE for qualified students in covered K–12 schools; Title II applies to public entities. The tool addresses none of these and cannot infer “baseline legal requirements.” Accessibility must include program, facility, communication and digital access, reasonable modifications/auxiliary aids, and individualized accommodations—not merely comfortable classrooms.

## 9. Accessibility and responsive findings

Strengths are native buttons and basic labels. Gaps: no skip link or reliable main landmark; hidden-screen focus not moved; flashes not announced; cinematic overlay has no live semantics or reduced-motion path; email error lacks linked explanation; chart has no full text/table equivalent; modal lacks `role=dialog`, `aria-modal`, labelled relation, focus trap, Escape close and focus return; fixed contact button can obscure mobile content; status changes and clipboard failures are not announced.

The product’s content also ignores disability access: sensory preferences vary; “complexity,” color, light, acoustics and transitions cannot be universally ranked; students may require individualized IEP/504 accommodations. No evidence of 320/375 widths, 200/400% zoom, reflow, keyboard-only, VoiceOver/NVDA, forced colors, reduced motion, or cognitive-accessibility/user testing with disabled students and educators.

## 10. Brand-architecture findings

M12 belongs under NSAG as a component; Aloha AI can receive implementation credit. It should not become a 36th independent case study. Current footer sends users to an obsolete RN Builds portfolio, JSON-LD uses “AI Educator & Consultant,” and contaminated M1 legal copy makes NSAG appear templated rather than research-led. The parent case study should explain NSAG’s ownership of the framework and evidence boundaries while Aloha AI’s role is technical translation. Hawaiʻi grounding is absent despite education governance being locally/jurisdictionally specific; any Hawaiʻi application needs state/local, Native Hawaiian, disability, language and community context rather than generic national claims.

## 11. Business-model and conversion findings

Potential buyer: superintendent/district leadership, facilities, student services, special education, HR/labor, or a university administrator. Beneficiaries include students, families, teachers and staff, who are not represented in the assessment. Adoption barriers are scientific credibility, legal duties, labor/family trust, data privacy, capital cost, role ownership and proof of outcomes.

A plausible service is a facilitated, multi-stakeholder evidence-and-governance review producing an issues/evidence matrix—not a one-person tier. The $500 toolkit is unverified and promises policy language that could affect children’s rights and school operations. It needs actual artifacts, jurisdiction limits, professional review, accessibility, licensing, update/version policy, terms, delivery/refund/support, privacy and explicit no-compliance guarantee. “Peer cohort” and advisory-cycle advancement should not be sold without real programs and data.

## 12. Security, privacy, data, and operational findings

Production security headers are generally thoughtful, but CSP is internally inconsistent: external runtime libraries are blocked while unsafe-inline/unsafe-eval remain allowed. Third-party scripts have no SRI. Network errors are suppressed; no logging/monitoring/test harness exists.

The result API receives adult email plus institutional response profile. More importantly, the recommended “observation-to-governance” pathway, student safety surveys, demographic belonging analysis and intervention evaluation would create sensitive student records if implemented. FERPA governs maintained education records/PII and limits internal access to school officials with legitimate educational interest; contractors require direct control/use/redisclosure safeguards under applicable exceptions. COPPA may apply to online collection from children under 13; school authorization is limited to educational purposes and does not transfer operator responsibility. State student-privacy, biometrics, mental-health, survey/parental-rights, breach and retention laws may add duties.

Required architecture: do not collect student data in M12; data minimization; purpose and metric definitions; parent/eligible-student rights; student assent/voice; role-based access; vendor contracts; no advertising/profiling; small-cell suppression; retention/deletion; correction; disclosure logs; security; incident response; research/IRB review where applicable; separation from discipline, policing, immigration and automated decision-making. Contact form must warn against student/education/disability/health data.

## 13. Defects ranked P0/P1/P2/P3

| Priority | Defect | Impact |
|---|---|---|
| P0 | CSP blocks Chart.js; core flow cannot reliably operate. | Product failure. |
| P0 | PDF promised; jsPDF blocked and function never called. | Failed/materially misleading deliverable. |
| P0 | Result infers trauma-informed legal compliance/institutional maturity from unvalidated self-report. | Child-rights, legal and reputational risk. |
| P0 | Extensive legal/M1 template contamination in every tier branch. | Wrong advice and broken product identity. |
| P1 | HEAD result generalized beyond primary-school observational setting and into causal governance standard. | Scientific overclaim. |
| P1 | Simplistic morning testing/downregulation/ACE claims lack developmental and disability boundaries. | Potential inequity/harm. |
| P1 | IDEA/504/ADA, FERPA/COPPA, family/student voice and discipline safeguards absent. | Legal/privacy/access risk. |
| P1 | Uncited outcome vignettes, peer/cohort/advisory timelines. | Deceptive evidence/marketing risk. |
| P1 | Derived data transfer and false-success lead paths. | Privacy and operational trust risk. |
| P2 | Sector selection simulated; higher-ed/nonprofit users get district items. | Invalid audience fit. |
| P2 | Modal/focus/motion/chart/error accessibility gaps. | Exclusion. |
| P2 | Missing privacy/terms/sitemap/robots and dead analytics route. | Governance/discovery weakness. |
| P3 | Stale portfolio/JSON-LD/share URL, icons and generic AI copy signals. | Brand polish. |

## 14. Exact remediation plan with file-level targets

Because the repository is one page, Stage B targets `index.html` and `vercel.json`:

1. `vercel.json`: bundle/self-host approved libraries or safely align CSP; remove unsafe-eval; maintain strict framing; test production headers.
2. `index.html` head/init: remove unneeded third-party runtime; add canonical/current metadata, skip link, landmarks, reduced motion and startup error handling.
3. Question model: replace sector simulation with separate audience-specific instruments or one accurately bounded K–12 tool; add role, jurisdiction, unknown/N/A, evidence and corroboration; remove tiers pending validation.
4. Results: delete all legal/M1 contamination, unsupported predictions/vignettes, organization-level conclusions and stale routes; provide descriptive response/evidence checklist.
5. Claims/deep dive: scope HEAD accurately; add source/limitation ledger; remove universal morning/downregulation/ACE prescriptions; add developmental/disability/trauma boundaries.
6. Rights/privacy: add IDEA/504/ADA, FERPA/COPPA/state-law, parent/student participation, nondiscrimination, discipline, accessibility and advice-boundary sections; prohibit student data entry.
7. API/forms: local result without email; separate optional consent; minimize payload; check `response.ok`, timeout/retry; publish retention/deletion/controller/vendor disclosures.
8. Export: implement and test accessible HTML/print or PDF, or remove promise.
9. Accessibility: focus/live regions/dialog/error/table alternatives/keyboard/zoom/reflow/AT testing with disabled users.
10. Tests: syntax, all score branches, production-CSP E2E, failed API, mobile, keyboard, privacy payload and link checks.

Acceptance gate: independent education measurement, child development/trauma, special-education/disability civil-rights, student privacy, school facilities/health, labor, accessibility, and student/family review; zero console/CSP errors; complete flow without email; no false-success path; claim-level sources; no child profiling or compliance inference.

## 15. Recommended estate disposition

**C — component of canonical NSAG parent, release-blocked.** Maintain the deployed interface only if Stage B reconstructs it into a bounded, safe school-governance reflection. Otherwise archive the standalone module and retain its strongest six-domain concept as a documented prototype inside NSAG. Do not create a separate RN Selected Work card.

## 16. Proposed RN Selected Work case-study corrections

Describe M12 within NSAG as an **in-development education-governance prototype** exploring how facilities, transitions, staff work design, belonging and evaluation might be reviewed together. State that the current 12-scenario artifact is nonvalidated, not a child assessment or legal-compliance tool, and is under remediation for evidence scope, disability/student rights, privacy and technical reliability. Do not claim operational PDF, toolkit, peer benchmarking, demonstrated outcomes, or institution-level maturity. Keep live CTA disabled/labelled prototype until release verification.

## 17. Evidence appendix and explicit unverified areas

Audit evidence: complete deployed HTML/JavaScript and production headers; complete private GitHub tree/config/history; exact deployment-to-blob match; all questions/options/rationales, scoring branches, payloads, controls, copy, and external destinations; RN Selected Work/NSAG relationship. No source files were modified.

Primary/authoritative anchors:

- Barrett et al. (2015), *Building and Environment*, DOI `10.1016/j.buildenv.2015.02.013`: `https://www.sciencedirect.com/science/article/pii/S0360132315000700`.
- U.S. Department of Education IDEA FAPE and parent participation: `https://sites.ed.gov/idea/regs/b/b/300.101`; `https://sites.ed.gov/idea/regs/b/e/300.501`.
- ED Section 504/Title II and FAPE: `https://www.ed.gov/laws-and-policy/individuals-disabilities/section-504`; `https://www.ed.gov/laws-and-policy/civil-rights-laws/disability-discrimination/disability-discrimination-providing-free-appropriate-public-education-fape`.
- ED disability discipline/restraint/seclusion: `https://www.ed.gov/laws-and-policy/civil-rights-laws/disability-discrimination/disability-discrimination-key-issues/disability-discrimination-discipline-restraint-and-seclusion`.
- ED FERPA privacy resources: `https://studentprivacy.ed.gov/frequently-asked-questions`.
- FTC children’s privacy/COPPA and ed-tech enforcement explanation: `https://www.ftc.gov/business-guidance/privacy-security`; `https://www.ftc.gov/business-guidance/blog/2023/05/oh-no-you-dont-edmodo-ftc-sues-ed-tech-company-violating-school-kids-privacy`.
- SAMHSA trauma-informed approach: `https://www.samhsa.gov/mental-health/trauma-violence/trauma-informed-approaches-programs`.
- NCTSN trauma-informed schools framework: `https://www.nctsn.org/resources/creating-supporting-and-sustaining-trauma-informed-schools-system-framework`.
- CDC sleep/start-time and connectedness guidance: `https://www.cdc.gov/physical-activity-education/staying-healthy/sleep.html`; `https://www.cdc.gov/mental-health-action-guide/strategies/enhance-connectedness.html`.

Unverified: external lead API CORS/authentication/storage/recipients/security/retention/deletion; Vercel analytics handling; toolkit, cohort, advisory delivery; every anonymous result/outcome claim; formal validation and user research; assistive-technology/device matrix; jurisdiction-specific school law and building-code compliance. Browser automation was unavailable, so later states are code-backed and explicitly not represented as successfully exercised. Legal requirements and evidence are jurisdiction/time sensitive; this audit is not legal, clinical, developmental, engineering or educational advice.
