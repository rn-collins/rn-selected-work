/**
 * Curated write-ups, keyed by repository name.
 *
 * data/builds.json is generated (scripts/regenerate-builds.mjs). This file is
 * not, and must not be. Every entry was written after opening the build and,
 * where the build is API-backed, after reading what its endpoints actually
 * return — not by paraphrasing a meta description.
 *
 * Two rules govern the prose:
 *
 *   1. Describe the capability that exists. A monitor that collects candidate
 *      links for a human to verify is not a monitor that verifies them.
 *   2. Retired means retired, paused means paused, and a stub says it is one.
 *
 * A build in data/builds.json with no entry here is reported as drift by the
 * regeneration script. It is never published with an empty description.
 */

export type StatusKind =
  | "live"
  | "prototype"
  | "prelaunch"
  | "paused"
  | "retired"
  | "proposal";

export type BuildNote = {
  /** Repository name — the join key against data/builds.json. */
  repo: string;
  title: string;
  category: CategoryId;
  /** Honest one-line status. Shown verbatim. */
  status: string;
  statusKind: StatusKind;
  /** The problem the build addresses. */
  problem: string;
  /** What it actually does when you open it. */
  does: string;
  /** What it is built on. */
  builtOn: string;
  /** What it does not establish. Omitted only where there is nothing to qualify. */
  limits?: string;
  /** Slug of a longer case study on this site, where one exists. */
  caseStudy?: string;
  /**
   * True where the build operationalises an institutional or governance
   * question and is therefore cross-listed in the institutional section on the
   * home page. It keeps its primary home in its own category; this is a tag on
   * the generated record, not a second list to maintain.
   */
  institutional?: boolean;
  /**
   * Set when the public link is deliberately held. The build is still listed —
   * omitting it would be its own inaccuracy — but neither the index nor a case
   * study offers the URL, and the reason is shown in place of the link.
   */
  linkHeld?: string;
};

export type CategoryId =
  | "monitoring"
  | "atlases"
  | "tools"
  | "education"
  | "legal"
  | "records"
  | "practice"
  | "retired";

export const categories: { id: CategoryId; title: string; blurb: string }[] = [
  {
    id: "monitoring",
    title: "Regulatory and governance monitoring",
    blurb:
      "Scheduled collectors that watch a defined set of official sources and report their own collection health. Each one separates a verified authority from an unreviewed candidate, and says out loud when its last sweep is overdue.",
  },
  {
    id: "atlases",
    title: "Research atlases and libraries",
    blurb:
      "Catalogues of a field, built so the provenance survives the summarising. Each record carries where it came from and what it does not settle.",
  },
  {
    id: "tools",
    title: "Decision tools and workbenches",
    blurb:
      "Browser-local instruments for working through one decision. Nothing is transmitted, nothing needs an account, and each one states the judgement it cannot make for you.",
  },
  {
    id: "education",
    title: "Education and public guides",
    blurb:
      "Courses, first-steps guides and public explainers, written for a named audience and sourced well enough that a reader can check the claim rather than trust the author.",
  },
  {
    id: "legal",
    title: "Legal-information resources",
    blurb:
      "Resources for people navigating a legal system or a legal career. Independent of the institutions they describe, and explicit about it.",
  },
  {
    id: "records",
    title: "Field investigations and published records",
    blurb:
      "Reader-facing editorial systems with the evidence, revisions and rights records kept attached to the published work.",
  },
  {
    id: "practice",
    title: "Practice and organisation sites",
    blurb: "The public front doors of the practices this work runs under.",
  },
  {
    id: "retired",
    title: "Retired prototypes",
    blurb:
      "Deployments kept online as a record. They are not maintained and should not be treated as current products. They are listed because pretending they were never built would be its own inaccuracy.",
  },
];

