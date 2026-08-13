# ownership-platform / Institutions of One — Represented-site R5 Stage A dossier

**Audit date:** August 13, 2026 HST  
**Disposition:** **P — canonical featured independent research/editorial platform; retain with instrument, claims, privacy and product-boundary corrections**  
**Repository:** private `rn-collins/ownership-platform`, branch `main`  
**Production:** <https://ownership-platform.vercel.app/>  
**Audited deployment:** `dpl_9YqRUMtvSiNH5fN7f4x7gRL9y1LY` (deployment ID exposed in production assets)

## 1. Executive verdict

Institutions of One is a real, unusually ambitious public research/editorial product—not merely a hidden Ownership Platform. The live sitemap exposes **62 routes**: 21 public framework, assessment, editorial, participation and governance routes plus 41 named Observatory cases. All 62 returned 200. `/login` and `/unsubscribe` add two reachable public utility routes; `/dashboard`, `/research/admin`, and `/research/observatory` correctly redirect unauthenticated visitors to login. The site includes two interactive 20-item pilot assessments, deterministic results and action plans, a 41-case linked-source Observatory, comparison/dependency/countercase tools, four editorial editions, methodology/evidence/documentation pages, nomination, interview, newsletter and partnership journeys, privacy controls, authentication scaffolding and a substantial versioned research/evidence schema.

The case-study language currently understates the public artifact while overstating its research maturity and private-product boundary. The two instruments are **authored, provisional, unvalidated self-report questionnaires** using equal-weight additive 0–100 scores and authored cutoffs. Yet result pages display composite scores, pattern labels, exact projected gains and imperative legal/business steps such as filing trademarks, changing contracts and creating entities. The “working implementation,” “evidence-governed research infrastructure,” “capability measurement,” and private participant operations are credible as code architecture, but the audit did not establish completed validation, representative participation, activated instruments, research ethics oversight, live longitudinal use, customer outcomes or legally effective ownership.

Retain one featured **Institutions of One** case study, explicitly treating the Ownership Platform as its technical implementation. Position the present achievement as research-program architecture, public case analysis, evidence/source design and exploratory self-reflection—not a validated ownership/capability measure, valuation tool, legal-rights determination, portable credential, reputation system or operating research institution.

## 2. Asset identity, ownership and brand boundary

- Public title and copyright identify **Institutions of One**, an independent research and editorial project by Rayven-Nikkita Collins.
- Repository description still calls it “The Ownership Index — creator ownership scoring platform,” while README correctly says the programme is broader than a quiz. Normalize the repository/product language.
- Institutions of One owns the Build–Carry–Control–Continue inquiry, Observatory, candidate instruments and related research. It is not Aloha AI and not NSAG.
- Aloha AI may later build client-facing technical infrastructure or services; that does not convert I/1 research into Aloha AI IP or customer evidence.
- NSAG’s nervous-system-aware governance framework, modules, evidence and institutional assessments are separate. Do not imply I/1 validates NSAG or vice versa.
- RN Builds may document the work, but should not present participant data, admin interfaces or research operations.
- The site uses an active Northeastern student email for independent/commercial inquiries. A stable independent domain/email is preferable to avoid institutional affiliation and graduation-continuity confusion.

## 3. Complete route map

### Public/indexed routes

| Group | Count | Result |
|---|---:|---|
| Homepage | 1 | 200 |
| Methodology + candidate-method page | 2 | 200 |
| Assessment chooser + two instruments | 3 | 200 |
| Observatory index/tools/evidence/documentation | 6 | 200 |
| Observatory named cases | 41 | all 200 |
| I/1 Edit index + editions 001–004 | 5 | 200 |
| Partner, about, cognitive interviews, privacy | 4 | 200 |
| **Sitemap total** | **62** | **62/62 returned 200** |

Additional public routes: `/login` 200 and `/unsubscribe` 200/noindex. `/observatory?mode=compare` is a query state of the index. `robots.txt`, `sitemap.xml`, `site.webmanifest`, icon and OG image exist. Robots disallows APIs, dashboard, research/admin and selected guest/resources/teaching routes.

Protected routes inspected safely: `/dashboard` → 307 `/login`; `/research/admin` and `/research/observatory` → 307 `/login?next=...`. No credentials were requested, no private records were accessed and no consequential form/API submission was made.

