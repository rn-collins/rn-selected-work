# RN Digital Build Estate — Master Asset Reconciliation

Inventory date: August 12, 2026 (HST)

## Certification status

**Not yet complete.** The connected accounts currently expose:

- 73 GitHub repositories owned by `rn-collins`
- at least 73 directly verified Vercel projects in the RN Collins team; the connector returns only a capped 50-project page, so 73 is a verified minimum rather than a proven exhaustive total
- 35 build case studies on RN Selected Work: 6 featured projects and 29 Build Atlas projects

These numbers are not expected to match one-to-one. A repository may be private infrastructure, a component, an obsolete experiment, an alternate version, or undeployed. A Vercel project may be a duplicate deployment, API, module, or companion application. Completion requires a written disposition for every record—not publishing every private asset as a portfolio card.

## Disposition codes

- **P — Public portfolio build:** warrants its own canonical RN Selected Work case study.
- **C — Component:** accounted for under a parent build; crawl separately when it has its own deployed consumer interface.
- **I — Internal infrastructure:** private operational system; record boundaries but do not expose confidential implementation.
- **D — Duplicate or alternate deployment:** reconcile to one canonical version and document the superseded version.
- **E — Experiment or incomplete prototype:** inspect before deciding whether to complete, archive, merge, or publish.
- **X — Excluded/non-portfolio:** intentionally outside RN Selected Work, with a written reason.
- **U — Unresolved:** requires inspection and disposition.

## Already represented as canonical case studies

### Six featured builds

1. `ownership-platform` → Institutions of One / Ownership Platform
2. `flexjd-site` → FlexJD Resource Hub
3. `psychops-intel` → Psychedelic Operations Intelligence
4. `claude-smb-buechler` → Buechler Pacific — Claude for Small Business
5. `keiki-robotics-oahu-ai` → Keiki Robotics / Oʻahu AI
6. `patent-first-steps-thorncrest` → ThornCrest — Patent First Steps

### Twenty-nine Build Atlas records

`aloha-ai-consulting`, `sovereign-stack`, `ai-budget-calc`, `provenance-verify`, `opfos-firm`, `kids-developing-brains`, `transform-observatory`, `zero-to-frontier`, `psych-ops-directory`, `set-for-life`, `psychonaut-bookworm`, `legal-risk-monitor`, `nervous-system-studio`, `law-communication-library`, `eolpc-demo`, `entheogen-atlas`, `dru-assessment`, `destig-toolkit`, `creator-brand-evidence`, `aloha-build-club`, `regac-academy`, `narch-advisory`, `bm-intel`, `psychops-intel`, `gapi-governance`, `wnh-guide`, `sport-nsag`, `inflection-radar-real-chemistry`, and `aloha-creator-rights`.

`psychops-intel` currently supports both the featured Psychedelic Operations Intelligence record and the narrower Atlas record Psych Ops Intel. This overlap requires later canonicalization; it must not be assumed to represent two independent products.

## Wave 1 accepted dispositions — August 12, 2026

- `myelin-ce` — **D, retired/superseded deployment** intended for consolidation under Aloha AI Learning. Its public routes currently redirect to a nonexistent `/ce/` successor that returns 404. Do not add a separate portfolio card. Remediation remains P0 before any learning/CE claims are promoted.
- `aloha-ai-consulting-an6n` — **D, duplicate deployment** of canonical `aloha-ai-consulting`. It uses the same repository and commit stream, but the alternate Vercel project is protected/non-indexable and its latest production deployment is misconfigured to expect `dist`. Retire the alternate project; retain one Aloha AI case study.
- `z2f-live` — **D, duplicate deployment** of canonical **P** asset `zero-to-frontier`. Both Vercel projects deploy the same repository, branch, commit, and byte-identical tested pages. Retain one Zero → Frontier case study and retire or redirect the duplicate project.

The accepted Stage A dossiers and route/control ledgers live under `audits/<asset>/`. These dispositions resolve portfolio cardinality; they do not waive the defects recorded in those dossiers.

## Wave 2 accepted dispositions — August 12, 2026

- `nsag-site` — **P, canonical NSAG parent**, conditional on Stage B remediation. Keep one parent case study. The audit verified a substantial 40-endpoint public system, but production API calls are blocked while several handlers can falsely display success; pre-accreditation CE language, evidence/scoring claims, exposed historic HTML artifacts, accessibility, PDF, and NSAG/Aloha AI identity issues require remediation.
- `nsag-m1` — **C, NSAG component**, release-blocked. The assessment crashes after the first response because its Content Security Policy blocks required Chart.js; the same policy blocks PDF generation. Do not add a standalone portfolio card. The parent NSAG case study must describe it as a prototype/non-operational module until repaired and reverified.
- `nsag-m2` — **C, NSAG component**, release-blocked. The assessment likewise cannot advance past the first response, its promised PDF has no operational invocation, and privacy/scoring/claim boundaries require remediation. Do not add a standalone portfolio card.

