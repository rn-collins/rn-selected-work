# eolpc-demo-v5 — Route and Control Ledger

**Audit date:** August 12–13, 2026 HST  
**Versions:** `eolpc-demo-v5` compared with canonical `eolpc-demo`  
**Safety:** No consequential form was submitted. No exposed incident record is reproduced.

## Route ledger

| Origin | Route | Method tested/inspected | Result | State / concern |
|---|---|---|---|---|
| v5 | `/` | GET | 200 | single technology-preview page; noindex/nofollow |
| canonical | `/` | GET | 200 | single early-access page; noindex/nofollow |
| both | `/robots.txt` | GET | 404 | no robots file |
| both | `/sitemap.xml` | GET | 404 | canonical declares missing sitemap |
| both | `/nonexistent-audit-route` | GET | 404 | no SPA fallback |
| v5 | `/api/chat` | GET/source/consumer POST | 405 on GET; POST used by page | live multi-source retrieval; CORS `*`; input/safety/sanitization defects |
| canonical | `/api/chat` | GET/source/consumer POST | 405 on GET; POST used by page | live retrieval; response plus error observed; CORS `*` |
| both | `/api/beacon` | source/page invocation | implementation present | collects visitor/referrer/IP-derived/UA telemetry; no privacy notice |
| v5 | `/api/queries` | GET/source | 200 empty/config message | fails open when token unset; no data because Upstash absent |
| canonical | `/api/queries` | GET/source | **200 stored records without auth** | **P0**; 13 query and 26 visit records at verification; audit request persisted |
| v5 | `/api/leads` | GET/source | GET 405; POST present | returns success even if all delivery integrations absent/fail |
| canonical | `/api/leads` | GET/source | **404** | main inquiry form broken |
| canonical | `/api/track` | GET/source/client call | **404** | scroll tracking silently broken |
| canonical external | `https://rn-api-rn-collins.vercel.app/api/lead` | source only | endpoint target in modal | not consequentially submitted; no `response.ok` check |

## Visible control ledger

| Control | Version | Action/result | Status |
|---|---|---|---|
| Skip to main content | canonical | anchor to `#main-content` | working improvement; absent v5 |
| Path 1 — Single grant | both | shows single-grant total/timeline | working; lacks tab/pressed semantics |
| Path 2 — Two grants | both | shows year-one/year-two ranges | working; headline total inconsistency |
| Suggested query 1: Hopkins/NYU | both | fills textarea; opens hard-coded two-source evidence | working preview; not live proof |
| Suggested query 2: ketamine | both | fills textarea; opens hard-coded evidence | code-present; claim qualifications required |
| Suggested query 3: practitioner survey | both | fills textarea; hard-coded survey response path in v5 | simulated/owner-supplied content |
| Suggested query 4: Oregon access | both | fills textarea; evidence preview | needs current state/federal distinction |
| Evidence ✕ | both | closes preview | working; weak accessible name in v5 |
| Question textarea | both | accepts query; Ctrl/Cmd+Enter submits | working; no sensitive-data warning or length bound |
| Ask / Submit question | both | posts `/api/chat`; sample returned seven sources | partial; simultaneous error and result observed |
| Voice input | v5 | Web Speech API | browser-dependent; no robust fallback |
| Voice input | canonical | conflicts with `Permissions-Policy: microphone=()` | broken by deployment policy |
| Listen | both | SpeechSynthesis of synthesis text | implemented; browser-dependent |
| Knowledge layer 1 | both | toggles details | clickable div; not keyboard semantic |
| Knowledge layer 2 | both | toggles details | same |
| Knowledge layer 3 | both | toggles details | same |
| Knowledge layer 4 | both | toggles details | same; permission not secured |
| Knowledge layer 5 | both | toggles details | same; jurisdiction/currency claims unverified |
| Name/email/message inquiry | both | empty invalid email shows validation | validation works; canonical POST target missing; no submission |
| Request 30 minutes | v5 | would POST `/api/leads` | endpoint present; can falsely claim notification |
| Request 30 minutes | canonical | would POST missing `/api/leads` | broken P1 |
| Contact the Architect | canonical | opens modal | opens; no dialog/focus semantics |
| Modal Send | canonical | would POST external RN API | no submission; treats any resolved response as success |
| Modal Cancel | canonical | hides modal | code-present |

