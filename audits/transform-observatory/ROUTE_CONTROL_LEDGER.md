# Transform Drug Market Transition Observatory — R9 route/control ledger

Audit date: August 13, 2026 HST  
Canonical deployment: <https://transform-observatory.vercel.app/>  
Repository: private/inaccessible `rn-collins/transform-observatory`  
Mode: read-only; no alert, contact, seed, or consequential submissions

## Coverage boundary

Eight public routes were downloaded and inspected: home plus seven dimension pages. The implementation is a pre-rendered Next.js information product with static embedded records and client alert/contact controls. There is no demonstrated crawler, scheduler, ingestion pipeline, database console, changelog, diff engine, validation workflow, public API, or delivered weekly digest.

## Route inventory

| Route | Main scope | Status |
|---|---|---|
| `/` | overview, framework, headline statistics, 7 tabs | `200` |
| `/tab/corporate-capture` | capture toolkit, actors/comparators | `200` |
| `/tab/patents-ip` | patents, Lykos, standards, cases | `200` |
| `/tab/indigenous-knowledge` | FPIC, Nagoya, cases/models | `200` |
| `/tab/state-equity` | vendor equity, reparative pillars, jurisdictions | `200` |
| `/tab/development-lens` | UNDP/development/ecology | `200` |
| `/tab/commercialisation-index` | tiers, MCDA, scored developments | `200` |
| `/tab/research-notes` | Transform biography/output/implementation/bibliography | `200` |
| `/privacy`, `/terms`, `/sitemap.xml`, `/robots.txt` | policy/machine paths | all `404` despite sitemap link |
| `/api/track` | analytics | `404` |
| `/api/alert`, `/api/seed` | client feature endpoints referenced | existence/authorization not proven; no writes attempted |

Every tab incorrectly emits the home URL as `<link rel=canonical>` while its OG URL is route-specific, risking search consolidation and attribution ambiguity.

## Controls and implementation

| Control | Scope | Finding |
|---|---|---|
| seven home cards | internal navigation | real route navigation |
| tab navigation | 8 links per page | horizontal navigation; responsive overflow |
| alert subscription | each tab | UI/API intent; fulfillment, confirmation, unsubscribe, cadence and privacy unverified |
| contact | footer mailto/LinkedIn and modal controls in client bundle | no governed support/intake record verified |
| research-note seed/admin references | client routes mention `/api/seed` | operational/auth boundary unverified; must not be public-write capable |
| external source links | inconsistent | many “source anchors” and bibliography records are prose, not clickable primary sources |
| related tools | 3 cards | navigation only; sibling claims inherit their own audit limits |

## Currentness and data-quality defects

- Home claims “living intelligence platform,” “Last updated July 27, 2026,” and “Weekly digest Mondays 8am HST,” but no automated refresh/digest evidence exists.
- Several pages include “active,” “monitor,” scoring labels and refresh triggers without update history, owner, source timestamp, review state or correction log.
- A major legal error states “DEA proposed rescheduling of psilocybin to Schedule III” in 2024. This appears to conflate cannabis rescheduling or a petition/request with an actual DEA proposal; it must be removed until primary Federal Register/DEA evidence is produced.
- FDA “rejection” of Lykos is imprecise; use Complete Response Letter/nonapproval and current company/regulatory status from FDA/primary sources.
- Colorado Prop 122 substance descriptions, Oregon/Colorado tier classifications, patent/legal status, Nagoya applicability, state equity results and global implementation claims require jurisdiction-specific current review.
- Headline `$600bn–$1tn`, 316 million and 500 million+ figures lack direct source links/definitions/year/method.
- Quotes and “unique authority,” “unprecedented,” “most significant,” “proof of concept,” and “no platform does X” are editorial judgments presented as fact.
- Scored “Sweet Spot,” “capture,” tiers and MCDA classifications expose no transparent scoring provenance, reviewer, uncertainty or appeal.

## Affiliation/authorship risk

The home looks like a Transform-branded monitor and repeatedly says “Transform ... Framework Monitor.” Research Notes discloses that this is one of three deliverables “being sent to Steve Rolles,” says he told RN there were potentially discrete opportunities, and says it is designed to sit inside Transform’s ecosystem. It also says the tool operationalizes the framework “not to analyse it from the outside.” Those statements conflict with the portfolio’s independent/not-affiliated boundary and can imply inside status, authorization, relationship or endorsement. The site needs a prominent, global disclosure: independently built; not commissioned, authorized, reviewed, approved, affiliated with, endorsed by, or speaking for Transform/Steve Rolles; cited frameworks remain theirs; interpretations/scores are RN’s.

## Privacy/security/accessibility

- Alert emails and contact data lack privacy notice, controller, purpose, retention, processors, consent, unsubscribe and deletion process.
- Drug-policy subscriptions can reveal sensitive political/professional interests.
- No public terms/corrections/methodology/editorial/conflicts policy.
- CSP is present and permits RN API; `unsafe-inline`/`unsafe-eval` weaken it.
- Potential `/api/seed` must require strong auth, method controls, rate limiting and audit logs; no safe write test was performed.
- Main semantic structure exists; tab nav has an aria label. No skip link was observed.
- Dense cards, tiny 10–12px mono text, low-contrast grays, large horizontal nav and color/status labels need WCAG testing.
- Alert/contact state, errors, keyboard/focus, mobile reflow and screen-reader announcements remain unverified.

## RN portrait/authorship audit

No `<img>`, RN portrait, portrait alt text, or OG/social image appears on any of eight routes. Authorship is visible via “Contact the Builder,” RN email/LinkedIn, Aloha AI and stale RN Builds links, but no precise independent-author disclosure exists. A portrait is not strategically warranted in policy-monitoring content or each tab; it could intensify implied personal/Transform authority. If founder-led transparency is chosen, add exactly one verified local portrait to an independent-builder/About disclosure on the home page immediately before footer/contact, with documented source/rights, alt “RN Collins, independent builder of the Observatory,” intrinsic dimensions, optimized delivery and tested mobile/desktop crops. Do not place Transform marks behind/adjacent in a way implying employment. Prefer a purpose-built, non-Transform-branded Observatory diagram/card for OG/social; current metadata has no image.

## Exact portfolio boundary

This is exactly one build/case with seven internal dimensions. Verified: eight public information routes, static records, framework/tier/scoring architecture, source labels, alert UI and contact/authorship links. Not verified: automated monitoring, longitudinal refresh, weekly digest, alerts, database, crawler, ingestion, legal accuracy, scoring validity, Transform relationship, stakeholder review or policy impact.

