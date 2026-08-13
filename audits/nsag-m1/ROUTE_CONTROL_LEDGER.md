# NSAG M1 — Route and Control Ledger

Audit date: 2026-08-12 (Pacific/Honolulu)  
Production tested: `https://nsag-m1.vercel.app/`  
Scope: Stage A, read-only; no consequential forms submitted.

## Route ledger

| Route/destination | Type | Result | Notes |
|---|---|---:|---|
| `/` | Same-origin | 200 | Only application route. Static single-file experience. Runtime fails at initialization and again after first answer. |
| `/robots.txt` | Same-origin | 404 | No crawler policy. |
| `/sitemap.xml` | Same-origin | 404 | No sitemap. |
| `/api/lead` | Same-origin | 404 | Lead API is on a separate deployment. |
| arbitrary unknown route | Same-origin | 404 | No SPA fallback; expected for a one-route static artifact. |
| `https://nsag-api.vercel.app/api/lead` | External API | GET 405 | Confirms endpoint surface; POST was not exercised because it submits personal/contact data. |
| `https://nsag-site.vercel.app` | External | 200 | Parent NSAG site. |
| `https://nsag-site.vercel.app/advisory` | External | 200 | Dynamically rendered results CTA. |
| `https://nsag-m2.vercel.app` | External | 200 | Related module. |
| `https://nsag-m6.vercel.app` | External | 200 | Related module. |
| `https://nsag-m12.vercel.app` | External | 200 | Related module. |
| `https://aloha-ai-consulting.vercel.app` | External | 200 | Credited as implementation practice. |
| `https://rn-portfolio-khaki.vercel.app` | External | 200 | Footer `RN Builds` points to an older portfolio surface, not RN Selected Work. |
| Northeastern Outlook booking URL | External | Not opened | URL contains a personal email identifier; recorded but not transmitted during audit. |
| Chart.js 4.4.0 on jsDelivr | External script | blocked by CSP | Its absence produces `Chart is not defined`. |
| jsPDF 2.5.1 on cdnjs | External script | blocked by CSP | PDF export cannot initialize. |

## Control ledger

| Screen | Control | Count | Tested/result |
|---|---|---:|---|
| Introduction | Sector buttons: Legal Aid, Public Defense, Courts, Advocacy | 4 | Legal Aid selected; selection styling/state works. Sector is never used by questions, scoring, interpretation, or recommendations. |
| Introduction | Continue | 1 | Works after sector choice; opens challenge intro. |
| Challenge intro | Begin Challenge | 1 | Opens question 1. |
| Questions | Answer options A–D | 48 generated | First option tested. It records the answer and disables all options, then `updateRadar()` throws. No auto-advance occurs; journey is blocked. Remaining options/questions cannot be safely reached through production UI. Source reviewed exhaustively. |
| Questions | Keyboard shortcuts A/B/C/D | 4 keys | Handler exists in source. End-to-end result cannot be completed because same radar exception follows selection. |
| Email gate | Email input | 1 | Source requires only nonempty string containing `@`; no robust validation or visible error message. Gate unreachable in production. |
| Email gate | See My Reflection | 1 | Unreachable. Intended to calculate result, POST derived scores with email, render result, and generate PDF. jsPDF is CSP-blocked. |
| Result | Copy Results | 1 | Unreachable. Clipboard behavior exists in source. |
| Result | Share | 1 | Unreachable; source uses share/clipboard behavior. |
| Result | Print | 1 | Unreachable; source invokes printing. |
| Result | Retake | 1 | Unreachable. |
| Tier bridge | Toolkit waitlist | 3 tier variants | Unreachable. Source immediately displays success even when API request fails and may send an empty email. |
| Tier bridge | Advisory/discovery CTAs | tier-dependent | Unreachable; destinations inventoried above. |
| Floating contact | Contact the Architect | 1 | Source opens modal. No dialog semantics, focus trap, or functioning Escape-close behavior. |
| Contact modal | Name/email/message | 3 | Not submitted. Source lacks response-status validation and user-visible failure/success state. |
| Contact modal | Send | 1 | Not submitted (consequential form). |
| Contact modal | Cancel | 1 | Closes modal by source implementation. |

## Discoverability boundary

The repository contains only `.gitignore`, `index.html`, and `vercel.json`. Route discovery covered HTML anchors, dynamically generated anchors/buttons, the Vercel deployment, `robots.txt`, `sitemap.xml`, arbitrary-route behavior, and source constants. No additional same-origin route was found.
