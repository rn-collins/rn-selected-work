# bm-intel — Route, Control, API, and Data Ledger

**Audit date:** August 13, 2026 HST  
**Tree:** `ca4e9c6aada29d667df0ab0e03b80c251a93a33e`  
**Canonical:** `https://bm-intel-ivory.vercel.app/`

## Public route ledger

| Route | Data | Controls | Result / risk |
|---|---|---|---|
| `/` | Redis stats and up to 100 signals | cards, glossary, signal/source/admin/related links | 200; functional; “Live data” overclaim |
| `/signals` | up to 200 Redis signals | text search; jurisdiction, priority, category, counsel, status filters; clear; linked rows | 200; functional |
| `/signals/[id]` | one Redis signal | back link, external source link | functional dynamic detail; recommended-action/currency claims consequential |
| `/sources` | all Redis sources | external source links | 200; 17 records; all observed `lastChecked` null |
| `/admin` | client form → signal API | guide disclosure, fields, 4 sliders, counsel/alert toggles, submit | 200 public; unauthenticated critical defect |
| unknown | none | return navigation | custom 404 verified |

## API ledger

| Method / route | Action | Auth/validation | Finding |
|---|---|---|---|
| `GET /api/signals` | list paginated signals | public; numeric query parsing only | expected public read; no hard limit observed |
| `POST /api/signals` | create record and optional alerts | **no auth**; presence-only fields | P0 integrity/cost/injection risk |
| `GET /api/signals/[id]` | fetch one | public | expected public read |
| `PATCH /api/signals/[id]` | merge arbitrary patch; optional alerts | **no auth/schema** | P0 integrity/injection risk |
| `DELETE /api/signals/[id]` | destructive Redis deletion | **no auth** | P0 destructive risk |
| `GET /api/sources` | list sources | public | expected public read |
| `POST /api/sources` | create source | **no auth**; presence-only | P0 source poisoning |
| `POST /api/alerts` | send Slack/email; store alert; mutate signal | **no auth/rate limit** | P0 alert abuse/cost risk |
| `POST /api/lead` | persist PII; Slack/email notification | email presence only; no consent/rate/retention | P0 privacy/spam/injection risk |
| `POST /api/seed` | create seed sources/signals | shared secret | only protected mutation; must fail closed if env absent |
| `POST /api/track` | referenced analytics event | route absent | broken/404 custom analytics |

## Consumer control ledger

- Navigation links: Dashboard, All Signals, Sources, Add Signal.
- Glossary open/close disclosure controls.
- Dashboard signal cards and related external build links.
- Six signal-table inputs: search, jurisdiction, priority, outside counsel, status, category; Clear filters.
- Individual signal: source link, back link, score/action/currency displays.
- Admin: title, summary, source URL/name/tier, jurisdiction, category, found/published dates, four ranges, counsel toggle, notes, optional alert toggle, submit.
- Contact modal: open, overlay close, Cancel, required-email alert, Send.
- No proposal, calculator, report builder, export or download control exists.

## Live dataset inventory

| Item | Observed |
|---|---|
| Signals | 27 |
| Sources | 17 |
| Jurisdictions in signals | Global, EU, US, UK; categories also imply DE/PL/future markets |
| Priority | deterministic sum: impact + legal complexity + urgency, 3–15 in practice |
| Confidence | separate 1–5 authored source-reliability label |
| Status | New plus supported workflow states in UI/types |
| Review metadata | dateFound/datePublished; no verified-as-of/reviewer/supersession |
| Source currentness | frequency labels present; all 17 observed `lastChecked` null |
| Critical currentness defect | EU AI Act “Seven Weeks Away” still live after August 2, 2026 and ignores revised phased dates |

## Persistence and integration ledger

| System | Data/effect | Boundary |
|---|---|---|
| Upstash Redis | signals, sources, alerts, leads, indexes/filter sets | shared instance with `bm:` namespace; no tenant/RBAC/audit history |
| Resend | signal alerts and lead notification | configuration/delivery unverified; HTML injection risk from public input |
| Slack webhook | signal alerts and lead notification | public trigger and mrkdwn injection risk |
| Vercel analytics/speed | platform telemetry | scripts included |
| Custom analytics | page/scroll fetch to `/api/track` | endpoint absent |
| Contact lead | name/email/message/source | stored without published consent/retention/deletion controls |

## Source and build/config ledger

| Item | Finding |
|---|---|
| Framework | Next.js 16.2.7, React 19.2.4, TypeScript 5 |
| Build | `next build`; no test/lint script or CI workflow in tree |
| Revalidation | dashboard/signals/details revalidate every 60 seconds; this is cache refresh, not source monitoring |
| Security headers | CSP, DENY framing, nosniff, referrer, permissions, HSTS |
| CSP caveat | permits unsafe-inline and unsafe-eval |
| Env | Redis, Slack, Resend, dashboard/seed secrets, public app URL |
| Unused control | `DASHBOARD_SECRET` not consumed anywhere audited |
| Repository privacy | private; appropriate for integration/admin logic, but public API still exposes unsafe operations |
| Vercel | READY production; project `prj_9CdoJdMNKAkAT1MXp53S08vKJ65a` |

## Portfolio disposition

- **P** canonical individual organization-specific case.
- Public product may be linked only with release-blocked/untrusted-data warning until access-control remediation.
- Must say independently initiated, public-source, manually seeded, noncommissioned and not endorsed/adopted.
- Must not claim continuous monitoring, verified law, client data, counsel review, proposal, calculator, export/download, delivered engagement or operating alerts.
