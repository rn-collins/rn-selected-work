# patent-first-steps-thorncrest — Represented-Site Recertification Dossier

**Product:** So You Have an Invention — First Steps  
**Audit date:** August 13, 2026 HST  
**Scope:** Wave R5 exhaustive read-only consumer, code, copy, patent/IP law, child/family, privacy, accessibility, affiliation, brand, and business audit  
**Recommended disposition:** **P — organization/event-specific legal-education concept, public linking release-blocked**  
**Source edits:** none

## 1. Asset identity

| Field | Finding |
|---|---|
| Repository | public `rn-collins/patent-first-steps-thorncrest` |
| Branch / tree | `main`; tree `53147e32938a008fb505e1b673a3599894ba573b` |
| Canonical deployment | `https://patent-first-steps-thorncrest.vercel.app/` |
| Vercel | project `prj_mAgsjIGmsEfOxqyuJJaqLJ6Vc1Qi`; production `dpl_EmiC7LWwS1uME36w1eA1xjCLtJDB`, READY |
| Architecture | one 29.6 KB static HTML page; manifest/icons/OG image; inline CSS/JS; Google Fonts |
| Intended context | young inventors/families; “Patent Your Invention & Innovation Archipelago” panel during Hawaiʻi Tech Week 2026 |
| Portfolio status | independently initiated concept, not commissioned |
| Live-page claim | “with ThornCrest Law,” “Made for ThornCrest Law,” and “reviewed for accuracy by the session moderator before distribution” |

## 2. Executive verdict

This is a polished, source-dense static legal-education handout. It explains patent categories, four high-level patentability ideas, a six-step checklist, myths, official search/help links, Hawaiʻi resources, print/share and 20 annotated sources. It does not collect invention details or child data. As an information-design artifact it strongly demonstrates RN's ability to translate difficult law into approachable structure.

It is not safe as currently written or branded. The live page asserts a relationship and review process that directly conflicts with the portfolio's “independently initiated · not commissioned” status: ThornCrest branding appears in the title/manifest/header; the page says “Made with” and “Made for ThornCrest Law”; the footer says it was reviewed for accuracy by the session moderator before distribution. No repository evidence establishes commission, authorization, legal review, distribution, adoption, trademark permission or an attorney-client relationship. It also says “today's panel” before Hawaiʻi Tech Week 2026 (August 31–September 6) had occurred.

The content crosses from general education into consequential filing guidance. “Zip your lips,” “file before you show,” “consider a provisional,” “locks an early date,” “most students qualify as a micro entity,” “$65,” and “calendar the 12-month deadline” can change rights and spending. Several are materially incomplete or wrong as universal statements. Student status alone does not establish micro-entity eligibility. A provisional does not automatically “lock” a date for later claims; benefit depends on an adequate disclosure, inventorship and compliant later filing. Foreign disclosure rules vary. The 12-month benefit may in limited circumstances be restorable within 14 months by petition, contrary to the absolute “non-extendable” treatment. A patent search does not provide freedom-to-operate or patentability clearance.

Keep P, but treat public linking as blocked until affiliation, time state, legal precision, youth/minor and accessibility defects are corrected. The portfolio must describe this as an independently initiated, public-source legal-information prototype—not a ThornCrest deliverable or attorney-reviewed handout.

## 3. Route, asset, artifact, and download map

| Surface | Finding |
|---|---|
| `/` | complete single-page guide |
| `/manifest.json` | install metadata; repeats “with ThornCrest Law” implication |
| `/og.png` | branded social card |
| `/icon-tc-180.png`, `192`, `512` | ThornCrest-styled PWA icons; permission unresolved |
| unknown paths | platform 404; no custom recovery |
| Print button | invokes browser `window.print()`; not an actual PDF download |
| Share button | native Web Share or clipboard |
| PWA | manifest/home-screen wrapper only; no service worker/offline cache |

No application intake, invention upload, prior-art workspace, deadline calculator, fee calculator, eligibility assessment, attorney booking, legal engagement, NDA, account, saved checklist, generated artifact, real PDF, API, database, analytics, sitemap, robots, privacy policy, terms, accessibility statement or correction log exists.

## 4. Complete control and link inventory

- Six in-memory checklist rows with visual progress/message.
- Five myth cards with click-to-reveal answers.
- Two patent search links: USPTO Patent Public Search and Google Patents.
- Two `tel:` links: USPTO Pro Se Assistance Center and Hawaiʻi State Library patents contact.
- Browser print labeled “Download PDF.”
- Share/clipboard link.
- OS-highlighted install instructions.
- RN portfolio (obsolete), LinkedIn and Northeastern `mailto:` contact.
- Twenty evidence/resource links, mostly official government/university/nonprofit sources.

All controls are cataloged in the companion ledger. There is no contact form or first-party data submission.

