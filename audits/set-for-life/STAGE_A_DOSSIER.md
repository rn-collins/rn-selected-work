# Set for Life — Stage A recertification dossier

Audit date: 2026-08-13 (HST)  
Stage: A, read-only  
Roles applied: consumer; software engineer; product developer; copy/information architect; law/policy/regulatory communicator; brand strategist; business partner  
Release state: **blocked**

## 1. Asset identity

- **Artifact:** Set for Life, marketed as a $67 LinkedIn networking course for 0Ls/1Ls and later-career legal professionals.
- **Canonical working deployment:** `https://set-for-life-black.vercel.app/` (public). The site's own canonical/OG/schema URLs incorrectly point to `https://set-for-life.vercel.app/`, which is not this product and could not be resolved through the authenticated Vercel fetch path.
- **Repository:** private `rn-collins/set-for-life`, default branch `main`.
- **Vercel:** project `prj_wOpWzv0QaA0PTHNBV1oLfSGONFYT`, team `team_6xuOmJL3MoIFarDpy9odi175`; latest production deployment `dpl_BsG5F5cMhXKZk1pT6SNX52BCA4fP`, READY, commit `3adcc2ebf8dfb81fb88f7205341faab5e6def77c` (“fix: point contact form to working rn-api endpoint”). Project domains are `set-for-life-black.vercel.app` plus Vercel branch aliases.
- **Architecture:** static `index.html` plus `og-image.png` and `vercel.json`; no package/build manifest, README, tests, course files, Gumroad/checkout implementation, privacy/terms/robots/sitemap, downloadable guide, calendar, Claude project, customer portal or fulfillment code found.
- **Parent/ownership:** independently authored educational-product concept owned by Rayven-Nikkita Collins LLC. Aloha AI is technical build credit, not course owner. Not NSAG or Institutions of One.
- **Actual status:** public prelaunch sales-page prototype. The landing page, curriculum outline, FAQ accordions and inquiry modal exist. Enrollment, payment, email delivery, course access, assets, lifetime updates and refunds are not operationally evidenced.
- **Privacy:** public page/private repository. Vercel analytics, Google Fonts, session-stored UTMs, broken same-origin telemetry and an external RN API lead relay exist with no privacy notice.
- **Current portfolio:** one independent record, slug `set-for-life`, status “Live self-serve course.” That status is inaccurate.

## 2. Executive verdict

Set for Life contains a coherent, teachable curriculum architecture derived from RN's asserted networking practice. It should remain a distinct portfolio artifact **only as a prelaunch course/product-design prototype** until the curriculum assets, checkout, delivery, terms and claims are verified. It is not presently a live self-serve course.

The page's primary sale cannot complete: “Enroll for $67” opens the same generic contact modal used for questions, despite nearby copy promising “Secure checkout via Gumroad” and “Email delivery on purchase.” The advertised course, guide, two calendars, four Claude Projects, lifetime updates and refund workflow are absent from the repository. As of August 13, 2026, the page still says founding access “opens Q3 2026” while using present-tense enrollment, urgency and delivery claims.

Claims also fail internally. The displayed 938 messages and 207 replies produce a 22.07% rate, not the repeatedly advertised 26%. “3% average generic cold outreach,” “60-second decision window,” seven “positions,” causal claims that the framework “produced” outcomes, and testimonial-to-position labels lack a defined dataset or documentary audit. A footer “results not typical” statement is too remote to cure the repeated exceptional-results sales framing.

Top risks: false commerce state; inconsistent outcome arithmetic; undocumented exceptional-results advertising; private-message publication/consent; privacyless, false-success lead submission; inaccurate canonical/social metadata; and unsupported platform/behavioral claims.

## 3. Complete route map

See `ROUTE_CONTROL_LEDGER.md`.

