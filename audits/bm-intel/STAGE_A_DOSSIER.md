# bm-intel — Represented-Site Recertification Dossier

**Product:** Burgermeister Expansion Intel  
**Audit date:** August 13, 2026 HST  
**Scope:** Wave R3 full read-only consumer, software, product, copy, legal/regulatory evidence, privacy/security, accessibility, brand, and business audit  
**Recommended disposition:** **P — organization-specific public concept, release-blocked pending access-control and evidence correction**  
**Source edits:** none

## 1. Asset identity

| Field | Finding |
|---|---|
| Repository | private `rn-collins/bm-intel` |
| Branch / tree | `main`; tree `ca4e9c6aada29d667df0ab0e03b80c251a93a33e` |
| Canonical deployment | `https://bm-intel-ivory.vercel.app/` |
| Vercel | project `prj_9CdoJdMNKAkAT1MXp53S08vKJ65a`; production deployment `dpl_Db27MDiDS8wHDh29VksBAz4CN7B2`, READY; Node 24.x |
| Architecture | Next.js 16.2.7 / React 19.2.4; Upstash Redis; Resend; optional Slack webhook; dynamic public API |
| Live data observed | 27 signals and 17 sources returned by public APIs on August 13, 2026 |
| Commissioning boundary | independently initiated from public information; no evidence of commission, review, endorsement, adoption, access to Burgermeister systems, or attorney/client relationship |
| Brand | organization-specific Aloha AI concept built by RN Collins; not a Burgermeister-owned or official product |

## 2. Executive verdict

Burgermeister Expansion Intel is a functioning database-backed regulatory-intelligence prototype. It renders a dashboard, searchable/filterable signal register, individual issue records, source library, weighted priority method, public Add Signal form, Redis CRUD API, and optional Slack/email alert pipeline. This is more than a mockup.

It is not safe to represent as a trustworthy live intelligence system. The entire admin surface is public. `POST /api/signals`, `PATCH` and `DELETE /api/signals/[id]`, `POST /api/sources`, and `POST /api/alerts` require no authentication or authorization. Anyone can create, alter, delete, misclassify, or trigger alerts from the legal record. `.env.example` names `DASHBOARD_SECRET`, but no route consumes it; only seeding uses a different shared secret. The public record must therefore be treated as mutable/untrusted until access controls, audit history, validation and recovery exist.

“Live data” and “monitored sources” also overstate operations. Signals and sources are seeded/manual records; there is no crawler, scheduled job, webhook ingestion, source-change detector, lawyer review queue, last-checked automation or update SLA. All 17 live source records had `lastChecked: null`. Seeding assigns `dateFound` at execution time, which can make old authored records appear newly found and inflate “New This Week.”

At least one prominent legal signal is materially stale: **“EU AI Act – General Application: 2 August 2026 (Seven Weeks Away)”** remains displayed on August 13, 2026. The European Commission's current implementation material states that some provisions applied August 2, 2026 while high-risk rules were extended to December 2, 2027 and product-embedded high-risk systems to August 2, 2028. The static title collapses a phased regime and an expired countdown.

Keep the case because it strongly demonstrates organization-specific issue mapping and system design. Correct it to a public-source, manually seeded prototype and disclose the critical integrity defect. Do not describe a proposal, calculator, download/export, continuous monitor or client delivery: none exists in the audited surface.

## 3. Complete route map

| Route | Public behavior | Finding |
|---|---|---|
| `/` | dashboard, methodology, counts, high/critical cards, links | live; “Live data” and operating instructions overstate trust/currentness |
| `/signals` | search; jurisdiction, priority, category, counsel and status filters; table | working consumer register |
| `/signals/[id]` | summary, action, scores, source, currency, notes, disclaimer | working dynamic record; legal-action language consequential |
| `/sources` | 17 sources grouped by tier/frequency | working library; “monitored” unsupported operationally |
| `/admin` | Add Signal, scoring sliders, counsel/alert controls | publicly accessible; critical authorization defect |
| unknown route | custom not-found | production 404 verified |

