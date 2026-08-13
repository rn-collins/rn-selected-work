# NSAG M10 — Stage A Audit Dossier

Audit date: 2026-08-12 (HST)  
Companion: [`ROUTE_CONTROL_LEDGER.md`](./ROUTE_CONTROL_LEDGER.md)

## 1. Asset identity

- **Asset:** M10 Governance Challenge — Healthcare Built Environment.
- **Canonical deployment:** `https://nsag-m10.vercel.app/`; Vercel project `nsag-m10`, ID `prj_odPBOItfCf89P7A8lUgeqBNljzYW`.
- **Latest production:** `dpl_6uAbPpqtUwNQtDKfRrGsA5hQkEjL`, READY, exact commit `7de8fa829c991503695bf61cf2f274db385d706d`; aliases include canonical, project-owner, and branch forms.
- **Repository:** private `rn-collins/nsag-m10`, GitHub ID `1285740050`. Vercel directly names repo, ID, branch, commit, and visibility; linkage is verified, not inferred.
- **Architecture:** `.gitignore`, one ~71 KB `index.html`, and `vercel.json`; no framework, package/lockfile, README, tests, CI, or source/content separation. Vercel cloned the stated commit and emitted static output in 19 ms.
- **Parent/owner:** NSAG → M10. Aloha AI is implementation credit.
- **Privacy:** public consumer UI/private code. Email plus tier, percentage, six dimension scores, source, and timestamp can leave the browser for `nsag-api`; contact/waitlist also use it. No privacy/terms route.

## 2. Executive verdict

M10 is a clinically consequential but non-completable governance quiz. The static content is more dimension-specific than M5–M7, but its live dependency architecture prevents progression: CSP blocks Chart.js, and answer 1 calls `updateRadar()` on the missing chart. The PDF is doubly absent because jsPDF is blocked and `generateResultPDF()` has no call site.

The 12 items have reasonable **face alignment** to six proposed domains, but they are not a validated healthcare-facility instrument. They conflate evidence-based design, facility code, patient safety, accreditation, clinical workflow, disability access, occupational health, trauma accommodation, and capital governance; make each “best” answer an unsupported prescribed bundle; omit critical infection-control/environmental-health and regulatory domains; and infer institutional maturity from one respondent. Claims that 600 studies “confirm” effects, that an early-stage environment is “very likely producing measurable, avoidable harm,” and that Magnet renewal should include these criteria exceed the disclosed evidence.

Recommended disposition: **C — NSAG component**, release-blocked. Do not create a standalone RN Selected Work card.

## 3. Complete route map

Only `/` exists. Robots, advertised sitemap, custom analytics endpoint, and unknown routes return 404. No methodology, sources, privacy, terms, accessibility, facility-code map, clinical evidence, report recovery, support, toolkit, or checkout route exists. Full destinations/statuses are in the companion ledger.

## 4. Complete interaction/control inventory

The interface defines Begin, four facility types, Continue, 48 answer buttons, later Back buttons, keyboard shortcuts, email gate, result/share/print/retake, toolkit/advisory/booking CTAs, and a contact modal. All post-answer-one controls are **unreachable**, not working. No consequential submission occurred.

## 5. Consumer journeys and observed results

The page clearly targets facilities directors, clinical quality leaders, and capital teams, promising a dimension-by-dimension view of evidence versus budget. A user can read substantive examples and choose a facility type. Production CSP permits same-origin scripts only while Chart.js/jsPDF are external. `initRadar()` therefore lacks `Chart`; the first answer then invokes unguarded `chart.data`, preventing its scheduled transition to question 2.

Facility choice is simulated personalization: `selectedSector` defaults inexplicably to `legal-aid`, is overwritten by selection, and is never read. Hospital, clinic, behavioral health, and long-term care users receive identical ICU-heavy items and recommendations despite different codes, licensure, patient risks, authority, and operations.

Results/export are unreachable. The PDF generator is never invoked; no server-side generation or emailed-delivery implementation exists here. Answers persist only in memory; no save, resume, versioned record, evidence upload, permalink, or recovery exists. Waitlist/contact show success without reliable success confirmation.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Intro/deep dive | Working statically | Public HTML. |
| Facility selector | Cosmetic | Stored value never consumed. |
| 12-question assessment | Broken | First answer depends on CSP-blocked chart. |
| Radar | Broken | Chart.js unavailable. |
| Dimension content | Partial | Face-aligned, incomplete, prescriptive, unvalidated. |
| Tier/recommendation | Simulated/unreachable | Fixed thresholds and prose. |
| PDF/email report | Missing/broken | jsPDF blocked; generator never called; delivery unestablished. |
| Copy/share/print/retake | Unreachable | Result-only. |
| Toolkit | Waitlist only | $500 product unavailable; fulfillment unverified. |
| API/contact | Unreliable | False-success logic. |
| Sources/methodology | Missing | No inline links or validation record. |

