# NSAG M5 — Stage A Crawl Dossier

Audit date: August 12, 2026 HST  
Mode: read-only; no source, deployment, lead, booking, API, or RN Selected Work edits  
Scope: the complete M5 assessment interface and its relationship to the NSAG M5 module page

## 1. Asset identity

- **Assessment:** `https://nsag-m5.vercel.app/`.
- **Parent module page:** `https://nsag-site.vercel.app/m5`, canonical informational page for M5 and source of the assessment CTA.
- **Vercel project:** `nsag-m5`, ID `prj_QMuJcGzDLIwQWSuZG6to0JOAyKE8`, team `team_6xuOmJL3MoIFarDpy9odi175`.
- **Latest production deployment:** `dpl_Fa4Xu3c5PN38f5i535xLoAfGMTdN`, READY, linked to commit `ef6665c05106692d7d91a76fa06d53d48f51ab2e`.
- **Repository:** private `rn-collins/nsag-m5`, ID `1285739828`, default branch `main`.
- **Architecture:** static `index.html` plus `vercel.json` and `.gitignore`; no package manifest, build step, tests, functions, database, or local API.
- **Repository/deployment relationship:** direct GitHub-backed Vercel production deployment. Vercel records twenty deployments. The latest commit replaces a dead Gumroad link with an API-backed waitlist.
- **Parent practice/ownership:** Neurocognitive Systems Advisory Group. M5 is an applied NSAG module. Aloha AI receives implementation credit but does not own the framework.
- **Public/private boundary:** repository private; assessment and parent page public/indexable. Email, derived assessment scores, toolkit interest, and contact data leave the browser for `nsag-api`.
- **Canonical relationship:** `nsag-site.vercel.app/m5` is the canonical M5 explanatory/evidence page; `nsag-m5.vercel.app` is the canonical assessment interface linked from it. The assessment is a **component**, not a separate portfolio build.

## 2. Executive verdict

M5 is presented as a free, twelve-scenario institutional self-assessment for cities, parks departments, architecture firms, and community organizations. It promises a six-dimension biophilic civic-infrastructure maturity tier, immediate PDF report, and a route into NSAG advisory or a future $500 toolkit.

The assessment is **not operational**. Its CSP blocks both Chart.js and jsPDF. The first answer calls an undefined chart object and cannot advance. The promised PDF generator exists but has no call site. The central result interpretation is computed but never rendered.

Even after those code defects, the current questionnaire would not support the claimed result. Its twelve “scenarios” are six pairs of duplicated generic prompts; every question presents the same four maturity phrases. It measures self-reported generic policy formality, not the six named environmental constructs. Sector selection has no effect. The resulting tier and dimension rankings are therefore simulated precision.

M5 should remain **C — an NSAG component**, with its assessment temporarily deindexed or marked unavailable until rebuilt and validated as an educational checklist. It should not have its own RN Selected Work card. The parent M5 page is the correct public evidence/context surface, but some of its scientific summaries also require qualification.

Top risks:

1. P0 assessment freeze on first answer.
2. P0 promised PDF/report is absent.
3. P1 questionnaire content does not measure its six constructs.
4. P1 clinical evidence is generalized causally to civic settings without supporting evidence on the assessment page.
5. P1 mandatory email/derived-result collection lacks a local privacy policy and separate marketing consent.
6. P1 concrete outcome vignettes and service-success claims are uncited.

## 3. Complete route map

The assessment repository exposes only `/`; it has no router or server functions.

- `/` → 200.
- `/robots.txt` → 404.
- `/sitemap.xml` → 404 despite an advertised sitemap link.
- `/privacy` → 404.
- `/terms` → 404.
- `/api/track` GET and POST → 404; analytics failures are swallowed.

The parent module page `/m5` returns 200 and links directly to the assessment. Related M6, M7, and M10 deployments return 200. Parent NSAG advisory, Aloha AI, legacy RN portfolio, and parent `/m5` destinations return 200. Outlook booking and the lead API were not consequentially submitted. See `ROUTE_CONTROL_LEDGER.md`.

