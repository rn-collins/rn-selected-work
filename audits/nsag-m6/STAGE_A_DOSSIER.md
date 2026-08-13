# NSAG M6 — Stage A Crawl Dossier

Audit date: August 12, 2026 (Pacific/Honolulu)  
Scope: read-only seven-lens audit under `THREE_AGENT_SITE_CRAWL_PROTOCOL.md`  
Companion verification artifact: `ROUTE_CONTROL_LEDGER.json`

## 1. Asset identity

- **Asset:** `nsag-m6`
- **Deployment:** [https://nsag-m6.vercel.app/](https://nsag-m6.vercel.app/)
- **Repository:** private `rn-collins/nsag-m6`, repository ID `1285739873`, default branch `main`, reported size 56.
- **Audited commit:** `a862cf42d30856ff56edef0aa1666b38e684572a` (August 2, 2026), “fix: remove dead Gumroad link, safe waitlist capture instead.”
- **Repository contents:** `.gitignore`, one 71,351-byte `index.html`, and `vercel.json`. There is no package manifest, lockfile, test suite, build pipeline, source-module structure, API route, sitemap, robots file, privacy page, terms page, evidence page, or custom error page.
- **Deployment/source relationship:** verified. The deployed HTML is 71,351 bytes and its Git blob hash is `b4e7ebbb2432d7e982bc0f91c6398173fb649a3a`, exactly matching the repository tree.
- **Architecture:** a single static HTML file with inline CSS, copy, assessment data and JavaScript. It loads Chart.js and jsPDF from external CDNs, posts leads to `nsag-api`, attempts same-origin behavioral tracking, and references Vercel Web Analytics and Speed Insights.
- **Parent:** Neurocognitive Systems Advisory Group. M6 is the “Ethical Civic Sponsorship” component of the 15-module Nervous-System-Aware Governance framework.
- **Portfolio relationship:** M6 is linked from the canonical NSAG case study. It belongs inside that parent record, not as an independent RN Selected Work card.
- **Intended users:** leaders at nonprofits, arts and cultural institutions, sports/recreation organizations, and educational institutions who negotiate or renew sponsorships.
- **Privacy posture presented:** answers stay in-browser; an email is requested for an immediate PDF and “optional NSAG follow-up”; the page says email is never sold or shared. In source, result email and derived scores, contact details, and toolkit-interest data are intended to leave the browser. UTM data are stored in `sessionStorage`; referrer and scroll behavior are also attempted.

## 2. Executive verdict

M6 is a useful topic packaged as a nonfunctional and invalidly differentiated assessment. It should exist as an NSAG component only after the consumer journey, measurement model, and legal/public-policy boundaries are rebuilt.

The production assessment is release-blocked. `vercel.json` allows scripts only from `'self'` plus inline/eval, but the interface loads Chart.js from `cdn.jsdelivr.net` and jsPDF from `cdnjs.cloudflare.com`. Both dependency URLs return 200 at their origins, yet the CSP prevents the browser from executing them. The startup sequence builds the twelve question screens and then calls `initRadar()`, which requires the undefined `Chart` global. On the first answer, `selectOpt()` disables all four options, records the score, and calls `updateRadar()`. That function dereferences `chart` before the rationale or next-question timer is scheduled. The user is therefore stranded on question one.

The advertised report is separately false as delivered. Copy says the results download as a PDF immediately after email submission. jsPDF is CSP-blocked, and `generateResultPDF()` has no call site at all. No ordinary flow can reach the email gate because the assessment blocks first.

Even if the runtime were repaired, the scoring does not measure the six named dimensions. Each dimension is represented by two exact duplicate questions. Every one of the twelve items uses the same compound four-level answer ladder, merely substituting the dimension’s name. A respondent is repeatedly asked whether an area has “formally documented standards, independent monitoring, quarterly review by leadership, and accountability tied to named roles.” The instrument therefore measures agreement with one bundled governance template six times. It does not separately test sponsor conflicts, revenue concentration, mission alignment, disclosure, influence, or exit capacity.

The civic-ethics framing also exceeds its evidence. Fooks et al. examined British American Tobacco’s CSR strategy; that research supports caution about political uses of tobacco-industry CSR, but it does not validate a cross-sector maturity model or establish that every sponsored civic institution becomes a lobbying participant “regardless of intent.” The site collapses private nonprofits, schools, universities, arts organizations, and potentially public institutions into one rubric. It omits tax characterization of sponsorship, agency gift-acceptance authority, anti-augmentation rules, procurement integrity, employee ethics, public-records/open-meetings regimes, and First Amendment government-speech/forum questions. These are jurisdiction- and entity-specific, not optional edge cases.

**Disposition: C — NSAG component, release-blocked.** Keep the subject under the parent NSAG case study. Do not promote M6 as a working assessment, validated score, legal-risk screen, purchasable toolkit, or government-ethics tool until Stage B and expert review are completed.

Top risks:

1. **P0:** the assessment cannot advance after the first answer because CSP blocks Chart.js.
2. **P1:** the immediate PDF promise is broken; the generator is never called and jsPDF is CSP-blocked.
3. **P1:** duplicated generic items do not measure the six stated dimensions.
4. **P1:** the “civic” framing omits essential entity, jurisdiction, procurement, gift, ethics, disclosure, and constitutional distinctions.
5. **P1:** waitlist and contact handlers claim or imply success without verifying `response.ok` or persistence.
6. **P1:** hidden screens remain in the accessibility tree, auto-advance cannot be reversed, and the contact modal lacks dialog semantics and focus management.
7. **P1:** anonymous “PIONEERING” examples, the 20% ceiling, quarterly review standard, and commercial progress claims are unsupported.

## 3. Complete route map

| Route/resource | Observed result | Classification |
|---|---:|---|
| `/` | 200; 71,351-byte static interface matching GitHub | Core product broken |
| `/sitemap.xml` | 404 although HTML advertises it | Broken metadata contract |
| `/robots.txt` | 404 | Missing |
| `/api/track` | 404; client attempts POSTs | Broken telemetry |
| `/_vercel/insights/script.js` | 404 | Broken analytics reference |
| `/_vercel/speed-insights/script.js` | 200 | Working script resource |
| arbitrary unknown paths | Vercel not-found behavior; no app router exists | Expected static 404 |

No other same-origin product route was discoverable from the document, repository tree, routing configuration, sitemap/robots references, or source URLs.

### External destinations and dependencies

- Chart.js CDN returns 200 but is blocked by the site’s CSP.
- jsPDF CDN returns 200 but is blocked by the site’s CSP.
- `nsag-api /api/lead` responds to OPTIONS with 200, permits POST/OPTIONS, and returns `Access-Control-Allow-Origin: *`. No consequential POST was made; validation, persistence and email remain unverified.
- NSAG M1, M5, M7, NSAG Advisory, Aloha AI, and the legacy RN portfolio each returned 200.
- The Outlook Bookings destination was not completed because booking is consequential.
- Results copy points users to `nsag-site.vercel.app/m6`, while the actual standalone assessment is `nsag-m6.vercel.app`. The parent URL can be the canonical share destination, but the relationship is unstated.

Metadata includes a title, description, OG title/description/type/URL, meta robots, and JSON-LD. It lacks a canonical link, OG image, favicon, real sitemap, robots file, privacy link, terms link, evidence link, and parent NSAG navigation link.

## 4. Complete interaction/control inventory

### Entry and sector selection

- “Begin the Challenge” is intended to replace the main intro with a sector selector.
- Four sector buttons—Nonprofit, Arts & Cultural, Sports/Recreation, and Educational Institution—set a visual chosen state and enable Continue.
- Continue opens question one.
- The selected value is never used in any question, recommendation, tier, report, share text, or API payload. The claim that sector selection shapes familiar scenarios is simulated.
- `selectedSector` defaults to stale value `legal-aid`, inherited from another module. It is overwritten when a sector is clicked but remains otherwise dead.

### Questions and progression

- Twelve question screens are generated, four answer buttons each.
- The first selected option receives `.selected`; all four options receive `pointer-events:none`.
- `updateRadar()` then throws because Chart.js never initialized. Rationale, dimension completion, auto-advance, gate, and results do not run.
- A/B/C/D keyboard shortcuts exist and click a visible option, but they inherit the same crash.
- `prevQuestion()` exists but no Back button is rendered. A respondent cannot review or revise an answer.
- No explicit Next button is rendered. The intended experience auto-advances after roughly 1.1 seconds.
- Rationales display for about 900ms and are not announced as live content.
- The progress bar has no progressbar semantics.

### Email, results and report

- The email gate is unreachable ordinarily.
- Email validation requires only a nonempty value containing `@`; error state has no text explanation.
- Intended results include a tier, six dimension bands, strongest/weakest claim, narrative, related modules, toolkit preview, advisory links, Share, Print, Retake and Copy.
- The result POST intends to send email, module, tier, percentage, six dimension sums and timestamp. It ignores all API outcomes.
- The PDF promise is broken: the generator is not called, its dependency is blocked, and there is no Download button.
- Copy/Share/Print/Retake code is present only on unreachable results and was not represented as verified behavior.

### Toolkit, advisory and contact

- Pioneering results offer NSAG Advisory and Outlook discovery-call links.
- Other tiers show “Join the M6 Toolkit Waitlist — $500.” This is not a checkout. The source itself describes the toolkit as “not yet available for checkout.”
- Clicking waitlist sends the gate email if available, ignores every network outcome, disables the button, and asserts: “You’re on the list — I’ll email you personally, usually within a day.” That is simulated fulfillment and a false success state on failure.
- “Contact the Architect” toggles a custom overlay. Cancel and backdrop code close it.
- The modal lacks `role="dialog"`, `aria-modal`, an accessible name, focus trap, initial focus, Escape handling and focus restoration. Inputs use placeholders rather than labels.
- Contact submission closes on any fulfilled fetch promise, including an HTTP error, and silently ignores rejection. No success/error status is displayed.

## 5. Consumer journeys and observed results

### Sponsorship leader seeking a quick diagnostic

The opening value proposition is specific enough to attract a nonprofit or arts leader. The page appropriately says the instrument is educational and unvalidated. However, it introduces a strong claim—sponsorship can make civic institutions participants in lobbying strategies—before giving a source link or explaining that the cited evidence concerns tobacco-industry CSR. The user is asked to supply a sector even though nothing changes. After selecting the first answer, the product stops.

**Outcome:** promise not delivered; no profile, next step, PDF, or usable diagnosis.

### Public-institution or school user

The terms “civic,” “education,” and “institution” invite public bodies and public schools. The tool never asks whether the entity is governmental, quasi-public, tax-exempt, private, federally funded, or subject to a particular jurisdiction. A public user receives the same rubric as a private nonprofit despite potentially dispositive gift-acceptance, appropriations, procurement, ethics, public-records, board-meeting, naming-rights, and speech constraints.

**Outcome:** dangerous incompleteness even if runtime were fixed.

### Returning or keyboard user

There is no saved assessment state. Reload resets everything. Keyboard letter shortcuts exist, focus-visible CSS exists, and reduced-motion CSS exists. But inactive screens are not hidden from assistive technology, there is no reversible progression, and the primary action fails. Return visits provide no report retrieval or durable record.

### Buyer evaluating the $500 toolkit

The preview lists a 90-day roadmap, six policy templates, worksheet, six-source evidence base, measurement framework, and objections FAQ. None is inspectable, purchasable, versioned, licensed, or accompanied by terms/refund/support information. Clicking the waitlist can assert enrollment even if the API fails.

**Outcome:** concept-stage offer, not a verified product.

### Verification boundary

Repository, deployed HTML, HTTP resources, CSP, external destinations, scoring logic and handler code were inspected. No consequential contact, result, waitlist, booking or purchase form was submitted. A compatible browser binary was unavailable in this environment, and a browser installation failed due the environment’s certificate/download boundary. The runtime failure is nevertheless deterministic from the byte-identical deployed source, effective CSP and dependency origins. Device, zoom, focus-order and screen-reader observations remain explicitly unverified rather than inferred as passed.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Static page load | Working | Root 200; deployment matches repository blob |
| Sector UI | Partial/simulated | Stores sector but never uses it |
| Question generation | Working in source | Twelve screens created before Chart initialization |
| Assessment progression | Broken | First answer reaches undefined chart and cannot schedule next step |
| Radar chart | Broken | Chart.js blocked by CSP |
| Scoring arithmetic | Code-present | Mean and sums are internally computable but not reachable/validated |
| Six-dimension measurement | Invalid/simulated | Duplicate item pairs and identical compound ladders |
| Email gate | Unreachable | Depends on completing broken flow |
| Immediate PDF | Broken | jsPDF blocked; generator has no call site |
| Result email | Unverified | API response ignored; no submission made |
| Share/copy/print/retake | Unverified | Unreachable result controls |
| Toolkit | Concept/waitlist | No checkout; contents and fulfillment unverified |
| Advisory links | Destination working | Linked pages return 200; service delivery not audited here |
| Contact modal | Partial | Toggle code exists; accessibility and response handling fail |
| Custom analytics | Broken | `/api/track` is 404 |
| Vercel Web Analytics | Broken | insights script is 404 |
| Speed Insights | Working resource | Script returns 200 |
| Sitemap/robots | Missing/broken | Both 404 |
| Tests/build | Missing | Static repository has neither |
| Privacy/terms/evidence pages | Missing | No routes or links |

## 7. Copy and information-architecture findings

### Strengths

- The audience and topic are clearer than in many generic governance tools.
- The page plainly states that the assessment is educational, self-reported and unvalidated.
- The six proposed dimensions form a plausible discussion agenda.
- “Why This Module Exists” usefully distinguishes sponsorship itself from undisclosed or unmonitored influence.
- The August 2026 review date and instruction to confirm current sector guidance are good habits.

### Material defects

- “Your sector shapes which scenarios feel most familiar” is false; all sectors receive identical generic text.
- “12 scenarios” is misleading. There are six prompts, each duplicated verbatim.
- “You’ll leave with a documented view” and “Your results download as a PDF immediately” describe unavailable outputs.
- “A sponsorship without governance is a liability without a number” is rhetorically forceful but analytically vague. Liability can mean legal, financial, reputational, mission, tax, constitutional or procurement exposure; the tool measures none directly.
- The strongest/weakest narrative contains stale copy from another module: “strong environmental awareness,” “trained staff,” and “physical and procedural governance.” It is unrelated to sponsorship.
- The cinematic reveal says “Your M1 governance tier,” a cross-module copy defect.
- “Most institutions at this tier cross into PIONEERING within one governance cycle” is an unsupported outcome claim.
- “The fastest path forward is not a committee” may discourage board, counsel, procurement, ethics, finance, labor, student/community, or public-participation processes that could be required or prudent.
- “Policy language templates — copy directly into documents” is unsafe for jurisdiction-sensitive legal and procurement material.
- The same “PIONEERING” name is used for an unvalidated self-report and for commercial upselling, creating false authority.
- The related-tool links appear outside the assessment panel and lack a parent framework path or evidence path.
- “RN Builds” links to a legacy portfolio, not RN Selected Work.

Recommended IA: parent NSAG context → scope/entity/jurisdiction chooser → evidence and limitations → non-scored checklist or validated domain-specific instrument → results → jurisdiction-aware resources → optional advisory. Separate marketing consent from report delivery.

## 8. Science, law, policy, and regulatory claim ledger

| Claim or implied standard | Finding | Required treatment |
|---|---|---|
| Fooks et al. (2013) documented corporate use of CSR to neutralize regulatory threats | Directionally grounded in a BAT-focused paper using internal tobacco-industry documents. The site does not link it and compresses a contextual qualitative analysis into a universal proposition. | Cite DOI/primary text; name BAT/tobacco scope, method, jurisdiction/context and transfer limits. |
| Civic institutions become participants in lobbying strategies “regardless of intent” | Overgeneralized inference. The source supports CSR as political activity/access strategy in tobacco contexts, not automatic participant status for every recipient institution. | Recast as a risk pathway: sponsorship may create access, legitimacy or agenda-setting opportunities; assess evidence case by case. |
| “The pattern repeats across sectors” | Unsupported by the single cited paper and examples. Pharmaceutical, fossil-fuel, arts, finance and research examples are asserted without sources. | Add sector-specific primary evidence or state explicitly that these are hypothetical risk examples. |
| Undisclosed, unmonitored sponsorship is the governance risk | Reasonable normative framing, not a complete legal rule. Disclosure alone does not cure prohibited gifts, unauthorized augmentation, procurement defects, endorsement, conflicts or constitutional issues. | Label as framework proposition; add entity/jurisdiction decision tree. |
| Six dimensions are the governance answer | Authored framework, not established legal or empirical standard. Missing tax treatment, benefit valuation, contract rights, vendor/procurement status, gift authority, public-body rules, political activity, records, accessibility/equity and speech. | Present as a proposed checklist; do not score until construct coverage is reviewed by experts and users. |
| Written conflict policy equals sponsor conflict governance | IRS Form 990 asks whether filing organizations have written conflict policies, but IRS defines those around financial interests of decision-makers and says governance policies depend on organization size/type/culture. It does not validate M6’s sponsor rubric. | Distinguish board-member financial conflicts, organizational mission conflict, donor influence and tax issues. |
| Corporate sponsorship is ordinary nonprofit revenue | Federal tax treatment turns on whether a payment is a qualified sponsorship under IRC §513(i)/Treas. Reg. §1.513-4, including substantial return benefits, advertising, contingent payments, periodicals and exclusive-provider arrangements. M6 omits these. | Add tax boundary and CPA/tax-counsel referral; never call templates universal. |
| Independent monitoring and quarterly leadership review define score 4 | No cited legal or evidence basis; may be disproportionate or infeasible for smaller entities. One compound response also hides which element exists. | Split documentation, approval authority, review frequency, independence, escalation and evidence into separate items; allow proportionality. |
| A single sponsor should not exceed 20% of operating revenue | Appears only in an anonymous example. No source establishes 20% as universal law or validated risk threshold. | Label as hypothetical policy example, explain why a threshold is selected, and require financial/board review. |
| Written policies make governance survive staff transitions | Plausible but causal/durability claim is not established by the instrument. Written policy without training, enforcement, board authority, resources and audit may be ineffective. | Qualify and measure implementation evidence separately. |
| Public/civic institutions can manage sponsorship with this rubric | Materially incomplete. Federal agencies ordinarily need statutory gift-acceptance authority; unauthorized gifts can augment appropriations unlawfully. Federal employee gift/endorsement and procurement-integrity rules may apply. State/local regimes vary. | Exclude public bodies until a jurisdiction-specific branch exists or require counsel/ethics/procurement review before proceeding. |
| Government procurement is equivalent to sponsorship governance | Not stated expressly, but the tool’s broad “ordinary governance” framing invites conflation. Sponsorship may be a gift, grant, advertising arrangement, naming-rights contract, concession, procurement, or mixed transaction. | First classify the transaction; then route to applicable gift, tax, contract, procurement and ethics rules. |
| Sponsor influence can be declined solely through institutional criteria | For private bodies this is often contractual/governance judgment; for public bodies, government-speech, forum, viewpoint-neutrality, equal-protection, procurement and other constitutional/statutory constraints can affect discretion. | Add public/private status and First Amendment boundary; do not provide one-size policy language. |
| Disclosure standards are “baseline expectations” | Too vague to verify. Disclosure obligations differ across Form 990, state charity law, public records, education/accreditation, securities, campaign/lobbying and contract regimes. | Specify actor, document, audience, timing, jurisdiction and legal source. |
| Anonymous arts and community-health examples are real PIONEERING cases | No client/source/status disclosure. The two-day pharmaceutical naming-rights story and claimed outcomes are unverified. | Mark clearly as hypothetical composites or provide consented, primary evidence. |
| Most Emerging institutions become Pioneering within one cycle | Unsupported commercial performance claim. | Remove unless backed by defined cohort, baseline, intervention, duration and independently reviewable results. |

### Primary-source conclusions

- The 2013 Fooks et al. Journal of Business Ethics paper is real (DOI `10.1007/s10551-012-1250-5`) and analyzed internal BAT documents. Transfer beyond tobacco CSR is an inference, not a result of M6 validation.
- A related 2011 PLOS Medicine document study found BAT CSR was used to secure policymaker access; it expressly described effects as context-specific.
- Current IRS materials distinguish acknowledgment from advertising and substantial return benefits, and address exclusive-provider arrangements. The site’s six dimensions omit this basic sponsorship classification.
- Current Form 990 instructions define conflict-of-interest policies around financial benefit to people with authority and caution that governance practices depend on the organization. M6’s use of “conflict” is broader and should be labeled accordingly.
- Federal appropriations/gift law is agency-authority specific. GAO and DOJ materials show that federal agencies ordinarily cannot accept private gifts without statutory authority and that ethics/gift rules may apply to employees and departments.
- FAR 3.101-1 requires government business above reproach, impartiality and avoidance of actual/apparent conflicts in government-contractor relationships. FAR rules do not automatically govern every sponsorship; classification and jurisdiction come first.
- When a public institution controls sponsor messages, government-speech versus private-forum characterization can create First Amendment consequences. M6 does not ask enough facts to assess this.

The existing “not legal advice” banner is necessary but insufficient. Add tax, procurement, government ethics, constitutional/public-law, financial/accounting and entity/jurisdiction boundaries. The tool should not recommend copying policy language directly without professional review.

## 9. Accessibility and responsive findings

### Accessibility

- All twelve generated question screens, the gate and results remain in the DOM. Inactive screens are visually transparent and pointer-disabled, but are not `hidden`, `inert`, `aria-hidden`, or otherwise removed from the accessibility tree. A screen-reader user can encounter future questions, the gate and result controls out of sequence.
- Options are ordinary buttons, which is better than clickable divs, but they have no radiogroup/fieldset relationship, no selected-state semantics such as `aria-pressed`, and no instruction that selection auto-advances.
- The visual progress bar lacks `role="progressbar"`, value attributes and a useful accessible label.
- Rationales, dimension-complete flashes, validation errors and cinematic tier reveal are dynamic status messages without live-region semantics.
- The 900ms rationale display and forced auto-advance are difficult for cognitive, low-vision, screen-reader and translation users. There is no pause, explicit Next, or rendered Back control.
- The email input has an `aria-label`, but its error has only color/border and `aria-invalid`; there is no linked text error.
- The contact inputs have placeholders but no labels. The overlay has no dialog role/name/modal semantics, focus trap, initial focus, Escape close, or focus restoration.
- The results chart is canvas-only and has no text alternative. Dimension bars have text labels but are unreachable ordinarily.
- There is no `main` landmark or skip link. Heading structure begins reasonably with an H1 but modal and dynamic-screen hierarchy is not managed.
- Focus-visible styling and reduced-motion styling are present. These are positive, but reduced motion does not remove the 2.2-second blocking reveal or auto-advance behavior.
- The global A/B/C/D shortcuts can fire while focus is in other controls if an active screen contains options; shortcuts are not announced and may conflict with assistive input.

### Responsive behavior

- At widths under 900px the desktop radar panel is hidden and a mobile results radar is intended. Since Chart.js is blocked, neither chart is operational.
- Two-column sector selection persists until 480px; at 480px it becomes one column. Question/intro padding and option sizes are reduced.
- The contact button has a small-screen style, but the selector targets fixed inline styles and does not address overlap with content or system UI.
- The layout uses absolute-positioned `.screen` elements inside an `overflow:hidden` panel. Long intro, sector, result or localization content can be clipped, as observed in sibling modules. A device browser was unavailable here; this risk is source-derived and must be tested at 320px, 390px, 768px, desktop, 200% zoom and landscape before release.
- Printing hides major UI and statically exposes the active screen. Because results are unreachable and dynamic insertions can duplicate across repeated calls, printable output is unverified.

## 10. Brand-architecture findings

M6’s content owner should be NSAG. Aloha AI can be credited as the technical implementation practice. RN Selected Work should document the case. The current footer—“Built by Aloha AI” with “RN Builds” linking to a legacy portfolio—does not make those roles sufficiently distinct.

The green palette and civic-sponsorship topic give M6 some individuality, but the interface is visibly cloned from the module template. Stale `legal-aid`, M1 reveal copy, environmental/trained-staff result language, duplicated generic prompts, and the same commercial tier mechanics weaken confidence in NSAG’s claim to a rigorous original framework.

The JSON-LD identifies RN as “AI Educator & Consultant” and points to `rn-portfolio-khaki`, not the current RN Selected Work surface. It does not identify NSAG as the framework/publisher or M6 as an NSAG component. The footer does not link the parent NSAG framework, evidence base, limitations, privacy, or RN Selected Work case.

The Hawaiʻi grounding is absent beyond RN’s broader brand context. For a civic-governance module, this is a missed opportunity and a risk: Hawaiʻi public procurement, ethics, education, nonprofit, Indigenous/community accountability and public-private partnership contexts should not be implied without local legal and stakeholder review.

Recommended ownership line:

> Framework and content: Neurocognitive Systems Advisory Group, founded and led by RN Collins. Interface implementation: Aloha AI. Case study and audit status: RN Selected Work.

## 11. Business-model and conversion findings

- **Beneficiary/user:** staff or board leaders managing sponsorship decisions.
- **Potential buyer:** executive director, advancement/development leader, general counsel, compliance/ethics officer, board, finance leader, procurement office, university advancement office, or cultural/sports venue leadership.
- **Value hypothesis:** identify missing decision rights, disclosures, monitoring and exit terms before accepting or renewing sponsor relationships.
- **Economic value:** avoiding mission compromise, tax mistakes, procurement/ethics violations, reputational crises, overdependence and difficult exits. These are plausible but not quantified or demonstrated.
- **Conversion path:** free diagnostic → email/report → $500 toolkit waitlist or discovery/advisory call.
- **Current delivery:** diagnostic broken; report broken; toolkit unavailable; API/report delivery unverified; service outcomes unsupported.

The most credible near-term product is not a scored “maturity challenge.” It is a well-sourced, entity-aware sponsorship governance intake and board discussion guide. A useful paid toolkit could include transaction classification, sponsor diligence, benefit valuation, board conflicts, public/private decision trees, approval matrices, disclosure language, monitoring, exit clauses, escalation, records, and versioned sources. But legal templates must be jurisdiction-specific or clearly attorney-review drafts.

The $500 price is not supported by preview samples, versioning, terms, licensing, update policy, refund policy, accessibility statement, support commitment, subject-matter reviewer identity, or purchaser testimonials. The cohort and benchmarking references are also unverified. Do not collect paid demand against a deliverable whose existence and fulfillment cannot be shown.

Recommendation: invest only as part of NSAG after expert review and a real instrument/content redesign. Do not spin M6 into a separate brand or portfolio case. If expert/legal resourcing is unavailable, convert it to a free non-scored resource and remove commercial outcome language.

## 12. Security, privacy, data, and operational findings

### Security and runtime

- Security headers include HSTS, X-Content-Type-Options, X-Frame-Options DENY, strict referrer policy, restrictive permissions policy, and frame ancestors none. These are positive.
- CSP is simultaneously permissive (`unsafe-inline`, `unsafe-eval`) and broken: it does not allow the two external scripts required by the product. Self-host with integrity/version control and remove unnecessary unsafe directives, or explicitly allow reviewed origins.
- There is no test/build gate capable of detecting missing globals, console errors, dead routes or the broken end-to-end journey.
- Third-party scripts lack Subresource Integrity attributes.
- Error handling suppresses failures in analytics, result, toolkit and contact flows. Operationally, silence is treated as success.

### Privacy and data expectations

- The page says answers stay in-browser. Raw responses do; derived tier, percentage and dimension sums are intended to be sent with email. Those derived scores can reveal internal governance weaknesses and should be disclosed explicitly.
- Report delivery and “optional updates” are bundled into one email field without separate consent. “Optional follow-up” is too vague for marketing consent.
- There is no privacy policy, data controller/contact, processor list, purpose/legal basis, retention period, deletion/access process, security statement, cross-border information, unsubscribe mechanism or explanation of whether contact and assessment records are linked.
- UTM parameters persist for the session. Page-view data includes referrer and UTM; scroll-depth data are attempted. The custom endpoint is 404, but failed collection does not excuse absent disclosure.
- Speed Insights loads; the Web Analytics script reference is dead. Vendor collection and cookies/storage were not disclosed.
- `nsag-api` CORS allows any origin to POST. That may be intentional for multiple modules, but server validation, origin controls, abuse prevention, rate limiting, CAPTCHA, logging, retention and email injection protections were not inspectable here.
- Contact and toolkit handlers can create false consumer records and false expectations because they do not require an OK response.

### Operational readiness

There is no visible version identifier for the rubric, evidence review log, change history, support SLA, owner for updates, incident process, scoring documentation, data processing terms, or accessibility support route. The single-file architecture encourages cross-module copy contamination and makes independent review difficult.

## 13. Defects ranked by severity

### P0 — blocking

1. **Core assessment cannot advance after answer one.** Chart.js is blocked by CSP; `selectOpt()` disables options and throws in `updateRadar()` before scheduling advancement.

### P1 — serious

1. **Promised PDF is unavailable.** jsPDF is blocked and `generateResultPDF()` is never called.
2. **The instrument does not measure six distinct dimensions.** Each dimension’s two questions are exact duplicates and every answer ladder is identical and compound.
3. **Public/civic legal scope is materially unsafe.** Entity type, jurisdiction, gift authority, appropriations, procurement, employee ethics, tax, disclosure and constitutional constraints are not assessed.
4. **Unsupported claims.** Universal transfer from BAT CSR, 20% revenue ceiling, quarterly independent monitoring, one-cycle progress, cohort benchmarking and anonymous examples lack sufficient support.
5. **Accessibility sequence failure.** Hidden screens remain discoverable to assistive technology; dynamic changes lack semantics; no rendered Back/Next; modal inaccessible.
6. **False success states.** Waitlist asserts enrollment; contact closes on any HTTP response; result API ignores failure.
7. **Privacy mismatch.** Derived governance scores leave the browser without clear disclosure; report and marketing purposes are bundled; no privacy route.

### P2 — material

1. Sector personalization is simulated and retains stale `legal-aid` state.
2. Results contain M1/environmental/trained-staff copy from other modules.
3. `/api/track`, Web Analytics, sitemap and robots are broken/missing.
4. No parent NSAG/evidence/privacy/terms navigation.
5. Legacy RN portfolio and JSON-LD fragment brand architecture.
6. No canonical/OG image/favicon and weak structured data.
7. Single-file architecture, no tests, no dependency management, no SRI.
8. Auto-advance and brief rationale prevent review and comprehension.

### P3 — polish

1. Legal banner is visually detached from the core scope explanation.
2. “Liability without a number,” “ordinary risk,” and “PIONEERING” are rhetorically stronger than evidence supports.
3. Related-module choices are not explained by a coherent user need.
4. Contact button may cover content on small screens.

## 14. Exact remediation plan

### Release restoration

1. In `vercel.json`, replace the contradictory CSP/dependency arrangement. Prefer vendoring pinned Chart.js/jsPDF assets under same origin; remove `unsafe-eval` and migrate inline script/style under nonces/hashes or external files.
2. In `index.html`, guard nonessential visualization initialization so assessment progression never depends on a chart. `updateRadar()` must be no-op/fallback-safe.
3. Add a visible non-canvas textual results representation independent of Chart.js.
4. Call a tested report function only after results render, or replace the promise with an explicit “Download PDF” button. Display report-generation failure. Do not require email for a local download.
5. Add automated end-to-end fixtures for all-low, all-high, mixed, invalid email, network failure, API non-2xx, report failure, back/revision and reload.

### Measurement redesign

6. Replace all twelve generic duplicate items. For each named construct, write at least two nonredundant behavioral/evidence items:
   - conflict: sponsor identity, regulated/contracting interests, decision-maker conflicts, diligence and recusal;
   - revenue: concentration, contingency planning, benefit valuation and renewal leverage;
   - mission: documented compatibility, beneficiary impact, restricted uses and program independence;
   - disclosure: contract terms, amounts/benefits, audiences, timing and records;
   - influence: content/control rights, access, data, naming, agenda-setting, escalation and audit;
   - exit: termination triggers, cure, repayment, naming/content removal, continuity and communications.
7. Split compound answer options into separate observable criteria. Accept evidence/unknown/not-applicable states.
8. Conduct content-validity review with nonprofit governance, fundraising, public procurement/ethics, tax, education/cultural/sports, First Amendment/public-law and community-accountability experts.
9. Remove numeric tier claims until reliability and interpretation are tested. Use a non-scored readiness map during validation.
10. Publish rubric version, scoring method, missing-data handling, scope, validation status and change log.

### Legal/policy boundaries

11. Add an initial classifier: private nonprofit, private school/university, public school/university, municipal/state/federal body, venue/authority, for-profit, other; jurisdiction; tax-exempt status; government funding; sponsor relationship to regulator/procurement.
12. Classify the transaction: charitable gift, qualified sponsorship, advertising, naming rights, concession/exclusive provider, procurement, grant, in-kind contribution or mixed.
13. Build jurisdiction-aware stop rules: public agency gift authority/appropriations; procurement and gratuities; ethics/recusal; UBIT/return benefits; lobbying/political activity; open records/meetings; government speech/public forum; accreditation/education rules.
14. Replace “copy directly” legal templates with issue-spotting drafts requiring counsel, finance/tax and responsible governing-body approval.
15. Link every substantive claim to a primary source and label hypothetical examples. Remove unsupported outcomes and the one-cycle claim.

### Product, accessibility and privacy

16. Make sector selection genuinely branch content or remove it. Eliminate stale `legal-aid` state and all cross-module copy.
17. Add Back, explicit Next, save/review summary, pause, and user-controlled rationales. Do not force timed transitions.
18. Use `hidden`/`inert`/`aria-hidden` correctly; add main/skip, progress semantics, fieldset/radio semantics, live status, linked errors, chart alternative, focus movement and fully accessible modal behavior.
19. Test 320/390/768/1440 widths, landscape, touch, keyboard, screen readers, reduced motion, 200–400% zoom, reflow and print.
20. Separate local report download from optional email. Add explicit optional marketing consent. Publish privacy/terms/accessibility/support pages and derived-score disclosure.
21. Require `response.ok`, server validation and returned confirmation IDs before success. Provide retry/error states. Review API rate limits, origin policy, logging, retention and deletion.
22. Remove or implement `/api/track`; fix Web Analytics; add real sitemap/robots/canonical/OG image/favicon and NSAG structured data.

### Brand and commercial readiness

23. Credit NSAG as framework/content owner, Aloha AI as implementation, RN Selected Work as case/audit.
24. Link the parent NSAG framework, evidence, limitations and current RN Selected Work rather than legacy RN portfolio.
25. Do not display `$500` until the toolkit exists, has a review/version record, sample, license, terms, support, refund and fulfillment workflow. Until then label it “interest list—product in development” without a purchase implication.

## 15. Recommended estate disposition

**C — component.**

M6 is a separately deployed NSAG interface, not an independent practice or portfolio build. Preserve its conceptual subject under the parent NSAG system. Current readiness is **release-blocked broken prototype**.

The smallest coherent path is to turn it into a source-linked, entity-aware, non-scored sponsorship governance checklist. Reintroduce scoring only after nonduplicate items, expert review, user testing and interpretation evidence exist. If that investment is not available, archive the standalone assessment and maintain a concise parent-module explainer.

## 16. Proposed RN Selected Work case-study corrections

Until production remediation is independently verified, the NSAG case study should disclose:

- M6 is a separately deployed NSAG component, not a standalone product.
- At the August 12, 2026 audit, its core assessment blocked after the first answer because its security policy prevented a required visualization library from loading.
- The promised PDF was not delivered: its library was blocked and the generator had no invocation.
- The current twelve items are six duplicated prompt pairs using one generic response ladder; the interface does not yet validly distinguish its six named sponsorship dimensions.
- Sector selection is cosmetic.
- M6 is educational and unvalidated, not legal, tax, procurement, ethics, constitutional, accreditation, financial, compliance or audit advice.
- Public-body and public-school use requires entity- and jurisdiction-specific review that the current tool does not provide.
- The toolkit is an unverified waitlist concept, not a purchasable fulfilled product.
- Commercial progress claims and anonymous examples require removal or primary evidence.

Suggested short status:

> M6 is an NSAG component exploring sponsor conflicts, revenue dependency, mission alignment, disclosure, influence and exit planning. At the August 12, 2026 audit, the deployed assessment was not operational, its promised report was unavailable, and its duplicated generic items did not yet measure six distinct constructs. It should be treated as an educational prototype—not a legal, tax, procurement, government-ethics, constitutional, compliance or validated maturity instrument—until rebuilt and independently reviewed.

## 17. Evidence appendix

### Artifact and repository evidence

- Deployment: [https://nsag-m6.vercel.app/](https://nsag-m6.vercel.app/)
- Parent module summary: [https://nsag-site.vercel.app/m6](https://nsag-site.vercel.app/m6)
- Repository: private `rn-collins/nsag-m6`
- Audited commit: `a862cf42d30856ff56edef0aa1666b38e684572a`
- Repository tree: `.gitignore`, `index.html`, `vercel.json`
- Repository and deployed `index.html`: 71,351 bytes; Git blob `b4e7ebbb2432d7e982bc0f91c6398173fb649a3a`
- Companion ledger: `audits/nsag-m6/ROUTE_CONTROL_LEDGER.json`

### HTTP/runtime evidence

- Root: 200.
- Effective CSP: `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; ... connect-src 'self' https://nsag-api.vercel.app`.
- Chart.js and jsPDF origins: 200, but neither origin is permitted by `script-src`.
- `/sitemap.xml`, `/robots.txt`, `/api/track`, and `/_vercel/insights/script.js`: 404.
- `/_vercel/speed-insights/script.js`: 200.
- `nsag-api /api/lead` OPTIONS: 200; POST/OPTIONS and CORS `*` advertised.
- M1, M5, M7, NSAG Advisory, Aloha AI and legacy RN portfolio destinations: 200.
- Static JavaScript syntax check passed after extraction of the main script. The product failure is runtime/dependency and product-state logic, not a parse error.

### Primary/current sources used for claim review

- Fooks et al., “The Limits of Corporate Social Responsibility: Techniques of Neutralization, Stakeholder Management and Political CSR,” *Journal of Business Ethics* 112 (2013): [https://doi.org/10.1007/s10551-012-1250-5](https://doi.org/10.1007/s10551-012-1250-5)
- Fooks et al., “Corporate social responsibility and access to policy élites,” *PLOS Medicine* (2011): [https://doi.org/10.1371/journal.pmed.1001076](https://doi.org/10.1371/journal.pmed.1001076)
- IRS, Advertising or Qualified Sponsorship Payments: [https://www.irs.gov/charities-non-profits/advertising-or-qualified-sponsorship-payments](https://www.irs.gov/charities-non-profits/advertising-or-qualified-sponsorship-payments)
- IRS Publication 598, qualified sponsorship activities: [https://www.irs.gov/publications/p598](https://www.irs.gov/publications/p598)
- IRS, exclusive-provider arrangements within sponsorship agreements: [https://www.irs.gov/charities-non-profits/exclusive-provider-arrangement-within-qualified-sponsorship-agreements](https://www.irs.gov/charities-non-profits/exclusive-provider-arrangement-within-qualified-sponsorship-agreements)
- IRS, 2025 Form 990 instructions and conflict-policy definition: [https://www.irs.gov/instructions/i990](https://www.irs.gov/instructions/i990)
- IRS, Form 990 governance policies are not all Code requirements: [https://www.irs.gov/charities-non-profits/form-990-part-vi-governance-use-of-part-vi-information](https://www.irs.gov/charities-non-profits/form-990-part-vi-governance-use-of-part-vi-information)
- FAR 3.101-1, public trust and conflicts in government business: [https://www.acquisition.gov/far/3.101-1](https://www.acquisition.gov/far/3.101-1)
- FAR 9.502, organizational conflicts applicability: [https://www.acquisition.gov/far/9.502](https://www.acquisition.gov/far/9.502)
- GAO, unauthorized augmentation/gift-acceptance principle: [https://www.gao.gov/products/b-128527-2](https://www.gao.gov/products/b-128527-2)
- DOJ, gifts and entertainment/department gift acceptance: [https://www.justice.gov/jmd/gifts-and-entertainment](https://www.justice.gov/jmd/gifts-and-entertainment)
- DOJ OLC, authority to solicit gifts depends on statutory acceptance authority: [https://www.justice.gov/olc/opinion/authority-solicit-gifts](https://www.justice.gov/olc/opinion/authority-solicit-gifts)
- U.S. Department of Education, private-event endorsement/forum illustration: [https://www.ed.gov/laws-and-policy/education-policy/guidance-on-constitutionally-protected-prayer-and-religious-expression-in-public-elementary-and-secondary-schools](https://www.ed.gov/laws-and-policy/education-policy/guidance-on-constitutionally-protected-prayer-and-religious-expression-in-public-elementary-and-secondary-schools)

### Explicit unverified areas

- No assessment result, contact, waitlist, email, booking or purchase was submitted.
- Browser automation and device testing could not be completed because no compatible browser binary was installed; installation failed at the environment’s certificate/download boundary. Keyboard, screen-reader, zoom and reflow findings therefore combine source analysis with explicit required tests, not a false pass.
- API persistence, email/report delivery, validation, retention, deletion, rate limiting, abuse controls and security remain unverified.
- Toolkit contents, six-source evidence base, templates, license, terms, price justification and fulfillment remain unverified.
- Advisory outcomes, cohort benchmarking, the one-cycle claim, the 20% threshold and anonymous examples remain unverified.
- No construct validity, content validity, reliability, responsiveness, inter-rater agreement or outcome prediction evidence was supplied.
- No Hawaiʻi, state, local, education, sports, arts, university or federal legal review was supplied.

This dossier freezes Stage A findings only. It does not authorize edits to M6, NSAG, NSAG infrastructure, or RN Selected Work.
