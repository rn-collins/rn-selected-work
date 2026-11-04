import { DiscoveryBrowser } from "../../components/discovery-browser";
import { discoveryItems } from "../../lib/discovery";
import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";
import {
  builds,
  excludedFromIndex,
  inventoryCounts,
  inventoryGeneratedAt,
  populatedCategories,
  statusLabels,
  undescribed,
} from "../../lib/builds";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Build index",
  description:
    "A dated public selection of RN Collins’s tools, prototypes, proposals and research builds, with project descriptions and recorded status.",
  alternates: { canonical: "/builds" },
};

const generated = new Date(inventoryGeneratedAt).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default function BuildIndexPage() {
  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">Build index · {builds.length} builds · generated {generated}</p>
        <h1>
          Explore the builds,
          <br />
          <em>and where they stand.</em>
        </h1>
        <p>
          This public selection brings together tools, research resources, prototypes and proposals.
          The inventory snapshot dates to {generated}; the descriptions are curated separately.
          A reachable page can be a prototype, a signpost or a paused project. It does not establish
          that the full product works, that its research is complete or that it was commissioned.
        </p>
      </header>
<DiscoveryBrowser items={discoveryItems().filter(item => ["Build"].includes(item.kind))} title="Find a tool or working system" />

      <section className="canonicalSection shell" aria-labelledby="method">
        <div className="canonicalSplit">
          <p className="eyebrow">How to read it</p>
          <div>
            <h2 id="method">Read the status with its limits.</h2>
            <p className="bigcopy">
              Several of these are retired prototypes. Several are paused with their back ends
              switched off. One is a research preview with a waitlist and no released platform. Each
              says so in its own words rather than being flattened into a uniform present tense.
            </p>
            <p>
              Read each status as a recorded description, not a live health check. Availability,
              background collection and publication readiness need their own dated verification.
              The wider work register also includes writing, concepts and private work beyond this index.
            </p>
            <p className="indexProvenance">
              Generated {generated} from {inventoryCounts.repositories} repositories and{" "}
              {inventoryCounts.vercelProjects} Vercel projects. {builds.length} entries are displayed below. {inventoryCounts.excluded} were held back —
              client engagements, private workspaces, internal APIs, duplicate deployments and test
              projects. These are snapshot counts, not a current census or a count of completed projects.
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
              {undescribed.map((record) => (
                <li key={record.repo}>{record.repo}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <nav className="indexJump shell" aria-label="Build categories">
        {populatedCategories.map((category) => (
          <a href={`#${category.id}`} key={category.id}>
            <span>{category.builds.length}</span>
            {category.title}
          </a>
        ))}
      </nav>

      <div className="indexBody shell">
        {populatedCategories.map((category) => (
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
                        Read the build record <span aria-hidden="true">→</span>
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

      <section className="canonicalSection shell" aria-labelledby="held-back">
        <div className="canonicalSplit">
          <p className="eyebrow">Held back</p>
          <div>
            <h2 id="held-back">What is deliberately not here.</h2>
            <p className="bigcopy">
              This public selection has limits. The snapshot records the following exclusions;
              it does not establish their current deployment state.
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
