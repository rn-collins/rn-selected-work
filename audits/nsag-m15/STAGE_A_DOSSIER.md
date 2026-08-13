# NSAG M15 — Isolation, Confinement, and Extreme Environment Governance

## 1. Asset identity: site, repository, deployment, parent practice, status, privacy

- Standalone interface: `https://nsag-m15.vercel.app/`; declared canonical parent page: `https://nsag-site.vercel.app/m15`.
- Private repository `rn-collins/nsag-m15` (ID `1285740283`), default `main`, latest inspected commit/tree `820162ddf55a24ba954ac4f48d2cbc69fc74cea7` (August 2, 2026).
- Complete static repository: `.gitignore`, `index.html` (43,164 bytes; blob `4d4e0cca55b88c08324ce2eab27885c68f795e97`), `vercel.json`; no build system, tests, API, PDF, or other routes.
- Parent practice: NSAG; Aloha AI credited as builder. Public component, not an independent RN portfolio asset.
- Privacy: assessment/download/contact collect email and lead data through an external API with no complete lifecycle notice. The interface must not receive identifiable prisoner, detainee, patient, resident, crew, employee, research-participant, incident, classified, export-controlled, or operational data.

## 2. Executive verdict

**Disposition: C — NSAG component; immediate release hold.** The page contains a readable six-domain framing and a technically simpler assessment than M1–M14, but it collapses legally and ethically incompatible settings—punitive solitary confinement, immigration/pretrial detention, psychiatric seclusion, infection isolation, long-term care, submarines, polar research, wilderness expeditions and spaceflight—into one “readiness” score derived from generic document-presence questions.

This is not curable through disclaimers alone. Corrections involve involuntary state custody, constitutional/due-process/disability and international human-rights constraints; hospital seclusion is an emergency clinical intervention governed by patient-rights rules; medical infection isolation has public-health/clinical rationales and least-restrictive duties; crew/worker extreme environments involve consent, employment, mission safety, occupational regulation and rescue; research analogs require human-subject protections. M15’s analog-literature premise cannot create a universal governance standard across them.

Technical blockers include dozens of same-origin parent links that have no route in the standalone repo, a promised PDF absent from the deployment artifact, false-success API behavior, inaccessible controls, and an output whose dimensions are literally labelled “Dim 1” through “Dim 6.”

## 3. Complete route map

The only implemented route is `/`. The header/footer and related-module cards link to more than twenty same-origin paths copied from `nsag-site`; no corresponding files or rewrites exist. They must be absolute parent URLs or the standalone must redirect entirely to the canonical parent. The head advertises a nonexistent sitemap; privacy, terms and robots files are absent; `/api/track` is absent. The overview button requests `/pdfs/NSAG_M15_Overview.pdf`, also absent.

External destinations are the NASA/Stuster PDF, Kanas/Manzey DOI, Maslach DOI, Ulrich DOI, Outlook booking, Aloha AI, legacy RN portfolio, and M1/M8/M9 assessment deployments. Full classifications are in `ROUTE_CONTROL_LEDGER.md`. Live root/404 response verification was unavailable during this wave; route absence is established from the complete repository/config and explicitly not represented as observed HTTP status.

## 4. Complete interaction/control inventory

Controls include mobile nav; hover CE dropdown; hero/evidence/assessment anchors; 12 radio-question screens; mandatory email; tier and six dimension averages; clipboard; PDF email/download; booking CTAs; related modules; and floating contact modal/form. The simple questionnaire can execute without Chart.js, unlike prior modules, but auto-advance destroys the current question and provides no back/review, focus movement, evidence prompt, N/A, jurisdiction, role or uncertainty.

Assessment and download display success before/without establishing API acceptance. The PDF file does not exist. Contact clears/closes on any resolved HTTP response. Mobile menu and hover dropdown do not implement robust keyboard/focus/Escape behavior. No consequential forms were submitted.

## 5. Consumer journeys and observed results

A space or polar operator may recognize habitability concerns but receive no mission phase, hazard, crew composition, evacuation latency, communications delay, medical capability or regulator-specific assessment. A correctional leader can self-rate “Fully” without disclosing 22-hour cell time, duration, meaningful contact, reason, vulnerable groups, due process, healthcare, release criteria or independent review. A hospital can score “PIONEERING” without the tool asking whether seclusion is involuntary, immediately necessary, least restrictive, ordered, monitored, time-limited or reported. A resident/worker/affected person has no pathway at all.

