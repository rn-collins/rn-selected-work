import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";
import { buildByCaseStudy } from "../../lib/builds";
import { projects } from "../../lib/portfolio";
import { getPublicBuild } from "../../lib/public-builds";

export const metadata: Metadata = {
  alternates: { canonical: "/work" },
  title: "Selected Work",
  description:
    "Case studies by RN Collins: the question, the reasoning, and what was made. Open a live build from the case study when one is public. The full build inventory is the build index.",
};

const appliedSlugs = ["narch", "womens-neuro-health"] as const;
const appliedCases = appliedSlugs.map((slug) => {
  const build = getPublicBuild(slug);
  if (!build) throw new Error(`Missing case study: ${slug}`);
  return build;
});

export default function Page() {
  return <CanonicalPage>
    <header className="canonicalSubhero shell">
      <p className="eyebrow">Selected Work</p>
      <h1>See the problem.<br/><em>See what I made.</em></h1>
      <p>
        These are the case studies. Each one keeps the question, the reasoning, and what was made.
        The full list of public builds, category by category, is the build index.
      </p>
      <div className="canonicalActions">
        <Link className="button" href="#primary-cases">Start with the case studies →</Link>
        <Link className="button secondary" href="/builds">Open the build index →</Link>
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
    <section id="applied-cases" className="canonicalSection shell" aria-labelledby="applied-cases-title">
      <div className="canonicalSectionHead">
        <div><p className="eyebrow">Applied case studies</p><h2 id="applied-cases-title">Workbenches with a stated limit.</h2></div>
        <p>The live workbench opens from the case study. The limit stays on the card.</p>
      </div>
      <div className="canonicalCards">{appliedCases.map(build => {
        const limits = buildByCaseStudy.get(build.slug)?.limits;
        return <article key={build.slug}>
          <p className="eyebrow">{build.category} · {build.status}</p>
          <h2>{build.title}</h2>
          <p>{build.purpose}</p>
          {limits && <p>{limits}</p>}
          <div className="atlasActions">
            <Link href={`/work/${build.slug}`}>Read the case study →</Link>
            {build.promoteLive !== false && build.live && (
              <a href={build.live} target="_blank" rel="noreferrer">Open the live workbench ↗</a>
            )}
          </div>
        </article>;
      })}</div>
    </section>
    <section className="canonicalBand"><div className="shell">
      <div className="canonicalSectionHead">
        <div><p className="eyebrow">Every public build</p><h2>The inventory is the build index.</h2></div>
        <p>Tools, systems, resources, courses, and experiments, one record each. Private work stays off that index.</p>
      </div>
      <div className="canonicalActions">
        <Link className="button" href="/builds">Open the build index →</Link>
        <Link className="button secondary" href="/writing">Published writing →</Link>
        <Link className="button secondary" href="/ideas">Concept gallery →</Link>
        <Link className="button secondary" href="/initiatives">Initiatives →</Link>
      </div>
    </div></section>
  </CanonicalPage>;
}
