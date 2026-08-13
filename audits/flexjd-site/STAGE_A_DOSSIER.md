# flexjd-site — Represented-site R4 Stage A dossier

**Audit date:** August 13, 2026 HST  
**Public title:** FlexJD SBA Resource Hub  
**Disposition:** **P — canonical public community-information build; retain with material currentness, data-integrity and affiliation corrections**  
**Repository:** public `rn-collins/flexjd-site`, repo ID `1288461000`, branch `main`  
**Production:** <https://flexjd-site.vercel.app/>; Vercel project `prj_OTTjA489lj2uevnUwXOaVVPCWknf`  
**Audited deployment:** `dpl_7ugeS97vgD4ttPogVGWopMKa5tfg`, READY, commit `75c5cb2a837500f3bc8026c44764246d11888efa`

## 1. Executive verdict

FlexJD is a substantial public student-resource system, not a six-page brochure. The canonical deployment exposes **20 live HTML routes**: a homepage, student guide, newsletter, opportunity tracker, glossary, changelog, privacy and institutional-disclaimer pages, campaign-request pathway, seven awareness campaigns and four class-year guides. All 20 returned 200. Search/category filtering, responsive tables, source links, correction/disclaimer language, a public changelog, source-verification policy, security policy, sitemap, robots file and GitHub maintenance workflows demonstrate serious community-infrastructure intent.

The current artifact does not support its strongest claims. The tracker calls **372 JSON rows** “verified opportunities,” but **44 rows are category/header separators with only one populated cell**, leaving at most about 328 substantive records before duplicate/currentness review. The homepage also says both 372 and 373. The structured dataset has no per-record status, deadline or last-verified fields, and its freshness checker finds zero structured records. At least **37 displayed destination strings are malformed by split-domain linkification**, visibly showing one URL while linking to the wrong root domain. August 2026 review also found many approximate, rolling, expired or “verify/TBD” statements and time-sensitive 2025–26 academic/legal details.

This remains a valid featured case study for student-centered service design, content architecture and maintenance governance. It must be presented as an **independently maintained student resource with remediation pending**, not as a complete, institutionally maintained or comprehensively verified source. Northeastern/NUSL/SBA commission, endorsement and ownership must not be inferred without documentary evidence.

## 2. Identity, commissioning and affiliation boundary

- Repository and disclaimer call the project independently maintained and not an official Northeastern or NUSL publication.
- The live experience simultaneously uses “FlexJD SBA,” “student volunteer project of the Student Bar Association,” “© 2026 FlexJD SBA,” RN's “SBA Chair of FlexJD Interests” title, institutional email/address/phone, red university-adjacent styling, and Northeastern-hosted office hours.
- Those signals can reasonably imply SBA authorization or institutional endorsement. Preserve them only with permission and a documented ownership/succession arrangement; otherwise lead every surface with the independent-student boundary.
- RN Selected Work should say **independently student-initiated and student-maintained** unless a commission/approval record proves more. “For the FlexJD community” is supportable; “by/for NUSL,” “official,” “institutionally maintained,” and “commissioned by SBA” are not established here.
- Aloha AI and RN Builds links inside the student/SBA-branded footer mix student leadership, institutional identity and commercial portfolio promotion. Retain only with explicit SBA/institutional governance and a clear builder attribution that does not convert the resource into marketing.
- Role, class year, email, phone and named institutional contacts require an owner and expiry date so the site survives RN's term and graduation.

## 3. Complete public surface

| Surface | Count/result |
|---|---|
| Homepage | 1/1 returned 200 |
| Core resources | newsletter, guide, opportunities, glossary, changelog: 5/5 returned 200 |
| Governance/intake | institutional disclaimer, privacy, campaign resource request: 3/3 returned 200 |
| Awareness campaigns | 7/7 returned 200 |
| Class-year guides | 4/4 returned 200 |
| Total HTML routes | **20/20 returned 200** |
| Sitemap | 200, but only 17 URLs; omits three governance/intake routes |
| Robots | 200, allows crawl and names sitemap |
| Arbitrary missing route | 404 |
| `/api/track` | 404 although 18 pages call it |