API and machine routes:

- `GET/POST /api/signals`
- `GET/PATCH/DELETE /api/signals/[id]`
- `GET/POST /api/sources`
- `POST /api/alerts`
- `POST /api/lead`
- `POST /api/seed` (shared-secret protected)
- `/api/track` is called by layout analytics but no route exists.
- `/sitemap.xml` is linked but neither a sitemap file nor Next sitemap route exists.
- no `robots.txt` implementation exists.

## 4. Complete control and deliverable inventory

- Navigation to Dashboard, All Signals, Sources and Add Signal.
- Dashboard stat cards, priority legend, critical/high signal cards and related-project links.
- Glossary disclosure controls.
- Signals search and five filters plus Clear filters; linked rows.
- Signal detail source link, status/counsel badges, four score bars, recommended-action block and currency calculation.
- Source links, tier/frequency/last-checked metadata.
- Add Signal fields, four 1–5 sliders, scoring-guide toggle, auto-calculated priority, counsel toggle, optional alert toggle and submit.
- Contact Architect modal posts name/email/message to the public lead endpoint.
- Server CRUD, alert and seed controls enumerated above.
- Email and Slack alert renderers.

There is **no proposal generator, market-entry proposal, financial calculator, PDF/CSV/JSON download, export, print report, saved comparison, task assignment, counsel approval signature, calendar, source crawler, automatic monitoring or client handoff package**. Any RN Selected Work case copy or screenshot caption implying these is incorrect.

## 5. Consumer and operator journeys

### Executive/expansion reader

The dashboard makes a complex cross-border issue set legible. Jurisdiction/category filters and counsel flags are useful. However, action labels such as “Immediate Action,” “Address immediately,” “require attorney review,” and “no immediate action required” appear authoritative even though scores are author-entered, validation is absent, data is publicly mutable and company facts are inferred from public announcements.

### Evidence reader

Individual records expose source name, tier, authored notes, date found/published and a simplistic freshness label. This is good evidence UX in form. It is not legal updating: date found is not last verified, links do not prove proposition support, a company homepage is not legal authority, and the system cannot distinguish an amended/repealed rule or proposal from current law.

### Record maintainer

The Add Signal form is functional, but it is public and the API accepts broadly typed JSON without authentication, origin/CSRF controls, rate limits, schema bounds, URL allowlists or controlled taxonomies. PATCH spreads arbitrary submitted fields into stored records. DELETE is unauthenticated. There is no version history, reviewer, approval, rollback or immutable audit record.

### Contact prospect

The floating modal posts lead PII to Redis and may notify Slack/Resend. It has no privacy notice, consent, retention/deletion statement, spam control or response contract; it closes on any resolved response even a non-2xx response. There is no proof the sender receives confirmation.

## 6. Product/functionality matrix

| Capability | Status | Truth boundary |
|---|---|---|
| Dashboard/register/detail | working | current records, not verified legal intelligence |
| Search/filter | working client-side | filters loaded records only |
| Priority scoring | working arithmetic | authored heuristic, not validated risk model |
| Source library | working directory | no continuous monitoring/last-check operation |
| Redis persistence | working | public writes destroy integrity |
| Add Signal | working but unsafe | no admin auth despite name/path |
| Update/delete API | real but unsafe | unauthenticated destructive capability |
| Slack/email alerts | implemented conditional integration | operation/delivery not proven; public trigger abuse possible |
| Lead capture | real | insufficient privacy/security/validation |
| Seed | shared-secret protected | static records; no idempotency/deduplication |
| Analytics | Vercel scripts present; custom tracking broken | `/api/track` absent |
| Monitoring/crawl | absent | manual/seeded data only |
| Proposal/calculator/download | absent | must not appear in case claims |

## 7. Legal, regulatory, evidence, and currentness findings

Positive design features:

- Repeated not-legal-advice language.
- Visible source tier, date and counsel-escalation fields.
- Priority score formula is disclosed rather than hidden.
- Tier 3 is described as business context, not a legal conclusion.
- Individual signals can preserve citation/practice notes.

