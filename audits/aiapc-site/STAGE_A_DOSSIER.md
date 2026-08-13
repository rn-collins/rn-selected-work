# AIAPC Site — Stage A Audit Dossier

Audit date: 2026-08-12 (HST)  
Companion: [`ROUTE_CONTROL_LEDGER.md`](./ROUTE_CONTROL_LEDGER.md)

## 1. Asset identity

- **Asset:** “AI is a Piece of Cake” (AIAPC), a pre-launch AI-literacy newsletter, course/product catalog, and institutional-training/licensing business aimed at lawyers, physicians, executives, and educators.
- **Canonical deployment:** `https://aiapc-site.vercel.app/`.
- **Vercel:** project `aiapc-site`, ID `prj_JezysFlSTBWHIsWpu0H7eKqra0S1`; latest production `dpl_CwPh9ss9Arwa94WQvLJp9zXEr5Qx`, READY; exact commit `0929aabf9be8208f121066f543aae1e35c731915`; aliases include canonical, project-owner, and main-branch forms.
- **Repository:** private `rn-collins/aiapc-site`, GitHub ID `1285739409`, default branch `main`. Vercel names the repo, ID, visibility, branch, and commit, so linkage is verified rather than inferred.
- **Architecture:** static repository containing `index.html`, `bundle.html`, `privacy.html`, a three-page license PDF, `og-image.png`, robots, sitemap, and `vercel.json`; no package/lockfile, framework, test suite, CI, README, CMS, commerce integration, newsletter integration, API route, or content/evidence separation. Static build completed in 24 ms.
- **Ownership/parent relationship:** AIAPC is represented as a distinct co-created/co-published education venture of RN Collins and Vanda Collins. It cross-links RN's portfolio/Aloha AI and its privacy policy says RN operates both AIAPC and Aloha AI, but the repository does not establish AIAPC as a subsidiary or client build of Aloha AI. Treat it as an independent RN/Vanda venture with an Aloha/RN ecosystem relationship, not as NSAG or Aloha client work.
- **Status/privacy:** public, explicitly pre-launch for November 2026. The contact form launches the user's mail client; a second “Contact the Architect” modal posts to a nonexistent same-origin endpoint. Vercel analytics scripts are present. Privacy policy exists but materially diverges from implementation.

## 2. Executive verdict

AIAPC is a substantial, coherent pre-launch business and editorial product—not an unresolved code stub. The deployment/repository relationship is complete and verified, its three intended public routes resolve, robots/sitemap/canonical/OG metadata exist, and the main site's client-side sections render. It warrants **P — independent public property**, but its RN Selected Work representation must say “pre-launch product/brand system” and must not imply that the newsletter, products, paid archive, assessment, training, fulfillment, or customer base currently exist.

The current site is not release-ready as a commercial property. It contains material contradictions about what is free versus paid, launch timing, bundle contents/value, seat tiers, refund rights, governing law, renewal, ownership/operator roles, and privacy processors. The claimed `$1,024+` à-la-carte value is not demonstrated by the priced list (the definite listed prices total roughly $388, not $1,024); the “71% off” claim depends entirely on the unsupported $1,024 denominator. The landing page says all products launch in November 2026 while Courses 2 and 3 launch sequentially later and the Annual Address ships January 2027. The bundle FAQ speaks as if immediate Gumroad purchase and delivery exist, but checkout is closed and every purchase CTA routes to contact.

Functionally, hash-based “pages” change visible content, but browser Back changes the URL without restoring the prior visible section. All same-origin tracking and architect-contact POSTs return 404. The primary contact form is a `mailto:` handoff, not a delivered web form, yet the page promises a 1–2 business-day response. The newsletter/early-access signup does not exist. The license PDF is legally inconsistent with the public pricing tiers and is visually degraded by severe character-spacing/font rendering, is untagged, and lacks a `main`-site terms framework suitable for consumer and institutional sales.

## 3. Complete route map

