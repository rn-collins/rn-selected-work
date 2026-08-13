# NSAG M5 — Route and Control Ledger

Audit date: August 12, 2026 HST  
Stage: A, read-only  
Assessment deployment: `https://nsag-m5.vercel.app/`  
Parent module page: `https://nsag-site.vercel.app/m5`  
Repository: private `rn-collins/nsag-m5`, `main`, commit `ef6665c05106692d7d91a76fa06d53d48f51ab2e`

## Route ledger

| Route/destination | Type | Result | Evidence/notes |
|---|---|---:|---|
| `nsag-m5.vercel.app/` | Assessment page | 200 | One static HTML application; 74,074 bytes. |
| `/robots.txt` | Assessment discovery | 404 | Page nevertheless requests indexing with a robots meta tag. |
| `/sitemap.xml` | Assessment discovery | 404 | Advertised by `<link rel="sitemap">` but absent. |
| `/privacy` | Assessment policy | 404 | Email, derived results, waitlist, and contact data are collected. |
| `/terms` | Assessment policy | 404 | No assessment/product terms. |
| `/api/track` GET/POST | Assessment analytics | 404 | Page-view and scroll-depth calls target this missing route; errors are swallowed. |
| `nsag-site.vercel.app/m5` | Parent module page | 200 | The canonical informational M5 page; it links to the standalone assessment and contains an evidence section. |
| `nsag-site.vercel.app/advisory` | Conditional advisory CTA | 200 | Generated for PIONEERING results. |
| Outlook Book With Me | Booking CTA | Not submitted | URL exists; no consequential booking was made. |
| `nsag-api.vercel.app/api/lead` | Lead API | GET/HEAD 405 | Expected POST endpoint. No consequential POST sent. Client payload and error handling inspected. |
| `nsag-m6.vercel.app` | Related module | 200 | Same-tab external navigation. |
| `nsag-m7.vercel.app` | Related module | 200 | Same-tab external navigation. |
| `nsag-m10.vercel.app` | Related module | 200 | Same-tab external navigation. |
| `aloha-ai-consulting.vercel.app` | Build credit | 200 | New tab with `noopener`. |
| `rn-portfolio-khaki.vercel.app` | Legacy portfolio | 200 | New tab; stale RN Builds destination. |
| cdnjs jsPDF 2.5.1 | Dependency | **CSP-blocked** | `script-src` excludes cdnjs. |
| jsDelivr Chart.js 4.4.0 | Dependency | **CSP-blocked** | `script-src` excludes jsDelivr. |
| Google Fonts | Dependency | Allowed | Explicit CSP style/font allowances. |
| `/_vercel/insights/script.js` | Analytics dependency | Declared | Same-origin script; browser network instrumentation unavailable. |
| `/_vercel/speed-insights/script.js` | Performance dependency | Declared | Same boundary. |

## Control and state ledger

| Control/state | Count | Intended result | Audited result |
|---|---:|---|---|
| Begin the Challenge | 1 | Show sector selector | Handler is independent of chart initialization and can show selector. |
| Sector choices | 4 | Choose city, parks, architecture, or community | Sets `selectedSector` and styling. The variable is never read, so this is simulated personalization. |
| Continue | 1 | Start question 1 | Handler opens generated first question. Visually disabled with pointer events before selection but not natively disabled. |
| Assessment answer buttons | 48 | Answer 12 scenarios across 6 dimensions | **Blocked at first answer.** CSP prevents Chart.js; `selectOpt()` calls `updateRadar()`, which dereferences undefined `chart` before advancement. |
| A/B/C/D shortcuts | 4 logical shortcuts | Select answer | Same blocking path. |
| Previous question | Code only | Navigate backward | `prevQuestion()` exists but no back button is rendered. |
| Email gate | 1 field | Reveal result and receive PDF | Unreachable live. Minimal `includes('@')` validation; no separate updates consent. |
| See My Reflection | 1 | Calculate tier, show result, submit lead, download PDF | Unreachable. Code calculates result and POSTs derived data; PDF generator is never called; report is not emailed. |
| Tier results | 4 | PIONEERING / EMERGING / DEVELOPING / EARLY STAGE | Hard-coded mean thresholds; not validated; unreachable live. |
| Dimension bands | 4 labels | Strong / Partial / Emerging / Absent | Based only on two duplicate generic items per dimension; not construct-valid. |
| What this means | 1 result panel | Show tier interpretation | `rec` is assigned but never inserted into `#rec-text`, leaving this central panel blank. |
| Copy Results | 1 | Copy result | Unreachable; copied URL points to parent `/m5` page, not assessment. No clipboard failure state. |
| Share Result | 1 generated | Native share/clipboard | Unreachable; says institution “scored” despite not-validated disclaimer. |
| Print Result | 1 generated | Print result | Unreachable; print CSS exists. |
| Retake | 1 generated | Reload/reset | Unreachable; reload clears state. |
| Advisory Engagement | 1 conditional | Open NSAG advisory | Destination 200; unreachable. |
| Discovery Call | 1 conditional | Open Outlook booking | Destination present; replaces assessment tab; no booking made. |
| Toolkit waitlist — $500 | 1 conditional | POST interest | Unreachable. Declares success immediately even if API fails; toolkit is explicitly unavailable for checkout. |
| M6 / M7 / M10 cards | 3 | Open related modules | All returned 200. |
| Contact the Architect | 1 | Open modal | Opens non-semantic modal with no focus management or Escape close. |
| Contact name/email/message | 3 | Capture lead | Placeholder-only labels; message optional. |
| Contact Send | 1 | POST and confirm | Does not inspect `response.ok`; any resolved HTTP response closes/resets as if successful. |
| Contact Cancel/backdrop | 2 | Close modal | Inline hiding works; focus is not restored. |

## Assessment item ledger

Each dimension receives **two identical prompts** and the same four response choices. Across all twelve questions, the only substantive change is the dimension name. The response ladder is always:

1. documented standards + independent monitoring + quarterly leadership review + named accountability (4);
2. standards generally followed but informal monitoring/review (3);
3. practices depend on individual champions (2);
4. area not formally addressed (1).

This is real code but a simulated domain assessment. It does not ask about illuminance/daylight measures, acoustic exposure/privacy, nature-access specifications, thermal comfort/accommodations, IAQ contaminants/ventilation/response thresholds, or equity distribution evidence. Some rationales do not match their item (nature integration invokes circadian lighting; another invokes staff occupational governance).

## Crawl boundary

The private repository contains only `index.html`, `vercel.json`, and `.gitignore`; no package, tests, functions, hidden routes, or build system exist. A browser executable was unavailable, so no screenshot/device claim is made. Runtime conclusions are HTTP-observed or deterministic source/CSP traces. No form, lead, waitlist, email, report, or booking submission was made.
