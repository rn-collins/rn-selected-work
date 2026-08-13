# NSAG M12 — Route and Control Ledger

Status terms: **verified** (direct production/source evidence), **broken** (cannot fulfill purpose), **simulated** (implied differentiation/function is not implemented), **inaccessible** (downstream state cannot be reached reliably under production constraints), **unverified** (external implementation or outcome unavailable).

## Route and dependency inventory

| Surface | Status | Result/evidence |
|---|---|---|
| `https://nsag-m12.vercel.app/` | Verified | HTTP 200; 75,208 bytes; production Git hash `3567fcea8f78c13ea58aa4816569afa3922520d8`, exactly matching repository blob. |
| `/sitemap.xml` | Missing/unverified live | Linked in HTML but no file/function exists in the complete three-file repository. |
| `/robots.txt`, `/privacy`, `/terms` | Missing/unverified live | No file, route, or discoverable link in static repository. |
| `/api/track` | Broken by architecture | Analytics POSTs target a same-origin endpoint absent from static repository; failures are silent. |
| Chart.js (`cdn.jsdelivr.net`) | Broken | CSP `script-src` omits origin, so `Chart` is unavailable and `initRadar()` throws. |
| jsPDF (`cdnjs.cloudflare.com`) | Broken | CSP omits origin; `generateResultPDF()` is also definition-only. |
| `nsag-api.vercel.app/api/lead` | Unverified | Result/waitlist/contact callers do not check `response.ok`; storage and privacy unavailable. |
| NSAG parent/advisory, M1, M8, Aloha AI, legacy RN portfolio, Outlook booking | Discoverable external destinations | Hard-coded; several result links are contaminated legal-module copy and not coherent M12 routing. |

## Controls and states

| Control/state | Intended result | Classification | Finding |
|---|---|---|---|
| Page initialization | Render questions/radar | **Broken** | `buildQuestionScreens()` is followed by `initRadar()`; CSP-blocked Chart causes an uncaught exception and prevents reliable app initialization. |
| Begin challenge | Open institution-type step | Code-backed | Calls `showSectorStep()`. |
| K–12 / higher ed / charter / nonprofit buttons | Tailor flow | **Simulated** | Only set unused `selectedSector`; stale default is `legal-aid`. Every audience receives district/K–12 questions. |
| Continue | Start item 1 | Code-backed, runtime impaired | No audience validation or personalization. |
| 12 scenario answer sets | Score/advance | Inaccessible/runtime-broken | `updateRadar()` depends on blocked Chart. Items have some face validity, but options are leading maturity ladders. |
| A–D shortcuts | Select response | Code-backed | Global on active screen; no focus/status announcement. |
| Back/review | Revise response | Missing | Dormant previous function has no visible control. |
| Email gate | Reveal and deliver PDF | **Misleading/broken** | Email required; derived profile is sent to lead API; PDF cannot run and function has no call site. |
| Tier reveal | Show maturity | Inaccessible/code-backed | Says “Your M1 governance tier”; results include trauma-informed legal-space copy unrelated to education. |
| Copy/share | Export result | Partial | Claims organization “score”; stale `nsag-site.vercel.app/m12`; clipboard failure unhandled. |
| Print/retake | Browser print/reload | Code-backed | Print/mobile output not verified; retake discards state. |
| $500 toolkit waitlist | Register purchase interest | False-success/unverified product | Confirms within-day personal email regardless of server status; contents and fulfillment unverified. |
| Advisory/booking | Conversion | External | Result copy may route school users using legal-service and M1/M2 language. |
| Contact modal | Submit lead | False-success | Clears/closes on any resolved HTTP status; suppresses failure; modal accessibility incomplete. |

## Instrument and output ledger

- Six dimensions, two distinct face-valid scenarios each; answers 1–4.
- Overall bands: PIONEERING `>=3.5`, EMERGING `>=2.5`, DEVELOPING `>=1.5`, otherwise EARLY STAGE.
- Dimension sum labels: Strong `>=7`, Partial `>=5`, Emerging `>=3`, otherwise Absent.
- It measures one respondent’s selection among authored policy-maturity descriptions. It does not measure child nervous-system state, trauma, disability access, school safety, teacher burnout, belonging, environmental exposure, learning outcomes, legal compliance, or intervention effects.
- Missing: unknown/N/A, age/grade, school type, respondent role, jurisdiction, evidence citation/upload, student/family voice, IEP/504 obligations, subgroup privacy suppression, corroboration, uncertainty, inter-rater method, validation, causal design.

## Data ledger

| Trigger | Data | Boundary |
|---|---|---|
| Page view/scroll | referrer, UTM, depth/event | Local endpoint absent; no privacy page. |
| Result gate | adult email, tier, total percentage, six dimension sums, timestamp | Derived profile leaves browser despite simplified “answers stay” claim. |
| Waitlist | email, commercial-interest message, timestamp | No separate marketing consent/terms/fulfillment evidence. |
| Contact | name, email, free text | No warning not to include student/child/disability/education-record information. |

