import { DiscoveryBrowser } from "../../components/discovery-browser";
import { PreviewGrid } from "../../components/preview-grid";
import { discoveryItems } from "../../lib/discovery";
import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";
import {
  categoriesFor,
  excludedFromIndex,
  shelfCounts,
  shelfGeneratedAt,
  shippedBuilds,
  statusLabels,
  studioBuilds,
  undescribed,
} from "../../lib/builds";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Build index",
  description:
    "Every reachable build in the estate, generated from the GitHub and Vercel APIs rather than kept by hand: what each one addresses, what it does, what it runs on, and its honest status.",
  alternates: { canonical: "/builds" },
};

const generated = new Date(shelfGeneratedAt).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const shippedCategories = categoriesFor(shippedBuilds);
const studioCategories = categoriesFor(studioBuilds);

export default function BuildIndexPage() {
  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">Build index · {shippedBuilds.length} shipped · {studioBuilds.length} in the studio · {generated}</p>
        <h1>
          Three shelves.
          <br />
          <em>One URL each.</em>
        </h1>
        <p>
          Shipped is one project and one production URL. Studio is a real prototype, prelaunch,
          proposal, or paused build, on its own address. Hold is tests, failed previews, duplicates,
          signposts, and client deploys. Hold is not linked from this page, and client work is not named.
        </p>
      </header>
      <PreviewGrid />
<DiscoveryBrowser items={discoveryItems().filter(item => ["Build"].includes(item.kind))} title="Find a tool or working system" />

      <section className="canonicalSection shell" aria-labelledby="method">
        <div className="canonicalSplit">
          <p className="eyebrow">How to read it</p>
          <div>
            <h2 id="method">Status is the part worth trusting.</h2>
            <p className="bigcopy">
              Status lines repeat what each build says about itself: a sweep date, a founding
              cohort still forming, a lab that is not legal advice, or a public page that has
              not released its pieces.
            </p>
            <p>
              Where a build reports its own health — the monitors publish their last successful sweep
              and a staleness flag — the status line here repeats what the build says about itself,
              including when that is &ldquo;overdue&rdquo;. Where a build is thin, it is described as
              thin. Nothing here is written from a meta description.
            </p>
            <p className="indexProvenance">
              Assigned {generated} from {shelfCounts.projects} live Vercel projects. {shelfCounts.shipped}{" "}
              are shipped, {shelfCounts.studio} are in the studio, and {shelfCounts.hold} are on hold.
              {shelfCounts.cut} probe and preview projects are marked for removal and are not linked.
              The Netherlands field kit stays deployed while its build is repaired. Refresh the shelves
              with <code>node scripts/assign-shelves.mjs</code>.
            </p>
          </div>
        </div>
      </section>

      {undescribed.length > 0 && (
        <section className="canonicalSection shell" aria-labelledby="undescribed">
          <div className="indexGap">
            <h2 id="undescribed">Deployed, not yet written up</h2>
            <p>
              The regeneration script found these and there is no write-up for them yet. They are
              shown as a gap rather than published with an empty description.
            </p>
            <ul>
              {undescribed.map((project) => (
                <li key={project.name}>{project.name}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <nav className="indexJump shell" aria-label="Shipped categories">
        {shippedCategories.map((category) => (
          <a href={`#${category.id}`} key={category.id}>
            <span>{category.builds.length}</span>
            {category.title}
          </a>
        ))}
      </nav>

      <div className="indexBody shell">
        <p className="eyebrow">Shipped</p>
        {shippedCategories.map((category) => (
          <section className="indexCategory" id={category.id} key={category.id}>
            <div className="indexCategoryHead">
              <h2>{category.title}</h2>
              <p>{category.blurb}</p>
              <p className="eyebrow">
                {category.builds.length} {category.builds.length === 1 ? "build" : "builds"}
              </p>
            </div>

            <div className="indexList">
              {category.builds.map((build) => (
                <article className="indexEntry" key={build.repo}>
                  <div className="indexEntryHead">
                    <h3>{build.title}</h3>
                    <p className={`indexStatus indexStatus--${build.statusKind}`}>
                      <span className="indexStatusTag">{statusLabels[build.statusKind]}</span>
                      {build.status}
                    </p>
                  </div>

                  <div className="indexEntryBody">
                    <p>
                      <b>The problem.</b> {build.problem}
                    </p>
                    <p>
                      <b>What it does.</b> {build.does}
                    </p>
                    <p>
                      <b>Built on.</b> {build.builtOn}
                    </p>
                    {build.limits && (
                      <p className="indexLimits">
                        <b>What it does not establish.</b> {build.limits}
                      </p>
                    )}
                    {build.linkHeld && <p className="indexHeld">{build.linkHeld}</p>}
                    <div className="indexActions">
                      <Link href={`/builds/${build.repo}`}>
                        See it running <span aria-hidden="true">→</span>
                      </Link>
                      {!build.linkHeld && (
                        <a href={build.live} target="_blank" rel="noreferrer">
                          Open the build <span aria-hidden="true">↗</span>
                        </a>
                      )}
                      {build.caseStudy && (
                        <Link href={`/work/${build.caseStudy}`}>
                          Read the case study <span aria-hidden="true">→</span>
                        </Link>
                      )}
                      {build.repoUrl && (
                        <a href={build.repoUrl} target="_blank" rel="noreferrer">
                          GitHub <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="indexBody shell" id="studio">
        <p className="eyebrow">Studio</p>
        <h2>Real prototypes. No probe addresses.</h2>
        {studioCategories.map((category) => (
          <section className="indexCategory" id={`studio-${category.id}`} key={category.id}>
            <div className="indexCategoryHead">
              <h2>{category.title}</h2>
              <p>{category.blurb}</p>
              <p className="eyebrow">
                {category.builds.length} {category.builds.length === 1 ? "build" : "builds"}
              </p>
            </div>
            <div className="indexList">
              {category.builds.map((build) => (
                <article className="indexEntry" key={build.repo}>
                  <div className="indexEntryHead">
                    <h3>{build.title}</h3>
                    <p className={`indexStatus indexStatus--${build.statusKind}`}>
                      <span className="indexStatusTag">{statusLabels[build.statusKind]}</span>
                      {build.status}
                    </p>
                  </div>
                  <div className="indexEntryBody">
                    <p>
                      <b>The problem.</b> {build.problem}
                    </p>
                    <p>
                      <b>What it does.</b> {build.does}
                    </p>
                    <p>
                      <b>Built on.</b> {build.builtOn}
                    </p>
                    {build.limits && (
                      <p className="indexLimits">
                        <b>What it does not establish.</b> {build.limits}
                      </p>
                    )}
                    <div className="indexActions">
                      <Link href={`/builds/${build.repo}`}>
                        See it running <span aria-hidden="true">→</span>
                      </Link>
                      {!build.linkHeld && (
                        <a href={build.live} target="_blank" rel="noreferrer">
                          Open the build <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="canonicalSection shell" aria-labelledby="held-back">
        <div className="canonicalSplit">
          <p className="eyebrow">Held back</p>
          <div>
            <h2 id="held-back">What is deliberately not here.</h2>
            <p className="bigcopy">
              A complete index is only honest if it says where it stops. These deployments exist and
              are kept off the index on purpose.
            </p>
            <dl className="indexExcluded">
              {excludedFromIndex.map((entry) => (
                <div key={entry.repo}>
                  <dt>{entry.repo}</dt>
                  <dd>{entry.reason}</dd>
                </div>
              ))}
            </dl>
            <p>
              Separately, a number of client engagements, private workspaces and credential-gated
              deployments are excluded by name in <code>data/exclusions.json</code> and are not
              identified anywhere on this site. The regeneration script reads that file, so an
              excluded build cannot reappear by being forgotten about.
            </p>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
