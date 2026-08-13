# WNH — Women’s Neuro-Health — Stage A Recertification Dossier

Audit date: August 13, 2026 (HST)  
Stage: A, read-only represented-site recertification  
Recommended disposition: **C — release-blocked NSAG Applied component; consolidate under the canonical NSAG case rather than count as a standalone portfolio build**

## 1. Canonical identity, repository, deployment and disposition

- **Repository:** private `rn-collins/wnh-guide`, branch `main`, inspected tree `4d25dae7f4b4281cd682359a263761067341faf9`.
- **Complete tree:** `index.html` (56.6 KB), `robots.txt`, `vercel.json`. No guide files, reports, evidence database, source registry, checkout, API, tests, methodology, update job or delivery system exists.
- **Deployment:** public/indexable `https://wnh-guide.vercel.app/`; Vercel project `prj_Qtfv2tb4YdUf6skGXKDmeJW9FFCi`.
- **Canonical parent:** Neurocognitive Systems Advisory Group (NSAG), applying M3, M4 and M9. Aloha AI receives technical-site attribution only.
- **Correct disposition:** `C`, not current `P`. WNH is explicitly described in its own source as “not a standalone product,” deploys existing NSAG principles/modules, and has no independently delivered product. It should be a named NSAG Applied implementation within one NSAG parent case until a real, separately governed guide/evidence product exists.
- **Count:** one repository/deployment asset in the estate; **zero additional standalone portfolio-build count**. Do not count four proposed guide volumes, the quiz, or the evidence list as builds.

## 2. Executive verdict

WNH identifies an important problem: biomedical evidence and clinical communication often fail to report or appropriately apply sex-related differences, and people deserve transparent statements about study population, design, uncertainty and applicability. The six-domain framework—evidence disaggregation, life stage, disclosure safety, clinician competency, psychiatric-risk communication and patient-facing communication—could support a careful institutional audit.

The public site is not safe to publish as a primary-source health guidance system. Its complete “Annotated Evidence Library” contains four citations, and all four displayed DOI identifiers fail identity verification:

1. `10.1016/j.drugalcdep.2012.11.009` resolves to Goodwin et al., **Mental disorders and smoking trajectories**, not a Craft cannabinoid-receptor/estrous-cycle study.
2. `10.1038/npp.2015.302` resolves to Doyle & Berrettini, **Somatic DNA Variation in Brain as a Source of Risk for CNS Diseases**, not Cooper and Haney cannabis self-administration research.
3. `10.3389/fphar.2021.625348` did not verify as the claimed Shao psilocybin sex-differences article through the searched authoritative/indexed sources; the exact DOI/title pairing must be treated as unverified/incorrect until publisher confirmation.
4. `10.1097/GME.0000000000001972` resolves to Yeganeh et al., **Positive impact of a co-designed digital resource for women with early menopause**, not a cannabis-use patterns survey.

The site then uses those nonmatching citations to recommend cycle-aware THC dosing and to claim measurable luteal-phase sensitivity, female dependence acceleration, lower-dose effects and menopause-response moderation. This is a P0 evidence-integrity and health-safety failure.

The site also advertises four paid guides and a $197 bundle, but the cards are inert `<div>` elements and no guide, sample, checkout, fulfillment, clinical review or purchase/delivery mechanism exists. The five-question readiness quiz is an unvalidated self-score. “Get the Full Report” only opens a contact modal. Contact sends potentially sensitive health-related free text to an external API without privacy terms and closes on any resolved response.

## 3. Complete route, asset and API surface

| Route | Live result | Finding |
|---|---:|---|
| `/` | 200 | only public page; sales/framework/evidence/quiz/contact |
| `/robots.txt` | 200 | `Allow: /`; indexable |
| `/sitemap.xml` | 404 | linked in head but absent |
| `/api/track` | 404 | source POSTs scroll data here |
| arbitrary route | 404 | no guides, reports, evidence pages or purchase routes |

External surfaces: personal Northeastern BookWithMe, NSAG site/module anchor, NARCH, AI for Developing Brains, SPORT, retired Myelin CE, Nervous System Studio, Aloha AI, retired RN portfolio, and `nsag-api.vercel.app/api/lead`. No DOI is a link; users cannot inspect the claimed sources from the page.

## 4. Full control and consumer-journey audit

