# Stage A recertification dossier — AI for Developing Brains

Audit date: August 13, 2026 HST  
Audit round: represented-site recertification R4  
Mode: read-only; no source, deployment, portfolio, or master-ledger edits  
Lenses: consumer, software engineering, software/product development, copy/IA, child-development science/law/policy communication, accessibility, brand strategy, and business partnership

## 1. Asset identity

| Field | Evidence-backed identity |
|---|---|
| Public name | **AI for Developing Brains**; page also uses **KIDS** |
| Canonical deployment | <https://kids-developing-brains.vercel.app/>; Vercel project `prj_Fn0yqi9bgyVTmv17Bdp259j0NBWo` |
| Repository | private/inaccessible `rn-collins/kids-developing-brains` |
| Parent | NSAG applied implementation, primarily M12; page additionally claims M4 and M6 extensions |
| Builder/commercial identity | RN Collins LLC / Aloha AI; workshop sales surface applying NSAG concepts |
| Artifact delivered | One public landing/framework page, five-item client-side checklist, pricing, and four broken lead paths |
| Artifact not evidenced | finished 20-page guide, workshop curriculum/slides, citations, dates/calendar, checkout, enrollment, recording, full report, school SOW, participant materials, fulfillment/support system |
| Public/privacy status | indexable, Vercel analytics/UTM capture, no privacy/terms; aimed at adults but about children; sends intended PII to NSAG API |
| Estate disposition | **P — retain one independent case as prelaunch/controlled concept; release-blocked** |

## 2. Executive verdict

The underlying need is real: families and youth-serving institutions need developmentally appropriate, rights-respecting ways to evaluate AI without collapsing all AI use into generic screen-time rules or vendor enthusiasm. A structured workshop and governance review could be a strong NSAG applied product.

The current site is **not a live workshop experience** and is unsafe to market as evidence-backed child-neuroscience guidance. It sells four tiers ($47, $27, $1,500, $3,500) but has no checkout, dates, curriculum artifact, completed guide, contract terms, or fulfillment path. Code admits the workshop page is not live and the guide is being finalized. More seriously, every enrollment/contact request is blocked by the site’s CSP and then shown as successful.

The evidence promise is also unsupported. The site contains no research citations. It promises parents they will understand “exactly how AI affects the developing nervous system at each age stage,” although current evidence is heterogeneous and emerging; authoritative child-AI guidance emphasizes rights, privacy, safety, developmental context, human oversight, and uncertainty rather than an established age-by-age causal neuroscience map. General evidence about responsive caregiving, toxic stress, ACEs, milestone screening, and screen/media use cannot prove specific effects of ChatGPT, tutoring, image generation, companions, or school automation.

Top risks:

1. **Guaranteed false-success commerce and contact:** CSP blocks NSAG API; all four lead flows still claim success.
2. **Unsupported developmental-neuroscience certainty:** no citations, no visible curriculum, categorical causal claims, “exactly”/“actual”/“primary-source” positioning.
3. **Undelivered paid products:** unfinished guide, no live workshop enrollment, no checkout/terms/refunds/recording consent.
4. **Invalid assessment framing:** five leading items produce NaN or partial-response percent scores and are called a governance assessment/full report.
5. **Child/privacy/school governance gaps:** no child-rights/data/vendor framework, adult-only notice, school procurement/data terms, recording/Q&A confidentiality, or personalized-advice boundary.
6. **Credential ambiguity:** “developmental psychologist — MA ... all graduate coursework completed” must be documented and phrased to avoid implying an awarded degree/licensure if neither applies.

Business decision: retain as a promising **prelaunch workshop and institutional-review concept**, but remove paid/live/evidence-certainty claims until curriculum, sources, professional review, fulfillment, privacy, commerce, and accessibility are real and verified.

## 3. Complete route map

Full evidence appears in [ROUTE_CONTROL_LEDGER.md](./ROUTE_CONTROL_LEDGER.md).

