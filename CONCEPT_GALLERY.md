# Zero to One concept gallery

New route: `/ideas`. Integrated with homepage navigation, portfolio navigation, discovery and sitemap.

## Content

136 catalogue entries: 77 curated portfolio records (including 15 related research modules), 23 proposal concepts, one recovered implementation prototype, one creative study, one prepared curriculum, one editorial blueprint, one research framework draft, five editorial concepts, one series with verified published writing, two documented methods/frameworks, one essay draft and one published essay with draft derivatives and twenty-one additional published essays, one with a separately published supporting appendix. Twelve featured concepts. This is a recovered edition, not a certified inventory of every idea RN has conceived. Related concepts and modules are not counted as distinct inventions. The catalogue date is not a first-conception date.

Public fields omit proposal recipient names, correspondence, commercial terms and private source identifiers. No full proposal documents are shipped. Record-level limits preserve proposed versus delivered status and distinguish RN's proposed contribution from other people's existing intellectual property. Existing release holds are retained. The fifteen related module records distinguish public scope pages from paused assessment collection and retired standalone deployments. This status reconciliation does not validate their scientific claims or assessment instruments.

## Interaction

Lazy-loaded Three.js engine with a server-rendered sculptural fallback. The artwork is present before JavaScript loads; context loss suspends rendering and restores the fallback, and context restoration resumes the scene. Pause control, reduced-motion preference, offscreen/hidden-tab suspension and resource disposal. CSS visual studies, search, field filters, empty-state reset, native modal dialogs, keyboard close/focus return and shareable `?idea=` links. Denied clipboard access exposes a selectable URL instead of silently failing. No forms, trackers, databases or new external data access.

## Verification

- Production build: passed (767 routes).
- TypeScript: passed with `--allowImportingTsExtensions`, needed by existing repository tests.
- Existing image-source tests: 4 passed.
- `node scripts/check-ideas.cjs`: unique IDs, required text, featured references, module count and recipient/private-identifier checks passed.
- Hosted browser: search, concept dialogs and Escape dismissal pass. WebGL creation explicitly reports graphics disabled in this browser; fallback rendering verified, GPU rendering and context restoration not browser-verified.
- Built HTML/CSS inspected in 320px, 390px and 768px iframe viewports: no horizontal page overflow; single-column cards, hero and register fit. This is responsive layout verification, not physical-device or mobile Safari testing.

## Remaining inventory work

Not certified exhaustive. Several recovered proposal versions describe the same concept; these are consolidated. The private proposal-factory archive documentation, expedition contribution note and website source, and two health-data creative proposal images have now been reviewed and consolidated into three entries. The creative-study entry is limited to the surviving visual proposal text; its full underlying research was not recovered. The legal-capacity employment proposal has not been recast as an original product. Other concepts may exist under filenames that do not include “proposal.”

## Recovery destination

`/ideas` holds recovered concepts, proposals, research, drafts and unfinished work with accurate stages; prior publication or completion is not an inclusion requirement. Confidential material and release holds remain protected. See PORTFOLIO_CONTROL.md for the current intake decisions.


## Description and contact standard — November 3, 2026 Hawaiʻi

RN requires descriptions that are complete, detailed, precise and easy to understand. Explain the purpose and intended reader, the actual contents or proposed method, and the established state and limits. Use concrete language, define specialist terms, preserve useful detail and remove repetition. Do not lengthen copy with invented features, outcomes or generic assurances. Unknown evidence stays explicit. Distinguish research, drafts, designed assets, prototypes, tested functions and published work; availability alone proves none of the others.

LinkedIn is RN’s preferred contact channel for enquiries, collaborations and introductions. Use the existing LinkedIn account in `data/social-links.json`; do not describe Instagram as the preferred or quickest contact route. Other social accounts remain publication destinations.