Wave 2 evidence is stored under `audits/nsag-site/`, `audits/nsag-m1/`, and `audits/nsag-m2/`.

## Wave 3 accepted dispositions — August 12, 2026

- `nsag-m3` — **C, NSAG component**, release-blocked broken prototype. Shared assessment/PDF failures are compounded by a clipped primary CTA and unsafe or outdated psychedelic-medication framing, unsupported outcome anecdotes, simulated sector personalization, and unverified toolkit/report delivery.
- `nsag-m4` — **C, NSAG component**, release-blocked. The module inherits the blocked assessment/PDF path and additionally misgeneralizes a real cannabis documentation statistic, makes unverified program-outcome and clinical claims, uses cosmetic sector personalization, and retains copy from another module.
- `nsag-m5` — **C, NSAG component**, release-blocked. Its twelve nominal scenarios are six duplicated generic pairs that do not measure its six stated biophilic dimensions; clinical evidence is overgeneralized to civic settings and output precision is simulated.

Do not create standalone portfolio cards for Modules 3–5. Their accepted evidence lives under the corresponding `audits/nsag-m*/` directories.

## Wave 4 accepted dispositions — August 12, 2026

- `nsag-m6` — **C, NSAG component**, release-blocked. Duplicated generic item pairs do not measure the stated sponsorship dimensions, while public-body ethics, procurement, gifts, appropriations, tax, disclosure, constitutional, entity, and jurisdiction boundaries are materially absent.
- `nsag-m7` — **C, NSAG component**, release-blocked. Duplicated generic questions do not measure the six stated Conscious Cities dimensions; surveillance and data governance are absent, sector choice is cosmetic, and built-environment evidence is overgeneralized.
- `nsag-m8` — **C, NSAG component**, release-blocked. The questions have reasonable face alignment to the six Areas of Worklife but are unvalidated, and the tool over-infers institutional maturity from one respondent’s two-item-per-domain reflection. Employment, disability, clinical, privacy, and structured-debrief boundaries require remediation.

All three also inherit the blocked assessment/PDF and unreliable API-success patterns documented in their individual dossiers. Do not create standalone portfolio cards.

## Wave 5 accepted dispositions — August 12, 2026

- `nsag-m9` — **C, NSAG component**, release-blocked. The generic duplicated instrument does not measure the advertised cannabis-healthcare dimensions, and its headline misreads a single Washington primary-care documentation study as disclosure evidence. Product-specific clinical evidence, privacy, nondiscrimination, accessibility, and jurisdictional boundaries require reconstruction.
- `nsag-m10` — **C, NSAG component**, release-blocked. Its questions have some domain-specific face alignment but remain unvalidated and omit major healthcare-facility concerns including ventilation/infection control, water, surfaces, fire/egress, fall and behavioral safety, accessible routes/equipment, and resilience. Evidence and credentialing claims require correction.
- `nsag-m11` — **C, NSAG component**, release-blocked. The deployed tool is a generic clinical-AI accountability template rather than a medical-technology/evidence-lifecycle assessment. It omits classification, SaMD/CDS, FDA pathways, validation, quality systems, postmarket, cybersecurity, change control, and jurisdiction, while retaining contaminated copy from another module.

Do not create standalone portfolio cards for Modules 9–11. All three inherit the shared assessment/PDF/privacy/API defects documented in their dossiers.

## Wave 6 accepted dispositions — August 12, 2026

- `nsag-m12` — **C, NSAG component**, release-blocked. Its distinct education prompts have some face validity but cannot establish institutional maturity from one respondent and authored thresholds. All result tiers contain legal-space/client contamination, while education, child privacy, disability, discipline, trauma, and outcome claims need reconstruction.
- `nsag-m13` — **C, NSAG component**, release-blocked. Duplicated generic questions do not measure the named traditional/complementary-medicine domains and every tier contains unrelated legal-module copy. Cultural and Indigenous authority, traditional knowledge/IP, licensure/scope, safety, product quality, informed consent, claims regulation, equity, and jurisdiction require a purpose-built instrument.
- `nsag-m14` — **C, NSAG component**, release-blocked. Its foundational “legal vacuum / zero frameworks” premise is materially false. The module must distinguish current binding space law, national regimes, institutional/contractual governance, nonbinding instruments, actual gaps, and speculative future design. Its generic instrument omits the principal jurisdictional and operational categories.

