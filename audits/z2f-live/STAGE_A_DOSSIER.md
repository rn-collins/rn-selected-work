# Stage A Dossier — `z2f-live` / Zero → Frontier

Audit date: August 12, 2026 HST  
Audit mode: read-only  
Audited by: site agent applying consumer, SWE, software/product, copy/IA, science-law-policy-regulatory, brand, and business-partner lenses

## 1. Asset identity

| Field | Evidence-backed identity |
|---|---|
| Artifact | **Zero → Frontier**, a free AI educational reference, tool-comparison library, use-case/playbook collection, prompt-template library, and curated external-resource index |
| Duplicate deployment | <https://z2f-live.vercel.app/> — Vercel project `prj_ukz4emkdnkWBRPI7GItuW9f0lWzn` |
| Canonical deployment | <https://zero-to-frontier.vercel.app/> — Vercel project `prj_UqOTZn8qJTsfpeKYNuNA7LCiUa2G` |
| Repository | Public `rn-collins/zero-to-frontier`, default branch `main` |
| Inspected release | Git SHA `a1ff9a9d3f80f2f24681c2da4c33c8d4cbde6eea` |
| Deployment relationship | Both Vercel projects deploy the same public repository, branch, and SHA. All seven deployment pairs visible in Vercel metadata correspond by timestamp, commit, and message. |
| Parent practice | Artifact footer says “Built by Aloha AI”; this makes it an Aloha AI-built public educational resource and RN Builds portfolio artifact, not NSAG or Institutions of One work. |
| RN Selected Work | Already represented as the Atlas case `zero-to-frontier`, linked to the canonical deployment and repository. |
| Intended status | Public, indexable educational reference; also functions as an Aloha AI demonstration/lead generator through the homepage contact modal. |
| Privacy | No account or paywall. The homepage loads Vercel Web Analytics and Speed Insights, attempts custom page-view and scroll-depth tracking, and exposes a cross-origin lead form collecting email and optional name/message. No privacy notice or terms route exists. |

Canonical identity is not inferred from the prettier name alone. The artifact's `og:url` and JSON-LD declare `https://zero-to-frontier.vercel.app`; RN Selected Work already uses it; the GitHub repository has that name; and both deployments are content-identical outputs of the same commit. `z2f-live` is therefore a duplicate deployment.

## 2. Executive verdict

Zero → Frontier should exist. It is a substantial, thoughtfully structured public reference: 21 HTML routes, 17 historical entries, nine plain-language glossary concepts, 16 worked use cases, ten playbooks, 18 downloadable prompts, comparisons spanning dozens of tools, and a 237-row resource library. Its strongest value is not a novel software engine; it is RN's synthesis, translation, information architecture, and conversion of a complicated field into usable educational infrastructure.

The artifact is **usable as a static prototype and knowledge resource but not release-certified**. The route structure and content assets are real, not empty mockups. However, its highest-order promises—“fully sourced,” “every claim attributed,” “nothing tracks you,” “does not collect my information,” “without a live contact form,” and a complete/accurate site map—are contradicted by the repository itself. The site also operates from two Vercel projects without canonical tags or redirects, creating avoidable duplicate-publication and analytics fragmentation.

Top risks:

1. **P1 trust/privacy contradiction:** About says no information collection and no live contact form; the homepage contains a contact form and tracking scripts.
2. **P1 evidence overclaim:** many factual/product assertions are supported only at card or page level, some history entries rely on Wikipedia/DataCamp rather than primary sources, and the site itself acknowledges inferred/unverified claims. “Every claim is attributed” and “fully sourced” are not defensible as written.
3. **P1 false-success lead handling:** the contact UI treats any resolved HTTP response—including a 400/500—as “Sent!” because it never checks `response.ok`.
4. **P1 duplicate deployment:** `z2f-live` and `zero-to-frontier` repeatedly deploy the identical commit, with no canonical link or redirect.
5. **P2 discoverability failure:** the homepage advertises `/sitemap.xml`, but that route and `/robots.txt` return `404`; 20 interior pages lack canonical URLs, `og:url`, structured data, and explicit robots metadata.
6. **P2 maintenance exposure:** pricing, free-tier, privacy, model, AGI, and legal-professional statements are dated only generically to “mid-2026,” with no per-page last-reviewed date, source ledger, or maintenance owner.
7. **P2 accessibility gaps:** contact dialog accessibility is materially incomplete; custom tabsets lack expected keyboard semantics; fixed max-heights risk clipped content; browser-level mobile/keyboard/zoom validation remains outstanding.