Material deficiencies:

1. **Expired EU AI Act countdown and oversimplified application date.** Current official Commission materials describe a phased regime and extended dates for high-risk systems. The signal requires immediate replacement and re-review of every dependent action/score.
2. **No last-check evidence.** All 17 live sources showed no `lastChecked`; frequency labels (“daily,” “weekly,” “monthly”) are promises without a scheduler or review log.
3. **Incorrect source-tier semantics.** `gdpr.eu` is cataloged Tier 1 although it is not the official text repository or regulator. EUR-Lex should control for Regulation 2016/679; regulator guidance should come from the competent authority.
4. **Company pages as pseudo-legal sources.** Multiple Global Critical/High signals cite `burgermeister.com` while making legal-infrastructure, lease, contract, platform and crisis assertions. Those pages may support company context, not the asserted legal proposition.
5. **Cross-jurisdiction conflation.** “Global” signals combine U.S. FLSA, UK Working Time Regulations and EU/national rules; one source cannot establish obligations across all jurisdictions.
6. **State franchise registration count.** The FTC Franchise Rule source establishes federal disclosure duties, not the separate current requirements of “14 Registration States.” Each state proposition needs the controlling state regulator/statute and current counsel verification.
7. **Confidence is source class, not claim support.** A primary publication can be outdated, inapplicable or fail to support the proposition. A 5/5 confidence badge should not equal verified law.
8. **Urgency/impact/complexity are subjective.** No named reviewer, jurisdiction-specific attorney, factual assumptions, validation record or uncertainty interval supports them.
9. **Freshness calculation is misleading.** It compares seed/add time with publication time, not last legal verification, effective date, amendment status or next-review date.
10. **Company-specific numbers and timelines require verification.** Revenue, 2026 market-entry timing, locations, entity/contract structure and expansion plans are public-source inferences—not inside knowledge or accepted facts.

The system should use proposition-level citations, authority/effective/status dates, jurisdiction, verified-as-of, verifier/reviewer, supersession links, uncertainty, change trigger and correction history before presenting “recommended action.”

## 8. Data integrity, privacy, and security

### Critical authorization failures

- `/admin` has no authentication; `app/admin/layout.tsx` is metadata only.
- Signal create/update/delete, source create and alert trigger routes have no authentication or RBAC.
- `DASHBOARD_SECRET` is unused.
- No CSRF/origin check, request rate limiting or anti-automation exists.
- PATCH spreads arbitrary keys into stored records; server validation does not enforce score ranges, enums, string lengths or safe URLs.
- Public callers can cause Redis writes/deletes, corrupt legal intelligence and potentially trigger paid Slack/email operations.
- There is no audit log, author identity, approval state, backups or rollback exposed.

### Lead and communications

- `/api/lead` accepts any email-shaped string only by presence, stores name/email/message/source indefinitely in Redis, and can forward unsanitized content into HTML email and Slack.
- No consent, privacy link, purpose/retention/controller disclosure, deletion channel, Turnstile/honeypot/rate limit or idempotency exists.
- Modal false-success behavior closes after any resolved fetch without checking `res.ok`.

### Infrastructure

- `.env.example` exposes a real Upstash hostname and personal recipient email. Tokens are placeholders, but infrastructure/identity disclosure should be minimized.
- Shared Redis tenancy is namespaced, not isolated; a credential compromise crosses products.
- CSP includes `'unsafe-inline'` and `'unsafe-eval'`; stronger nonce/hash policy is preferable.
- Good baseline headers exist: HSTS, frame denial, nosniff, referrer and permissions policy.
- Alert email interpolates stored signal strings directly into HTML; malicious public records can become HTML injection in operator email. Slack mrkdwn injection is also possible.
- Seed secret comparison is simple and no rate limit is present; if `SEED_SECRET` were unset, a request omitting `secret` may compare `undefined === undefined` after JSON destructuring and could authorize seeding. Require configured-secret fail-closed behavior.

