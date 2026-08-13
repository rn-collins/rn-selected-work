# NSAG M7 — Stage A Audit Dossier

Audit date: 2026-08-12 (HST)  
Companion evidence: [`ROUTE_CONTROL_LEDGER.md`](./ROUTE_CONTROL_LEDGER.md)

## 1. Asset identity

- **Asset:** M7 Governance Challenge — Conscious Cities.
- **Canonical production:** `https://nsag-m7.vercel.app/`; Vercel project `nsag-m7`, ID `prj_CYc6uvnW0SiA4NBxBclvKAp6ESbE`.
- **Latest observed deployment:** `dpl_2ohKYzFvWkkBPJUUUAczpQJHEiZt`, READY, production, from commit `7e6600f6962e22ec999c4debca0b0ed683e85af2`.
- **Repository:** private `rn-collins/nsag-m7`, GitHub ID `1285739912`. Vercel metadata directly identifies repository, branch, ID, and commit; this relationship is verified.
- **Architecture:** `.gitignore`, 70,578-byte `index.html`, and `vercel.json`; no framework, package manifest, lockfile, README, tests, CI, or content/source separation. Vercel cloned the stated commit and emitted static output in 16 ms.
- **Ownership:** NSAG → M7 component. Aloha AI is implementation credit, not the parent practice.
- **Data boundary:** public interface/private source. The browser can POST email, tier, percent, six dimension scores, source, and timestamp to `nsag-api`; contact and waitlist use the same service. No linked privacy or terms notice exists.

## 2. Executive verdict

M7 is a polished-looking but non-completable lead-generation quiz. A user can read the introduction, choose a sector, and answer question 1. Chart.js is blocked by the site's own CSP, and the first answer dereferences the missing chart, halting the journey. Scoring, recommendations, result, toolkit, and report are therefore unreachable. The promised PDF is independently broken: jsPDF is blocked and `generateResultPDF()` is defined but never called.

Even if runtime were repaired, the instrument does **not measure its six named conscious-city dimensions**. Its twelve questions are six duplicated pairs of the same generic governance-formalization prompt and the same four visibly ordered answers. The only variable is the inserted dimension label. It therefore measures a respondent's repeated self-description of documentation, monitoring, review, and accountability—not mental-health impact assessment, green-space equity, acoustics, housing, mobility, participation, surveillance, or outcomes. Several rationales are shifted onto the wrong questions.

Recommended disposition: **C — NSAG component**, under release hold. Do not create a standalone RN Selected Work card.

Top risks: P0 runtime/PDF failure; P1 invalid measurement presented as an institutional tier; P1 unsupported improvement/case claims; P1 privacy/consent mismatch; P1 public-health and legal-policy overreach without methodology, jurisdiction, or citations; P1 accessibility defects.

## 3. Complete route map

`/` is the sole application route. `robots.txt`, `sitemap.xml`, `/api/track`, and unknown paths return 404. The advertised sitemap is absent. There is no methodology, evidence library, privacy, terms, accessibility, report-retrieval, result permalink, support, toolkit, purchase, or jurisdiction route. All destinations and status results are in the companion ledger.

## 4. Complete interaction/control inventory

Controls include Begin; four sector choices; Continue; 48 generated answer buttons; later Back controls; A/B/C/D shortcuts; email gate; copy/share/print/retake; tier-specific waitlist/advisory/booking CTAs; and a three-field contact modal. Source-defined controls after question 1 are classified **unreachable**, not working. No consequential form was submitted.

## 5. Consumer journeys and observed results

### Primary journey

1. Loaded the legal-only disclaimer, thesis, audience, six dimensions, and Begin CTA.
2. Chose Urban Planning Department and continued.
3. Answered A on question 1.
4. Buttons disabled/disappeared and the interface stopped.

Console: `ReferenceError: Chart is not defined at initRadar`; then `TypeError: Cannot read properties of undefined (reading 'data') at updateRadar`.

### Personalization

The sector is stored as `selectedSector` but never read. Urban departments, local governments, developers, and designers receive identical prompts, scoring, and recommendations. This is simulated personalization and ignores authority, geography, project type, public/private role, and affected communities.

### Report/export and persistence

