import { monitorKind, monitorStatus } from "./freshness";
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
    title: "Trackers for new laws and rules",
    blurb:
      "Trackers that check a fixed list of official sources on a schedule. Each one keeps confirmed sources apart from unchecked finds, and says when its last check is overdue.",
  },
  {
    id: "atlases",
    title: "Research atlases and libraries",
    blurb:
      "Reference collections on one field. Each entry says where it came from and what it doesn’t prove.",
  },
  {
    id: "tools",
    title: "Tools for working through one decision",
    blurb:
      "Tools that run in your browser and help with one decision. Nothing is sent anywhere, no account is needed, and each says what it can’t decide for you.",
  },
  {
    id: "education",
    title: "Education and public guides",
    blurb:
      "Courses and guides, each written for one audience, with sources you can check yourself.",
  },
  {
    id: "legal",
    title: "Legal information",
    blurb:
      "For people dealing with the law or starting a legal career. Each one says plainly that it isn’t run by the school or agency it covers.",
  },
  {
    id: "records",
    title: "Field reporting",
    blurb:
      "Reporting from events, with the evidence, edits and image rights kept with each story.",
  },
  {
    id: "practice",
    title: "Sites for my practices",
    blurb: "The main sites for the practices this work comes out of.",
  },
];

export const buildNotes: BuildNote[] = [
  // ---------------------------------------------------------------- monitoring
  {
    repo: "legal-risk-monitor",
    title: "Founder Legal Radar",
    category: "monitoring",
    status: "Live · list checked August 19, 2026",
    statusKind: "live",
    problem:
      "Startups don’t have a legal department, and the legal risks that matter early are spread across agencies that each publish on their own. The usual fix is a long checklist nobody owns.",
    does:
      "A selected list of US startup legal risks, each linked to its official source. You can mark each one unreviewed, watching, ask counsel or closed, filter by company type and product, save, and export as JSON.",
    builtOn:
      "A static workspace with all review state held in the browser. No account, no tracking, and nothing about which records you read leaves the machine.",
    limits:
      "A selected list, not a complete one, for spotting issues. Not legal advice, and it creates no attorney-client relationship.",
  },
  {
    repo: "aloha-dea-tracker",
    title: "DEA Scheduling Monitor",
    category: "monitoring",
    status: "Live · reads the Federal Register directly",
    statusKind: "live",
    problem:
      "DEA scheduling changes reach the Federal Register mixed in with routine notices. The ones that matter (final rules, proposed rules, temporary orders and quotas) are hard to pick out by hand.",
    does:
      "Pulls DEA documents from the Federal Register for the last 180 days and sorts them into key actions, final rules, proposals open for comment, and quotas and temporary orders. Routine notices stay available, and every view counts the same set of documents.",
    builtOn:
      "Scheduled collection against federalregister.gov, the primary source, with a source-health panel that reports the refresh cadence so a stale feed shows as stale.",
    limits:
      "It finds documents automatically. It isn’t legal advice or a full regulatory review. A row only says a document exists and what type it is.",
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
    status: monitorStatus("Live · weekly automated collection", "2026-11-09"),
    statusKind: monitorKind("2026-11-09"),
    problem:
      "AI rules come from five places at once: Congress, the FTC, state bars, the ABA and the EU AI Act. No single feed covers all five.",
    does:
      "Every Monday it searches those five sources, sorts what it finds and publishes a dashboard and a JSON feed. The feed reports its own health: last check, failed searches, newest item, and a stale flag after two missed weeks. If it’s stale, it says so.",
    builtOn:
      "Vercel serverless functions with an Upstash Redis store for the collected corpus and sweep telemetry. No account, no database of readers.",
    limits:
      "A collector of unreviewed search results, including secondary reporting. Not legal advice. Open the primary source before relying on a row.",
  },
  {
    repo: "aloha-legal-ai-monitor",
    title: "Legal AI Guidance Monitor",
    category: "monitoring",
    status: monitorStatus("Live · 8 sources confirmed August 17, 2026", "2026-11-09"),
    statusKind: monitorKind("2026-11-09"),
    problem:
      "When a court sanctions a lawyer for fake AI citations, the news travels much further than the order. Lawyers need the actual rulings and guidance, kept apart from commentary.",
    does:
      "Lists eight confirmed sources on lawyers’ use of generative AI: ABA Formal Opinion 512, four state and city bar opinions, two Middle District of Florida standing orders and a Ninth Circuit sanctions opinion. Each has its jurisdiction, type, check date and official link. A weekly search looks for new ones, which stay marked unconfirmed until a person reads them.",
    builtOn:
      "Vercel serverless functions over Upstash Redis, with the verified register held in source and the discovery layer kept strictly downstream of it.",
    limits:
      "New finds stay unconfirmed until a person reads them. Not legal advice.",
  },
  {
    repo: "psychops-intel",
    title: "Psych Ops Source Watch",
    category: "monitoring",
    status: monitorStatus("Live · 6 official sources", "2026-11-09"),
    statusKind: monitorKind("2026-11-09"),
    problem:
      "Psychedelic rules change on state program pages that publish on no fixed schedule. Most trackers mix official rule changes with press releases and advocacy.",
    does:
      "Checks six official sources every Monday, including Oregon Health Authority psilocybin services and Colorado natural medicine. Every new item has to pass a source check before it shows. The November 9, 2026 check kept 16 items and threw out 68 as noise.",
    builtOn:
      "Vercel serverless functions with an Upstash Redis store and an explicit source-policy module that every candidate must clear before display.",
    limits:
      "Kept items haven’t been reviewed by a person. A source being on the list means it’s watched, not that it published something new. Not legal advice.",
    caseStudy: "psychedelic-operations-intelligence",
  },
  {
    repo: "aloha-suppression-sweep",
    title: "Platform Moderation Evidence Lab",
    category: "monitoring",
    status: "Live · kept by hand · entries checked August 19, 2026",
    statusKind: "live",
    problem:
      "Debates about how platforms moderate drug talk mix different kinds of evidence. An Oversight Board decision, a regulator’s inquiry, a platform’s statement and an advocacy group’s claim get quoted as if they were the same kind of fact.",
    does:
      "Lists five public cases of how Meta moderated drug-policy posts. Each says what was claimed, what the source shows, where that evidence stops and when it was checked. One case records an Oversight Board reversal. Your review notes stay in your browser.",
    builtOn:
      "A static front end over a versioned JSON dashboard endpoint, with a build-time validation script and a test suite. No account, no analytics, no submission endpoint; browser-local state only.",
    limits:
      "It covers five documented public cases, not every moderation decision. Priority flags are your own notes, not findings.",
  },
  {
    repo: "aloha-culture-monitor",
    title: "Culture Intelligence Monitor",
    category: "monitoring",
    status: "Prototype · data out of date, last updated August 17, 2026",
    statusKind: "prototype",
    problem:
      "Brand teams treat a film or TV moment as a sign of demand before anyone asks how to test that, or what governance questions an AI-assisted read of culture raises.",
    does:
      "Tracks film, TV and cultural moments next to consumer style and spending signals, and gives each read an AI governance risk score, so the guess and how reliable it is stay together.",
    builtOn: "A Next.js pages-router application deployed on Vercel.",
    limits:
      "Exploratory. The signals are guesses about consumer behavior, not measured results, and the risk score frames the question; it isn’t a validated measure.",
  },
  {
    repo: "transform-observatory",
    title: "Drug Market Transition Evidence Lab",
    category: "monitoring",
    status: "Live · v2, August 2026",
    statusKind: "live",
    problem:
      "People argue about drug-policy changes from the one angle they care about (health, crime or revenue), and whatever nobody measured ends up treated as if it didn’t matter.",
    does:
      "Builds a sourced record of one drug-policy change across six areas, so a claim about one area can be read against what is and isn’t known about the others.",
    builtOn: "Next.js, hosted on Vercel.",
    limits:
      "It runs in your browser. It doesn’t monitor anything live or check outcomes on its own. \"Unknown\" is a valid answer for any area. The completion score shows how much is filled in, not how good the policy is.",
    caseStudy: "transform-drug-market-transition-observatory",
  },

  // ------------------------------------------------------------------ atlases
  {
    repo: "entheogen-atlas",
    title: "Entheogen Atlas",
    category: "atlases",
    status: "Live · complete and kept up to date",
    statusKind: "live",
    problem:
      "Popular psychedelic history leans on a few dramatic claims that have failed replication. The 60,000-year Shanidar Cave story is the clearest case: its pollen is now attributed to burrowing rodents, and the site holds no entheogen at all.",
    does:
      "Combines archaeology, neuroscience, legal history, phenomenology and religious use in one atlas, anchored on the oldest chemically confirmed psychedelic use: peyote from Shumla Cave, radiocarbon dated to 3780–3660 cal BC and shown by GC-MS to contain mescaline. Older claims appear where they’re serious, ranked on a clear evidence ladder.",
    builtOn:
      "A static single-page atlas with a committed evidence register and a small governance endpoint. No build step; served from Vercel.",
    limits:
      "A research reference. Not medical or legal advice, and not a current-law service: laws and court cases move faster than the archive.",
    caseStudy: "entheogen-atlas",
  },
  {
    repo: "fadiman-atlas",
    title: "The Fadiman Knowledge Atlas",
    category: "atlases",
    status: "Live · 132 entries, 1968 to 2026",
    statusKind: "live",
    problem:
      "Fifty-eight years of James Fadiman's recorded public output, from a 1968 KQED documentary through April 2026, is scattered across platforms that come and go.",
    does:
      "Publishes a proposed knowledge infrastructure as a catalogue of 132 entries from 1968 to 2026. A scope audit dated 24 October 2026 marks 63 entries historical, dead, or without a URL. The page includes local search, an annotation demonstration, and an archive explorer.",
    builtOn: "A single static HTML document served from Vercel. No build step, no dependencies, no account.",
    limits: "A catalog of the works, not copies of them, and not an authorized archive.",
  },
  {
    repo: "psychonaut-bookworm",
    title: "The Psychonaut Bookworm",
    category: "atlases",
    status: "Live · 460 items published from a list of 1,664",
    statusKind: "live",
    problem:
      "A reading list in a contested field makes claims about what’s worth reading, usually without showing where anything came from or whether anyone checked the rights.",
    does:
      "Publishes 460 items on 11 books, drawn from a list of 1,664 sources, each showing where it came from. You can save a reading queue in your browser. Five item types are held back until excerpt rights are cleared.",
    builtOn:
      "A static site with a committed provenance directory and a governance page, served from Vercel.",
    limits:
      "Education, not medical advice. Only reviewed items are published. The public list counts the withheld items without showing them.",
    caseStudy: "psychonaut-bookworm",
  },
  {
    repo: "law-communication-library",
    title: "The Psychedelic Law Library",
    category: "atlases",
    status: "Live · 143 articles",
    statusKind: "live",
    problem:
      "Oregon and Colorado wrote new psychedelic laws and rules, and facilitators, applicants and small operators are reading them with no plain-English guide that still cites the law.",
    does:
      "143 plain-English articles on Oregon and Colorado law, facilitator requirements and psychedelic business questions. Each lists its sources, and a sources index covers the whole library.",
    builtOn: "An Astro-built static site with prebuilt output committed to the repository, served from Vercel.",
    limits: "Explains published law in plain English. Not legal advice, and no substitute for the statute or rule itself.",
    caseStudy: "psychedelic-law-library",
  },
  {
    repo: "destig-toolkit",
    title: "Destigmatization Toolkit",
    category: "atlases",
    status: "Live · 222 sources, with a public check file",
    statusKind: "live",
    problem:
      "Clinicians, employers, families, journalists, policymakers and patients need the same pharmacology and law, framed for different decisions. One general explainer serves none of them.",
    does:
      "Covers pharmacology, law and policy for psychoactive plant medicine in six paths, one per audience, with 222 sources. A check file ships with the site, so anyone can re-check the citations.",
    builtOn: "A static site with a committed verification manifest, served from Vercel.",
    limits:
      "Education and issue-spotting for adults. Not legal or medical advice, diagnosis or treatment guidance. Checked August 29, 2026: 29 sections and 222 numbered sources.",
    caseStudy: "destigmatization-toolkit",
  },
  {
    repo: "psych-ops-directory",
    title: "Psychedelic Operations Directory",
    category: "atlases",
    status: "Live · 175 listings, links checked 29 August 2026, records reviewed 20 August 2026",
    statusKind: "live",
    problem:
      "In a new regulated field, people read a directory as an endorsement. They assume whoever made it checked licenses, quality and finances. Almost nobody has.",
    does:
      "Lists 175 organizations in 23 categories, from a survey of 177 names after removing duplicates. Each card shows a category, a short description, link status and review date. Pricing, credentials, rankings and marketing claims are left out because the survey found no public source for them. Links checked August 29, 2026; entries reviewed August 20, 2026. Fifteen have no link: 13 domains didn’t load, one certificate had expired and one never had a site.",
    builtOn:
      "A static front end over a serverless listings endpoint with a static fallback, plus a contract test suite. Methodology and corrections pages ship with it.",
    limits:
      "Being listed isn’t an endorsement or a check of licenses, quality, safety, finances or legal compliance.",
    caseStudy: "psych-ops-directory",
  },
  {
    repo: "aloha-encoding-effect",
    title: "The Encoding Effect",
    category: "atlases",
    status: "Prototype · interactive research note",
    statusKind: "prototype",
    problem:
      "Claims that screens change how people see themselves get either dismissed or hyped. The evidence is rarely laid out so a reader can see how far it goes.",
    does:
      "Lays out a sourced hypothesis about how on-screen worlds can come to feel personal, as an interactive research note with an evidence log and its limits stated up front.",
    builtOn: "Next.js (pages router), hosted on Vercel.",
    limits:
      "A proposed interpretation with an evidence log. It reports no original study and doesn’t diagnose audiences, predict purchases or show cause and effect.",
  },

  // -------------------------------------------------------------------- tools
  {
    repo: "ai-budget-calc",
    title: "AI Build Cost Workbench",
    category: "tools",
    status: "Live · v2, August 2026",
    statusKind: "live",
    problem:
      "Custom AI projects get quoted as one number, even though discovery, research, design, building, testing, documentation, launch and upkeep are different kinds and amounts of work. That hides costs from the buyer and the builder alike.",
    does:
      "Walks you through seven steps: brief, labor, runtime, other costs, risk, results and compare. Labor lines and rates are your own assumptions, and you can edit them. It returns a build cost range, a monthly running cost and a first-year range. Scenarios save in your browser, and you can share them by link, print them or export them.",
    builtOn: "A static browser application with local persistence and URL-encoded scenario sharing, served from Vercel.",
    limits:
      "The results are your own planning scenarios. They aren’t quotes or checked market prices.",
    caseStudy: "ai-build-budget-calculator",
  },
  {
    repo: "provenance-verify",
    title: "Source Integrity Workbench",
    category: "tools",
    status: "Live · v2, August 2026",
    statusKind: "live",
    problem:
      "Documents now cite sources that don’t exist, sources that don’t say what’s claimed, and more confidence than the evidence supports. A spot check can’t show which claims were actually reviewed, and that’s what a reader needs to know.",
    does:
      "Turns claims and citations into a review log in five steps: brief, claims, sources, findings and decision. It tracks each claim’s type, importance, whether its source can be found, what the source supports or contradicts, how current it is and who reviewed it, instead of assuming a citation means the claim is right. Exports to Markdown, CSV, JSON or print.",
    builtOn: "A web app that saves your work in your browser, hosted on Vercel.",
    limits:
      "The score measures how well the review is documented, not whether claims are true or sources are real. Legal, clinical, scientific and regulatory calls still need a qualified reviewer.",
    caseStudy: "source-integrity-audit",
  },
  {
    repo: "opfos-firm",
    title: "One-Person-Firm OS",
    category: "tools",
    status: "Live · v2, August 2026",
    statusKind: "live",
    problem:
      "Freelancers collect scattered notes, task apps, client files, AI chats and automations. The tools aren’t the problem. Deciding what goes where, what happens next and how it all stays current is, and nobody else can do that part for them.",
    does:
      "A six-step planning tool for running an independent practice: a map of what’s working and what isn’t, editable lists of workflows and tools, rules for each AI assistant, a weekly review, a 30-day plan and five data templates. It includes an example, saves in your browser and exports to Markdown, JSON, CSV or print.",
    builtOn: "A web app that saves your work in your browser, hosted on Vercel.",
    limits: "A planning tool. It doesn’t certify anything or run your business for you.",
    caseStudy: "one-person-firm-os",
  },
  {
    repo: "gapi-governance",
    institutional: true,
    title: "GAPI Agent Governance Workbench",
    category: "tools",
    status: "Live · runs in your browser",
    statusKind: "live",
    problem:
      "An organization using an AI agent needs an inventory, a risk review and an evidence file before a regulator or customer asks for one.",
    does:
      "Walks through an AI inventory, risk review, controls, testing, incidents and human oversight, then exports an evidence pack. Everything stays in your browser.",
    builtOn: "A web app that saves your work in your browser, with privacy and terms pages, hosted on Vercel.",
    limits:
      "It doesn’t certify safety, compliance, legality or any standard. Scores help organize a review. They aren’t legal conclusions.",
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
      "Athlete welfare policies are written as principles, then have to hold up against real schedules, recovery, safeguarding and a young athlete’s ability to speak up. Harm happens in the gap between the policy and the week.",
    does:
      "Reviews a program’s scheduling, recovery, safeguarding, environment, athlete voice and escalation, then produces an action list with owners and a 90-day plan, including an independent way to raise and review concerns.",
    builtOn: "A web app that saves your work in your browser, with privacy and terms pages, hosted on Vercel.",
    limits:
      "It doesn’t diagnose, treat, clear anyone to play or set workloads. It doesn’t replace sports medicine, mental-health care, safeguarding review or a lawyer.",
    caseStudy: "sport-nsag",
  },
  {
    repo: "narch-advisory",
    institutional: true,
    title: "NARCH Spatial Evidence Workbench",
    category: "tools",
    status: "Paused · under review, link not public yet",
    statusKind: "paused",
    problem:
      "Claims that a building is calming are easy to make and rarely tested, and nothing in the design process asks what would show otherwise. This tool is for architects, designers, developers and the organizations that commission buildings.",
    does:
      "For architects, designers, developers and the organizations that commission buildings. It turns observations of a place into design hypotheses tied to the evidence, runs an accessibility review, ranks the changes, and sets up measurement after move-in so each hypothesis can be checked once people use the place.",
    builtOn: "A web app that saves your work in your browser, with privacy and terms pages, hosted on Vercel.",
    limits:
      "It doesn’t show medical benefit, legal or code compliance, accessibility compliance, or that a design is structurally sound.",
    linkHeld:
      "The public link stays off this site until this tool passes its release review. The tool is live and described above; it will be linked here once the review is done.",
    caseStudy: "narch",
  },
  {
    repo: "wnh-guide",
    institutional: true,
    title: "Women's Neuro-Health Evidence Navigator",
    category: "tools",
    status: "Paused · under review, link not public yet",
    statusKind: "paused",
    problem:
      "Brain-health questions that cross life stages, cannabis, psychedelics, medications and symptoms get one appointment’s worth of attention, and patients arrive without the questions that would make it useful.",
    does:
      "Helps you sort out what you’re asking, what’s known about it and what to raise with a clinician, then gives you a list of questions for the appointment. Everything stays in your browser.",
    builtOn: "A web app that saves your work in your browser, with privacy and terms pages, hosted on Vercel.",
    limits:
      "Helps you prepare for an appointment. Not medical advice, a diagnosis, treatment or emergency care.",
    linkHeld:
      "The public link stays off this site until this tool passes its release review. Health guidance gets linked here only after that review, even if the tool is already live.",
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
      "Families and schools get asked whether kids should use AI as if the tool, the task, the child’s age, the data practices and adult supervision were all one question. They aren’t, and a general answer doesn’t help with a specific decision.",
    does:
      "Evaluates one specific child-facing AI use in five steps: context, use, safeguards, decision and sources. Along the way it weighs the role the AI will play, the thinking it may replace, which adult stays involved, how much is at stake, and the data and safety protections. The decision logic is inspectable rather than hidden, and the output names the developmental capacities to protect, the questions to put to a vendor or school, and the signals to monitor.",
    builtOn:
      "A static browser application with local persistence and dated source links, served from Vercel. The decision model draws on the AAP 2026 state-of-the-art review, UNICEF child-centred AI guidance, UNESCO guidance for education, US Department of Education FERPA guidance, the FTC's amended COPPA Rule, and the NIST Generative AI Profile.",
    limits:
      "It doesn’t diagnose children, certify products, decide legal compliance or claim the long-term brain effects are known.",
    caseStudy: "ai-for-developing-brains",
  },
  {
    repo: "aloha-governance-audit",
    title: "Campaign Governance Issue-Spotter",
    category: "tools",
    status: "Live",
    statusKind: "live",
    problem:
      "Governance questions about an AI-assisted campaign tend to come up after launch, when the only answer left is an apology.",
    does:
      "A checklist for a cultural or AI-assisted campaign that runs in your browser. Each question links to its official source, and it says where the checklist stops.",
    builtOn: "A Next.js pages-router application on Vercel, with no submission endpoint.",
    limits:
      "It doesn’t monitor anything, decide compliance, score legal risk or give legal advice. Your entries stay in the browser tab.",
  },
  {
    repo: "aloha-creator-rights",
    institutional: true,
    title: "Creator Rights Issue Spotter",
    category: "tools",
    status: "Live",
    statusKind: "live",
    problem:
      "A creator using AI hits disclosure rules, likeness rights, music licensing, platform policy and jurisdiction all at once, usually without knowing which one will actually cause trouble.",
    does:
      "Asks seven questions and shows which issues your answers raise: creator rights, AI use, disclosure, likeness, music, jurisdiction and platform review.",
    builtOn: "Next.js (pages router), hosted on Vercel.",
    limits:
      "A prototype that runs in your browser, for spotting issues. Not legal advice, rights clearance, contract review or permission to publish. It doesn’t read your contracts.",
    caseStudy: "creator-rights-framework",
  },
  {
    repo: "aloha-third-asset",
    title: "The Third Asset",
    category: "tools",
    status: "Live",
    statusKind: "live",
    problem:
      "Creative teams adopt AI-generated media faster than they decide on provenance, disclosure and what to do when something goes wrong. Then those decisions get made in a crisis.",
    does:
      "A browser tool for planning synthetic-media, creator-rights, disclosure, provenance and incident decisions ahead of time, so the incident plan exists before the incident.",
    builtOn: "Next.js (pages router), hosted on Vercel.",
    limits: "A planning tool, not a legal review.",
  },
  {
    repo: "aloha-behavioral-intelligence",
    title: "Behavioral Intelligence Layer",
    category: "tools",
    status: "Prototype · exploratory issue-spotter",
    statusKind: "prototype",
    problem:
      "Attention data from screen culture gets turned into claims about consumer behavior, with no step where anyone writes down what would have to be true for that to hold.",
    does:
      "Takes one named cultural moment and sets a cautious consumer-behavior hypothesis next to samples of public attention, including Wikipedia pageviews.",
    builtOn: "Next.js (pages router), hosted on Vercel.",
    limits:
      "Exploratory. It doesn’t measure individuals, predict behavior or show that seeing something caused a purchase. The hypotheses are untested.",
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
    builtOn: "A web app that saves your work in your browser, hosted on Vercel.",
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
      "Advice about your surroundings and routine comes as one-size-fits-all rules, when the person is what varies most, and there’s rarely a way to find out whether a change helped you.",
    does:
      "A private log of where you were and how you felt. Entries stay in your browser. It compares settings only after at least four entries, and only for a setting seen at least twice.",
    builtOn: "A single-file, dependency-free browser application served as a static site from Vercel, with a research dossier held alongside it.",
    limits:
      "Not a diagnostic tool or medical advice. A comparison describes only the person keeping the log.",
    caseStudy: "nervous-system-studio",
  },

  // ---------------------------------------------------------------- education
  {
    repo: "zero-to-frontier",
    title: "Zero → Frontier",
    category: "education",
    status: "Live · 11 sections, 20 pages, 237 resources",
    statusKind: "live",
    problem:
      "Most AI literacy material is either product marketing or theory with nothing to check. What’s missing is a guide that names its sources and holds up when you follow them.",
    does:
      "A free guide in 11 sections and 20 pages, with a reading-path builder and 237 linked resources. The history timeline has 17 sourced turning points. No account needed; reading progress can be saved in your browser.",
    builtOn:
      "A static site on Vercel. The public address is https://zero-to-frontier.vercel.app. The earlier z2f-live hostname still serves the same guide.",
    limits:
      "Claims about vendors, products, prices, law and the frontier are dated snapshots, so check them again. Two of the 237 resources are behind Medium’s paywall and are labeled.",
    caseStudy: "zero-to-frontier",
  },
  {
    repo: "regac-academy",
    title: "REGAC Regulatory Academy",
    category: "education",
    status: "Live",
    statusKind: "live",
    problem:
      "People are expected to work with regulation without learning the basic skill: telling binding law from commentary, checking it still applies where and when they are, and knowing when to ask for help.",
    does:
      "An interactive lab, not a reading list, that teaches how to classify a legal source, track jurisdiction and dates, compare rules across places and record when to escalate.",
    builtOn: "A static site with its own academy stylesheet and script, plus privacy and terms pages, served from Vercel.",
    limits:
      "Four modules; progress stays in your browser. Not legal advice and not CLE credit. It doesn’t tell you which law applies or confirm a source is current.",
    caseStudy: "regac",
  },
  {
    repo: "myelin-ce",
    title: "Myelin Learning Lab",
    category: "education",
    status: "Live · free, non-credit",
    statusKind: "live",
    problem:
      "Most AI training teaches people to use a tool. Almost none teaches them to question its output before relying on it, and that’s the skill that fails first.",
    does:
      "Free non-credit courses on using AI responsibly: checking AI output, claims and citations, data before prompts, and human oversight that works. There’s also a library of field briefs, practice tools, and progress that picks up where you left off.",
    builtOn: "A static multi-page site with client-side course and tool scripts, served from Vercel.",
    limits: "No certificate, accreditation or continuing-education credit.",
  },
  {
    repo: "set-for-life",
    title: "Set for Life",
    category: "education",
    status: "Live · free networking lab for law students",
    statusKind: "live",
    problem:
      "Law students are told to network but given no way to pick people to contact, write a specific message and track follow-ups.",
    does:
      "A free lab for law students, no account needed: list people to contact, draft messages and track follow-ups in your browser. It shows my own outreach numbers, labeled as one person’s results.",
    builtOn: "A static site served from Vercel. The lab keeps its records in the browser.",
    limits:
      "It doesn’t promise replies, interviews or jobs. It doesn’t automate LinkedIn or send your list anywhere.",
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
      "Young inventors are told to protect their idea, then left with sources written for people who already have a lawyer. The costly mistakes happen early, usually by sharing the idea before anyone explained what that does. By the time they can afford advice, the option they needed may be gone.",
    does:
      "Explains what a patent is, the four tests an idea has to pass, the first steps, and how to search existing patents for free. One section clears up the myths that cost inventors most, mainly about disclosure. It lists free help in Hawaiʻi, including a phone number.",
    builtOn: "A static single-page site with an installable web manifest, served from Vercel.",
    limits: "General information. Not legal advice, and no attorney-client relationship.",
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
    status: "Prelaunch · checkout and sign-ups closed",
    statusKind: "prelaunch",
    problem:
      "Lawyers, doctors, executives and teachers are all sold the same generic AI literacy, when what differs is the professional duty the technology runs into.",
    does:
      "Outlines an upcoming AI-literacy program for those four professions and what each track would cover.",
    builtOn: "A Node-tested static site on Vercel.",
    limits:
      "Not open yet: nothing can be bought or signed up for.",
  },
  {
    repo: "curriculum-licensing",
    title: "RN Collins Curriculum & Learning Systems",
    category: "education",
    status: "Live · two programs available to license",
    statusKind: "live",
    problem:
      "Schools that need a degree program in a fast-moving field can build one, which takes years, or wait. This site licenses ready-made curriculum to them.",
    does:
      "Offers two ready-to-teach programs, a B.S. in AI and Machine Learning and a B.S. in Cybersecurity and Critical Infrastructure Protection, for license, plus custom development.",
    limits:
      "It licenses curriculum to colleges, universities, companies, government agencies, workforce groups and training providers, whose own faculty teach it. It doesn’t enroll students or grant degrees. People who want to learn AI themselves are pointed to Aloha AI.",
    builtOn:
      "Static pages generated by a small Node build script from a shared head, navigation and footer, on the shared estate design system, served from Vercel.",
  },
  {
    repo: "aloha-build-club",
    title: "Aloha Build Club",
    category: "education",
    status: "Live landing page · 25 founding spots offered",
    statusKind: "live",
    problem:
      "People building with AI alone often stop because no one is expecting them at a set hour.",
    does:
      "A landing page for a daily online body-doubling room. It offers 25 founding spots and describes paid plans; payment goes through a checkout service.",
    limits:
      "The room is still forming. The page doesn’t list past sessions or finished work.",
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
      "Part-time online law students piece together key information from school pages, emails, calendars, word of mouth and outside sources. A directory without update dates and corrections makes that worse, because it adds a source that looks official and isn’t.",
    does:
      "A phone-friendly hub with a newsletter, a general guide, a filterable opportunity tracker and seven awareness campaigns. Behind them: a published source-checking policy, a way for anyone to report mistakes, privacy rules, update dates, and automatic link and secret checks. One student with coursework has to be able to keep it current, so upkeep was planned before the content.",
    builtOn: "A static multi-page site with automated link checking and secret scanning in CI, served from Vercel.",
    limits:
      "Run by a student leader for the FlexJD community. Not an official Northeastern University or NUSL publication, not legal or financial advice, and no substitute for the original source. The tracker has 329 linked opportunities from a July 22, 2026 update.",
    caseStudy: "flexjd-resource-hub",
  },
  {
    repo: "clerking-site",
    title: "Clerking",
    category: "legal",
    status: "Prelaunch · public prototype; marketplace, matching and payments off",
    statusKind: "prelaunch",
    problem:
      "Supervised legal work is learned by doing it under someone experienced, and the parts that make it teachable (reusable formats, review points, what a supervisor actually checks) are rarely written down where students can see them.",
    does:
      "A public prototype with three free workflow templates, so attorneys and law students can see how the work is structured and where judgment comes in.",
    builtOn: "A Node-tested static site on Vercel.",
    limits:
      "Not launched. It doesn’t enroll, charge, match, vet or place anyone. The marketplace, paid templates and job board are off.",
  },

  // ------------------------------------------------------------------ records
  {
    repo: "rn-agent-os",
    title: "Agent OS",
    category: "tools",
    status: "Live · one part hosted, the rest runs on your own servers",
    statusKind: "live",
    linkHeld:
      "The hosted address answers a single data endpoint rather than a page, so it is not offered as a link. The full source, tests and design are open in the repository.",
    problem:
      "Brand management runs on calls nobody writes down: was a post disclosed, can a claim be defended, who signed off. The evidence usually lives in someone’s inbox.",
    does:
      "A set of AI agents that read public or permitted content, grade the evidence behind each claim, and flag disclosure and claim risks for a person to review, with a sign-off step before anything counts as settled. The Disclosure and Claims agent is hosted: give it a post and it says whether it reads as paid, whether there’s a disclosure, and each claim with a category and risk level.",
    builtOn:
      "Postgres with pgvector (nine tables), five agents, and a router that falls back from a hosted model to a local one to fixed rules, so it still works offline. Seven containers; only the one that needs no database, key or local model is public.",
    limits:
      "Public and permitted data only. Not legal advice: it flags risk for a person and their lawyer. The hosted part is one agent; storage, search, the local model, workflows and dashboards need the self-hosted setup.",
  },
  {
    repo: "future-professional-profiles",
    title: "Future Professional Profiles",
    category: "practice",
    status: "Live · concept line",
    statusKind: "prototype",
    problem:
      "A professional profile is usually written by its subject, so it states intentions rather than evidence, and you can’t tell research from self-description.",
    does:
      "Builds profiles from research instead: each sets out a position, the evidence for it and a publishing approach that follows from both.",
    builtOn:
      "A research directory holding the source material each profile is built from, kept separate from the published versions so the two never blur.",
    limits:
      "Concept profiles. None was commissioned or agreed with its subject, and none represents anyone’s real plans.",
  },
  {
    repo: "rn-ask-a-neuroscientist",
    title: "Ask a Neuroscientist",
    category: "education",
    status: "Live · companion to the Fat Nugs series",
    statusKind: "live",
    problem:
      "A short post can make a claim and leave out how it works, the sources and what the evidence doesn’t settle.",
    does:
      "A companion site for Ask a Neuroscientist. It holds the Fat Nugs series: each page has what the piece found, its sources and a link to the original. New pages are added as pieces post. Readers can send a question.",
    builtOn: "A static site on Vercel.",
    limits:
      "Education, not medical advice. The site lists emergency and poison-help numbers, and each page says what its evidence doesn’t settle.",
  },
  {
    repo: "ask-a-neuroscientist-fashion",
    title: "The Dressed Nervous System",
    category: "atlases",
    status: "Live · seven rooms of sourced findings",
    statusKind: "live",
    problem:
      "Claims that clothes change how you think spread fast, and the most famous ones replicated worst. Popular writing reports them in the same confident voice as the solid findings.",
    does:
      "Seven rooms, one question each: pressure, texture, memory, rhythm, role, and social signal. Fifty sourced findings name what researchers measured, what they found, and where interpretation begins.",
    builtOn:
      "22 Open Access objects from public collections, shown under their own licenses with links to the museum records. No AI images.",
    limits:
      "Each finding says what a study measured, not what it proved. Several rooms rest on small experiments that haven’t replicated, and the rooms say so.",
  },
  {
    repo: "institutions-of-one-fashion",
    title: "Institutions of One × Fashion",
    category: "records",
    status: "Live · 44 case files in four rooms",
    statusKind: "live",
    problem:
      "Fashion is where one person’s authority is most visible and least examined. The house carries one name, and what makes that authority transferable, ownable and lasting gets answered with biography, not structure.",
    does:
      "Four rooms (Build, Carry, Control, Continue) hold 44 sourced case files. They ask what makes the work recognizable, how it travels, who controls the name and rights, and what survives absence, sale, succession or death.",
    builtOn:
      "The Institutions of One research, applied to fashion, a field where its subject is unusually easy to see. It’s about how a fashion house is set up to last, not biography or brand.",
    limits:
      "An exhibition, not a survey. Each case was picked because it makes a structural question clear, not because it represents the industry.",
  },
  {
    repo: "tech-from-here-mjbizcon",
    title: "Tech From Here: MJBizCon",
    category: "records",
    status: "Paused · page is up, no pieces released yet",
    statusKind: "paused",
    problem:
      "Cannabis coverage reports the politics and the money. The machinery that actually governs the plant, from the tag on every plant to the lab test, the state tracking system and the rules around them, is where decisions get made, and it’s barely covered.",
    does:
      "A release page for an investigation of the tags, tests, tracking systems and records that govern Nevada cannabis. Nothing is out yet; each piece appears the day it’s published.",
    builtOn:
      "Public records and published sources, kept in a repository that separates research from anything approved for release.",
    limits:
      "Nothing has been published yet. A draft in the research files isn’t approved, cleared or finished.",
  },
  {
    repo: "color-vision-field-guide",
    title: "Color Vision Field Guide",
    category: "education",
    status: "Live · sourced guide, written September 2026",
    statusKind: "live",
    problem:
      "A child who can’t read a color cue is often told he isn’t paying attention. The cause is usually ordinary and inherited, but the first things families find are clinical pages for doctors or online tests that can’t test anything.",
    does:
      "Starts with one family’s eye appointment and works outward: what the plates show and don’t, how common red-green differences are inherited, why estimates differ between populations, and what changes at school and home once a child’s color vision is known.",
    builtOn:
      "Cited sources, with public-domain historic plates used as teaching images.",
    limits:
      "Not a test or a diagnosis. Screens change what anyone sees, population estimates don’t describe one person, and the family’s own genes weren’t tested.",
  },
  {
    repo: "tech-from-here-fashion-week",
    title: "Tech From Here: Fashion Week",
    category: "records",
    status: "Live · page is up, no pieces released yet",
    statusKind: "live",
    problem:
      "Fashion Week coverage describes the spectacle and skips the technology running the city underneath it.",
    does:
      "A release page for readers who want the technology behind fashion week. Nothing is out yet; each piece appears on its release day.",
    builtOn: "A static release page on Vercel.",
    limits: "Nothing has been published yet. It isn’t a city guide or a schedule.",
  },
  {
    repo: "tech-from-here-amsterdam-eindhoven",
    title: "Tech From Here: Amsterdam + Eindhoven",
    category: "records",
    status: "Live · 48 published investigations",
    statusKind: "live",
    problem:
      "Event coverage makes lots of claims and little that can be checked later, because the evidence stays in the reporter’s notes.",
    does:
      "Publishes a searchable, city-filterable atlas of 48 source-backed investigations from the Netherlands 2026 event work. Each package opens as a public investigation page carrying its evidence, its limitations, its visual and its source links.",
    builtOn:
      "The atlas is public, while media, image rights, source notes and review records stay private. Publishing a piece doesn’t turn an unresolved internal check into a confirmed fact.",
    limits:
      "Covers Amsterdam and Eindhoven only. Rights and production notes stay private.",
  },
  {
    repo: "institutions-of-one-reader",
    title: "Institutions of One — Public Reader",
    category: "records",
    status: "Live · editions 005 to 009 of nine",
    statusKind: "live",
    problem:
      "A research project that publishes for the public while running a private review has to keep the two apart in the code, not just in a policy.",
    does:
      "Publishes editions 005 through 009, including The $2,000 Video, The Person Inside the Asset and The Asset’s Afterlife, with visual stories and a public Source Desk. Editions 001 through 004 are on the main Institutions of One site.",
    builtOn: "A reader application on Vercel.",
    limits: "Education, not legal advice.",
  },
  {
    repo: "ownership-platform",
    title: "Institutions of One",
    category: "records",
    status: "Live · research project; quizzes not validated",
    statusKind: "live",
    problem:
      "Independent professionals get judged by stand-ins like employer, title, credential and network, while the work, skills and relationships that make up their practice go unseen.",
    does:
      "The public research site on what people build, carry, control and continue. It has profiles of 41 public careers, the editions and two five-minute pilot quizzes: the Ownership Index and the Portfolio Professional assessment.",
    builtOn: "A research platform with evidence-governed measurement instruments and longitudinal infrastructure, served from Vercel.",
    limits:
      "The pilot quizzes aren’t validated psychological scales, and they don’t diagnose, rank or measure anyone’s worth. A new version is still a draft waiting on cognitive interviews, and its launch is on hold.",
    caseStudy: "ownership-platform",
  },

  {
    repo: "tech-from-here-netherlands-field-kit",
    title: "Tech From Here: Dutch Design Week gallery",
    category: "records",
    status: "Live · gallery open · nothing released for download yet",
    statusKind: "live",
    problem:
      "A trip produces essays, research and photos on different timelines, and deciding what to offer as a download comes later than the page people can already visit.",
    does:
      "Opens the Dutch Design Week gallery. The entrance is public, and each story appears there when it’s released, with image descriptions, credits and sources. The essays and research stay private for now, and nothing here is offered as a download.",
    builtOn: "A Next.js gallery on Vercel. The owner workspace is a separate sign-in.",
    limits:
      "Nothing has been released for download. The gallery shows the entrance and visiting notes for now.",
  },
  {
    repo: "htw-field-kit",
    title: "Hawaii Tech Week 2026 Field Kit",
    category: "records",
    status: "Live · event coverage sample",
    statusKind: "live",
    problem:
      "A week-long event produces far more photos and video than anyone can post, and most of it is never chosen, checked or tied to what it shows. You end up with a few lucky highlights or a folder nobody can search.",
    does:
      "One week of Hawaii Tech Week 2026, 31 August to 4 September, on a single page: 180 photos and 30 video clips, sorted by day and venue, with clips that include sound. Each day also shows one post in a plain template and in a concept look drawn from that venue.",
    builtOn:
      "One static HTML page with its photos and video. No build step, no tracking, no account. Hosted on Vercel.",
    limits:
      "Concept designs, not an official Hawaii Tech Week, venue or sponsor page. It shows 1,273 photos and 247 videos logged; the logging tool is private. The page is hidden from search engines because it shows attendees.",
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
      "Organizations get pushed from a vague wish to use AI straight to picking a vendor. The skipped step: what exactly is the problem, what are the non-AI options, who’s affected, who owns it, and what would make a pilot stop.",
    does:
      "The main Aloha AI site, plus 15 tools that run in your browser: four standalone builders and 11 Decision Desk tools inside the courses. The four builders are Opportunity Studio (23 prompts), a decision record, a vendor comparison and a pilot designer. What you enter stays in your browser; Aloha AI never receives it.",
    builtOn:
      "A Next.js application on Vercel with a clinic inquiry form that fails closed unless its mail and anti-abuse environment variables are configured. Decision tools keep working data in the visitor's browser.",
    limits:
      "It demonstrates the tools, not finished client work. Opportunity Studio says on its page that it’s a prototype. Nothing here is professional advice, a compliance certificate or approval to deploy.",
    caseStudy: "aloha-ai",
  },
  {
    repo: "nsag-site",
    title: "Neurocognitive Systems Advisory Group",
    category: "practice",
    status: "Live · all 15 modules are on this site",
    statusKind: "live",
    problem:
      "Advice on how organizations should treat people is usually written as policy and handed over, with no plan for how it becomes a decision someone has to make on a Tuesday.",
    does:
      "Publishes fifteen module scopes and their overview PDFs at https://nsag-site.vercel.app, from /m1 through /m15. The operations matrix, verified 17 August 2026, marks assessment collection paused on all fifteen. The public pages do not collect answers, calculate findings, or send automated reports. The old standalone hostnames remain as retired signposts.",
    builtOn: "A static site on Vercel. The earlier standalone deployments stay online as signposts rather than being deleted.",
    limits:
      "Module descriptions are readable, but the assessments are paused. Advisory work is separate from the public site. Several parts of NSAG are switched off, and the site says which.",
  },
  {
    repo: "creator-brand-evidence",
    title: "Evidence·Studio",
    category: "practice",
    status: "Live · sources current as of August 2026",
    statusKind: "live",
    problem:
      "Brand and creator strategy in regulated markets (cannabis, wellness, health, law, education, AI) runs on gut feel, then runs into disclosure rules written for exactly that.",
    does:
      "A method for brand, creator and affiliate strategy in markets where trust matters, with a confidence level on every recommendation and disclosure rules built in, instead of a blanket claim of compliance.",
    builtOn: "A static multi-page site on Vercel, with the method and regulatory references dated on the page.",
    limits: "A marketing method based on FTC endorsement guidance. Not legal advice or a compliance opinion.",
    caseStudy: "evidence-studio",
  },
  {
    repo: "bm-intel",
    title: "Burgermeister Expansion Intel",
    category: "practice",
    status: "Live · working dashboard",
    statusKind: "live",
    problem:
      "A company expanding into several countries builds up legal and regulatory risk faster than anyone can brief it, and items that need a lawyer get mixed in with items that don’t.",
    does:
      "A dashboard of 27 legal and regulatory signals for an expansion across the US, UK, Germany and Poland, each scored for business impact, legal complexity and urgency. Fifteen are marked critical, five high, and 18 need a lawyer to confirm.",
    builtOn: "A Next.js application on Vercel over owned Supabase infrastructure.",
    limits:
      "Not legal advice; flagged items need a lawyer before anyone acts. I built it on my own from public information. The company named on the page didn’t commission or review it.",
    caseStudy: "burgermeister-expansion-intel",
  },
  {
    repo: "rn-bring-the-question",
    title: "Bring Me the Question",
    category: "practice",
    status: "Live · where to start working with me",
    statusKind: "live",
    problem:
      "Most projects start from a solution someone already picked, so the real question never gets examined. This page is for founders, creators, independent professionals and organizations who know the situation but don’t have a brief.",
    does:
      "A one-page starting point that asks for your question before your brief. You can send a first note by email or LinkedIn.",
    limits:
      "The first conversation is free and not confidential. It doesn’t start paid work, and the written First Read isn’t free implementation. A scoped project is a separate decision.",
    builtOn: "Next.js, hosted on Vercel.",
  },
  {
    repo: "rn-portfolio",
    title: "RN Builds",
    category: "practice",
    status: "Live · public exhibition of my builds",
    statusKind: "live",
    problem:
      "The questions behind a build get lost once it’s finished.",
    does:
      "A separate exhibition site for anyone who wants to use a build or see why it exists, no background needed. Each numbered build opens on its release day with a working tool and a visual story. The goal is 100 builds, and released work, lab builds and unfinished parts are labeled separately.",
    builtOn: "Next.js, hosted on Vercel.",
    limits:
      "100 is the goal, not a count of finished work. A working tool there isn’t legal, medical, scientific or operational advice.",
  },
  {
    repo: "sovereign-stack",
    institutional: true,
    title: "Authority Layer",
    category: "practice",
    status: "Proposal · my own idea, not adopted",
    statusKind: "proposal",
    problem:
      "A tech stack can be local, open and rooted in place and still leave no home for questions of authority, knowledge limits, accountability, withdrawal and refusal.",
    does:
      "An interactive proposal for keeping each permitted use tied to the decision that approved it when the purpose, data, model, vendor, audience or operators change. Purple Maiʻa has publicly described its Sovereign Stack; Authority Layer is my separate proposal.",
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
