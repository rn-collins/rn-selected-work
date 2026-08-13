# Stage A dossier — `aloha-ai-consulting-an6n`

Audit date: 2026-08-12 HST / 2026-08-13 UTC  
Auditor mode: read-only  
Recommended disposition: **D — duplicate/alternate deployment**  
Canonical project: **`aloha-ai-consulting`**  
Canonical public URL: **`https://aloha-ai-consulting.vercel.app`**

## 1. Asset identity

| Field | Evidence-backed finding |
|---|---|
| Vercel project | `aloha-ai-consulting-an6n` (`prj_ggjYRARFCDsHZUfKUr0cjbMezZCe`) |
| Alternate aliases | `aloha-ai-consulting-an6n-rn-collins.vercel.app`; `aloha-ai-consulting-an6n-git-main-rn-collins.vercel.app` |
| Repository | `github.com/rn-collins/aloha-ai-consulting`, public, default branch `main` |
| Latest attempted source | Commit `57dc643aaeed0846b5e10148e82d91f07e36c7f9` (“Complete Decision Desk learner review issue”) |
| Latest alternate deployment | `dpl_CyozRALtiXaGqPpKM5kvCK6pqPwo`, production target, `ERROR` |
| Canonical Vercel project | `aloha-ai-consulting` (`prj_OQMHEHVG1aPFfl3bS6q22Jx9jCO3`) |
| Latest canonical deployment | `dpl_EHV5ZAe3Ddnuz13sQpPSF3Qvihxb`, same timestamp/source update, `READY` |
| Parent practice | Aloha AI, RN’s client-facing strategy and build practice |
| Public status | Alternate: protected and non-indexable, failed latest production deployment. Canonical: public. |
| Privacy | Alternate aliases redirect to Vercel SSO and send `x-robots-tag: noindex`. Application source is public on GitHub. |

This relationship is not inferred from the similar name. Vercel deployment metadata for both projects identifies the same GitHub organization, repository ID `1257396541`, repository `aloha-ai-consulting`, branch, and commit sequence. The alternate is a second Vercel project attached to the canonical repository.

## 2. Executive verdict

`aloha-ai-consulting-an6n` is not another Aloha AI build and should not receive another RN Selected Work record. It is a protected, misconfigured duplicate Vercel project fed by the same public repository as canonical Aloha AI.

Its latest source successfully compiles, type-checks, and generates 49 static pages. Vercel then rejects the deployment because this project is configured to expect `dist`, while the repository runs `next build` and produces `.next`. The canonical project detects Next.js and deploys the same commits successfully.

Top risks:

1. **Estate ambiguity:** one repository triggers two projects and makes a single build look like two assets.
2. **Persistent red deployments:** each main/agent-branch push produces failures on the duplicate while succeeding on canonical, obscuring real failures.
3. **Accidental disclosure/confusion:** alternate aliases exist but lead to authentication rather than the intended product.
4. **Configuration drift:** the duplicate has `framework: null` and a stale output override; canonical has `framework: nextjs`.
5. **Canonical-content defects visible through the shared source:** `npm ci` fails because `package-lock.json` is out of sync, and three NIST PDF links currently return 404.

The asset should exist only as a temporary reconciliation record until the duplicate Vercel project is retired or explicitly detached. The application itself should continue through the canonical project.

## 3. Complete route map

The alternate surface has two discoverable aliases. Both redirect to Vercel SSO before application routing, so the complete unauthenticated alternate route map is `/` → Vercel Authentication.

The shared repository declares 39 application URLs in its canonical sitemap plus `/robots.txt`; all rendered `200` at the canonical project. The build also creates the branded not-found route and five dynamic offer pages. See [ROUTE_CONTROL_LEDGER.md](./ROUTE_CONTROL_LEDGER.md) for every route, result, and route-level control class.

No separate alternate sitemap, public content tree, API route, or consumer-only path was discovered.

## 4. Complete interaction/control inventory

### Alternate deployment

- Vercel Authentication redirect only.
- No application header, footer, menu, form, tool, search, download, or content control reaches an unauthenticated consumer.

### Shared application attempted by the duplicate

