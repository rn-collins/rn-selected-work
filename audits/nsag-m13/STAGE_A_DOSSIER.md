# NSAG M13 — Stage A Audit Dossier

Audit date: 2026-08-12 (HST)  
Companion: [`ROUTE_CONTROL_LEDGER.md`](./ROUTE_CONTROL_LEDGER.md)

## 1. Asset identity

- **Asset:** M13 Governance Challenge — Traditional & Complementary Medicine Governance.
- **Canonical deployment:** `https://nsag-m13.vercel.app/`; Vercel project `nsag-m13`, ID `prj_d3ezm24x8rXcNg7hNADSzhMw4az2`.
- **Latest production:** `dpl_BEwnVbEEZYmJZjtBsWmZ1GxPFonv`, READY, exact commit `003ff0449518f120588b2bff0e8d6995da363a3e`; aliases include canonical, project-owner, and branch forms.
- **Repository:** private `rn-collins/nsag-m13`, GitHub ID `1285740191`. Vercel directly identifies the repo, ID, branch, visibility, and commit; the repository/deployment relationship is verified, not inferred.
- **Architecture:** `.gitignore`, one approximately 75 KB `index.html`, and `vercel.json`; no framework, package/lockfile, README, tests, CI, evidence file, or source/content separation. Vercel cloned the stated commit and emitted static output in 19 ms.
- **Parent/owner:** NSAG → M13. Aloha AI is implementation credit.
- **Privacy:** public consumer interface/private code. The result endpoint can receive email, tier, percentage, six dimension scores, module/source, and timestamp. Contact and waitlist use the same API. No privacy or terms route exists.

## 2. Executive verdict

M13 is a polished-looking but non-completable and substantively invalid governance quiz. Production CSP blocks Chart.js and jsPDF. `initRadar()` therefore throws, and answer one calls `chart.data` without a guard, stopping progression. The PDF generator is defined but never called, so the promised immediate report does not exist even if CSP is repaired.

The assessment does not measure its six named domains. It asks each dimension's same generic governance-maturity question twice, with the same four obvious-order answers. It never tests evidence appraisal, community authority or benefit-sharing, licensing or scope, product quality, interactions, informed consent, claims regulation, adverse-event response, or care coordination. Result copy is heavily contaminated by a trauma-informed legal-environment template, including claims about re-traumatization, legal-aid organizations, AI-assisted legal tools, and a fabricated-looking Chicago case result.

The deep-dive thesis also overstates Steel et al. (2025). The cited item is a WHO meeting report on institutionalizing evidence-informed decision-making; the page supplies no citation and the public record does not establish the page's categorical proposition that randomized controlled trial frameworks “cannot adequately evaluate traditional medicine.” Current WHO policy calls for context-sensitive evidence **and** stronger safety, quality, effectiveness, regulation, qualified practitioners, Indigenous Peoples' rights, and appropriate integration—not a binary replacement of biomedical evidence with traditional-use evidence.

**Recommended disposition: C — component of NSAG, release-blocked.** Do not make a standalone RN Selected Work card or market the result/toolkit until technical, scientific, cultural-governance, legal, privacy, and validation defects are resolved.

## 3. Complete route map

Only `/` exists. `/robots.txt`, `/sitemap.xml`, `/api/track`, and an arbitrary unknown route returned 404. No methodology, source library, validation, privacy, terms, accessibility, modality taxonomy, jurisdiction map, community-governance protocol, report recovery, support, or checkout route exists. The API's lead endpoint returned 405 to GET, consistent with POST-only behavior. All destinations and statuses are in the companion ledger.

## 4. Complete interaction/control inventory

The document defines Begin; four sector buttons; Continue; 48 answer buttons generated for 12 questions; A–D keyboard shortcuts; an email gate; result, copy, share, print, and retake controls; tier-dependent advisory, booking, and $500 toolkit-waitlist CTAs; six related/brand links; and a contact modal/form. All controls after answer one are unreachable in production. No consequential POST was sent during this read-only audit.

The four sectors—Hospital System, Integrative Practice, Community Health Organization, and Wellness/Retreat Organization—are cosmetic. `selectedSector` defaults to the unrelated value `legal-aid`, is overwritten, and is never read. Every sector gets the identical instrument and output.

## 5. Consumer journeys and observed results

### Prospective institutional user