## 3. Complete route map

The repository and deployed artifact contain 21 HTML routes:

1. `/` and `/index.html` — homepage and directory.
2. `/start-here.html` — audience/time router.
3. `/history.html` — 17-entry timeline.
4. `/concepts.html` — concept map and nine-item glossary.
5. `/techniques.html` — four technique categories.
6. `/use-cases.html` — 16 use cases in four categories.
7. `/tools.html` — seven general assistants.
8. `/tools-research.html`.
9. `/tools-meetings.html`.
10. `/tools-writing.html`.
11. `/tools-marketing.html`.
12. `/tools-automation.html`.
13. `/tools-coding.html`.
14. `/tools-images.html`.
15. `/tools-video.html`.
16. `/tools-audio.html`.
17. `/playbooks.html` — ten playbooks.
18. `/templates.html` — 18 displayed templates.
19. `/frontier.html`.
20. `/library.html` — 237 resource rows.
21. `/about.html`.

No missing same-repository target was found in static HTML. Dynamic internal routes embedded in the JavaScript data structures were separately inspected and resolve to repository files. Machine-route findings: `/sitemap.xml`, `/robots.txt`, `/api/track`, `/privacy`, and `/terms` return `404`.

The complete route/control-level record is [ROUTE_CONTROL_LEDGER.md](./ROUTE_CONTROL_LEDGER.md).

## 4. Complete interaction/control inventory

Global controls on every route:

- skip link;
- brand/Home link;
- mobile Menu toggle;
- 12-link primary navigation;
- 11-link footer navigation;
- page-specific links and CTAs;
- IntersectionObserver-based reveal behavior.

Page-local controls:

- Home: 48 static links; 3 hero CTAs; 11 section cards; 2 related-build cards; contact dialog with 3 fields and 3 buttons.
- Start Here: 48 static route links.
- History: 17 generated expandable timeline controls and generated source links.
- Concepts: 9 generated expandable glossary controls and one horizontally scrollable SVG visualization.
- Techniques: 4 generated tabs/panels.
- Use Cases: 4 generated tabs/panels covering 16 cards.
- Tools hub/category pages: source and navigation links; no simulated product controls.
- Playbooks: 10 generated tabs/panels.
- Templates: 5 category tabs, 18 Read/Hide controls, 18 downloads, and source links.
- Library: search input, 8 module-filter buttons, 237 generated external resource cards, and Back to top.
- About: 6 generated FAQ buttons.

The contact form was not submitted because Stage A prohibits consequential lead submission. A safe GET verified that the configured external endpoint exists and correctly rejects GET with `405` while advertising `POST, OPTIONS`.

## 5. Consumer journeys and observed results

### Journey A — “I know nothing about AI”

Home offers a clear “Not sure where to start?” route, then Start Here offers five motivation paths and three time budgets. The educational progression—History → Concepts → Techniques → Use Cases → Tools → Playbooks/Templates—is understandable. Copy is mostly plain and appropriately defines jargon.

Friction: Start Here says “Ten pages” and its reading-order site map presents nine destinations, while the real estate contains 21 HTML pages. Playbooks and nine dedicated tool-category routes are absent from that “full site” representation. The homepage instead says “Eleven sections, twenty pages.” Consumers cannot know which count or map is authoritative.

### Journey B — “Help me do useful work with AI”

Use Cases provides concrete tasks and human-review steps; Playbooks adds maturity stages, risks, and KPIs; Templates supplies actual downloadable prompts. This is the strongest consumer journey because the artifact delivers tangible resources rather than only explaining concepts.

Friction: tab controls require pointer/Tab activation rather than a complete keyboard tabs pattern; several “fully implemented” descriptions are operating-model recommendations, not functionality delivered by this site. The distinction is usually clear inside the playbooks but should remain explicit in portfolio copy.

### Journey C — “Help me choose a tool”

The Tools hub differentiates seven general assistants and links to nine category pages. It often states uncertainty rather than inventing figures, which builds trust.