- Global skip link, desktop navigation, mobile details menu, CTA, and footer navigation.
- Homepage five-option problem selector with `aria-pressed` and `aria-live` result.
- Opportunity Studio step state and generated routing.
- Four browser-local tools with save, export/download, and confirmed reset/delete behavior.
- Flagship masterclass, Citation Verifier course, and Issues 02–11 with browser-local progress/instruments, downloads, and deletion.
- Public search with query and 13 category filters.
- Conditionally rendered Clinic inquiry form; absent unless mail and Turnstile variables are configured.
- No active checkout, booking, enrollment, generic contact, account, or payment control.

The exact route allocation and counts are frozen in the route/control ledger. Consequential controls were not submitted.

## 5. Consumer journeys and observed results

| Journey | Result |
|---|---|
| Open alternate production alias | Redirected to Vercel SSO, not Aloha AI. Consumer cannot determine why or reach public content. |
| Open alternate branch alias | Same protected redirect. |
| Open latest alternate deployment | Deployment state is `ERROR`; there is no releasable consumer artifact. |
| Find public Aloha AI | `https://aloha-ai-consulting.vercel.app` returns the Aloha AI product and canonical metadata base. |
| Discover alternate via search engine | Mitigated by `x-robots-tag: noindex`, but aliases remain estate clutter. |
| Complete a safe primary journey on the alternate | Impossible because no application route is exposed. |

The shared application’s public HTML was exhaustively fetched on the canonical deployment only to verify that the duplicate is attempting to deploy the same product and to inventory its boundary. That is not a substitute for the later dedicated canonical Aloha AI interaction audit.

## 6. Functional matrix

| Function | Status | Evidence |
|---|---|---|
| Git integration | Working but duplicative | Same repository and commits drive both Vercel projects. |
| Source compilation | Working | Latest alternate log: compile, TypeScript, page data, 49 static pages all succeed. |
| Alternate deployment finalization | Broken | `No Output Directory named "dist" found`. |
| Alternate public consumer access | Intentionally/operationally unavailable | SSO redirect and noindex. |
| Canonical deployment | Working | Same latest source is `READY` under canonical project; public canonical returns 200. |
| Repository tests | Working after non-frozen install | 29/29 site-contract tests passed. |
| Frozen clean install | Broken | `npm ci` reports `package.json`/lock mismatch for `resend` transitive dependencies. |
| Lint | Working after `npm install` | No ESLint errors. |
| Local production build | Working after `npm install` | Next build generated 49 pages. |
| Declared `npm start` | Broken/incoherent | Script invokes `vinext start` but build script invokes `next build`; `dist` is absent. |
| Public internal links | Working in HTTP sweep | 81 unique same-origin paths/fragments discovered; no HTTP 4xx/5xx internal destination. |
| External references | Partial | 12 reachable; 3 NIST URLs 404; 2 returned bot 403; LinkedIn returned automation 999. |
| Clinic form | Intentionally unavailable on observed canonical HTML | Form fails closed unless five environment settings exist. |

## 7. Copy and information-architecture findings

### Alternate-specific

- The project name suffix `an6n` has no consumer meaning and should never appear as a public build name.
- Authentication offers no Aloha AI explanation or route to the canonical site. That is acceptable only for a deliberately private preview—not for a duplicate production target.
- Because the alternate and canonical are one repository/product, separate case-study copy would be false duplication.

### Shared-source findings relevant to reconciliation

- The application consistently names Aloha AI and RN Collins/Honolulu and does not present itself as NSAG or Institutions of One.
- Current/inactive states are unusually explicit: candidate offers say unavailable; Clinic inquiries fail closed; Decision Desk enrollment is not activated; no credential/legal advice promises are made.
- Many default-metadata routes—including candidate offers, Sponsor, Questions, and Decision Review—inherit the generic title “Aloha AI — Find where AI belongs.” This weakens search/share specificity.
- No `<link rel="canonical">` was found in server HTML. `metadataBase`, robots, and sitemap identify the canonical domain, but an explicit canonical URL would better protect against duplicate aliases.
- The route set is substantial and logically groups Start, Tools, Learning, Work, Source Desk, About, Policies, Support, and Procurement. The duplicate project fragments deployment architecture, not user-facing IA.

## 8. Science/law/policy/regulatory claim ledger

This is a duplicate-deployment dossier, not the final canonical Aloha AI substantive cite-check. Claims in the identical repository were screened for immediate integrity risks.

