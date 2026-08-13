# The Psychonaut Bookworm — Stage A Recertification Dossier

Audit date: August 13, 2026 (HST)  
Stage: A, read-only represented-site recertification  
Recommended disposition: **P — retain one canonical independent editorial/learning-system case; release-block current “finished, sourced and citable Fat Nugs project” representation**

## 1. Asset identity, repository, deployment, parent, privacy and count

- **Repository:** private `rn-collins/psychonaut-bookworm`, `main`, tree `f53f93c50cfef16790ececa7deccd40cdb258233`.
- **Complete tree:** `.gitignore`, `index.html` (2,116,675 bytes), `vercel.json`. There is no package manifest, build system, content database, CMS, API, test, source registry, rights ledger or editorial workflow.
- **Deployment:** public/indexable `https://psychonaut-bookworm.vercel.app`; Vercel project `prj_IAWhDxG7xPNgN9I4D49shEqpQHKW`, public production READY in estate evidence.
- **Canonical owner:** RN Collins, independently initiated editorial/media-system concept. Current RN Selected Work correctly calls it a “Fat Nugs Magazine concept,” but the live site repeatedly says “Fat Nugs Magazine project” and “Hosted by Fat Nugs Magazine.” Those stronger affiliation/authorization claims require written evidence; absent that, revert to “independently developed concept for/around psychedelic magazine publishing; not commissioned or endorsed.”
- **Aloha AI:** technical build attribution only. **NSAG and Institutions of One:** no ownership role.
- **Privacy:** content/source private; public reader; browser-only course progress; reading-list and contact leads go to an external RN API.
- **Canonical count:** exactly **one repository + one deployment + one portfolio case = one build**. Fourteen tabs/formats, eight courses, 11 books, 1,399 claimed units, 238 article records and five learning tools are content/features—not builds.

## 2. Executive verdict

Psychonaut Bookworm is a substantial, real single-page editorial and learning prototype. The public artifact embeds 238 full article records, 337 quote cards, 112 then/now comparisons, 563 flashcards, eight course modules, primary-document commentary, reading lists, NotebookLM source packs and client-side exercises. Readers can navigate formats, filter/search several collections, open full articles, track course completion locally, run flashcard/claim/timeline/comparison/source-identification/argument exercises, copy prompts and request a hand-curated list.

The central representation is not accurate enough to publish: **“1,399 finished pieces across 14 content types, each one sourced and citable.”** The displayed 1,399 is the sum of a hard-coded `COUNTS` object, not a validated publication inventory. It counts all 238 writing records and then counts 55 mini-essays that are already inside those 238 again. The dedicated Mini-Essays data/render path has only three records while its page promises 55. “Published” is merely an internal data label on 222 records, not evidence of publication at Fat Nugs or elsewhere. Only 10 of 563 flashcards contain a citation field despite “Every claim factually accurate and cited.” Citations are plain strings without links/identifiers; none of the inspected source fields contained an HTTP URL.

The corpus also contains high-stakes clinical, pharmacological, legal, regulatory, Indigenous-rights, historical and future-status claims. At least one concrete current claim is false: the course says New Mexico’s medical psilocybin program was “operational 2025,” while the New Mexico Department of Health says it is being implemented by December 31, 2026 and was still in rulemaking in 2026. Other claims mix company press releases, projections, editorial conclusions and scientific evidence without source-level provenance.

Keep the build because the system design and real content volume are portfolio-worthy. Block “complete/finished/published/sourced/citable,” Fat Nugs authorization, educational/scientific reliability and publication promotion until the inventory, evidence, rights, editorial review, currentness and accessibility layers are rebuilt.

## 3. Complete route, asset, source and destination map