Do not create standalone portfolio cards for Modules 12–14.

## Wave 7 accepted dispositions — August 12, 2026

- `nsag-m15` — **C, NSAG component**, immediate release hold. One generic readiness score impermissibly collapses punitive solitary/restrictive housing, detention, psychiatric seclusion, infection isolation, long-term care, and consensual extreme-environment work/research despite different authority, rights, consent, duration, safety, and jurisdiction. The instrument and output must be rebuilt by setting.
- `aiapc-site` — **P, independent public property**, prelaunch and release-blocked. It warrants a future independent RN Selected Work case study, explicitly labeled planned/prelaunch, after pricing/value math, tier/refund/renewal/ownership terms, subscription/checkout/delivery, API/privacy, high-stakes-content review, navigation, and licensing-document defects are remediated and reverified.
- `clerking-site` — **E, incomplete high-risk legal-marketplace experiment**. Keep private or visibly prelaunch; do not add to public RN Selected Work unless nationwide legality claims, UPL/ethics, confidentiality/conflicts, fee/classification/student rules, secure matter architecture, access control, and actual marketplace operations are resolved.

Wave 7 evidence lives under `audits/nsag-m15/`, `audits/aiapc-site/`, and `audits/clerking-site/`.

## Wave 8 accepted dispositions — August 12, 2026

- `curriculum-licensing` — **C, Aloha AI component/service line**, commercially release-blocked. Do not add a standalone card. Public claims require proof of delivery-ready curricula, chain of title and third-party rights, accurate degree/credit framing, and a real licensing/SOW framework before this can be marketed through Aloha AI.
- `eolpc-demo-v5` — **D, superseded predecessor** of canonical `eolpc-demo`. Retain one EOLPC case study; do not add or count v5 separately. The canonical deployment has an immediate privacy incident/release hold: `/api/queries` fails open and exposes stored query/visit records when its token is unset. Personal data is not reproduced in the audit. Containment and incident response take priority over routine remediation.
- `fadiman-atlas` — **E, incomplete high-risk named-person experiment**. Unpublish or access-restrict immediately; preserve privately. Do not add to RN Selected Work without documented name/likeness/product authorization, source-by-source rights clearance, medically safe and grounded product design, and a valid privacy/technical architecture. If authorization is unavailable, genericize as rights-cleared scholar-corpus infrastructure or archive/exclude.

Wave 8 evidence lives under `audits/curriculum-licensing/`, `audits/eolpc-demo-v5/`, and `audits/fadiman-atlas/`.

### EOLPC containment record

On August 12, 2026, canonical `eolpc-demo/api/queries.js` was patched on `main` at commit `10f7b7a8312a9dc29ab96ae535479f37d59baa1f` to fail closed when `QUERY_LOG_TOKEN` is absent, require Bearer authorization, reject non-GET methods, disable caching, and suppress configuration/raw-error disclosure. Production verification confirmed anonymous access returns HTTP 503 with only `{"error":"Service unavailable"}` and no stored records. The active exposure is contained. Retention/deletion, exposure-window, logging, and notification analysis remain open incident-response work.

## Wave 9 accepted dispositions — August 13, 2026

- `field-intelligence-os` — **I, internal infrastructure**, pre-alpha and release-blocked. The current private repository/protected preview is not the same product as the public `field-intelligence-os.vercel.app` Kanazi/Bugesera reporting interface. Ownership and deployment mapping for that public surface are unresolved; it requires access restriction, credential/integration and data-flow review, output sanitization, and incident analysis before any public representation. Do not add a portfolio card.
- `rn-agent-os` — **I, private Aloha AI infrastructure**, parented to Agentic Brand Management / `creator-brand-evidence`. Deterministic analyzers and scaffolding exist, while collectors, research/video evidence, measurement, learning, delivery, and alerts are simulated, incomplete, or broken. Keep private; no standalone portfolio card.
- `rn-portfolio` — **D, superseded portfolio**. RN Selected Work is the sole canonical public portfolio. The obsolete root and public registry were permanently redirected on August 13 at commits `7075fc9022e35b73bfed571cfd74cfe49cb4f687` and `b1963c0f976bc96da0b812952233c6ceb5ef948e`; production verification confirmed 308 responses for `/` and `/data/builds.json`. Historical exposure/cache review and private evidence migration remain open. Do not add a case-study card.

Wave 9 evidence lives under `audits/field-intelligence-os/`, `audits/rn-agent-os/`, and `audits/rn-portfolio/`.

## Wave 10 accepted dispositions — August 13, 2026

