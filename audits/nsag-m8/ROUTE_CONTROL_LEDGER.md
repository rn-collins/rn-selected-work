# NSAG M8 — Stage A Route and Control Ledger

Audit date: 2026-08-12 (HST)  
Canonical parent: `https://nsag-site.vercel.app/m8`  
Deployed assessment: `https://nsag-m8.vercel.app/`  
Repository: private `rn-collins/nsag-m8`  
Disposition recommendation: **C — component of NSAG**

## Route ledger

| Route/source | Status | Role | Finding |
|---|---:|---|---|
| `/` | 200 | 12-item assessment | Loads HTML, but CSP blocks both external application libraries; assessment is not operable in a conforming browser. |
| `/robots.txt` | 404 | discovery | Missing. |
| `/sitemap.xml` | 404 | discovery | Declared in HTML but missing. |
| `/privacy` | 404 | privacy | No assessment-local privacy route despite email and dimension-level data collection. |
| `/terms` | 404 | terms | Missing. |
| `/api/track` POST | 404 | analytics | Page-view and scroll calls fail silently. |
| `https://nsag-site.vercel.app/m8` | 200 | canonical module page | Correct canonical narrative home and launch point; its evidence claims need tightening. |
| `https://nsag-site.vercel.app/advisory` | 200 | conversion | Live. |
| Outlook Book With Me | externally hosted | scheduling | Hard-coded personal/institutional booking URL; must be monitored and privacy-disclosed. |
| `https://nsag-api.vercel.app/api/lead` | cross-origin API | results/contact/waitlist | CSP permits it, but the UI treats any resolved HTTP response as success and suppresses failures. Contract, retention, consent, access control, and deletion were not verifiable from this repository. |
| `https://nsag-m12.vercel.app/` | 200 | related module | Live. |
| `https://nsag-m13.vercel.app/` | 200 | related module | Live. |
| `https://nsag-m10.vercel.app/` | 200 | related module | Live. |
| `https://aloha-ai-consulting.vercel.app/` | 200 | builder attribution | Live. |
| `https://rn-portfolio-khaki.vercel.app/` | live when tested | legacy portfolio | Labelled “RN Builds”; canonical brand destination should be reconciled with RN Selected Work. |

## Control/state ledger

| Control/state | Intended behavior | Observed/code-backed result | Classification |
|---|---|---|---|
| Begin Challenge | opens sector step | Works if initialization completed. | conditional |
| Four sector buttons | select institutional context | Selection only changes `selectedSector`; no question, scoring, result, or guidance uses it. | simulated personalization |
| Continue | starts assessment | Enabled after sector click. | conditional |
| A–D option buttons / keyboard A–D | record 1–4 and advance | `selectOpt()` calls `updateRadar()` before advance. Because Chart.js is CSP-blocked, `Chart` is undefined during initialization; application initialization fails and questions are not built. | broken / P0 |
| Back | return to prior question | No visible back control is generated even though `prevQuestion()` exists. | unreachable code |
| Progress | show 0–12 completion | Formula displays 0/12 at first question and updates by question index, not answered count. | misleading |
| Rationale flash | explain answer | Appears briefly for 900 ms; not announced via live region and disappears before some users can read it. | accessibility defect |
| Email gate | reveal results / promised PDF | Requires syntactically email-like string. Results payload is sent; `generateResultPDF()` is never called. | deceptive/broken |
| Tier and six bands | summarize answers | Deterministic thresholds, but unvalidated and institution-level wording exceeds single-respondent data. | real calculation, invalid inference |
| “What this means” | show recommendation | `rec` is computed but never assigned to `#rec-text`; blank. | broken |
| Radar charts | visualize dimension sums | Depend on CSP-blocked Chart.js. | broken |
| PDF generator | create result PDF | Function exists and depends on CSP-blocked jsPDF, but has zero call sites. | dead feature |
| Copy Results | clipboard | Copies percentages despite UI bands and links to parent. No rejection feedback. | partial |
| Share Result | native share or clipboard | Claims “My organization scored…” despite nonvalidated single response; cancellation/rejection not handled. | harmful framing |
| Print | browser print | Invokes print. | real |
| Retake | reload | Reloads and discards state. | real |
| Toolkit waitlist | submit lead then show success | Immediately asserts success and personal response even on HTTP error; only network rejection is swallowed. | false success |
| Contact the Architect | submit lead | Modal lacks dialog semantics/focus trap; closes on every resolved HTTP response, including 4xx/5xx. | partial/false success |
| Escape | close overlays | Handler is empty. | broken |
| Mobile state | responsive assessment/result | CSS is responsive, but mobile result creates another CSP-dependent Chart. No live device/AT matrix is present. | unverified/broken dependency |

## Source and citation ledger

| Claim/source | Result |
|---|---|
| Maslach, Schaufeli & Leiter (2001), DOI `10.1146/annurev.psych.52.1.397` | Real foundational review. Supports burnout dimensions and six Areas of Worklife framing; does not validate this instrument, its scoring, or categorical causal/superlative language. |
| Kiratipaisarl et al. (2024), DOI `10.1186/s12909-024-06195-3` | Real meta-analysis in resident physicians. Parent notes small practical significance; cannot be generalized to all sectors or this specific toolkit. |
| JAMIA DOI `10.1093/jamia/ocaa301` | Real healthcare/EHR literature. Domain-specific; “68% of eligible studies improved burnout” needs the study's outcome definitions and limitations beside the claim. |
| WHO burnout ICD-11 FAQ | Burnout is an occupational phenomenon, not a medical condition; defined by exhaustion, mental distance/cynicism, and reduced efficacy in occupational context. These are not identical to the six Areas of Worklife. |
| EEOC disability/medical-information guidance | Employers must avoid assumptions, handle accommodation case-by-case, limit disability-related inquiries, and keep medical information confidential. The assessment omits these boundaries. |
| Structured debrief after distressing event | The item does not define debrief. Mandatory single-session psychological debriefing is not an evidence-safe default; distinguish optional operational review, psychological first aid, and qualified clinical support. |

## Coverage limits

All discoverable controls, links, routes, scoring branches, payloads, and repository files were statically inspected and endpoint-smoke-tested. Because the production CSP prevents application initialization, later interactive states were validated from source rather than by a successful end-to-end browser run. No source or production files were modified.