export const buildNotes: BuildNote[] = [
  // ---------------------------------------------------------------- monitoring
  {
    repo: "aloha-ai-governance",
    title: "AI Governance Tracker",
    category: "monitoring",
    status: "Live · weekly automated collection · last sweep current",
    statusKind: "live",
    problem:
      "AI regulation arrives from five directions at once — FTC enforcement, state and federal legislation, bar ethics guidance, ABA guidance, and the EU AI Act — and no single feed covers them together. Anyone tracking it by hand is reading five newsletters and hoping none of them lapsed.",
    does:
      "Runs a scheduled sweep every Monday, files what it finds into those five categories, and publishes the result as a dashboard and a JSON endpoint. The API returns a collection-health block alongside the documents: last sweep time, age in days, failed-search count, newest item date, and a stale flag that trips after two missed cycles. A stale register is shown as stale rather than presented as the current picture.",
    builtOn:
      "Vercel serverless functions with an Upstash Redis store for the collected corpus and sweep telemetry. No account, no database of readers.",
    limits:
      "This is a collector, not a verifier. Results come from automated search, and the corpus includes secondary reporting about enforcement actions as well as primary documents. Nothing in it is a legal conclusion or a substitute for reading the source.",
  },
  {
    repo: "aloha-legal-ai-monitor",
    title: "Legal AI Guidance Monitor",
    category: "monitoring",
    status: "Verified register current · automated discovery overdue since 10 August 2026",
    statusKind: "live",
    problem:
      "When a court sanctions a lawyer for filing fabricated citations, the coverage travels much further than the order. Practitioners need the actual authority — the ABA opinion, the state bar guidance, the standing order, the published sanctions opinion — separated from commentary about it.",
    does:
      "Holds a hand-verified register of primary authorities on lawyers' use of generative AI: ABA Formal Opinion 512, four state and city bar opinions, two Middle District of Florida standing orders, and a published Ninth Circuit sanctions opinion. Each carries its jurisdiction, authority type, verification date and a link to the official source. A separate weekly sweep searches official domains for new candidates; anything it finds is filed as an unverified candidate and stays that way until a reviewer opens the document and confirms the characterisation. The two tiers are never merged.",
    builtOn:
      "Vercel serverless functions over Upstash Redis, with the verified register held in source and the discovery layer kept strictly downstream of it.",
    limits:
      "The eight verified authorities were confirmed on 17 August 2026. The discovery sweep has not completed since 10 August 2026 and the site reports itself stale; the verified register is unaffected by that, but recent guidance may be missing. Not legal advice.",
  },
  {
    repo: "psychops-intel",
    title: "Psych Ops Source Watch",
    category: "monitoring",
    status: "Live · sweep overdue by more than two cycles, reported on the page",
    statusKind: "live",
    problem:
      "Psychedelic regulation moves through state programme portals and rulemaking pages that publish on no fixed schedule. Most trackers in the space blur an official rule change together with a press release or an advocacy claim.",
    does:
      "Watches six verified official source endpoints — Oregon Health Authority psilocybin services, Colorado natural medicine, and four others — on a weekly cycle. Every candidate a query returns is put through a source policy before it is shown; on the most recent sweep, seven candidates passed and forty-one were rejected as noise. The page reports per-category sweep state, how many sources were healthy, degraded or failed, and how many days old the last successful sweep is.",
    builtOn:
      "Vercel serverless functions with an Upstash Redis store and an explicit source-policy module that every candidate must clear before display.",
    limits:
      "Screened candidates are unreviewed. A record in the source registry means the endpoint is monitored, not that something new was published there. Not legal advice.",
    caseStudy: "psychedelic-operations-intelligence",
  },
  {
    repo: "aloha-suppression-sweep",
    title: "Platform Moderation Evidence Lab",
    category: "monitoring",
    status: "Live · register maintained by hand, records verified 19 August 2026",
    statusKind: "live",
    problem:
      "Arguments about platform moderation of drug-related speech run on a mix of evidence types that get quoted interchangeably: an Oversight Board decision, a regulator's inquiry, a platform's own statement, and an advocacy group's allegation are not the same kind of fact, but they are cited as though they were.",
    does:
      "Keeps a source-linked register in which every record states four things separately — the claim, what its source actually establishes, the evidentiary boundary, and the verification date. An overturned Oversight Board decision is recorded as a documented reversal in an individual case, with an explicit note that it does not establish a platform-wide pattern, a motive, or a legal violation. Review state is kept in the visitor's browser.",
    builtOn:
      "A static front end over a versioned JSON dashboard endpoint, with a build-time validation script and a test suite. No account, no analytics, no submission endpoint; browser-local state only.",
    limits:
      "Bounded by design — it covers the documented public record, not the full universe of moderation decisions. Priority flags are local triage, not findings.",
  },
  {
    repo: "aloha-culture-monitor",
    title: "Culture Intelligence Monitor",
    category: "monitoring",
    status: "Prototype · exploratory, not on a maintained sweep schedule",
    statusKind: "prototype",
    problem:
      "Brand and campaign teams treat a film or television moment as a demand signal long before anyone has asked what would make that inference testable, or what governance questions an AI-assisted read of culture raises.",
    does:
      "Tracks film, television and cultural moments alongside consumer style and spending signals, and attaches an AI governance risk score to each read so the inference and its reliability travel together rather than the score arriving alone.",
    builtOn: "A Next.js pages-router application deployed on Vercel.",
    limits:
      "Exploratory. The signals are hypotheses about consumer behaviour, not measured outcomes, and the risk scoring is a framing device rather than a validated instrument.",
  },
  {
    repo: "transform-observatory",
    title: "Drug Market Transition Evidence Lab",
    category: "monitoring",
    status: "Live · v2, August 2026",
    statusKind: "live",
    problem:
      "Drug-policy transitions are argued from whichever dimension the arguer cares about — health, or crime, or revenue — and the dimensions that were not measured quietly become the ones that did not matter.",
    does:
      "Builds a source-anchored evidence record across six dimensions for a given drug-policy or regulatory transition, so a claim about one dimension can be read against what is and is not documented in the others.",
    builtOn: "A Next.js application on Vercel.",
    limits:
      "It organises published evidence. It does not generate findings, and an absence of evidence in a dimension is recorded as an absence rather than as a null result.",
    caseStudy: "transform-drug-market-transition-observatory",
  },

  // ------------------------------------------------------------------ atlases
  {
    repo: "entheogen-atlas",
    title: "Entheogen Atlas",
    category: "atlases",
    status: "Live · complete, maintained",
    statusKind: "live",
    problem:
      "The popular history of psychedelics is built on a handful of dramatic claims that have quietly failed replication, and they are repeated because the confirmed record and the contested one are told in the same voice. The 60,000-year Shanidar Cave story is the clearest case: the pollen it rests on is now attributed to burrowing rodents, and the assemblage contains no entheogen at all.",
    does:
      "Assembles archaeology, neuroscience, legal history, phenomenology and religious use into one atlas anchored on the oldest chemically confirmed use of a psychedelic — peyote from Shumla Cave, radiocarbon dated to 3780–3660 cal BC and shown by GC-MS to contain mescaline. Older claims are carried where they are serious, but held on an explicit evidence ladder rather than folded into a single headline figure. A separate evidence register and governance page record how each rung is assigned.",
    builtOn:
      "A static single-page atlas with a committed evidence register and a small governance endpoint. No build step; served from Vercel.",
    caseStudy: "entheogen-atlas",
  },
  {
    repo: "fadiman-atlas",
    title: "The Fadiman Knowledge Atlas",
    category: "atlases",
    status: "Live · 132 catalogued entries, 1968 to 2026",
    statusKind: "live",
    problem:
      "Thirty-four years of one researcher's recorded public output — talks, interviews, papers, broadcasts — is scattered across platforms that come and go, and there is no way to see the shape of the whole or to know which references still resolve.",
    does:
      "Catalogues 132 entries spanning 1968 to 2026, each carrying a verified link status so a dead reference is visible as dead rather than silently broken. Offers local search across the catalogue, an annotation aid whose workings are shown rather than asserted, and a full archive explorer.",
    builtOn: "A single static HTML document served from Vercel. No build step, no dependencies, no account.",
    limits: "A catalogue of recorded output. It does not reproduce the works, and it is not an authorised archive.",
  },
  {
    repo: "psychonaut-bookworm",
    title: "The Psychonaut Bookworm",
    category: "atlases",
    status: "Live · 454 published objects drawn from a 1,664-record ledger",
    statusKind: "live",
    problem:
      "A reading list in a contested field is a set of assertions about what is worth reading, usually made without showing where anything came from or whether the rights to use it were ever checked.",
    does:
      "Publishes 454 editorial objects — quote cards, then-and-now comparisons, flashcards, mini-essays, educational modules, character profiles, passage spotlights, companion reading lists, a scientific annotation layer, source packs — each drawn from a 1,664-record provenance ledger with per-item source visibility and rights-review notes. A research desk lets a reader hold a saved query across a session.",
    builtOn:
      "A static site with a committed provenance directory and a governance page, served from Vercel.",
    limits:
      "The published set is a subset of the ledger by design; items without settled rights review stay unpublished. It indexes and annotates literature, it does not reproduce it.",
    caseStudy: "psychonaut-bookworm",
  },
  {
    repo: "law-communication-library",
    title: "The Psychedelic Law Library",
    category: "atlases",
    status: "Live · 143 articles",
    statusKind: "live",
    problem:
      "Oregon and Colorado wrote genuinely novel statutes and rules, and the people most affected by them — facilitators, applicants, small operators — are reading them without counsel and without a plain-English intermediate layer that still points at the actual authority.",
    does:
      "Publishes 143 plain-English articles on Oregon and Colorado law, facilitator requirements, and psychedelic business questions, each carrying its sources, with a separate sources index across the whole library and a per-article manifest.",
    builtOn: "An Astro-built static site with prebuilt output committed to the repository, served from Vercel.",
    limits: "Plain-English explanation of published law. Not legal advice, and not a substitute for the statute or rule it describes.",
    caseStudy: "psychedelic-law-library",
  },
  {
    repo: "destig-toolkit",
    title: "Destigmatization Toolkit",
    category: "atlases",
    status: "Live · 222 sources, verification record committed",
    statusKind: "live",
    problem:
      "Six audiences — clinicians, employers, families, journalists, policymakers, patients — need the same pharmacology and the same law, but each needs it framed for a different decision, and a single undifferentiated explainer serves none of them.",
    does:
      "Covers pharmacology, law and policy for psychoactive plant medicine across six audience paths, over a 222-source reference base. A verification record is committed alongside the site, so the citation set can be re-checked by someone who does not trust the author.",
    builtOn: "A static site with a committed verification manifest, served from Vercel.",
    caseStudy: "destigmatization-toolkit",
  },
  {
    repo: "psych-ops-directory",
    title: "Psychedelic Operations Directory",
    category: "atlases",
    status: "Live · 175 listings, links checked 29 August 2026, records reviewed 20 August 2026",
    statusKind: "live",
    problem:
      "Directories in an emerging regulated field are read as endorsements. Whoever assembles one is assumed to have vetted licensure, quality and financial stability, and almost never has.",
    does:
      "Indexes 175 organisations with a category, a subcategory, a link status and a record-review date. Pricing, promotional claims, credentials, rankings and detailed service descriptions are deliberately withheld until claim-level provenance exists to support them. The API states the count, the review dates and the withheld fields; the current sweep flags 14 listings whose links no longer resolve.",
    builtOn:
      "A static front end over a serverless listings endpoint with a static fallback, plus a contract test suite. Methodology and corrections pages ship with it.",
    limits:
      "Inclusion is not vetting, endorsement, licensure verification, or any finding about quality, safety, financial stability or legal compliance.",
    caseStudy: "psych-ops-directory",
  },
  {
    repo: "aloha-encoding-effect",
    title: "The Encoding Effect",
    category: "atlases",
    status: "Prototype · interactive research note",
    statusKind: "prototype",
    problem:
      "Claims about screen media reshaping how people see themselves circulate as either dismissal or alarm, with the actual evidence rarely laid out in a form where a reader can see how far it reaches.",
    does:
      "Sets out a sourced hypothesis about how screen worlds may become self-relevant, presented as an interactive research note with an evidence ledger attached and its limits stated in the body rather than in a footnote.",
    builtOn: "A Next.js pages-router application on Vercel.",
    limits: "A hypothesis with an evidence ledger. It is not a finding, and it reports no original study.",
  },

  // -------------------------------------------------------------------- tools
  {
    repo: "ai-budget-calc",
    title: "AI Build Cost Workbench",
    category: "tools",
    status: "Live · v2, August 2026",
    statusKind: "live",
    problem:
      "Custom AI projects get quoted as one number, even though discovery, research, architecture, implementation, testing, documentation, launch and maintenance are different kinds and amounts of work. That opacity hurts the buyer and the builder equally.",
    does:
      "Walks six stages — project brief, editable labour architecture across eight workstreams, model and API workloads, infrastructure, one-time and recurring costs, named uncertainty drivers — and returns cost composition, sensitivity drivers, build and monthly ranges, and a first-year total. Scenarios save locally, share by URL, print to PDF, and export as CSV and JSON. The model-price catalogue is dated and editable rather than hidden behind a project-type selector.",
    builtOn: "A static browser application with local persistence and URL-encoded scenario sharing, served from Vercel.",
    limits:
      "Outputs are the user's own planning scenarios. They are not quotes, and they are not independently validated market benchmarks.",
    caseStudy: "ai-build-budget-calculator",
  },
  {
    repo: "provenance-verify",
    title: "Source Integrity Workbench",
    category: "tools",
    status: "Live · v2, August 2026",
    statusKind: "live",
    problem:
      "Documents now arrive containing authorities that do not exist, sources that do not support the proposition attributed to them, and confidence that outruns the evidence. A spot check cannot show which claims were actually reviewed, which is the thing a reader needs to know.",
    does:
      "Turns claims and citations into a review ledger across five stages: review brief, claim ledger, source register, claim-level findings, and disposition. It tracks claim type, materiality, retrievability, source type, support, contradiction, currency, attribution, conflicts and reviewer responsibility separately, rather than inferring validity from the presence of a citation marker. Outputs a release packet as Markdown, CSV, JSON or print.",
    builtOn: "A static browser application with local persistence, served from Vercel.",
    limits:
      "The score measures documentation completeness, not truth and not source authentication. Legal, clinical, scientific and regulatory conclusions still need the appropriate qualified reviewer.",
    caseStudy: "source-integrity-audit",
  },
  {
    repo: "opfos-firm",
    title: "One-Person-Firm OS",
    category: "tools",
    status: "Live · v2, August 2026",
    statusKind: "live",
    problem:
      "Independent professionals accumulate disconnected notes, task managers, client records, AI conversations and automations. The tools are not the constraint; deciding what belongs where, what happens next, and how the system stays current is, and that work never leaves the operator.",
    does:
      "A six-stage practice-architecture workbench: a maturity and friction map, editable workflow and tool inventories, governed AI role cards, a weekly review builder, a prioritised 30-day implementation sequence, and five portable data schemas. Includes an example mode, browser persistence, and Markdown, JSON, CSV and print exports.",
    builtOn: "A static browser application with local persistence, served from Vercel.",
    limits: "A planning tool, not a certification and not an autonomous operating system.",
    caseStudy: "one-person-firm-os",
  },
  {
    repo: "gapi-governance",
    institutional: true,
    title: "GAPI Agent Governance Workbench",
    category: "tools",
    status: "Live",
    statusKind: "live",
    problem:
      "Organisations deploying AI agents are asked for an inventory, a risk assessment and an evidence trail at the moment a regulator or a customer asks, which is the worst possible moment to start assembling one.",
    does:
      "Works through AI system inventory, risk triage, controls, evaluation, incidents and human oversight, and exports the result as an evidence pack. Everything stays in the browser.",
    builtOn: "A static browser application with local persistence, plus privacy and terms pages, served from Vercel.",
    limits: "Local-first issue-spotting. Not a compliance certification and not a legal assessment.",
    caseStudy: "gapi",
  },
  {
    repo: "sport-nsag",
    institutional: true,
    title: "SPORT Athlete Governance Workbench",
    category: "tools",
    status: "Live",
    statusKind: "live",
    problem:
      "Athlete welfare policies are written at the level of principle and then have to survive contact with scheduling, recovery, safeguarding and a young person's actual ability to raise a concern. The gap between the policy and the week is where the harm lives.",
    does:
      "Runs a programme and decision scan across scheduling, recovery, safeguarding, environment, athlete voice and escalation, then produces an owned action register and a 90-day governance roadmap with named responsibility and an independent response and review path.",
    builtOn: "A static browser application with local persistence, plus privacy and terms pages, served from Vercel.",
    limits: "Issue-spotting for a governance conversation. Not a safeguarding audit and not a clinical or legal determination.",
    caseStudy: "sport-nsag",
  },
  {
    repo: "narch-advisory",
    institutional: true,
    title: "NARCH Spatial Evidence Workbench",
    category: "tools",
    status: "Release review open · public link held",
    statusKind: "paused",
    problem:
      "Neuro-aware design claims are easy to make and rarely tested. A building gets described as calming, and nothing in the process ever asks what observation would have shown otherwise.",
    does:
      "Structures spatial observation into evidence-aware design hypotheses, runs an accessibility review, prioritises the resulting changes, and sets up post-occupancy measurement so a hypothesis can be checked after the space is occupied.",
    builtOn: "A static browser application with local persistence, plus privacy and terms pages, served from Vercel.",
    limits: "A structured observation and hypothesis tool. Not an accessibility certification and not a code compliance review.",
    linkHeld:
      "The public link is held pending the release review recorded against this build. The deployment answers, and its content is described above, but it is not promoted from this site until that review clears.",
    caseStudy: "narch",
  },
  {
    repo: "wnh-guide",
    institutional: true,
    title: "Women's Neuro-Health Evidence Navigator",
    category: "tools",
    status: "Release review open · public link held",
    statusKind: "paused",
    problem:
      "Neuro-health questions that cross life stages, cannabis, psychedelics, medications and symptoms tend to get one appointment's worth of attention, and the patient arrives without the specific questions that would make that appointment useful.",
    does:
      "Helps a person assemble what they are actually asking, what is known about it, and what to raise with a clinician, and produces a prepared set of appointment questions. Everything stays in the browser.",
    builtOn: "A static browser application with local persistence, plus privacy and terms pages, served from Vercel.",
    limits: "Evidence orientation and appointment preparation. Not medical advice, not a diagnosis, and not a treatment recommendation.",
    linkHeld:
      "The public link is held pending the release review recorded against this build. Health-facing guidance is promoted only after that review clears, whatever the deployment currently returns.",
    caseStudy: "womens-neuro-health",
  },
  {
    repo: "kids-developing-brains",
    institutional: true,
    title: "AI Use Decision Lab",
    category: "tools",
    status: "Live · v2, August 2026",
    statusKind: "live",
    problem:
      "Families and schools are asked whether children should use AI as though the tool, the task, the child's age, the data practices and the level of adult oversight all raised the same question. They do not, and the general answer is useless for the specific decision in front of someone.",
    does:
      "Evaluates one specific child-facing AI use across five age-aware stages: context, the role AI will play, what cognitive work it may substitute for, adult involvement, consequence level, and data and human safeguards. The decision logic is inspectable rather than hidden, and the output names the developmental capacities to protect, the questions to put to a vendor or school, and the signals to monitor.",
    builtOn:
      "A static browser application with local persistence and dated source links, served from Vercel. The decision model draws on the AAP 2026 state-of-the-art review, UNICEF child-centred AI guidance, UNESCO guidance for education, US Department of Education FERPA guidance, the FTC's amended COPPA Rule, and the NIST Generative AI Profile.",
    limits:
      "It does not diagnose children, certify products, determine legal compliance, or claim that long-term neurological effects are settled.",
    caseStudy: "ai-for-developing-brains",
  },
  {
    repo: "aloha-governance-audit",
    title: "Campaign Governance Issue-Spotter",
    category: "tools",
    status: "Live",
    statusKind: "live",
    problem:
      "Governance questions on an AI-enabled campaign surface after it ships, when the answer is an apology rather than a change.",
    does:
      "Runs a browser-local checklist over a cultural or AI-enabled campaign, linking each question to its official source and stating where the checklist stops.",
    builtOn: "A Next.js pages-router application on Vercel, with no submission endpoint.",
    limits: "Issue-spotting. Not a legal review and not a clearance.",
  },
  {
    repo: "aloha-creator-rights",
    institutional: true,
    title: "Creator Rights Issue Spotter",
    category: "tools",
    status: "Live",
    statusKind: "live",
    problem:
      "A creator using AI runs into disclosure duties, likeness rights, music licensing, platform policy and jurisdiction all at once, usually without knowing which of the five is the one that will actually bite.",
    does:
      "Asks seven questions and returns the issue areas they implicate across creator rights, AI use, disclosure, likeness, music, jurisdiction and platform review.",
    builtOn: "A Next.js pages-router application on Vercel.",
    limits: "Educational issue-spotting. Not legal advice and not a jurisdiction-specific answer.",
    caseStudy: "creator-rights-framework",
  },
  {
    repo: "aloha-third-asset",
    title: "The Third Asset",
    category: "tools",
    status: "Live",
    statusKind: "live",
    problem:
      "Creative teams adopting synthetic media move faster than the decisions about provenance, disclosure and what happens when something goes wrong — and those decisions are then made under incident conditions.",
    does:
      "A browser-local workbench for mapping synthetic-media, creator-rights, disclosure, provenance and incident-response decisions before they are needed, so the incident plan exists in advance of the incident.",
    builtOn: "A Next.js pages-router application on Vercel.",
    limits: "A governance mapping tool. Not a legal review.",
  },
  {
    repo: "aloha-behavioral-intelligence",
    title: "Behavioral Intelligence Layer",
    category: "tools",
    status: "Prototype · thin by design, and thin in practice",
    statusKind: "prototype",
    problem:
      "Attention signals from screen culture get converted into consumer-behaviour conclusions with no step in between where someone writes down what would have to be true for the inference to hold.",
    does:
      "Turns a screen-culture attention signal into an explicitly testable consumer-behaviour hypothesis, and states a use boundary on the same page.",
    builtOn: "A Next.js pages-router application on Vercel.",
    limits:
      "This is a single-screen prototype of roughly 130 words. It is listed as one, not as a product. The hypotheses are untested.",
  },
  {
    repo: "dru-assessment",
    institutional: true,
    title: "Cannabis–Healthcare Conversation Questionnaire Sandbox",
    category: "tools",
    status: "Prototype · unvalidated demonstration",
    statusKind: "prototype",
    problem:
      "Pre- and post-questionnaire designs need to link a person's two responses without holding their identity, and the linking mechanism is the part that usually gets hand-waved in a demonstration.",
    does:
      "Demonstrates pseudonymously linked pre and post questionnaire records held entirely in the browser, so the linkage design can be inspected rather than described.",
    builtOn: "A static browser application with local persistence, served from Vercel.",
    limits:
      "Explicitly unvalidated. It does not measure effectiveness, knowledge gain, behaviour change or clinical outcomes, and no instrument in it has been normed.",
    caseStudy: "cannabis-healthcare-impact-assessment",
  },
  {
    repo: "nervous-system-studio",
    institutional: true,
    title: "Nervous System Studio",
    category: "tools",
    status: "Research preview · waitlist open, platform not released",
    statusKind: "prelaunch",
    problem:
      "Advice about environment and routine arrives as universal prescription, when the thing that varies most is the person — and there is rarely any mechanism for someone to find out whether a change actually did anything for them.",
    does:
      "Runs a five-minute sensory profile, then structures a loop the site states plainly as association, then hypothesis, then test: record the environment, the starting state, how it felt, and optional product context, and let the patterns accumulate across entries rather than asserting an effect up front.",
    builtOn: "A single-file, dependency-free browser application served as a static site from Vercel, with a research dossier held alongside it.",
    limits:
      "A research preview with a waitlist, not a released platform. It is not a medical device, not a diagnostic, and it makes no clinical claim.",
    caseStudy: "nervous-system-studio",
  },

  // ---------------------------------------------------------------- education
  {
    repo: "zero-to-frontier",
    title: "Zero → Frontier",
    category: "education",
    status: "Live · 12 published routes, 237 verified resources",
    statusKind: "live",
    problem:
      "AI literacy material is either marketing for a product or an abstraction with nothing a reader can go and check. The gap is a guide that names its sources and survives someone actually following them.",
    does:
      "Runs a free, source-forward guide across twelve published routes — history, concepts, techniques, use cases, tools, playbooks, templates, the frontier, and a library — over 237 resources the site states are each verified and linked. It covers 76 years of history and 17 sourced turning points on its timeline, requires no account, and keeps optional reading progress only in the visitor's browser.",
    builtOn:
      "A static site on Vercel, with a machine-readable deployment registry recording that the superseded z2f-live hostname now only redirects here.",
    caseStudy: "zero-to-frontier",
  },
  {
    repo: "regac-academy",
    title: "REGAC Regulatory Academy",
    category: "education",
    status: "Live",
    statusKind: "live",
    problem:
      "People are asked to work with regulation without ever being taught the underlying skill: telling a binding authority from persuasive commentary, checking whether it still applies where and when they are, and knowing when to escalate.",
    does:
      "Teaches classifying authority, tracking jurisdiction and currentness, comparing regimes, and documenting escalation, as an interactive lab rather than a reading list.",
    builtOn: "A static site with its own academy stylesheet and script, plus privacy and terms pages, served from Vercel.",
    limits: "Regulatory literacy training. Not legal advice and not jurisdiction-specific guidance.",
    caseStudy: "regac",
  },
  {
    repo: "myelin-ce",
    title: "Myelin Learning Lab",
    category: "education",
    status: "Live · free, non-credit",
    statusKind: "live",
    problem:
      "Most AI training teaches people to use a tool. Almost none teaches them to interrogate its output before relying on it, which is the skill that fails first in practice.",
    does:
      "Runs free applied non-credit courses on responsible AI work — responsible AI verification, claims and sources and citations, data before prompts, and human oversight that works — alongside a field brief library, applied field tools, and progress that resumes where a learner left off.",
    builtOn: "A static multi-page site with client-side course and tool scripts, served from Vercel.",
    limits: "Non-credit. No certification, no accreditation, no continuing-education credit.",
  },
  {
    repo: "set-for-life",
    title: "Set for Life",
    category: "education",
    status: "Live · education product site",
    statusKind: "live",
    problem:
      "Law students are told to network and given no system for it, which produces either nothing or a volume of undifferentiated outreach that works against them.",
    does:
      "Presents a LinkedIn networking system for law students as a structured product, with a repository-level commerce registry kept in the open alongside the site.",
    builtOn: "A static site served from Vercel, with the commerce registry committed as a Markdown record.",
    caseStudy: "set-for-life",
  },
  {
    repo: "keiki-robotics-oahu-ai",
    title: "Getting Your Keiki Into Competitive Robotics",
    category: "education",
    status: "Live · built with Oʻahu A.I. for Hawaiʻi Tech Week 2026",
    statusKind: "live",
    problem:
      "Competitive robotics has real on-ramps in Hawaiʻi, and no plain guide to them. The practical consequence is that the families who find their way in are disproportionately the ones who already knew someone inside, which turns a programme meant to widen access into one that quietly narrows it. The missing artefact is small: a page answering the questions a parent actually has, in the order they have them.",
    does:
      "Explains what competitive robotics actually means before asking a family to commit to it, then covers how to start, roughly what it costs, where to look on Oʻahu, and — the section most guides skip — what families commonly get wrong on the way in. It closes with local examples rather than mainland ones.",
    builtOn: "A static single-page site with an installable web manifest, served from Vercel.",
    caseStudy: "keiki-robotics",
  },
  {
    repo: "patent-first-steps-thorncrest",
    title: "So You Have an Invention — First Steps",
    category: "education",
    status: "Live · built with ThornCrest Law for Hawaiʻi Tech Week 2026",
    statusKind: "live",
    problem:
      "Young inventors are told to protect the idea and left to work out what that means from sources written for people who already have counsel. The costly mistakes happen early and quietly — usually a disclosure made before anyone explained what disclosure does — and by the time someone can afford advice, the option they needed has often already closed.",
    does:
      "Explains what a patent actually is, sets out four gates an idea has to clear to be patentable, walks the first steps, and shows how to run a free search without paying anyone. It spends a section killing the myths that cost inventors the most — chiefly about disclosure — and points at free Hawaiʻi help, including a number to call.",
    builtOn: "A static single-page site with an installable web manifest, served from Vercel.",
    limits: "General information prepared with a law firm. Not legal advice and not an attorney-client relationship.",
    caseStudy: "thorncrest-patent-first-steps",
  },
  {
    repo: "claude-smb-buechler",
    title: "Claude for Small Business — Your First Workflow",
    category: "education",
    status: "Live · independent quick-start",
    statusKind: "live",
    problem:
      "Small business owners are told AI will help and handed a blank prompt box. For someone with payroll to run on Friday, an open-ended assistant is not an opportunity, it is one more thing to work out. The gap is not enthusiasm; it is a first workflow concrete enough to finish in an afternoon and useful enough to repeat the following week.",
    does:
      "Says what the tool actually is before recommending anything, names the systems it connects to, then walks three starter workflows an owner can pick from on the day: a Monday cash-and-invoices reset, a month close, and a morning brief. It ends where most quick-starts begin — what to connect first, and a short, unglamorous section on safety and cost.",
    builtOn: "A static single-page site with an installable web manifest, served from Vercel.",
    limits: "Independent. Not affiliated with, endorsed by, or produced for Anthropic.",
    caseStudy: "buechler-pacific",
  },
  {
    repo: "aiapc-site",
    title: "AI is a Piece of Cake",
    category: "education",
    status: "Prelaunch · checkout and inquiry collection are closed",
    statusKind: "prelaunch",
    problem:
      "Lawyers, physicians, executives and educators are each being sold generic AI literacy, when what changes between them is the professional duty that the technology runs into.",
    does:
      "Sets out a prelaunch AI-literacy programme for those four professional audiences and the shape of what each one would cover.",
    builtOn: "A Node-tested static site on Vercel.",
    limits:
      "Prelaunch. Checkout is closed and personal-data inquiry collection is disabled, so nothing on the site can be purchased or signed up for yet.",
  },
  {
    repo: "curriculum-licensing",
    title: "RN Collins Curriculum & Learning Systems",
    category: "education",
    status: "Live · two programmes available for licensing",
    statusKind: "live",
    problem:
      "Institutions that need a degree programme in a fast-moving field face a build-or-wait choice, and building one from nothing is a multi-year commitment they usually cannot make in time.",
    does:
      "Offers two delivery-ready programmes — a B.S. in AI and Machine Learning and a B.S. in Cybersecurity and Critical Infrastructure Protection — for institutional licensing, alongside a commissioned-development path.",
    builtOn:
      "Static pages generated by a small Node build script from a shared head, navigation and footer, on the shared estate design system, served from Vercel.",
  },
  {
    repo: "aloha-build-club",
    title: "Aloha Build Club",
    category: "education",
    status: "Live · daily room",
    statusKind: "live",
    problem:
      "Most people building with AI alone stop, and they stop for a reason that has nothing to do with the technology: nobody is expecting them at a particular hour.",
    does: "Runs a daily body-doubling room for people building with AI — show up, build alongside others, leave with something shipped.",
    builtOn:
      "A static landing page with a serverless lead endpoint writing to Upstash and Slack, and an evidence file in the repository mapping every claim on the page to a primary source.",
    caseStudy: "aloha-build-club",
  },

  // -------------------------------------------------------------------- legal
  {
    repo: "flexjd-site",
    title: "FlexJD SBA Resource Hub",
    category: "legal",
    status: "Live · independently maintained by a student leader",
    statusKind: "live",
    problem:
      "Part-time online law students assemble critical information across institutional pages, emails, calendars, informal knowledge and third-party sources — and a directory without freshness and correction controls makes that worse, not better, because it adds a source that looks official and is not.",
    does:
      "Runs a mobile-first hub with a newsletter, an all-purpose guide, a filterable opportunity tracker and seven awareness campaigns. The part that matters most is the machinery around them: a stated source-verification policy, a correction pathway anyone can use, privacy rules, freshness controls, and automated link checking and secret scanning in continuous integration. A resource a student relies on for a deadline has to be maintainable by one person who also has coursework, so the maintenance burden was designed for before the content was.",
    builtOn: "A static multi-page site with automated link checking and secret scanning in CI, served from Vercel.",
    limits:
      "Maintained by a student leader for the FlexJD community. Not an official statement, publication or record of Northeastern University or its School of Law; requirements, policies, deadlines and contacts must be verified with the original source.",
    caseStudy: "flexjd-resource-hub",
  },
  {
    repo: "clerking-site",
    title: "Clerking",
    category: "legal",
    status: "Paused · public prototype, back-end services inactive",
    statusKind: "paused",
    problem:
      "Supervised legal work is learned by doing it under someone who has done it, and the structures that make that transferable — reusable work formats, review points, what supervision actually checks — are rarely written down anywhere a student can see them.",
    does:
      "Presents a public educational prototype of supervised legal workflows and reusable work structures.",
    builtOn: "A Node-tested static site on Vercel.",
    limits:
      "Paused. Matching, applications, payments, analytics and inquiry APIs are all inactive, so nothing on the site can currently be applied to or purchased.",
  },

  // ------------------------------------------------------------------ records
  {
    repo: "tech-from-here-amsterdam-eindhoven",
    title: "Tech From Here: Amsterdam + Eindhoven",
    category: "records",
    status: "Live · 48 published investigations",
    statusKind: "live",
    problem:
      "Event coverage produces a lot of claims and very little that can be checked afterwards, because the evidence stays in the reporter's notes and the notes are never published.",
    does:
      "Publishes a searchable, city-filterable atlas of 48 source-backed investigations from the Netherlands 2026 event work. Each package opens as a public investigation page carrying its evidence, its limitations, its visual and its source links.",
    builtOn:
      "A production system that publishes the public atlas while keeping documentary media, rights records, internal source notes and human-QA evidence access-controlled. Public release does not convert an unresolved internal approval into a verified fact.",
    limits:
      "The public atlas covers the Amsterdam and Eindhoven corpus only. Private rights and production records remain private.",
  },
  {
    repo: "hawaii-tech-week-project-record",
    title: "Tech From Here · Hawaiʻi Tech Week",
    category: "records",
    status: "Review collection · publication not authorised",
    statusKind: "paused",
    problem:
      "A gallery rebuilt from an owner archive has to prove it is the same gallery — same revisions, same media, same approvals — or it is just a new site making claims about an old one.",
    does:
      "Presents 14 complete story drafts about the networks, instruments, standards, archives and living systems Hawaiʻi gave the world, with 140 visual slides, 14 interactives and nine platform drafts per story, rebuilt from the verified owner archive with all 14 immutable public revisions, 18 controlled media files, frozen release bundles and approval records preserved.",
    builtOn:
      "A build-and-test pipeline over a committed public-record snapshot sufficient to rebuild every reader-facing page, with verified binary originals still segregated in the private owner archive.",
    limits:
      "The collection is built for structured review and the site states that publication is not authorised. These are story drafts under review, not published articles.",
  },
  {
    repo: "institutions-of-one-reader",
    title: "Institutions of One — Public Reader",
    category: "records",
    status: "Live · Cycle 1, four editions",
    statusKind: "live",
    problem:
      "A research programme that publishes for a public audience and runs a private review process at the same time has to keep the two apart in a way that survives a build, not just a policy.",
    does:
      "Publishes four canonical editions — including The $2,000 Video, The Person Inside the Asset, and The Asset's Afterlife — with five interactive evidence experiences and a sanitised public Source Desk.",
    builtOn:
      "A privacy-separated reader application with build-time public-boundary and artifact-integrity checks, so the private studio, review records, unreleased audio and uncleared assets cannot reach the deployment. Served from Vercel.",
  },
  {
    repo: "ownership-platform",
    title: "Institutions of One",
    category: "records",
    status: "Live · research programme; instruments not validated",
    statusKind: "live",
    problem:
      "Independent professionals are assessed through institutional proxies — employer, title, credential, network — while the work, capability and relationships that actually constitute their practice stay illegible.",
    does:
      "Runs the public face of a research programme studying how individual capability becomes durable, portable and ownable: an Observatory, the Ownership Index instrument, Portfolio Professional research, a Question Lab, and partnership and applied-inquiry pathways.",
    builtOn: "A research platform with evidence-governed measurement instruments and longitudinal infrastructure, served from Vercel.",
    limits:
      "The Ownership Index and the Portfolio Professional instrument are candidate instruments. Neither is validated, normed or activated, and the programme's own gates say so. Participant data and research operations stay private.",
    caseStudy: "ownership-platform",
  },

  // ----------------------------------------------------------------- practice
  {
    repo: "aloha-ai-consulting",
    title: "Aloha AI",
    category: "practice",
    status: "Live · practice platform, active development",
    statusKind: "live",
    problem:
      "Organisations are pushed from a vague intention to use AI straight into vendor selection. The step that gets skipped is deciding what the bounded problem is, what the non-AI alternatives are, who is affected, who owns it, and in advance, what would make a pilot stop.",
    does:
      "Carries the public service catalogue, learning products including a twelve-issue Decision Desk and a citation verifier, machine-readable catalogue and feed routes, an offline recovery shell, and four browser-local decision aids: the Opportunity Studio at /studio, which walks twenty-three steps to map the work before any tool is chosen, and three at /tools — a decision record that preserves alternatives, owner, uncertainty, stop conditions and review triggers; a vendor comparison that tests the current process and two candidates against five non-negotiable gates plus your own weighted criteria; and a pilot designer covering hypothesis, baseline, measures, authority, affected-party input, stop and rollback.",
    builtOn:
      "A Next.js application on Vercel with a clinic inquiry form that fails closed unless its mail and anti-abuse environment variables are configured. Decision tools keep working data in the visitor's browser.",
    limits:
      "The platform demonstrates the tools, not completed engagements. The Opportunity Studio describes itself on the page as a prototype whose answers stay in the browser. Nothing here is professional advice, a compliance certification, or an authorisation to deploy.",
    caseStudy: "aloha-ai",
  },
  {
    repo: "nsag-site",
    title: "Neurocognitive Systems Advisory Group",
    category: "practice",
    status: "Live · advisory site; the fifteen prototype modules are retired",
    statusKind: "live",
    problem:
      "Governance advice about human-facing systems is usually written as policy and handed over, with no account of how it becomes a decision anyone has to make on a Tuesday.",
    does:
      "Presents evidence-led governance modules and human-supervised institutional advisory work, and is the current home of the work that the fifteen retired M-series prototypes were the first attempt at.",
    builtOn: "A static site on Vercel, with earlier full versions archived in the repository rather than deleted.",
    limits:
      "The current site is the maintained surface. The fifteen numbered prototype modules listed further down this index are retired and are not part of it.",
  },
  {
    repo: "creator-brand-evidence",
    title: "Evidence·Studio",
    category: "practice",
    status: "Live · method references current as of August 2026",
    statusKind: "live",
    problem:
      "Brand and creator strategy in regulated markets — cannabis, wellness, health, legal, education, AI — runs on intuition and then meets disclosure rules that were written for exactly that situation.",
    does:
      "Sets out an evidence-graded method for brand, creator and affiliate strategy in trust-sensitive markets, with recommendation confidence levels attached to each output and a governance and disclosure layer rather than a general claim of compliance.",
    builtOn: "A static multi-page site on Vercel, with the method and regulatory references dated on the page.",
    limits: "Marketing method grounded in FTC endorsement guidance. Not legal advice and not a compliance opinion.",
    caseStudy: "evidence-studio",
  },
  {
    repo: "bm-intel",
    title: "Burgermeister Expansion Intel",
    category: "practice",
    status: "Live · working intelligence dashboard",
    statusKind: "live",
    problem:
      "A company expanding across several jurisdictions accumulates legal and regulatory exposure faster than anyone can brief it, and the items that need a lawyer get mixed in with the items that do not.",
    does:
      "Tracks legal and regulatory signals relevant to an international expansion across the US, UK, Germany and Poland, scoring each by business impact and likelihood, and flagging on the record which items require outside counsel confirmation before anyone acts on them.",
    builtOn: "A Next.js application on Vercel over owned Supabase infrastructure.",
    limits:
      "Issue-spotting and regulatory intelligence only. Not legal advice; items marked as requiring outside counsel must be confirmed by an attorney before action.",
    caseStudy: "burgermeister-expansion-intel",
  },
  {
    repo: "rn-bring-the-question",
    title: "Bring Me the Question",
    category: "practice",
    status: "Live · practice front door",
    statusKind: "live",
    problem:
      "Most engagements start from a solution someone has already chosen, which means the actual question never gets examined.",
    does: "A single-page front door that asks for the question rather than the brief, and sets out how the work proceeds from there.",
    builtOn: "A Next.js application on Vercel.",
  },
  {
    repo: "rn-portfolio",
    title: "RN Builds",
    category: "practice",
    status: "Live · sibling registry of shipped builds",
    statusKind: "live",
    problem:
      "A portfolio and an evidence registry answer different questions — what is worth reading, versus what exists and still runs — and collapsing them into one page serves neither.",
    does: "Runs as the evidence registry side of that pair: what has shipped, with boundaries visible.",
    builtOn: "A Next.js application on Vercel.",
    limits: "Overlaps deliberately with this site. This site is the curated selection; that one is the registry.",
  },
  {
    repo: "sovereign-stack",
    institutional: true,
    title: "The Sovereign Stack",
    category: "practice",
    status: "Proposal · independently initiated, not adopted",
    statusKind: "proposal",
    problem:
      "A technical stack can be local, open and place-based and still leave the questions of authority, knowledge boundaries, accountability, withdrawal and refusal with nowhere to live.",
    does:
      "Demonstrates a possible decision protocol, a living system record, a bounded pilot path and an optional learning translation, organised around the governance questions a community-authorised process would still have to answer.",
    builtOn: "A prototype application on Vercel, grounded in the recipient organisation's own published descriptions of its work.",
    limits:
      "An independently prepared working proposal. It is not the recipient's product, policy, endorsement, approved protocol or community consent, and the substantive values and permissions would be theirs to define, not the author's.",
    caseStudy: "sovereign-stack",
  },
  {
    repo: "inflection-radar-real-chemistry",
    title: "Inflection Radar",
    category: "practice",
    status: "Proposal · independently initiated, not commissioned or adopted",
    statusKind: "proposal",
    problem:
      "Identifying the moment a scientific or regulatory situation turns is a judgement call made repeatedly and rarely written down, which makes it impossible to audit and impossible to hand over.",
    does:
      "Sets out an interactive public-source decision room for a proposed pilot: the timeline, research universe, account portfolio and governance workflow it would use.",
    builtOn: "A static interactive site on Vercel with downloadable brief, report, deck and research registers.",
    limits:
      "Proposed scope, not pilot results. It was not commissioned, authorised, reviewed, approved, endorsed or adopted by the organisation it addresses.",
    caseStudy: "inflection-radar",
  },
];