## 5. Patent and IP legal accuracy

### Patent right and term

- A U.S. patent is a territorial right to exclude others from acts defined by statute; “making, using, or selling” omits offering for sale and importing, and “copycats” understates claim scope/independent invention.
- A patent does not itself confer affirmative freedom to practice; the page correctly gestures at that distinction.
- “Utility patent lasts up to 20 years from filing” is incomplete. Term commonly runs from the relevant nonprovisional filing date, subject to earlier referenced filings, terminal disclaimers, patent term adjustment/extension and maintenance fees.
- Design term is generally 15 years from grant for current U.S. filings, but the page should specify U.S. scope/date regime.
- Plant patents concern distinct, new varieties that are asexually reproduced; “without seeds” is child-friendly but not a sufficient legal definition.

### Patentability

- Subject-matter eligibility, utility, novelty and nonobviousness are useful orientation, not four exhaustive “gates.” A valid application also implicates inventorship, written description, enablement, best mode, definiteness and procedural requirements.
- A search cannot determine patentability conclusively; searching keywords alone misses classifications, foreign/nonpatent literature, unpublished applications and claim construction.
- Patentability is distinct from freedom to operate, ownership, licensing, commercialization and enforceability.

### Disclosure and international rights

- Public disclosure can create serious bars and should trigger prompt qualified advice.
- The U.S. inventor-originated disclosure exception/grace period is fact-specific; “after your own disclosure” is an oversimplification.
- “Most countries give none” is not a decision rule. Countries differ in absolute novelty, grace periods, qualifying disclosures and treaty/priority processes.
- Confidential disclosure/NDA protection also depends on facts and agreement quality; the page should not solicit disclosure or imply silence alone resolves ownership/filing strategy.

### Provisional applications

- A provisional is an application, not a patent; it is not examined and can support “patent pending.”
- It does **not** automatically “lock an early date.” Later claims receive benefit only for subject matter adequately disclosed and enabled in the provisional, with correct inventorship and compliant benefit claim.
- Filing a thin provisional can create false confidence. New matter added later gets a later date.
- The ordinary 12-month pendency/benefit deadline is critical, but current USPTO material recognizes limited restoration when a corresponding nonprovisional is filed after 12 but within 14 months with a grantable petition and fee. Do not market this as routine relief.
- Conversion, PCT/foreign priority, design inventions and disclosure deadlines need counsel-specific treatment; provisionals are unavailable for design inventions.

### Inventorship, ownership, minors, and institutions

- The page omits inventorship analysis entirely. Each natural person who contributes to claimed conception may be an inventor; naming errors are consequential.
- Inventorship is not ownership. Employment, school/university policies, assignments, grants, team agreements, sponsor terms and use of institutional resources can affect ownership/obligations.
- “Write it down” can support development records, but mailing/notebooks are not substitutes for filing; records can still matter to conception, derivation, ownership and diligence disputes. “Only filing counts” is too absolute.
- Young inventors/minors require adult and counsel guidance for contracts, assignments, declarations, accounts, fees and representation. A parent is not automatically the inventor or owner.
- UH inventions need policy/assignment review, not merely “talk to OIC first.” Other schools, employers and competitions may also impose terms.

### Other IP

- Copyright generally arises upon fixation of original expression, but ownership, work-made-for-hire, registration and enforceability qualifications matter.
- Trademark protects source identifiers, not simply any “name or logo.”
- Trade-secret protection depends on economic value from secrecy and reasonable measures; it is not merely keeping information secret.
- Patent, copyright, trademark and trade secret can overlap; an IP identifier is orientation, not classification advice.

## 6. Fees, discounts, and assistance currentness

The page's most dangerous consumer claim is: **“Most students qualify as a micro entity, about 80% off. A provisional is $65.”**

- Student status by itself is not a micro-entity category. Qualification depends on statutory bases and certifications, including small-entity status and applicable income/application/institution criteria.
- Prior applications, applicant/inventor income, obligated assignment/licensing, employer/institution interests and co-inventors can change eligibility.
- Entity status must be correctly established when paying fees; improper status assertions can be consequential.
- A filing fee is not the full cost: search/examination, size/excess claims, late surcharge, drawings, practitioner, translation, international, issuance and maintenance costs may apply.
- Fees change. A static $65 figure should be dynamically dated, linked to the controlling fee code and never paired with an eligibility conclusion.
- Pro bono and pro se programs do not guarantee acceptance, representation, outcome, confidentiality before engagement or deadline protection.
- “Hawaiʻi inventors are served through California Inventors Assistance Program” requires current territory/service verification at time of referral.

## 7. Nonlawyer and legal-advice boundary

RN is described as a law student, not a registered patent attorney/agent. The page appropriately says education, not legal advice, and routes to registered practitioners. That disclaimer is insufficient where the guide gives imperative steps, eligibility conclusions, fee amounts and international disclosure advice.