- `/` — only consumer page; 16 content sections.
- `/photo-rn.jpg` — portrait.
- `/_vercel/insights/script.js`, `/_vercel/speed-insights/script.js` — analytics.
- Google Analytics placeholder is blocked by CSP.
- `/api/track` — `404`.
- `/robots.txt` — allows crawling.
- `/sitemap.xml`, `/privacy`, `/terms` — `404`.
- No guide, workshop, checkout, calendar, recording, report, refund, accessibility, child-safety, or source route exists.

All 11 page anchors/destinations were inventoried; tested public product-family destinations returned `200`, and the stale RN Portfolio URL redirected to RN Selected Work.

## 4. Complete interaction/control inventory

- Reserve Spot CTAs in navigation, hero, public pricing, and capture section;
- Guide waitlist CTA;
- School and District inquiry CTAs;
- fixed Contact the Architect CTA;
- Enroll modal: name/email/submit/close/backdrop;
- Guide modal: name/email/submit/close/backdrop;
- Contact modal: name/email/message/submit/close/backdrop;
- inline capture: name/email/submit;
- five diagnostic questions × three radio options;
- Get My Score and generated Get Full Report;
- links to NSAG/M12/M4/M6, WNH, NARCH, DRU, Aloha AI, RN portfolio.

There are no actual HTML forms. JavaScript only checks whether email is blank. Browser-native required/type validation is bypassed.

## 5. Consumer journeys and observed results

### Parent seeking an evidence-based answer

The page is reassuring and clear about intended audience. It then promises exact developmental effects and age-stage rules without showing a single citation, age framework, evidence table, limitation, or actual protocol. The consumer cannot evaluate the promised expertise.

### Parent reserving the $47 workshop

No date/time, availability, instructor terms, checkout, payment, refund, or enrollment record exists. Entering email would call a cross-origin endpoint blocked by CSP; the code then displays “You're in!” and “Redirecting” despite no redirect. No submission was made in audit.

### Parent buying the $27 guide

The button says “Join the List,” not Buy. Modal discloses the guide is being finalized. The same blocked/false-success lead path says the parent is on a list. No PDF or delivery date exists.

### School/district procurement

The $1,500/$3,500 cards omit dates, travel, expenses, taxes, cancellation/rescheduling, accessibility, participant data, recording/redistribution rights, Q&A confidentiality, support limits, curriculum review, safeguarding, insurance, and contract/SOW. Contact delivery is false-success.

### Completing the “Rapid Diagnostic”

The button appears without completion enforcement. Zero answers produces `NaN%`; one top answer produces Advanced. Partial responses are normalized as complete. No instrument validity, scoring basis, or decision-use boundary exists. “Get Full Report” opens a broken contact modal.

### Educator evaluating child AI

Framework categories—age stratification, vendor incentives/data, caregiver interaction, stress/adversity, milestone protocols—are useful prompts. But the site offers no actual AI-tool rubric, child-rights assessment, privacy/security checklist, learning evidence standard, bias/accessibility review, human-oversight plan, or incident process.

## 6. Functional matrix

| Capability | Status | Evidence/result |
|---|---|---|
| Landing/framework content | Working static page | `200`, 80 KB HTML. |
| Pricing display | Working copy only | Four tiers shown; no commerce. |
| Workshop enrollment | Broken/false success | CSP blocks cross-origin lead; no enrollment/checkout/date. |
| Guide waitlist | Broken/false success | same; guide unfinished. |
| Contact/booking | Broken/false success | same; one-day response claim impossible. |
| Inline capture | Broken/false success | same; “check inbox” unsupported. |
| Workshop curriculum | Missing/unverified | no slides, agenda detail, citations, protocol, or session. |
| 20-page guide | Missing/prelaunch | no artifact; modal says finalizing. |
| Recording/Q&A | Undelivered promise | no session, consent, privacy, or access model. |
| Rapid Diagnostic | Broken/invalid | NaN/incomplete scores; unvalidated equal weights/thresholds. |
| Full report | Missing | CTA opens contact. |
| Research library/citations | Missing | named institutions only; zero research-source links. |
| Analytics | Partial/broken | Vercel scripts; placeholder Google tag blocked; `/api/track` 404. |
| Sitemap/privacy/terms | Missing | `404`; robots allows crawl. |
| Related links | Working | all tested destinations respond. |
| Build/tests/server | Unverified | private repo inaccessible. |

