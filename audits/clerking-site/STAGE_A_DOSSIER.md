# Clerking — Fractional Law Clerk Marketplace

## 1. Asset identity

Clerking is an independently branded, public two-sided marketplace concept operated in copy by Rayven-Nikkita Collins LLC. It proposes paid matching between US attorneys and law students, student memberships/templates/job-board access, attorney subscriptions and single postings. Live deployment: `clerking-site.vercel.app`; private GitHub `rn-collins/clerking-site` (ID 1285739469), `main`, homepage linked to Vercel. It is not represented in RN Selected Work.

Repo architecture: static `public/` site plus Vercel functions for A/B assignment, events, analytics, health, leads, waitlist and Gumroad webhook; Upstash Redis, Resend/Slack/Gumroad/admin environment dependencies appear in code. No package manifest/tests/migrations/account system/payment UI/secure document workspace were found.

## 2. Executive verdict

**E — incomplete, high-risk marketplace prototype. Do not publicly market or take payment/placements yet.** The positioning and two-sided economics are coherent enough to warrant validation, but it is not an operating marketplace. Commerce, member access, postings, vetting, SLAs, confidentiality infrastructure and deliverables are primarily copy, mailto links, static cards and partially configured analytics APIs.

This business touches legal ethics, client confidentiality, privilege/work product, conflicts, UPL, fee sharing/referrals, advertising/solicitation, student employment/classification, wage/hour, discrimination, data security and court rules across jurisdictions. Model Rule 5.3 alone cannot establish legality. The public admin and behavioral-data architecture create additional risk.

## 3. Complete route map

See `ROUTE_CONTROL_LEDGER.md`. Public routes are home, job board, admin, privacy and terms. APIs: ab, analytics, events, Gumroad webhook, health, lead and waitlist. Robots/sitemap missing. The job board/admin are discoverable without authentication; analytics JS is public. No account, checkout, billing portal, attorney posting, student application, secure workspace, conflict check, document exchange or subscription route exists.

## 4. Complete interaction/control inventory

Audited all nav/mobile anchors, mailto CTAs, pricing/tier displays, job filters/apply links, FAQs, analytics/A-B tracking, contact modal, admin login/data panels, legal links and API endpoints. No consequential submissions. Primary journeys terminate in email rather than the advertised platform.

## 5. Consumer journeys and results

### Attorney

An attorney sees a strong overflow-work proposition, exact prices and fast matching promises. They cannot subscribe, post, securely describe a matter, run conflicts, review consent/security terms, or verify available students. “Claim your spot” opens email. The platform cannot safely accept client/matter facts by ordinary email without attorney-selected safeguards.

### Student

A student sees $5/$20/$50 memberships, 35 templates, jobs and placement access. No purchase/account/application exists. The supposedly restricted job board is public and its three static postings are directly apply-able by email. Their authenticity/current availability was not established.

### Administrator

`/admin` is publicly reachable and requests an admin key, which is transmitted in a query string. The backend aggregates identifiable leads, revenue and behavioral data. `/api/health` returns 503 and analytics returns server error without a key, demonstrating incomplete operations.

## 6. Functional matrix

| Status | Features |
|---|---|
| Working | Static marketing, responsive sections, FAQ, job filters, privacy/terms pages, mailto links. |
| Partial | Lead/event/A-B APIs, analytics/admin, mobile nav, job board, legal disclaimers. |
| Simulated | Subscriptions, Stripe dashboard, cohorts, paid member access, active placement pool, posting workflow, matching SLAs, 35-template library, vetting/confidentiality screening. |
| Broken | Access restriction, health/config, trustworthy form success, robots/sitemap. |
| Missing | Authentication/authorization, checkout, intake, conflicts, secure files, audit log, case/matter isolation, consent, dispute/support workflow, deletion/admin security, operational staffing. |

## 7. Copy and information architecture