| Claim/source | Finding | Required treatment |
|---|---|---|
| NIST AI RMF 1.0 and Generative AI Profile links | Three linked PDF URLs returned 404 in the live sweep. The documents are real, but the evidence route is broken. | Replace with current official NIST landing/download URLs and retest. P1 because Source Desk promises maintained primary evidence. |
| ABA Formal Opinion 512 | Real and appropriately qualified as Model Rules/non-jurisdiction-specific. Automated request returned 403. | Verify in a human browser; prefer stable ABA landing page if direct PDF blocks users. |
| Federal Rule of Civil Procedure 11 | Cornell destination returned 200; copy correctly limits Rule 11 to federal civil paper representations. | Preserve qualification; primary official rule source is preferable if available. |
| WCAG 2.2 AA “release target” | Framed as a target, not current conformance; Source Desk says citation is not an audit. | Keep target language; do not state conformance without manual/assistive-tech testing. |
| “51 jurisdictions and seven authority layers” in meeting-bot issue | Product-structure/count claim, not demonstrated by a visible source ledger in this audit. | Require the underlying inventory/version/effective-date evidence in the canonical substantive audit. |
| 90-minute, 15-hour, and twelve-month learning claims | Product-scope claims backed by structured lesson/program content, but actual learner duration was not usability-tested. | Label as estimated/structured learning time unless timed learner testing supports a fixed duration. |
| Clinic $275/person, up to six; refund/reschedule terms | Operational/commercial promises are coded and disclosed, while inquiry/payment is inactive. | Before activation, verify fulfillment capacity, tax/payment/terms, cancellation operations, mail retention, and accessibility route. |
| “Normally sent within five business days” | Explicitly qualified as not guaranteed, but remains an operational expectation. | Activate only with owner, monitoring, backup, and records-retention process. |
| Publications and credentials on About | Links discovered for PubMed, Frontiers, MIT Science Policy Review, and NYC; reachable in automated sweep. | Canonical audit should verify authorship/byline and exact proposition, not only page existence. |

No claim on the alternate can be considered publicly delivered because the alternate exposes no application. The canonical site owns all public claims.

## 9. Accessibility and responsive findings

### Positive implementation evidence

- Skip link appears on focus; `:focus-visible` has a 3px outline.
- Reduced-motion rule disables smooth scrolling/transitions/hover motion.
- Breakpoints at 1050px and 760px; navigation becomes a native `<details>` menu.
- Labels, fieldsets, legends, progress elements, `aria-live` status, `aria-pressed`, and screen-reader-only table labels appear throughout interactive tools.
- Large matrices use horizontally scrollable regions with labels and keyboard-focusable containers.
- Mobile rules collapse grids, forms, action rows, course chapters, comparison matrices, and footer layouts.

### Defects/risks

- No live visual or assistive-technology result exists for the alternate because it never serves the app.
- WCAG conformance is not established by source inspection or tests.
- Native details menus and very large form/matrix products need real keyboard, VoiceOver/NVDA, 200%/400% zoom, touch-target, error-identification, and focus-order testing on the canonical deployment.
- A large CSS file contains layered/legacy visual systems and repeated mobile blocks, increasing regression risk.
- Color contrast was not instrument-tested; custom electric/violet/terra palettes require measured state-by-state verification.

## 10. Brand-architecture findings

- Owner: **Aloha AI**, not NSAG and not Institutions of One.
- The public copy describes research, decision design, learning, workflow/tool evaluation, and bounded implementation under Aloha AI.
- Honolulu/Hawaiʻi is visible as place of practice without making unsupported claims of local institutional authority.
- Two Vercel projects for one repository fragment RN’s technical estate and can falsely inflate the portfolio count.
- The correct brand architecture is one Aloha AI case study, one canonical repository, and one canonical public deployment. The duplicate belongs only in the estate ledger as superseded infrastructure.

## 11. Business-model and conversion findings

The shared product combines public decision tools and learning with future/controlled conversion paths: Opportunity Clinic, Decision Review, organizational work, and sponsorship. The alternate produces no business value because it blocks consumers and creates red-deployment noise.

| Business question | Finding |
|---|---|
| Audience | People and organizations deciding where AI belongs; learners; institutional buyers/sponsors. |
| Buyer | Named workflow/decision owner, organizational sponsor, procurement stakeholder, or learner/cohort organizer. |
| Beneficiary | Decision-makers and affected people who need bounded evidence, ownership, safeguards, and review. |
| Value | Decision clarity and portable records; public learning; potential facilitated/private work. |
| Conversion | Canonical site only. Alternate has none. |
| Adoption barrier | High conceptual density, proof/credibility needs, inactive offers, and uncertainty over what can be purchased now. |
| Trust barrier | Evidence links must work; accessibility/privacy/operational claims must be demonstrable. |
| Recommendation | Invest in canonical Aloha AI; retire/detach duplicate; do not market or maintain the alternate. |

