# Myelin CE — Stage A Read-Only Crawl Dossier

Audit date: August 12, 2026 (HST)  
Protocol: `THREE_AGENT_SITE_CRAWL_PROTOCOL.md`  
Stage: A — read-only crawl and diagnosis  
Auditor boundary: no changes were made to `myelin-ce`, Aloha AI, Vercel configuration, or RN Selected Work.

## Status language

- **Verified:** directly observed in production, repository, deployment metadata, or an authoritative source.
- **Broken:** the promised or configured result fails or materially misstates what occurs.
- **Simulated:** a hard-coded interface depicts functionality or inventory without delivering the underlying product.
- **Inaccessible:** present behind a protection or otherwise unavailable to the public auditor.
- **Unverified:** not safely testable from the deployed consumer surface or not substantiated by supplied evidence.
- **Intentionally unavailable:** expressly labeled as planned/in development and not represented as currently delivered.

## 1. Asset identity

| Field | Finding | Status |
|---|---|---|
| Public name | Myelin CE | Verified in repository |
| Intended function | Continuing-education catalog and launch funnel across AI, neuroscience, ethics, law, cannabis, psychedelics, and professional practice | Verified in repository |
| GitHub | `rn-collins/myelin-ce`, public, default branch `main` | Verified |
| Audited commit | `ca4f049c960411ae077f93e6395fdaf8ba545d10`, August 2, 2026 | Verified |
| Vercel project | `myelin-ce`; `prj_27BAHdS5tReej1zqs88SjTMZtSIM` | Verified |
| Latest production deployment | `dpl_6EKBFjVPxHwDRrwiKygUiujNcyia`, READY, built from audited commit | Verified |
| Canonical public domain | `https://myelin-ce.vercel.app` | Verified |
| Delivered destination | `https://aloha-ai-consulting.vercel.app/ce/` | Verified |
| Delivered result | Aloha AI no-index 404 page | Broken |
| Parent/owner stated in artifact | “A continuing-education brand of Rayven-Nikkita Collins LLC”; “Built by Aloha AI” | Verified in repository copy |
| Current architectural parent | A retired surface intended to consolidate into Aloha AI Learning; Aloha AI has no `/ce` route at current commit `57dc643...` | Verified |
| RN Selected Work relationship | Absent from the 35 recorded builds and listed as unresolved in the estate ledger | Verified |
| Privacy | Repository and canonical alias are public. The deployment-specific and team aliases redirected to Vercel login during anonymous HTTP checks. | Partly verified |

The Git history is dispositive about intent: commit `b83785e` is titled **“Redirect retired Myelin CE site to Aloha AI CE (/ce) with permanent 308.”** Myelin CE is therefore not an unexplained new build; it is a retired standalone surface whose configured successor was never created or was later removed.

## 2. Executive verdict

### What it is

The repository is a two-page, static concept and marketing surface for a potentially substantial continuing-education practice. It contains:

- a catalog page with 11 named launch courses;
- a hard-coded 12-series library containing 111 named planned courses;
- course-detail and library-detail modals;
- a free evidence briefing;
- accreditation, presenter, related-tool, notification, and contact sections.

### Does it work?

**No, as a public product it does not work.** Every canonical Myelin route permanently redirects to an Aloha AI URL that returns a branded 404. The static catalog, free guide, forms, modal interfaces, and related-tool links are therefore inaccessible to a consumer.

Even if the redirect were removed, the repository would not yet support its core promises:

1. the launch-updates form does not subscribe anyone or store an email;
2. the free-guide CTA points to a nonexistent filename;
3. the stated 125-course total conflicts with the 111 entries in the hard-coded library;
4. most library entries are generic planned records without course content;
5. “accredited,” “ready,” “submission-ready,” “live,” and “application in progress” claims are not backed by application receipts, approval records, course packages, or accessible course delivery;
6. several accessibility failures block keyboard and mobile users;
7. tracking and contact behavior is internally inconsistent with the Content Security Policy.

### Should it exist?

The underlying educational program may merit existence, but **this retired deployment should not remain an independent public portfolio build.** It should be reconciled as a superseded Myelin surface and either:

- rebuilt as a truthful, bounded component of Aloha AI Learning after evidence and delivery gates are met; or
- archived without a redirect until a real canonical CE destination exists.

### Top risks

1. **P0 availability:** all public requests end at a 404.
2. **P1 deceptive conversion:** the email form states “you’re on the list” without subscribing the user.
3. **P1 accreditation/readiness:** metadata and guide copy call offerings “accredited” while the page says accreditation is only in progress.
4. **P1 professional-risk claims:** health, legal, privacy, psychedelics, and CE-eligibility claims are incomplete, uncited, or time-sensitive.
5. **P1 accessibility:** clickable cards are non-semantic `<div>` elements; modal behavior lacks focus management; mobile hides navigation without replacement.
6. **P2 estate fragmentation:** the retired Myelin identity, Aloha AI Learning, RN Builds, and a legacy RN portfolio URL conflict.

