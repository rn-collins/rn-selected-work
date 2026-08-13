# Curriculum Licensing — Stage A Audit Dossier

Audit date: 2026-08-12 (HST)  
Companion: [`ROUTE_CONTROL_LEDGER.md`](./ROUTE_CONTROL_LEDGER.md)

## 1. Asset identity

- **Asset:** “RN Collins Curriculum & Learning Systems,” a public institutional curriculum-licensing and custom-development sales site branded in its navigation/footer as **Aloha AI · Curriculum**.
- **Canonical deployment:** `https://curriculum-licensing.vercel.app/`. The URL is live on Vercel and the repository README, every canonical, sitemap, and structured-data URL identify it as production.
- **Repository:** private `rn-collins/curriculum-licensing`, GitHub repository ID `1311730899`, default branch `main`; created and last pushed July 25, 2026. The latest commit inspected was `aa19e81a9bdf92408048129d29a283140419fa0f` (“brand: label nav/footer as Aloha AI”).
- **Deployment linkage:** deployment-to-repository is strongly supported by identical route/content structure, production URL in README, and Vercel-oriented configuration, but an exact Vercel project ID/deployment ID/production commit was not available in the reconciled Vercel inventory. Exact commit linkage is therefore **unverified**, not asserted.
- **Architecture:** generated static HTML. `build.mjs` emits 13 HTML routes plus shared `aloha-ds.css`, favicon, robots, sitemap, and `vercel.json`. There is no package manifest, lockfile, dependency pipeline, API, database, CMS, form backend, commerce, LMS package, curriculum archive, automated test suite, CI, or accessibility/link/claim validation.
- **Public offer:** license, purchase, customize, or commission courses/programs; two advertised 30-credit curricular sequences titled B.S. in Artificial Intelligence and Machine Learning and B.S. in Cybersecurity and Critical Infrastructure Protection; consulting, faculty onboarding, LMS support, and annual maintenance.
- **Ownership/parent:** pages say “Aloha AI · Curriculum” and “a line of Rayven-Nikkita Collins LLC.” The site links to Aloha AI as a separate direct-to-learner practice while treating institutional curriculum as part of the same ecosystem. No NSAG or AIAPC reference appears anywhere. The correct parent is **Aloha AI / Rayven-Nikkita Collins LLC**, not NSAG, Institutions of One, or AIAPC.
- **RN Selected Work:** the asset was only an unresolved `U` row in `MASTER_ASSET_RECONCILIATION.md`; it had no RN Selected Work card or case study when audited.
- **Privacy/status:** public and indexed; static/cookieless; all inquiries use `mailto:`. A privacy notice and very thin terms page exist. The site does not mark the curricula as prototype, draft, pre-launch, or unavailable.

## 2. Executive verdict

This is a polished and largely functional **sales interface**, but the product behind it is not evidenced enough to support its strongest commercial representations. All 13 intended clean routes, CSS, favicon, robots, and sitemap return 200; an unknown route correctly returns 404. Navigation, skip links, mobile-menu code, FAQ accordions, metadata, responsive CSS, and security headers are present. The only public conversion mechanism is an email-client handoff.

The critical issue is truth of offer. The repository contains the marketing site—not the claimed complete curricula, weekly modules, session plans, labs, assessments, rubrics, instructor/student guides, mappings, capstone documents, accessibility records, source/version history, or implementation packages. No sample, inventory manifest, acceptance criteria, license specimen, buyer agreement, price, delivery format, fulfillment workflow, customer evidence, faculty pilot, reviewer credentials, or institutional approval evidence is public or present in this repository. Those artifacts may exist elsewhere, but in this audit they are **unverified**. “Available for licensing,” “complete,” “delivery-ready,” “built to be taught,” “necessary to support delivery,” and the page-specific graduate-capability statements therefore exceed the evidence visible here.

There is also a major degree-architecture problem. Each advertised “B.S.” is described as ten three-credit courses totaling 30 credits. Thirty credits can plausibly be a major/concentration or completion component inside an institution's larger baccalaureate, but it is not presented with the general-education, institutional, residency, credit-hour, admissions, progression, or total-degree requirements needed to describe a complete bachelor’s degree. The footer’s accreditation disclaimer is good but does not cure a misleading product name or an incomplete degree architecture.

Commercial release should be blocked until RN can establish chain of title and third-party permissions for every syllabus, reading, image, case, lab, dataset, software/tool, assessment, rubric, and contributed component—especially because the public contact uses a Northeastern University address, which can create affiliation and employment/IP questions. The site must not imply Northeastern sponsorship, approval, or ownership. Pricing being proposal-only is acceptable for enterprise work, but buyers still need scope boundaries, license model, delivery/acceptance, updates, accessibility, data terms, warranties/disclaimers, and a defensible sample/evidence room.

