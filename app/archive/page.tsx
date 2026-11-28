import { pathways } from "../../lib/discovery";
import { publicSourceLink } from "../../lib/source-links";
import type { Metadata } from "next";
import Link from "next/link";
import { SocialIcons } from "../../components/social-icons";
import { projects, writing } from "../../lib/portfolio";
import { institutionalBuilds, populatedCategories, shelfCounts, shippedBuilds, studioBuilds } from "../../lib/builds";
import { journalArticles, journalName } from "../../lib/journal-articles";
import { publicationArchive, publicationCounts } from "../../lib/publication-archive";

const homeDescription =
  "RN Collins researches questions that cross law, science, technology and Hawaiʻi, then turns them into guides, tools and published writing.";

export const metadata: Metadata = {
  title: "Archive",
  description: homeDescription,
  alternates: { canonical: "/archive" },
  openGraph: { title: "Archive", description: homeDescription, url: "/archive" },
  twitter: { card: "summary_large_image", title: "Archive", description: homeDescription },
};

export default function Archive() {
  return (
    <main>
      <nav className="nav shell" aria-label="Portfolio navigation">
        <Link className="mark" href="/">
          RN<span>↗</span>
        </Link>
        <div className="navlinks">
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/work-with-me">Work with me</Link>
        </div>
      </nav>
      <header className="hero shell">
        <p className="eyebrow">Archive · RN Collins</p>
        <h1>
          Everything else
          <br />
          <em>I’ve made.</em>
        </h1>
        <div className="herofoot">
          <p className="lede">
            Every project, idea, long-running initiative, essay and source page, kept at the same addresses.
          </p>
        </div>
      </header>
      <nav className="pathways shell" aria-label="Archive sections">
        {[
          ["Every project", "/builds", "All the sites and tools I’ve built, with their real status."],
          ["Ideas in progress", "/ideas", "Proposals, research notes, prototypes and paused ideas."],
          ["Long-running projects", "/initiatives", "Aloha AI, NSAG and Institutions of One."],
          ["Essays", "/essays", "The essay series, by account."],
          ["Sources", "/sources", "The sources page behind every post."],
          ["How I work", "/practice", "How I study a problem and decide what to make."],
          ["For organizations", "/for-organizations", "How a project with me starts."],
          ["Search everything", "/explore", "Search across the whole site."],
        ].map(([t, h, d]) => <Link key={h} href={h}><h2>{t} →</h2><p>{d}</p></Link>)}
      </nav>
      <nav className="pathways shell" aria-label="Choose a path through the portfolio">{pathways.map(p=><Link key={p.href} href={p.href}><h2>{p.title} →</h2><p>{p.description}</p></Link>)}</nav>
      <section className="shell curatedSelection" aria-labelledby="curated-title"><p className="eyebrow">Three questions I keep coming back to</p><h2 id="curated-title">Start with a question.</h2><div className="pathways">
        <Link href="/work/ownership-platform"><h2>Who owns the value of independent work? →</h2><p>Institutions of One: research on who owns an independent career, plus a public site with 41 career profiles.</p></Link>
        <Link href="/writing#journal-of-biophilic-design"><h2>How does a space affect a mind? →</h2><p>Five Journal of Biophilic Design columns on how rooms, landscapes and wood affect the brain.</p></Link>
        <Link href="/explore?topic=Law+%2B+governance"><h2>What happens after a law is written? →</h2><p>Follow law and governance through published analysis, case studies, and builds.</p></Link>
      </div></section>
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
      <section className="work shell" aria-labelledby="source-desk-title">
        <div className="sectionhead">
          <p className="eyebrow">Featured: interactive guide</p>
        </div>
        <div className="projects">
          <article className="project">
            <div className="projecttop">
              <span className="num">01</span>
              <span className="kind">Science communication · my own project</span>
            </div>
            <h2 id="source-desk-title">What a Color Plate Can Tell Us</h2>
            <p className="status">Live guide · September 2026</p>
            <p className="thesis">A childhood eye appointment becomes a guide to what color plates measure, how X-linked inheritance works, and how to make color-coded information accessible.</p>
            <p className="copy">Historic test imagery with clear rights, interactive conceptual models, source and limitation notes, and a public route for questions. The demonstrations are educational, not diagnostic.</p>
            <div className="projectfoot">
              <div className="tags"><span>Science communication</span><span>Interactive education</span><span>Accessible design</span></div>
              <div className="projectActions" aria-label="Color Vision Field Guide links">
                <a href="https://color-vision-field-guide.vercel.app/" target="_blank" rel="noreferrer">Explore the field guide <span>↗</span></a>
                <a href="https://github.com/rn-collins/color-vision-field-guide" target="_blank" rel="noreferrer">Inspect sources and code <span>↗</span></a>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section id="work" className="work shell">
        <div className="sectionhead">
          <p className="eyebrow">Things I’ve built</p>
          <p>Each one opens live, with a write-up and its sources.</p>
        </div>
        <div className="projects">
          {projects.filter((p) => !/release-blocked/i.test(p.status)).map((p) => (
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
          <p className="eyebrow">Everything I’ve built</p>
          <p>
            {shippedBuilds.length} shipped builds, one URL each. {studioBuilds.length} are in the studio.
            {shelfCounts.hold} deployments are held off this site.
          </p>
        </div>
        <div className="indexSummaryIntro">
          <p className="bigcopy">
            This list updates itself. A script checks which projects exist and which are
            live, confirms each live site opens, and the pages read from that, so the
            list can’t drift the way the old hand-kept one did.
          </p>
          <p>
            Each entry says what problem it solves, what it does and its real status. Client
            work and private projects are left out.
          </p>
        </div>
        <div className="indexSummaryGrid">
          {populatedCategories.map((category) => (
            <article key={category.id}>
              <p className="eyebrow">{category.builds.length} {category.builds.length === 1 ? "project" : "projects"}</p>
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
            See every project <span aria-hidden="true">→</span>
          </Link>
          <p>
            Six have a longer case study, linked from their entry.
          </p>
        </div>
      </section>
      <section className="advisory">
        <div className="shell advisorygrid">
          <div>
            <p className="eyebrow">Work for organizations and government</p>
            <h2>Plans and tools for organizations</h2>
          </div>
          <div className="advisoryitems">
            <article>
              <h3>Neurocognitive Systems Advisory Group</h3>
              <p>
                NSAG is my research method for organizations that want to see how their
                rules, tools, language and spaces affect people’s minds and bodies. The
                public site describes 15 modules. All 15 assessments are paused, so the
                pages don’t collect answers or send reports.
              </p>
              <Link href="/work/neurocognitive-systems-advisory-group">
                Read the NSAG case study →
              </Link>
              <small>
                Advisory work with me is separate from the public pages. Some parts of
                NSAG are switched off, and the site says which.
              </small>
            </article>
            <article>
              <h3>Tools from NSAG</h3>
              <p>
                NSAG covers more than one site. Each link below opens the page for one
                tool: governance, building design, sport, women’s health, children’s
                brains, health education, creator rights and nervous-system design.
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
            </article>
            <article>
              <h3>Inflection Radar</h3>
              <p>
                A proposal I wrote on my own for reviewers deciding whether to
                approve a public-source pilot. The decision room, brief, report
                and deck make up the proposal. Nobody commissioned it, and it
                reports no pilot results.
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
                A proposal I developed on my own for how a Hawaiʻi AI institute could
                go from an idea in the legislature to a clear mandate, a governing
                structure, a public input process and a launch plan.
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
          <p>Journalism, design writing, and research · {publicationArchive.length + journalArticles.length} located publication records.</p>
        </div>
        <nav className="publicationJump" aria-label="Publication outlets">
          <Link href="/writing#journal-of-biophilic-design">Journal of Biophilic Design <span>{journalArticles.length}</span></Link>
          <Link href="/writing#fat-nugs-magazine">Fat Nugs Magazine <span>{publicationCounts["Fat Nugs Magazine"]}</span></Link>
          <Link href="/writing#cannabis-law-report">Cannabis Law Report <span>{publicationCounts["Cannabis Law Report"]}</span></Link>
          <Link href="/writing#the-daily-pennsylvanian">The Daily Pennsylvanian <span>{publicationCounts["The Daily Pennsylvanian"]}</span></Link>
          <Link href="/writing#new-bones-mag">New Bones Mag</Link>
          <Link href="/writing#mit-science-policy-review">Academic + policy writing</Link>
        </nav>
        <div className="articlecols">
          <Publication
            title="Fat Nugs Magazine · Ask a Neuroscientist"
            items={writing.fnm}
          />
          <Publication title="Cannabis Law Report" items={writing.clr} />
          <Publication title={journalName} items={journalArticles.map((article) => ({ title: article.title, href: `/writing/journal-of-biophilic-design/${article.slug}`, blurb: `Issue ${article.issue} · ${article.theme} · Read the full article` }))} />
          <Publication title="The Daily Pennsylvanian" items={[
            ...publicationArchive.filter((article) => article.publication === "The Daily Pennsylvanian" && ["Michelle Obama and Jill Biden 'Join Forces' at Penn", "HUP adjusts to implementation of Affordable Care Act", "Nursing students create games to teach about healthcare issues"].includes(article.title)).map((article) => ({ title: article.title, href: article.href, blurb: "Read the full article at The Daily Pennsylvanian." })),
            { title: "Explore all 29 articles", href: "/writing#the-daily-pennsylvanian", blurb: "Health care, education, public policy, business, and campus life." },
          ]} />
          <Publication title="Research, policy and other writing" items={[
            { title: "New Bones Mag", href: "/writing#new-bones-mag", blurb: "Neuroscience and abolition." },
            { title: "Academic papers + policy reports", href: "/writing#mit-science-policy-review", blurb: "MIT Science Policy Review, Academic Radiology, Frontiers in Education, Policy Insights from the Behavioral and Brain Sciences, and Mothers in Science." },
            { title: "POLYMATH", href: "https://polymath-rn-collins.beehiiv.com/", blurb: "Independent essays and the newsletter archive." },
          ]} />
        </div>
        <div className="archiveCallout">
          <div>
            <p className="eyebrow">Published work</p>
            <h2>See everything I’ve published.</h2>
          </div>
          <div>
            <p>
              {journalArticles.length} Journal of Biophilic Design articles · {publicationCounts["Fat Nugs Magazine"]} Fat Nugs Magazine articles · {publicationCounts["Cannabis Law Report"]} Cannabis Law Report publication records · {publicationCounts["Cannabis Law Journal"]} Cannabis Law Journal editions · {publicationCounts["The Daily Pennsylvanian"]} Daily Pennsylvanian articles.
            </p>
            <p className="archiveNote">
              Last checked October 17, 2026. Includes academic papers, policy reports and a thesis. Reprints are labeled. Print-only work may be missing.
            </p>
            <Link className="button" href="/writing">See all published work →</Link>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="shell footergrid">
          <div>
            <p className="eyebrow">Work with RN</p>
            <h2>
              What are you
              <br />
              trying to understand
              <br />
              <em>or change?</em>
            </h2>
          </div>
          <div className="contact">
            <p>
              RN Collins
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
            <SocialIcons />
            {publicSourceLink("https://github.com/rn-collins/rn-selected-work") && <p><a href={publicSourceLink("https://github.com/rn-collins/rn-selected-work")} target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a></p>}
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