## 3. Complete route map

### Production-delivered routes

`vercel.json` applies a permanent catch-all redirect from `/(.*)` to `https://aloha-ai-consulting.vercel.app/ce`. Thus the route set is finite by behavior even though the matcher accepts arbitrary paths.

| Requested route | Redirect chain | Final result | Classification |
|---|---|---|---|
| `/` | Myelin 308 → Aloha `/ce` → `/ce/` | HTTP 404, Aloha AI not-found page | Broken |
| `/free-guide` | Myelin 308 → Aloha `/ce` → `/ce/` | HTTP 404 | Broken |
| `/free-guide.html` | clean URL normalization → `/free-guide` → Aloha `/ce/` | HTTP 404 | Broken |
| `/robots.txt` | Myelin 308 → Aloha `/ce/` | HTTP 404; no Myelin robots response | Broken |
| `/sitemap.xml` | Myelin 308 → Aloha `/ce/` | HTTP 404; no Myelin sitemap | Broken |
| `/api/track` | Myelin 308 → Aloha `/ce/` | HTTP 404; no Myelin tracking endpoint | Broken |
| Any other Myelin path | Myelin catch-all 308 → Aloha `/ce/` | HTTP 404 | Broken |

The final 404 has `robots=noindex`, no canonical URL, the title “Aloha AI — Find where AI belongs,” and no Myelin content.

### Repository routes that production makes inaccessible

| Repository file | Intended clean route | Status |
|---|---|---|
| `index.html` | `/` | Inaccessible because of catch-all redirect |
| `free-guide.html` | `/free-guide` | Inaccessible because of catch-all redirect |
| `myelin-ce-site.html` | linked from free guide | Missing from repository; broken even without redirect |
| `sitemap.xml` | declared in `<head>` | Missing from repository |
| `robots.txt` | implied by crawl requirements | Missing from repository |
| `/api/track` | called on load and scroll | No API implementation in repository |

The Aloha AI repository was separately inspected for the configured successor. It has no `app/ce` route and no Myelin or continuing-education reference at its audited current commit.

## 4. Complete interaction/control inventory

The deployed public surface contains only Aloha AI’s generic 404 navigation and recovery links; those belong to Aloha AI and do not deliver Myelin. The Myelin repository-only inventory is below.

### Navigation and direct links

- Six header links: Philosophy, Courses, Library, Presenter, Accreditation, Get notified — fragment targets exist, but are **unverified** in the consumer deployment.
- Hero “Explore the catalog” — target `#courses` exists; **unverified** in deployment.
- Hero “Get the free guide” — repository target exists; **inaccessible** in deployment.
- Footer Courses, Accreditation, Get notified — fragment targets exist; **unverified** in deployment.
- Free-guide “Explore the Myelin CE catalog” — targets missing `myelin-ce-site.html`; **broken**.
- Related-tool links:
  - Nervous System Studio — destination returned HTTP 200; **verified destination**, inaccessible from deployed Myelin.
  - WNH Guide — destination returned HTTP 200; **verified destination**, inaccessible from deployed Myelin.
  - Dru Assessment — destination returned HTTP 200; **verified destination**, inaccessible from deployed Myelin.
  - Aloha AI — destination returned HTTP 200; **verified destination**, inaccessible from deployed Myelin.
  - “RN Builds” — points to legacy `rn-portfolio-khaki.vercel.app`, which returned HTTP 200 but is not the canonical RN Selected Work URL; **broken estate mapping**.

### Course and library controls

- 11 launch-course cards receive click listeners and open hard-coded detail content. They are **simulated course browsing**, not course delivery.
- 12 library-series cards receive click listeners and open hard-coded lists.
- The lists contain 111 planned course titles; clicking any produces the same generic “planned—content to be authored” record.
- Modal close button, overlay click, Escape handler, and series back button are coded.
- These card/list controls were not reachable in production. Static inspection confirms implementation, but end-to-end behavior is **unverified**.
- Cards and list items are non-semantic and have no keyboard activation, role, or `tabindex`; keyboard use is **broken by construction**.

### Forms

1. **Launch-updates email form — broken.** Its inline submit handler prevents submission, opens `free-guide.html`, displays “you’re on the list,” and clears the input. It performs no fetch, form action, storage operation, or subscription.
2. **Contact the Architect — broken/unverified.** It requires an email only through JavaScript, posts to `https://rn-api-rn-collins.vercel.app/api/lead`, and treats every resolved HTTP response—including 4xx/5xx—as success. The endpoint returned 405 to GET, confirming it exists but not confirming safe POST behavior. No consequential POST was submitted. If the page were served with its configured CSP, `connect-src 'self'` would block this cross-origin request.
3. Contact modal cancel and open controls are implemented inline but absent from the deployed surface.

No search, filter, pricing, checkout, enrollment, login, learner dashboard, completion tracking, assessment, certificate, download file, course player, or support workflow exists.

