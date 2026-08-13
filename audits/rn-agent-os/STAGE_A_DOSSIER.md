# rn-agent-os — Stage A Dossier

**Audit date:** August 12, 2026 HST  
**Scope:** Wave 9 read-only code/integration/security audit  
**Recommended disposition:** **I — internal infrastructure**  
**Release status:** private, local-only prototype; do not deploy publicly

## 1. Asset identity

| Field | Finding |
|---|---|
| Repository | private `rn-collins/rn-agent-os`, repo ID 1305931891 |
| Branch / commit | `main`; sole commit `7d58b707f387f42d3c62fb0508cab0df1b8a2567`, July 19, 2026 |
| Commit description | “Initial commit: rn-agent-os — Aloha AI agentic brand management backend” |
| Deployment | none found in the complete 50-project RN Vercel inventory; no Vercel config or public web application in the repository |
| Runtime | self-hosted/local Docker Compose stack: Postgres/pgvector, Redis, MinIO, Ollama, n8n, Metabase, FastAPI |
| Parent practice | internal engine for Aloha AI's Agentic Brand Management service line |
| Public/private boundary | code is private; inputs may contain creator/brand/client intelligence; deployment must remain private and authenticated |

The repo has 52 committed paths, including source, sample fixtures, generated Markdown audits, Python bytecode, a SQLite database and journal, and run output. It is not a consumer site and has no independent public route to crawl.

## 2. Executive verdict

RN Agent OS is a meaningful engineering prototype, not a deployed autonomous firm. It contains real rule-based disclosure/claims classification, fixture collection, heuristic trust-fit scoring, audit Markdown generation, SQLite persistence, a FastAPI skeleton, a Docker topology, a model router, an orchestration experiment, and Metabase/n8n scaffolding. The default demonstrated pipeline is synthetic/offline.

It should exist as **private Aloha AI operating infrastructure**, but it should not receive its own public RN Selected Work card. Its strongest public evidence belongs inside the canonical Creator + Brand Evidence Audit / Agentic Brand Management case study, described as an internal prototype with synthetic demonstrations.

Top risks:

1. the full Postgres pipeline is structurally broken because the persistence inserts and dashboard queries do not match `db/schema.sql`;
2. the API has no authentication/authorization and Compose publishes every data/control-plane port;
3. the documented human gate is bypassed by the actual FastAPI `/pipeline/run` path;
4. “agent” legal/compliance conclusions are keyword heuristics, not legal determinations or evidence appraisal;
5. collection is fixtures by default; Apify is incomplete and other named collectors are only empty environment placeholders;
6. weak default credentials, mutable container tags, committed databases/bytecode/generated artifacts, and optional frontier routing create material secrets/data/supply-chain risk.

## 3. Complete route map

No public deployment exists. Code-defined local routes:

| Route | Method | Implementation status |
|---|---|---|
| `/health` | GET | real static health response; does not verify dependencies |
| `/agents/disclosure-claims/run` | POST | real rule-based analyzer; optional local Ollama enrichment |
| `/pipeline/run` | POST | runs fixture/Apify collection → rules → trust-fit → draft → persistence; no human gate |
| `/agents/research-scout/run` | POST | explicit `not_implemented` stub |
| `/agents/sector-watch/run` | POST | explicit `not_implemented` stub, although a callable internal collector exists |
| `/risk-findings` | GET | static empty stub; no DB read |
| FastAPI `/docs`, `/redoc`, `/openapi.json` | GET | implicitly exposed if service runs; no auth configured |

Other local interfaces: Postgres `5432`, Redis `6379`, MinIO `9000/9001`, Ollama `11434`, n8n `5678`, Metabase `3000`, API `8000`. Compose publishes all to the host.

## 4. Complete interaction/control inventory

There is no purpose-built consumer UI. Operational controls are:

- Make targets: `up`, `down`, `logs`, `eval`, `demo`, `pipeline`, `dashboard`, `psql`.
- FastAPI request bodies: post text/platform/creator/url/optional brand brief; pipeline optional brand brief and `persist` boolean.
- n8n weekly cron, pipeline POST, red-flag condition, and a no-op alert placeholder; workflow is committed `active: false`.
- Metabase one-time setup and provisioning script; credentials come from environment.
- Orchestrator CLI run/approve/reject demonstrations.
- Sector Watch watchlist source switch (`fixtures` or `apify`) and actor mapping configuration.
- Environment toggles: `USE_LLM`, `ALLOW_FRONTIER`, `QA_GATE`, `BACKEND`, model/provider keys and collection credentials.