The landing copy promises a free, evidence-based, 12-scenario reflection across six dimensions in 8–10 minutes. A user can choose a sector and reach question one. Because the response CSP permits only same-origin scripts while both libraries are external, Chart.js never initializes. Choosing the first answer invokes `updateRadar()`, which dereferences the missing chart and prevents the scheduled move to question two. The primary journey is blocked.

### Cultural/Indigenous knowledge holder

The copy states attribution, compensation, scope of use, and withdrawal as a compact “community agreement” model, but never establishes who has authority to consent, how collective governance works, how knowledge that should not be disclosed is protected, how data/specimens/digital sequence information are governed, how benefits are negotiated, or how jurisdiction-specific Indigenous rights apply. “Community agreement” risks being treated as institutional permission rather than ongoing community-controlled governance.

### Clinical/safety user

The instrument never asks which modality, product, route, dose, indication, population, setting, practitioner, or jurisdiction is at issue. It cannot distinguish yoga from acupuncture, a dietary supplement from an unapproved drug, Indigenous ceremony from commercial wellness programming, or adjunctive from alternative use. It cannot responsibly return a clinical-governance tier.

### Report/customer journey

The email gate says a PDF downloads immediately, but the assessment cannot reach it, jsPDF is blocked, and `generateResultPDF()` has only its definition and no invocation. The API POST does not establish email delivery. Waitlist buttons immediately say “You're on the list” without checking HTTP success. Contact resets/closes after any resolved HTTP status. There is no purchase or fulfillment system for the advertised $500 toolkit.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Static landing/deep dive | Working statically | `/` returns 200. |
| Sector selection | Cosmetic | Value stored, never consumed; default is `legal-aid`. |
| Assessment | Broken | First answer requires CSP-blocked Chart.js. |
| Radar | Broken | External Chart.js excluded by `script-src`. |
| Six-domain measurement | Invalid/simulated | Same generic item repeated twice per label. |
| Tier/bands | Simulated/unreachable | Fixed arithmetic and templated prose; no validation. |
| Email/PDF report | Missing/broken | jsPDF blocked; generator never invoked; email delivery unestablished. |
| Copy/share/print/retake | Unreachable | Result-only controls. |
| $500 toolkit | Waitlist only | No checkout; availability/fulfillment unverified. |
| Contact/waitlist success | Unreliable | UI confirms without `response.ok`. |
| Sources/methodology | Missing | One incomplete author-year reference; no links or validation record. |

### Scoring and instrument validity

The 12 entries are six duplicate pairs. Each asks: “What does your current governance infrastructure provide for [dimension]?” Each uses exactly the same answers: formal standards plus independent monitoring/quarterly leadership review/named accountability (4); standards with informal monitoring (3); champion-dependent practice (2); not formally addressed (1). The two rationales per domain merely name desired concepts.

Overall average thresholds are ≥3.5 PIONEERING, ≥2.5 EMERGING, ≥1.5 DEVELOPING, otherwise EARLY STAGE. Two-item dimension sums are Strong ≥7, Partial ≥5, Emerging ≥3, otherwise Absent. There is no construct definition, item-development record, expert/community review, cognitive testing, reliability, factor structure, criterion validity, sensitivity, weighting rationale, adverse-impact analysis, evidence requirement, unknown/not-applicable option, respondent authority, multi-rater check, confidence, or version control. “Independent monitoring” and quarterly review are not universally appropriate evidence of every domain.

| Stated dimension | What is actually measured | Critical omissions |
|---|---|---|
| Evidence Integration Framework | Self-asserted documentation maturity twice | Modality/claim, safety vs efficacy, evidence question, design fitness, bias, certainty, provenance, traditional-use limits, benefit/risk, outcomes, re-review triggers. |
| Cultural Sovereignty & IP | Self-asserted documentation maturity twice | Rights-holder/authority, FPIC, collective governance, refusal/non-disclosure, attribution limits, benefit-sharing, data/specimen governance, Nagoya applicability, patent/TK protections, remedies, withdrawal consequences. |
| Practitioner Credentialing | Self-asserted documentation maturity twice | Jurisdiction, modality, license/certification distinction, scope, privileging, supervision, malpractice coverage, disciplinary checks, competency, referral/emergency duties. |
| Patient Safety Infrastructure | Self-asserted documentation maturity twice | Product identity/quality, adulteration/contamination, dose/route, interactions, contraindications, pregnancy/children, medication reconciliation, informed consent, adverse events, escalation, replacement risk. |
| Regulatory Compliance | Self-asserted documentation maturity twice | FDA product classification/claims, FTC advertising, state practice acts/facility rules, HIPAA, research rules, consumer protection, jurisdiction/date/source, enforcement ownership. |
| Integration with Conventional Care | Self-asserted documentation maturity twice | Adjunctive vs alternative use, record interoperability, consent to share, handoffs, referrals, treatment conflicts, medication reconciliation, outcomes/harms, equity/access/cost. |