## 5. Consumer journeys and observed results

### Journey A — arrive at Myelin CE

1. Open canonical URL.
2. Browser is permanently redirected to Aloha AI `/ce/`.
3. Aloha AI displays “404 · route not found” and says the record is not there.

**Result:** broken at the first step. A consumer cannot discover the catalog, presenter, status, guide, or next Myelin action.

### Journey B — obtain the free guide

1. Request `/free-guide` or `/free-guide.html` directly.
2. Both resolve to the same Aloha 404.

**Result:** broken. The guide exists only in source.

### Journey C — join launch updates

**Production:** inaccessible.  
**Source reconstruction:** a syntactically valid email would be discarded, while the interface claims successful list enrollment.

**Result:** broken and misleading.

### Journey D — inspect a course or library series

**Production:** inaccessible.  
**Source reconstruction:** course cards expose objectives/outlines/status from a JavaScript object; library items expose generic planned copy. No actual course can be taken.

**Result:** simulated catalog browsing; missing learning product.

### Journey E — contact the architect

**Production:** inaccessible.  
**Source reconstruction:** cross-origin submission conflicts with the CSP, lacks robust validation, and declares success without checking `response.ok`.

**Result:** broken/unverified; no POST performed.

### Journey F — return, back/forward, empty/error/completion

- Return visits always reach the same permanent redirect and 404.
- The static modal state is not URL-addressable or persistent.
- No purposeful loading, empty, validation-error, server-error, or completion states exist beyond alerts and hidden text.

## 6. Functional matrix

| Capability | Classification | Evidence |
|---|---|---|
| Canonical site availability | Broken | Final HTTP 404 |
| Catalog content in source | Verified | `index.html` |
| Course browsing | Simulated/inaccessible | hard-coded modal data; redirect prevents access |
| 11 launch courses | Unverified | names/outlines exist; no course packages or player supplied |
| 111 planned-library records | Simulated | same generic “content to be authored” template |
| 125-course catalog | Broken/unsupported | hard-coded series total is 111, not 125 |
| Free guide content | Verified in source, inaccessible in production | `free-guide.html` |
| Free-guide return CTA | Broken | missing `myelin-ce-site.html` |
| Email acquisition | Broken | no transmission/storage/subscriber system |
| Contact lead capture | Broken/unverified | CSP conflict, response handling flaw, no safe POST |
| Accreditation | Unverified | only marketing copy; no approval/application evidence supplied |
| Course credit | Intentionally unavailable/unverified | labeled targets, not approvals |
| FC-4 “currently live” | Unverified | no live destination or enrollment route |
| Pricing/payment/enrollment | Missing | no implementation |
| Learner identity/progress/assessment/certificates | Missing | no implementation |
| Analytics | Broken/unverified | nonexistent local `/api/track`; Vercel scripts declared but page redirected |
| Security headers | Verified on Myelin redirect response | HSTS and other headers observed/configured |
| Public sitemap/robots | Broken | redirected to 404 |
| Production build | Verified | Vercel static build READY in 21ms |
| Automated tests | Missing | no test files, manifest, or scripts |

## 7. Copy and information-architecture findings

### Material contradictions and overclaims

1. Metadata says Myelin “offers **accredited continuing education**,” while the page says the NBCC application is in progress and describes all other bodies as targets/pathways. “Accredited” must not be used before approval and qualifying-program review are established.
2. The guide says it is drawn from “Myelin CE’s **accredited course** AI-1,” contradicting the in-progress status.
3. “125 courses in the catalog” conflicts with the 111 titles in `SERIES`. If the 11 launch courses are added, the result is 122, not 125, and some launch topics overlap the library.
4. “11 ready at launch,” “built and submission-ready,” “each course is built,” “four-cycle audit on every course,” and “timed agendas…per course” conflict with library dialogs stating 111 records are planned and content remains to be authored.
5. “Currently live” for FC-4 has no destination, enrollment mechanism, host, schedule, or evidence.
6. “Send me the free guide” and “you’re on the list” describe actions the form does not perform.
7. “Download” is inaccurate: the form opens an HTML page rather than downloading a guide.
8. The global notice says “This tool” although the artifact is a catalog/site, not a clinical tool.

### IA and audience

- The top-level structure is understandable, but it places a 111-record aspiration beside 11 supposedly complete courses without a reliable status taxonomy.
- The catalog mixes approved CE, targeted credit, non-CLE professional development, facilitator education, and prospective course tracks. These require separate, explicit categories.
- “Pan-disciplinary practitioners” is distinctive but vague. The page names many professions, creating a large burden to explain jurisdictional/board eligibility for each.
- “Myelin” is a strong mnemonic, but the metaphor “without loss” is biologically absolute and rhetorically overclaims precision.
- Course titles are often credible content concepts, but some cross scope boundaries—clinical, legal, accreditation, and professional practice—without presenter/co-presenter and review boundaries.
- “Contact the Architect” is inconsistent with an education provider’s user language. “Ask about the program” or a clearly scoped inquiry route would be more legible.