No access-control, tenant, client selection, retention/deletion, export, approval UI, reviewer identity, audit trail, or external-action confirmation control is implemented.

## 5. Consumer/operator journeys

### Offline evaluator

The documented no-key path is credible: fixture posts can be classified and rendered into synthetic audits; committed generated reports and SQLite artifacts show that path ran. It demonstrates code execution, not real market monitoring or validated compliance accuracy.

### Local operator bringing up the stack

`make up` builds seven services and waits a fixed 20 seconds. There are no health checks, migrations, secret validation, least-privilege networks, resource limits, backups, restore tests, TLS, or production profiles. Metabase requires manual setup; Ollama model acquisition is not automated; n8n workflow import is manual.

### API caller

Any network-reachable caller can submit text, arbitrary brand briefs, run/persist a pipeline, and access generated FastAPI docs. There is no authentication, rate limit, body-size limit, client isolation, request ID, or authorization gate.

### Reviewer

The fallback orchestrator can pause on red flags and accept an approval/rejection argument. But the production-facing API imports `run_pipeline`, which drafts and persists directly. It never calls the orchestrator or QA gate. Therefore “human sign-off mandatory” is policy copy, not enforced on the API execution path.

### Client receiving an audit

Audit reports are generated from heuristic scores and fixture evidence, marked draft/needs-review. No delivery integration exists. The n8n “alert” is a no-op. This is appropriate for a prototype, but “agentic brand-management backend” must not imply autonomous client delivery.

## 6. Functional matrix

| Capability | Real / simulated / incomplete |
|---|---|
| Disclosure + claims analyzer | real deterministic regex prototype; not validated legal analysis |
| Optional Ollama refinement | real code path; model-dependent, untested here |
| Sector Watch fixtures | real synthetic/offline collection |
| Apify collection | partial; token/actor/config required and payload includes TODO adaptation |
| Bright Data, Phyllo, Brandwatch | placeholders only in `.env.example` |
| Trust-fit scoring | real heuristic arithmetic; no validated construct/outcome basis |
| Brand-perception component | heuristic internal component |
| Client audit drafting | real template generation over synthetic analyses |
| QA | code/eval scaffolding exists; API does not invoke it |
| Human gate | partial in separate orchestrator; bypassed by API pipeline |
| LangGraph | optional code; dependency pinned; graph interrupt behavior not integrated with API |
| Frontier model routing | real outbound HTTP code when keys and `ALLOW_FRONTIER=1`; no redaction/DPA policy |
| Persistence, SQLite | real demo path |
| Persistence, Postgres | broken schema mismatch |
| Metabase dashboard | provisioning code exists; queries conflict with Postgres schema |
| Weekly automation | inactive n8n scaffold; alert is no-op |
| Research Scout | API stub |
| Video Evidence | absent |
| Measurement/Learning | absent beyond basic queries |
| Template Update/Governance | absent |
| Public product UI | absent |

## 7. Copy and information architecture

The README and `BRAND-FIRM-MAP.md` are unusually honest about internal workers, products, siblings, public/permissioned-only collection and future build order. However, status language conflicts internally: the component map calls Compose/API/orchestrator “to build,” while README says Phase 0 shipped and describes orchestrator as Phase 2. The single commit includes substantially more than a Phase 0 skeleton but remains unintegrated.

Correct these phrases:

- “self-hosted engine” → “local prototype of a proposed self-hosted engine” until the full stack passes.
- “coordinated system of AI agents” → distinguish deterministic functions, fixture pipeline, optional LLM, and unimplemented agents.
- “accuracy + invariants” quality gate → publish actual evaluation scope, sample size, false-positive/negative results and limitations.
- “never lowers a rule flag” is true only for the disclosure agent's optional enrichment; frontier narrative can still introduce unsupported language.
- “public/permissioned only” is a policy statement not technically enforced: actor inputs, licenses, robots decisions and provenance remain operator-controlled.
- “human sign-off gate” is not true of the API path.