**Conclusion:** it measures only perceived formalization of generic governance, not the stated six constructs and not clinical, cultural, legal, or regulatory fitness.

## 7. Copy and information-architecture findings

Strengths are a clear six-domain organizing idea, candid “not validated” language, a review date, readable presentation, and explicit recognition that cultural sovereignty, safety, credentialing, regulation, and coordination belong in governance.

Release-blocking copy defects:

- The H1 says “govern traditional & complementary medicine governance,” a duplicated construction.
- “TCM” is used for traditional and complementary medicine even though TCM commonly means Traditional Chinese Medicine. WHO's current umbrella is traditional, complementary, and integrative medicine (TCIM). Define terms and avoid the ambiguity.
- The page calls itself “evidence-based” without instrument evidence and gives only “Steel et al. (2025)” with no title, DOI, link, quotation boundary, or method.
- “RCT frameworks cannot adequately evaluate traditional medicine” and “built for isolating a single pharmacological variable” are categorical and reductive. RCTs can test many complex interventions; the actual question is fitness for purpose, intervention complexity, relevant outcomes, cultural validity, and triangulation—not wholesale incapacity.
- “Most integrative programs” and programs “proliferating faster than governance” are unsourced prevalence/trend claims.
- “The same documentation a state health department, an accreditor, or partnering hospital will eventually ask to see” implies a universal requirement without naming authority, jurisdiction, program, or date.
- Every positive answer prescribes independent monitoring and quarterly review without evidence that the cadence/structure fits the risk.
- PIONEERING, EMERGING, DEVELOPING, and EARLY output is copied from a trauma-informed legal-space product. It refers to legal requirements, physiological realities of trauma, re-traumatizing clients, legal-aid organizations, M1/M2 legal AI, “environmental awareness,” and a Chicago story claiming 34% satisfaction improvement.
- The early-stage TCIM example says its documentation was cited in two state-health-department memos without source or hypothetical label.
- Claims that most institutions cross tiers in one advisory cycle, the toolkit has “specific policy language” for an “exact tier,” peer benchmarking, and a lowest dimension being highest leverage are unsupported.
- “Your M1 governance tier” appears in the M13 reveal. Shared/copy text repeats “Governance Governance.”
- Email copy says answers stay in-browser although derived scores leave the browser. “Never sold or shared” is unsupported by a linked policy or retention/vendor statement.
- Legal-only disclaimer does not cover medical, clinical, public-health, cultural, IP, regulatory, credentialing, advertising, or product-safety reliance.

The deep dive should precede the assessment with a real methodology/source page and scope selection (country/state, setting, modality/product, adjunctive/alternative status). Results should be called an unvalidated readiness reflection until validated.

## 8. Science/law/policy/regulatory claim ledger

