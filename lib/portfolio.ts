export type Project = {
  slug: string;
  number: string;
  kind: string;
  title: string;
  shortTitle: string;
  status: string;
  thesis: string;
  summary: string;
  tags: string[];
  noticed: string;
  researched: string;
  built: string;
  serves: string;
  demonstrates: string;
  live?: string;
  repo?: string;
  image?: string;
  imageAlt?: string;
  evidenceNote?: string;
};

export const projects: Project[] = [
  {
    slug: "ownership-platform",
    number: "01",
    kind: "Independent research + applied inquiry",
    title: "Institutions of One",
    shortTitle: "Institutions of One",
    status: "Independent research and applied-research practice · active development",
    thesis:
      "How can independent work travel, compound, and endure beyond a role, employer, platform, or title?",
    summary:
      "An independent research and applied-research practice studying the conditions that allow one person's work, capability, relationships, evidence, and intellectual assets to become portable, cumulative, and institutionally legible. Its Ownership Platform is one technical implementation of that larger inquiry.",
    tags: ["Research architecture", "Evidence governance", "Assessment design"],
    noticed:
      "Independent professionals are routinely assessed through institutional proxies—employer, title, credential, network—even as they create valuable work across multiple systems. Their capability, relationships, and intellectual assets are difficult to see as a coherent whole.",
    researched:
      "Institutions of One brings together questions of ownership, portable reputation, capability measurement, longitudinal evidence, participation ethics, and the conditions under which independent work can acquire continuity without being reduced to an employer, title, platform, or personal brand.",
    built:
      "The practice includes an Observatory, Ownership Index, Portfolio Professional research, Question Lab, The I/1 Edit, Apply the Cases, partnership and applied-inquiry pathways, and an Ownership Platform with evidence-governed research infrastructure. This case study presents the public architecture while protecting participant and research systems still under development.",
    serves:
      "Creators, independent professionals, portfolio workers, researchers, and institutions seeking better ways to recognize work, capability, relationships, and intellectual assets that conventional organizational categories obscure.",
    demonstrates:
      "Structural problem definition, research-program architecture, ethics-aware measurement design, and the ability to turn an abstract thesis into testable infrastructure.",
    evidenceNote:
      "The Ownership Platform is a working implementation within Institutions of One. Participant data and research operations remain private while the practice develops its evidence and participation safeguards.",
    live: "https://ownership-platform.vercel.app/",
  },
  {
    slug: "flexjd-resource-hub",
    number: "02",
    kind: "Community + ecosystem infrastructure",
    title: "FlexJD Resource Hub",
    shortTitle: "FlexJD Resource Hub",
    status: "Community infrastructure · independently maintained",
    thesis:
      "Make fragmented institutional information usable without pretending it is official.",
    summary:
      "A mobile-first resource system for Northeastern Law's FlexJD community: verified opportunities, deadlines, campaigns, guides, correction pathways, privacy rules, and maintenance controls.",
    tags: ["Service design", "Source verification", "Community governance"],
    noticed:
      "Part-time online law students must assemble critical information across institutional pages, emails, calendars, informal knowledge, and third-party sources. A directory without freshness and correction controls can make that problem worse.",
    researched:
      "Program requirements, student needs, opportunity types, institutional boundaries, source freshness, privacy, non-endorsement, correction processes, and the practical maintenance burden of a student-run resource.",
    built:
      "A mobile-first hub with a newsletter, all-purpose guide, filterable opportunity tracker, seven awareness campaigns, correction and privacy pathways, source-verification policy, automated link checks, secret scanning, and freshness controls.",
    serves:
      "Northeastern University School of Law's FlexJD students, especially people balancing law school with work, care responsibilities, distance, and asynchronous participation.",
    demonstrates:
      "Community-centered service design, information governance, operational maintenance, and the discipline to state clearly what a resource is—and is not.",
    live: "https://flexjd-site.vercel.app/",
    repo: "https://github.com/rn-collins/flexjd-site",
  },
  {
    slug: "psychedelic-operations-intelligence",
    number: "03",
    kind: "Research + intelligence systems",
    title: "Psychedelic Operations Intelligence",
    shortTitle: "Psychedelic Operations",
    status: "Live source-verified monitor · sweep overdue, reported on the build",
    thesis:
      "Turn a fast-moving legal and scientific field into operational intelligence.",
    summary:
      "A public monitoring prototype for organizing regulatory and operational signals across psychedelic medicine and policy, with important provenance, data-shape, filtering, and source-quality limitations documented in the case study.",
    tags: ["Data architecture", "Field monitoring", "Decision support"],
    noticed:
      "The psychedelic field moves across law, clinical research, state programs, professional education, organizations, funding, and public claims. Conventional news feeds preserve documents but not the relationships needed for decisions.",
    researched:
      "Regulatory programs, legislation, scientific evidence, institutions, professional actors, operational signals, source provenance, update cadence, and the decisions different users need to make from the same field data.",
    built:
      "A public dashboard over six verified official source endpoints, with a weekly sweep, a source-policy gate every candidate must clear before display, per-category sweep state, and a published collection-health block reporting how many days old the last successful sweep is. On the most recent sweep seven candidates passed the policy and forty-one were rejected as noise.",
    serves:
      "Researchers, regulated operators, policy teams, legal professionals, educators, and organizations that need current field intelligence with source traceability.",
    demonstrates:
      "Cross-domain taxonomy, database and dashboard design, evidence provenance, monitoring logic, and decision-oriented synthesis.",
    evidenceNote:
      "The build collects and screens; it does not verify. Screened candidates are explicitly unreviewed, and a record in the source registry means an endpoint is monitored, not that something new was published there. The last successful sweep is more than two cycles old and the site reports itself stale rather than presenting a frozen snapshot as current. This is not comprehensive monitoring, not a maintained private database, not continuously operating alerts, and not legal advice.",
    live: "https://psychops-intel.vercel.app/",
  },
  {
    slug: "buechler-pacific",
    number: "04",
    kind: "Organization-specific concept build",
    title: "Claude for Small Business",
    shortTitle: "Claude for Small Business",
    status: "Independent product-translation concept · release-blocked",
    thesis:
      "How could a small business understand a complex AI product without mistaking a static guide for a working integration?",
    summary:
      "A generic, plain-English Claude product guide. Its repository history preserves an independently initiated Buechler concept lineage, but the current public artifact contains no Buechler Pacific or Hawaiʻi-specific content and does not evidence a relationship, tailoring, review, approval, delivery, or use.",
    tags: ["Organizational research", "Workflow design", "AI translation"],
    noticed:
      "Small-business AI guidance often begins with features rather than work: which recurring burden matters, what information may be used, where approval belongs, and what a first low-risk workflow should accomplish.",
    researched:
      "Anthropic product materials, permissions, data-use boundaries, plan requirements, connector behavior, human approval, and training considerations. Product and security guidance requires a current official-source review before reuse.",
    built:
      "A static quick-start guide that explains product concepts, suggests possible workflows, and includes review and permission cautions. It does not implement a calculator, API, connector, organizational workflow, or downloadable PDF; its download control opens print.",
    serves:
      "Small-business owners and teams who need to understand where an AI workflow could be useful before adopting another tool.",
    demonstrates:
      "Product translation, responsible AI-adoption framing, and the ability to make a complex tool discussable before a formal specification exists.",
    live: "https://claude-smb-buechler.vercel.app/",
    repo: "https://github.com/rn-collins/claude-smb-buechler",
    image: "/evidence/buechler.png",
    imageAlt: "Preview of the Claude for Small Business quick-start resource",
  },
  {
    slug: "keiki-robotics",
    number: "05",
    kind: "Organization-specific concept build",
    title: "Keiki Robotics / Oʻahu AI",
    shortTitle: "Keiki Robotics / Oʻahu AI",
    status: "Independent static family-resource concept · release-blocked",
    thesis:
      "Design an emerging-technology resource around Hawaiʻi's children, families, educators, and actual pathways into robotics.",
    summary:
      "A Hawaiʻi-grounded static family guide created around a publicly announced robotics event. It was independently initiated and does not evidence commission, authorization, review, endorsement, or an official relationship with Oʻahu A.I. or Island Robotics.",
    tags: ["Learning experience", "Audience design", "Hawaiʻi context"],
    noticed:
      "An exciting robotics showcase does not automatically tell a child or parent what the activity involves, which program fits their age, what it costs, or where a Hawaiʻi family can begin after the event.",
    researched:
      "Official VEX and REC Foundation program structures, age bands, construction systems, competition pathways, Hawaiʻi robotics organizations, local coaches and teams, library events, and the specific Oʻahu AI/Hawaiʻi Tech Week context.",
    built:
      "A one-page, mobile-first family explainer with a browser-local checklist, myth toggles, print/share controls, and thirteen cited sources. It is not a maintained directory, team finder, enrollment pathway, offline application, or official event keepsake.",
    serves:
      "Keiki, parents, caregivers, educators, and community members who are curious about robotics but are not already fluent in the competition ecosystem.",
    demonstrates:
      "Audience translation, youth-facing interaction design, local ecosystem research, and an early concept for how one-time event information could become more useful to families.",
    live: "https://keiki-robotics-oahu-ai.vercel.app/",
    repo: "https://github.com/rn-collins/keiki-robotics-oahu-ai",
    image: "/evidence/keiki-robotics.png",
    imageAlt: "Preview of the Hawaiʻi keiki robotics guide",
  },
  {
    slug: "thorncrest-patent-first-steps",
    number: "06",
    kind: "Organization-specific concept build",
    title: "ThornCrest — Patent First Steps",
    shortTitle: "ThornCrest Patent First Steps",
    status: "Independent legal-education concept · release-blocked",
    thesis:
      "Help a young inventor understand the next decision before asking them to become an IP expert.",
    summary:
      "A plain-English static first-steps guide for young inventors and families, independently conceived around a publicly announced ThornCrest Law panel. It does not evidence commission, authorization, review, distribution, or a ThornCrest relationship.",
    tags: ["Legal service design", "Public education", "Guided intake"],
    noticed:
      "A child can leave an invention event inspired but still not know the difference between patent, trademark, copyright, and trade secret—or that public disclosure can affect rights before a family ever speaks with counsel.",
    researched:
      "USPTO and Copyright Office primary sources, patentability requirements, first-inventor-to-file, provisional applications, current fee and entity rules, pro se and pro bono assistance, Hawaiʻi's Patent and Trademark Resource Center, and youth invention resources.",
    built:
      "A one-page interactive legal-education guide with orientation, myth correction, IP distinctions, timing cautions, and links to official help. It is not intake, a calculator, saved progress, an actual PDF download, attorney booking, or legal service.",
    serves:
      "Young inventors, families, teachers, and first-time founders who need orientation before a professional legal conversation.",
    demonstrates:
      "Legal research, risk-sensitive public education, guided service design, youth accessibility, and a pathway from public knowledge to appropriate professional help.",
    live: "https://patent-first-steps-thorncrest.vercel.app/",
    repo: "https://github.com/rn-collins/patent-first-steps-thorncrest",
    image: "/evidence/thorncrest.png",
    imageAlt: "Preview of the Patent First Steps guide for young inventors",
  },
];