The repository also includes `data/opportunities.json`, shared navigation/governance scripts, stylesheet, Vercel config, source-verification and security policies, opportunity generation/freshness scripts, and four GitHub workflows. There is no authenticated student area, database, CMS or institutional system integration.

## 4. Consumer and product journeys

### Student orientation

The homepage gives useful routes by need and class year, a visible independent-resource disclaimer, office-hours/contact actions and mobile-first layouts. The breadth is valuable for students balancing work, distance, asynchronous participation and care responsibilities. “Complete program guide” overstates a volunteer resource whose academic/calendar/admissions/bar information can change.

### Opportunity discovery

The tracker has ten categories, local text search, category chips, clear control, visible/announced result count and usable linked tables. The UI is one of the strongest parts of the build. The underlying count and currency semantics are not reliable enough for “372 verified opportunities”; header rows are counted, metadata is unstructured, and broken linkification can send readers to the wrong source.

### Resource/newsletter/campaign use

The student guide and newsletter aggregate valuable institutional material. Seven campaigns assemble educational, legal, civil-rights, mental-health, safety and support resources. High-stakes campaign or academic claims must show source, jurisdiction/scope and checked date. Crisis resources must clearly distinguish emergency/24-hour availability and should be reviewed on a faster cadence than general education.

### Correction/contact

The site provides disclaimer, privacy and resource-request surfaces plus numerous mail/tel links. The floating modal sends name, email, message and source to external RN API. It does not check `response.ok`, so any resolved error response can display “Sent!” Contact processing, retention/deletion and processor identity are not adequately disclosed.

## 5. Opportunity data integrity and provenance

`data/opportunities.json` declares 372 rows across ten categories and the rendered category totals reconcile arithmetically. Mechanical inspection found 44 rows with exactly one nonempty field, used as in-table section labels. These are not independently actionable opportunity records. Therefore:

- “372 rows” is verified; “372 verified opportunities” is not.
- substantive opportunity count is at most approximately 328 before checking duplicates, expired items and whether each route supports the listed deadline/eligibility;
- homepage 372/373 inconsistency and changelog 373→372 require reconciliation;
- 235 approximate/rolling/varies/TBD-like date expressions require record-specific currentness treatment;
- at least 37 visible URLs were split into plain prefix plus an anchor to the root domain (including court, university and bar-resource subdomains); the apparent destination and clickable destination differ;
- one ICC careers URL remains plain text and a Michigan URL shows entity corruption.

The published source policy is thoughtful: it defines authority hierarchy, status/deadline/last-verified fields, review cadences, corrections, expiry and human review. Implementation materially lags that policy. The JSON schema has none of the three promised record fields; `check_stale_opportunities.py` reports zero structured records. This audit did not independently fetch all **643 unique external URLs** or proposition-level verify every listing; repository/changelog claims of a complete external-link audit are not a substitute for current recertification.

Required record schema: stable ID; true record type (listing vs heading); title/sponsor; jurisdiction/location/mode; audience/year; compensation/amount; opening and deadline; status; primary URL; checked date; source authority; archive/replacement; correction history; reviewer. Generate table and counts only from records typed as opportunities.

## 6. Institutional, legal and regulatory accuracy

The guide and tracker include degree/program requirements, registration/waitlists, academic calendars, exam dates, financial aid, co-op/funding, bar eligibility, NextGen UBE and commercial bar-prep claims. Several visible references are tied to 2025–26 or specific Fall 2026 estimates. By August 2026, these need direct revalidation against current Northeastern, NUSL, NCBE and jurisdictional bar-admission authorities.

Categorical statements such as whether FlexJD graduates can or cannot sit in a jurisdiction are consequential legal/professional guidance. They require exact governing rule, version/effective date, applicant-category assumptions, checked date and a direction to obtain an individual eligibility determination from the jurisdiction—not just an “Apply” button. Cost/outcome claims and a “100% bar passage” statement need cohort definition and primary evidence.

Campaign pages span civil rights, gender-based violence, mental health, human trafficking and related support. Preserve plain-language education but separate law/policy, institutional process, advocacy and emergency help; cite the operative source at the proposition; and date-review hotlines, forms and named contacts. No static campaign should imply that the site itself provides emergency, legal, clinical or reporting services.

