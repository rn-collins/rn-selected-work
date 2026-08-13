# flexjd-site — Route and control ledger

**Audit date:** August 13, 2026 HST  
**Canonical:** <https://flexjd-site.vercel.app/>  
**Disposition:** P; featured case study with data/currentness/affiliation qualification

## Route ledger

| Route | Status | Primary surface |
|---|---:|---|
| `/` | 200 | overview, class-year/campaign/resource pathways |
| `/newsletter` | 200 | student newsletter/resource digest |
| `/resources` | 200 | all-purpose program/student guide |
| `/opportunities` | 200 | ten-category searchable/filterable tracker |
| `/glossary` | 200 | terminology |
| `/changelog` | 200 | public change history |
| `/institutional-disclaimer` | 200 | independent/non-official boundary |
| `/privacy` | 200 | privacy/data-minimization notice |
| `/campaign-resource-request` | 200 | status/request pathway |
| `/campaigns/september` | 200 | campaign guide |
| `/campaigns/november` | 200 | campaign guide |
| `/campaigns/december` | 200 | campaign guide |
| `/campaigns/january` | 200 | campaign guide |
| `/campaigns/february` | 200 | campaign guide |
| `/campaigns/march` | 200 | campaign guide |
| `/campaigns/april` | 200 | campaign guide |
| `/classyear/2027` | 200 | class-year guide |
| `/classyear/2028` | 200 | class-year guide |
| `/classyear/2029` | 200 | class-year guide |
| `/classyear/2030` | 200 | class-year guide |
| `/sitemap.xml` | 200 | 17 URLs; omits privacy, disclaimer, resource request |
| `/robots.txt` | 200 | allow all; sitemap declared |
| arbitrary nonexistent route | 404 | plain Vercel error |
| `/api/track` | 404 | called by 18 pages |
| external RN API `/api/lead` | source inspection only | no audit submission made |

## Opportunity inventory

| Section | Declared/JSON rows |
|---|---:|
| Co-op opportunities | 53 |
| Remote/part-time clerkships | 55 |
| Writing competitions | 70 |
| Fellowships | 51 |
| Clerkships | 29 |
| Bar preparation | 27 |
| Journals | 22 |
| Pro bono | 19 |
| NUSL funding | 19 |
| External scholarships | 27 |
| **Total rows** | **372** |

Cross-cutting data findings: 44 one-cell heading rows are counted in the 372; at most approximately 328 rows are substantive before duplicate/status review; no structured status/deadline/last-verified fields; at least 37 malformed split-domain destination renderings; 235 approximate/rolling/varies/TBD-like date expressions; 643 unique external HTTP destinations in the corpus were not fully recertified by this audit.

## Global control ledger

| Control | Coverage/behavior | Finding |
|---|---|---|
| brand and primary nav | 18 main-shell pages | works; institutional/SBA implication requires boundary |
| Explore dropdown | campaign + class-year routes | keyboard/Escape support; broad IA |
| skip link | 18/20 pages | governance pages inconsistent |
| Book Office Hours | 18 pages; Northeastern Outlook | current-role/availability governance needed |
| Contact Architect | 18 pages; modal | commercial phrasing on student/SBA site; accessibility/privacy gaps |
| contact Send | RN API lead endpoint | name/email/message/source; no `response.ok`; false-success risk |
| Vercel Analytics/Speed Insights | 18 pages | active while privacy text says future analytics must first be documented |
| UTM capture | session storage | not adequately disclosed |
| page/scroll tracking | POST `/api/track` | endpoint 404; swallowed failures |
| footer institutional contacts | mail/tel/address | useful but currentness/permission/succession required |
| Aloha AI/RN Builds | footer cross-links | commercial/portfolio role mixing requires approval |
| external links | 937 occurrences; 643 unique HTTP URLs | all open new-window links use noopener; current recertification incomplete |
| mail links | 47 unique destinations | named contacts require minimization and expiry review |

## Opportunity tracker controls

| Control | Behavior | Finding |
|---|---|---|
| search input | local row-text filter | useful and privacy-preserving |
| ten category chips | section/category filter | `aria-pressed`; works |
| clear control | resets query/category | works |
| result status | visible + `aria-live` | strong accessibility pattern |
| tables | responsive semantic tables | column scopes present |
| Apply/source links | external destinations | 37+ split-domain errors; label “Apply” is misleading for reference pages |
| generated counts | JSON section totals | arithmetically consistent but count heading rows |
| freshness | scheduled Python check | detects zero structured records and does not enforce currentness |

## Content/currentness controls

| Required control | Current state |
|---|---|
| source authority hierarchy | documented in policy |
| per-record primary URL | present in many rows, malformed in at least 37 |
| stable opportunity ID | section IDs only; no normalized record model |
| status | absent as structured data |
| deadline | prose/table cell only; no structured field |
| last verified | absent as structured data |
| effective/jurisdiction date for legal claims | inconsistent |
| reviewer | absent per record/claim |
| archive/replacement | policy intent; not systematic |
| corrections | public pathways/disclaimer present |
| changelog | present, detailed |
| high-risk review cadence | documented intent; implementation not demonstrated |
| institutional/SBA approval record | not visible |
| successor/term handoff | not visible |

## Repository/build/CI controls

| Control | State |
|---|---|
| static Vercel deployment | READY canonical production |
| clean URLs/404 | configured and working |
| security headers | CSP, HSTS, frame denial, nosniff, referrer and permissions policies |
| CSP | permits inline/eval; should be narrowed |
| secret history scan | scheduled/PR/main |
| internal link check | scheduled/PR/main; currently flags Vercel special script paths |
| external link check | scheduled; non-blocking and issue semantics need verification |
| opportunity freshness | scheduled; zero structured records, therefore ineffective |
| governance injection | remediation branch only; loader on 3/20 pages |
| sitemap | present but incomplete |
| source/content CMS | none; static HTML + JSON generator |

## Accessibility and metadata

| Area | State |
|---|---|
| document language | present on all 20 HTML files |
| headings/main/table semantics | generally sound |
| skip links | 18/20 |
| keyboard navigation | nav Escape and visible focus present; full manual matrix not evidenced |
| reduced motion | CSS support; JS smooth-scroll exception |
| modal | incomplete accessible naming/focus/Escape/status behavior |
| mobile | responsive CSS and prior changelog claims; fixed overlays need device/zoom verification |
| canonical metadata | present on primary pages, inconsistent governance shell |
| sitemap/robots | both live; sitemap misses three routes |

## Exact RN Selected Work boundary

- Count once as **FlexJD Resource Hub** and map to `flexjd-site` canonical deployment/repository.
- Verified: 20 live HTML routes; ten JSON sections/372 rows; local search/category filtering; seven campaign guides; four class-year guides; guide/newsletter/glossary/changelog; privacy/disclaimer/request routes; policies and workflows.
- Not verified: 372 substantive or current opportunities; every external link; every institutional/legal/bar/financial/crisis claim; Northeastern/NUSL/SBA commission, approval or maintenance; durable succession.
- Describe the achievement as student-centered service/information architecture and governance intent, with remediation pending.
- Do not say “complete,” “372 verified opportunities,” “kept current,” “primary sources only,” or “maintained community infrastructure” without the required qualification and evidence.
