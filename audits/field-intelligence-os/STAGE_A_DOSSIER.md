# Field Intelligence OS — Stage A Audit Dossier

Audit date: 2026-08-13 (HST)  
Companion: [`ROUTE_CONTROL_LEDGER.md`](./ROUTE_CONTROL_LEDGER.md)

## 1. Asset identity

- **Asset:** Field Intelligence OS, conceived as a private-first multimodal field-investigation, evidence, relationship, systems-reconstruction, media/provenance, consent, and output platform.
- **Repository:** private `rn-collins/field-intelligence-os`, repository ID `1306204195`, default branch `main`, all rights reserved.
- **Default-branch status:** documentation/pre-alpha. `main` still says production code has not been scaffolded and contains no `package.json` or application route.
- **Current implementation branch:** `feat/phase-01-data-auth`; inspected deployed commit `7bc866b90e2e747450c9522f56001573ea238527`.
- **Current Vercel project:** `field-intelligence-os`, project ID `prj_2HwLUmJoU9yuwSgR24H31OjYD9db`, Next.js, Node 24, `live:false`, no assigned domains. The latest READY preview is `dpl_EYQeynrmgnRvvuACv3mKkhYTPPY5`, protected by Vercel Authentication.
- **Current product implementation:** Phase 00 interface foundation plus Phase 01 schema/RLS work in progress. The preview builds 16 application routes plus `/_not-found`; only the Command Center contains typed demonstration content. Other modules are explicitly non-operational placeholders.
- **Conflicting public surface:** `https://field-intelligence-os.vercel.app/` publicly serves a completely different “Kanazi · Bugesera” weekly reporting tool. It is not a domain of the current Vercel project, does not match the current implementation, and has four live password-gated API routes. Its source/deployment identity is unresolved.
- **Parent/brand:** RN internal research and editorial infrastructure. It can later demonstrate Aloha AI's system-building capability, but it is not NSAG, Institutions of One, or a generic Aloha AI monitoring product. “Field Intelligence OS” is the product name; RN Builds is the future public evidence/case-study layer.
- **RN Selected Work:** absent as a case study; listed only as unresolved in the master reconciliation.
- **Privacy:** the repository and current preview are private/protected. The orphaned Kanazi interface is public and exposes the existence, place/program label, workflow, AI/GitHub/email architecture, and password-auth boundary even though its data APIs reject invalid credentials.

## 2. Executive verdict

Field Intelligence OS is a serious product specification and a well-engineered **foundation**, not yet an operational field-intelligence product. The current branch cleanly distinguishes demonstration data from real records, keeps privileged keys server-only by design, uses a typed route model, includes accessibility/security/test standards, and generated all 17 build pages successfully. Its underlying product idea is materially differentiated: it connects field deployments, people, organizations, interactions, claims, evidence, law/policy, systems, assets, permissions, cognition updates, and outputs rather than treating fieldwork as notes plus a CRM.

It does not yet deliver the end-to-end promise. The public-facing product description describes planning, consent, evidence tracing, systems reconstruction, offline capture, media provenance, search, AI assistance, and publishing, but the deployed branch currently delivers a static information-architecture proof behind Vercel Authentication. Phase 01 adds migrations and RLS tests; authentication/UI/data integration remain unverified. Its latest Vercel build reports **six high dependency vulnerabilities and one moderate vulnerability**, while the available commit-status result shows only a Vercel success status—not the documented lint/test/RLS/e2e CI gate.

The highest risk is the second, public surface. `field-intelligence-os.vercel.app` is an operationally framed client/project reporting tool for Kanazi/Bugesera, using a single password and claiming to pull GitHub context, generate three reports with Gemini, save context to GitHub, synthesize risks and quarters, and email stakeholders. Its implementation is not in the inspected repository/branch and the current Vercel project declares no domain. The public client code renders returned AI/GitHub content with unsanitized `innerHTML`, creating a credible stored/second-order XSS path. It also lacks visible consent, recipient approval, source/citation review, sensitive-data classification, provider disclosure, retention, correction, privacy, and incident controls.

Recommended disposition: **I — internal infrastructure**, with an immediate release hold on the orphaned public Kanazi surface. Do not add a public RN Selected Work card yet. After the current implementation has real auth/RLS, protected-data threat modeling, safe ingestion, consent/permission workflows, evidence-grounded AI, and a redacted demonstration deployment, reconsider **P** as a distinct portfolio product. Until then, RN Selected Work may account for it privately as “internal product under development,” without exposing client/place, source, or security details.