Recommended estate status: **C — component/service line of Aloha AI**, publicly deployed but **commercially unverified and release-blocked for licensing claims**.

## 3. Complete route map

| Route | HTTP | Purpose / observed verdict |
|---|---:|---|
| `/` | 200 | Sales overview, two offers, two programs, Aloha AI distinction, method summary. |
| `/programs` | 200 | Program catalog; explicitly limits currently listed programs to two. |
| `/programs/ai-machine-learning` | 200 | 30-credit AI/ML sequence, outcomes, course inventory, licensing claim. |
| `/programs/cybersecurity-critical-infrastructure` | 200 | 30-credit cyber/critical-infrastructure sequence, outcomes, course inventory, licensing claim. |
| `/courses` | 200 | 24 listed course records (12 per field); says any may be licensed separately. |
| `/curriculum-development` | 200 | Custom degree/certificate/workforce/course development and QA service list. |
| `/licensing` | 200 | Permitted-use concepts, product/service table, four working FAQ accordions. |
| `/method` | 200 | Six-phase development method and multi-level QA description. |
| `/services-rendered` | 200 | Role inventory and reconstructed 1,700–3,200-hour estimate per program. |
| `/about` | 200 | RN biography/practice description and ecosystem links. |
| `/request` | 200 | Eight prefilled `mailto:` inquiry cards and direct email. No web form. |
| `/request?program=BSAIML` | 200 | Same generic page; query value is not read, displayed, or carried into a unique CTA. |
| `/request?program=BSCYBER` | 200 | Same generic page; query value is not read, displayed, or carried into a unique CTA. |
| `/privacy` | 200 | Cookieless/static/no third-party analytics assertion; email/external-link notice. |
| `/terms` | 200 | Brief informational disclaimer; not a licensing or purchase agreement. |
| `/aloha-ds.css` | 200 | Shared responsive design system. |
| `/favicon.svg` | 200 | Brand icon. |
| `/robots.txt` | 200 | Allows all and identifies sitemap. |
| `/sitemap.xml` | 200 | Lists all 13 canonical HTML routes. |
| unknown route | 404 | Correct static behavior. |

External destinations: `https://aloha-ai-consulting.vercel.app/` returned 200; `https://aloha-ai-consulting.vercel.app/university/` returned **404** and is linked throughout the site; LinkedIn returned automated-request status 999, so browser availability is **unverified**, not called broken.

No price sheet, downloadable sample, evidence room, catalog PDF, license terms, SOW, accessibility conformance report, course artifact, LMS demo, SCORM/Common Cartridge package, checkout, buyer account, delivery portal, faculty onboarding, maintenance log, support portal, CE/accreditation evidence, customer/pilot evidence, or correction/version-history route exists.

## 4. Complete interaction/control inventory

The companion ledger inventories every distinct control and its page occurrences. Observed classes:

- global skip-to-content, brand, seven primary navigation links, mobile hamburger, footer navigation, Aloha AI, Aloha AI University, LinkedIn, email, privacy, and terms;
- internal offer/program/method/licensing/request cards and CTA links;
- four native FAQ buttons with `aria-expanded`, `aria-controls`, labeled regions, and plus-icon rotation;
- eight request cards that construct prefilled emails for program licensing, course licensing, customization, commissioning, redesign, QA, faculty/LMS support, or another inquiry.

Behavior classifications:

- **Verified working:** intended same-origin pages/assets return 200; unknown route 404; Aloha AI root 200; FAQ source implements state/height updates; skip target and landmarks exist; mobile menu state/label is updated by script; Escape closes it.
- **External handoff:** every proposal/request action opens `mailto:collins.ra@northeastern.edu`. The site cannot confirm that a mail client exists, a draft opens, a message is sent, or RN receives it.
- **Partially working:** program-specific review links add `?program=BSAIML` or `?program=BSCYBER`, but the request page ignores the parameter, so the intended product context is lost unless the user selects the right generic mail card manually.
- **Broken:** every “Aloha AI University” link points to a deployed 404.
- **Unverified:** exact mobile rendering, browser keyboard execution, screen-reader announcement, zoom/reflow, mail-client behavior, LinkedIn response, and visual accordion state because a browser runtime was unavailable in this environment.
- **Missing/not simulated:** there is no web form, API, pricing calculator, order, payment, signature, license acceptance, file delivery, LMS import, account, analytics, or support transaction.

No external message, order, form submission, or account action was executed.

## 5. Consumer journeys and observed results

### Institutional academic buyer

The buyer can understand the offer, inspect a 12-course inventory for each field, read proposed outcomes, and request a conversation. They cannot inspect even one complete course, a redacted sample pack, artifact manifest, source/reviewer record, accreditation crosswalk, credit-hour calculation, accessibility report, delivery format, implementation plan, pricing range, license specimen, contract process, or acceptance criteria. Procurement diligence stops before the product can be evaluated.

