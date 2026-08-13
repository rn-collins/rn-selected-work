export type BuildCollection = {
  id: string;
  number: string;
  title: string;
  description: string;
  slugs: string[];
};

// Every Build Atlas entry has one primary home. Related institutional work may
// also be surfaced in the institutional section without duplicating its number.
export const buildCollections: BuildCollection[] = [
  {
    id: "governance",
    number: "A",
    title: "Governance, institutions + public systems",
    description:
      "Frameworks, assessments, institutional proposals, and infrastructure for governing technology, environments, organizations, and public life.",
    slugs: [
      "sovereign-stack",
      "gapi",
      "narch",
      "sport-nsag",
      "womens-neuro-health",
      "ai-for-developing-brains",
      "cannabis-healthcare-impact-assessment",
      "creator-rights-framework",
    ],
  },
  {
    id: "intelligence",
    number: "B",
    title: "Decision intelligence + monitoring",
    description:
      "Working systems that organize changing evidence, regulation, markets, and organizational signals into decisions people can actually make.",
    slugs: [
      "inflection-radar",
      "transform-drug-market-transition-observatory",
      "psych-ops-intel",
      "startup-legal-risk-monitor",
      "burgermeister-expansion-intel",
      "source-integrity-audit",
      "ai-build-budget-calculator",
    ],
  },
  {
    id: "knowledge",
    number: "C",
    title: "Evidence + knowledge infrastructure",
    description:
      "Libraries, atlases, directories, retrieval systems, and evidence-governance tools that make complex fields navigable without erasing provenance or uncertainty.",
    slugs: [
      "psychedelic-law-library",
      "eolpc-knowledge-system",
      "entheogen-atlas",
      "psych-ops-directory",
      "destigmatization-toolkit",
      "evidence-studio",
    ],
  },
  {
    id: "education",
    number: "D",
    title: "Education + capability building",
    description:
      "Courses, studios, public explainers, and participation systems that help people understand a field, develop judgment, and take a responsible next step.",
    slugs: [
      "zero-to-frontier",
      "regac",
      "set-for-life",
      "nervous-system-studio",
      "psychonaut-bookworm",
    ],
  },
  {
    id: "practice",
    number: "E",
    title: "Independent practice + implementation",
    description:
      "Practice platforms, operating systems, and communities for turning research and strategy into sustained, testable work.",
    slugs: ["aloha-ai", "one-person-firm-os", "aloha-build-club"],
  },
];

export const institutionalBuildSlugs = [
  "sovereign-stack",
  "gapi",
  "narch",
  "sport-nsag",
  "womens-neuro-health",
  "ai-for-developing-brains",
  "cannabis-healthcare-impact-assessment",
  "nervous-system-studio",
  "creator-rights-framework",
];