- `/` — 200, one substantive static page.
- `/og-image.png` — 200, valid 1200×630 PNG; contains title/subtitle and working `-black` hostname, no portrait.
- `/robots.txt`, `/sitemap.xml`, `/api/track`, `/privacy`, `/terms`, arbitrary missing route — 404.
- No course, lesson, checkout, customer, refund, download, calendar, AI-project or confirmation routes exist.
- External destinations: LinkedIn profile, Zero → Frontier, AI Budget Calculator, Aloha AI, legacy RN Builds, Google Fonts, Vercel analytics and `rn-api-rn-collins.vercel.app/api/lead`.

## 4. Complete interaction/control inventory

- Sticky navigation with five anchors and mobile menu toggle.
- Hero “Enroll for $67” and final CTA scroll to the pricing section.
- “See what is inside” scrolls to curriculum.
- Eight FAQ buttons toggle one answer each and update `aria-expanded`.
- Pricing “Enroll for $67” opens inquiry modal, not checkout.
- “Ask a question,” footer Contact and floating “Contact the Architect” open the same modal.
- Modal fields: optional name, required email, optional message; Cancel and Send. No submission was made.
- Two related-tool cards and LinkedIn external link.
- Page-view and four scroll-depth telemetry POST attempts to missing `/api/track`.
- No product preview, lesson, sample download, checkout, login, purchase confirmation, refund request workflow or deliverable access control.

## 5. Consumer journeys and observed results

1. **Evaluate offer:** curriculum and listed assets are understandable, but there is no preview lesson, actual guide/calendar/AI project, instructor delivery sample, accessibility format, support scope or launch date.
2. **Verify results:** the consumer sees strong statistics and anonymized replies but cannot inspect calculation definitions, date-bounded data, exclusions, position types, connection source, cold/warm classification, message variants, consent or typical outcomes. The displayed rate is arithmetically inconsistent.
3. **Enroll:** every path ends at a generic contact modal. There is no Gumroad link, checkout, price collection, receipt or delivery. This contradicts the CTA and pricing note.
4. **Understand launch:** FAQ says Q3 2026 access, “enrollment now reserves your spot,” price will rise, and access is locked. No reservation agreement, waitlist status, launch date, fulfillment contingency or non-delivery remedy exists.
5. **Request refund:** FAQ says use “contact form below,” but there is no purpose-specific refund intake, purchase identifier or terms. No purchase can be made from the page.
6. **Ask question:** data would be sent to RN API. The modal promises “Sent!” after any resolved HTTP response without checking status. No privacy notice exists.

The product promise is not delivered in the current experience.

## 6. Functional matrix

| Capability | State | Evidence |
|---|---|---|
| Landing-page narrative/curriculum | Working | Static page |
| Anchor navigation/mobile menu | Working in source | Toggle/anchors implemented |
| FAQ accordion | Working in source | Eight buttons update open state |
| Course content | Missing/unverified | No lessons or delivery repository |
| Aloha Framework guide | Missing/unverified | No PDF/screen asset |
| 90-day calendars | Missing/unverified | No interactive persistence or files |
| Four Claude Projects | Missing/unverified | Descriptions only; no project artifacts or rights/version requirements |
| Checkout/Gumroad | Broken/false-present | Enrollment opens contact; no Gumroad URL |
| Email delivery | Missing | No commerce/delivery integration |
| Lifetime updates | Proposed | No customer identity/update system |
| Refund | Proposed | FAQ promise only |
| Founding cohort | Proposed/stale | No cohort infrastructure/date |
| Inquiry capture | Partial/unsafe | External RN API, false-success, no privacy |
| Analytics | Partial/broken | Vercel scripts; `/api/track` 404 |
| OG image | Asset works | Metadata points to wrong hostname |

## 7. Copy and information-architecture findings