### Curriculum-license buyer

The licensing page lists possible scopes—one campus, multiple campuses, cohorts, fixed term, annual renewal, training, white-label/co-brand, support—but says the actual rights will appear later in an agreement. That is appropriate as a reservation, yet the terms page supplies none of the minimum public commercial framework: licensor and contracting entity, copyrighted material definition, grant, territory, users/cohorts, term, modifications/derivatives, white-label attribution, sublicensing/LMS hosting, faculty copying, accessibility remediation, updates, support, confidentiality, data, fees/taxes, acceptance, warranties, indemnity, liability, termination, post-term retention, governing law, or dispute process.

### Degree-program buyer

The pages label a 30-credit subject sequence as a “B.S.” and “complete degree program.” An academic reviewer will immediately need the remaining degree-credit architecture, gen-ed/core, institutional requirements, residency/transfer rules, academic policies, clock/credit-hour basis, faculty qualifications, admissions/progression, program review, assessment plan, state authorization, accreditor/substantive-change path, and teach-out. None is available. Safer framing is “30-credit proposed major curriculum” or “upper-division/completion sequence configurable within an institution's approved baccalaureate,” pending institution-specific approval.

### Workforce/agency buyer

The custom-development page appropriately extends beyond academic degrees, but the same materials cannot automatically serve credit-bearing higher education, corporate training, and government procurement without different accessibility, security, records, IP, delivery, learner-data, instructor, and outcome frameworks. Government and public-college buyers will expect accessibility clauses and auditable conformance; no VPAT/ACR or content-accessibility standard is supplied.

### Learner/faculty evaluator

No learner enrollment is offered and the site says institutional faculty teach the curriculum. A faculty evaluator cannot verify workload, prerequisites, source currency, lab safety/authorization, software costs, assessment integrity, rubrics, accommodations, AI use policy, or technical feasibility. Cyber offensive-security labs especially need explicit authorization, isolated environments, rules of engagement, export/sanctions review as relevant, and safe failure modes; none is visible.

### Proposal journey

The request page is clear and low-friction for desktop users with a configured email client. It is not an institutional intake or sales system. There is no confirmation, response-time promise, alternate business-domain address, scheduling, procurement document upload, privacy/security channel, or CRM receipt. The `northeastern.edu` address may imply an affiliation the site does not explain.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Static routes/assets | **Verified** | 13 clean HTML routes and four core assets returned 200; unknown path 404. |
| Global navigation | **Verified by code/HTTP** | All intended internal hrefs resolve. |
| Mobile menu | **Implemented; visual execution unverified** | Native button, updated `aria-expanded`/label, Escape handler, responsive CSS. |
| FAQ accordion | **Implemented; browser execution unverified** | Native buttons, controlled regions, expanded state and max-height logic. |
| Program query handoff | **Partial** | Program links set query; request page never consumes it. |
| Proposal request | **External/partial** | Eight prefilled `mailto:` links; no delivery verification. |
| Pricing/quote | **Manual and undisclosed** | No price or range; contact required. |
| Contract/license acceptance | **Missing** | Terms explicitly defer to a future agreement; no specimen or flow. |
| Curriculum artifacts | **Unverified** | None exists in repository or public evidence room. |
| LMS delivery/import | **Unverified/missing publicly** | LMS support is advertised; no package, demo, standard, or delivery proof. |
| Purchase/payment/fulfillment | **Missing** | No commerce, signature, account, delivery, or receipt. |
| Faculty onboarding/maintenance | **Advertised, unverified** | No scope, artifact, SLA, calendar, or sample. |
| Accreditation/credit | **Properly disclaimed but product naming risky** | Site says institutions control approval/accreditation; still calls 30-credit sequence a complete B.S. |
| Accessibility review service | **Advertised, unverified** | No standard, method, reviewer qualification, test output, or ACR. |
| Privacy | **Minimal/static** | No site tracking/form; email and hosting metadata processing remain. |
| SEO/discovery | **Mostly working** | Unique metadata/canonicals, JSON-LD, robots/sitemap. No social preview asset observed. |
| Tests/CI/monitoring | **Missing** | No manifest, test files, CI, link checker, or claim/evidence gate. |

## 7. Copy and information-architecture findings

Strengths: plain-language two-offer architecture; consistent global navigation; clear separation between direct-to-learner Aloha AI and institutional curriculum; course inventories and outcome lists are scannable; disclaimers about institutional approval and certification alignment are repeated; method and services pages expose RN's systems thinking and labor.

Material corrections:

- “Complete degree programs,” “B.S.,” “30 credits toward completion,” and “ten courses to complete” create incompatible impressions. State exactly what the 30 credits constitute and what is excluded.
- “Complete,” “delivery-ready,” “built to be taught,” “necessary to support delivery,” and “any course may be licensed” are availability/completeness claims requiring an artifact-level readiness register.
- Graduate outcomes are phrased as guaranteed capabilities (“What a graduate can do”). Without delivery, assessment, faculty, admissions, student-support, and outcome evidence, use intended/program learning outcomes, not achieved results.
- The two pages say “8 core courses plus electives and a capstone” while each inventory contains 12 courses. Explain the exact choice rule and whether the capstone is among the ten; currently readers must infer it.
- “Approved inventory” and “course documentation is always completed and approved” do not identify who approved it, under what authority, or whether approval is internal draft approval versus an institution's academic approval.
- “Authoritative resources,” “industry-standard tools,” certification/career mapping, and regulated-industry alignment need named, dated, versioned sources.
- “Polymath practice” and “the kind of work institutions usually distribute across many roles” are defensible positioning only if paired with precise credentials, collaborators/reviewers, and limits; one person should not be implied to independently validate every AI, cyber, pedagogy, accessibility, legal, policy, and accreditation dimension.
- The 1,700–3,200-hour figure is candidly labeled a reconstruction, which is good. It must never be converted into recorded labor, completed-product evidence, valuation, or client delivery without underlying records.
- Aloha AI University is described as a destination and linked globally but is a 404.
- The legal entity appears only in fine print. Put the contracting entity, business contact, and no-university-affiliation statement near conversion.

## 8. Science/law/policy/regulatory claim ledger

