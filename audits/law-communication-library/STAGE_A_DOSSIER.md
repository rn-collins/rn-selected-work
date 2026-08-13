# law-communication-library — Represented-site R3 Stage A dossier

**Audit date:** August 13, 2026 HST  
**Public title:** The Psychedelic Law Library  
**Disposition:** **P — canonical public legal-education build; release-held for citation/currentness remediation**  
**Repository:** private `rn-collins/law-communication-library`, repo ID `1285911068`, branch `main`  
**Production:** <https://law-communication-library.vercel.app/>; Vercel project `prj_Wcx93zBdtzyqwGRxaN1zIBItmOPq`  
**Audited deployment:** `dpl_3GJ4u3vS5VJJFEwQjL5HJV5uLcm3`, READY, commit `eed901e7df15c1de0852e296d6b9ab30698e0ff9`

## 1. Executive verdict

The Psychedelic Law Library is a substantial, coherent static legal-education product: one searchable homepage, 143 distinct long-form article routes, 14 subject sections, seven audience pathways, sequential/section navigation, a custom 404, per-article review notices, and an unusually clear legal-information boundary. All 143 article routes returned 200, every route exposed by the index is referenced, and no nonexistent internal article route was discovered in the rendered corpus.

The principal problem is not route completeness; it is legal substantiation. Across approximately **217,104 article-body words**, the deployed pages contain **zero clickable external legal-authority or source links**. Articles sometimes name statutes, regulations, bills, agencies, cases, and websites in prose, but readers cannot inspect the cited proposition at the point of use. Every article says “Last reviewed: August 2026,” yet the repository exposes no per-article source ledger, reviewer identity, checked-as-of authority list, automated currentness monitor, or change history proving what that review covered. A successful crawl therefore verifies a 143-page communication architecture—not 143 legally accurate, complete, or current articles.

The asset remains a valid **P** case study for legal knowledge architecture and plain-language communication, but RN Selected Work must not call the corpus “accurate,” “maintained,” “source-backed,” or “current” beyond the limited, visible review-date convention until an authority-level cite check and update system are completed.

## 2. Identity, ownership, and brand boundary

- The live footer says “Built by RN Collins · Antithesis Law PC,” while a second footer says “Built by Aloha AI” and links “RN Builds” to an older portfolio URL. RN Selected Work classifies the project as “Independent.” These three attributions need one explicit relationship statement.
- The contact destination is `rncollins@antithesis.law`; the modal posts to RN API. The site does not state the author/reviewer’s jurisdiction, bar status, firm role, editorial standard, conflicts, or whether Antithesis Law PC reviewed or publishes every article.
- “Not legal advice” and “does not create an attorney-client relationship” are visible and repeated. That is a strong boundary, but it does not cure inaccurate legal content, attorney-advertising duties, unauthorized-practice implications, or reliance risk.
- Best positioning: **a public legal-communication and knowledge-architecture demonstration**, with any law-firm publishing/review relationship documented separately and accurately.

## 3. Complete route and corpus audit

### Route totals

| Surface | Count/result |
|---|---|
| Homepage `/` | 200 |
| Distinct `/articles/...` links in index | 143 |
| Article routes fetched | 143/143 returned 200 |
| Article routes referenced across corpus but absent from index | 0 |
| Index routes never referenced across corpus | 0 |
| Custom 404 | works for arbitrary article path |
| `/sitemap.xml` | 404 although every page declares it |
| `/robots.txt` | 404 while pages declare `index, follow` |
| `/privacy` and `/terms` | 404 |
| `/api/track` | 404 although all pages POST page-view/scroll events to it |

### Section inventory

| Section | Articles |
|---|---:|
| Foundations | 20 |
| For Participants & Clients | 24 |
| Harm & Disputes | 6 |
| For Facilitators | 14 |
| For Healthcare Professionals | 12 |
| Professional & Career Risk | 7 |
| Running a Business | 14 |
| Marketing & Advertising | 9 |
| Documents & Contracts | 11 |
| Churches & Ceremony | 7 |
| After an Incident | 6 |
| Researchers & Biotech | 8 |
| Working With a Lawyer | 4 |
| Reference | 1 |

All 143 article bodies were downloaded without executing client analytics and mechanically inspected. Body length ranges from roughly 977 to 2,161 words; average is about 1,518 words. This confirms depth and scale, not correctness.

## 4. Consumer/product journeys

### Reader starting from a life role

