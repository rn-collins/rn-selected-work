# RN Digital Build Estate — Master Asset Reconciliation

Inventory date: August 12, 2026 (HST)

## Certification status

**Not yet complete.** The connected accounts currently expose:

- 73 GitHub repositories owned by `rn-collins`
- 50 Vercel projects in the RN Collins team
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

## Vercel projects requiring explicit component or disposition treatment

### NSAG assessment modules — provisional C

`nsag-m1` through `nsag-m15` are accepted C dispositions with release holds. All fifteen are linked from the NSAG case study and remain components; no separate portfolio cards should be created. Their individual dossiers govern remediation and evidence language.

### Other Vercel projects

- `aloha-ai-consulting-an6n` — D; duplicate of canonical `aloha-ai-consulting`; retire after dependency/alias review.
- `myelin-ce` — D; retired/superseded deployment intended for Aloha AI Learning consolidation; broken successor requires remediation.
- `rn-api` — provisional I; determine which public products depend on it and test those integrations.
- `rn-selected-work` — X from child-site crawling; this portfolio is audited as the index itself.
- `z2f-live` — D; duplicate of canonical P asset `zero-to-frontier`; retire or redirect after remediation planning.

## GitHub repositories not yet represented or dispositioned

The following repositories are absent as canonical case studies and need review. Names alone are not sufficient to decide whether they should become public portfolio records.

### Aloha-related systems

- `aloha-ai-governance` — U
- `aloha-behavioral-intelligence` — U
- `aloha-culture-monitor` — U
- `aloha-dea-tracker` — U
- `aloha-encoding-effect` — U
- `aloha-governance-audit` — U
- `aloha-legal-ai-monitor` — U
- `aloha-suppression-sweep` — U
- `aloha-third-asset` — U

### NSAG infrastructure and parent system

- `nsag-admin` — provisional I
- `nsag-api` — provisional I
- `nsag-site` — U; public live destination referenced by the NSAG case study but absent from the connected Vercel-project list
- `nsag-m1` through `nsag-m15` — provisional C; separate crawl required

### Alternate, adjacent, or potentially independent builds

- `aiapc-site` — P; independent public property, prelaunch/release-blocked; future case study after remediation
- `clerking-site` — E; private/prelaunch high-risk legal-marketplace experiment; exclude from public portfolio for now
- `curriculum-licensing` — C; Aloha AI component/service line, commercially release-blocked
- `eolpc-demo-v5` — D; superseded predecessor of canonical `eolpc-demo`; canonical has immediate privacy release hold
- `fadiman-atlas` — E; access-restrict and keep off public portfolio pending authorization/rights/safety reconstruction
- `field-intelligence-os` — I; private pre-alpha infrastructure; public hostname ownership/product mismatch unresolved
- `myelin-ce` — U
- `rn-agent-os` — I; private Aloha AI infrastructure; no standalone card
- `rn-portfolio` — D; superseded and production-redirected to RN Selected Work
- `y` — U

### Infrastructure

- `rn-api` — provisional I

## Complete Vercel inventory — 50 projects

`ai-budget-calc`, `aloha-ai-consulting`, `aloha-ai-consulting-an6n`, `aloha-build-club`, `aloha-creator-rights`, `bm-intel`, `creator-brand-evidence`, `destig-toolkit`, `dru-assessment`, `entheogen-atlas`, `eolpc-demo`, `flexjd-site`, `gapi-governance`, `kids-developing-brains`, `law-communication-library`, `legal-risk-monitor`, `myelin-ce`, `narch-advisory`, `nervous-system-studio`, `nsag-m1`, `nsag-m2`, `nsag-m3`, `nsag-m4`, `nsag-m5`, `nsag-m6`, `nsag-m7`, `nsag-m8`, `nsag-m9`, `nsag-m10`, `nsag-m11`, `nsag-m12`, `nsag-m13`, `nsag-m14`, `nsag-m15`, `opfos-firm`, `ownership-platform`, `provenance-verify`, `psych-ops-directory`, `psychonaut-bookworm`, `psychops-intel`, `regac-academy`, `rn-api`, `rn-selected-work`, `set-for-life`, `sovereign-stack`, `sport-nsag`, `transform-observatory`, `wnh-guide`, `z2f-live`, and `zero-to-frontier`.

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
