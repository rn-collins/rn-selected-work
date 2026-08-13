# GAPI Governance — Stage A Recertification Dossier

Audit date: August 13, 2026 (HST)  
Stage: A, read-only represented-site recertification  
Recommended disposition: **P — canonical NSAG Applied concept; public commercial/certification release is blocked**

## 1. Identity and boundary

- **Repository:** private `rn-collins/gapi-governance`, branch `main`; inspected tree `da0801a7f3270d8034862ab2837060dd5182e4fb`. The entire implementation is `index.html`, `robots.txt`, and `vercel.json`.
- **Deployment:** public/indexable `https://gapi-governance.vercel.app/`; Vercel project `prj_72rHLGTYofAWoo7oxNOhtqiqIMlp`.
- **Implementation:** one static HTML page with inline CSS/JavaScript, a five-question client-side quiz, UTM/session storage, a broken same-origin tracking call, Vercel Insights/Speed Insights, two external booking links, and an external NSAG lead form.
- **Canonical parent:** Neurocognitive Systems Advisory Group (NSAG), specifically NSAG Applied. GAPI is not an Aloha AI governance product. Aloha AI may accurately receive technical build attribution and may link adjacent tools, but cannot own, certify, validate, or subsume the NSAG framework.
- **Estate treatment:** one canonical RN Selected Work case under NSAG Applied. Repository remains private; deployment may be linked only after the release blockers below are corrected.
- **Dispositions:** `P` canonical represented concept; `C` current public commercial/certification presentation; not `I`, `D`, `E`, or `X`.

## 2. Executive verdict

GAPI contains a distinctive, useful governance thesis: AI-agent evaluation should consider influence design, cognitive load, transparency, human override, population effects, and post-deployment monitoring—not only accuracy or generic bias. The page makes that architecture legible and includes well-labeled hypotheticals.

It is not presently a certification, governance API, MCP server, validated assessment, safety evaluation, compliance product, monitoring system, or report generator. Source review found no server implementation, assessment submission, evidence store, scoring rubric, report artifact, certification workflow, mark registry, audit trail, monitoring pipeline, customer record, or MCP protocol. The only score is a self-attested five-question browser quiz whose five equally weighted answers total ten points and are converted to arbitrary readiness bands. “Get the Full Report” opens a contact modal; it does not generate a report.

This mismatch is a release blocker because the page sells “Agent Governance Certification” for $2,500–$10,000, promises a certification report and mark, says the system is “scored,” “certified,” “measurable,” and integrated as an MCP server, and asserts cognitive safety. None of those assurance claims is supported by the implementation or a documented conformity-assessment scheme.

Top risks:

1. **P0 assurance/product overclaim:** certification, mark, report, MCP integration, continuous governance, cognitive safety, and measurability are presented as delivered capabilities but are not implemented or validated.
2. **P0 invalid measurement:** the quiz cannot support readiness, responsibility, safety, compliance, or certification conclusions.
3. **P1 legal/standards overclaim:** NIST AI RMF is a voluntary risk-management resource, not a compliance certification; the FTC discussion conflates a specific fake-review rule with general conversational-agent disclosure exposure.
4. **P1 science/health overclaim:** categorical claims about nervous-system, cognitive, emotional, dependency, and population effects have no citations, operational definitions, validated measures, or testing protocol.
5. **P1 privacy/security failure:** lead data is transmitted to `nsag-api.vercel.app` without notice or lifecycle terms; any resolved HTTP response is treated as success; `/api/track` does not exist.
6. **P1 NSAG/Aloha boundary confusion:** “Built by Aloha AI” is acceptable; saying GAPI “sits inside” Aloha AI's toolset is not. Framework authority and applied practice belong to NSAG.

## 3. Complete public surface

| Route | Result | Finding |
|---|---:|---|
| `/` | 200 | the only page; framework, pricing, diagnostic, evidence commentary, glossary, related tools, contact |
| `/robots.txt` | 200 | `Allow: /`; site is indexable |
| `/sitemap.xml` | 404 | linked in `<head>` but absent |
| `/api/track` | 404 GET | no function exists; page attempts POST after 300px scroll |
| arbitrary path | 404 | no additional routes/report pages |

There is no `/api`, assessment API, MCP endpoint, report route, certification registry, privacy page, terms, methodology, citations, accessibility statement, complaints/appeals route, or client portal.

## 4. Controls and journeys