All 115 descriptions received an editorial review in this batch; every record changed. Fifteen module summaries now describe their individual proposed review areas, checked against the NSAG source pages at fafd916a74131cbac127330da9ec8effdc0f5fe1. Source claims were not independently validated. Set for Life and the operations directory were reconciled with the newer existing public-build records. Unverified claims of curriculum delivery readiness and active co-working sessions were removed. Keiki Robotics and AI for Small Business now show Release-held concept, consistent with their existing boundaries. No entries added or removed; 77 build cards unchanged.

Validation for this batch: full 1,053-page production build, TypeScript, Ideas identity/content/privacy checks and whitespace checks passed. All three description fields for all 115 entries were verified in generated Ideas output; the generated contact page contains the LinkedIn preference and established profile URL, without the old Instagram priority claim. Entry IDs/order and privacy-held flags are unchanged. Hosted acceptance is recorded in PR41 after deployment. This is editorial and rendering verification, not complete source fact-checking or project completion.


## Published-writing recovery — November 3, 2026 Hawaiʻi

Added six existing published essays: The Recognition Came Before the Credentials; Knowledge Is Not Finished When I Understand It; The Papaya Was Engineered. So Was the Rescue System.; The Two Marks Your Computer Had to Learn; Hawaiʻi Once Ran on a Half-Hour the Continent Forgot; and The 56% Problem. Seven source records resolve to six works because the overlapping Recognition draft stays with its published counterpart. No new publication, source edit, image reuse or derivative release is claimed.

A dedicated optional `publicationUrl` now provides a Read published essay action. Its check permits only clean HTTPS article paths on the verified Polymath publication, with no query, draft, credential or tracking suffix. The existing private-recipient/source checks still apply to all other fields. Future hosts require explicit review rather than relaxing the prose privacy rule. The source sites retain the complete writing.

Supporting appendices use optional `appendixUrl`, under the same clean public Polymath URL restriction. They require a distinct parent publication link and appear within that work’s dialog, never as an automatic extra catalogue entry.

## Subject, type, status and collection relationships — November 4, 2026

RN approved three independent register filters. Subject retains the seven existing categories. Required workType describes the primary catalogued output: Writing, Research, Framework, Proposal, Application, Design or Series. Required workStatus describes its recorded development state: Concept, Draft, Prototype, In development, Documented, Documented build, Published or Paused. Preserve the detailed stage and boundary text in the dialog. Tested build is reserved for reviewed test evidence; no existing record is automatically upgraded from Documented build. Application includes websites and interactive tools; classifying a site does not verify all work it presents.

Filters intersect with one another and search. A visible reset clears all four controls, including empty-result combinations. Native labelled selects retain keyboard and mobile behavior within the existing visual identity. The twelve featured exhibits remain unchanged. The record count describes catalogue records, not unique completed inventions.

The original held flag is preserved. Separate releaseHeld combines that flag with existing Release-held concept stages, so their already-documented restrictions are visible without changing artifact-link semantics. It is displayed as Release held on rows and dialogs. A published work can still have held derivatives; its boundary explains the scope. No hold or underlying permission changes in this reorganization.

Optional parentId connects a reviewed record to an existing collection, series or programme. Parent and child dialogs link in both directions, preserving full detail, shareable URLs and the register's filters. Links show only recovered relationships, not a complete series claim. Initially connected: three Herbal Histories essays; the High Culture essay draft; the AaN series blueprint; fifteen NSAG modules; and the two described Institutions of One components. Other relationships require source review before addition. Existing appendixUrl remains attached to its parent work; scripts, versions and derivatives stay with their original work rather than becoming automatic extra entries. DDW, AaN and AI-build sites retain their own destinations; this change relocates no content.

All 126 existing descriptions, stages, holds, article links and IDs are preserved. The publication state of A Hundred Pounds an Acre was confirmed, but its complete-text review and inclusion remain pending; it is not counted in this taxonomy batch.

## Published originals and held derivatives — November 4, 2026