## 8. Science/law/policy/regulatory claim ledger

| Claim/behavior | Assessment |
|---|---|
| `#ad`, sponsored and paid-partnership terms can be clear disclosures | sometimes, but adequacy is context/platform/audience dependent; the first-120-character rule is not the legal standard |
| `#sp`, `#partner`, gifted, thanks-to terms are vague | directionally useful but context dependent |
| material connections require disclosure | supported by FTC guidance; includes financial, employment, personal, family, free/discounted value |
| disclosure should be early/visible | supported directionally; FTC requires clear, conspicuous, hard-to-miss placement with the endorsement and format-appropriate disclosure |
| flagged health claims need substantiation | supported; FTC requires truthful/nonmisleading advertising and competent and reliable scientific evidence for health/safety claims |
| regex match = “strong” evidence and high confidence | unsupported; it is strong evidence only that a token appeared, not that a legally material claim/relationship exists or that the net impression is deceptive |
| missing keyword = no blocking issue | unsafe; implied claims, visuals, audio, landing pages, context, audience and platform behavior are ignored |
| “paid” classification from disclosure terms | may be wrong; disclosure presence does not establish payment type |
| “affiliate” from “link in bio” or “use code” | may be false positive without relationship evidence |
| trust-fit / parasocial intensity / commercialization saturation scores | authored heuristics, not validated measures; 0–100 precision is simulated |
| AVOID/FIT/TEST recommendations | business heuristic only; require reviewer, client criteria, evidence and appeal/correction process |

Authoritative baselines used: FTC Endorsement Guides/Disclosures 101 and FTC Health Products Compliance Guidance. The system must evaluate the full net impression, placement, medium, audience, relationship, claim meaning and substantiation—not keywords alone. It must never present outputs as legal advice or compliance certification.

## 9. Accessibility and responsive findings

There is no custom UI to assess. FastAPI docs, n8n and Metabase inherit third-party accessibility and responsive behavior and require separate version-specific review if adopted. CLI/JSON/Markdown outputs are structurally usable but generated tables and severity colors need semantic/non-color equivalents in any future UI. Human review cannot be “mandatory” without an accessible review interface, keyboard operation, focus/error states and plain-language explanations.

## 10. Brand architecture

RN Agent OS belongs to **Aloha AI** as private operating infrastructure for Agentic Brand Management. It is not NSAG, Institutions of One, RN Builds, or a standalone customer product. `BRAND-FIRM-MAP.md` correctly identifies agents as internal workers and the audit/sprint/governance services as client products.

The estate should map it as an internal implementation dependency of `creator-brand-evidence` / the Agentic Brand Management offer. Publicly counting it as another “build” would expose architecture, confuse tool versus deliverable, and overstate readiness. A public architecture excerpt can demonstrate RN's systems thinking without publishing secrets, watchlists, client data, scores or internal controls.

## 11. Business model and conversion

The business role is an internal service-delivery and monitoring layer. Buyers purchase an evidence audit, strategy sprint, governance system or retainer—not the repository. Economic value could come from repeatable monitoring and evidence assembly, but only after accuracy, reviewer throughput, data rights, incident response and unit economics are measured.

Current gaps: no tenancy, engagement scoping, pricing, SLA, reviewer workload metric, collection/license cost, model-cost budget, evidence retention, client correction/appeal, export package, support, ownership terms, professional-liability boundary or delivery workflow. The smallest coherent business path is one controlled internal pilot with synthetic/public licensed data and manual reviewer sign-off, not an always-on autonomous retainer.

## 12. Security, privacy, data and operations

### Secrets and deployment

- `.env.example` contains weak defaults (`agentos`, `agentos123`, `admin/change-me`). Compose also supplies them as fallbacks.
- Postgres, Redis, MinIO, Ollama, n8n, Metabase and FastAPI bind host ports. Redis has no password; database and object store have known defaults; API has no auth.
- Images use mutable tags (`latest`, `7-alpine`, pg16) without digest pinning or vulnerability policy.
- No `.gitignore` was present in the commit inventory; generated SQLite, journal, bytecode, last-run output and deliverables are committed. Future `.env`, watchlist or client artifacts could be accidentally committed.
- API/provider keys are environment-based, which is appropriate, but there is no secret manager, rotation, egress restriction, log-redaction or environment validation.

