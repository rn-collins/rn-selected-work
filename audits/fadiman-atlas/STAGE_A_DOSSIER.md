# Fadiman Atlas — Stage A Audit Dossier

Audit date: August 12, 2026 (HST)  
Stage: A, read-only  
Disposition recommendation: **E — incomplete, high-risk named-person experiment; remove from public access pending consent, rights clearance, and scientific/product reconstruction**

## 1. Asset identity

- **Public site:** `https://fadiman-atlas.vercel.app/`
- **Repository:** private GitHub repository `rn-collins/fadiman-atlas`, default branch `main`; repository metadata identifies the homepage above. The deployed document is byte-identical in length (126,568 bytes) to the repository `index.html` inspected for this audit. No evidence of a second canonical deployment was found.
- **Implementation:** one static `index.html`, `.gitignore`, and `vercel.json`; no application server, database, API routes, test suite, package manifest, or build pipeline.
- **Owner/practice:** footer says “Scoped by R.N. Collins · Aloha AI Consulting” and separately links “RN Builds.” This is an independently initiated organization/person-specific concept, not NSAG.
- **Intended buyer:** James Fadiman and/or the people controlling his archive, publishing, and public-output rights. Secondary claimed users are researchers, clinicians, founders, and general readers.
- **Public status:** deployed without authentication and directly addressable. A footer disclaimer says it was made without Fadiman’s knowledge, affiliation, or endorsement. That disclaimer appears only after a long commercial proposal built around his name.
- **Privacy:** no privacy notice, terms, cookie notice, retention statement, processor disclosure, or consent mechanism. The page attempts analytics POSTs and offers an email/message form despite having no working receiver.
- **Related properties:** distinct from **Entheogen Atlas** (substance/legal-policy atlas) and **Psychonaut Bookworm** (psychedelic-book discovery/library). It shares their psychedelic knowledge-infrastructure family, but it is a subject-centric archive/RAG proposal, not a duplicate or deployed component of either. No code, route, or deployment relationship was found. It could later become a generic, licensed “scholar corpus atlas” component, but the current named-person site is independently scoped.

## 2. Executive verdict

This is a polished research inventory and technical sales proposal, not a working knowledge atlas. Its static corpus explorer and timeline are real; its “Live Search Demo,” “Live annotation demo,” contact flow, analytics, corpus grounding, transcription, retrieval, citations, ingestion, reports, database, and scheduled updates are absent or broken. The search sends a hard-coded summary—not retrieved corpus material—to Anthropic from the browser, without a key, while the site CSP prohibits the request. The annotation control has the same failure. The contact handler is malformed and targets a nonexistent endpoint.

The site should not remain publicly promoted in its present form. Its title, domain, “Ask Jim” product language, commercial offer, and extensive use of a living person’s name and work can imply sponsorship even though the last-page disclaimer denies it. Its proposed ingestion plan presumes bulk copying of recordings, podcasts, transcripts, EPUBs, and PDFs without a rights ledger. Its nonfunctional model prompt exposes actionable LSD/psilocybin dose bands, medication and contraindication summaries, long-COVID anecdotes, and generalized clinical framing without evidence-linked answers or adequate safety boundaries.

Top risks:

1. **Named-person/endorsement and rights risk:** public commercial use of James Fadiman’s name and proposed “Ask Jim” voice without knowledge or consent.
2. **Medical/safety risk:** actionable illegal-drug dosing and interaction content can be generated from model prior knowledge, with no real sources, clinical review, or jurisdiction-aware boundary.
3. **Copyright/platform risk:** architecture explicitly plans `yt-dlp` media acquisition and full EPUB/PDF extraction; public availability is not a license.
4. **Product truth risk:** copy repeatedly describes a “complete public archive,” live semantic search, and production annotation while only metadata and hard-coded prompts exist.
5. **Data/trust risk:** dead analytics and lead endpoints, false-success contact behavior, no privacy terms, and external CDN dependency.