Seven pathways route participants, harmed people, facilitators, clinicians, operators, researchers/investors, and spiritual-use readers to sensible starting pages. This is strong audience-centered information architecture. Several audiences face radically different jurisdictions and stakes, however, so global summaries should require the user to select state/federal/tribal context and an effective date before relying on operational guidance.

### Reader searching the library

The client-side search filters all 143 titles/descriptions as the user types, hides empty sections, and exposes a no-results message. It is fast and privacy-preserving locally. It searches only title and truncated audience description—not full article text, authority, jurisdiction, effective date, agency, rule number, or legal status. There are no filter chips for jurisdiction, audience, authority type, risk, or last review.

### Reader following an article

Each page provides section rail navigation, “you might also want to read” links, and previous/next navigation. The corpus is internally well connected. It does not provide a table of contents, anchor navigation, printable citation format, authority list, corrections link, author/reviewer, version history, or a direct route back to the relevant official agency/action.

### Person harmed or facing an investigation

Incident, malpractice, complaint, litigation-hold, evidence-preservation, mandatory-reporting, and “first 72 hours” pages can influence urgent decisions. General disclaimers are insufficient for deadlines, privilege, preservation, emergency care, mandatory reporting, criminal exposure, or state-specific limitation periods. These pages need explicit emergency/counsel escalation, jurisdiction scope, checked primary authority, and no implication that following a generic checklist preserves rights.

### Operator/clinician/religious organization

Business, professional-license, HIPAA/privacy, RFRA/DEA, securities, tax, employment, marketing, consent, waiver, and contract pages involve fact-intensive multi-regime analysis. Readers receive confident prose without the authorities needed to test it. High-risk content should be issue-spotting, not prescriptive templates or categorical conclusions.

## 5. Legal authority, jurisdiction, and currentness

### Corpus-wide source finding

- All 143 articles display “Last reviewed: August 2026 · Psychedelic law changes quickly — verify current status before relying on this page.”
- No article contains a clickable external legal/research authority link. Corpus-wide external links are only the builder/portfolio links plus three related RN tools on the homepage.
- Some pages name sources in prose—for example ORS sections, HB 2387, 21 U.S.C. § 812, DEA, HHS, OHA, and agency directories—but omit direct URLs, versions, pinpoints, access dates, and proposition-level mapping.
- A uniform month stamp does not establish legal review. The repository is compiled static output with no visible editorial/source database or update queue.

### Currentness stress test

Oregon’s own official 2026 pages show why per-proposition governance matters: rules adopted in late 2025 took effect January 1, 2026; facilitator continuing-education requirements changed; HB 2387 affected dual-license practice and forms; SB 303 data-reporting materials were updated in February 2026; and service-center requirements/forms changed. The library discusses several of these topics, but without links to the operative rule, form, letter, or version a reader cannot determine whether the August review incorporated the correct authority.

### Required legal-source model

Each material proposition should identify: jurisdiction; authority type; citation/rule/bill/case number; direct official URL; effective date; checked date; quoted/pinpoint support where appropriate; status (operative/proposed/enjoined/superseded); and reviewer. Secondary sources may explain but must not replace statutes, regulations, agency materials, cases, and licensing-board guidance.

### Priority cite-check tiers

1. **Immediate:** emergency/harm, mandatory reporting, evidence preservation, complaint/investigation, limitations, criminal exposure, Good Samaritan protections, travel/possession.
2. **High:** professional licensure, HIPAA/privacy, dual licensure, scope, Oregon/Colorado operations, marketing/FTC, tax/280E, banking, securities, contracts/waivers, employment.
3. **High:** RFRA/DEA exemptions, church structure, Indigenous/NAC/peyote claims, case holdings.
4. **Moderate:** FDA/DEA research, IND/IRB, rescheduling, drug-development and trial-access descriptions.
5. **Foundational:** terminology, program overviews, lawyer-selection and issue-spotting pages.

## 6. Representative claim risks