## 4. Complete interaction/control inventory

The app contains one begin control; four sector buttons; Continue; 48 generated answers; A/B/C/D shortcuts; an email gate/reveal; results copy; generated share/print/retake; conditional advisory/toolkit and booking CTAs; three related-module cards; two footer links; and a fixed contact modal with three inputs, send, cancel, and backdrop close.

All controls and resulting states are recorded in `ROUTE_CONTROL_LEDGER.md`. The primary dependency chain is deterministic: Chart.js is blocked by the response CSP → `initRadar()` fails → first `selectOpt()` calls `updateRadar()` → `chart.data` throws → next-question scheduling is never reached.

## 5. Consumer journeys and observed results

### Understand M5

The audience, six dimensions, time estimate, and educational/not-validated boundary are stated. The opening is much longer than the task warrants and makes causal/generalization claims before a user sees evidence. The assessment page does not link to the parent evidence section.

### Select a sector

The city, parks, architecture, and community choices are clear and enable Continue. The chosen value is stored but never read. All sectors receive identical copy, items, scoring, and recommendations; personalization is simulated.

### Complete the assessment

**Failed on question 1.** The first answer is visibly selectable, but chart update throws before rationale/advance. Keyboard selection follows the same broken path. No consumer can reach question 2 through the deployed flow.

### Interpret the questionnaire

The source reveals a second failure independent of runtime: the two questions in each dimension are duplicates, and all twelve use the same answer ladder. A user is asked essentially the same generic governance question twelve times. This is repetitive, easy to game, and incapable of distinguishing the named dimensions.

### Receive results/report

**Unavailable.** Source contains tier math, dimension bands, DOM result building, and an API lead POST. It does not call `generateResultPDF()` and contains no report-email instruction. Even if reached, “What this means” stays blank because `rec` is not placed into `#rec-text`.

### Convert/contact

Result CTAs are unreachable. Lower tiers would see a $500 waitlist, not checkout; its UI always claims success even on API failure. The contact modal can open/close but is inaccessible and similarly treats any resolved HTTP response as success. No submission was made.

### Return/error states

There is no persistence, recoverable dependency error, API error, clipboard error, or PDF error. Reload clears progress. A back function exists without a rendered back control. Invalid email lacks an announced error message.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Static M5 explanation | Working | Served at `/`. |
| Parent M5 evidence/context page | Working route | `/m5` returns 200 and links to assessment. |
| Sector selector | Simulated/partial | Visual selection works; value unused. |
| 12 question screens | Real code, invalid content | Generated, but six duplicate pairs and one repeated response ladder. |
| Assessment progression | **Broken** | Chart dependency error blocks first answer. |
| Radar chart | **Broken** | Chart.js CSP-blocked. |
| Scoring | Real code, unsupported meaning | Hard-coded sum/mean thresholds; no validation. |
| Dimension scores | Simulated precision | Two duplicate generic items per dimension. |
| Tier recommendations | Partial | Hard-coded; central `rec` not rendered. |
| PDF generation | **Missing delivery** | Function defined, never invoked; jsPDF CSP-blocked. |
| Email report | Missing | No delivery instruction exists. |
| Toolkit | Intentionally unavailable | Waitlist and unverified preview only. |
| Toolkit waitlist | Partial/false-success | Fire-and-forget POST; immediate success state. |
| Contact form | Partial/false-success | POST without `response.ok` handling. |
| Advisory/booking | Real destinations, unreachable | Parent advisory 200; booking not submitted. |
| Analytics | Broken | `/api/track` 404. |
| Privacy/terms | Missing locally | Both 404. Parent has a privacy route, but assessment never links it. |
| Sitemap/robots | Missing | Sitemap advertised but 404; robots 404. |
| Mobile/print CSS | Present, unverified | Media and print rules exist; chart remains broken. |