### Does it measure each stated dimension?

| Dimension | Face coverage | Measurement verdict |
|---|---|---|
| Acoustic Standards | ICU night noise plus capital brief | Partial. It asks policy presence, not measured dBA/LAeq/LAFmax, location/time/source, speech privacy, alarms, reverberation, outcomes, calibration, or applicable FGI/ANSI/local standard. “NC-40 or equivalent for sleep areas” is presented without an authoritative basis and NC is a background-noise criterion, not a complete patient-sleep standard. |
| Lighting & Circadian Governance | Patient and staff schedules | Partial. It does not capture illuminance/spectrum/timing/dose, daylight, task/safety needs, medication/clinical confounders, individual tolerance, shift scheduling, outcomes, or authoritative thresholds. “Supports melatonin production” is an oversimplified design prescription. |
| Single-Room & Privacy | Room assignment and trauma accommodation | Partial. It mixes infection, privacy, consent, trauma, visitors, bed capacity, and dignity. It omits isolation category, ventilation/pressure, cohorting, observation/suicide safety, fall risk, accessibility, family/caregiver needs, operational tradeoffs, and applicable consent law. |
| Wayfinding & Cognitive Load | Stroke journey and discharge sequence | Partial. It tests preferred process features, not accessibility performance. It omits visual/hearing/mobility/intellectual disabilities, language, digital wayfinding, tactile/audible signs, ADA routes/signage, egress, user testing metrics, missed-care outcomes, and reasonable modifications. |
| Nature Integration | Patient/staff views and outdoor breaks | Weak/partial. It conflates daylight, views, plants, images, equitable access, scheduling, and occupational policy. Infection-control restrictions can prohibit plants in protective environments; weather, security, allergy, fall, elopement, and clinical constraints are absent. |
| Sensory Environment | thermal/air/sensory bundle plus Magnet | Weak. One triple-barreled item cannot measure temperature, humidity, ventilation, air quality, odor, alarm/light/touch load, neurodivergence, or patient experience. The Magnet item measures documentation strategy, not sensory governance, and no public ANCC source establishes the claimed requirement. |

Scoring is the shared 4/3/2/1 obvious-order model: average ≥3.5 PIONEERING, ≥2.5 EMERGING, ≥1.5 DEVELOPING, otherwise EARLY; two-item sums Strong ≥7, Partial ≥5, Emerging ≥3, otherwise Absent. There is no validation, reliability, criterion, weighting rationale, evidence requirement, unknown/NA, jurisdiction, facility-size/risk adjustment, respondent authority, multi-rater check, confidence, or outcomes audit. The lowest domain is not automatically “highest leverage.”

## 7. Copy and information-architecture findings

Strengths: concrete situations, clear audience, six scannable dimensions, explicit educational/nonvalidated note, and an August 2026 review marker.

Material defects:

- “Six hundred studies confirm” compresses a 2008 review of 600+ studies into universal causal confirmation; its evidence varied by intervention/outcome and is now 18 years old.
- “Most facilities teams don't know” and “most capital planning” prevalence claims have no data.
- “Produce measurable effects” and “the gap is governance, not evidence” erase uncertainty and implementation/context differences.
- EARLY copy says the environment is “very likely producing measurable, avoidable harm” based only on one self-report.
- “PIONEERING institutions,” typical one-cycle progress, peer benchmarks, “exact tier,” and highest-leverage gap are unsupported.
- A behavioral-health-hospital story claims 28% better sleep in six months without source or hypothetical label.
- A mid-size hospital story is likewise unverified.
- “Your M1 governance tier” remains in the M10 cinematic reveal.
- A generic result sentence about “environmental awareness” or “trained staff” is not evidence-specific.
- Email copy says answers stay in-browser while derived answers/scores leave it.
- Report “receive/download” language is false in current implementation.
- Legal-only disclaimer is inadequate for clinical, public-health, architecture, accreditation, disability, occupational-safety, and facility-regulatory recommendations.

## 8. Science/law/policy/regulatory claim ledger

