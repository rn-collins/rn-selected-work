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
  title: "Everything I’ve built",
  description:
    "Every live tool, guide and tracker RN Collins has built: what each one does, who it’s for and its current status.",
  alternates: { canonical: "/builds" },
};

const generated = new Date(shelfGeneratedAt).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

// Copy audit (Nov 27, 2026): on this index the "Built on" line is cut where it was only a tech-stack
// detail. Each project page (/builds/[repo]) still shows it.
const builtOnCutFromIndex = new Set([
  "rn-ask-a-neuroscientist",
  "set-for-life",
  "flexjd-site",
  "tech-from-here-netherlands-field-kit",
  "htw-field-kit",
  "institutions-of-one-reader",
  "ownership-platform",
  "tech-from-here-fashion-week",
  "aloha-ai-consulting",
  "bm-intel",
  "creator-brand-evidence",
  "nsag-site",
  "aloha-culture-monitor",
  "nervous-system-studio",
  "aiapc-site",
  "clerking-site",
  "tech-from-here-mjbizcon",
  "future-professional-profiles",
  "sovereign-stack",
]);

const shippedCategories = categoriesFor(shippedBuilds);
const studioCategories = categoriesFor(studioBuilds);

export default function BuildIndexPage() {
  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">{shippedBuilds.length} live · {studioBuilds.length} in progress · updated {generated}</p>
        <h1>
          Everything I’ve built,
          <br />
          <em>with its real status.</em>
        </h1>
        <p>
          Live projects come first. Prototypes, proposals and paused work follow. Tests, duplicates
          and client work aren’t listed.
        </p>
      </header>
      <PreviewGrid />
<DiscoveryBrowser items={discoveryItems().filter(item => ["Build"].includes(item.kind))} title="Find a tool or working system" />

      <section className="canonicalSection shell" aria-labelledby="method">
        <div className="canonicalSplit">
          <p className="eyebrow">About the status lines</p>
          <div>
            <h2 id="method">Each status line comes from the tool itself.</h2>
            <p className="bigcopy">
              Each status repeats what the tool reports about itself: the date of its last check, a
              group still forming, or a page with nothing released yet.
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
        <p className="eyebrow">Live</p>
        {shippedCategories.map((category) => (
          <section className="indexCategory" id={category.id} key={category.id}>
            <div className="indexCategoryHead">
              <h2>{category.title}</h2>
              <p>{category.blurb}</p>
              <p className="eyebrow">
                {category.builds.length} {category.builds.length === 1 ? "project" : "projects"}
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
                    {!builtOnCutFromIndex.has(build.repo) && (
                      <p>
                        <b>Built on.</b> {build.builtOn}
                      </p>
                    )}
                    {build.limits && (
                      <p className="indexLimits">
                        <b>Limits.</b> {build.limits}
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
        <p className="eyebrow">In progress</p>
        <h2>Prototypes and paused projects</h2>
        {studioCategories.map((category) => (
          <section className="indexCategory" id={`studio-${category.id}`} key={category.id}>
            <div className="indexCategoryHead">
              <h2>{category.title}</h2>
              <p>{category.blurb}</p>
              <p className="eyebrow">
                {category.builds.length} {category.builds.length === 1 ? "project" : "projects"}
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
                    {!builtOnCutFromIndex.has(build.repo) && (
                      <p>
                        <b>Built on.</b> {build.builtOn}
                      </p>
                    )}
                    {build.limits && (
                      <p className="indexLimits">
                        <b>Limits.</b> {build.limits}
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
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
