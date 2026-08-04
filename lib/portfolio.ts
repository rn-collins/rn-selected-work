export type Project = {
  slug: string; number: string; kind: string; title: string; shortTitle: string;
  status: string; thesis: string; summary: string; tags: string[];
  noticed: string; researched: string; built: string; serves: string; demonstrates: string;
  live?: string; repo?: string; image?: string; imageAlt?: string; evidenceNote?: string;
};

export const projects: Project[] = [
  {
    slug: "ownership-platform", number: "01", kind: "Community + ecosystem infrastructure",
    title: "Institutions of One / Ownership Platform", shortTitle: "Ownership Platform",
    status: "Independent research platform · active development",
    thesis: "What changes when individual capability becomes portable, ownable institutional power?",
    summary: "A research platform that turns a structural question about creators and independent professionals into candidate measurement instruments, an evidence-governed observatory, longitudinal infrastructure, and participation pathways.",
    tags: ["Research architecture", "Evidence governance", "Assessment design"],
    noticed: "Independent professionals are routinely assessed through institutional proxies—employer, title, credential, network—even as they create valuable work across multiple systems. Their capability, relationships, and intellectual assets are difficult to see as a coherent whole.",
    researched: "The platform brings together questions of ownership, portable reputation, capability measurement, longitudinal evidence, participation ethics, and the institutional conditions under which one person can operate with the power and continuity of an organization.",
    built: "A private working platform with an evidence-governed observatory, candidate assessment instruments, longitudinal research architecture, and participation pathways. This public case study deliberately describes the system without exposing private participant or research infrastructure.",
    serves: "Creators, independent professionals, portfolio workers, researchers, and institutions trying to recognize forms of value that conventional organizational categories miss.",
    demonstrates: "Structural problem definition, research-program architecture, ethics-aware measurement design, and the ability to turn an abstract thesis into testable infrastructure.",
    evidenceNote: "Controlled case study. The working platform and its data structures are private while research and participation safeguards are developed."
  },
  {
    slug: "flexjd-resource-hub", number: "02", kind: "Community + ecosystem infrastructure",
    title: "FlexJD Resource Hub", shortTitle: "FlexJD Resource Hub",
    status: "Community infrastructure · independently maintained",
    thesis: "Make fragmented institutional information usable without pretending it is official.",
    summary: "A mobile-first resource system for Northeastern Law's FlexJD community: verified opportunities, deadlines, campaigns, guides, correction pathways, privacy rules, and maintenance controls.",
    tags: ["Service design", "Source verification", "Community governance"],
    noticed: "Part-time online law students must assemble critical information across institutional pages, emails, calendars, informal knowledge, and third-party sources. A directory without freshness and correction controls can make that problem worse.",
    researched: "Program requirements, student needs, opportunity types, institutional boundaries, source freshness, privacy, non-endorsement, correction processes, and the practical maintenance burden of a student-run resource.",
    built: "A mobile-first hub with a newsletter, all-purpose guide, filterable opportunity tracker, seven awareness campaigns, correction and privacy pathways, source-verification policy, automated link checks, secret scanning, and freshness controls.",
    serves: "Northeastern University School of Law's FlexJD students, especially people balancing law school with work, care responsibilities, distance, and asynchronous participation.",
    demonstrates: "Community-centered service design, information governance, operational maintenance, and the discipline to state clearly what a resource is—and is not.",
    live: "https://flexjd-site.vercel.app/", repo: "https://github.com/rn-collins/flexjd-site"
  },
  {
    slug: "psychedelic-operations-intelligence", number: "03", kind: "Research + intelligence systems",
    title: "Psychedelic Operations Intelligence", shortTitle: "Psychedelic Operations",
    status: "Private working system · controlled demonstration",
    thesis: "Turn a fast-moving legal and scientific field into operational intelligence.",
    summary: "A structured dashboard and database environment for organizing regulatory activity, scientific evidence, organizations, programs, and operational signals across psychedelic medicine and policy.",
    tags: ["Data architecture", "Field monitoring", "Decision support"],
    noticed: "The psychedelic field moves across law, clinical research, state programs, professional education, organizations, funding, and public claims. Conventional news feeds preserve documents but not the relationships needed for decisions.",
    researched: "Regulatory programs, legislation, scientific evidence, institutions, professional actors, operational signals, source provenance, update cadence, and the decisions different users need to make from the same field data.",
    built: "A private dashboard and structured database that connects entities, evidence, regulatory events, programs, and monitored signals. The public case study exposes the architecture and reasoning while withholding the operational dataset.",
    serves: "Researchers, regulated operators, policy teams, legal professionals, educators, and organizations that need current field intelligence with source traceability.",
    demonstrates: "Cross-domain taxonomy, database and dashboard design, evidence provenance, monitoring logic, and decision-oriented synthesis.",
    evidenceNote: "Controlled case study. The operational database remains private because it includes a maintained intelligence layer rather than a static public demo."
  },
  {
    slug: "buechler-pacific", number: "04", kind: "Organization-specific concept build",
    title: "Buechler Pacific — Claude for Small Business", shortTitle: "Buechler Pacific",
    status: "Independently initiated concept · not commissioned",
    thesis: "What would useful AI look like inside a real Hawaiʻi small business—not in a generic demo?",
    summary: "A tailored, plain-English resource developed from public information about Buechler Pacific and the real adoption questions facing a Hawaiʻi small business.",
    tags: ["Organizational research", "Workflow design", "AI translation"],
    noticed: "Small-business AI guidance often begins with features rather than work: which recurring burden matters, what information may be used, where approval belongs, and what a first low-risk workflow should accomplish.",
    researched: "Anthropic's primary product materials, permissions and data-use boundaries, plan requirements, connector behavior, human approval, training resources, and the workflow realities of a specific Hawaiʻi business audience.",
    built: "A branded quick-start experience that explains the product in plain language, helps a business choose a first workflow, embeds review and permission cautions, and provides an annotated primary-source desk rather than unsupported AI promises.",
    serves: "Small-business owners and teams who need to understand where an AI workflow could be useful before adopting another tool.",
    demonstrates: "Rapid organizational research, brand-sensitive explanation, primary-source discipline, responsible AI adoption framing, and a useful artifact built before a formal specification exists.",
    live: "https://claude-smb-buechler.vercel.app/", repo: "https://github.com/rn-collins/claude-smb-buechler",
    image: "/evidence/buechler.png", imageAlt: "Preview of the Claude for Small Business quick-start resource"
  },
  {
    slug: "keiki-robotics", number: "05", kind: "Organization-specific concept build",
    title: "Keiki Robotics / Oʻahu AI", shortTitle: "Keiki Robotics / Oʻahu AI",
    status: "Independently initiated concept · not commissioned",
    thesis: "Design an emerging-technology resource around Hawaiʻi's children, families, educators, and actual pathways into robotics.",
    summary: "A Hawaiʻi-grounded guide created around an Oʻahu AI robotics event, translating competition robotics into an accessible path for keiki and the adults supporting them.",
    tags: ["Learning experience", "Audience design", "Hawaiʻi context"],
    noticed: "An exciting robotics showcase does not automatically tell a child or parent what the activity involves, which program fits their age, what it costs, or where a Hawaiʻi family can begin after the event.",
    researched: "Official VEX and REC Foundation program structures, age bands, construction systems, competition pathways, Hawaiʻi robotics organizations, local coaches and teams, library events, and the specific Oʻahu AI/Hawaiʻi Tech Week context.",
    built: "A playful, mobile-first explainer with age-specific pathways, local entry points, evidence annotations, and next steps connected to Island Robotics, Oʻahu AI, and Hawaiʻi organizations.",
    serves: "Keiki, parents, caregivers, educators, and community members who are curious about robotics but are not already fluent in the competition ecosystem.",
    demonstrates: "Audience translation, youth-facing interaction design, local ecosystem research, and the ability to convert a one-time event into durable community infrastructure.",
    live: "https://keiki-robotics-oahu-ai.vercel.app/", repo: "https://github.com/rn-collins/keiki-robotics-oahu-ai",
    image: "/evidence/keiki-robotics.png", imageAlt: "Preview of the Hawaiʻi keiki robotics guide"
  },
  {
    slug: "thorncrest-patent-first-steps", number: "06", kind: "Organization-specific concept build",
    title: "ThornCrest — Patent First Steps", shortTitle: "ThornCrest Patent First Steps",
    status: "Independently initiated concept · not commissioned",
    thesis: "Help a young inventor understand the next decision before asking them to become an IP expert.",
    summary: "A plain-English first-steps guide for young inventors and families, conceived around a ThornCrest Law panel at Hawaiʻi Tech Week 2026.",
    tags: ["Legal service design", "Public education", "Guided intake"],
    noticed: "A child can leave an invention event inspired but still not know the difference between patent, trademark, copyright, and trade secret—or that public disclosure can affect rights before a family ever speaks with counsel.",
    researched: "USPTO and Copyright Office primary sources, patentability requirements, first-inventor-to-file, provisional applications, current fee and entity rules, pro se and pro bono assistance, Hawaiʻi's Patent and Trademark Resource Center, and youth invention resources.",
    built: "A branded, interactive legal-education experience that explains the four patentability gates, corrects common myths, distinguishes forms of IP, surfaces critical timing cautions, and routes families to official and local help.",
    serves: "Young inventors, families, teachers, and first-time founders who need orientation before a professional legal conversation.",
    demonstrates: "Legal research, risk-sensitive public education, guided service design, youth accessibility, and a pathway from public knowledge to appropriate professional help.",
    live: "https://patent-first-steps-thorncrest.vercel.app/", repo: "https://github.com/rn-collins/patent-first-steps-thorncrest",
    image: "/evidence/thorncrest.png", imageAlt: "Preview of the Patent First Steps guide for young inventors"
  }
];

