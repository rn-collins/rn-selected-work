import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neurocognitive Systems Advisory Group",
  description:
    "The NSAG case study: the nervous-system-aware governance framework, its assessment modules, and the boundary between what it establishes and what it proposes.",
  alternates: { canonical: "/work/neurocognitive-systems-advisory-group" },
};

const modules = [
  "Trauma-Informed Legal Space",
  "AI Legal Navigation",
  "Psychedelic Harm Reduction Governance",
  "Cannabis Public Health Infrastructure",
  "Biophilic Civic Infrastructure",
  "Ethical Civic Sponsorship",
  "Conscious Cities",
  "Burnout Recovery Infrastructure",
  "Cannabis Healthcare Visibility",
  "Healthcare Built Environment",
  "Medical Technology and Evidence Standards",
  "Nervous-System-Aware Education Systems",
  "Traditional and Complementary Medicine Governance",
  "Space Governance and Interplanetary Jurisdiction",
  "Isolation, Confinement, and Extreme-Environment Governance",
].map((title, index) => ({
  title,
  href: `https://nsag-m${index + 1}.vercel.app/`,
}));

const surfaces = [
  ["Framework Foundation", "https://nsag-site.vercel.app/framework"],
  ["Advisory practice", "https://nsag-site.vercel.app/advisory"],
  ["Intelligence products", "https://nsag-site.vercel.app/intelligence"],
  ["Evidence Library", "https://nsag-site.vercel.app/evidence"],
  ["Continuing Education", "https://nsag-site.vercel.app/ce"],
  ["NSAG Brief", "https://nsag-site.vercel.app/brief"],
  ["Governance Insights", "https://nsag-site.vercel.app/insights"],
  ["Experience model", "https://nsag-site.vercel.app/experience"],
];

export default function NSAGCaseStudy() {
  return (
    <main>
      <nav className="nav shell" aria-label="Case study navigation">
        <Link className="mark" href="/">RN<span>↗</span></Link>
        <div className="navlinks"><Link href="/">Selected work</Link><a href="https://nsag-site.vercel.app/" target="_blank" rel="noreferrer">Open NSAG ↗</a></div>
      </nav>
      <header className="recipientHero shell">
        <p className="eyebrow">Original framework · institutional-design practice · active system</p>
        <h1>Neurocognitive<br /><em>Systems Advisory</em><br />Group.</h1>
        <p>
          The home of Nervous-System-Aware Governance: a research-led framework
          for seeing and governing how institutions shape the cognitive and
          physiological conditions of the people inside them.
        </p>
      </header>

      <section className="fit">
        <div className="shell fitgrid">
          <p className="eyebrow">The governing proposition</p>
          <div>
            <p className="bigcopy">Institutions already regulate nervous-system states. NSAG makes those effects visible, documentable, measurable, and governable.</p>
            <p>
              Policies, technologies, procedures, language, built environments,
              cognitive load, relationships, identity, agency, and power are not
              neutral administrative details. They create conditions of threat,
              safety, stress, trust, recovery, attention, and participation.
              NSAG translates that premise into governance criteria and
              institutional action.
            </p>
          </div>
        </div>
      </section>

      <section className="work shell">
        <div className="sectionhead"><p className="eyebrow">What RN built</p><p>A modular practice—not a consultancy placeholder.</p></div>
        <div className="featurecards">
          <article><span>01</span><h2>Framework</h2><p>Sixteen principles across foundation, mechanisms, social infrastructure, and governance accountability.</p></article>
          <article><span>02</span><h2>Assessment system</h2><p>Fifteen sector-specific modules using scenarios, six governance dimensions, evidence, maturity tiers, recommendations, radar results, and reports.</p></article>
          <article><span>03</span><h2>Institutional practice</h2><p>Governance assessments, gap analyses, written audits, action plans, workshops, profiles, and continuing advisory.</p></article>
          <article><span>04</span><h2>Intelligence</h2><p>NSAG Compass, Brief, Index, and Profile connect monitoring, research synthesis, benchmarking, and institution-specific decisions.</p></article>
          <article><span>05</span><h2>Education</h2><p>A fifteen-session continuing-education curriculum spanning legal, medical, nursing, psychology, social-work, and public-health audiences.</p></article>
          <article><span>06</span><h2>Applied systems</h2><p>Sport NSAG demonstrates how the framework extends into scheduling, travel, recovery, cognition, culture, and athlete-welfare governance.</p></article>
        </div>
      </section>

      <section className="writing shell">
        <div className="sectionhead"><p className="eyebrow">Fifteen governance domains</p><p>One framework, tested across different institutional conditions.</p></div>
        <div className="miniarticles">
          {modules.map((module, index) => (
            <article key={module.title}>
              <p className="eyebrow">M{index + 1}</p>
              <h3>
                <a href={module.href} target="_blank" rel="noreferrer">
                  {module.title} ↗
                </a>
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="advisory">
        <div className="shell advisorygrid">
          <div><p className="eyebrow">Inspect the system</p><h2>Framework,<br /><em>evidence, and use.</em></h2></div>
          <div className="advisoryitems">
            {surfaces.map(([label, href]) => <article key={href}><h3>{label}</h3><a href={href} target="_blank" rel="noreferrer">Open {label} ↗</a></article>)}
          </div>
        </div>
      </section>

      <section className="culturalystAnswer">
        <div className="shell answergrid">
          <section><p className="eyebrow">NSAG</p><p>The original governance framework and research-led institutional-design practice.</p></section>
          <section><p className="eyebrow">Aloha AI</p><p>A broader strategy and technical build practice. It may implement NSAG tools, but it does not contain or define NSAG.</p></section>
          <section><p className="eyebrow">RN Builds + Institutions of One</p><p>RN Builds is the developing public workbench. Institutions of One is a separate framework about independent capability, ownership, relationships, evidence, and portable infrastructure.</p></section>
        </div>
      </section>

      <footer className="footer"><div className="shell footergrid"><div><p className="eyebrow">Primary destination</p><h2>See the system<br /><em>in operation.</em></h2></div><div className="contact"><a href="https://nsag-site.vercel.app/" target="_blank" rel="noreferrer">Explore NSAG ↗</a><Link href="/">Return to selected work →</Link></div></div></footer>
    </main>
  );
}