Published writing requires a verified canonical publicationUrl even when its derivative package remains unfinished or held. CIA/Eli Lilly was added before the reading-link feature and was missed during backfill; its current publisher metadata reconfirms published/web/free/RN author. The link is now supplied. Optional holdScope: derivatives makes the label and notice specific to its unfinished derivative materials. Original held/releaseHeld flags and boundary remain intact. Held unpublished originals still have no reading link.

Validator accepts the two documented published-essay stage labels, requires a link for every Writing / Published record, and retains the clean public article-route restriction. No new publication or rights clearance is inferred. Polymath is the currently verified reading host, not a rule excluding RN's writing published elsewhere; other canonical hosts should be added after record-level verification.

The gallery's thirteen individual writing records are a partial recovery, not a complete writing list. Current editorial catalogue v33 contains181records, including drafts, revisions and supporting publications; these are not181distinct completed works. Continue a whole-catalogue reconciliation in the existing owner records, accounting for individual entries, parent-series representation, derivatives, holds and unresolved matches. Do not make isolated sequential additions the only coverage strategy.

## Catalogue-wide writing reconciliation — November 4, 2026

Compared all181existingeditorialcataloguev33 records with gallery canonical article/appendix links and the catalogue’s explicit parent/revision relationships. This is metadata and relationship reconciliation, not complete review of181texts. After this batch:14catalogue records have individual published-writing entries, one supporting appendix is attached, one previously reviewed revision belongs to its existing essay, five other supporting records await parent-work review, and160records await individual reconciliation. A programme/series listing is contextual coverage, not automatic completion of every writing record within it. Records awaiting review are not automatically public or unique missing works.

Added the complete-text-reviewed opening essays for Institutions of One and Law Happens Somewhere, each linked to its existing parent. Corrected Law Happens Somewhere from concept-only to Series with published writing, with the current text’s Nervous System Aware Governance identity. Updated Salutogenic Legal Design to reflect the published essay’s retirement of the earlier triad and its separate participation inquiries and justice review; its research status remains Draft, not validated. No original source, image or held derivative was published.

128records / 15Writingentries (14Published,1Draft),12featuredworks,77buildcards. Next extend coverage within the newly opened series and across zero-direct-link series using current publisher state and complete texts; retain A Hundred Pounds an Acre in the existing queue. Canonical destinations beyond Polymath require their own verification.

## Entry-level organization and completeness — November 4, 2026

Use one record for a distinct work, with its main output determining Type and its evidenced development state determining Status. Subject answers what it concerns. These are independent dimensions: a published essay about a prototype is Writing / Published; it does not turn the prototype into a tested product. A series with published writing need not have a completed season. Release restrictions remain separate from development and publication status.

Connect individual works to their documented series or programme through parentId. Do not infer parentage merely from a shared topic. Keep an appendix, revision, script, carousel or video adaptation attached to its underlying work unless source review establishes a separately authored, distinct work that merits its own record. A collection entry provides context, not coverage credit for every work inside it. Preserve separate DDW, AaN and AI-build destinations.

Each description must make the following understandable across its existing question, expression and boundary fields:
- **Purpose and audience:** the concrete question, problem or experience, and whom the work is for when the source establishes that.
- **Contents and approach:** what a reader or user actually finds, how the argument or method works, and the important components. Define specialist terms needed to understand it.
- **Contribution:** what this particular work explains, proposes or makes possible, beyond its general subject.
- **State and evidence:** what exists, what was reviewed or tested, and what remains proposed, provisional, incomplete or held. Separate an author's argument from an independently established result.
- **Relationships and destination:** how it belongs to a series or programme, what supporting material is attached, and the verified reading or working destination where public access is permitted.

Write connected, specific prose; do not impose a word count or repeat every heading in the description. Completeness is relative to the recovered evidence, not permission to invent missing detail. State a material gap instead of filling it with generic promises. Do not embed confidential evidence, recipient identities or private operations in public copy. Reading an entire source supports a description review, not independent fact-checking, media acceptance or rights clearance.

