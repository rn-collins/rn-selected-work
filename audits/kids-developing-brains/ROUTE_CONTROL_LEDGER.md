# AI for Developing Brains — R4 route, control, resource, and evidence ledger

Audit date: August 13, 2026 HST  
Stage: A — read-only represented-site recertification  
Canonical deployment: <https://kids-developing-brains.vercel.app/>  
Vercel project: `prj_Fn0yqi9bgyVTmv17Bdp259j0NBWo`  
Repository: private/inaccessible `rn-collins/kids-developing-brains`

## Coverage boundary

Production is one 80,417-byte HTML page with 16 content sections, 16 buttons, 11 anchors, nine inputs, one textarea, a five-question client-side score, three modals, four lead-entry paths, analytics code, a portrait, and related NSAG/health links. The entire public HTML, inline scripts, visible claims, controls, modal states, quiz logic, response headers/CSP, machine paths, static resource, and external navigation destinations were inspected.

No lead was submitted. The private repository could not be cloned, so server-side source, build/dependencies/tests, exact deployment SHA, storage, secrets, logs, workshop/guide source files, fulfillment records, and credential documentation remain unverified. Browser automation was unavailable; responsive/focus/rendering findings are source-based.

## Route and resource map

| Path/resource | Result | Finding |
|---|---|---|
| `/` | `200` HTML | Only consumer page; public and indexable by default. |
| `/photo-rn.jpg` | `200 image/jpeg`, 29,646 bytes | Portrait renders with alt text. |
| `/_vercel/insights/script.js` | same-origin script requested | Vercel analytics present. |
| `/_vercel/speed-insights/script.js` | same-origin script requested | Speed Insights present. |
| Google `gtag.js` | configured with placeholder `G-XXXXXXXXXX` | CSP `script-src 'self'` blocks it; placeholder would not produce valid property analytics. |
| `/api/track` | `404` | Page-view/scroll tracking silently fails. |
| `/sitemap.xml` | `404` | Advertised by `<link rel=sitemap>` but missing. |
| `/robots.txt` | `200 text/plain` | `User-agent: * / Allow: /`; no sitemap. |
| `/privacy`, `/terms` | `404` | No privacy, sales terms, refund/cancellation, recording, or data-use notice. |
| NSAG `/m12` | `200` | Footer parent-framework link resolves. |
| `nsag-m12.vercel.app` | `200` | Related M12 deployment resolves. |
| NSAG modules anchor | `200` parent page | Three M4/M6/M12 badges all point to the same generic modules anchor, not module-specific evidence. |
| WNH Guide | `200` | Related applied site resolves. |
| NARCH Advisory | `200` | Related applied site resolves. |
| DRU Assessment | `200` | Related health/neuroscience site resolves. |
| Aloha AI | `200` | Builder link resolves. |
| RN Portfolio URL | `200` then redirects to RN Selected Work | Stale URL; should link directly to canonical portfolio. |
| 20-page guide | no file/link | Described and priced at $27, but modal says it is still being finalized. |
| workshop/checkout/calendar | no route/link | Code comment says no redirect until workshop page is live. |
| recording/materials/full report | no file/link | Promised deliverables, not inspectable artifacts. |

## Page-section inventory

| Section | Delivered content | Finding |
|---|---|---|
| sticky navigation | NSAG/M12 identity; Reserve CTA | No internal section navigation; logo opens NSAG. |
| medical note | educational/not medical advice | Insufficient to cure personalized child-Q&A or unsupported certainty. |
| hero | 90-minute workshop; “what AI actually does” | Strong causal/certainty claim with no citations. |
| problem | parent/school anxiety framing | Dismisses media voices categorically; implies neuroscience resolves unsettled evidence. |
| promise | exact age-stage effects and 5-point protocol | Outcome/knowledge promise exceeds presented evidence. |
| deliverables | workshop, 20-page guide, Q&A, recording | None delivered or inspectable on site. |
| biography/pull quote | credentials and experience | Degree/licensure/title language needs documentary verification and careful professional-title treatment. |
| pricing | $47/$27/$1,500/$3,500 tiers | No checkout, dates, availability, scope terms, refund/cancellation, travel, taxes, recording consent, or fulfillment agreement. |
| capture | reserve/inquire | Guaranteed false success due blocked lead request. |
| framework architecture | KIDS/NSAG/M4/M6/M12 mapping | Broad claims; no source or validated assessment method. |
| six dimensions | institutional criteria | Useful issue categories, but described as measurable/accountability criteria without validation/operational definitions. |
| principles/deliverable | four NSAG principles; scored assessment/gap analysis claim | Site only provides an unvalidated five-item quiz. |
| rapid diagnostic | five questions and percent score | Can score incomplete responses; unanswered score is `NaN%`; equal weights/thresholds unvalidated. |
| signal/noise | Harvard/AAP/ASQ references | No links/citations; AI-specific evidence not established. |
| before/after + glossary | hypothetical governance transformations; five terms | Helpful concepts mixed with categorical causal language. |
| related domains/tools | NSAG siblings and DRU | Adds product-family context but fragments workshop conversion. |