| Route | Live result | Finding |
|---|---:|---|
| `/` | 200; 2.116 MB HTML | only application route; all content/data/code inline |
| `/robots.txt` | 404 | metadata says index/follow but no crawler policy |
| `/sitemap.xml` | 404 | head advertises it; absent |
| arbitrary route | 404 | no article/course deep links |
| `/admin` | 404 | no admin surface |
| `/api/track` | 404 | page and scroll instrumentation POST to an absent endpoint |
| `/_vercel/insights/script.js` | 404 | Web Analytics script absent |
| `/_vercel/speed-insights/script.js` | 200 | Speed Insights loads |
| external RN lead API | not consequentially submitted | reading-list/contact collection |

Single-page pseudo-routes/tabs: Overview, Writing, Quote Cards, Then vs. Now, Flashcards, Mini-Essays, Document of the Week, Character Profiles, Passage Spotlights, Geography, Bridge Pieces, Reading Lists, Science Annotations, NotebookLM Packs and Free University. They do not update URL/history and cannot be linked directly.

External links discovered: Fat Nugs, Entheogen Atlas, Psych Ops Directory, Psychedelic Law Library, NotebookLM, Aloha AI, LinkedIn in structured data, external RN lead API and retired `rn-portfolio-khaki` RN Builds. Source citations themselves are not links.

## 4. Complete interaction and control inventory

- RN/Bookworm header click and 15 top tabs switch in-page sections; tabs are clickable `<div>` elements, not semantic tabs/buttons.
- Overview cards open the corresponding sections; clickable `<div>` elements are not keyboard-operable.
- Writing: five format filters, 238 rows and full reader overlay. Article rows are nonsemantic click targets. Escape/back closes the reader.
- Shared book/topic/search filters exist for quote cards, then/now, flashcards and other collections. Filter pills are buttons; search is input-based.
- Quote Cards: 337 displayed records with context/attribution.
- Then vs. Now: 112 evidence comparisons.
- Flashcards: 563 table records; only 10 have citation values.
- Mini-Essays: heading claims 55; only three `D.miniEssays` records render. Another 55 `pieces` records tagged `mini-essay` are counted inside Writing, evidencing duplicate/fragmented models.
- Three educational modules, 13 documents, 12 profiles, 12 passages, 12 geographies, eight bridges, 11 reading lists, 11 annotations and 12 NotebookLM packs render from inline data.
- Free University: eight expandable course modules; completion checkboxes stored in `localStorage`; module readings/tools/discussion/writing/podcast tabs; copy controls; flashcard sprint; claim sorter; timeline reveal/sort; book comparison; argument builder; source identifier; free-play launchers.
- Reading-list form: theme select, email, “Send Me a List”; it declares success immediately after starting `fetch`, even on HTTP/network failure. No submission made.
- Contact modal: name/email/message; reports success on any resolved response without checking `response.ok`. No submission made.
- Related-project and footer links navigate externally.

No checkout, membership, account, server-side progress, actual generated podcast, content export, bibliography download, article permalink, instructor interaction, assessment record or Fat Nugs publication workflow exists.

## 5. Consumer journeys and outcomes

### Browse and read

The visual taxonomy immediately communicates breadth, and full article bodies are readable in an overlay. However, there are no URLs, back/forward state, bookmarks, print/citation controls, publication dates, authors/bylines per item, correction dates or stable source links. A 2.1 MB all-inline page is expensive and makes content maintenance/review brittle.

### Learn through the Free University

Eight course structures and multiple working client-side exercises constitute real course architecture. Progress persists only in the browser and is not evidence of completion, assessment validity, instruction or credential. “Free. Permanent. No gatekeeping” overpromises permanence on an unversioned Vercel prototype.

### Verify a scientific/legal claim

The user cannot reliably do this. Citations are unlinked strings, many are incomplete, and most flashcards are uncited. The interface uses categorical verdicts—confirmed, refuted, unresolved—without a displayed evidence-review method, search date, inclusion criteria, reviewer, uncertainty or claim-level primary source.

### Request a tailored reading list

The CTA promises “a short, hand-picked reading list” and “a list is on its way.” The code only creates a lead. It does not send a list, establish fulfillment time or verify delivery. This is a request/inquiry, not an automated product.

## 6. Functional matrix