Recommendation: classify **E**, unpublish or access-restrict now, preserve the inventory privately, and proceed only after written authorization plus per-source rights review. If consent is not obtained, genericize the work and use licensed/public-domain material. Do not create an RN Selected Work card for this version.

## 3. Complete route map

The repository and live HTML expose one same-origin document only:

| Route | Result | Purpose |
|---|---:|---|
| `/` | 200 | Complete proposal, inventory, demos, architecture, pricing, credentials, offer, disclaimer |
| `/robots.txt` | 404 | Missing |
| `/sitemap.xml` | 404 | HTML advertises this sitemap, but it does not exist |
| `/api/track` | 404 | Page-view and 50%-scroll analytics target; no handler |
| `/api/lead` | 404 | Contact target; no handler |
| `/privacy` | not discoverable | Missing |
| `/terms` | not discoverable | Missing |

In-page destinations, all on `/`: `#main-content`, `#problem`, `#status`, `#demo-search`, `#demo-annotate`, `#demo-timeline`, `#demo-corpus`, `#inventory`, `#gaps`, `#schema`, `#tech`, `#builder`, and `#offer`. Each anchor target is present. There is no router, hidden application route, sitemap content, or server-side source route.

External URL inventory: the page contains 127 unique literal HTTP(S) destinations, including corpus appearances, gap-analysis sources, Google Fonts, Chart.js CDN, LinkedIn, email, RN domains, and the RN portfolio. The embedded `ENTRIES` array contains 120 literal URLs for 132 records; entries without URLs are visibly marked missing/dead/metadata-only. All 127 destinations were inventoried; bulk HTTP verification could not be completed under the network approval boundary, so status remains **unverified** except destinations manually exercised and those the page itself labels. See `ROUTE_CONTROL_LEDGER.md` and `/tmp/fadiman-urls.txt` from the audit session.

## 4. Complete interaction/control inventory

- Table-of-contents navigation: 12 links; all scroll to existing sections.
- Skip link: keyboard-reveal link to `#main-content`; present.
- Search suggestion chips: 8 (`Antidepressants`, `Dose evolution`, `Contraindications`, `Creativity`, `LSD vs psilocybin`, `The Protocol`, `Long COVID`, `Evidence quality`). Enter/Space activate and populate the text field.
- Search text field and Search button: UI enters loading, then fails because the browser calls Anthropic directly without credentials and CSP `connect-src 'self'` blocks the destination. No retrieval occurs.
- Annotation textarea, button, and 3 load-example chips: chips populate text. Submission fails for the same API/CSP/key reason. No deterministic schema validation exists.
- Timeline canvas: Chart.js visualization driven by hard-coded counts. It depends on `cdnjs.cloudflare.com`; no textual data table accompanies the accessible canvas label.
- Corpus filters: media type (8 states), year, guest (all/Jordan Gruber/James Fadiman solo), status (all/live/dead/missing), and free-text search. They filter the hard-coded array and update visible count. “Guest” is not a complete guest selector; it is a narrow classification.
- Corpus links: rendered source links open in new tabs with `rel=noopener` in the generated table.
- Gap-analysis links: 9 static new-tab links omit `rel=noopener`.
- Mailto and LinkedIn links: direct outbound paths; no conversion instrumentation that works.
- Contact Architect floating button: opens a modal.
- Modal fields: optional name, required email, message; Cancel hides the modal. No Escape close, backdrop close, focus trap, focus return, or initial focus.
- Modal Send: inline handler has malformed promise chaining and targets `/api/lead`, which is 404. Even if syntax were corrected, `fetch()` resolves on HTTP 404 and the code would announce “Sent!” because it never checks `response.ok`.
- Analytics: load and 50%-scroll events POST to `/api/track`; both silently fail at 404.

## 5. Consumer journeys and observed results

