import Link from "next/link";
import { projects } from "../../../../lib/portfolio";

const selections = [
  {
    slug: "ownership-platform",
    why: "Institutions of One examines how independent capability, relationships, evidence, and intellectual assets become visible, portable, and cumulative—directly adjacent to Culturalyst's work on discoverability, connection, support, and funding.",
  },
  {
    slug: "flexjd-resource-hub",
    why: "The FlexJD Resource Hub shows RN turning fragmented institutional knowledge into maintained community infrastructure with verification, correction, privacy, and stewardship built in.",
  },
  {
    slug: "keiki-robotics",
    why: "Keiki Robotics shows RN translating a one-time Hawaiʻi technology event into a durable pathway for children, families, educators, and local organizations.",
  },
].map((item) => ({ ...item, project: projects.find((project) => project.slug === item.slug)! }));

const widerPortfolio = [
  {
    slug: "psychedelic-operations-intelligence",
    why: "A research and operations platform that turns a fragmented emerging field into a navigable regulatory, organizational, and market-intelligence system.",
  },
  {
    slug: "buechler-pacific",
    why: "An independently initiated organization-specific concept showing how RN studies a business from public information, identifies field-work friction, and makes a tailored AI workflow concrete enough to evaluate.",
  },
  {
    slug: "thorncrest-patent-first-steps",
    why: "An independently initiated organization-specific concept translating patent-intake complexity into a guided first-step experience for prospective clients.",
  },
].map((item) => ({ ...item, project: projects.find((project) => project.slug === item.slug)! }));

export default function CulturalystWork() {
  return (
    <main>
      <RecipientNav />
      <header className="recipientHero shell">
        <p className="eyebrow">02 · Selected evidence</p>
        <h1>Three ways RN<br /><em>makes systems</em><br />usable.</h1>
        <p>These projects were selected because each demonstrates a different part of the infrastructure Culturalyst is building around Hawaiʻi's creative ecosystem.</p>
      </header>
      <section className="work shell recipientWorkList">
        {selections.map(({ project, why }, index) => (
          <article className="recipientWork" key={project.slug}>
            <p className="eyebrow">0{index + 1} · {project.kind}</p>
            <h2>{project.title}</h2>
            <p className="recipientWhy">{why}</p>
            <p>{project.demonstrates}</p>
            <div className="atlasActions">
              <Link href={`/work/${project.slug}`}>Read case study →</Link>
              {project.live && <a href={project.live} target="_blank" rel="noreferrer">Open live build ↗</a>}
            </div>
          </article>
        ))}
      </section>
      <section className="fit"><div className="shell fitgrid"><p className="eyebrow">Related institutional evidence</p><div><p className="bigcopy">NSAG shows how RN develops an original institutional theory and carries it into assessments, evidence, intelligence, education, and applied systems.</p><Link className="inlineCaseLink" href="/work/neurocognitive-systems-advisory-group">Read the NSAG case study →</Link></div></div></section>
      <section className="work shell recipientWorkList">
        <div className="sectionhead">
          <p className="eyebrow">Continue through the wider portfolio</p>
          <p>Field infrastructure · organizational diligence · legal translation</p>
        </div>
        {widerPortfolio.map(({ project, why }, index) => (
          <article className="recipientWork" key={project.slug}>
            <p className="eyebrow">0{index + 4} · {project.kind}</p>
            <h2>{project.title}</h2>
            <p className="recipientWhy">{why}</p>
            <p>{project.demonstrates}</p>
            <div className="atlasActions">
              <Link href={`/work/${project.slug}`}>Read case study →</Link>
              {project.live && <a href={project.live} target="_blank" rel="noreferrer">Open live build ↗</a>}
            </div>
          </article>
        ))}
      </section>
      <RecipientFooter next="/for/culturalyst/opportunities" nextLabel="Continue to the opportunity map" />
    </main>
  );
}

function RecipientNav() {
  return <nav className="nav shell" aria-label="Culturalyst view"><Link className="mark" href="/">RN<span>↗</span></Link><div className="navlinks"><Link href="/for/culturalyst">Why RN</Link><Link href="/for/culturalyst/work">Work</Link><Link href="/for/culturalyst/opportunities">Opportunities</Link><Link href="/for/culturalyst/conversation">Conversation</Link></div></nav>;
}

function RecipientFooter({ next, nextLabel }: { next: string; nextLabel: string }) {
  return <footer className="footer"><div className="shell footergrid"><div><p className="eyebrow">Next</p><h2>From evidence<br /><em>to possibility.</em></h2></div><div className="contact"><Link href={next}>{nextLabel} →</Link><Link href="/">Explore all RN work →</Link></div></div></footer>;
}