## 12. Security, privacy, data, and operational findings

- Alternate deployment protection prevents public exposure and adds `noindex`; this is not a substitute for deleting/detaching an unnecessary project.
- Public tools store data in `localStorage` and export via browser Blob APIs. Source tests assert no fetch/beacon behavior for learner-review and similar instruments.
- Users are repeatedly warned not to enter confidential, privileged, regulated, health, student, biometric, credential, security, or other sensitive information.
- Clinic inquiry fails closed without Resend and Turnstile configuration. Server action validates token hostname, caps input lengths/counts, HTML-escapes values, generates deterministic daily fingerprint/idempotency keys, and states 30-day deletion for unaccepted inquiries.
- Operational gaps before Clinic activation: no evidenced retention/deletion job, support ticketing, incident channel, data-processing inventory, accessibility intake SLA, or payment/booking integration in this audit.
- `app/chatgpt-auth.ts` exists but is not attached to the public route tree discovered; it safely constrains return paths. Its purpose should be documented or dead code removed.
- Dependency reproducibility is currently broken because `npm ci` fails. This is a supply-chain/release-control defect even though Vercel’s non-frozen install succeeds.
- `engines.node >=22.13.0` allows automatic future major upgrades; Vercel warns of this. Pin a supported major range for reproducible releases.

## 13. Defects ranked by severity

### P0 — blocking

- None causing exposure, loss, or consequential misoperation was observed. The alternate is already blocked from users.

### P1 — serious

1. Duplicate Vercel production project fails every recent main deployment because Output Directory is `dist`; canonical succeeds from the same source.
2. The alternate’s public-looking aliases lead to Vercel authentication rather than Aloha AI.
3. `npm ci` fails due to an out-of-sync lockfile, defeating the declared `install:ci` path.
4. Three official NIST evidence links return 404.

### P2 — material

1. `npm start` expects vinext `dist`, while `npm build` runs Next and creates `.next`; scripts describe incompatible production paths.
2. Several distinct routes inherit generic page titles; no explicit canonical link is rendered.
3. Node engine range permits unreviewed future major upgrades.
4. No automated end-to-end/browser/accessibility suite; existing 29 tests are source-contract assertions, not consumer interaction verification.
5. Clinic operational promises need evidence and owned processes before environment activation.

### P3 — polish

1. Remove/document unused `chatgpt-auth.ts` if it is not part of an intended hosting surface.
2. Consolidate legacy/repeated CSS systems after visual regression coverage exists.
3. Add route-specific share metadata/Open Graph for major offers and learning issues.

## 14. Exact remediation plan

Stage B must occur only after coordinator acceptance.

### Vercel estate

1. Confirm `aloha-ai-consulting` remains the only production project for `rn-collins/aloha-ai-consulting`.
2. Remove Git integration from or delete/archive `aloha-ai-consulting-an6n`; do **not** “fix” it into a second live copy.
3. If temporary retention is required, preserve protection/noindex and add an estate note with retirement date.
4. Verify the next canonical main commit produces one expected production deployment and no duplicate red deployment.

### Repository (`rn-collins/aloha-ai-consulting`)

1. Regenerate and commit `package-lock.json` so `npm ci` passes with the declared `resend` range; verify `npm run validate:artifact` from a clean checkout.
2. Choose one runtime path:
   - canonical Next/Vercel: change `start` to `next start`, remove unused vinext/Cloudflare dependencies/scripts/config assumptions; or
   - an intentionally supported second platform: create explicit platform-specific build/start scripts and outputs without applying them to the canonical Vercel project.
3. Pin Node to a reviewed major range in `package.json`.
4. Replace the three broken NIST URLs in `app/insights/page.tsx`, `app/tools/vendor-comparison/page.tsx`, and `app/learning/citation-verifier/page.tsx`; add link integrity tests.
5. Add `alternates.canonical` at root/route metadata and distinct metadata for generic-title pages (`app/work/[offer]/page.tsx`, Sponsor, Questions, Decision Review, and other inherited-title routes).
6. Add Playwright interaction coverage for navigation, Studio, all four tools, downloads, persistence/reset, search, lessons/instruments, unknown route, responsive menu, keyboard order, and closed/open Clinic states.
7. Run axe plus manual keyboard, screen-reader, zoom/reflow, touch, and color-contrast checks on canonical production.