**Prospective archive owner:** The first screen communicates a researched, ambitious archive proposal and quantifies scope. Scrolling reveals a strong metadata inventory, gap list, schema, architecture, cost model, RN credentials, and offer. However, consent status is withheld until the bottom disclaimer. A buyer cannot download the inventory, inspect a methodology, verify the claimed corpus counts, see rights status, or contact RN reliably.

**Researcher/clinician seeking an answer:** Selecting “Antidepressants” correctly fills the query. Search changes to “Searching…” and ultimately displays an API-configuration error. Even if credentials were supplied, the request contains only a hard-coded summary and the model’s prior knowledge, not transcripts, books, vector retrieval, or source citations. It therefore cannot deliver the “consolidated, cited answer” promised.

**Archivist testing annotation:** Example chips fill the textarea. Annotate fails. If enabled, the model would infer a 12-field JSON record without a verified speaker/source record, controlled-vocabulary validation, reviewer workflow, or stable confidence calibration. This is a generative mock, not production annotation.

**Corpus browser:** Type/year/guest/status/text filters function against 132 static metadata records. Source links are useful where present. No pagination is needed at this size, but no sorting, export, stable URL state, methodology, deduplication evidence, or provenance version exists. Filter state does not persist on reload or URL sharing.

**Contact:** The modal opens, but keyboard/dialog behavior is incomplete. Submission is broken and can falsely report success. The safe Stage A audit did not send consequential user data.

**Mobile/return visit:** CSS collapses some grids at 640/600/560px, but the long tables remain desktop-oriented and lack an intentional small-screen table pattern. There is no app state, saved search, history, or return-visit value beyond the static page.

## 6. Functional matrix

| Capability | Status | Evidence |
|---|---|---|
| Single-page proposal and section navigation | Working | Static HTML and valid anchor targets |
| 132-entry metadata inventory | Working as hard-coded display | `ENTRIES` array; count is not independent proof of completeness |
| Corpus filters and text matching | Working | Client-side array filter |
| Timeline | Partial | Hard-coded chart; CDN-dependent; no accessible equivalent data |
| Gap analysis | Partial/unverified | Nine linked assertions, no reproducible search method or audit date per source |
| “Complete public archive” | Unsupported | Only metadata; 120 URLs for 132 records; books and transcripts are not in a corpus |
| Live semantic corpus search | Broken/simulated | Direct unauthenticated Anthropic call; CSP blocks; no retrieval/index/citations |
| Live 12-field annotation | Broken/simulated | Same API defect; generative inference only |
| “Ask Jim” | Proposed only | Architecture copy; no product |
| Ingestion/transcription/chunking/vector DB | Proposed only | No source code, jobs, storage, APIs, or outputs |
| Evolution layer | Proposed only | No temporal comparison implementation |
| Daily update pipeline | Proposed only | No cron or server code |
| Contact | Broken | malformed handler and 404 endpoint; false-success logic |
| Analytics | Broken | 404 endpoint; no notice |
| Privacy/terms/consent/rights ledger | Missing | no routes or disclosures |
| Downloads/export | Missing | no inventory, sources, schema, or report export |
| Authentication/authorization | Intentionally absent but inappropriate | public named-person proposal |

## 7. Copy and information-architecture findings

Strengths: the proposal has a clear problem statement, unusually concrete architecture, cost breakdown, staged status, useful table of contents, and a thoughtful distinction between metadata inventory and a future full build in some paragraphs.

Material copy defects:

- “Complete public archive catalogued,” “full corpus mapped,” and “all 132 entries” overstate a researched metadata list. “Public output” and “complete” require a documented inclusion rule, search sources, deduplication method, last-checked date, and uncertainty.
- “Live Search Demo,” “semantic search,” and “Live annotation demo” describe broken generative mocks as working features. Rename to “non-operational interface concept” or remove.
- “Ask Jim” implies authorized voice/persona and direct access to Fadiman’s views. It should not be used without written approval and a clear “source synthesis, not Fadiman” label.
- “the person who coined the Fadiman Protocol,” “father of the protocol,” “first attempt,” “only person who can…advise,” and “a general developer cannot…” are unsourced, absolute, and unnecessarily adversarial. “Popularized a protocol often called the Fadiman protocol” is safer pending primary sourcing.
- “The government shut the field down” compresses a complex research/regulatory history into a single causal claim.
- “48 problems, 48 satisfactory solutions” and “LSD had worked for every single one” are presented repeatedly without design limitations and can read as efficacy proof.
- The footer disclaimer is too late. Independent status must be adjacent to the title, every “Ask Jim” reference, the contact offer, and metadata/share previews.
- The site shifts among “R.N. Collins,” Aloha AI Consulting, RN Builds, and an RN portfolio on a different Vercel domain. One owner/CTA should be canonical.
- The long single page has no executive “what is real now” matrix near the top. Readers must infer status across dozens of future-tense implementation details.
- There is no source-methodology, corrections, rights, clinical-safety, or changelog section.

## 8. Science/law/policy/regulatory claim ledger

| Claim/theme | Finding | Required treatment |
|---|---|---|
| Fadiman protocol: 1 day on/2 off; ~10 µg LSD or 0.1–0.3 g psilocybin | Actionable dosing embedded in model system prompt and examples. Mushroom mass has variable potency and is not a stable equivalent to LSD micrograms. | Remove from an unreviewed public chatbot. If quoted archivally, cite exact source/date, label historical description, state legality and variability, and prevent personalized advice. |
| 50/100/200/400+ µg use bands | Actionable escalating-dose framework; “psychotherapeutic” can imply treatment efficacy/accepted care. | Do not expose as instructions. Preserve only as attributed archival taxonomy with exact sources and prominent non-recommendation context. |
| SSRIs “may blunt” effect | Incomplete interaction framing. It can invite dose escalation and omits medication-specific and psychiatric risk. | No tapering/dosing answers. Direct users to prescribers; cite interaction evidence and uncertainty; include lithium, MAOI/serotonergic, bipolar/psychosis, cardiovascular and other safety review as applicable. |
| Contraindications limited to psychosis/schizophrenia and “certain medications” | Materially incomplete for a consumer answer. | Clinical review and source-specific boundaries; no personalized clearance. |
| LSD energizing/cognitive; psilocybin visual/emotional | Generalized experiential stereotype, not established comparative clinical fact. | Attribute as Fadiman’s reported view, not product truth. |
| Long COVID “emerging” reports | Anecdotal/citizen-science signal, not evidence of safety or efficacy. | Explicitly label hypothesis/self-report; link primary material and contrary/absent clinical evidence. |
| Thousands across 51 countries/2019 paper | Plausible attribution but the site does not link the paper or distinguish survey/self-report limitations. | Provide DOI, sample/method/outcome, limitations, and exact relationship between book reports and peer-reviewed data. |
| 1966 creativity study, 27 subjects, 48/48 solutions | Historical study exists, but site copy elides lack of modern control/blinding, selection, subjective success judgments, and context. | Link original paper; label exploratory historical study and quote precisely. Do not state causal efficacy. |
| “resets the brain’s stress response,” HPA/neuroplasticity mapping | Example is expressly speculative. The annotation engine can fabricate mechanistic precision from a quote. | Do not infer a mechanism field without cited evidence and expert review; separate speaker claim from evidence appraisal. |
| Psilocybin licensed in Oregon and Colorado; “more states moving” | Broadly time-sensitive and jurisdiction-dependent. Licensed services are not general medical approval, and state programs differ. | Cite current statutes/rules and dates; distinguish service models, research, decriminalization, FDA approval, and federal CSA status. |
| Clinical reliance/liability framing | The site claims RN can frame information for licensed clinical use, while the product lacks clinical governance and licensed-care boundaries. | Obtain qualified clinical/legal review by jurisdiction; do not market the atlas as clinical decision support. |