Required boundary:

- RN/Aloha AI created a public legal-information design prototype and did not review any invention or form an attorney-client relationship.
- Do not submit invention details, public-disclosure history, school/employer agreements or confidential information to RN through LinkedIn/email.
- Official help lines provide information, not representation; only a properly engaged registered patent practitioner can advise on a specific application.
- No output, checklist completion, search or provisional suggestion establishes patentability, ownership, inventorship, confidentiality, deadline preservation, filing compliance or freedom to operate.

## 8. Organization, event, review, and commissioning boundary

The public branding strongly implies an official ThornCrest product. Claims include:

- page title and shield brandline: “ThornCrest Law”;
- “Made with ThornCrest Law”;
- “like the folks on this panel”;
- “Made for ThornCrest Law”;
- “with ThornCrest Law”;
- “reviewed for accuracy by the session moderator before distribution.”

The portfolio states independently initiated and not commissioned. Unless documentary evidence shows authorization, moderator identity/review scope/date, distribution approval and trademark permission, all collaboration/review statements are unsupported. A nonlawyer moderator review would not equal patent-counsel legal review; even attorney review must name scope/jurisdiction/as-of date without implying representation.

Hawaiʻi Tech Week 2026 was still future on August 13, so “today's panel,” “take-home,” and “before distribution” assert an event state that had not been established. Search did not locate an authoritative public ThornCrest panel record. Inspiration Hawaii Museum is cited as host, but its link alone does not verify the three panelists, fields, event time, review or distribution.

If independent, replace the official-looking ThornCrest shield/name treatment with RN/Aloha AI authorship and a plain event inspiration statement. Add nonaffiliation with ThornCrest, the moderator/panelists, Inspiration Hawaii Museum, Hawaiʻi Tech Week, USPTO, UH and other programs.

## 9. Child/family safety and privacy

Positive:

- No invention, child, parent or contact data is collected first-party.
- The guide points to official search/help sources and professional counsel.
- It does not ask a child to describe the invention on the page.

Gaps:

- Explicitly warn children/families not to email, post, demo, upload or share confidential invention details before qualified advice.
- `mailto:`/LinkedIn CTAs invite contact without a no-confidential-information warning and could create reliance/conflict misunderstandings.
- Patent Public Search and Google Patents are third parties; queries can reveal interests and are not confidential attorney communications.
- Calls go to third parties; phone assistance is not representation or deadline tracking.
- Google Fonts receives ordinary request metadata; no privacy notice exists.
- Adults should supervise minors' legal/account/contract/filing activity.
- No claim that a program, practitioner or volunteer has been vetted for a child's matter should be made.

## 10. Accessibility and responsive findings

Strengths: mobile viewport, responsive grids, generous sizing, semantic headings/lists/links and print styling.

Serious gaps:

- Checklist `<li>` and myth `<div>` controls are mouse/touch only: no keyboard focus, role, state or accessible name.
- Visual progress is not an accessible progress indicator.
- Content begins hidden via `.rev`; JavaScript/IntersectionObserver failure can hide nearly the whole guide.
- No reduced-motion handling for smooth scroll/reveal transitions.
- Share status and errors are not announced; clipboard promise rejection is unhandled.
- Print/Share use `href="#"` rather than semantic buttons.
- No skip link/main landmark, visible focus specification or accessibility statement.
- Tap-to-call boxes and muted fine print require contrast/focus/mobile assistive testing.
- The actual print output must be checked as a tagged/accessible document; browser print-to-PDF typically does not guarantee usable tagging.

## 11. Product and business role

This is an effective proof of legal-service design: it identifies common novice questions, organizes official sources, highlights disclosure/filing risk and routes readers toward help. It can support a conversation about building public education for professional practices.

It does not prove ThornCrest demand, commission, legal review, event distribution, audience use, lead generation or business outcomes. It is not an intake, screening, conflict check, legal-service portal, calculator, deadline system or delivered counsel product. The business CTA should route to current Aloha AI/RN Selected Work and request only nonconfidential design inquiries.

Before any law firm uses a derivative, require licensed-attorney content ownership, jurisdiction/scope/as-of labeling, advertising/ethics review, disclaimer/engagement controls, records/update policy, accessibility, malpractice/cyber review, data map and clear separation of education from legal intake.

## 12. Brand and portfolio architecture

Keep the case under Aloha AI as an independently initiated organization-specific concept demonstrating legal research translation and youth-facing service design. Do not use ThornCrest trade dress or “Law” branding as if official without permission. Do not position RN as legal counsel or Aloha AI as a law firm.

The obsolete `rn-portfolio-khaki.vercel.app` link fragments the brand. Update to RN Selected Work/Aloha AI. The case should have two separate buttons—Read case study and Open prototype—and the latter should remain suppressed until legal and affiliation P0s are fixed.

