# NSAG M3 — Stage A Crawl Dossier

Audit date: August 12, 2026 (Pacific/Honolulu)  
Scope: read-only seven-lens audit under `THREE_AGENT_SITE_CRAWL_PROTOCOL.md`  
Companion verification artifact: `ROUTE_CONTROL_LEDGER.json`

## 1. Asset identity

- **Asset:** `nsag-m3`
- **Deployment:** [https://nsag-m3.vercel.app/](https://nsag-m3.vercel.app/)
- **Repository:** private `rn-collins/nsag-m3`, repository ID `1285739757`, default branch `main`, reported size 61.
- **Audited commit:** `6abf2c35f305f065c142db5dca614f8d2c905acc` (August 2, 2026), “fix: remove dead Gumroad link, safe waitlist capture instead.”
- **Repository contents:** `.gitignore`, one 73,085-byte `index.html`, and `vercel.json`. No package manifest, tests, build system, lockfile, source modules, API routes, sitemap, robots file, privacy file, or error page.
- **Deployment architecture:** one static HTML document with inline CSS/data/scoring logic, external Chart.js and jsPDF CDN scripts, cross-origin lead POSTs to `nsag-api`, same-origin tracking calls, and Vercel analytics script references.
- **Parent:** Neurocognitive Systems Advisory Group; M3 is the “Psychedelic Harm Reduction Governance” component of the 15-module Nervous-System-Aware Governance framework.
- **RN Selected Work relationship:** the NSAG case study links directly to this deployment as module 3. M3 should remain a child/component record, not a separate top-level portfolio card.
- **Privacy/data posture presented to users:** raw answers stay in the browser; email, tier, total percentage and six dimension scores are intended to be sent to `nsag-api`; contact name/email/message and toolkit-interest requests are also intended to be sent. UTM values are stored in `sessionStorage`. Vercel Speed Insights loads; the Vercel Web Analytics script and custom `/api/track` route do not.

## 2. Executive verdict

M3 is a thoughtfully written but currently unusable assessment prototype. The only primary product journey cannot progress beyond the first answer in production.

The root cause is deterministic: the Content Security Policy specifies `script-src 'self' 'unsafe-inline' 'unsafe-eval'`, while Chart.js and jsPDF are loaded from `cdn.jsdelivr.net` and `cdnjs.cloudflare.com`. The files themselves return HTTP 200, but the browser blocks them. Live inspection confirmed `Chart === undefined` and `window.jspdf === undefined`. `initRadar()` throws at page initialization. When a consumer selects the first option, `selectOpt()` disables every option and calls `updateRadar()`; that call throws because `chart` was never created, so the auto-advance timer is never scheduled. The consumer is stranded on question one with all choices disabled.

The promised PDF is independently broken: jsPDF is blocked, and `generateResultPDF()` is defined but never called anywhere. The page says the PDF downloads immediately and can be received by email; neither claim is verified by the deployed interface.

The interface also contains two pre-product simulations:

- sector selection does not personalize any scenario, score, result, API payload, or report; and
- the `$500` M3 Toolkit is waitlist-only, yet clicking immediately says the user is on the list and will be emailed personally within a day without checking whether the request succeeded.

The science/governance concept is valuable: screening, environment, facilitator readiness, emergency protocols, follow-up and adverse-event learning are legitimate institutional concerns. However, the page converts one 2008 research-safety paper and an uncited set of authored criteria into a scored “maturity” tier for four legally and clinically distinct sectors. It includes outdated/misleading SSRI language, unsupported commercial outcome claims, and an apparently unsourced Oregon “zero adverse events/reference model” anecdote. It has a legal disclaimer but no adequate medical, clinical, crisis, research, or jurisdiction-specific boundary.

**Disposition: C — component of NSAG, currently broken.** Preserve its conceptual work inside the parent NSAG system; do not market it as a working assessment or independently validated instrument. Stage B should repair the runtime, remove unsupported claims, and reframe it as a jurisdiction-aware educational governance checklist before any commercialization.

Top risks:

1. P0: core assessment blocks at the first answer.
2. P0: primary start CTA is visually clipped outside the overflow-hidden assessment panel at a standard desktop viewport.
3. P1: promised immediate PDF cannot run and has no invocation.
4. P1: SSRI/serotonin/tapering scenario may encourage unsafe clinical inference.
5. P1: unsupported Oregon service-center success story and unsupported “one advisory cycle” outcome claim.
6. P1: all hidden screens remain exposed in the accessibility tree; dynamic assessment is not screen-reader safe.
7. P1: waitlist/contact code reports or implies success without verifying the API response.

## 3. Complete route map

| Route/resource | Observed result | Classification |
|---|---|---|
| `/` | HTTP 200, 73,085 bytes, static assessment UI | Broken core product |
| `/sitemap.xml` | HTTP 404, despite `<link rel="sitemap" href="/sitemap.xml">` | Broken metadata contract |
| `/robots.txt` | HTTP 404 | Missing |
| `/api/track` | HTTP 404 for GET/OPTIONS; inline code POSTs here | Broken tracking route |
| `/_vercel/insights/script.js` | HTTP 404 | Broken analytics reference |
| `/_vercel/speed-insights/script.js` | HTTP 200 | Working script resource |
| Arbitrary unknown route | HTTP 404, default Vercel text response | Working not-found status |

No other same-origin product route was present in HTML, source configuration or repository.

### External destinations/dependencies

- Chart.js CDN: HTTP 200 at origin, browser-blocked by CSP.
- jsPDF CDN: HTTP 200 at origin, browser-blocked by CSP.
- `https://nsag-api.vercel.app/api/lead`: OPTIONS returns 200 and advertises POST/OPTIONS with `Access-Control-Allow-Origin: *`; no consequential submission was made and persistence/email behavior remains unverified.
- NSAG M4 and M9: HTTP 200.
- NSAG Advisory: HTTP 200.
- Aloha AI: HTTP 200.
- `rn-portfolio-khaki.vercel.app`: HTTP 200, but this is a legacy RN portfolio linked under the text “RN Builds.”
- Microsoft Bookings URL is source-present in results; its owner page was verified in the parent NSAG audit. The M3 result surface is unreachable normally.

The page has no canonical link, OG image, favicon, privacy destination, terms destination, evidence/source destination, or parent NSAG navigation link. It does have a title, description, OG title/description/type/URL, meta robots, and JSON-LD.

## 4. Complete interaction/control inventory

### Intro and sector

- “Begin the Challenge” exists in the DOM. At the live 1440×936 viewport, `.intro-inner` measured about 1,580px high inside an 884px-high `.q-panel` with `overflow:hidden`. The button’s top was approximately 1,348px—outside the visible panel. DOM automation could invoke it, but a normal consumer cannot reliably scroll the absolute-positioned screen to it. This is a blocking layout defect.
- Four sector buttons—Clinical, Community, Research, Retreat/Facilitator—work visually.
- Selection adds `.chosen` and enables Continue.
- “Continue” opens question 1 and sets progress to `0/12`.
- `selectedSector` is otherwise unused. It starts with stale M1-era value `legal-aid`; it is not added to result text or API data and does not change the questions. Sector “personalization” is simulated.

### Questions

- Twelve scenarios, four button options each, two scenarios per dimension.
- All questions are generated into the DOM on load.
- Selecting question 1 marks the chosen button and disables all four choices.
- `updateRadar()` then fails because `chart` is undefined; the next-screen timer never registers.
- No Back control is generated. `prevQuestion()` exists as dead code.
- No explicit Next control is generated. Auto-advance is mandatory when functioning.
- Rationales appear for only 900ms and are not an accessible live region.
- Dimension-complete animations similarly lack live semantics.

### Email/results/report

- Email gate source exists but is unreachable through the normal flow.
- Validation only checks for non-empty text containing `@`; it sets `aria-invalid` but provides no text error.
- Source calculates a mean, percentage, six sums and one of four tiers.
- Results source creates interpretations, “strongest/most significant gap,” cross-module recommendations, toolkit preview, Share/Print/Retake actions, and dimension bars.
- The lead POST sends email, M3, tier, percentage and six dimension scores, but ignores HTTP response and failure.
- Raw question answers are not sent in this client payload; derived sensitive governance data are.
- PDF generator exists but is unreachable, blocked by CSP, and never invoked.
- Share and copy point to `nsag-site.vercel.app/m3`, not the dedicated assessment deployment; this is defensible as parent canonical strategy but should be explicit.

### Toolkit/advisory/contact

- Pioneering results offer Advisory and Bookings links.
- Other tiers offer “Join the M3 Toolkit Waitlist — $500.” No checkout exists; source labels it “not yet available for checkout.”
- `requestToolkit()` posts the email if present, ignores every outcome, disables the button, and asserts: “You’re on the list — I’ll email you personally, usually within a day.”
- Contact modal Open and Cancel were safely verified.
- Contact overlay lacks `role=dialog`, `aria-modal`, accessible name, focus trap, initial focus, Escape close and focus restoration. Inputs use placeholders without labels. Submit closes on any resolved HTTP response, checks no `response.ok`, provides no success or error message, and silently ignores rejection.

## 5. Consumer journeys and observed results

### First-time clinical visitor

The proposition is understandable and the legal/freshness/unvalidated notices are visible in the DOM. The intro is far too long for an absolute, overflow-hidden screen. At the tested viewport, the primary CTA is below the clipped region. A consumer may never start.

### Assessment taker

When the start action is invoked, sector selection and Continue work. The first question is clear and the options are comprehensible. Clicking any answer disables all options and stalls. No message explains the failure and no alternate navigation exists. The job-to-be-done is not delivered.

### User expecting a report

The page promises an immediate PDF and email delivery. The user cannot reach the gate normally. Even if the runtime were bypassed, the local PDF function has no call site and its library is blocked. Server-side email/PDF fulfillment is unverified. The promise is broken, not merely incomplete.

### Prospective buyer

The assessment culminates in a $500 toolkit or advisory offer. No toolkit sample, checkout, terms, refund, delivery schedule, ownership license, support or evidence of existence appears. The waitlist is real only if `nsag-api` receives/stores the POST; the client never verifies this. This is a market-validation CTA, not a purchasable product.

### Institutional/legal/regulatory visitor

The page groups licensed therapists, community groups, research institutions and retreat/facilitator organizations under one instrument. Their applicable law, supervision, informed consent, reporting, clinical scope, emergency obligations and records duties differ radically. The page says regulation varies, but the questions/results still describe one “PIONEERING” answer as though it were portable across sectors and jurisdictions.

### Return/revision journey

No persistent state, draft save, back button or answer revision exists. Retake reloads and erases everything. UTM attribution persists for the browser session, while the assessment itself does not.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Static page/intro copy | Partial | Loads, but long content clips the CTA. |
| Sector choice | Simulated | Visual state works; no downstream behavior uses it. |
| Question generation | Working source | 12 screens/48 options exist in DOM. |
| Assessment progression | Broken | First answer throws in `updateRadar`; no advance. |
| Radar | Broken | Chart.js blocked; `Chart` undefined. |
| Scoring | Unreachable/unvalidated | Source logic exists; normal journey cannot execute it. |
| Result interpretation | Unreachable | Source templates exist; core journey blocks. |
| PDF | Broken | jsPDF blocked and generator never called. |
| Email/report delivery | Unverified | API endpoint exists; no submission; server behavior unknown. |
| Toolkit | Simulated/pre-product | Waitlist CTA only; no checkout or fulfillment. |
| Contact modal | Partial | Open/Cancel work; submission/error/accessibility defective. |
| Related-module links | Working | M4 and M9 return 200. |
| Advisory links | Unreachable normally | Target works; result surface does not. |
| Pageview/scroll tracking | Broken | `/api/track` is 404; errors suppressed. |
| Speed Insights | Working resource | Script returns 200. |
| Web Analytics | Broken | referenced script returns 404. |
| Sitemap | Broken | advertised resource returns 404. |
| Privacy/terms | Missing | Inline partial disclosure only. |

## 7. Copy and information-architecture findings

### Strengths

- The problem statement is specific and more credible than generic wellness copy.
- The page clearly states that the tool is educational, self-reported and unvalidated.
- The August 2026 review date and jurisdiction-variability notice are good maintenance signals.
- Six domains are easy to understand.
- Scenarios use concrete institutional decisions rather than abstract agreement scales.
- The results source avoids calling the percentage a validated score.

### Material problems

- “Primary adverse-event determinants” overstates Johnson et al. (2008), a research-safety guideline paper, as a ranked causal finding applicable to clinical practice, retreats, community programs and service centers.
- “Most organizations … are not fully implementing that evidence” has no source or denominator.
- “This challenge reveals the governance gap” is too strong for an unvalidated self-report by one respondent.
- “Your sector shapes which scenarios feel most familiar” describes functionality that does not exist.
- The start page is too long and structurally incompatible with a one-screen absolute layout.
- “PIONEERING,” “maturity,” percentages, “Strong/Partial/Emerging/Absent,” and radar visualization create psychometric authority despite the unvalidated disclaimer.
- Results assert “Most institutions at this tier cross into PIONEERING within one advisory engagement cycle.” No outcomes data support this conversion claim.
- Results say patterns are “common in institutions” without sample data.
- Early-stage copy says the program “is currently producing the conditions most likely to lead to an unmanaged adverse event,” a causal/risk conclusion not justified by 12 self-reported choices.
- “The fastest path forward is not a committee” dismisses multidisciplinary/oversight processes that may be required in clinical research, licensed practice, ethics, quality or regulation.
- The toolkit preview promises six primary sources, policy language, a measurement framework and a tier-specific 90-day roadmap, but no artifact is viewable and checkout is unavailable.
- “I’ll email you personally, usually within a day” is false certainty because the code does not verify receipt.
- Footer says “RN Builds” but links to legacy `rn-portfolio-khaki`, not RN Selected Work.
- “Built by Aloha AI” is compatible with the desired architecture only if paired with “NSAG owns the framework; Aloha AI implemented this interface.” Current wording can imply Aloha AI owns M3.
- Legal disclaimer is necessary but insufficient; the highest-risk scenario is medical, not legal.

## 8. Science, law, policy, and regulatory claim ledger

| Claim/criterion | Evidence and currency | Assessment | Required correction |
|---|---|---|---|
| Set, setting and supervision are “the primary adverse-event determinants” | Johnson, Richards & Griffiths (2008), DOI `10.1177/0269881108093587`, gives safety guidelines for controlled human hallucinogen research | Relevant foundational guidance, but the site converts a research guideline into a ranked universal causal claim | Say these are major safety considerations in controlled research; add newer clinical/service evidence and sector limits |
| One rubric applies to clinical, community, research and retreat settings | No comparative validation | False portability risk; sectors have different standards, authority and legal duties | Branch by sector/jurisdiction or frame as general prompts only |
| SSRI disclosure should trigger serotonin-syndrome assessment and tapering guidance | A 2025 scoping review found concomitant antidepressant/classic psychedelic use generally safe/tolerable, no increased serotonin-syndrome risk particularly for psilocybin, and warned discontinuation may be detrimental | Current option overstates risk and normalizes tapering as a program protocol | Remove taper language; direct medication decisions to prescribing clinician; name compound/dose/evidence uncertainty |
| “Contraindicated medications” generally | Compound and jurisdiction dependent; Oregon specifically identifies recent lithium use among ineligibility factors | Too vague and potentially medical advice | Separate regulatory exclusions, trial exclusions, interactions and clinician judgment |
| “Facilitator credentialing … not analogous to general therapy credentialing” | Oregon licenses facilitators under a defined non-therapy scope; clinical psychedelic research has separate clinician/investigator duties | Directionally correct but sector-specific | Identify licensing regime and scope; do not call all facilitation “therapy” |
| Mandatory clinical supervision for facilitator wellbeing | Plausible governance proposal | Not established as universal legal/clinical standard across sectors | Label as proposed criterion; distinguish required vs recommended |
| Compassion fatigue compromises participant safety | Plausible, but no source or effect estimate | Causal categorical claim unsupported here | Use cautious language and cite relevant supervision/safety literature |
| 24-hour clinical debrief after discontinuation | Authored threshold | No cited validation/jurisdictional basis | Label proposed protocol; adapt to clinical acuity and local requirements |
| Schedule integration before departure + 72-hour check-in | Oregon requires facilitator follow-up within 72 hours and an offer of integration; it does not make this one universal therapy standard | Partly mirrors Oregon, overgeneralized elsewhere | Cite Oregon for Oregon service centers; distinguish offer, follow-up and clinical treatment |
| Mandatory reporting where applicable | Legally accurate only at a high level | Too vague to guide behavior | Name regulator/report type/timeline by jurisdiction and program type |
| 30/90-day wellbeing and integration-satisfaction measurement | Reasonable authored research/governance proposal | Not a validated universal outcome set | Label proposed; add consent/privacy/IRB/research-versus-QI boundaries |
| “Outcome measurement distinguishes governance from intention” | Normative framework principle | Not a scientific fact | Present as NSAG principle |
| Oregon center had zero adverse events and became state-board reference model | No citation, center name, report, regulator record or OHA confirmation; no “state licensing board” structure is identified | Apparently unsupported and potentially fabricated/misleading | Remove immediately unless primary documentary evidence exists |
| Emerging institutions usually reach Pioneering within one advisory cycle | No cohort/outcome data | Unsupported commercial performance claim | Remove or label target, not observed norm |
| Legal/regulatory status changes quickly | Correct; Oregon 2026 rules changed effective January 1, 2026 | Good boundary but not operationalized | Add jurisdiction selector and last-reviewed sources |
| Oregon psilocybin services are “therapy” | Oregon OHA says services are preparation, administration and integration; prescription/referral not required; facilitator scope is regulated separately | Terminology can misstate legal scope | Do not call Oregon service-center services therapy unless delivered under a separate applicable professional license |

### Advice and safety boundary

The page includes a legal-advice notice and says the assessment is unvalidated. It needs equally prominent statements that it is not medical advice, diagnosis, treatment, medication guidance, clinical supervision, emergency guidance, research/IRB advice, a licensing determination, or proof of compliance. It should include crisis/emergency direction near adverse-event content. A single footer/intro disclaimer cannot cure specific prescriptive tapering and clinical protocol language.

The page should identify the controlled-substance context. In the United States, psilocybin remains federally Schedule I even where state-regulated services or local decriminalization exist. FDA clinical investigations, federally funded research, Oregon licensed services, Colorado regulated natural medicine, underground/community use and international retreats are not interchangeable.

## 9. Accessibility and responsive findings

### P0/P1 findings

- Intro screen is absolutely positioned in a fixed-height panel with overflow hidden. Its 1,580px content exceeds the 884px panel; the primary CTA is below the visible boundary at the tested desktop viewport. Smaller screens are at least as risky.
- Hidden `.screen` elements use opacity/pointer-events rather than `display:none`, `hidden`, `aria-hidden` or `inert`. The live accessibility snapshot exposed all 12 questions, gate and results before they were active.
- Questions lack fieldset/legend/radiogroup semantics. Four answer buttons act like single-choice radios without `aria-pressed`/selected state.
- Auto-advance deprives users of an explicit confirmation and there is no Back/revise control.
- Rationale is visible for only 900ms, animated, and not a live region.
- Progress bar lacks `role=progressbar`, value attributes and an announced description.
- Result changes/cinematic reveal/dimension completion are not live regions and may trap attention.
- Contact overlay is not an accessible dialog; form fields have placeholder-only labels.
- Email validation has no visible/announced error text.

### Positive implementation

- Buttons are semantic buttons.
- `:focus-visible` styling exists.
- Reduced-motion CSS disables primary transitions/animations.
- Sector buttons have accessible names.
- Email gate has an `aria-label` and sets `aria-invalid`.
- Mobile media query hides the desktop radar and provides a mobile result canvas.

### Additional risks

- Mobile result canvas also depends on blocked Chart.js.
- No skip link, `<main>` landmark, header/nav landmarks, or page-level source/evidence navigation.
- The fixed contact button may obscure content despite a small-screen size override.
- Green/white and muted color pairs require formal contrast measurement.
- Results PDF generated by canvas/jsPDF would be untagged and inaccessible even if repaired.

Actual deployed desktop DOM and layout were tested. A documented viewport-emulation facility was unavailable; mobile conclusions are source-derived and must be verified at 375×667, 390×844, 768×1024, 200%/400% zoom, touch, keyboard, VoiceOver and NVDA in Stage B.

## 10. Brand-architecture findings

Correct ownership statement: **NSAG owns M3’s governance framework and practice content; Aloha AI may be credited for implementing the technical interface; RN Selected Work documents the build.**

Current signals are mixed:

- Page title/OG correctly identify M3 and NSAG.
- Copyright correctly names Rayven-Nikkita Collins LLC.
- Footer “Built by Aloha AI” does not explain ownership boundary.
- Footer calls a legacy portfolio deployment “RN Builds.”
- JSON-LD describes RN as “AI Educator & Consultant,” uses the legacy portfolio as identity anchor, and does not identify NSAG or the M3 framework. This reduces credibility and conflates the AI build role with the institutional-design/research practice.
- There is no link back to the NSAG parent home, framework, evidence library, privacy or module summary.

M3 should visually remain part of the NSAG module family. Its green theme can distinguish the domain while the header/footer, privacy, parent navigation, versioning and evidence conventions remain consistent across all 15 modules.

## 11. Business model and conversion findings

### Intended market

- Beneficiaries: participants/patients, facilitators, research participants and communities.
- Potential buyers: regulated service centers, clinical programs, research organizations, facilitator-training programs and risk/compliance leaders.
- Decision-makers: clinical leadership, medical director, principal investigator/IRB, compliance, quality/safety, program director, board and licensed operators.

### Economic proposition

The promising product is a documented governance gap review that helps a program distinguish informal good practice from assigned, auditable, reviewed policy. That could support readiness, quality improvement and advisory discovery.

### Current conversion reality

- Free assessment: broken.
- $500 toolkit: not available for checkout; existence/content unverified.
- Advisory: live destination, but unreachable from normal M3 journey.
- Contact: open/cancel works; submission result is unverified and invisible.
- Analytics: custom funnel tracking is broken.

Because the page cannot complete the free diagnostic, every downstream conversion metric is meaningless. Repairing tracking before product truth would not help.

### Recommendation

Do not sell the toolkit or use maturity-result claims yet. First ship a safe educational checklist with jurisdiction/sector branching and a reliable, consent-aware PDF. Pilot it with a small expert panel (psychedelic medicine, pharmacy, harm reduction, research ethics, Oregon/Colorado regulatory counsel, lived experience, accessibility) and document content-validity feedback. Only then decide whether it remains a lead generator, becomes a paid toolkit, or feeds a professional advisory audit.

## 12. Security, privacy, data, and operational findings

### Positive controls

`vercel.json` sets HSTS, frame denial, `nosniff`, referrer policy, permissions policy and CSP. `connect-src` correctly includes `nsag-api`, unlike the parent-site CSP. No secret is present client-side.

### Defects/unknowns

1. CSP blocks the two libraries the product requires. Adding broad CDN origins would restore execution but weaken supply-chain control; self-host pinned assets instead.
2. External scripts have no integrity attributes and versions are inconsistent in provenance (CDN URLs only).
3. `nsag-api` CORS allows `*`; rate limiting, spam prevention, validation, authentication, retention, encryption, deletion and email delivery are unverified.
4. Contact and waitlist handlers ignore `response.ok` and rejection; they create false/invisible outcome states.
5. Assessment lead handler ignores every result; the user cannot know whether report delivery was requested successfully.
6. Inline disclosure says email is used for report and optional follow-up, but there is no separate marketing consent, unsubscribe route, retention period, provider name, deletion procedure or privacy link.
7. Derived governance results can be sensitive institutional-risk data even without raw answers.
8. Contact name/email/message collection is not covered in the assessment disclosure.
9. UTM/referrer/page-scroll collection attempts are not disclosed. The custom route is absent, Web Analytics script is 404, and Speed Insights is live.
10. Raw answers are in memory only; reload loses them. This supports minimization but creates poor completion resilience.
11. No error logging or operational observability catches the production blocker.
12. Static monolith, no tests and no deploy verification allowed a one-line CSP/config defect to disable the entire product.

## 13. Defects ranked by severity

### P0 — blocking

1. Chart.js is blocked by CSP; selection of question 1 throws and assessment cannot advance.
2. Intro CTA is clipped outside the overflow-hidden active screen at the tested standard viewport.

### P1 — serious

1. jsPDF blocked; PDF generator never invoked; immediate-download/report promise is false.
2. All hidden screens remain in accessibility tree; screen-reader journey is unusable.
3. SSRI/serotonin/tapering answer is medically misleading and lacks current evidence/boundary.
4. Unsupported Oregon zero-adverse-event/reference-model anecdote.
5. Unsupported “most institutions reach Pioneering within one advisory cycle” claim.
6. Waitlist asserts receipt and one-day response without checking outcome.
7. One cross-sector maturity model ignores material legal/clinical distinctions.

### P2 — material

1. Sector selection is simulated; stale default `legal-aid` shows copy reuse.
2. No back/revision; forced auto-advance and ephemeral rationale.
3. Contact modal accessibility and error-state defects.
4. Missing medical/research/emergency/professional disclaimer.
5. Missing privacy/terms/evidence/parent navigation.
6. `/api/track`, Vercel Analytics script and advertised sitemap are 404.
7. No canonical or OG image.
8. JSON-LD uses wrong/legacy brand identity.
9. Toolkit product/fulfillment unverified.
10. Scoring/thresholds/weights have no validity evidence.

### P3 — polish

1. No favicon, custom 404 or robots file.
2. Contact floating button can obstruct small-screen content.
3. Results share parent M3 URL rather than dedicated deployment without explanation.
4. Dense intro repeats core thesis.

## 14. Exact remediation plan

No source edits were made in Stage A.

### `index.html` runtime/layout

1. Self-host pinned Chart.js/jsPDF files under a local assets directory or remove both dependencies. Prefer CSS/SVG bars and server/accessibility-safe HTML-to-PDF rather than a decorative radar.
2. Keep CSP self-only after self-hosting; remove `unsafe-eval` if libraries permit. Add integrity/build provenance if any CDN remains.
3. Wrap `initRadar()` in feature/error handling and ensure failure never blocks question progression.
4. Move `setTimeout(nextQuestion)` before nonessential visualization work or isolate visualization in `try/catch`.
5. Actually call PDF generation only after results render and after explicit user action; expose download failure.
6. Replace absolute screen/overflow-hidden layout with document-flow panels or independently scrollable active screen; test all target viewports/zoom.
7. Use `hidden`/`inert`/`aria-hidden` for inactive screens.

### Assessment/product

8. Remove sector step until it genuinely branches content, or implement four reviewed scenario maps and include sector/jurisdiction in result/API/PDF.
9. Add Back, Save/Resume (optional local storage with consent), explicit Next, and answer revision.
10. Reframe tiers as descriptive reflection bands; remove percentage/radar/maturity authority until validity work exists.
11. Document item derivation, scoring rationale, cut points, equal weighting, limitations and content-review panel.
12. Prevent single-respondent results from being described as an institutional profile.

### Science/legal/clinical copy

13. Rewrite Johnson claim as controlled-research safety guidance, not universal adverse-event determinant ranking.
14. Replace SSRI question with current evidence and explicit prescriber ownership; never suggest tapering through this tool.
15. Remove Oregon anecdote unless a named primary official source proves every statement.
16. Remove advisory-cycle and “common pattern” claims unless cohort data exist.
17. Separate Oregon/Colorado/FDA research/community/international branches and add review dates/sources.
18. Add medical, clinical, legal, research, licensing, emergency and crisis boundaries.
19. Link a claim-level evidence appendix rather than promising “6 primary sources” only in an unavailable toolkit.

### API/privacy/conversion

20. Check `response.ok`, parse success, show pending/success/failure, preserve data on failure, and never claim receipt before confirmation.
21. Separate report delivery consent from optional marketing; include privacy link, retention, deletion, provider, unsubscribe and contact details.
22. Remove `/api/track` code or implement/test a documented endpoint. Fix or remove dead Vercel Analytics script.
23. Label toolkit CTA “Join interest list—toolkit in development; proposed price $500.” Do not imply purchase.
24. Provide a sample outline and delivery/license terms before sale.

### Accessibility/metadata/brand

25. Add main/skip landmarks, progressbar semantics, fieldsets/legends, live regions, persistent rationale, accessible dialog and labeled fields.
26. Add canonical, OG image, working sitemap/robots, privacy/terms/evidence and NSAG-parent links.
27. Change JSON-LD to identify NSAG/M3 and RN’s research-led institutional-design role; stop anchoring to legacy portfolio.
28. Footer: “Framework and content: NSAG. Interface implementation: Aloha AI. Case study: RN Selected Work.” Link current canonical destinations.

### Verification

29. Add automated browser test: load, sector choice, all 12 options, back/revision, gate validation without submission, all four tier fixtures, PDF creation, waitlist failure/success mocks, contact failure/success mocks, reload and accessibility tree.
30. Fail deployment if required globals/assets/routes/sitemap are missing or console errors occur.

## 15. Recommended estate disposition

**C — component.**

M3 is not a separate RN business or portfolio work. It is a separately deployed consumer interface within NSAG. Preserve its module identity and deployment only if the parent strategy continues to use independent module URLs. It should be represented under the single NSAG case study with its own audit/status row.

Current readiness: **broken prototype, do not promote as a working assessment.**

If Stage B cannot provide jurisdiction-aware expert review and reliable runtime/report behavior, consolidate M3 into a non-scored parent evidence/checklist page rather than maintaining a misleading standalone assessment.

## 16. Proposed RN Selected Work case-study corrections

Until remediation is production-verified, the NSAG case study should state:

- M3 deployment is live but the audited assessment flow is blocked after the first answer.
- M3 is an educational, unvalidated governance reflection—not an audit, clinical safety instrument, compliance determination or accreditation.
- The current sector selector does not personalize content.
- The current PDF/report and custom tracking are broken; API/email delivery is unverified.
- The $500 toolkit is a waitlist concept, not a purchasable verified deliverable.
- M3’s six dimensions and scoring criteria are RN-authored governance proposals informed by research; citations do not validate the maturity tiers.
- Science/legal/clinical claims require correction, especially SSRI/tapering and the Oregon anecdote.

Suggested short status:

> M3 is a separately deployed NSAG component exploring psychedelic harm-reduction governance across screening, environment, facilitator support, session protocols, integration and adverse-event learning. At the August 12, 2026 audit, its core assessment was not operational because production security policy blocked required client libraries; report generation and toolkit fulfillment were also unverified. The rubric is an educational framework, not a validated clinical, legal, compliance or psychometric instrument.

Do not remove M3 from the parent module list; correct its readiness/evidence boundary and link its future verified state.

## 17. Evidence appendix

### Artifact and repository evidence

- Deployment: [https://nsag-m3.vercel.app/](https://nsag-m3.vercel.app/)
- Parent module summary: [https://nsag-site.vercel.app/m3](https://nsag-site.vercel.app/m3)
- Parent NSAG case source: `app/work/neurocognitive-systems-advisory-group/page.tsx`
- Repository commit: `6abf2c35f305f065c142db5dca614f8d2c905acc`
- Repository tree SHA: same commit; exactly three tracked files.
- Deployment and repository HTML size both 73,085 bytes, supporting source/deployment correspondence.
- `vercel.json` CSP: `script-src 'self' 'unsafe-inline' 'unsafe-eval'`; `connect-src 'self' https://nsag-api.vercel.app`.

### Live observations

- Root returned 200.
- `Chart` and `window.jspdf` were both `undefined` in the deployed browser.
- Sector selection and Continue were observed working.
- Question 1 selection became visually selected, then remained on `screen-q0` with progress `0/12`; all options were disabled.
- Intro inner height approximately 1,580px; question panel approximately 884px; Begin button top approximately 1,348px at 936px viewport height.
- Contact modal Open and Cancel worked; modal had no dialog role/ARIA modal.
- No consequential contact, assessment, email, waitlist, booking or purchase submission was made.
- M4, M9, NSAG Advisory, Aloha AI and legacy RN portfolio links returned 200.
- `nsag-api /api/lead` OPTIONS returned 200; storage and email unverified.
- `/api/track`, `/sitemap.xml`, `/robots.txt` and Vercel Web Analytics script returned 404.

### Primary/current sources used for high-risk review

- Johnson, Richards & Griffiths (2008), “Human hallucinogen research: guidelines for safety”: [https://doi.org/10.1177/0269881108093587](https://doi.org/10.1177/0269881108093587)
- 2025 scoping review of antidepressants and classic psychedelics: [https://pubmed.ncbi.nlm.nih.gov/40937732/](https://pubmed.ncbi.nlm.nih.gov/40937732/)
- Oregon Health Authority, access and required preparation/72-hour follow-up/integration information: [https://www.oregon.gov/oha/PH/PREVENTIONWELLNESS/Pages/Psilocybin-Access-Psilocybin-Services.aspx](https://www.oregon.gov/oha/PH/PREVENTIONWELLNESS/Pages/Psilocybin-Access-Psilocybin-Services.aspx)
- Oregon Health Authority, 2026 facilitator requirements and scope materials: [https://www.oregon.gov/oha/PH/PREVENTIONWELLNESS/Pages/Psilocybin-Information-for-Licensed-Facilitators.aspx](https://www.oregon.gov/oha/PH/PREVENTIONWELLNESS/Pages/Psilocybin-Information-for-Licensed-Facilitators.aspx)
- Oregon Health Authority, definition of psilocybin services and federal Schedule I notice: [https://www.oregon.gov/oha/ph/preventionwellness/pages/psilocybin-what-are-psilocybin-services.aspx](https://www.oregon.gov/oha/ph/preventionwellness/pages/psilocybin-what-are-psilocybin-services.aspx)
- FDA informed-consent guidance for clinical investigations: [https://www.fda.gov/regulatory-information/search-fda-guidance-documents/informed-consent](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/informed-consent)

### Explicit unverified areas

- No assessment result, contact, waitlist, email, booking or purchase was submitted.
- `nsag-api` persistence, validation, report generation, email, retention, deletion, rate limiting and abuse controls remain unverified.
- Toolkit content/existence, sales terms and fulfillment remain unverified.
- Advisory client outcomes and the “one engagement cycle” claim remain unverified.
- The Oregon zero-adverse-event/reference-model anecdote remains unverified and should be presumed unusable until primary evidence is produced.
- No content-validity, reliability, inter-rater, outcome-prediction or sector/jurisdiction validation was provided for scoring.
- Mobile and assistive-technology device testing remains required; responsive findings are source/layout-derived.

This dossier freezes Stage A findings only. It does not authorize edits to M3, NSAG, NSAG infrastructure, or RN Selected Work.