Evidence benchmark: FDA’s July 2026 final guidance treats psychedelic products as investigational drugs requiring ordinary effectiveness standards plus special trial safeguards; it does not establish microdosing as care. NCCIH lists unpredictable experiences and adverse effects, including harms associated with psilocybin microdosing. In the 191-participant self-blinding eLife study, placebo and microdose groups showed no significant between-group differences in primary psychological outcomes, with small differences explainable by broken blinding. DEA continues to list LSD as Schedule I federally. These sources must contextualize—not be collapsed into—Fadiman’s citizen-science positions.

Legal/IP/publicity findings (not legal advice):

- 15 U.S.C. §1125(a) addresses confusion about affiliation, sponsorship, or approval. The title/domain, product persona, and commercial offer create a risk that a footer disclaimer may not cure.
- Right-of-publicity, name/likeness, unfair-competition, and endorsement rules vary by jurisdiction. Written consent and counsel review are prerequisites for a commercial named-person knowledge product.
- Publicly accessible recordings, podcasts, videos, books, and transcripts are not public domain. The proposed `yt-dlp`, RSS MP3 retrieval, EPUB/PDF extraction, transcription, embeddings, excerpts, and generated answers implicate reproduction, derivative-work, display/distribution, contract/platform, and publisher/host rights. Fair use is fact-specific, not an ingestion policy.
- Build a rights ledger by work: source URL, owner(s), host/platform, publisher, recording/transcript/book rights, license/permission, permitted storage/use/output, territorial/term limits, attribution, takedown contact, and review date.
- Third-party hosts, guests, coauthors, and audience participants also have attribution, recording, privacy, and publicity interests.
- The product must never generate synthetic quotations or attribute model synthesis to Fadiman. Answers need source IDs/timestamps/page citations and verbatim/synthesis separation.

## 9. Accessibility and responsive findings

- Positive: one H1, sequential section H2/H3 structure, a labeled nav, skip link, explicit labels/ARIA labels on form controls, keyboard handlers on chips, and `role=img`/label on canvas.
- P1: contact dialog lacks focus containment, initial focus, Escape behavior, focus restoration, and a programmatic error/status region. Background remains keyboard-reachable.
- P1: dynamic search/annotation results and loading/errors lack `aria-live`/status semantics.
- P1: large data, inventory, architecture, and pricing tables have no responsive transformation; at 320–400px and 200% zoom they require horizontal navigation and can lose context.
- P2: chart has only a high-level accessible name, not the underlying year/value data.
- P2: custom span buttons duplicate native-button behavior incompletely; Space handler does not prevent page scrolling. Use `<button>`.
- P2: focus styling is defined only for two inputs; many links/buttons rely on browser defaults against varied backgrounds. Run contrast/focus verification before release.
- P2: no `prefers-reduced-motion` rule; scrolling and character-by-character simulated streaming have no motion reduction.
- P2: no table captions and limited header/scope semantics for dense tables.
- P2: modal uses alerts for validation/completion; they are disruptive and not durable.
- P3: static gap links opened with `target=_blank` omit `rel=noopener`; generated corpus links include it.

Automated browser/assistive-technology and full 320px/400% visual testing were not available in this audit environment; findings above derive from source, responsive CSS breakpoints, and control behavior and must be verified in Stage B.

## 10. Brand-architecture findings

The work belongs under **Aloha AI** as an independently initiated research/knowledge-infrastructure proposal. It is not NSAG, Institutions of One, Entheogen Atlas, or Psychonaut Bookworm. RN Builds can document the making process, but should not appear as a third owner.

The strongest brand evidence is RN’s ability to inventory a fragmented field, define a data model, identify gaps, and turn research into an implementation plan. The weakest brand signal is publishing a living expert’s bespoke, monetizable archive concept without the expert’s knowledge, while calling the interface “Ask Jim.” In a sensitive health domain, that looks extractive and undermines the governance credibility RN wants to establish.