The source also describes tenant/public creator pages (`/u/{handle}`), embed routes, creator-owned links/posts/subscribers, custom domains and Vercel domain automation. These are platform architecture, not demonstrated public customer deployments in this audit.

## 4. Complete interaction/control inventory

- Global header/footer: methodology, 41 cases, assessments, Edit, partner, dependency/countercase/apply/evidence/documentation, interview, about, privacy, email and LinkedIn.
- Observatory: domain/tension/kind filters, search, compare mode, 41 profile cards, nomination form, case-section anchors, browser-local counterfactual Case Lab, related/previous/next cases, source lists and optional claim-to-source details.
- Assessments: 20 one-at-a-time option buttons each, back/next, result, radar/bars, question/action plan, exact projected profile, share/copy, print-as-PDF, downloadable score card after newsletter opt-in, research opt-in and reset.
- Research/editorial: four editions, newsletter form with explicit consent, interview screening/participation journey, unsubscribe route.
- Commercial: partnership type selector, name/email/organization/message and submission status.
- Auth/private: email magic-link login; conditional dashboard; protected admin/studio.

Controls are generally honest about request success: newsletter and partner UI check `response.ok`. Nomination is an exception at the API layer: if the database is absent or a write fails, it returns 200 `{ok:true, stored:false}`, and the UI announces receipt. Anonymous benchmark writes also return success with `stored:false` on missing/failing storage, silently losing research data.

## 5. Consumer journeys and functional matrix

| Journey/feature | State | Finding |
|---|---|---|
| Understand framework/method | working | clear four-question concept and documented limits |
| Browse 41 cases | working | all case routes live; source depth varies and many remain explicitly provisional |
| Filter/search/compare cases | working public UI | useful exploratory comparison; not causal inference |
| Ownership Index | working deterministic pilot | 20 items, authored scoring/cutoffs, precise outputs; unvalidated |
| Portfolio Professional | working deterministic pilot | separate 20-item instrument; unvalidated |
| Anonymous benchmark capture | partial | complete-response validation and optional rate limit; fails soft with `stored:false` |
| Benchmark findings/percentile | partial | small-N guard 30; audit did not establish sufficient live sample or representative cohort |
| Case Lab | working local-only | explicitly says browser-only/not scored or stored |
| Newsletter | conditional live integration | DB + Beehiiv dual-write; fails visibly when Beehiiv unavailable |
| Nomination | false-success risk | can say received when not stored |
| Partner inquiry | conditional | successful if stored or emailed; appropriate error otherwise |
| Interview participation | implemented architecture | sensitive research-participant schema exists; ethics/operations not independently certified |
| Login | public | Supabase magic-link scaffolding; no safe submission made |
| Saved-results dashboard | disconnected/partial | protected page exists, but public assessments are anonymous and no observed journey attaches them to an authenticated creator |
| Creator pages/posts/subdomains/custom domains | proposed/architectural | schema/middleware exists; no public customer fulfillment verified |
| Export/PDF | partial | browser print and OG score-card action; no verified portable credential/data export |

The dashboard copy “watch it climb,” “the moves that raise it,” exact `+N` projections and “ownership has slipped” imply longitudinal construct validity and causal action effects the instrument does not have. The scoring engine only recalculates what happens if selected response categories rise by one; it does not predict that an action will cause a real-world ownership increase.

## 6. Copy and information architecture

Strengths: the homepage premise is memorable; Build/Carry/Control/Continue separates concepts effectively; framework limits are unusually visible; Observatory cases distinguish first-party from independent sources; public/private unknowns and provisional status are often disclosed; the site is deep without feeling like an admin tool.

Risks:

- “Ownership” moves among legal title, contractual rights, practical control, audience access, economic capture, professional capability, reputation and authority. These must remain separate, not collapse into one score.
- “Four questions reveal the structure beneath a career” and “How much you own” are stronger than the public evidence warrants.
- “Institution,” “institutional power,” “authority,” “durable,” “portable” and “evidence-governed” sound validated unless always paired with the programme’s research status.
- Result labels and action verbs turn reflection into prescription. “File a trademark,” “put a proper legal entity ... in place,” “work from your own contract,” and “stop assigning copyright” are jurisdiction- and facts-dependent legal/business advice.
- “Owned audience” and “owned channels” are useful strategy shorthand, not literal full ownership; email providers, hosting, privacy law, contracts, deliverability and third-party infrastructure remain dependencies.
- The I/1 Edit promises every-other-week publication; only four web editions were observed. State the actual cadence/status.
- Some repository comments still describe a value-return “quiz,” “score,” “watch it climb,” an “owned land” Beehiiv strategy and future brand domains, conflicting with the more careful public research language.