Friction: pricing, free limits, privacy, model availability, discontinued products, and product positioning can change weekly. A generic mid-2026 snapshot is insufficient for high-confidence decision support in August 2026 without item-level checked dates. The source links are page/card level, not claim level.

### Journey D — “Give me verified learning resources”

The library contains exactly 237 records grouped across seven modules. Search covers title, blurb, and module; filtering is logically straightforward; each record carries a type and time estimate.

Friction: 237 records represent 233 unique URLs because four destinations are duplicated. Full link/current-access validation could not be completed in this environment. “Verified” must not remain unconditional unless a dated automated link/content-maintenance process exists.

### Journey E — “Contact the builder”

Only the homepage offers “Contact the Architect.” It opens an email/name/message dialog and posts to RN API.

Result boundary: no consequential submission was made. Code inspection shows a serious failure mode: `.then(...)` displays “Sent!” for every HTTP response, even errors. The modal is absent from the About page, whose FAQ claims the site has no live contact form and does not collect information.

### Journey F — return visit / sharing / discovery

Static `.html` routes are stable and shareable. UTM values are retained in `sessionStorage`. However, the two identical Vercel projects expose multiple public aliases; no page has a `rel=canonical`; interior pages omit `og:url`; the advertised sitemap is missing. Search engines, analytics, and recipients can split across duplicate hosts.

## 6. Functional matrix

| Capability | Status | Evidence / boundary |
|---|---|---|
| Static educational pages | Working | Repository contains 21 nonempty routes; sampled deployed routes returned `200`; latest deployment is `READY`. |
| Same-origin navigation | Working in source | All static same-repository targets exist; dynamic route mappings inspected. Full browser-click execution unavailable. |
| Mobile navigation | Partial | Class and ARIA state toggle implemented. No focus management/Escape/selection-close. Browser layout not executed. |
| Scroll reveals | Partial | IntersectionObserver implementation and reduced-motion fallback present. No general no-JS/unsupported-API fallback. |
| History expansion | Working in source | 17 controls with click, Enter, Space, and `aria-expanded`. Fixed max-height risks clipping. |
| Glossary expansion | Working in source | Nine keyboard-capable role-buttons. Native buttons would be stronger; fixed max-height risk. |
| Tabs: Techniques, Use Cases, Playbooks, Templates | Partial | Selection/panel state implemented; incomplete ARIA tabs keyboard pattern. |
| Templates | Working in source | 18 visible records map to 18 existing nonempty downloads; one deployed asset sampled `200`. Four extra files orphaned. |
| Library search/filter | Working in source | 237 rows render; filters/search/count implemented. Empty-state and full browser execution missing. |
| 237 external resources | Partial / unverified | Dataset count verified; 233 unique URLs; full outbound resolution/current-content sweep blocked. |
| Back-to-top | Working in source | Scroll threshold and action implemented. |
| Contact dialog UI | Partial | Opens/closes in source, but accessibility and accurate success/error handling are defective. |
| Contact delivery | Unverified and unsafe to represent as verified | Endpoint exists; POST deliberately not performed; response status is ignored. |
| Custom analytics `/api/track` | Broken | Both configured page-view/scroll requests target a `404` route and silently fail. |
| Vercel Analytics / Speed Insights | Present, disclosure unresolved | Scripts are loaded on homepage despite no-tracking statements. |
| Sitemap | Broken | Advertised `/sitemap.xml` returns `404`. |
| Robots file | Missing | `/robots.txt` returns `404`. |
| SEO canonicalization | Missing | No `rel=canonical`; only homepage has `og:url`/JSON-LD. |
| Build/test pipeline | Missing | Static project has no package manifest, build script, lint, tests, or browser checks. Twelve JavaScript sources/extracted inline scripts passed `node --check`; that proves syntax only. |

## 7. Copy and information-architecture findings

### Strong copy

- Clear beginning-to-advanced premise and restrained use of jargon.
- Useful recurring structure: what it does, limitations, free tier, privacy, official source.
- Good uncertainty language on many tool pages: unverified figures are often flagged rather than fabricated.
- Use Cases, Playbooks, and Templates distinguish AI assistance from human review and warn against professional overreliance.

### Material contradictions and overclaims