Results are unreachable. Static inspection shows hard-coded tiers and a jsPDF function with no invocation. Fixing CSP alone would not produce a PDF or email delivery. Raw answers are in memory; there is no save/resume, result URL, history, evidence attachment, versioned record, or recovery after refresh.

### Conversion/error paths

Waitlist UI declares success before the network outcome. Contact clears/closes on any resolved response without checking `response.ok`; failures are swallowed. There are no pending, failure, retry, support, or report-delivery states.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Intro/deep dive | Working | Visible live. |
| Sector selector | Cosmetic | Stored, never used. |
| 12-question assessment | Broken | Stops after answer 1. |
| Radar | Broken | Chart.js blocked by CSP. |
| Scoring | Unvalidated, non-substantive, unreachable | Source reviewed. |
| Tier/recommendations | Simulated/unreachable | Four fixed bands. |
| PDF/email report | Missing/broken | Library blocked; generator never called; delivery absent here. |
| Copy/share/print/retake | Unreachable | Result-only. |
| $500 toolkit | Waitlist only | Contents/fulfillment unavailable. |
| Contact/waitlist | Unreliable | False-success logic. |
| Analytics | Broken/undisclosed | `/api/track` 404; Vercel scripts present. |
| Sources/methodology | Missing | Named papers not linked; no validation evidence. |

### What scoring actually measures

Each of the six dimensions receives two identical prompts: “What does your current governance infrastructure provide for [dimension]?” The answers are identical everywhere: formal standards/independent monitoring/quarterly review/named accountability (4); generally followed standards/informal monitoring (3); individual champions (2); not formally addressed (1). The duplicate pair adds no information while doubling apparent instrument length.

Overall average maps to PIONEERING ≥3.5, EMERGING ≥2.5, DEVELOPING ≥1.5, else EARLY STAGE. Two-item sums map Strong ≥7, Partial ≥5, Emerging ≥3, else Absent. No validation, benchmark sample, reliability, criterion, weighting rationale, uncertainty, reverse item, unknown/NA, evidence submission, jurisdiction, respondent authority, multi-stakeholder reconciliation, or outcome check exists. Obvious “best” options maximize social-desirability bias.

It does not ask about MHIA methods or thresholds; green-space access, quality, displacement, maintenance, or heat; decibel metrics, source, and time; housing habitability, affordability, density tradeoffs, or displacement; transit distribution, disability access, or safety; community decision power or compensation; surveillance, sensors, facial recognition, policing, data governance, procurement, retention, or disparate impact; environmental justice; baseline/outcome measures. The scoring cannot support an “exact tier,” maturity, peer comparison, or “highest-leverage” conclusion.

## 7. Copy and information-architecture findings

Strengths: the subject is meaningful; six headings are understandable; audience/freshness notes are explicit; the page calls itself educational and nonvalidated.

Material defects:

- Metadata still promises that 12 scenarios “reveal” a governance tier.
- Barrett's classroom finding is transferred to cities and mental-health governance without stating its primary-school/classroom scope.
- Evans is described as “confirming” independent mental-health determinants; the 2003 paper is a review with substantial methodological cautions, not a single multivariable city-governance validation study.
- “Most planning processes” and “typically not subject to formal sign-off” are broad uncited prevalence claims.
- PIONEERING copy declares actual governance status from one unverified respondent.
- “Most institutions at this tier reach PIONEERING within one planning cycle” has no disclosed dataset.
- Claimed mid-sized department/city outcomes are uncited and not labeled hypothetical or composite.
- Rationales are misindexed: question 2 (mental health) explains green-space equity; q3 green space explains acoustics; q4 green space explains density; q5 acoustics explains mobility; q6 acoustics explains participation; later rationales likewise drift.
- Result insight retains generic “trained staff” and “physical/procedural governance” language rather than dimension-specific evidence.
- “Answers stay in your browser” omits transmission of email-linked derived answers/scores.
- “Receive” and immediate “download” PDF promises conflict; neither is implemented.

## 8. Science/law/policy/regulatory claim ledger

No claim has an inline source link.

