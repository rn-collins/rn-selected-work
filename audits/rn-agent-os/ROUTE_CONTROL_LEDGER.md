# rn-agent-os — Route, Control and Capability Ledger

**Boundary:** no public deployment or consumer UI found; this is a code/integration ledger.

## API route ledger

| Route | Method | Auth | Data/action | Verdict |
|---|---|---|---|---|
| `/health` | GET | none | static service/version | partial; no dependency health |
| `/agents/disclosure-claims/run` | POST | none | analyzes caller text/metadata | real rules; unsafe if exposed |
| `/pipeline/run` | POST | none | collects, grades, drafts, persists | real fixture path; broken Postgres; bypasses gates |
| `/agents/research-scout/run` | POST | none | none | 501-style JSON stub but HTTP status not explicitly 501 |
| `/agents/sector-watch/run` | POST | none | none | stub despite internal collector |
| `/risk-findings` | GET | none | static empty list | stub |
| `/docs` | GET | none | FastAPI interactive operations | implicit exposure |
| `/redoc` | GET | none | API documentation | implicit exposure |
| `/openapi.json` | GET | none | full schema | implicit exposure |

## Runtime surface ledger

| Service | Host port | Credential/default | Concern |
|---|---:|---|---|
| Postgres/pgvector | 5432 | `agentos/agentos` fallback | known credential, public bind |
| Redis | 6379 | none | unauthenticated data/control plane |
| MinIO | 9000/9001 | `agentos/agentos123` fallback | known admin credentials |
| Ollama | 11434 | none | model API exposed |
| n8n | 5678 | `admin/change-me` fallback | workflow/credential compromise |
| Metabase | 3000 | manual setup | data exposure/setup race |
| FastAPI | 8000 | none | pipeline and analyzer callable |

## Capability ledger

| Named capability | Implementation | Input/data | External action | Boundary |
|---|---|---|---|---|
| Disclosure + Claims Risk | regex analyzer | social post text | optional Ollama | detection aid, not legal advice |
| Sector Watch | fixture reader; partial Apify | watchlist/posts | Apify actor run | not live by default; actor payload TODO |
| Trust/Brand-Fit | authored scoring formula | analyzer outputs/brief | none | unvalidated 0–100 score |
| Client Audit Drafting | Markdown template | scores/findings | writes/persists report | synthetic draft, human review required |
| QA/Regression | eval scaffolding | gold JSON | process exit | not on API path |
| Orchestrator | fallback + optional LangGraph | pipeline state | model/persistence | separate from API; human gate incomplete |
| Model router | local/frontier/stub | prompts | Ollama, Anthropic, OpenAI | frontier defaults permitted if keys exist |
| Research Scout | API stub | none | none | not implemented |
| Video Evidence | absent | none | none | not implemented |
| Measurement/Learning | basic DB/dashboard specs | stored findings | Metabase | schema mismatch |
| Template Update | absent | none | none | not implemented |
| Weekly monitoring | inactive n8n JSON | pipeline | POST; no-op alert | not operational |
| Bright Data | env placeholder | none | none | not implemented |
| Phyllo | env placeholders | none | none | not implemented |
| Brandwatch | env placeholder | none | none | not implemented |

## Operational control ledger

| Control | Effect | Finding |
|---|---|---|
| `make up` | launches all containers | fixed sleep; weak defaults; broad ports |
| `make down` | stops containers | volumes retained |
| `make logs` | tails API logs | no redaction policy |
| `make eval` | runs QA script | separate from API |
| `make demo` | SQLite fixture demo | strongest reproducible product evidence |
| `make pipeline` | unauthenticated local POST | defaults persistence; Postgres failure likely |
| `make dashboard` | provisions Metabase | SQL/schema mismatch |
| `make psql` | DB shell | operator-only local control |
| `USE_LLM=1` | enables Ollama refinement | failures swallowed into note |
| `ALLOW_FRONTIER=1` | allows external providers | default is on; privacy risk |
| `QA_GATE=1` | gates orchestrator persistence | not API direct pipeline |
| `BACKEND` | SQLite/Postgres selection | Compose sets broken Postgres path |
| n8n cron | Monday 07:00 run | workflow inactive |
| red condition | branches on count | alert node no-op |

## Data-object ledger

| Object | Sensitive fields / risks |
|---|---|
| sources | raw text location, embeddings, authority grades |
| creators | names, platforms, monetization/trust/disclosure notes, risk summary |
| brands | briefs, prohibited claims, internal notes |
| content items | URLs, full text, transcript, metrics, provenance, claims/disclosures |
| risk findings | allegation, evidence snippet, severity, recommended action, review state |
| clients/audits | client identity, engagement, private report locations and roadmap |
| agent runs | input/output references, models, status |
| MinIO/Postgres/SQLite | potentially complete evidence and audit corpus |

## Build/config ledger

| File/system | Finding |
|---|---|
| `docker-compose.yml` | seven services; no health checks/internal-only ports/production hardening |
| `.env.example` | real secrets absent, but unsafe fallback credentials and unused providers |
| API requirements | pinned Python packages; container/base image not digest-pinned |
| DB schema | nine-table design but incompatible with persistence/dashboard code |
| generated artifacts | SQLite DB/journal, bytecode, run JSON and audits committed |
| tests/evals | rule/trust/Apify/QA files present; not executed in this audit |
| CI | no workflow in commit inventory |
| deployment config | local Docker only; no Vercel/cloud/proxy/TLS/IaC |

## Estate treatment

- **Disposition:** I — internal Aloha AI infrastructure.
- **Parent:** Agentic Brand Management / `creator-brand-evidence`.
- **Deployment:** none verified; keep private/local until hardened.
- **RN Selected Work:** no standalone card or build count. Mention only as private prototype architecture within the parent case study, with synthetic/incomplete boundaries.