- Homepage: “Psilocybin is legal to receive in two states under regulated programs” is useful shorthand but needs exact state-program scope, operational/effective date, age/access conditions, federal Schedule I conflict, and clarification that state-regulated services are not FDA-approved treatment.
- “Federal crime almost everywhere else” compresses possession, manufacture, distribution, research, exemptions, tribal issues, analogues, and enforcement posture. It needs narrower wording.
- State/legal-status pages can become stale immediately after legislation, rulemaking, injunctions, local votes, or agency guidance changes. A static August 2026 stamp is not a monitoring system.
- “FDA rejected MDMA” should identify the sponsor/application/product, complete-response context/date, subsequent procedural status, and distinguish nonapproval from a general scientific/legal judgment on MDMA.
- HIPAA and confidentiality claims require careful covered-entity/business-associate analysis and should not imply that non-HIPAA data lacks other privacy duties.
- RFRA/DEA/church pages must cite governing cases and agency process, avoid categorical protection language, and distinguish federal/state tax, corporate, controlled-substance, land-use, employment, and tort questions.
- Indigenous ceremony content requires authoritative legal sourcing, precise Native American Church/peyote exceptions, tribal sovereignty context, and cultural-rights review—not only general US-law explanation.
- Contract, waiver, employment, securities, tax, insurance, marketing, and litigation content should state that enforceability and duties depend on jurisdiction and facts and should not be used as drafting advice.

This recertification did not independently cite-check 217,000 words. The absence of source links makes a complete proposition-level check impossible from the consumer artifact alone.

## 7. Controls, integrations, privacy, and security

### Controls

- Header: brand/home, Browse, Do I need a lawyer?, Start here.
- Homepage: seven audience cards, two hero CTAs, local search, 143 article rows, contact mail link, floating contact modal, three related-tool cards.
- Articles: section rail, full-index link, inline related articles, previous/next, mail contact.
- Custom 404: return-home link.

### Analytics/contact

- Every HTML page loads Vercel Analytics and Speed Insights.
- Every page captures UTM values in `sessionStorage` and attempts page-view and scroll-depth POSTs to missing `/api/track`; failures are swallowed. This creates unnecessary client/network activity and an inaccurate analytics claim in deployment history.
- The homepage contact modal sends name, email, message, and a source label to external RN API. It does not check `response.ok`, so any resolved HTTP response closes the modal and alerts “Sent!”
- No privacy page, data notice, retention/deletion path, processor disclosure, or marketing/contact consent text exists.

### Security/operations

- Security headers include CSP, HSTS, frame denial, nosniff, referrer policy, and camera/microphone/geolocation denial.
- CSP still permits inline script/style and `unsafe-eval`; the application is static and does not need such a permissive baseline after refactoring.
- The repository is deployed compiled HTML rather than an auditable source/content pipeline. No package/build/test contract, content schema, cite-checker, link checker, accessibility test, or legal-update job is visible.
- Sitemap and robots declarations are broken; no canonical URLs or OG images were found across the 144 public pages inspected.

## 8. Accessibility and responsive review

Strengths: semantic article/headings/navigation structure, labeled search, visible focus CSS, reduced-motion rule, responsive layout, custom 404, and descriptive article-link text.

Defects:

- No skip-to-content link was found.
- Sticky desktop header with three links needs verified small-screen reflow/overflow behavior.
- The custom modal has `role=dialog` and `aria-modal`, but no accessible name relationship, form labels, focus trap/return, Escape close, error region, or non-alert status pattern.
- Search results/no-results changes are not announced with a live region; there is no result count.
- Current article in the rail uses a class but not `aria-current=page`.
- Very long pages lack an article table of contents/landmarks and may be burdensome on mobile and assistive technology.
- Floating CTA can obscure content; inline style selectors are brittle.

## 9. Copy and information architecture

The product voice is unusually readable for legal material. “Written to be read before you call a lawyer, not instead of one” is excellent positioning. Audience pathways, question-shaped titles, progressive navigation, and distinction among legal/decriminalized/regulated/approved are strong.

Risks:

- “Current, accurate reference” and similar article language is not supportable without authorities and governance.
- Repetition across 143 long articles can create conflicting or duplicated propositions that update unevenly.
- Search cannot answer “what changed,” “which jurisdiction,” “what authority supports this,” or “is this still operative.”
- Article numbers run 001–142 plus Reference `999`; the homepage says 143, which is arithmetically correct but the numbering can look like a missing article 143.
- A formal methodology/editorial policy, corrections workflow, and update log would increase trust more than more uncited pages.

## 10. Business-partner assessment

The library demonstrates real commercial capability: domain taxonomy, long-form legal translation, public education, content-system design, and audience routing. It could become a durable acquisition/education product for a law practice or advisory/build practice.

It is currently expensive to maintain and carries concentrated liability: 143 long pages across fast-changing federal, state, local, professional, clinical, business, tax, religious, and litigation regimes. Before treating it as a maintained product, define editorial ownership, reviewer credentials, review cadence by risk, source-of-truth records, change triggers, correction SLA, attorney-advertising compliance, conflicts, analytics/privacy ownership, and what engagement/contact path belongs to Antithesis Law PC versus Aloha AI.

