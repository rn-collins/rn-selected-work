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

## Vercel projects requiring explicit component or disposition treatment

### NSAG assessment modules — provisional C

`nsag-m1`, `nsag-m2`, `nsag-m3`, `nsag-m4`, `nsag-m5`, `nsag-m6`, `nsag-m7`, `nsag-m8`, `nsag-m9`, `nsag-m10`, `nsag-m11`, `nsag-m12`, `nsag-m13`, `nsag-m14`, and `nsag-m15` are linked from the NSAG case study, but none currently has its own case-study record, crawl dossier, or individual disposition. Each is a deployed consumer interface and therefore requires a separate crawl assignment even if all fifteen remain components of the parent NSAG practice.

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

- `aiapc-site` — U
- `clerking-site` — U
- `curriculum-licensing` — U
- `eolpc-demo-v5` — U; compare with canonical `eolpc-demo`
- `fadiman-atlas` — U
- `field-intelligence-os` — U
- `myelin-ce` — U
- `rn-agent-os` — U
- `rn-portfolio` — U; likely an older or separate portfolio surface
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