After 12 rapidly advancing generic questions the purported immediate report is email-gated. Results provide a branded tier and anonymous “Dim” averages, no interpretation, legal boundary, evidence, urgent safety direction, next action or distinction among settings. The separate PDF conversion takes an email, claims it is opening a download, then targets a missing file.

## 6. Functional matrix

| Function | Status | Evidence |
|---|---|---|
| Static narrative/evidence cards | Working in source | Single HTML page. |
| Mobile nav | Partial | Toggle works; linked routes absent; focus/Escape incomplete. |
| 12-question progression | Working but unsafe/incomplete | Auto-advance and local state; no review or context. |
| Tier calculation | Working arithmetic, simulated validity | Authored averages/thresholds; no measurement basis. |
| Dimension report | Broken as meaningful output | Labels output only “Dim 1” etc.; no findings/limits/action. |
| Assessment email/API | Unverified | Result displays regardless of response; backend unavailable. |
| PDF download | Broken | File absent; API/file failure ignored. |
| Parent/module/resource navigation | Broken by architecture | Same-origin paths absent from repository. |
| Analytics | Broken | `/api/track` absent. |
| Contact | False success | HTTP errors not checked; exceptions silent. |
| Legal/clinical/operational readiness | Missing | Instrument asks none of the decisive requirements. |

## 7. Copy and information-architecture findings

“Isolation,” “confinement,” and “extreme environment” are not interchangeable. The first task is taxonomy:

- involuntary correctional/detention restrictive housing or solitary confinement;
- juvenile custody;
- involuntary psychiatric seclusion/restraint;
- infectious-disease/medical protective isolation;
- residential/long-term-care restrictions;
- consensual occupational/mission confinement (space, subsea, polar, maritime, wilderness);
- human-subject analog research; and
- emergency shelter-in-place/evacuation.

Each needs a separate module, legal authority, user, duration/condition model, rights, safety outcome and escalation logic. “The ones people cannot leave” is rhetorically powerful but legally/operationally false: exit may be restricted, delayed, dangerous, ordered, medically contraindicated, contractually limited, or constitutionally protected in different ways. “All patterns are preventable,” “all stressors are governance choices,” and “most institutions lack frameworks” are unsupported absolutes.

The lone legal disclaimer does not cover medical, psychiatric, public-health, correctional, constitutional, international-human-rights, occupational-safety, maritime/military, aerospace, research-ethics, engineering, emergency, or classified-operational advice. The page needs explicit crisis language: it is not for deciding whether to isolate/confine, prolong, release, evacuate, abort, restrain, treat, discipline, or override a qualified authority in a live event.

## 8. Science/law/policy/regulatory claim ledger

| Claim/domain | Assessment | Required boundary/correction |
|---|---|---|
| Extended isolation causes “predictable” psychological/physiological degradation, preventable through institutional design | Harm evidence is substantial in involuntary solitary confinement, but response varies; causality, dose and setting matter. Not all risk is preventable, and design cannot legitimate prohibited confinement. | Scope by setting, duration, meaningful contact, baseline health, coercion and evidence quality; prioritize avoidance/least restriction and rights. |
| Analog research documents universal six-part governance framework | Stuster and Kanas/Manzey concern expedition/space analogs and cannot supply corrections, detention, hospital, disability or human-rights standards. | Treat analog evidence only within bounded mission design; use setting-specific authorities. |
| Quoted statements from Stuster, Kanas/Manzey, Maslach and Ulrich | They read as synthesized assertions rather than verified verbatim passages; page gives quotation marks without page numbers. | Verify exact text/page or remove quotation marks and cite accurate paraphrases. |
| Interpersonal issues, monotony and autonomy are “three most consistent predictors” | Unverified superlative/method. | State evidence design and limits; do not call every factor governable or non-individual. |
| Maslach six mismatches “produce analogous degradation” in confined environments | Unsupported extrapolation; burnout framework does not establish confinement harm or legal standard. | Remove causal/analog claim; use occupational context only. |
| Noise above 45 dBA causes cortisol/sleep fragmentation; natural light reduces length of stay; greater consequence everywhere | A single universal 45 dBA threshold is not established for every metric/setting; healthcare-design associations cannot be exported wholesale. | Use current setting/task/measurement-specific standards (NASA, OSHA, healthcare, correctional codes) and distinguish association from causation. |
| Acoustic ≤45 dBA is “PIONEERING” across settings | Unsafe false universality; operational alarms/communications, day/night metrics and standards differ. | Never substitute one number for applicable engineering requirements and hazard analysis. |
| Continuous psychological monitoring and predeployment cohesion assessment | Can implicate medical privacy, disability discrimination, informed consent, fitness-for-duty, labor, research and false-positive risks. | Define validated purpose, clinician independence, access, retention, appeal, no retaliation and regulator/labor review. |