## 7. Copy and information architecture

### Strengths

- Calm tone and direct parent/educator framing.
- Concrete deliverable concepts and pricing hierarchy.
- Useful distinction between governance documentation and vague intent.
- Medical-advice disclaimer and explicit “hypothetical” labels on examples.

### Material corrections

1. Replace “what AI actually does to your child’s developing brain” with an uncertainty-calibrated question about known evidence, plausible mechanisms, observed learning/behavior risks, and unanswered questions.
2. Delete “understand exactly how AI affects ... at each age stage.” No such complete evidence is shown or plausibly settled.
3. Delete universal “primary-source backed,” “real neuroscience,” and “No agenda ... just research” until citations, methods, conflicts, and curriculum review are public.
4. “None of [the headlines] were written by a neuroscientist” is unsupported and rhetorically dismissive.
5. “Developmental psychologist — MA ... all graduate coursework completed” is internally ambiguous. State the awarded credential accurately; do not use a regulated/professional title if licensure/degree status does not support it.
6. Label offerings prelaunch and remove “Reserve,” “You're in,” “check your inbox,” one-business-day response, and paid availability until fulfillment works.
7. Rename Rapid Diagnostic to “Five-question reflection checklist”; remove percentage/readiness levels/full-report claim unless validated.
8. Keep NSAG/M12 as parent architecture, but reduce unrelated M4/cannabis and sibling marketing on the conversion path unless directly necessary.
9. Explain KIDS acronym or avoid it; current public title and acronym compete.
10. Link directly to RN Selected Work, not superseded RN Portfolio.

## 8. Child development, neuroscience, AI literacy, law, policy, and evidence ledger

| Claim/domain | Finding | Required treatment |
|---|---|---|
| AI effects on developing brains | Page promises exact age-stage effects but cites no AI-child study. AI use is heterogeneous by task, interface, duration, social context, model behavior, adult involvement, and child characteristics. | State uncertainty; separate direct evidence, adjacent evidence, hypothesis, and practical precaution. |
| AAP/2026 review | Current AAP review discusses potential benefits and risks across developmental stages, including misinformation, privacy, and anthropomorphism; it does not establish a universal causal brain-effects protocol. | Cite exact review and represent it as synthesis/guidance, not proof of every rule. |
| UNICEF child-centered AI | Current guidance foregrounds safety, privacy, fairness, transparency, accountability, participation, and child rights. Site barely addresses these. | Make child-rights/data governance central to institutional review. |
| UNESCO education guidance | Recommends age limits, privacy standards, teacher training, and caution because tools are under-researched. | Cite accurately, distinguish global guidance from binding local law, and avoid converting one age threshold into neuroscience fact. |
| Serve-and-return | Strong early-development framework, but “primary mechanism”/“literally builds brain architecture” is a translational formulation, not AI-specific causation. | Link primary/synthesis evidence; scope to early responsive interaction; do not imply every AI interaction displaces it. |
| Toxic stress/ACEs | Definitions are broadly recognizable, but dose-response correlation is not deterministic individual prediction; ACE checklists are not diagnoses or standalone clinical screens. | Add limits, equity/context, mandated-reporting/safeguarding boundaries, and referral guidance. |
| Milestone screening | Standardized tools can support screening; ASQ is proprietary and screening differs from surveillance/diagnosis. | Cite AAP/validated instrument evidence, authorization/licensing, age intervals, referral limits. |
| Screen/media guidance | General screen guidance is not automatically AI guidance; evidence differs across video chat, passive media, interactive learning, creative tools, companions, and academic outsourcing. | Avoid transfer fallacy; identify exact modality/outcome/population. |
| Executive-function outsourcing | Plausible educational concern, but hypothetical nine-versus-sixteen claim is not evidence of neurological harm. | Phrase as a question for task/design monitoring; measure learning/agency rather than infer brain damage. |
| “Most plastic years” | Neuroplasticity is lifelong and domain/sensitive-period specific; global “most plastic” language oversimplifies. | Name circuit/domain/age evidence and avoid one global developmental window. |
| Institutional “nervous-system regulation” | NSAG conceptual claim; “always,” “measurable incapacity,” and downstream causality are overbroad. | Label as framework proposition, define metrics, and distinguish normative governance from empirical outcome validation. |
| COPPA | Adult-facing page does not intentionally solicit child data, but title/topic can attract minors and there is no adult-only notice. Child-directed services/tools evaluated in workshops may trigger COPPA/operator duties. | State adult-only lead collection; do not collect child PII; include vendor COPPA assessment. |
| FERPA/student privacy | Workshop page is not itself a school record system, but school engagements and AI-tool evaluation can involve education records and state student-privacy laws. | Contractually prohibit student data in inquiries/Q&A; include FERPA/state-law/procurement review by qualified counsel. |
| Recording/Q&A | Personalized questions about a child can reveal health, disability, education, or family information; recording/sharing compounds risk. | Establish no-individual-advice rule, consent, Q&A exclusion/redaction, access/retention/deletion, redistribution terms. |
| Accessibility/equity | Developmental appropriateness also varies with disability, language, neurodivergence, access, culture, and assistive benefits. | Include disability/accessibility and avoid deficit-based assumptions or blanket age rules. |