- WNH brand returns to `#`; NSAG link goes to the parent site.
- Two discovery-call links open a personal Northeastern booking identity; no direct purchase exists.
- Five guide prices are display-only. Cards have hover styling that implies interactivity but are not links or buttons.
- Five-question readiness diagnostic renders 0/1/2 radio responses, requires all answers, computes percentage and replaces the quiz with Early Stage/Developing/Advanced.
- `Get the Full Report` opens contact; no report is generated.
- Contact collects required name/email and optional free-text message, posts to external NSAG API, then resets/closes without checking `response.ok`. Network errors are swallowed. No consequential submission was made.
- Fixed contact and overlay close work by mouse. No Escape, dialog semantics or focus management.
- Four citations are rendered as plain DOI text, not navigable or machine-checked evidence records.
- Hypotheticals are visually labeled, positive. However one “after” hypothetical becomes direct dosing/timing guidance and is written as established evidence, defeating the label’s protection.

## 5. Actual functionality versus represented delivery

| Capability | Verified reality | Representation |
|---|---|---|
| six-dimension framework | authored prompts | observable/scored NSAG assessment |
| readiness diagnostic | client-only five-question self-score | organizational governance readiness |
| report | absent | “Get the Full Report” |
| four guide volumes | absent | priced at $47/$97 |
| bundle | absent | priced at $197 |
| checkout/delivery | absent | pricing presentation implies availability |
| annotated library | four records; all DOI identities fail | “Primary Sources, Actually Read” |
| evidence grades | undefined authored labels | clinical confidence architecture |
| clinical review | absent | usable in clinical encounters/patient counseling |
| assessment scoring/gap analysis | absent | claimed NSAG Applied deliverable |
| continuous currentness | absent | “reviewed and current as of August 2026” |
| contact | external lead request only | working-looking inquiry |
| analytics | Vercel telemetry; missing track API | undisclosed |

## 6. Scientific evidence-integrity audit

### Citation identity failures

The four DOI mismatches above are independently dispositive. A site claiming “primary sources, actually read” must stop publication until every citation is reconstructed from publisher/PubMed/Crossref records and every claim is traced to exact tables/results.

### Unsupported or overstated claims

- “The female nervous system is not a male nervous system with a different hormone profile” is rhetorical biological essentialism, not a precise scientific proposition. Sex-related patterns are population-level, overlapping, context-dependent and do not determine an individual response.
- The page conflates sex, gender, hormones, anatomy, age and life stage. It needs inclusive applicability language for cisgender women, transgender/nonbinary people, intersex variation, hormonal therapy, contraception, pregnancy/lactation, hysterectomy/oophorectomy and irregular/no cycles.
- Receptor density, metabolism and psychiatric risk are asserted broadly without correct citations or effect sizes.
- Animal estrous-cycle evidence cannot establish human menstrual-cycle dosing.
- “luteal phase days 15–28” is not universal; cycle length and ovulation vary.
- Progesterone metabolites’ GABA-A activity does not by itself establish altered cannabinoid sensitivity, direction, magnitude or clinical dosing.
- “same dose will have measurably different effects” and “THC sensitivity is elevated during the luteal phase due to progesterone-CB1 interactions” are unsupported here and unsafe as patient/clinician guidance.
- A cross-sectional cannabis-use survey can describe use, motives and perceived benefit; it cannot show efficacy or hormonal moderation. The actual Alberta survey indexed in PubMed concluded that safety/efficacy research is needed.
- “females develop dependence more rapidly,” lower-dose effects, anxiety, psychosis and perimenopause differentials require outcome-specific, design-specific evidence and cannot be universalized.
- Psilocybin and MDMA are repeatedly grouped although they differ pharmacologically, evidentially and legally.
- “guidelines lag primary sources by years” wrongly suggests individual early studies should supersede systematic clinical guidance. Primary sources require synthesis, replication, risk-benefit review and clinical expertise.

Required evidence record fields: verified identifier/title/authors/year/journal; population and sex/gender ascertainment; exposure/intervention/comparator/outcome; sample size; design; effect estimate/uncertainty; limitations; directness; replication; safety; funding/conflicts; applicability; source-review date; reviewer; correction history.

## 7. Health, clinical and harm-reduction boundary

The medical-advice banner does not neutralize detailed dosing/timing and patient-counseling claims. The site targets clinicians and patients, sells “guides,” and states that outputs are usable in clinical encounters/personal decisions. This is health guidance.

Release requires qualified clinical, pharmacology, women’s-health/reproductive-health, psychiatry/addiction and evidence-synthesis review. Consumer materials need clear emergency/red-flag routing and contraindication boundaries, including acute psychiatric symptoms, suicidality, psychosis/mania risk, pregnancy/lactation, medication interactions, cardiovascular risk, impairment/driving, dependency, adolescent use and product contamination/potency.