| Claim/recommendation | Verdict | Required boundary/correction |
|---|---|---|
| “Six hundred studies confirm” acoustic, lighting, single rooms, nature effects | Evidence base exists; wording overstates | Ulrich et al. (2008) reviewed 600+ studies and found growing evidence, especially infection reduction, while identifying research needs. Cite it accurately, update with domain-specific reviews, distinguish association/intervention/setting/outcome, and avoid “confirm.” |
| Noise above “comfortable thresholds”; NC-40 sleep standard; continuous monitoring | Unspecified/possibly misapplied | Identify current FGI/ANSI/ASHRAE/local requirements and the correct acoustic metric. NC alone is not continuous patient-noise exposure. Separate background HVAC noise, alarms, speech privacy, peaks, reverberation, clinical safety, and patient sleep. |
| ICU noise/light cause sleep disruption and delirium risk | Plausible, causality/intervention effectiveness varies | Cite current ICU systematic reviews and delirium guidance; control for illness, care interruptions, medication, ventilation, alarms, and shift practices. Do not infer harm from absent policy alone. |
| Circadian schedules/melatonin suppression plan | Research-grounded but prescriptive | Specify population, spectral/temporal exposure, patient versus staff needs, task safety, ophthalmic/neurologic factors, and current professional lighting standards. “Break-room lighting supports melatonin production” is not a universal clinical standard. |
| Single rooms reduce infection and protect privacy | Supported in some settings, not universal | Recent ICU meta-analysis reports lower infections but relies on observational/quasi-experimental studies; a geriatric cohort calls findings hypothesis-generating. Integrate ventilation/isolation/cohorting/workflow and countervailing observation/isolation risks. |
| Patient consent before shared-room assignment | Unsupported as universal requirement | Consent, accommodation, privacy, capacity, bed scarcity, emergency, payer, and local law differ. Label as proposed policy and obtain legal/clinical/operations review. |
| Trauma-informed room assignment/reassignment without burden | Ethically plausible, operational/legal specifics unsupported | Define screening/consent, confidentiality, alternatives, safety, capacity, protected disability status, and resource limits; avoid soliciting trauma history without a safe care pathway. |
| Landmark wayfinding and unsolicited escort are best practice | Plausible design options, not universal standard | ADA requires accessible routes and technical signage but does not establish this entire bundle. Include disabled users and test multiple modes; do not equate stroke with one cognitive profile. |
| Discharge cognitive load creates patient-safety consequences | Plausible | Measure errors, delays, missed services, comprehension, language, disability, caregiver support, and actual outcomes. Process complexity is not solely built environment. |
| Nature views/access improve recovery/stress | Some evidence, scope limited | Ulrich 1984 examined 46 matched cholecystectomy patients retrospectively. Do not generalize to every patient/staff outcome. Plants can be prohibited in protective environments; include infection, allergy, security, climate, and equity. |
| Built-environment criteria should be Magnet renewal evidence | Not established publicly | Magnet concerns nursing excellence and empirical outcomes. The public ANCC model does not establish M10's six criteria as renewal requirements. Verify against the licensed current manual or remove “should be” as accreditation guidance. |
| Code compliance is merely baseline and misses health effects | Sometimes true, overbroad | Facility law is jurisdiction/version-specific and can incorporate FGI, state licensure, fire/life safety, ADA, ASHRAE, infection-control, accreditor, and payer requirements. Map authority and effective date. |
| Sensory standard governs thermal comfort/air quality/load quarterly | Normative bundle | CDC/ASHRAE/FGI environmental controls vary by clinical space and risk. Infection control requires pressure, ACH, filtration, construction risk, water, surfaces, and more; patient satisfaction is not sufficient safety evidence. |
| 28% sleep improvement case; typical one-cycle improvement | Unverifiable | Fully source or label hypothetical/composite; remove service-outcome/general improvement claim absent transparent data. |

### Missing safety/regulatory domains

The claimed healthcare-built-environment tier omits ventilation/pressure/ACH/filtration; infection-control risk assessment for construction; water management/Legionella; surface/material cleaning; hand hygiene infrastructure; fire/life safety and egress; medication/procedure/task lighting; fall prevention; ligature/self-harm/elopement risk in behavioral health; emergency power; accessibility of patient rooms/equipment/toilets/parking/routes; radiation and hazardous materials; resilience/emergency operations; occupational safety; and state facility licensing. These omissions make institution-wide “maturity” conclusions unsafe.

The ADA 2010 Standards impose enforceable route, signage, parking, and medical-care-room requirements for covered facilities, including sections 223 and 805. M10's “cognitive accessibility” cannot substitute for ADA/Section 504/1557 or state-code review. CDC environmental guidance also shows that design requirements vary by clinical zone and authority; plants are specifically inappropriate in some protective environments.

## 9. Accessibility and responsive findings

Positive: `lang=en`, viewport, visible focus CSS, reduced-motion rule, semantic answer buttons, keyboard shortcuts, and mobile breakpoint.

