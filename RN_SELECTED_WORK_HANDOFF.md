# RN Selected Work — Comprehensive Continuation Handoff

Last updated: August 12, 2026 (HST)

## 1. Read this first

This is the controlling continuation document for **RN Selected Work**, the public portfolio and recipient-specific selected-work system for Rayven-Nikkita (RN) Collins.

Production site: https://rn-selected-work.vercel.app/

Repository: https://github.com/rn-collins/rn-selected-work

Current public routes of special importance:

- Main portfolio: `/`
- Complete writing archive: `/writing`
- Culturalyst recipient view: `/for/culturalyst`
- Culturalyst selected work: `/for/culturalyst/work`
- Culturalyst opportunities: `/for/culturalyst/opportunities`
- Culturalyst conversation guide: `/for/culturalyst/conversation`
- Build case studies: `/work/[slug]`
- NSAG overview: `/work/neurocognitive-systems-advisory-group`
- Aloha Intelligence Institute: `/advisory/aloha-intelligence-institute`

The site is deployed automatically when the GitHub `main` branch changes.

## 2. What this site is

RN Selected Work is not merely a gallery of attractive websites. It has four jobs:

1. Present every substantive RN build in an intelligible portfolio architecture.
2. Give each build a readable case study and a direct link to the live artifact.
3. Preserve RN’s published editorial body as a complete, navigable archive rather than a handful of featured pieces.
4. Generate tailored, recipient-specific `/for/[recipient]` experiences after RN conducts due diligence on a prospective client, collaborator, employer, institution, funder, or ecosystem partner.

The public portfolio is the canonical work index. Recipient views are curated pathways through that body of work; they do not replace or fork the canonical case studies.

## 3. Controlling distinctions between RN’s practices

These distinctions must remain accurate in every future edit.

### Aloha AI

Aloha AI is RN’s developing client-facing strategy and build practice. It combines research, law, science, design, and AI to help people and organizations understand complicated systems and turn that understanding into something usable: a decision tool, workflow, knowledge system, public resource, prototype, or implementation plan.

### RN Builds

RN Builds is the public workbench around RN’s practice—the place where people can follow what she is researching, testing, and making. RN Selected Work currently functions as the strongest public portfolio expression of that workbench.

### Neurocognitive Systems Advisory Group

The Neurocognitive Systems Advisory Group is a separate research-led institutional-design practice founded and led by RN. It is the home of Nervous-System-Aware Governance, RN’s original framework for identifying, documenting, measuring, and governing how institutional policies, technologies, procedures, language, environments, and power structures shape human cognitive and physiological conditions.

NSAG is not simply Aloha AI’s advisory layer. It has its own framework, fifteen governance modules, assessment system, evidence base, intelligence products, continuing-education curriculum, advisory practice, and applied implementations. Aloha AI may build technical infrastructure that implements NSAG’s work, but the practices remain distinct.

### Institutions of One

Institutions of One is an independent research and applied-research practice studying the conditions that allow one person’s work, capability, relationships, evidence, and intellectual assets to become portable, cumulative, and institutionally legible. The Ownership Platform is one technical implementation of that larger inquiry.

Do not rename NSAG to Institutions of One. They are distinct bodies of work.

## 4. Current portfolio architecture

The homepage has four principal work layers.

### Layer 1 — Six featured case studies

These are the most fully framed selected projects:

1. Institutions of One / Ownership Platform
2. FlexJD Resource Hub
3. Psychedelic Operations Intelligence
4. Buechler Pacific — Claude for Small Business
5. Keiki Robotics / Oʻahu AI
6. ThornCrest — Patent First Steps

Each featured card must provide:

- the kind of work;
- status and commissioning boundary;
- central thesis;
- summary;
- case-study link; and
- live-build link when a public build exists.

### Layer 2 — Complete Build Atlas

There are 29 additional builds. Every one has exactly one primary collection and one stable case-study route. The five controlling collections are:

#### A. Governance, institutions + public systems — 8 builds

- The Sovereign Stack
- GAPI — AI Agent Governance Infrastructure
- NARCH — Neuroarchitecture Advisory
- SPORT — Nervous-System-Aware Athletic Governance
- WNH — Women’s Neuro-Health
- AI for Developing Brains
- Cannabis Healthcare Education Impact Assessment
- Creator Rights Framework