## 7. Copy and information-architecture findings

Strengths: audience and dimensions are named; institutional governance framing is differentiating; the not-validated disclaimer is prominent; parent page provides a fuller evidence/context layer.

Defects:

- “12 scenarios” is false in substance: the twelve items are templated duplicates, not scenarios.
- “Your sector shapes which scenarios feel most familiar” promises absent personalization.
- “Concrete starting point for whichever gap is costing you the most” implies cost detection without cost data.
- “Your results download as a PDF immediately” and “receive the PDF report” describe an absent feature.
- “Answers stay in your browser” obscures transmission of tier, percentage, and dimension sums.
- Optional updates are bundled into the mandatory gate without opt-in.
- The legal-advice disclaimer is a mismatched template for a built-environment/public-health tool. It needs building/engineering, accessibility, public-health, medical, procurement, and jurisdictional boundaries as relevant—not generic legal boilerplate alone.
- “Most civic institutions have never governed…” is an unsupported prevalence claim.
- Claims that public/staff environmental disparities are “rarely” equal and often functions of income/language/disability need evidence or careful normative wording.
- “Most institutions…cross into PIONEERING within one capital-planning or policy cycle” is an unsupported service/outcome claim.
- Concrete public-library and city-planning vignettes appear factual without names or sources; label them illustrative hypotheticals or cite evidence.
- EARLY STAGE copy says the institution is “producing the conditions the Ulrich evidence base warns against…at scale,” which cannot be inferred from selecting generic governance answers.
- Copy/share says “scored” while result disclaimer says not validated.
- Footer and JSON-LD point to the legacy RN portfolio and “AI Educator & Consultant,” fragmenting NSAG/RN Selected Work identity.
- Parent page correctly owns the evidence and canonical module URL, but the assessment lacks a persistent “Back to M5 / See evidence” route.

## 8. Science/law/policy/regulatory claim ledger

The assessment page names only “Ulrich (1984)” and supplies no hyperlink, bibliography, evidence map, standards, policy sources, or jurisdiction. The parent `/m5` page lists three studies, but the assessment neither links them nor accurately bounds every inference.