| Claim/topic | Verdict | Required correction/boundary |
|---|---|---|
| Steel et al. (2025) establishes RCT frameworks cannot adequately evaluate traditional medicine | **Not supported as stated** | The identifiable source is a WHO meeting report on institutionalizing evidence-informed decisions (DOI `10.1089/jicm.2024.0837`), not an instrument-validation study. Cite exact text/page or rewrite as a qualified discussion of evidence pluralism and method fitness. |
| “Multi-epistemic” evidence can place traditional use and biomedical evidence side by side | Ethically important but underspecified | Traditional use is not automatically evidence of clinical efficacy or safety. Define decision questions, evidence types, quality/certainty, knowledge-holder authority, non-disclosure, and how conflicting evidence changes adoption. |
| Current global direction | Materially incomplete | WHO's 2025–2034 strategy emphasizes evidence, safe/effective provision, regulation, qualified practitioners, appropriate integration, community empowerment, health equity, sustainability, and Indigenous Peoples' rights. Use TCIM terminology and cite the strategy. |
| Community agreements distinguish ethical integration from appropriation | Directionally sound, legally/culturally insufficient | An institutional contract is not synonymous with FPIC or sovereignty. Identify legitimate collective authority, ongoing consent, refusal, scope, benefit-sharing, data/specimen/IP control, remedies, and applicable Indigenous/customary/domestic law. |
| WIPO protects the named practices/knowledge | Must be narrowly stated | The 2024 WIPO GRATK Treaty creates a patent-disclosure regime upon entry into force and domestic implementation; it is not general ownership protection for all traditional knowledge. Verify treaty status and contracting-party law at use time. |
| Nagoya Protocol applies | Jurisdiction/resource dependent | It covers genetic resources and associated traditional knowledge under party/domestic access-and-benefit-sharing rules, with prior informed consent and mutually agreed terms where applicable. It is not a universal clinical-service consent rule; the United States is not a CBD Party. |
| Practitioner credentialing is a safety requirement | Correct in principle; highly jurisdiction-specific | NCCIH states there is no standardized U.S. national system and state/discipline rules vary widely. Distinguish licensure, certification, education, facility credentialing/privileging, scope, delegation, and supervision. |
| Safety screening and contraindications are sufficient safety infrastructure | Materially incomplete | Add product identity/quality, adulteration/heavy metals, dose/route, interactions, medication reconciliation, pregnancy/children, adverse-event reporting, emergency escalation, referral, infection control, replacement/delay of effective care, and informed consent. |
| “Natural”/traditional implies safe | Must not be implied | NCCIH warns natural does not mean safe and specific herbs interact with medicines. FDA notes supplements generally are not preapproved for safety/effectiveness and maintains adverse-event reporting. |
| Traditional-use marketing claims | Strong legal boundary missing | FTC requires competent and reliable scientific substantiation for health claims; carefully qualified historic-use descriptions may be allowed, but unsupported serious-disease treatment/cure claims should not be made even with qualification. Net impression and material-risk disclosure govern. |
| Dietary-supplement/disease claims | Strong legal boundary missing | FDA distinguishes authorized/qualified health claims and structure/function claims; explicit or implied diagnose/treat/cure/prevent claims make a product subject to drug rules. Classification depends on product, ingredients, route, and intended use. |
| Informed consent | Missing | Consent must address material benefits, risks, alternatives, uncertainty/evidence status, practitioner credentials, costs, data/community issues where applicable, and risks of delaying/substituting effective treatment; applicable law and professional rules vary. |
| Integration with conventional care | Directionally sound | Require patient-authorized information sharing, medication/supplement reconciliation, referral/escalation, conflict resolution, documentation, outcome/adverse-event monitoring, and clear adjunctive vs alternative boundaries. |
| Equity | Missing from instrument | Assess language/disability access, affordability/coverage, geographic access, cultural safety, coercion, community benefit, commercialization/extraction, and whether “integration” shifts risk/cost to marginalized communities. |

Primary/authoritative anchors used in this audit are listed in §17. This review is issue spotting, not legal or medical advice. Any release needs qualified clinical, regulatory, Indigenous-governance/IP, privacy, and jurisdiction-specific legal review.

## 9. Accessibility and responsive findings

Positive static features include `lang="en"`, visible `:focus-visible`, an A–D shortcut, a reduced-motion media query for several transitions, and aria labels on sector and result controls.

Material defects:

- No semantic `main`, `nav`, `header`, `footer`, dialog, or other landmarks were found.
- The contact modal lacks `role="dialog"`, `aria-modal`, a programmatic title, initial focus, focus trap/return, and Escape behavior; the global Escape handler is empty.
- Contact fields rely on placeholders and have no `<label>`; required/error/success states are not announced.
- Progress, rationale flashes, dimension-complete flash, chart updates, and cinematic result have no live-region semantics.
- Sector “selected” state is visual only; no `aria-pressed` or radio-group semantics.
- Dynamically generated answer buttons become pointer-disabled, but no status/focus management is provided before timed screen replacement.
- The first-answer runtime failure makes keyboard and assistive-technology completion impossible.
- Reduced-motion does not disable the JavaScript-controlled 2.2-second cinematic overlay or all timers/transitions.
- The radar is a canvas with no equivalent tabular/accessible description during the assessment.
- Reliance on optional clipboard/share APIs has no fallback status for failures.
- Headings/labels and keyboard behavior could be inspected statically, but a cloud-browser daemon was unavailable, so computed contrast, zoom/reflow, exact focus order, iOS/Android behavior, and screen-reader announcements remain unverified. Source CSS includes mobile rules, but that is not proof of responsive usability.

