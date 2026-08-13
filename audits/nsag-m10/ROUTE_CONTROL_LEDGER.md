# NSAG M10 — Route and Control Ledger

Audit date: 2026-08-12 (HST)  
Canonical production: `https://nsag-m10.vercel.app/`  
Mode: Stage A/read-only; no consequential form submission.

## Routes and destinations

| Destination | Type | Result | Finding |
|---|---|---:|---|
| `/` | same origin | 200 | Sole static application route. |
| `/robots.txt` | same origin | 404 | Missing. |
| `/sitemap.xml` | same origin | 404 | Missing although referenced in HTML metadata. |
| `/api/track` | same origin | 404 | Page-view/scroll POST target does not exist. |
| `/audit-unknown` | same origin | 404 | No SPA fallback/additional route. |
| `https://nsag-api.vercel.app/api/lead` | external API | GET 405 | POST-only surface inferred; no POST made. Results, waitlist, and contact use it. |
| `https://nsag-site.vercel.app/advisory` | external | 200 | Result-only advisory destination; unreachable through production flow. |
| Outlook Bookings URL | external | not opened | Contains a personal email identifier; recorded without transmitting it. |
| `https://nsag-m5.vercel.app` | external | 200 observed | Related biophilic module. |
| `https://nsag-m8.vercel.app` | external | 200 observed previously | Related burnout module. |
| `https://nsag-m15.vercel.app` | external | 200 observed previously | Related care/isolation module. |
| `https://nsag-site.vercel.app` | external | 200 | NSAG parent. |
| `https://aloha-ai-consulting.vercel.app` | external | 200 | Implementation credit. |
| `https://rn-portfolio-khaki.vercel.app` | external | 200 | Older portfolio mislabeled RN Builds. |
| Chart.js 4.4.0 / jsDelivr | external script | blocked by CSP | `script-src` permits same-origin only; radar initialization fails. |
| jsPDF 2.5.1 / cdnjs | external script | blocked by CSP | Report dependency unavailable; generator also has no call site. |
| Google Fonts | external asset | permitted | Exact style/font origins allowed. |

## Controls and state transitions

| Surface | Control | Count | Result |
|---|---|---:|---|
| Intro | Begin the Challenge | 1 | Opens sector step. |
| Sector | Hospital System; Outpatient Clinic; Behavioral Health Facility; Long-Term Care Facility | 4 | Selection changes CSS/stored string only; never affects questions, scoring, or recommendations. |
| Sector | Continue | 1 | Intended to open question 1. |
| Questions | A–D | 48 generated | First answer invokes `updateRadar`; absent Chart object throws and blocks progression. Questions 2–12 unreachable. |
| Questions | Back | source-defined after q1 | Unreachable due first-answer failure. |
| Questions | A/B/C/D keyboard shortcuts | 4 keys | Same broken selection path. |
| Gate | Email; See My Reflection | 2 | Unreachable. Validation only tests presence of `@`; no visible/live error. |
| Results | Copy; Share; Print; Retake | 4 | Unreachable. Print is the only invoked report/export action. |
| Conversion | Toolkit waitlist | 3 tier variants | Unreachable. UI confirms before network success and can use blank email. |
| Conversion | Advisory/booking | tier-dependent | Unreachable. |
| Floating | Contact the Architect | 1 | Opens source-defined overlay; no consequential submit tested. |
| Contact | Name, email, message; Send; Cancel | 5 | Source treats any resolved HTTP status as success and converts rejection to a success message. |

## Discovery and testing boundary

Discovery covered repository/deployment metadata, the complete HTML/config, generated routes/controls, HTTP status and headers, client network constants, external destinations, CSP behavior, and source-defined completion states. Browser automation could not launch in this sandbox (daemon startup failure), so the deterministic first-answer failure is established from production headers plus executed dependency/control path and the identical accepted module runtime pattern; it should be reproduced in Stage B with a production browser before release. No additional same-origin interface was found.
