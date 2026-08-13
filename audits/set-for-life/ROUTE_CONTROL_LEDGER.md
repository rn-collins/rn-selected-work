# Set for Life — route and control ledger

Audit date: 2026-08-13  
Mode: read-only; no inquiry, purchase, refund or other consequential submission.

## Same-origin route ledger

| Route | Discovery | HTTP/result | Treatment |
|---|---|---|---|
| `/` | production/domain | 200, static single page | Only consumer product surface |
| `/og-image.png` | repository/direct check | 200, 1200×630 PNG | Works on `-black`; page metadata points to wrong host |
| `/robots.txt` | crawl requirement | 404 | Missing |
| `/sitemap.xml` | declared in `<head>` | 404 | Broken declaration |
| `/api/track` | inline telemetry | 404 | Page-view/scroll tracking broken; POST not sent by auditor |
| `/privacy` | privacy requirement | 404 | Missing before lead/commerce |
| `/terms` | commerce/refund requirement | 404 | Missing |
| `/nonexistent` | error behavior | 404 plain Vercel page | Correct status, no branded recovery |

No lesson, course, sample, guide, calendar, AI-project, checkout, entitlement, login, confirmation, refund or support route was found.

## Canonical and external destinations

| Destination | Source/control | Result/boundary |
|---|---|---|
| `https://set-for-life.vercel.app/` | canonical, OG, schema | Does not map to inspected project; authenticated fetch could not share/access; release-blocking identity mismatch |
| `https://set-for-life.vercel.app/og-image.png` | OG/Twitter | Wrong hostname even though asset exists on `-black` |
| `https://www.linkedin.com/in/rn-collins` | footer/schema variant | Link in footer; schema uses malformed/no-www legacy profile; correct to canonical RN profile |
| `https://zero-to-frontier.vercel.app` | related card | External represented artifact |
| `https://ai-budget-calc.vercel.app` | related card | External represented artifact; URL may differ from accepted canonical |
| `https://aloha-ai-consulting.vercel.app` | build credit | Aloha AI technical credit |
| `https://rn-portfolio-khaki.vercel.app` | RN Builds/footer/schema | Legacy/superseded portfolio; replace with RN Selected Work |
| `https://rn-api-rn-collins.vercel.app/api/lead` | contact Send | External lead processor; no POST made; false-success code/no privacy |
| Google Fonts | head | Third-party font request, undisclosed |
| Vercel Insights/Speed Insights | scripts | Analytics/performance scripts, undisclosed |
| Gumroad | pricing note only | No URL or integration exists |

## Navigation/control ledger

| Control | Action/state | Observed/source result | Finding |
|---|---|---|---|
| Set for Life logo | `#top` | scrolls hero | Working |
| Mobile Menu | toggles `.open`, `aria-expanded` | exposes five links | Source works; no Escape/outside/focus management |
| Why/System/Proof/FAQ | anchor links | scroll to sections, close mobile menu | Working |
| Nav Enroll | `#enroll` | scrolls pricing | Does not enroll |
| Hero Enroll | `#enroll` | scrolls pricing | Does not enroll |
| See what is inside | `#system` | scrolls curriculum | Working |
| FAQ ×8 | toggles parent `.open`/expanded | answer max-height opens | Working source; no `aria-controls` |
| Pricing Enroll $67 | opens modal | generic contact dialog | Broken/misleading; no Gumroad/checkout |
| Final Enroll | `#enroll` | scroll loop back to pricing | Working navigation, no commerce |
| Ask a question | opens modal | generic contact | Expected action |
| Related tool cards ×2 | external new tab | external artifacts | Markup valid |
| Footer Contact | opens modal | generic contact | Expected but inaccessible implementation |
| LinkedIn | external new tab | RN profile destination | Authorship destination |
| Floating Contact the Architect | opens modal | generic contact | Template residue/unrelated professional title |
| Name | optional placeholder input | would transmit | No label/privacy |
| Email | required only in JS | alert if empty; would transmit | No inline validation/label/privacy |
| Message | optional placeholder textarea | would transmit | No label/privacy |
| Cancel | hides modal | no focus return | Partial |
| Send | RN API POST | closes + “Sent!” on any resolved response | Not submitted; false-success/data-loss risk |
| Page-view telemetry | window load | POST `/api/track` | 404 endpoint; failure swallowed |
| Scroll 25/50/75/90 | threshold once | POST `/api/track` | 404 endpoint; failure swallowed |
| UTM capture | query parameters | sessionStorage `rn_utm` | Undisclosed persistence |

## Offer/deliverable ledger

| Advertised item | Public implementation evidence | Stage A state |
|---|---|---|
| Eight-module course | Outline only | Proposed/unverified |
| Aloha Framework Guide | Description only | Missing |
| Ten annotated messages | Description only | Missing/unverified rights |
| 90-day calendars ×2 | Description only | Missing |
| Progress persistence | No application code | Missing |
| Claude Projects ×4 | Descriptions only | Missing |
| Lifetime updates | No customer/update system | Proposed |
| Founding access/cohort | FAQ copy only | Proposed/stale |
| $67 checkout | No link/integration | Broken/false-present |
| Email delivery | No integration | Missing |
| 14-day refund | FAQ copy/contact only | Unimplemented |

## Claims requiring documentary review

| Surface | Claim | Finding |
|---|---|---|
| Metadata/hero/proof/about/FAQ | 26% reply | Conflicts with 207/938 = 22.07% |
| Hero/about | seven positions, zero job boards | Undefined/self-reported |
| Hero/about | 2,862 connections | Self-reported, no baseline/export |
| Problem/modules/rules | 3% generic average | Unsourced |
| Problem/Why | 30/60-second decision behavior | Unsourced/inconsistent |
| Compounds | each connection gives 3–5 more | Unsupported |
| Proof | private outreach replies, two became positions | Consent/exactness/causation unverified |
| FAQ | works any school/stage; results by 14 days | Universal/performance claims unsupported |
| Pricing/final | current enrollment, delivery, lifetime, urgency | No fulfillment/checkout |

## Portrait/authorship ledger

| Surface | State | Exact recommendation |
|---|---|---|
| Hero | no portrait | Keep claim-led hero portrait-free |
| Who Built This | text only | Add one canonical RN portrait beside biography |
| Footer | author entity but no portrait | Text/entity adequate after links corrected |
| OG | valid typographic 1200×630, no portrait | Keep style; fix host, optionally add restrained portrait after claim remediation |
| Portfolio case | no case portrait | Not necessary if build About establishes authorship; shared portfolio portrait remains canonical |
| Source | `rn-selected-work/public/rn-collins-portrait.webp` | Copy via approved pipeline; alt “Rayven-Nikkita (RN) Collins, creator of Set for Life”; 4:5 centered-top responsive crop |

## Coverage boundary

All discoverable same-origin routes, anchors, links, buttons, accordions, modal fields/actions, telemetry calls, listed deliverables and external destinations were inventoried. No consequential forms or commerce actions were submitted. Static source, current production response, deployment metadata and OG asset were inspected. Interactive browser/screen-reader execution was unavailable and remains an explicit Stage B gate.
