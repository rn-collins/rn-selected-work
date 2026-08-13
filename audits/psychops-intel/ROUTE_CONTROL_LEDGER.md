# Psych Ops Intel — R3 route, control, API, and dataset ledger

Audit date: August 13, 2026 HST  
Stage: A — read-only represented-site recertification  
Canonical deployment: <https://psychops-intel.vercel.app/>  
Vercel project: `prj_JtivXXsZE08iwyZbZ2XE3UeHbvZ6`  
Repository mapping: private/inaccessible `rn-collins/psychops-intel`; public production source was fully captured, but server implementation/build configuration could not be read

## Coverage boundary

The production artifact is one HTML dashboard plus public APIs. The homepage source, all visible controls, both data-entry flows, dynamic rendering/filter logic, embedded fallback dataset, metadata, related links, public API payload, response headers, machine paths, and safe non-body method behavior were inspected. No lead/subscription form was submitted.

The private GitHub repository could not be cloned with available credentials, so server-side source, cron/build configuration, dependencies, storage schema, secrets, logs, tests, and deployment SHA remain unverified. Browser automation was unavailable; dynamic behavior is source-executed by reasoning and API-shape comparison, not certified through a rendered Chromium session.

## Route and API map

| Path | Method tested | Observed result | Finding |
|---|---|---|---|
| `/` | GET | `200`, 33,253-byte HTML | Single dashboard route; canonical/meta present. |
| `/api/data` | GET | `200`, public JSON; wildcard CORS | Live persisted sweep state and raw results exposed. Aug 10 payload had 47 results/44 unique URLs; audit-triggered Aug 13 sweep produced 48. |
| `/api/lead` | GET | `405` JSON | Correctly rejects GET. |
| `/api/lead` | OPTIONS | `200`; allows `POST, OPTIONS`, wildcard origin | Lead write surface is cross-origin callable; authentication/rate/validation/storage not verifiable. No POST made. |
| `/api/sweep` | GET/OPTIONS probe | unauthenticated sweep execution; OPTIONS returned completed 48-result run | **Method-safety/abuse defect.** A non-body audit probe triggered a full six-category sweep at `2026-08-13T14:49:53.697Z`. No further calls were made. |
| `/api/track` | client POST target / GET check | `404` | Scroll analytics silently fail and can produce unhandled fetch rejection. |
| `/api/subscribe` | GET | `404` | No separate subscription endpoint; CTA uses `/api/lead`. |
| `/sitemap.xml` | GET | `200 text/html`, homepage body | Soft 404; advertised sitemap is not XML. |
| `/robots.txt` | GET | `200 text/html`, homepage body | Soft 404; no crawler directives file. |
| `/privacy` | GET | `200 text/html`, homepage body | Soft 404; no privacy notice. |
| `/terms` | GET | `200 text/html`, homepage body | Soft 404; no terms/methodology. |

No other consumer route is linked or exposed in the production HTML. Potential cron/health variants were not pursued after discovery that method probes can execute mutations.

## Public `/api/data` shape and live rendering mismatch

### Persisted payload observed before the audit-triggered sweep

- `state: completed`
- `lastAttempt` / `lastSuccessfulSweep`: `2026-08-10T09:01:10.590Z`
- six categories; all `completed_with_findings`; zero reported query failures
- 47 result rows, 44 unique URLs
- category counts: Oregon 7; Colorado 8; New Mexico 8; Field Intelligence 8; PSFC 8; HAF 8
- every result has `title`, `url`, `published`, and `snippet`
- **zero** results have the UI fields `source`, `status`, `summary`, `detail`, `jurisdiction`, or `tags`

### UI expects

`source`, `status`, `title`, `date`, `jurisdiction`, `summary`, `detail`, `tags`, `link`, and `linkLabel`.

### Consequence

The loader runs `d.categories?.flatMap(c => c.results || [])`, discarding category context and without transforming result fields. Therefore:

- all live API cards have blank source;
- all are visually treated as “STABLE” because undefined status falls through to stable styling;
- the card class is `undefined`;
- date is absent because API uses `published`, not `date`;
- summary/detail/tags/jurisdiction are absent;
- source-filter buttons return zero results because no record source equals `OHA`, `DORA`, etc.;
- Urgent/Watch/Stable filters return zero results because status is undefined;
- search effectively matches title only;
- links are absent because API uses `url`, not `link`;
- the dashboard does **not** deliver the represented regulatory intelligence cards despite a successful backend response.

## Dataset/source quality

The six UI source pills are `OHA`, `DORA`, `DOR NMD`, `NMDOH`, `PSFC`, and `HAF`. The backend categories are Oregon, Colorado, New Mexico, Field Intelligence, PSFC, and HAF. They are query topics, not six controlled sources.

The Aug 10 results came from at least 31 hostnames. Highest-frequency hosts were LinkedIn (12 combined forms), Vicente (4), Psychedelic Alpha (4), and various news/blog/social/job sites. Examples of off-topic or low-authority classification:

- Colorado: ibogaine tag page, press release, Newsweek, LinkedIn posts, bookkeeping blog, individual-practitioner page;
- New Mexico: broadband-discount rulemaking, outdoor-equity grants, behavioral-health overhaul, a LinkedIn profile;
- Field Intelligence: cannabis rescheduling, Virginia cannabis licensing, cannabis tax issues;
- PSFC: job listings/profiles, biotech M&A, a Compass press release, one research paper;
- HAF: general health-center funding map, Akron grant story, California crime-survivor funding, Colorado crime-survivor story, Facebook/LinkedIn.

