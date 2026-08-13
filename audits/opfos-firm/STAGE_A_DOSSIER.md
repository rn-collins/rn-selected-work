# One-Person-Firm OS — Stage A Recertification Dossier

Audit date: August 13, 2026 (HST)  
Stage: A, read-only represented-site recertification  
Recommended disposition: **P — canonical Institutions of One service concept; current public sales/lead surface is release-blocked**

## 1. Asset identity and boundary

- **Repository:** private `rn-collins/opfos-firm`, branch `main`, inspected tree `068c1999a58d594ef9c88731b20d208f1349ce25`.
- **Complete tree:** `.gitignore`, one 56.6 KB `index.html`, `photo-rn.jpg`, `robots.txt`, and `vercel.json`. There are no templates, Notion assets, SKILL files, documentation, Loom video, APIs, tests, package manifest, checkout, scheduling, delivery automation, database, or client workspace in the repository.
- **Deployment:** public/indexable `https://opfos-firm.vercel.app/`; Vercel project `prj_j3QqKaWWiY9xdjELJniP30iSaXHX`.
- **Presented product:** three paid ways to obtain a one-person-firm operating setup: $297 DIY assets, $497/person cohort, and $1,500 one-week done-with-you sprint.
- **Canonical practice:** Institutions of One. The conceptual center is portable operating infrastructure for independent professionals: ownership of workflow, knowledge, evidence, client relationships and AI-assisted capacity.
- **Aloha AI boundary:** Aloha AI may truthfully receive technical implementation/configuration attribution. It is not the conceptual parent and should not replace Institutions of One in the title, navigation or case taxonomy. NSAG is only the current external lead processor; this is not an NSAG product.
- **Disposition:** `P` canonical represented case after remediation; `C` current public conversion surface. Not `I`, `D`, `E`, or `X`.

## 2. Executive verdict

The page presents a coherent, commercially intelligible implementation service: diagnose a solo practice, configure a Notion command center, define recurring operating protocols, configure three role-specific Claude contexts, train the operator and check in after 30 days. This can be a valuable Institutions of One service if the deliverables actually exist, are safely templated, and can be fulfilled.

The deployed artifact itself is a static sales page, not an operating system. It contains no usable dashboard, template, workflow, agent, skill, export, setup documentation, audit checklist, training video, client portal, purchase path, or delivery mechanism. All substantive outputs are promised services/assets outside the inspected repository and remain unverified.

More seriously, all three lead journeys are functionally deceptive in production. Enrollment, contact and checklist capture POST to `https://nsag-api.vercel.app/api/lead`, but the production Content Security Policy is `connect-src 'self'`; the browser must block those cross-origin requests. Every `.catch()` then deliberately shows the success state. The enrollment copy says a spot is confirmed, contact says the message was sent, and checklist capture says to check the inbox—even when the request failed. There is no checkout and no checklist-delivery system in the repository.

Top risks:

1. **P0 false conversion success:** production policy blocks external lead requests; code displays success on HTTP errors and network/CSP failure.
2. **P0 unfulfilled digital-product claim:** the $297 template/skills/documentation/video package is not accessible or evidenced; “Send the Checklist” has no checklist or email delivery implementation.
3. **P1 service overclaim:** “fully running,” “wired,” “AI employees,” “tells you what to do every morning,” “nothing falls through the cracks,” one-week completion and no-tech-background claims are not supported by acceptance criteria, sample artifacts, capacity limits or customer evidence.
4. **P1 client confidentiality/security:** the service invites regulated professionals to place client, revenue, outreach and brand data in Notion/Claude without data classification, privilege/confidentiality, vendor, retention, access, model-training or human-review controls.
5. **P1 privacy/commercial omissions:** no privacy notice, terms, refund/cancellation policy, scope, prerequisites, licensing, cohort dates, availability, support boundaries, processor list or company contact information.
6. **P1 brand confusion:** public metadata/navigation/footer call the product an Aloha AI service when the portfolio correctly assigns it to Institutions of One.

## 3. Complete public route and asset map

| Route | Result | Finding |
|---|---:|---|
| `/` | 200 | only page; static service sales surface |
| `/photo-rn.jpg` | 200 | portrait asset |
| `/robots.txt` | 200 | `Allow: /`; fully indexable |
| `/sitemap.xml` | 404 | advertised in `<head>` but absent |
| `/api/track` | 404 | page sends page-view and scroll-depth events here |
| arbitrary route | 404 | no workflow, template, checkout, report or client routes |

External endpoints/destinations: `nsag-api.vercel.app/api/lead`, Aloha AI, FlexJD, Legal Risk Monitor, retired RN portfolio, Google Tag Manager placeholder, Google Fonts. There is no payment processor, scheduler, Notion share, Claude artifact, Slack invite, download or email-service endpoint.

