import type { Metadata } from "next";
import Link from "next/link";
import { projects, writing } from "../lib/portfolio";
import { builds, institutionalBuilds, populatedCategories } from "../lib/builds";
import { publicationArchive, publicationCounts } from "../lib/publication-archive";

export const metadata: Metadata = {
  title: "RN Selected Work",
  description:
    "Questions too messy for a single discipline — research, institutional frameworks, working systems, public resources, and published analysis by Rayven-Nikkita (RN) Collins.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Portfolio navigation">
        <Link className="mark" href="/">
          RN<span>↗</span>
        </Link>
        <div className="navlinks">
          <a href="#work">Work</a>
          <Link href="/builds">Build index</Link>
          <a href="#writing">Writing</a>
        </div>
      </nav>
      <header className="hero shell">
        <p className="eyebrow">Selected work · Rayven-Nikkita (RN) Collins · 2026</p>
        <h1>
          I work on questions
          <br />
          too messy for a<br />
          <em>single discipline.</em>
        </h1>
        <div className="herofoot">
          <p>
            Researcher, systems designer, builder, neuroscientist, and law
            student based on Oʻahu.
          </p>
          <p className="lede">
            Selected research, institutional frameworks, working systems, public resources,
            and published analysis across law, science, technology, governance,
            education, and Hawaiʻi.
          </p>
        </div>
      </header>
      <section className="method">
        <div className="shell methodgrid">
          <p className="eyebrow">How I work</p>
          <div className="steps">
            <span>
              <b>01</b>Study the system
            </span>
            <i>→</i>
            <span>
              <b>02</b>Find the hidden constraint
            </span>
            <i>→</i>
            <span>
              <b>03</b>Make it concrete
            </span>
            <i>→</i>
            <span>
              <b>04</b>Build what can be tested
            </span>
          </div>
        </div>
      </section>
      <section id="work" className="work shell">
        <div className="sectionhead">
          <p className="eyebrow">Builds</p>
          <p>Read the work. Open the build. Follow the evidence.</p>
        </div>
        <div className="projects">
          {projects.map((p) => (
            <article className="project" key={p.slug}>
              <div className="projecttop">
                <span className="num">{p.number}</span>
                <span className="kind">{p.kind}</span>
              </div>
              <h2>{p.title}</h2>
              <p className="status">{p.status}</p>
              <p className="thesis">{p.thesis}</p>
              <p className="copy">{p.summary}</p>
              <div className="projectfoot">
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="projectActions" aria-label={`${p.shortTitle} links`}>
                  <Link href={`/work/${p.slug}`}>
                    Read case study <span>→</span>
                  </Link>
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Open live build <span>↗</span>
                    </a>
                  ) : (
                    <span className="availability">Case study available · system private</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="build-atlas" className="atlas shell">
        <div className="sectionhead">
          <p className="eyebrow">Complete build index</p>
          <p>
            {builds.length} builds, generated from live data rather than kept by hand.
          </p>
        </div>
        <div className="indexSummaryIntro">
          <p className="bigcopy">
            The index behind this section is generated. A script asks GitHub what
            repositories exist and Vercel what is deployed, checks that each production
            URL answers, and writes the result to a data file the pages render from.
            The previous hand-maintained list had drifted to 32 entries.
          </p>
          <p>
            Each entry states the problem it addresses, what it does, what it runs on,
            and an honest status. Retired prototypes are listed as retired, paused work
            as paused, and thin work as thin. Client engagements, private workspaces and
            credential-gated deployments are excluded on purpose, and the index says so.
          </p>
        </div>
        <div className="indexSummaryGrid">
          {populatedCategories.map((category) => (
            <article key={category.id}>
              <p className="eyebrow">{category.builds.length} builds</p>
              <h3>{category.title}</h3>
              <p>{category.blurb}</p>
              <Link href={`/builds#${category.id}`}>
                Open this section <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
        <div className="indexSummaryFoot">
          <Link className="button" href="/builds">
            Read the complete build index <span aria-hidden="true">→</span>
          </Link>
          <p>
            Six of these carry a longer case study, linked from their entry in the index.
          </p>
        </div>
      </section>
      <section className="advisory">
        <div className="shell advisorygrid">
          <div>
            <p className="eyebrow">Frameworks + institutional work</p>
            <h2>
              Original systems,
              <br />
              made operational.
            </h2>
          </div>
          <div className="advisoryitems">
            <article>
              <h3>Neurocognitive Systems Advisory Group</h3>
              <p>
                RN's research-led institutional-design practice and the home of
                Nervous-System-Aware Governance: an original framework for
                identifying, documenting, measuring, and governing how
                institutional policies, technologies, procedures, language,
                environments, and power structures shape human cognitive and
                physiological conditions.
              </p>
              <Link href="/work/neurocognitive-systems-advisory-group">
                Explore NSAG's framework and systems →
              </Link>
              <small>
                NSAG is an original body of work with its own framework, evidence base,
                assessments, intelligence products, education, advisory practice,
                and applied implementations.
              </small>
            </article>
            <article>
              <h3>Applied governance systems</h3>
              <p>
                NSAG’s institutional work is not one website. It extends into
                governance infrastructure, assessments, neuroarchitecture,
                sport, women’s health, developing brains, health education,
                creator rights, and applied nervous-system design.
              </p>
              <div className="institutionalLinks">
                {institutionalBuilds.map((build) =>
                  build.caseStudy ? (
                    <Link href={`/work/${build.caseStudy}`} key={build.repo}>
                      {build.title} →
                    </Link>
                  ) : (
                    <Link href={`/builds#${build.category}`} key={build.repo}>
                      {build.title} →
                    </Link>
                  ),
                )}
              </div>
              <small>
                These {institutionalBuilds.length} builds are cross-listed here because they
                operationalize institutional or governance questions; each keeps its primary
                home in the generated build index.
              </small>
            </article>
            <article>
              <h3>Inflection Radar</h3>
              <p>
                An interactive public-source decision room translating
                organizational research into an explorable proposal, executive
                brief, report, and meeting instrument.
              </p>
              <div className="actionrow">
                <Link href="/work/inflection-radar">Read case study →</Link>
                <a href="https://inflection-radar-real-chemistry.vercel.app/" target="_blank" rel="noreferrer">
                  Open decision room ↗
                </a>
              </div>
            </article>
            <article>
              <h3>Aloha Intelligence Institute</h3>
              <p>
                An independently developed institutional-design proposal
                examining how a Hawaiʻi-focused AI institute could move from
                legislative concept toward a defined mandate, governance model,
                stakeholder process, and implementable launch.
              </p>
              <div className="actionrow">
                <Link href="/advisory/aloha-intelligence-institute">
                  Read case study →
                </Link>
                <a
                  href="/documents/aloha-intelligence-institute-decision-brief.pdf"
                  download
                >
                  Download brief ↓
                </a>
              </div>
              <small>
                Prepared for consideration by Senator Stanley Chang's office.
                Not commissioned by or produced on behalf of the State of
                Hawaiʻi.
              </small>
            </article>
          </div>
        </div>
      </section>
      <section id="writing" className="writing shell">
        <div className="sectionhead">
          <p className="eyebrow">Published work</p>
          <p>Selected close reads, plus a complete archive of {publicationArchive.length} publication records.</p>
        </div>
        <div className="articlecols">
          <Publication
            title="Fat Nugs Magazine · Ask a Neuroscientist"
            items={writing.fnm}
          />
          <Publication title="Cannabis Law Report" items={writing.clr} />
        </div>
        <div className="archiveCallout">
          <div>
            <p className="eyebrow">Complete editorial archive</p>
            <h2>Every located byline, not only the featured six.</h2>
          </div>
          <div>
            <p>
              {publicationCounts["Fat Nugs Magazine"]} Fat Nugs Magazine articles · {publicationCounts["Cannabis Law Report"]} Cannabis Law Report publication records · {publicationCounts["Cannabis Law Journal"]} Cannabis Law Journal editions.
            </p>
            <p className="archiveNote">
              Searched under RN Collins, Rayven-Nikkita Collins, Nikkita Collins,
              and RN Williams. Duplicate and republished URLs are labeled rather
              than silently counted as new works.
            </p>
            <Link className="button" href="/writing">Browse the complete archive →</Link>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="shell footergrid">
          <div>
            <p className="eyebrow">Work with RN</p>
            <h2>
              What system are you
              <br />
              trying to understand
              <br />
              <em>or change?</em>
            </h2>
          </div>
          <div className="contact">
            <p>
              Rayven-Nikkita (RN) Collins
              <br />
              Honolulu, Hawaiʻi
            </p>
            <a
              href="https://www.linkedin.com/in/rn-collins"
              target="_blank"
              rel="noreferrer"
            >
              Continue on LinkedIn ↗
            </a>
            <p className="note">
              Explore the research, systems, and public work here, then begin with
              the question or institutional problem that matters most.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Publication({
  title,
  items,
}: {
  title: string;
  items: { title: string; href: string; blurb: string }[];
}) {
  return (
    <section className="articlecolumn">
      <h2>{title}</h2>
      {items.map((item) => (
        <article className="articleitem" key={item.href}>
          <h3>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.title} ↗
            </a>
          </h3>
          <p>{item.blurb}</p>
        </article>
      ))}
    </section>
  );
}
