# NSAG M1 — Stage A Audit Dossier

Audit date: 2026-08-12 (Pacific/Honolulu)  
Audit mode: read-only production and repository inspection  
Companion ledger: [`ROUTE_CONTROL_LEDGER.md`](./ROUTE_CONTROL_LEDGER.md)

## 1. Asset identity

- **Product:** NSAG M1, “Trauma-Informed Legal Space,” presented as the first of fifteen governance modules and as a sector-selectable self-assessment.
- **Production:** `https://nsag-m1.vercel.app/` (aliases also include `nsag-m1-rn-collins.vercel.app` and the Git-main alias).
- **Vercel project:** `nsag-m1`, project ID `prj_KXUPfdqpWWdjsgVWP58CKr86zHbs`; latest observed production deployment `dpl_XCzyFtokAKBjMgmxhdEtg7ouGiwV`, READY.
- **Repository:** private GitHub repository `rn-collins/nsag-m1`, repo ID `1285739662`; production commit observed as `c371f29e3fb06281c47e1a1cd0a0163a683a2198`.
- **Repository/deployment relationship:** Vercel metadata directly links this project to that repository and commit. The build log cloned the repository and copied a static output in 18 ms. This is a strong, non-inferred canonical relationship.
- **Architecture:** one 73 KB `index.html`, `.gitignore`, and `vercel.json`; no package manifest, framework, build step, dependency lockfile, test suite, CI workflow, README, or source/content separation.
- **Parent practice:** Neurocognitive Systems Advisory Group (NSAG). Aloha AI is credited as implementation, not owner. RN Builds appears as a footer identity but links to the old portfolio.
- **Public/private status:** public deployment backed by private source.
- **User data:** email, name, message, source tags, timestamps, overall tier/score, and dimension scores can be sent to `nsag-api.vercel.app`. No privacy or terms page is linked.

## 2. Executive verdict

This is a polished-looking but currently non-completable lead-generation assessment. A consumer can select a sector and begin, but the first answer triggers a JavaScript exception and strands the journey on question 1. Therefore assessment scoring, results, PDF, recommendations, waitlist, and tier-specific conversion are **not operational in production**, regardless of Vercel’s READY status.

The primary cause is deterministic: the Content Security Policy permits scripts only from self while the page depends on Chart.js and jsPDF from two external CDNs. Chart.js is blocked at page load (`Chart is not defined`); the first answer then dereferences the missing chart and crashes. jsPDF is blocked by the same policy, so report generation would fail even after the assessment-flow defect were removed.

The asset should exist only as an **NSAG component (C)**, not a stand-alone RN Selected Work build. Its conceptual role is coherent—an educational entry assessment for the M1 governance module—but its current release must be treated as blocked. It should not be marketed as revealing an institution’s real governance maturity until its scoring model, evidence, privacy language, and outcome claims are materially corrected.

Top risks:

1. **P0 delivery failure:** no user can finish the live assessment.
2. **P1 epistemic risk:** an unvalidated, transparent self-report quiz issues authoritative institutional classifications and prescriptive claims.
3. **P1 privacy/trust mismatch:** copy says answers stay in-browser while derived answer data leaves the browser with the user’s email; no privacy policy explains processing.
4. **P1 false-success behavior:** toolkit and contact pathways can hide network failures or treat error responses as success.
5. **P1 unsupported health/legal/outcome claims:** numerous quantitative and causal statements have no visible citations.

## 3. Complete route map

The sole same-origin application route is `/`. `robots.txt`, `sitemap.xml`, `/api/lead`, and an arbitrary unknown route return 404. External destinations include the NSAG parent/advisory pages, M2, M6, M12, canonical Aloha AI, an older RN portfolio, a booking URL, the external lead API, and two CDN scripts. Every discovered destination and response is recorded in the companion route/control ledger.

There is no canonical `<link>` despite an accurate Open Graph URL. There is no route for methodology, sources, privacy, terms, report retrieval, support, or toolkit purchase.

## 4. Complete interaction/control inventory

The page creates four sector selectors, Continue, Begin Challenge, 48 answer buttons across twelve generated question screens, an email gate, See My Reflection, copy/share/print/retake controls, tier-specific booking/advisory or toolkit CTAs, a floating contact control, three contact fields, Send, and Cancel.