WNH must not provide individualized dosing, diagnose, imply informed consent, recommend illegal/unapproved treatment, or suggest a clinician should replace guidelines with unvalidated source interpretation. It may teach better questions: what evidence applies, what was not studied, what risks/contraindications exist, what legal/product context matters, and what to discuss with qualified care.

## 8. Legal, regulatory, policy and informed-consent audit

- The page says “FDA 2016 mandate to include sex as a biological variable in preclinical research” and cites FDA Docket `FDA-2014-D-0508`. The relevant SABV policy is NIH Notice `NOT-OD-15-102`, effective for NIH grant applications beginning January 25, 2016. It is an NIH funding-policy expectation, not an FDA mandate on all preclinical research.
- Sex-disaggregated evidence can improve counseling but the site cannot declare that omission is legally inadequate informed consent across jurisdictions/settings. Informed-consent duties are jurisdiction-, profession-, intervention- and fact-specific.
- Cannabis remains controlled federally and state laws vary; psilocybin/MDMA access, approval, prescribing, trials and state/local programs differ. No legal-status map or as-of methodology exists.
- “Regulatory reporting” and EHR disclosure safety are oversimplified. Privacy, mandatory reporting, child welfare, employment, insurance, professional licensing and record-access consequences vary. Institutions need counsel-approved policies, not a blanket safe-disclosure claim.
- Paid clinician materials require clear authorship, reviewer credentials, conflicts, intended audience, jurisdiction, CE/non-CE status, update/withdrawal policy and no institutional endorsement.
- Personal Northeastern booking and JD-candidate presentation must not imply university authorization, clinical licensure or legal counsel.

## 9. Readiness diagnostic and measurement validity

The five questions measure self-reported presence/awareness of sex-differentiated practices. They do not measure clinical quality, patient safety, competence, guideline concordance, evidence validity, equity, legal compliance or health outcomes.

All questions receive equal 0/1/2 weights; 50 and 80 thresholds have no validation, normative sample or uncertainty. “Most WNH organizations score here” has no cohort evidence. One item rewards using menstrual-cycle research to inform dosing/timing despite the site not establishing a clinically valid basis. The quiz can therefore reward unsafe practice.

No construct specification, domain blueprint, content-validity review, reliability, inter-rater method, criterion validation, evidence verification, population calibration, applicability/risk tier or appeal exists. Reframe as a non-scored reflection checklist until validated. Never call the result readiness, governance quality, safety or report.

## 10. Privacy, confidentiality, security and data flows

- Contact name, email and free text are transmitted to `nsag-api.vercel.app`; users may disclose substance use, mental health, reproductive history or clinician/patient details.
- No privacy notice, controller, purpose, lawful basis/consent, processor, retention, security, deletion/correction route, sensitive-data warning or HIPAA/non-HIPAA statement exists.
- Do not collect patient data, protected health information, identifiable case narratives or clinical advice requests through a generic lead form.
- Code treats 4xx/5xx as success because it never checks `response.ok`; rejection is silent. Add pending, confirmed success, failure, retry and request ID.
- No CAPTCHA/spam, rate-limit contract, CSRF/origin policy or incident route is visible at the external API.
- UTM source/medium/path are posted to missing `/api/track` after scroll; endpoint returns 404.
- Vercel Insights/Speed Insights load without disclosure.
- Headers provide frame denial, nosniff, referrer and permissions controls. CSP is absent in repo; HSTS is present in observed production response. No dependencies/secrets/backend exist in the three-file source.
- Repository privacy does not protect the public health claims or lead collection.

## 11. Accessibility, mobile and inclusive communication

Positive: `lang=en`, responsive viewport, semantic page headings in the original section, native radios/links/buttons, mobile guide-card stacking, visible medical disclaimer, and labeled hypotheticals.

Defects:

- `<footer>` appears before most substantive content, breaking document/landmark order;
- no skip link; sticky navigation may obscure anchors;
- guide rows look interactive but are inert, confusing sighted/keyboard users;
- radio groups lack `fieldset`/`legend`; `alert()` validation and replaced results are not announced;
- contact modal lacks `role=dialog`, `aria-modal`, accessible name, labels, Escape, focus placement/trap/return and inert background;
- placeholder-only contact inputs; small 11–13px text; muted green/gray contrast requires measurement;
- fixed contact can obstruct mobile; 2-column domain grid lacks narrow breakpoint;
- no reduced-motion preference despite smooth scroll/hover transforms;
- DOI strings are not links, harming source access;
- binary female/male framing excludes relevant users and obscures the distinction between sex-related evidence and gendered care.