- “Live self-serve course,” “everything that ships when you enroll,” “secure checkout,” “email delivery,” “lifetime access” and current-price reservation describe absent functions as present.
- “Enroll” is materially wrong; the action is “Join interest list” or “Ask about founding access.”
- “Contact the Architect” is an unrelated portfolio template residue and potentially implies a professional credential RN does not claim here.
- The financial-advice banner is irrelevant template residue. The footer then says the career course does not constitute “career advice,” which contradicts its purpose. Use a precise educational/outcomes boundary.
- “3% average” has no source or population. “60s” conflicts with body text saying specificity is scanned “in under thirty seconds” and the response decision occurs before finishing.
- “The system does not care about your school ranking” and “works at any stage” are universal claims unsupported by one person's dataset.
- “designed to work in fourteen days at the latest” is a strong performance promise inconsistent with the general no-guarantee disclaimer.
- “The window does not stay open forever” and price-rise language create urgency without a defined enrollment close or price schedule.
- “Testimonial” styling actually presents alleged private outreach replies, not customer testimonials. The heading should say “Examples from RN's own outreach,” subject to consent and verification.
- Module numbering says eight modules but runs 00–07; internally coherent but could confuse buyers expecting Module 1–8.
- “By Module 8” conflicts with visible Module 07.
- Schema identifies RN as “AI Educator & Consultant,” uses a legacy portfolio ID and malformed/likely incorrect LinkedIn URL (`linkedin.com/in/rn-collins` rather than the canonical profile in RN Selected Work).

## 8. Law, policy, platform and factual claim ledger

| Claim | Finding | Required correction |
|---|---|---|
| 938 messages → 207 replies → 26% | Arithmetic failure: 207/938 = 22.07% | Publish denominator/numerator definitions; correct rate or explain audited subset |
| Seven positions, zero job boards | “Position” undefined; causal/source attribution unverified | List category definitions and documentary evidence; use “RN reports…” |
| 2,862 connections in 16 months | Self-reported, no snapshot/audit; gross connections are not all necessarily course-caused | Date, source export, baseline and inclusion rules |
| 3% average generic cold outreach | No citation or population | Remove or source a relevant, current benchmark with channel/audience definitions |
| Specificity causes 26% vs 3% | Observational personal data cannot establish causal effect | Describe correlation/hypothesis and confounders |
| Senior practitioners decide in 30/60 seconds | No study/source and internally inconsistent | Remove or cite appropriate primary behavioral research; do not universalize |
| Every connection introduces 3–5 more | Unsupported quantified outcome | Remove or label personal observation without guarantee |
| Buyers send first message in 48 hours | No buyers/delivery evidence | Future design goal only; remove present claim |
| System works at any school/stage/channel | Overgeneralized from one operator | Narrow to intended audience and untested transferability |
| Works within LinkedIn's “actual rules” | No current rule/version references | Link current User Agreement/help; prohibit scraping/automation and mass unsolicited outreach |
| Four AI projects analyze profiles/messages | Privacy/IP risks not disclosed | Require user authority, minimization, redaction, human review, vendor terms and no confidential data |
| Results/testimonial replies | Adequate substantiation and consent not shown | Preserve source records privately; obtain written permission; disclose edits; provide typical-results basis or avoid implied typicality |
| Refund/no-questions/lifetime | Commercial obligations without terms/infrastructure | Publish enforceable terms, definition of lifetime, delivery failure and refund mechanism |

Current platform authority checked: LinkedIn's User Agreement (effective 2025-11-03) prohibits bots/unauthorized automation, scraping/copying, bypassing limits and misuse; current Help guidance warns that excessive invitations, spam reports and prohibited tools can restrict accounts. The course should teach thoughtful manual use, consent/professional conduct, current invitation/message limits, privacy and anti-spam obligations—not volume as the governing success measure.

FTC endorsement guidance states that specific-results endorsements are commonly understood as expected results; “results not typical” or “individual results may vary” alone does not cure that implication. The exceptional results dominate the hero, metadata, proof bar, testimonials, FAQ and price conversion, while the disclosure appears only at the bottom. This is release-blocking even though RN is describing her own experience rather than a customer endorsement: the overall sales impression still implies replicability and causation.

Legal education boundary: this is educational/career-development content, not legal advice, employment placement, recruiting representation, a promise of employment, or a substitute for a law school's career-services rules. Course examples must not disclose confidential employer/client information or induce misleading profiles/messages. Jurisdiction-specific privacy, anti-spam, unfair-practices and consumer-contract review is required before sales.