| Capability | Reality | Status |
|---|---|---|
| large media library | inline corpus and renderers | working prototype |
| 238 full writing records | bodies embedded; 222 tagged published, 16 ready | present; publication status unverified |
| 1,399 finished pieces | hard-coded arithmetic with double counting | false/misleading |
| 14 formats | 14 navigation categories | present as presentation taxonomy |
| 55 dedicated mini-essays | only 3 in dedicated data; 55 also nested in Writing | broken/inconsistent |
| every flashcard cited | 10/563 have citation field | false |
| sourced/citable corpus | plain source strings, no source URLs | partial/unverified |
| full articles | reader overlay | working, no deep links |
| filters/search | several collections | working client-side |
| Free University | eight modules/tools | working self-guided prototype |
| completion tracking | localStorage | working local state only |
| NotebookLM podcasts | source/prompt packs | proposed external generation, not podcasts |
| tailored list | external lead request | manual promise/partial |
| analytics | tracking endpoint 404; Speed Insights only | broken/partial |
| Fat Nugs hosting/publication | site assertion only | authorization unverified |
| affiliate links | disclosure says “may”; none identified | inactive/unclear |

## 7. Copy and information architecture

Strengths: distinctive editorial voice; clear format taxonomy; visible independent-editorial/advice boundary; strong prompts and learning progression; related-work context.

Required corrections:

- Replace “1,399 finished pieces” with a generated, deduplicated and defined inventory. Distinguish unique works, excerpts/cards, exercises, course modules and alternate presentations.
- Replace “published” unless a canonical publication URL/date/outlet exists. Internal status should be draft/reviewed/ready, not public publication evidence.
- Remove “each one sourced and citable” and “Every claim factually accurate and cited” until true.
- “Complete media library,” “full syllabi,” “permanent,” and “no gatekeeping” require bounded definitions.
- Change “Send Me a List” to “Request a reading list”; confirmation should promise only review and give a time window.
- Replace “Contact the Architect” with “Contact RN about this editorial system.”
- Remove “Hosted by Fat Nugs Magazine” and “A Fat Nugs Magazine project” unless authorized. Keep “concept developed for editorial discussion” boundary.
- Related card calls Psych Ops Directory “vetted”; its accepted audit rejects that representation.
- Related Law Library count says 143; ensure it matches its accepted dossier/current source.
- Footer RN Builds link is retired; link RN Selected Work.

## 8. Science, health, historical, law and policy claim ledger

The corpus needs a claim-level evidence audit, not a sample-based “sourced” statement.

| Claim/family | Finding | Required treatment |
|---|---|---|
| New Mexico program “operational 2025” | contradicted by NMDOH; implementation due Dec. 31, 2026 | correct; link NMDOH rule/program status and as-of date |
| COMP360 Phase 3/NDA | company primary reports support both Phase 3 endpoints and rolling submission/Q4 2026 target; not FDA approval | attribute to sponsor, date, endpoint/effect/adverse-event limits; distinguish target from approval |
| “potential FDA approval late 2026/early 2027” | forecast, not fact | label projection; link FDA/ClinicalTrials.gov/sponsor |
| “mystical experience quality predicts outcomes” | causal/clinical overstatement without shown synthesis | state association/design/uncertainty; systematic evidence |
| “LSD mechanism now well understood,” thalamic reducing-valve account | mechanistic simplification/analogy presented as settled | distinguish receptor evidence, hypotheses and metaphor |
| zero LSD overdose deaths / WHO scheduling claim | absolute and regulatory claim; source not linked | precise toxicological definition and WHO source; acknowledge indirect harms |
| 40,000 LSD patients/promising outcomes | historical aggregate without study-quality context | source exact historiography; no modern efficacy inference |
| MDMA FDA rejection explanation | compresses multi-factor regulatory record | FDA complete response/advisory materials, safety/misconduct/method limitations |
| Oregon 100+ service centers | likely conflates license types/people; no registry/date | official OHA registry and exact active service-center count |
| Texas/Mississippi/Utah ibogaine policy | funding, enactment, matching/implementation details change | enacted bill/appropriation text and effective/status dates |
| Spravato/ketamine | approved indication versus off-label ketamine distinction incomplete | FDA label/REMS and jurisdiction/professional boundary |
| psychedelics/Indigenous knowledge/IP | broad universal claims and community aggregation | Indigenous-authored primary sources, nation-specific language, benefit/consent and cultural review |
| retreat/clinical/access prices | volatile and potentially promotional | dated source, range method, no safety/fit inference |
| Rat Park, Portugal, Oregon, fentanyl, arrest disparities | complex evidence reduced to single lessons/causal claims | original data/systematic reviews, periods, confounders and policy context |
| direct quotations | attribution/context exists but edition/page often absent | exact edition/page/translator; quotation verification and rights record |