### Data boundary

The schema can store creator identities/platforms, content text, brand briefs, client names, risk allegations, evidence snippets, transcripts, embeddings, audit locations and model/run metadata. These can be confidential, defamatory, biometric-adjacent, sensitive commercial or personal data. There is no retention/deletion, access control, encryption policy, data-subject correction, provenance license, purpose limitation, backup or incident plan.

### External actions

- Apify can initiate licensed actor runs and retrieve social-platform datasets.
- Model router can send prompts to Anthropic/OpenAI by default when keys exist because `ALLOW_FRONTIER` defaults to `1`.
- Ollama receives local prompts.
- n8n can trigger the pipeline weekly; notification is not implemented.
- Metabase provisioning creates DB connections/cards/dashboards using admin credentials.

None has an outbound-action approval registry, redaction policy, per-client allowlist or cost ceiling. Frontier use should default off.

### Structural defects

- PostgreSQL `risk_findings` uses `creator_id/brand_id`; Store inserts `creator/platform/url`. `client_audits` schema lacks Store's `creator/brand/recommendation/report_md/drafted_on`. The Postgres pipeline will fail.
- Dashboard SQL expects those same nonexistent denormalized columns, so Metabase provisioning creates invalid cards.
- API `/pipeline/run` defaults `persist=true` and Compose sets `BACKEND=postgres`; thus the advertised full-stack journey reaches the broken path.
- API imports direct pipeline, bypassing orchestrator approval and QA gate.
- Native graph maps both `pause` and `proceed` to `draft` and relies on `interrupt_before`; approval identity/state durability is MemorySaver-only.
- Health returns OK without checking DB/Ollama/Redis/MinIO/n8n/Metabase/schema.
- No exception mapping, transactional rollback, idempotency, deduplication, concurrency control or tenant isolation.

## 13. Defects by severity

### P0

None while the system remains private and undeployed. Public/network deployment with current Compose defaults would create P0 exposure.

### P1

1. No authentication/authorization on API; all infrastructure ports publicly bound.
2. Postgres persistence/dashboard schema mismatch breaks the full-stack product.
3. API bypasses human and QA gates despite compliance-facing claims.
4. Default credentials and unauthenticated Redis create immediate compromise risk.
5. Sensitive/client data lacks tenancy, retention, encryption/access and correction governance.
6. Frontier egress defaults on when keys exist, without redaction or client authorization.

### P2

1. Legal/compliance and trust scores overstate keyword heuristics.
2. Apify integration is incomplete; other collectors are placeholders.
3. Health check is superficial; no observability/backups/recovery.
4. Generated/private artifacts and bytecode committed; no visible ignore policy.
5. Mutable images and no supply-chain controls.
6. Native/fallback orchestrator semantics are not equivalent or durable.
7. No tests for API auth, integration, Postgres, migrations, privacy, abuse or adversarial text.

### P3

1. README/component-map status contradictions.
2. Fixed 20-second Make wait.
3. Deprecated Compose `version` field and unpinned optional ecosystem.

## 14. Exact remediation plan

