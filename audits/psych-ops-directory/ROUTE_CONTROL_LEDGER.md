# Psych Ops Directory — Route and Control Ledger

Audit date: August 13, 2026 (HST)  
Stage: A, read-only  
Canonical count: **one build**  
Disposition: **P, standalone case; current release blocked**

## Route ledger

| Route/source | Type | Live result | Consumer/data effect | Verdict |
|---|---|---:|---|---|
| `/` | public page | 200 | renders embedded 177-record snapshot | working with P0 evidence/data issues |
| `/admin` | intended admin UI | 404 | none | broken/unavailable; keep private until rebuilt |
| `/robots.txt` | crawler policy | 404 | none | missing |
| `/sitemap.xml` | advertised sitemap | 404 | none | broken head reference |
| unknown route | page | 404 | none | correct failure behavior |
| `/api/listings` | public GET | 200 | returns 178 Redis records; increments analytics | divergent/side-effectful |
| `/api/analytics` | public GET | 200 | exposes aggregate search/activity | privacy/integrity issue |
| `/api/admin` | private API | 401 without PIN | GET can expose submissions/flags; POST mutates | P0 auth/RBAC design |
| `/api/seed` | private API | 401 without PIN | can seed/force reseed | P0 auth/state-changing GET |
| `/api/listings-static` | private seed API | 401 without PIN | seed data | P0 fallback PIN |
| `/api/submit` | public POST | safe GET 405 | stores submission/contact; optional Slack | implemented, not submitted; P1 privacy/abuse |
| `/api/flag` | public POST | safe GET 405 | stores correction/contact; optional Slack | implemented, not submitted; P1 privacy/abuse |
| `/api/subscribe` | public POST | safe GET 405 | stores email/categories; optional Resend/Slack | orphaned/partial; P1 consent/delivery |
| `/api/track` | public POST | safe GET 405 | stores raw search/activity | P1 privacy/poisoning |
| `/api/verify` | configured cron | 404 | none | missing; no verification cycle |
| `public/index.html` | consumer source | deployed | includes data/UI/copy/styles/scripts | canonical runtime page |
| root `index.html` | duplicate source | not canonical | stale-copy risk | consolidate/remove after diff |
| `public/admin.html` | admin source | not live | admin operations | do not expose before auth rebuild |
| `vercel.json` | routing/headers/cron | active/partly drifted | security/routing | cron/admin mismatch |
| `package.json` | runtime config | no scripts/deps | no build/test | insufficient operational gate |

## Consumer controls

| Control | Quantity | Action/result | State | Required correction |
|---|---:|---|---|---|
| Skip to content | 1 | focuses main anchor | working | retain/test focus |
| Search input | 1 | OR search across record text | working | explain semantics; privacy notice |
| Search button | 1 | applies query | working | retain |
| Clear | 1 | clears query only | working | clarify category persistence |
| Category pills | 24 | All + 23 filters | working, nonsemantic | use buttons/pressed state |
| Example-query chips | 15 | apply/track query | working, nonsemantic | buttons; disclose/minimize tracking |
| Listing cards | 177 | open detail | pointer working, keyboard broken | semantic button/link pattern |
| Provider title links | up to 176 | external provider | working, evidence-unverified | validate URLs; distinguish destination/source |
| Add to compare | 177 | adds max 3 | working | pressed state/status |
| Compare mode toggle | 1 | changes visual mode | partial/redundant | clarify or remove |
| Compare bar Clear | 1 | clears set | working | restore focus |
| Compare bar Compare | 1 | opens comparison if 2+ | working | accessible dialog |
| Comparison close/overlay/Escape | 3 patterns | closes modal | partial | focus trap/return/body cleanup |
| Export CSV | 1 | downloads filtered 177 snapshot | working/insecure | formula hardening, source/date/boundary columns |
| Submit Listing | 1 | opens 9-field form | working shell | privacy/consent/abuse/evidence gate |
| Submit for Review | 1 | POSTs when required fields exist | not consequentially tested | never auto-tier; report delivery truthfully |
| Detail close/overlay/Escape | 3 patterns | closes detail | partial | dialog semantics/focus |
| Flag per card | 177 | opens reason/email form | working shell | privacy/complaint policy/rate limit |
| Submit Flag | 1 | POSTs reason/contact | not consequentially tested | validation/retention/status tracking |
| Contact the Architect | 1 | opens lead modal | working shell | rename; privacy; response.ok |
| Contact Cancel/Send | 2 | cancel or POST external lead | send not tested; false-success bug | check status and show next step |
| Related-work cards | 4 | external RN projects | working destinations | correct cross-product claims |
| Footer links | 3 | Aloha AI, LinkedIn, retired portfolio | mixed | RN Selected Work target; noopener |

## Data reconciliation

| Surface | Records | Categories | Tier breakdown | Unique-ID state | Use |
|---|---:|---:|---|---|---|
| deployed embedded `DATA` | 177 | 23 | 133 T1 / 36 T2 / 7 T3 / 1 REF | no duplicates | actual consumer directory |
| live `/api/listings` | 178 | 23 | 134 T1 / 36 T2 / 7 T3 / 1 REF | five duplicate IDs | unused backend/read API |
| RN Selected Work current case | says 177 | says 23, but `built` says 22 | says 3 evidence tiers | not disclosed | must be corrected |

Duplicate backend IDs: `FT-02`, `FT-03`, `FT-04`, `CM-01`, `RC-01`.  
Taxonomy conflict: `Banking` and `Banking & Financial Services` both exist; `B-SAFER` is a policy reference, not a provider.  
Date conflict: visible header “reviewed August 2026”; footer “v5 June 2026”; API `lastUpdated` June 13, 2026.