## 9. Copy and information architecture

- “Live data” should become **manually seeded public-source prototype data; last verified date shown per record** only after a real verification field exists.
- “17 monitored legal sources” should become **17-source watchlist** until monitoring evidence exists.
- “require outside counsel” is a useful escalation flag but not a determination that no counsel is needed elsewhere.
- “No immediate action required” is too strong for an unverified issue spotter; use “lower authored priority; verify before relying.”
- “Each signal has been researched [and] sourced to primary authorities where possible” needs a provenance/reviewer record.
- “Use Add Signal to log new developments” exposes an operator control to the public and should not appear in consumer instructions.
- Footer links obsolete `rn-portfolio-khaki.vercel.app` as RN Builds; link current RN Selected Work.
- JSON-LD also points to the obsolete portfolio and labels RN “AI Educator & Consultant”; align with current Aloha AI/RN brand copy.
- The visible Burgermeister name must be paired near the H1 with the noncommission/independent-concept disclosure, not only in the portfolio case.

## 10. Accessibility and responsive findings

Strengths include semantic tables/headings, real inputs/selects, visible text labels on the Add Signal form, horizontal table overflow, responsive grids, high-contrast palette and text alternatives beyond badge color.

Material gaps:

- Navigation source needs mobile-menu and active-state keyboard verification.
- Contact modal lacks programmatic labels, initial focus, focus trap, Escape close, return focus and background inertness.
- Counsel toggle is a custom button without role/switch state or accessible name/state.
- Range controls have visible surrounding labels but need explicit `htmlFor`/`id` association and value announcements.
- Filter inputs rely in part on placeholder/implicit context and need explicit labels.
- Dynamic success/error behavior requires focus/aria-live verification.
- Dense table/detail content needs 320px, zoom, VoiceOver/NVDA and keyboard testing.
- No independent WCAG audit or accessibility statement exists.

## 11. Organization-specific, brand, and commissioning boundary

This is an **independently initiated organization-specific concept** based on public information. There is no evidence Burgermeister commissioned, reviewed, endorsed, adopted, used, paid for, or supplied data to it. It is not Burgermeister legal advice, a Burgermeister compliance program, an official expansion dashboard, or evidence RN represented the company.