- Brand link returns to `#`; NSAG link opens the separate NSAG site.
- Two “Book a Discovery Call” links open a personal Northeastern BookWithMe URL. This can imply institutional affiliation or delivery; the page should use an NSAG-controlled business booking identity and clarify that Northeastern does not sponsor or certify the offer.
- Five diagnostic questions each offer 0/1/2 self-report answers. All five must be answered; validation uses `alert()`.
- `Get My Score` computes `(sum / 10) * 100`: 80–100 “Advanced,” 50–79 “Developing,” below 50 “Early Stage.” No evidence is requested or verified.
- The result asserts “Most GAPI organizations score here,” but no population, sample, distribution, customer cohort, or basis exists.
- “Get the Full Report” does not make a report; it opens the contact modal.
- Fixed Contact the Architect opens name/email/message form. No consequential submission was performed. Source sends to `https://nsag-api.vercel.app/api/lead` with source `gapi-governance`.
- Modal Cancel and overlay close work; Escape, focus trap, initial focus, focus return, and inert background are absent.
- Related links: NSAG M2/M11 anchor, NARCH, SPORT, Startup Legal Risk Monitor, Source Integrity Audit, Aloha AI, retired RN portfolio, and BookWithMe.

## 5. Capability matrix: implemented versus represented

| Capability | Actual state | Public representation |
|---|---|---|
| Six-dimension framework | Authored conceptual criteria | presented as observable, scored certification standard |
| Readiness quiz | five client-side self-report questions | framed as governance readiness assessment |
| Evidence intake/review | absent | implied by assessment/certification report |
| Scoring rubric | absent beyond quiz weights | “scored” six-dimension assessment |
| Report | absent | promised certification/full report |
| Certification | absent | sold as current engagement |
| Certification mark | absent | promised as deliverable |
| MCP server/API | absent | “integrated into your stack” and “one of the first governance MCP servers” |
| Continuous monitoring | absent | infrastructure-level governance implies it |
| Model/system integration | absent | claimed deployable/integrated capability |
| Customer evidence | absent | “Most GAPI organizations” implies a cohort |
| Lead intake | external POST only | working-looking contact flow; false success on HTTP errors |
| Analytics | Vercel telemetry; broken local track | undisclosed |

## 6. Assessment and certification validity

The diagnostic has no documented construct, domain analysis, content-validation process, reliability study, criterion/predictive validity, normative sample, calibration, uncertainty, inter-rater protocol, evidence requirement, risk-tiering, sector/jurisdiction adjustment, affected-population input, or adverse-impact evaluation. Equal 0/1/2 weights and 50/80 thresholds are authored choices. Self-attestation is trivially gameable. Four of five questions use GAPI-specific coined concepts, increasing circularity.

The six dimensions are potentially useful discovery prompts, but are not yet conformity criteria. They lack control statements, applicability rules, evidence types, maturity levels, scoring anchors, minimum gates, severity, test procedures, assessor competence, reproducibility, uncertainty, exceptions, change control, recertification triggers, surveillance, corrective action, and audit sampling.

A legitimate certification scheme would additionally need an identified standard and scope; independent/impartial decision authority; conflicts policy; assessor qualifications; documented audit procedure; applicant agreement; evidence retention; complaints and appeals; mark license, expiry, suspension, revocation and misuse process; public registry; monitoring/surveillance; incident handling; versioning; and clear non-accreditation language. None exists. Until then, use **“proposed NSAG AI-agent governance assessment architecture”** and **“proposed mark concept,”** never certificate/certified/recertification.

## 7. Legal, policy and standards audit

- NIST AI RMF 1.0 (NIST AI 100-1) is explicitly voluntary, rights-preserving, non-sector-specific, and use-case agnostic. The site’s phrase “using this framework for compliance” overstates it. A transparent crosswalk could demonstrate alignment; it cannot make GAPI or a client compliant.
- The NIST Generative AI Profile (NIST AI 600-1, updated April 2026) is a relevant companion and should be included. So should applicable law by role, system, use, sector, geography and effective date; the current two-item “regulatory landscape” is not a landscape review.
- Regulation (EU) 2024/1689 is in force and imposes role/risk/use-specific obligations. A generic influence score cannot determine EU AI Act conformity. Applicable dates and actor roles must be tracked.
- The FTC’s 2024 final rule prohibits specified fake/false reviews and testimonials, including AI-generated fakes. It does not establish a general conversational-AI disclosure framework. The Rytr matter is especially unsafe as a timeless example: the FTC set aside the Rytr final order in December 2025.
- “FTC Act Section 5 enforcement docket” is not a citation. Each proposition needs a docket/rule/order URL, date, status, scope and limits.
- Vendor ethics documents and academic AI-safety literature cannot categorically be labeled “noise.” Quality, independence, applicability and evidentiary weight must be assessed source by source.
- The generic “not legal advice” banner does not cure compliance, certification, or safety claims. The service must define whether it is legal information, governance consulting, technical evaluation, or a conformity assessment and require qualified counsel for jurisdiction-specific conclusions.