## 7. Maintenance, build and operations

Strengths:

- public changelog and source/security policies;
- scheduled secret-history scan;
- scheduled internal/external link workflow and opportunity-freshness workflow;
- static hosting, security headers, clean URLs, sitemap and robots;
- JSON-generated opportunity tables reduce manual table drift.

Control failures:

- internal-link checker treats Vercel Analytics/Speed Insights special paths as missing local assets and fails noisily;
- external link workflow is `continue-on-error`, and its scheduled issue condition may not reliably represent link failures when the action itself does not fail;
- freshness job passes while finding zero structured records, so it is not an enforcement gate;
- governance-injection workflow runs only on `remediation/public-release-controls`, not main; the loader appears on only 3/20 HTML pages despite README language that every HTML page loads it;
- sitemap excludes privacy, disclaimer and resource-request routes;
- `/api/track` is missing while 18 pages issue page/scroll events and silently swallow failure;
- no evidence of a named successor, content ownership matrix, institutional approval review, high-risk source cadence or archival policy at graduation.

## 8. Privacy and security

The privacy page appropriately warns against submitting education records, accommodation/medical details, financial information, government IDs or other sensitive material. Security policy properly routes sensitive disclosure away from public issues. Static delivery limits the attack surface.

However, 18 pages load Vercel Analytics and Speed Insights, store UTM parameters in session storage, and attempt page/scroll tracking. The privacy page says future analytics must be documented before activation, which is inconsistent with deployed analytics. It names Vercel hosting but not the external RN API used for contact, its processors, retention, deletion/contact rights or incident ownership. The contact form's false-success behavior is a data-integrity/support risk.

The CSP and HSTS/frame/nosniff/referrer/permissions headers are useful, but CSP permits inline script/style and `unsafe-eval`. Named student/institutional contacts and 47 distinct `mailto:` destinations need minimization/currentness review. Do not collect student records or case-specific legal/health facts through the general form.

## 9. Accessibility and responsive review

Strengths include `lang` on all 20 pages, semantic tables with column scopes, visible keyboard focus, skip links on 18 pages, responsive layouts, category buttons with `aria-pressed`, an `aria-live` opportunity result status, Escape support in navigation, reduced-motion CSS and `noopener` on new-window links.

Defects:

- contact modal lacks robust label relationships, focus trap/return, Escape-to-close and live error/success state;
- it uses browser alerts and can announce false success;
- privacy and institutional-disclaimer routes lack the same skip/navigation shell;
- fixed Office Hours and Contact Architect controls may obscure content at small widths/zoom;
- smooth scroll is invoked in JavaScript regardless of motion preference;
- no evidence was found for completed keyboard-only, VoiceOver/NVDA, forced-colors, 200–400% zoom or representative mobile-device testing.

## 10. Copy and brand strategy

The strongest copy states the audience problem and independent boundary plainly. The hierarchy, bright community voice and class-year/campaign segmentation make a large corpus navigable. The public changelog increases accountability.

Revise absolute or antagonistic language: “complete,” “verified,” “primary sources only,” “researched, sourced, and kept current,” and “something better” than an official resource are not supported at present. Use “student-assembled,” “source-linked,” “independently maintained,” and “verify with the original authority.” A changelog should record facts compactly; several entries are long self-evaluations and include audit assurances the current artifact does not uphold.

## 11. Business-partner assessment

The build demonstrates a marketable Aloha AI/RN capability: turning fragmented institutional information into audience-centered public infrastructure, then adding taxonomy, correction pathways, privacy boundaries and maintenance tooling. Its value is the system design, not the inflated listing count.

Operational ownership is the constraint. A law-school resource cannot sustainably depend on one student's role, personal maintenance and external commercial API. Before calling it durable infrastructure, obtain an institutional/SBA sponsor decision, define succession and editorial responsibility, separate official versus independent content, establish service levels for high-risk updates, and decide whether Aloha AI attribution is permitted. If the institution will not own it, scope it honestly as an archived student-led project with dated editions.

## 12. Prioritized findings