## 13. Defects by severity

### P0 — blocking

1. Contradictory/unsupported ThornCrest collaboration, commission, moderator-review and distribution claims.
2. False future/present event state (“today's panel,” distributed take-home) before Hawaiʻi Tech Week.
3. Materially unsafe micro-entity claim: “Most students qualify.”
4. Provisional/disclosure/deadline guidance is too absolute for consequential rights and omits adequate-disclosure/inventorship/international/restoration qualifications.

### P1 — serious

1. No inventorship, ownership, assignment, employment/school or minor boundary.
2. Patentability/search is not distinguished from freedom to operate.
3. Static fee claim and misleading “full patent costs thousands” attribution to fee schedule.
4. Contact path lacks confidentiality/nonrepresentation warning.
5. Core interactions inaccessible; content can stay hidden when scripts fail.
6. “Four gates” and patent term/right descriptions are materially incomplete.

### P2 — material

1. “Download PDF” is browser print, not an accessible PDF artifact.
2. PWA language without offline capability/service worker.
3. No source-level review dates/correction log despite “verified July 2026.”
4. Obsolete RN portfolio/personal university email.
5. No sitemap, robots, privacy, accessibility or custom 404.

## 14. Exact featured-case corrections

**Keep P, but mark public prototype release-blocked.** Recommended title/status:

> **Patent First Steps — Young Inventor Legal-Information Prototype**  
> Independently initiated organization/event-specific concept · not commissioned, reviewed, endorsed, distributed or adopted by ThornCrest Law unless documented otherwise.

Recommended summary:

> RN designed a mobile-first public legal-information prototype that organizes patent basics, disclosure cautions, official search/help resources and Hawaiʻi referrals for young inventors and families. The static guide demonstrates source annotation and risk-sensitive service design; it does not review an invention, determine patentability or ownership, preserve a deadline, assess entity status, provide legal advice, or establish a ThornCrest relationship. Its current public copy requires legal and affiliation corrections before reliance or distribution.

Required changes to the existing featured case:

- Retain “conceived around” only if clearly described as independent public-event inspiration.
- Do not say branded “for/with ThornCrest,” moderator-reviewed or distributed without evidence.
- Replace “four patentability gates” with “four introductory patentability concepts; not exhaustive.”
- Replace “current fee and entity rules” with “official-source research as of July 2026; fee/entity claims require correction and live verification.”
- Do not claim it “surfaces critical timing cautions” without stating the cautions are incomplete and not deadline advice.
- Do not call checklist completion a guided intake; no information is collected or assessed.
- State one static route, no real PDF, no saved progress, no legal intake, no usage/outcome evidence.
- Suppress Open prototype until P0 remediation; keep Read case study available with audit disclosure.

## 15. Release gates

1. Resolve ThornCrest/event authorization in writing or remove all official/collaborative/review/distribution claims and trade dress.
2. Obtain qualified U.S. patent-practitioner review of every legal proposition, source and instruction with named scope/as-of date.
3. Remove student→micro-entity inference and static fee recommendation; link to live eligibility/fee tools with no conclusion.
4. Rewrite provisional/disclosure/deadline content around adequate disclosure, inventorship, international variation and limited restoration.
5. Add inventorship/ownership/minor/school/employer/team/assignment and FTO boundaries.
6. Add no-confidential-information and no-relationship warnings at search, contact and help links.
7. Convert click-div/list interactions to semantic controls; add reduced motion, JS-failure visibility and screen-reader testing.
8. Relabel Print/save as PDF or publish a verified accessible PDF.
9. Add source review/correction ownership and current event-state handling.
10. Apply exact RN Selected Work corrections above.

## 16. Verification record and limitations

- Read the complete repository tree and the full static HTML/CSS/JavaScript and all 20 source annotations.
- Verified Vercel production READY metadata and canonical domain.
- Checked current official USPTO provisional, fee/entity, disclosure and assistance source classes; current provisional material expressly identifies 12-month pendency and limited 12-to-14-month restoration by petition.
- Searched current event/public web context; no authoritative evidence of ThornCrest commission/review/distribution was found.
- Did not contact ThornCrest, moderator, panelists, USPTO or programs; authorization remains unresolved rather than disproven.
- Did not place calls, submit contact, search confidential inventions or trigger sharing/printing.
- This audit is product/legal-communication review, not legal advice about a particular invention.
- No source, portfolio or master-ledger file was edited.

## 17. Bottom line

Patent First Steps is a compelling legal-translation prototype and a valid featured case when described honestly. Its current official-looking ThornCrest claims and simplified filing advice create unacceptable reliance and affiliation risk—especially for children and first-time families. Preserve the design achievement, remove invented delivery status, and require a registered patent practitioner's scoped review before putting the guide back in front of the public.
