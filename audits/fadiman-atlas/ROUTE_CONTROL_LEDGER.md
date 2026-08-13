# Fadiman Atlas — Route and Control Ledger

Audit date: August 12, 2026 (HST)  
Scope: read-only Stage A; one static deployment

## Same-origin routes and requests

| Path/request | Trigger | Observed | Classification |
|---|---|---|---|
| `/` | Direct/navigation | 200, complete static proposal | Working |
| `#main-content` | Skip link | Existing target | Working |
| `#problem` | TOC | Existing target | Working |
| `#status` | TOC | Existing target | Working |
| `#demo-search` | TOC | Existing target | Working |
| `#demo-annotate` | TOC | Existing target | Working |
| `#demo-timeline` | TOC | Existing target | Working |
| `#demo-corpus` | TOC | Existing target | Working |
| `#inventory` | TOC | Existing target | Working |
| `#gaps` | TOC | Existing target | Working |
| `#schema` | TOC | Existing target | Working |
| `#tech` | TOC | Existing target | Working |
| `#builder` | TOC | Existing target | Working |
| `#offer` | TOC | Existing target | Working |
| `/robots.txt` | Direct | 404 | Missing |
| `/sitemap.xml` | `<link rel=sitemap>` | 404 | Broken/misadvertised |
| `/api/track` | page load and first 50% scroll | 404 | Broken, silent |
| `/api/lead` | contact Send | 404; handler also malformed | Broken/false-success risk |
| `/privacy` | expected governance route | absent | Missing |
| `/terms` | expected governance route | absent | Missing |

## Controls

| Control | Count/options | Result | State |
|---|---:|---|---|
| Skip link | 1 | Reveals on focus; targets main | Working |
| TOC links | 12 | Scroll to all existing sections | Working |
| Search suggestion chips | 8 | Populate input; keyboard Enter/Space handlers | Working, non-native |
| Search input | 1 | Accepts free text; Enter invokes search | Working input |
| Search button | 1 | Direct Anthropic request without key, blocked by CSP; no corpus retrieval | Broken/simulated |
| Annotation examples | 3 | Populate textarea | Working |
| Annotation textarea | 1 | Accepts arbitrary text | Working input; privacy/copyright risk |
| Annotation button | 1 | Direct Anthropic request without key, blocked by CSP | Broken/simulated |
| Timeline | 1 canvas | Hard-coded values via CDN Chart.js | Partial |
| Type filter | All, Podcast, YouTube, Vimeo, Radio, Lecture, Documentary, Audio | Filters static entries | Working |
| Year filter | All + generated years | Filters static entries | Working |
| Guest filter | All, Jordan Gruber, Fadiman solo | Filters static entries; label overstates scope | Working/limited |
| Status filter | All, Live, Dead, Missing | Filters static entries | Working |
| Corpus text search | 1 | Matches host/show/topic fields | Working |
| Corpus source links | 120 literals across 132 entries | New-tab destinations; status not fully reverified | Working locally/external unverified |
| Gap-analysis links | 9 | New-tab destinations; omit `rel=noopener` | External unverified |
| Email link | 1 | `mailto:collins.ra@northeastern.edu` | Working destination, ownership currentness unverified |
| LinkedIn | 1 | `/in/rn-collins` | External unverified |
| RN domain | 1 | `rncollins.com` | External unverified |
| RN Builds footer | 1 | old `rn-portfolio-khaki.vercel.app` | External/canonicality unverified |
| Contact Architect | 1 | Opens modal | Partial |
| Modal Cancel | 1 | Hides modal | Working; no focus return |
| Modal Send | 1 | malformed handler; dead endpoint; no HTTP status validation | Broken |

## External-source inventory boundary

- 36 literal `href` attributes were extracted from HTML.
- 120 literal URLs were extracted from the 132-entry `ENTRIES` array.
- After deduplication, 127 unique HTTP(S) destinations remained.
- Categories: Google Fonts, cdnjs Chart.js, video/podcast/platform pages, publisher/media pages, scholarly or event sources, Netflix, LinkedIn, RN sites, and portfolio.
- The complete extracted URL list was retained at `/tmp/fadiman-urls.txt` during the audit. Bulk requests were not authorized by the environment; no unchecked URL is represented as verified.

## State/accessibility ledger

| State | Finding |
|---|---|
| Empty search | No action/message |
| Search loading | Button disabled/text change; result has visual cursor but no live status |
| Search failure | Visible API-key error after failed network request |
| Search success | Not reachable; implementation would use hard-coded prompt/model knowledge, not retrieval |
| Empty annotation | No action/message |
| Annotation loading/failure | Visual text, no live status; failure reachable |
| Annotation success | Not reachable; would render unsanitized model fields into `innerHTML` |
| Empty corpus results | Count/table behavior derives from JS; no dedicated guidance/clear-filter CTA |
| Filter persistence | None on reload/share |
| Contact validation | blocking alert for missing email only |
| Contact success/error | malformed and unreliable; 404 would be treated as success if handler chained correctly |
| Keyboard chips | Enter/Space handled; Space default scroll not prevented |
| Keyboard modal | No trap, Escape, initial focus, or return focus |
| Reduced motion | No preference support |
| Mobile | limited grid breakpoints; large tables lack responsive design |
| Zoom/reflow | source indicates likely horizontal table overflow; device verification outstanding |

## External API/data ledger

| Destination/data | Purpose | Actual boundary |
|---|---|---|
| `api.anthropic.com/v1/messages` | Search and annotation | blocked by CSP, no key; unsafe direct-browser architecture |
| `cdnjs.cloudflare.com/.../chart.js` | Timeline | allowed by CSP; no SRI |
| Google Fonts | Typography | third-party request allowed by CSP |
| Hard-coded `ENTRIES` | Corpus metadata | only actual corpus-like data present |
| Hard-coded system prompts | Search/annotation knowledge | not a corpus; embeds medical/dosing claims |
| `/api/track` | analytics | nonexistent |
| `/api/lead` | contact | nonexistent |

## Canonical relationship ledger

| Asset | Relationship to Fadiman Atlas | Portfolio implication |
|---|---|---|
| `fadiman-atlas` GitHub | Canonical source repository | E; private preservation |
| `fadiman-atlas.vercel.app` | Canonical but unsuitable public deployment | unpublish/access-restrict |
| Entheogen Atlas | Adjacent substance/legal atlas; no code/deployment relationship found | separate existing record; do not merge by assumption |
| Psychonaut Bookworm | Adjacent book-discovery property; no code/deployment relationship found | separate existing record; do not merge by assumption |
| Psychedelic Operations Intelligence | Adjacent operational intelligence practice | capability family only |
| Aloha AI | Owner of independently initiated scoping/build capability | possible future generic parent |
| RN Builds | Public workbench/portfolio identity, not product owner | no separate card now |
