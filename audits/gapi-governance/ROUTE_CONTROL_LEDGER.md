# GAPI Governance — Route and Control Ledger

Audit date: August 13, 2026 (HST)

## Route/API ledger

| Surface | Method | Result | Classification |
|---|---|---:|---|
| `/` | GET | 200 | only public page; release-blocked claims |
| `/robots.txt` | GET | 200 `Allow: /` | indexable; inappropriate during remediation |
| `/sitemap.xml` | GET | 404 | head advertises missing file |
| `/api/track` | GET | 404 | no same-origin API; source POST also has no handler |
| arbitrary route | GET | 404 | expected |
| `https://nsag-api.vercel.app/api/lead` | POST | not submitted | external data action; inspect source contract separately |

## Diagnostic controls

| # | Question construct | Options/scores | Finding |
|---:|---|---|---|
| 1 | policy distinguishes task automation from belief/emotion/decision influence | No 0 / informal 1 / written framework 2 | self-report; coined category; no evidence |
| 2 | predeployment persuasion-architecture review | No 0 / informal 1 / required 2 | self-report; no test/rubric |
| 3 | documented cognitive-load/attention/decision assessment | No 0 / informal 1 / evidence-cited 2 | citation existence is not validity |
| 4 | population-scale compounding-effect policy | No 0 / acknowledged 1 / explicit policy 2 | policy presence is not effect measurement |
| 5 | update-triggered influence-profile review | No 0 / sometimes 1 / all updates 2 | no materiality/risk tier/evidence |

| Control/state | Actual behavior | Classification |
|---|---|---|
| radio selections | stored in browser object | working client UI |
| unanswered submit | `alert()` | inaccessible validation pattern |
| total score | sum 0–10, converted to percent | arbitrary authored arithmetic |
| 80–100 | “Advanced” | unvalidated conclusion |
| 50–79 | “Developing” | unvalidated conclusion |
| 0–49 | “Early Stage” | unvalidated conclusion |
| cohort statement | “Most GAPI organizations score here” | unsupported; no cohort data |
| Get the Full Report | opens contact modal | mislabeled; no report generated |

## Framework/deliverable ledger

| Item | Present | Verified state |
|---|---:|---|
| D1 Influence-Profile Documentation | yes | conceptual prompt only |
| D2 Cognitive Load Governance | yes | conceptual prompt only |
| D3 Transparency/Explainability | yes | conceptual prompt only |
| D4 Human Oversight/Override | yes | conceptual prompt only |
| D5 Demographic/Population Impact | yes | conceptual prompt only |
| D6 Post-Deployment Monitoring | yes | conceptual prompt only |
| evidence intake/verification | no | absent |
| six-dimension scoring rubric | no | absent |
| report generation/artifact | no | absent |
| assessment API/MCP server | no | absent |
| monitoring/integration | no | absent |
| certification scheme/decision | no | absent |
| mark/registry/license/revocation | no | absent |
| customer/outcome evidence | no | absent |

## Link/control ledger

| Label/control | Destination/result | Finding |
|---|---|---|
| GAPI brand | `#` | returns page top |
| NSAG | `https://nsag-site.vercel.app` | correct parent |
| M2/M11 badges | NSAG `#modules` | high-level link, not source-level crosswalk |
| Book Discovery Call (2) | Northeastern BookWithMe | personal/institutional ambiguity |
| NARCH | `narch-advisory.vercel.app` | sibling NSAG Applied site |
| SPORT | `sport-nsag.vercel.app` | sibling NSAG Applied site |
| Legal Risk Monitor | `legal-risk-monitor.vercel.app` | separate Aloha AI tool |
| Source Integrity Audit | `provenance-verify.vercel.app` | separate Aloha AI tool |
| Contact the Architect | opens modal | working open |
| Contact Send | external NSAG lead POST | not submitted; false success on HTTP errors |
| Contact Cancel/overlay | closes modal | works |
| Escape/focus management | none | accessibility failure |
| Built by Aloha AI | Aloha AI site | valid technical attribution only |
| RN Builds | retired `rn-portfolio-khaki` | stale URL |

## Claims/standards ledger

| Claim | Evidence state | Required treatment |
|---|---|---|
| “cognitively safe” | no operational measure/validation | remove safety assurance |
| “scored, certified” | only five-question self-score exists | describe proposed assessment architecture |
| certification report/mark | no artifact or scheme | proposed concept only |
| MCP integration/governance API | no backend/protocol | remove present-tense claim |
| measurable/deployable | no validation or integration | qualify as design goal |
| NIST used “for compliance” | NIST RMF is voluntary | say risk-management alignment/crosswalk |
| FTC establishes general conversational-AI disclosure exposure | cited rule is specific to fake reviews/testimonials | narrow to exact rule/order and scope |
| vendor ethics is “noise” | categorical and unsupported | evaluate source by source |
| academic AI safety largely irrelevant | categorical and unsupported | distinguish research questions/applicability |
| agents govern every user’s cognition/emotion | categorical causal claim | evidence-bounded risk hypothesis |
| 2% nudge creates measurable population effect | illustrative arithmetic, not evidence | label hypothetical or remove |
| Aug 2026 regulatory review | two uncited items only | publish complete, dated source register |

## Data/security/accessibility ledger

| Item | Finding |
|---|---|
| repository privacy | private |
| deployment privacy | public/indexable |
| local secrets/backend | none in three-file repo |
| lead data | name/email/free text to external NSAG API |
| lead privacy/retention | absent |
| lead response handling | any resolved response resets/closes; false success |
| UTM | stored in sessionStorage |
| custom tracking | posts source/medium/path to missing endpoint after scroll |
| telemetry | Vercel Insights/Speed Insights, undisclosed |
| headers | XFO DENY, nosniff, referrer, permissions; no CSP in repo |
| modal semantics | no dialog role/name/aria-modal/focus lifecycle |
| quiz grouping/status | no fieldset/legend/live result |
| document order | footer precedes most page sections |
| narrow mobile | pricing adapts; domain grid/fixed control need reflow verification |
| sitemap/canonical | sitemap missing; canonical absent |

## Final disposition and portfolio treatment

1. `P`: one canonical NSAG Applied concept and RN Selected Work case.
2. `C`: current public commercial/certification presentation is release-blocked.
3. Change status from **Live applied assessment** to **Live framework and readiness-prototype concept**.
4. Keep repository private; suppress public prototype link until P0 claims/pricing are corrected.
5. State explicitly that no validated assessment, report, certification/mark, accreditation, API/MCP, monitoring, customer outcome or safety/compliance determination is verified.
6. Aloha AI receives technical build attribution only; NSAG owns the framework, applied method and advisory judgment.
