# NSAG Parent Site — Stage A Crawl Dossier

Audit date: August 12, 2026 (Pacific/Honolulu)  
Scope: read-only Stage A consumer, engineering, product, copy/IA, science-law-policy-regulatory, brand, and business audit  
Machine-readable companion: `ROUTE_CONTROL_LEDGER.json`

## 1. Asset identity

- **Asset:** `nsag-site`
- **Public deployment:** [https://nsag-site.vercel.app/](https://nsag-site.vercel.app/)
- **Repository:** private GitHub repository `rn-collins/nsag-site`, repository ID `1285740342`, default branch `main`.
- **Audited repository state:** commit `abd874e4a726b005e53ba1e485068c8659537981`, dated July 25, 2026, message: “Integrity + IA: framework scope/limits panel + reframe assessment language; new privacy & data-use page linked site-wide; honest stage statement on About.”
- **Architecture:** static HTML exported directly from `public/` by Vercel. There is no package manifest, dependency graph, application framework, automated test suite, or compilation step. `vercel.json` sets `outputDirectory: public`, clean URLs, no trailing slash, and global security headers.
- **Parent practice:** Neurocognitive Systems Advisory Group (NSAG), described on RN Selected Work as a separate research-led institutional-design practice and the home of Nervous-System-Aware Governance.
- **Related components:** 15 separately deployed module sites (`nsag-m1` through `nsag-m15`); five “Applied” sites; `nsag-api` and `nsag-admin`; NSAG Intelligence offers; continuing-education tracks; NSAG Brief; field-research roadmaps.
- **Public/private status:** consumer site and its downloads are public. GitHub repository is private. The public output unintentionally includes 67 historical `.fuse_hidden…` files.
- **Current lifecycle:** active public practice, but many represented products and programs remain pre-operational, inquiry-only, simulated, or explicitly “in process.”
- **RN Selected Work status:** represented as one initiative and one deep case study. The case study links all 15 module deployments and eight parent-site surfaces.

## 2. Executive verdict

NSAG is a substantial authored knowledge-and-service system, not a placeholder landing page. The public artifact proves that RN has designed a coherent 15-domain framework, a common six-dimension/four-tier vocabulary, a citation library, module interfaces, advisory packages, intelligence-product concepts, CE curricula, applied demonstrations, and a distinct visual and editorial identity. The parent site should exist and should remain one parent practice rather than becoming 15 unrelated portfolio cards.

It is not yet safe to describe the complete system as “in operation.” The informational pages and navigation work, all 15 module deployments are reachable, all five Applied sites are live, 11 PDFs exist, and the homepage/evidence filters work. However:

1. the production Content Security Policy allows `connect-src 'self'` only, while the site sends analytics and lead/assessment requests to `https://nsag-api.vercel.app`; those requests are therefore blocked;
2. the submission code presents success for any resolved HTTP response and often also presents success in its `catch`, so users can be told an inquiry, preview request, newsletter subscription, assessment report, or gated-download lead was received when no data arrived;
3. 67 historical `.fuse_hidden…` HTML artifacts totaling 2,263,549 bytes are committed inside `public/` and publicly downloadable;
4. the site markets paid intelligence, advisory delivery, accreditation pathways, assessment/report emails, and future field roles more confidently than the artifact can substantiate;
5. the evidence library supports the relevance of module domains, but does not validate NSAG’s tier model, scoring, derived dimensions, thresholds, or outcome claims;
6. the live parent still conflates Aloha AI with NSAG in structured data and founder-role copy, contrary to RN’s clarified brand architecture;
7. medical/legal/governance module pages lack sufficiently prominent professional-advice and scope boundaries; and
8. significant keyboard and document-accessibility defects remain.

**Recommended estate disposition: P — parent/canonical.** Preserve `nsag-site` as the canonical NSAG parent, preserve all 15 modules as components requiring separate dossiers, and remediate the parent before using it as evidence of a functioning commercial or accredited practice. Do not create a second RN Selected Work card for this deployment.

No P0 security emergency was observed, but the false-success lead flow, public hidden files, accreditation language, and unsupported/inflated claims are P1 issues.

## 3. Complete route map

### 3.1 Discoverable public HTML routes

All routes below were requested directly from the deployed site. Every listed content route returned HTTP 200. An arbitrary unknown path returned the custom 404 document with HTTP 404.

| Group | Routes | Result |
|---|---|---|
| Parent | `/`, `/about`, `/advisory`, `/framework`, `/privacy` | Live. `/privacy` has incorrect canonical/OG metadata pointing to `/about`. |
| Products/resources | `/intelligence`, `/brief`, `/insights`, `/evidence`, `/experience` | Live. Products are mostly descriptive/inquiry-only; Issue 1 is rendered on `/brief`. |
| Education | `/ce`, `/ce/law`, `/ce/nursing`, `/ce/medicine`, `/ce/pharmacy`, `/ce/socialwork`, `/ce/psychology`, `/ce/publichealth`, `/ce/facilitator` | Live. Enrollment and all seven accreditations are explicitly in process/not open. |
| Applied | `/applied` | Live; links to five deployed external applied systems. |
| Field | `/field`, `/field_2027`, `/field_2028`, `/field_2029` | Live. These are future roadmap/status pages, not evidence of completed engagements. |
| Parent module summaries | `/m1` through `/m15` | Live. M1–M13 are parent summary pages whose primary CTA opens the separate module deployment. M14/M15 include embedded assessments and downloads. |
| Errors | `/404`, an arbitrary unknown path | Direct `/404` returns HTTP 200; unknown path returns HTTP 404 with the same custom document. |

The deployed sitemap contains `/`, about, advisory, framework, CE, insights, evidence, brief, experience, all 15 module routes, and eight CE-track routes. It omits `/intelligence`, `/applied`, `/privacy`, `/field`, `/field_2027`, `/field_2028`, and `/field_2029`. Its omission of the two primary revenue-description pages (`/intelligence`, `/applied`) is material.

`robots.txt`, `manifest.json`, and `favicon.ico` return 404. Many pages use an inline data-URI favicon, so the favicon omission is cosmetic; robots and sitemap completeness are operational SEO defects.

### 3.2 Downloads

All 11 repository PDFs were retrieved successfully:

- `ce/pdfs/NSAG_CE_Overview_Core.pdf`
- eight profession/facilitator overview PDFs
- `pdfs/NSAG_M14_Overview.pdf`
- `pdfs/NSAG_M15_Overview.pdf`

The CE PDFs are two or three pages; M14/M15 overviews are two pages. They are generated by ReportLab, have anonymous/unspecified document metadata, and are not tagged PDFs.

### 3.3 Separate module estate

`https://nsag-m1.vercel.app/` through `https://nsag-m15.vercel.app/` each returned HTTP 200. Reachability does not establish that each module’s assessment, API, claims, responsive behavior, report generation, or evidence is sound. Each remains a separate crawl assignment under the protocol.

The parent repository also contains `/m1`–`/m15` HTML pages. This creates two public representations per module: a parent summary URL and a dedicated module deployment. That can be coherent if the parent page is clearly a summary and canonical strategy is explicit; currently it adds duplication and maintenance-drift risk.

### 3.4 Undocumented public artifacts

The repository contains 67 `public/.fuse_hidden…` blobs, totaling 2,263,549 bytes. Three representative URLs were requested and each returned HTTP 200 as `application/octet-stream`; the body was historic NSAG HTML. Examples:

- `/.fuse_hidden0000000400000001` — historic “Cannabis Healthcare Visibility · NSAG” HTML
- `/.fuse_hidden000000040000000c` — historic HTML
- `/.fuse_hidden0000001e00000015` — historic M15 HTML

Because `public/` is deployed verbatim, these are not merely repository clutter. They are public stale content, a source-disclosure surface, and deployment bloat.

## 4. Complete interaction/control inventory

### Site-wide controls

- Desktop navigation loads all parent destinations.
- Microsoft Bookings link redirects to a valid Bookings page for Rayven-Nikkita Collins with “Sign in” and “Continue as guest.” No booking was submitted.
- Desktop CE menu is hover-driven. The CE trigger remains a usable link, but the specialty submenu does not open on keyboard focus because CSS uses `:hover` and not `:focus-within`.
- Most pages include a hamburger and full-screen mobile navigation. Source inspection confirms open/close states and `aria-expanded`; it does not trap focus, handle Escape, or consistently restore focus.
- Most pages include a skip link. Field pages do not.

### Homepage

- Five module-filter buttons work. “All” shows all 15 cards. “Legal” produced M1, M2, and M6. Buttons do not expose `aria-pressed` or an announced result count.
- Thirteen “Research grounding” disclosures are clickable `div` elements, not semantic buttons/details; they cannot be operated by keyboard and do not expose expanded state.
- Work-strip left/right controls scroll a horizontal strip. Previous is hidden at initial position; the design is usable with pointer/trackpad but not clearly announced as a carousel.
- CE inquiry reveal, CE inquiry submission, discussion-paper request, newsletter subscription, “Contact the Architect,” and back-to-top controls exist.
- “Contact the Architect” opens a `mailto:` URL and attempts clipboard copy; this is functional.
- Lead/newsletter/paper controls are broken operationally by CSP and deceptive error handling. They must not be called verified merely because a success message is renderable.

### M14/M15

- Each includes a 12-question radio-based assessment, email gate, local tier calculation, dimension-score rendering, copy-results button, and overview-download email gate.
- Local scoring code is present. It maps mean values to four tiers (`>=4.5`, `>=3.5`, `>=2.5`, otherwise early stage) and averages two questions per dimension.
- There is no validated measurement evidence for these cut points or equal weighting.
- The cross-origin assessment/lead POST is blocked by CSP. The local tier can still render; reporting/persistence cannot be assumed.
- PDFs exist and can download after the client-side email check even if the lead POST fails. This is a functional download but a broken lead-capture promise.

### Evidence and product surfaces

- Five evidence filters work; filters have the same missing pressed/status semantics.
- `/brief` provides in-page Issue 1 content and subscription descriptions. There is no checkout/account/delivery workflow.
- `/intelligence` describes and prices Compass, Brief, Index, Profile, Q&A and Analyst Access. CTAs are inquiry/booking routes; no purchasing or product portal exists.
- `/ce` and all track pages correctly say enrollment is not open. The PDF “downloads” collect or appear to collect email but fail silently under current CSP.

### External destinations

- All 15 module deployments returned HTTP 200.
- All five Applied sites returned HTTP 200: Sport NSAG, GAPI Governance, WNH Guide, NArch Advisory, and Kids’ Developing Brains.
- 39 unique DOI resolver links on `/evidence` all returned HTTP 302 at `doi.org`, confirming syntactic resolver validity. Resolver validity is not substantive claim validation.
- Aloha AI, the legacy RN portfolio, and other Vercel references returned HTTP 200 where tested.
- Microsoft Bookings was verified in an actual browser. No consequential continuation was performed.

## 5. Consumer journeys and observed results

### Journey A — “What is NSAG?”

The homepage makes the central proposition clear within the first screen: institutions shape cognition/physiology, and NSAG provides a governance framework. The visual system is distinctive and professional. The primary cognitive burden is not understanding the theme; it is distinguishing established science, RN-authored interpretation, operational service, and future product.

Observed result: the visitor can reach About, Framework, Evidence and all modules. Trust initially rises because the site is detailed and cited, then becomes unstable when large claims, future statuses, unverified affiliations, and multiple unfinished products accumulate.

### Journey B — “Assess my institution”

From the home sector cards, M1–M13 open separate module deployments; M14/M15 remain on the parent. The estate therefore changes product shell and deployment context mid-journey. M14/M15 local scoring exists, but the reporting/lead request cannot reach `nsag-api` under the production CSP.

Observed result: the educational reflection can be completed locally on M14/M15, but no user should be promised that an email, institutional record, or follow-up was delivered. M1/M2 are being separately audited; M3–M13 remain unverified beyond reachability.

### Journey C — “Hire NSAG”

The Advisory page defines discovery, audit deliverables, engagement options, timelines, and prices: $8,500 core engagement, workshops from $5,000, extended advisory from $15,000, and $3,500/month retainer. The Bookings destination is live.

Observed result: this is the strongest commercial journey. It communicates scope and next step. It still lacks terms, service boundaries, privacy/retention terms for institutional data, a representative/redacted deliverable, verified outcomes, and clarity about subcontractors/collaborators.

### Journey D — “Buy intelligence”

The user can compare Compass, Brief, Index and Profile, with prices from $100/month to $2,500 standalone and add-ons. The site has no purchase, authentication, sample-delivery archive, billing, service-level, cancellation, or fulfillment interface.

Observed result: a priced concept catalogue that converts to booking/inquiry, not a functioning subscription product. “Monthly intelligence product” must be qualified as available by direct engagement unless a real delivery operation is documented.

### Journey E — “Take CE / earn credit”

The architecture is extensive: core curriculum, seven credit types, eight tracks, learning outcomes, price plans, institutional pricing, accreditation pathways, FAQs, and 9 overview PDFs. The site repeatedly states enrollment is not open and accreditation is in process.

Observed result: a curriculum and accreditation plan, not accredited continuing education. The copy is better than a false open-enrollment flow, but it still creates premature certainty about credit amounts, certificates, retroactive updates, and simultaneous qualification across bodies. One PDF says the 15-session core covers all **13** modules while the web headline says “15 sessions. 15 modules,” and the page separately says M14/M15 are “Coming.”

### Journey F — “Verify the science”

The evidence library is unusually rich for a portfolio practice and links 39 unique DOI records plus government sources. Visitors can filter by sector and inspect 15 domains.

Observed result: domain evidence is discoverable, but the interface encourages a stronger inference than the evidence warrants. Peer-reviewed findings about trauma, built environments, burnout, AI bias, cannabis interactions, or isolated environments do not by themselves validate NSAG’s six dimensions, maturity tiers, scoring weights, thresholds, dependency map, or institutional outcome promises.

### Journey G — “Understand RN’s brand/practice structure”

RN Selected Work correctly says NSAG is distinct from Aloha AI and Institutions of One. The live NSAG site undermines this clarity by naming “Aloha AI Consulting” as an alternate name for NSAG in JSON-LD and by listing “Founder & Principal · Aloha AI Consulting (M1–M15).”

Observed result: a sophisticated visitor can infer the difference, but search engines, partners, and clients receive contradictory ownership signals.

## 6. Functional matrix

| Capability | Classification | Evidence |
|---|---|---|
| Static content and internal routing | Working | All mapped HTML routes load; unknown path returns 404. |
| Desktop navigation and booking link | Working | Routes load; Bookings renders valid guest/sign-in page. |
| Homepage/evidence filters | Working | Live browser state changed and expected cards remained visible. |
| Five Applied links | Working | Each target returned HTTP 200. |
| 15 module links | Partial | All targets return 200; complete operation requires each module dossier. |
| Evidence DOI links | Partial | All 39 resolvers respond; scientific fit/interpretation varies. |
| M14/M15 local scoring | Partial | Client scoring/rendering exists; validation and reporting are absent/broken. |
| CE/M14/M15 PDF download | Partial | Files exist and client initiates download; gate reporting fails; PDFs untagged. |
| Leads, newsletter, paper request | Broken | CSP blocks `nsag-api`; code shows false success on HTTP failure/catch. |
| Pageview analytics | Broken | Same CSP conflict. |
| Intelligence subscriptions | Simulated/pre-operational | Pricing/copy exists; no commerce, account or delivery surface. |
| Assessment email/report fulfillment | Simulated/unverified | Described in Privacy/Experience; parent API call cannot succeed under CSP. |
| CE accreditation/enrollment | Intentionally unavailable | Site says applications in process and enrollment not open. |
| Advisory practice | Partial | Offer, scope, price and booking exist; delivery/outcome evidence unverified. |
| Field program | Planned | 2027–2029 events are status/target statements; no source evidence linked. |
| Mobile nav | Partial | Source contains responsive shell; focus/Escape defects; no actual small-device run. |
| Search, account, checkout, dashboard | Missing | Not implemented despite product language that could imply subscription operation. |

## 7. Copy and information-architecture findings

### Strengths

- The central proposition is memorable and consistently expressed.
- “Where NSAG is today” is an important honesty improvement: it says NSAG is founder-led rather than a large standing organization.
- Framework now includes “what this is / what this is not,” explicitly stating that the framework is not a clinical instrument, validated psychometric index, accreditation, or neural-activity measure.
- CE pages repeatedly state accreditation is in process and enrollment is not open.
- Advisory pricing is unusually transparent.
- Parent/module hierarchy is visible, and RN Selected Work appropriately presents modules as components of one practice.

### Material copy/IA problems

- “Measurable” is used both for published scientific phenomena and for an unvalidated governance-scoring framework. Replace with “documentable,” “structured,” or “trackable” unless a specific validated measure is named.
- “15 active assessments” implies operational readiness. Parent evidence only verifies local embedded assessment for M14/M15 and reachability for 15 deployments; API/report fulfillment is not working.
- “7 published works” is not reconciled to an exact bibliography on the hero. About lists four peer-reviewed/publication venues and three media brands, which are not equivalent categories.
- “Original framework” should mean “authored/developed by RN,” not a universal novelty claim. No prior-art or comparative-framework review is supplied.
- “The evidence is clear,” “every institution,” “every zoning decision,” “six hundred studies say so,” and similarly categorical phrasing erases study quality, heterogeneity, context and uncertainty.
- `/insights` uses provocative absolutes (“wrong twice as often,” “never independently assessed,” “will not reduce burnout”) without immediate citations and limitations.
- Paid product copy uses present-tense delivery while no consumer purchase/delivery system is shown.
- Field pages use “NSAG Present — confirmed operational role” for a February 2027 event as of August 2026 and use “this year” for 2027. The time-relative copy is misleading now and will age badly.
- “Proposals submitted,” “submitting now,” “research target,” and “confirmed operational role” are self-asserted without linked evidence. Public portfolio copy should distinguish `confirmed`, `submitted`, `planned`, `target`, and `aspirational`, with dates and evidence.
- Homepage, framework, CE and evidence pages are each roughly 94–121 KB of monolithic HTML and repeat large navigation/footer styles. The content is rich but too dense for a first-time buyer. Progressive disclosure and task-based entry points are needed.
- Privacy metadata is copied from About. `/privacy` canonical and OG URL point to `/about`, OG title/description describe About, and the `<title>` line contains a malformed comment fragment.
- Field pages omit canonical/OG metadata and use a visually different navigation system, making them feel like a separate microsite.
- Sitemap omits seven material routes.

## 8. Science, law, policy, and regulatory claim ledger

This ledger evaluates claim quality and communication boundaries, not RN’s right to develop the framework.

| Claim or claim class | Evidence observed | Assessment | Required treatment |
|---|---|---|---|
| Institutions shape cognitive and physiological conditions | Large cross-disciplinary evidence library; trauma, stress, environment, burnout, bias and isolation sources | **Supported as a broad proposition**, but effects vary by exposure, population and mechanism. | Retain with plural/conditional language; do not imply a single direct measure. |
| NSAG makes effects “measurable” | NSAG-authored six-dimension/four-tier rubric | **Not validated as a measurement claim.** Framework itself admits it is not a validated index. | Use “structured, documentable and governable”; reserve measurement for named validated tools/outcomes. |
| Four tiers, six dimensions, numeric thresholds and dependencies | Authored framework criteria and threshold tables | **Framework design, not empirical validation.** Citations motivate domains; they do not establish weights/cutoffs. | Label “proposed governance rubric” and disclose derivation/review method. |
| “Original framework” / originality | RN authorship and development narrative | **Authorship supported; universal novelty unverified.** | Prefer “RN-developed” or “an original framework developed by RN”; avoid comparative novelty unless prior-art review is documented. |
| Algorithmic racial bias affecting ~200 million patients | Evidence page links Obermeyer et al., *Science* 2019, DOI `10.1126/science.aax2342` | **Strong support for one widely used cost-proxy algorithm**, not all medical algorithms. | Name the algorithm class/study and avoid generalizing to every hospital tool. |
| Classroom design explains ~16% of learning variation | Barrett et al. 2015, DOI `10.1016/j.buildenv.2015.02.013` | **Study-specific observational/modeling finding**, not a universal causal share. | State setting/sample and avoid “one school”/universal causal phrasing. |
| Cannabis-warfarin interaction means undocumented use causes drifting INR | Case reports and a 2023 systematic review show very low-quality evidence for a possible warfarin interaction | **Overstated as a certain patient narrative.** Evidence is sparse, dose/route dependent, and includes null findings. | Say “may interact; evidence is limited; medication review and monitoring are clinician decisions.” |
| Burnout wellness programs “will not” work; 25-year evidence | Organizational-intervention literature supports system-level contributors and modest benefits; categorical failure is not established for every program | **Overbroad causal/predictive claim.** | Say individual wellness programs alone are unlikely to address structural drivers; cite systematic review and effect sizes. |
| Bail algorithm no better than chance and wrong twice as often for Black defendants | No immediate primary citation on Insights; likely combines contested COMPAS reporting/other studies | **Unsupported/decontextualized on the page.** | Identify tool, jurisdiction, outcome, comparison, date and source; reflect methodological dispute. |
| Trauma prevalence “up to 90%” in justice-involved populations | Domain literature may support high prevalence in particular samples | **Range/sample-dependent.** | Name population, study, trauma definition and jurisdiction; do not generalize to all justice-involved people. |
| “Six hundred studies” establish healthcare design effects | Evidence-based-design literature is extensive | **Citation-count rhetoric, not quality assessment.** | Replace with a systematic-review statement and specify outcomes/settings. |
| “Every zoning decision” shapes mental health | Plausible pathways through housing, pollution, green space and segregation | **Absolute and causal wording exceeds evidence.** | Use “can shape determinants of mental health” and specify mechanisms. |
| “Current treaties do not address crew rights” / legal vacuum | UNOOSA treaties and space-law sources are linked | **Partly supportable but legally overbroad.** Existing national law, contracts, human-rights norms, registration/jurisdiction rules and mission protocols may apply even where treaty specificity is limited. | State the precise unresolved question and jurisdiction; avoid “no law.” |
| CE credit quantities and seven pathways | Program design exists; all applications stated “in process” | **No current accreditation.** Credit type, acceptance and retroactivity depend on each accreditor/licensing jurisdiction. | Do not use credit/trademark language as earned approval; separate instructional hours from approved credits. |
| Certificates completed before accreditation can later be updated without retaking | Site FAQ assertion only | **Regulatory/accreditation outcome unverified and potentially misleading.** | Remove unless each accreditor gives written approval; never imply retroactive credit automatically. |
| “Core designed to qualify simultaneously” across CME, CNE, CLE, CPE, SW-CE, Psych-CE, CHES | PDF/program architecture | **A design intention, not qualification.** Accreditor criteria differ and approval is not transferable. | Say “being developed for separate review”; publish approvals only after confirmation. |
| Institutional roles, affiliations and publication record | About page and JSON-LD; no direct evidence links for most roles/publications | **Plausible but incompletely evidenced; JSON-LD overstates some relationships.** | Link exact publication records and describe roles precisely; remove current-school items from `alumniOf`. |
| Advisory/audit improves outcomes | No client outcome data or completed case evidence on parent site | **Unverified service outcome.** | Promise deliverables/process, not institutional or physiological outcomes; use pilots/case evidence when available. |

All 39 DOI resolver URLs in `/evidence` responded. That verifies link syntax, not that each paper supports every adjacent tier criterion or marketing sentence. A citation-by-claim matrix is needed, especially for numeric thresholds and module dependency claims.

### Professional-advice boundaries

The Framework and Privacy pages contain meaningful limits, but M1–M15 summary pages lack conspicuous legal/medical/professional-advice notices. Modules address legal space, bail/risk tools, psychedelics, cannabis pharmacology, medical AI, clinical environments, traditional medicine, and space jurisdiction. Footer-only framework language is insufficient. Each relevant page should say that content is educational/institutional-design information, not legal advice, medical advice, diagnosis, treatment, accreditation, audit certification, or a substitute for qualified jurisdiction-specific professionals.

## 9. Accessibility and responsive findings

### Verified positives

- Many pages include a skip link, labeled hamburger, `aria-expanded`, a labeled mobile-nav dialog, semantic headings, and visible text labels.
- Form inputs generally include `aria-label`.
- Filter and navigation buttons have readable text.
- Field pages include `prefers-reduced-motion: reduce`, though the main site’s handling is inconsistent.
- Fluid type and grid media queries are present.

### Serious/material defects

- The 13 homepage research disclosures are click-only `div` controls: no role, no keyboard access, no focus, no `aria-expanded`.
- Desktop CE dropdown is hover-only and lacks `:focus-within`/keyboard disclosure.
- Mobile dialog has no focus trap, Escape close, inert background, or reliable focus return.
- Filter buttons do not expose current state or result count to assistive technology.
- M14/M15 assessments render repeated radios without semantic `fieldset`/`legend` grouping; result changes are not an `aria-live` region.
- Success/validation messages are not live regions, and invalid email often only moves focus without an explicit announced error.
- Horizontal work carousel is not described as a carousel/region and may hide content/control relationships at zoom.
- Field pages lack skip navigation and a labeled primary navigation landmark; their compact uppercase text is likely difficult at zoom/small screens.
- All 11 PDFs are untagged and have anonymous/unspecified metadata. Reading order, headings, lists and tables are not structurally available to screen readers.
- Several low-contrast muted/opacity styles require formal WCAG contrast measurement; no automated or manual contrast evidence exists.
- There is no site-wide reduced-motion rule despite smooth scrolling and transitions.
- Multiple dense pages exceed 90 KB of HTML and contain long uninterrupted tables/cards, creating cognitive-load and reflow burdens.

Actual live desktop interaction was performed. The audit environment did not provide a documented way to force 375×667/390×844/768×1024 browser viewports, so small-device rendering is **source-inspected but not device-verified**. This remains an explicit acceptance boundary; Stage B verification must include physical viewport screenshots, 200%/400% zoom, keyboard-only traversal, VoiceOver/NVDA, touch target checks, and reduced-motion mode.

## 10. Brand-architecture findings

The correct architecture is:

- **NSAG:** separate research-led institutional-design practice; owner of Nervous-System-Aware Governance, modules, evidence, assessments, intelligence, education and advisory work.
- **Aloha AI:** distinct AI strategy/build practice that may implement NSAG infrastructure but does not define or contain NSAG.
- **Institutions of One:** distinct initiative about independent capability, ownership, relationships, evidence and portable infrastructure.
- **RN Selected Work/RN Builds:** evidence/workbench layer that documents builds and case studies.

RN Selected Work expresses this separation well. The NSAG live site does not:

- JSON-LD sets `alternateName` to both “Neurocognitive Systems Advisory Group” and “Aloha AI Consulting,” implying the entities are synonyms.
- About says “Founder & Principal · Aloha AI Consulting (M1–M15),” implying Aloha AI owns the NSAG module estate.
- About calls Aloha AI “the operational layer” and says it builds NSAG infrastructure without a boundary paragraph explaining separate commercial identity, IP, engagement and responsibility.
- JSON-LD `alumniOf` includes current/professional affiliations and laboratories, which can appear credential-inflating.
- “Institutional affiliations” combines education, employment, project participation, editorial work and professional roles in one credibility grid without relation type/date.

NSAG’s own purple/cream editorial identity is strong and differentiates the practice. Hawaiʻi grounding is present and substantive in the founder and field narrative, but future global-event targeting risks making the practice look aspirational rather than locally accountable. The strongest Hawaiʻi expression is not “50 events”; it is transparent authorship, local practice context, exact collaborators, and completed Hawaiʻi work.

## 11. Business model and conversion findings

### Audience and buyer

- Beneficiaries: patients, clients, workers, students, residents, communities and people subject to institutional systems.
- Primary buyers: hospital/health-system leaders, legal institutions, compliance/risk leaders, public agencies, universities, built-environment leaders, governance committees and selected regulated-industry teams.
- Decision-makers: executives, general counsel, compliance, quality/safety, clinical leadership, HR/people leadership, facilities/design, education administrators and boards.

### Economic value proposition

NSAG’s strongest monetizable value is not “neuroscience consulting” in the abstract. It is a structured, evidence-aware governance audit that converts diffuse institutional risk into an explicit profile, gap analysis, action plan, outcome commitments and follow-up. Advisory pricing is coherent enough for a founder-led practice if the actual deliverable, boundaries and capacity are clear.

### Conversion strengths

- Transparent prices and timelines.
- Free module assessments as a diagnostic entry point.
- Valid low-friction Microsoft Bookings route.
- Strong evidence/education depth.
- Several ways to begin: assessment, evidence, advisory, CE, intelligence.

### Conversion barriers

- Broken lead/newsletter/report API means conversion data and promised follow-up can be lost.
- Too many simultaneous offers dilute the core advisory path.
- No sample/redacted governance audit, service agreement terms, privacy/security addendum, client capacity, or case outcome.
- Intelligence pricing appears before a functioning subscription operation.
- CE pricing appears before approval/enrollment.
- “Index cohort” implies a benchmarking dataset without explaining sample, governance, consent, privacy, representativeness or minimum viable cohort.
- Email uses a university domain; for a separate practice this creates continuity/ownership and client-confidentiality concerns. A practice-owned domain should be primary.
- No terms of use, professional disclaimer page, accessibility statement, data-processing terms, refund/cancellation terms, or product support policy.

### Investment recommendation

Invest in NSAG as one focused advisory/research practice. Sequence commercialization:

1. repair data and truth boundaries;
2. prove one advisory deliverable and one assessment flow end to end;
3. publish a redacted sample and one honest case/pilot;
4. launch one intelligence product manually with explicit service terms;
5. pursue CE pathways only with written accreditor confirmation;
6. treat Index and broad field expansion as later-stage research infrastructure.

Do not build checkout, dashboards or 15-module enterprise software before the current inquiry, report and delivery operations work reliably.

## 12. Security, privacy, data, and operational findings

### Positive controls

Global headers include HSTS, `X-Frame-Options: DENY`, `frame-ancestors 'none'`, `X-Content-Type-Options: nosniff`, a strict referrer policy, and a restrictive permissions policy. No secrets were observed in client HTML. The privacy page says assessments are educational, not validated psychometric/clinical instruments, and says deletion can be requested.

### P1/P2 concerns

1. **CSP/API mismatch:** `connect-src 'self'` blocks `https://nsag-api.vercel.app`. This breaks pageview, lead, newsletter, paper, M14/M15 assessment reporting and download lead capture.
2. **False success:** code uses `.then(...)` without `response.ok` and often duplicates a success state in `.catch(...)`. The consumer cannot distinguish received, rejected, offline or blocked requests.
3. **Public hidden files:** 67 historic HTML artifacts are deployed. Remove them and ignore `.fuse_hidden*` globally.
4. **Privacy/implementation mismatch:** Privacy describes collection, email provider, aggregate pageviews and deletion, but the working deployment cannot send requests under CSP. Conversely, the privacy page does not name the API controller, hosting regions, provider, retention period, lawful basis, security controls, institutional-data rules or deletion contact procedure.
5. **Unverified API operations:** GET requests to `/api/lead` and `/api/pageview` return 405 and advertise POST/OPTIONS with permissive CORS (`*`), which confirms endpoint presence but not persistence, validation, rate limiting, abuse prevention, email delivery or deletion.
6. **No terms/professional disclaimer:** Legal/medical/institutional governance content needs a durable terms/scope page.
7. **Email identity:** primary contact is `collins.ra@northeastern.edu`, not a practice-controlled address.
8. **No consent distinction:** newsletter, report delivery, CE inquiry and occasional updates should not be bundled without explicit, granular consent and unsubscribe information.
9. **Assessment sensitivity:** even aggregate tier/module data can reveal institutional risk. The site needs minimization, retention, access control, deletion and breach-response rules before institutional use.
10. **Static duplication:** repeated inline CSS/JS across large HTML pages raises drift risk. Privacy metadata already shows copy/paste failure.

The authenticated Vercel project was absent from the connected project list, so deployment ownership, environment variables, logs, protection, analytics, domains and rollback state are unverified.

## 13. Defects ranked by severity

### P0 — blocking

None confirmed. If the site is currently being used to accept institutional data or paid commitments, the broken/falsely successful submission flow becomes operationally blocking and should be treated as P0 until repaired.

### P1 — serious

1. CSP blocks all `nsag-api` calls while UI reports success.
2. 67 `.fuse_hidden…` historic HTML files are publicly downloadable.
3. CE language creates unverified expectations about credit, certificates and possible retroactive treatment before accreditation.
4. Scientific/legal claims are sometimes categorical beyond the cited evidence; framework/tier validation is not distinguished consistently from domain evidence.
5. NSAG/Aloha AI are conflated in JSON-LD and About role copy.
6. Medical/legal/governance module pages lack prominent professional-advice and validation boundaries.
7. Click-only evidence disclosures are keyboard-inaccessible across the homepage.

### P2 — material

1. Privacy canonical/OG/title metadata are wrong.
2. Sitemap omits intelligence, applied, privacy and all field routes; no robots file.
3. CE web/PDF scope conflicts: “15 modules” versus “13 modules” with M14/M15 coming.
4. Paid intelligence products have no operational purchase/delivery surface and should be labeled direct-service/pilot availability.
5. Field status language is time-confused and unevidenced.
6. Mobile nav lacks focus management/Escape; dropdown lacks keyboard submenu behavior.
7. Filters and dynamic results lack state/live semantics.
8. All 11 PDFs are untagged with poor metadata.
9. JSON-LD relation types inflate/blur alumni, work, lab and practice relationships.
10. Missing terms, accessibility statement, retention schedule and practice-controlled contact address.
11. Parent summary/module-deployment duplication lacks explicit canonical/maintenance policy.

### P3 — polish

1. Conventional favicon and web manifest absent.
2. Dense repeated navigation/footer CSS and very large static pages.
3. Direct `/404` returns 200.
4. Field microsite styling/navigation diverges from parent.
5. Carousel and muted copy need contrast/touch refinements.

## 14. Exact remediation plan

No remediation was performed in Stage A.

### Repository hygiene and deployment

- Delete all `public/.fuse_hidden*` files; add `.fuse_hidden*` to `.gitignore`.
- Add a predeploy script/check that fails if hidden FUSE files, archives, secrets or editor artifacts exist under `public/`.
- Keep root `_archive_nsag_website_v26.html`, `_archive_nsag_website_v27.html`, and root `index.html` outside output or move them to a clearly non-deployed archive branch; document `public/index.html` as the source of truth.
- Add at least a minimal test/check layer for links, metadata, HTML validity and disallowed public artifacts.

### API and submission integrity

- In `vercel.json`, add `https://nsag-api.vercel.app` to `connect-src` only after confirming the endpoint is canonical and secured.
- In every `fetch`, require `response.ok`, parse an explicit success payload, render distinct pending/success/failure states, preserve inputs on failure, and never treat `catch` as success.
- Add timeouts, retry guidance, accessible error/live regions and request IDs.
- Verify `nsag-api` rate limits, input validation, origin policy, spam controls, storage, retention, deletion, email provider and logs in its separate infrastructure audit.
- Separate service/report delivery consent from marketing consent; add unsubscribe language.

### Claims and boundaries

- In `public/index.html`, `framework.html`, `insights.html`, `evidence.html`, module summaries and CE pages, distinguish: `(a) established external evidence`, `(b) RN-authored framework inference`, `(c) proposed rubric/threshold`, `(d) operationally validated product`, and `(e) future plan`.
- Replace unqualified “measurable” with “structured/documentable” where measurement validation is absent.
- Add inline citations and limitations to every quantitative Insights claim.
- Add a claim-to-source table with study population, design, outcome, limitation, jurisdiction and last review date.
- Add an explicit derivation/review statement for six dimensions, four tiers, weights, cut points and module dependencies.
- Add professional-advice notices to all relevant module pages and Terms.

### CE

- Reconcile “13 modules” versus “15 modules” across `public/ce.html`, every `public/ce/*.html`, and all 9 CE PDFs.
- Use “instructional hours planned” until approval; do not promise approved credit, accreditation numbers or retroactive certificate treatment.
- Replace trademark/credit language with accreditor-approved language only after written authorization.
- Publish exact accreditor, provider/partner, jurisdiction, approval identifier, term and accepted formats when confirmed.
- Make PDFs tagged, structured, titled, authored and accessible.

### Brand architecture

- Remove “Aloha AI Consulting” from NSAG `alternateName` JSON-LD.
- Remove `(M1–M15)` from the Aloha AI role or rewrite as “A separate technical practice that may implement NSAG systems.”
- Add a short site-wide “Practice architecture” disclosure linking NSAG, Aloha AI, RN Selected Work and Institutions of One without synonymizing them.
- Correct JSON-LD: current education belongs in an appropriate current-membership/affiliation property, not `alumniOf`; employment, laboratories, editorial work and project roles need precise relation types and dates.

### Metadata/IA/accessibility

- Fix `/privacy` title markup, description, canonical and OG fields.
- Add `/intelligence`, `/applied`, `/privacy`, `/field*` to sitemap; add `robots.txt` and sitemap reference.
- Add canonical/OG metadata to field pages and unify navigation.
- Convert click-only evidence `div`s to `<button>` + controlled panel or `<details><summary>`.
- Add `:focus-within`, Escape handling, focus trap/return, `aria-pressed`, result counts/live regions, radio fieldsets/legends, full reduced-motion support and visible focus.
- Verify 375×667, 390×844, 768×1024, desktop, 200% and 400% zoom; remediate contrast and touch targets.

### Product/business

- Lead with one core commercial path: assessment → discovery → governance audit.
- Publish a redacted sample audit and clearly defined data requirements/deliverables.
- Label intelligence offers “direct service/pilot” until delivery, billing and support exist.
- Keep CE inquiry-only until one approval is confirmed.
- Replace field status badges with dated evidence states: `confirmed engagement`, `application submitted`, `planned research`, `target`, `aspiration`.

## 15. Recommended estate disposition

**P — parent/canonical.**

Rationale:

- This is the canonical public home of a distinct practice, not a duplicate build.
- It provides the organizing layer for 15 module deployments, evidence, education, advisory and applied systems.
- Its breadth is strategically useful when properly bounded.
- The component modules should remain children of NSAG in RN Selected Work even though each needs an independent deployment dossier.
- `nsag-api` and `nsag-admin` are infrastructure (`I`) pending separate code/integration audit, not consumer portfolio cards.
- Parent summary pages `/m1`–`/m15` should be consolidated or maintained as summary routes, not counted as separate builds from the dedicated module deployments.

The disposition is conditional on Stage B repair of P1 truth, data and accessibility defects.

## 16. Proposed RN Selected Work case-study corrections

The existing case study has the correct high-level brand separation and module architecture. It should be corrected as follows after root acceptance:

1. Change “active system” to “active public framework and developing practice” until submission/report/product delivery works.
2. Change “makes those effects visible, documentable, measurable, and governable” to “organizes evidence and governance criteria to make institutional effects more visible, documentable, and governable.”
3. Label the assessment system “educational self-assessment framework; not a validated psychometric, clinical, audit, or accreditation instrument.”
4. Change “Fifteen sector-specific modules using … reports” to distinguish module interfaces from verified report delivery; all modules are live, but each is subject to its own dossier.
5. Qualify Institutional Practice as an offered service architecture until completed engagements/outcomes are evidenced.
6. Qualify Intelligence as “defined direct-service products in development/pilot delivery”; do not imply functioning subscriptions.
7. Change Education to “15-session curriculum and seven accreditation pathways in development; enrollment not open; no current CE approval claimed.”
8. Add a system-status block:
   - parent informational site: live;
   - module deployments: 15 live, individual audits in progress;
   - API lead/report flows: broken at audited date due CSP;
   - CE: curriculum present, accreditation/enrollment pending;
   - advisory: bookable offer, outcomes unverified;
   - intelligence: priced direct-service concepts, delivery unverified.
9. Add `/applied`, `/privacy`, and `/field` to the surface list if they remain material; clarify field pages are roadmap, not completed work.
10. Keep the explicit distinction among NSAG, Aloha AI, Institutions of One and Selected Work; note that the live NSAG site itself still requires corresponding correction.
11. Do not create 15 independent top-level portfolio cards unless root later determines a module is a genuinely standalone product. Prefer one parent case with auditable component records.
12. Add the audited deployment/repository date and link this dossier as internal evidence.

Suggested case-study boundary statement:

> NSAG is RN’s authored governance framework and developing advisory practice. The public estate demonstrates a 15-module architecture, evidence library, educational self-assessments, service and intelligence-product design, continuing-education curriculum, and applied prototypes. These interfaces do not establish that the assessment tiers are validated measures, that every cited study validates NSAG’s scoring criteria, that accreditation has been awarded, or that paid products and institutional outcomes have been independently verified. Each module deployment is audited separately.

## 17. Evidence appendix

### Primary artifact evidence

- Deployment: [https://nsag-site.vercel.app/](https://nsag-site.vercel.app/)
- Sitemap: [https://nsag-site.vercel.app/sitemap.xml](https://nsag-site.vercel.app/sitemap.xml)
- Privacy: [https://nsag-site.vercel.app/privacy](https://nsag-site.vercel.app/privacy)
- Framework limits: [https://nsag-site.vercel.app/framework](https://nsag-site.vercel.app/framework)
- Evidence library: [https://nsag-site.vercel.app/evidence](https://nsag-site.vercel.app/evidence)
- Advisory: [https://nsag-site.vercel.app/advisory](https://nsag-site.vercel.app/advisory)
- Intelligence: [https://nsag-site.vercel.app/intelligence](https://nsag-site.vercel.app/intelligence)
- CE: [https://nsag-site.vercel.app/ce](https://nsag-site.vercel.app/ce)
- Applied: [https://nsag-site.vercel.app/applied](https://nsag-site.vercel.app/applied)
- Field roadmap: [https://nsag-site.vercel.app/field](https://nsag-site.vercel.app/field)
- RN Selected Work case source: `app/work/neurocognitive-systems-advisory-group/page.tsx`
- Repository tree: 129 entries; 53 legitimate public blobs plus 67 hidden FUSE blobs and root/config/archive files.
- Deployment header evidence: `connect-src 'self'`; HSTS; frame denial; `nosniff`; strict referrer policy; permissions policy.

### Scientific/source checks used for high-risk examples

- Obermeyer et al. (2019), racial bias in a widely used population-health algorithm: [https://doi.org/10.1126/science.aax2342](https://doi.org/10.1126/science.aax2342)
- Barrett et al. (2015), classroom-design modeling: [https://doi.org/10.1016/j.buildenv.2015.02.013](https://doi.org/10.1016/j.buildenv.2015.02.013)
- Warfarin/cannabinoid systematic review (very low-quality case-report evidence): [https://pubmed.ncbi.nlm.nih.gov/37740600/](https://pubmed.ncbi.nlm.nih.gov/37740600/)
- Probable warfarin/marijuana case report: [https://pubmed.ncbi.nlm.nih.gov/19531696/](https://pubmed.ncbi.nlm.nih.gov/19531696/)
- Case report with minimal INR fluctuation, illustrating route/dose uncertainty: [https://pubmed.ncbi.nlm.nih.gov/35012687/](https://pubmed.ncbi.nlm.nih.gov/35012687/)
- UNOOSA treaty resources are linked from the site; they do not alone establish a complete “legal vacuum.”

### Test observations/log summary

- 40 mapped HTML endpoints fetched; all declared content routes returned 200; arbitrary unknown route returned 404.
- 126 unique same-origin href destinations were requested; no non-200 result was observed in the completed internal link ledger.
- 15 separate module homepages returned 200.
- 5 Applied homepages returned 200.
- 39 unique DOI resolver links returned 302.
- 11 PDFs fetched and inspected; all were untagged.
- 3 representative `.fuse_hidden…` deployment URLs returned 200 and historical HTML bodies.
- Microsoft Bookings rendered the correct owner and guest/sign-in options in browser.
- Live homepage filter test: 15 module cards initially; Legal filter showed M1, M2 and M6.
- No contact, subscription, enrollment, purchase, assessment-report, email or booking form was consequentially submitted.

### Explicit unverified areas

- No authenticated Vercel project/configuration/log access was available; public deployment and repo/config were inspected instead.
- Private `nsag-api` and `nsag-admin` storage, security, deletion, email, analytics, rate limiting and operational behavior were not audited.
- M1 and M2 are being independently audited; M3–M15 dedicated deployments require later dossiers. This parent dossier verifies reachability and relationship, not all child behavior.
- Accreditation applications, CE acceptance, certificate treatment and provider-partner status were not independently confirmed.
- Founder roles, institutional affiliations and the complete publication bibliography were not independently credential-verified in this crawl.
- Paid subscribers, advisory clients, delivered audits, reported outcomes, Index cohort data and field-event agreements were not evidenced.
- Actual small-viewport, screen-reader and high-zoom runs were not available; source-level responsive/accessibility findings are explicit and must be device-verified in Stage B.
- External DOI destination pages were not all content-audited paper by paper; resolver status and high-risk representative claims were checked. A claim-level scientific review remains required before categorical marketing use.

This dossier freezes Stage A findings only. It does not authorize changes to `nsag-site`, module sites, NSAG infrastructure, or RN Selected Work.
