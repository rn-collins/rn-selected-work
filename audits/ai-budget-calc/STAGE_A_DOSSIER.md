# AI Build Budget Calculator — Stage A Recertification Dossier

Audit date: 2026-08-13 (HST)  
Companion: [`ROUTE_CONTROL_LEDGER.md`](./ROUTE_CONTROL_LEDGER.md)  
Disposition: **P — canonical portfolio build; public release blocked pending tax, security, truthfulness and accessibility remediation**

## 1. Asset identity

- **Canonical site:** `https://ai-budget-calc-red.vercel.app/` (HTTP 200, 2026-08-13).
- **Repository:** private `rn-collins/ai-budget-calc`, repository ID `1285739357`, default `main`.
- **Vercel:** project `prj_ZbVFglRZGcJDhYFZgy2Nxje8iTDZ`; canonical alias plus project/branch aliases; latest recorded production deployment `dpl_oNYtsgXVXBUwmqtmmg2J1vgqQC9Y`, READY, commit `4b50e1e1c71cdabef64afe4c82043c6c207de232`.
- **Actual product:** one static HTML calculator plus one serverless lead endpoint. The free calculator estimates professional-services hours × an editable hourly rate, adds an editable percentage labelled GET/tax, optionally adds a fixed 14.13% “SE tax,” supplies four authored presets, permits phase editing/add/delete/undo, and exports CSV. A blurred preview markets a not-yet-live paid product. A lead form promises a free Google Sheet and launch notices. A second modal sends contact leads to `rn-api`.
- **Parent/practice:** Aloha AI productized planning/lead-generation tool. The embedded JSON-LD incorrectly calls it “NSAG-aligned”; it is not NSAG and should not inherit NSAG authority.
- **Privacy/data:** calculator inputs remain in page memory and local CSV. Lead form sends name, email, role, build description, source and URL to `/api/leads`; the endpoint attempts Redis storage, Slack notification and Resend email. Contact form sends name, email and message to RN API. Vercel Analytics/Speed Insights scripts and sessionStorage UTM capture are configured; scroll tracking calls a missing `/api/track` route.

## 2. Executive verdict

The core editable labor calculator works as arithmetic: sum phase low/high hours, multiply by the selected rate, and export the rows. The default model is transparent enough to demonstrate scoping decomposition and is useful as a conversation starter.

It is not a defensible “real fee range,” tax calculator, market benchmark, quote or complete AI-build budget. The phase hours, rates and locked cost previews have no methodology, sample, source, confidence model, date-specific price registry or validation. It omits staffing mix, parallelism, contingency, change orders, project management, stakeholder time, procurement, data acquisition/licensing, evaluation volume, accessibility, security/privacy/legal review depth, travel, support/SLA, provider/token/model assumptions, storage/egress, observability, incident response, maintenance, depreciation and margin. Low/high can be inverted or negative.

The tax implementation is materially misleading. The editable 4.5% multiplier is labelled Hawaiʻi GET but Hawaiʻi distinguishes the 4% GET plus county surcharge from the maximum amount visibly passed to a customer (4.712% in Honolulu and participating counties through 2030), with sourcing/activity/exemption facts. The fixed 14.13% is derived from 92.35% × 15.3%, but federal SE tax applies to net earnings and depends on entity/taxpayer status, expenses, annual Social Security wage base, other wages and Medicare rules. Adding it to client project cost as a flat gross-revenue line is not an IRS calculation.

The release-blocking defect is the lead endpoint. It is an unauthenticated email/Slack/Redis relay with no rate limit, bot control, origin enforcement, schema/length validation or HTML escaping. An attacker can choose a victim email and inject HTML through `name` or `building` into a message sent from RN's verified domain. Every downstream failure is swallowed and the endpoint still returns 200; the client also ignores non-2xx and always says the sheet was sent. This creates spam/phishing, reputation, privacy and false-success risk.

**Verdict:** retain one portfolio case because the calculator is a distinct working artifact, but immediately disable public lead/email processing and remove decision-grade/tax/currentness claims until rebuilt.

## 3. Complete route map