The inventory and each observed or source-confirmed result are in `ROUTE_CONTROL_LEDGER.md`. Crucially, source existence is not counted as consumer availability: every control after question 1 is **unreachable in production**.

## 5. Consumer journeys and observed results

### Primary assessment journey

1. Loaded production homepage: introductory value proposition and sector choices appeared.
2. Selected Legal Aid: selection state appeared.
3. Activated Continue: challenge introduction appeared.
4. Activated Begin Challenge: question 1 appeared.
5. Selected answer A: all answer buttons became pointer-disabled; `updateRadar()` threw `TypeError: Cannot read properties of undefined (reading 'data')`; no next question appeared.

Result: **failed at the first scored interaction**. Browser console had already logged `ReferenceError: Chart is not defined at initRadar` during load.

### Sector personalization

The page asks users to choose Legal Aid, Public Defense, Courts, or Advocacy. Source inspection confirms `selectedSector` does not change any question, weighting, interpretation, report, or recommendation. All sectors receive legal-aid-centered wording. The sector choice is decorative segmentation, not personalization.

### Result/report journey

Unreachable in production. Intended source flow computes scores locally, renders a tier, posts derived results and email to the API, and invokes jsPDF. The report is neither emailed by the browser code nor recoverable later; it is intended as an immediate client-side download. The CDN-hosted jsPDF dependency is CSP-blocked and the error is swallowed.

### Contact, waitlist, booking

No consequential form was submitted. Source inspection shows waitlist buttons display “You’re on the list” immediately regardless of request failure. Contact submission does not check `response.ok` and gives no reliable success/error communication. The booking URL was recorded but not opened because it embeds a personal email identifier.

### Return/persistence/error states

Answers exist only in the page’s JavaScript memory. There is no save/resume, account, result URL, recovery, or persistence. Refresh restarts. Error states are largely invisible: dependency failures appear only in console, PDF errors are caught, and API errors are suppressed.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Static introduction and sector selection | Working | Observed live. |
| Sector-specific assessment | Simulated | Sector stored but never affects content/scoring. |
| Twelve-question assessment | Broken | First answer crashes; questions 2–12 unreachable. |
| Radar visualization | Broken | Chart.js blocked by CSP. |
| Scoring engine | Implemented but unreachable | Hard-coded client logic; not validated. |
| Evidence-based maturity classification | Incomplete/unsupported | No methodology, validation, uncertainty, normative benchmark, or on-page citations. |
| Personalized recommendation | Simulated | Hard-coded by four global tiers and lowest dimension; not sector-specific. |
| PDF reflection report | Broken | jsPDF blocked by CSP; failure swallowed. |
| Report emailed to user | Missing/misdescribed | Browser posts a lead record; code generates a local download and does not demonstrate email delivery. |
| Copy/share/print/retake | Unreachable | Defined after result screen only. |
| M1 toolkit | Intentionally unavailable | Waitlist text says not yet available for checkout. Contents/pricing are promises, not delivered product. |
| Toolkit waitlist confirmation | Simulated/unreliable | Success state occurs without confirmed API success. |
| Advisory/discovery conversion | Unreachable | Results journey is blocked. |
| Contact form | Partial/unverified | Consequential POST not sent; source lacks status handling and accessible feedback. |
| Privacy/legal disclosure | Missing | No policy/terms route or linked disclosure. |
| Analytics | Present | Vercel analytics/speed scripts included; disclosure absent. |

### Scoring reality

Each of twelve questions has four visibly ordered options scoring 4/3/2/1. Six dimensions receive two questions each. Overall average thresholds are PIONEERING ≥3.5, EMERGING ≥2.5, DEVELOPING ≥1.5, otherwise EXPOSED. Dimension sums (2–8 possible) map to Strong ≥7, Partial ≥5, Emerging ≥3, otherwise Absent. The minimum response to both questions is the only way to receive Absent.

There is no reverse scoring, neutral/unknown/not-applicable response, sector calibration, response-consistency check, evidence upload, assessor review, weighting justification, confidence interval, validation cohort, norm group, or audit trail. The “best” response is obvious. The output is therefore a **marketing-oriented educational reflection**, not an institutional assessment or reliable measurement instrument.

## 7. Copy and information-architecture findings

Strengths: the six dimensions are understandable; the progression from scenario to practice question is approachable; the educational-self-assessment disclaimer is better than no boundary; and NSAG ownership is generally visible.