## 10. Brand-architecture findings

M13 belongs under NSAG as one module in a larger governance framework; C is the right estate role. The six-domain concept fits NSAG's institutional-design positioning, but the current artifact undermines that credibility by reusing an unrelated legal-trauma template, treating Indigenous/traditional knowledge as a compact institutional compliance category, and presenting an unvalidated score as maturity.

RN Builds should represent the module through the parent NSAG case study, not as an independent build. Aloha AI can remain the technical implementation credit. Replace the footer's obsolete `rn-portfolio-khaki.vercel.app` destination when estate routing is repaired. Do not imply Indigenous partnership, community validation, accreditor acceptance, state endorsement, or clinical efficacy without evidence.

## 11. Business-model and conversion findings

The intended funnel is free quiz → email result → $500 toolkit/advisory/discovery call. It currently fails before question two. Even after a technical repair, the invalid score and contaminated recommendations make conversion reputationally risky.

The $500 toolkit is only a waitlist; there is no checkout, terms, refund, delivery, contents preview evidence, service level, or product availability. “Policy language” in this domain could be relied on for clinical, licensing, advertising, cultural-governance, privacy, and IP decisions and therefore needs qualified review and jurisdiction/version boundaries. “Benchmarks against peers” and cohort claims need an actual comparison dataset and methodology. The correct initial offer is a clearly scoped, non-diagnostic discovery/reflection tool plus separately contracted, expert-reviewed advisory work—not an automated “exact tier” policy product.

## 12. Security, privacy, data, and operational findings

- CSP blocks both essential external libraries while allowing `'unsafe-inline'` and `'unsafe-eval'`; it is simultaneously restrictive in the wrong place and permissive against injection.
- HSTS, frame denial, nosniff, strict referrer policy, and camera/microphone/geolocation restrictions are positive.
- The page includes Vercel Insights and Speed Insights but provides no analytics/cookie/vendor disclosure.
- Email plus derived results are transmitted to `nsag-api`; the UI statement that answers stay in-browser is materially incomplete. No controller identity, purpose separation, lawful basis/consent, retention, deletion/access request, processor/vendor, security, or incident contact is stated.
- “Optional NSAG updates” is bundled with report access; there is no separate marketing consent.
- Gate validation only checks that email includes `@`.
- Waitlist and result submissions suppress failures. Contact closes/resets on any resolved response, including errors. No idempotency, retry, durable receipt, consent log, or support path is visible.
- Toolkit waitlist can send a blank email if invoked outside expected state.
- `/api/track` is referenced but absent (404). Analytics behavior is therefore partial/unverified.
- Static build success proves only file emission; no dependency/CSP integration test, unit test, accessibility test, link check, content validation, or smoke test exists.
- No supply-chain pinning/integrity attributes are used for CDN scripts.
- No sensitive health answers appear to leave the browser directly, but the derived profile can itself be sensitive institutional/compliance data. Treat it accordingly.

## 13. Defects ranked by severity

### P0 — blocking

1. CSP blocks Chart.js; question one cannot advance.
2. The 12-item instrument is six duplicated generic questions and does not measure its stated domains.
3. Result recommendations are copied from an unrelated trauma/legal module and can materially mislead users.

### P1 — serious

1. PDF promise is false: jsPDF is blocked and the generator is never called.
2. Steel et al. claim is uncited and overstated; “evidence-based” is unsupported.
3. No jurisdiction/modality/product/setting boundary for clinical, licensing, advertising, or regulatory advice.
4. Cultural sovereignty/IP treatment omits authority, FPIC, collective governance, refusal, benefit-sharing, data/specimen controls, and treaty limits.
5. Safety instrument omits interactions, product quality/adulteration, adverse events, consent, escalation, and replacement risk.
6. Email/result data collection lacks a privacy policy and separate marketing consent.
7. False-success contact/waitlist flows.
8. Unsourced institutional stories, tier-transition, peer-benchmark, accreditor/health-department, and toolkit claims.

### P2 — material