## 9. Accessibility and responsive findings

- Positive: `<main>`, nav label, mobile menu `aria-controls/expanded`, visible focus for links/buttons, FAQ buttons and responsive grids.
- Missing skip link; sticky nav can obscure anchor targets; smooth scrolling has no reduced-motion exception.
- FAQ answer regions have no IDs/`aria-controls`; opening content is not focused or announced.
- Mobile menu does not close on Escape/outside click and focus is not managed.
- Contact modal has `role=dialog`/`aria-modal` but no accessible name binding, labels, focus trap, initial focus, Escape, background inertness, status region or focus restoration.
- Placeholder-only contact fields fail persistent label expectations; alert-based validation/status is disruptive.
- Floating button can overlay mobile content despite shrink CSS.
- Low-contrast muted text (`#7A6B5D` on dark backgrounds) requires measured WCAG verification; many labels are ~0.6–0.7rem.
- No product-media images exist. The OG image is not page content and needs no HTML alt, but social metadata must point to it correctly.
- Source breakpoints at 760, 660 and 480 appear generally reflow-aware; an actual interactive browser/screen reader was unavailable, so 320 px crop, zoom, focus order and contrast remain unverified.

## 10. Brand architecture and RN portrait/authorship audit

Set for Life can strengthen RN's work by demonstrating experience-to-curriculum translation, but it should be a distinct RN educational product, not Aloha AI consulting, NSAG research or an “AI tool.” Aloha AI may receive build credit. “Aloha Framework” needs a plain explanation and should not imply endorsement by or affiliation with LinkedIn, Northeastern or employers.

Portrait/authorship:

- **Build:** no portrait is present anywhere. The About section names RN and credentials but offers no visual authorship or source link beyond LinkedIn.
- **Portfolio case:** no case-specific portrait; RN Selected Work has canonical `public/rn-collins-portrait.webp` and `.svg`, used on Connect with correct alt text.
- **Asset integrity/crops:** absent, so no on-page loading, alt, mobile/desktop crop can be certified.
- **OG:** a valid 1200×630 graphic exists and visually says Set for Life/the law-student networking system/working `-black` hostname. It has no portrait, which is strategically acceptable, but metadata points at the noncanonical `set-for-life.vercel.app/og-image.png`; social fetch is therefore broken/misdirected.
- **Recommendation:** a portrait is warranted once in “Who Built This,” aligned beside the first-person biography—not in the results hero or testimonial area where it would amplify unverified authority. Use canonical `rn-selected-work/public/rn-collins-portrait.webp`, copied through the approved asset pipeline, alt “Rayven-Nikkita (RN) Collins, creator of Set for Life,” 4:5 crop with `object-position:center top`, lazy-loaded below the fold, verified at 320/768/1440 px. Preserve the existing typography-only OG concept after correcting its URL; optionally add a restrained portrait only after claims are remediated. Add correct Person/Course schema and canonical LinkedIn/portfolio URLs.

## 11. Business model and conversion findings

- Audience: primarily incoming/current law students lacking inherited professional networks; secondary junior professionals.
- Buyer/beneficiary: student purchaser; potentially law-school career programs later. Decision drivers are price, credibility, safe methods, usable assets and time burden.
- Present value is only curriculum architecture. No fulfilled product or customer support operation is verified.
- The $67 one-time model is plausible for self-serve materials, but “lifetime” support/update liability is undefined and may be uneconomic.
- Required commercial specification: launch date, lesson formats/accessibility, platform, exact assets, minimum support, AI tool subscriptions, update policy, license, prohibited sharing, privacy, taxes, receipt, cancellation, refund method and business contact.
- Do not accept money until assets and delivery are ready. If pre-selling, clearly call it a preorder, state delivery date/material risks/refund rights and use a real checkout/escrow-compatible process.
- Positioning should be “RN's documented outreach workflow and practice exercises,” not a proven universal employment system.
- Best next validation: complete assets; recruit a small, consented beta; predefine behavior measures (messages drafted/sent, response definitions) and avoid employment outcome guarantees.

