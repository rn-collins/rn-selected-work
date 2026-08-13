# NSAG M9 — Route and Control Ledger

Status vocabulary: **verified** = directly established from production response/source; **broken** = production behavior cannot fulfill its purpose; **simulated** = UI implies functionality or differentiation that is not implemented; **inaccessible** = later state cannot be reached in the conforming production experience; **unverified** = external implementation/evidence was unavailable.

## Routes and dependencies

| Surface | Method/state | Status | Evidence |
|---|---|---|---|
| `https://nsag-m9.vercel.app/` | GET | Verified 200 | 71,396-byte HTML exactly matches Git blob `120c7afc7dc957fa374f1e116c66c73c8375e1eb`. |
| `/robots.txt` | GET | Verified 404 | No crawler policy. |
| `/sitemap.xml` | GET | Verified 404 | Page nevertheless links to it. |
| `/privacy`, `/terms` | discoverability | Broken/absent | No routes or links exist in the only-file repository. |
| `/api/track` | POST | Broken | No function exists in the static repo; page-view/scroll requests are fire-and-forget and fail silently. |
| `/_vercel/insights/script.js`, `/_vercel/speed-insights/script.js` | GET/runtime | Partially verified | Referenced Vercel assets; analytics data handling is not disclosed locally. |
| Chart.js on jsDelivr | runtime | Broken | Production CSP `script-src` omits `cdn.jsdelivr.net`; `Chart` is unavailable. |
| jsPDF on cdnjs | runtime | Broken | CSP omits `cdnjs.cloudflare.com`; additionally `generateResultPDF()` has no call site. |
| Google Fonts | runtime | Verified/configured | Allowed by `style-src`/`font-src`. |
| `nsag-api.vercel.app/api/lead` | POST | Unverified and unsafe failure semantics | API implementation/storage unavailable; callers do not check `response.ok`. |
| NSAG parent, M3, M4, M11, Aloha AI, legacy RN portfolio | external navigation | Discoverable | Hard-coded external links; canonical portfolio relationship is inconsistent. |

## Journey and controls

| Control/state | Intended behavior | Classification | Finding |
|---|---|---|---|
| Initial load | Render radar and questions | **Broken** | `initRadar()` throws at `new Chart`; initialization aborts after question screens are built but before usable flow verification. Production journey is not reliable under its own CSP. |
| Begin | Open sector selector | **Verified in code; runtime impaired** | Calls `showSectorStep()`. |
| Four sector buttons | Personalize assessment | **Simulated** | Only sets `selectedSector`; value is never consumed. Default stale value is `legal-aid`. |
| Continue | Start Q1 | **Verified in code; inaccessible downstream** | Same questions/results for every sector. |
| 12 answer sets | Record score, flash rationale, advance | **Inaccessible/broken** | All two questions per dimension are exact duplicates; all 12 share identical generic options. First selection calls broken `updateRadar()` before advancing if Chart did not initialize. |
| A–D keyboard shortcut | Choose option | **Code-backed** | No focus announcement; keys may trigger unexpectedly while a screen is active. |
| Back | Revisit prior answer | **Absent** | `prevQuestion()` exists but no discoverable rendered control invokes it. |
| Email gate | Reveal result and send report | **Misleading** | Email mandatory; sends derived result data to lead API, yet copy says answers stay in browser and promises a PDF. |
| Tier result | Show maturity result | **Inaccessible/code-backed** | Authored thresholds; cinematic overlay incorrectly says “Your M1 governance tier.” |
| PDF | Download report | **Broken** | jsPDF blocked and `generateResultPDF()` is definition-only. |
| Recommendation | Tailored next step | **Code-backed, unvalidated** | Organization-level inference from one respondent and duplicated items. |
| Share | Native share/clipboard | **Partially simulated** | Text says organization “scored”; URL is stale `nsag-site.vercel.app/m9`; clipboard errors are not handled. |
| Print | Browser print | **Code-backed** | No production print/accessibility verification. |
| Toolkit waitlist | Submit email, confirm | **False success** | Disables button and promises personal email regardless of HTTP status; $500 product/delivery unverified. |
| Contact modal | Submit lead | **False success** | Closes and clears on any resolved HTTP response; failure is silent. Missing dialog semantics/focus/Escape behavior. |

## Scoring ledger

- 12 items, nominally two for each of six dimensions; each item scores 1–4.
- Every pair is verbatim duplicated. Every item uses the same compound maturity ladder.
- Total average bands: PIONEERING `>=3.5`, EMERGING `>=2.5`, DEVELOPING `>=1.5`, otherwise EARLY STAGE.
- Dimension sum bands: Strong `>=7`, Partial `>=5`, Emerging `>=3`, otherwise Absent.
- No unknown/N/A, evidence upload, respondent role, corroboration, missing-data rule, validation sample, reliability, weighting rationale, jurisdiction, or uncertainty.
- Operational interpretation: repeated self-rating of generic policy formality, monitoring, quarterly leadership review, and named-role accountability—not valid measurement of screening, EHR design, provider competence, interaction governance, disclosure safety, or QI performance.

## Data ledger

| Trigger | Data leaving browser | Disclosure quality |
|---|---|---|
| Page load/scroll | referrer, UTM values, depth/event to nonexistent local endpoint | No local privacy notice for analytics; endpoint broken. |
| Result gate | email, module, tier, overall percentage, six dimension sums, timestamp | Copy obscures that derived assessment data leaves browser; no retention/deletion/controller/security disclosure. |
| Waitlist | email, source, purchase-interest message, timestamp | No terms, consent separation, or confirmed product fulfillment. |
| Contact | name, email, free-text message, source | No warning against patient/health information; API governance unverified. |