### P1 — case-study/currentness blockers

1. “372 verified opportunities” counts 44 non-opportunity header rows and conflicts with a 373 homepage value.
2. Structured freshness governance is not implemented; the checker sees zero records with status/deadline/last-verified metadata.
3. At least 37 source cells visibly mislink split subdomains, undermining the tracker and source claims.
4. Consequential academic, financial-aid, bar-eligibility and crisis/support information lacks consistent record-level checked/effective dates.
5. SBA/Northeastern commissioning, ownership and endorsement boundary is ambiguous across branding, copyright, role and footer claims.

### P2 — material

1. Privacy notice contradicts active analytics and omits RN API processing/retention/deletion.
2. Contact form can falsely report success; `/api/track` is absent.
3. Maintenance workflows are non-enforcing/noisy and governance injection is not on main.
4. Sitemap omits three public governance/intake pages.
5. Contact-modal, fixed-control and governance-page accessibility gaps.
6. Commercial Aloha AI/RN Builds promotion is mixed into a student/SBA-branded resource without visible approval boundary.

## 13. Exact Stage B sequence

1. Freeze “verified/complete/current” claims; correct homepage 372/373 and describe rows honestly.
2. Type header rows separately; normalize every true opportunity to the required schema; regenerate counts from true records.
3. Repair split-domain linkification and externally validate every destination/content match; archive the report.
4. Revalidate all open listings and high-stakes academic/bar/financial/crisis content against current primary sources; add checked/effective/reviewer fields.
5. Obtain and record SBA/NUSL permissions and ownership/succession; otherwise simplify to independent student-project branding and remove institutional copyright implications.
6. Make freshness and internal/external link workflows enforce real conditions; run governance injection on canonical source or replace with one shared template/build pipeline.
7. Reconcile privacy with Vercel analytics, UTM/session storage and RN API contact; define minimization, retention, deletion and incident ownership; fix response checking.
8. Remove or implement `/api/track`; complete sitemap and canonical governance navigation.
9. Fix modal/zoom/mobile/assistive-technology issues and run a documented accessibility matrix.
10. Re-crawl 20 routes and all external source/control destinations before removing the release qualification.

## 14. Exact RN Selected Work corrections

Retain one **FlexJD Resource Hub** record linked to the canonical deployment and repository.

- **Status:** “Live independent student resource · data/currentness remediation pending.”
- **Thesis:** retain “Make fragmented institutional information usable without pretending it is official.”
- **Summary:** “A mobile-first independent resource for Northeastern Law's FlexJD community, combining student guides, a filterable source-linked opportunity tracker, seven awareness campaigns, class-year pathways, correction/privacy boundaries and public maintenance documentation.”
- **Built:** “Twenty live public HTML routes, including a local-search/category-filter opportunity interface backed by ten JSON sections, seven campaign guides, four class-year guides, newsletter, program-resource guide, glossary, changelog, privacy/disclaimer/request routes and repository maintenance policies/workflows.”
- **Demonstrates:** “Community-centered service design, information architecture, source-governance intent, accessible search/filter interaction and the operational challenge of maintaining a student-run public resource.”
- **Evidence:** “The recertification fetched all 20 HTML routes successfully and verified the navigation, search/filter UI, 372 JSON rows, correction/disclaimer surfaces, policies and scheduled workflows.”
- **Mandatory limitation:** “The 372 rows are not 372 independently verified opportunities: 44 are category/header rows; per-record status/deadline/last-verified metadata is absent; at least 37 source cells contain malformed split-domain links; and the audit did not establish every institutional/legal claim or external destination as current.”
- **Mandatory boundary:** “Independently student-initiated and maintained; not an official Northeastern/NUSL publication. Do not state or imply SBA/NUSL commission, endorsement or maintenance absent documentation.”

Replace the Culturalyst sentence “turning fragmented institutional knowledge into maintained community infrastructure with verification, correction, privacy, and stewardship built in” with: **“The FlexJD Resource Hub shows RN designing an independent student resource around fragmented institutional knowledge, with search, source links, correction and privacy boundaries, while also exposing the real maintenance and governance work required to keep community infrastructure trustworthy.”**