- `y` — **D, private superseded predecessor** of `nsag-m3`. Canonical chain: `y` → `nsag-m3` component → NSAG parent. Archive/rename and prevent deployment; no RN Selected Work card, link, or additional build count.
- `aloha-ai-governance` — **P, distinct public Aloha AI build**, release-blocked. The live pipeline/filtering is real, but the current product is an unreviewed web-search feed rather than authoritative “primary-source intelligence.” Its public sweep endpoint can incur paid requests, overwrite Redis, and trigger Slack, while untrusted result content reaches unsanitized HTML. Rebuild around official source authorities, legal status/version/effective-date tracking, human review, and safe operations before adding a case study.
- `aloha-behavioral-intelligence` — **C, Aloha AI cultural-signal/research component**, release-blocked. Production API routing is broken and the available Wikipedia/Reddit/news measures are attention proxies, not valid measures of purchasing, identity, causality, or neurological distinctiveness. Reframe as a transparent, human-reviewed Cultural Signal Brief with evidence/hypothesis separation and prohibited-inference/privacy controls; no standalone card.

Wave 10 evidence lives under `audits/y/`, `audits/aloha-ai-governance/`, and `audits/aloha-behavioral-intelligence/`.

## Wave 11 accepted dispositions — August 13, 2026

- `aloha-culture-monitor` — **C, release-blocked Aloha AI cultural-signal component**. Consolidate with `aloha-behavioral-intelligence` into one governed Cultural Signal Brief/Watchlist. Its “live/daily” data was materially stale, Google Trends values were null, behavioral/consumer causality and governance-risk labels were unsupported, and public refresh/contact paths require security and privacy reconstruction. No standalone card.
- `aloha-dea-tracker` — **P, distinct public Aloha AI regulatory-intelligence build**, release-blocked. Its weekly Federal Register pipeline and filters are real, but ingestion is truncated, lifecycle/effective-date/current-law modeling is absent, and live legal categories contain misclassifications. Public mutation and unsanitized-content paths require remediation before a case study is added.
- `aloha-encoding-effect` — **C, release-blocked Aloha AI editorial/research component**. It is not a validated neuroscience mechanism or product. Unsupported quantitative examples, deterministic neuro/identity/purchase language, broken/false-success inquiry flows, and missing privacy/methods infrastructure require reconstruction. Consolidate within the governed cultural/behavioral research line; no standalone card.

Wave 11 evidence lives under `audits/aloha-culture-monitor/`, `audits/aloha-dea-tracker/`, and `audits/aloha-encoding-effect/`.

## Wave 12 accepted dispositions — August 13, 2026

- `aloha-governance-audit` — **C, release-blocked Aloha AI campaign-governance component**. The current source does not build, the public domain is an older divergent deployment, and the checkbox-to-paragraph interaction is not an audit. Rebuild as a human-reviewed campaign issue-spotting intake; no standalone card.
- `aloha-legal-ai-monitor` — **P, distinct public Aloha AI regulatory-intelligence build**, release-blocked. The weekly discovery pipeline works, but its badges are query themes rather than verified authorities, jurisdictions, instruments, or operative status; the live dataset lacks direct issuing-authority coverage. Reconstruct around authoritative sources, human legal review, endpoint authentication, and URL controls before adding its case study.
- `aloha-suppression-sweep` — **C, release-blocked Aloha AI platform-access/moderation evidence component**. The dashboard is real, but suppression is undefined across heterogeneous events, HOT/WARM are not evidence grades, and unreviewed search candidates can become accusations and false positives. State-changing sweeps, stored-XSS, methods/corrections/privacy, and causal/intent/discrimination claims require governance. No standalone card.

Wave 12 evidence lives under `audits/aloha-governance-audit/`, `audits/aloha-legal-ai-monitor/`, and `audits/aloha-suppression-sweep/`.

## Wave 13 accepted dispositions — August 13, 2026

- `aloha-third-asset` — **C, Aloha AI editorial/positioning component**. It is a long-form essay, not software. Do not add a build card, case study, live-tool link, or count. After evidence, suite-readiness, privacy, legal, neuroscience, and operational claims are corrected, place it in Writing/Editorial with a “Read article” action.
- `nsag-admin` — **I, private NSAG infrastructure; C, platform component**, release-blocked. It is a lead-viewing/export dashboard, not an evidence or module editor. Shared-key URL authentication, stored XSS, CSV injection, assessment-integrity, and cross-service PII risks prohibit public linking or screenshots. No standalone card.
- `nsag-api` — **I, private NSAG service infrastructure**, release-blocked. Public unauthenticated digest/write effects, URL keys, sensitive multi-service data handling, false-success contracts, and caller-controlled assessment data require redesign. Never provide a standalone card or public API link.