1. Keep repository private. Add `.gitignore`; purge generated `.pyc`, `__pycache__`, SQLite/journal, last-run and synthetic deliverables from tracked source after preserving safe fixtures.
2. Split `docker-compose.dev.yml` from a hardened deployment design. Bind services to localhost/internal networks; never expose DB/Redis/Ollama/MinIO; require generated secrets; add health checks, resource limits, volumes/backups and pinned image digests.
3. Add API authentication, roles, tenant/client scoping, rate/body limits, request IDs, audit logs and disabled public docs in production.
4. Define migrations and one canonical relational model. Align `db/schema.sql`, `Store`, dashboard SQL and API models; add foreign-key-safe creator/brand/content inserts and transaction rollback.
5. Make `/pipeline/run` call a durable orchestrator. Enforce reviewer identity, approval/rejection, immutable evidence version, timestamps and no draft/persist/delivery before approval. Integrate QA on the same path.
6. Default `ALLOW_FRONTIER=0`; add per-client provider consent, PII/confidential-data redaction, region/vendor record, cost/token ceilings and no-training/DPA controls.
7. Replace keyword “evidence grade/confidence” with detection confidence. Add calibrated gold sets, confusion matrices, adversarial multilingual/visual/audio tests and expert legal review. Do not emit compliance conclusions.
8. Complete licensed collection only through explicit actor/platform allowlists; store terms/license/robots decision, capture date and provenance. Remove unused provider variables until implemented.
9. Implement retention, deletion/correction, legal hold, data classification, encryption, access review, incident response and model/data lineage.
10. Add unit/integration/end-to-end tests: rules, negative/ambiguous context, API auth, Postgres migrations/persistence, dashboard queries, orchestrator pause/resume, retry/idempotency, provider failure and backup restore.
11. Validate a single internal pilot and measure reviewer disagreement, false positives/negatives, time saved, cost/run and remediation acceptance before offering a retainer.
12. Rewrite README status from evidence: real fixture demo, incomplete external collection, broken Postgres integration, no deployment and no autonomous delivery.

## 15. Recommended estate disposition

**I — Internal infrastructure.** Maintain privately under Aloha AI. It is neither a public portfolio build (P) nor an independent component UI (C). It is not a duplicate (D) or irrelevant exclusion (X). Although incomplete, `E` would obscure its intended and appropriate role: it is operational infrastructure in prototype state.

Final decision: **maintain private, harden and validate; do not deploy publicly; do not create a standalone RN Selected Work case study.**

## 16. Proposed RN Selected Work corrections

- Do not add `rn-agent-os` to the public Build Atlas or count it as an additional build.
- Account for it in the internal handoff/master ledger as **I**, parented to Aloha AI Agentic Brand Management / `creator-brand-evidence`.
- The relevant public case study may say: “RN developed a private prototype operating layer for fixture-based disclosure/claims detection, trust-fit scoring, audit drafting and human-review workflow design.”
- It must also say: “Not deployed; external monitoring, multi-agent orchestration, compliance review and full-stack persistence remain incomplete. Synthetic examples only.”
- Do not publish repository diagrams containing credentials, ports, provider/watchlist details, client tables, internal risk records or security topology.
- Do not claim autonomous monitoring, legal compliance certification, production multi-agent coordination, live weekly alerts, complete RAG/evidence appraisal or delivered client audits.

## 17. Evidence appendix

### Audited repository evidence

- Private repo and sole commit identified through connected GitHub.
- 52 paths inspected from the complete initial-commit patch, including README, component map, environment template, Compose, DB schema, FastAPI, agents, components, orchestrator, pipelines, store, evals, dashboards, workflow, fixtures and generated artifacts.
- No connected Vercel project named `rn-agent-os`; absent from the certified 50-project inventory.
- Clone was not possible because private HTTPS credentials are not exposed to shell; audit used authenticated GitHub commit contents. No source was modified.

### Key files

- `.env.example`
- `docker-compose.yml`
- `db/schema.sql`
- `services/api/main.py`
- `services/agents/disclosure_claims/agent.py`
- `services/agents/sector_watch/agent.py`
- `services/agents/trust_fit/agent.py`
- `services/agents/client_audit/agent.py`
- `services/agents/qa/agent.py`
- `services/orchestrator/graph.py`
- `services/orchestrator/model_router.py`
- `services/pipeline/run_pipeline.py`
- `services/db/store.py`
- `dashboards/queries.sql`
- `dashboards/provision_metabase.py`
- `workflows/weekly_pipeline.json`

### Authoritative regulatory sources

- FTC, Disclosures 101 for Social Media Influencers: <https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers>
- FTC, Health Products Compliance Guidance: <https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance>

### Explicitly unverified

- Docker build/runtime because authenticated source could not be checked out locally and images were not pulled.
- Actual environment variables, external provider accounts, local deployments or private data stores.
- Whether any non-Vercel private host exists; repository/config provides no production-host evidence.
- Accuracy metrics claimed by QA until tests are executed against a reviewed gold set.
- Terms/licensing/robots compliance of any future actor configuration.

