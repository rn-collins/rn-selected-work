import Link from "next/link";
import { projects, writing } from "../lib/portfolio";

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Portfolio navigation">
        <Link className="mark" href="/">
          RN<span>↗</span>
        </Link>
        <div className="navlinks">
          <a href="#work">Work</a>
          <a href="#writing">Writing</a>
          <Link href="/for/culturalyst">For Culturalyst</Link>
        </div>
      </nav>
      <header className="hero shell">
        <p className="eyebrow">Standing selected-work portfolio · 2026</p>
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
            One permanent body of evidence. Recipient-specific views change what
            leads and why it matters; the underlying case studies remain
            canonical.
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
          <p className="eyebrow">Selected builds</p>
          <p>Six projects. Every one now has a case study.</p>
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
                <Link href={`/work/${p.slug}`}>
                  Read case study <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="advisory">
        <div className="shell advisorygrid">
          <div>
            <p className="eyebrow">Selected advisory work</p>
            <h2>
              Thinking before
              <br />
              the build.
            </h2>
          </div>
          <div className="advisoryitems">
            <article>
              <h3>Inflection Radar</h3>
              <p>
                An interactive public-source decision room translating
                organizational research into an explorable proposal, executive
                brief, report, and meeting instrument.
              </p>
              <a
                href="https://github.com/rn-collins/inflection-radar-real-chemistry"
                target="_blank"
                rel="noreferrer"
              >
                Explore the decision room ↗
              </a>
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
          <p>Specific pieces, selected for different kinds of thinking.</p>
        </div>
        <div className="articlecols">
          <Publication
            title="Fat Nugs Magazine · Ask a Neuroscientist"
            items={writing.fnm}
          />
          <Publication title="Cannabis Law Report" items={writing.clr} />
        </div>
      </section>
      <footer className="footer">
        <div className="shell footergrid">
          <div>
            <p className="eyebrow">A possible collaboration starts here</p>
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
              Aloha AI, RN Builds, and the newsletter are in development. This
              is the standing, curated view of selected work.
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