It also fragments the psychedelic estate: Psychedelic Operations Intelligence, Entheogen Atlas, Psychonaut Bookworm, and this proposal all touch adjacent information problems. The coherent architecture is one “psychedelic knowledge infrastructure” capability family with distinct, truthfully scoped artifacts—not four implied mature products.

## 11. Business-model and conversion findings

- **Buyer/decision-maker:** Fadiman/estate/rights holders, publishers, or an authorized archive institution.
- **Beneficiaries:** readers, researchers, journalists, historians; clinicians only after clinical-governance restrictions.
- **Value:** preservation, discoverability, source-linked synthesis, controlled vocabulary, rights-aware archive management.
- **Adoption barriers:** absence of consent; rights fragmentation; accuracy and attribution; medical liability; ongoing source maintenance; model hallucination; costs; succession/governance; reputation.
- **Trust barriers:** public unsolicited pitch, broken “live” demos, completeness claims, late disclaimer, no methodology/rights/privacy policy.
- **Conversion:** broken contact form. A personal email and LinkedIn link exist, but the site has no scoped engagement option, discovery process, rights prerequisites, deliverable acceptance criteria, ownership terms, support/SLA, or maintenance agreement.
- **Economics:** detailed vendor-cost estimates are useful but are projections, not quotes. They omit rights/licensing, legal review, clinical review, accessibility, security, insurance, content moderation, takedowns, maintenance labor, and data export/exit costs.

Smallest coherent business path: a private discovery memo and verified metadata inventory, offered only to the authorized rights holder. Phase 1 should be rights/methodology/provenance, not AI. A public RAG interface is a later licensed phase with evaluation, red-teaming, clinical boundaries, and source-linked output.

## 12. Security, privacy, data, and operational findings

- CSP is stronger than many prototypes (`default-src self`, `frame-ancestors none`, `base-uri self`, `form-action self`) but deliberately makes both Anthropic demos impossible via `connect-src self`.
- Client-side `anthropic-dangerous-direct-browser-access:true` is the wrong architecture even if a key were later added; it invites secret exposure and ungoverned user prompts. Use a server route with authentication/rate limiting, no client key, logging minimization, policy checks, and `response.ok` handling.
- User medical questions and pasted quotes are attempted third-party transmissions with no disclosure or consent. They may contain health, medication, identity, or copyrighted information.
- No data map, retention/deletion, processor list, DPA, access control, incident response, audit log, correction/takedown, or source-version strategy exists.
- Static metadata is hard-coded and has no provenance timestamps, hashes, reviewer state, or migration/version control visible to consumers.
- Chart.js and Google Fonts are third-party dependencies. Subresource integrity is absent for Chart.js; the CSS permits external fonts.
- External-link safety is inconsistent.
- No automated tests, lint, build validation, dependency manifest, observability, error reporting, backups, or disaster recovery are present.
- `/api/track` and `/api/lead` fail silently or misleadingly. Do not collect until policy and operational owner exist.
- No secrets were found in the inspected live HTML.

## 13. Defects ranked P0–P3

**P0 — blocking**

1. Public commercial named-person product/proposal without knowledge or documented consent; unpublish/access-restrict.
2. Actionable psychedelic dosing/medication/condition content in an ungrounded model prompt; disable/remove public AI controls.
3. Planned wholesale media/book/transcript ingestion lacks a rights and permission basis.

**P1 — serious**

1. “Live” search and annotation are broken and not corpus-grounded.
2. Contact submission is broken and can falsely announce success.
3. Completeness, semantic-search, citation, clinical-framing, and exclusive-competence claims overstate evidence/product state.
4. No privacy, terms, medical-use policy, rights policy, correction/takedown, or source methodology.
5. Independent/no-endorsement notice is buried below the entire proposal.
6. Dialog keyboard/accessibility failures and large-table mobile/reflow risk.

