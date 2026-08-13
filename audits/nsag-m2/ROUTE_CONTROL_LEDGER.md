# NSAG M2 — Route and Control Ledger

Audit date: August 12, 2026 HST  
Stage: A, read-only  
Canonical deployed interface tested: `https://nsag-m2.vercel.app/`  
Repository inspected: private `rn-collins/nsag-m2`, `main`, commit `d38a3ff2e801756b4a4ec3ed82ea14f87fdf8f5a`

## Route ledger

| Route/destination | Type | Result | Evidence/notes |
|---|---|---:|---|
| `/` | Same-origin page | 200 | One static HTML application. No router or alternate page source exists. Live body differs from repository only by one terminal newline. |
| `/robots.txt` | Same-origin discovery | 404 | Page nevertheless declares `meta name="robots" content="index, follow"`. |
| `/sitemap.xml` | Same-origin discovery | 404 | HTML advertises this nonexistent sitemap with `<link rel="sitemap">`. |
| `/privacy` | Expected policy | 404 | Email, assessment-derived scores, and contact details are collected without a linked privacy policy. |
| `/terms` | Expected policy | 404 | No terms/service or assessment-use policy. |
| `/advisory` | Same-origin guessed route | 404 | The actual advisory CTA uses the parent NSAG domain and returned 200. |
| `/api/track` | Same-origin analytics endpoint | 404 | Both page-view and scroll-depth POSTs target this missing endpoint. Failures are swallowed. |
| `https://nsag-api.vercel.app/api/lead` | External API | GET/HEAD 405 | Method restriction is appropriate. No POST was sent because it would create a real lead. Client POST payloads and failure handling were inspected in source. |
| `https://nsag-m1.vercel.app/` | Related module | 200 | Same-tab external navigation; no `rel` needed without `_blank`. |
| `https://nsag-m11.vercel.app/` | Related module | 200 | Same-tab external navigation. |
| `https://nsag-site.vercel.app/advisory` | Parent-practice CTA | 200 | Generated only for PIONEERING results. |
| Outlook `bookwithme` URL | Booking CTA | Not transaction-tested | Would open an external booking flow. Safe destination is present in source; booking was not made. |
| `https://aloha-ai-consulting.vercel.app/` | Build-credit link | 200 | Opens new tab with `rel="noopener"`. |
| `https://rn-portfolio-khaki.vercel.app/` | Portfolio link | 200 | Legacy RN Builds destination, not RN Selected Work. Opens new tab with `rel="noopener"`. |
| cdnjs jsPDF 2.5.1 | Script dependency | Blocked by site CSP | `script-src` permits only self/inline/eval, not cdnjs. |
| jsDelivr Chart.js 4.4.0 | Script dependency | Blocked by site CSP | `script-src` permits only self/inline/eval, not jsDelivr. |
| Google Fonts CSS/fonts | Style/font dependency | Allowed | Explicitly allowed by CSP. |
| `/_vercel/insights/script.js` | Same-origin analytics script | Declared | No repository-side package or route. Browser runtime could not be instrumented in this environment. |
| `/_vercel/speed-insights/script.js` | Same-origin analytics script | Declared | Same boundary as above. |

## Static controls and resulting states