Material problems:

- “Revealing your institution’s governance tier” and “tells you exactly where to close it first” overstate what twelve self-reported, unvalidated questions can establish.
- “Your organization is functioning as a genuinely trauma-informed legal environment” converts a quiz score into an authoritative institutional conclusion.
- “Most institutions at this tier cross into PIONEERING within one advisory engagement cycle” is an outcome claim without cohort, timeframe, definition of cycle, method, or citation.
- “Your exact tier,” “benchmarks you against peers,” and “measurement framework” imply precision and comparative evidence not present in the artifact.
- Email-gate copy promises the report by email, but browser code attempts an immediate download and does not establish email fulfillment.
- The privacy sentence distinguishes “answers” too narrowly; derived answer data is transmitted.
- Sector selection promises relevance it does not deliver.
- “You’re on the list” can be false; “usually within a day” creates a fulfillment commitment without operational confirmation.
- The tool uses medicalized/neurological certainty (“activates,” “same threat response,” “neurological safety,” “re-traumatize”) where careful qualification and sources are required.
- There is no methodology/source page positioned before the assessment or result.

## 8. Science/law/policy/regulatory claim ledger

No claim has a visible inline citation or linked source. The promised toolkit’s “evidence base with 6 primary sources” is not available and cannot substantiate public-page claims.

| Claim or claim family | Assessment | Required correction/source boundary |
|---|---|---|
| “Up to 90% of justice-involved individuals” have experienced trauma | Overbroad | A federal CrimeSolutions summary supports “up to 90%” for **justice-involved youth ages 12–18**, not all justice-involved people. Narrow population and define event/measure. |
| Physical environment “activates the nervous system” before legal conversation | Plausible but absolute and uncited | Identify the specific environmental factors, population, outcome, evidence type, and limits. Do not translate general trauma literature directly into legal-space causation without support. |
| Excluding affected people reproduces power dynamics | Normative claim presented as fact | Label as NSAG design principle or cite participatory-design/administrative-justice evidence. |
| Standard legal language is 12th grade; “most justice-involved individuals read at 6th” | Unsupported and population-ambiguous | Provide the exact corpus, jurisdiction, assessment instrument, sample, and date. Separate literacy from comprehension under stress. |
| Unpredictability activates “the same threat response as the original trauma” | Overstated causal equivalence | Replace with qualified language about uncertainty/stress triggers and cite trauma research. “Same” is not justified here. |
| Interpreters without trauma-communication training “can re-traumatize” | Possible but uncited | Define re-traumatization, avoid attributing causal harm without evidence, and distinguish interpreter ethics/language-access law from trauma-informed practice. |
| “Secondary traumatic stress affects over 50% of legal service workers” | Unsupported as written | A 2021 systematic review found high but heterogeneous prevalence in legal professionals and warned of methodological weaknesses; rates and measures varied. It does not establish this exact population-wide statistic. |
| One legal aid organization achieved measurable client/staff gains within six months | Unverifiable testimonial/outcome claim | Name the organization/study, measures, baseline, comparison, timeframe, and source or remove. |
| Public defender waiting-room changes produced the described effect | Unverifiable example | Cite an attributable case study or clearly mark it as an illustrative scenario. |
| Accommodation design beyond self-identification | Legal framing incomplete | Clarify jurisdiction and that ADA duties vary by title/entity/context; trauma-informed design is not itself a substitute for ADA compliance or legal advice. |
| Independent complaint/accountability pathways are required for real feedback | Governance recommendation | Label as NSAG’s recommended standard and cite legal/organizational rationale; avoid implying a universal legal requirement. |
| PIONEERING, EMERGING, DEVELOPING, EXPOSED tiers represent institutional maturity | Unvalidated construct | Publish rubric development, evidence model, validation status, limitations, and intended/non-intended uses. |
| “Most” Emerging institutions advance within one engagement cycle | Unsupported service outcome | Remove until documented outcome data exists; never imply typical results from anecdote. |

Professional boundary: the footer’s educational disclaimer is useful but insufficient to cure specific overclaims. The module is not legal advice, a clinical evaluation, an accessibility audit, or an accreditation. Those boundaries should appear before scoring and in the report.

## 9. Accessibility and responsive findings