- `/` — static calculator, HTTP 200.
- `/api/leads` — GET 405; POST is consequential and was not invoked. Intended Redis/Slack/Resend fan-out.
- `/api/track` — 404 although the page POSTs after scrolling 300 px.
- `/robots.txt`, `/sitemap.xml`, `/privacy`, arbitrary paths — 404. HTML nevertheless links `/sitemap.xml`.
- external: Aloha AI (200), RN Builds legacy URL (308 to RN Selected Work), Zero → Frontier (200), Set for Life (destination could not be verified through current access), Google Drive sheet (only embedded in server email), RN API contact endpoint.
- metadata incorrectly identifies canonical social/schema URL as `https://ai-budget-calc.vercel.app`, not the live `-red` alias; no canonical `<link>` exists.

## 4. Complete interaction/control inventory

Inventory: hourly-rate number; GET/tax-rate number; optional project name; four preset buttons; two-stage SE-tax visibility/enable checkboxes; 11 initial editable phase names, 22 hour fields and 11 deletes; add phase; undo delete; CSV export; paid-preview/preorder scroll CTA; lead fields name/email/role/building and submit; two related-tool links; Aloha AI and RN Builds footer links; two contact-modal openers; three contact fields, send and cancel; overlay click-close. Totals update in the DOM. No save/import/reset/default, currency, jurisdiction/entity, methodology, source, assumptions, scenario comparison, staffing, vendor-cost or uncertainty controls exist.

No form submission was made. Source behavior and safe GETs were inspected.

## 5. Consumer journeys

### Founder/buyer

Default decomposition (300–490 hours at $150/hour) yields $45,000–$73,500 before the displayed 4.5% line and $47,025–$76,807.50 after it. This is editable arithmetic, not evidence that the project can be delivered within that range. “Real fee range in seconds—not a guess” materially overstates authored guesses.

### Consultant/builder

CSV makes a useful starting worksheet. It has no notes/assumptions/version/date, no validity warnings per row, no low≤high enforcement and no total row for PS+tax. SE tax is a personal/entity tax-planning issue, not a universally billable project line.

### Legal/healthcare buyer

Presets name privilege review, HIPAA gap analysis, PHI de-identification, penetration testing, clinical UAT, WCAG and SMART on FHIR. Hours alone cannot establish compliance, privilege, security, clinical validity or accessibility. The presets need jurisdiction/product/risk context and must be labelled illustrative, not standard scopes.

### Lead/preorder prospect

The $67 “pre-order” button only scrolls to a free-sheet/launch-notice form; no purchase or reservation occurs. The form bundles sheet delivery with future marketing. Success is shown even when the endpoint or email fails. The email advertises a $97/$67 future product and uses a mailto “unsubscribe,” not a managed opt-out.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Labor arithmetic | Working | Sum hours × one rate. |
| Editable phases/add/delete/undo | Working in source | In-memory only. |
| Four presets | Working but unsupported | Authored hours/rates; no methodology. |
| GET/tax | Mathematically working, substantively misleading | Simple user percentage × gross PS. |
| SE tax | Broken as tax estimate | Fixed 14.13% × gross PS; ignores taxpayer facts/net earnings/limits. |
| CSV | Working/partial | Client Blob; formula results only, weak context. |
| Full-budget estimate | Missing | Materials/ops/mobile are blurred static marketing preview. |
| Paid product/preorder | Not available/mislabelled | CTA is a lead-form scroll, no order. |
| Lead storage/email | Unsafe and false-success | Unauthenticated fan-out; response failures ignored. |
| Contact | Partial/unsafe dependency | Cross-origin RN API; non-2xx treated as success and modal closes. |
| Analytics | Partial | Vercel scripts configured; UTM session storage; `/api/track` 404. |
| Sources/currentness | Missing | No public methodology/source/as-of registry. |
| Privacy/terms/opt-out | Missing | No page or form-adjacent notice/consent controls. |

## 7. Copy and information architecture

Material corrections:

1. Replace “get a real fee range … not a guess” with “create an editable illustrative labor scenario.”
2. Remove “Rates current as of 2026” unless each default rate/hour/material/ops input has a source, as-of date, jurisdiction/provider/model and review owner.
3. Rename “GET / tax rate” to a configurable **project surcharge/allowance** until jurisdiction/entity/activity-specific logic exists; do not default tax advice.
4. Remove SE tax from customer budget totals or move it to a separately sourced sole-proprietor planning illustration that starts with net profit and annual taxpayer facts.
5. Change “Paid version” and “Join the Pre-order List — $67” to “Planned full version / join launch-interest list”; no order occurs.
6. Change “You're on the list / Check your email” to verified pending/success/error states based on actual storage and email-provider results.
7. Explain what “PS” means before using the abbreviation.
8. Add methodology, assumptions, exclusions, version, sources, privacy, terms, correction and support sections.
9. Remove “NSAG-aligned framework” from JSON-LD.

## 8. Cost, tax, legal and policy claim ledger

| Claim/input | Assessment | Required treatment |
|---|---|---|
| $150/hour default; $125 startup | Unsupported | User-provided scenario or sourced market/internal rate with date/sample; not benchmark. |
| Phase hour ranges | Authored estimates | State basis, project archetype, team/skill mix, inclusions, confidence and calibration. |
| “Rates current as of 2026” | Unsupported freshness claim | Source and last-reviewed ledger or remove. |
| LLM API $150–400 dev; $75–400/mo | Provider/model/usage-free | Use token/request/cache/batch/model/provider assumptions and live price sources. |
| Vector DB $60–150/3 months | Vendor/scale-free | Specify records, queries, dimensions, retention, replicas, egress/provider. |
| Security audit $8k–15k | Unscoped | Define audit type, surface, standard, assessor, retest and deliverables; not universal. |
| E&O $55–76/mo and $662–907 annual | Unsupported and internally inconsistent | 55×12=660; 76×12=912. Source quote context or remove. |
| Hawaiʻi GET 4.5% | Tax rate/pass-on conflation | Official Hawaiʻi source: county surcharge and maximum pass-on differ; require county/activity/sourcing/tax professional. |
| SE tax 14.13% on PS | Invalid simplification | IRS applies 15.3% structure generally to 92.35% of **net earnings**, subject to annual/taxpayer rules. Do not treat as gross project fee. |
| Legal/healthcare preset hours | Not compliance evidence | Label illustrative; require applicable law, product classification, data/clinical risk and qualified review. |
| WCAG 2.1 AA phase | Outdated/incomplete standard framing | Define target/current organizational requirement and verify outcomes, not hours. |

Primary checks: Hawaiʻi Department of Taxation county-surcharge/pass-on guidance (updated 2024 but effective dates through 2030); IRS Topic 554 and Schedule SE materials current in 2026; FTC CAN-SPAM sources for marketing opt-out obligations. This dossier does not give tax/legal advice.

## 9. Accessibility and responsive findings

Positive: native form controls/buttons, visible focus on some inputs/buttons, email type, viewport and 600/480 px CSS adjustments.

Serious gaps: no `<main>` or h1; headings start at h2/h3; most labels lack `for`/wrapping association; dynamic phase inputs have no accessible names or semantic table headers; totals are not live regions; delete buttons rely on repeated title with no phase context; presets/SE controls lack grouping/instructions; success/error states are not announced; modal has no dialog/aria-modal/name, focus move/trap/return or Escape close; blurred locked inputs remain in the accessibility tree and may be keyboard-focusable; locked content is visually obscured but semantically exposed; fixed contact button can overlap content; the fixed-width five-column grid can overflow narrow screens; state relies on color/blur; no reduced-motion rule for smooth scroll/transitions; no skip link, accessibility statement or alternate format. Browser automation was unavailable, so keyboard/screen-reader/zoom/mobile execution remains unverified.

## 10. Brand architecture

Correct relationship: **Aloha AI owns/operates the calculator; RN Selected Work documents it. NSAG has no role.** Remove the JSON-LD “NSAG-aligned” claim. “Contact the Architect” inflates a simple product-support action; use “Contact Aloha AI” or “Get scoping help.” Legacy RN Builds link should point directly to RN Selected Work. High-stakes EOLPC/legal/healthcare presets must not imply clients, validated vertical expertise or compliance outcomes.