## 7. Research, legal, IP and economic claim ledger

### Instruments

Both instruments use five dimensions, four items per dimension, six ordered answer options, equal weights, an additive 0–100 composite and authored 30/55/80 cut points. That is transparent but not validation. The audit found no evidence establishing content validity, response-process validity, reliability, dimensional structure, measurement invariance, criterion/predictive validity, fairness, norms or clinically/professionally meaningful change. The repository itself says activation gates remain controlling.

“Confidence” defaults all self-report items to evidence tier 0.4 and labels them self-reported. This is not statistical confidence or measurement uncertainty and should not be called confidence without strong explanation.

### Ownership/IP/legal

- Copyright, trademark, publicity/likeness, AI/synthetic-media, contract, entity, data, employment, fiduciary and platform rights vary by jurisdiction, relationship and agreement.
- A worker may develop portable capability while being legally restricted from carrying confidential information, trade secrets, customer data, work product or IP.
- A trademark application/registration does not by itself establish broad ownership of a name; classes, territory, use, conflicts, enforcement and counsel matter.
- Retaining copyright or limiting usage is not universally available or always economically optimal; employment, commissioned work, collective bargaining, agency and negotiated consideration matter.
- References to the NO FAKES Act, EU AI Act and “the law catching up now” require current instrument/status, jurisdiction, effective date and primary authority.

### Economic and organizational

More streams, recurring revenue, direct audience data, an entity, delegation and continuity can reduce certain dependencies, but they do not automatically improve profitability, resilience, bargaining power, lawful ownership or enterprise value. “What a buyer actually pays for” and exact score lifts are not valuations. Institutional authority is not privately ownable in the same sense as IP or an asset; public office and employer mandates impose duties and succession rules.

### Observatory

Forty-one public-record career profiles are verified as published, not as saturated or subject-approved. Many pages intentionally show “provisional research record” and a July 2026 fallback review date when no live database review exists. Source lists include first-party, institutional, independent and occasionally social/secondary material. Public prominence, titles, product creation or company association do not prove IP ownership, causal impact, control, portability, authority or durability. No subject consent is required for ordinary public-source analysis, but correction, privacy, defamation/false-light, sensitive inference and living-person fairness controls remain essential.

## 8. Accessibility and responsive findings

Strengths: document language, semantic headings, explicit nav labels, native buttons/inputs, form labels in major inquiry flows, result chart `role=img`/labels, visible status/error roles, responsive CSS architecture and reduced reliance on hover-only interaction.

Material gaps:

- no global skip-to-content link was visible in the rendered shell;
- 20-step auto-advance can surprise keyboard/screen-reader users and lacks a clearly announced question/progress change;
- progress bars use visual div widths rather than `progress`/ARIA value semantics;
- result charts provide broad labels but not complete nonvisual tables/descriptions of every plotted value;
- nested `<button>` inside `<a>` appears in result/dashboard CTAs, invalid interactive nesting;
- form placeholder-only labeling exists in research opt-in name/email fields;
- comparison/filter focus, mobile navigation/reflow, 200–400% zoom, forced colors, keyboard-only and VoiceOver/NVDA were not fully evidenced in this recertification;
- print-as-PDF and OG score card require accessibility/alt/text equivalents.

## 9. Brand architecture

Institutions of One is differentiated enough to exist separately: its subject is portable capability, ownership, authority, dependency and continuity. Its editorial visual system and language are coherent. It strengthens RN's public identity when represented as an original inquiry and research architecture.

Keep boundaries explicit:

- **I/1:** independent research/editorial programme, Observatory and candidate instruments.
- **Aloha AI:** client-facing strategy/build practice that may implement separately scoped tools or services.
- **NSAG:** separate research-led institutional-design practice and nervous-system-aware governance framework.
- **RN Builds:** public workbench/portfolio describing evidence without becoming the research database.

Avoid “institution” as proof of institutional standing. The title is a thesis, not accreditation, university affiliation, standards authority or validated assessment provider.

## 10. Business model and conversion