### AI-writing signals

Repeated constructions—“rigorous,” “primary-source,” “citation-verified,” “built,” “evidence-based,” and long triadic lists—substitute assurance language for inspectable evidence. The correction is not stylistic deletion alone; each assurance should link to a syllabus, source record, approval status, review date, or defined QA method.

## 8. Science/law/policy/regulatory claim ledger

This ledger groups repeated claims while preserving every material claim type. Citations below are audit sources, not citations currently linked by the site.

| Claim or claim family | Audit result | Required treatment |
|---|---|---|
| “Myelin is the sheath that lets a signal travel farther, faster, and without loss” | Overstated. Myelin increases conduction velocity and supports signal integrity, but “without loss” is absolute and the subsequent claim that the nervous system “only invests” in pathways carrying signals that matter is metaphor, not established mechanism. | Rewrite as metaphor; cite a neuroscience source if retained. |
| Most consumer mental-health AI evidence is preliminary/uncontrolled | Directionally plausible, but “most” requires a current systematic review and defined product class. | Cite a current review and qualify scope/date. |
| Wysa PHQ-9 means 5.84 vs 3.52; preliminary, uncontrolled, non-randomized; author affiliations | Substantially supported by Inkster et al. 2018; PubMed confirms design, DOI, affiliations, and need for larger validation. The page should link the study and explain that engagement-group comparison is not causal treatment evidence. | Retain with direct link, fuller methods/COI language, review date. |
| Gender Shades disparity | Supported for three commercial gender-classification systems in the study: error up to 34.7% for darker-skinned women vs 0.8% for lighter-skinned men. It is not a mental-health-AI validation study. | Preserve domain boundary; do not imply direct clinical-tool performance. |
| Hoffman et al. pain-bias finding | The cited study concerns false beliefs and pain-treatment recommendations, not a general measured “systematic under-assessment” by all clinical decision-support systems. | State the actual study population/method and avoid using it as direct evidence about AI. |
| “AI systems learn from historical data” | Overbroad; some systems are trained on synthetic, curated, or mixed data, and deployment bias can arise beyond training data. | Qualify as “many systems” and enumerate mechanisms. |
| NASW §§1.03 and 1.07 govern informed consent/privacy in technology-assisted services | Supported in general by NASW materials; the site should link the operative code and technology standards and specify professional/jurisdictional scope. | Retain with official links and current edition date. |
| ACA §H.2.a imposes technology-assisted informed-consent requirements | Plausible, but the site provides no official link or edition. | Link official ACA code; quote/paraphrase precisely; state applicability. |
| HIPAA constrains client data entered into AI | Context-dependent. HIPAA applies to covered entities/business associates and PHI; it is not a universal confidentiality law for every practitioner/tool. | Add covered-entity, BA, PHI, contract, and jurisdiction boundaries. |
| 42 CFR Part 2 “2024 revision” / “eff. Feb. 16, 2024” | The implementation date is misstated. HHS says the final rule was effective April 16, 2024 and compliance was required February 16, 2026. Part 2 applies to covered SUD records/programs, not every mental-health interaction. | Correct dates and scope; link HHS/eCFR. |
| Consumer AI use can implicate privilege | Plausible but jurisdiction-, tool-, client-, and disclosure-dependent. Privilege and confidentiality are distinct. | Cite controlling authority/ethics guidance by jurisdiction; avoid categorical wording. |
| “Use tools with contractual confidentiality (or run them locally)” | Incomplete safety prescription. Contract terms or local operation alone do not establish HIPAA, Part 2, security, retention, consent, competence, privilege, or vendor-governance compliance. | Replace with a multi-factor due-diligence checklist and advice boundary. |
| ABA Formal Opinion 512 governs legal GAI use | Supported; ABA issued it July 29, 2024 on competence, confidentiality, communication, candor, supervision, and fees. It concerns GAI and ABA Model Rules; state rules/control still matter. | Link official opinion; clarify model-rule and jurisdiction boundary. |
| Oregon OAR 333-333-3300 “via NBCC” | Oregon says CE can be offered by an organization approved to offer CE for other professional licenses/certification, but there is no pre-approved program list. The categorical “via NBCC” requires confirmation that Myelin is an approved NBCC provider and the course meets the Oregon rule. | Do not list as pathway until ACEP status and course fit are documented. |
| Colorado DORA Natural Medicine CE pathway | Colorado requires 12 CE hours per period, including ethics requirements, and specifies eligible program formats/topics. Listing the regulator alone does not prove Myelin eligibility. | Link current DORA rule/guidance and document course eligibility. |
| NBCC ACEP application in progress | Unverified. No receipt, applicant entity, administrator, scope, or date was available in repository. NBCC says only ACEPs are authorized to offer NBCC credit for qualifying programs. | Provide private application evidence to auditor; public copy must remain “not currently approved” until approval. |
| ASWB, APA, NASW, NAADAC, ANCC, AOTA, ASHA, APHA, SOPHE, NALA, NFPA, HRCI, SHRM, ICF, PMI, ISACA, IAPP, ACFE, ACHE, CFP, real-estate pathways | Unverified and heterogeneous. Some are accreditors, associations, certifications, or course-approval routes with different provider/course rules. | Build a body-by-body matrix: authority, provider route, course route, presenter eligibility, fees, jurisdiction, approval status, permitted marketing language. |
| “Credit targets” for named courses | Aspirational, not credit. | Label “planned application target—no credit currently available.” |
| RN credentials and five peer-reviewed publications | Degrees/roles/publications were not evidenced within this repository. “Research Neuroscientist — Harvard Business School” and “legal scholar” may be read as current/formal titles. | Verify against CV/appointments/publications; use time-bounded, exact role language. |
| Course-specific scientific claims (automation bias, four-principle ethics, WHO principles, RAG/hallucination, MDMA/ketamine/ibogaine, polyvagal-informed practice, cannabis/psychedelic mechanisms and safety) | Only selected detail modals name sources; most planned titles have none. The artifact is insufficient to verify the promised primary-source standard. | No “citation-verified” claim until each course has a frozen syllabus, claim-source ledger, reviewer, currency trigger, and correction log. |
| “Precise, current, and defensible in your practice” | Unsupported outcome/suitability promise across many regulated professions and jurisdictions. | Replace with bounded process language and jurisdiction-specific caveats. |