## 12. Security, privacy, data and operations

- Present headers: HSTS, X-Frame-Options DENY, nosniff, strict-origin referrer policy, permissions restrictions; legacy X-XSS-Protection also emitted.
- No CSP; many inline scripts/styles and external Google/Vercel resources.
- UTMs stored in `sessionStorage`; page-view and scroll events POST to missing `/api/track` and fail silently.
- Vercel Insights/Speed Insights and Google Fonts load without privacy disclosure.
- Inquiry sends name/email/message/source to `rn-api-rn-collins.vercel.app/api/lead`; no purpose, controller, retention, deletion, processor or consent notice.
- Send treats every resolved response as success; no `response.ok`, timeout, idempotency, rate-limit or recoverable error. It closes modal and shows “Sent!” even on a 4xx/5xx response.
- No checkout means no card data is collected here, but the page falsely promises Gumroad security.
- No privacy/terms/support/refund/customer records policy; no tests or monitoring.
- AI exercises invite users to paste third-party profiles, work and message threads into Claude/ChatGPT without privacy, copyright, confidentiality or professional-responsibility guidance.
- No consequential POST or purchase was attempted; no private records accessed.

## 13. Ranked defects

### P0 blocking

1. Replace enrollment/checkout/delivery claims until a real, tested commercial flow and completed product exist.
2. Correct 26% arithmetic and audit all seven-position/connection/message/reply evidence.
3. Remove or qualify outcome causation, 3% benchmark, 14-day performance promise and universal “works” claims.
4. Obtain documentary authorization and integrity review for private-message quotations/position attributions.
5. Stop or repair privacyless, false-success lead capture.

### P1 serious

1. Publish complete course/preorder/refund/lifetime terms and privacy notice.
2. Replace “Contact the Architect,” financial disclaimer and “not career advice” contradiction.
3. Correct canonical/OG/schema/LinkedIn URLs.
4. Add platform compliance, AI privacy/confidentiality and non-affiliation guidance.
5. Complete accessible contact dialog and mobile/focus testing.

### P2 material

1. Implement robots/sitemap or remove declaration; remove broken telemetry.
2. Define data terminology and publish transparent methodology.
3. Add actual samples and exact launch date.
4. Add RN portrait/authorship block and accurate Course/Person schema.
5. Replace legacy RN Builds link with RN Selected Work.

### P3 polish

1. Harmonize module numbering (“8” vs 00–07).
2. Reduce repetitive exceptional-result numbers and urgency.
3. Add FAQ deep-link/accessibility semantics.

## 14. Exact remediation plan

Primary target is `index.html`; add only verified assets/routes:

1. Change all “Enroll” controls to “Join the founding-access list” until commerce exists; remove Gumroad, email delivery, lifetime and shipment present tense.
2. After assets are complete, implement a real checkout through a business-owned account, explicit preorder/launch terms if applicable, server-verified webhook, idempotent entitlement, receipt, delivery confirmation, support and tested refund path.
3. Create an evidence appendix for RN's source export: date window, message denominator, cold definition, reply definition, position taxonomy, deduplication, connection baseline and calculation. Correct 22.07%/26% mismatch everywhere including metadata.
4. Remove unsupported 3%, 60s, three-to-five introductions, 48-hour buyer and 14-day guaranteed-effect claims. Reframe mechanism prose as RN's working rationale.
5. Replace private-message quotes unless written publication consent, exactness and contextual fairness are documented; distinguish outreach replies from course-customer testimonials.
6. Add current LinkedIn manual-use/compliance guidance and explicit no scraping, bots, limit bypass, spam, false identity or confidential-data use.
7. Add AI exercise warnings: minimize/redact third-party data, confirm rights, follow employer/client rules, review outputs, verify subscriptions/tool changes.
8. Rebuild modal with labels, focus lifecycle, Escape, status region, `response.ok`, error retention and privacy link. Rename to “Contact Set for Life.”
9. Add `privacy.html`, `terms.html`, `robots.txt`, `sitemap.xml`; remove or implement `/api/track` after minimization review. Add tested CSP in `vercel.json`.
10. Set canonical/OG/schema to `https://set-for-life-black.vercel.app/` (or secure the preferred custom domain first), correct author profile URLs, use `Course`/`Offer` schema only when actual.
11. Add `assets/rn-collins-portrait.webp` from canonical RN Selected Work and the exact About placement in section 10.
12. Add HTML/link/a11y/Playwright tests at 320/768/1440, menu/FAQ/modal keyboard tests, checkout contract tests and a claim consistency test that computes displayed rates.