## 3. Complete route map

The companion ledger records both surfaces. The current protected preview generates:

`/`, `/deployments`, `/people`, `/organizations`, `/interactions`, `/claims`, `/evidence`, `/systems`, `/assets`, `/assets/ingest`, `/outputs`, `/search`, `/library`, `/settings`, `/field`, and `/_not-found`.

The orphaned public surface is a single HTML page with five client-side panes and four server routes: `/api/ingest`, `/api/generate`, `/api/dashboard`, and `/api/synthesise`. `robots.txt`, `sitemap.xml`, and `favicon.ico` return 404. Unknown pages return Vercel 404.

No route sampling is being represented as completeness: current-preview routes came from the typed navigation model and Vercel build manifest; public-surface routes came from the complete delivered HTML/JavaScript and direct probes.

## 4. Complete interaction/control inventory

See the companion ledger. The current preview supplies desktop and mobile navigation, a More menu, skip/navigation/main semantics, Command Center decision/deployment cards, and honest placeholder states. It has no real auth, data CRUD, capture, upload, search, AI, sync, or output transaction exposed in the inspected branch.

The public surface supplies theme persistence; five tabs; password, week, tone, and free-text fields; report generation; print-to-PDF; donor/team/community views; risk parsing; weekly/quarterly archive loading; quarterly generation; and context-depth disclosure. All consequential behavior requires the shared password. Invalid and missing passwords returned 401 for each API; no valid credential was used.

## 5. Consumer journeys and observed results

### RN as field investigator

The current Command Center proves a useful decision-first information architecture and explicitly avoids fake functionality. RN cannot yet conduct a deployment inside it: targets, sources, interactions, consent, claims, evidence, systems, media, offline capture, retrieval, and outputs are placeholders. The product therefore reduces no real administrative burden yet.

### Journalist/researcher/law-policy communicator

The ontology is stronger than a notes repository: a claim is separate from evidence; law/policy, contradiction, source provenance, sensitivity, permission, and cognition change are designed as first-class records. However, no current consumer flow demonstrates quote locking, jurisdiction/effective-date control, source protection, contradiction handling, correction, publication readiness, or citations. Product descriptions should use “designed to” or “in development,” not present-tense delivery claims.

### Collaborator or institutional team

Phase 01 proposes workspace tenancy and role-based RLS. That is appropriate, but membership provisioning, removal, role changes, restricted identities, audit review, incident response, export/deletion, Drive authorization, and device/offline risk have not been verified in a deployed authenticated flow.

### Kanazi operator

The public tool makes weekly reporting look simple: enter a password, week, and free notes; receive donor, team, and community versions; inspect risks and context; generate a quarterly synthesis. It may save substantial reporting labor. But the operator is asked to place unconstrained field notes into a pipeline that appears to send data to Gemini, GitHub, and email without showing recipients, classifications, permissions, redaction, or a final review/approval step. That is not safe for names, quotations, health/legal information, community vulnerabilities, precise locations, donor-sensitive facts, off-record material, or allegations.

### Donor/community reader

The three-tone output concept is valuable, but tone transformation is not the same as evidentiary integrity. No visible interface requires claims to be linked to sources, labels AI-added interpretation, preserves uncertainty, checks numbers across variants, prevents donor/community contradictions, or records who approved publication.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Product specification/architecture | **Substantial** | Canonical ontology, phased roadmap, security/privacy/AI standards. |
| Current application shell | **Working preview** | 17 static pages built successfully at deployed commit. |
| Responsive/accessibility design | **Implemented/tested in source; runtime partially unverified** | Typed nav, axe/Playwright suites, contrast tests; protected preview prevented independent browser execution. |
| Demonstration Command Center | **Working static proof** | Typed, explicitly labelled seed records only. |
| Authentication and tenancy | **Partial/in progress** | Phase 01 migrations/RLS plan; no verified live login/workspace flow. |
| Database/RLS | **Implemented on branch; gate unverified here** | CI configuration and migration plan exist; only Vercel commit status was visible. |
| Field capture/interviews/consent | **Missing/deferred** | Planned Phase 04. |
| Claims/evidence/law/systems | **Missing/deferred** | Planned Phase 05. |
| Assets/Drive/provenance | **Missing/deferred** | Planned Phase 06. |
| Search/evidence-aware AI | **Missing/deferred** | Planned Phase 07. |
| Outputs/Notion/automations | **Missing/deferred** | Planned Phase 08. |
| Offline encrypted Field Mode | **Missing** | Architecture intent only; encryption/device-loss decisions open. |
| Kanazi password boundary | **Partial** | All four APIs returned 401 to invalid/missing password; authentication strength unknown. |
| Kanazi AI/report/archive/risk/context/email | **Unverified operationally** | Client code exists; no protected workflow invoked. |
| Kanazi output rendering | **Unsafe** | Returned report/context/risk strings inserted into `innerHTML` without HTML escaping/sanitization. |