| Route | Status | Purpose/verdict |
|---|---:|---|
| `/` | 200 | Five client-side hash states: Home, Newsletter, Products, Who We Are, Contact. |
| `/#home`, `/#newsletter`, `/#products`, `/#who`, `/#contact` | 200 document | Hash states render, but history/back restoration is broken. |
| `/bundle` (`bundle.html` clean URL) | 200 | Annual Bundle sales/pre-launch page. |
| `/privacy` (`privacy.html` clean URL) | 200 | Privacy policy dated June 30, 2026. |
| `/AIAPC-Team-License-Terms-v1.pdf` | 200 | Three-page institutional license terms; visually/legally defective. |
| `/robots.txt` | 200 | Allows all; points to canonical sitemap. |
| `/sitemap.xml` | 200 | Lists `/`, `/bundle`, `/privacy`, last modified July 1, 2026. |
| `/og-image.png` | Static asset | Referenced in home/bundle OG metadata. |
| `/api/track` | 404 | Page-view/scroll instrumentation posts here and silently fails. |
| `/api/lead` | 404 | Architect modal posts here and falsely reports success on resolved 404. |
| unknown route | 404 | Expected static behavior. |

No newsletter archive, issue, course, guide, scorecard, prompt library, cheat-sheet library, Gumroad checkout, customer account, delivery, refund request, training calendar, institutional intake, press kit, accessibility statement, general terms of use/sale, or product-specific policy route exists.

## 4. Complete interaction/control inventory

The companion ledger records every link/control. Main controls include desktop/mobile navigation; five SPA-style content states; more than a dozen “notify/get early access” CTAs; bundle/license/privacy links; contact fields; an inquiry selector; the architect modal; six nonsemantic FAQ accordions; social, portfolio, and byline links.

Key observed behavior:

- Desktop nav switches section and pushes a hash. Focus falls to `<body>`; document title/canonical/OG do not change.
- Browser Back removes the hash but leaves Newsletter visible: source has no `popstate` handler despite a comment claiming back-button support.
- Newsletter/subscribe CTAs route to Contact; no subscription form or Beehiiv embed exists.
- Main contact submission creates a `mailto:` URL, resets immediately, and cannot verify delivery.
- Architect modal POSTs to `/api/lead`; that endpoint is 404, but `.then()` treats any resolved response as success.
- Bundle FAQ questions are clickable `<div>` elements, absent from the accessibility tree as buttons and inoperable by ordinary keyboard activation.
- Bundle “Get the Annual Bundle,” “Notify Me,” and Questions CTAs all route to site contact, not commerce.
- No form submission or external communication was executed in this read-only audit.

## 5. Consumer journeys and observed results

### Free-reader/early-access journey

The value proposition is memorable and the four-section newsletter format is easy to understand. Every subscribe CTA ultimately reveals a contact form, not a newsletter/launch list. Submitting depends on a configured local mail client; webmail-only users may see nothing. There is no consent checkbox, list confirmation, success receipt, unsubscribe mechanism at capture, or proof the email was received. This is a contact inquiry, not subscription.

### Individual-product buyer

The catalog describes courses, mini-guides, a paid archive/tools tier, Annual Address, scorecard, Skills pack, policy kit, and bundle with specific prices. None is purchasable. Product CTAs route to contact and the page repeatedly labels products “launching November 2026,” but timing conflicts internally. Prospective buyers cannot inspect samples, curricula, versions, accessibility formats, prerequisites, author/reviewer credentials by product, license, refund terms, delivery method, update policy, or checkout terms.

### Annual-bundle buyer

The bundle page claims $1,024+ value, 71% savings, $297 first year, $237 year-two renewal, 30-day refund, and immediate Gumroad access after purchase. Checkout is not open. The definite prices displayed are: newsletter $108, six guides $92, Address $47, Skills pack $47, policy kit $47, and generic extras $47+, totaling $388+; the page does not itemize the additional $636 needed to reach $1,024. The public site's paid-tier description also says paid unlocks “archive and tools—not content,” while the bundle says the paid newsletter provides “paid issues, deep dives, bonus essays, and subscriber Q&A.” A buyer cannot determine the actual product.

### Institutional buyer

The public site offers Small Team (up to 5, $500), Department (up to 20, $1,500), and Institution (up to 50, $3,000), with inclusions and renewal capped at +5%. The linked governing PDF instead defines Team up to 25, Institutional 26–200, and Custom 200+, with no matching fees/inclusions/renewal cap. It says licenses do not auto-renew and all fees are non-refundable except law; the bundle page promises a 30-day refund for a different product. No order form, statement of work, service schedule, privacy/data terms, accessibility, recording/training consent, support definition, or enterprise terms exist.

