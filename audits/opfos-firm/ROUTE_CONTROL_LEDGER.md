# One-Person-Firm OS — Route and Control Ledger

Audit date: August 13, 2026 (HST)

## Route/asset/API ledger

| Surface | Method | Live result | Classification |
|---|---|---:|---|
| `/` | GET | 200 | only static service page |
| `/photo-rn.jpg` | GET | 200 | portrait |
| `/robots.txt` | GET | 200 `Allow: /` | indexable |
| `/sitemap.xml` | GET | 404 | linked but absent |
| `/api/track` | GET/source POST | 404 | custom analytics broken |
| arbitrary route | GET | 404 | no product/workflow routes |
| `nsag-api.vercel.app/api/lead` | POST | not submitted; browser-blocked by `connect-src 'self'` | all lead workflows nonfunctional |

## Conversion controls

| Control | Intended state | Actual/source finding |
|---|---|---|
| Nav Set Up My OS | enrollment | opens enrollment modal |
| Hero Set Up My OS | enrollment | same modal |
| See Pricing | scroll | works |
| Promise Get Started | enrollment | same modal |
| Founder Set Up My OS | enrollment | same modal |
| DIY Get the Template | choose $297 | generic modal; selection not transmitted |
| Cohort Join | choose $497 | generic modal; selection not transmitted |
| Sprint Book | choose $1,500 | generic modal; selection not transmitted |
| Enrollment submit | capture/confirm spot | CSP-blocked; catch still shows success |
| Fixed/footer Contact | open contact | works |
| Contact submit | send message | CSP-blocked; catch still says sent |
| Checklist submit | email checklist | CSP-blocked; catch still says check inbox; no delivery code |
| modal ×/overlay/Escape | close | works visually |
| modal focus lifecycle | accessible dialog | absent |

## Tier/deliverable ledger

| Tier/item | Public promise | Repository evidence |
|---|---|---|
| DIY $297 | template, 3 skills, docs, Loom | none |
| Community $497/person | 3 sessions, customized workspace, AI configs, Slack | none |
| Sprint $1,500 | full one-week customized setup, Loom, check-in | service copy only |
| Notion command center | daily/client/task/revenue/memory | no template/schema |
| UAOS v5 | sanitized template | absent |
| Ops Agent | task routing/weekly review | label only |
| Content Agent | content pipeline | label only |
| Outreach Agent | LinkedIn/email sequences | label only |
| Claude Projects | three brand contexts | absent |
| SKILL.md | three custom files | absent |
| training | 30-minute reusable Loom | absent |
| support | 30-day check-in | no scheduling/terms |
| audit checklist | emailed 12-point artifact | absent/no delivery |
| checkout | purchase | explicitly not live |
| export/backup | portability | absent |

## Data flow ledger

| Flow | Data | Destination | Defect |
|---|---|---|---|
| enrollment | name, email, UTM | external NSAG API | CSP block; no plan; false success; no privacy |
| contact | name, email, message, UTM | external NSAG API | CSP block; false success; sensitive free text |
| checklist | name, email, UTM | external NSAG API | CSP block; no mailer/artifact; false success |
| page analytics | referrer, UTM, depth | missing same-origin `/api/track` | 404; undisclosed |
| Google analytics | events | placeholder `G-XXXXXXXXXX` | external script blocked by CSP |
| Vercel analytics | performance/usage | Vercel scripts | privacy disclosure absent |
| proposed workspace | client/revenue/task/brand content | Notion/Claude | no classification, isolation, retention, export or vendor terms |

## Security/accessibility ledger

| Item | Finding |
|---|---|
| HSTS/XFO/nosniff/referrer/permissions | present |
| CSP | strong frame/default boundary but contradicts app; unsafe-inline/eval; blocks required API/GA |
| local secrets/dependencies | none in static five-file repo |
| privacy/terms/refund/license | absent |
| spam/rate limiting | no visible contract |
| response status check | absent |
| failure handling | knowingly reports success |
| dialog semantics | no role/aria-modal/name |
| labels | text labels not associated with inputs; capture has placeholders only |
| keyboard | Escape works; no focus trap/return/initial focus |
| announcements | no live status/error |
| mobile | grids collapse; fixed controls/zoom require testing |
| motion/focus/contrast | no reduced-motion/focus-visible; small/low-contrast text requires measurement |

## Claim ledger

| Claim | Status/correction |
|---|---|
| “fully running OS in one week” | unverified service promise; narrow to scoped setup sprint |
| “3 AI employees wired and running” | no agents; use role-specific AI workspace/instruction configs |
| “tells you what to do next” | absolute; describe prioritized-view design |
| “nothing falls through cracks” | outcome guarantee; remove |
| “No tech background required” | unsupported; publish prerequisites |
| 6 businesses/6+ brands/7 clients | self-reported/time-sensitive; reconcile and date |
| “exact system”/years stress-tested | no artifact or performance evidence |
| “MOST POPULAR” | no sales evidence |
| spot confirmed/on list | false when capture fails |
| checklist sent | false; no delivery system |
| one-business-day reply | unsupported SLA |
| related Legal Risk Monitor live/hourly | overclaims sibling asset; remove/inherit verified copy |

## Final estate treatment

1. `P`: one canonical Institutions of One case; no separate counts for template or three role configurations.
2. `C`: current public sales/lead surface is release-blocked.
3. Change status from **Live operating system** to **Live service-architecture prototype**.
4. Suppress live link until forms, artifacts, fulfillment, privacy and commercial terms pass.
5. State that the repository verifies only the sales/service architecture—not templates, agents, delivery, customers or outcomes.
6. Institutions of One owns the concept; Aloha AI is secondary technical implementation attribution; NSAG is not the product parent.
