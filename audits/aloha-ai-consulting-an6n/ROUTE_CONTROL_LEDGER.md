# `aloha-ai-consulting-an6n` — Stage A route and control ledger

Audit date: 2026-08-12 HST / 2026-08-13 UTC  
Scope: read-only. No form submission, deletion, deployment, or source modification.

## Deployment entry points

| Surface | Observed result | Meaning |
|---|---|---|
| `https://aloha-ai-consulting-an6n-rn-collins.vercel.app/` | `302` to Vercel SSO; `x-robots-tag: noindex` | Alternate project is deployment-protected and is not a public consumer surface. |
| `https://aloha-ai-consulting-an6n-git-main-rn-collins.vercel.app/` | `302` to Vercel SSO; `x-robots-tag: noindex` | Branch alias is also protected. |
| Latest production deployment `dpl_CyozRALtiXaGqPpKM5kvCK6pqPwo` | Vercel state `ERROR` | Source compiled and generated 49 pages, then failed because the alternate project requires a nonexistent `dist` output directory. |
| `https://aloha-ai-consulting.vercel.app/` | `200` | Public canonical project from the same repository and commit. |

No route or application control is available to an unauthenticated consumer at either alternate alias. Therefore the only complete control inventory for the alternate deployment itself is the Vercel Authentication redirect. The route inventory below records the application code the project attempts to deploy and checks its matching public rendering on the canonical project; it does **not** recast the canonical project as a second independent build.

## Application route ledger

All 39 sitemap application URLs returned `200` on the canonical deployment from the same repository. `robots.txt` returned `200`; a synthetic unknown route returned a branded `404`. The alternate deployment exposes none of these routes publicly.