The payload is a broad web-search candidate feed. It is not primary-source regulatory monitoring, verified law, a source-normalized database, or a reviewed action alert.

## Embedded fallback seed

Six hard-coded records are displayed whenever `/api/data` fails. They make action-affecting claims without direct instrument links:

| Source | Seed claim | Evidence problem |
|---|---|---|
| OHA | “Wave 2” renewals; 90-day deadline; OAR 333-333-4000 supervision amendment/3:1 ratio | Official OHA says timely renewal is at least 60 days before expiration under OAR 333-333-4250; generic program homepage is not support. |
| DORA | revised examinations, mandatory quarterly audits, public facilitator roster, remote-session prohibition under `3 CCR 702-7` | Colorado natural-medicine facilitator rules are in 4 CCR 755-1 and business rules in 1 CCR 213-1; cited numbering is facially mismatched. |
| DOR NMD | Q3 retail applications; $5,000/$2,500 fees; $150,000 capitalization; 60-day local approval | Generic division homepage; no direct rule/order/application evidence. “Retail” is an imprecise description of Colorado’s regulated natural-medicine business framework. |
| NMDOH | 47 licensed practitioners; 7.34.3 NMAC; billable integration service and annual cap | Official NM program was still being implemented for a Dec. 31, 2026 deadline; a licensed-practitioner registry claim in June is incompatible with that status. |
| PSFC | $4.2M grant cycle, eight priorities, Aug. 15 LOI | PSFC’s official site says it is **not a foundation or grantmaker**; generic homepage cannot support this claim. |
| HAF | 2026 rate study, $1,800–$2,400 median, proposed sliding-scale mandate/comment deadline | Generic advocacy homepage; no direct study, rulemaking docket, or policy document. |

These records are not harmless placeholders: the product explicitly promises fallback to the “last verified dataset,” so an API failure can publish unsupported legal/funding claims as verified operational intelligence.

## Visible controls

| Control | Count | Intended behavior | Actual/source result |
|---|---:|---|---|
| Source pills | 7 | All + six named sources | active styling changes, but no `aria-pressed`; all six filters empty on live API shape. |
| Status filters | 4 | All/Urgent/Watch/Stable | `aria-pressed` updates; three status filters empty on live API shape. |
| Search | 1 | search updates | live API effectively title-only due schema mismatch. |
| Result cards | 47/48 API rows | show status, source, dates, summaries, tags, authoritative links | live cards lose all but title; no outbound link. |
| Jurisdiction select | 1 | All/Oregon/Colorado/New Mexico | value sent only with lead CTA; does not filter dashboard. |
| Alert email | 1 | subscribe to weekly jurisdiction digest | POSTs to generic lead route; any resolved response is shown as success. |
| Subscribe button | 1 | enroll | no loading/disable, response validation, unsubscribe, privacy, confirmation, or delivery proof. |
| Footer Contact | 1 | open contact modal | modal opens by inline style. |
| Fixed Contact Architect | 1 | open same modal | duplicate CTA. |
| Contact fields | 3 | name/email/message | placeholder-only labels; name/email required; no disclosure. |
| Send/Cancel | 2 | submit/close | any resolved HTTP response resets/closes; errors silently swallowed. |
| Related tools | 2 | open Psych Ops Directory/Entheogen Atlas | public external links; “vetted vendors” claim is stronger than the Directory’s evidence boundary. |
| LinkedIn/Aloha AI/RN Builds | 3 | external brand paths | RN Builds points to superseded `rn-portfolio-khaki`. |

No export, download, saved filter, alert history, correction request, methods/source ledger, or dataset provenance control exists.

## Contact/subscription flows

Both forms send PII to same-origin `/api/lead`.

- Alert body: email, jurisdiction, source, full current URL.
- Contact body: name, email, message, source.
- Alert UI reveals success regardless of HTTP status because it ignores the response.
- Contact modal resets/closes for any resolved HTTP status and silently ignores network errors.
- No privacy notice, retention, recipient, processor, deletion, consent, unsubscribe, double opt-in, or expected-response statement is present.
- `/api/lead` allows wildcard-origin POST by CORS. Authentication, abuse/rate controls, storage, and mail-provider semantics are unverified without private source.

## Metadata, accessibility, and responsive source findings

- Canonical, description, OG URL/title/description, robots meta, and WebSite JSON-LD are present.
- No OG/Twitter image is declared.
- JSON-LD calls the monitor “NSAG-aligned” with no visible explanation or evidence; parent practice is Aloha AI, not NSAG.
- Sitemap/robots/privacy/terms are SPA-style soft 404s returning the homepage.
- Skip link exists, search has an ARIA label, CTA fields have screen-reader labels, count/status region exists, and a 600px mobile grid breakpoint exists.
- Source toolbar buttons omit pressed state; toolbars lack arrow-key behavior; no explicit focus-visible styling exists; muted text at 45% opacity risks low contrast.
- Contact modal lacks `role=dialog`, accessible name, focus entry/trap/return, Escape behavior, and labelled fields.
- Inline fixed buttons may obscure content; browser/mobile/zoom/screen-reader execution remains unverified.

## Operational/canonical decision

`psychops-intel` is **P only as one canonical public project**, but it is release-blocked. It is not two products. The featured “Psychedelic Operations Intelligence” and Atlas “Psych Ops Intel” records point to this same Vercel project and must collapse into one case. The public artifact is a narrow psilocybin web-search monitor, not the featured record’s claimed private cross-domain structured database.