### Educator/clinician/lawyer reliance journey

Products are promoted as professional-grade and as addressing legal ethics, HIPAA, patient communication, research credibility, and policy implementation. No sample or source/review methodology is available. A credential-bearing buyer cannot tell whether any guide is educational only, current as of which date/jurisdiction/product version, reviewed by a licensed attorney/clinician/privacy professional, or suitable for organizational policy. These boundaries are essential before release.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Static content/pages | Working | Three intended clean routes return 200. |
| Hash section switching | Partial | Click works; Back/history restoration fails. |
| Desktop navigation | Partial | Mouse works; anchors lack href and focus moves poorly. |
| Mobile menu | Partial/unverified visually | Main page has expanded/hidden state code; secondary pages only toggle class and stale accessible name/state. |
| Newsletter subscription | Missing | Placeholder comments only; CTAs route to contact. |
| Main contact | Partial/external handoff | `mailto:` only; no delivery confirmation. |
| Architect contact | Broken/false-success | POST endpoint 404; response status ignored. |
| Page/scroll analytics | Broken locally | `/api/track` 404; Vercel scripts separately present. |
| Bundle FAQ | Mouse-oriented only | Nonsemantic div controls; no ARIA/keyboard. |
| Checkout/delivery/account | Missing | No Gumroad links or commerce. |
| Product catalog | Planned | Specific but unavailable and internally inconsistent. |
| Institutional license | Exists, defective | PDF resolves; tiers conflict and visual/accessibility/legal problems. |
| Privacy | Exists, inaccurate in part | Names unused processors and omits implemented architect API/mailto details. |
| SEO basics | Mostly working | Canonicals/OG/robots/sitemap; JSON-LD and SPA states incomplete. |

## 7. Copy and information-architecture findings

Strengths: distinctive name and voice; well-defined audience; four guaranteed newsletter sections; clear separation between editorial and institutional roles; strong product-ladder concept; transparent pre-launch date in many locations; specific page-level metadata.

Material defects:

- “Free. Always,” “Paid doesn't unlock articles,” and the bundle's “paid issues, deep dives, bonus essays” cannot all be true.
- “All products launching … November 2026” conflicts with Courses 2/3 after prior courses and Annual Address January 2027.
- “Every Thursday. No exceptions” is an absolute operational promise before publication exists.
- “No other AI newsletter does either” is an unverifiable universal market claim.
- `$1,024+`, `$727+ saved`, and 71% off are not supported by the displayed price math.
- “~1 month free annually” for $99 versus $108 monthly arithmetic is approximately one month, but bundle uses $108 while main paid annual price is $99; the included value basis must be consistent.
- Perplexity is called “more trustworthy than ChatGPT” based on sourced-search architecture, a broad comparative claim requiring defined use case, test method, date/version, and evidence. Citations do not guarantee source accuracy or claim support.
- “Prompting … Chain-of-thought—getting AI to show its reasoning” is outdated/risky pedagogy. Models' displayed rationales are not reliable access to internal reasoning; teach structured work, assumptions, sources, verification, and concise justifications instead.
- “Professional-grade,” “production-ready,” “future-proof,” “dramatically better,” “consistently outperform,” “safely,” and “calibrated” are objective performance/quality claims without published substantiation.
- Vanda's “1:1 AI coaching,” institutional program, district curriculum licensing, and professional links are asserted without examples, availability, scope, or credentials verification beyond biography.
- Main SPA hides four page-like sections under one URL/title/canonical. It creates five H1s in one document and poor history/share/search semantics.
- “Link coming soon,” missing professional links, obsolete portfolio domain, and 502 RNCollins destinations weaken trust.

The five main sections should be real routes or a single continuous landing page. Pre-launch content needs one authoritative availability table and a strict taxonomy: available, waitlist, planned, and illustrative roadmap.

## 8. Science/law/policy/regulatory claim ledger

