# Vercel 73-project expanded reconciliation

**As of:** 2026-08-13  
**Scope:** the frozen, previously reconciled 50-project connector result plus 23 additional projects resolved individually by exact Vercel project lookup  
**Machine-readable row ledger:** [`VERCEL_73_EXPANDED_RECONCILIATION.json`](./VERCEL_73_EXPANDED_RECONCILIATION.json)

## Bottom line

This register establishes **73 unique Vercel projects as a verified minimum**, not an exhaustive account-wide total. The available project-list operation returned at most 50 records and exposed no usable continuation cursor. Exact direct lookups then verified 23 additional projects, including their immutable Vercel project IDs. Therefore 73 is the evidence-backed floor; it must not be described as “all Vercel projects” unless a future uncapped export or API pagination proves that conclusion.

The JSON ledger is the authoritative 73-row record. Every row contains:

- project name and immutable Vercel project ID;
- all domains returned by the direct/frozen evidence and the selected canonical URL (or an explicit null where Vercel returned no hostname);
- one final disposition: **P, C, I, D, E, or X**;
- repository and parent-case-study mapping;
- public/protected boundary and latest observed production state;
- Stage A status;
- exact RN Selected Work treatment; and
- an unresolved-evidence note, including an affirmative no-additional-identity-gap statement when applicable.

There are **no `U` dispositions and no duplicate project names**.

## Validated totals

| Measure | Count |
|---|---:|
| Verified minimum projects | **73** |
| Unique project names | **73** |
| P — primary/canonical | 39 |
| C — component/child | 22 |
| I — internal/private infrastructure | 4 |
| D — duplicate/superseded | 5 |
| E — experimental/restricted | 2 |
| X — excluded/non-portfolio utility | 1 |
| U — unresolved disposition | **0** |
| Accepted Stage A dossier | 37 |
| Missing Stage A dossier | 35 |
| Portfolio index, intentionally outside child-site Stage A count | 1 |

The disposition sum is `39 + 22 + 4 + 5 + 2 + 1 = 73`. The Stage A sum is `37 + 35 + 1 = 73`.

## The 23 directly resolved projects outside the frozen 50

These are not inferred aliases. Each was resolved by exact project lookup and has a distinct Vercel project ID.

| Project | Vercel project ID | Disposition | Stage A | RN Selected Work treatment |
|---|---|:---:|:---:|---|
| aiapc-site | `prj_JezysFlSTBWHIsWpu0H7eKqra0S1` | P | accepted | one canonical case study after release blockers are remediated |
| aloha-ai-governance | `prj_81P3OuCvPyAFtQj4rYfn9RtyuegT` | P | accepted | one canonical case study after remediation |
| aloha-behavioral-intelligence | `prj_SdSFD3kvP3KyH7Vppc2tmmXz8aBf` | C | accepted | account under the Aloha monitoring/intelligence parent; no standalone card |
| aloha-culture-monitor | `prj_GGBLEbAHnQz9NKG1vLM4z8wiogar` | C | accepted | parent-case-study component; no standalone card |
| aloha-dea-tracker | `prj_krFpy29RfSbHyX6P4t1L1YRm1h93` | P | accepted | one canonical case study after remediation |
| aloha-encoding-effect | `prj_g8g3uSSAicXl0ibfbx4YdARWn5qu` | C | accepted | parent-case-study component; no standalone card |
| aloha-governance-audit | `prj_VHYiVR5fGBSQIpZ5S1Pae2YiAfa6` | C | accepted | parent-case-study component; do not promote the stale/error deployment |
| aloha-legal-ai-monitor | `prj_LQheiAkE4zbDqYa6hbZjUqX5OkvH` | P | accepted | one canonical case study after remediation |
| aloha-suppression-sweep | `prj_kAcYyYtJpqxxTetEX1nB6MsUYhNy` | C | accepted | parent-case-study component; no standalone card |
| aloha-third-asset | `prj_HiMPG5x0ehleyypiNUlUhkhkZWRs` | C | accepted | parent-case-study component; no standalone card |
| claude-smb-buechler | `prj_NdA7pkdbO82rvQH0ot5D92M8DBkz` | P | missing | retain the existing Buechler representation pending a dedicated Stage A audit |
| clerking-site | `prj_RH1wNXo3dWO81otRn9tuXCRE8WMm` | E | accepted | exclude while experimental/high-risk |
| curriculum-licensing | `prj_Sr40bxA3TylyDaLpeJi7zwJt2Jon` | C | accepted | protected commercial component; no standalone card |
| eolpc-demo-v5 | `prj_eDDCK4VS9Yxl4zPboYiPq3bsMGIf` | D | accepted | retire/redirect/supersede; no standalone card |
| fadiman-atlas | `prj_9IMhGDdLu2rAdIhGEhqiSg2ALGcI` | E | accepted | exclude and access-restrict while high-risk/experimental |
| field-intelligence-os | `prj_2HwLUmJoU9yuwSgR24H31OjYD9db` | I | accepted | private infrastructure; no card or public operations link |
| inflection-radar-real-chemistry | `prj_ruM2mYmrKx0SwUpUlKbUCjv8j78T` | P | missing | retain one existing project representation pending Stage A |
| keiki-robotics-oahu-ai | `prj_537kS7NHBYGCLL86dvVAj0auT6pq` | P | missing | retain one existing project representation pending Stage A |
| nsag-admin | `prj_pZYVlPZsRPs22oOvXqNrfV3BfcWq` | I | accepted | private infrastructure; never a portfolio card or public admin link |
| nsag-api | `prj_TZwc01ElVHQ6olEZ8epwk1lVBo98` | I | accepted | private infrastructure; never a portfolio card, screenshot, or build-count increment |
| nsag-site | `prj_hbUiw4Cu4FT4LyTBWLWFozSABw7n` | P | accepted | one canonical NSAG parent case study after remediation |
| patent-first-steps-thorncrest | `prj_mAgsjIGmsEfOxqyuJJaqLJ6Vc1Qi` | P | missing | retain one ThornCrest representation pending Stage A |
| rn-portfolio | `prj_kbNUDrhFWjbRziXs5fTDwOuLkXZV` | D | accepted | superseded portfolio; redirect/retire, no standalone card |