| Claim | Evidence available | Finding/correction |
|---|---|---|
| Ulrich (1984): nature-view surgical patients had shorter stays, fewer potent analgesics, fewer negative nurse notes | Primary paper, DOI `10.1126/science.6143402`, 23 matched pairs | Supported in the studied cholecystectomy population. Say “fewer potent analgesics,” not broadly “required less pain medication.” |
| Ulrich proves a mechanism involving “daylight, quiet, and a view of something living” | The 1984 study varied window view; it did not isolate daylight or quiet, nor establish a nervous-system mechanism | Overstated. Separate observed association from later theory/mechanism evidence. |
| The clinical mechanism “applies wherever” people wait under institutional control | No civic-setting evidence cited | Unsupported generalization. Present as a hypothesis/design rationale or cite setting-specific research. |
| Courthouse waiting and hospital wards create a related stress state, therefore Ulrich findings “translate” | No source | Plausible analogy, not established causal translation. Qualify and test. |
| “Most civic institutions” have never governed biophilic access/equity | No census/survey | Unsupported prevalence claim; remove or source. |
| Public areas are rarely built to staff-wing standards and routing is often a function of income/language/disability | No building/audit data | Equity concern is important but prevalence/causal wording is unsupported. Cite audits or recast as questions the framework tests. |
| Acoustic governance is physiological-health governance | No acoustic standard/evidence cited | Needs exposure/outcome sources and standards; distinguish privacy, annoyance, speech intelligibility, occupational noise, and health. |
| Circadian lighting is chronobiological-health governance | Appears as rationale for a nature-integration item | Construct mismatch. Cite circadian-light evidence/standards only in a distinct light item. |
| Thermal comfort is a physiological baseline; one setpoint is a policy choice | No standard/source cited | Directionally reasonable, but operational criteria need ASHRAE 55 or applicable code, accommodation/accessibility law, occupant diversity, and jurisdiction. |
| Medical-condition temperature requests require a standing process | No jurisdiction/accommodation authority | Normative recommendation with possible legal implications. Cite applicable disability/employment/public-accommodation law by jurisdiction; do not imply universal process. |
| Ventilation rates measurably affect concentration and health outcomes | No citation | Supported generally by IAQ literature, but ventilation, CO2, PM2.5, infection risk, and cognition are distinct. Cite specific studies/standards and avoid causal compression. |
| Indoor monitoring needs published thresholds and response protocol | No standard | Sound governance principle; thresholds must be contaminant-, occupancy-, code-, and jurisdiction-specific. |
| Ulrich evidence warns against EARLY STAGE respondents’ actual conditions “at scale” | Questionnaire collects no environmental measurements | False inference. Governance self-report cannot establish exposure or health impact. |
| PIONEERING standards survive turnover/capital cycles | No longitudinal evidence | Aspirational theory, not measured outcome. |
| Most EMERGING institutions reach PIONEERING in one cycle | No cohort/outcome data | Remove or substantiate with defined sample, timeframe, intervention, and validation. |
| Library/city examples and reported stress reduction | No named institution, survey, or source | Treat as hypothetical/composite; “significantly lower” falsely implies statistical analysis. |
| Parent page: Ulrich found lower complication rates | Parent’s evidence card | The secondary summary notes the complication difference was not statistically significant. Parent copy must say that; do not list it as a demonstrated outcome. |
| Parent page: “identical treatment” and “window view alone” | Retrospective matched-records design | Overstates causal control. Rooms were similar and patients matched; this was not a randomized trial. |
| Parent page: “systematic reviews since 2020 confirm the effect” | No review cited in the visible evidence cards | Add named reviews and define which effect/settings/outcomes, or remove. |
| Sarkar et al. (2018), n=94,879, residential greenness and MDD odds | DOI `10.1016/S2542-5196(18)30051-2` on parent | Observational residential evidence can inform equity context but does not validate civic-building tiers or causal institutional claims. |

Relevant primary/standards context reviewed: Ulrich’s PubMed record and DOI; a multi-country longitudinal office-worker study associating indoor PM2.5/higher CO2 with poorer cognitive-test performance; ASHRAE’s scopes for thermal comfort and ventilation/IAQ. These support focused evidence mapping, not the current scoring instrument. Codes and standards vary by occupancy and jurisdiction; compliance with minimum code is not measured here.

## 9. Accessibility and responsive findings

Positive: `lang="en"`, native buttons, visible focus rule, reduced-motion rule, email/sector accessible names, desktop/mobile layout rules, and print CSS.

Material issues:

- Contact modal lacks dialog semantics, focus trap, initial focus, Escape close, and focus restoration.
- Contact inputs have placeholders but no labels.
- Invalid email lacks associated/live error text.
- Progress, rationale, dimension completion, tier reveal, and waitlist confirmation are not announced.
- Canvas chart has no accessible text alternative.
- Auto-advance is timed; answer buttons are blocked with CSS pointer events rather than native disabled state.
- Sector Continue is visually disabled but remains keyboard-invokable because no native `disabled` or `aria-disabled` is used.
- No `main`, question form/fieldset/legend, navigation landmark, or assessment-status semantics.
- Fixed contact button may obscure content at zoom/mobile; CSS shrinkage is not a reflow test.
- Related cards replace current tab; footer links open new tabs; behavior is inconsistent.
- Reduced motion does not remove all timer-driven semantic transitions.

No browser executable was available; contrast, focus sequence, touch targets, mobile rendering, 200%/400% zoom/reflow, and screen-reader behavior remain explicitly unverified.

## 10. Brand-architecture findings