#### B. Decision intelligence + monitoring — 7 builds

- Inflection Radar
- Transform Drug Market Transition Observatory
- Psych Ops Intel
- Startup Legal Risk Monitor
- Burgermeister Expansion Intel
- Source Integrity Audit
- AI Build Budget Calculator

#### C. Evidence + knowledge infrastructure — 6 builds

- Psychedelic Law Library
- EOLPC Knowledge System
- Entheogen Atlas
- Psych Ops Directory
- Destigmatization Toolkit for Psychoactive Plant Medicine
- Evidence·Studio

#### D. Education + capability building — 5 builds

- Zero → Frontier
- REGAC — Regulatory Compliance Intensive
- Set for Life
- Nervous System Studio
- The Psychonaut Bookworm

#### E. Independent practice + implementation — 3 builds

- Aloha AI
- One-Person-Firm OS
- Aloha Build Club

The collection map lives in `lib/build-collections.ts`. Do not return to rendering the raw `publicBuilds` array as one undifferentiated stream.

### Layer 3 — Frameworks + institutional work

This section currently presents:

- Neurocognitive Systems Advisory Group;
- nine applied governance systems cross-listed from the Build Atlas;
- Inflection Radar; and
- Aloha Intelligence Institute.

Cross-listing is intentional. A build retains one primary Atlas home while also appearing in institutional work when its substance applies. Cross-listing must not create a second case-study record, new number, or conflicting description.

### Layer 4 — Published work

The homepage retains selected close reads with substantive blurbs. It then routes readers to `/writing`, the complete archive.

## 5. Complete writing archive

The publication inventory is stored in `lib/publication-archive.ts`.

Current verified archive through August 12, 2026:

- 28 Fat Nugs Magazine articles
- 40 Cannabis Law Report publication URLs
- 3 Cannabis Law Journal editions
- 71 total publication records

The search included these names:

- RN Collins
- Rayven-Nikkita Collins
- Nikkita Collins
- RN Williams

Important publication rule: the site RN referred to as “Cannabis Law Review” currently identifies itself as **Cannabis Law Journal**. Use the publication’s actual current name unless primary evidence changes.

Important counting rule: 71 is the number of located publication records, not necessarily 71 distinct original works. The archive deliberately retains and labels:

- two Cannabis Law Report URLs for the April 2026 federal drug-policy article;
- two publication URLs for the consent-decree report; and
- three Cannabis Law Journal editions of work also published by Cannabis Law Report.

Do not silently remove those records, and do not represent them as new original articles.

The Fat Nugs inventory must be maintained from RN’s author archive—not only ordinary site search—because ordinary search missed thirteen articles during the August 12 audit.

## 6. Case-study content standard

Every case study should answer, as specifically as the available evidence permits:

1. What RN noticed
2. What RN researched
3. What RN built
4. Who it serves
5. What it demonstrates
6. What is directly verified
7. What is not verified or remains private
8. Whether it was commissioned, independently initiated, private, conceptual, active, or maintained
9. Where to open the live build
10. Where to inspect relevant source code or artifacts, when public and appropriate

The case study is not an excuse to repeat the live site’s marketing language. It should explain RN’s reasoning, system architecture, research discipline, decisions, boundaries, and actual artifact.

### Evidence-language rule

Use language such as:

- “The public artifact presents…”
- “The inspected routes verify…”
- “The case study exposes the architecture while the operational dataset remains private.”
- “This audit does not establish…”

Do not use language such as:

- “Every feature works” unless every feature was tested.
- “Validated” without naming the validation method and evidence.
- “Complete” merely because a homepage exists.
- “Client work” for independently initiated concepts.
- “Outcome” when the artifact only demonstrates an intended workflow.

## 7. Crawl and verification boundaries

`BUILD_CRAWL_AUDIT.md` is the controlling technical-evidence ledger.

Three levels of inspection must remain separate:

1. Reachability crawl
2. Route and link audit
3. Interactive product audit

The August 12 work completed a reachability crawl across all 29 Build Atlas sites and sampled up to 15 same-origin routes per site. It did not manually exercise every button, state, form, calculation, filter, download, source, mobile condition, or persistence layer on all 29 separate builds.

