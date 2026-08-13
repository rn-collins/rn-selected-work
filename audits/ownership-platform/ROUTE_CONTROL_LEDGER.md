# ownership-platform / Institutions of One — Route and control ledger

**Audit date:** August 13, 2026 HST  
**Canonical:** <https://ownership-platform.vercel.app/>  
**Disposition:** P; one featured Institutions of One case with provisional-instrument qualification

## Route ledger

| Route group | Count/status | Result |
|---|---:|---|
| `/` | 1/200 | premise, framework, pilots, Observatory, newsletter |
| `/methodology`, `/methodology/candidates` | 2/200 | theory, constructs, candidate limits |
| `/assess`, `/assess/creator`, `/assess/professional` | 3/200 | chooser + two 20-item pilots |
| `/observatory` | 1/200 | browse/search/filter/compare/nominate |
| `/observatory/apply` | 1/200 | applied case prompts |
| `/observatory/dependencies` | 1/200 | dependency exploration |
| `/observatory/countercases` | 1/200 | countercase exploration |
| `/observatory/evidence` | 1/200 | evidence approach |
| `/observatory/documentation` | 1/200 | research documentation |
| `/observatory/{person}` | 41/all 200 | named public-source cases |
| `/edit`, `/edit/001`–`004` | 5/200 | editorial index + four editions |
| `/partner` | 1/200 | applied-research/partnership inquiry |
| `/about` | 1/200 | RN/project identity |
| `/research/cognitive-interviews` | 1/200 | participant recruitment/information |
| `/privacy` | 1/200 | data-use statement |
| **sitemap total** | **62/all 200** | indexed public corpus |
| `/login` | 200 | Supabase magic-link UI |
| `/unsubscribe` | 200/noindex | email-list rights utility |
| `/dashboard` | 307 → `/login` | authenticated saved-results product |
| `/research/admin` | 307 → login | protected operations |
| `/research/observatory` | 307 → login | protected studio |
| `/robots.txt` | 200 | permits public, disallows APIs/private routes |
| `/sitemap.xml` | 200 | 62 routes |
| `/site.webmanifest`, icon, OG | 200/live | application/metadata assets |

Source-disclosed but not publicly certified: `/u/{handle}`, `/embed/*`, guest/resources/teaching surfaces, custom-domain tenancy and admin/API subroutes.

## Global controls

| Control | Result | Boundary/finding |
|---|---|---|
| brand/home | works | I/1 independent research identity |
| primary nav | works | five main public jobs |
| footer route matrix | works | exposes methodology/evidence/participation/privacy |
| email | Northeastern mailto | institutional-affiliation/continuity concern |
| LinkedIn | external/noopener | works |
| skip link | absent | accessibility defect |
| canonical/OG/Twitter/manifest | present | strong metadata baseline |
| robots/sitemap | present | private routes disallowed; no security guarantee |

## Assessment controls

| Control | Coverage/state | Finding |
|---|---|---|
| 20 questions × 2 | working | authored six-option items |
| auto-advance | working | progress announcement/accessibility risk |
| back/next/submit | working | deterministic local state |
| composite result | working | equal-weight 0–100; unvalidated precision |
| pattern band | working | authored 30/55/80 cutoffs, not norms |
| radar/bars | working | partial nonvisual equivalence |
| action plan | working | exact recalculation, not causal prediction |
| projected gain | working math | must not imply real-world outcome |
| flags | Ownership instrument | legal/business shorthand can overprescribe |
| anonymous capture | conditional POST `/api/benchmark` | can return 200/stored false |
| aggregate benchmark GET | conditional | small-N 30; sample validity unknown |
| research opt-in | conditional | DB + Beehiiv; checks HTTP success |
| score card | after opt-in | OG endpoint; not portable credential |
| full report PDF | browser print | not evidence-certified report |
| share | native share/clipboard | shares instrument link, not verified result record |
| reset | working | clears local assessment state |
| saved dashboard | partial/disconnected | anonymous journey does not visibly attach records to auth user |

## Observatory controls