## 12. Copy, brand, affiliation and authorization findings

- “Primary-source guidance” and “research exists” are contradicted by the citation failures.
- “No advocacy. No anecdote. Peer-reviewed evidence” implies neutrality/rigor without a method, reviewers or correction process.
- “hundreds of studies” is unevidenced; the visible library has four invalid records.
- “most guidance ignores this,” “providers routinely asked,” “most have no training,” 35% vs 5% EHR documentation and adverse-event-consequence claims need exact sources, populations and dates.
- “WNH closes the visibility gap” is a product outcome the static page cannot achieve.
- “assessment delivers scored gap analysis” is absent.
- “four volumes” and live prices imply completed/purchasable products; none exists.
- `Moderate-Test`, A/B/C grades have no published scale and create false precision.
- Professional suffix `M.S., J.D. Candidate` is not clinical licensure. No physician, pharmacist, psychologist, addiction specialist, OB-GYN or systematic-review authorization/review is named.
- Booking through Northeastern and university credential copy need non-affiliation/non-endorsement clarity.
- Myelin CE is retired/broken and should not be promoted; Nervous System Studio’s known evidence/product limits must carry through.

### RN portrait and authorship criterion

- No RN portrait asset or author headshot appears in the three-file WNH repository or public page. That is not itself a defect: a health-evidence page should lead with verified evidence governance and reviewer accountability, not founder imagery.
- Authorship is currently limited to the footer line `RN Collins, M.S., J.D. Candidate` and technical “Built by Aloha AI” strip. The page does not identify who wrote, verified, clinically reviewed or approved any evidence record or clinical proposition.
- A portrait must not be added to imply clinical authority. First add a visible **Authorship, review and conflicts** block after the methodology/limitations introduction and before any evidence library: RN’s full name; exact nonclinical role; relevant earned degree; source-review role; no clinical licensure if applicable; independent clinical/pharmacology/evidence reviewers; review dates; conflicts; correction contact.
- If a portrait is strategically used after those controls exist, use the canonical RN Selected Work portrait source—not a copied or stale image—once on a compact author card near that authorship block. Do not repeat it in hero, pricing, contact and footer. Preserve the full face at desktop/mobile, use a deliberate square/4:5 crop rather than CSS stretching, supply descriptive alt such as `Rayven-Nikkita Collins, WNH framework author`, verify nonbroken loading and adequate resolution, and link the name to canonical RN Selected Work/About.
- Social/OG metadata currently contains no author/portrait image. Add an evidence-led WNH OG card or neutral branded graphic; do not use RN’s portrait as the default clinical-evidence preview unless the page is explicitly framed as an authored commentary. Metadata author identity, visible byline, footer name, NSAG ownership and RN Selected Work case must use the same full name and role.

## 13. NSAG/Aloha AI architecture and portfolio-count decision

WNH is conceptually NSAG Applied: it applies NSAG M3/M4/M9 and NSAG principles P11/P13/P15/P16 to an evidence/communication domain. Aloha AI can build the technical publishing/evidence system but cannot be the clinical authority or framework owner.

The source explicitly says the guide series “is not a standalone product.” The repository has no guide product and reuses the same six-dimension/diagnostic/signal-noise/hypothetical/glossary/site shell seen across NSAG applied deployments. Therefore the defensible count treatment is:

1. retain the repository/deployment in the estate ledger;
2. disposition `C`, canonical parent `nsag-site`/one NSAG case;
3. show WNH as a named applied example within the NSAG case after evidence remediation;
4. do not count it as an additional build or independent paid product;
5. reassess `P` only if it gains verified, clinically reviewed guides/evidence infrastructure, independent delivery and governance.

## 14. Business/product viability and delivery

Potential buyers include health systems, clinician educators, harm-reduction organizations and evidence-communication teams. Consumers should not be the first paid launch audience because individualized misinterpretation risk is high.

The credible initial product is a **human-reviewed evidence-gap and communication audit**, not consumer dosing guidance: define scope; verify literature; map evidence directness/limitations; compare current institutional materials; identify unsafe omissions; co-review with clinical/legal owners; deliver a dated change log and patient-communication recommendations.

Current offer has no guide contents/sample/page count, authors/reviewers, references, update entitlement, refund/license, clinical scope, accessibility format, delivery date or checkout. Prices are not meaningfully supportable. Remove prices until fulfillment exists. Consider an open correction notice before any future commercial launch because invalid citations were publicly presented as read primary sources.