NSAG owns M5’s framework and advisory interpretation. Aloha AI may be credited for implementation; RN Builds/RN Selected Work is the portfolio/workbench layer. M5 should appear under the single NSAG case study, not as an independent build.

The parent `nsag-site.vercel.app/m5` page is the right canonical public context. The standalone assessment should clearly say “Part of NSAG M5,” link back to evidence/framework/privacy, and use the parent page as its canonical explanatory route. Legacy RN portfolio links/JSON-LD should be replaced. The polished institutional voice is undermined by a broken assessment, template disclaimers, duplicate questions, and unsupported outcome copy.

## 11. Business-model and conversion findings

- **Users:** public-facility managers, architects, parks administrators, planners, community organizations.
- **Beneficiaries:** public visitors, staff, communities, and people with access/health vulnerabilities.
- **Buyers:** municipal facilities/public works leaders, capital planning/procurement, parks directors, design firms, health/equity officers, institutional executives.
- **Role:** educational lead magnet for advisory and future toolkit; not an audit, certification, engineering analysis, code review, or environmental measurement.
- **Value thesis:** turn environmental design preferences into documented, monitored governance.
- **Trust/adoption barriers:** broken journey, no local privacy link, generic/invalid questions, evidence overreach, one respondent speaking for an institution, and no evidence/document collection.
- **Commercial path:** PIONEERING → advisory; other tiers → $500 waitlist + discovery. Toolkit contents and fulfillment are unverified.

The smallest viable business path is not more features. Build six genuinely distinct evidence-based checklists; offer ungated on-device results; disclose limits; link evidence/standards; then offer a documented toolkit with actual scope, version, buyer, fulfillment, and support. Institutional assessment should eventually support “unknown/not my role,” respondent role, multiple stakeholders, documentary evidence, jurisdiction/occupancy, and uncertainty—not a universal score.

## 12. Security, privacy, data, and operational findings

Positive headers: HSTS, DENY/frame-ancestors, nosniff, strict-origin referrer policy, restrictive permissions policy, and narrow `connect-src`.

Defects:

- CSP blocks required Chart.js/jsPDF while allowing unsafe inline/eval.
- Third-party scripts have no Subresource Integrity.
- Result POST includes email, tier, percentage, and six dimension sums; this contradicts the ordinary meaning of answers staying locally.
- Mandatory gate bundles report delivery and optional marketing follow-up.
- No assessment privacy/terms route or link. The parent privacy page is not surfaced.
- API storage, retention, deletion, rate limits, CORS, and email behavior cannot be verified in this repository.
- Contact/waitlist do not check HTTP status and falsely report success.
- Analytics endpoint is missing and silent.
- No tests, dependency lock, build validation, error monitoring, release check, or assessment-method version is present.

## 13. Defects ranked P0–P3

### P0 — blocking

1. CSP blocks Chart.js; first answer cannot advance.
2. Immediate PDF/report promise is unimplemented; generator has no call and jsPDF is blocked.

### P1 — serious

1. Twelve questions are six duplicate pairs with one repeated answer ladder; dimension/tier meaning is invalid.
2. Clinical observational evidence is generalized to civic contexts and mechanisms without adequate sourcing/qualification.
3. Derived institutional scores leave browser behind mandatory email gate; no local privacy link or separate updates consent.
4. `rec` never renders, leaving “What this means” blank.
5. Concrete institution/outcome examples and one-cycle progression claim are unsupported.
6. Questionnaire cannot infer actual environmental conditions or health effects, but results do so.
7. Contact/waitlist false-success handling.

### P2 — material

1. Sector personalization simulated.
2. Parent evidence exists but assessment does not link it; some parent summaries overstate Ulrich.
3. Mismatched legal-only disclaimer.
4. Missing local privacy, terms, sitemap, robots; broken analytics.
5. Back function unreachable; no persistence/recovery/error states.
6. Accessibility defects in dialog, errors, dynamic states, chart, and disabled controls.
7. Legacy RN portfolio/schema identity.
8. Toolkit/peer benchmarking/cohort promises unverified.