## 4. Complete control inventory and observed behavior

- Navigation logo opens Aloha AI in a new tab; it does not identify Institutions of One.
- `Set Up My OS` buttons in navigation, hero, promise and founder section open the same enrollment modal.
- `See Pricing` scrolls to pricing.
- DIY, cohort and sprint buttons all open the same enrollment modal. Context is tracked only to a blocked placeholder Google tag; the lead source is always `enroll-opfos`, so the receiving system cannot determine which product was requested.
- Enrollment collects optional name and required email, promises “confirm your spot,” and has no plan selection, price, terms, dates, capacity, checkout, scheduling or consent.
- Contact opens from fixed button and footer; collects optional name, required email and required free text.
- Checklist capture collects optional name and required email.
- Close buttons, overlay click and Escape close modals. There is no focus placement, trap, return, accessible dialog semantics or background inertness.
- No consequential form, enrollment or purchase was submitted.

## 5. Actual versus proposed functionality

| Capability/deliverable | Verified in artifact | Status |
|---|---:|---|
| service architecture and pricing presentation | yes | static copy |
| Notion command center | no | promised external deliverable |
| UAOS v5 sanitized template | no | promised; no artifact/license/version |
| daily priorities/client/task/revenue databases | no | promised fields/workflows only |
| “short-term memory system” | no | undefined/promised |
| three AI “employees” | no | role labels only, not agents |
| Ops/Content/Outreach automation | no | no code, tools, permissions or workflows |
| Claude Projects | no | promised customer configuration |
| three `SKILL.md` files | no | absent from repository |
| setup documentation | no | absent |
| Loom walkthrough | no | absent |
| cohort/live sessions/Slack | no | no dates, registration or workspace |
| one-week sprint | no | service promise only |
| 30-day check-in | no | no scheduling/contract |
| checklist | no | absent |
| checklist email delivery | no | absent |
| checkout/payment | no | explicitly absent in source comment |
| enrollment/contact capture | browser-blocked | CSP forbids external API; false success |
| analytics | partial/broken | Vercel scripts; placeholder Google ID blocked; local track 404 |
| export/backup/portability | no | absent despite ownership positioning |

The truthful category is **productized configuration and operating-design service concept**, not software-as-a-service or a functioning OS delivered through this site.

## 6. Workflow/template/product audit

The proposed workflow is Day 1–2 Notion; Day 3–4 role configurations; Day 5–6 Claude projects/skills; Day 7 walkthrough/handoff; 30-day check-in. It lacks an intake inventory, eligibility/prerequisites, data-migration scope, client responsibilities, acceptance test, change limit, revision policy, downtime/vendor dependency, backup/export, offboarding, credential handoff and disposal protocol.

Before sale, create and version:

1. a sanitized example workspace with schema/data dictionary and screenshots;
2. actual downloadable templates, skill files, documentation and training sample;
3. a statement of work for each tier, including what customization means;
4. setup prerequisites and supported Notion/Claude plans;
5. acceptance criteria for every promised workflow;
6. data inventory, migration, permissions, export, backup, deletion and handoff checklist;
7. customer-use/license terms, template-update policy and third-party costs;
8. fulfillment capacity, cohort dates, scheduling and support response boundaries.

“Three AI employees” is inaccurate and encourages overdelegation. These are proposed role-specific AI workspaces/instructions. They do not act, possess accountability or reliably know the practice without curated context, tool permissions, human review and ongoing maintenance.

## 7. Legal and regulated-professional boundaries

The generic legal-advice banner is irrelevant to most of the service and insufficient for the risks it creates. For clients in law, health, finance and other regulated fields, setup must not imply that Notion or general consumer AI is appropriate for confidential, privileged, health, financial, biometric, minor or regulated records.

Required boundaries:

- customer remains responsible for professional judgment, supervision, accuracy, conflicts, record retention, client consent and applicable professional rules;
- no confidential/client data enters any AI or SaaS tool until the customer approves vendor terms, security, training/retention settings, access roles and data-processing agreements;
- AI-generated legal, scientific, regulatory, financial, clinical or client advice requires qualified human review;
- outreach configuration must address authorization, CAN-SPAM and other applicable marketing/privacy rules, platform terms, suppression/opt-out, contact-source provenance and no impersonation;
- no promise that setup establishes legal, privacy, cybersecurity, records-management, accessibility or professional compliance;
- distinguish business/operations consulting from legal services and do not use law-school/clerkship identity as implied counsel or institutional endorsement.

No contracts, terms, licensing, warranty disclaimer, limitation, refund, IP ownership, client-content ownership, subcontractor/processor disclosure or conflict policy are visible.