**P2 — material**

1. Missing sitemap advertised in HTML; robots absent.
2. Corpus links and status cannot be fully revalidated from a reproducible ledger.
3. No export, stable filter URLs, changelog, review state, or inventory version.
4. Timeline lacks accessible data equivalent; dynamic results lack live regions.
5. Vendor budget omits material governance and rights costs.
6. Identity splits among Aloha AI Consulting, RN Builds, rncollins.com, and an old RN portfolio deployment.

**P3 — polish**

1. Replace span chips with buttons, add consistent focus styling and reduced-motion behavior.
2. Add table captions/scope and consistent outbound-link indicators/noopener.
3. Tighten long-form repetition and reduce absolute/adversarial copy.

## 14. Exact remediation plan with file-level targets

No source was edited in Stage A.

1. **Vercel project settings:** immediately password-protect or remove the production alias. Do not redirect a sensitive named-person pitch into RN Selected Work.
2. **`index.html`:** if retained privately, place an above-fold “independent, uncommissioned, not endorsed; non-operational concept” banner; remove “Ask Jim,” “live,” “complete,” “only,” clinical-reliance, and actionable dosing prompt content; replace broken demos with static wireframes clearly labeled simulated; remove analytics/contact code until endpoints and notices exist.
3. **`index.html` corpus:** add methodology, inclusion/exclusion, search sources, last checked, duplicate handling, correction process, uncertainty, and a downloadable machine-readable metadata ledger. Add exact citations for every historical/scientific/statutory claim.
4. **New `RIGHTS_LEDGER.md` or protected rights database:** record permission status per recording/book/transcript and prohibit ingestion where rights are absent. Obtain written name/likeness/product authorization before any public named version.
5. **New `SCIENCE_AND_SAFETY_POLICY.md`:** define archival vs medical output, prohibited advice, evidence hierarchy, clinician review, emergency language, medication/tapering refusal, jurisdiction/version review, citation rules, and model-evaluation thresholds.
6. **If an authorized product is commissioned:** migrate to a maintainable app (`app/` or equivalent), implement server-only retrieval/API, source-level permissions, authenticated admin/reviewer workflow, provenance/versioning, correction/takedown, export, deletion, rate limits, audit logs, tests, monitoring, and accessible error states. Do not expose generation until retrieval and citation fidelity pass a documented evaluation set.
7. **Accessibility:** native buttons; fully managed dialog; live regions; keyboard and focus tests; responsive table pattern; chart data table; reduced motion; WCAG 2.2 AA contrast/reflow verification.
8. **New legal/product pages:** privacy, terms, acceptable use, IP/rights/takedown, independent-status/endorsement, medical/legal disclaimer, accessibility, and contact owner. These pages must reflect actual operations.
9. **`vercel.json`:** retain core security headers but update CSP only when a server-mediated architecture is implemented; add SRI/self-host assets where practicable. Never permit a browser-held provider key.
10. **Tests:** link/status validator for all 132 records; schema validation; filter tests; source/citation faithfulness; hallucination/quote attribution; clinical red-team; mobile/keyboard/AT; API error/timeout/rate-limit; contact privacy/response handling.

## 15. Recommended estate disposition

**E — Experiment/incomplete prototype.** Canonical record is private GitHub `rn-collins/fadiman-atlas` plus the currently public but unsuitable Vercel deployment `https://fadiman-atlas.vercel.app/`. It is not P because the core product is absent and consent/rights/safety defects block publication. It is not C because no parent product currently incorporates it. It is not D because no duplicate deployment was found. It is not I because it is a proposal artifact, not operating infrastructure. It is not permanently X yet because the inventory and architecture demonstrate potentially valuable capability if authorized or genericized.

