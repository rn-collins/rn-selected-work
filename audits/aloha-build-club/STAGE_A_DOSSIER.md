# Stage A recertification dossier — Aloha Build Club

Audit date: August 13, 2026 HST  
Round: represented-site recertification R7  
Mode: read-only; no source, portfolio, deployment, or master edits

## 1. Executive verdict

Aloha Build Club is a strong **community-product concept**: the 60-minute ritual, explicit “not a course” boundary, small-cohort thesis, body-doubling format, tier design, and outcome disclaimer show useful facilitation and membership thinking.

It is not a live community. The public site contains no schedule, room link, member login, recordings, pod, shipped list, community platform, course, project/resource workspace, payment, subscription, cancellation mechanism, member evidence, or fulfillment record. Source comments confirm checkout URLs are blank. Every main signup/contact request is blocked by CSP; enrollment displays an error, and a duplicate contact modal fails silently. The page nevertheless says “founding cohort open,” “daily live rooms,” “recorded,” and describes active delivery in the present tense.

Disposition: **P only as a prelaunch membership/community architecture.** Do not describe it as a recurring participation experience or live community until scheduling, payment, access, moderation, recording, privacy, cancellation, and fulfillment are operational and verified.

## 2. Asset identity and actual-versus-proposed matrix

| Component | Actual | Proposed/unverified |
|---|---|---|
| public page | complete static landing/pricing/FAQ | active club |
| enrollment | plan-aware dialog + persistent local email | delivered lead, seat, room link, checkout |
| room | described 60-minute agenda | schedule, video platform, attendance, facilitation |
| community | none | engagement pod, human responses, conduct/moderation |
| accountability | concept copy | nudges, streaks, Friday Shipped List |
| content | no course by design | recordings and future build tracks |
| Pro | pricing copy | monthly 1:1, priority feedback, L&D letter |
| evidence | four public links | product effectiveness/outcomes |

Full production evidence is in [ROUTE_CONTROL_LEDGER.md](./ROUTE_CONTROL_LEDGER.md). Repository was private/inaccessible. No PII was submitted.

## 3. Consumer journeys

### Prospective founding member

The page sets a clear emotional problem and format, but provides no start date, daily time/time zone, days/week, video/community platform, session calendar, trial, accessibility, prerequisites, cancellation/refund terms, or minimum cohort condition.

### Choosing a paid tier

Monthly, annual, and Pro buttons open the same email form. No checkout exists. Annual “two months free,” lifetime rate, badge, and early access cannot be purchased or fulfilled; Pro has no booking/feedback/L&D process.

### Missing the live time

FAQ promises same-day recordings and equal accountability. There is no recording system. Asynchronous recording consumption is also not body doubling and should not be framed as equivalent.

### Bringing real work

The site invites users to put real work “on the screen” without confidentiality, IP, client permission, sensitive-data, screen-share, recording, AI processing, or deletion rules.

## 4. Delivery and fulfillment design

Before selling, define and implement:

1. launch date, recurring schedule/time zones, holidays and cancellation/rescheduling;
2. platform(s), access provisioning, authentication and support;
3. facilitator capacity, backup host and 25-seat enforcement;
4. recording consent, optional-camera/screen rules, editing, access, retention/deletion;
5. pod platform, response expectations, moderation and member removal;
6. shipped-list opt-in, publicity/IP consent and deletion;
7. nudges/preferences/unsubscribe;
8. Pro scheduling, limits, rollover/no-show and feedback scope;
9. checkout, receipts, taxes, renewals, cancellation/refunds and failed payments;
10. closure/minimum-cohort plan and annual-member remedy;
11. accommodations and alternative participation;
12. support SLA, community metrics, complaints and incident handling.

## 5. Evidence and claims review

The site’s caution that it sells consistency rather than outcomes is appropriate. The evidence presentation still needs correction:

- describe Falk/Ichino as a specific coworker field experiment, not universal virtual-room output uplift;
- do not imply Matthews’ 76% applies to Build Club members;
- remove the Fehr/Gächter “2–3× accountability appointment” claim; the linked cooperation/punishment research does not support that wording;
- label Focusmate figures as company-reported market adoption only;
- say body doubling is a product hypothesis supported by adjacent presence/accountability evidence, not proven product efficacy;
- add study design, population, outcome, limitations, dates and review cadence.

No shipping, attendance, retention, satisfaction, output-quality, wellbeing, income, or member-outcome claim is currently supported.

## 6. Privacy, safety, legal and community governance

The inline FAQ is not an adequate privacy policy. Required controls include:

- controller/contact, data categories/purposes/legal basis, vendors/subprocessors, retention, security and rights;
- disclose persistent localStorage email and all analytics;
- member age/adult-only decision and minor safeguarding;
- code of conduct, harassment/discrimination, reporting, moderation, suspension/removal and appeals;
- confidentiality/no expectation of confidentiality, client authorization, IP, copyright and prohibited content;
- recording/screen/voice/face consent and revocation limits;
- AI copilot provider, inputs, training/retention, opt-out and human-review boundaries;
- no professional advice, crisis/emergency or therapeutic/body-doubling claim;
- engagement-pod endorsement, disclosure, spam and conflicts rules;
- subscription terms, automatic renewal, cancellation, refunds, lifetime-rate definition and program closure.

## 7. Software, privacy and security findings

Production CSP blocks the configured RN API. The API itself answers CORS preflight, but `connect-src 'self'` prevents the browser call. Main enrollment/contact communicate failure; the duplicate injected contact suppresses it. No checkout URLs exist.