**Corrections/detention.** The UN Nelson Mandela Rules define solitary confinement as at least 22 hours/day without meaningful human contact and prolonged solitary as more than 15 consecutive days; they prohibit indefinite/prolonged solitary, require last-resort exceptional use, independent review and protections for disability-related exacerbation. They are international minimum standards, not automatically identical to binding domestic law. In the United States, standards differ for convicted prisoners, pretrial/immigration detainees and youth; Eighth/Fourteenth Amendment, due process, ADA/Section 504, CRIPA, PREA, IDEA for eligible youth, federal/state/local rules, court orders and consent decrees may apply. M15 asks none of duration, reason, contact, notice/hearing, healthcare, disability, youth, pregnancy, LGBTQ+/protective custody, retaliation, release criteria, out-of-cell time, family/legal contact or independent inspection.

**Psychiatric/medical settings.** Under 42 CFR 482.13 for covered hospitals, seclusion is involuntary confinement alone from which a patient is prevented leaving; it may be used only for violent/self-destructive behavior and immediate physical safety, after less restrictive interventions are ineffective, with an authorized order, monitoring/evaluation, discontinuation as early as possible and death reporting. State law may be stricter. Infection isolation is different: clinical/public-health necessity, precautions, informed communication, disability/language access, least restriction, review and humane contact matter. M15 conflates both with astronaut/polar autonomy.

**Workers/crew/research.** OSHA “confined space” is a technical term for a space not designed for continuous occupancy with restricted entry/exit and specified physical hazards; it is not synonymous with social isolation. Permit-space hazard assessment, atmospheric control, attendant, permit, rescue capacity/drills and PPE are absent. Spaceflight requires current NASA-STD-3001/human-rating, program, medical and mission requirements; commercial operators, maritime/subsea, military, polar national programs and expeditions have distinct jurisdictions/contracts. Analog research requires IRB/ethics review, informed consent, withdrawal limits, adverse-event reporting and data protections—not a generic institutional tier.

## 9. Accessibility and responsive findings

Positive: native radio inputs/buttons and a mobile toggle. Defects: no skip link/main landmark; auto-advance changes content without focus or live announcement; no progress semantics; alert-only email error; dimension output lacks descriptive labels; clipboard has no result/error; dropdown is hover-dependent and not a disclosure button; modal lacks dialog roles/label/focus trap/Escape/focus return; fixed contact button can obscure mobile content; no reduced-motion or high-contrast treatment; inline styling complicates consistent focus visibility.

No evidence of 320/375 widths, 200/400% zoom, keyboard-only, screen reader, forced colors, reduced motion or cognitive-accessibility testing. Disability is not merely UI compliance: assessment content itself fails to protect people with psychiatric, intellectual/developmental, sensory, mobility and chronic-health disabilities from discriminatory isolation or inaccessible emergency/communication systems.

## 10. Brand-architecture findings

M15 is an NSAG research/prototype component; Aloha AI may be credited for implementation. It should not receive a standalone RN Selected Work card. The page says “Thirteen modules” and “All 13 Modules” despite M15/fifteen-module architecture; footer/JSON-LD still use legacy RN Builds and “AI Educator & Consultant.” Broken parent-relative navigation makes the module look like an incomplete copy of NSAG rather than an intentional component.

NSAG credibility is especially exposed because human confinement is a rights-and-safety field. Positioning analog-space scholarship as a correctional/clinical governance authority without the relevant disciplines could undermine the entire framework. Hawaiʻi grounding requires jurisdictional and community expertise—including state facilities, Native Hawaiian/Pacific community impacts, disability, labor and emergency context—not merely Honolulu copyright.