1. **“Nothing tracks you to sell you something later.”** The homepage loads Vercel Analytics/Speed Insights and attempts custom page-view/scroll tracking. The qualification “to sell you something later” does not cure the undisclosed tracking.
2. **FAQ: “does it collect my information? No.”** The contact modal collects email and optionally name/message.
3. **FAQ: “static reference site without a live contact form.”** A live cross-origin contact form is injected on the homepage.
4. **“Every claim is attributed. No claim is invented.”** Numerous factual sentences are not individually linked; some cards have only general official/pricing links; some history entries cite secondary summaries; page flags admit inference and missing verification.
5. **“Every statistic, quote, and historical claim ... links to ... source.”** This is not true at claim-level granularity.
6. **“17 turning points, each ... linked to its primary source.”** Multiple entries rely on Wikipedia and DataCamp rather than primary sources.
7. **“237 verified free resources.”** Count is real, but four URLs duplicate and complete current-access verification was not demonstrated by code or a maintained ledger.
8. **Page-count architecture:** “Ten pages,” “Page 11 of 11,” “Eleven sections, twenty pages,” and the actual 21 HTML files conflict.
9. **“Part of the Free University project.”** This project/brand relationship is unexplained and unlinked, producing brand ambiguity.
10. **“Contact the Architect.”** Attractive but abstract. “Contact RN about this resource” or “Work with Aloha AI” would disclose who receives the message and why.

### AI-writing / editorial signals

The prose is generally more concrete than generic AI copy. Repetitive patterns—“Flagged during research, not smoothed over,” “compared honestly,” “real,” “actually,” “fully sourced”—become a defensive brand tic and magnify reputational risk when evidence is incomplete. Replace universal assurances with an auditable methodology, dates, and scoped claims.

## 8. Science/law/policy/regulatory claim ledger

This ledger groups claims by evidentiary class; a complete atomized claim-to-source database does not exist in the artifact and should be created during remediation.

| Claim class / example | Current support | Finding | Required treatment |
|---|---|---|---|
| AI history: Turing prediction, Dartmouth naming, AI winters, expert systems, transformer milestones | 17 entries and 28 source groups; mixture of original papers, institutional pages, established media, Wikipedia, and DataCamp | Useful overview, but not “primary source for every turning point”; detail-to-source mapping is coarse. | Add claim IDs/footnotes and primary sources wherever available; label secondary context. |
| Technical explanations: neural networks, backpropagation, tokens, transformers, RAG, fine-tuning, agents | Plain-language prose; some library references, no claim-level citations on Concepts | Generally plausible but simplifications can become categorical: fine-tuning is not always “most powerful, most expensive”; multimodal systems do not universally use “one unified architecture”; agents are not defined uniformly. | Qualify architecture-dependent generalizations and cite authoritative technical sources on-page. |
| Frontier metrics and benchmark statistics | Stanford HAI 2026 report linked at page level | Strong source class, but exact metric-to-table/page evidence absent. | Add report page/table anchors and a checked date. |
| AGI positions attributed to named researchers | Secondary/current reporting and opinion links | Fairly presented as debate, but summaries should point to original talks/papers where possible. | Cite original remarks/transcripts; distinguish RN synthesis from direct claims. |
| Tool pricing/free limits/model availability | Official product/pricing/help links frequently present; site admits some figures are inferred or unverified | Extremely time-sensitive; titles such as “confirmed” lack per-item dates; one page says a limit is “reported” from Google's page. | Add `checked_on`, jurisdiction/plan, and source URL per field; automate stale review. |
| Privacy/training/retention claims | Often linked to privacy pages, sometimes inferred from pricing grids or secondary research | High-stakes for business adoption; inference is not adequate for categorical privacy guidance. | Separate confirmed policy text, reasonable inference, and unknown; quote minimally with section/date; do not recommend handling sensitive data without a current primary-policy check. |
| Lawyers' use of generative AI / ABA Formal Opinion 512 | ABA opinion linked in Governance template; Florida Bar, California guidance, NYSBA materials appear in library | Helpful references, but guidance is jurisdiction-dependent and professional duties are not exhausted by these sources. | State jurisdiction, date, binding/nonbinding status, and issues covered; do not present templates as compliance. |
| NIST AI RMF-based policy/playbook | NIST AI RMF 1.0 and GenAI profile appear in library/templates | NIST RMF is voluntary risk-management guidance, not a law or turnkey policy. Site mostly calls output a starter and asks for attorney review. | Preserve that boundary prominently inside downloaded files and cards; add version/date and organizational tailoring warning. |
| Medical/legal/financial/professional advice boundary | Footer and FAQ disclaimers | Appropriate but a disclaimer cannot repair inaccurate substantive claims. | Keep, while improving evidence and scoped language. |
| Universal sourcing/verification claims | About and homepage | Directly disproven by the site's own source mix and admitted gaps. | Remove universal language; publish a transparent evidence standard and exceptions ledger. |