## 11. Business model and conversion

The free labor worksheet can be a useful Aloha AI lead magnet and the full cost model could be a small paid template. The present funnel is not commercially ready: no actual product, checkout, delivery terms, refund/license/update/support policy, sample guide, source methodology or launch date. “Pre-order” and founding-buyer pricing create an offer without an order mechanism. The email claims a 35-page guide although the public page only says “practitioner's guide.” Separate free-sheet transactional consent from optional launch marketing; define the seller/entity, product contents, format compatibility, license, tax, support and refund terms.

## 12. Security, privacy, data and operations

### P0 abuse path

`/api/leads` accepts arbitrary cross-origin-style POST data without origin check, CAPTCHA, rate limit, auth, schema/length validation or email verification. It interpolates unescaped `name` and `building` into HTML sent by Resend to the caller-supplied email and into Slack markdown. This can be abused to send injected/spoof-like content from RN's verified domain, flood Slack/Redis, consume email quota and damage sender reputation. Disable until hardened.

### False success and data governance

Redis, Slack and Resend calls catch errors and ignore HTTP status; the handler always returns 200. The browser ignores `/api/leads` response status and always promises sheet delivery. Contact submission closes on any resolved RN API response, including 4xx/5xx. There is no privacy notice, controller identity, purpose separation, consent record, retention, deletion/access request, processors, international transfer, security, incident route or marketing preference center. Redis keys have no TTL. Slack duplicates PII/build details. The email's mailto opt-out is not a reliable automated suppression mechanism.

### Client/security

Phase names are inserted into `innerHTML` without escaping when rows re-render; a crafted phase name can execute client-side HTML/script event handlers, aided by CSP `unsafe-inline`/`unsafe-eval`. It is primarily self-XSS today because state is not shared, but must be fixed before import/share/persistence. CSP otherwise supplies frame denial, nosniff, referrer, permissions and HSTS headers. `/api/track` is missing and creates routine 404 traffic. UTM values persist for the tab session without notice. No tests, package/build manifest, README or source methodology were found; static deployment may work, but release verification is absent.

## 13. Defects by severity

### P0 — blocking

1. Unauthenticated `/api/leads` is an HTML-injectable email/Slack/Redis abuse relay.
2. Lead and contact flows assert/hide as success without checking downstream success.
3. Tax outputs are presented as GET/IRS calculations despite materially incomplete/wrong bases.

### P1 — serious

1. Unsupported “real fee” and “rates current as of 2026” claims.
2. No privacy/marketing consent/retention/functional suppression framework.
3. Phase-name DOM XSS on re-render.
4. High-stakes legal/healthcare presets imply deliverable/compliance adequacy from hours.
5. Inputs allow inverted/negative/nonsensical scenarios and no uncertainty/assumption record.

### P2 — material

1. Accessibility semantics/modal/locked-content/reflow failures.
2. Broken `/api/track` and missing sitemap despite declared link.
3. Wrong OG/schema URL; no canonical; NSAG conflation.
4. Paid-product/preorder copy without product/checkout/terms.
5. Static preview math inconsistency and no source registry/tests.

### P3 — polish

1. Define PS; simplify duplicate contact/footer elements.
2. Add reset/scenario compare/import and explicit CSV total/assumptions.

## 14. Exact remediation plan