| ID/control | Count | Intended result | Audited result/status |
|---|---:|---|---|
| Begin the Challenge | 1 | Replaces intro with sector selector | Handler exists and is independent of Chart.js. The sector selector can display. |
| Sector choice | 4 | Select legal aid, court, firm, or policy/regulatory; enable Continue | Handler sets `selectedSector` and chosen styling. **Sector is never used afterward**, so all sectors get identical scenarios/results. |
| Sector Continue | 1 | Start question 1 | Handler opens generated question 1 and updates progress. |
| Assessment options | 48 (12 × 4) | Assign 4/3/2/1, update radar, show rationale, advance | **Blocking failure.** `selectOpt()` assigns the answer and immediately calls `updateRadar()`. Because CSP blocks Chart.js, `initRadar()` failed and `chart` is undefined; `chart.data...` throws before rationale/advance. The first answer cannot complete. |
| A/B/C/D keyboard shortcuts | 4 logical shortcuts | Activate matching visible answer | Listener exists, but reaches the same blocking `updateRadar()` path. It also fires on any active screen and does not exclude text inputs, although no question options exist at the email gate. |
| Back/previous question | Code only | Navigate backward | `prevQuestion()` exists but no generated question contains a back button. Unreachable. |
| Email field | 1 | Gate results and promised PDF | Simplistic `includes('@')` validation; no consent separation. A valid value proceeds without waiting for API success. |
| See My Reflection | 1 | Show tier/dimensions, submit lead, download PDF | Unreachable in deployed journey due chart defect. In code, result rendering and API POST exist, but `generateResultPDF()` is **never called** and no email delivery mechanism is invoked client-side. Promise is false. |
| Copy Results | 1 | Copy tier and dimension percentages | Results-only; not currently reachable. Uses optional clipboard API but provides no fallback/error state when clipboard is unavailable. Copied URL points to nonexistent `nsag-site.vercel.app/m2`, not canonical module. |
| Share Result | 1 generated | Native share or clipboard fallback | Results-only/unreachable. Copy says “scored” despite the UI saying this is not a validated score; URL points to nonexistent parent route. Rejections/errors are not handled. |
| Print Result | 1 generated | Open print dialog | Results-only/unreachable. Print CSS exists; not transaction-tested. |
| Retake Challenge | 1 generated | Reload/reset | Results-only/unreachable. Uses full page reload; no confirmation. |
| Book Advisory Engagement | 1 conditional | Open parent `/advisory` | Generated only for PIONEERING; destination returned 200. |
| Discovery Call | 1 conditional | Open Outlook booking | Generated for all tiers; not booked. Missing `_blank`/`rel`, so replaces current assessment page. |
| Join M2 Toolkit Waitlist — $500 | 1 conditional | Submit interest and disable button | Generated for non-PIONEERING tiers; submits lead without checking response, then always shows success. It is a waitlist, not checkout; the `$500` product is unavailable. |
| Related M1 card | 1 | Open M1 | 200. |
| Related M11 card | 1 | Open M11 | 200. |
| Aloha AI footer link | 1 | Open build-practice site | 200. |
| RN Builds footer link | 1 | Open portfolio | 200, but stale portfolio architecture. |
| Contact the Architect | 1 fixed | Open contact modal | Opens an unlabelled, non-semantic modal. No focus management or Escape close. |
| Modal backdrop | 1 | Close on backdrop click | Inline handler closes only when backdrop itself is clicked. |
| Name/email/message | 3 | Collect contact lead | Name/email required; message is optional despite being the reason for contact. Inputs have placeholders but no labels. |
| Contact Send | 1 | POST lead and close | Does not check `response.ok`; any resolved HTTP response is treated as success. There is no pending, success, or error message. |
| Contact Cancel | 1 | Close modal | Works by setting display none; focus is not restored. |

## Generated result states (source-traced)

| State | Rule | Label | Delivery truth |
|---|---|---|---|
| PIONEERING | mean answer ≥ 3.5 | PIONEERING | Hard-coded interpretation; not validated; unreachable live. |
| EMERGING | mean ≥ 2.5 and < 3.5 | EMERGING | Hard-coded interpretation; not validated; unreachable live. |
| DEVELOPING | mean ≥ 1.5 and < 2.5 | DEVELOPING | Hard-coded interpretation; not validated; unreachable live. |
| EARLY STAGE | mean < 1.5 | EARLY STAGE | Since every answered option scores at least 1, this state occurs only if average is 1.0; hard-coded; unreachable live. |
| Dimension band Strong | sum of two items ≥ 7 | Strong | Ordinal rubric authored in code, no evidence/validation. |
| Dimension band Partial | sum ≥ 5 | Partial | Same. |
| Dimension band Emerging | sum ≥ 3 | Emerging | Same. |
| Dimension band Absent | sum < 3 | Absent | With complete answers, only sum 2 qualifies. “Absent” overstates two explicit low-maturity responses. |

## Crawl boundary

The repository contains only `index.html`, `.gitignore`, and `vercel.json`: there are no hidden application routes, functions, tests, package manifests, or build scripts to crawl. A browser executable could not be provisioned in the audit runtime, so no screenshot or device-emulation claim is made. Runtime outcomes above are either HTTP-observed or deterministic source/CSP traces and are labelled accordingly. No form, booking, lead, waitlist, or email submission was made.