Primary/authoritative sources used in this Stage A check are listed in section 17.

## 9. Accessibility and responsive findings

### Deployed experience

- The Aloha 404 has a skip link, semantic landmarks, one H1, recovery links, and `noindex`.
- It is not the Myelin experience; its relative accessibility does not cure Myelin’s unavailability.

### Repository artifact

1. At widths `<=720px`, `.nav-links` is set to `display:none` with no menu replacement. Mobile users lose all primary section navigation.
2. Course cards, series cards, and course list items are clickable `<div>`/`<li>` elements without link/button roles, `tabindex`, or Enter/Space handling.
3. The course modal lacks `role="dialog"`, `aria-modal`, an accessible name, initial focus, focus trap, and focus restoration.
4. The contact modal has `role="dialog"` and `aria-modal`, but no accessible name association, focus management, Escape/overlay dismissal, or focus restoration.
5. Contact fields have placeholders but no `<label>` or `aria-label`; placeholder-only names are unreliable.
6. Success text is not an `aria-live` region. Alerts are used for validation and response feedback.
7. No skip link or `<main>` landmark exists on `index.html`; the guide uses `<main>` but no skip link.
8. No explicit `:focus-visible` treatment is defined.
9. Animated accreditation status ignores `prefers-reduced-motion`.
10. The brand SVG has no explicit accessible treatment; decorative intent is not marked.
11. The amber text `#C6892B` on cream `#F7F3EC` measures approximately 2.71:1 and fails WCAG AA for normal text. The floating white-on-gold contact button (`#fff` on `#B8842A`) is about 3.30:1 and fails normal-text AA.
12. No images require alt text, but Open Graph image metadata is missing.
13. Responsive CSS collapses the two-column grids, but the fixed contact control risks occlusion and the modal/long course lists require real 320px/400% reflow testing.

**Boundary:** production mobile, touch, keyboard focus order, zoom/reflow, and reduced-motion behavior of the Myelin page are **unverified** because the page is not deployed. Findings above are deterministic source findings, not claims of completed device testing.

## 10. Brand-architecture findings

- The repo presents Myelin CE as its own brand, owned by Rayven-Nikkita Collins LLC and built by Aloha AI.
- Git history says the brand/site was retired into Aloha AI `/ce`; therefore Aloha AI is the intended present public parent.
- It is not NSAG or Institutions of One. Some “nervous-system-aware” and governance course topics could derive from NSAG, but licensing the framework into a course must preserve NSAG authorship and separation.
- The footer’s “RN Builds” link points to a legacy portfolio rather than `rn-selected-work.vercel.app`, fragmenting the public estate.
- A stand-alone Myelin identity could be commercially coherent only if RN intends a distinct accredited education business with its own provider status, operations, policies, learner records, and support. The current redirect indicates the opposite decision.
- Hawaiʻi appears only indirectly through RN’s broader identity. There is no misleading Hawaiʻi claim, but the artifact does not yet explain whether its standards, jurisdictions, or intended service area include Hawaiʻi.

**Brand conclusion:** treat Myelin CE as a **retired named education concept / potential Aloha AI Learning component**, not a fourth peer practice alongside Aloha AI, NSAG, and Institutions of One.

## 11. Business-model and conversion findings