Wave 13 evidence lives under `audits/aloha-third-asset/`, `audits/nsag-admin/`, and `audits/nsag-api/`.

## Wave 14 accepted disposition and reconciliation — August 13, 2026

- `rn-api` — **I, internal shared inquiry relay**, release-blocked for new integrations. It is one public Resend mail relay, not a general API, AI system, CRM, or portfolio build. Wildcard CORS, anonymous unbounded writes, missing validation/escaping/rate controls, provider false-success, raw error disclosure, and PII/processorship/retention boundaries require remediation. No card, case study, public endpoint link, or build count.
- GitHub cardinality reconciliation: **73/73 unique repositories accounted for, zero U dispositions**. Machine ledger: `audits/estate/GITHUB_73_FINAL_RECONCILIATION.json`.
- Frozen Vercel-50 reconciliation: **50/50 rows dispositioned**, but the “50” was a connector page cap rather than a complete estate. Direct lookup established 23 additional project names, for a verified minimum of 73 accessible Vercel projects. Expanded 73-row reconciliation is required before treating the Vercel inventory section as current.

The GitHub inventory is disposition-complete but not crawl-complete: 37 repositories have repository-specific Stage A evidence and 36 rely on existing representation/mapping. The frozen Vercel set had only 18 accepted Stage A project dossiers. These evidence gaps now control represented-site recertification waves.

Expanded Vercel reconciliation subsequently validated 73 unique project names and IDs, with zero U dispositions: P39 / C22 / I4 / D5 / E2 / X1. Evidence: `audits/estate/VERCEL_73_EXPANDED_RECONCILIATION.*`. Of those, 37 had accepted Stage A evidence, 35 remained mapped-only, and one is the portfolio index. The expanded count supersedes the frozen 50-project heading below while preserving that original snapshot for traceability.

## Represented-site recertification R1 — August 13, 2026

- `legal-risk-monitor` — **P, retain individual case study; live controlled prototype/noindex; release-blocked**. Production now renders 15 signals, superseding the earlier loading/empty evidence. Case-study language must disclose hybrid/static provenance, authored keyword risk tiers, crawler-visible literal-route defect, RSS HTML-injection risk, fail-open alert sending, false-success subscription, PII retention, and missing unsubscribe/privacy controls.
- `nervous-system-studio` — **P, retain individual case study; release-blocked**. Correct framing: “Local-First Set-and-Setting Research Preview.” The historic `${u}` defect is no longer reproducible and 19 evidence links resolve. Current blockers are broken analytics syntax, misleading local-only waitlist/contact states, cross-origin lead handling, plaintext sensitive local data, and product-maturity/evidence overstatement.

## Represented-site recertification R2 — August 13, 2026

- `eolpc-demo` — **P, one canonical case study; release-held**. The public query-log exposure is contained, but high-stakes query/visit logging, method/abuse controls, unsanitized upstream content, clinical/legal routing and authority, deterministic-synthesis claims, proposed-vs-working layers, privacy/discovery routes, lead/analytics, accessibility, and rights require remediation. `eolpc-demo-v5` remains D/no second count.
- `aloha-ai-consulting` — **P, canonical Aloha AI public parent; represented with corrections**. Verified real delivery includes a browser-local Studio, three decision tools, complete 24-chapter masterclass, 18-lesson Citation Verifier, and Decision Desk Issues 02–11. Do not call it a University/LMS/credentialing institution or claim AI inference/customer outcomes. The Clinic is conditional inquiry; candidate offers/sponsorship are proposed. Keep NSAG and Institutions of One separate.
- `zero-to-frontier` — **P, one canonical controlled prototype; release-blocked**. All 21 canonical HTML routes work and its library contains 237 rows/233 unique destinations. Correct privacy/contact/analytics contradictions, false success, universal sourcing/verification language, dated volatile claims, missing policy/discovery routes, and duplicate canonicalization. `z2f-live` remains D/no second count.

## Represented-site recertification R3 — August 13, 2026

- `law-communication-library` — **P, one canonical legal knowledge-architecture case; release-held for citations/currentness**. All 143 indexed article routes return 200 and represent about 217,000 body words, but none contains a clickable external legal-authority/source link. Do not claim current, accurate, source-backed, maintained, cite-checked, or Antithesis-reviewed absent per-article sources, reviewer identity, authority/effective-date tracking, changelog, and monitoring.
- `bm-intel` — **P, organization-specific public concept; release-blocked and uncommissioned**. It exposes 27 signals/17 sources, but unauthenticated admin and mutation APIs make the record untrustworthy, source check dates are null, no crawler/scheduler exists, old records appear new, legal countdowns are stale, and no proposal/calculator/export/download exists.
- `psychops-intel` — **P, one release-blocked canonical product** titled “Psychedelic Operations Intelligence — Psych Ops Intel.” Remove the Atlas duplicate and count. The 47-row/44-URL feed lacks UI-required fields, defaults status incorrectly, breaks filters, relies on secondary/off-topic candidates and unsupported fallback claims, and exposes an unauthenticated method-unsafe sweep. Replace unevidenced structured-private-database claims with transparent controlled-prototype evidence.

