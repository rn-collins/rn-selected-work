# NSAG M11 — Stage A Route and Control Ledger

Audit date: 2026-08-12 HST  
Canonical parent: `https://nsag-site.vercel.app/m11`  
Assessment: `https://nsag-m11.vercel.app/`  
Repository: private `rn-collins/nsag-m11`  
Recommended disposition: **C — NSAG component; release-blocked**

## Routes and destinations

| Route/destination | Status | Finding |
|---|---:|---|
| Assessment `/` | 200 | Static 74,971-byte app. Core flow is broken by CSP-blocked Chart.js. |
| `/robots.txt` | 404 | Missing. |
| `/sitemap.xml` | 404 | Declared in HTML but missing. |
| `/privacy` | 404 | No local privacy notice despite email and derived assessment submission. |
| `/terms` | 404 | Missing. |
| `/api/track` POST | 404 | Page-view and scroll analytics fail silently. |
| `nsag-site.vercel.app/m11` | 200 | Correct canonical module page; evidence and scope need correction. |
| `nsag-site.vercel.app/advisory` | 200 when tested | Advisory conversion destination. |
| `nsag-api.vercel.app/api/lead` | cross-origin | Receives report, waitlist, and contact payloads; implementation/retention not in this repository. UI does not check `response.ok`. |
| Outlook Book With Me | external | Scheduling destination; privacy boundary not explained. |
| `nsag-m2.vercel.app` | live when tested | Related module. |
| `nsag-m9.vercel.app` | live when tested | Related module. |
| `nsag-m13.vercel.app` | live when tested | Related module. |
| Aloha AI | live when tested | Builder attribution. |
| legacy RN portfolio | live when tested | Labelled RN Builds; reconcile to RN Selected Work. |

## Control and state ledger

| Control/state | Intended | Observed/code result | Class |
|---|---|---|---|
| Begin Challenge | Open sector selection | Conditional on initialization. | conditional |
| Hospital/practice/payer/health-tech buttons | Personalize scenarios | Writes `selectedSector`; value is never used. Default is stale `legal-aid`. | simulated |
| Continue | Open Q1 | Works only if initialization completed. | conditional |
| 12 A–D controls / A–D keys | Score and advance | Questions are generated before `initRadar`, but `new Chart()` then throws because CSP blocks CDN; first selection calls `updateRadar()` and freezes. | broken/P0 |
| Question content | Measure six dimensions | Each pair is textually identical; all 12 use the same four generic maturity answers. | simulated instrument |
| Back | Revisit answer | `prevQuestion()` exists; no back button rendered. | unreachable |
| Progress | Completion | Uses index rather than completed answers; Q1 shows 0/12. | misleading |
| Email gate | Deliver PDF | Email mandatory; PDF generator is never called. | broken/deceptive |
| Tier/bands | Governance result | Real arithmetic on invalid duplicated items; not a validated assessment. | invalid inference |
| “What this means” | Display recommendation | `rec` computed but never assigned to `#rec-text`. | broken |
| Result copy/share | Export result | Claims institution scored; clipboard failure not handled. | overclaim |
| PDF generator | Save PDF | Zero call sites; jsPDF also CSP-blocked. | dead feature |
| Toolkit waitlist | Register interest | Immediately claims success and one-day reply; HTTP error responses treated as success. | false success |
| Contact modal | Send message | No dialog semantics/focus trap/Escape; every resolved HTTP response closes and clears it. | partial/false success |
| Print/retake | Print/reload | Native print and reload. | working |
| Rationale/cinematic/dimension flash | Feedback | Timed visual-only feedback; no live regions or reduced motion. | inaccessible |

## Claim/source ledger

| Claim/source | Audit result |
|---|---|
| Obermeyer et al., Science 2019, DOI `10.1126/science.aax2342` | Real and relevant to one commercial population-health risk algorithm. The paper estimated the algorithm affected millions and discussed an estimated 200 million people annually in similar systems; copy must not imply the study directly tested 200 million patients. It does not establish that “no hospital” had governance infrastructure. |
| ASTP/ONC Data Brief No. 80 (2025) | Relevant national hospital survey. Parent reports 71% predictive-AI adoption, fewer than half evaluating every model for bias, and 74% distributed accountability. Preserve exact denominator, survey definition, year, and distinction between “every model” and “no governance.” |
| Dermatology disparity, DOI `10.1126/sciadv.abq6147` | Relevant to dermatology AI performance across skin tones; not evidence that all medical AI behaves alike. |
| “Most US hospitals still don’t have this infrastructure” | Not established by “fewer than half evaluate all models for bias”; infrastructure is multidimensional and the cited statistic cannot support the categorical claim. |
| “No hospital using the tool had…” | Not demonstrated by the cited paper as written. Remove or source precisely. |
| “Explanation rights are accountability rights” | Normative principle, not a universal US legal right. Rights vary by decision, actor, system, and jurisdiction. |
| “Regulator, plaintiff’s attorney, or board will eventually ask” | Speculative legal marketing and implied inevitability. Reframe. |
| 18-month regional-health-system vignette | No source, identity, methods, denominator, or data. Label hypothetical/composite or remove. |
| Chicago legal-aid 34% vignette | Wrong module/template contamination and unsupported. Remove. |

## Technical evidence

- CSP permits scripts only from self while runtime libraries are loaded from cdnjs/jsDelivr.
- Security headers otherwise include HSTS, XFO DENY, nosniff, restrictive permissions and referrer policy.
- Repository contains only `.gitignore`, `index.html` (blob `98311237f3f682c09613f8bd5d3afac3a09004b3`), and `vercel.json`; no tests/build/package/server.
- All later result states were inspected from source because production cannot complete the flow.
- No source or RN Selected Work files were modified.