## 7. Copy and information-architecture findings

The current implementation's strongest copy choice is honesty: modules identify when they become functional, and demonstration data is persistent and nondismissable. “What matters now,” “one exact assertion per record,” “sources that support or challenge a claim,” and “original masters are preserved; edits are derivatives” communicate the product precisely.

Material corrections:

- Repository/product summaries use present tense (“is a multimodal platform for planning...”) while the current product is a pre-alpha foundation. Use “is being developed to...” until workflows exist.
- “Initial deployments” can imply that Manhattan and Reykjavík are committed/live. The current UI correctly says competing options; README/project memory should remain consistent with that later evidence.
- The public Kanazi title conflates the broader Field Intelligence OS product with one client/place implementation. If retained, use “Kanazi Reporting Workspace — powered by Field Intelligence OS,” behind authentication.
- “Pulling project context,” “Generating report with Gemini AI,” “Saving to GitHub context store,” and “Sending email to stakeholders” are operational and privacy claims. They require exact evidence, failure states, and approval boundaries.
- “One click,” “automatically,” “exactly what the AI knows,” “donor-ready,” and “trustworthy outputs” overstate reliability without source/citation, recipient, and human-review controls.
- “Save as PDF” actually opens the browser print dialog; relabel “Print / save as PDF.”
- The public tool provides no explanatory page, privacy notice, data warning, help, contact, ownership, version, effective date, or status.

Information architecture should separate: deployment operation; source/evidence governance; output approval; administration/security; and external stakeholder publication. The Kanazi tool currently compresses all five into one shared-password page.

## 8. Science/law/policy/regulatory claim ledger

| Claim/topic | Verdict | Required correction/control |
|---|---|---|
| “Trustworthy editorial and research outputs” | Aspirational, not yet demonstrated | Define verification gates, locked source sets, citation completeness, contradiction handling, uncertainty, reviewer identity, corrections, and outcome metrics. |
| AI context is “exactly what the AI knows” | Technically misleading | It shows assembled prompt/context files, not provider training data, system instructions, tool state, retrieval omissions, model state, or inference behavior. Say “context assembled by this application for this request.” |
| Reports are “donor-ready” | Unsupported operational outcome | Require factual/source review, financial/metric validation, grant-term alignment, confidentiality review, recipient approval, and final human sign-off. |
| Risk tracker accumulates risks “automatically” | Unverified and potentially unsafe | Define extraction method, false-positive/negative limits, human confirmation, ownership, severity, due date, closure evidence, and non-retaliation/access boundaries. |
| Three tones preserve facts | Unverified | Diff facts, quantities, dates, commitments, qualifications, and citations across donor/team/community versions; block inconsistent release. |
| Law/policy records | Well-conceived, not implemented | Every legal proposition needs jurisdiction, authority type, effective/as-of date, scope, source, treatment/validity where relevant, and not-legal-advice boundary. |
| Science/medical/public-health records | Well-conceived, not implemented | Preserve study design, population, exposure/intervention, comparator, outcome, uncertainty, limitations, funding/conflict, causal boundary, currency, and not-medical-advice boundary. |
| Consent/permission preservation | Required but absent operationally | Consent must be explicit, purpose/audience-specific, versioned, revocable where applicable, linked to assets/quotes/outputs, and never inferred by AI. |
| Community update is accessible | Unsupported | Plain language alone does not establish disability, language, cultural, digital-access, or community-authority accessibility. Test with intended community and provide alternatives. |