Final treatment: **unpublish; preserve privately; seek authorization; otherwise genericize/merge the capability narrative into Aloha AI’s knowledge-infrastructure work.** If no consent or generic licensed corpus path is pursued, change the final disposition to X/archive.

## 16. Proposed RN Selected Work case-study corrections

- Do **not** add a standalone public card or case study for Fadiman Atlas now.
- In the master handoff, record: “Fadiman Atlas — E; private, independently initiated named-person archive/RAG scoping prototype; metadata inventory only; live AI/contact functions non-operational; not affiliated or endorsed; public deployment should be removed pending consent, rights clearance, scientific review, and remediation.”
- Do not list its live URL as a consumer build.
- Do not say the corpus was crawled/transcribed, the AI is grounded, the archive is complete, or the product was built for/with Fadiman.
- If permission is obtained, a later case study may document the research inventory and system design, with distinct buttons for an authorized live build and a truthful case study.
- If genericized, account for it as a component/capability under an Aloha AI “licensed knowledge infrastructure” case; explain relationship to Entheogen Atlas and Psychonaut Bookworm without implying a unified operational platform.

## 17. Evidence appendix

### Artifact evidence

- Live document: `https://fadiman-atlas.vercel.app/` (200; 126,568 bytes during audit)
- Repository: `https://github.com/rn-collins/fadiman-atlas` (private; metadata verified in connected inventory)
- Missing endpoints: `/robots.txt`, `/sitemap.xml`, `/api/track`, `/api/lead` returned 404 during audit.
- Source locations in `index.html`: metadata/canonical lines 1–20; analytics 205–218; navigation 247–261; claims 269–287; search controls 303–317; annotation 327–334; inventory/gaps 404–510; schema 523–540; architecture 544–860; credentials/offer/disclaimer 865–899; `ENTRIES` and filters 902–1160; Anthropic search 1168–1218; annotation 1224–1285; modal/contact 1300–1313.
- Full route/control ledger: `audits/fadiman-atlas/ROUTE_CONTROL_LEDGER.md`.

### Primary/authoritative review sources

- FDA, *Psychedelic Drugs: Considerations for Clinical Investigations* (final guidance, July 2026): https://www.fda.gov/regulatory-information/search-fda-guidance-documents/psychedelic-drugs-considerations-clinical-investigations
- NCCIH, *Psilocybin for Mental Health and Addiction: What You Need To Know*: https://www.nccih.nih.gov/health/psilocybin-for-mental-health-and-addiction-what-you-need-to-know
- Szigeti et al., *Self-blinding citizen science to explore psychedelic microdosing*, eLife 10:e62878 (2021): https://doi.org/10.7554/eLife.62878
- DEA drug scheduling: https://www.dea.gov/drug-information/drug-scheduling
- 15 U.S.C. §1125 (false affiliation/sponsorship/approval and related provisions): https://www.law.cornell.edu/uscode/text/15/1125
- U.S. Copyright Office, Fair Use Index: https://www.copyright.gov/fair-use/

### Explicit unverified areas

- No authorization, license, trademark registration, publicity-right clearance, publisher agreement, or source permission was available; legal conclusions are risk flags, not determinations.
- The audit could not independently prove that the 132-record set is complete or that runtime totals, book/report counts, dates, historical quotations, and every source status are correct.
- All 127 external URLs were inventoried, but bulk network verification was blocked by the environment; each must be checked in a dedicated link-validation run, including redirects, paywalls, geo restrictions, and attribution.
- No provider key was supplied and none should be supplied to this client implementation. The AI outputs therefore were not generated; source inspection establishes that they are not corpus retrieval even if the request were enabled.
- No consequential contact submission was made.
- No complete screen-reader, device lab, 400% zoom, performance, or cross-browser run was available.
- Repository history and Vercel deployment commit could not be independently compared beyond connected metadata and the inspected live/repository document length; the canonical relationship is supported but should be rechecked before remediation.
