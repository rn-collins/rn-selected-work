# NARCH Advisory — Stage A recertification dossier

Audit date: 2026-08-13 (HST)  
Stage: A, read-only  
Auditor roles: consumer; software engineer; product developer; copy/information architect; science, law, policy and regulatory communicator; brand strategist; business partner  
Release state: **blocked**

## 1. Asset identity

- **Artifact:** NARCH — Neuroarchitecture Advisory.
- **Canonical public deployment:** `https://narch-advisory.vercel.app/` (public, no authentication).
- **Canonical repository:** private GitHub repository `rn-collins/narch-advisory`, default branch `main`.
- **Production mapping:** Vercel project `prj_HVIEcD5arDEWeT435oBKQcqY9zEF`, team `team_6xuOmJL3MoIFarDpy9odi175`; latest production deployment inspected: `dpl_G45UeBYJpeqPs9ubDDHcn7AvNQY4`, `READY`, commit `f4b59900f3e71616135a7346699792f7f185d060` (“content: cite RN Collins' real published work where topically relevant”). Git metadata reports the repository private.
- **Architecture:** one 51 KB static `index.html`, plus `robots.txt` and `vercel.json`; no framework, package manifest, application test suite, first-party API implementation, privacy page, terms page or sitemap was found. The page calls external services directly from inline JavaScript.
- **Owner/parent:** the page expressly says “NARCH is an NSAG applied brand” and “not a standalone product.” NSAG owns the framework/advisory method. Aloha AI is properly limited to technical build/implementation credit; RN Builds/RN Selected Work is the portfolio/index.
- **Actual status:** public, priced, pre-launch advisory-service landing-page prototype with a functioning local self-assessment and unverified external conversion pathways. No delivered client engagement, assessment, POE, workshop, filing, report or outcome was verified.
- **Privacy:** public content; the repo is private. The assessment remains local. Vercel analytics, Google Fonts, session-stored UTM parameters, a broken first-party tracking request and an external lead relay exist without a privacy notice.
- **Current RN Selected Work treatment:** one standalone public-build record (`slug: narch`) titled “NARCH — Neuroarchitecture Advisory,” status “Live applied-practice concept.” Its evidence paragraph is appropriately cautious, but “live” and the standalone count still overstate the service boundary.

## 2. Executive verdict

NARCH is a visually coherent NSAG applied-service proposition: it offers research translation, evidence documentation and a proposed six-dimension built-environment review. The site successfully explains the conceptual method and calculates a five-question readiness score entirely in-browser. It does **not** substantiate the advertised evidence base, assessment validity, professional authorization, delivery history or downstream usability of its proposed document in architectural, grant, planning, healthcare, accreditation or regulatory contexts.

The public artifact should exist only after being repositioned as **research and evidence-translation support for licensed project teams**, not as an architecture firm, design authority, clinical/health assessment, code/compliance service or filing assurance. Immediate public promotion is unsafe because the page calls RN “the Architect,” uses universal biological/causal language, presents three precise uncited outcome figures, misstates thermal comfort and WELL verification, cites a rescinded federal standard as current, and routes personal data through an external lead API with no privacy terms or reliable success state.

Top risks:

1. **Professional-role misrepresentation:** “Contact the Architect,” “neuroarchitecture advisory firm,” “design advisory,” and regulator/filing language appear without architectural licensure, jurisdiction or a licensed professional partner.
2. **Unverifiable science:** “600 studies,” “15% stress reduction,” “6% sick-leave reduction,” distinct “nervous system effects,” and broad causal claims have no linked primary sources or review method.
3. **Incorrect/outdated authority:** thermal comfort is defined contrary to ASHRAE; WELL is incorrectly treated as input-only; GSA P100 was rescinded in 2025.
4. **Product overstatement:** the readiness diagnostic is an unvalidated five-item sales quiz; “Get the Full Report” opens a contact form and does not produce a report; “NARCH assessments close this loop” is unsupported.
5. **Lead/privacy failure:** no privacy/retention/controller notice; submission treats every resolved HTTP response as success and erases the form even on server errors.

## 3. Complete route map

See `ROUTE_CONTROL_LEDGER.md` for every tested route and destination.

- `/` — 200; only substantive same-origin page.
- `/robots.txt` — 200; `User-agent: * / Allow: /`.
- `/sitemap.xml` — 404 despite a `<link rel="sitemap">` declaration.
- `/api/track` — 404; the page attempts a POST after 300 px scroll.
- `/privacy`, `/terms`, `/nonexistent` — 404.
- No route router, sitemap routes, same-origin article routes or downloadable deliverables were found in source.
- External destinations: NSAG root and `#modules`, Microsoft BookWithMe on RN's Northeastern account, Fat Nugs article, GAPI, SPORT, WNH, Aloha AI, legacy RN Builds, Google Fonts, Vercel Insights/Speed Insights and `nsag-api.vercel.app/api/lead`.

## 4. Complete interaction/control inventory

- NARCH logo link: `href="#"`; jumps to document top, not a named home route.
- NSAG back link: external navigation to parent.
- Two “Book a Discovery Call” CTAs: open Microsoft BookWithMe in a new tab; booking was not made.
- Three NSAG module chips: all open the same parent-page `#modules` anchor rather than the relevant module.
- Readiness assessment: five radio groups, three answers each (0/1/2), “Get My Score,” result replacement, then “Get the Full Report.” Local arithmetic works, but no validation evidence or retry control exists.
- “Get the Full Report”: opens contact modal; it does not generate, show, email or download a report.
- Fat Nugs article card and three related-domain cards: external navigation.
- Floating “Contact the Architect”: opens modal.
- Modal: name, email, optional message, Send, Cancel. It has placeholder-only labels, no dialog semantics, no focus management, no Escape close and no privacy notice. Send was not submitted.
- No search, filter, account, checkout, payment, deliverable download, client portal, evidence library, citation expansion, POE instrument or status tracker exists.

## 5. Consumer journeys and observed results

1. **Understand the offer:** price and nominal deliverable are visible. The user cannot inspect a sample 20-page brief, methodology, inclusion/exclusion scope, turnaround, jurisdictions, source-review standard, professional team, terms or case evidence.
2. **Assess readiness:** answering all five items yields a percentage and Early/Developing/Advanced label. The score is a self-report sales heuristic, not a verified organizational assessment. The result replaces the quiz, provides no scoring rationale, uncertainty, saved/exported result or retry.
3. **Request “full report”:** the label opens a generic inquiry modal. There is no report. This is a material expectation mismatch.
4. **Book a call:** CTAs leave the site for a Northeastern-hosted BookWithMe account. No commercial affiliation clarification is given, and no booking was completed.
5. **Check evidence:** the page names journals/standards and exact percentages but supplies no primary-source citation list, DOI, authors, study population, intervention, outcome instrument or limitation. Verification is impossible from the page.
6. **Contact:** synthetic fields can be entered, but submission was prohibited. Static code would erase the form and imply success on any resolved response, including non-2xx.

The consumer receives a strong concept narrative and prices, but not evidence sufficient to trust or purchase a health-adjacent, filing-adjacent professional service.

## 6. Functional matrix

| Capability | State | Evidence |
|---|---|---|
| Static explanation and pricing | Working | Rendered at `/` |
| Local readiness scoring | Working mechanically | Five hard-coded items, 0–10 total converted to percentage |
| Validated NARCH maturity assessment | Missing | No validation, norm, reliability, evidence inspection or sector adjustment |
| Full report | Simulated/mislabeled | CTA only opens inquiry modal |
| Biophilic Evidence Audit | Proposed | No sample, completed delivery, workflow, report engine or client evidence |
| Design advisory/workshop/retainer | Proposed | Prices only; no fulfillment evidence or terms |
| POE measurement | Proposed | No instrument, protocol, data system, consent, qualified assessor or outcome |
| Evidence library/citations | Missing | Claims are prose only |
| Booking | External/unverified | Microsoft BookWithMe; no booking submitted |
| Lead capture | Partial/unsafe | External POST, no privacy, unreliable response handling |
| Scroll tracking | Broken | `/api/track` is 404 |
| Sitemap | Broken | declared but 404 |
| Analytics | Present/unverified | Vercel scripts loaded; no notice |
| Checkout/payment/client portal | Missing | none |

## 7. Copy and information-architecture findings

- “The Built Environment Is Governance” is differentiated, but “determines what is cognitively and physiologically possible” is universal and deterministic; use “can shape conditions that influence…” and scope by population/context.
- “Six Hundred Studies. One Usable Framework” and repeated “600 studies” function as authority theater without a review corpus, search strategy, date range, inclusion criteria or bibliography.
- “Almost none” architecture firms can make evidence usable is unsupported competitor disparagement.
- “Neuroarchitecture advisory firm” and “Contact the Architect” imply a regulated professional role. RN's displayed education is not architectural licensure.
- “Citations usable in … public filings” and “works across all three contexts” confuse an evidence memo with acceptance, compliance, legal sufficiency or licensed-professional sign-off.
- The footer appears halfway through the document, before most content, breaking page hierarchy and trust.
- The legal-only disclaimer is category-inappropriate. The principal boundaries are architectural/engineering scope, science/health interpretation, POE research, privacy and regulatory/funding review—not merely legal advice.
- “Deliverable is a governance document, not a report” contradicts “20-page evidence brief,” “full report,” and ordinary buyer expectations.
- “Outside NARCH's own client work” implies delivered client work not evidenced in the repository or deployment.
- “Get the Full Report” must become “Discuss a full assessment” unless an actual report is generated.
- The metadata repeats “firm,” omits evidence/professional limits, lacks an OG image and uses only generic `WebSite` schema rather than accurate person/service authorship.

## 8. Science, law, policy and regulatory claim ledger

| Claim | Finding | Required correction/source |
|---|---|---|
| “600 studies confirm” broad biological regulation | Untraceable corpus and overbroad causal synthesis | Publish review protocol/bibliography; distinguish association, experimental evidence and context; date the search |
| Physical space “determines” what is possible | Deterministic universal claim | Use qualified influence language; specify mechanisms and populations |
| Direct/indirect/spatial elements have distinct nervous-system effects | No citations; category-specific causal claim | Cite intervention-specific primary studies/reviews and state uncertainty |
| Hospital night noise causes sleep disruption and cardiovascular stress | Plausible but unsourced and too categorical | Cite current primary studies/review; distinguish acute physiological measures from clinical outcomes |
| Workplace noise causes working-memory impairment | Plausible but unsourced/context-dependent | Cite task/noise/population-specific evidence |
| POE proves cognitive/physiological/behavioral effects | No instrument or causal design | Define outcomes, baseline, comparison, confounding, consent, data governance and qualified assessor |
| Biophilic equity is “documented”; access correlates with SES | Broad and jurisdiction-sensitive | Cite population/geography-specific evidence; avoid causal inference from correlation |
| Documents work for grants, approvals and regulatory filings | Unsupported professional/compliance assurance | Recast as research support subject to licensed architect/engineer, counsel, grantmaker and regulator review |
| “2019 HERD” natural-light intervention reduced self-reported stress 15% | No citation; exact claim not located in targeted primary-source search | Remove until DOI/full paper, cohort, intervention and instrument are verified |
| “GSA POE” daylight reduced sick leave 6% | No citation; exact claim not located; likely conflation risk | Remove until actual GSA primary report is produced |
| 2021 spectrum-versus-luminance cognitive study | Too vague to verify | Provide authors/title/DOI and precise supported proposition |
| GSA PBS-P100 is a current POE primary source | Incorrect/currentness failure | GSA says P100 was rescinded 2025-02-24; distinguish archived design standards from an actual POE protocol and cite 2025 Core Building Standards where applicable |
| LEED/WELL “measure inputs/features, not nervous-system outcomes” | Overbroad/false as to verification | WELL requires documentation and onsite, third-party performance verification of environmental parameters; clarify that certification verification is not proof of every causal human outcome |
| Thermal comfort is an “objective range” and preference is subjective | False | ASHRAE Standard 55 defines thermal comfort as a condition of mind expressing satisfaction, assessed subjectively; environmental/personal factors are measured inputs |
| “Biophilic density” ratio per square foot is an operational literature measure | Appears to be an uncited, nonstandard proprietary construct | Label “proposed NARCH operational metric”; publish construct rationale, measurement rules and validation; do not attribute to literature without source |
| ART definition and “reliably reduces” fatigue/stress | Theory presented as established outcome guarantee | Cite foundational and current critical evidence; replace “reliably” with appropriately bounded language |
| Score indicates NARCH governance maturity | Unvalidated inference from five self-reported items | Label educational reflection tool; no maturity/diagnostic claim until validation |

Primary authority checks performed:

- ASHRAE Standard 55-2023 materials define thermal comfort as a subjective condition of mind and identify environmental plus personal factors.
- IWBI's April 2026 WELL guidance requires documentation review plus onsite third-party performance verification, including real-world Air, Water, Light, Thermal Comfort and Sound data.
- GSA's February 2026 facilities page and June 2026 accessibility guidance state that P100 was rescinded on 2025-02-24 and replaced by Core Building Standards; archived P100 remains historical.
- Targeted searches did not identify the exact 15% HERD or 6% GSA daylight claims. Absence from search is not proof no paper exists, but publication is blocked until the claimed sources are produced and checked.

Professional boundary: no architectural license, engineering license, medical/clinical credential, WELL authorization, POE research approval, accreditation authority or legal qualification is evidenced. The service may synthesize research, but project design, code compliance, stamping, clinical inference, research with human participants, legal sufficiency and filing approval require the relevant licensed/authorized professionals and jurisdiction-specific review.

## 9. Accessibility and responsive findings

- No `<main>` landmark or skip link; the only footer is placed before later main content.
- No global visible `:focus` treatment; hover styles dominate.
- Smooth scrolling has no `prefers-reduced-motion` exception.
- Modal lacks `role="dialog"`, `aria-modal`, accessible title association, focus trap, initial focus, focus return and Escape handling.
- Contact fields use placeholders instead of persistent labels; status/success/error is not announced.
- Diagnostic result is not `aria-live`, not focused and has no reset/retry.
- The validation `alert()` is disruptive and not inline-associated.
- The floating contact button may obscure mobile content; a CSS shrink rule reduces but does not eliminate overlap.
- Inline two-column and pricing layouts have incomplete small-screen reflow; the price table relies on reduced padding rather than a responsive table pattern.
- Multiple 0.6–0.8rem text blocks risk zoom/readability strain.
- No image content exists, so no current alt-text defects; there is also no portrait/authorship image.
- Automated/interactive browser, screen-reader, contrast and actual 320 px visual testing were unavailable in this environment. Findings derive from complete HTML/CSS/JS inspection and HTTP responses and must be confirmed in Stage B with a real browser.

## 10. Brand architecture and RN portrait/authorship audit

The correct architecture is: **NSAG → NARCH applied method/service; Aloha AI → technical implementation; RN Selected Work → public workbench/portfolio.** The current footer largely says this, but the legacy “RN Builds” URL, `Contact the Architect`, and unsupported “firm/client work” copy fragment the boundary.

Portrait/authorship audit:

- **Build:** portrait missing. RN is named only in a premature footer; no About/creator block explains role, credentials, limits or collaborators.
- **RN Selected Work NARCH case:** no case-specific portrait is wired; the shared case renderer uses text only. The portfolio does contain verified assets `public/rn-collins-portrait.webp` and `public/rn-collins-portrait.svg`; the Connect page uses the SVG with alt “Portrait of Rayven-Nikkita (RN) Collins.”
- **Asset/loading/crops:** no build portrait asset, alt text, loading policy, desktop/mobile crop or asset integrity can be audited because none is used.
- **Metadata/social:** no `og:image`, Twitter card/image or Person/author structured data; social previews cannot visually establish authorship.
- **Strategic decision:** a portrait is warranted once, not repeatedly: add a compact “Research lead” section immediately before the final footer/contact CTA, with RN's portrait, full name, actual M.S. credential, current student status, narrowly described evidence-synthesis role, and explicit non-architect/non-clinical/non-legal boundary. Do not place a portrait in the scientific-claim hero where it would substitute personal authority for citations.
- **Exact source asset:** copy the canonical RN Selected Work raster source `rn-selected-work/public/rn-collins-portrait.webp` into the NARCH repository through the approved asset pipeline (retain provenance and optimize dimensions); use meaningful alt “Rayven-Nikkita (RN) Collins, NARCH research lead.” Use a square or 4:5 `object-position:center top` crop verified at desktop and 320 px mobile. Create a purpose-built 1200×630 social image combining the NARCH wordmark, plain-language proposition and a restrained portrait crop; do not use the portrait alone as the OG image.

## 11. Business model and conversion findings

- Intended buyer: architecture/design firm principal, developer, healthcare/civic institution, grant team or funder. Beneficiaries include occupants and reviewers.
- Economic value hypothesis: reduce evidence-research burden and improve traceability of design rationales. It is not yet validated by purchase, delivery or outcome evidence.
- Prices are clear but scope is not: project size, source count, turnaround, revision count, meetings, research access, rights, confidentiality, data handling, POE costs, expert partners, taxes, cancellation and liability are absent.
- A $3,500–$20,000 professional service requires a sample redacted deliverable, method, evidence-grading rubric, engagement terms, limitations and at least one verifiable demonstration case.
- BookWithMe on a university account creates institutional-affiliation ambiguity. Use a business-controlled scheduler/domain unless Northeastern explicitly authorizes commercial use and clearly disclose no endorsement.
- Conversion should be “request a research-scoping call,” not “contact the architect.” Qualify project type, location, stage, licensed design team and desired research support before pricing.
- Recommended investment: retain as an NSAG applied service component, complete one transparent demonstration audit with licensed architecture/engineering review, then consider a limited paid pilot.

## 12. Security, privacy, data and operational findings

- Security headers present: HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, strict-origin referrer policy and restrictive camera/microphone/geolocation permissions.
- Missing Content Security Policy; inline scripts/styles and third-party fonts/analytics increase the impact of injected content and tracking.
- UTM values are retained in `sessionStorage`; after scroll the page posts them to missing `/api/track` (404). Remove the broken call or implement a documented, minimized endpoint.
- Vercel Insights and Speed Insights plus Google Fonts load without privacy/cookie/data-transfer disclosure.
- Contact sends name/email/message/source/UTM values to `nsag-api.vercel.app/api/lead`; no controller, processor, purpose, retention, deletion, security or consent notice is shown.
- The form `.then()` path closes and resets on any resolved HTTP response; there is no `response.ok` check, failure state, idempotency, rate-limit UX or confirmation identifier. False success/data loss is likely.
- No local privacy/terms/service agreement, no support channel independent of form, and no uptime/maintenance owner.
- Static implementation has no dependency/build supply-chain risk, but also no automated HTML, link, accessibility, claim-currentness or integration tests.
- No consequential POST was made and no private records were accessed.

## 13. Ranked defects

### P0 — blocking

1. Replace “Contact the Architect” and architecture-firm implications; establish licensed-professional and jurisdiction boundaries.
2. Remove or substantiate the exact 15%, 6%, 2021, 600-study and categorical health/cognitive claims with auditable primary sources.
3. Correct thermal comfort, WELL and GSA P100 statements.
4. Stop/repair external lead capture until privacy, retention, reliable response handling and support ownership exist.
5. Remove filing/approval/compliance assurances and implied delivered client work.

### P1 — serious

1. Reclassify diagnostic as an educational self-reflection; remove maturity inference/full-report bait or validate/build the report.
2. Publish method, evidence grades, sample brief and engagement scope.
3. Add architecture/engineering, clinical/health, legal, grant, regulatory and research/data disclaimers.
4. Fix modal keyboard/label/status behavior and mobile overlap.
5. Add citation links beside every substantive claim and a dated evidence register.

### P2 — material

1. Move footer to document end; add main/skip link/headings and responsive table/grid behavior.
2. Fix missing sitemap and broken `/api/track`; add CSP and privacy/terms.
3. Replace legacy RN Builds URL with canonical RN Selected Work.
4. Resolve university scheduler affiliation and commercial ownership.
5. Add creator/portrait/authorship and accurate service/Person metadata.

### P3 — polish

1. Link module chips to unique module records.
2. Add retry/reset and transparent item scoring.
3. Reduce jargon/repetition and define proprietary terms as proprietary.

## 14. Exact remediation plan

All current changes target `index.html` unless noted:

1. Rewrite title, description, hero, offer, principles, examples, glossary, signal/noise, article intro and CTAs to the verified boundary.
2. Delete all unverified precise statistics until citations pass review; add a claim register with title, author, year, DOI/official URL, population, design, supported proposition, limitations, review date and evidence grade.
3. Replace the P100 item with current GSA authority and distinguish design standards from POE research. Correct WELL and ASHRAE text.
4. Rename contact surface “Contact NARCH” or “Request research scoping”; add role/jurisdiction qualification and no-guarantee language.
5. Convert the quiz result to “reflection,” show calculation and limitations, add reset, and change CTA to “Discuss an evidence review.” If kept as an assessment, develop and validate an instrument before publication.
6. Build accessible modal semantics, labels, focus management, Escape, status region and `response.ok` error handling. Do not clear user input on failure.
7. Add `/privacy` and `/terms` static documents covering Vercel, Google Fonts, Microsoft booking, NSAG API, purpose, retention, rights and controller contact. Update `vercel.json` with an evidence-tested CSP.
8. Remove broken tracking or add a privacy-reviewed, same-origin endpoint; do not retain unnecessary UTMs.
9. Move footer last, add `<main>`, skip link, focus styles, reduced-motion rule and small-screen reflow.
10. Add `assets/rn-collins-portrait.webp` from the canonical RN Selected Work source and the research-lead block described in section 10; add a purpose-built OG image, `Person`/`Service` JSON-LD and image metadata.
11. Add a build script/test suite (HTML validator, axe/Playwright at 320/768/1440, link/404 check, keyboard modal/quiz tests, claim-date lint and external integration mocks).
12. In `vercel.json`, keep existing headers, add CSP after enumerating required origins, and explicitly serve the sitemap/privacy/terms assets.

Release only after a licensed architecture/engineering reviewer and a scientific reviewer approve relevant claims and boundaries, and after counsel reviews service/filing language and privacy terms.

## 15. Recommended estate disposition

**C — component/applied service of NSAG; public release blocked.**

NARCH is not an independent P build because its own page states that the audit “is not a standalone product” and NARCH is an “NSAG applied brand.” Keep a clickable applied-implementation entry nested under the NSAG case; do not count it as a separate top-level build. Repository/deployment remain distinct for engineering and crawl accountability. Parent mapping: `nsag-site` → `narch-advisory`. Aloha AI receives implementation credit only.

## 16. Proposed RN Selected Work case-study corrections

Exact treatment/count:

- Remove NARCH from the standalone/top-level build count.
- Retain one nested, clickable **NSAG applied implementation** record with both “Read case” and “Open concept” actions after release gates pass. Until then, suppress the live link or label it “Concept under evidence and professional-boundary review.”
- Do not describe it as a firm, operating advisory, delivered assessment or independently validated method.

Proposed record:

- **Title:** NARCH — NSAG Built-Environment Evidence Method
- **Category:** NSAG applied research + evidence translation
- **Status:** Public method prototype · release-blocked
- **Purpose:** Explore how project teams could document and review built-environment evidence with traceable sources and post-occupancy hypotheses.
- **Built:** A static NSAG applied-method explainer, six proposed review dimensions, a five-question educational self-reflection and a priced but unverified service architecture.
- **Evidence boundary:** “The public artifact verifies the proposed six-dimension method, local five-item scoring interaction, pricing/engagement copy and external inquiry/booking routes. It does not verify a validated assessment, a 600-study corpus, the displayed percentage outcomes, delivery of an audit/advisory/workshop/POE, architectural or engineering licensure, clinical validity, accepted grant/regulatory filings, or client outcomes. The current page contains incorrect or stale descriptions of ASHRAE thermal comfort, WELL performance verification and GSA P100, plus unsafe professional-role and lead/privacy language; it remains release-blocked pending scientific, licensed-professional, privacy and accessibility remediation.”
- **Brand boundary:** “NSAG owns the method; Aloha AI may implement its technical infrastructure; RN Selected Work documents it.”

The existing case's cautious evidence paragraph should be preserved as the base, but the current “Live applied-practice concept,” standalone count and unrestricted live CTA should change.

## 17. Evidence appendix and explicit limitations

Inspected evidence:

- Production `/` HTML/CSS/JS, 51,301 bytes, fetched 2026-08-13.
- Private GitHub `index.html` and `vercel.json` at current default branch through the connected repository service.
- Vercel project metadata and all returned production deployment metadata; latest deployment/commit recorded in section 1.
- HTTP responses for `/robots.txt` (200), `/sitemap.xml`, `/api/track`, `/privacy`, `/terms`, arbitrary missing path (all 404).
- RN Selected Work source record `lib/public-builds.ts` and canonical portrait assets.
- Official/current sources checked: GSA facilities standards/archive/accessibility pages (2025 P100 rescission and current Core Building Standards); ASHRAE Standard 55/Handbook materials; IWBI WELL performance-verification guidance (updated 2026-04-16).
- Targeted primary-source searches for the exact 15% HERD and 6% GSA claims returned no matching source.

Not verified:

- No consequential lead, booking, purchase or form submission.
- No access to lead records, analytics records, booking records, environment variables, NSAG API internals or private client artifacts.
- No evidence that a client engagement/deliverable exists.
- No interactive browser/screen reader was available; desktop/mobile visual crop, focus, contrast, browser console and back/forward behavior require Stage B confirmation.
- External destination availability was inspected from source and official search where relevant; clicking through every third-party service was not necessary or safe.
- Search non-discovery is not proof of nonexistence; the exact cited papers must be supplied for verification.

No source, portfolio or master-ledger file was edited in this Stage A audit.
