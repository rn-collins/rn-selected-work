import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";
import { projects } from "../../lib/portfolio";
import { builds, inventoryGeneratedAt, populatedCategories } from "../../lib/builds";

export const metadata: Metadata = {
  alternates: { canonical: "/work" },
  title: "Selected Work",
  description: "Explore RN Collins's case studies and public work gallery: research, systems, frameworks, resources, proposals, and working builds.",
};

export default function Page() {
  const inventoryDate = new Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric", year: "numeric", timeZone: "UTC",
  }).format(new Date(inventoryGeneratedAt));

  return <CanonicalPage>
    <header className="canonicalSubhero shell">
      <p className="eyebrow">Selected Work</p>
      <h1>See the problem.<br/><em>See what I made.</em></h1>
      <p>Explore the work across research, writing, systems, and independent practice. Each project keeps its own home; this gallery connects the question, the work, and its current status.</p>
      <div className="canonicalActions">
        <Link className="button" href="#primary-cases">Start with the case studies →</Link>
        <Link className="button secondary" href="#build-atlas">Browse the public work gallery →</Link>
        <Link className="button secondary" href="/writing">Explore published writing →</Link>
      </div>
    </header>
    <section id="primary-cases" className="canonicalSection shell">
      <div className="canonicalSectionHead">
        <div><p className="eyebrow">Primary case studies</p><h2>Read the reasoning,<br/>not just the result.</h2></div>
        <p>{projects.length} substantial project records.</p>
      </div>
      <div className="canonicalCards">{projects.map(project => <article key={project.slug}>
        <p className="eyebrow">{project.kind} · {project.status}</p>
        <h2>{project.shortTitle}</h2><p>{project.thesis}</p>
        <div className="atlasActions">
          <Link href={`/work/${project.slug}`}>Read what RN saw and built →</Link>
          {project.live && <a href={project.live} target="_blank" rel="noreferrer">Open live build ↗</a>}
        </div>
      </article>)}</div>
    </section>
    <section id="build-atlas" className="canonicalBand">
      <div className="shell">
        <div className="canonicalSectionHead">
          <div><p className="eyebrow">Public work gallery</p><h2>Tools, systems, resources,<br/>courses, and experiments.</h2></div>
          <p>{builds.length} entries from the existing public build inventory.</p>
        </div>
        <p className="rosterNote">Browse the individual works below, including proposals, prototypes and maintained resources. Each card retains the status from its project record and opens a fuller account with its own site link. The inventory was generated on {inventoryDate}; it is a dated record, not a claim that every deployment was checked today. Private work and excluded projects remain outside this public gallery.</p>
        <nav className="workCollectionLinks workCategoryLinks" aria-label="Work gallery categories">
          {populatedCategories.map(category => <Link href={`#gallery-${category.id}`} key={category.id}>
            {category.title}<span>{category.builds.length} entries</span>
          </Link>)}
        </nav>
        <div className="canonicalActions"><Link className="button" href="/builds">Read the detailed build index →</Link></div>
      </div>
    </section>
    {populatedCategories.map(category => <section id={`gallery-${category.id}`} className="canonicalSection shell" key={category.id} aria-labelledby={`gallery-title-${category.id}`}>
      <div className="canonicalSectionHead">
        <div><p className="eyebrow">{category.builds.length} entries</p><h2 id={`gallery-title-${category.id}`}>{category.title}</h2></div>
        <p>{category.blurb}</p>
      </div>
      <div className="canonicalCards">{category.builds.map(build => <article key={build.repo}>
        <p className="eyebrow">{build.status}</p>
        <h2>{build.title}</h2>
        <p>{build.problem}</p>
        <div className="atlasActions">
          <Link href={`/builds/${build.repo}`}>Explore the work and its site →</Link>
          {!build.linkHeld && build.live && (
            <a href={build.live} target="_blank" rel="noreferrer">Open the build ↗</a>
          )}
        </div>
      </article>)}</div>
    </section>)}
    <section className="canonicalBand"><div className="shell">
      <div className="canonicalSectionHead"><div><p className="eyebrow">Across the practice</p><h2>Follow the writing and the ideas.</h2></div><p>Publications, initiatives and concepts have their own collections.</p></div>
      <div className="canonicalActions">
        <Link className="button" href="/writing">Published writing →</Link>
        <Link className="button secondary" href="/ideas">Concept gallery →</Link>
        <Link className="button secondary" href="/initiatives">Initiatives →</Link>
        <Link className="button secondary" href="/explore">Search across the portfolio →</Link>
      </div>
    </div></section>
  </CanonicalPage>;
}