## 11. Business-model and conversion findings

There is no coherent single buyer. Space systems, correctional agencies, hospitals, long-term care, polar programs, navies, commercial subsea, expedition operators and research institutions have different authorities, procurement, confidentiality, liability and qualified-review needs. A generic discovery call after a self-score cannot responsibly bridge them.

The viable business path is narrower: choose one setting and offer a multidisciplinary, counsel/clinician/engineer/affected-person-led governance evidence review. For corrections that must include formerly incarcerated people, civil-rights/disability expertise, correctional medicine/mental health and jurisdictional counsel; for hospital seclusion, patient advocates and licensed clinical/compliance leadership; for space/polar/subsea, human factors, medicine, safety engineering, operations, labor/crew and mission authority. No framework/toolkit should promise compliance, safety, human-rights adequacy or outcome improvement without formal validation and professional ownership.

## 12. Security, privacy, data, and operational findings

Headers configure strong framing/HSTS/nosniff/permissions controls, but CSP permits unsafe-inline/unsafe-eval. Application architecture lacks testing, observability, versioning, incident response and truthful network failure handling. Same-origin navigation and PDF assets are missing.

Assessment sends email, tier and average to a general lead endpoint; download sends email before a missing file; contact accepts unrestricted sensitive text. There is no controller, purpose, consent separation, retention, deletion/access, recipients/processors, cross-border transfer, security or breach notice. No health/disability, correctional, employment, research, classified, security-sensitive, mission or incident data should be collected. Operational assessments could reveal facility vulnerabilities, evacuation triggers, crew health or security protocols; public lead infrastructure is inappropriate without threat modeling, classification/export-control review and strict minimization.

Psychological monitoring proposals need medical-record and employment privacy, ADA/fitness-for-duty, HIPAA where applicable, correctional confidentiality, research protections, anti-retaliation, role separation, clinician independence and emergency exceptions. Aggregate reporting requires small-cell/reidentification controls. Monitoring must never become coercive surveillance or punishment for help-seeking.

## 13. Defects ranked P0 blocking, P1 serious, P2 material, P3 polish

| Priority | Defect | Impact |
|---|---|---|
| P0 | One score collapses punitive custody, clinical seclusion, infection isolation and consensual extreme-environment work/research. | Unsafe legal/clinical/operational advice architecture. |
| P0 | Generic self-report presented as institutional readiness/human-rights governance. | False assurance in life/safety/rights decisions. |
| P0 | PDF promised but absent; false-success download. | Material delivery failure. |
| P1 | Dozens of parent-relative routes absent on standalone deployment. | Navigation/system failure. |
| P1 | Corrections duration/contact/due-process/disability/youth/health requirements absent. | Constitutional/human-rights risk. |
| P1 | Hospital seclusion rules and medical isolation distinction absent. | Patient-safety/regulatory risk. |
| P1 | OSHA/NASA/mission/rescue/research requirements omitted. | Worker/crew/research safety risk. |
| P1 | Universal 45 dBA, preventability, analog predictors and outcome assertions overstated. | Scientific/engineering misinformation. |
| P1 | Monitoring/privacy/anti-retaliation safeguards absent; lead API unverified. | Disability, employment, clinical and security risk. |
| P2 | Output says only Dim 1–Dim 6; email gate; no review/N/A/evidence. | Poor/invalid product value. |
| P2 | Dropdown, auto-advance, modal, errors/status accessibility defects. | Exclusion. |
| P2 | No privacy/terms/robots/sitemap; dead analytics. | Governance/discovery weakness. |
| P3 | “13 modules,” legacy portfolio/job title, mixed brand metadata. | Brand inconsistency. |

## 14. Exact remediation plan with file-level targets