## 11. Prioritized findings

### P1 — release blockers

1. Zero consumer-accessible external authority links across 143 legal articles.
2. Uniform August 2026 review stamps without a verifiable review/source/change record.
3. High-stakes operational, clinical, professional, religious, business, and incident guidance presented in confident prose without proposition-level authority.
4. Ambiguous RN Collins / Antithesis Law PC / Aloha AI authorship, review, engagement, and business boundary.

### P2 — material

1. No privacy/terms/contact-data notice; external lead flow can falsely report success.
2. Broken `/api/track`; analytics code and UTM storage propagated to all pages despite missing endpoint.
3. Missing sitemap/robots despite declared sitemap and index/follow.
4. No build/content-source/test/currentness pipeline in repository.
5. Search lacks jurisdiction/authority/date/full-text filters.
6. Modal, search-live-state, skip-link, `aria-current`, and long-page accessibility gaps.
7. No canonical URLs or OG images.

## 12. Exact Stage B sequence

1. Freeze claims expansion; define publisher, author, licensed reviewer, jurisdictions, and Antithesis/Aloha boundaries.
2. Build a structured article/source registry with proposition-level authorities and checked/effective dates.
3. Cite-check by the risk tiers above; correct, qualify, archive, or remove unsupported pages.
4. Link official primary authorities and add per-article source/methodology/reviewer/change panels.
5. Implement legal-change monitoring and visible changelog; do not reset all dates mechanically.
6. Add jurisdiction/authority/date filters and full-text search.
7. Add privacy/terms/corrections/editorial-method pages; repair contact response semantics.
8. Remove or implement governed analytics; repair sitemap/robots/canonical/OG.
9. Reconstruct source/build/test pipeline with HTML/link/citation/accessibility/deployment checks.
10. Re-crawl all 143 routes and externally validate every cited authority before promotion as maintained/current.

## 13. Exact RN Selected Work corrections

Retain one **The Psychedelic Law Library** record mapped to the canonical deployment. Suggested treatment:

- **Status:** “Live 143-article legal-education prototype · source/currentness remediation pending.”
- **Purpose:** keep the goal of helping readers distinguish legal, decriminalized, regulated, and approved and identify the kind of legal question/counsel they may need.
- **Built:** “A searchable static library of 143 long-form plain-English issue-spotting articles organized into 14 sections and seven audience pathways.”
- **Demonstrates:** “Legal information architecture, issue taxonomy, plain-language writing, audience routing, and large-corpus content-system design.”
- **Evidence:** “The audit fetched all 143 indexed article routes successfully, verified the search/index/navigation structure and per-page August 2026 review notices, and found no missing indexed article route.”
- **Mandatory limitation:** “The deployed corpus contains no clickable external legal-authority links; the audit did not proposition-level cite-check approximately 217,000 words or establish that every article is accurate, complete, operative, or current.”
- **Mandatory boundary:** “Public legal education, not legal advice; no attorney-client relationship; jurisdiction and facts matter; verify against current primary authority and licensed counsel.”
- Do not claim “maintained community infrastructure,” “current accurate reference,” “source-backed,” “cited,” “verified,” or “reviewed by Antithesis Law PC” unless the corresponding governance/evidence is documented.
- Clarify who built, publishes, legally reviews, and receives inquiries: RN Collins, Antithesis Law PC, and/or Aloha AI.
- “Open build” may remain pointed to the canonical site, but promotion as an authoritative current law resource should wait for citation/currentness remediation.

## 14. Final disposition

**P — one canonical public portfolio case study, release-held.** The corpus is a meaningful independent build, not infrastructure/component/duplicate/experiment/index. Its verified value is the knowledge architecture and communication system. Its unverified—and currently unsupported—claim is legal authority/currentness at article level.

## 15. Evidence and limits

- 143 distinct indexed article URLs extracted from the live homepage.
- 143/143 fetched with HTTP 200; zero missing internal article references and zero orphan index routes.
- 144 HTML pages mechanically inspected (homepage plus 143 articles); custom 404 separately checked.
- All 143 articles carry the August 2026 review note.
- No article contains a clickable external authority link; external corpus links are portfolio/builder/related-tool destinations.
- No contact form was submitted. Client-side search behavior was source-inspected; route crawling did not execute page analytics.
- This audit did not independently validate every legal proposition, author licensure, law-firm authorization, external RN API retention, or screen-reader/mobile hardware behavior.