### P3 — polish

1. Dense intro before start.
2. Repetitive institutional-governance rhetoric and templated rationales.
3. Inconsistent tab behavior.
4. Unused code (`selectedSector`, `prevQuestion`, animation counter, PDF pct parameter).

## 14. Exact remediation plan

Primary current targets: `index.html`, `vercel.json`; add a real test/build setup.

1. Self-host pinned Chart.js/jsPDF or correctly allow exact hosts with SRI; make assessment progression independent of visualization failure.
2. Call and verify PDF generation or remove every PDF/email-report promise. Prefer an ungated Download button after results.
3. Render `rec` into `#rec-text`.
4. Replace templated items with at least two distinct, observable questions per construct. Define operational evidence: daylight/view access; acoustic/privacy/noise; nature-access policy; thermal comfort/accommodations; IAQ contaminants/ventilation/threshold/response; distribution/equity audit.
5. Publish rubric version, item-to-evidence mapping, scoring rationale, intended use, non-use, uncertainty, and validation status. Call it a guided checklist until validated.
6. Add “unknown/not in my role,” respondent role, occupancy/building type, jurisdiction, and evidence prompts. Do not infer exposure/health outcomes from governance answers.
7. Link the parent M5 evidence section. Correct Ulrich language: retrospective matched records, fewer potent analgesics, no causal overstatement, nonsignificant complication difference. Add setting-specific evidence and applicable ASHRAE/code sources.
8. Label normative NSAG requirements separately from codes, law, health guidance, and evidence. Remove unsupported prevalence, one-cycle, and “significant” vignettes or source/label hypothetical.
9. Make results visible without email; separately opt in to email/marketing. Link parent privacy policy and disclose exact result fields, purposes, retention/deletion/contact.
10. Await API calls, inspect `response.ok`, and show pending/success/error states.
11. Either implement sector branching or remove selector/personalization claim.
12. Add semantic assessment forms, live regions, accessible chart table, real disabled states, accessible modal, manual advance option, and browser/zoom/screen-reader tests.
13. Fix sitemap/robots/analytics; add assessment canonical pointing to appropriate URL strategy; update JSON-LD and RN Selected Work links.
14. Add lint/syntax, unit tests for thresholds/bands, browser tests for all four tier boundaries, CSP/network assertions, API failure tests, PDF-content test, axe, mobile/touch, print, and 200%/400% reflow gates.

Stage B acceptance: 12/12 progression by mouse/keyboard/touch; no console/network errors; distinct content-valid items; verified result/PDF; accurate data disclosure and consent; API error fidelity; evidence and standards review; accessibility and mobile verification; production retest.

## 15. Recommended estate disposition

**C — Component**, retained under the canonical NSAG case study and parent M5 page, with assessment release hold pending P0/P1 remediation.

- Not **P**: one of fifteen applied NSAG modules, not a separate portfolio product.
- Not **D**: parent page and assessment are complementary, not duplicate deployments.
- Not **I**: public consumer interface.
- Not final **E**: currently incomplete, but durable estate role is a component.
- Not **X**: concept can materially demonstrate NSAG when honest and functional.
- Not **U**: repo/deployment/parent/canonical mapping is evidenced.

Operational decision: keep repository private, parent M5 context public, temporarily deindex/disable the assessment CTA or label it under remediation, then relaunch after verification.

## 16. Proposed RN Selected Work case-study corrections

Do not add an M5 case-study card. Under the NSAG parent case study:

- list M5 as “Biophilic Civic Infrastructure — educational governance checklist for public built environments”;
- label the current assessment “prototype under remediation” or temporarily remove its live link;
- state that current output is one respondent’s unvalidated self-reflection, not an audit, code review, engineering/building assessment, public-health evaluation, certification, or proof of environmental/health outcomes;
- identify NSAG as framework owner and Aloha AI as technical implementation layer;
- after repair, provide “Read M5 evidence and framework” → parent `/m5`, plus “Open the M5 checklist” → assessment;
- accurately disclose email/derived-result transfer and privacy policy;
- do not claim working PDF, peer benchmarking, toolkit availability, validated scores, or institutional improvement outcomes until verified;
- retain M5 within the NSAG case study’s module architecture rather than increasing portfolio cardinality.

Accurate interim sentence: “M5 is an NSAG prototype translating evidence and standards about light, acoustics, nature access, thermal comfort, indoor air, and equitable access into an educational governance checklist; its public assessment/report flow is under remediation and is not a validated audit or building-health evaluation.”

## 17. Evidence appendix

### Deployment/repository

- Vercel project `prj_QMuJcGzDLIwQWSuZG6to0JOAyKE8`.
- Deployment `dpl_Fa4Xu3c5PN38f5i535xLoAfGMTdN`, READY.
- GitHub commit `ef6665c05106692d7d91a76fa06d53d48f51ab2e`.
- Files: `index.html`, `vercel.json`, `.gitignore`; no package/tests/build.
- Live assessment SHA-256: `2e314f22b61b6f8d32a43d305089d79440eb2e5a12633e909840061f65e1e597`.
- Extracted main JavaScript passes `node --check`; failures are runtime/product defects.

### Runtime/source proof

- Live CSP: `script-src 'self' 'unsafe-inline' 'unsafe-eval'`; external cdnjs/jsDelivr scripts excluded.
- Initialization: `buildQuestionScreens(); initRadar(); updateProgress();`.
- First-answer path calls `updateRadar()` before any advancement and dereferences `chart.data`.
- `generateResultPDF()` has one definition and zero invocations.
- `rec` has four tier assignments and zero writes to `#rec-text`.
- `selectedSector` is assigned but never consumed.
- All 12 options arrays are verbatim identical; each dimension’s two prompts are identical.
- Result API payload includes email, tier, score, and dimension sums.

### HTTP proof

- Assessment `/` 200.
- `/robots.txt`, `/sitemap.xml`, `/privacy`, `/terms`, `/api/track` 404; POST `/api/track` 404.
- Parent `/m5`, parent `/advisory`, M6, M7, M10, Aloha AI, and legacy RN portfolio 200.
- No lead, email, booking, waitlist, or contact submission made.

### Research/standards context

- Ulrich RS (1984), *View through a window may influence recovery from surgery*, Science 224(4647):420–421, PMID 6143402, DOI `10.1126/science.6143402`.
- Sarkar, Webster & Gallacher (2018), residential greenness and major depressive disorder, DOI `10.1016/S2542-5196(18)30051-2` (parent page citation; observational residential context).
- Multi-country longitudinal office-worker IAQ/cognition study, PubMed PMID 35330988 (association, not universal causal threshold).
- ASHRAE Standard 55 scope for thermal environmental conditions and Standard 62.1/62.2 family for ventilation/acceptable IAQ; applicable requirements depend on occupancy/version/jurisdiction.

### Explicitly unverified

- No executable browser: no screenshot, computed contrast, focus-order, touch, native share, clipboard, print, mobile layout, zoom/reflow, or downloaded-PDF observation is claimed.
- `nsag-api` persistence, email, CORS, rate limiting, retention, deletion, and security require a separate infrastructure audit.
- Toolkit, six promised primary sources, peer benchmarking, cohort program, advisory outcomes, library/city examples, and reported stress survey were unavailable.
- No building, IAQ, acoustic, thermal, accessibility, code, procurement, or legal compliance determination was performed.

The assessment repository/route boundary is complete. Parent `/m5` was inspected to establish ownership, canonical relationship, evidence context, and CTA promises; it was not substituted for the parent `nsag-site` dossier.