1. Cosmetic sector selection and unrelated default `legal-aid`.
2. Missing semantic landmarks/dialog/labels/live regions and incomplete reduced motion.
3. Missing robots/sitemap/canonical/OG methodology and source architecture.
4. “TCM” ambiguity, doubled “governance,” M1 residue, obsolete RN Builds link.
5. No save/resume/version/evidence upload/multi-rater workflow.
6. No checkout/terms/refund/fulfillment for $500 toolkit.

### P3 — polish

1. Replace decorative maturity theater with plain-language readiness output.
2. Improve focus movement, disabled-state semantics, failure messages, and accessible score table.
3. Add source dates, jurisdictions, modality tags, and last-reviewed/version metadata per recommendation.

## 14. Exact remediation plan

All current code is in `index.html`; headers are in `vercel.json`.

1. **Freeze public scoring/lead capture** in `index.html`; replace Begin with “under review” until P0/P1 items are resolved.
2. **Repair dependency architecture:** self-host pinned Chart.js/jsPDF or use nonce/hash CSP; remove `'unsafe-eval'`/broad inline execution by moving JS/CSS to files; add integrity where external assets remain. Add production CSP smoke tests.
3. **Make export real:** invoke a tested generator only after results render, or remove PDF/email promises. Decide explicitly between local download and server email; never claim both without both. Add accessible HTML/print fallback.
4. **Replace every question.** Create a modality-, setting-, and jurisdiction-aware item bank that covers the omissions in §6. Include unknown/NA, evidence requests, contradictions, documentation, observed outcomes/adverse events, and escalation. Do not automatically equate quarterly review with maturity.
5. **Validation program:** publish construct definitions, expert and community-governance review, cognitive interviews, pilot data, reliability/validity/measurement-invariance/adverse-impact analysis, scoring rationale, limitations, version, and revalidation triggers. Until then label output “unvalidated readiness reflection,” with no PIONEERING maturity claim.
6. **Evidence framework:** distinguish safety, efficacy/effectiveness, quality, traditional use, plausibility, acceptability, cost, equity, cultural validity, and knowledge governance; predefine how each informs adoption. Include claim-specific evidence and uncertainty, not “side by side” equivalence.
7. **Community governance:** co-design with relevant knowledge holders; implement legitimate authority, FPIC/ongoing consent, refusal/non-disclosure, attribution/benefit-sharing, data/specimen/digital governance, commercialization, withdrawal/remedy, and jurisdiction-specific treaty/domestic-law analysis. Do not universalize one agreement template.
8. **Clinical safety:** add product verification/testing, contamination/adulteration, interactions, contraindications, dose/route, vulnerable populations, medication reconciliation, informed consent, adverse-event reporting, referral/emergency pathways, infection control, and delay/substitution risks.
9. **Legal/regulatory matrix:** country/state, modality, facility type, practitioner license/scope/privileging, product classification, FDA labeling/claims, FTC advertising, research, privacy, insurance, and current-as-of citations. Require qualified review and versioned updates.
10. **Rewrite all result branches** in `revealResults()`, `cinematicReveal()`, `copyResults()`, `shareResult()`, and PDF text. Delete trauma/legal/M1/M2/Chicago/state-memo residue and unsupported cycle/benchmark/exact-tier claims.
11. **Use sector/context:** replace `legal-aid`; require setting/modality/jurisdiction and use them, or remove personalization claims.
12. **Privacy/consent:** add linked policy, controller, purposes, fields, retention, vendors, rights/contact, security limits, separate report and marketing consent, and truthful browser/transmission language. Check `response.ok`; preserve form state and show retryable errors.
13. **Accessibility:** semantic landmarks, real dialog, labels/descriptions, radio/pressed semantics, live regions, focus management/return, Escape, accessible score table, no mandatory cinematic delay, full reduced-motion support, and WCAG 2.2 AA manual/automated testing at mobile/desktop/200–400% zoom.
14. **Product truth:** call the toolkit a waitlist; publish reviewed sample, availability, scope, terms, fulfillment/refund, jurisdiction/version, and professional-review limits before price-led conversion.
15. **Repository operations:** separate code/content/evidence, add README, test suite, dependency lock, CI, link/claim ledger, responsible reviewer/owner, release checklist, analytics monitoring, rollback, and dated evidence-review process.

## 15. Recommended estate disposition

