# NSAG M14 — Stage A Route and Control Ledger

Audit date: 2026-08-12 HST  
Canonical parent: `https://nsag-site.vercel.app/m14`  
Component deployment: `https://nsag-m14.vercel.app/`  
Repository: private `rn-collins/nsag-m14`  
Disposition: **C — NSAG component; release-blocked**

## Route ledger

| Route/destination | Status | Finding |
|---|---:|---|
| `/` | 200 | Static single-page module plus embedded 12-question assessment. |
| `/robots.txt` | 404 | Missing. |
| `/sitemap.xml` | 404 | Declared but missing. |
| `/privacy` | 404 | Missing despite email/result collection. |
| `/terms` | 404 | Missing. |
| `/api/track` POST | 404 | Page/scroll tracking fails silently. |
| `/pdfs/NSAG_M14_Overview.pdf` | 404 | “Download PDF” destination does not exist. |
| `nsag-site.vercel.app/m14` | 200 | Canonical parent and near-duplicate module surface. |
| UNOOSA Outer Space Treaty | 200/source reachable | Authoritative treaty landing page; button incorrectly labelled DOI. |
| NASA Artemis Accords | 200/source reachable | Official source; button incorrectly labelled DOI. |
| Kanas & Manzey DOI | source reachable | Book, not a legal instrument. |
| NASA Stuster PDF | source reachable when tested | Analog/behavioral source; quoted governance-outcome language not verified as a quotation. |
| Related `/m15`, `/m8`, `/m11`, `/m3` | 200 on parent host when tested | Live module pages. |
| Outlook booking | external | Live scheduling destination when tested. |
| `nsag-api.vercel.app/api/lead` | external API | Receives assessment, PDF-download, and contact leads; backend unverified. |
| Aloha AI / legacy RN Builds | live when tested | Builder/portfolio attribution; legacy portfolio needs canonicalization. |

## Control/state ledger

| Control/state | Intended behavior | Observed/code-backed behavior | Class |
|---|---|---|---|
| Desktop navigation and CE dropdown | Navigate NSAG | Hover-only dropdown is weak for keyboard/touch; links are parent-host relative but deployment duplicates parent IA. | partial |
| Mobile menu | Toggle nav | Button exists; menu behavior present in page scripts/CSS; accessible expanded state not maintained. | partial |
| Hero assessment/evidence CTAs | Anchor within page | Work. | working |
| 12 radio groups | Sequential 1–5 responses | Works in-source: selecting auto-advances after 300 ms and destroys prior question; no Back/review/change. | partial |
| “No email required to start” | Start freely | True literally, but email is mandatory to see any tier/report. | misleading |
| Get My Tier Report | Validate, calculate, show | Uses `includes('@')`; calculates generic maturity tier and submits email/tier/average. | partial |
| Dimension report | Name and explain dimensions | Output labels only “Dim 1”–“Dim 6”; no interpretation/action. | broken promise |
| Copy Results | Copy result | Copies only tier, with no success/failure state or context. | partial |
| Overview PDF | Download after email | API request is fire-and-forget; immediately claims opening; linked PDF returns 404. | broken/false success |
| Contact modal | Send lead | Closes/resets on any resolved HTTP response; no `response.ok`; inaccessible dialog. | partial/false success |
| Page/scroll analytics | Track | `/api/track` 404; failures swallowed. | broken |
| Return/reload | Preserve assessment | No persistence; prior answers inaccessible during flow. | missing |

## Instrument ledger

| Dimension | Items | Validity finding |
|---|---|---|
| Jurisdictional clarity | Document exists; annual review | Does not identify state(s), registry, launch/space object, operator, mission phase, licenses, applicable law, or conflicts. |
| Crew rights/autonomy | Protocol exists; accessible | Existence/access does not establish lawful, enforceable, safe, or mission-compatible rights. |
| Medical/clinical | Written standards; quarterly report | Omits consent, emergency authority, research/occupational-care distinction, licensure, confidentiality, evacuation, telemedicine, and scarce-resource allocation. |
| Community/social | Process; independent mechanism | Undefined population, authority, procedure, due process, remedy, and relationship to command. |
| Commercial accountability | Document; QI metrics | Omits authorization/supervision, liability, insurance/cross-waivers, registration, procurement, ownership/resources, consumer/labor rules. |
| Reintegration | Framework; annual stakeholder review | Relevant but cannot represent one-sixth of “interplanetary jurisdiction”; omits longitudinal health, disability/employment, research data and privacy. |

Scoring averages ordinal self-report answers, weights all items equally, and applies authored thresholds (≥4.5/≥3.5/≥2.5). There is no validation, evidence requirement, unknown/N/A, role, mission type, jurisdiction, reliability, or legal accuracy check.

## Coverage boundary

All discoverable routes, anchors, links, controls, generated states, scoring/output/API code, headers and repository files were inspected. Safe controls were evaluated without submitting lead forms. No source or RN Selected Work file was modified.