No legal conclusion or scientific validation is conferred by the count of links. Current-source verification of all 294 URL literals was blocked in this environment and remains an explicit open gate.

## 9. Accessibility and responsive findings

### Positive implementation

- skip link and one `main` landmark on every route;
- semantic headers/nav/footer;
- one H1 per route;
- visible-focus CSS for links/buttons/inputs/tabindex elements;
- minimum-height treatment on navigation and primary buttons;
- reduced-motion media query disables animation and smooth scrolling;
- Concepts SVG has a detailed screen-reader description;
- Library search has a real label, status region, and grouped filters;
- History and glossary custom controls implement Enter/Space.

### Defects

- **Contact dialog:** fields use placeholders instead of labels; no `aria-labelledby`; no focus entry/trap/restore; no Escape behavior; background is not made inert; alerts are browser dialogs rather than an accessible status region.
- **Tabsets:** no ArrowLeft/ArrowRight/Home/End support and no roving `tabindex`.
- **Expandable content:** Timeline, FAQ, and glossary rely on fixed `max-height`; increased text size/reflow can clip content.
- **Mobile nav:** no Escape, focus containment, close-on-link, or return-focus behavior.
- **Color/contrast:** palette appears designed for dark-mode contrast, but computed contrast—including gradients, `--sub2`, colored pills, disabled/inactive states, and modal inline colors—was not browser-measured.
- **Responsive:** CSS includes 900/860/800/760/700/640/600/520 breakpoints and collapses major grids. However, the 12-item fixed header can wrap above the 860px mobile breakpoint while `main` retains `padding-top:78px`, potentially overlapping content. The concepts SVG is horizontally scrollable, which is appropriate but needs touch/browser verification.
- **No-JS/failed-JS:** many sections are empty because content is generated client-side; `.reveal` content can remain invisible if IntersectionObserver fails.

Browser execution at 1440×900, 390×844, 320 CSS px, 200% zoom, keyboard-only, and forced-colors remains required because the environment had no browser executable and could not install one.

## 10. Brand-architecture findings

Correct owner: **Aloha AI-built public resource**, authored/curated by RN Collins and showcased through RN Builds/RN Selected Work. It is not an NSAG assessment, nervous-system-aware governance product, or Institutions of One ownership system.

Strengths:

- demonstrates cross-disciplinary research translation and productized public education;
- clear independent/non-affiliation statement;
- no false client commission is implied;
- broad accessibility fits Aloha AI's usable-system positioning.

Problems:

- Aloha AI/RN attribution appears only after the main footer on the homepage, not consistently across interior pages.
- JSON-LD and the “Explore all ... at RN Builds” link point to the old `rn-portfolio-khaki.vercel.app`, not RN Selected Work/RN Builds' current canonical destination.
- “Free University project” is undefined and unlinked.
- “Contact the Architect” obscures RN/Aloha AI rather than strengthening recognition.
- Generic dark gradient/neon styling reads as a conventional AI microsite; it does not visibly ground the resource in RN's authorship, Hawaiʻi, law/science rigor, or distinctive editorial identity.
- Duplicate hostnames fragment authority and search signals.

## 11. Business-model and conversion findings

| Element | Assessment |
|---|---|
| Primary audience | AI beginners, students, professionals, small teams, educators, and curious readers needing a structured starting point |
| Beneficiary | Reader; educators/organizations can also use the reference and templates |
| Buyer | There is no direct paid offer. A potential consulting/education buyer is an organization that wants a tailored learning system, tool-selection brief, policy starter, workflow library, or staff curriculum. |
| Decision-maker | Founder, learning/operations leader, legal/risk leader, educator, or small-business principal |
| Economic value | Reduces orientation, research, evaluation, and first-draft workflow/policy effort; demonstrates RN's ability to turn fragmented information into maintained infrastructure |
| Current conversion | Homepage-only “Contact the Architect” lead modal; related links to Aloha AI and an old RN portfolio |
| Trust barrier | Unsupported universal sourcing claims, undisclosed data handling, stale-sensitive tool details, and contradictory About copy |
| Adoption barrier | Breadth without a maintained curriculum path; unclear reuse license; no content versioning or update cadence |
| Fulfillment | The public reference itself is delivered. No paid service scope, response expectation, maintenance promise, or support policy is stated. |