## Endpoint/data-control ledger

| Function | Data | Auth/validation | External transfer | Risk |
|---|---|---|---|---|
| `admin.js` | listings, submissions, flags, views | shared PIN; source fallback `2029`; header/query | none required | P0 auth, PII exposure, mutation/audit/concurrency |
| `seed.js` | entire listing set | same PIN; GET/POST; force | fetches seed URL with query PIN | P0 destructive/state/auth/log leak |
| `listings-static.js` | seed set | same PIN | none | P0 secret fallback; 178/177 drift |
| `listings.js` | listings/lastUpdated/views | public | none | GET side effect; not consumed by UI |
| `analytics.js` | views/search/categories/compare/export | public | none | sensitive search disclosure; untrusted KPI |
| `track.js` | event/raw query/category | public, weak type validation | Redis | sensitive intent, poisoning, cost abuse |
| `submit.js` | organization fields + contact | public, weak required fields | Redis, optional Slack | XSS, spam, privacy, auto-tier downstream |
| `flag.js` | record/reason/contact | public, weak required fields | Redis, optional Slack | privacy, harassment/spam, reputational data |
| `subscribe.js` | email/categories | public | Redis, optional Resend/Slack | no consent/double opt-out/unsubscribe/delivery truth |
| contact lead | name/email/message | email presence only | external RN API | no privacy; false success |

## Evidence/currentness categories requiring record-level audit

| Domain | Examples in data | Minimum authoritative evidence |
|---|---|---|
| legal/regulatory | DEA, FDA, RFRA, Measure 109, Prop 122, SAFER | agency/court/legislative primary record, jurisdiction/status/date |
| professional authorization | attorney/license/program approval | bar/agency/official registry ID and checked date |
| clinical/science | ketamine, psilocybin, MDMA, trials, outcomes | regulator/trial registry/peer-reviewed source + limitations |
| commercial | price, location, personnel, services, availability | provider source/date; label self-reported |
| banking/investment | banking availability, credit union/fintech, VC | regulator/institution source, eligibility/jurisdiction/conflict |
| retreat/religious | legality, church, sacrament, safety | exact jurisdiction/court/agency scope; never generalized |
| adverse/reputational | death, litigation, red flags | attributed reliable/public record, neutral language, response/correction |
| cultural/identity | Indigenous/ceremonial/peyote | primary self-identification, consent/context, cultural review |

## Accessibility/responsive/metadata ledger

| Criterion | Status | Evidence/remediation |
|---|---|---|
| landmarks/skip/live count | present | header/main/footer/search/nav + skip + aria-live |
| card keyboard operation | broken | clickable `<div>` |
| category/example keyboard operation | broken | clickable `<div>` |
| dialog semantics | partial | contact has dialog role; other overlays lack full semantics |
| focus trap/return | missing | add for every modal |
| visible focus | partial | border-only field focus; add global focus-visible |
| reduced motion | missing | add media query |
| mobile/touch/zoom/contrast | unverified | browser executable unavailable; mandatory Stage B matrix |
| title/description/canonical | present | category/vetted claims need correction |
| OG/Twitter | partial | text present; no image |
| structured data | partial | Person/WebPage, role inconsistent; add governed dataset/creative work |
| robots/sitemap | broken | both 404; sitemap advertised |

## RN portrait/authorship ledger

| Surface | Authorship | Portrait/image | Verdict/exact treatment |
|---|---|---|---|
| live header | Aloha AI/Operational Intelligence only | none | keep product-first; do not add portrait |
| methodology | RN named as editor in copy | none | **add one approved RN portrait + editor/methodology/conflicts/review block here** |
| cards/results/compare | no repeated RN identity | none | portrait not warranted; avoids endorsement signal |
| contact | “Architect,” no clear RN label | none | rename “Contact RN about the directory”; portrait optional but unnecessary if methodology block exists |
| footer | RN Collins, Editor; June version | none | align date/role; do not repeat portrait |
| metadata | Person author; no author meta/image | no OG/Twitter image | product OG image; align author role |
| RN Selected Work card | case exists | not audited visually here | product/interface thumbnail, not portrait-only |
| RN Selected Work case body | authorship boundary insufficient | one portrait can accompany authorship | use same approved canonical source and exact independent-initiation language |

Portrait asset requirements: approved canonical source only; face-safe square/4:5 derivative; responsive sizing; verify 390 px/desktop crop and natural dimensions; useful/nonduplicative alt; no AI substitute or scraped profile image; product screenshot for case/OG.

## Defect and remediation gates

| Priority | Gate |
|---|---|
| P0 | remove/rotate fallback/query PIN auth; rebuild identity/RBAC/admin/seed safety |
| P0 | unify public/backend source, deduplicate, enforce schema/version/unique IDs |
| P0 | reconstruct record evidence/currentness and remove vetted/verified overclaim |
| P1 | privacy/consent/retention/rate limits/schema/safe rendering for all public inputs |
| P1 | hide raw searches; secure analytics; XSS/URL/CSV formula defenses |
| P1 | implement real verification/currentness workflow; provider correction/response |
| P1 | semantic controls/dialogs/focus/mobile/zoom/contrast verification |
| P2 | response.ok/delivery truth, telemetry counting, build/test/monitoring/backups |
| P2 | robots/sitemap/OG/product image/author schema/footer destinations |
| P2 | add governed RN editor/authorship block and strategically placed portrait |

## Acceptance boundary

- No consequential form, credential, admin, seed or mutation action was performed.
- No third-party provider is certified by this audit.
- Mobile/browser assistive testing remains open because Chromium was unavailable in the runtime.
- Stage B must verify production behavior after remediation before RN Selected Work changes are accepted.