## 15. P0–P3 remediation register

### P0 — immediate publication block

1. Remove/noindex the public site and all RN Selected Work live links until the four false/mismatched DOI records and derivative claims are corrected.
2. Remove cycle-aware THC dosing/timing, “measurably different,” elevated luteal sensitivity and other clinical claims unsupported by verified evidence.
3. Remove prices/guide availability; no guide, purchase or delivery exists.
4. Correct NIH/FDA SABV attribution.
5. Stop calling the library primary-source/current or the output clinical guidance until independent review completes.
6. Add accountable byline/reviewer/conflicts information; do not use a portrait to substitute for clinical authorization.

### P1 — high

1. Commission qualified multidisciplinary clinical/evidence review and publish reviewers/conflicts/method.
2. Rebuild source registry with identifier verification and claim-level traceability.
3. Replace self-score with non-scored reflection; remove unsupported cohort statement and unsafe dosing item.
4. Add health/urgent-risk, legality, evidence-applicability and no-individualized-advice boundaries.
5. Add privacy/sensitive-data controls and reliable contact semantics.
6. Consolidate WNH under one NSAG case; correct Aloha AI to technical role only.

### P2 — material

1. Create actual versioned guides only after review, with update/withdrawal/correction systems.
2. Add inclusive sex/gender/life-stage applicability framework.
3. Fix footer/document order, source links, modal/quiz accessibility, mobile grid and reduced motion.
4. Remove retired Myelin link, stale portfolio link, broken tracking and missing sitemap; add canonical/CSP.

### P3 — polish

1. Add evidence filters/comparison only after data validity.
2. Add plain-language uncertainty glossary and reviewer history.
3. Replace sloganistic/categorical language with calibrated propositions.

## 16. Exact RN Selected Work corrections and release gates

Remove the standalone Build Atlas record from the individual-build count and represent WNH inside the canonical NSAG case as an applied concept.

If a temporary record must remain during migration, use:

- **Title:** `WNH — Women’s Neuro-Health Evidence-Governance Concept`
- **Category:** `NSAG Applied · health evidence communication`
- **Practice:** `NSAG Applied`
- **Status:** change `Live guidance system` to **`Release-blocked framework concept`**.
- **Purpose:** `Explore how institutions could disclose the population, sex/gender reporting, life-stage applicability, uncertainty and limits of cannabis and psychedelic evidence in clinical and public communication.`
- **Built:** `A public concept page outlining six proposed governance dimensions, a four-volume guide-series concept, a five-question self-reflection quiz, hypotheticals and an initial evidence-record design.`
- **Evidence/limits:** `The current public prototype is not a clinically reviewed guidance system, evidence library, completed guide series, purchasing/delivery system, validated assessment or patient decision tool. Its four displayed DOI citations do not match the attributed papers and findings and require complete correction; derivative clinical/dosing claims must not be relied upon. The quiz is self-attested and unvalidated. WNH provides no medical advice, diagnosis, informed consent, individualized dosing, safety or efficacy determination.`

Release gates: independently verify every source; clinical/legal/evidence review; complete correction log; remove unsupported dosing; real guide artifacts and delivery; privacy/terms; accessibility; source/currentness operations; noindex lifted only after re-audit.

## 17. Evidence inspected, seven-role synthesis and audit limitations

**Consumer:** polished and comprehensible, but pricing/inert cards and authoritative medical language create false product/safety expectations.  
**SWE/security:** three-file static site; no product backend; missing tracking/sitemap; external lead; incomplete error/privacy/security architecture.  
**Product:** framework and self-score only; guides/report/purchase/delivery simulated or absent.  
**Copy/editorial:** absolute and universal language; evidence/offer/currentness claims exceed proof.  
**Science/health/legal/policy:** all four DOI identities fail; unsafe derivative dosing; NIH/FDA error; no clinical authorization or jurisdictional method.  
**Brand:** NSAG Applied component; Aloha AI technical attribution; institutional credential ambiguity.  
**Business:** potential audit/communication service after reconstruction; no current sellable guides.

Evidence inspected: complete private repository tree/source/config; live root/robots/sitemap/tracking/unknown-route status and headers; every section/link/button/radio/form/script; all four DOI identities against indexed/publisher/academic records; NIH SABV primary policy; existing estate and RN Selected Work mappings. No form, booking, purchase or other consequential action was taken. Paywalled full texts, unprovided guide files, private customer materials and external NSAG API internals were unavailable; none can cure citation-identity failure.