No content-specific Kanazi claims or reports were inspected because no protected data was accessed.

## 9. Accessibility and responsive findings

### Current preview

- Positive: semantic app shell; skip link; one-main/navigation tests; document language; zoom preserved; visible focus and 44px Field Mode targets specified; non-colour-only status design; route-wide axe tests at mobile/desktop and light/dark; typed mobile menu covers destinations omitted by an earlier design.
- Boundary: tests exist in source, but the latest protected preview was not interactively executed in this audit. Do not treat test presence or build success as an accessibility certificate.

### Public Kanazi surface

- Positive: native buttons and labelled password/week/notes inputs; viewport permits zoom; narrow-screen CSS exists; tabs remain keyboard-focusable; theme preference persists.
- Serious: no `<main>` landmark, skip link, page `<h1>`, tablist/tab/tabpanel roles, `aria-selected`, live-region status, error association, or focus management after tab/report changes.
- “Report Tone” label has no `for`; progress and generated content changes are not announced.
- Clickable archive/context cards are nonsemantic `<div>` elements and are not keyboard operable.
- Context bodies are capped at 300px scroll; focus/keyboard discoverability is weak.
- Responsive layout only has one breakpoint and was not visually/assistive-technology verified. Risk cards and report controls need 320px reflow, 200/400% zoom, VoiceOver/NVDA, keyboard, touch-target, contrast, dark-mode, reduced-motion, and print/PDF review.
- External Google Fonts creates a privacy/performance dependency and can fail without a local fallback experience beyond generic fonts.

## 10. Brand-architecture findings

Field Intelligence OS should remain an RN-owned research/editorial product and internal infrastructure while under development. It demonstrates RN's AI-technologist, systems-design, neuroscience/science-communication, and law/policy-research capabilities, but it is not itself NSAG. NSAG governs institutional nervous-system effects; Field Intelligence OS governs field investigation and evidence operations. It is not Institutions of One, though a future multi-tenant product could serve independent practitioners. Aloha AI may build or commercialize it, but should not absorb its identity until buyer and service architecture are decided.

The public Kanazi interface fragments the brand. It uses the master product name for a narrow, place/client-specific reporting implementation and discloses “Kanazi · Bugesera” publicly. That can imply an actual client engagement, permission, operational maturity, and responsibility for AI-generated donor/community communications without attribution or boundary language. Trace ownership, confirm authorization, rename the implementation, and remove client/place names from unauthenticated surfaces.

Relationship to other monitoring products: Field Intelligence OS is the canonical **fieldwork evidence and provenance layer**, not another regulatory/news monitor. Aloha Legal AI Monitor, DEA Tracker, Culture Monitor, Governance Audit, Transform Observatory, Psychedelic Operations Intelligence, and similar products may produce inputs or consume verified outputs, but should not duplicate people, claims, evidence, consent, or provenance stores. Integration must occur through governed records/APIs, not copying private context among repositories.

## 11. Business-model and conversion findings

Primary current beneficiary: RN as solo investigator. Future users: journalists, researchers, lawyers, educators, documentary teams, students, and institutions. Likely buyers: investigative/editorial organizations, research institutes, foundations, regulated-industry policy teams, NGOs, universities, and independent multidisciplinary practitioners. Economic value: less duplicate tracking, faster evidence-grounded output, preserved institutional memory, permission control, safer collaboration, and defensible provenance.

The current product has no conversion architecture and should not. A sensitive internal pre-alpha tool should validate RN's own field workflow before it solicits external users. Later commercialization requires clear tenancy, hosting, onboarding, training, support, data processing, retention/export/deletion, incident response, AI-provider options, confidentiality, legal hold/eDiscovery, customer-controlled keys where warranted, and pricing tied to seats/workspaces/storage/integrations/support rather than vague “AI reporting.”

The Kanazi implementation hints at a commercially useful service: turn weekly field notes into audience-specific reports and quarterly synthesis. But its current design creates unacceptable fulfillment risk. A donor/community report is not a low-stakes content transformation; it can affect funding, relationships, reputation, obligations, community trust, and safety. Human evidence review and explicit send approval must be contractual and technical release gates.