## 8. AI governance, privacy and security

The service proposes centralizing high-value practice data and giving AI tools context across brands and clients. That creates a larger breach, cross-client leakage, prompt-injection, mistaken-action and vendor-lock-in surface.

Minimum architecture:

- data classification and prohibited-data table before intake;
- per-client/project isolation; least privilege; MFA; role/account ownership; no shared credentials;
- documented Claude/Notion plan, region, retention, training and deletion settings;
- source/provenance links and human approval gates for task routing, content and outreach;
- no autonomous send/publish/delete/pay/legal-filing or client-record changes;
- audit/change log, versioned skills, evaluation set, rollback and incident owner;
- backup/export in open formats and tested client offboarding;
- prompt-injection and malicious-document handling for imported client material;
- secrets never embedded in Notion, skills, chat history or screenshots;
- disclosure when AI materially assists client-facing work where required or appropriate.

Current website security findings:

- strong headers include HSTS, frame denial, nosniff, referrer and permissions policies;
- CSP permits inline/eval scripts but restricts connections to self. It blocks the external lead API and Google Analytics script/transport. Security policy and application design are contradictory;
- no local secrets/backend/dependencies were found; the five-file static repository has a small supply-chain surface;
- UTM, referrer, page-view and scroll data are collected/attempted without privacy disclosure;
- three forms transmit name/email/message/UTM to an NSAG endpoint, an unexplained cross-practice processor;
- no spam protection, response-status handling, retry, request ID, deletion request or incident route;
- code intentionally presents success in `catch`, creating data loss and misleading users.

## 9. Copy, evidence and claim audit

- “I Run 6 Businesses” conflicts with later “6+ brands”; neither is independently verified. Use time-stamped, precise self-reported operating context.
- “7 active clients,” “years iterating,” “exact system,” “stress-tested every component,” “actually run every day,” “nothing falls through the cracks” and “only reason it works” are unverified self-reports, not outcomes.
- “fully running operating system in one week” needs prerequisites, supported scope and acceptance tests; otherwise say “one-week setup sprint.”
- “three AI employees wired and running” should be “three role-specific Claude project/instruction configurations.”
- “AI knows exactly who you are,” “tells you what to do next,” and “No tech background required” are absolutes that conceal setup, judgment and maintenance demands.
- “MOST POPULAR” lacks sales/cohort evidence and should be removed unless documented.
- Checklist copy says it will be emailed, but no delivery exists.
- Enrollment says “confirm your spot” and “on the list,” but no successful capture, capacity or reservation exists.
- Contact promises one-business-day response without an operational SLA.
- Related Legal Risk Monitor claims live hourly agency/legislative monitoring and digest availability; that asset’s own accepted dossier does not support such unqualified claims. Remove or inherit its verified description.
- Professional bio/degree/enrollment/clerkship and current client/workload claims are time-sensitive and require owner verification; do not imply Northeastern or Boston University endorsement.

## 10. Accessibility and responsive audit

Positive: responsive viewport and breakpoints; semantic headings/sections; portrait alt text; keyboard-native buttons/inputs; visible input labels; Escape and overlay close; layouts collapse at 860/560px.

Defects:

- modal overlays lack `role=dialog`, `aria-modal`, accessible name association and `aria-hidden` state management;
- labels lack `for` and inputs lack corresponding form-control associations;
- close button is visually “×” without accessible name;
- no initial focus, focus trap, focus return or inert background;
- success/error changes are not announced with `aria-live`/status/alert;
- enrollment is not a real `<form>` and Enter submission behavior is unreliable;
- capture inputs use placeholders without labels;
- no skip link; fixed header and contact button can obscure content;
- no deliberate `:focus-visible`; extensive small 9–13px text and muted/gold combinations require measured contrast review;
- hover transforms and smooth scrolling lack `prefers-reduced-motion` handling;
- 320px reflow, 200% zoom, screen-reader and touch testing remain necessary.

## 11. Brand and business analysis

**Buyer:** established solo consultants, fractional executives and independent professionals whose delivery volume justifies configuration support. Beginners without stable offers/processes are a poor fit because software cannot resolve an undefined operating model.

**Value:** reduce search/task-switching, create a repeatable weekly review, isolate client records, make work/status visible, preserve reusable evidence and make AI use intentional. Claims should be evaluated with baseline/after measures such as missed deadlines, time-to-find, weekly-review completion, task aging, client-status accuracy, handoff completeness and operator workload—not number of configured tools.

**Offer gaps:** no sample, checkout, cohort date, qualification, scope, contract, fulfillment proof, maintenance plan or customer result. DIY is especially unsuitable for sale until the files and delivery system exist. The safest launch path is a limited pilot sprint with signed scope, sanitized data, explicit tool costs and documented acceptance, followed by a validated template package.