| Claim/topic | Verdict | Required boundary/correction |
|---|---|---|
| RN/Rayven-Nikkita Collins LLC can license every advertised course/program | **Unverified, release-critical** | Establish chain of title for all authored/contributed/employment-related material and written permission for third-party content. Under 17 U.S.C. §§ 201–204, authorship, work-made-for-hire, and written transfers matter; possession of files is not ownership of copyright. Maintain a rights ledger. [Copyright Act Ch. 2](https://www.copyright.gov/title17/92chap2.html) |
| White-label/co-branded delivery and modification | **Contract-dependent** | Define trademark attribution, moral/attribution expectations, derivative works, approvals, accessibility corrections, update obligations, and post-term use. Do not promise rights RN may not own. |
| “B.S.” / complete 30-credit program | **Potentially misleading/incomplete** | Accreditation applies to institutions and/or programs through recognized accreditors; the licensor does not confer degree authority or accreditation. Reframe as proposed major/completion curriculum unless a complete institution-specific degree architecture is shown. [ED accreditation overview](https://www.ed.gov/laws-and-policy/higher-education-laws-and-policy/college-accreditation/accreditation-in-the-us) |
| “Credit-bearing curriculum” / three credits / seven weeks | **Institution-dependent** | Credits require the adopting institution's credit-hour, workload, academic-approval, faculty, modality, and accreditor/state framework. Publish estimated learner/instructor hours and evidence; do not represent credit as inherent in licensed files. |
| Certification mapping/alignment | **Properly disclaimed, still unverified** | Name certification, version/date, exam domain mapping, source, gaps, reviewer, and update cadence. State completion does not confer certification or eligibility unless verified. |
| “What a graduate can do” | **Outcome intention, not demonstrated outcome** | Rename “proposed program learning outcomes.” Validate constructive alignment and report actual learner evidence only after authorized implementation. |
| Responsible AI, privacy, regulated-industry, GRC curriculum | **High-change/high-stakes** | Provide dated jurisdiction/sector/source boundaries; qualified legal/privacy/security review; no legal/compliance advice; change control for laws, standards, products, and threats. |
| Offensive security/adversary emulation | **Safety/legal risk** | Require explicit authorization, sandbox/lab isolation, scope, rules of engagement, prohibited targets, credential/data handling, reporting, instructor qualifications, and current applicable law/policy review. Never imply permission to test real systems. |
| Critical infrastructure/ICS/OT instruction | **Operational safety risk** | Separate classroom simulation from live operational environments; include safety, reliability, change control, incident escalation, sector/jurisdiction, export/sanctions/procurement review where relevant, and qualified SME review. |
| Accessibility review/development | **Unsubstantiated service claim** | Define target standard and deliverable. Public colleges and government clients increasingly require WCAG 2.1 AA for contracted/licensed web content; provide a content/LMS/accessibility test method and ACR where applicable. [DOJ Title II web rule](https://www.ada.gov/resources/2024-03-08-web-rule/) |
| Privacy-first/cookieless/no analytics | **Directionally accurate but incomplete** | No tracking script or web form was found. Vercel still processes requests/network metadata and email processing occurs outside the site. Avoid implying zero data processing; document controller, processors, fields, retention, security, rights/contact, and business-email handling. |
| Northeastern email contact | **Affiliation/IP ambiguity** | Verify permitted use and employment/student IP policies; add “independently developed; not affiliated with, sponsored by, or approved by Northeastern University” if true. Prefer an owned business-domain inbox for contracting. |
| No NSAG/AIAPC relationship | **Verified in site/repo** | Do not add either brand to the case study unless an actual curricular dependency/license exists. Aloha AI is the only expressed ecosystem parent. |

This is issue spotting, not legal, accreditation, education, cybersecurity, accessibility, tax, or procurement advice. Final license and claims require qualified review in the buyer's jurisdictions and institutional context.

## 9. Accessibility and responsive findings

Positive source evidence across all pages: `lang="en"`; one H1; nav/main/footer landmarks; skip link; no informational raster images; native links/buttons; unique IDs; explicit mobile breakpoint; minimum 44px primary controls; visible `:focus-visible`; reduced-motion override; fluid typography; one-column grid collapse; horizontal wrapper for data tables; mobile-menu accessible state and label; FAQ button/region relations.

Defects and boundaries:

- Collapsed FAQ panels use `max-height:0` and overflow but are not `hidden`, `aria-hidden`, or `inert`; screen readers may encounter supposedly collapsed answers. Use the native `hidden` state or tested disclosure pattern.
- Mobile navigation becomes invisible with CSS visibility/opacity, but no `aria-hidden`/`inert` state or explicit focus management is implemented. Verify that hidden links cannot receive focus in target browsers and close on focus escape/outside click as needed.
- Menu opening does not move focus into the menu; closing via Escape does not explicitly return focus to the hamburger.
- Table overflow is supported, but no caption is evident for the products/services and labor-estimate tables; add programmatic context.
- There is no accessibility statement, alternate-format request, conformance target, test record, VPAT/ACR, or known-limitations route despite marketing accessibility review to institutional/government buyers.
- Email-only conversion can exclude users without a configured client and gives no accessible validation/status. Add an accessible web intake plus direct email/phone alternatives.
- `scroll-behavior:smooth` is neutralized under reduced motion, which is good; reveal effects progressively enhance. Exact focus contrast, color contrast, 200%/400% zoom, 320px reflow, mobile menu, accordion announcement, VoiceOver/NVDA, and email-client behavior remain **unverified** because no browser runtime was available.
- No automated axe/Lighthouse/HTML validation or manual assistive-technology evidence exists in the repo; do not claim WCAG conformance from source inspection.

## 10. Brand-architecture findings

The July 25 brand commit corrected the strongest architectural ambiguity by naming the property “Aloha AI” in navigation and “Aloha AI · Curriculum” in the footer. The content itself says institutional curriculum and direct-to-learner Aloha AI courses are separate offers. This is a coherent **Aloha AI service line**, operated by Rayven-Nikkita Collins LLC, with RN as the curriculum architect.

Do not classify it as NSAG. NSAG is a distinct research-led governance practice with its own framework and modules; this site contains no NSAG framework, attribution, module, assessment, evidence base, or advisory product. Do not classify it as AIAPC. AIAPC is a separate RN/Vanda pre-launch editorial/product property; no reference or dependency exists here.

Current risks: the hero brand “RN Collins Curriculum & Learning Systems” and Aloha AI shell can read like two operators; the terms name the LLC only in copyright text; the Northeastern address introduces a third institutional signal; “Aloha AI University” suggests a university-like sub-brand but currently 404s. Use one hierarchy everywhere: **Aloha AI → Curriculum & Learning Systems, operated by Rayven-Nikkita Collins LLC**. Avoid “University” unless clearly branded as non-degree education and not confused with an accredited institution.

## 11. Business-model and conversion findings

The business model is credible at concept level: license an existing asset for speed; customize it for institutional fit; commission new work; attach implementation, faculty onboarding, and maintenance. It can create repeatable IP revenue plus services. The site is stronger as a business-development prototype than as a ready-to-transact catalog.

Conversion blockers:

- no public sample, private-review workflow beyond email, artifact manifest, readiness status, reviewer/evidence packet, or proof of delivery;
- no pricing bands, quote variables, paid discovery structure, timeline, process, or next-step SLA;
- no license specimen, procurement packet, W-9/vendor details, accessibility/security documentation, insurance, data terms, or contracting contact;
- no delivery standard (editable source, PDF/Word, LMS-native, Common Cartridge/SCORM/xAPI, repository), acceptance test, revision allowance, support SLA, maintenance/update trigger, or end-of-license continuity;
- no buyer segmentation by accredited institution, unaccredited provider, employer, agency, geography, modality, cohort, or white-label use;
- no proof of curriculum-market demand, SME review, faculty pilot, learner outcome, client, revenue, or renewal;
- only an institutional email handoff, which is fragile and difficult to measure.

Before sales, build a controlled diligence room: redacted sample module; complete artifact manifest; rights/source ledger; curriculum map; credit/workload rationale; reviewer roster; accessibility report; technology/lab bill of materials; implementation timeline; maintenance policy; license/SOW/DPA templates; pricing logic; and status labels per course (draft, review-ready, pilot-ready, license-ready, retired). The site must render readiness from that source rather than assume all courses share the same state.

## 12. Security, privacy, data, and operational findings

- Positive live headers: HSTS with preload, `X-Frame-Options: DENY`, CSP frame-ancestors none, nosniff, strict-origin referrer policy, and disabled camera/microphone/geolocation/payment permissions.
- CSP is materially weakened by `'unsafe-inline'` for scripts/styles. Inline JSON-LD and scripts explain the current choice, but production should use hashed/nonced or external scripts and remove unsafe directives where practical.
- There is no form/API/database/auth/payment, reducing attack surface. `mailto:` exposes the business email publicly and transfers inquiry data to the user's provider, Northeastern's systems, and related mail infrastructure.
- The privacy page's “no data is collected by this site” is too absolute. Hosting necessarily receives requests; Vercel/network logs and security telemetry may process IP/user-agent/request data even without cookies. The notice gives no controller/entity address, effective date, retention, security, rights/request process, jurisdictions, children, changes, or hosting/email processor detail.
- Prefilled email bodies solicit institution, program, delivery model, and timeline. The notice says messages are used only to respond but does not explain retention, contracting follow-up, deletion, or access by institutional email administrators.
- No sensitive-information warning exists. Procurement users could attach confidential curriculum, student, security, or infrastructure information by reply. Tell them not to send student records, credentials, controlled data, system vulnerabilities, or confidential documents through ordinary email; provide a secure channel if needed.
- No FERPA data flow exists today. If future LMS/implementation work accesses education records, FERPA school-official requirements include direct institutional control, limited purpose/use, and redisclosure restrictions; contract and technical controls would be necessary. [US ED FERPA guidance](https://studentprivacy.ed.gov/faq/who-school-official-under-ferpa)
- No dependency/secret exposure was found because there are no packages or backend. Operational maturity is still low: no CI, tests, monitoring, link checker, content evidence registry, deployment-to-commit record, rollback, backups, availability monitoring, inquiry logging, or correction process.
- Cache headers mark CSS/media immutable for one year while the CSS uses an unversioned filename. A changed file may remain stale; use fingerprinted assets or non-immutable caching.

## 13. Defects ranked by severity

### P0 — block licensing/degree marketing

1. No auditable proof or manifest for the claimed complete, delivery-ready curricula and all included artifacts.
2. No verified chain of title/third-party rights record, with added Northeastern affiliation/employment-IP ambiguity.
3. Thirty-credit curricular sequences are marketed as complete B.S. degree programs without the full degree architecture or institutional context.
4. No actual license/SOW framework for ownership, rights, delivery, acceptance, accessibility, updates, warranties, liability, termination, or post-term use.

### P1 — serious

1. “Graduate can do” and regulatory/certification/career alignment claims lack source, validation, reviewer, date, and outcome boundaries.
2. Offensive-security and critical-infrastructure curricular claims lack safety, authorization, live-system, jurisdiction, and qualified-review boundaries.
3. Accessibility review is advertised without a defined standard, test method, conformance evidence, or accessible sample/delivery commitment.
4. Aloha AI University is linked on every page and returns 404.
5. Terms/privacy are insufficient for institutional procurement and do not accurately describe hosting/email processing.
6. Program-specific request links lose their context; proposal flow cannot confirm delivery.
7. Use of `northeastern.edu` email may imply sponsorship and routes commercial inquiries through third-party institutional systems.

### P2 — material

1. No pricing logic/range, procurement packet, sample, delivery format, implementation process, support SLA, or maintenance policy.
2. FAQ collapsed panels may remain exposed to assistive technology; mobile focus behavior and full WCAG behavior untested.
3. CSP retains unsafe inline; unversioned CSS receives immutable caching.
4. No CI/test/link/claim/evidence/release controls.
5. No explicit contract/operator hierarchy near conversion.

### P3 — polish

1. Clarify 12-course inventory versus ten-course completion rule and capstone/elective selection.
2. Replace “approved” and “authoritative” with named approval/source status.
3. Add current-as-of/version labels and evidence badges only when governed by real records.

## 14. Exact remediation plan

1. **Freeze readiness claims.** Change every offering to `concept`, `draft`, `review-ready`, `pilot-ready`, or `license-ready` from an artifact-level registry. Remove “complete/delivery-ready/built to be taught/available” unless acceptance evidence exists.
2. **Resolve degree naming.** With an academic/accreditation specialist, define whether each 30-credit sequence is a major, concentration, upper-division block, degree-completion curriculum, or full program component. Publish exclusions and institution-controlled requirements; do not market a standalone 30-credit B.S.
3. **Create the product manifest.** For every program/course: version, status, owner, contributors, outcomes, weeks, session plans, labs/cases, assessments/rubrics, instructor/student guides, sources, software/data, accessibility, QA, reviewer, last-reviewed date, dependencies, and delivery format.
4. **Complete IP diligence.** Inventory authorship, employment/commission context, assignments, collaborators, third-party readings/images/cases/data/code/software, licenses, fair-use assumptions, trademark use, and permissions. Obtain signed transfers/licenses as needed; verify Northeastern policies and remove ambiguous affiliation.
5. **Build an evidence room.** Publish a redacted representative module, rubric, instructor guide, curriculum map, workload/credit rationale, accessibility report, QA checklist, reviewer qualifications, change log, and sample delivery package.
6. **Draft commercial documents with counsel.** Master license, order form/SOW, data/privacy addendum when needed, accessibility schedule, support/maintenance schedule, acceptable-use/security-lab schedule, and contractor terms. Define grant, users, campuses/cohorts, term, geography, copying/LMS/derivatives/white-label, attribution, ownership, confidentiality, fees/tax, acceptance, revisions, updates, warranties, indemnity, liability, termination, post-term access, governing law, and dispute process.
7. **Substantive expert review.** Independent qualified AI/ML, cybersecurity/OT, instructional-design, assessment, accessibility, academic-policy/accreditation, and legal/privacy reviewers. Keep signed/versioned findings and remediation.
8. **Regulated/safety boundaries.** Date and source standards/laws; specify educational-not-advice; establish offensive-security authorization and isolated labs; prohibit live-system activity; add OT safety and incident escalation.
9. **Accessibility program.** Target WCAG 2.2 AA for site/content where feasible and meet buyer-specific Title II/504/508 requirements; test editable files, PDFs, LMS packages, labs, tables, code, media, assessments, and third-party tools; provide alternate formats and an ACR/VPAT when appropriate.
10. **Repair conversion.** Replace or supplement `mailto:` with an accessible secure intake; preserve program query; provide receipt, response expectation, scheduling, business-domain email, secure document channel, consent/privacy notice, and CRM/retention controls.
11. **Repair ecosystem link.** Remove Aloha AI University globally until a valid, accurately described route exists.
12. **Privacy/security.** Publish a precise controller/processor/data/retention/rights/security notice, sensitive-data warning, business email policy, incident contact, and future FERPA/DPA controls before LMS/student-data access.
13. **Engineering operations.** Add reproducible build/package scripts, CI, generated-output diff, HTML validation, internal/external link checks, axe/manual test checklist, CSP validation, content/claims schema, broken-link production smoke test, monitoring, deployment/commit ledger, rollback, and correction/version workflow.
14. **Cache/CSP.** Fingerprint immutable assets; move inline scripts/styles to versioned assets or use CSP hashes/nonces; retain defense headers.
15. **RN Selected Work.** Add a truthful case study/card under education and institutional systems, with separate `Visit site` and `Read case study`, exact stage, and no claim of license sales, institutional adoption, accreditation, learner outcomes, or completed artifacts until verified.

## 15. Recommended estate disposition

**C — component/service line of Aloha AI, publicly deployed; commercial readiness blocked.** The property has a live coherent sales site and a meaningful service proposition, but it is explicitly branded Aloha AI · Curriculum and does not need to become another independent top-level brand. Preserve the domain as a focused institutional landing/evidence surface or move it under an Aloha AI `/curriculum` route after link/SEO planning. It is not NSAG and not AIAPC.

Disposition does not certify the curricula. Until P0 issues close, the public status should be **portfolio prototype / curriculum-development capability and proposed catalog**, not an inventory represented as immediately licensable.

## 16. Proposed RN Selected Work case-study corrections

Add one individual case study, organized under **Education & learning systems** and **Institutional infrastructure**, with this stage-accurate core:

> **RN Collins Curriculum & Learning Systems — Aloha AI Curriculum**  
> A deployed institutional curriculum-licensing and development concept that translates RN's systems approach into program architecture, course inventories, learning outcomes, development methodology, and a buyer-facing licensing model. The public site presents two proposed 30-credit subject-area curricula in AI/ML and cybersecurity/critical infrastructure, plus custom-development and implementation services. Institutional adoption, academic credit, accreditation, licensing transactions, full artifact readiness, and learner outcomes are not established by the public prototype.

Case-study sections should distinguish:

- **Verified build:** 13-route responsive static site, structured program/course catalog, licensing-use concepts, methodology, inquiry pathways, terms/privacy, SEO/security headers.
- **Proposed product system:** two 30-credit curricular sequences and individual course packages.
- **Unverified/private evidence required:** complete weekly artifacts, rights, expert reviews, accessibility, pilots, customers, transactions, delivery, maintenance, and outcomes.
- **RN role:** strategy, research, program architecture, curriculum/instructional-system design, documentation, interface/build, and business-model design—only to the extent supported by source records.
- **Ownership:** Aloha AI curriculum service line operated by Rayven-Nikkita Collins LLC; no NSAG/AIAPC attribution.

Use two independent buttons: **Visit deployed concept** (`https://curriculum-licensing.vercel.app/`) and **Read case study**. Do not call the 30-credit sequences complete bachelor’s degrees, accredited, approved by Northeastern or another institution, successfully licensed, implemented, validated, or outcome-producing without evidence.

## 17. Evidence appendix

### Repository/build evidence

- Private GitHub `rn-collins/curriculum-licensing`, ID `1311730899`, main; two commits; latest `aa19e81a9bdf92408048129d29a283140419fa0f`.
- Complete tree: `.gitignore`, README, `build.mjs`, shared CSS, 13 HTML pages, favicon, robots, sitemap, and Vercel config. No package/lockfile, test/CI, API/backend, curriculum artifact directory, downloadable evidence, license agreement, or commerce/LMS integration.
- README calls the production URL and two programs/offers; `build.mjs` is the source generator. `vercel.json` supplies clean URLs and security/cache headers.
- No open-source license exists; repository is private. Absence of a repository license does not itself prove ownership of all marketed curricular content.

### Production HTTP evidence (2026-08-12 HST / 2026-08-13 UTC)

- `/`, all 12 other intended clean HTML routes, CSS, favicon, robots, and sitemap returned 200.
- Unknown path returned 404.
- Live headers included CSP, HSTS, frame denial, nosniff, strict-origin referrer, and permissions restrictions.
- Aloha AI root returned 200; `/university/` returned 404; LinkedIn automated check returned 999 and remains unverified.
- Canonicals and sitemap consistently identify `curriculum-licensing.vercel.app`.

### Source inspection evidence

- Every page has `lang=en`, one H1, nav/main/footer, skip link, unique IDs, responsive CSS, visible focus and reduced-motion rules.
- Four licensing FAQs are native buttons with controlled labeled regions; shared JS updates expanded state and height.
- Eight proposal cards and all contact links are `mailto:`; there are no forms, fetch calls, API routes, analytics scripts, cookies, checkout controls, or file-delivery controls.
- Program query values are generated by program pages but not consumed on `/request`.
- Site/repo searches found Aloha AI throughout and found no NSAG, Neurocognitive Systems, AIAPC, or AI Professional Collective references.

### Authoritative anchors

- [U.S. Copyright Office, Copyright Act Chapter 2](https://www.copyright.gov/title17/92chap2.html) — initial ownership, work made for hire, transfers, and distinction between copyright and ownership of a copy.
- [U.S. Copyright Office, Work Made for Hire](https://www.copyright.gov/register/se-hire.html) — statutory categories and signed-writing requirements for commissioned works.
- [U.S. Department of Education, Accreditation in the U.S.](https://www.ed.gov/laws-and-policy/higher-education-laws-and-policy/college-accreditation/accreditation-in-the-us) — institutional versus programmatic accreditation.
- [U.S. Department of Education, Diploma Mills and Accreditation](https://www.ed.gov/laws-and-policy/higher-education-laws-and-policy/college-accreditation/diploma-mills-and-accreditation) — accreditors, not ED or curriculum vendors, accredit institutions/programs.
- [DOJ, Title II web/mobile accessibility fact sheet](https://www.ada.gov/resources/2024-03-08-web-rule/) — WCAG 2.1 AA and contractor/licensing coverage for public entities.
- [W3C, WCAG 2.1](https://www.w3.org/TR/WCAG21/) — reflow, non-text contrast, focus, and compatibility criteria used as audit anchors.
- [U.S. Department of Education, FERPA school-official guidance](https://studentprivacy.ed.gov/faq/who-school-official-under-ferpa) — conditions for outsourced institutional services involving education records.

### Verification limitations

- No browser automation runtime was available, so mobile viewport, keyboard interaction, screen-reader, zoom/reflow, visual contrast, and mail-client execution were not directly run. Source findings are labeled accordingly.
- No curriculum corpus, private proposal, executed license, customer record, pilot, reviewer file, IP assignment, Vercel project record, or deployment-to-commit record was available. All such matters remain unverified.
- No source or production files were modified during Stage A.
