# Clerking — Stage A Route and Control Ledger

Audit date: 2026-08-12 HST  
Live: `https://clerking-site.vercel.app`  
Private repo: `rn-collins/clerking-site`  
Disposition: **E — high-risk, incomplete marketplace prototype**

## Route/API ledger

| Route | Status | Finding |
|---|---:|---|
| `/` | 200 | Public marketplace landing page; commercial/service claims exceed implementation. |
| `/job-board` | 200 | Publicly exposes three postings despite copy saying paid-member application access; no authentication. |
| `/admin` | 200 | Public admin shell; key is sent as URL query parameter to `/api/analytics`. |
| `/privacy` | 200 | Policy exists but does not fully describe Redis behavioral analytics, A/B profiles, webhook/revenue data, job applications or legal-work confidentiality. |
| `/terms` | 200 | Substantive draft terms; claims Stripe subscriptions and platform services not discoverable in interface. |
| `/robots.txt` | 404 | Missing. |
| `/sitemap.xml` | 404 | Declared but missing. |
| `/api/health` | 503 | Reports unhealthy/missing operational dependencies. |
| `/api/analytics` | 500 without key | Should be 401; server/config path is unhealthy. Admin endpoint may expose lead names/emails and analytics when correctly keyed. |
| `/api/ab` | 400 without visitorId | Live; assigns six experiments and attempts Redis persistence. |
| `/api/events` | 405 GET | Live POST endpoint; permissive CORS and no authentication/rate limit evident. |
| `/api/lead` | live route | Accepts contact/lead data; consequential submission not performed. |
| `/api/waitlist` | live route | Waitlist storage/notifications code exists; no embedded public waitlist form found. |
| `/api/gumroad-webhook` | live route | Revenue webhook code exists; authenticity/idempotency must be verified before use. |
| `/analytics.js` | 200 | Persistent visitor/session IDs, UTM/referrer/device/screen/language, behavior/errors/A-B impressions; privacy/cookie controls inadequate. |
| `/clerking_fix_v2.py` | public repository artifact | Python maintenance/rewrite script placed in public directory; publication attempt stalled during crawl and should not be public. |

## Consumer controls

| Control | Result | Class |
|---|---|---|
| Header/mobile anchors | Scroll to sections; hamburger updates visual state. | working/partial a11y |
| Founding cohort / waitlist / pricing CTAs | Open `mailto:`; no reservation, intake, subscription, checkout or SLA activation. | simulated conversion |
| Student join/apply CTAs | Open `mailto:`; no eligibility, conflicts, confidentiality, payment or application workflow. | simulated |
| FAQ accordions | Toggle content and expanded state. | working |
| Job-board filters | Client-side filter three static cards. | working on static data |
| Job applications | Public mailto links; supposed member restriction unenforced. | broken access model |
| Billing display | Prices shown; annual toggle styles/code exist but no obvious rendered operable billing control/checkout. | partial/simulated |
| Contact Architect | POSTs lead; treats any resolved HTTP response as “Sent!”; dialog focus/name/error deficient. | false success |
| Admin login | Sends secret in query string; no session/CSRF/auth UI hardening. | unsafe |

## Legal-professional boundary ledger

- ABA Model Rule 5.3 is relevant but not a national safe harbor; attorney obligations also implicate Rules 1.1, 1.4, 1.5, 1.6, 1.7–1.10, 5.1, 5.3, 5.4, 5.5, 7.1–7.3 and jurisdiction-specific law.
- A marketplace cannot guarantee UPL compliance merely by calling itself technology/matchmaking. Actual direction, fee structure, templates, vetting, communications and control matter.
- Privilege/work-product/confidentiality are not “protected” solely by an NDA. Attorneys must assess reasonable safeguards, conflicts, disclosure, vendor access, client consent when required, secure systems and jurisdiction.
- “Independent contractor” classification cannot be established by contract label; wage/hour, tax, student-practice, employment and worker-classification law vary.
- Student names on every deliverable can conflict with filing conventions, attorney responsibility, client confidentiality and court rules.
- “Any jurisdiction,” “full citation verification,” “confidentiality-trained,” “bar exam eligibility verified,” matching SLAs and national operation are unverified.

## Coverage boundary

Every discoverable route, file, link, control and API/config path was inspected or safely smoke-tested. No contact, application, waitlist, payment or webhook was submitted. No source or RN Selected Work file was modified.