The disclaimer does not cure inaccurate health/legal content. The site targets clinicians and facilitators and gives policy/science verdicts. Add explicit evidence-review methodology, medical/legal non-advice at each relevant tool, emergency/safety boundaries where treatment/use is discussed, and primary-source links. Never present a claim-sorter verdict as professional advice or a validated assessment.

## 9. Accessibility, mobile and metadata

- Positive: main landmark, native inputs/buttons in many later tools, Escape for reader, responsive `clamp` typography, horizontal tab handling and a 480 px fixed-control adjustment.
- No skip link was found.
- Header brand, top tabs, overview cards, writing rows, module headers, flashcard cards, timeline rows, argument choices and NotebookLM toggles are clickable `<div>`/text elements without keyboard semantics.
- Top tab system lacks `role=tablist/tab/tabpanel`, `aria-selected`, keyboard arrow handling and focus management.
- Reader overlay is not a semantic dialog; no focus trap/return; content state has no URL/title update.
- Contact dialog lacks accessible name linkage, focus trap/return and Escape/overlay close.
- Inputs often use placeholders instead of visible labels; reading-list theme/email lack associated labels and privacy notice.
- Dynamic content uses pervasive `innerHTML`. Current data is bundled/private-authored, but this is unsafe for future CMS/user content and can corrupt semantics.
- No global `:focus-visible` or reduced-motion rule was found.
- Browser visual automation remained unavailable because the installed Playwright lacked Chromium. Mobile crop, 200/400% zoom, contrast, touch targets and screen-reader behavior remain Stage B gates.
- Metadata has description/canonical/OG/Twitter text, robots meta and Person/WebPage JSON-LD. Missing OG/Twitter image, article/course/dataset/item structured data, author meta, working sitemap/robots. Twitter card is `summary` with no image.

## 10. Mandatory RN portrait and authorship audit

**Status:** authorship **present but inconsistent/insufficient**; portrait **missing**; portrait **strategically warranted once**.

- RN Collins appears in nav, description/OG, JSON-LD and footer as builder. Per-article bylines/reviewers/publication dates do not exist.
- Fat Nugs is positioned as host/project owner while the portfolio calls this only a concept. That makes authorship and authorization ambiguous.
- No `<img>` or portrait asset exists. There is no OG image or case-specific author/product visual.
- Do not place RN’s portrait on every article/card/course or in the main library hero: it would crowd the editorial product and repeat authorship.
- Add one approved canonical RN portrait in an **“Editor, methodology and project status”** block between the overview and first content grid. State: independently initiated; exact Fat Nugs authorization/commissioning status; RN’s writer/researcher/builder roles; relevant qualifications without clinical/legal licensure implication; human/AI assistance; editorial/science/legal reviewers; conflicts/affiliate policy; rights policy; review date; corrections.
- Recommended portrait: approved canonical source only, face-safe 4:5/square derivative, 128–192 px rendered, responsive `srcset`, tested desktop/mobile crop. Alt “RN Collins, editor and builder of Psychonaut Bookworm” unless adjacent text duplicates it, then empty alt.
- RN Selected Work card and social preview should use an interface/book-library product image—not a portrait-only image. A small portrait may accompany case authorship. Add product OG/Twitter image and consistent Person/CreativeWork author metadata.

