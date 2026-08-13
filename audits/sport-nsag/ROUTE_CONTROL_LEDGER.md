# SPORT / NSAG — R8 route and control ledger

Audit date: August 13, 2026 HST  
Canonical deployment: <https://sport-nsag.vercel.app/>  
Repository: private/inaccessible `rn-collins/sport-nsag`  
Mode: read-only; no booking, PII, or consequential submission

## Coverage boundary

Production is one 50,992-byte public HTML document containing a commercial offer, framework prose, six dimensions, five-question client-side diagnostic, evidence/noise section, hypotheticals, glossary, sibling links, Outlook booking links, analytics, and contact form. No assessment engine, report, roadmap, policy generator, athlete portal, dataset, wearable integration, medical record, completed audit, or client workspace exists.

## Route/resource inventory

| Route/resource | Result | Finding |
|---|---|---|
| `/` | `200` | Sole product route. |
| `/api/track` | `404` | scroll tracking unhandled failure. |
| `/privacy`, `/terms` | `404` | no health/athlete data, service, assessment, or sales policies. |
| `/sitemap.xml` | advertised; response not established in truncated run | requires release verification. |
| Outlook BookWithMe | external | two booking links; not exercised. Uses Northeastern account, fragmenting commercial identity. |
| NSAG | external | generic parent site; three module badges all point to same modules anchor. |
| NARCH/GAPI/Aloha AI/RN Builds | external | sibling/builder links; portfolio URL stale. |
| report/roadmap/assessment source | absent | no downloadable or generated deliverable. |

## Section and claim inventory

| Surface | Content | Boundary |
|---|---|---|
| hero/about | institutions regulate nervous systems; performance advantage | governance thesis, not established causal/product result. |
| pipeline | “includes F1 and LA28” | target list only; high affiliation/reputation risk. |
| offer | $8.5k/$15k/$35k/$3.5k and 90-day roadmap | proposed service/pricing; no scope/SOW/report. |
| framework | M5/M8/M15, six dimensions, P1/P7/P9/P13 | authored framework; no validated instrument. |
| diagnostic | five questions and percent score | unvalidated lead heuristic; partial/empty-answer defect. |
| signal/noise | sleep, NCAA, wearables, awareness | no direct citations/links; categorical summaries. |
| before/after | travel and facility hypotheticals | contains `(cite)`, `X%`, `$Y` placeholders; not evidence. |
| glossary | stress/recovery/cognition/welfare | several physiological oversimplifications. |
| domains/siblings | NARCH/WNH/GAPI/SPORT | brand map, not cross-domain validation. |

## Complete control/state inventory

| Control | Count | Proven behavior |
|---|---:|---|
| SPORT nav brand | 1 | `href="#"`; returns page top. |
| NSAG/module links | 4 | navigation; badges do not deep-link distinct module evidence. |
| Book discovery | 2 | external Outlook scheduling; no pre-booking privacy/scope notice. |
| diagnostic radios | 15 | store one numeric answer for each question. |
| Get score | 1 | no completion gate; normalizes only answered items. Zero answers yields `NaN%`; a single 2-point answer yields 100%/Advanced. |
| Get Full Report | generated | only opens contact modal; no report. |
| Contact button | 1 | opens custom non-semantic modal. |
| contact submit | 1 | POST to NSAG API; `.then()` treats any HTTP response as success and closes; catch silently retains modal. Delivery not safely confirmed. |
| sibling/builder links | 4 | external navigation. |

## Science/health evidence ledger

- “Performance is a nervous system output” is an explanatory frame, not a sufficient scientific model; sport performance is multilevel and sport/task specific.
- Organizations influence stressors and recovery opportunities, but “directly regulate how nervous systems function” overstates control and causal specificity.
- Sleep loss can impair cognition and performance, but “cognitive impairment precedes physical impairment” is not a universal athlete law across dose, outcome, sport, chronotype, acclimation, and study design.
- Injury-risk claims require population/exposure-specific estimates and confounder control. Never publish `X% elevated injury risk` as though the framework calculates it.
- Allostatic load is a research construct with measurement controversy; it is not a straightforward individual/team score.
- Adaptive versus impairing stress is dynamic and individualized; no universal threshold is exposed.
- “Parasympathetic dominance” is an oversimplified recovery definition; autonomic balance is not binary, and wearables/HRV are indirect/context-sensitive.
- Psychological safety, media pressure, agency, transition, travel and facilities are legitimate welfare domains, but pathways and outcomes require specific evidence and athlete input.
- Burnout, injury, attrition and ethical failure are not simply “institutional design outputs”; individual, medical, social, economic and competition factors interact.

## Legal/privacy/athlete-data boundary

No data is collected by the diagnostic, but a real engagement could collect health, mental-health, injury, biometric/wearable, disability, performance, employment, education, travel, identity, safeguarding, grievance and protected-trait data. Required issue spotting includes consent/power imbalance, de-identification, data minimization, access, retention, secondary use, vendor/wearable terms, breach response, state biometric/privacy law, HIPAA applicability/non-applicability, FERPA/student records, ADA/accommodations, Title IX/nondiscrimination, employment/labor/CBA, NCAA/conference rules, SafeSport/minor safeguarding, medical autonomy, research/IRB boundary and duty-of-care escalation.

The service cannot promise confidentiality, privilege, medical fitness, injury prediction, diagnosis, treatment, legal compliance, accreditation or competitive outcomes. Clinical red flags and safeguarding disclosures need licensed/properly authorized referral and mandatory-reporting pathways.

## Accessibility/security/currentness

- no skip link or main landmark;
- no global focus-visible or reduced-motion treatment;
- custom contact overlay lacks dialog semantics, focus trap/restore, Escape, labels and status/error;
- diagnostic result replacement is not announced; completion/error instructions absent;
- percentage-only/color-coded result creates interpretation and accessibility risk;
- mobile/zoom/keyboard/screen-reader/contrast were not browser-certified;
- HSTS, nosniff, frame denial, referrer and permissions headers exist; no CSP observed;
- third-party fonts/booking/lead services require privacy disclosure;
- “current August 2026” is unsupported because sources are named only at journal/institution level, without bibliographic records.

## RN portrait/authorship asset audit

No portrait, author image, `<img>`, portrait alt text, or OG/social image ships. Authorship is limited to footer text. An institutional framework does not require a portrait in analytical sections; qualifications, scope and independent reviewer disclosure matter more. If strategically added, use exactly one verified local portrait in an About/Contact block before the final CTA/footer, with documented source/rights, descriptive alt, intrinsic dimensions, responsive focal crops, optimized delivery and consistent NSAG styling. Prefer a purpose-built SPORT social card over a portrait unless founder-led positioning is intentional.

## Exact portfolio boundary

The site verifies one public applied-framework concept, not six separate builds or a delivered assessment. It supports exactly one RN Selected Work record: SPORT. The public artifact verifies framework/pricing/diagnostic/hypothetical/glossary architecture. It does not verify assessment validity, research currency, F1/LA28 relationship, engagement, athlete data, completed audit, roadmap, policy, adoption, reduced injury, improved welfare/performance, or institutional compliance.