Positive implementation includes `lang="en"`, viewport metadata, visible focus styling, reduced-motion CSS, button-based options, and A/B/C/D shortcuts.

Defects/risks:

- Completion is impossible for every user because of the runtime failure.
- Inactive screens use opacity/position/pointer-events rather than `hidden`, `inert`, `aria-hidden`, or `display:none`; all generated questions/results may remain exposed to assistive technology.
- Questions are generic `div` structures rather than fieldsets/legends or a programmatically named group.
- Selected answer state is visual only; no `aria-pressed`/checked equivalent.
- Auto-advance is timed at 1.1 seconds with no back/edit control.
- The assessment radar is a canvas without a contemporaneous accessible text/table equivalent.
- Under 900 px the primary radar panel is hidden; this reduces context rather than adapting it.
- Email validation adds `aria-invalid` but no visible or live-region error message.
- Contact modal lacks `role="dialog"`, `aria-modal`, a programmatic title, focus placement, focus trap, and focus restoration. Escape has no close behavior despite a source comment indicating it should.
- Cinematic reveal transitions may disorient; reduced-motion support helps but the underlying state management remains weak.
- The floating contact control may obscure content at small viewport/zoom sizes.

Desktop production was directly exercised. Responsive CSS was inspected. A full physical mobile-device/touch, 200%/400% zoom, screen-reader, and measured contrast pass was not completed and remains explicitly unverified.

## 10. Brand-architecture findings

Ownership should be **NSAG → M1 component**. The site is not Aloha AI’s advisory methodology and not an independent RN Builds venture. “Site implementation: Aloha AI” is a reasonable vendor/implementation credit if consistently framed.

The artifact strengthens NSAG only at the visual/concept level. It fragments trust operationally because:

- the footer’s RN Builds link goes to `rn-portfolio-khaki.vercel.app`, not RN Selected Work;
- JSON-LD describes RN as “AI Educator & Consultant,” which under-describes the research-led institutional-design practice represented here;
- the module has its own public deployment but lacks a clear parent breadcrumb/methodology/support structure;
- claims of an evidence base and peer benchmarking are not substantiated;
- a broken first interaction makes the polished aesthetic feel more like a prototype than an institutional product.

Hawaiʻi grounding is not present in the M1 content. That is not inherently a defect for a broader module, but the product should not borrow Hawaiʻi credibility implicitly without explaining scope and jurisdiction.

## 11. Business-model and conversion findings

- **Beneficiary/user:** legal-aid, public-defense, court, and advocacy staff evaluating institutional practices.
- **Buyer/decision-maker:** executive director, operations/accessibility leader, court administrator, public defender leadership, funder, or governance/compliance owner.
- **Economic role:** lead-generation diagnostic intended to route users to a $500 toolkit, advisory engagement, discovery call, other modules, and possible cohort benchmarking.
- **Value hypothesis:** make an abstract governance framework concrete, identify an initial gap, and create a low-friction entry to NSAG services.
- **Adoption barriers:** unvalidated scoring, absent sources, privacy ambiguity, unclear fulfillment, no institutional evidence workflow, and live breakage.
- **Trust barriers:** medical/legal certainty, unsupported typical-results claim, report-delivery mismatch, and false-success states.
- **Conversion reality:** conversion is unreachable because result state is unreachable. Even if fixed, the toolkit is waitlist-only; pricing, scope, license, support, refund, maintenance, and availability are not defined.

Business recommendation: keep M1 as a parent-site component, but pause active promotion until the journey works and the assessment is reframed as a preliminary reflection. Do not sell “exact tier” precision. Offer a transparent free reflection, then a separately scoped evidence-based facilitated assessment/advisory engagement. Publish toolkit status and fulfillment terms before collecting purchase interest.

## 12. Security, privacy, data, and operational findings