The copy is polished but overstates launch status. Replace present-tense claims with “pilot/waitlist” until service delivery exists. Remove artificial scarcity/lifetime-price assurances unless inventory and binding terms support them. Substantiate 10+ hours, $288/hr, $50/hr, $80K+, 7 positions, 2,862 connections, 26% reply rate, and “nationally.”

“Fractional GC Lite” is especially risky: a law student is not a fractional general counsel and cannot replace attorney judgment. Rename “Dedicated supervised legal support” and make supervising in-house/licensed counsel mandatory. “Their name is on every deliverable” and “any jurisdiction” should be removed. “Full citation verification” needs protocol and attorney verification.

## 8. Science/law/policy/regulatory claim ledger

The site correctly acknowledges that hiring attorneys supervise nonlawyers and remain responsible. But the categorical “Yes, [Clerking] is legal” is untenable nationwide. Rule 5.3 requires reasonable efforts/supervision; it does not resolve UPL, multijurisdiction practice, confidentiality, conflicts, fees, solicitation, employment or student-practice rules.

Required legal design:

- verify attorney identity, active status, jurisdiction and disciplinary restrictions;
- determine every student’s permitted role; prohibit direct client advice/representation unless separately authorized;
- conflict screening before disclosure, ongoing conflict updates, ethical walls and declined-matter deletion;
- attorney-controlled scope, instructions, review, filing/communication and client consent where applicable;
- jurisdiction-specific analysis of marketplace fees/referrals and Rule 5.4/7.x risks;
- reasonable Rule 1.6 safeguards, secure transmission/storage, vendor terms, incident response and breach duties;
- preserve privilege/work-product without promising it; no platform access to substance unless required and authorized;
- classification, pay, minimum wage/overtime, tax, workers’ compensation and discrimination/accessibility review;
- law-school/employer/visa/outside-work and court/local-rule compliance;
- verified citations, source access, hallucination/AI policy and no confidential data in unapproved AI tools.

The templates themselves are legal-content products and require jurisdiction/version labels, attorney review, update ownership and clear educational/non-reliance boundaries.

## 9. Accessibility and responsive findings

Strengths: skip link, native links/buttons, FAQ expanded state and responsive CSS. Gaps: modal has no labelled relationship/focus trap/return/Escape; inline inputs lack visible labels; fixed button can obscure mobile content; job filter active state is visual only; mailto dependence is an accessibility/compatibility barrier; animations lack reduced-motion handling; admin charts/tables need nonvisual equivalents; no 200–400% zoom, forced colors, keyboard-only, VoiceOver/NVDA or mobile-device evidence.

## 10. Brand architecture

Clerking is not NSAG or Institutions of One. It could be an independently branded venture built by Aloha AI/RN, but its public connection to RN as a 1L makes professional-status precision essential. Do not suggest Northeastern affiliation/endorsement. Named firms/attorneys and current-role claims need consent, accuracy and update dates. If retained, it should eventually be its own case study, not folded into the FlexJD Resource Hub.

## 11. Business model and conversion

The two-sided subscription model has adverse incentives: charging students for access/priority without guaranteed placement can resemble pay-to-play and requires transparent demand, fairness, refunds and consumer-protection review. Charging attorneys for matching plus students directly creates fragmented responsibility. Before pilot, validate demand manually with no student placement fee, a tiny attorney cohort, written supervision/security protocol and transparent service-level limits.

Define who owns matching, vetting, conflicts, complaints, rematching, quality, nonpayment, harassment, deadlines, malpractice/escalation, support, insurance and records. Do not launch “lifetime” pricing or 24-hour guarantees without capacity evidence.

## 12. Security, privacy, data and operations

The privacy policy understates persistent visitor/session IDs, screen/language/device/referrer/UTM, behavior/error capture, A/B assignment and Redis storage. It references GA4/Clarity configuration but no consent mechanism. Event/A-B endpoints allow wildcard CORS and appear unauthenticated/rate-unlimited, enabling poisoning/abuse. Admin credentials in URL query parameters can leak through history/logs/referrers. Admin data contains lead PII. Webhook signature verification/idempotency and Redis failure handling require dedicated review.