| Claim/topic | Verdict | Required boundary/correction |
|---|---|---|
| ABA Formal Opinion 512 “requires” duties under Rules 1.1 and 5.3 | Directionally incomplete | The ABA opinion addresses competence, confidentiality, communication, candor, supervision, and fees under applicable Model Rules; state adoption/ethics law controls. Cite and date the source, cover Rules 1.6, 3.1/3.3, 5.1/5.3, and 1.5, and avoid universal legal advice. |
| “Attorney review is legally required” labels | Jurisdiction/task dependent | Explain professional responsibility and court/client requirements; do not reduce competent verification to a universal label. Require current jurisdiction-specific review. |
| Gemini/AI with patient-adjacent data and BAAs | High-stakes and underspecified | HHS says a cloud provider creating/receiving/maintaining/transmitting ePHI for a covered entity/business associate is generally a business associate and requires a compliant BAA plus risk analysis. A BAA is necessary in relevant relationships but not sufficient; product configuration, permitted uses, minimum necessary, security, workforce policy, state law, and vendor terms matter. |
| AI-generated patient communication/documentation can be used “safely” | Unsupported without controls | Specify clinical review, source verification, patient consent/notice as applicable, language/accessibility, bias, record integrity, privacy/security, escalation, and prohibition on unsupported diagnosis/treatment. Qualified clinical/legal review required. |
| Perplexity “more trustworthy” than ChatGPT | Unsubstantiated comparative claim | Define versions/date/tasks/data and evaluate citation correctness, source quality, synthesis fidelity, omissions, and reproducibility. Replace with “may make source inspection easier” unless tested. |
| “Production-ready” Skills and consistent output | Unsubstantiated efficacy claim | Publish test matrix, limitations, versions, verification controls, and regulated-use warnings. Consistency is not accuracy or compliance. |
| AI Readiness Scorecard is “calibrated” and produces a personalized report | Validation claim without evidence | Publish construct, item/scoring development, validation, uncertainty, privacy, professional boundaries, and version. Until then say unvalidated self-reflection prototype. |
| AI Policy Implementation Kit | High-stakes future product | Policies require organizational, workforce, security, privacy, IP, procurement, records, accessibility, discrimination, sector, and jurisdiction review. Templates must be dated and professionally reviewed, not represented as turnkey compliance. |
| Discount/value/refund/renewal promises | Consumer-protection exposure | Objective price/savings and product-content claims need a bona fide, current reference price and clear terms. FTC enforcement emphasizes substantiation of objective AI/product claims. Reconcile every price, delivery, refund, renewal, and availability statement before accepting payment. |

Primary anchors: ABA Formal Opinion 512 overview (`americanbar.org`, Aug. 30, 2024); HHS OCR cloud/HIPAA guidance (`hhs.gov/hipaa/.../cloud-computing`); FTC substantiation/enforcement on AI performance claims, including Workado and accessiBe (`ftc.gov`, 2025). This is an issue-spotting audit, not legal, medical, tax, education, privacy, or business advice.

## 9. Accessibility and responsive findings

Positive: `lang="en"`; main site has nav/main/footer; labeled primary contact fields; native field types; mobile media rules; some hamburger ARIA state; dialog role/`aria-modal` on architect modal.

Defects:

- No `:focus-visible` design and widespread inline `outline:none`; keyboard focus can be invisible or depend on browser defaults.
- No `prefers-reduced-motion`; smooth scrolling/transitions and animated FAQ/menu behavior ignore motion preference.
- Desktop and mobile navigation “links” on the main page are `<a>` without `href`, so they are generally not keyboard-focusable/semantically links.
- Section changes do not move focus, update title, or announce new content. Browser Back desynchronizes URL and content.
- Secondary pages have no `<main>` landmark.
- Bundle FAQ controls are clickable divs with no button role, tabindex, accessible name/state, keyboard handler, or `aria-controls`.
- Bundle/privacy hamburger toggles a class but does not update `aria-expanded`/`aria-hidden`; its label always says “Open.”
- Architect modal has no accessible label relation (`aria-labelledby`), field labels, initial focus, focus trap/return, Escape close, error/status region, or robust email validation.
- Primary contact status is not a live region; form resets before verifying the mail client opened.
- PDF is untagged, has no document title/author metadata, and renders with severe unnatural character spacing/overlap across all pages. It is not suitable as an accessible legal document.
- Decorative emoji semantics/alt handling and contrast need manual review.
- Desktop production had no horizontal overflow at 1348 px. Source contains responsive rules, but a browser viewport-resize capability was unavailable, so exact mobile/reflow/zoom/contrast/screen-reader results remain unverified.