| Dimension | Finding |
|---|---|
| Beneficiaries | Counselors, social workers, psychologists, healthcare providers, attorneys, facilitators, and numerous adjacent professionals |
| Buyer | Unspecified: individual learner, employer, clinic, association, conference, or institutional sponsor |
| Decision-maker | Varies by credit body/employer; not mapped |
| Economic value | Professional education, compliance/ethics literacy, possible renewal credit, and institutional training |
| Current artifact type | Portfolio/concept demonstration and pre-launch lead-generation surface |
| Conversion path | Broken; canonical 404, false subscription confirmation, no enrollment/pricing/schedule |
| Fulfillment | Missing; no LMS, live-event logistics, attendance verification, assessments, certificates, refunds, accommodations, support, or records retention |
| Ownership | LLC ownership stated, but course IP, guest presenter, accreditation, and learner-data terms are absent |
| Maintenance | Claims currency but no owner, review cadence, correction log, or update trigger is public |
| Trust barrier | Accreditation/readiness evidence, presenter eligibility, course quality, scope, jurisdiction, privacy, and refunds |
| Adoption barrier | Broad catalog without a first purchasable product or approved credit |

### Smallest coherent product path

Do not build 125 courses. Select one audience, one approved/approvable credit pathway, and one finished flagship course. Establish the provider/course eligibility, evidence package, delivery method, assessment, certificate, accessibility, policies, pricing, support, and review cadence. Only then expose a waitlist or enrollment path whose data behavior is truthful.

### Investment recommendation

**Do not invest in expanding the catalog now.** Invest first in regulatory/accreditation validation and one end-to-end course. If that works, reposition Myelin as the named CE collection within Aloha AI Learning. If no accreditation/application evidence or market commitment exists, archive the standalone brand and preserve the curriculum inventory privately.

## 12. Security, privacy, data, and operational findings

1. The permanent redirect is public and HSTS-protected, but it sends all routes—including robots, sitemap, and API paths—to a 404.
2. CSP includes `unsafe-inline` and `unsafe-eval`, weakening script protections.
3. `connect-src 'self'` conflicts with the cross-origin RN API contact request.
4. The page stores UTM parameters in `sessionStorage` and attempts to send referrer/UTM/page-view and scroll-depth data to `/api/track`, but no endpoint exists in this repository.
5. No privacy notice, cookie/analytics notice, retention statement, data controller/contact, processor list, consent explanation, or deletion mechanism exists.
6. The fake subscription form discards an email rather than collecting it, but it creates a false data expectation and prevents users from knowing whether their information was retained.
7. The contact form can transmit name, email, and message to RN API if CSP/configuration changes; it gives no privacy notice, purpose limitation, retention period, or consent disclosure.
8. Contact success is based on promise resolution rather than `response.ok`; 4xx/5xx could be reported as “Sent!”
9. Validation only checks that the email string is nonempty in the contact flow. No length limits, content limits, rate-limit/CAPTCHA signal, or abuse handling is visible client-side. Server controls are unverified.
10. All logic and inventory are inline in a 44.6 KB HTML file. There is no dependency risk, but maintainability, testability, CSP compatibility, and content governance are poor.
11. No README, license, package manifest, automated tests, CI workflow, accessibility test, link check, or content/claim validation exists.
12. Vercel reports the latest build READY and no runtime errors for the selected 30-day range. That is expected for a static redirect and does not evidence product functionality.
13. Deployment-specific aliases appeared Vercel-protected to an anonymous client; the public canonical domain remained accessible. The intended protection policy is unverified.

## 13. Defects ranked by severity

### P0 — blocking

1. **All Myelin routes permanently redirect to a nonexistent Aloha AI `/ce` route and end at HTTP 404.**

### P1 — serious

1. Subscription form falsely says the user is on a list while discarding the email.
2. “Accredited continuing education” and “accredited course” contradict the stated in-progress accreditation.
3. “125 courses,” “11 ready,” “submission-ready,” “live,” and “each course is built” lack consistent inventory/delivery evidence.
4. Free-guide CTA points to missing `myelin-ce-site.html`.
5. Essential catalog controls are not keyboard accessible; modals lack required focus/semantic behavior.
6. Health/legal/privacy guidance is insufficiently scoped for jurisdictions, covered entities, professional rules, and current effective dates.
7. 42 CFR Part 2 effective/compliance timing is misstated in course evidence data.
8. No actual course-delivery or accreditation-operating system exists.

### P2 — material

1. Mobile navigation disappears without replacement.
2. Course count totals conflict (125 stated, 111 hard-coded planned titles; 122 if launch cards are naively added).
3. CSP blocks the coded cross-origin contact request and permits unsafe inline/eval script.
4. Contact flow can report unsuccessful HTTP responses as success.
5. Tracking endpoint is missing; analytics/privacy expectations are undefined.
6. No privacy, accessibility, terms, refund, cancellation, grievance, accommodation, learner-record, or support policies.
7. Legacy RN Builds destination conflicts with RN Selected Work.
8. No sitemap, robots file, canonical link, OG image, or course structured data.
9. Presenter-role/publication claims lack repository evidence.
10. Accreditation pathways are presented without a body-by-body eligibility/approval ledger.

