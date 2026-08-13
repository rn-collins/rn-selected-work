# NSAG M15 — Route and Control Ledger

Classification: **verified** = production/repository evidence; **working** = code can fulfill stated behavior; **broken** = cannot fulfill; **simulated** = implied output/differentiation is not implemented; **unverified** = external state unavailable.

## Routes

| Surface | Classification | Evidence/result |
|---|---|---|
| `https://nsag-m15.vercel.app/` | Verified public deployment/repo target | Static root; repository contains only `index.html`, `.gitignore`, `vercel.json`. Git blob is `4d4e0cca55b88c08324ce2eab27885c68f795e97`; live-fetch verification was unavailable during this wave. |
| Canonical `https://nsag-site.vercel.app/m15` | Declared canonical | Parent owns narrative; standalone is component. |
| Same-origin `/about`, `/framework`, `/advisory`, `/ce`, seven `/ce/*` tracks, `/evidence`, `/brief`, `/experience`, `/insights`, `/m1`, `/m7`, `/m8`, `/m9`, `/m10`, `/m11`, `/m13`, `/m14`, `/#modules`, `/#start` | Broken by repository architecture / live status unverified | No corresponding files, rewrites, redirects, or app router exist. Links appear copied from parent without parent hostname. |
| `/sitemap.xml` | Missing | Advertised in head; no file/route. |
| `/robots.txt`, `/privacy`, `/terms` | Missing | No file/route/link. Meta robots says index/follow. |
| `/api/track` | Broken by architecture | No local API; analytics failures silent. |
| `/pdfs/NSAG_M15_Overview.pdf` | Broken | Download target absent from complete repo; button still announces opening. |
| `nsag-api.vercel.app/api/lead` | Unverified | Assessment/download/contact callers ignore `response.ok`; backend, retention and security unavailable. |
| NASA PDF, three DOI sources | Discoverable citations | Source destinations exist conceptually; purported quotations and cross-domain extrapolations require verification. |
| Outlook booking, Aloha AI, legacy RN portfolio, M1/M8/M9 standalone tools | External | Hard-coded conversion/brand links. |

## Interaction inventory

| Control | Result | Classification |
|---|---|---|
| Mobile menu toggle | Toggles `.open`, updates `aria-expanded` | Working in source; no Escape/focus/outside-close. |
| Hover CE dropdown | Shows menu on hover | Mouse-oriented; no explicit button/expanded semantics; mobile relies CSS hover behavior. |
| Hero/evidence/assessment anchors | Scroll same page | Working. |
| 12 assessment questions | One radio selection auto-advances after 300 ms | Working in source, but no back/review, focus management, N/A/unknown, or evidence check. |
| Email gate | Mandatory after Q12 | Working client validation only; contradicts “tier report immediately” expectation. |
| Tier report | Average 12 values, four authored bands | Simulated institutional readiness; six output labels are merely “Dim 1”–“Dim 6.” |
| Copy results | Clipboard tier only | Partial; no confirmation/error; omits dimension report. |
| Assessment API | Sends email/module/tier/average | Unverified/false-success; result displays regardless of persistence. |
| Overview download | Sends email then clicks missing PDF after 300 ms | Broken and falsely signals “Opening your download…” regardless of API/file outcome. |
| Contact modal/form | Sends free text lead | False-success; closes on any resolved status, silent failure; inaccessible dialog. |
| Discovery-call links | Opens Outlook | External/consequential; not submitted during Stage A. |

## Scoring/measurement ledger

- Two generic policy-presence questions per named dimension, answers 1–5 (“Not at all” to “Fully”).
- Average bands: PIONEERING ≥4.5, EMERGING ≥3.5, DEVELOPING ≥2.5, else EARLY STAGE.
- No validation, weights, threshold rationale, setting/jurisdiction branching, missing-data rule, respondent role, evidence, incident/outcome/duration/conditions measure, affected-person voice, or inter-rater process.
- It measures one respondent’s belief that generic documents/reviews/access/reporting exist. It does not measure isolation exposure, solitary confinement, lawful authority, medical necessity, consent/coercion, disability impacts, habitability, emergency readiness, crew performance, human rights, or actual outcomes.

## Data ledger

| Trigger | Data leaving browser | Gap |
|---|---|---|
| Page/scroll analytics | referrer, UTM, depth/event | Broken local endpoint; no notice. |
| Assessment result | adult email, module, tier, average | Mandatory; no purpose/retention/deletion/security/consent detail. |
| PDF download | email, source, timestamp | File absent; lead capture occurs independently of delivery. |
| Contact | name, email, free text | No warning against prisoner/patient/crew/employee health, disability, incident, classified, protected, or operational data. |

