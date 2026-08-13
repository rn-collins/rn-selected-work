# Aloha Build Club — R7 route and control ledger

Audit date: August 13, 2026 HST  
Canonical: <https://aloha-build-club.vercel.app/>  
Repository: private/inaccessible `rn-collins/aloha-build-club`  
Mode: read-only; no PII submitted

## Coverage boundary

Production is one 38,198-byte public HTML page. It contains program/pricing copy, four research links, three membership tiers, seven FAQ disclosures, two native dialogs, a second injected contact modal, analytics code, and related-site links. There is no member account, community, live-room/calendar, recording library, pod, shipped list, course, project workspace, resource library, payment, subscription, cancellation, or fulfillment route.

## Route/resource map

| Path/resource | Result | Finding |
|---|---|---|
| `/` | `200` | Sole product page. |
| `/og.png` | `200` | Social image. |
| `/sitemap.xml`, `/robots.txt` | `200` | Public/indexable. |
| `/api/track` | `404` | Same-origin page/scroll analytics silently fail. |
| `/privacy`, `/terms` | `404` | No policy or subscription terms. |
| member/community/course/project/resource routes | absent | No delivery surface. |
| checkout | absent | All checkout URLs are empty comments in source. |
| `rn-api.../api/lead` | public API, CORS-capable | Site CSP `connect-src 'self'` blocks browser requests before delivery. |

## Complete section inventory

| Section | Promise | Verified artifact |
|---|---|---|
| hero | daily room; founding cohort open; 25 seats | marketing page only |
| one-hour timeline | facilitated 60-minute format | proposed agenda |
| evidence | peer/accountability rationale | four links; claims overextend sources |
| benefits | daily rooms/recordings, copilot, pod, nudges, shipped list | no delivery evidence or access |
| host | RN hosts every session/answers in pod | unverified future/performance promise |
| audience | builders, students, job seekers; no technical skill | broad eligibility; no age/minor/safety boundary |
| pricing | $29 monthly, $290 annual, $99 Pro | pricing concepts; no checkout/subscription |
| related | Aloha AI, Creator Rights | navigation only |
| FAQ | recordings, flexible projects, rates, privacy | proposed policies; multiple unsupported operational assertions |
| signup/contact | email/PII forms | blocked by CSP; no membership created |

## Every control/state

| Control | Count | Result |
|---|---:|---|
| Join/Claim buttons | 6 | Open native enroll dialog and encode plan; no checkout exists. |
| enroll submit | 1 | Saves email to localStorage *before* network; CSP blocks API; visible error appears. No seat/list/link. |
| native contact buttons | 2 | Open native dialog. |
| native contact submit | 1 | CSP blocks API; visible error appears. |
| injected Contact button | 1 duplicate | Opens custom non-semantic modal. |
| injected contact submit | 1 | CSP blocks API; catch is silent; modal remains with no error. Success handler does not check HTTP status. |
| dialog close buttons | 2 | Native `dialog.close()`. Escape likely native; focus-return/browser behavior unverified. |
| FAQ details | 7 | Native expandable disclosures. |
| evidence links | 4 | Open sources. |
| sibling/portfolio/social links | 5 | Navigation; portfolio URL is stale redirect. |

## Signup/data behavior

- `CHECKOUT_URL` values for monthly/annual/pro/default are empty.
- Enrollment stores the submitted email as `aloha_bc_lead` in persistent localStorage before consent or successful delivery.
- Both main forms try cross-origin RN API requests that production CSP prohibits.
- Main signup/contact correctly show an error rather than false success, but no functioning fallback exists despite comments claiming one.
- Duplicate injected contact suppresses error entirely.
- Analytics sends synthetic `event@analytics.local` leads to the same blocked endpoint and separately calls missing `/api/track`.
- The FAQ says email goes “straight to RN,” only to send room access, stored privately, deletable on request, and no marketing list. None of delivery/storage/deletion/access operations are inspectable; persistent localStorage is undisclosed.

## Evidence/currentness claims

- Falk & Ichino examined coworker productivity in a specific field experiment; turning its range into a general promise for virtual AI builders is an external-validity leap.
- Matthews is a conference presentation/self-report goal study, not proof this product raises completion to 76%.
- Fehr & Gächter concerns cooperation/punishment, not a direct 2–3× accountability-appointment effect; the page’s wording is materially unsupported.
- Focusmate’s own company metrics are market context, not independent effectiveness evidence.
- The disclaimer usefully denies outcome/income guarantees but “two of the most reliable behavioral levers” and “outside evidence ... works at scale” still overstate.

## Privacy, safety, accessibility, operations

- No privacy policy, terms, refund/cancellation, billing renewal, rate-lock definition, recording consent, IP/confidentiality, community conduct, moderation, harassment, removal, minor safeguarding, emergency, accessibility/accommodation, AI-data-use, session recording retention, or member-content license.
- Recorded shared work can reveal confidential client work, personal data, screens, voices, faces, prompts, proprietary code, copyrighted inputs, credentials, and regulated data.
- “Students” plus no age gate creates minor/education safety ambiguity.
- Engagement pod promises responses to launches but no anti-spam, disclosure, conflict, manipulation, or endorsement policy.
- Core page has skip link, main landmark, focus-visible and reduced-motion CSS, native details/dialogs, and labelled inputs.
- Duplicate custom modal has no dialog role/name/focus trap/Escape, placeholder-only labels, silent network error, and duplicates fixed controls that can overlap on mobile.

## Exact portfolio boundary

Verified: a thoughtful landing-page concept, proposed room format, tier architecture, audience boundary, FAQ copy, four rationale links, and nonfunctional signup/contact UI. Not verified: an active community, cohort, seat cap, daily schedule, live rooms, recordings, host delivery, AI copilot, engagement pod, nudges, shipped list, members, outcomes, payments, subscriptions, cancellations, annual/Pro benefits, course, projects, or resources.