In this pass, five explicit relationships already present in reviewed descriptions are now navigable: The Moving Studio and Capability & Choice → Institutions of One; AI & Your Work → Aloha AI; Familiar, Rewritten → Polymath Cultural Activation System; Follow the Fact → Public Agency Lab. This changes organization only: no new work, completed output, publication or permission is claimed. Counts remain 128 records, 15 individual Writing entries, 12 featured exhibits and 77 build cards. The earlier 115-description review is a dated checkpoint, not proof that every subsequent source or artifact is comprehensively verified.


## Two individual essays recovered — November 4, 2026

Added Your Career Has a Supply Chain (Institutions of One, edition002) and Who Made This So Hard? (Law Happens Somewhere). Current publisher metadata confirms both published/web/free/RN authorship. Complete text reviewed:25,903 and24,625characters respectively, including source/limit sections and captions. Descriptions distinguish the dependency model from a validated assessment and the legal-encounter mapping method from a completed field study; composite scenarios and unverified private rights/claims are explicit. Canonical Polymath links and parent relationships supplied. The linked Ownership Platform edition was not compared; no new canonical host or duplicate edition entry added. No image, media or independent claims/rights acceptance.

130records /17Writing(16Published,1Draft)/12features/77buildcards. Only two records added; existing descriptions, statuses, IDs and holds unchanged. Existing catalogue totals remain dated reconciliation evidence; its newer revision was not reread in this batch. No catalogue-file edit or whole-catalogue completion claimed. Earlier bc37d1b deployment dpl_Dr4G4mUbBmQeKhAjiK3KgFSMzUmd confirmed READY at exact SHA; mobile verification remains open after browser timeout. Next verify new exact-head build and hosted/mobile dialogs and parent navigation, then resume A Hundred Pounds an Acre complete text and remaining cross-series recovery. No merge or production release.

## Authorized continuation workflow — November 4, 2026

Treat progress updates as commentary, not stopping points. After completing a batch, continue to the next authorized item. End only when the authorized scope is complete, a genuine blocker requires RN, or an execution limit forces a checkpoint. Do not ask RN to repeat “proceed.” Never imply work continues after the final response.

1. Resume from the latest saved owner checkpoint and current PR41 branch. Read current source revisions and relevant automation instructions before changing anything; dated receipts are not current state.
2. Select unfinished work that can substantively improve `/ideas`: source recovery, descriptions, relationships, status corrections or unresolved verification. Use existing records and avoid overlapping concurrent work.
3. Review the necessary source material, distinguish actual outputs from proposals and incomplete artifacts, and implement evidence-supported changes. Preserve confidentiality, release holds, separate brand destinations and the entry-level description standard above.
4. Run checks appropriate to the change. Push authorized changes to the existing preview branch and verify the resulting exact-commit deployment and relevant interactions. A successful build is not visual, source, rights or full-package acceptance. Do not merge or release production while the existing hold applies.
5. Save the commit, preview link, precise verification scope, remaining gaps and next item in existing owner records. Report progress in commentary, then continue to the next authorized item; a batch checkpoint is not a request for another “proceed.”
6. If one dependency blocks an item, advance other ready work within the authorized scope. Do not make filler changes, repeatedly retry unchanged failures, or present documentation-only checkpoints as gallery production. If no work can proceed safely, identify the specific blocker and needed action.
7. When an execution limit forces a stop, preserve a resumable checkpoint and state what remains. Do not imply that the session continues after the final response or that a schedule guarantees a substantive update every run.

These instructions do not change any automation schedule. Scheduled continuation belongs to the existing GitHub Estate Audit; changing cadence requires an explicit schedule update. Do not create a duplicate inventory or task. Instructions improve persistence within execution limits; they do not keep a finished chat turn running.


## Continuation036 — Trinidad essay and bounded gallery follow-through