Recommendation: keep it free and public as a proof-of-work resource. Do not turn it into a standalone company. Use it as a credible Aloha AI/RN Builds case demonstrating research translation, educational architecture, and applied governance communication. Conversion should link to a clear, privacy-disclosed RN/Aloha AI contact route and name concrete engagements without gating the resource.

## 12. Security, privacy, data, and operational findings

- Security headers include HSTS, frame denial, MIME sniff prevention, strict-origin referrer policy, and restrictive permissions policy.
- CSP includes `'unsafe-inline'` and `'unsafe-eval'`, materially weakening script-injection protection; inline event handlers/scripts currently create this dependency.
- `connect-src` permits the cross-origin RN API. The API responds with `Access-Control-Allow-Origin: *`; public lead ingestion therefore needs server-side validation, rate limiting, abuse controls, origin/source validation where appropriate, retention rules, and privacy disclosure.
- Contact sends email/name/message without an on-page privacy notice, purpose, retention statement, or expected response time.
- The client interprets every fulfilled fetch as success, regardless of HTTP status.
- Homepage custom analytics target `/api/track`, which does not exist and silently fails. This creates dead network traffic and false observability expectations.
- Vercel Analytics and Speed Insights are loaded only on the homepage; inconsistent sitewide measurement further complicates the site's no-tracking promise.
- No cookie banner is evident. Whether one is legally required depends on actual analytics configuration, jurisdictions, and cookies/data used; the immediate defect is lack of accurate disclosure, not automatically lack of a banner.
- No automated dependency exposure exists because the product is static and has no package dependencies, but there is also no CI, link check, HTML validation, claim freshness check, test suite, or deployment assertion.
- No logs/error monitoring are available for client-side failures. Custom requests swallow exceptions.

## 13. Defects ranked by severity

### P0 — blocking

None established. The static resource loads, and no destructive or authentication/security compromise was demonstrated.

### P1 — serious

1. About/privacy statements deny collection/contact while homepage collects lead data and loads tracking.
2. Contact reports success without checking HTTP status; leads can be lost while consumers see “Sent!”.
3. Universal sourcing/primary-source/verification claims exceed actual evidence structure.
4. Two Vercel projects repeatedly deploy identical releases without canonicalization.

### P2 — material

1. Missing sitemap and robots; homepage advertises a nonexistent sitemap.
2. Missing canonical tags; interior pages lack `og:url`, structured data, and absolute social-image URLs.
3. Inconsistent page/section counts and incomplete “full site” map.
4. Current tool/pricing/privacy facts lack per-item checked dates and a maintenance ledger.
5. Contact modal fails core dialog/form accessibility requirements.
6. Four tabsets lack complete keyboard behavior.
7. Fixed max-heights risk truncation under zoom/reflow/localization.
8. Custom `/api/track` is broken and silently ignored.
9. Four duplicate library URLs; external current-access pass incomplete.
10. Old RN portfolio links and undefined Free University branding.
11. Four orphaned template assets create version ambiguity.
12. No automated tests, HTML/link checking, claim freshness validation, or release QA.

### P3 — polish

1. Library needs a helpful empty state and clear-search action.
2. Downloads need version/check dates and optional sizes.
3. Contact CTA should name RN/Aloha AI and expected purpose.
4. Repetitive “actually/real/honest/fully sourced” language can be tightened.
5. Interior pages need consistent authorship and case-study/RN Builds navigation.

## 14. Exact remediation plan with file-level targets

Stage B should occur only in `rn-collins/zero-to-frontier` after root acceptance.

1. **Canonicalize deployment**
   - Vercel dashboard/config: retain `zero-to-frontier` as production canonical; redirect `z2f-live` domains to it or archive the duplicate project after dependency/backlink confirmation.
   - Add `rel=canonical` and canonical absolute URLs to all 21 HTML files.