## Link and destination ledger

| Link/destination | Version | Result/inspection | Finding |
|---|---|---|---|
| `https://eolpc.org` | both | 200; official EOLPC site | valid authority/partner context |
| EOLPC Connector Directory | dynamic decline link, both | public directory reachable | valid human-routing destination; directory inclusion is not clinical endorsement |
| `mailto:christine@eolpc.org` | both | mail action | exposed in error/footer; privacy/support expectations unclear |
| `mailto:collins.ra@northeastern.edu...` | v5 | mail action | replaced in canonical; institutional email/role use should be reviewed |
| dynamic DOI links | both | generated from API data | potentially valid; URL/content must be sanitized |
| dynamic PubMed links | both | generated from PMID | potentially valid; source does not validate synthesis |
| dynamic Semantic Scholar links | both | generated from API data | external secondary index |
| dynamic ClinicalTrials.gov links | both | generated from NCT ID | registry record is not efficacy proof |
| dynamic Exa/web links | both | generated from external result | not necessarily primary/authoritative; XSS/quality risk |
| `https://destig-toolkit.vercel.app` | canonical | related-tool link | destination exists in estate; relationship is thematic |
| `https://wnh-guide.vercel.app` | canonical | related-tool link | destination exists in estate; relationship is thematic |
| `https://aloha-ai-consulting.vercel.app` | canonical | builder link | correct practice owner; naming normalization needed |
| `https://rn-portfolio-khaki.vercel.app` | canonical | RN Builds link | not RN Selected Work canonical destination; reconcile |
| `/sitemap.xml` head declaration | canonical | 404 | broken metadata link |
| Google Fonts | both | external stylesheet | CSP permits; privacy/performance dependency |

## Generated result controls

| Control | State | Finding |
|---|---|---|
| DOI / PubMed / View links | generated when fields exist | uses unsanitized external values in `innerHTML` |
| Full abstract `<details>` | generated per academic record | disclosure works in markup; abstract unescaped |
| Trial summary `<details>` | generated per trial | same; status/phase not interpreted |
| Connector Directory referral | generated on declined query | narrow regex means not all unsafe queries reach it |
| Source-group headers | conditional | “sources retrieved” is quantity, not verification |

## Metadata, accessibility, responsive, and operational states

| Check | v5 | canonical |
|---|---|---|
| Title | Technology Preview | product/EOLPC title |
| Description/OG | absent | present; no OG image/canonical link |
| Robots meta | noindex,nofollow | noindex,nofollow |
| Structured data | absent | WebSite JSON-LD with unexplained “NSAG-aligned” copy |
| Sitemap | absent | declared but 404 |
| Security headers | platform HSTS only observed | CSP, HSTS, XFO, nosniff, referrer and permissions policies |
| Labels/ARIA | 0 labels / 0 ARIA in source | 3 labels / 4 ARIA occurrences; still incomplete |
| Breakpoints | 640px | 640px and 480px |
| Reduced motion | absent | absent |
| Keyboard semantics | weak | partially improved; chips/layers/tabs/modal deficient |
| Tests/build | none; no package/build config | no tests; engines-only package and Vercel config |
| Runtime privacy | Upstash unconfigured in live v5 | stored logging active; public admin endpoint P0 |

## Exact canonical/difference conclusion

- v5 repo: one July initial commit; no Vercel config/package file; unique lead handler; larger hard-coded/pinned chat logic; less metadata/accessibility/security copy.
- canonical repo: later multi-commit history through August 2; explicit Vercel GitHub linkage; more complete page, disclaimers, labels, metadata, headers, related-work/footer/contact overlay; missing retained main lead handler.
- Shared exact files: `api/beacon.js`, `api/queries.js`.
- Different files: `public/index.html`, `api/chat.js`; only v5 has `api/leads.js`; only canonical has `package.json` and `vercel.json`.
- **Estate treatment:** canonical is `eolpc-demo`; `eolpc-demo-v5` is **D**, preserve privately, retire public alias after dependency check, and never count as a second RN Selected Work build.