**C — component of NSAG.** Keep M13 under the NSAG parent case study only. It is not a publishable standalone product, assessment, case study, or evidence of validated governance capability in current form. Release gate: all P0 defects and the substantive P1 scientific/cultural/legal/privacy defects must close.

## 16. Proposed RN Selected Work case-study corrections

Use only after clearly labeling current status:

> **NSAG Module 13 — Traditional, Complementary & Integrative Medicine Governance**  
> An experimental, unvalidated institutional-readiness prototype exploring six candidate governance domains: evidence appraisal, cultural/Indigenous knowledge governance, practitioner credentialing, patient safety, regulatory compliance, and coordination with conventional care. The current deployed prototype is under technical and substantive review and should not be used as a clinical, legal, regulatory, accreditation, or community-consent assessment.

Do not say it currently delivers a working 12-scenario assessment, validated maturity tier, evidence-based score, PDF report, jurisdiction-specific policy, accreditor-ready documentation, community-approved Indigenous-knowledge governance, peer benchmark, or available $500 toolkit. Link it only from the NSAG umbrella after remediation; do not create a separate card.

## 17. Evidence appendix

### Production/repository evidence

- Canonical: `https://nsag-m13.vercel.app/` (200).
- GitHub: private `rn-collins/nsag-m13`, ID `1285740191`; commit `003ff0449518f120588b2bff0e8d6995da363a3e`.
- Vercel: project `prj_d3ezm24x8rXcNg7hNADSzhMw4az2`; production `dpl_BEwnVbEEZYmJZjtBsWmZ1GxPFonv`, READY.
- HTTP: robots 404; sitemap 404; local `/api/track` 404; unknown route 404; lead API GET 405.
- Headers observed: CSP, HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, strict referrer, restrictive permissions policy.
- Static source inspection established CDN dependencies, duplicate items, scoring thresholds, no PDF call site, cosmetic sector, output copy, API payloads, and false-success logic.

### Primary/authoritative external anchors

- Steel et al., “Integration of Traditional, Complementary, and Integrative Medicine in the Institutionalization of Evidence-Informed Decision-Making: The World Health Organization Meeting Report,” *Journal of Integrative and Complementary Medicine* 31(4), 388–394 (2025), DOI `10.1089/jicm.2024.0837`: https://pubmed.ncbi.nlm.nih.gov/39819104/
- WHO, Global Traditional Medicine Strategy 2025–2034 and TCIM objectives/principles: https://www.who.int/teams/integrated-health-services/traditional-complementary-and-integrative-medicine/global-strategies and https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine
- NCCIH, complementary/integrative definitions and safety: https://www.nccih.nih.gov/health/are-you-considering-a-complementary-health-approach
- NCCIH, credentialing/licensing/education variation: https://www.nccih.nih.gov/health/credentialing-licensing-and-education
- FTC, Health Products Compliance Guidance, including traditional-use claims and serious-disease limits: https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance
- FDA, dietary supplement approval boundary: https://www.fda.gov/consumers/consumer-updates/it-really-fda-approved
- FDA, structure/function and disease-claim rules: https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/label-claims-conventional-foods-and-dietary-supplements
- FDA, dietary-supplement adverse-event reporting: https://www.fda.gov/food/dietary-supplements/how-report-problem-dietary-supplements
- WIPO, Treaty on Intellectual Property, Genetic Resources and Associated Traditional Knowledge: https://www.wipo.int/en/web/treaties/ip/gratk/index
- Convention on Biological Diversity, Nagoya Protocol and traditional knowledge: https://www.cbd.int/traditional/protocol.shtml

### Explicitly unverified

- No successful production browser daemon was available; computed contrast, exact mobile/reflow rendering, assistive-technology output, and screenshots were not captured. The primary flow failure is deterministic from production CSP plus source call order and is not inferred from appearance.
- No POST was sent; downstream email storage, retention, delivery, API authentication/rate limiting, database behavior, and third-party processors remain unverified.
- The embedded Outlook booking URL contains a personal institutional identifier and was not transmitted during this audit; destination availability remains unverified.
- Toolkit contents, peer benchmark, cohort, cited Chicago/state-memo stories, clinical expert review, Indigenous/community co-design, and evidence-update process were not evidenced in this repository.
- Treaty, licensing, scope, product, advertising, consent, privacy, and facility rules require fresh jurisdiction-specific review at release time.