Recommended investment path: validate one private RN deployment; complete threat/privacy/data-protection design; build the minimum `deployment → interaction → consent → claim → evidence → output approval` spine; defer broad CRM/Notion/AI scope; then create a fully synthetic/redacted public demo. Do not sell automated email delivery before review, recipient, and audit controls exist.

## 12. Security, privacy, data, and operational findings

### Current repository/preview

- Strong design intent: private repository; protected previews; `noindex`; deny-by-default RLS; workspace membership; server-only service role; append-only audit records; no real secrets required in Phase 00; public-quality seed safety; Google Drive original-master boundary; Notion noncanonical; no autonomous publication.
- Deployment/build mismatch: the Vercel build succeeded but `npm ci` reported **7 vulnerabilities (6 high, 1 moderate)**. The branch CI declares `npm audit --audit-level=high`, yet the only visible status on the deployed commit was Vercel success. Dependency remediation and actual CI/RLS evidence are release blockers.
- Current Vercel project is `live:false` with no domains, which is appropriate. Preview SSO protection was verified.
- Open security decisions remain material: Supabase region/data residency, Drive OAuth ownership, approved AI providers for sensitive sources, offline encryption/device loss, retention/deletion, incident response, and public demo strategy.

### Public Kanazi surface

- A shared password is sent in the JSON body of every request. There is no named identity, session, MFA, role, logout, device revocation, or visible access audit.
- Invalid/missing passwords fail closed with 401 on all four APIs; non-POST methods return 405. This is a positive but insufficient boundary.
- No observable rate-limit headers or lockout/bot mechanism; no brute-force test was conducted.
- Responses use `cache-control: public, max-age=0, must-revalidate`, including 401/405 JSON. Sensitive authenticated responses must be verified as `private, no-store`; the public default is unsafe if inherited.
- The page lacks CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and Permissions Policy in observed root headers. HSTS is present.
- Client code inserts returned reports, GitHub context, risk titles/bodies, week labels, and labels into `innerHTML` without escaping or sanitization. Free-text notes, AI output, and repository context are attacker-influenceable. This is a credible stored/second-order XSS and data-exfiltration risk.
- The context pane intentionally exposes assembled GitHub context to any password holder. Least privilege, repository/path allowlists, secret scanning, redaction, source/client separation, and download/clipboard auditing are not visible.
- Field notes may include special-category/sensitive personal data, location, health, legal, employment, child, Indigenous/community, allegation, donor, and security information. No data classification or minimization exists before transmission to AI, GitHub, or email.
- “Sending email to stakeholders” occurs inside generation with no visible recipient preview or separate approval. Wrong-recipient and premature/publication risk is high.
- No privacy notice, processor/subprocessor disclosure, provider data-use/retention terms, cross-border transfer analysis, data processing agreement, retention schedule, deletion/export, correction, data-subject request, breach response, or client authorization is visible.
- No logging/monitoring, dependency record, deployment-to-source record, backup/restore, or rollback evidence for the public surface was available.

## 13. Defects ranked by severity

### P0 — immediate containment/release hold

1. Public orphaned `field-intelligence-os.vercel.app` exposes a client/place-specific operational interface whose repository, Vercel project/domain ownership, deployment commit, authorization, and maintenance path are unresolved.
2. Public client renders AI/GitHub/user-influenced content through unsanitized `innerHTML`, creating a plausible stored/second-order XSS path capable of exposing password-accessible context and reports.
3. Unconstrained field notes appear able to flow to Gemini, GitHub, and stakeholder email without structured consent, redaction, recipient preview, evidence review, or explicit send approval.
4. Current build reports six high dependency vulnerabilities; the deployed commit lacks visible evidence of the repository's declared audit/test/RLS/e2e CI gate.

### P1 — serious

1. Shared-password-only access is inadequate for sensitive multi-user field intelligence; no MFA, roles, sessions, revocation, or user audit.
2. Sensitive authenticated caching behavior is unverified while public API responses declare `cache-control: public`.
3. Public surface has no privacy/data-processing/retention/deletion/incident/subprocessor boundary.
4. “Donor-ready,” audience transformation, risk extraction, and email delivery lack factual/citation consistency and human approval gates.
5. Client/place naming publicly implies authorization/engagement and exposes operational metadata.
6. The current implementation remains on feature branches, has no production domain, and does not yet deliver its stated product workflows.
7. Offline capture, device loss, source identity, restricted media, Drive authorization, and approved-AI-provider decisions remain unresolved.