## 10. Brand-architecture findings

AIAPC has a credible independent brand proposition and a distinct partnership story. The product architecture—free editorial front door, individual learning products, annual bundle, team licenses, educational editions—can support an independent property. The site should be represented as AIAPC, co-created/co-published by RN and Vanda, with RN Builds/Aloha implementation attribution only if factually approved.

Current architecture is confused by inconsistent ownership language: footer/license say RN & Vanda; privacy says both AIAPC and Aloha AI are owned/operated by RN; JSON-LD lists only RN as author; public role copy calls it co-created. Define legal owner, publisher, contracting/licensing parties, IP ownership, revenue/refund responsibility, privacy controller, and Aloha's role. Do not use the privacy policy to collapse a co-venture and Aloha AI without a documented basis.

## 11. Business-model and conversion findings

The proposed funnel is thoughtful but almost entirely simulated: free newsletter → $9/$99 paid archive/tools → $12–$22 guides → $57/$87/$117 courses → $297 bundle → $500/$1,500/$3,000 institutional licenses. Today there is no list capture, content archive, checkout, delivery, support system, institutional order flow, or product evidence.

Before launch:

- choose whether editorial content is wholly free or partly paid;
- reconcile roadmap and availability;
- substantiate value/discount math with real à-la-carte products offered for meaningful periods;
- establish Gumroad/product delivery and test refunds/renewals;
- create product samples, version/update policy, reviewer credentials and high-stakes disclaimers;
- reconcile institutional seat tiers, deliverables, calls/office hours, recording, custom Skills ownership/confidentiality, support response, audit-letter scope, renewals, and terms;
- define paid archive/tool accessibility and continuity if the venture stops publishing;
- remove countdown/urgency/value theater until fulfillment is operational.

## 12. Security, privacy, data, and operational findings

- Positive headers: HSTS, frame denial, nosniff, strict referrer, camera/microphone/geolocation restrictions.
- CSP allows `'unsafe-inline'` and `'unsafe-eval'`; virtually all CSS/JS is inline. Refactor to nonce/hash/static assets and remove unsafe directives.
- Same-origin `/api/track` and `/api/lead` do not exist. Tracking fails silently; architect contact falsely succeeds on HTTP 404 because `response.ok` is ignored.
- Vercel Insights/Speed Insights are loaded, while privacy says only aggregated/anonymized analytics and categorically “does not collect IP addresses.” Clarify transient/network processing, fields, retention, vendors/subprocessors, and current implementation rather than making an absolute statement.
- Privacy says Beehiiv, Formspree, and Gumroad are used; no Beehiiv/Gumroad integration exists and primary contact uses `mailto:`, not Formspree. Conversely, the architect endpoint and email-app disclosure are omitted.
- Privacy combines AIAPC and Aloha AI but only documents AIAPC site behavior; verify applicability and publish property-specific processing inventories.
- No general Terms of Use/Sale, accessibility, copyright/licensing boundaries for individual products, disclaimers, DMCA/contact, refund workflow, subscription/renewal authorization, tax, or customer support policy exists.
- License PDF lets the licensor amend terms and bind continued use, but provides no version archive/acceptance mechanism; legal review required.
- Repository has no test/build validation, link checker, content/price single source of truth, dependency pipeline, environment config, monitoring, error reporting, release checklist, or rollback documentation.

## 13. Defects ranked by severity

### P0 — blocking commercial release

1. Product, price, free/paid, launch, bundle-value, seat-tier, refund, renewal, governing-law, and ownership terms materially contradict one another.
2. `$1,024+`/71%-off value claim is not substantiated by the displayed catalog.
3. No functioning subscription, checkout, delivery, or institutional-order system despite product-sale language.

### P1 — serious