export const writing = {
  fnm: [
    { title: "Cannabis as Vagus Nerve Medicine?", href: "https://www.fatnugsmag.com/ask-a-neuroscientist-cannabis-as-vagus-nerve-medicine/", blurb: "Tests a popular wellness claim against anatomy, autonomic physiology, cannabinoid pharmacology, and lived experience. The piece distinguishes felt regulation from direct vagal stimulation without dismissing the relief people report—an example of scientific precision used as harm reduction." },
    { title: "Why Does Music Hit Different When You're High?", href: "https://www.fatnugsmag.com/ask-a-neuroscientist-the-neuroscience-of-cannabis-and-sound/", blurb: "Uses auditory neuroscience, attention, timing, reward, memory, and cannabinoid effects to explain a familiar experience. It demonstrates how RN begins with a real public question and makes multiple neural systems understandable without reducing the answer to a single mechanism." },
    { title: "Cannabis in Nature", href: "https://www.fatnugsmag.com/ask-a-neuroscientist-cannabis-in-nature/", blurb: "Examines why environment changes a cannabis experience by connecting attention restoration, stress physiology, multisensory input, biophilic design, and context. It shows RN's characteristic move from molecule-centered explanation to person-in-environment systems thinking." },
    { title: "Set, Setting, and Structure in Psychedelic Therapy Spaces", href: "https://www.fatnugsmag.com/ask-a-neuroscientist-set-setting-and-structure-in-psychedelic-therapy-spaces/", blurb: "Treats therapeutic space as an active clinical variable rather than decoration, connecting sensory load, perceived safety, trauma awareness, and care delivery. It demonstrates how RN translates neuroscience into design and implementation questions." },
    { title: "Cannabis and Grief", href: "https://www.fatnugsmag.com/ask-a-neuroscientist-cannabis-and-grief/", blurb: "Explores a question for which evidence, subjective experience, and vulnerability do not line up neatly. The piece demonstrates careful communication under uncertainty: explaining plausible mechanisms and risks while resisting a universal therapeutic claim." }
  ],
  clr: [
    { title: "Designing Inspector-General Functions for Emerging Drug Agencies", href: "https://cannabislaw.report/rn-collins-series-2-no-19-designing-inspector-general-functions-for-emerging-drug-agencies/", blurb: "Compares the federal Inspector General model with documented failures in young cannabis agencies and translates the comparison into structural recommendations for emerging drug regulators. It demonstrates governance design grounded in statutes, audits, and accountability mechanisms." },
    { title: "Compliance Review of Oregon's Psilocybin Licensing System", href: "https://cannabislaw.report/rn-collins-series-2-no-16-compliance-review-of-oregons-psilocybin-licensing-system/", blurb: "Conducts an audit-style review of licensing, market sustainability, training oversight, laboratory concentration, geographic access, disability litigation, and rulemaking. It shows RN converting scattered public records into findings, vulnerabilities, and operational recommendations." },
    { title: "Constitutional Challenges to Cannabis Licensing Schemes", href: "https://cannabislaw.report/r-n-collins-constitutional-challenges-to-cannabis-licensing-schemes/", blurb: "Maps how constitutional doctrines constrain licensing systems and why market design cannot be separated from equal protection, due process, and interstate-commerce questions. It demonstrates doctrinal research translated into regulatory design consequences." },
    { title: "Oversight Architecture in Psychedelic Regulation", href: "https://cannabislaw.report/rn-collins-series-2-no-17-oversight-architecture-in-psychedelic-regulation/", blurb: "Asks who watches a new regulator, through what reporting lines, with what information and remedies. It demonstrates RN's focus on the institutional layer between a promising policy and a trustworthy operating system." }
  ]
};

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
