# The Psychonaut Bookworm — Route and Control Ledger

Audit date: August 13, 2026 (HST)  
Disposition: **P; one standalone case; release blocked**

## Routes and infrastructure

| Surface | Result | Verdict |
|---|---:|---|
| `/` | 200, 2.116 MB | working monolithic SPA |
| `/robots.txt` | 404 | missing |
| `/sitemap.xml` | 404 | advertised but missing |
| unknown path | 404 | correct |
| `/api/track` | 404 | telemetry broken |
| `/_vercel/insights/script.js` | 404 | analytics script broken |
| `/_vercel/speed-insights/script.js` | 200 | performance telemetry loads |
| RN external lead API | not submitted | privacy/fulfillment boundary open |
| private repo | 3 files | no CMS/tests/build/source/rights workflow |

## In-page sections and actual data

| Section | Advertised | Actual source | Treatment |
|---|---:|---:|---|
| Writing | 238 | 238 `pieces` | full bodies; 222 internal “published,” 16 “ready”; outlet publication unverified |
| Quote Cards | 337 | 337 | context/attribution; rights/page verification needed |
| Then vs. Now | 112 | 112 | sources strings, no URLs |
| Flashcards | 563 | 563 | only 10 have citation field |
| Mini-Essays | 55 | 3 dedicated; 55 also inside Writing | broken model/double count |
| Educational Modules | 3 | 3 | not a top tab; included in hard count |
| Documents | 13 | 13 | primary-source commentary; source links absent |
| Character Profiles | 12 | 12 | editorial records |
| Passage Spotlights | 12 | 12 | quotation/rights review |
| Geography | 12 | 12 | current/historical claims review |
| Bridge Pieces | 8 | 8 | source strings |
| Reading Lists | 11 | 11 / 61 entries | no purchase/affiliate verification |
| Science Annotations | 11 | 11 | categorical verdicts need method/review |
| NotebookLM Packs | 12 | 12 | prompts/source material, not generated podcasts |
| Free University | 8 courses | 8 modules | real client tools; no credential/delivery service |
| auxiliary claim sorter | not in 1,399 | 58 | uncoupled from public count |
| auxiliary timeline | not in 1,399 | 196 | uncoupled from public count |

`COUNTS` sums to 1,399 only because Writing’s 238 already contains the 55 `mini-essay` records and Mini-Essays is added again. One build, not 1,399 builds.

## Control ledger

| Control family | Behavior | Status/remediation |
|---|---|---|
| header brand | returns Overview | mouse only; make link/button |
| 15 top tabs | switch section | nonsemantic divs; tab semantics/history/deep links |
| 14 overview cards | switch section | nonsemantic divs; keyboard |
| five Writing format tabs | filter 238 | nonsemantic divs |
| 238 article rows | open reader | nonsemantic; add permalinks |
| reader Back/Escape | close overlay | partial; dialog/focus/URL needed |
| book/topic pills | filter | buttons; pressed state needed |
| search inputs | filter | working; visible labels |
| NotebookLM show/copy | expands/copies | prompts only; rights/external-service disclosure |
| course module headers | expand | div; keyboard/aria-expanded |
| completion checkboxes | localStorage | working local only; no credential |
| module sub-tabs | swap panels | working; tab semantics |
| flashcard sprint | shuffle/flip/got/missed | working; flip card div keyboard defect |
| claim sorter | choose/reveal/next | working; verdict evidence unvalidated |
| timeline | reveal/sort | working; div keyboard defect |
| comparison | selects two books | working client synthesis |
| argument builder | choose/mark/copy/reset | working prompt generator; not assessment |
| source identifier | 15 randomized quotes | working; quotation rights/accuracy |
| reading-list request | theme/email/POST | no submission; false success/fulfillment/privacy |
| contact RN | name/email/message/POST | no submission; false success/privacy/focus |
| related links | 3 | working destinations; claims need correction |
| footer links | Fat Nugs/Aloha/retired RN Builds | affiliation + destination correction |

## Claim/currentness gates

| Area | Example defect | Gate |
|---|---|---|
| state law/program | NM “operational 2025” contradicted by NMDOH | authoritative source/jurisdiction/status/date |
| clinical trials | sponsor result/forecast written as settled trajectory | registry/FDA/publication + sponsor attribution |
| pharmacology | mechanistic metaphors stated as settled | primary review + uncertainty |
| legal/policy | DEA/FDA/RFRA/scheduling/rescheduling | controlling primary record and as-of |
| outcomes | efficacy, safety, overdose absolutes | design/effect/limits/adverse evidence |
| Indigenous/cultural | universal/community/IP claims | nation-specific Indigenous-authored review |
| history/quotations | page/edition absent | edition/page/translator/source link |
| copyright | 337 quotes and source packs | rights/fair-use/permission ledger/takedown |

## Accessibility/mobile/metadata

| Criterion | Status |
|---|---|
| skip link | missing |
| keyboard tabs/cards/rows | broken for div controls |
| tab semantics | missing |
| dialogs/focus | partial/missing |
| visible labels | missing on lead/contact fields |
| reduced motion/focus-visible | missing |
| mobile/zoom/contrast/screen reader | unverified; Chromium unavailable |
| canonical/description/OG/Twitter text | present, inaccurate count/status language |
| OG/Twitter image | missing |
| JSON-LD | Person/WebPage only; stale RN portfolio identity |
| robots/sitemap | broken 404 |

## RN portrait and authorship

| Surface | Finding | Exact treatment |
|---|---|---|
| header | RN named; Fat Nugs host claimed | product-first; correct authorization, no portrait |
| items | no per-item byline/reviewer/date | add author/editor/reviewer/version fields |
| overview/method | no editor-method block or portrait | add one approved RN portrait + status/method/conflicts/AI/rights/corrections |
| course/tools | RN not repeated | no portrait repetition warranted |
| footer | RN builder; Fat Nugs project claim | correct authorization; no repeated portrait |
| metadata | RN author, no image | product OG + aligned Person/CreativeWork |
| RN Selected Work | case exists | product screenshot card; small portrait only in authorship section |

Portrait status: **missing; strategically warranted once**. Use approved canonical asset, square/4:5 face-safe derivative, responsive crop, 128–192 px display, useful/nonduplicative alt, verified mobile/desktop/OG integrity. Never scrape or synthesize a substitute.

## Priority gates

| Priority | Requirement |
|---|---|
| P0 | truthful generated/deduplicated content inventory and statuses |
| P0 | claim-level evidence/currentness rebuild; correct known NM error |
| P0 | verify/remove Fat Nugs authorization/publication claims |
| P0 | copyright/quotation/NotebookLM rights review |
| P1 | cite all scientific learning records or remove accuracy/citability claim |
| P1 | per-item bylines/dates/permalinks/corrections/conflicts |
| P1 | privacy/consent/retention/fulfillment for leads |
| P1 | semantic keyboard/dialog/tab accessibility |
| P2 | content CMS/schema/tests/build/link/citation checker; split 2.1 MB page |
| P2 | SEO/analytics resolution, OG/product image, RN editor portrait block |

## Read-only boundary

No lead/contact, clipboard, external AI, progress or other consequential action was completed. No private API data or publisher authorization was available. This ledger verifies the artifact architecture, not all corpus claims or rights.