1. License PDF conflicts with sales page and is visually/accessibly defective.
2. Privacy policy does not match actual processors/flows and overstates analytics anonymity/IP noncollection.
3. Back/history behavior breaks visible page/URL consistency.
4. Architect contact falsely reports success on 404; tracking endpoint absent.
5. High-stakes legal/healthcare/policy/assessment products lack source, reviewer, jurisdiction, version, and reliance boundaries.
6. Unsubstantiated comparative/performance claims (“more trustworthy,” “production-ready,” “calibrated,” “future-proof,” “consistently outperform”).
7. RNCollins ecosystem links returned 502 during the audit; portfolio link is obsolete.

### P2 — material

1. Nonsemantic hash nav and FAQ; missing focus/reduced motion/dialog accessibility.
2. Five pseudo-pages share one canonical/title and unreliable history.
3. Secondary pages lack main landmarks/structured data; JSON-LD names only RN and generic “Aiapc Site.”
4. Social/professional links incomplete; @aicakeweekly existence/status unverified.
5. No general consumer terms, product samples, accessibility statement, review-copy workflow, or press assets.

### P3 — polish

1. Replace absolute/universal marketing language with evidence-backed, dated copy.
2. Tighten product-card repetition and distinguish available/waitlist/roadmap visually.
3. Add real content previews and a versioned launch calendar.

## 14. Exact remediation plan

1. **Create one product truth source** (structured JSON/content file) for status, date, price, tier, inclusions, free/paid boundary, refund, renewal, fulfillment, and terms; render `index.html`, `bundle.html`, and documents from it.
2. **Legal/business reconciliation:** with counsel, establish entity/contracting parties, AIAPC/Aloha relationship, IP, revenue, seat definitions, term/renewal, refund, governing law/forum, amendment/acceptance, recordings, support, custom-work ownership/confidentiality, accessibility, disclaimers, privacy controller, and taxes. Regenerate the PDF and terms pages from approved language.
3. **Correct bundle math:** itemize every included product and bona fide individual price; remove `$1,024+`, `$727+`, and 71% until demonstrable. State treatment of unpublished/cancelled products and bundle-window timing.
4. **Resolve editorial model:** choose free-all-content plus paid archive/tools, or paid editorial extras; rewrite every occurrence consistently.
5. **Resolve schedule:** use available/waitlist/planned dates per product. Do not say all launch in November when sequencing/January delivery says otherwise.
6. **Implement subscription:** integrate the selected provider, separate newsletter/marketing consent, double opt-in as appropriate, accessible errors/success, privacy link, unsubscribe, and tested list delivery. Remove placeholder CTA claims until ready.
7. **Implement commerce/fulfillment:** verified checkout links, receipts, terms acceptance, delivery, account/access, refund/cancellation/renewal notices, customer support, test purchases/refunds, and monitoring. Keep “Notify” distinct from “Buy.”
8. **Repair routing:** make Newsletter/Products/Who/Contact actual routes or a continuous one-page document. If retaining hashes, use real hrefs, `popstate`/hashchange, replace-vs-push discipline, focus/title updates, announcements, and shareable state.
9. **Repair forms/API:** remove duplicate architect modal or give it a real endpoint; check `response.ok`, show persistent retryable errors, prevent false resets, validate email, rate-limit, spam-protect, log consent/receipt, document retention. Replace `mailto:` as primary form or label it explicitly.
10. **Accessibility:** visible focus, no blanket outline removal, semantic links/buttons, full FAQ accordion ARIA/keyboard, main landmarks, labeled trapped/returning modal, Escape, live regions, reduced motion, WCAG 2.2 AA desktop/mobile/zoom/screen-reader test.
11. **PDF:** regenerate with embedded legible fonts, normal kerning, correct pagination, document metadata, bookmarks, tagged structure, accessible reading order, consistent headings/footer, and a stable HTML terms equivalent; render/inspect every page.
12. **Privacy:** inventory actual Vercel/email/API/newsletter/commerce flows and update processors, fields (including network identifiers), purposes, retention, lawful/consent basis as applicable, rights, security, cross-property scope, children, changes, and controller/contact. Do not list unused services as active.
13. **Substantive product governance:** citations/current-as-of dates, change logs, named qualified reviewers, jurisdiction/product/version limits, no professional advice, verification checklists, incident/correction policy, assessment validation before “calibrated,” and performance claim substantiation.
14. **SEO/brand:** Organization/Person/Website/Product structured data reflecting both founders and accurate ownership; real per-route titles/canonicals; update RN Selected Work/Aloha links; monitor external links.
15. **Operations:** README, local preview/build script, CI for HTML/links/a11y/structured data/price consistency/PDF render, deployment smoke tests including APIs, monitoring, backups, content calendar, accountable owners, launch checklist, rollback.