Read the current Added to Chapter receipt: essay and appendix remain one work, its hosted verification is already recorded, and the interrupted local build is still uncertified. Do not repeat those unchanged checks as new work.

Added A Hundred Pounds an Acre as one Writing / Published record under Herbal Histories after current publisher metadata and all 55,246 characters of the article were read, including its chronology and twenty-five-item claim ledger. Catalogue v36's P132 record was reconciled; the whole catalogue was not source-reviewed. Its embedded appendices stay with the essay. The description preserves missing original texts, the distinction between consolidated law and original enactment, attributed colonial beliefs, inferred connections and unverified media/rights. Herbal Histories now describes four reviewed published essays; this is not twenty-five-issue completion. Existing 129 other records and all holds/URLs remain unchanged. Counts:131records,18Writing(17Published/1Draft),12features,77buildcards.

The seven older queued child dialogs (two opening essays, Moving Studio, Capability & Choice, AI & Your Work, Familiar Rewritten and Follow the Fact) were read in full in the branch preview and child-to-parent navigation confirmed. This is desktop DOM verification only. The connected-browser tool was unavailable; the cloud browser exposes no supported viewport resizing, so their mobile checks remain outstanding. No new full-site/mobile-device acceptance.

The exact repository validator passes131/12 in the fresh checkout. Full1,053-page webpack build, TypeScript and generated full-description/canonical-link checks passed. Comparison confirms129other records exactly unchanged, only the existing parent updated and one essay added. The new exact-commit hosted receipt will be recorded in PR41 when available. No merge, production deployment, source publication, hold change or new inventory/task. PR38/PR25 remain protected. Separate private source-index review advanced40→50/3043; gallery changes themselves do not earn source-index coverage. Next: verify this entry and revised parent in the exact-head preview, retain the outstanding mobile queue, then continue broad cross-series intake and the existing source audit.


## Continuation038 — Source provenance essay recovery

Current publisher metadata and all 56,958 characters of Why Source Provenance Is Governance Infrastructure were reviewed, including captions, references, exercises and disclosure sections. The existing intake checkpoint v40 / run39 and catalogue P155 agree on its published state and explicit Uncertainty Has an Owner series relationship. Added two Writing / Published entries with clean canonical Polymath links. Also read all 42,024 characters of Why Institutions Automate Existing Confusion and its current publisher metadata, reconciling catalogue P160 and the existing related package pointer. Its five ambiguity registers, five dispositions, audit, workflow exercise and jurisdiction-specific examples are described as RN’s proposed analytical framework, not validated instruments or implementation evidence. All131previousrecords remain exactly unchanged; no new series or duplicate framework record. Its named series is explained in the description; unrelated NSAG application or shared topic tags are not used to invent a parent relationship.

The summary explains the eight-part Provenance Spine, fourteen-field Decision Lineage Record, audit and exercise, hypothetical scenario, correction propagation and privacy/minimization limits. The published article still calls for specialist review and workflow testing: publication is verified, completion of those conditions is not. No independent legal/scientific/technical claims, source-image licensing, media or practical effectiveness acceptance. Existing source files and publication state are unchanged.

133records /20Writing(19Published,1Draft)/12features/77buildcards. Added to Chapter plus appendix remains one work with its prior hosted receipt; interrupted earlier local build is not retroactively certified. PR38 compatibility candidate from continuation037 remains separate and unapplied; both PRs unmerged. Source-index cursor remains80/3043 unless the private audit checkpoint records actual further review. Full build, generated description, hosted and mobile results follow in PR41; no pending result is assumed passed. Preserve LinkedIn preference, all release holds, PR25 and separate brand destinations. Next cross-series full-text intake and remaining mobile checks, with existing source-index item80 onward.


## Continuation040 — Human review essay integration

