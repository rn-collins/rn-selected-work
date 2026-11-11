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
  | "practice";

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
];

export const buildNotes: BuildNote[] = [
  // ---------------------------------------------------------------- monitoring
  {
    repo: "legal-risk-monitor",
    title: "Founder Legal Radar",
    category: "monitoring",
    status: "Live · register checked 19 August 2026",
    statusKind: "live",
    problem:
      "A founder does not have a legal department, and the legal exposures that matter to an early company are scattered across agencies that each publish separately. The usual answer is a long checklist that nobody owns, so nothing on it ever becomes an action.",
    does:
      "Keeps a selected register of United States startup legal exposures, each one linked to the official source and labelled by source type. Every record can be moved through a review status — unreviewed, watching, ask counsel, closed — so the register becomes a set of owned decisions rather than reading. Records can be filtered by operating profile and product exposure, saved, and exported as JSON.",
    builtOn:
      "A static workspace with all review state held in the browser. No account, no tracking, and nothing about which records you read leaves the machine.",
    limits:
      "Deliberately selected rather than comprehensive, and educational issue spotting only. It is not legal advice, creates no attorney-client relationship, and the register does not attempt to cover every exposure a company may have.",
  },
  {
    repo: "aloha-dea-tracker",
    title: "DEA Scheduling Monitor",
    category: "monitoring",
    status: "Live · reads the Federal Register API directly",
    statusKind: "live",
    problem:
      "Controlled-substance scheduling moves through the Federal Register in several document types at once, and the ones that decide anything — final rules, proposed rules, temporary orders, quotas — arrive mixed in with registrations and routine notices. Reading it raw means sorting signal from filing traffic by hand.",
    does:
      "Pulls DEA documents from the Federal Register API over a rolling 180-day window and sorts them into high-signal actions, final rules, proposed actions open for comment, and quota and temporary orders. Registrations and general notices stay available as reference categories, and the counts across views reconcile to the same document set rather than being computed separately.",
    builtOn:
      "Scheduled collection against federalregister.gov, the primary source, with a source-health panel that reports the refresh cadence so a stale feed shows as stale.",
    limits:
      "Automated document discovery. Not legal advice, and not a complete regulatory review. A row says a document exists and what type it is.",
  },
  {
    repo: "nsag-admin",
    title: "NSAG Lead Intelligence",
    category: "tools",
    status: "Live · internal · admin key required",
    statusKind: "live",
    linkHeld:
      "The dashboard sits behind an admin key and holds enquiry data, so its address is not offered here. The write-up is the public record.",
    problem:
      "The NSAG assessment modules each collected enquiries on their own, so there was no single place to see which modules were drawing interest, from what kinds of organisation, or whether a tier was producing anything at all.",
    does:
      "Aggregates enquiries across the NSAG modules into one dashboard, filterable by module and by organisation tier, with totals for leads, active modules and organisations represented, and a CSV export.",
    builtOn:
      "An admin-key gate in front of the dashboard; the lead data is not served until the key is accepted.",
    limits:
      "This is internal tooling, not a public product. It is listed here because it is part of the estate and reachable, not because there is anything on it for a visitor to use — without the key it shows only the sign-in.",
  },
  {
    repo: "aloha-ai-governance",
    title: "AI Governance Tracker",
    category: "monitoring",
    status: "Live · weekly automated collection · last sweep 9 November 2026",
    statusKind: "live",
    problem:
      "AI regulation arrives from five directions at once — Congressional legislation, FTC enforcement, state bar ethics guidance, ABA guidance, and the EU AI Act — and no single feed covers them together.",
    does:
      "Runs a scheduled sweep every Monday, files what it finds into those five categories, and publishes the result as a dashboard and a JSON endpoint. The API returns a collection-health block alongside the documents: last sweep time, age in days, failed-search count, newest item date, and a stale flag that trips after two missed cycles. A stale register is shown as stale rather than presented as the current picture.",
    builtOn:
      "Vercel serverless functions with an Upstash Redis store for the collected corpus and sweep telemetry. No account, no database of readers.",
    limits:
      "A collector of unreviewed search results, including secondary reporting. Not legal advice. Open the primary source before relying on a row.",
  },
  {
    repo: "aloha-legal-ai-monitor",
    title: "Legal AI Guidance Monitor",
    category: "monitoring",
    status: "Live · eight authorities verified 17 August 2026 · discovery sweep current 9 November 2026",
    statusKind: "live",
    problem:
      "When a court sanctions a lawyer for filing fabricated citations, the coverage travels much further than the order. Practitioners need the actual authority — the ABA opinion, the state bar guidance, the standing order, the published sanctions opinion — separated from commentary about it.",
    does:
      "Holds a hand-verified register of primary authorities on lawyers' use of generative AI: ABA Formal Opinion 512, four state and city bar opinions, two Middle District of Florida standing orders, and a published Ninth Circuit sanctions opinion. Each carries its jurisdiction, authority type, verification date and a link to the official source. A separate weekly sweep searches official domains for new candidates; anything it finds is filed as an unverified candidate and stays that way until a reviewer opens the document and confirms the characterisation. The two tiers are never merged.",
    builtOn:
      "Vercel serverless functions over Upstash Redis, with the verified register held in source and the discovery layer kept strictly downstream of it.",
    limits:
      "The eight verified authorities were confirmed on 17 August 2026. The weekly discovery sweep last completed on 9 November 2026 and the site reports it healthy. Anything the sweep finds stays an unverified candidate until a person opens the document. Not legal advice.",
  },
  {
    repo: "psychops-intel",
    title: "Psych Ops Source Watch",
    category: "monitoring",
    status: "Live · six sources healthy · last sweep 9 November 2026",
    statusKind: "live",
    problem:
      "Psychedelic regulation moves through state programme portals and rulemaking pages that publish on no fixed schedule. Most trackers in the space blur an official rule change together with a press release or an advocacy claim.",
    does:
      "Watches six verified official source endpoints, including Oregon Health Authority psilocybin services and Colorado natural medicine, on a weekly Monday cycle. Every candidate passes a source-policy screen before it is shown. The 9 November 2026 sweep kept 16 candidates and rejected 68 as noise, with all six sources healthy. The page reports per-category sweep state and the age of the last successful sweep.",
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
      "Holds five public records on how Meta has moderated drug-policy content. Each record states the claim, what its source establishes, the evidentiary boundary, and the verification date. An overturned Oversight Board decision is recorded as a reversal in one case. Review state stays in the visitor's browser.",
    builtOn:
      "A static front end over a versioned JSON dashboard endpoint, with a build-time validation script and a test suite. No account, no analytics, no submission endpoint; browser-local state only.",
    limits:
      "Bounded by design — it covers the documented public record, not the full universe of moderation decisions. Priority flags are local triage, not findings.",
  },
  {
    repo: "aloha-culture-monitor",
    title: "Culture Intelligence Monitor",
    category: "monitoring",
    status: "Prototype · signal set reported stale, last success 17 August 2026",
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
      "A browser-local record. It does not claim live monitoring, automatic refresh, or independent outcome verification. Unknown is a valid result on any dimension. The completion figure measures how much of the record is filled in, not policy quality.",
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
    limits:
      "A research and editorial reference. Not medical advice, not legal advice, and not a current-law service. Statutes, agency positions, and litigation move faster than the archive.",
    caseStudy: "entheogen-atlas",
  },
  {
    repo: "fadiman-atlas",
    title: "The Fadiman Knowledge Atlas",
    category: "atlases",
    status: "Live · 132 catalogued entries, 1968 to 2026",
    statusKind: "live",
    problem:
      "Fifty-eight years of James Fadiman's recorded public output, from a 1968 KQED documentary through April 2026, is scattered across platforms that come and go.",
    does:
      "Publishes a proposed knowledge infrastructure as a catalogue of 132 entries from 1968 to 2026. A scope audit dated 24 October 2026 marks 63 entries historical, dead, or without a URL. The page includes local search, an annotation demonstration, and an archive explorer.",
    builtOn: "A single static HTML document served from Vercel. No build step, no dependencies, no account.",
    limits: "A catalogue of recorded output. It does not reproduce the works, and it is not an authorised archive.",
  },
  {
    repo: "psychonaut-bookworm",
    title: "The Psychonaut Bookworm",
    category: "atlases",
    status: "Live · 460 published objects from a 1,664-record ledger",
    statusKind: "live",
    problem:
      "A reading list in a contested field is a set of assertions about what is worth reading, usually made without showing where anything came from or whether the rights to use it were ever checked.",
    does:
      "Publishes 460 editorial objects on 11 books, drawn from a 1,664-record provenance ledger, with per-item source visibility. A research desk keeps a saved queue in the browser. Five object types stay held back while excerpt rights review is open.",
    builtOn:
      "A static site with a committed provenance directory and a governance page, served from Vercel.",
    limits:
      "Education, not medical advice. The published set is the reviewed subset of the ledger. The public ledger counts the withheld records and does not display them.",
    caseStudy: "psychonaut-bookworm",
  },
  {
    repo: "law-communication-library",
    title: "The Psychedelic Law Library",
    category: "atlases",
    status: "Live · 143 articles",
    statusKind: "live",
    problem:
      "Oregon and Colorado wrote new statutes and rules, and facilitators, applicants, and small operators are reading them without a plain-English layer that still points at the authority.",
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
    limits:
      "Public education and professional issue-spotting for adults. Not legal advice, medical advice, diagnosis, treatment guidance, or a substitute for the primary authorities. Verified 29 August 2026: 29 sections and 222 numbered source records.",
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
      "Indexes 175 organisations in 23 categories, from a survey of 177 names after duplicates were removed. A category, a short descriptor, a link status, and a record-review date are what a card carries. Pricing, credentials, rankings, and promotional claims stay withheld because the survey did not attach a public source to them. Links were checked on 29 August 2026 and entries reviewed on 20 August 2026. Fifteen of the 175 are shown without a link: 13 domains did not resolve, one certificate had expired, and one never had a site.",
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
    limits:
      "A proposed interpretive framework with an evidence ledger. It reports no original study. It does not diagnose audiences, predict purchases, or establish causation.",
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
      "Walks seven stages: brief, labor, runtime, other costs, risk, results, and compare. Labor lines are editable assumptions. Rates are scenario inputs. The page returns a build range, a monthly run rate, and a year-one range. Scenarios save locally, share by URL, print, and export.",
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
    status: "Live · local-first workbench",
    statusKind: "live",
    problem:
      "An organisation deploying an AI agent needs an inventory, a risk triage, and an evidence packet before a regulator or a customer asks for one.",
    does:
      "Works through AI system inventory, risk triage, controls, evaluation, incidents and human oversight, and exports the result as an evidence pack. Everything stays in the browser.",
    builtOn: "A static browser application with local persistence, plus privacy and terms pages, served from Vercel.",
    limits:
      "No automated certification. The workbench does not certify safety, compliance, lawfulness, or conformity with any standard. Scores organize review. They are not legal conclusions.",
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
    limits:
      "A local-first governance record. It does not diagnose, treat, clear participation, or prescribe workload. It does not replace sports medicine, mental-health care, safeguarding review, or legal counsel.",
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
      "Neuro-aware design claims are easy to make and rarely tested. A building gets described as calming, and nothing in the process ever asks what observation would have shown otherwise. The workbench is for architects, designers, developers, and the institutions commissioning the space. The public link is held, so this record does not offer the address.",
    does:
      "For architects, designers, developers, and the institutions commissioning a space, it structures spatial observation into evidence-aware design hypotheses, runs an accessibility review, prioritises the resulting changes, and sets up post-occupancy measurement so a hypothesis can be checked after the space is occupied.",
    builtOn: "A static browser application with local persistence, plus privacy and terms pages, served from Vercel.",
    limits:
      "A local-first inquiry tool. It does not establish medical benefit, legal or code compliance, accessibility compliance, or architectural or engineering adequacy.",
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
    limits:
      "Evidence orientation and appointment preparation. Not medical advice, not a diagnosis, not a treatment recommendation, and not emergency care.",
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
    limits:
      "A browser-local checklist. It does not monitor feeds, determine compliance, score legal risk, or provide legal advice. Entries stay in the browser tab.",
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
    limits:
      "A browser-local prototype. Educational issue-spotting only. Not legal advice, rights clearance, contract review, or permission to publish. It does not inspect agreements.",
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
    status: "Prototype · exploratory issue-spotter",
    statusKind: "prototype",
    problem:
      "Attention signals from screen culture get converted into consumer-behaviour conclusions with no step in between where someone writes down what would have to be true for the inference to hold.",
    does:
      "Takes one named culture moment and sets a cautious consumer-behaviour hypothesis next to public attention samples, including Wikipedia pageviews.",
    builtOn: "A Next.js pages-router application on Vercel.",
    limits:
      "An exploratory issue-spotter. It does not measure an individual, predict behaviour, or establish that media exposure caused a purchase. The hypotheses are untested.",
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
    status: "Live · private browser log",
    statusKind: "live",
    problem:
      "Advice about environment and routine arrives as universal prescription, when the thing that varies most is the person — and there is rarely any mechanism for someone to find out whether a change actually did anything for them.",
    does:
      "A private log of where you were and how you felt. Entries stay in the browser. It compares settings only after at least four entries, and only when a setting has been seen at least twice.",
    builtOn: "A single-file, dependency-free browser application served as a static site from Vercel, with a research dossier held alongside it.",
    limits:
      "Not a diagnostic instrument and not medical advice. A comparison describes the person keeping the log.",
    caseStudy: "nervous-system-studio",
  },

  // ---------------------------------------------------------------- education
  {
    repo: "zero-to-frontier",
    title: "Zero → Frontier",
    category: "education",
    status: "Live · eleven sections, twenty pages, 237 curated resources",
    statusKind: "live",
    problem:
      "AI literacy material is either marketing for a product or an abstraction with nothing a reader can go and check. The gap is a guide that names its sources and survives someone actually following them.",
    does:
      "A free source-forward guide in eleven sections and twenty pages, with a route builder and 237 curated resources. The history timeline carries 17 sourced turning points. No account. Optional reading progress stays in the browser.",
    builtOn:
      "A static site on Vercel. The public address is https://zero-to-frontier.vercel.app. The earlier z2f-live hostname still serves the same guide.",
    limits:
      "Vendor, product, pricing, legal, and frontier claims are dated snapshots to recheck. Two of the 237 linked resources sit behind a Medium member paywall and are labelled in the library.",
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
    limits:
      "An educational tool with four modules. Progress stays in the browser. Not legal advice and not CLE. It does not determine what law applies, certify that a source is current, or create an attorney-client relationship.",
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
    status: "Live · free relationship-building lab for law students",
    statusKind: "live",
    problem:
      "Law students are told to network and given no way to plan targets, write a specific message, and keep a follow-up record.",
    does:
      "A free, no-account lab for law students: map targets, draft outreach, and track follow-up in the browser. The page shows RN's self-reported outreach record and labels those figures as one person's record.",
    builtOn: "A static site served from Vercel. The lab keeps its records in the browser.",
    limits:
      "The lab states that it does not guarantee replies, interviews, employment, or platform access. It does not automate LinkedIn or transmit the target list.",
    caseStudy: "set-for-life",
  },
  {
    repo: "keiki-robotics-oahu-ai",
    title: "Getting Your Keiki Into Competitive Robotics",
    category: "education",
    status: "Live · family guide for Hawaiʻi Tech Week 2026",
    statusKind: "live",
    problem:
      "Competitive robotics has real on-ramps in Hawaiʻi, and no plain guide to them. The practical consequence is that the families who find their way in are disproportionately the ones who already knew someone inside, which turns a programme meant to widen access into one that quietly narrows it. The missing artefact is small: a page answering the questions a parent actually has, in the order they have them.",
    does:
      "A one-page guide for families: what competitive robotics is, how to start, what it can cost, and where to look on Oʻahu, with local examples. The header says it was made with Oʻahu A.I. for the Hawaiʻi Tech Week 2026 showcase.",
    builtOn: "A static single-page site with an installable web manifest, served from Vercel.",
    limits:
      "The page states that the organisations it describes did not produce or endorse the handout. Programs and costs change, so the page tells families to confirm current details with a local team or coach.",
    caseStudy: "keiki-robotics",
  },
  {
    repo: "patent-first-steps",
    title: "So You Have an Invention: First Steps",
    category: "education",
    status: "Live · made for Hawaiʻi Tech Week 2026",
    statusKind: "live",
    problem:
      "Young inventors are told to protect the idea and left to work out what that means from sources written for people who already have counsel. The costly mistakes happen early and quietly — usually a disclosure made before anyone explained what disclosure does — and by the time someone can afford advice, the option they needed has often already closed.",
    does:
      "Explains what a patent actually is, sets out four gates an idea has to clear to be patentable, walks the first steps, and shows how to run a free search without paying anyone. It spends a section killing the myths that cost inventors the most — chiefly about disclosure — and points at free Hawaiʻi help, including a number to call.",
    builtOn: "A static single-page site with an installable web manifest, served from Vercel.",
    limits: "General information. Not legal advice and not an attorney-client relationship.",
    caseStudy: "patent-first-steps",
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
      "Institutions that need a degree programme in a fast-moving field face a build-or-wait choice, and building one from nothing is a multi-year commitment they usually cannot make in time. The page licenses curriculum to those institutions. It does not enroll a student or confer the degree.",
    does:
      "Offers two delivery-ready programmes — a B.S. in AI and Machine Learning and a B.S. in Cybersecurity and Critical Infrastructure Protection — for institutional licensing, alongside a commissioned-development path. The link opens that licensing site.",
    limits:
      "It licenses curriculum to colleges, universities, corporations, government agencies, workforce organizations, and training providers. Their faculty teach it. It does not enroll a student, confer a degree, or replace that faculty. Someone who wants to learn AI directly is sent to Aloha AI, a separate practice.",
    builtOn:
      "Static pages generated by a small Node build script from a shared head, navigation and footer, on the shared estate design system, served from Vercel.",
  },
  {
    repo: "aloha-build-club",
    title: "Aloha Build Club",
    category: "education",
    status: "Live landing page · founding cohort of 25 offered",
    statusKind: "live",
    problem:
      "People building with AI alone often stop because no one is expecting them at a set hour.",
    does:
      "A landing page for a daily body-doubling room. It offers 25 founding seats and describes paid plans, with payment handled by a checkout provider.",
    limits:
      "The page describes the room and the founding cohort now forming. It does not publish a calendar of sessions already held or a list of work shipped.",
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
      "Maintained by a student leader for the FlexJD community. Not an official Northeastern University or NUSL publication, not legal or financial advice, and not a substitute for the original source. The opportunity tracker shows 329 source-linked records from a 22 July 2026 editorial pass.",
    caseStudy: "flexjd-resource-hub",
  },
  {
    repo: "clerking-site",
    title: "Clerking",
    category: "legal",
    status: "Public prototype · marketplace, matching, and payment inactive",
    statusKind: "prelaunch",
    problem:
      "Supervised legal work is learned by doing it under someone who has done it, and the structures that make that transferable — reusable work formats, review points, what supervision actually checks — are rarely written down anywhere a student can see them.",
    does:
      "A public prototype with three free workflow frameworks on the page, for attorneys and law students to inspect work structures and the judgment boundaries around them.",
    builtOn: "A Node-tested static site on Vercel.",
    limits:
      "Prelaunch. It does not enroll, charge, match, vet, or place anyone. The marketplace, paid templates, and job board are not active.",
  },

  // ------------------------------------------------------------------ records
  {
    repo: "rn-agent-os",
    title: "Agent OS",
    category: "tools",
    status: "Live · one endpoint hosted, the rest self-hosted",
    statusKind: "live",
    linkHeld:
      "The hosted address answers a single data endpoint rather than a page, so it is not offered as a link. The full source, tests and design are open in the repository.",
    problem:
      "Brand management runs on judgement calls that nobody records: whether a post was disclosed, whether a claim is defensible, and who signed off. The evidence for those decisions usually exists only in somebody's inbox.",
    does:
      "Coordinates agents that read public or permissioned content, grade the evidence behind each claim, and surface disclosure and claims risk for human review, with a sign-off gate before anything is treated as settled. The Disclosure and Claims agent is hosted and answers directly: given a post, it returns whether it reads as paid, whether disclosure is present, and each claim it found with a category and a risk level.",
    builtOn:
      "A nine-table evidence model on Postgres with pgvector, an orchestrator that routes to a hosted model, a local one, or a deterministic fallback so it never hard-fails offline, and five agents. Seven containers in total, of which one — the part needing no database, no key and no local model — is deployed publicly.",
    limits:
      "Public and permissioned data only, and not legal advice: it surfaces risk for a person and their counsel to read. The hosted endpoint is not a hosted engine — evidence storage, retrieval, the local model, workflows and dashboards all still require the self-hosted stack.",
  },
  {
    repo: "future-professional-profiles",
    title: "Future Professional Profiles",
    category: "practice",
    status: "Live · concept line",
    statusKind: "prototype",
    problem:
      "A professional profile is normally written by its subject, which makes it a statement of intent rather than a piece of evidence, and leaves no way to tell a researched position from a self-description.",
    does:
      "Builds profiles from researched material instead: each sets out a position, the evidence behind it, and a publishing approach that follows from both.",
    builtOn:
      "A research directory holding the source material each profile is built from, kept separate from the published versions so the two never blur.",
    limits:
      "These are concept profiles. Nothing here was commissioned or agreed with a subject, and no profile represents anyone's actual plans.",
  },
  {
    repo: "rn-ask-a-neuroscientist",
    title: "Ask a Neuroscientist",
    category: "education",
    status: "Live · Fat Nugs companion archive",
    statusKind: "live",
    problem:
      "A short post can carry a claim and leave out the mechanism, the sources, and what the evidence does not settle.",
    does:
      "A companion site for Ask a Neuroscientist. The public archive is the Fat Nugs series: each page carries what the piece found, its sources, and a link to the original. More pages are added as pieces are posted. Readers can send a question.",
    builtOn: "A static site on Vercel.",
    limits:
      "Education, not medical advice. The site says so, and it posts emergency and poison-help numbers. Each page says what its evidence does not settle.",
  },
  {
    repo: "ask-a-neuroscientist-fashion",
    title: "The Dressed Nervous System",
    category: "atlases",
    status: "Live · seven rooms, fifty sourced findings",
    statusKind: "live",
    problem:
      "Clothing and the nervous system is a subject that rewards a confident sentence and punishes a careful one. The striking findings — that a garment measurably changes how you think — are the ones that travelled furthest and replicated worst, and popular writing repeats them in the same voice it uses for the settled material.",
    does:
      "Seven rooms, one question each: pressure, texture, memory, rhythm, role, and social signal. Fifty sourced findings name what researchers measured, what they found, and where interpretation begins.",
    builtOn:
      "Twenty-two traceable Open Access objects from public collections, embedded under their own terms with canonical records and download links. No AI imagery anywhere in the exhibition.",
    limits:
      "A claim record states what a study measured, not what it proved. Several rooms rest on narrow experiments that have not replicated, and the rooms say so rather than dropping them.",
  },
  {
    repo: "institutions-of-one-fashion",
    title: "Institutions of One × Fashion",
    category: "records",
    status: "Live · 44 dossiers across four rooms",
    statusKind: "live",
    problem:
      "Fashion is where singular authority is most visible and least examined: the house carries one name, and the question of what actually makes that authority transferable, ownable and survivable is answered with biography instead of structure.",
    does:
      "Four rooms — Build, Carry, Control, Continue — holding 44 evidence-mapped dossiers. The rooms ask what makes the work recognisable, how it travels, who controls the name and the rights, and what survives absence, sale, succession, or death.",
    builtOn:
      "The Institutions of One research programme, applied to a field that makes its subject unusually observable. Not biography and not brand study — the subject is institutional engineering.",
    limits:
      "An exhibition, not a survey. The dossiers are selected because they make a structural question legible, not because they are representative of the industry.",
  },
  {
    repo: "tech-from-here-mjbizcon",
    title: "Tech From Here: MJBizCon",
    category: "records",
    status: "Public page live · no pieces released",
    statusKind: "paused",
    problem:
      "Cannabis coverage reports the politics and the money. The machinery that actually governs the plant — the tag on every plant, the laboratory test, the state tracking interface, the rules written around them — is where the decisions get made, and it is barely described.",
    does:
      "The public page is a release gate for an investigation of the tags, tests, interfaces, and records that govern Nevada cannabis. No pieces have been released. Pieces appear on the day they are published.",
    builtOn:
      "Public records and published sources, kept in a repository that separates research from anything approved for release.",
    limits:
      "Nothing on the public page has been published. A draft in the research files is not editorial approval, rights clearance, or a finished piece.",
  },
  {
    repo: "color-vision-field-guide",
    title: "Color Vision Field Guide",
    category: "education",
    status: "Live · sourced guide, written September 2026",
    statusKind: "live",
    problem:
      "A child who cannot read a colour cue is often told he is not paying attention. The answer is usually ordinary and inherited, but the material families meet first is either a clinical page written for practitioners or an online test that cannot test anything.",
    does:
      "Starts with one family's eye appointment and works outward: what the plates do and do not show, how the common red–green differences are inherited, how prevalence estimates differ between populations, and what changes at school and at home once a child's colour vision is known.",
    builtOn:
      "A static guide built on cited sources, with public-domain historic plates shown as teaching images and each estimate attributed to the body that published it.",
    limits:
      "Not a test and not a diagnosis. Screens change what anyone sees, population estimates do not describe an individual, and the family's own genotype is not established.",
  },
  {
    repo: "tech-from-here-fashion-week",
    title: "Tech From Here: Fashion Week",
    category: "records",
    status: "Public page live · no pieces released",
    statusKind: "live",
    problem:
      "Fashion Week coverage describes the spectacle and leaves the technical city underneath it undocumented.",
    does:
      "A release page for readers following the technology behind fashion week. No pieces have been released. Each piece appears on its release day.",
    builtOn: "A static release page on Vercel.",
    limits: "Nothing on the public page has been published. It is not a city guide and not a schedule.",
  },
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
    repo: "institutions-of-one-reader",
    title: "Institutions of One — Public Reader",
    category: "records",
    status: "Live · nine editions",
    statusKind: "live",
    problem:
      "A research programme that publishes for a public audience and runs a private review process at the same time has to keep the two apart in a way that survives a build, not just a policy.",
    does:
      "Publishes editions 005 through 009, including The $2,000 Video, The Person Inside the Asset, and The Asset's Afterlife, with visual stories and a public Source Desk. Editions 001 through 004 are read on the main Institutions of One site.",
    builtOn: "A reader application on Vercel.",
    limits: "Educational information, not legal advice.",
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
      "The public research site for what people build, carry, control, and continue. It includes an Observatory of 41 public careers, the editions, and two five-minute pilot assessments: the Ownership Index and the Portfolio Professional assessment.",
    builtOn: "A research platform with evidence-governed measurement instruments and longitudinal infrastructure, served from Vercel.",
    limits:
      "The current pilots are not validated psychological scales. They do not diagnose, rank, or measure human worth. The candidate-instrument protocol is a draft waiting on cognitive interviews, and its default activation decision is blocked.",
    caseStudy: "ownership-platform",
  },

  {
    repo: "tech-from-here-netherlands-field-kit",
    title: "Tech From Here: Dutch Design Week gallery",
    category: "records",
    status: "Live · gallery open, no packages released",
    statusKind: "live",
    problem:
      "A field trip produces essays, research, and pictures on different clocks, and a download package is a later decision than the page a reader can already open.",
    does:
      "Opens the Dutch Design Week gallery. The entrance is public. A story appears there when it is released, with image descriptions, credits, and sources. The essay collection and the research collection stay behind the owner sign-in, and nothing is offered as a download from this card.",
    builtOn: "A Next.js gallery on Vercel. The owner workspace is a separate sign-in.",
    limits:
      "No content package is released. The gallery currently shows the entrance and the visiting notes. It is not the private field desk.",
  },
  {
    repo: "htw-field-kit",
    title: "Hawaii Tech Week 2026 Field Kit",
    category: "records",
    status: "Live · event coverage and content-system sample",
    statusKind: "live",
    problem:
      "A week of an event produces far more frames and footage than anyone can post, and most of it is never chosen, checked, or connected to what it shows. The usual outcome is a few lucky highlights or a folder nobody can search.",
    does:
      "One week of Hawaii Tech Week 2026, 31 August to 4 September, on a single page: 180 photos and 30 video clips, sorted by day and venue, with clips that include sound. Each day also shows one post in a plain template and in a concept look drawn from that venue.",
    builtOn:
      "One static HTML page with its photos and video. No build step, no tracking, no account. Hosted on Vercel.",
    limits:
      "Concept looks, not an official Hawaii Tech Week, venue, or sponsor page. The page displays 1,273 stills logged and 247 videos logged. The logging system behind those totals is private. The page is set to be skipped by search engines because it shows attendees.",
    caseStudy: "hawaii-tech-week-field-kit",
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
      "The practice site, plus fifteen browser-local releases: four standalone builders and eleven Decision Desk instruments inside courses. The four builders are Opportunity Studio (23 prompts, answers stay in the browser), a decision record, a vendor comparison, and a pilot designer. Aloha AI does not receive what you enter.",
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
    status: "Live · the fifteen modules are published here",
    statusKind: "live",
    problem:
      "Governance advice about human-facing systems is usually written as policy and handed over, with no account of how it becomes a decision anyone has to make on a Tuesday.",
    does:
      "Publishes fifteen module scopes and their overview PDFs at https://nsag-site.vercel.app, from /m1 through /m15. The operations matrix, verified 17 August 2026, marks assessment collection paused on all fifteen. The public pages do not collect answers, calculate findings, or send automated reports. The old standalone hostnames remain as retired signposts.",
    builtOn: "A static site on Vercel. The earlier standalone deployments stay online as signposts rather than being deleted.",
    limits:
      "One card for the maintained site. Module scopes are readable. Assessments are paused. Human advisory delivery is separate from the public pages. Several other parts of NSAG are switched off, and the site says which.",
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
      "A dashboard of 27 legal and regulatory signals for an international expansion across the United States, United Kingdom, Germany, and Poland. Each signal is scored on business impact, legal complexity, and urgency. Fifteen are marked critical, five high, and 18 require attorney confirmation.",
    builtOn: "A Next.js application on Vercel over owned Supabase infrastructure.",
    limits:
      "Not legal advice. Items marked for outside counsel need an attorney before anyone acts on them. Built independently from public information. It was not commissioned or reviewed by the company named on the page.",
    caseStudy: "burgermeister-expansion-intel",
  },
  {
    repo: "rn-bring-the-question",
    title: "Bring Me the Question",
    category: "practice",
    status: "Live · practice front door",
    statusKind: "live",
    problem:
      "Most engagements start from a solution someone has already chosen, which means the actual question never gets examined. This page is the front door for founders, creators, portfolio professionals, and organizations who have the situation and not the brief.",
    does:
      "A one-page practice front door for founders, creators, portfolio professionals, and organizations. It asks for the question before the brief. The link opens that page, where a first note can go by email or LinkedIn.",
    limits:
      "The first conversation is complimentary and nonconfidential. It does not start a paid engagement, and the written First Read is not free implementation. A scoped engagement is a separate decision afterward.",
    builtOn: "A Next.js application on Vercel.",
  },
  {
    repo: "rn-portfolio",
    title: "RN Builds",
    category: "practice",
    status: "Live · public build exhibition",
    statusKind: "live",
    problem:
      "The questions behind a build disappear once the build is finished. RN Builds is a separate exhibition from this site.",
    does:
      "A separate public exhibition for a visitor who wants to use a build or see why it exists, without already knowing the field. Each numbered build opens on its release day, with a working thing and a visual story. The page describes a project of building 100 and labels released work, lab builds, and incomplete layers separately. The link leaves this site for that exhibition.",
    builtOn: "A Next.js application on Vercel.",
    limits:
      "The figure of 100 is the project's aim, not a count of finished work. A working interface there is not legal, medical, scientific, or operational authority.",
  },
  {
    repo: "sovereign-stack",
    institutional: true,
    title: "Authority Layer",
    category: "practice",
    status: "Proposal · independently initiated, not adopted",
    statusKind: "proposal",
    problem:
      "A technical stack can be local, open and place-based and still leave the questions of authority, knowledge boundaries, accountability, withdrawal and refusal with nowhere to live.",
    does:
      "An interactive proposal for keeping one permitted use tied to the decision that authorized it when the purpose, data, model, vendor, audience, or operators change. Purple Maiʻa has publicly described the technical Sovereign Stack. This page is Authority Layer.",
    builtOn: "A prototype application on Vercel.",
    limits:
      "An independent proposal. The page states it was not commissioned or endorsed by Purple Maiʻa. Printed material is for review and does not create authority.",
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

/**
 * The fifteen NSAG modules are not index cards.
 *
 * Each was first published as its own deployment. Those standalone deployments were
 * retired on 15 August 2026 and the hostnames stay online as signposts. The modules
 * are current at https://nsag-site.vercel.app/m1 through /m15, and the public index
 * resolves the subject to nsag-site.
 */

export const buildNotesByRepo = new Map(buildNotes.map((note) => [note.repo, note]));