1. **Stop public scoring:** in `index.html`, remove/email-disable assessment and claims until a setting-specific product exists; label prototype.
2. **Split taxonomy:** create separate correctional restrictive-housing, healthcare seclusion/isolation, and consensual mission/work/research scopes; do not share a tier or item bank.
3. **Rebuild claims:** verify quotations/page numbers; remove universal 45 dBA/preventability/superlatives; use current jurisdiction/setting authorities and evidence grading.
4. **Purpose-built instruments:** measure authority/purpose, voluntariness, duration, contact, conditions, affected group, disability/health, review, outcomes, incident history, exit/rescue and evidence. Add N/A/unknown and multi-party corroboration; no tier until validated.
5. **Rights/safety review:** formal corrections/human-rights, clinical/patient-rights, disability, labor/OSHA, NASA/human-factors, research-ethics and affected-person signoff as applicable.
6. **Navigation:** point parent routes to `https://nsag-site.vercel.app/...` or replace standalone root with canonical redirect; add real sitemap/robots/privacy/terms.
7. **Download:** add versioned accessible artifact and verify response before lead success, or remove PDF/email CTA.
8. **Data:** local results without email; ban sensitive/operational data; publish lifecycle; separate consent; secure setting-specific system if data ever becomes necessary.
9. **Network behavior:** await `response.ok`, timeout/retry, honest errors; audit `nsag-api`; remove broken `/api/track`.
10. **Accessibility/tests:** semantic landmarks, controlled focus/live regions, review navigation, labelled dimensions, accessible menu/dialog/errors; automated syntax/link/E2E/API-failure plus AT/mobile/zoom testing.

Release gate: no cross-setting score; exact authoritative sources and jurisdiction/effective dates; legal/clinical/engineering/research/affected-person review; no live-decision reliance; accessible complete flow; verified files/routes; transparent data lifecycle; incident and emergency boundaries; prospective validation before maturity language.

## 15. Recommended estate disposition

**C — component of NSAG, release-blocked.** Do not add a standalone portfolio card. If NSAG cannot fund setting-specific expert reconstruction, archive the assessment and retain only a carefully bounded research note about analog/extreme-environment habitability. Corrections and clinical seclusion should not be marketed from the analog framework without independent domain ownership.

## 16. Proposed RN Selected Work case-study corrections

Account for M15 inside the NSAG case study as an **early research prototype examining whether environment, autonomy, time, social contact and emergency exit can be translated into governance questions in selected extreme settings**. State explicitly that its current cross-setting assessment is not operational, validated, legal/clinical/engineering guidance, or evidence of institutional readiness; it is under review for setting separation, human-rights, patient rights, disability, worker/crew safety and research ethics. Remove live assessment/download CTA until verified.

## 17. Evidence appendix: sources, logs, and explicit unverified areas

Stage A inspected the complete private repository tree, all 43,164 bytes of source through the GitHub connector, config/commit metadata, every route/link/control/question/score/payload/result/download/contact behavior, citations and RN Selected Work relationship. No source files were modified.

Primary/authoritative anchors:

- UN Nelson Mandela Rules hub and General Assembly adoption: `https://www.un.org/en/events/mandeladay/mandela_rules.shtml`.
- U.S. DOJ correctional isolation/disability findings and current case summaries: `https://www.justice.gov/archives/opa/pr/justice-department-finds-pennsylvania-state-prison-s-use-solitary-confinement-violates-rights`; `https://www.justice.gov/crt/special-litigation-section-case-summaries`.
- Hospital restraint/seclusion patient rights, 42 CFR 482.13: `https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.13`.
- OSHA permit-required confined spaces, 29 CFR 1910.146: `https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.146`.
- NASA current Human Integration Design Handbook and NASA-STD-3001 Volume 2: `https://www.nasa.gov/organizations/ochmo/human-integration-design-handbook/`; `https://standards.nasa.gov/standard/NASA/NASA-STD-3001_VOL_2`.
- Site-cited Stuster report: `https://humanresearchroadmap.nasa.gov/evidence/reports/Stuster.pdf`.
- Site-cited Kanas/Manzey: `https://doi.org/10.1007/978-1-4020-6770-9`; Maslach et al.: `https://doi.org/10.1146/annurev.psych.52.1.397`; Ulrich et al.: `https://doi.org/10.1177/193758670800100306`.

Explicitly unverified: live root and inferred 404 HTTP responses during this wave; deployment-to-blob equality; external API CORS/auth/storage/recipients/security/retention/deletion; Vercel analytics; claimed quotations and exact page support; “most institutions” premise; any assessment validation, cohort, client outcome, PDF elsewhere, user research or accessibility-device testing. Constitutional, detention, clinical, disability, occupational, military/maritime, aerospace, research and international rules depend on setting, person, authority, jurisdiction and date. This audit is not legal, clinical, correctional, engineering, safety, mission or research advice.
