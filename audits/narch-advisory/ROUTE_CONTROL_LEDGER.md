# NARCH Advisory — route and control ledger

Audit date: 2026-08-13  
Boundary: read-only; no contact, booking, purchase or other consequential submission.

## Same-origin routes

| Route | Discovery | Result | Classification/action |
|---|---|---|---|
| `/` | canonical deployment/source | 200, static single-page site | Only consumer page; release-blocked |
| `/robots.txt` | complete-crawl requirement | 200, allows all crawling | Working |
| `/sitemap.xml` | `<link rel="sitemap">` | 404 | Broken declaration; P2 |
| `/api/track` | inline scroll script | GET 404; POST not made | Endpoint absent; broken telemetry; remove/repair |
| `/privacy` | required trust route | 404 | Missing, P1/P2 before lead capture |
| `/terms` | required commercial route | 404 | Missing, P2 before sales |
| `/nonexistent` | 404 behavior | plain Vercel 404 | Correct missing-route status; no branded recovery |

No additional same-origin content routes were present in repository HTML/config.

## External routes and sources

| Destination | Controls | Intended result | Audit finding |
|---|---:|---|---|
| `https://nsag-site.vercel.app` | nav/footer | Parent NSAG | Correct parent; external/new-tab behavior inconsistent |
| `https://nsag-site.vercel.app/#modules` | 3 module chips | M5/M7/M10 | All three share one generic destination; no unique module evidence |
| Outlook BookWithMe Northeastern URL | 2 CTAs | Schedule discovery call | External commercial booking on university account; not submitted; affiliation/records boundary unresolved |
| `https://www.fatnugsmag.com/how-hempcrete-and-mycelium-composites-are-revolutionizing-architecture/` | article card | RN writing | Topically relevant editorial; not sufficient evidence for page's health/performance claims |
| `https://gapi-governance.vercel.app` | related card | NSAG domain | Separate represented artifact |
| `https://sport-nsag.vercel.app` | related card | NSAG domain | Separate represented artifact |
| `https://wnh-guide.vercel.app` | related card | NSAG domain | Separate represented artifact |
| `https://aloha-ai-consulting.vercel.app` | build credit | Aloha AI | Appropriate technical credit if not conflated with advisory ownership |
| `https://rn-portfolio-khaki.vercel.app` | “RN Builds” footer | Portfolio | Legacy/superseded destination; replace with canonical RN Selected Work |
| `https://nsag-api.vercel.app/api/lead` | contact POST | Lead delivery | Not submitted; privacy absent; client code falsely treats non-2xx as success |
| Google Fonts | stylesheet | Typography | Third-party request, no privacy disclosure |
| Vercel Insights/Speed Insights | scripts | Analytics/performance | Third-party/platform collection, no privacy disclosure |

## Controls and state transitions

| ID/control | Initial state | Action/result | Status/risk |
|---|---|---|---|
| NARCH brand | visible link `#` | jumps to top | Partial; replace with `/` or labelled top anchor |
| NSAG back | visible | leaves to NSAG | Working in markup |
| Book CTA ×2 | visible | external new tab | Destination known; consequential booking not tested |
| Module chip ×3 | visible | all go to same `#modules` | Partial/inexact |
| Quiz radio groups ×5 | one answer required per group | inline state array receives 0/1/2 | Mechanically working; labels visible; tool unvalidated |
| Get My Score | hidden until all five answered | total/10×100; >=80 Advanced, >=50 Developing, else Early Stage; quiz replaced | Working arithmetic; no norms/validation/reset/announcement |
| Get the Full Report | result state | opens contact modal | Mislabeled; no report created |
| Floating Contact the Architect | fixed, always visible | opens modal | P0 professional-role misrepresentation; mobile obstruction risk |
| Name | required text, placeholder only | included in external JSON | Accessibility/privacy defect |
| Email | required email, placeholder only | included in external JSON | Accessibility/privacy defect |
| Message | optional textarea | included in external JSON | Privacy/context defect |
| Send | submit | external POST; `.then()` closes/resets regardless of HTTP status | Not submitted; false-success/data-loss risk |
| Cancel | button | hides modal | Mouse/touch path only; no focus return/Escape |
| Modal backdrop | fixed overlay | no backdrop click close | Missing dialog semantics/focus management |
| Scroll tracking | after >300 px once | POSTs path/source/UTMs to `/api/track` | Endpoint 404; error silently swallowed |
| UTM capture | page load | stores source/medium/campaign in `sessionStorage` | Undisclosed collection/persistence |

## Content/claim surfaces requiring release review

| Surface | Claims/objects | Gate |
|---|---|---|
| Hero/About | deterministic physiology; 600 studies; architecture-firm comparison | scientific substantiation + copy correction |
| Offer/pricing | 20-page brief, filings, grants, design advisory, workshop/retainer | fulfillment, terms, licensing boundary |
| Six dimensions | biophilia, acoustics, POE, equity, regulatory documentation | primary sources + measurement/authorization |
| Principles | universal governance/cognition claims | qualified evidence language |
| Diagnostic | maturity percentage/category | validation or educational relabel |
| Signal/noise | GSA P100, WELL/LEED, source currentness | current authority/correction |
| Before/after | 15%, 6%, 2021 studies, grade B | exact citations or removal |
| Glossary | thermal comfort, restorative effect, biophilic density | ASHRAE correction; proprietary/uncertain labels |
| Further reading | implied “own client work” | remove unsupported delivery implication |
| Footer/About | RN credentials but no portrait/role boundary | add accurate authorship block and canonical portrait |

## Coverage statement

All same-origin routes discoverable from HTML, repository configuration, robots, the declared sitemap and inline JavaScript were mapped. Every visible link, CTA, radio control, generated button, modal field/button and telemetry request was inventoried. External bookings and contact submissions were intentionally not completed. Interactive desktop/mobile/screen-reader execution was unavailable; source-level responsive/accessibility findings are explicit in the dossier and require browser confirmation during remediation.