## Represented-site recertification R4 — August 13, 2026

- `flexjd-site` — **P, retain featured case with qualification**. Twenty HTML routes work and the data contains 372 rows, not 372 verified opportunities: 44 are category/header rows, leaving at most about 328 substantive entries before deduplication/currentness review. Add record-level status/deadline/last-verified fields, repair malformed sources, fix analytics/contact/privacy/sitemap/governance, and avoid claiming institutional commissioning/endorsement without evidence.
- `keiki-robotics-oahu-ai` — **P, organization/event-specific static family resource; release-blocked**. It is not yet a maintained pathway, official event deliverable, team finder, enrollment system, or durable infrastructure. Correct unsupported Oʻahu A.I./Island Robotics collaboration language, September 5 event timing, robotics/tool/age claims, access/cost/Hawaiʻi prevalence, child/privacy, and accessibility boundaries.
- `kids-developing-brains` — **P only as a prelaunch controlled NSAG M12 applied concept; release-blocked**. It is not a live workshop business: cross-origin lead flows fail while displaying success; paid workshop/guide/school/district offers lack checkout, dates, finished materials, SOW, or fulfillment; diagnostic scoring is invalid; and age-specific neuroscience promises lack research links. Replace “live/primary-source-grounded workshop” claims with prelaunch architecture/evidence boundaries.

## Represented-site recertification R5 — August 13, 2026

- `ownership-platform` — **P, retain one featured Institutions of One case study; release-blocked pending instrument and data-governance remediation**. Ownership Platform is the implementation layer, not a second build or count. Sixty-two sitemap routes work, including 41 Observatory cases, two 20-item pilots, four Edit editions, and compare/evidence/participation architecture. The assessments and score bands are authored, provisional, equal-weight, and unvalidated; projected gains are recalculations, not causal outcomes. Correct prescriptive legal/IP/entity language, disconnected dashboard claims, partial-write API contracts, privacy/processors, research-participant data, and multi-tenant controls.
- `patent-first-steps-thorncrest` — **P, featured independent legal-education concept; public-link release-blocked**. No evidence supports commission, authorization, moderator review, distribution, or a ThornCrest relationship. The live product is a static one-page guide, not intake, a calculator, saved progress, a PDF, attorney booking, or legal service. Correct event timing, micro-entity eligibility, provisional-filing/disclosure/international-grace guidance, and inventorship, ownership, minor, school/employer, assignment, and freedom-to-operate boundaries.
- `claude-smb-buechler` — **P only as an independent generic product-translation concept; release-blocked for currentness and representation**. Production contains no Buechler Pacific or Hawaiʻi references, and source history removed earlier Buechler review/approval language. Do not claim tailoring, organizational research, commission, authorization, review, delivery, use, attendance, or relationship. The artifact is a static guide with no calculator, API, connector, or workflow implementation; its “Download PDF” control prints, and its Claude product/security guidance is stale and incomplete.

## Represented-site recertification R6 — August 13, 2026

- `sovereign-stack` — **P, one canonical browser-local proposal prototype; representation/remediation hold**. It provides 12 explorable rooms and local JSON/Markdown export without a backend, authentication, API, or analytics. Reframe as an independently initiated Aloha AI governance-layer concept for Purple Maiʻa; remove present-tense ownership, client, adoption, installation, security, authorization, ownership-transfer, and IDS-certification implications. Correct persistence copy, evidence boundaries, and missing build/test/lint controls.
- `gapi-governance` — **P, one canonical NSAG Applied concept; public commercial/certification presentation release-blocked**. The implementation is one static page and a five-question unvalidated browser score, not a certification program, assessment API, MCP integration, evidence workflow, report, monitoring system, registry, customer base, or outcome record. Replace “live applied assessment” with “live framework and readiness-prototype concept,” remove unsupported certification/pricing/exposure claims, and keep Aloha AI attribution limited to technical implementation.
- `provenance-verify` — **P only as a prelaunch manual evidence-review service concept; release-blocked**. It does not implement technical provenance, authenticity verification, C2PA/Content Credentials, source retrieval, hashing, signatures, cryptography, or chain of custody. Its browser-local regex preflight detects citation-shaped markers and can reward fabricated text. Correct false-success lead flows, intake/privacy/confidentiality/privilege/conflicts boundaries, pricing/scope contradictions, unsupported sanctions/retraction/performance claims, and absent sample/delivery evidence.