## 11. Brand architecture

The build strongly demonstrates RN’s editorial-systems thinking and synthesis across literature, science, law and media formats. It weakens the brand when volume substitutes for evidence quality or when “Fat Nugs project” implies an unverified client/partner relationship.

Correct architecture: RN independent editorial concept → technical build by Aloha AI → optionally presented to/for Fat Nugs with explicit authorization status. It is not Fat Nugs-owned/published unless documented. Keep it separate from Psych Ops Directory, Entheogen Atlas and Law Library; cross-links are related ecosystem infrastructure, not one mega-build.

## 12. Business model and conversion

- Audience: psychedelic readers, editors, educators, facilitators, clinicians and researchers.
- Buyer/decision-maker: publishers, media organizations, course/community operators or research teams needing a source-governed content system.
- Value: turns books into reusable editorial formats, curricula and research prompts.
- Current conversion: free library → manual reading-list request/contact RN → Aloha AI. No paid product, affiliate implementation or Fat Nugs fulfillment is verified.
- Trust barriers: rights clearance, evidence integrity, affiliation ambiguity, inflated counts and unclear human/AI editorial process.
- Recommended business positioning: portfolio demonstration and editorial-infrastructure prototype; sell the governed content architecture/workflow, not 1,399 unreviewed outputs. A real publisher deployment needs editorial roles, CMS/versioning, rights/licensing, source provenance, fact-checking, corrections, analytics consent, workflow and service-level commitments.

## 13. Defects ranked P0–P3

### P0 blocking

1. “1,399 finished/sourced/citable” is not a truthful validated inventory; count double-counts and content models conflict.
2. High-stakes science/legal/current claims lack linked provenance and reviewer/currentness controls; at least the New Mexico status claim is false.
3. Fat Nugs project/hosting/authorization and 222 “published” statuses are unverified; must not imply commissioning/publication.
4. Copyright/quotation/NotebookLM source-pack rights are not demonstrated. A disclaimer is not permission or fair-use analysis.

### P1 serious

- 553/563 flashcards have no citation field while the page says all are cited.
- Reading-list/contact collect email/free text without privacy terms, consent, retention/deletion or delivery workflow; false success handling.
- No per-item byline, publication/review date, stable URL, edition/page citation, correction history or conflicts.
- Extensive keyboard/dialog/tab accessibility failures.
- 2.1 MB monolithic HTML and pervasive inline data/code prevent safe review/versioning.

### P2 material

- `/api/track`, Web Analytics script, sitemap and robots are 404; instrumentation and SEO incomplete.
- Source strings contain no direct URLs; 238 declared word counts total 167,600 while actual whitespace-token count is approximately 79,632—labels require recalculation/definition.
- Local progress can be mistaken for course completion; no validation/credential boundary.
- No test/build/lint/schema/content validation or link/citation checker.
- CSP permits unsafe-inline/unsafe-eval; good HSTS/frame/nosniff/referrer/permissions headers remain.

### P3 polish

- Retired RN Builds link, “Architect” jargon, duplicate disclosures, inconsistent tab/render counts and no deep links.

## 14. Exact remediation plan

1. **Inventory/content model:** split 2.1 MB file into schema-validated data/content; define unique work versus derivative unit/presentation; generate counts; reconcile 55 versus 3 mini-essays; remove duplicate counting; calculate actual word counts.
2. **Publication status:** replace `published` with governed states until outlet URL/date/editor exists. Add item permalink, author, editor/reviewer, created/updated/published dates, version/correction log.
3. **Evidence:** create claim/source registry with DOI/ISBN/edition/page/URL, source type, proposition, reviewer, checked date, uncertainty and jurisdiction. Revalidate every scientific/legal/current claim with primary/authoritative sources.
4. **Rights:** quotation-length/context ledger, edition/page, permissions/fair-use rationale, takedown process; separately assess copying source packs into NotebookLM and publisher/author rights.
5. **Affiliation:** obtain written Fat Nugs permission/commissioning/hosting language or remove all project/host claims. Disclose independent initiation, AI assistance and affiliate status accurately.
6. **Product:** create stable routes/deep links, accessible semantics/dialogs/focus, browser matrix, content search/index, error/empty states and versioned offline/print citations.
7. **Leads/privacy:** visible labels and privacy notice; explicit consent/retention; response.ok; never promise delivery until fulfilled; operational queue/SLA/unsubscribe/deletion.
8. **Build/ops:** content tests for IDs/counts/required citations/links/currentness, build/lint/accessibility tests, bundle optimization, working robots/sitemap/analytics decision, monitoring.
9. **Authorship/media:** add governed editor block and single approved portrait; product interface thumbnail/OG; current RN Selected Work link.

