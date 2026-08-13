# RN Selected Work — Build Crawl Audit

Last updated: 2026-08-12 (HST)

## What this ledger does

This file prevents the portfolio from confusing three different levels of review:

1. **Reachability crawl** — fetch the public root and discover same-origin links present in rendered HTML.
2. **Route and link audit** — visit every discovered route, check destinations, and reconcile broken or templated links.
3. **Interactive product audit** — exercise buttons, menus, filters, forms, drawers, calculators, downloads, responsive states, keyboard behavior, error states, and persistence without completing consequential external actions.

The 2026-08-12 pass completed level 1 across all 29 Build Atlas sites and sampled internal routes (up to 15 per site). It did **not** complete levels 2 and 3 for every site. Case studies must therefore remain architectural summaries with explicit evidence boundaries until the corresponding deeper audits are complete.

## Reachability crawl results

“Controls” counts button, input, select, and textarea elements found in fetched HTML. It does not mean those controls were clicked or functionally verified. “Remaining” is the number of discovered same-origin routes beyond the 15-page sampling cap. Missing `/sitemap.xml` files are recorded but are not treated as broken user-facing product routes.

| Build | Pages sampled | Remaining | Controls found | External-link references | Crawl findings |
|---|---:|---:|---:|---:|---|
| Aloha AI | 15 | 16 | 24 | 13 | Sample cap reached; deeper route audit required |
| The Sovereign Stack | 6 | 0 | 18 | 0 | No fetch errors in discovered routes |
| AI Build Budget Calculator | 2 | 0 | 44 | 4 | `/sitemap.xml` absent |
| Source Integrity Audit | 2 | 0 | 18 | 10 | `/sitemap.xml` absent |
| One-Person-Firm OS | 2 | 0 | 22 | 8 | `/sitemap.xml` absent |
| AI for Developing Brains | 2 | 0 | 26 | 14 | `/sitemap.xml` absent |
| Transform Drug Market Transition Observatory | 15 | 0 | 69 | 45 | Missing sitemap and one analytics asset reference observed |
| Zero → Frontier | 15 | 12 | 29 | 19 | Sample cap reached; sitemap absent |
| Psych Ops Directory | 2 | 0 | 32 | 14 | `/sitemap.xml` absent |
| Set for Life | 2 | 0 | 18 | 9 | `/sitemap.xml` absent |
| The Psychonaut Bookworm | 2 | 0 | 40 | 8 | `/sitemap.xml` absent |
| Startup Legal Risk Monitor | 3 | 0 | 10 | 9 | Literal `${sig.url}` destination found; sitemap absent |
| Nervous System Studio | 3 | 0 | 35 | 7 | Literal `${u}` destination found; sitemap absent |
| The Psychedelic Law Library | 15 | 132 | 7 | 29 | Large route set; sample cap reached; sitemap absent |
| EOLPC Knowledge System | 5 | 0 | 17 | 11 | Literal `${a.url}` and `${t.url}` destinations found; sitemap absent |
| Entheogen Atlas | 2 | 0 | 74 | 24 | `/sitemap.xml` absent |
| Cannabis Healthcare Education Impact Assessment | 2 | 0 | 30 | 7 | `/sitemap.xml` absent |
| Destigmatization Toolkit | 2 | 0 | 51 | 108 | `/sitemap.xml` absent; external-source audit remains |
| Evidence·Studio | 13 | 0 | 105 | 2 | `/sitemap.xml` absent |
| Aloha Build Club | 2 | 0 | 23 | 15 | No fetch errors in discovered routes |
| REGAC | 2 | 0 | 19 | 11 | `/sitemap.xml` absent |
| NARCH | 2 | 0 | 9 | 16 | `/sitemap.xml` absent |
| Burgermeister Expansion Intel | 15 | 20 | 103 | 48 | Sample cap reached; sitemap absent |
| Psych Ops Intel | 3 | 0 | 66 | 21 | No fetch errors in discovered routes |
| GAPI | 2 | 0 | 9 | 15 | `/sitemap.xml` absent |
| Women’s Neuro-Health | 2 | 0 | 9 | 17 | `/sitemap.xml` absent |
| SPORT | 2 | 0 | 9 | 14 | `/sitemap.xml` absent |
| Inflection Radar | 5 | 0 | 16 | 0 | No fetch errors in discovered routes |
| Creator Rights Framework | 3 | 0 | 10 | 6 | `/sitemap.xml` absent |

## Priority corrections discovered

- Inspect and correct literal template destinations on Startup Legal Risk Monitor, Nervous System Studio, and EOLPC Knowledge System before any case study describes their outbound evidence flows as fully operational.
- Complete uncapped route audits for Psychedelic Law Library, Aloha AI, Zero → Frontier, and Burgermeister Expansion Intel.
- Test high-control builds manually first: Evidence·Studio, Burgermeister Expansion Intel, Entheogen Atlas, Transform Observatory, Psych Ops Intel, and Destigmatization Toolkit.
- Verify every external evidence/source link in source-heavy products separately from same-origin navigation.
- Do not submit contact forms, enrollment forms, subscriptions, purchases, or other consequential actions during QA.

## Case-study rule

A case study may state what the public artifact presents and what architecture is visible. It may not state that every workflow, source, calculation, data operation, form, payment path, or outcome is verified unless this ledger records the relevant interactive and evidence audit as complete.

## RN Selected Work production verification

Completed after the organized-atlas and publication-archive deployment on 2026-08-12:

- 43 internal pages and first-party assets fetched successfully.
- 620 internal link references checked with no failed destination.
- All six featured-build case studies and all 29 Build Atlas case studies are reachable.
- All 29 Atlas records expose both a case-study link and a live-build link.
- All 29 Atlas records appear exactly once across five primary collections: 8 governance/institutional, 7 decision-intelligence, 6 evidence/knowledge, 5 education/capability, and 3 independent-practice/implementation builds.
- Nine substantively applicable builds are cross-listed in the institutional-work section without changing their primary collection or number.
- The writing archive renders 71 publication records: 28 Fat Nugs Magazine articles, 40 Cannabis Law Report publication URLs, and three Cannabis Law Journal editions. Known duplicates and republications are labeled.
- 106 unique external destinations were tested from the homepage and writing archive. 105 returned ordinary successful responses. LinkedIn returned its automation-specific status 999; this is not treated as evidence that RN's profile URL is broken.
- Desktop rendered inspection at 1363 pixels showed no horizontal overflow. The homepage and writing archive both reported a document width narrower than the viewport.