The RN Selected Work portfolio itself subsequently received:

- 43 successful internal route/asset fetches;
- 620 internal link checks with zero failed destination;
- confirmation that all 35 case-study routes are reachable;
- confirmation that all 29 Atlas records render case-study and live-build actions;
- confirmation that all 71 writing records render;
- checks of 106 unique external destinations, with 105 normal responses and LinkedIn returning its automation-specific status 999; and
- rendered desktop inspection with no horizontal overflow.

### Known separate-build findings

Do not fix these inside RN Selected Work. They belong to the repositories for the relevant individual builds:

- Startup Legal Risk Monitor exposes a literal `${sig.url}` route.
- Nervous System Studio exposes a literal `${u}` route.
- EOLPC Knowledge System exposes literal `${a.url}` and `${t.url}` routes.

The following builds exceeded the sampled-route cap and require uncapped audits later:

- Psychedelic Law Library
- Aloha AI
- Zero → Frontier
- Burgermeister Expansion Intel

## 8. Recipient-specific `/for` system

The Culturalyst experience is the standing prototype for future recipient views.

Every future recipient should receive a route set under `/for/[recipient-slug]`, normally containing:

1. **Overview / fit** — why RN is contacting this recipient, what she understands about its system, and the through-line connecting the recipient to RN’s work.
2. **Selected work** — a curated, ranked set of canonical projects with explicit reasons each one matters to this recipient.
3. **Opportunity directions** — concrete, recipient-specific possibilities grounded in due diligence, with no false implication that a project was requested or commissioned.
4. **Conversation guide** — the questions RN should ask to validate assumptions, understand internal priorities, and determine whether a useful engagement exists.

Additional pages may be added when warranted, but four pages are the default—not a mandatory ceiling.

### Required due diligence before creating a recipient view

Research and record:

- the entity’s legal and public identity;
- mission and stated priorities;
- products, programs, services, funding, partnerships, and recent activity;
- leadership and the specific recipient’s role;
- audiences and beneficiaries;
- public evidence of current problems, constraints, transitions, or opportunities;
- relevant Hawaiʻi, cultural, community, regulatory, institutional, or sector context;
- what RN genuinely knows versus what she is inferring;
- whether a proposed direction duplicates something the entity already offers;
- which RN builds and articles are most probative—not simply most attractive; and
- the next conversation’s actual decision.

### Recipient-view rules

- Never describe independently initiated concepts as commissioned.
- Never imply endorsement by the recipient.
- Keep source and subject-matter authority with the recipient when RN is translating that entity’s knowledge.
- Do not force a recipient into a predetermined project.
- Prefer three to five highly relevant builds over a generic portfolio dump.
- Link to canonical case studies rather than duplicating mutable case-study copy.
- Keep the recipient’s branding legible, but preserve RN’s authorship and the overall RN Selected Work system.
- State assumptions and boundaries visibly.
- Every CTA must lead to a real route, artifact, source, or contact pathway.

## 9. Culturalyst controlling interpretation

The current Culturalyst view should continue to lead with:

1. Institutions of One / Ownership Platform
2. FlexJD Resource Hub
3. Keiki Robotics / Oʻahu AI
4. NSAG as an additional dimension of RN’s institutional-design work

Its selected writing should foreground:

- RN’s field reporting from the Hawaiʻi Cannabis Expo;
- cannabis, land, and Hawaiian sovereignty; and
- the audit of whether cannabis social-equity systems produced durable participation rather than licenses on paper.

The point is not to propose reposting Culturalyst’s checklist. Possible directions include:

- a visual explainer connecting discovery, validation, relationships, and funding;
- a self-assessment identifying where a person becomes difficult to find or fund;
- an article examining why meaningful work remains institutionally invisible; or
- an interactive resource routing people toward next steps and back into Culturalyst’s ecosystem.

Culturalyst must remain identified as source and subject-matter authority where its knowledge is being translated.

## 10. Important implementation files