## 15. Recommended estate disposition

**P — one standalone canonical case, release-blocked.** The library/course/editorial system is distinct and materially implemented. It should not be merged into Fat Nugs or counted as 14/1,399 builds. If rights/evidence review cannot be sustained, convert to **E**: a private/demo-only editorial architecture using a small rights-cleared sample corpus.

## 16. Exact RN Selected Work case corrections

- **Practice:** “Independent editorial-system concept; Fat Nugs relationship/authorization not verified.”
- **Status:** “Live release-blocked editorial and course prototype.”
- **Purpose:** retain structured reusable media-system framing.
- **Researched:** “The source embeds 238 writing records, 337 quote cards, 112 then/now records, 563 flashcards, eight course modules and additional editorial/learning collections across 11 books. These are format entries and derivative records, not 1,399 independently published pieces.”
- **Built:** “A single-page searchable/filterable media library with full-article reader, course progress, flashcard/claim/timeline/comparison/source-identification/argument tools, NotebookLM prompt packs and manual reading-list inquiry.”
- **Evidence:** “Stage A verified real inline content and working client-side render/tool architecture. It did not certify every claim, quotation, publication status or right. The hard-coded 1,399 count double-counts content; dedicated Mini-Essays renders three despite a 55 claim; 553 of 563 flashcards lack citation fields; sources are unlinked strings; at least one current program-status claim is contradicted by an authoritative agency source. Fat Nugs commissioning/hosting and publication require documentary confirmation.”
- **Authorship:** “Independently initiated, researched, written and built by RN Collins, unless/until verified collaborator/editor/publisher credits are documented.” Disclose AI assistance and reviewers.
- **Image:** product/interface image for card/OG; single approved portrait only in methodology/case authorship block.
- Do not use “complete,” “finished,” “published,” “each sourced and citable,” “Fat Nugs project,” or “hosted by Fat Nugs” before gates pass.

## 17. Evidence appendix and explicit unverified areas

Inspected: complete three-file private tree; full 2,116,675-byte deployed/source HTML; `vercel.json`; all live first-party route/status checks; every data collection and renderer/control family; current RN Selected Work and estate records. Data counts were calculated directly from parsed `D`; hard-coded `COUNTS` sums to 1,399. Parsed top-level arrays total 1,609 records including auxiliary claim/timeline/course data, not unique finished works. The 14 featured data groups total 1,347 actual array records when the dedicated three mini-essays are used; neither number is a defensible “finished pieces” count without a work/derivative definition.

Authoritative spot-check: New Mexico DOH says its program is under implementation and due by December 31, 2026, contradicting “operational 2025.” Compass’s official investor releases support successful COMP005/006 primary endpoints and a rolling/Q4 2026 NDA target, but those are sponsor reports and not FDA approval.

No lead/contact submission, clipboard action, external AI generation or local progress mutation was performed. No private RN API data/logs were inspected. No publisher/rightsholder/Fat Nugs authorization was available. The entire corpus was structurally inspected, but 1,000+ factual/quotation records were not each independently re-researched; therefore no completeness/accuracy certification is made. Browser visual automation was blocked by the missing Chromium executable, so mobile/screen-reader/contrast/zoom remain explicit Stage B gates.