### P2 — material

1. Current main branch is stale relative to Phase 00/01 implementation, complicating source-of-truth and release governance.
2. No accepted public/private demonstration boundary or RN Selected Work evidence language exists.
3. Public Kanazi interface has material semantic/accessibility failures and no automated quality system visible.
4. Week labels and report/context content lack strict client/output validation; the UI parser is fragile.
5. No robots, sitemap, favicon, ownership/help/version/status routes on the public surface.
6. Product scope is very broad; MVP risks becoming an administrative system larger than RN's fieldwork.

### P3 — polish

1. Relabel browser printing accurately.
2. Replace absolute/automatic copy with controlled, evidenced state language.
3. Clarify Manhattan/Reykjavík as alternatives wherever mentioned.

## 14. Exact remediation plan with file-level targets

### Immediate public-surface containment

1. In Vercel, resolve which project owns `field-intelligence-os.vercel.app`; capture project ID, deployment ID, git source/commit, environment owners, aliases, logs, and authorized users. Remove the alias or enable Vercel Authentication immediately while preserving logs/evidence.
2. Confirm whether Kanazi/Bugesera is authorized client/program naming. If not, remove it from unauthenticated HTML and domain metadata. Notify the appropriate owner privately if an actual engagement/data processor is implicated.
3. Inventory what `/api/ingest`, `/api/generate`, `/api/dashboard`, and `/api/synthesise` can read/write/send; identify Gemini project/model, GitHub repositories/paths/tokens, email account/recipients, stored reports, logs, and exposure window. Do not copy protected contents into the audit.
4. Review access logs for failed/successful use, rotate the shared password and all GitHub/AI/email credentials, revoke stale tokens, and determine whether notification/deletion/retention actions are required.
5. Replace all dynamic `innerHTML` interpolation with text nodes/safe component rendering or a strict allowlist Markdown sanitizer; add CSP with nonced/hashed scripts and deny framing.
6. Require authenticated named users, MFA where available, short sessions, role/workspace authorization, revocation, audit, rate limiting, and `no-store` for sensitive responses.
7. Split “generate draft” from “approve/send.” Show sources, citations, facts/quantities diff, recipients, audience classification, warnings, and final human approval before any message or GitHub write.
8. Add structured sensitivity, consent, attribution, off-record, embargo, redaction, and permission checks before any external AI or email transfer.

### Canonical repository/current implementation

9. Resolve dependency advisories in `package.json`/`package-lock.json`; run `npm audit --audit-level=high`, lint, format, typecheck, unit/component, Playwright/axe, build, and Supabase pgTAP/RLS tests. Attach exact outputs to the PR; do not rely on Vercel READY.
10. Merge Phase 00 through a reviewed PR before stacking Phase 01, or document the intentional stacked-branch release model. Update `main`, README status, changelog, project memory, roadmap, and Vercel production-branch settings so source-of-truth is unambiguous.
11. Finish Phase 01 in `supabase/migrations/**`, `supabase/tests/**`, `lib/supabase/**`, and auth routes: tenant isolation, restricted identities, audit append-only behavior, membership lifecycle, no anonymous access, error states, and production secret boundaries.
12. Before Phase 04/07, write and accept threat/privacy/AI data-flow documents covering source identities, health/legal/location/child/community data, offline encryption, device loss, Drive permissions, retention/deletion, incident response, AI providers/training/retention, international transfers, logging, legal hold, correction, and human review.
13. Build only the minimum spine first: Deployment; Person/Organization; Interaction; structured consent/attribution; Claim; Evidence/Law; Output draft; review/approval. Measure whether it reduces RN's time and errors before adding broad integrations.
14. Create a synthetic demo workspace with no real sources, clients, contacts, reporting plans, or private workbook logic. Keep real previews authenticated and `noindex`.
15. Add deployment provenance: environment → Vercel project/domain/deployment → branch/commit → Supabase project → Drive root → AI/email integration owners. Block orphan aliases and unreviewed branch production.

## 15. Recommended estate disposition

**I — Internal infrastructure**, pre-alpha/Phase 01 and release-blocked.