The site targets creators, independent/portfolio professionals, employers/institutions, researchers, publishers/events and potential partners. Beneficiaries and buyers differ: individuals may want reflection; organizations may buy facilitated inquiry or structural analysis; publishers/events may commission work; researchers may collaborate.

The partner page creates a coherent lead path but no productized scope, pricing, SOW, deliverables, research/commercial conflict policy, data-use terms, IP allocation or service capacity is public. Keep this as inquiry-led applied research, not SaaS or a validated assessment sale. Do not sell ranking, selection, employment evaluation, credit, insurance, valuation or personnel decisions using candidate scores.

Plausible next commercial product: a bounded, human-led structural-dependency workshop using cases and qualitative prompts, with no individual ranking and a written separation between paid sponsor input and research publication/review. Organizational research sponsorship requires publication independence, conflicts disclosure, data/access controls and no sponsor influence over case conclusions.

## 11. Security, privacy, data and operations

The architecture has meaningful controls: Zod validation, optional Upstash rate limits, Supabase SSR auth, protected admin redirects, Prisma migrations, versioned methods, consent/withdrawal fields, immutable-style score events, audit/reviewer models, small-N benchmark suppression and security headers.

Material issues:

- rate limiting silently disables when Upstash is unconfigured;
- anonymous benchmark and nomination APIs return successful HTTP responses with `stored:false`, causing silent loss/false receipt;
- anonymous assessment IDs live inside a JSON research field and are browser-generated; deduplication is not a privacy/anti-manipulation guarantee;
- benchmark GET exposes aggregate distributions once `n≥30`; review re-identification, repeated-query and subgroup policy before expanding;
- research-participant schema contains email, name, access needs, availability, recording/quotation consent, meeting information, notes and researcher identity—sensitive research operations requiring least privilege, retention/deletion, encryption, incident response, data processing agreements and human-subjects/ethics determination;
- public privacy notice describes anonymous assessments, Beehiiv, deletion and Observatory corrections but does not fully enumerate Supabase, Postgres/Prisma, Upstash, Resend, Vercel/domain operations, authentication cookies, logging, retention periods, international transfers or separate research-participant handling;
- signed email deletion/access links and withdrawal tokens need expiry, rotation, hashing, replay, authorization and audit review;
- no Content-Security-Policy header was observed; `SAMEORIGIN` conflicts with the comment that `/embed/*` is partner-embeddable because `ALLOWALL` is not a standard X-Frame-Options value and duplicate/global header behavior requires testing;
- tenant custom-domain automation and user-authored posts/links raise SSRF, domain takeover, XSS/content moderation, email abuse and authorization questions not established as production-ready.

Build scripts run migrations, tests and Next build. The private repository could be inspected through the connected GitHub interface but not cloned locally, so this audit did not independently run `npm test` or `npm run build`. Production deployment and routes demonstrate a successful prior build, not full test correctness.

## 12. Ranked defects

### P1 — featured-case/research blockers

1. Unvalidated authored instruments produce precise scores, bands, projected gains and action plans that can be mistaken for measurement and causal prediction.
2. Legal/IP/entity/contract/AI-rights prompts are prescriptive without jurisdictional authority or professional-review boundary.
3. “Working implementation/evidence-governed research infrastructure” can imply activated, validated, operational research when major gates remain incomplete.
4. Dashboard/saved longitudinal product is disconnected from the anonymous public assessment journey; “watch it climb” is unsupported.
5. Sensitive cognitive-interview/participant infrastructure needs a separately certified ethics, privacy, security and retention regime before live recruitment/data collection.

### P2 — material

1. Benchmark and nomination APIs fail soft/false-success; optional rate limiting can be absent.
2. Public privacy notice is incomplete for the actual processor/data/auth/research architecture.
3. Observatory review fallback/date and public-source evidence do not establish ownership/control/impact for all 41 cases.
4. No CSP; embed framing policy likely ineffective; multi-tenant/custom-domain risks remain unverified.
5. Accessibility gaps in skip navigation, step announcement/progress, invalid nested controls, input labels and chart/report equivalents.
6. Commercial research/consulting scope, conflicts, IP, sponsor independence and fulfillment are undefined.

## 13. Exact Stage B sequence

