# NSAG M4 — Route and Control Ledger

Audit date: 2026-08-12 (HST)  
Production: `https://nsag-m4.vercel.app/`  
Mode: Stage A read-only; no consequential form submission.

## Routes and destinations

| Destination | Type | Result | Audit note |
|---|---|---:|---|
| `/` | same-origin | 200 | Only application route; static single-file interface. |
| `/robots.txt` | same-origin | 404 | Missing despite `index, follow` metadata. |
| `/sitemap.xml` | same-origin | 404 | HTML advertises this sitemap, but it does not exist. |
| `/api/track` | same-origin | 404 | Page-view and scroll-depth POSTs target this nonexistent endpoint and fail silently. |
| arbitrary unknown path | same-origin | 404 | No additional application route or SPA fallback discovered. |
| `https://nsag-api.vercel.app/api/lead` | external API | GET 405 | POST-only surface inferred; no POST made. Used for results, waitlist, and contact. |
| `https://nsag-site.vercel.app/advisory` | external | 200 | Result-dependent advisory CTA; unreachable through production journey. |
| Outlook Bookings URL | external | not opened | Embedded personal email identifier; recorded without transmitting it. |
| `https://nsag-m3.vercel.app` | external | 200 | Related NSAG module. |
| `https://nsag-m9.vercel.app` | external | 200 | Related NSAG module. |
| `https://aloha-ai-consulting.vercel.app` | external | 200 | “Built by Aloha AI” credit. |
| `https://rn-portfolio-khaki.vercel.app` | external | 200 | Footer labels this older portfolio as RN Builds instead of linking RN Selected Work. |
| Chart.js 4.4.0 / jsDelivr | external script | blocked by CSP | Produces `Chart is not defined`; assessment crashes at first answer. |
| jsPDF 2.5.1 / cdnjs | external script | blocked by CSP | PDF library unavailable. Additionally, the PDF function is never called. |
| Google Fonts | external assets | permitted by CSP | Font origins included in style/font directives. |

## Controls and states

| Surface | Control | Count | Observed/source-confirmed result |
|---|---|---:|---|
| Intro | Begin the Challenge | 1 | Works; opens audience/sector selection. |
| Sector step | Hospital System, Primary Care, Public Health Department, Cannabis Operator/Dispensary | 4 | Primary Care tested; Continue appears. Stored selection never affects questions, scores, results, or recommendations. |
| Sector step | Continue | 1 | Works; opens question 1. |
| Questions | Answer options A–D | 48 generated | First A tested: buttons disable, `updateRadar()` throws, and no next question appears. Questions 2–12 are unreachable in production. |
| Questions | Back | generated on later questions | Source-defined but unreachable because question 1 does not advance. |
| Questions | A/B/C/D keyboard shortcuts | 4 keys | Handler exists; same crash follows selection. |
| Email gate | Email | 1 | Unreachable. Source validation only checks presence of `@`; no visible/live error. |
| Email gate | See My Reflection | 1 | Unreachable. Intended to score, transmit derived results, and render tier. It does not invoke the PDF function. |
| Results | Copy Results | 1 | Unreachable. Source exposes numeric percentages despite qualitative framing. |
| Results | Share, Print, Retake | 3 | Unreachable. Print is the only consumer-accessible report/export function actually invoked in source. |
| Tier bridge | Toolkit waitlist | 3 tier variants | Unreachable. Source displays success immediately without waiting for API success and may send empty email. |
| Tier bridge | Advisory/Discovery CTA | tier-dependent | Unreachable; destinations recorded above. |
| Floating CTA | Contact the Architect | 1 | Opens modal; tested. |
| Contact modal | Name, email, message | 3 | Visible; not populated/submitted. Inputs rely on placeholders and modal lacks dialog semantics. |
| Contact modal | Send | 1 | Not submitted. Source treats any resolved response, including HTTP error, as success and provides no feedback. |
| Contact modal | Cancel | 1 | Tested; closes modal. |

## Discovery boundary

The private repository contains only `.gitignore`, `index.html`, and `vercel.json`. Discovery covered repository routing/configuration, HTML and dynamic links, source constants, production DOM, `robots.txt`, `sitemap.xml`, custom analytics and API paths, and unknown-route behavior. No additional same-origin interface was found.