The most defensible product is a parent/educator **evidence-and-governance workshop**, not a claim that neuroscience currently answers exactly what AI does to every child’s brain.

## 9. Accessibility and responsive findings

Positive: large type, responsive grid breakpoints, portrait alt text, visible question labels, buttons rather than click-only cards, email autocomplete, and backdrop close.

Serious gaps:

- no skip link/main landmark;
- no consistent keyboard focus styling; input outlines removed;
- three modals lack dialog semantics, accessible names, focus trap/entry/restore, and live status;
- Guide modal does not close on Escape;
- placeholder-only lead labels;
- success/failure is not announced;
- fixed contact overlaps possible on mobile;
- smooth motion has no reduced-motion preference;
- quiz result replaces content without focus/status management;
- no accommodation/accessibility statement for workshop, guide, captions, recording/transcript, interpreters, or school delivery;
- browser/mobile/touch/zoom/screen-reader/computed contrast unverified.

## 10. Brand architecture

This is appropriately **NSAG applied work** with M12 as parent, delivered commercially through RN Collins LLC/Aloha AI. The hierarchy should be explicit:

- Product: AI for Developing Brains workshop / institutional review.
- Framework: NSAG M12 Nervous-System-Aware Education Systems.
- Builder/delivery: RN Collins / Aloha AI.
- Portfolio: RN Selected Work.

Do not make the workshop appear equivalent to an independently validated clinical/neuroscience standard. M4 cannabis and M6 sponsorship extensions need a clear reason and should not crowd a parent-focused sales page. The current mix of KIDS, NSAG M12, RN Collins LLC, Aloha AI, RN Builds, sibling modules, and health tools fragments trust.

## 11. Business model and conversion

Potential buyers: parents, educators, schools, districts, youth-serving organizations, pediatric/child-development programs, and ed-tech governance teams. Economic value could come from evidence translation, staff/parent education, vendor review, and institutional policy design.

Current commercial state is prelaunch:

- $47 public workshop: no date/checkout/enrollment/curriculum.
- $27 guide: unfinished.
- $1,500 school / $3,500 district: no SOW, logistics, rights, terms, or working inquiry.
- “full report”: absent.

Smallest coherent launch:

1. finish and peer-review a source-linked guide/curriculum;
2. pilot one dated workshop with adult-only registration, real checkout/terms/accessibility and bounded Q&A;
3. publish a school SOW and child-data/recording safeguards;
4. treat institutional scoring as facilitated issue-spotting, not validated assessment;
5. gather feedback without claiming neurological outcomes.

## 12. Security, privacy, child safety, and operations