2. **Repair privacy and contact truthfulness**
   - `index.html`: remove or accurately disclose analytics; decide whether custom tracking is needed; replace broken `/api/track`; rebuild contact as a semantic `<form>`/dialog; check `response.ok`; provide pending/success/error states.
   - `about.html`: replace false FAQ answers; state exactly what the contact form collects, why, where it goes, and that analytics are or are not used.
   - Add `privacy.html` (and terms only if warranted) with current operational truth; link it beside the form and footer.
   - RN API repository: validate payloads, return documented response schema, implement abuse protection/logging/retention controls, and verify integration end-to-end without retaining audit test data.

3. **Scope evidence claims**
   - `about.html`, `index.html`, `history.html`: replace “every claim”/“fully sourced”/“primary source each” with accurate scoped language.
   - Add a structured claim ledger (JSON/CSV/JS) with claim ID, exact proposition, source URL, source class, checked date, scope, jurisdiction where relevant, and uncertainty.
   - Add inline claim IDs/footnotes to `history.html`, `concepts.html`, `frontier.html`, all `tools*.html`, `playbooks.html`, and governance template cards.

4. **Introduce freshness maintenance**
   - `assets/library-data.js`: add stable IDs, `checked_on`, access status, and deduplicate four repeated URLs unless repeats intentionally serve distinct contexts and are labeled as such.
   - Tool data should move from repeated HTML into structured data with field-level sources/dates.
   - Display “Last reviewed” on each time-sensitive page and implement CI stale-date warnings.

5. **Fix IA/counts**
   - `index.html`, `start-here.html`, page kickers across all HTML: derive counts from one route manifest; include Playbooks and all tool-category pages in a truthful site map; decide whether subpages count as pages/sections and use one convention.

6. **Accessibility**
   - `index.html`: native labeled form fields; dialog title/description relationships; initial focus, trap, Escape, backdrop behavior, inert background, focus restoration, live status.
   - `techniques.html`, `use-cases.html`, `playbooks.html`, `templates.html`: implement WAI-ARIA tab keyboard behavior or use simpler native disclosure/navigation patterns.
   - `history.html`, `concepts.html`, `about.html`: remove fixed max-height clipping; prefer native `<button>`/`details>` where appropriate.
   - `assets/site.js`: mobile menu Escape/close-on-link/focus handling; safe reveal fallback.

7. **SEO/discovery**
   - Create real `sitemap.xml` and `robots.txt` or generate them in CI.
   - Add absolute `og:image`, `og:url`, canonical URL, author/publisher schema, and appropriate CollectionPage/LearningResource metadata per route.
   - Update JSON-LD and all RN Builds links from `rn-portfolio-khaki.vercel.app` to the accepted current destination.

8. **Brand/business coherence**
   - Consistent “Created by RN Collins; built through Aloha AI; documented at RN Builds” footer across routes.
   - Explain or remove “Free University project.”
   - Replace “Contact the Architect” with a precise CTA and clearly scoped engagement route.

9. **Operational QA**
   - Add a minimal package/CI setup: HTML validator, internal/external link checker, JavaScript lint, accessibility/browser tests, mobile screenshots, sitemap assertion, duplicate-data check, and contact/API contract test using non-retained test mode.
   - Resolve the four orphaned template files by mapping, renaming/versioning, or removing them in Stage B only.

## 15. Recommended estate disposition

### `z2f-live`: **D — Duplicate or alternate deployment**

Evidence:

- same GitHub repository: `rn-collins/zero-to-frontier`;
- same branch: `main`;
- same latest SHA: `a1ff9a9d3f80f2f24681c2da4c33c8d4cbde6eea`;
- all seven Vercel deployment pairs correspond by commit/timestamp/message;
- directly compared homepage and library responses are byte-identical;
- internal `og:url` and JSON-LD name `zero-to-frontier`;
- RN Selected Work already uses `zero-to-frontier`;
- there is no distinct `z2f-live` GitHub repository, feature boundary, audience, or product identity.

### Canonical parent: `zero-to-frontier` — **P, retained**

Zero → Frontier remains a public portfolio build. `z2f-live` needs no case study and must not inflate RN's build count. Recommended final action: redirect then retire/archive duplicate project, subject to inbound-dependency confirmation.

## 16. Proposed RN Selected Work case-study corrections