| Claim | Verdict | Required correction/boundary |
|---|---|---|
| Seven design parameters explain 16% of academic progress | Numerically supported, context stripped | Barrett et al. assessed 3,766 pupils in 153 classrooms at 27 schools. The parameters were light, temperature, air quality, ownership, flexibility, complexity, and colour. This is classroom learning-rate evidence, not citywide mental-health impact, institutional maturity, or validation of M7. |
| Evans (2003) confirmed neighborhood disorder, noise, and green space as independent mental-health determinants | Mischaracterized/overstated | Evans is a narrative evidence review. It discusses housing, crowding, noise, daylight, toxins, control, social support, and restoration; it explicitly notes methodological limitations. The page's precise “independent” three-factor statement is not established by the cited paper as written. |
| Built environment affects mental health | Generally supported | WHO and research support multiple pathways, but magnitude, causality, population, exposure, equity, and context vary. Preserve uncertainty and cite current syntheses. |
| Green space improves mental health and equity | Plausible with qualifications | WHO describes potential relaxation, cohesion, activity, pollution/noise/heat pathways and stresses access/quality. Benefits are not automatic; distribution, safety, maintenance, displacement, allergens, vectors, and other risks matter. |
| Acoustic environment is a health-governance issue | Supported generally | WHO links environmental noise to annoyance, sleep, cardiovascular and cognitive harms, with growing mental-health evidence. Standards require source-, time-, exposure-, jurisdiction-, and population-specific metrics; M7 measures none. |
| Housing quality and density affect mental health | General relationship supported; density framing oversimplified | Evans reports crowding/noise/poor quality concerns with methodological limits. WHO notes both dense-settlement risks and low-density accessibility/activity harms. Do not equate density itself with pathology. Include affordability, habitability, displacement, segregation, services, and household composition. |
| Mobility/access equity and participation are governed determinants | Plausible policy framework, not measured here | Define applicable transportation, disability-access, civil-rights, zoning, public-participation, environmental-review, and procurement law by jurisdiction and project. A generic score cannot determine compliance or equity. |
| “Conscious Cities” is an established measurable governance standard | Not demonstrated | Define provenance and whether it is NSAG's framework. Distinguish research concept, normative proposal, professional practice, and binding legal standard. |
| “Most institutions” improve in one planning cycle | Unsupported outcome claim | Publish cohort definition, baseline, instrument version, sample, follow-up, missingness, and independent analysis—or remove. |
| Mid-size department added maps/statements/community reviewers; city MHIA changed four projects in two years | Unverifiable | Source fully or label clearly as hypothetical/composite. |
| One standing requirement before the next capital project is the appropriate action | Normative and context-dependent | Capital planning, zoning, environmental review, public health, procurement, budgeting, and council authority differ. Require local legal, technical, community, and accessibility review. |

### Surveillance/equity finding

The requested surveillance/equity lens exposes a major omission: the tool contains **zero substantive items** on public-space sensing, facial recognition, predictive policing, license-plate readers, mobility/app data, smart-city vendors, procurement, consent, purpose limitation, retention, security, community oversight, disparate impact, or remedies. A “Conscious Cities” governance score that omits technology-enabled surveillance and data power cannot credibly characterize urban equity governance.

### Professional/jurisdiction boundary

The banner says only “not legal advice.” M7 also makes public-health, planning, architecture, policy, equity, and institutional-governance recommendations. It must distinguish educational reflection from health-impact assessment, code/zoning/environmental review, ADA/civil-rights review, professional design/engineering advice, community engagement, and legal compliance. Applicable authority varies by country, state, county, municipality, project, funding, and date.

## 9. Accessibility and responsive findings

Positive: `lang=en`, viewport, focus-visible styling, reduced-motion rules, semantic answer buttons, keyboard shortcuts, and a mobile breakpoint.

Defects:

- Runtime failure blocks everyone.
- Inactive screens use opacity/position/pointer-events without `hidden`, `inert`, or `aria-hidden`; all 12 questions remain exposed in the accessibility tree.
- Options lack radio/fieldset semantics and programmatic selected state.
- Email errors have no visible/live message.
- Radar canvas has no text/table equivalent and disappears at ≤900 px.
- Timed auto-advance/rationale is not fully user-controlled.
- Contact overlay lacks dialog role/name, `aria-modal`, focus trap/initial focus/restoration, working Escape, and visible labels.
- Fixed contact control may overlap content.

Desktop production and responsive source were inspected. Physical mobile/touch, screen-reader, measured contrast, 200%/400% reflow, print, and PDF accessibility remain unverified because the primary flow/report is broken.