Defects: runtime block; inactive screens remain in accessibility tree because opacity/pointer-events replace `hidden`/`inert`; no fieldset/radio semantics or programmatic selected state; no visible/live email error; canvas has no table/text equivalent; radar vanishes on mobile; timed rationale/auto-advance is not user-controlled; contact overlay lacks dialog role/name, `aria-modal`, labels, focus management, working Escape, and restoration; fixed CTA may overlap. PDF accessibility cannot be tested because no PDF can be produced.

Physical device, screen reader, measured contrast, 200%/400% reflow, touch, print, and downloadable-output testing remain unverified.

## 10. Brand-architecture findings

Correct hierarchy is **NSAG → M10**, with Aloha AI as possible implementation layer. It is not an independent RN Builds product. Old `rn-portfolio-khaki` and JSON-LD “AI Educator & Consultant” weaken the distinct institutional-design identity. The topic could be a credible NSAG application only with clinical/facility expertise, evidence governance, and explicit professional boundaries; current overclaiming creates disproportionate trust risk.

## 11. Business-model and conversion findings

- **Users:** facilities/capital leaders, clinical quality, infection prevention, nursing, patient experience, architects/engineers, accessibility staff.
- **Buyers:** health-system executives, facilities/capital programs, quality/safety, foundations, design firms.
- **Role:** free diagnostic lead magnet for $500 toolkit, advisory, discovery, cohorts, sibling modules.
- **Potential value:** a facilitated multidisciplinary evidence-to-design governance process.
- **Barriers:** broken delivery, no clinical/facility credentials or reviewers, absent citations, invalid score, incomplete code scope, accreditation overreach, unclear privacy/fulfillment.

Toolkit license, deliverables, update cycle, applicable jurisdictions, expert review, support, refund, procurement, accessibility, liability, data processing, and availability are absent. A safer offer is a scoped workshop/checklist that routes each topic to facilities, infection prevention, clinical safety, accessibility, counsel, and affected users—without maturity scoring.

## 12. Security, privacy, data, and operational findings

- CSP blocks core dependencies while allowing `'unsafe-inline'`/`'unsafe-eval'`.
- CDN dependencies lack local version management/integrity.
- Derived response data leave the browser contrary to the plain-language expectation.
- Optional follow-up is bundled with report access; no separate consent or privacy notice.
- Email validation is an `@` check.
- Contact/waitlist display false success; contact treats rejection as “inquiry received.”
- `/api/track` 404s silently; Vercel analytics/speed scripts are undisclosed.
- Positive headers: HSTS, frame denial, nosniff, permissions, referrer policy.
- No tests, CI, dependency/build controls, monitoring, evidence register, clinical/regulatory review log, version governance, or incident/support process.

## 13. Defects by priority

### P0 — blocking

1. Assessment crashes on answer 1 because CSP blocks Chart.js.
2. PDF cannot exist: jsPDF blocked and generator never invoked.

### P1 — serious

1. Unvalidated one-respondent score presented as institutional clinical/environmental maturity.
2. “600 studies,” harm, outcomes, Magnet, NC-40, circadian, consent, and case claims exceed evidence/boundaries.
3. Critical infection-control, environmental-health, accessibility, code, and behavioral-health safety domains omitted.
4. Privacy/consent mismatch and false-success API behavior.
5. Facility selector is simulated; ICU questions misfit clinic/LTC/behavioral contexts.
6. Screen/dialog accessibility failures.

### P2 — material

1. M1 reveal text, generic result language, old portfolio/schema links.
2. No methodology, citations, jurisdiction/code map, privacy/terms/support/toolkit detail.
3. Missing robots/sitemap/canonical and broken analytics endpoint.
4. No evidence capture, multi-rater, save/resume, result permalink, or report recovery.

### P3 — polish

1. Remove categorical/urgent conversion prose.
2. Complete contrast, reflow, touch, motion, print, and output QA after repair.

## 14. Exact remediation plan

File targets currently are `index.html` and `vercel.json`.

