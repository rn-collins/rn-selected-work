# law-communication-library — Route and control ledger

**Audit date:** August 13, 2026 HST  
**Canonical:** <https://law-communication-library.vercel.app/>  
**Disposition:** P, one case study; citation/currentness release hold

## Route ledger

| Surface | Count/status | Result |
|---|---:|---|
| `/` | 1 / 200 | search/index/audience-path homepage |
| `/articles/{slug}` | 143 / all 200 | all indexed article pages reachable |
| referenced article routes absent from index | 0 | no hidden/missing internal route discovered |
| indexed routes never referenced in corpus | 0 | no orphan index record |
| invalid `/articles/nonexistent` | 404 | custom error page works |
| `/sitemap.xml` | 404 | broken declared sitemap |
| `/robots.txt` | 404 | missing despite index/follow meta |
| `/privacy` | 404 | missing |
| `/terms` | 404 | missing |
| `/api/track` | 404 | all pages attempt POSTs here |
| external RN API `/api/lead` | source only | homepage modal destination; no submission |

## Article routes by section

| Section | Count |
|---|---:|
| Foundations | 20 |
| For Participants & Clients | 24 |
| Harm & Disputes | 6 |
| For Facilitators | 14 |
| For Healthcare Professionals | 12 |
| Professional & Career Risk | 7 |
| Running a Business | 14 |
| Marketing & Advertising | 9 |
| Documents & Contracts | 11 |
| Churches & Ceremony | 7 |
| After an Incident | 6 |
| Researchers & Biotech | 8 |
| Working With a Lawyer | 4 |
| Reference | 1 |
| **Total** | **143** |

The canonical route list is the 143 `/articles/...` links rendered by the homepage. The crawl record is reproducible from that index; the full slugs are intentionally not duplicated here because the index itself is the source of truth and every route was tested.

## Homepage control ledger

| Control | Behavior | Finding |
|---|---|---|
| Brand | `/` | works |
| Browse | `/#sections` | jumps to index heading |
| Do I need a lawyer? | dedicated article | works |
| Start here | Law 101 article | works |
| Basics CTA | Law 101 article | works |
| Search CTA | `#find` | works |
| 7 audience cards | route to role-specific starters | strong IA; jurisdiction not captured |
| Search field | filters title + truncated description locally | privacy-positive; no full text/jurisdiction/authority/date filters |
| 143 index rows | article routes | all fetched 200 |
| no-results message | toggled by script | not live-announced; no result count |
| footer contact | `mailto:` Antithesis domain | role/business boundary unclear |
| Contact Architect | opens modal | no focus trap/return/Escape/labels |
| Send | external RN API | requires email; no `response.ok`; false-success risk |
| Cancel | closes modal | focus not returned |
| 3 related tools | Entheogen Atlas, Psych Ops Directory, Psychonaut Bookworm | estate cross-links; claims/relationships need independent support |
| Aloha AI / RN Builds | external builder/portfolio links | RN Builds points to older portfolio URL |

## Article-page control ledger

| Control | Coverage | Finding |
|---|---:|---|
| site header navigation | 143 | consistent |
| legal-information banner | 143 | visible, strong boundary |
| last-reviewed note | 143 | all August 2026; not backed by visible source/review ledger |
| section rail | 143 | useful; current page lacks `aria-current` |
| full index | 143 | returns to `/#find` |
| inline related articles | corpus-wide | all referenced routes exist |
| previous/next | sequential | route-complete |
| footer mail contact | 143 | Antithesis domain; privacy/business boundary unclear |
| article authority links | **0/143** | critical substantiation defect |
| per-article canonical URL | 0/143 | missing |
| per-article OG image | 0/143 | missing |

## Legal-source/currentness control ledger

| Required control | Current state |
|---|---|
| jurisdiction field | prose only/inconsistent |
| authority type | prose only |
| statute/rule/case citation | sometimes named in prose; not systematic |
| official source URL | zero clickable article links |
| effective date | sometimes prose; not structured |
| checked date | one uniform August 2026 display |
| reviewer/license/jurisdiction | absent |
| proposition-to-source mapping | absent |
| operative/proposed/enjoined/superseded state | absent |
| change log/version history | absent |
| corrections mechanism | absent |
| automated legal-change trigger | absent |

## Analytics, data, and external destinations

| Flow | Data/destination | Finding |
|---|---|---|
| Vercel Analytics/Speed Insights | standard page telemetry | loaded on all pages; no privacy page |
| UTM capture | five UTM fields in sessionStorage | no notice |
| page/scroll tracking | page/referrer/UTM/depth to `/api/track` | endpoint 404; errors swallowed |
| contact | name/email/message/source to RN API | no processor/retention notice; false success possible |
| Google Fonts | font request | external dependency permitted by CSP |
| mailto | Antithesis email | local mail-client action |

## Accessibility/metadata/operations

| Area | State |
|---|---|
| semantic structure | generally strong header/nav/main/article/footer/headings |
| focus | visible focus CSS |
| reduced motion | supported |
| skip link | absent |
| search live state | no `aria-live`/result count |
| rail current state | visual class, no `aria-current` |
| modal | partial dialog semantics; labels/focus/Escape/status incomplete |
| responsive | responsive CSS present; full mobile hardware matrix not completed |
| security headers | CSP/HSTS/XFO/nosniff/referrer/permissions; CSP permits unsafe inline/eval |
| build/test | compiled static output; no package/build/test/content-source contract visible |
| SEO | descriptions/OG titles present; sitemap/robots/canonical/OG image incomplete |

## Exact RN Selected Work boundary

- Count once as **The Psychedelic Law Library**.
- Verified: searchable 143-route corpus, 14 sections, seven audience pathways, article navigation, disclaimers, per-article displayed review month, all routes live.
- Not verified: article-level legal correctness, completeness, currentness, source support, reviewer identity, law-firm approval, or maintained update governance.
- Describe as legal communication/knowledge architecture and issue spotting—not legal advice, a legal database, or a fully cite-checked current authority.
- Keep external promotion release-held until priority legal claims receive direct primary-authority links and governed review records.