Do not add a `z2f-live` card. Update the existing `zero-to-frontier` case only after Stage B verification:

- Identify it as an independently developed Aloha AI-built public education and decision-support resource by RN Collins.
- Report evidence precisely: 21 HTML routes; 17 history entries; nine glossary concepts; 16 use cases; ten playbooks; 18 displayed/downloadable prompt templates; 237 library records pointing to 233 unique URLs at the audited commit.
- Do not call every resource “verified” or every claim “fully sourced” until the claim/link ledger passes.
- State that tool/pricing/privacy material is a dated snapshot, not continuously current intelligence.
- Distinguish delivered functionality (static knowledge system, search/filter, downloads) from recommendations described in playbooks.
- Link only canonical `https://zero-to-frontier.vercel.app/` and `https://github.com/rn-collins/zero-to-frontier`.
- Add a provenance note that `z2f-live` was a duplicate Vercel deployment, not a separate build.
- Use current RN Builds/RN Selected Work destination, not `rn-portfolio-khaki`.

## 17. Evidence appendix

### Repository evidence

- Public repository: <https://github.com/rn-collins/zero-to-frontier>
- Inspected commit: `a1ff9a9d3f80f2f24681c2da4c33c8d4cbde6eea`
- Repository inventory: 21 HTML files, `assets/site.js`, `assets/style.css`, `assets/library-data.js`, 22 template text files, `assets/og-image.png`, `vercel.json`, and an empty/minimal README.
- JavaScript syntax: 12 shared/extracted inline script units passed `node --check`. This does not establish runtime behavior.

### Deployment evidence

- `z2f-live`: `prj_ukz4emkdnkWBRPI7GItuW9f0lWzn`; latest deployment `dpl_4ZvpEMFYUV28bbkWsE7VmYbZCp2N`.
- `zero-to-frontier`: `prj_UqOTZn8qJTsfpeKYNuNA7LCiUa2G`; latest deployment `dpl_2anZ5M29UFkRxJ3bd9Hq3ZmG4BTi`.
- Both latest deployments: production, `READY`, same GitHub SHA/repository/branch/message.
- Canonical URL declared inside homepage: <https://zero-to-frontier.vercel.app>.

### HTTP evidence

- `200`: duplicate homepage, canonical homepage, sampled About/Concepts/Frontier/History/Library/Playbooks/Start Here/Tools Audio routes, and a sampled template download.
- `404`: `/sitemap.xml`, `/robots.txt`, `/api/track`, `/privacy`, `/terms`, arbitrary nonexistent route.
- Lead API safe GET: `405`, with `POST, OPTIONS`; no lead POST performed.
- Security headers observed: CSP, HSTS, X-Frame-Options DENY, X-Content-Type-Options nosniff, strict-origin referrer policy, restrictive Permissions-Policy.

### Data evidence

- `LIB.length === 237`.
- Seven library modules with counts 27, 33, 28, 48, 28, 28, and 45.
- 233 unique library URLs; four repeated destinations listed in the route ledger.
- 18 displayed template mappings; all exist and are nonempty.
- Four additional unmapped `.txt` assets identified.
- 294 unique URL literals across the full source corpus, including external resources, APIs, schema namespaces, and template citations.

### Explicitly unverified areas

1. No browser executable was available. Attempting the supplied Playwright install path downloaded an invalid empty archive. Therefore no claim of completed screenshot, console, computed-style, mobile layout, zoom, keyboard-order, screen-reader, or live dynamic-state testing is made.
2. The environment rejected the attempted full outbound URL-resolution sweep at its network-approval boundary. Each external source/resource remains uncured until checked by an environment authorized for those destinations.
3. The lead form was not submitted under Stage A rules. Delivery, storage, notifications, retention, and sender experience remain unverified.
4. Vercel runtime error/log history was not necessary to prove the duplicate relationship and was not treated as evidence of client-side health.
5. No claim was certified solely because it had a nearby link. Claim-to-source entailment and currentness require the proposed structured ledger and primary-source re-review.

## Stage A decision

Freeze this dossier. Do not remediate `z2f-live` as if it were an independent product. Accept **D** for the duplicate project, preserve **Zero → Frontier** as the canonical **P** build, and perform Stage B only in `rn-collins/zero-to-frontier` after the coordinator approves the remediation scope.