### P3 — polish

1. Amber normal text and white-on-gold contact text fail AA contrast.
2. No reduced-motion handling or explicit focus-visible styling.
3. “This tool,” “Contact the Architect,” and repeated rigor language mismatch the user task.
4. Duplicate `AI-5` key appears in the `COURSES` JavaScript object.
5. No correction/version date on the free guide itself beyond the site’s general status date.

## 14. Exact remediation plan with file-level targets

This is a Stage B plan only; no remediation was performed.

### Decision gate before code

1. Confirm whether Myelin is retired, an Aloha AI Learning collection, or a separate CE business.
2. Obtain and privately verify: accreditation application/approval evidence, the 11 claimed course packages and version logs, FC-4 live-delivery evidence, RN credential/publication evidence, and the actual learner-delivery plan.
3. Freeze a single inventory with unique course IDs and statuses: idea, outlined, authored, reviewed, approved, scheduled, open, completed, retired.

### `vercel.json`

- Replace the broken catch-all only after a valid canonical destination exists.
- If retired, redirect `/` to a real Aloha AI Learning/Myelin record and map `/free-guide` to a live guide or a truthful archive response.
- Do not redirect `/robots.txt`, `/sitemap.xml`, or API routes to content pages.
- Align CSP `connect-src` with the selected same-origin API or explicitly approved RN API; remove `unsafe-eval`; migrate inline handlers/scripts to external nonce/hash-compatible assets.

### `index.html` or successor Aloha route

- Correct accreditation language in title, metadata, OG copy, hero, course cards, accreditation section, and structured data.
- Replace 125/11/readiness claims with ledger-derived counts.
- Remove or evidence “live,” “submission-ready,” “four-cycle,” and “citation-verified” claims.
- Replace the fake email form with either a real, disclosed subscription service or a simple guide link with no list claim.
- Use semantic buttons/links for every interactive card and course list entry.
- Implement dialog semantics, accessible names, focus entry/trap/return, Escape and overlay behavior.
- Add mobile navigation, skip link, `<main>`, labels, `aria-live` feedback, focus-visible styles, reduced-motion rules, and conforming colors.
- Split static content/data/behavior; introduce status badges and filtered catalog views only if backed by real data.
- Point RN Builds to `https://rn-selected-work.vercel.app` after root coordinator approval.
- Replace legacy Person schema URL/LinkedIn URL and add canonical/course schema only after facts are verified.

### `free-guide.html`

- Fix the CTA to the actual canonical catalog.
- Remove “accredited course” until approval.
- Add direct links/complete citations, last-reviewed date, jurisdiction/scope qualifiers, and correction contact.
- Correct Part 2 dates/scope; distinguish HIPAA, Part 2, professional confidentiality, and privilege.
- Refine Wysa/Gender Shades/Hoffman transfer limits.
- Add description, canonical, OG metadata, skip link, and accessible source links.

### New operational files/systems

- `README.md`: ownership, status, local verification, canonical mapping, archive decision.
- `public/robots.txt` and `public/sitemap.xml` or static equivalents.
- Claim-source ledger with owner, source, retrieved/review date, jurisdiction, expiry/review trigger.
- Accreditation matrix and permitted-language matrix.
- Privacy, terms, accessibility/accommodation, cancellation/refund, complaint, support, learner-record and certificate-verification policies.
- Tests: redirect/link, course-count invariant, accessibility, keyboard/dialog, form success/error, CSP, metadata, and claim freshness.
- Real LMS/event delivery, assessment, attendance, certificate, learner record, support, and incident/correction operations before sale or credit claims.

## 15. Recommended estate disposition

### **D — Duplicate or alternate/superseded deployment**, with a blocking broken-successor condition

Rationale:

- Git history expressly labels the Myelin site “retired.”
- Its entire Vercel configuration attempts to consolidate it into Aloha AI `/ce`.
- A separate Myelin case study would misrepresent a retired, inaccessible surface as a working build.
- The underlying curriculum concept should be accounted for under Aloha AI Learning if it is revived.

Estate action: record `myelin-ce` as **D → Aloha AI Learning / Myelin CE component**, status **broken redirect; successor absent; remediation required**. If RN instead chooses a separate accredited education business, reopen disposition as **E** until one course and the provider infrastructure are operational; promote to **P** only after independent public-product and evidence gates pass.

## 16. Proposed RN Selected Work case-study corrections

Do **not** add a normal Myelin CE case-study card now.

### Master ledger entry

- Asset: Myelin CE
- Repository: `rn-collins/myelin-ce`
- Deployment: `myelin-ce.vercel.app`
- Parent: Aloha AI Learning (intended)
- Disposition: D
- Public status: retired standalone surface; canonical redirect broken
- Evidence boundary: static catalog concept and free guide exist in source; no live Myelin consumer experience; accreditation, course readiness, subscription, and delivery unverified
- Required next decision: repair/replace redirect, then determine archive versus bounded Aloha AI Learning revival