**Brand architecture:** One-Person-Firm OS is a concrete implementation of Institutions of One. Institutions of One defines independent capability/ownership infrastructure; Aloha AI performs technical systems design and AI configuration as one implementation partner. The current “One-Person-Firm OS — Aloha AI” metadata, nav and footer erase the stronger conceptual parent and should be corrected.

## 12. P0–P3 defect register

### P0 — blocking

1. All enrollment/contact/checklist requests are CSP-blocked; all failure paths falsely report success.
2. Free checklist has no deliverable/email workflow; $297 template package has no evidenced/downloadable assets.
3. Public pricing and “spot confirmation” create a commercial offer without checkout, terms, scope, refund/cancellation or fulfillment mechanics.

### P1 — high

1. Reframe static sales page and promised configuration as a service concept, not a functioning operating system/software.
2. Establish confidentiality, regulated-data, AI-use, human-review, vendor, access and cross-client isolation controls.
3. Add privacy, terms, processor, retention, consent, deletion and contact identity.
4. Correct Institutions of One/Aloha AI/NSAG boundaries.
5. Remove unsupported proof, popularity, outcome, delivery-time and absolute automation claims.
6. Repair modal/form accessibility and failure/partial states.

### P2 — material

1. Build/version all promised templates, skills, setup documentation, walkthrough and checklist.
2. Define tier scope, prerequisites, customization, change limits, acceptance, support, third-party costs and maintenance.
3. Implement product selection, payment/scheduling or change all CTAs to truthful inquiry/waitlist.
4. Fix analytics/CSP conflict, missing tracking API, sitemap, canonical, placeholder GA ID and stale portfolio URL.
5. Remove or accurately summarize related-site claims.

### P3 — polish

1. Add sample workflow diagrams/screenshots only after sanitization.
2. Improve type size, contrast, focus and reduced-motion support.
3. Replace anthropomorphic “employees” with role/workspace language throughout.

## 13. Exact RN Selected Work corrections

Keep one canonical `P` case under **Institutions of One**, but correct:

- **Title:** `One-Person-Firm OS`
- **Category:** `Independent work · practice operating-system design`
- **Practice:** `Institutions of One` with `technical implementation by Aloha AI` as a secondary note only.
- **Status:** change `Live operating system` to **`Live service-architecture prototype`**.
- **Purpose:** `Design portable operating infrastructure for solo consultants and fractional executives across positioning, delivery, client operations, evidence, administration and AI-assisted workflows.`
- **Built:** `A public productized-service architecture for a one-week setup sprint, including a proposed Notion command center, weekly review, client/revenue/task schemas, role-specific AI workspace configurations, training and follow-up.`
- **Evidence/limits:** `The live page verifies the offer architecture, proposed deliverables and three price tiers. The inspected repository does not contain or verify the promised Notion template, SKILL files, configured agents, setup documentation, Loom training, checklist, cohort, client implementation, checkout, delivery system or outcomes. Operating-context claims are self-reported. Enrollment, contact and checklist forms are presently blocked by the site's Content Security Policy and falsely display success on failure.`

Retain the case study with these limitations, but suppress the live-site link until P0 form/delivery/commercial defects are corrected. Do not count the Notion template or three “agents” as separate builds.

## 14. Stage B acceptance tests

1. Verify all three tiers have versioned, deliverable artifacts and signed scopes.
2. Test enrollment/contact/checklist on real browser success, 4xx, 5xx, offline, CSP and retry paths; no false success.
3. Confirm a checklist email arrives and complies with consent/unsubscribe requirements.
4. Confirm selected product, price, terms, availability and next step persist through inquiry/checkout.
5. Test sanitized client setup, cross-client isolation, source traceability, approvals, backup/export and offboarding.
6. Run prompt-injection, secret handling and prohibited-data tests on every AI workspace.
7. Validate the one-week fulfillment claim against a defined supported scope.
8. Keyboard, screen-reader, 320px, 200% zoom, contrast, reduced-motion and touch tests pass.
9. Privacy/terms/refund/licensing/vendor/security pages match actual operations.
10. Institutions of One parent and Aloha AI implementation role match across metadata, page, RN Selected Work and contracts.

## 15. Evidence and limitations

Evidence inspected: complete private repository tree and all source/config files; live root, asset, robots, sitemap, tracking and unknown-route statuses; production headers; all buttons, modal states, forms, scripts, proposed deliverables, pricing, claims and external links; current RN Selected Work record and estate mapping. No form, purchase, booking, email, Slack, Notion or other consequential external action was performed. Actual customer workspaces and assets outside the repository remain unverified.