/** The fifteen retired NSAG prototype modules, listed rather than quietly dropped. */
const retiredNsagModules: [string, string, string][] = [
  ["nsag-m1", "M1", "Governance & Accountability"],
  ["nsag-m2", "M2", "Risk & Compliance"],
  ["nsag-m3", "M3", "Privacy & Data Protection"],
  ["nsag-m4", "M4", "AI Governance"],
  ["nsag-m5", "M5", "Cybersecurity"],
  ["nsag-m6", "M6", "Quality Systems"],
  ["nsag-m7", "M7", "Workforce Competency"],
  ["nsag-m8", "M8", "Accessibility"],
  ["nsag-m9", "M9", "Research Integrity"],
  ["nsag-m10", "M10", "Clinical Governance"],
  ["nsag-m11", "M11", "Education Standards"],
  ["nsag-m12", "M12", "Public-Sector Assurance"],
  ["nsag-m13", "M13", "Vendor Assurance"],
  ["nsag-m14", "M14", "Measurement & Evaluation"],
  ["nsag-m15", "M15", "Implementation Readiness"],
];

for (const [repo, code, domain] of retiredNsagModules) {
  buildNotes.push({
    repo,
    title: `NSAG ${code} — ${domain}`,
    category: "retired",
    status: "Retired · deployment kept online as a record, not maintained",
    statusKind: "retired",
    problem: `One of fifteen prototype modules that split institutional governance into separate assessable domains. This one covered ${domain.toLowerCase()}.`,
    does:
      "Serves a retirement notice. The module's assessment is no longer available and the page says so; the deployment stays up so that links to it resolve to an honest statement rather than a 404 or, worse, a working-looking form.",
    builtOn: "A static page on Vercel.",
    limits:
      "Retired. It is not maintained, it should not be treated as a current product, and the current advisory work lives on the NSAG site instead.",
  });
}

export const buildNotesByRepo = new Map(buildNotes.map((note) => [note.repo, note]));