### If referenced in the Aloha AI case study

Use wording no stronger than:

> **Myelin CE (retired prototype):** a source-level continuing-education catalog and evidence-briefing concept developed for possible consolidation into Aloha AI Learning. Its former standalone deployment is not currently operational, and no course-credit or accreditation claim should be inferred.

Do not say it has 125 courses, accredited courses, 11 launch-ready courses, or a working waitlist until those facts are independently evidenced and production-verified.

## 17. Evidence appendix

### Repository and deployment evidence

- GitHub: `https://github.com/rn-collins/myelin-ce`
- Audited commit: `ca4f049c960411ae077f93e6395fdaf8ba545d10`
- Repository files: `index.html` (44,576 bytes), `free-guide.html` (8,639 bytes), `vercel.json` (1,135 bytes)
- Retirement commit: `b83785e` — “Redirect retired Myelin CE site to Aloha AI CE (/ce) with permanent 308”
- Vercel project: `prj_27BAHdS5tReej1zqs88SjTMZtSIM`
- Production deployment: `dpl_6EKBFjVPxHwDRrwiKygUiujNcyia`
- Build: READY; Vercel CLI 58.1.0; static output; 21 ms build; source commit matched
- Runtime error query: no recorded errors in selected 30-day range; this does not test redirect correctness
- Production browser observation: canonical URL resolved to `https://aloha-ai-consulting.vercel.app/ce/`, Aloha AI title, explicit 404 copy, `robots=noindex`, no canonical
- Current Aloha AI repository commit inspected: `57dc643aaeed0846b5e10148e82d91f07e36c7f9`; no `/ce` route or Myelin reference found
- Machine-readable companion: `ROUTE_CONTROL_LEDGER.json`

### Authoritative/primary claim-check sources

1. HHS, **Understanding Confidentiality of SUD Patient Records / 2024 Part 2 Final Rule**: `https://www.hhs.gov/hipaa/part-2/index.html` — effective April 16, 2024; compliance required February 16, 2026.
2. HHS, **Fact Sheet 42 CFR Part 2 Final Rule**: `https://www.hhs.gov/hipaa/for-professionals/regulatory-initiatives/fact-sheet-42-cfr-part-2-final-rule/index.html`.
3. ABA, **Formal Opinion 512 / official announcement**: `https://www.americanbar.org/news/abanews/aba-news-archives/2024/07/aba-issues-first-ethics-guidance-ai-tools/`.
4. NBCC, **Approved Continuing Education Providers**: `https://www.nbcc.org/resources/ceproviderresources/approvedceproviders` — ACEPs are authorized to offer NBCC credit for qualifying programs.
5. Oregon Health Authority, **Continuing Facilitator Education Requirements**: `https://www.oregon.gov/oha/ph/preventionwellness/pages/psilocybin-training-program-approval.aspx`.
6. Colorado DORA, **Natural Medicine Continuing Education**: `https://dpo.colorado.gov/NaturalMedicine/CE`.
7. PubMed, Inkster, Sarda & Subramanian (2018), DOI `10.2196/12106`: `https://pubmed.ncbi.nlm.nih.gov/30470676/`.
8. PMLR, Buolamwini & Gebru (2018), **Gender Shades**: `https://proceedings.mlr.press/v81/buolamwini18a`.
9. NASW, **Informed Consent / Standard 1.03**: `https://www.socialworkers.org/About/Ethics/Ethics-Education-and-Resources/Ethical-Standard-of-the-Month/Informed-Consent`.

### Explicit unverified areas

- No accreditation application receipt, decision, ACEP number, or provider record was supplied.
- No complete course files, timed agendas, evaluations, assessment items, citations, correction cycles, or reviewer records were present in this repository.
- No LMS, event platform, learner records, certificate system, enrollment, price, refund policy, or delivery evidence was found.
- FC-4’s “currently live” status was not verifiable.
- RN’s degrees, appointments, title language, and publication count were not independently credential-verified in this site audit.
- Contact API POST behavior, storage, retention, rate limiting, email delivery, and notification were not tested because consequential submission was prohibited.
- Myelin mobile/touch/keyboard/zoom behavior could not be exercised in production because the Myelin UI is not deployed. Source-level deterministic accessibility defects are recorded above.
- Vercel protection intent for noncanonical aliases is unknown.
- Search-engine indexing history and past subscriber/contact submissions were not examined.

## Acceptance-gate self-check

- Complete production route behavior mapped, including catch-all, robots, sitemap, API, guide, and arbitrary-path implications: **yes**.
- Every repository-visible link/control/form family accounted for: **yes**.
- Result states classified rather than described as “appears to work”: **yes**.
- Production, source-only, simulated, missing, inaccessible, and unverified behavior separated: **yes**.
- Copy, claims, delivery, mobile/keyboard, brand, business, privacy, build, and RN Selected Work relationship covered: **yes**.
- Consequential forms submitted: **no**.
- Site or portfolio files modified: **no**.