- CSP blocks all intended cross-origin NSAG API lead calls; false success is guaranteed.
- NSAG API is independently release-blocked for auth, URL-key, PII, and false-success risks; it should not receive new integrations.
- Intended lead payload contains adult name/email/message/source plus UTMs. No consent, privacy, retention, deletion, recipient, processor, breach, or unsubscribe details.
- Adult-facing intent is unstated; no child should submit personal information.
- Contact/Q&A copy invites details about a child’s age/situation, risking health/education/family disclosures through insecure channels and recordings.
- Vercel analytics and session UTM storage are undisclosed; Google tag is placeholder/blocked; custom tracking is broken.
- No checkout/payment occurs, reducing immediate payment-card risk but making paid claims false.
- No safeguarding, crisis, mandated-reporting, professional-referral, recording-consent, data-minimization, or school-contract boundary exists.
- Private source prevents build/dependency/secret/log/test inspection.

## 13. Ranked defects

### P0 — blocking

None proven as an active child-data breach or payment loss. Public release of paid/health guidance remains blocked.

### P1 — serious

1. All enrollment/contact flows are guaranteed false success by CSP.
2. Paid/live products and fulfillment are materially unavailable.
3. Exact causal neuroscience/age-stage promises have no citations or visible curriculum.
4. Personalized child Q&A/recording and PII lack privacy/safeguarding boundaries.
5. Rapid Diagnostic produces invalid NaN/partial scores and is misrepresented as assessment/report.
6. Credential/title ambiguity could mislead consumers about qualifications/licensure.

### P2 — material

1. No privacy/terms/refunds/cancellation/accessibility/recording/source/methods pages.
2. Broken tracking, placeholder Google analytics, missing sitemap.
3. Modal/keyboard/focus/contrast/reduced-motion defects.
4. Missing child-rights, vendor data, fairness, explainability, incident, and efficacy criteria.
5. Brand/practice fragmentation and stale portfolio URL.

### P3 — polish

1. No OG/social image or Twitter metadata.
2. Repetitive “no panic/no hype/real” positioning.
3. Generic module links rather than precise evidence anchors.

## 14. Exact Stage B remediation plan

Private source filenames must be confirmed before editing; targets below refer to visible production surfaces.

1. **Landing copy:** change all exact/causal/primary-source claims to uncertainty-calibrated evidence translation; label prelaunch.
2. **Evidence curriculum:** publish claim/source ledger with population, age, modality, task, study design, outcome, limitations, date, and direct citation; secure developmental neuroscience, pediatrics, education, child-rights, privacy, and legal review.
3. **Credentials:** verify awarded degrees and experience; use accurate non-licensed titles; state not a clinician/medical provider if true.
4. **Products:** finish guide/curriculum before sale; publish dates, capacity, delivery, recordings, captions/materials, support, refund/cancellation/reschedule, travel/tax, licensing/redistribution terms.
5. **Commerce/enrollment:** use a real approved payment/registration flow; remove success until server-confirmed; test failure/duplicate/confirmation/refund.
6. **Lead integration:** do not use release-blocked NSAG API; implement secure same-origin or approved service, CSP alignment, validation, abuse controls, consent, retention/deletion, accurate status.
7. **Privacy/child safety:** adult-only registration, no child PII, bounded questions, recording consent/redaction, safeguarding/referral, school/student-data contract, privacy/terms/accessibility pages.
8. **Workshop content:** separate AI literacy, learning/pedagogy, privacy/safety/rights, developmental considerations, and uncertain neuroscience; include benefits/accessibility as well as risks.
9. **Institutional rubric:** use UNICEF/UNESCO/AAP and applicable law as sources; cover necessity, efficacy, accessibility, fairness, privacy, security, transparency, human oversight, age/identity protections, vendor incentives, incident response.
10. **Diagnostic:** relabel as reflection checklist; require all questions or support “not answered”; remove percent/readiness labels/full-report claim unless validated; add rationale and limits.
11. **Accessibility:** semantic main/skip, complete modal dialog/focus/status, labels, focus-visible, reduced motion, quiz focus, captions/transcripts/accommodations; browser/AT testing.
12. **Metadata/analytics:** remove placeholder Google tag/broken tracking or configure disclosed analytics; sitemap/canonical/OG image; direct RN Selected Work URL.
13. **Testing:** commerce/contact failure states, CSP/network, quiz completion, keyboard/mobile/zoom/AT, source-link/currentness, pricing/deliverable consistency.

## 15. Estate disposition

**P — retain one canonical RN Selected Work case as a prelaunch NSAG-applied product; release-blocked.**