The prominent name and operational second-person copy (“your attorney,” “Burgermeister's expansion team,” “address immediately”) create affiliation risk. Every public entry point should disclose the independent/public-source nature. Burgermeister marks, announcements and facts remain their owners' material; the case should avoid official-looking trade dress and any suggestion of partnership.

Brand role: this belongs under Aloha AI as evidence of RN's public-source organizational research and build capability. It is not an NSAG implementation and should not be presented as legal practice. The source repository should remain private because it includes admin/integration architecture and organizational intelligence logic; the public product can remain linked after remediation.

## 12. Business value and limits

The product demonstrates a credible pre-proposal method: map heterogeneous expansion issues, expose sources, score for discussion, route counsel questions and give operators a shared register. That capability is valuable to restaurant groups, expansion leaders and advisors.

It is not yet a sellable monitoring product. Before delivery it requires authenticated tenancy, organization/user roles, source ingestion and review workflow, jurisdictional counsel, immutable audit history, alerts subscriptions/consent, correction/SLA terms, data processing terms, backups, export/handoff, incident handling and evidence of currentness. A client-specific deployment would also need contractual permission to process its confidential plans and a clear legal-services boundary.

## 13. Defects by severity

### P0 — blocking

1. Unauthenticated create/update/delete/source/alert endpoints and public admin page compromise the entire intelligence record.
2. Stale/materially misleading EU AI Act “seven weeks away” Critical signal and no reliable legal-currentness mechanism.
3. Lead PII collection lacks privacy/consent/retention/security controls.

### P1 — serious

1. “Live data”/“monitored” claims without automated or human review evidence; all source `lastChecked` values null.
2. Static seed time masquerades as discovery freshness and “new this week.”
3. Weak schema validation and arbitrary PATCH enable data/integration injection.
4. Email HTML and Slack content are built from unescaped public input.
5. No audit history, reviewer, approval, backup or rollback.
6. Company/public pages are used for legal conclusions and “Global” records conflate jurisdictions.
7. Contact modal false-success and accessibility failures.

### P2 — material

1. Missing sitemap/robots despite sitemap link.
2. Broken custom analytics path `/api/track`.
3. Obsolete RN portfolio links/JSON-LD.
4. No tests, lint script or CI in `package.json`/tree.
5. No proposal/calculator/download despite any broader case expectation.

## 14. Exact RN Selected Work corrections

**Keep P, but mark release-blocked until P0 repair.** Recommended title/status:

> **Burgermeister Expansion Intel**  
> Organization-specific public-source regulatory-intelligence prototype · independently initiated; not commissioned, reviewed, endorsed or adopted by Burgermeister.

Recommended case summary:

> RN designed and built a database-backed prototype that maps 27 publicly sourced expansion issues across market entry, food, labor, franchise, trademarks, privacy, supply chain and platform operations. The interface demonstrates searchable signals, a disclosed impact/complexity/urgency heuristic, source tiers and counsel-escalation fields. It is a manually seeded issue-spotting prototype—not continuous monitoring, a diligence report, legal advice, company data, or an official Burgermeister system. The current public build requires access-control and legal-currentness remediation before operational reliance.

Required corrections to the existing case:

- Keep the explicit independent/noncommissioned boundary; move it earlier and make it visually prominent.
- Change “source library concept” to “manual 17-source watchlist; no current monitoring proof.”
- State that public APIs currently make the record mutable and unsuitable for reliance until repaired.
- Do not call alerting operational continuously; code paths exist, delivery configuration/SLA is unverified and public triggering is unsafe.
- Do not imply a proposal, calculator, downloadable report/export, counsel review, Burgermeister data or delivered engagement.
- State that at least the EU AI Act countdown is stale and all 27 records require current proposition-level primary-source/counsel review.
- Link **Open prototype** separately from **Read case study**.

## 15. Release gates

1. Put `/admin` and every mutation/alert endpoint behind fail-closed authentication and role-based authorization.
2. Add strict schemas, score/enumeration/length/URL validation, origin/CSRF protection and rate limits.
3. Add author/reviewer/approved status, immutable audit events, backup and rollback.
4. Correct the EU AI Act record and perform all-27 proposition/source/status/effective-date review.
5. Replace date-found freshness with verified-as-of, verifier, next review and supersession fields.
6. Implement/record actual monitoring or relabel sources as a static watchlist.
7. Repair lead consent/privacy/retention/deletion, abuse prevention, HTML escaping and response handling.
8. Remove or implement `/api/track`, sitemap and robots.
9. Complete mobile/keyboard/screen-reader testing and modal/toggle/label repairs.
10. Update RN Selected Work with the exact treatment above.

## 16. Verification record and limitations

- Inspected the complete private repository tree, route/API/data/config/integration source and live public API records.
- Production returned HTTP 200 for `/`, `/signals`, `/sources`, and `/admin`; an unknown route returned 404.
- Public APIs returned 27 signals and 17 sources on August 13, 2026.
- Vercel project/deployment READY status and canonical domain were verified.
- Official European Commission current material was used to test the AI Act timing claim.
- No destructive mutation, alert, lead submission or seed call was performed.
- A complete jurisdiction-by-jurisdiction legal opinion was not attempted; every signal remains subject to current primary authority and qualified local counsel.
- No source, portfolio or master-ledger file was edited.

## 17. Bottom line

The concept belongs on RN Selected Work because it demonstrates RN's capacity to turn public organizational research into a concrete operating interface. Its current public database cannot be trusted as intelligence because its write boundary is open and its legal-currentness claims are not maintained. Present the system as a manually seeded, independently initiated prototype, correct the stale law, secure it, and never let polished “live” UI become evidence of commission, monitoring, counsel review or reliability.