Added Why Human Review Requires Authority, Context, and Time from the completed continuation039 source handoff. Fresh publisher metadata confirms RN author, published, web and free, with unchanged October 13 source revision; the earlier complete 37,411-character reading is retained rather than counted again. The current article-intake checkpoint v42 / run41 was consulted for the targeted P161 relationship and archive limits. Its ACT test, three authority levels, composite review scenario, comparison table, correction records and public-workflow exercise are described as RN’s proposed analysis, not a validated instrument, adopted legal rule or implemented service. Historical carousel approval does not transfer to its successor. No source image, independent legal/scientific claim or rights clearance is implied.

This is one published Writing entry, with the existing Polymath reading destination and LinkedIn contact. No new framework or series record and no parent relationship inferred from topic tags. All 133 prior records remain unchanged. Counts: 134 records, 21 Writing (20 Published, 1 Draft), 12 features and 77 build cards. Added to Chapter and its appendix remain one work; the earlier interrupted local build remains uncertified. PR38’s two proposals remain separate and unmerged.

Local validation and exact-commit hosted receipts are recorded in PR41 after execution; this source checkpoint does not assume pending results passed. Mobile verification remains subject to available browser capabilities. The private source-index cursor remains 130/3043 unless the canonical audit records actual further review. Next: remaining mobile checks, current cross-series source intake and existing index item130 onward. No merge, production change, source publication, schedule change or release-hold change.


## Continuation041 — Jamaica essay recovery

Added Ganga (Cannabis Sativa) after reviewing current publisher metadata and the complete 55,907-character text, including seven sections, the evidence-status section, chronology and twenty-five-item claim ledger. The latest article-intake checkpoint v44 / run42 and targeted P162 catalogue record confirm its Herbal Histories relationship; both embedded appendices remain part of this single work. The description explains RN’s documentary comparison and preserves corpus-limited negative findings, second-hand quotations, inferred transmission, unresolved botanical specimens and missing prosecution evidence. No independent historical, legal, botanical, linguistic, image, sensitivity or rights review is claimed.

Only the existing Herbal Histories parent changed among the 134 previous records; it now describes five reviewed essays, not a complete twenty-five-issue series. One new Writing / Published entry gives 135 records, 22 Writing (21 Published, 1 Draft), 12 features and 77 unchanged build cards. LinkedIn remains the preferred contact. Added to Chapter and its separately published appendix remain one work with the prior hosted receipt; the earlier interrupted local build is not retroactively certified. PR38 remains separate and unmerged.

Native validation, full build, generated-description and exact-commit hosted results are recorded in PR41 after execution, not assumed by this checkpoint. Mobile inspection remains open where the browser does not support resizing. The private index cursor remains150/3043 unless the canonical audit records actual additional review. Next: P163 Suggested but Not Proven current full text and broader catalogue recovery, supported mobile checks, and the existing private index item150 onward. No merge, production change, source publication, hold change or new inventory/task.


## Continuation042 — Shakespeare essay recovery

Added Suggested but Not Proven after current publisher metadata and all46,413 characters were reviewed, including eight sections, captions and evidence status. Intakev45/run43 targetedP163 record and explicit body-series introduction support Herbal Histories; the additional Unsettled tag does not create a second work. No embedded appendix or derivative package is counted. Only Herbal Histories changed among135existingrecords; it now describes six reviewed essays, not whole-series acceptance.136records/23Writing(22Published,1Draft)/12features/77buildcards.

Preserve the missing full2001paper and unverified controls; later excavation context does not individually date the tested fragments. Abstract-only and metadata-only source limitations remain explicit. No independent literary/history/archaeology/chemistry/image/rights clearance. Added to Chapter plus appendix remains one work with its prior hosted receipt; earlier interrupted localbuild remains uncertified. PR38 unchanged and separate. Local and hosted verification results follow in PR41; no pending result assumed passed. Privateindex170 remains unless canonical audit advances actual inspected rows. Next broader catalogue source recovery and saved audit/mobile dimensions; no merge, production, source publication or hold change.