| Route/group | Canonical result | Principal controls/state |
|---|---:|---|
| `/` | 200 | Five situation buttons update an `aria-live` recommendation; links to Studio, Tools, Learning, and Source Desk. |
| `/start` | 200 | Eight guided destination links. |
| `/about` | 200 | Evidence/publication links and internal navigation. |
| `/studio` | 200 | Four step controls; browser-session assessment and generated handoff/next-route behavior. |
| `/work` | 200 | Offer and program links; distinguishes available, candidate, and inactive routes. |
| `/work/ai-opportunity-clinic` | 200 | Form is conditionally absent unless five mail/Turnstile variables are configured; the observed canonical HTML showed no form inputs. |
| `/work/ai-decision-review` | 200 | Informational route; no active inquiry/payment control. |
| `/work/workflow-diagnostic-redesign` | 200 | Candidate offer; explicitly inactive. |
| `/work/ai-tool-vendor-decision` | 200 | Candidate offer; explicitly inactive. |
| `/work/prototype-pilot-sprint` | 200 | Candidate offer; explicitly inactive. |
| `/work/ai-operating-partnership` | 200 | Candidate offer; explicitly inactive. |
| `/work/custom-organizational-program` | 200 | Candidate offer; explicitly inactive. |
| `/organizations` | 200 | Informational paths; organizational inquiry closed. |
| `/sponsor` | 200 | Sponsorship description; prospectus requests closed. |
| `/learning` | 200 | Links to three learning products. |
| `/learning/masterclass` | 200 | 24 disclosure sections; 42 inputs; completion state, knowledge check, local save/reset/export, Markdown workbook download. |
| `/learning/decision-desk` | 200 | Twelve-month program index; issues 01–11 linked, future enrollment inactive. |
| `/learning/decision-desk/issue-01` | 200 | Complete article/curriculum; links onward. |
| `/learning/decision-desk/issue-02` | 200 | 9 lesson accordions, 13 inputs, export/delete device-local Permission + Record Map. |
| `/learning/decision-desk/issue-03` | 200 | 10 lesson accordions plus menu, 4 initial inputs, export/delete device-local authority map. |
| `/learning/decision-desk/issue-04` | 200 | 11 lesson accordions plus menu, 4 initial inputs, export/delete answerability test. |
| `/learning/decision-desk/issue-05` | 200 | 12 lesson accordions plus menu, 4 initial inputs, export/delete impact map. |
| `/learning/decision-desk/issue-06` | 200 | 12 lesson accordions plus menu, 4 initial inputs, export/delete substantiation gate. |
| `/learning/decision-desk/issue-07` | 200 | 12 lesson accordions plus menu, 4 initial inputs, export/delete fidelity test. |
| `/learning/decision-desk/issue-08` | 200 | 12 lesson accordions plus menu, 4 initial inputs, export/delete provenance record. |
| `/learning/decision-desk/issue-09` | 200 | 12 lesson accordions plus menu, 4 initial inputs, export/delete authority matrix. |
| `/learning/decision-desk/issue-10` | 200 | 12 lesson accordions plus menu, 4 initial inputs, export/delete vendor dossier. |
| `/learning/decision-desk/issue-11` | 200 | 12 lesson accordions plus menu, 4 initial inputs, export/delete learner review. |
| `/learning/citation-verifier` | 200 | 18 lesson sections, 90 initial inputs, knowledge check, progress, lab-kit and record exports, local deletion. |
| `/tools` | 200 | Links to four public tools. |
| `/tools/decision-record` | 200 | 5 initial inputs; local save, JSON/Markdown export, clear confirmation. |
| `/tools/vendor-comparison` | 200 | 20 initial inputs; gate/weight/score states, local save, export, clear. |
| `/tools/pilot-design` | 200 | Multi-step local protocol, export and clear controls. |
| `/insights` | 200 | Source ledger and 18 discovered external URLs across the estate. |
| `/questions` | 200 | Informational FAQ/boundary route. |
| `/procurement` | 200 | Procurement facts; submission explicitly inactive. |
| `/policies` | 200 | Privacy, use, professional-boundary, inquiry, retention, and commercial terms. |
| `/support` | 200 | Accessibility/support disclosures; Clinic and policy links. |
| `/search` | 200 | Search field, submit button, 13 category filter buttons, result links; excluded from robots crawl. |
| `/robots.txt` | 200 | Allows `/`, disallows `/search`, points to canonical sitemap. |
| `/sitemap.xml` | 200 | 39 canonical application URLs, dated 2026-08-12. |
| Unknown route | 404 | Branded recovery links to Start, Search, Tools, Learning. |

The Next build additionally generates `_not-found` and the same five parameterized offer pages already listed above; the reported 49 static pages include framework/static generation bookkeeping and do not establish 49 distinct portfolio builds.

## Global controls

- Skip link to `#main`.
- Desktop primary navigation: Start here, Tools, Learning, Work together, Source Desk, About.
- Mobile `<details>` menu adds Search.
- Persistent Start here action.
- Footer navigation: Start, Studio, Work, Learning, Tools, Policies, Support, Procurement, Sponsorships.
- Client workspaces use browser storage and Blob downloads; destructive reset/delete controls use confirmations.
- No active account, checkout, event-registration, or public generic contact form was observed.

## External destination check

Eighteen unique external HTTPS destinations were discovered. Twelve returned 200/202. Automated checks observed:

- Three NIST PDF links returning `404`:
  - `https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf`
  - `https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf`
  - `https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf`
- ABA Formal Opinion 512 and CISA Secure by Design returned `403` to the automated client; this is an unverified bot/access result, not proof the human-facing resource is dead.
- LinkedIn returned its nonstandard `999` automation response; not treated as a broken human-facing link.

## Declared verification boundary

- The alternate aliases could not be visually or interactively audited past Vercel Authentication.
- No consequential form was submitted.
- Dynamic client state was inspected in source and contract tests; the complete canonical product needs its own separate consumer/browser dossier under the represented-site wave.
- Pixel-level desktop/mobile rendering, live keyboard traversal, screen-reader output, zoom/reflow, and runtime console/network behavior of the alternate app are unavailable because the alternate app does not deploy.