## Represented-site recertification R7 — August 13, 2026

- `ai-budget-calc` — **P, retain one distinct calculator case; release-blocked**. The editable phase model, labor arithmetic, and CSV export work, but it is an illustrative professional-services labor-scenario tool—not a complete AI budget, quote, benchmark, tax engine, or operating paid product. Correct Hawaiʻi GET and self-employment-tax methodology, unsupported fee/currentness/default claims, high-stakes compliance implications, client-side phase-name injection, unsafe/false-success lead delivery, marketing consent/privacy/retention/unsubscribe, discovery metadata, and accessibility. Use the title “AI Build Labor Scenario Calculator.”
- `opfos-firm` — **P, canonical Institutions of One service-architecture concept; current public sales surface C/release-blocked**. The repository contains no advertised Notion template, SKILL files, agents, documentation, Loom, checklist, checkout, delivery, or client workspace. Production security policy blocks every external lead request, while enrollment, contact, and checklist flows falsely show success. Change “Live operating system” to “Live service-architecture prototype”; Institutions of One owns the concept, Aloha AI is secondary technical implementation, and NSAG is not the parent. Suppress the live link until forms, assets, fulfillment, and commercial terms are real and verified.
- `aloha-build-club` — **P only as prelaunch community/membership architecture; release-blocked**. No active cohort, schedule, live-room platform, member access, recordings, pod, nudges, Shipped List, checkout, subscriptions, cancellation, course, project/resource workspace, or fulfillment is verified. Signup/contact delivery is blocked or false-successful, email is persisted locally without disclosure, commercial and community governance is absent, and cited cooperation evidence does not establish the advertised accountability effect. Replace “Live community concept” and recurring-participation language with a prelaunch landing-page prototype boundary.

## Vercel projects requiring explicit component or disposition treatment

### NSAG assessment modules — provisional C

`nsag-m1` through `nsag-m15` are accepted C dispositions with release holds. All fifteen are linked from the NSAG case study and remain components; no separate portfolio cards should be created. Their individual dossiers govern remediation and evidence language.

### Other Vercel projects

- `aloha-ai-consulting-an6n` — D; duplicate of canonical `aloha-ai-consulting`; retire after dependency/alias review.
- `myelin-ce` — D; retired/superseded deployment intended for Aloha AI Learning consolidation; broken successor requires remediation.
- `rn-api` — I; internal shared inquiry relay, release-blocked for new integrations; no public card/link
- `rn-selected-work` — X from child-site crawling; this portfolio is audited as the index itself.
- `z2f-live` — D; duplicate of canonical P asset `zero-to-frontier`; retire or redirect after remediation planning.

## GitHub repositories not yet represented or dispositioned

The following repositories are absent as canonical case studies and need review. Names alone are not sufficient to decide whether they should become public portfolio records.

### Aloha-related systems

- `aloha-ai-governance` — P; distinct public regulatory-intelligence build, release-blocked pending authoritative/security reconstruction
- `aloha-behavioral-intelligence` — C; Aloha AI cultural-signal/research component, release-blocked
- `aloha-culture-monitor` — C; consolidate into Aloha AI Cultural Signal Brief/Watchlist; no standalone card
- `aloha-dea-tracker` — P; distinct regulatory-intelligence build, release-blocked
- `aloha-encoding-effect` — C; consolidate into Aloha AI cultural/behavioral research line; no standalone card
- `aloha-governance-audit` — C; Aloha AI campaign-governance issue-spotting component, release-blocked
- `aloha-legal-ai-monitor` — P; distinct legal-AI regulatory-intelligence build, release-blocked
- `aloha-suppression-sweep` — C; Aloha AI platform-access/moderation evidence component, release-blocked
- `aloha-third-asset` — C; Aloha AI editorial/positioning component; future Writing entry after claim remediation

### NSAG infrastructure and parent system

- `nsag-admin` — I/C; private release-blocked operations component; no public card/link
- `nsag-api` — I; private release-blocked service infrastructure; no public card/link
- `nsag-site` — P; canonical NSAG parent audited in Wave 2; Stage B remediation required
- `nsag-m1` through `nsag-m15` — C; individually audited release-blocked components; no separate cards

### Alternate, adjacent, or potentially independent builds