Release gates: complete deliverables; evidence audit; testimonial consent; consumer-contract/privacy review; functioning checkout-delivery-refund; accessibility/browser pass; current platform-policy review; portfolio correction.

## 15. Recommended estate disposition

**P — distinct independent course/product-design case, public release blocked.**

Retain one top-level portfolio count because it is a distinct curriculum/product architecture rather than a component of another build. Do not call it an operating course. Public sales surface should be converted to transparent prelaunch interest collection or temporarily suppress enrollment until Stage B gates pass.

## 16. Proposed RN Selected Work corrections

- **Title:** Set for Life — Law-Student Networking Course Prototype
- **Category:** Career education + curriculum/product design
- **Practice:** Independent RN educational product; Aloha AI implementation credit
- **Status:** Public prelaunch course prototype · release-blocked
- **Purpose:** Translate RN's self-reported outreach workflow into a structured practice curriculum for law students who lack inherited professional networks.
- **Built:** A public sales-page prototype with an eight-part curriculum outline, proposed guide/calendars/AI exercises, FAQ, pricing architecture and nonfunctional enrollment/contact pathways.
- **Evidence boundary:** “The artifact verifies the public curriculum and product architecture, not a delivered self-serve course. No course lessons, guide, calendars, Claude Projects, checkout, customer entitlement, email delivery, lifetime-update or refund workflow was found. ‘Enroll for $67’ opens an inquiry form rather than Gumroad. The displayed 938 messages and 207 replies equal approximately 22.1%, not the claimed 26%; all outreach counts, seven positions, quotations and causal outcome claims remain self-reported pending source-data and consent review. The page is release-blocked for commerce, privacy, platform-policy, accessibility, canonical metadata and claims remediation.”
- Keep one case-study count. Label live action “Open prelaunch concept” only after privacy/contact P0s are fixed; otherwise suppress it.

This replaces “Live self-serve course” and the current “working commercial workflow requires confirmation” phrasing with the confirmed finding that no working commercial flow exists.

## 17. Evidence appendix and limitations

Evidence inspected:

- Full production HTML/CSS/JS (62,103 bytes) and headers, fetched 2026-08-13.
- Private GitHub `index.html`, `vercel.json`; negative checks for README, package, robots, sitemap, 404; valid binary OG asset.
- Vercel project/deployment/repository visibility metadata; exact IDs/commit above.
- Route responses: root/OG 200; robots/sitemap/api-track/privacy/terms/arbitrary 404.
- OG image visually inspected at native 1200×630.
- Current RN Selected Work record and canonical portrait assets.
- Official LinkedIn User Agreement/help on automation, scraping and invitation restrictions; FTC official endorsement/results guidance.

Explicitly not verified:

- No contact, enrollment, Gumroad, purchase, booking, refund or other consequential submission.
- No course/customer/analytics/lead records, source outreach export, private messages, contracts, consent releases, employment records or positions inspected.
- No repository artifact proved course fulfillment.
- Browser automation/screen reader unavailable; source-level desktop/mobile/accessibility findings need Stage B interactive confirmation.
- The unavailable `set-for-life.vercel.app` destination was not assumed to belong to RN; its mismatch remains a canonical release blocker.
- No claim is independently validated merely because the page repeats it.

No source, portfolio or master-ledger file was edited.