## 15. Recommended estate disposition

**P — independent public property, pre-launch and release-blocked.** AIAPC has its own audience, editorial/product system, brand, partnership, routes, pricing model, and public deployment. It should not be collapsed into Aloha AI, NSAG, or a generic RN Builds item. P does not mean “ready to sell”: all P0 and material P1 defects must close before commerce or strong performance/value claims go live.

## 16. Proposed RN Selected Work case-study corrections

Create an independent case-study entry only with explicit stage truth:

> **AI is a Piece of Cake (AIAPC)**  
> A pre-launch AI-literacy editorial and product system co-created by RN Collins and Vanda Collins for lawyers, physicians, executives, and educators. The current public prototype defines a free weekly newsletter format, a planned learning/product ladder, annual-bundle concept, and institutional licensing model. Newsletter publication and paid-product fulfillment are planned, not yet operational.

Case-study scope may discuss brand strategy, audience segmentation, editorial architecture, product ladder, pricing hypotheses, content/system design, and the deployed static prototype. It must not claim current subscribers, issues, revenue, customers, working subscription/checkout, delivered courses/guides, validated scorecard, institutional deployments, district licenses, production-ready policy/health/legal tools, or verified 71% savings.

Links should separately expose **Visit pre-launch site** and **Read case study**. Do not label the license PDF or roadmap as a completed product. Attribute the co-creation and ownership relationship accurately after reconciliation.

## 17. Evidence appendix

### Repository/deployment evidence

- GitHub repository `rn-collins/aiapc-site`, ID `1285739409`, private, main.
- Vercel project `prj_JezysFlSTBWHIsWpu0H7eKqra0S1`; production deployment `dpl_CwPh9ss9Arwa94WQvLJp9zXEr5Qx`; exact commit `0929aabf9be8208f121066f543aae1e35c731915`; READY.
- Build log: cloned linked repo/commit; `vercel build`; static output in 24 ms; no application compilation/tests.
- HTTP checks: `/`, `/bundle`, `/privacy`, robots, sitemap, PDF 200; `/api/track`, `/api/lead`, unknown route 404.
- Browser: production opened; Newsletter click changed active state/hash; Back removed hash but left Newsletter active; no desktop overflow at 1348 px.
- Source: complete root inventory and all HTML/config/text/source controls reviewed.
- PDF: extracted with Poppler and rendered at 130 DPI; 3 letter pages; untagged; no title/author metadata; severe glyph-spacing defects on every page.

### External/claim sources

- ABA, Formal Opinion 512 overview: https://www.americanbar.org/advocacy/governmental_legislative_work/publications/washingtonletter/august-24-wl/ai-ethics-guidance-0824wl/
- HHS OCR, HIPAA and cloud computing: https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html
- FTC, Workado AI accuracy substantiation action: https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-order-requires-workado-back-artificial-intelligence-detection-claims
- FTC, accessiBe AI/WCAG claims action: https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-order-requires-online-marketer-pay-1-million-deceptive-claims-its-ai-product-could-make-websites

### Explicitly unverified

- No submissions, subscriptions, purchases, refunds, emails, or API writes were performed.
- Beehiiv, Formspree, Gumroad accounts/configuration, unpublished products, archives, subscriber/customer records, revenue, district/institutional engagements, review copies, coaching, workshops, peer reviews, and Vanda's professional links were not available in this repository.
- RNCollins routes returned 502 at audit time; this establishes observed availability only, not permanent status.
- Twitter/X handle ownership and availability were not verified.
- Exact mobile/zoom/screen-reader/contrast behavior remains unverified because the connected browser did not expose viewport resizing; source and desktop behavior were inspected.
- Legal validity/enforceability of the license, privacy policy, pricing/reference-price claims, governing-law/forum, refund/renewal terms, and co-ownership structure requires counsel.