- `aiapc-site` — P; independent public property, prelaunch/release-blocked; future case study after remediation
- `clerking-site` — E; private/prelaunch high-risk legal-marketplace experiment; exclude from public portfolio for now
- `curriculum-licensing` — C; Aloha AI component/service line, commercially release-blocked
- `eolpc-demo-v5` — D; superseded predecessor of canonical `eolpc-demo`; canonical has immediate privacy release hold
- `fadiman-atlas` — E; access-restrict and keep off public portfolio pending authorization/rights/safety reconstruction
- `field-intelligence-os` — I; private pre-alpha infrastructure; public hostname ownership/product mismatch unresolved
- `myelin-ce` — D; retired/superseded deployment intended for Aloha AI Learning consolidation
- `rn-agent-os` — I; private Aloha AI infrastructure; no standalone card
- `rn-portfolio` — D; superseded and production-redirected to RN Selected Work
- `y` — D; private superseded predecessor of `nsag-m3`

### Infrastructure

- `rn-api` — I; internal shared inquiry relay; no public card/link

## Frozen Vercel snapshot — 50-project connector page

`ai-budget-calc`, `aloha-ai-consulting`, `aloha-ai-consulting-an6n`, `aloha-build-club`, `aloha-creator-rights`, `bm-intel`, `creator-brand-evidence`, `destig-toolkit`, `dru-assessment`, `entheogen-atlas`, `eolpc-demo`, `flexjd-site`, `gapi-governance`, `kids-developing-brains`, `law-communication-library`, `legal-risk-monitor`, `myelin-ce`, `narch-advisory`, `nervous-system-studio`, `nsag-m1`, `nsag-m2`, `nsag-m3`, `nsag-m4`, `nsag-m5`, `nsag-m6`, `nsag-m7`, `nsag-m8`, `nsag-m9`, `nsag-m10`, `nsag-m11`, `nsag-m12`, `nsag-m13`, `nsag-m14`, `nsag-m15`, `opfos-firm`, `ownership-platform`, `provenance-verify`, `psych-ops-directory`, `psychonaut-bookworm`, `psychops-intel`, `regac-academy`, `rn-api`, `rn-selected-work`, `set-for-life`, `sovereign-stack`, `sport-nsag`, `transform-observatory`, `wnh-guide`, `z2f-live`, and `zero-to-frontier`.

This list is retained only as the original capped snapshot. The controlling project-level inventory is `audits/estate/VERCEL_73_EXPANDED_RECONCILIATION.json`.

## Complete GitHub inventory — 73 repositories

`ai-budget-calc`, `aiapc-site`, `aloha-ai-consulting`, `aloha-ai-governance`, `aloha-behavioral-intelligence`, `aloha-build-club`, `aloha-creator-rights`, `aloha-culture-monitor`, `aloha-dea-tracker`, `aloha-encoding-effect`, `aloha-governance-audit`, `aloha-legal-ai-monitor`, `aloha-suppression-sweep`, `aloha-third-asset`, `bm-intel`, `claude-smb-buechler`, `clerking-site`, `creator-brand-evidence`, `curriculum-licensing`, `destig-toolkit`, `dru-assessment`, `entheogen-atlas`, `eolpc-demo`, `eolpc-demo-v5`, `fadiman-atlas`, `field-intelligence-os`, `flexjd-site`, `gapi-governance`, `inflection-radar-real-chemistry`, `keiki-robotics-oahu-ai`, `kids-developing-brains`, `law-communication-library`, `legal-risk-monitor`, `myelin-ce`, `narch-advisory`, `nervous-system-studio`, `nsag-admin`, `nsag-api`, `nsag-m1`, `nsag-m2`, `nsag-m3`, `nsag-m4`, `nsag-m5`, `nsag-m6`, `nsag-m7`, `nsag-m8`, `nsag-m9`, `nsag-m10`, `nsag-m11`, `nsag-m12`, `nsag-m13`, `nsag-m14`, `nsag-m15`, `nsag-site`, `opfos-firm`, `ownership-platform`, `patent-first-steps-thorncrest`, `provenance-verify`, `psych-ops-directory`, `psychonaut-bookworm`, `psychops-intel`, `regac-academy`, `rn-agent-os`, `rn-api`, `rn-portfolio`, `rn-selected-work`, `set-for-life`, `sovereign-stack`, `sport-nsag`, `transform-observatory`, `wnh-guide`, `y`, and `zero-to-frontier`.

## Certification gate

Do not certify the estate as complete until every GitHub repository and Vercel project has:

1. one disposition code;
2. a canonical parent or case-study mapping;
3. a repository and deployment relationship, when applicable;
4. a privacy/publication boundary;
5. an assigned crawl status;
6. a remediation status when defects are found; and
7. a final decision: publish, merge, maintain privately, archive, supersede, or exclude.
