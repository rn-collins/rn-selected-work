import { monitorStatus } from "./freshness";
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
    kind: "Research project",
    title: "Institutions of One",
    shortTitle: "Institutions of One",
    status: "In development",
    thesis:
      "How do you keep the value of your work when you leave a job, a platform or a title?",
    summary:
      "Research for creators and freelancers whose work doesn’t fit one employer, title or platform. The live site has profiles of 41 careers and two five-minute pilot quizzes. The quizzes aren’t validated scales, and they don’t diagnose or rank anyone.",
    tags: ["Research design", "Source checking", "Assessment design"],
    noticed:
      "Independent professionals usually get judged by stand-ins: employer, title, credential, network. Meanwhile they make valuable work in many places, and their skills, relationships and ideas are hard to see as one whole.",
    researched:
      "Institutions of One asks who owns independent work, how a reputation can move with you, how to measure skill, what long-term evidence looks like, how to research people ethically, and how independent work can last without shrinking to an employer, title, platform or personal brand.",
    built:
      "The public site includes an Observatory of 41 careers, the editions, Apply the Cases, and two five-minute pilot assessments: the Ownership Index and the Portfolio Professional assessment. Visual stories and the Source Desk live on the companion reader.",
    serves:
      "Creators, independent workers, people with several jobs, researchers, and organizations that want better ways to recognize work, skills, relationships and ideas that standard job categories miss.",
    demonstrates:
      "Defining a big structural problem, designing a research program, measuring ethically, and turning an abstract idea into tools people can test.",
    evidenceNote:
      "The two pilot assessments are not validated psychological scales. They do not diagnose, rank, or measure human worth. The candidate-instrument protocol is still a draft, and its default activation decision is blocked.",
    live: "https://ownership-platform.vercel.app/",
  },
  {
    slug: "flexjd-resource-hub",
    number: "02",
    kind: "Student resource",
    title: "FlexJD Resource Hub",
    shortTitle: "FlexJD Resource Hub",
    status: "Run independently",
    thesis:
      "Puts scattered law-school information in one place, without pretending to be official.",
    summary:
      "A phone-friendly hub for Northeastern Law’s FlexJD students: checked opportunities, deadlines, campaigns and guides, with a way to report mistakes.",
    tags: ["Service design", "Source verification", "Community governance"],
    noticed:
      "Part-time online law students have to piece together key information from school web pages, emails, calendars, word of mouth and outside sources. A directory that isn’t kept current, and has no way to report errors, can make that worse.",
    researched:
      "I looked at program requirements, what students need, the kinds of opportunities on offer, what the school does and doesn’t own, how fresh each source is, privacy, avoiding endorsements, how to handle corrections, and how much upkeep a student-run resource can realistically take.",
    built:
      "A phone-friendly website with a newsletter, a general guide, a filterable list of opportunities, seven awareness campaigns, ways to report errors and privacy concerns, a policy for checking sources, automatic checks for broken links and leaked keys, and dates showing when each item was last checked.",
    serves:
      "FlexJD students at Northeastern University School of Law, especially those balancing law school with work, caregiving, distance and classes on their own schedule.",
    demonstrates:
      "Community-centered service design, information governance, operational maintenance, and the discipline to state clearly what a resource is, and is not.",
    live: "https://flexjd-site.vercel.app/",
    repo: "https://github.com/rn-collins/flexjd-site",
  },
  {
    slug: "psychedelic-operations-intelligence",
    number: "03",
    kind: "Source tracker",
    title: "Psychedelic Operations Intelligence",
    shortTitle: "Psychedelic Operations",
    status: monitorStatus("Live source monitor", "2026-11-09"),
    thesis:
      "Track new psychedelic rules without wading through press releases.",
    summary:
      "A public tracker for researchers, operators and policy teams that keeps official psychedelic-regulation sources apart from press and advocacy. The November 9, 2026 check kept 16 new items and threw out 68 as noise. Kept items haven’t been reviewed yet. This isn’t legal advice.",
    tags: ["Data design", "Field monitoring", "Decision support"],
    noticed:
      "The psychedelic field moves across law, clinical research, state programs, professional training, organizations, funding and public claims. Ordinary news feeds keep the documents but not the links between them that people need to make decisions.",
    researched:
      "I mapped regulatory programs, legislation, scientific evidence, organizations, professionals, operating signals, where each source comes from, how often it updates, and the decisions different readers need to make from the same data.",
    built:
      "A public dashboard that watches six checked official sources. A sweep runs every Monday, every new item must pass a source rule before it appears, and a status panel shows whether collection is working. The November 9, 2026 sweep kept 16 items, rejected 68 as noise and reported all six sources healthy.",
    serves:
      "Researchers, regulated operators, policy teams, lawyers, teachers and organizations that need current news from the field, traced to its source.",
    demonstrates:
      "Sorting topics across fields, database and dashboard design, tracking where evidence came from, monitoring rules, and summing up for decisions.",
    evidenceNote:
      "The build collects and screens. Screened candidates stay unreviewed. A record in the source registry means an endpoint is monitored. The last successful sweep was 9 November 2026 and the site reported the collection healthy. Not legal advice.",
    live: "https://psychops-intel.vercel.app/",
  },
  {
    slug: "buechler-pacific",
    number: "04",
    kind: "Concept for one company",
    title: "Claude for Small Business",
    shortTitle: "Claude for Small Business",
    status: "Unofficial concept · not released",
    thesis:
      "How can a small business understand an AI product before plugging it into its work?",
    summary:
      "A plain-English guide for a small business that needs to understand Claude before anyone connects it to the work. The live link opens a static page. It does not run a workflow, connect a system, or record a client engagement. The release stays blocked.",
    tags: ["Organizational research", "Workflow design", "Explaining AI"],
    noticed:
      "Most AI advice for small businesses starts with features. It should start with the work: which repeated task costs the most time, what information the AI may see, where a person must approve, and what a safe first task should get done.",
    researched:
      "I reviewed Anthropic’s product materials on permissions, data use, plan requirements, how connectors behave, human approval and training. Product and security details change, so they need a fresh check against official sources before anyone reuses this.",
    built:
      "A one-page quick-start guide. It explains how Claude works, suggests tasks a small business could hand it, and warns where to review output and limit permissions. It has no calculator, API, connector, built-in workflow or downloadable PDF. Its download button opens the print dialog.",
    serves:
      "Small-business owners and teams who want to know where AI could help before they adopt another tool.",
    demonstrates:
      "Explaining a product in plain terms, framing AI adoption responsibly, and making a complex tool easy to talk about before anyone has written a formal spec.",
    live: "https://claude-smb-buechler.vercel.app/",
    repo: "https://github.com/rn-collins/claude-smb-buechler",
    image: "/evidence/buechler.png",
    imageAlt: "Preview of the Claude for Small Business quick-start resource",
  },
  {
    slug: "keiki-robotics",
    number: "05",
    kind: "Concept for one company",
    title: "Keiki Robotics / Oʻahu AI",
    shortTitle: "Keiki Robotics / Oʻahu AI",
    status: "Unofficial family guide · not released",
    thesis:
      "Show Hawaiʻi kids, families and teachers real ways into robotics.",
    summary:
      "A guide for Hawaiʻi families, made around a public robotics event. I made it on my own: Oʻahu A.I. and Island Robotics didn’t commission, review or endorse it. It hasn’t been released, so it isn’t an official event handout.",
    tags: ["Learning experience", "Audience design", "Hawaiʻi context"],
    noticed:
      "A robotics showcase can be exciting and still leave a child or parent unsure what the activity involves, which program fits their age, what it costs, or where a Hawaiʻi family can start after the event.",
    researched:
      "I looked at official VEX and REC Foundation program structures, age groups, building kits, competition paths, Hawaiʻi robotics organizations, local coaches and teams, library events, and the Oʻahu AI and Hawaiʻi Tech Week event this was made for.",
    built:
      "A one-page guide for families that works on a phone, with a checklist that stays in your browser, myth-versus-fact toggles, print and share buttons, and 13 cited sources. It is not a maintained directory, a team finder, a way to enroll, an offline app or an official event keepsake.",
    serves:
      "Keiki, parents, caregivers, teachers and neighbors who are curious about robotics but don’t yet know how the competitions work.",
    demonstrates:
      "Writing for a new audience, designing interactions for kids, researching the local robotics scene, and an early idea for turning one-time event information into something families can keep using.",
    live: "https://keiki-robotics-oahu-ai.vercel.app/",
    repo: "https://github.com/rn-collins/keiki-robotics-oahu-ai",
    image: "/evidence/keiki-robotics.png",
    imageAlt: "Preview of the Hawaiʻi keiki robotics guide",
  },
  {
    slug: "patent-first-steps",
    number: "06",
    kind: "Legal guide",
    title: "So You Have an Invention: First Steps",
    shortTitle: "Patent First Steps",
    status: "Independent legal-education guide · live",
    thesis:
      "Help a young inventor understand the next decision before asking them to become an IP expert.",
    summary:
      "A plain-English first-steps guide to patents for young inventors and their families. I wrote it for people at the Patent Your Invention panel at Hawaiʻi Tech Week 2026. It isn’t legal advice, doesn’t file anything for you and creates no attorney-client relationship.",
    tags: ["Legal service design", "Public education", "Step-by-step help"],
    noticed:
      "A child can leave an invention event inspired and still not know the difference between a patent, a trademark, a copyright and a trade secret, or that showing an invention in public can affect their rights before a family ever talks to a lawyer.",
    researched:
      "My sources: USPTO and Copyright Office materials on what can be patented, first-inventor-to-file, provisional applications, current fees and entity rules, filing on your own (pro se) and free legal help (pro bono), plus Hawaiʻi’s Patent and Trademark Resource Center and resources for young inventors.",
    built:
      "A one-page interactive guide to the basics: getting started, common myths corrected, how the four types of IP differ, timing warnings and links to official help. It does not take intake, calculate anything, save progress, offer a real PDF download, book an attorney or provide legal services.",
    serves:
      "Young inventors, families, teachers and first-time founders who need the basics before they talk to a lawyer.",
    demonstrates:
      "Legal research, teaching the public about a risky topic with care, guided service design, making it work for young people, and a clear path from public information to the right professional help.",
    live: "https://patent-first-steps.vercel.app/",
    repo: "https://github.com/rn-collins/patent-first-steps",
    image: "/evidence/patent-first-steps.png",
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
        "A first-person account of joining Hawaiʻi’s cannabis community as a new reporter. Built from three days of interviews and follow-up research, it lets people explain their own work and keeps track of what’s still uncertain.",
    },
    {
      title: "Sovereign Ground: Cannabis, Land, and the Kingdom of Hawaiʻi",
      href: "https://www.fatnugsmag.com/cannabis-and-hawaiian-sovereignty/",
      blurb:
        "It starts with an expo story passed by word of mouth, checks it against reporting and historical records, and follows the corrected story to Puʻuhonua o Waimānalo, the 1993 Apology Resolution, competing land claims and cannabis growing. It corrects the record without dismissing community memory.",
    },
    {
      title: "Every Gram Accounted For: Hawaiʻi’s Seed-to-Sale System",
      href: "https://www.fatnugsmag.com/inside-hawaiis-seed-to-sale-tracking-system/",
      blurb:
        "Explains the tracking behind Hawaiʻi’s medical cannabis market: plant tags, testing, manifests, patient limits, agent registration and vendor consolidation, and why adult use would strain it. Then it follows what that means for operators, workers and regulators.",
    },
    {
      title: "Cannabis as Vagus Nerve Medicine?",
      href: "https://www.fatnugsmag.com/ask-a-neuroscientist-cannabis-as-vagus-nerve-medicine/",
      blurb:
        "Tests a popular wellness claim against vagus nerve anatomy, heart-rate variability, the endocannabinoid system and the disputed polyvagal theory. It separates feeling calmer from actually stimulating the vagus nerve, without dismissing the relief people report.",
    },
    {
      title: "Set, Setting, and Structure in Psychedelic Therapy Spaces",
      href: "https://www.fatnugsmag.com/ask-a-neuroscientist-set-setting-and-structure-in-psychedelic-therapy-spaces/",
      blurb:
        "Treats a therapy room as part of treatment, not decoration: sensory load, feeling safe, trauma and how care is delivered.",
    },
    {
      title: "Why Does Music Hit Different When You’re High?",
      href: "https://www.fatnugsmag.com/ask-a-neuroscientist-the-neuroscience-of-cannabis-and-sound/",
      blurb:
        "Uses a familiar experience to connect hearing, reward, timing, movement, attention, memory and cannabis effects, without pretending one brain mechanism explains it all.",
    },
  ],
  clr: [
    {
      title: "Equity Program Outcomes in State Cannabis Markets",
      href: "https://cannabislaw.report/r-n-collins-equity-program-outcomes-in-state-cannabis-markets-an-audit-and-oversight-report/",
      blurb:
        "Tests whether social-equity cannabis programs in five states led to lasting ownership, separating licenses awarded from businesses opened, revenue earned, money raised and public funds spent. The question: did the people the programs promised to help actually benefit?",
    },
    {
      title: "Digital, AI, and Psychedelic Convergence",
      href: "https://cannabislaw.report/rn-williams-series-2-no-1-of-14-articles-digital-ai-and-psychedelic-convergence-what-this-means-for-regulators/",
      blurb:
        "Looks at a product that is a drug, a device, software and an AI service at once. It follows product classification, health data, adaptive trials and post-market rules to show where no single regulator covers it.",
    },
    {
      title: "Designing Inspector-General Functions for Emerging Drug Agencies",
      href: "https://cannabislaw.report/rn-collins-series-2-no-19-designing-inspector-general-functions-for-emerging-drug-agencies/",
      blurb:
        "Compares the federal Inspector General model with documented failures at new cannabis agencies, and turns that into recommendations for new drug regulators, grounded in statutes and audits.",
    },
    {
      title: "The Economics of Regulated Psilocybin",
      href: "https://cannabislaw.report/rn-collins-series-2-no-14-the-economics-of-regulated-psilocybin-financial-viability-equity-mandates-and-the-sustainability-of-state-service-center-programs-cannabis-law-report-audit-style-rep/",
      blurb:
        "Builds a cost model for a typical psilocybin service center and tests whether safety rules, equity pricing, staffing and public funding can all work at real market scale. It stress-tests my own policy recommendations against the numbers.",
    },
    {
      title: "Compliance Review of Oregon's Psilocybin Licensing System",
      href: "https://cannabislaw.report/rn-collins-series-2-no-16-compliance-review-of-oregons-psilocybin-licensing-system/",
      blurb:
        "An audit-style review of licensing, market health, training oversight, lab concentration, geographic access, disability lawsuits and rulemaking, turning scattered public records into findings and recommendations.",
    },
    {
      title: "Constitutional Challenges to Cannabis Licensing Schemes",
      href: "https://cannabislaw.report/r-n-collins-constitutional-challenges-to-cannabis-licensing-schemes/",
      blurb:
        "Maps the constitutional challenges facing state licensing: the dormant Commerce Clause, the First Amendment, labor preemption, equal protection and due process. Then it shows what they mean for residency rules, equity programs, labor-peace conditions and hearings.",
    },
  ],
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