- CSP blocks required libraries and causes the P0. It also permits `'unsafe-inline'` and `'unsafe-eval'`, weakening script protections.
- Chart.js/jsPDF are remote runtime dependencies with no local vendoring or integrity attributes.
- Raw answers remain client-side, but email plus derived tier, percentage, dimension scores, source, and timestamp are posted to an external NSAG API. The claim “your answers stay in your browser” fails to disclose this meaningful derived-data processing.
- No privacy notice identifies controller, purposes, legal basis/consent, retention, processors, analytics, user rights, deletion/contact method, cross-site flow, or security limits.
- “Optional NSAG updates” is bundled into a report gate; there is no separate affirmative marketing consent.
- Email validation is only an `@` substring check.
- API request errors are swallowed. Waitlist UI asserts success before success; contact flow does not inspect status.
- The report includes the email address inside a generated PDF, creating downstream handling considerations.
- Vercel Analytics/Speed Insights are included without public disclosure.
- Security headers otherwise include HSTS, nosniff, frame denial, restrictive permissions policy, and referrer policy.
- No tests, error monitoring, release smoke test, dependency management, or documented operational owner is present in the repository.

## 13. Defects by severity

### P0 — blocking

1. CSP blocks Chart.js; initialization fails and the first answer crashes, preventing assessment completion.
2. CSP blocks jsPDF; promised PDF generation is nonfunctional.

### P1 — serious

1. Unvalidated self-report scoring is framed as a real institutional governance tier and exact recommendation.
2. Unsupported quantitative, causal, legal-adjacent, medical/physiological, testimonial, and service-outcome claims.
3. Privacy copy omits transmission of derived assessment data; no privacy policy or separate marketing consent.
4. Waitlist/contact error handling can represent failure as success.
5. Email-delivery promise conflicts with local-download implementation.
6. Inactive screens and modal architecture create serious assistive-technology barriers.

### P2 — material

1. Sector selection has no substantive effect.
2. No back/edit/save/resume/recovery or persistent result.
3. No methodology, citations, source page, support, terms, toolkit scope, or fulfillment detail.
4. Old RN portfolio destination and mismatched JSON-LD positioning.
5. No canonical URL, robots policy, or sitemap.
6. Single-file source, silent failures, no tests/build verification beyond static copying.

### P3 — polish

1. Improve heading/landmark semantics and result chart alternatives.
2. Review contrast, 200%/400% reflow, touch targets, floating-control overlap, and motion in a dedicated pass.
3. Reduce categorical language and repetition across tier bridge copy.

## 14. Exact remediation plan

Repository currently permits file-level targeting only to `index.html` and `vercel.json`.

### Release unblock

1. In `index.html`, vendor compatible Chart.js and jsPDF locally or bundle them; alternatively update `vercel.json` CSP to allow the exact required origins with integrity/crossorigin controls. Local bundling is preferable.
2. Guard `initRadar`, `updateRadar`, and PDF generation so dependency failure produces a visible recoverable state and never blocks assessment progression.
3. Add automated production smoke coverage: load, select each sector, answer all 12 questions, reach gate, validate errors, reach results with synthetic local test handling, create a nonempty PDF, retake, and exercise keyboard path.

### Product/evidence correction

4. Split content/data/scoring from presentation; add explicit schema/version and unit tests for all score boundaries, ties, missing answers, and dimension labels.
5. Rename output to “preliminary self-reflection profile”; remove “exact,” “reveals,” validated-maturity, peer-benchmark, and typical-outcome claims until evidence exists.
6. Either implement genuine sector-specific content/logic or remove sector selection.
7. Add “not applicable / don’t know” and evidence prompts; explain that self-report cannot substitute for document review, stakeholder input, or an accessibility/legal/clinical assessment.
8. Publish a methodology/evidence page with claim-level citations, construct status, limitations, version/date, intended uses, and prohibited uses.

### Privacy/operations

9. Rewrite gate copy to name transmitted fields and purposes. Separate report delivery from optional marketing consent.
10. Add linked privacy and terms notices; document API retention, deletion, processors, incident/support owner, and analytics.
11. Make API UI states await a confirmed `response.ok`; show pending, success, retryable failure, and support paths. Never claim waitlist enrollment on failure.
12. Align report delivery: either actually email it with auditable consent/delivery, or say “download your PDF now.”

### Accessibility/brand

13. Use `hidden`/`inert` and managed focus for screens; implement semantic question groups, accessible selected state, live validation, a real dialog, Escape close, focus trap/restore, and chart tables/text.
14. Add back/edit controls and user-controlled progression.
15. Update RN Builds destination to RN Selected Work; revise structured data to NSAG’s accurate institutional-design identity; add canonical/robots/sitemap.
16. Verify desktop/mobile/touch/keyboard/screen-reader/zoom/contrast/reduced-motion on the deployed remediation, not only locally.

## 15. Recommended estate disposition