## Canonical, component, duplicate, internal, experimental, and excluded boundaries

Disposition is assigned at the Vercel-project level, while RN Selected Work representation is assigned at the case-study level. A Vercel project does **not** automatically earn its own public card.

- **P:** may own or support one canonical case study, subject to its dossier and remediation state.
- **C:** belongs inside a parent system/case study and must not inflate the public build count.
- **I:** operational, API, or administrative infrastructure. It must remain private/protected and must not be exposed through cards, screenshots, admin URLs, or build counts.
- **D:** alternate, legacy, duplicate, or superseded deployment. Redirect, archive, or retire it; keep one canonical public story.
- **E:** experimental/high-risk. Exclude from RN Selected Work unless a later safety, authorization, and release review changes the disposition.
- **X:** excluded utility/non-portfolio property.

`rn-selected-work` is the canonical portfolio index and is marked `index_scope`, not treated as one of its own child builds.

## Alias and fragmentation controls

The register preserves separate Vercel identities while preventing duplicate public stories:

- `aloha-ai-consulting-an6n` is a protected/non-indexable duplicate of the canonical Aloha AI property.
- `z2f-live` and the Zero → Frontier deployment family resolve to one canonical Zero → Frontier case study.
- `myelin-ce` is superseded into Aloha AI Learning.
- `eolpc-demo-v5` is a superseded predecessor and receives no independent card.
- `rn-portfolio` is the superseded portfolio and should redirect to RN Selected Work.
- PsychOps-related deployments may be technically distinct, but their public treatment must remain one coherent canonical story unless the portfolio taxonomy explicitly proves separate products.
- NSAG modules (`nsag-m1` through `nsag-m15`) are components under one NSAG parent story, not 15 independent builds.

## Public/protected and release boundary

The JSON row field `public_protected_boundary` is authoritative for each project. Important exceptions requiring operational attention are:

- `nsag-admin`, `nsag-api`, and `field-intelligence-os` are infrastructure, regardless of whether a public hostname currently responds.
- `clerking-site` and `fadiman-atlas` are experimental/high-risk and should not be publicly promoted.
- `aloha-ai-consulting-an6n` is a protected duplicate, not a second portfolio property.
- `curriculum-licensing` is a protected commercial component.
- `aloha-ai-consulting-an6n` and `aloha-governance-audit` had observed production error conditions in the evidence set; `curriculum-licensing` was blocked. Build state is not a disposition and does not change the RN Selected Work boundary.

## Unresolved evidence and remaining work

1. **Account completeness remains unproven.** The connector cap prevents an exhaustive total; 73 is the verified minimum.
2. **`field-intelligence-os` has no returned domain/canonical URL.** Its project identity is verified, but hostname ownership/product mapping remains unresolved.
3. **Thirty-five projects lack accepted Stage A dossiers.** Their inclusion in the asset register is not a quality, safety, functionality, or copy certification.
4. **`rn-api` remains provisional infrastructure.** Its integration/security relationship requires a dedicated Stage A audit.
5. **Legacy public aliases and orphan domains require an operational redirect/archive pass.** The ledger determines treatment but does not itself mutate Vercel or source repositories.
6. **Current build state is a point-in-time observation.** `READY`, `ERROR`, `BLOCKED`, or unknown states must be rechecked before release.

## Validation performed

The final JSON was machine-checked for:

- exactly 73 rows;
- exactly 73 unique project names;
- no duplicate project names;
- only `P`, `C`, `I`, `D`, `E`, and `X` dispositions;
- zero `U` dispositions;
- disposition totals matching 73;
- explicit Stage A state on every row (`accepted`, `missing`, or `index_scope`);
- an RN Selected Work treatment and unresolved-evidence note on every row; and
- a verified Vercel project ID on every row.

This reconciliation changes no source repository, deployment, Vercel setting, or master ledger.