## 10. Brand-architecture findings

Correct hierarchy is **NSAG → M7**. It is not an independent Aloha AI or RN Builds product. Aloha AI may receive implementation credit. JSON-LD's “AI Educator & Consultant” identity and old `rn-portfolio-khaki` destination understate NSAG and bypass RN Selected Work. The topic can strengthen NSAG, but a broken quiz and unsupported institutional claims materially weaken trust among planners, governments, researchers, and communities.

## 11. Business-model and conversion findings

- **Users:** planners, zoning/public-health staff, elected/local-government staff, developers, architects/designers, community organizations.
- **Likely buyers:** municipal leadership, planning/public-health departments, developers, institutions, foundations, or design firms.
- **Economic role:** diagnostic lead magnet routing to a $500 toolkit, advisory, booking, sibling modules, and alleged benchmarking.
- **Potential value:** a facilitated, evidence-backed governance workshop can connect built-environment decisions to health and equity.
- **Trust/adoption barriers:** broken flow, invalid instrument, absent citations, false personalization, privacy ambiguity, uncited cases, surveillance omission, and no jurisdiction or procurement path.

Conversion is currently unreachable. Toolkit deliverables, license, update schedule, review credentials, support, refund, procurement, data processing, accessibility, and availability are unspecified.

## 12. Security, privacy, data, and operations

- CSP blocks required libraries while allowing `'unsafe-inline'` and `'unsafe-eval'`.
- Third-party CDN scripts are unmanaged and lack a repository lockfile/build.
- Privacy copy omits transmission of email-linked tier, percent, and six dimension scores.
- Report access and optional follow-up are bundled; no separate marketing consent.
- No privacy notice defines controller, purpose, retention, processors, security, deletion, or rights.
- Email validation is only an `@` substring test.
- Waitlist/contact suppress failure and can display false success.
- Custom `/api/track` is 404; analytics scripts are undisclosed.
- Positive headers: HSTS, frame denial, nosniff, restrictive permissions policy, strict-origin referrer policy.
- No tests, CI, dependency management, monitoring, release smoke test, evidence register, content review, or operational documentation.

## 13. Defects by priority

### P0

1. Chart.js blocked; first answer crashes.
2. PDF unavailable: jsPDF blocked and generator has no call site.

### P1

1. Duplicate generic prompts do not measure the six dimensions.
2. Invalid scoring presented as exact institutional governance tier/highest-leverage gap.
3. Barrett/Evans claims overgeneralized or mischaracterized; no citations/methodology.
4. Unsupported typical-improvement and case-outcome claims.
5. Privacy/consent mismatch and false-success API behavior.
6. Surveillance/data-governance omission undermines “Conscious Cities” and equity scope.
7. Accessibility state/dialog failures.

### P2

1. Sector choice is cosmetic; no authority/jurisdiction/project branching.
2. Rationales are misindexed and result copy generic.
3. No methodology, legal-policy map, privacy, terms, support, or toolkit details.
4. Analytics endpoint, sitemap, robots, and canonical metadata absent/broken.
5. No save/resume/result permalink/evidence record.
6. Old portfolio/schema identity.

### P3

1. Replace categorical maturity language and urgency with bounded reflection.
2. Complete contrast, zoom, touch, motion, print, and report QA after repair.

## 14. Exact remediation plan

1. Vendor/bundle Chart.js and jsPDF or allow exact origins with integrity; remove unnecessary unsafe CSP allowances. Make progression independent of visualization.
2. Invoke and test a real accessible report generator or remove all PDF/email claims.
3. Add end-to-end tests for all sectors, answers, Back/keyboard, gates, thresholds/ties, result/export/retake, API failure, and responsive states.
4. Replace the twelve duplicate questions with dimension-specific, evidence-linked constructs. Add unknown/NA, evidence prompts, respondent role/authority, project/jurisdiction, confidence, affected-community perspectives, and multi-rater reconciliation.
5. Add explicit surveillance/data-technology governance and environmental-justice/displacement coverage, or narrow the product name/scope.
6. Publish methodology: construct definitions, item rationale, weights, validation plan, limitations, version, review owner/date, and prohibition on compliance/maturity inference.
7. Correct and link Barrett/Evans; add current primary/authoritative sources for noise, green space, housing, mobility, participation, disability/civil rights, surveillance, and local legal variation.
8. Remove/source “one planning cycle,” benchmark, exact tier, and case outcomes. Label illustrative examples as hypothetical/composite.
9. Implement real role-specific branching or remove sector selection.
10. Publish privacy/terms/data retention; disclose all derived transfers and analytics; separate marketing consent.
11. Await `response.ok`; add pending/success/error/retry/support states.
12. Repair accessibility with hidden/inert states, semantic groups, live errors, chart table, genuine dialog/focus/Escape behavior, and mobile equivalents.
13. Split the monolith into versioned content/scoring/view/privacy/citation modules; add package/lockfile, CI, monitoring, and evidence review.
14. Correct NSAG/Aloha/RN architecture, canonical/robots/sitemap, schema, and RN Selected Work links.
15. Re-run the full Stage A audit before promotion.