Primary authorities checked: NIST AI RMF 1.0; NIST AI RMF Generative AI Profile; NIST AI RMF Playbook; FTC final rule on fake reviews/testimonials; FTC Rytr final-order and December 2025 set-aside notices; Regulation (EU) 2024/1689.

## 8. Science, health and evidence audit

The page treats “persuasion architecture,” “influence profile,” “influence drift,” and “scale effect” as precise operational constructs, but supplies no citations or measurement procedures. It says digital environments produce physiological effects; agents govern cognitive/emotional states; a two-percent nudge at scale creates measurable population effects; and systems can be assessed as cognitively safe. These may motivate research questions, but the current product cannot measure or establish them.

Required evidence architecture:

1. define each construct and causal boundary;
2. distinguish observed interface/system properties, user-reported outcomes, behavioral measures and physiological measures;
3. cite primary evidence and systematic reviews by population and context;
4. specify baseline/comparator, exposure, timing, confounders, uncertainty and falsification criteria;
5. validate instruments and thresholds before scoring;
6. obtain appropriate ethics/privacy review for human-subject, vulnerable-population, health or biometric data;
7. never equate governance documentation with cognitive safety or absence of harm.

Replace categorical language with “examines whether an organization has identified, documented and tested plausible influence and cognitive-load risks.”

## 9. Privacy, security and operations

- Contact sends name, email and free-text message cross-origin to NSAG API without a privacy notice, controller identity, purpose, lawful basis/consent language, retention, processors, deletion/contact route, or warning not to submit confidential, health, legal or proprietary information.
- The promise chain uses `.then()` without `response.ok`; 4xx/5xx closes and resets the form, falsely implying success. Catch is silent. Add pending, success, failure, retry and request identifier states.
- No spam control, rate-limit contract, CSRF/origin policy, data-classification rule, incident route, or deletion workflow is visible. These require verification at the external NSAG API.
- UTM values are stored in `sessionStorage`; after scrolling, path/source/medium are POSTed to missing `/api/track` (404). Remove the call or implement and disclose it.
- Vercel Insights and Speed Insights load without a privacy disclosure.
- Security headers include frame denial, nosniff, strict-origin referrer and camera/microphone/geolocation denial. There is no CSP, HSTS declaration in repo, or explicit CORS policy.
- Repository contains no dependencies, secrets, backend, database or build system; supply-chain surface is small. Google-hosted fonts and third-party booking/analytics/lead services remain external processors/dependencies.
- `robots.txt` explicitly permits indexing while major claims are release-blocked. Noindex or access-restrict until corrected.

## 10. Accessibility, mobile and information architecture

Positive: `lang=en`, responsive viewport, semantic headings in the original sections, native radio/button/form controls, mobile pricing rules, and external links generally use `noopener`.

Defects:

- no skip link; page’s `<footer>` appears mid-document before major content sections, producing an incorrect landmark/order;
- quiz radio groups lack `fieldset`/`legend`; validation uses blocking `alert`; score changes need a status/`aria-live` announcement;
- modal lacks `role=dialog`, `aria-modal`, accessible name, persistent labels, Escape, focus trap/return and background inertness;
- buttons/links have hover styling but no intentional `:focus-visible`; very small 11–13px text is common;
- fixed contact control can obscure content; two-column domain cards lack a narrow-mobile override;
- no `prefers-reduced-motion` treatment despite smooth scroll/hover transform;
- sitemap is advertised but 404; canonical URL is absent; old RN portfolio link is stale;
- framework, sales offer, diagnostic, research commentary, glossary, sibling brands and Aloha tools are appended after the footer, making the page feel assembled rather than governed.

## 11. Product, brand and business findings

The strongest business product is a **human-led NSAG AI-Agent Influence Governance Review**: scoped discovery, evidence inventory, six-domain gap analysis, documented limitations, counsel/technical-owner review, prioritized governance actions, and optional reassessment. That has clear value without pretending to be an accredited certification or live API.

Current price tiers are based on engineer headcount rather than system count, risk tier, geography, affected population, evidence volume, integration surface or review depth. Prices should remain unpublished until scope, acceptance criteria, delivery process, liability, revisions, evidence handling, customer agreement and deliverable sample exist.

Brand architecture must read:

- **NSAG:** owns Nervous-System-Aware Governance, GAPI framework, assessment method, evidence standard and advisory judgment.
- **GAPI:** NSAG Applied concept for AI-agent influence governance.
- **Aloha AI:** may design/build the technical interface and supporting infrastructure under NSAG direction; adjacent Aloha tools remain separate products.
- **RN Selected Work:** documents the concept and verified prototype; it does not confer certification or independent validation.

## 12. Defects ranked P0–P3

### P0 — public release blocking

1. Remove or substantiate every delivered certification, mark, MCP/API, integration, report, monitoring, measurability and cognitive-safety claim.
2. Stop selling certification/recertification at live prices until a real scheme and fulfillment system exist.
3. Do not present the five-question self-report quiz as a valid governance/safety/readiness conclusion.

### P1 — high

1. Correct NIST/FTC claims and publish dated, linked, proposition-level primary sources.
2. Replace categorical neuroscience/population claims with evidence-bounded hypotheses and operational measures.
3. Fix lead success semantics and add complete privacy/data handling.
4. Restore NSAG ownership boundary; remove “GAPI sits inside” Aloha AI.
5. Remove broken `/api/track`, missing sitemap reference and stale RN portfolio link.
6. Repair modal/quiz accessibility and document structure.

### P2 — material

1. Build framework versioning, scope, criteria, evidence requirements, scoring anchors, human review, limitations and change log.
2. Create a truthful sample gap-analysis deliverable and service specification.
3. Add canonical/OG image, methodology, privacy, terms, complaints/feedback and accessibility pages.
4. Replace personal university booking identity with practice-controlled infrastructure.

### P3 — polish

1. Consolidate duplicate/append-only sections and move footer to the true end.
2. Improve mobile cards, type size, focus visuals and reduced-motion behavior.
3. Add current internal navigation and descriptive link labels.

## 13. Exact RN Selected Work corrections

**Keep as one canonical `P` case**, under **Frameworks + Institutional Work / NSAG Applied**. Do not create separate cards for the quiz, certification mark, or imagined MCP server.

Use:

- **Title:** `GAPI — AI-Agent Influence Governance`
- **Category:** `NSAG Applied · AI governance assessment architecture`
- **Status:** `Live framework and readiness-prototype concept`
- **Purpose:** `Explore how organizations could identify, document, test, and govern AI-agent influence, cognitive-load, transparency, human-override, population-impact, and monitoring risks.`
- **Built:** `A six-domain NSAG Applied framework, public explanatory site, five-question self-reflection prototype, glossary, hypotheticals, and proposed engagement architecture.`
- **Evidence/limits:** `The live site verifies the framework presentation and client-side self-reflection quiz. It does not verify a validated assessment, safety or compliance determination, API/MCP integration, automated monitoring, generated report, certification scheme or mark, accreditation, customers, outcomes, or buyer acceptance. Any certification mark is a proposed concept, not independent accreditation, regulatory approval, an industry standard, or a safety guarantee.`
- **Practice:** `NSAG applied`; optional note `technical site built by Aloha AI`.

Change current `Live applied assessment` to `Live framework and readiness-prototype concept`. Retain the cautious evidence paragraph already present, but add that the quiz is self-attested/unvalidated and that no report is generated. Suppress the public prototype link until P0 claims/pricing are removed; the case study itself may remain visible with the limits above.

## 14. Stage B acceptance tests

1. Every public capability claim maps to a demonstrable artifact; proposed features are labeled proposed.
2. No certificate, mark, safety, compliance, MCP/API or continuous-monitoring claim remains without implementation and governance evidence.
3. Diagnostic is either reframed as non-scored reflection or validated with published method; results explain limits.
4. Source register includes exact authority, URL, proposition, status, jurisdiction, effective/as-of date and review owner.
5. Lead submission is tested in success, 4xx, 5xx, offline, retry and deletion/request flows; no false success.
6. Privacy/terms/data handling are complete; analytics/tracking behavior matches disclosure.
7. Keyboard, screen-reader, 320px reflow, 200% zoom, contrast and reduced-motion tests pass.
8. NSAG/Aloha/RN Selected Work identities match the boundary in this dossier.
9. Unknown routes, sitemap, robots, canonical, headers and external-link status are rechecked.
10. Case-study copy exactly matches verified product state.

## 15. Evidence and limitations

Evidence inspected: complete private-repository tree and all three source files; live HTTP status for root, robots, sitemap, tracking and unknown route; every page section, link, button, radio option, form and script; existing estate and case records; and the primary authorities listed above. No lead, booking, purchase or other consequential external action was performed. Visual assistive-technology and authenticated NSAG API testing remain Stage B work.
