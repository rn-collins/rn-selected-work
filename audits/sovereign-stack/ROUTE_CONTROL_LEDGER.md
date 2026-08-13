# Sovereign Stack — Route and Control Ledger

Audit date: 2026-08-13 (HST)  
Disposition: **P — one canonical public portfolio case study; representation/remediation hold**

Classification: **W** working/verified; **P** partial/simulated; **E** external; **M** missing; **U** unverified; **B** broken/misleading.

## Route/resource ledger

| Resource | Result | Class | Notes |
|---|---:|---|---|
| `/` | 200 | W | One Next.js client application; 12 conditional rooms. |
| `/opengraph-image` | 200 PNG | W | 1200×630 metadata asset. |
| `/icon` | 200 PNG | W | 64×64 icon. |
| `/robots.txt` | 404 | M/intentional | Root metadata is noindex/nofollow. |
| `/sitemap.xml` | 404 | M/intentional | Appropriate while deliberately noindex, but should be explicit. |
| `/privacy` | 404 | M | Privacy is a modal only. |
| arbitrary path | 404 | W/P | Correct status; generic Next 404, no tailored recovery. |
| direct deployment hostname | 302 Vercel SSO | W | Protected preview; canonical alias public. |

All 12 rooms remain at `/`; there is no URL/history/deep-link state.

## Room ledger

| Room | Primary controls/outputs | Class | Boundary |
|---|---|---|---|
| Meeting mode | six step buttons; previous/next; response; Markdown download; print; evidence/session/charter links | W/P | Claims/ownership need correction. |
| Why this layer | CTA to proposal | W | Public facts plus design hypothesis. |
| Proposal | CTA to gate | W/P | Ownership lists are prospective, not current. |
| Decision gate | project/purpose; 7 questions × 3 answers; rationales; prev/next; carry; JSON; print; clear | W/P | Authored reflection, not consent/validated assessment. |
| System record | record name; visibility select; 14 fields; roles; snapshots/log; decision; JSON | P | Local, unverified, mutable simulation. |
| Pilot path | six phases and links onward | W | Informational only. |
| Learning layer | learning formats/sources | W/P | Only after authority validation/publication permission. |
| Production path | 6 decisions; 5 statuses; fields; prev/next; JSON | P | No real backend/auth/security. |
| Co-design session | 7 fields; JSON | W/P | Browser draft, not session record/authority. |
| Pilot charter | 13 fields; JSON | W/P | Download is not invitation/contract. |
| Executive review | 5 responses; 3 notes; JSON | W/P | Personalized public framing carries affiliation risk. |
| Evidence room | 5 filters; 12 entries; 3 external sources; JSON | W/P | Good categories; incomplete citations for all named programs. |

## Global controls

| Control | Count | Behavior | Class |
|---|---:|---|---|
| Wordmark | 1 | overview + scroll top | W/source |
| Status/privacy openers | 2 | modal dialog | W/source |
| Dialog close/Escape/focus trap | 1 set | locks body, traps Tab, restores focus | W/source; live U |
| Erase all drafts | 1 | clears local key and draft state | W/source |
| Hero CTAs | 2 | meeting or review | W/source |
| Primary room nav | 12 | swaps client state/focus | W/source; semantics P |
| External evidence links | 3 | official Purple Maiʻa pages, new tab | E/W |
| Local downloads | 8 | 1 Markdown + 7 JSON via Blob | W/source; live U |
| Print/PDF | 2 | `window.print()` | P; browser-dependent |

## Gate result logic

- Any response matching externally defined/no legitimate authority/not justified/crosses boundary/unacceptable exposure/no accountable owner => **Do not proceed**.
- Otherwise any confirmation/unclear/non-AI may be better/deliberation/partly known/partial/outside/incomplete => **Pause and redesign**.
- Otherwise => **Eligible for authority review**.
- This is deterministic authored branching, not validated governance, legal or sovereignty measurement.

## Local data ledger

Key: `sovereign-stack-demo-record`.

Persisted: 14 record values, project name, visibility, record owner, review date, decision status/note, snapshots, logs, six production records, seven session fields and 13 charter fields.

Not persisted: gate answers, gate rationales, gate purpose, executive response and executive notes, current room/steps/roles/filter.

No application API/database/auth/analytics was found. Downloads may create durable copies outside the erase control. Ordinary Vercel/CDN request metadata is outside application draft storage.

## Output ledger

| Output | Format | Truthful status label | Material limitation |
|---|---|---|---|
| Executive meeting brief | Markdown | independent concept | Strong ownership/capability copy needs correction. |
| Gate review | JSON | unvalidated demonstration | Unsigned; no authority. |
| Living system record | JSON | unvalidated demonstration | Mutable local state/logs. |
| Production decision brief | JSON | provisional | All six can be self-marked approved. |
| Co-design session brief | JSON | provisional/non-sensitive | Not a convening or consent. |
| Bounded pilot charter | JSON | draft/invitation required | Not contract/approval. |
| Executive review | JSON | conversation record | Not authorization. |
| Evidence register | JSON | working proposal | Sources incomplete for every named program. |

## External source ledger

| Source | Live finding | Use |
|---|---|---|
| Purple Maiʻa 2026 AI update | Supports Maui cluster, open models, edge processing, KILO and data-sovereignty aims; also discloses cloud use and aspirations/limits | Narrow attributed context only. |
| Data Guided by Kānāwai | Supports KILO dashboard, offline capability, community control and kānāwai inspiration | Does not grant access or validate RN's design. |
| Kula | Supports culturally grounded education, Indigenous innovation and technology programs | Does not authorize learning translation. |

Named overview context “Sovereign Stack,” Waiw.AI and Rooted Futures lacks a distinct evidence-register source entry.

## Build/operations ledger

| Item | Class | Finding |
|---|---|---|
| Vercel production | W | READY; canonical root independently verified 200. |
| Vercel build command | W/P | `npx next build` bypasses package build/test validation. |
| `npm run build/test/lint/dev/start` | B/U | manifest references missing `scripts/*`/`tests/*` or mixed Vinext stack. |
| Same-origin API/backend | M/intentional | none. |
| Security headers | P | Vercel HSTS observed; no repository CSP/frame/nosniff/referrer/permissions policy. |
| Deployment provenance | P | current page blob and recorded deployment commit not reconciled. |

## Accessibility/responsive ledger

Source passes: native controls, labels, focus-visible, reduced motion, modal semantics/trap/Escape, live result/status, responsive CSS and focus movement. Source gaps: no skip link, room nav selection semantics, radio semantics, deep links/history, custom 404, accessibility route or documented contrast/AT/zoom testing. Browser automation executable was unavailable, so interactive/mobile/AT outcomes are **U**, not passed.

## Exact portfolio boundary

Count once as an Aloha AI **independently initiated browser-local organization-specific proposal prototype**. Do not call it Purple Maiʻa-owned, commissioned, adopted, installed, secure, community-authorized or an operational governance system. It is not Institutions of One or NSAG. Provide separate `Read case study` and `Open live proposal` controls; keep the full non-affiliation/ownership/authority caveat in the case study.

## Verification boundary

Read-only review. No source, portfolio or master-ledger edit; no form submission or external message. Canonical HTTP/routes/assets, repository source/config, Vercel metadata and all three public sources were inspected. Live interaction, downloaded files, console, screen reader and viewports could not be executed because the browser runner was unavailable; Vercel build logs were inaccessible under current team authorization.