1. Freeze “validated,” “measurement,” “confidence,” causal score-lift, valuation and activated-research implications; publish exact candidate status/gates.
2. Replace imperative legal/business actions with issue-spotting questions and current primary-authority/professional-review notices; conduct jurisdiction-specific legal review.
3. Disconnect numeric precision from unsupported meaning: emphasize dimensional self-reflection; explain authored scoring/cutoffs and uncertainty; do not use scores for third-party decisions.
4. Complete cognitive interviews and pre-specified pilot/validation/fairness gates with independent methodological review before activation or norms.
5. Reconcile anonymous assessment, account creation, saved results and dashboard; never imply storage when `stored:false`; define deletion/access linkage.
6. Make every write fail honestly, require configured rate limits in production and add abuse/idempotency/monitoring controls.
7. Publish complete privacy/research-participation notices, retention schedule, processors, data map, ethics determination, correction and incident process.
8. Review all 41 cases claim-to-source, living-person fairness, checked dates and status; remove generic fallback review implications.
9. Add CSP and test embed policy, auth/admin authorization, tenant/custom domains, user content and signed data-rights links.
10. Repair accessibility and complete keyboard/screen-reader/zoom/mobile/print verification.
11. Define applied-research offers, sponsor independence, SOW, IP/data ownership and brand boundary before commercialization.
12. Run repository tests/build plus a full 64-public-route and protected-route regression before lifting qualification.

## 14. Exact featured-case corrections

Retain one featured case titled **Institutions of One**, with **Ownership Platform** described as its technical implementation—not as a second build.

- **Status:** “Independent research and editorial programme · public research platform live · instruments remain provisional and unvalidated.”
- **Summary:** “An independent inquiry into what people build, can lawfully carry, control and continue across changing jobs, platforms, clients and institutions. Its public platform combines a four-part framework, 41-case Observatory, four editorial editions, two candidate self-reflection instruments, evidence/method documentation and participation/partnership pathways.”
- **Built:** “A 64-route public Next.js research platform plus protected operations architecture: 41 source-linked public career cases; search, filters, comparison, dependency and countercase tools; two interactive 20-item pilots; deterministic result/action interfaces; editorial, methodology, privacy and research-participation surfaces; and private authentication, evidence, consent, review and longitudinal-data architecture.”
- **Demonstrates:** “Original structural problem definition, public research/editorial information architecture, claim/source modeling, construct separation, transparent uncertainty and translation of an abstract thesis into testable candidate infrastructure.”
- **Evidence:** “The recertification fetched all 62 sitemap routes successfully, verified two additional public utility routes and protected redirects, and inspected the scoring, benchmark, newsletter, nomination, partnership, auth, privacy and evidence architecture.”
- **Mandatory limitation:** “The Ownership Index and Portfolio Professional are authored exploratory self-report pilots, not validated, normed or activated measures. Scores, bands and projected point changes do not establish legal ownership, capability, human worth, enterprise value, causal outcomes or portability.”
- **Mandatory privacy boundary:** “Do not expose participant/admin records or imply completed longitudinal research. Sensitive research operations remain private and require separate ethics, privacy, security and governance certification.”
- **Mandatory brand boundary:** “Institutions of One is separate from Aloha AI and NSAG; RN Builds documents it but is not the research system.”

Replace “capability measurement” with **“candidate capability and portability assessment design.”** Replace “working implementation” with **“live public research platform and working technical architecture, with validation and participant safeguards still under development.”**

For Culturalyst, use: **“Institutions of One shows RN building a public research architecture around how independent capability, relationships, evidence and intellectual assets become legible and portable—while explicitly treating ownership, authority and portability as questions to investigate rather than conclusions a score can prove.”**

## 15. Evidence and unverified areas

Evidence inspected: full protocol and estate mapping; RN Selected Work featured record; production headers/home/robots/sitemap/manifest; all 62 sitemap routes; `/login`, `/unsubscribe` and protected redirects; private-repository README, package/build contract, environment map, Next config/middleware/layout, Prisma schema, assessment engines/instruments/components, benchmark/newsletter/nomination/partner APIs, auth/db/rate-limit/Beehiiv/privacy/sitemap/robots code through connected GitHub access.

Not verified: private production data or admin interfaces; any participant/subscriber/inquiry record; successful consequential form writes; Supabase/Upstash/Resend/Beehiiv/Vercel environment values; number/representativeness of respondents; ethics/IRB determination; psychometric validity; subject consent; every proposition across all case sources; external-link liveness for the full source corpus; actual customer use/outcomes; local test/build execution; complete assistive-technology/mobile matrix.