1. **Immediately disable `api/leads.js` email/Slack fan-out** or protect with same-origin/CSRF strategy, bot defense, IP/email rate limits, strict schema/length/type validation, email verification, neutral text-only templating/HTML escaping, abuse monitoring and provider-result checking.
2. **Truthful delivery:** return distinct storage/email outcomes; client must await `response.ok`, show pending/success/error/retry, and never promise email absent provider confirmation.
3. **Consent/privacy:** separate free-sheet delivery from optional marketing checkbox; add controller/processors/purpose/retention/deletion/security/preferences; TTL Redis; minimize Slack PII; managed unsubscribe/suppression and sender postal/legal requirements.
4. **Formula model:** remove fixed GET and SE defaults. Add jurisdiction, currency, entity/tax treatment and explicit user-provided allowances; link official sources/as-of dates. Prefer excluding personal taxes from customer budget.
5. **Methodology:** publish every preset phase/range inclusion, team/rate assumptions, basis, validation status, uncertainty and last review. Replace provider costs with configurable unit economics.
6. **Input correctness:** enforce finite nonnegative values, low≤high, practical limits and validation messages; use decimal-safe calculations/rounding policy.
7. **XSS:** construct phase rows with DOM APIs/`textContent`, never interpolate user values into `innerHTML`; remove `unsafe-eval` and nonessential inline scripts/styles via nonce/hash/external assets.
8. **Accessibility:** semantic main/h1/table or labelled grid; explicit labels/IDs; named row controls; live totals/errors; proper dialog focus/Escape; hide locked preview from AT; responsive stacked alternative and zoom/keyboard/AT tests.
9. **Metadata/routes:** canonical `-red` URL everywhere or promote a stable custom domain; remove NSAG; add real robots/sitemap/privacy/terms/methodology/not-found.
10. **Commercial offer:** rename pre-order to interest list until checkout exists; define seller, contents, guide length, delivery, license, updates, support/refunds and launch status.
11. **Testing:** add unit tests for all formulas/presets/validation/CSV, API abuse/failure states, XSS, accessibility, routes, links and mobile; make deployment run them.

## 15. Recommended estate disposition

**P — one canonical public portfolio build, release-blocked.** Its core value is a distinct interactive scoping artifact, not its unsourced defaults or unsafe funnel. Do not merge into NSAG or count the planned paid tool separately. Keep public only after P0 controls; otherwise temporarily disable the lead/API and label estimates illustrative.

## 16. Exact RN Selected Work case-study corrections

- **Title:** `AI Build Labor Scenario Calculator`
- **Category:** `Business planning + estimation prototype`
- **Practice:** `Aloha AI`
- **Status:** `Live editable labor calculator · illustrative defaults · lead funnel release-blocked`
- **Purpose:** `Make an editable professional-services labor scenario visible by phase before project-specific discovery and quotation.`
- **Noticed:** `AI-build conversations often collapse different delivery phases into one number, obscuring the assumptions a buyer and builder need to review.`
- **Researched:** `The prototype organizes common delivery phases and configurable low/high hours. Defaults and vertical presets are authored planning assumptions, not validated market benchmarks. Tax, vendor, operating and compliance costs require current project-, jurisdiction-, provider- and entity-specific review.`
- **Built:** `A browser-based phase editor that sums low/high hours at a user-set rate, supports add/delete/undo and illustrative presets, and exports the working rows as CSV. The public version does not provide a complete lifecycle budget or quote.`
- **Serves:** `Builders and prospective buyers beginning a scoped estimation conversation.`
- **Evidence/status:** `The labor arithmetic and CSV are implemented. The current tax labels/formulas, preset currentness and lead-delivery funnel did not pass recertification: figures are not quotes, guarantees, tax/financial/legal advice or independently validated benchmarks; the planned paid version is not yet available.`

Keep separate `Read case study` and `Open calculator` links. Do not say “real fee range,” “rates current as of 2026,” “IRS formula,” or imply that the blurred paid tool is live.

## 17. Evidence appendix and limits

Inspected read-only: canonical HTML/headers; complete `public/index.html`; `api/leads.js`; `vercel.json`; Vercel project/deployments; all routes listed above; RN Selected Work record; official Hawaiʻi Department of Taxation, IRS and FTC sources. No source, portfolio or master-ledger edit and no POST/email/contact action.

Safe verification found root 200, lead GET 405, track/robots/sitemap/privacy 404, external redirects/statuses as recorded. Browser automation was unavailable, so live input/keyboard/mobile/CSV/console behavior is source-verified or explicitly unverified. Provider environment values, Redis contents, Slack, Resend delivery, Google Sheet content/access, RN API internals and actual paid product were not accessed.