| Control | State | Finding |
|---|---|---|
| 41 cards/routes | live | publication verified, not claim saturation |
| search/filter | live | domain/tension/type exploration |
| compare mode | live query state | descriptive, not causal |
| case anchors | live | Understand/Trace/Examine/Test/Compare/Verify |
| Case Lab | browser-local | explicitly not stored/scored |
| sources | linked per narrative | mixed first-party/independent depth |
| claim-to-source records | conditional DB | public verified/partially-supported records only |
| reviewed label | DB or July 2026 fallback | fallback can imply review not demonstrated |
| nomination | POST `/api/observatory/nominate` | false-success when DB unavailable/fails |
| corrections | email/privacy route | no public SLA/version log per case |

## Forms, data and processors

| Flow | Data | Destination/control |
|---|---|---|
| benchmark | 20 responses, research answers, random assessment ID, instrument/method version, total | Postgres/Prisma if configured; IP ephemeral rate key |
| newsletter/research opt-in | email, optional name/handle, source, interest, consent/version/time | Postgres + Beehiiv |
| nomination | nominee name/org/role/reason, optional nominator email | Postgres; false-success possible |
| partner inquiry | name/email/org/type/message | Postgres and/or Resend notification |
| cognitive interview | identity, eligibility, profile, access needs, availability, consents, withdrawal token; later session/notes/codes | sensitive private research database |
| login | email, auth cookies/session | Supabase |
| custom domain | tenant host/project mapping | Vercel API architecture, not public customer proof |
| rate limiting | IP-derived key | Upstash when configured; otherwise no-op |

## Research/claim controls

| Required control | Current state |
|---|---|
| instrument version | present: Ownership 0.2.0; Professional 0.1.0 |
| item bank/scoring | explicit and deterministic |
| validation status | correctly described as pilot in many public locations; outputs still overprecise |
| content validity | not established |
| cognitive response process | infrastructure/recruitment exists; completion not established |
| reliability/factor structure | not established |
| invariance/fairness | planned schema/protocol, not established |
| norms/cutoffs | cutoffs authored/provisional, not normed |
| criterion/predictive validity | not established |
| meaningful change/causality | not established |
| legal jurisdiction/effective date | absent from action prompts |
| Observatory epistemic status | modeled; many public cases provisional |
| primary vs independent source | visibly distinguished in case narratives |
| correction/privacy contact | present |
| subject consent | public-evidence model; subject review not established |

## Security/accessibility/operations

| Area | State |
|---|---|
| authentication | Supabase SSR/magic-link; protected redirects work |
| authorization | private-route source not exhaustively penetrated; no private access attempted |
| validation | Zod on inspected public writes |
| rate limiting | Upstash optional/no-op if absent |
| migrations/tests | production build script runs migration + tests + Next build; not rerun locally |
| security headers | HSTS, nosniff, frame, referrer, permissions; no CSP observed |
| embed framing | `ALLOWALL` XFO approach likely nonstandard/conflicting; verify |
| write integrity | benchmark/nomination can return success when not stored |
| skip navigation | absent |
| progress state | visual div; no full ARIA progress semantics |
| question changes | auto-advance; live announcement not established |
| interactive nesting | anchor-wrapped buttons present |
| opt-in labels | some placeholder-only fields |
| screen reader/zoom/mobile | responsive code exists; full matrix not certified |

## Exact RN Selected Work boundary

- Count once as **Institutions of One**; Ownership Platform is the implementation, not a second case.
- Verified: 62 sitemap routes all 200, two extra public utilities, protected redirects, 41 public cases, two working 20-item deterministic pilots, comparison/dependency/countercase tools, four editorial editions, methods/evidence/privacy/participation/partner architecture.
- Not verified: psychometric validity, norms, activation, legal ownership, enterprise value, causal score improvement, portable credential/reputation, representative sample, subject approval, completed longitudinal research, private research operations, customer outcomes or SaaS fulfillment.
- Use “candidate assessment design,” “exploratory self-reflection,” “public research platform,” and “working technical architecture.”
- Do not use “validated measure,” “ownership score” without pilot qualification, “capability measurement,” “evidence-governed” as proof of completed review, or “participant data remains private” as evidence that a live participant program is complete.