No code file should be changed merely to make the duplicate a second deployable portfolio asset.

## 15. Recommended estate disposition

**D — Duplicate or alternate deployment.**

Final decision proposed: **supersede and retire the Vercel project `aloha-ai-consulting-an6n`; retain `aloha-ai-consulting` as the sole canonical project and existing public RN Selected Work record.**

Why not the other codes:

- Not P: no independent product, repo, audience, or public functionality.
- Not C: it is not a distinct module; it mirrors the whole parent repository.
- Not I: it is not purposeful private infrastructure.
- Not E: the product is not an experiment; the duplicate project is configuration residue.
- Not X: it must remain accounted for as a known superseded deployment rather than disappear from the estate record without explanation.

## 16. Proposed RN Selected Work case-study corrections

1. Keep one Aloha AI Atlas/case-study record mapped to:
   - repository `rn-collins/aloha-ai-consulting`
   - canonical URL `https://aloha-ai-consulting.vercel.app`
   - Vercel project `aloha-ai-consulting`
2. Do not add a card or case study for `aloha-ai-consulting-an6n`.
3. In the private master reconciliation only, record the alternate project as `D`, same-parent/same-repository, latest state failed, retirement pending/completed.
4. Do not describe the canonical site as fully audited from this dossier; schedule its represented-site Stage A audit after unresolved assets.
5. Once canonical fixes are production-verified, update the Aloha AI case study’s evidence boundary to distinguish:
   - currently usable public tools/learning;
   - browser-local functionality;
   - inactive candidate offers;
   - conditional Clinic inquiry;
   - no checkout/enrollment/account/credential/legal-advice system.

## 17. Evidence appendix

### Vercel evidence

- Team: RN Collins, `team_6xuOmJL3MoIFarDpy9odi175`.
- Alternate: `prj_ggjYRARFCDsHZUfKUr0cjbMezZCe`, framework `null`, latest `dpl_CyozRALtiXaGqPpKM5kvCK6pqPwo` = `ERROR`.
- Canonical: `prj_OQMHEHVG1aPFfl3bS6q22Jx9jCO3`, framework `nextjs`, latest `dpl_EHV5ZAe3Ddnuz13sQpPSF3Qvihxb` = `READY`.
- Latest alternate build log: source compiled; TypeScript finished; 49 pages generated; final error: no `dist` output directory.
- Both deployment streams identify GitHub repo `rn-collins/aloha-ai-consulting`, repository ID `1257396541`, and matching commit sequence.

### HTTP evidence

- Both alternate aliases: 302 to Vercel SSO, noindex.
- Canonical root: 200 and Aloha AI content.
- Canonical sitemap sweep: 39/39 application URLs returned 200.
- Same-origin destination sweep: no discovered HTTP 4xx/5xx.
- Synthetic unknown route: branded 404.
- External sweep: 18 unique HTTPS destinations; 3 NIST 404s; ABA/CISA bot 403s; LinkedIn automation 999.

### Repository/build evidence

- Audited main commit: `57dc643aaeed0846b5e10148e82d91f07e36c7f9`.
- `npm ci`: failed because lockfile omitted `resend@6.19.0`, `postal-mime@2.7.5`, `standardwebhooks@1.0.0`, `@stablelib/base64@1.0.1`, and `fast-sha256@1.3.0`.
- Audit-only `npm install` in a temporary clone: succeeded; no user repository was modified.
- `npm test`: 29 passed, 0 failed.
- `npm run lint`: passed.
- `npm run build`: passed; 49 generated pages.
- `npm run start`: failed because vinext found no `dist` created by the Next build.

### Explicitly unverified

- Authenticated view behind alternate Vercel SSO.
- Pixel-level alternate desktop/mobile UI: no deployable app exists there.
- Live alternate keyboard/screen-reader/zoom/contrast behavior.
- Real form submission, mail delivery, Turnstile, deletion execution, payment, booking, or enrollment.
- Full proposition-level primary-source review for canonical Aloha AI; only high-risk duplicate/shared-source screening was performed.
- Canonical client-side browser console/network state and every interactive transition; these belong to the canonical site’s own Stage A dossier.

This boundary is deliberate: the evidence is sufficient to disposition the alternate as D without pretending that it constitutes final certification of canonical Aloha AI.