1. Vendor/bundle Chart.js/jsPDF or narrowly permit exact origins with integrity; remove unnecessary unsafe CSP allowances; guard progression from visualization failure.
2. Invoke and test a real accessible report or remove email/PDF promises.
3. Add production E2E tests for all facility types, 12 questions, keyboard/Back, thresholds/ties, validation, results/export/retake, API failure, responsive states.
4. Recast as a non-scored readiness conversation or develop/validate constructs with healthcare-design, clinical safety, infection-prevention, accessibility, psychometrics, facilities engineering, architecture, nursing, patient/community, and legal experts.
5. Add facility/jurisdiction/project/risk/authority branching; unknown/NA; evidence fields; multi-rater reconciliation; confidence and outcome checks.
6. Split dimensions and cover the missing safety/regulatory domains, or sharply narrow the claimed scope.
7. Publish claim-level evidence with setting, design, sample, date, transfer limits, standard/version, authority, and review owner. Correct “600 studies”; source/remove case and improvement claims.
8. Remove Magnet requirement language unless verified against the current licensed manual with permission; map ADA/Section 504/1557, FGI adoption, state licensure, fire code, CDC/ASHRAE, accreditor, and local authority without implying legal advice.
9. Implement genuine facility-specific paths or remove selector.
10. Publish privacy/terms/data retention; disclose derived-data transfer/analytics; separate marketing consent.
11. Require `response.ok`; add pending/error/retry/support and genuine delivery confirmation.
12. Repair hidden/inert state, radio semantics, live errors, chart alternative, modal/focus/Escape, mobile equivalence, and accessible PDF/print.
13. Modularize content/scoring/privacy/citations; add package/lockfile, CI, monitoring, evidence/clinical review workflow.
14. Fix M1 residue, schema, canonical/robots/sitemap, and NSAG/Aloha/RN links.
15. Repeat full Stage A in production before promotion.

## 15. Recommended estate disposition

**C — component**, under canonical NSAG, with release hold.

M10 is a numbered module using the shared NSAG assessment/conversion architecture and sibling links. It does not warrant an independent portfolio case study. Consolidation into the parent could later make the standalone deployment X/superseded, but current evidence supports C.

## 16. Proposed RN Selected Work case-study corrections

Do not add a separate M10 card. Under the NSAG parent, identify it as a deployed **prototype healthcare-built-environment reflection**. State that current production is not operational beyond answer 1; its six-domain output is an unvalidated, single-respondent educational rubric, not a facility audit, clinical safety assessment, infection-control review, accessibility/code determination, accreditation review, or institutional maturity measure. PDF/email delivery, facility personalization, toolkit, benchmarking, and claimed outcomes are unestablished.

Only promote after remediation, expert/evidence review, transparent methodology/privacy, and production verification.

## 17. Evidence appendix

### Deployment/repository

- Vercel project `prj_odPBOItfCf89P7A8lUgeqBNljzYW`; production `dpl_6uAbPpqtUwNQtDKfRrGsA5hQkEjL`; commit `7de8fa829c991503695bf61cf2f274db385d706d`.
- GitHub `rn-collins/nsag-m10`, ID `1285740050`; exact metadata link.
- Build log: clone exact commit; static output 19 ms; no compile/test.
- Repo files: `.gitignore`, `index.html`, `vercel.json`.
- `/` 200; robots/sitemap/analytics/unknown 404; lead API GET 405.
- CSP excludes both script CDNs. `generateResultPDF(` occurs only at its definition. `selectedSector` is not consumed.

### Strongest checked sources

- Ulrich RS et al., 2008 evidence-based healthcare design review, DOI `10.1177/193758670800100306`: `https://journals.sagepub.com/doi/abs/10.1177/193758670800100306`
- Ulrich RS, 1984 nature-view study, DOI `10.1126/science.6143402`: `https://pubmed.ncbi.nlm.nih.gov/6143402/`
- 2024 ICU single-room systematic review/meta-analysis, PMID `38915762`: `https://pubmed.ncbi.nlm.nih.gov/38915762/`
- CDC environmental infection-control air/construction guidance: `https://www.cdc.gov/infection-control/hcp/environmental-control/air.html`
- CDC protective-environment requirements and plant restriction: `https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-table-5.html`
- DOJ 2010 ADA Standards, including medical facilities and signage/routes: `https://www.ada.gov/law-and-regs/design-standards/2010-stds/`
- ANCC public Magnet Model: `https://www.nursingworld.org/organizational-programs/magnet/magnet-model/`

### Explicitly unverified

- Browser automation daemon could not launch in this sandbox; Stage B must reproduce the deterministic CSP/answer failure in a production browser and capture console/network screenshots.
- No contact, report, waitlist, booking, purchase, marketing, legal, or medical form was submitted.
- Private API code/storage/CRM/retention/security/email/deletion are outside this repo.
- Questions 2–12, gate, results, report, and conversions are unreachable and were statically inspected.
- Current proprietary FGI, ANSI acoustic, ASHRAE, and Magnet manuals were not available; the site must not imply their precise requirements without licensed/current verification.
- Physical device, screen reader, contrast, zoom/reflow, print, and PDF testing remain pending.

Vercel READY establishes static deployment, not a functioning assessment, clinically valid instrument, or compliant facility review.
