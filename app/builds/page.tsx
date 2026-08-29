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

export const metadata: Metadata = {
  title: "Build index",
  description:
    "Every reachable build in the estate, generated from the GitHub and Vercel APIs rather than kept by hand: what each one addresses, what it does, what it runs on, and its honest status.",
  alternates: { canonical: "/builds" },
};

const generated = new Date(inventoryGeneratedAt).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BuildIndexPage() {
  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">Build index · {builds.length} builds · generated {generated}</p>
        <h1>
          Everything that is
          <br />
          <em>actually running.</em>
        </h1>
        <p>
          This page is generated. A script asks GitHub what repositories exist and Vercel what is
          deployed, cross-references the two, checks that each production URL answers, and writes the
          result to a data file the page renders from. The previous version of this index was a list
          kept by hand, and a list kept by hand drifts: it had settled at 32 entries while the estate
          held more than twice that.
        </p>
      </header>

      <section className="canonicalSection shell" aria-labelledby="method">
        <div className="canonicalSplit">
          <p className="eyebrow">How to read it</p>
          <div>
            <h2 id="method">Status is the part worth trusting.</h2>
            <p className="bigcopy">
              Several of these are retired prototypes. Several are paused with their back ends
              switched off. One is a research preview with a waitlist and no released platform. Each
              says so in its own words rather than being flattened into a uniform present tense.
            </p>
            <p>
              Where a build reports its own health — the monitors publish their last successful sweep
              and a staleness flag — the status line here repeats what the build says about itself,
              including when that is &ldquo;overdue&rdquo;. Where a build is thin, it is described as
              thin. Nothing here is written from a meta description.
            </p>
            <p className="indexProvenance">
              Generated {generated} from {inventoryCounts.repositories} repositories and{" "}
              {inventoryCounts.vercelProjects} Vercel projects. {inventoryCounts.published} builds
              answered with content and are listed below. {inventoryCounts.excluded} were held back —
              client engagements, private workspaces, internal APIs, duplicate deployments and test
              projects. Regenerate with <code>node scripts/regenerate-builds.mjs</code>.
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
                          Source <span aria-hidden="true">↗</span>
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