Enrollment stores email in localStorage before delivery, even after failed signup. That conflicts with the minimal-use disclosure and creates unnecessary device persistence. Same-origin `/api/track` is 404; other analytics are routed through the blocked lead API. Consolidate analytics and contact surfaces and collect only after explicit notice/consent as applicable.

## 8. Accessibility review

Positive foundations: skip link, main landmark, global focus-visible, reduced-motion support, native details, native dialogs, aria labels and live error regions.

Remaining defects:

- duplicate custom contact modal is non-semantic and lacks focus trap, Escape, labels and error status;
- two fixed Contact buttons can overlap each other/content on mobile;
- dialog opener focus-return and screen-reader behavior needs browser testing;
- no schedule/accommodation/accessibility statement;
- recordings need captions/transcripts and accessible player/download standards;
- source claims and price comparisons need accessible explanatory context;
- responsive, zoom/reflow, keyboard, contrast and AT tests remain unperformed.

## 9. Brand and business value

This belongs under Aloha AI as a distinct community/product experiment, not as evidence that a community already operates. Its differentiator is a small, host-led shipping ritual rather than generic AI education. The club name and Hawaiʻi-associated “aloha” require community behavior and reciprocity, not merely tropical branding; governance and delivery should embody those values.

The current business model is financially legible but operationally incomplete. Daily hosting at $29/month may create unsustainable facilitator economics; model cohort utilization, support, recording, moderation, platform/payment fees, Pro time, churn, taxes and annual liabilities before launch.

## 10. Ranked defects

### Critical

1. No checkout, membership, schedule, community, or fulfillment despite present-tense/live sales claims.
2. Signup/contact delivery blocked by CSP; duplicate contact silently fails.
3. No recording/privacy/confidentiality/community-safety/subscription governance.

### High

4. Research claims overstate or mischaracterize linked evidence, especially Fehr/Gächter.
5. No proof of cohort, rooms, recordings, pod, shipped list, members or outcomes.
6. Email persists locally before failed submission and is undisclosed.
7. No age/minor boundary despite “students” audience.
8. Annual/lifetime/Pro benefits lack contractual and operational definition.

### Medium

9. Duplicate contact UI/accessibility defects.
10. Missing schedule, platform, start date, time zone and accommodations.
11. Broken analytics and stale portfolio URL.

## 11. Exact Stage B plan

1. Change all status/present-tense copy to founding-interest/prelaunch until launch evidence exists.
2. Implement schedule, room/community platform, member access and fulfillment SOP.
3. Implement checkout/subscription/tax/cancellation/refund/failure flows and verify all tiers.
4. Align CSP with one secured lead endpoint; never persist email before confirmed consent/delivery; remove duplicate modal.
5. Publish privacy, terms, recording, conduct, moderation, IP/confidentiality, AI-use, age and accessibility policies.
6. Pilot with consented users; verify rooms, recordings, captions, pod, nudges, shipped list and Pro benefits.
7. Correct research claims and create a dated evidence table.
8. Add schedule/platform/start-date/cohort-minimum/support information.
9. Test keyboard, screen reader, mobile, zoom, contrast, reduced motion and error/recovery paths.
10. Track only valid, disclosed metrics and publish no outcome claim without evidence.

## 12. Estate disposition

**P — retain one prelaunch community/membership architecture case.** Do not create separate cases for course, community, recordings or accountability tools; none exists independently.

## 13. Exact RN Selected Work corrections

- **Status:** replace “Live community concept” with **“Prelaunch community and membership architecture · no active cohort verified.”**
- **Purpose:** retain the recurring-room goal, but describe it as proposed.
- **Researched:** say the design draws on adjacent peer-presence, goal-reporting, cooperation, and company-reported body-doubling context; explicitly state these sources do not validate Build Club or its outcomes and remove the unsupported 2–3× formulation.
- **Built:** replace “A body-doubling and build-community experience with a recurring participation model” with **“A public landing-page prototype defining a proposed 60-minute room, audience, three membership tiers, FAQ, evidence rationale, and interest/contact interfaces.”**
- **Serves:** “intended for adult independent builders and professionals,” pending an explicit age decision; do not claim students/minors are served.
- **Demonstrates:** “community-product and facilitation architecture, membership packaging, and evidence-aware positioning,” not delivered community operations.
- **Evidence:** replace with:

> The live page verifies a proposed room format, audience and exclusion criteria, three price concepts, FAQ/privacy copy, four rationale links, and plan-aware interest forms. It does not verify an active cohort, schedule, daily rooms, recordings, member access, engagement pod, nudges, Shipped List, members, outcomes, checkout, subscriptions, cancellations, annual benefits, Pro fulfillment, course, project workspace, or resource library. At audit, checkout URLs were empty and CSP blocked all signup/contact delivery; one duplicate contact flow failed silently. The research supports adjacent design hypotheses, not club effectiveness.

- **Live label:** “View prelaunch concept,” not join/community.

## 14. Explicitly unverified

Private repo/build, deployment configuration/logs, members, sessions, calendar, attendance, recordings, captions, pod, shipped list, payments, cancellations, outcome data, community policies, facilitator operations, platform/vendor contracts, and real-browser/assistive-tech behavior. No PII was submitted.

## Stage A decision

Freeze this dossier. Retain P only under the prelaunch architecture boundary. Do not represent Aloha Build Club as an active community or delivered recurring experience until the complete member journey is operational and verified.