## 15. Recommended estate disposition

**C — component**, under canonical NSAG.

M7 is explicitly numbered, shares the NSAG assessment/conversion shell, and links sibling modules. It does not merit a separate case-study card. The live component is release-blocked. If its content is later consolidated into the NSAG parent, this standalone deployment may become **X — superseded/retired**, but current evidence supports C, not X.

## 16. Proposed RN Selected Work corrections

Do not list M7 as a separate completed build. Under NSAG, describe it as a deployed **prototype component** exploring proposed built-environment governance dimensions. State that the present production flow fails after question 1; scoring is an unvalidated self-report formalization rubric, not a health-impact assessment, equity audit, legal/compliance determination, professional planning review, surveillance audit, or institutional maturity measure; sector personalization, PDF/email delivery, benchmarking, toolkit availability, and outcome cases are not established.

After repair and validation, call it a “guided governance reflection,” identify version/review date, link methods/privacy/evidence, and preserve the NSAG parent hierarchy.

## 17. Evidence appendix

### Live/runtime

- `/` 200; `robots.txt`, `sitemap.xml`, `/api/track`, and unknown route 404.
- `nsag-api.vercel.app/api/lead` GET 405; no POST made.
- Urban Planning Department → Continue → A reproduced the block.
- Console: missing `Chart`; then missing chart `.data`.

### Repository/deployment

- Repository tree: `.gitignore`, `index.html`, `vercel.json`.
- Production commit `7e6600f6962e22ec999c4debca0b0ed683e85af2` directly linked by Vercel metadata.
- Static output in 16 ms; no compilation/test step.
- CSP permits same-origin scripts only; HTML imports external Chart.js/jsPDF.
- `generateResultPDF()` has one definition and zero invocation.

### Checked sources

- Evans GW, “The Built Environment and Mental Health,” *Journal of Urban Health* 80 (2003), DOI `10.1093/jurban/jtg063`: `https://pmc.ncbi.nlm.nih.gov/articles/PMC3456225/`
- Barrett PS et al., “The impact of classroom design on pupils' learning,” *Building and Environment* 89 (2015), DOI `10.1016/j.buildenv.2015.02.013`: `https://www.sciencedirect.com/science/article/pii/S0360132315000700`
- WHO, “Urban green spaces and health” (2016): `https://www.who.int/europe/publications/i/item/WHO-EURO-2016-3352-43111-60341`
- WHO, “Guidance on environmental noise”: `https://www.who.int/tools/compendium-on-health-and-environment/environmental-noise`
- WHO, “Urban health” (2025): `https://www.who.int/news-room/fact-sheets/detail/urban-health`
- WHO, health risks in housing/urban design: `https://www.who.int/teams/environment-climate-change-and-health/healthy-urban-environments/housing/health-risks`

### Explicitly unverified

- No result, contact, waitlist, booking, purchase, or marketing form was submitted.
- Private API implementation, storage/CRM, retention, security, email delivery, and deletion are outside this repo.
- Questions 2–12, gate, results, exports, tier CTAs, and PDF could not be exercised live; source paths were inspected.
- Booking URL was not opened because it contains a personal identifier.
- Toolkit, six-source promise, benchmark, cohort, and case outcomes were unavailable.
- Full physical-device, screen-reader, contrast, zoom/reflow, print, and PDF testing remain pending.

Vercel READY establishes deployment, not assessment validity or functional completion.
