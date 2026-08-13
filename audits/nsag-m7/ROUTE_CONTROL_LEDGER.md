# NSAG M7 — Route and Control Ledger

Audit date: 2026-08-12 (HST)  
Production: `https://nsag-m7.vercel.app/`  
Mode: Stage A read-only; no consequential form submission.

## Routes and destinations

| Destination | Type | Result | Audit note |
|---|---|---:|---|
| `/` | same-origin | 200 | Only application route; static single-file interface. |
| `/robots.txt` | same-origin | 404 | Missing. |
| `/sitemap.xml` | same-origin | 404 | Missing although the HTML advertises this URL. |
| `/api/track` | same-origin | 404 | Client analytics target is nonexistent; failure is swallowed. |
| arbitrary unknown path | same-origin | 404 | No SPA fallback or additional route. |
| `https://nsag-api.vercel.app/api/lead` | external API | GET 405 | POST-only surface inferred; no POST made. Receives result, waitlist, and contact payloads. |
| `https://nsag-site.vercel.app/advisory` | external | 200 | Result-dependent advisory CTA; unreachable in the live journey. |
| Outlook Bookings URL | external | not opened | Contains a personal email identifier; recorded without sending it to another service. |
| `https://nsag-m5.vercel.app` | external | 200 | Related NSAG module. |
| `https://nsag-m6.vercel.app` | external | 200 | Related NSAG module. |
| `https://nsag-m10.vercel.app` | external | 200 | Related NSAG module. |
| `https://nsag-site.vercel.app` | external | 200 | NSAG parent. |
| `https://aloha-ai-consulting.vercel.app` | external | 200 | Implementation credit. |
| `https://rn-portfolio-khaki.vercel.app` | external | 200 | Older portfolio labeled RN Builds, not RN Selected Work. |
| Chart.js 4.4.0 / jsDelivr | external script | blocked by CSP | `Chart is not defined`; first answer then crashes. |
| jsPDF 2.5.1 / cdnjs | external script | blocked by CSP | PDF library unavailable; report function also has no call site. |
| Google Fonts | external asset | allowed by CSP | Fonts render from permitted origins. |

## Controls and states

| Surface | Control | Count | Observed/source-confirmed result |
|---|---|---:|---|
| Intro | Begin the Challenge | 1 | Works; opens sector selection. |
| Sector | Urban Planning Department; City / Local Government; Community Developer; Architecture / Urban Design | 4 | Urban Planning Department tested. Selection is stored but never used. |
| Sector | Continue | 1 | Works; opens question 1. |
| Questions | A–D answer buttons | 48 generated | First A tested: `updateRadar()` throws and progression stops. Questions 2–12 unreachable. |
| Questions | Back | generated after question 1 | Source-defined but unreachable. |
| Questions | A/B/C/D keyboard shortcuts | 4 keys | Handler exists; invokes the same broken answer path. |
| Gate | Email; See My Reflection | 2 | Unreachable. Email check only looks for `@`; no visible/live error. |
| Results | Copy Results; Share; Print; Retake | 4 | Unreachable. Print is the only report-like export actually invoked. |
| Tier bridge | Toolkit waitlist | 3 variants | Unreachable; source asserts success before API confirmation and may send blank email. |
| Tier bridge | Advisory/booking CTAs | tier-dependent | Unreachable; destinations recorded above. |
| Floating | Contact the Architect | 1 | Source-defined modal; nonconsequential close path only. |
| Contact | Name, email, message; Send; Cancel | 5 | No submission made. Source treats any resolved HTTP response as success and suppresses failures. |

## Discovery boundary

The private repository contains only `.gitignore`, `index.html`, and `vercel.json`. Discovery covered repository/build configuration, all source links/constants, generated controls, live DOM and console, expected infrastructure routes, API surface, sibling/parent/credit links, and unknown-route behavior. No other same-origin consumer interface was found.