The concept is differentiated and strategically valuable, but “Live workshop experience” is false. If RN does not intend to finish/offer it, reclassify E/archive rather than maintain a public price sheet.

## 16. Exact RN Selected Work corrections

Current record corrections:

- **Status:** replace “Live workshop experience” with “Prelaunch workshop and institutional-review concept · release remediation pending.”
- **Purpose:** replace “explain how children’s developing brains interact with AI” with “help adults evaluate child-facing AI using emerging developmental evidence, child-rights guidance, learning goals, privacy/safety controls, and explicit uncertainty.”
- **Researched:** clarify that the live site presents an authored framework; it does not expose the primary-source research needed to verify it.
- **Built:** replace “primary-source-grounded, ninety-minute ... workshop” with “a public prelaunch workshop architecture, NSAG/KIDS governance framework, five-question reflection checklist, pricing concepts, and inquiry interfaces.”
- **Demonstrates:** qualify as “developmental-evidence translation and curriculum/product design in progress,” not delivered outcome expertise.
- **Evidence:** state that no finished guide, workshop curriculum, citations, checkout, enrollment, recording, report, or fulfillment was inspectable; all four lead paths are blocked by CSP and falsely show success; diagnostic is unvalidated and broken for incomplete answers.
- **Health boundary:** no claim that AI is proven to cause specific brain effects at each age; educational, not medical/psychological advice or individualized child assessment.
- **Privacy/safety:** adult-only, no child information, Q&A/recording safeguards required before launch.
- **Framework boundary:** NSAG M12 is the parent framework; KIDS is an applied concept, not an independently validated assessment/certification.
- **Live action:** either remove live link until repaired or label it visibly as prelaunch/controlled prototype.

Suggested compact evidence statement:

> The public artifact verifies a prelaunch workshop/product architecture, six proposed governance dimensions, a five-question reflection checklist, four pricing concepts, and related NSAG pathways. It does not verify a completed workshop, 20-page guide, source library, enrollment, checkout, recording, institutional report, customer delivery, or developmental outcome. At the audited release, all lead paths were blocked by the site’s content-security policy while still displaying success, and the checklist could produce invalid or partial-response scores. Claims about children’s brains and AI require direct, age/task-specific evidence and qualified review before public delivery.

## 17. Evidence appendix and explicit unverified areas

### Production/source evidence

- complete public HTML and inline scripts;
- direct response headers/CSP;
- `/photo-rn.jpg`, robots, missing sitemap/privacy/terms/tracking checks;
- all visible related destinations checked for response;
- client flow and score logic inspected without submitting PII;
- current RN Selected Work record inspected read-only;
- accepted `audits/nsag-api/STAGE_A_DOSSIER.md` boundary applied to the intended lead integration.

### Authoritative/current evidence classes spot-checked

- American Academy of Pediatrics 2026 review of generative AI implications for families/pediatricians;
- UNICEF Guidance on AI and Children 3.0 (December 2025);
- UNICEF EdTech for Good Framework 2.0 (July 2026);
- UNESCO generative-AI-in-education guidance and child age/privacy/teacher-training recommendations.

These establish relevant child-centered governance categories and continuing uncertainty; they do not validate the site’s exact claims or proposed score.

### Explicitly unverified

1. Private repository, build/dependencies/tests, deployment SHA, secrets, logs, storage, and any unpublished curriculum/source files.
2. Awarded credential/licensure/employment documentation; biography was not independently certified.
3. Any actual workshop, guide, customer, payment, booking, recording, report, fulfillment, refund, or support operation.
4. Any lead delivery; no PII was submitted, and CSP proves the current browser request is blocked.
5. Browser-executed mobile, keyboard, screen-reader, zoom, contrast, modal, and runtime console behavior.
6. Scientific validity/reliability/outcomes of KIDS dimensions, five-point protocol, or Rapid Diagnostic.

## Stage A decision

Freeze this dossier. Retain **P** only as a prelaunch NSAG M12 applied concept. Hold paid/live/health/assessment claims until evidence, curriculum, credentials, commerce, fulfillment, privacy/child safety, lead delivery, and accessibility are remediated and independently verified.
