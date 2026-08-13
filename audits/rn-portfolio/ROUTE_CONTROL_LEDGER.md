# RN Portfolio — Route and Control Ledger

Audit date: August 12–13, 2026 (HST)

Final production check: a permanent redirect propagated after the initial crawl. All tested legacy routes now return HTTP 308 to the same path on `rn-selected-work.vercel.app`. Root retirement works; several preserved subpaths resolve to 404 on the successor. The ledger retains the crawl result and separately states the final state.

## Route ledger

| Route | Source | Result | Final treatment |
|---|---|---|---|
| `/` | canonical/robots/sitemap | 200 old SPA during crawl; final 308 to successor `/` | Redirect active; verify aliases/caches |
| `/privacy` | footer/sitemap/rewrite | 200 during crawl; final 308 to successor `/privacy` → 404 | map to a real current privacy route |
| `/privacy.html` | repository | 200 during crawl; final 308 to successor `/privacy.html` → 404 | map to a real current privacy route |
| `/robots.txt` | repository | 200 old file during crawl; final 308 | successor owns robots |
| `/sitemap.xml` | head/robots | 200 old sitemap during crawl; final 308 | successor owns sitemap |
| `/data/builds.json` | JS fetch | 200 with 82 records/internal fields during crawl; final 308 → successor 404 | exposure contained; purge/cache/incident follow-up |
| `/og-image.png` | metadata/repository | repository asset | supersede with current portfolio OG |
| `/api/track` | scroll tracker | 404 during crawl; final 308 → successor 404 | remove; do not preserve path |
| `/api/lead` | contact form | 404 during crawl; final 308 → successor 404 | remove; do not submit or preserve path |
| `/for/culturalyst` | comparison probe | 404 | current successor owns `/for/*` |
| `/case/ownership-platform` | comparison probe | 404 | current successor owns `/work/*` |

## Primary UI controls

| Control | Result | Classification |
|---|---|---|
| Skip to main | moves to main content | Working |
| Builds tab | renders 82 build registry cards | Working but misleading/unsafe |
| Writing tab | renders hard-coded writing index | Working |
| About tab | renders long biography and CTA | Working, stale |
| All filter | all registry records | Working |
| Dashboards filter | schema value `Monitoring` only | Working, label mismatch |
| Prospect Tools filter | schema value `Prospect Tool` | Working |
| Products filter | schema value `Product` | Working |
| Reference Docs filter | schema value `Static` | Working, label mismatch |
| 82 build URLs | external new-tab links | Inventoried; health unverified |
| Internal triangle | opens PIN overlay | Working, inaccessible name |
| PIN input/Unlock | `2029` reveals already-public fields | Simulated security/broken boundary |
| PIN Cancel/backdrop | closes overlay | Working; no Escape/focus return |
| Email contact FAB | copy email/open mailto + tracking | Partial/inconsistent privacy |
| Contact Architect | opens modal | Partial accessibility |
| Contact Send | POST `/api/lead`, then hides on 404 | Broken/false success |
| Contact Cancel/backdrop | hides modal | Working; no focus return |
| Footer email copy | clipboard/mailto | Partial |
| Footer links | Aloha AI, LinkedIn, CLR, FNM, Privacy, AIAPC | External inventoried |
| Book a scoping call | Microsoft Bookings | External/consequential, not submitted |
| “See the builds” | links to same old homepage | Redundant/self-link |

## Writing controls

| Filter | Hard-coded count | Result |
|---|---:|---|
| All | 70 | renders all |
| Cannabis Law Report | 36 | renders category |
| Fat Nugs Magazine | 24 | renders category |
| Journal of Biophilic Design | 5 | renders category |
| Academic | 4 | renders category |
| New Bones Mag | 1 | renders category |

All article links open external destinations. Authorship, alias, publication date, and link health remain subject to the editorial inventory audit.

## Registry/data controls

`data/builds.json` distributions:

- Status: Live 72; soon 6; archived 2; pending-vercel 1; internal 1.
- Brand: Aloha AI 46; NSAG 22; 14 records across other labels.
- Types: Platform 25; Tool 18; Monitoring 11; Product 8; Prospect Tool 6; Static 4; Content Tool 4; Consulting Site 2; Newsletter/Content Platform 1; Research Tool 1; Backend 1; Interactive Explainer 1.
- The filter bar addresses only four non-All values; eight type values cannot be selected directly.
- `target` and `slack` values are delivered publicly. The PIN changes CSS/render state, not data access.

## Product/service control groups

| Group | Examples | State defect |
|---|---|---|
| Live products | legal templates, AI guides, regulatory reports, education editions | Gumroad/fulfillment/terms not verified |
| Services | legal/regulatory research, AI systems, retainers | scope/licensure/client terms absent |
| Courses/toolkits | NSAG M1–M15 at stated prices | largely waitlist; module audits release-blocked |
| CE tracks | 15-module core, CLE, CNE, CME | accreditation claims unverified/high risk |
| Subscriptions | Clerking tiers, Tag Bank, intelligence, retainers | renewals/delivery/refunds absent |
| Coming soon | Clerking, Set for Life, AIAPC products | dates/status stale |
| Waitlist links | many use `#` | inert; no signup mechanism |

## Analytics and privacy controls

| Event/control | Destination/data | Finding |
|---|---|---|
| Page view | Aloha DEA Tracker `/api/lead` | cross-site synthetic lead record |
| Tab switch | same | tracking not disclosed accurately |
| Time on page | same | triggered before unload after 10s |
| Scroll 25/50/75/90 | same | tracking not disclosed accurately |
| Product click | same | tracks Gumroad clicks |
| Referrer | same | included in payload |
| UTM capture | sessionStorage | stored and attached conceptually |
| Second scroll event | local `/api/track` | 404 |
| Contact form | local `/api/lead` | 404, false-success behavior |
| Privacy copy | says no tracking analytics | contradicted by implementation |

## Canonical comparison

| Capability | Old `rn-portfolio` | Canonical `rn-selected-work` |
|---|---|---|
| Public identity | RN Builds/store/registry | RN Selected Work |
| Build representation | 82 flat/mixed records | 6 featured + 29 organized Atlas records |
| Case study | none | individual `/work/*` pages |
| Live build link | yes | separate “Open live build” action |
| Audience due diligence | none | `/for/*`, including Culturalyst |
| Internal data | publicly delivered behind cosmetic PIN | not part of public portfolio architecture |
| Status language | primarily Live | more explicit concept/private/active labels, still dossier reconciliation needed |
| Brand structure | conflates Aloha AI and NSAG | structurally closer to required separation |
| SEO | self-canonical old domain | should be sole canonical public portfolio |

## Redirect/archive map

1. Confirm `/data/builds.json` is absent from active deployments/caches and complete exposure follow-up; the 308 now contains ordinary access.
2. Confirm every old alias serves the redirect and no historical deployment remains publicly aliased.
3. Replace cross-estate links to the old domain.
4. Keep the active 308 `/` → `https://rn-selected-work.vercel.app/`.
5. Replace path-preserving redirects for `/privacy` and `/privacy.html` with a real current privacy destination; do not leave successor 404s.
6. Remove old sitemap/OG/canonical after redirects verify.
7. Migrate private registry/audit evidence; archive repository; retain D record in master ledger.