export const writing = {
  fnm: [
    {
      title:
        "Haven’t Done This Before: Three Days at the Hawaiʻi Cannabis Expo",
      href: "https://www.fatnugsmag.com/three-days-at-the-hawaii-cannabis-expo/",
      blurb:
        "A reported, first-person account of entering Hawaiʻi’s cannabis community as a new field reporter. Built from three days of interviews and follow-up research, it preserves uncertainty, lets participants explain their own work, and shows how RN turns an unfamiliar room into a map of people, relationships, technical knowledge, and future reporting questions.",
    },
    {
      title: "Sovereign Ground: Cannabis, Land, and the Kingdom of Hawaiʻi",
      href: "https://www.fatnugsmag.com/cannabis-and-hawaiian-sovereignty/",
      blurb:
        "Begins with an expo story passed by word of mouth, verifies the details against reporting and historical records, and follows the corrected story into Puʻuhonua o Waimānalo, the 1993 Apology Resolution, competing jurisdictional claims, and cannabis cultivation. It demonstrates source correction without contempt for community memory—and legal analysis grounded in land and history.",
    },
    {
      title: "Every Gram Accounted For: Hawaiʻi’s Seed-to-Sale System",
      href: "https://www.fatnugsmag.com/inside-hawaiis-seed-to-sale-tracking-system/",
      blurb:
        "Explains the invisible compliance infrastructure behind Hawaiʻi’s medical cannabis market: plant identifiers, testing, manifests, patient limits, agent registration, vendor consolidation, and the scaling problem posed by adult use. It shows RN moving from one technical system to its consequences for operators, workers, regulators, and market design.",
    },
    {
      title: "Cannabis as Vagus Nerve Medicine?",
      href: "https://www.fatnugsmag.com/ask-a-neuroscientist-cannabis-as-vagus-nerve-medicine/",
      blurb:
        "Tests a popular wellness claim against vagal anatomy, heart-rate variability, autonomic physiology, endocannabinoid signaling, and the contested reach of polyvagal theory. It distinguishes feeling regulated from directly stimulating the vagus nerve without dismissing reported relief—scientific precision used as consumer protection and harm reduction.",
    },
    {
      title: "Set, Setting, and Structure in Psychedelic Therapy Spaces",
      href: "https://www.fatnugsmag.com/ask-a-neuroscientist-set-setting-and-structure-in-psychedelic-therapy-spaces/",
      blurb:
        "Treats therapeutic space as an active clinical variable rather than decoration, connecting sensory load, perceived safety, trauma awareness, and care delivery. It demonstrates how RN translates neuroscience into design and implementation questions.",
    },
    {
      title: "Why Does Music Hit Different When You’re High?",
      href: "https://www.fatnugsmag.com/ask-a-neuroscientist-the-neuroscience-of-cannabis-and-sound/",
      blurb:
        "Connects auditory prediction, reward, timing, movement, attention, memory, and cannabinoid effects to a familiar experience. It demonstrates how RN starts with a real public question and makes several interacting neural systems legible without pretending there is one master mechanism.",
    },
  ],
  clr: [
    {
      title: "Equity Program Outcomes in State Cannabis Markets",
      href: "https://cannabislaw.report/r-n-collins-equity-program-outcomes-in-state-cannabis-markets-an-audit-and-oversight-report/",
      blurb:
        "Tests whether social-equity architecture in five states produced durable economic participation, separating licenses awarded from businesses opened, revenue earned, capital accessed, and public money governed. It demonstrates RN’s ability to evaluate whether an institution’s stated beneficiaries actually receive the value the institution claims to distribute.",
    },
    {
      title: "Digital, AI, and Psychedelic Convergence",
      href: "https://cannabislaw.report/rn-williams-series-2-no-1-of-14-articles-digital-ai-and-psychedelic-convergence-what-this-means-for-regulators/",
      blurb:
        "Maps a regulatory object that is simultaneously drug, device, software, and AI-mediated service. By tracing product classification, inferred health data, adaptive trials, and postmarket controls, the piece demonstrates cross-agency issue spotting when an intervention exceeds the categories any one regulator was built to govern.",
    },
    {
      title: "Designing Inspector-General Functions for Emerging Drug Agencies",
      href: "https://cannabislaw.report/rn-collins-series-2-no-19-designing-inspector-general-functions-for-emerging-drug-agencies/",
      blurb:
        "Compares the federal Inspector General model with documented failures in young cannabis agencies and translates the comparison into structural recommendations for emerging drug regulators. It demonstrates governance design grounded in statutes, audits, and accountability mechanisms.",
    },
    {
      title: "The Economics of Regulated Psilocybin",
      href: "https://cannabislaw.report/rn-collins-series-2-no-14-the-economics-of-regulated-psilocybin-financial-viability-equity-mandates-and-the-sustainability-of-state-service-center-programs-cannabis-law-report-audit-style-rep/",
      blurb:
        "Builds a representative service-center unit-economics model and tests whether safety requirements, equity pricing, workforce design, and public-program financing can coexist at actual market scale. It demonstrates the discipline to stress-test RN’s own preferred governance recommendations against operational and financial constraints.",
    },
    {
      title: "Compliance Review of Oregon's Psilocybin Licensing System",
      href: "https://cannabislaw.report/rn-collins-series-2-no-16-compliance-review-of-oregons-psilocybin-licensing-system/",
      blurb:
        "Conducts an audit-style review of licensing, market sustainability, training oversight, laboratory concentration, geographic access, disability litigation, and rulemaking. It shows RN converting scattered public records into findings, vulnerabilities, and operational recommendations.",
    },
    {
      title: "Constitutional Challenges to Cannabis Licensing Schemes",
      href: "https://cannabislaw.report/r-n-collins-constitutional-challenges-to-cannabis-licensing-schemes/",
      blurb:
        "Maps dormant Commerce Clause, First Amendment, labor-preemption, equal-protection, and due-process challenges across state licensing systems. It demonstrates doctrinal research translated into practical consequences for residency rules, equity programs, labor-peace conditions, hearings, and market design.",
    },
  ],
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