Rationale: the asset's current highest-value function is RN's private operational infrastructure, and its subject matter inherently contains protected sources, consent, private research, legal/health information, location, media, and unpublished strategies. It should be accounted for in the estate but not exposed as a consumer product or full case study yet. The public Kanazi surface must be contained and reconciled, not treated as evidence of a finished product.

Reconsider **P — Public portfolio build** only when:

- one canonical repository/project/domain relationship exists;
- production auth/RLS/privacy/security gates pass;
- the minimum end-to-end field/evidence/output workflow works;
- AI output is evidence-grounded and human approved;
- sensitive integrations and offline/device risks are governed;
- a fully synthetic/redacted public demonstration and defensible case study exist; and
- the commercial owner, buyer, support, data, and maintenance model are explicit.

## 16. Proposed RN Selected Work case-study corrections

Do **not** add a normal public card now. Add a private estate-ledger entry:

> **Field Intelligence OS — internal product under development.** A private-first system for planning field deployments and connecting interactions, consent, claims, evidence, law and policy, systems, media provenance, investigator cognition, and controlled outputs. Current status: application foundation and tenant-isolation work in progress; operational workflows are not yet publicly released.

If a public “Behind the Build” mention is needed later, it must:

- show only synthetic/redacted screens;
- say “designed to” rather than claiming operational delivery;
- state what is implemented versus planned;
- omit Kanazi/Bugesera, source identities, contacts, targets, context files, credentials, integrations, security details, and actual field plans;
- describe AI as proposing traceable drafts subject to human review, never autonomously producing trustworthy outputs;
- distinguish the system from Aloha AI monitoring products, NSAG, and Institutions of One; and
- link to a controlled demo only after release certification.

## 17. Evidence appendix

### Repository evidence

- Private repository metadata: GitHub `rn-collins/field-intelligence-os`, ID `1306204195`, default `main`.
- Default-branch files inspected: `README.md`, `AGENTS.md`, `START_HERE.md`, `PROJECT_MEMORY.md`, `ARCHITECTURE.md`, `SECURITY.md`, `CONTRIBUTING.md`, `.env.example`, `.codex/FIRST_TASK.md`, product/build plans and open questions.
- Deployed-commit files inspected at `7bc866b90e2e747450c9522f56001573ea238527`: `package.json`, `README.md`, `app/page.tsx`, `app/layout.tsx`, `next.config.ts`, `features/navigation/nav-model.ts`, `lib/seed/deployments.ts`, `tests/e2e/accessibility.spec.ts`, `.github/workflows/ci.yml`, `supabase/config.toml`, and Phase 01 plan.

### Vercel evidence

- Current project: `prj_2HwLUmJoU9yuwSgR24H31OjYD9db`; `live:false`; domains `[]`.
- Latest deployment: `dpl_EYQeynrmgnRvvuACv3mKkhYTPPY5`; branch `feat/phase-01-data-auth`; commit `7bc866b`; READY; Vercel Authentication protected.
- Build log: Next.js 16.2.10; 497 packages; 7 vulnerabilities (1 moderate, 6 high); compilation/typecheck succeeded; 17 static pages generated. Vercel build did not show lint, tests, audit gate, e2e, or pgTAP execution.
- Commit status visible through GitHub: Vercel success only.

### Public-surface evidence

- Complete delivered HTML/JavaScript from `https://field-intelligence-os.vercel.app/`, title `Field Intelligence OS — Kanazi`, approximately 33 KB.
- Root 200; API invalid/missing-password POSTs 401; API GET/OPTIONS 405; robots/sitemap/favicon 404; unknown page 404.
- Observed root headers include HSTS but no application CSP, frame denial, nosniff, referrer, permissions, or noindex header.
- No protected report, context, risk, archive, recipient, repository file, or user data was accessed or reproduced.

### Explicitly unverified

- Exact owner/project/deployment/source commit and authorization of the public Kanazi alias.
- Whether any protected data exists, its volume/content, successful-access history, retention, recipients, or provider configuration.
- Valid-password behavior and every consequential AI/GitHub/email action.
- Latest protected preview's rendered desktop/mobile/keyboard/screen-reader behavior.
- Independent execution of repository tests/build because the private repository could not be cloned in this environment; Vercel build/source evidence was used instead.
- Privacy, contractual, client, data-processing, name/mark, and community authorization outside the inspected artifact.

No source repository or production application file was edited during Stage A. Only these audit records were created in `rn-selected-work`.