Most importantly, the architecture is not suitable for client confidences or legal documents. Publish a “do not send client-confidential, privileged, sensitive or matter-identifying information” notice until an attorney-approved secure channel, access model, retention/deletion, encryption, audit logging, incident response and vendor review exist.

## 13. Ranked defects

| Priority | Defect |
|---|---|
| P0 | Public site markets an operating legal marketplace despite no account/payment/intake/secure workflow and unverified postings/service capacity. |
| P0 | Categorical nationwide legality/UPL assurance relies primarily on Rule 5.3. |
| P0 | No safe confidentiality/conflict/matter-data architecture for advertised legal work. |
| P1 | Public member-only job board; paid-access claims unenforced; posting authenticity/current status unverified. |
| P1 | Student pay-to-access/placement tiers and Fractional GC framing create ethics/consumer risk. |
| P1 | Admin secret in query string; lead PII/analytics exposure risk; health 503. |
| P1 | Present-tense Stripe/subscription/SLA/template/vetting claims not delivered. |
| P1 | Privacy policy incomplete for behavioral analytics/A-B/Redis and legal-work data. |
| P2 | False-success lead UI, missing robots/sitemap, accessibility gaps and public maintenance script. |

## 14. Exact remediation plan

1. Immediately relabel site “prelaunch pilot/waitlist”; remove checkout/subscription/active-job/SLA/lifetime claims and public job details until verified.
2. Obtain multi-jurisdiction ethics/employment/privacy review; produce attorney and student agreements plus platform boundaries.
3. Pilot manually with verified attorneys, no confidential facts through site/email, conflicts before introduction and attorney-owned secure tools.
4. Decide economic model after Rule 5.4/7.x and student consumer-protection review; strongly consider no student placement subscription.
5. Build authenticated role-based intake/posting/application/billing only after threat model; keep legal documents outside platform initially.
6. Replace admin query-key with secure session/auth, least privilege, audit logging, CSRF/rate limiting; harden webhooks and APIs.
7. Reconcile privacy disclosure/consent/retention/deletion and analytics minimization; remove Clarity/A-B until justified.
8. Verify claims, postings, templates and named credentials; establish citation/template versioning and AI-use policy.
9. Complete accessibility and E2E/security tests; repair health/config; add robots/sitemap and remove public scripts.

## 15. Recommended estate disposition

**E — experiment/incomplete prototype.** Maintain privately or as a clearly labelled prelaunch validation page. Reconsider P only after a real supervised pilot, ethics opinion/review, secure operating model and evidence of delivery. It is not a component of another build and not yet eligible for a public case study claiming marketplace operation.

## 16. RN Selected Work treatment

Do not add Clerking to the public Build Atlas now. Account for it in the master ledger as **E, private/prelaunch legal-marketplace experiment** with the live URL release-blocked. If remediated, a case study may describe discovery, two-sided service design, ethics-by-design, secure workflow and pilot evidence—but must distinguish completed software, concierge operations and future marketplace features. Do not expose private lead, student, attorney or firm data.

## 17. Evidence appendix and unverified areas

Inspected repository/file tree, all public HTML/JS, Vercel config/headers, every route/link/control, admin/job-board/privacy/terms, API source and safe endpoint responses. Primary legal anchor: ABA Model Rules 1.1, 1.4–1.6, 1.7–1.10, 5.1, 5.3–5.5 and 7.1–7.3, always subject to state adoption/variation and other law.

Unverified: any real subscribers/payments/cohort capacity; student roster/vetting/training; posting clients/authenticity; all 35 templates; engagement/confidentiality agreements; Stripe/Gumroad/Redis/Resend/Slack production configuration; insurance; legal opinions; security testing; deletion execution; named-person/firm permissions; Vercel deployment commit. No forms were submitted and no source was edited.