**C — component**, specifically `NSAG → M1 Trauma-Informed Legal Space`.

This is not a duplicate (D), not a superseded version (E), and not an independent portfolio item (I/P). Its architecture and links clearly identify it as one module within the fifteen-module NSAG system. The current production release is blocked and should be marked **unpublishable pending remediation**, but quality status does not change its estate relationship. If NSAG later consolidates module routes into the parent site, this standalone Vercel project may then become E/X; current evidence does not establish that migration yet.

## 16. Proposed RN Selected Work case-study corrections

Do not create a separate top-level build card for `nsag-m1`. Represent it within the canonical NSAG case study as a component and clearly distinguish:

- **Built:** a public, twelve-question, six-dimension prototype with hard-coded client-side scoring and intended PDF/result/lead flows.
- **Currently operational:** introduction and sector selection only; the production assessment blocks after the first answer.
- **Not established:** validated governance measurement, peer benchmarking, sector personalization, emailed report fulfillment, toolkit availability, typical outcome claims, or demonstrated advisory results.
- **Evidence boundary:** self-reported educational reflection, not legal advice, clinical assessment, ADA/accessibility audit, accreditation, or institutional certification.
- **Current disposition:** component; release remediation required before linking directly as an interactive example.

Once remediated and production-verified, RN Selected Work may link both to the NSAG parent case study and the live M1 component, with a concise “interactive self-reflection” label rather than “assessment” unless validation supports that term.

## 17. Evidence appendix

### Production/runtime evidence

- Production URL: `https://nsag-m1.vercel.app/`
- Console on load: `ReferenceError: Chart is not defined at initRadar`.
- Console after first answer: `TypeError: Cannot read properties of undefined (reading 'data')` in `updateRadar`.
- Live journey: Legal Aid → Continue → Begin Challenge → answer A; no advance.
- HTTP: `/` 200; `/robots.txt` 404; `/sitemap.xml` 404; `/api/lead` 404; unknown route 404.
- External lead API GET returned 405, consistent with a POST-only surface. No POST was made.

### Repository/deployment evidence

- Git tree: `.gitignore`, `index.html`, `vercel.json` only.
- Production project linked to private `rn-collins/nsag-m1` and commit `c371f29e3fb06281c47e1a1cd0a0163a683a2198`.
- Vercel build log: static output completed in 18 ms; no application build/test occurred.
- `vercel.json` CSP: `script-src 'self' 'unsafe-inline' 'unsafe-eval'`; source loads Chart.js from jsDelivr and jsPDF from cdnjs, so browser correctly blocks both.

### External claim-check sources

- National Institute of Justice CrimeSolutions, trauma-focused treatment profile: supports “up to 90 percent” specifically for justice-involved youth ages 12–18, not the site’s broader population claim: `https://crimesolutions.ojp.gov/ratedpractices/trauma-focused-treatment-juveniles-and-young-adults-trauma-symptoms-and`
- Iversen & Robertson systematic review (PubMed/PMC): finds elevated secondary trauma among legal professionals but substantial variability, methodological weakness, and need for caution; it does not support the blanket “over 50% of legal service workers” formulation: `https://pubmed.ncbi.nlm.nih.gov/35694647/` and `https://pmc.ncbi.nlm.nih.gov/articles/PMC9176334/`
- U.S. DOJ ADA law/regulation portal: demonstrates why accommodation/legal-duty statements must be tied to title, entity, context, and operative law rather than generalized trauma-informed recommendations: `https://www.ada.gov/law-and-regs/ada/`

### Explicitly unverified

- No consequential email, contact, waitlist, purchase, or booking submission was made.
- The private `nsag-api` implementation, email delivery, retention/deletion, and downstream CRM/storage were not inspected in this site audit.
- Results/PDF/share/print/retake could not be exercised through production because of the P0; their source logic was inspected.
- The booked-discovery destination was not opened because its URL contains a personal email identifier.
- Full mobile device, screen-reader, 200%/400% zoom, measured contrast, and assistive-technology testing remain outstanding.
- The promised toolkit, six primary sources, peer benchmarks, cohort program, organization examples, and advisory outcome data were not publicly available and could not be verified.

### Audit constraint

This dossier reports the deployed consumer reality as of the audit timestamp. Vercel READY means the static files deployed; it does not mean the product flow works.