## Complete control/state inventory

| Control | Count | Intended result | Source-proven result/defect |
|---|---:|---|---|
| Reserve CTAs | 4 paths (nav, hero, pricing, capture) | enroll in $47 workshop | Opens/uses lead capture only; no workshop date, seat, checkout, confirmation, or enrollment system. |
| Guide CTA | 1 | obtain/buy $27 PDF | Opens waitlist because guide is unfinished; no payment/download. |
| School/District Inquire | 2 | request $1,500/$3,500 booking | Opens contact modal; no scope/SOW/availability. |
| Fixed Contact | 1 | open booking contact | Opens same contact modal. |
| Enroll fields/button | 2 fields + submit | reserve workshop | Cross-origin fetch is blocked by CSP; `postLead` catches; UI says “You're in!” and “Redirecting” but never redirects. |
| Guide fields/button | 2 + submit | join guide list | Same guaranteed failed request; UI says user is on list. |
| Contact fields/button | 3 + submit | send message/1-day response | Same guaranteed failed request; UI says Message Sent/1 business day. |
| Capture fields/button | 2 + submit | reserve | Same guaranteed failed request; UI says check inbox. |
| Modal close | 3 | close | click/backdrop; Escape closes Enroll and Contact but **not Guide**. |
| Rapid Diagnostic radios | 15 | select one of 3 responses for each of 5 questions | Client state only; labels/radios present. |
| Get My Score | 1 | score completed assessment | Shown without completion gate; unanswered yields `NaN%`; partial answers are normalized as if complete. |
| Get Full Report | 1 generated | obtain assessment report | Opens contact modal; no report exists/delivers. |
| External links | 11 | navigate practices/modules/portfolio | All tested destinations resolve; three badges duplicate generic anchor. |

No actual HTML `<form>` is used. Native required/email validation does not run automatically for button-driven JavaScript; code only rejects blank strings and does not validate email format, consent, age, or message length.

## Lead/data flow and guaranteed false success

All four paths call `https://nsag-api.vercel.app/api/lead` with name/email/source and optional message plus session-stored UTM values. Production CSP is:

`connect-src 'self'`

The cross-origin NSAG API is not allowed. The browser must block the request. `postLead` catches the exception and returns normally; every caller then displays success. Therefore current enrollment, guide waitlist, booking contact, and reserve capture are not merely unverified—they are **guaranteed client-side false success under the published CSP**.

No privacy notice explains controller, purpose, recipient, processor, retention, deletion, security, marketing consent, or UTM tracking. “No spam. Unsubscribe any time” has no subscription/unsubscribe implementation.

## Rapid Diagnostic logic

Five authored governance questions score 0/1/2. The code sums only answered items, divides by `answered * 2`, and uses thresholds ≥80 Advanced, ≥50 Developing, else Early Stage.

- zero answered → `0 / 0` → `NaN%`, labeled Early Stage;
- one favorable answer → 100% Advanced;
- one middle answer → 50% Developing;
- no completion check, validation study, weighting rationale, reliability, sensitivity/specificity, normative sample, or decision-use limit;
- answer labels contain compound claims and leading value judgments;
- output calls the result “KIDS governance” and suggests evidence awareness without basis;
- “Get Full Report” is a contact CTA, not generated reporting.

It is an educational reflection checklist, not a scored assessment.

## Claim/source inventory

The page calls itself primary-source backed and names Harvard Center on the Developing Child, AAP guidance, Ages & Stages Questionnaires, and the CDC-Kaiser ACE Study. It contains **no actual research citation or source link**. External anchors are product-family/brand links only.

The main AI-specific proposition—exactly how AI affects the developing nervous system at each age stage—is not supported on the page. General screen-time, serve-and-return, toxic-stress, milestone-screening, and ACE evidence cannot be automatically transferred to heterogeneous AI uses.

## Accessibility/responsive source findings

Positive: responsive breakpoints at 900/768px; semantic headings/sections; portrait alt text; labelled radio groups through visible question text; backdrop/Escape closure for two modals; email autocomplete; large body text.

Defects:

- no skip link or main landmark;
- buttons/links lack general `:focus-visible`; inputs remove outline and rely on border color;
- modals lack `role=dialog`, `aria-modal`, accessible name, focus entry/trap/restore, status/live region;
- modal inputs use placeholders instead of labels;
- Guide modal ignores Escape;
- inline success state is not announced;
- fixed contact control can overlap mobile content;
- smooth scroll lacks reduced-motion override;
- decorative SVGs generally lack explicit hidden semantics;
- responsive/touch/keyboard/zoom/screen-reader/computed contrast were not browser executed.

## Disposition boundary

Retain **P only as a prelaunch NSAG-applied workshop/product concept**, not a live delivered workshop. Public paid offers, health/developmental certainty, scoring, enrollment, and lead promises are release-blocked. It should have one RN Selected Work case and must remain distinct from parent M12 while transparently identifying M12 as framework parent.
