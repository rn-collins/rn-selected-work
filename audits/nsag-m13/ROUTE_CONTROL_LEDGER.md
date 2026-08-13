# NSAG M13 — Route and Control Ledger

Audit date: 2026-08-12 (HST)  
Companion: [`STAGE_A_DOSSIER.md`](./STAGE_A_DOSSIER.md)

## Route ledger

| URL/route | Type | Observed status | Result |
|---|---|---:|---|
| `https://nsag-m13.vercel.app/` | Canonical | 200 | Single static application document. |
| `/robots.txt` | Same origin | 404 | Missing. |
| `/sitemap.xml` | Same origin | 404 | Missing. |
| `/api/track` | Same origin | 404 | Referenced analytics route does not exist here. |
| `/not-a-real-route` | Same origin | 404 | No SPA fallback/hidden route. |
| `https://nsag-api.vercel.app/api/lead` | External API | 405 GET | POST-only behavior indicated; no consequential POST tested. |
| `https://nsag-m11.vercel.app/` | Related module | 200 | External destination resolves. |
| `https://nsag-m3.vercel.app/` | Related module | 200 | External destination resolves. |
| `https://nsag-m8.vercel.app/` | Related module | 200 | External destination resolves. |
| `https://nsag-site.vercel.app/` | Parent practice | 200 | Resolves. |
| `https://nsag-site.vercel.app/advisory` | Advisory | 200 | Resolves. |
| `https://aloha-ai-consulting.vercel.app/` | Builder credit | 200 | Resolves. |
| `https://rn-portfolio-khaki.vercel.app/` | RN Builds footer | 200 | Resolves but is obsolete estate destination. |
| Outlook BookWithMe URL in `BOOK` | Booking | Not transmitted | Contains personal institutional identifier; availability not verified. |
| cdnjs jsPDF 2.5.1 | Script | Blocked by CSP | `script-src` excludes cdnjs. |
| jsDelivr Chart.js 4.4.0 | Script | Blocked by CSP | `script-src` excludes jsDelivr. |
| Google Fonts CSS/fonts | Style/font | Allowed by CSP | Network/render not independently verified. |
| `/_vercel/insights/script.js` | Same-origin analytics | Declared | Behavior/consent unverified. |
| `/_vercel/speed-insights/script.js` | Same-origin analytics | Declared | Behavior/consent unverified. |

No methodology, source, privacy, terms, accessibility, validation, jurisdiction, modality, report-recovery, support, toolkit-detail, checkout, or refund route was discoverable in navigation, HTML, routing config, robots/sitemap, or repository structure.

## Control ledger

| Control/state | Count | Result/status | Notes |
|---|---:|---|---|
| Begin the Challenge | 1 | Working to sector screen | Hides intro, reveals sector selection. |
| Sector buttons | 4 | Visual selection only | Set unused variable; no `aria-pressed`/radio semantics. |
| Continue | 1 | Working to question 1 | Initially pointer-disabled; enables after selection. |
| Answer options | 48 generated | **Blocked after first selection** | First option triggers `updateRadar()`; missing Chart causes failure before transition. |
| A/B/C/D shortcuts | Global | Partial/unreachable | Dispatch to answer buttons; same runtime failure. |
| Back controls | Generated/later | Unreachable | Main flow never reaches later states. |
| Progress/rationale/dimension flashes | Dynamic | Partial/unreachable | No live-region announcement. |
| Email gate | 1 | Unreachable; weak validation | Only tests nonempty and contains `@`. |
| See My Reflection | 1 | Unreachable | Would derive tier and POST data. |
| Radar charts | Desktop + mobile | Broken | Chart library CSP-blocked. Canvas lacks accessible alternative. |
| PDF generation | 1 function | **Missing invocation/broken dependency** | `generateResultPDF()` never called; jsPDF CSP-blocked. |
| Copy Results | 1 | Unreachable | Optional clipboard API; no failure UI. |
| Share Result | 1 | Unreachable | Web Share or clipboard fallback. Wrong doubled title. |
| Print Result | 1 | Unreachable | Calls `window.print()`. |
| Retake | 1 | Unreachable | Reloads page; no confirmation. |
| Advisory CTA | Tier-dependent | Unreachable | Links parent advisory. |
| Discovery booking CTAs | Tier-dependent | Unreachable/unverified destination | Embedded Outlook booking URL. |
| Toolkit waitlist | 3 tier variants | Unreachable; false-success | Immediately confirms, does not test `response.ok`; $500, no checkout. |
| Contact the Architect | 1 fixed button | Opens modal | Dialog semantics/focus management absent. |
| Contact name/email/message | 3 fields | Native required only | Name/email have no labels; message optional. |
| Contact Send | 1 | Unreliable | Any resolved status closes/resets; failure swallowed. |
| Contact Cancel | 1 | Closes modal | No focus return. |
| Escape | Global | Does nothing | Empty handler. |
| Related M11/M3/M8 links | 3 | Resolve 200 | Static related links. |
| Parent/builder/portfolio links | 3 | Resolve 200 | RN portfolio destination obsolete. |

## State/data ledger

| State/data | Storage/transmission | Finding |
|---|---|---|
| 12 answers | In-memory JS array | No persistence/resume; raw answers not directly POSTed. |
| Sector | In-memory variable | Default `legal-aid`; selected value never consumed or transmitted. |
| Derived score/tier/six dimension sums | POST to NSAG API if result reached | Contradicts the unqualified impression that answers stay only in browser. |
| Gate email | POST to NSAG API | Bundles report purpose and optional updates; no separate consent/policy. |
| Contact fields | POST to NSAG API | Success not verified; retention/security unknown. |
| Toolkit email/source/message | POST to NSAG API | Can be blank; false-success UI. |
| Vercel analytics/performance data | Declared scripts | Collection, cookies, vendors, and consent not disclosed here. |

## Responsive/accessibility state boundary

Source includes a mobile breakpoint, visible focus styling, and a reduced-motion media query, but no live browser session was available. Desktop/mobile appearance, zoom/reflow, computed contrast, screen-reader output, and touch targets remain unverified. Deterministic source defects—no landmarks, unlabeled contact fields, non-dialog modal, no focus trap/return, empty Escape, no live regions, incomplete reduced-motion handling, inaccessible canvas, and the blocking runtime error—are recorded in the dossier.
