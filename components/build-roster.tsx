import Link from "next/link";
import { builds, statusLabels } from "../lib/builds";

/**
 * A roster of named builds, rendered from the generated inventory.
 *
 * Initiative pages used to describe their work in the abstract. This renders
 * the actual deployments instead, with the same status line the build index
 * shows, so an initiative page cannot quietly claim more than exists.
 */
export function BuildRoster({
  repos,
  heading,
  intro,
}: {
  repos: string[];
  heading: string;
  intro: string;
}) {
  const roster = repos
    .map((repo) => builds.find((build) => build.repo === repo))
    .filter((build): build is (typeof builds)[number] => Boolean(build));

  if (roster.length === 0) return null;

  return (
    <section className="canonicalSection shell" aria-labelledby="roster">
      <div className="canonicalSectionHead">
        <div>
          <p className="eyebrow">{roster.length} builds · verified reachable</p>
          <h2 id="roster">{heading}</h2>
        </div>
        <p>{intro}</p>
      </div>
      <div className="rosterList">
        {roster.map((build) => (
          <article key={build.repo}>
            <h3>{build.title}</h3>
            <p className={`indexStatus indexStatus--${build.statusKind}`}>
              <span className="indexStatusTag">{statusLabels[build.statusKind]}</span>
              {build.status}
            </p>
            <p className="rosterDoes">{build.does}</p>
            {build.linkHeld && <p className="indexHeld">{build.linkHeld}</p>}
            <div className="indexActions">
              {!build.linkHeld && (
                <a href={build.live} target="_blank" rel="noreferrer">
                  Open the build <span aria-hidden="true">↗</span>
                </a>
              )}
              {build.caseStudy && (
                <Link href={`/work/${build.caseStudy}`}>
                  Case study <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="rosterNote">
        Statuses come from the generated inventory behind the{" "}
        <Link href="/builds">complete build index</Link>, not from this page, so an
        initiative page cannot describe more than is actually deployed.
      </p>
    </section>
  );
}