- `app/page.tsx` — homepage structure
- `app/globals.css` — shared visual system
- `app/writing/page.tsx` — complete writing archive
- `app/work/[slug]/page.tsx` — featured and Build Atlas case-study routes
- `app/work/neurocognitive-systems-advisory-group/page.tsx` — NSAG overview
- `app/advisory/aloha-intelligence-institute/page.tsx` — AII case study
- `app/for/culturalyst/**` — recipient-view prototype
- `lib/portfolio.ts` — six featured projects and selected writing
- `lib/public-builds.ts` — 29 Build Atlas records and their evidence boundaries
- `lib/build-collections.ts` — controlling Atlas taxonomy and institutional cross-list
- `lib/publication-archive.ts` — complete publication records and counts
- `PORTFOLIO_CONTROL.md` — broader portfolio control checklist
- `BUILD_CRAWL_AUDIT.md` — crawl findings and evidence status
- `PUBLICATION_CURATION.md` — publication-selection rationale

## 11. Data-integrity checks required after every relevant edit

Before publishing, verify:

- every `publicBuilds` slug occurs in exactly one primary collection;
- every collection slug resolves to a real `publicBuilds` record;
- every build card has a case-study link and live-build link;
- every case-study route builds successfully;
- featured and Atlas slugs do not collide;
- institutional cross-list slugs resolve without creating duplicate primary entries;
- archive totals equal the rendered publication-group totals;
- duplicate/republication notes remain attached to the correct URLs;
- all internal routes return success;
- the sitemap includes `/writing` and every case-study route;
- desktop and mobile layouts do not horizontally overflow; and
- no CTA uses `#`, a placeholder, an unresolved template expression, or an irrelevant top-of-page destination.

## 12. Publishing protocol

1. Preserve the existing Next.js architecture and package manager.
2. Make changes in the RN Selected Work repository only when the task concerns the portfolio.
3. Build locally with `npm run build`.
4. Verify rendered homepage, writing archive, recipient views, and affected case studies.
5. Run internal-link checks.
6. Update the applicable control ledger.
7. Commit to GitHub `main` only after checks pass.
8. Wait for Vercel’s production deployment to reach `READY`.
9. Verify the canonical production alias, not only an immutable deployment URL.
10. Report exactly what was verified and what remains unverified.

Never reset or discard unrelated working-tree changes. Some local files may be ahead of the repository or carry earlier work from the user or another agent.

## 13. Frozen continuation priorities

The next agent or chat should not reopen completed information-architecture decisions without evidence of a real problem. Continue in this order:

### Priority 1 — Complete mobile visual verification of RN Selected Work

Perform rendered checks of:

- homepage hero and navigation;
- all five Build Atlas collection headings and cards;
- institutional cross-links;
- archive callout;
- `/writing` jump navigation, publication headers, long article titles, and series groups;
- representative featured and Atlas case studies;
- Culturalyst’s four routes; and
- keyboard focus and touch-target behavior.

### Priority 2 — Recipient-view systemization

Extract a documented, reusable recipient configuration so a new `/for/[recipient]` route can be created from researched content without copying and editing Culturalyst components by hand. Preserve custom editorial judgment; do not reduce due diligence to generic mail merge.

### Priority 3 — Case-study evidence reconciliation

As each separate build receives its own later audit, update only that build’s canonical record and evidence note in `lib/public-builds.ts`. Do not rewrite all case studies merely for stylistic uniformity.

### Priority 4 — Publication maintenance

Add new RN publications after verifying the publication page, byline, date, canonical URL, publication identity, and series. Update the “through” date on `/writing`. Periodically re-crawl the Fat Nugs author archive and Cannabis Law Report/Journal searches under all four names.

### Priority 5 — New recipient sites

For each new client or prospect:

1. complete due diligence;
2. select relevant work and writing;
3. document assumptions;
4. build the recipient experience;
5. test every route and CTA;
6. deploy; and
7. prepare the exact outreach email or message that links to it.

## 14. Definition of done

RN Selected Work is complete for a given release only when:

- every known build is inventoried and deliberately placed;
- every public build has a readable case study and a direct build link;
- private systems have honest access boundaries;
- commissioning status is accurate;
- institutional bodies of work are distinguished correctly;
- the writing archive is current and transparent about duplicates;
- recipient views are grounded in actual research;
- every published route and CTA works;
- desktop and mobile presentation have been visually inspected;
- accessibility and metadata have been checked;
- evidence claims do not exceed the completed audit; and
- the canonical production deployment has been verified.

“The page exists” is not the definition of done.
