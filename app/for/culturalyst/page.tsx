import Link from "next/link";
import { projects, writing } from "../../../lib/portfolio";

const featured = [
  "ownership-platform",
  "flexjd-resource-hub",
  "keiki-robotics",
].map((slug) => projects.find((p) => p.slug === slug)!);
export default function Culturalyst() {
  return (
    <main>
      <nav className="nav shell">
        <Link className="mark" href="/">
          RN<span>↗</span>
        </Link>
        <div className="navlinks">
          <Link href="/for/culturalyst">Why RN</Link>
          <Link href="/for/culturalyst/work">Selected work</Link>
          <Link href="/for/culturalyst/opportunities">Opportunities</Link>
          <Link href="/for/culturalyst/conversation">Conversation</Link>
        </div>
      </nav>
      <header className="recipientHero shell">
        <p className="eyebrow">A selected view for Culturalyst</p>
        <h1>
          Making valuable work
          <br />
          <em>visible, connected,</em>
          <br />
          and supportable.
        </h1>
        <p>
          A guided view into RN Collins's work—ordered around ecosystem
          infrastructure, Hawaiʻi-grounded audience design, and the question of
          why meaningful work can remain difficult for institutions to find and
          fund.
        </p>
      </header>
      <section id="fit" className="fit">
        <div className="shell fitgrid">
          <p className="eyebrow">Where Culturalyst fits</p>
          <div>
            <p className="bigcopy">
              Culturalyst is building the infrastructure through
              which artists and cultural workers become discoverable, connected,
              supported, and fundable. RN's work asks a closely related systems
              question: who is an institution built to recognize, what evidence
              counts, and what usable layer is missing between people and
              opportunity?
            </p>
            <p>
              Culturalyst's knowledge could become a visual explanation,
              self-assessment, contextual article, or interactive next-step
              resource that keeps Culturalyst visible as the source and routes
              people back into its ecosystem.
            </p>
          </div>
        </div>
      </section>
      <section className="work shell">
        <div className="sectionhead">
          <p className="eyebrow">Start with these three</p>
          <p>Community infrastructure · Hawaiʻi context · ownership</p>
        </div>
        <div className="featurecards">
          {featured.map((p) => (
            <article key={p.slug}>
              <span>{p.number}</span>
              <h2>{p.shortTitle}</h2>
              <p>{p.demonstrates}</p>
              <Link href={`/work/${p.slug}`}>See how RN worked →</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="culturalystAnswer">
        <div className="shell answergrid">
          <section>
            <p className="eyebrow">Who the resource could serve</p>
            <p>
              Hawaiʻi-based artists and cultural workers, multidisciplinary
              independent practitioners, early-stage founders, students, and
              people doing meaningful work who may not yet recognize themselves
              as belonging within a fundable creative ecosystem.
            </p>
          </section>
          <section>
            <p className="eyebrow">How it could travel</p>
            <p>
              Through a public visual explainer, a practical self-assessment, an
              article on institutional invisibility, and—if useful—an
              interactive route to appropriate next steps. Distribution could
              include LinkedIn, RN's developing public resources, and
              Culturalyst's own channels, with the canonical destination and
              attribution returning to Culturalyst.
            </p>
          </section>
          <section>
            <p className="eyebrow">How the collaboration begins</p>
            <p>
              RN begins by locating where discovery, validation, relationships, or
              funding break down in practice. That inquiry determines the right
              form: an explanation, research product, workflow, or working tool.
            </p>
          </section>
        </div>
      </section>
      <section className="advisory">
        <div className="shell advisorygrid">
          <div>
            <p className="eyebrow">A related institutional system</p>
            <h2>
              Governance that
              <br />
              accounts for people.
            </h2>
          </div>
          <div className="advisoryitems">
            <article>
              <h3>Neurocognitive Systems Advisory Group</h3>
              <p>
                NSAG is RN's research-led institutional-design practice and the
                home of Nervous-System-Aware Governance. Across fifteen
                governance modules, evidence, assessments, intelligence
                products, education, and applied systems, it asks how the
                ordinary machinery of institutions shapes human cognitive and
                physiological conditions—and how those effects can become
                visible and governable.
              </p>
              <p>
                For Culturalyst, NSAG demonstrates RN's institutional method: define
                what a system overlooks, organize the evidence, build assessment
                logic, and create usable pathways for changing what the system
                can recognize and do.
              </p>
              <Link href="/work/neurocognitive-systems-advisory-group">
                Examine the NSAG system →
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section className="writing shell">
        <div className="sectionhead">
          <p className="eyebrow">Relevant public writing</p>
          <p>Evidence translated without flattening people or systems.</p>
        </div>
        <div className="miniarticles">
          {[writing.fnm[0], writing.fnm[1], writing.clr[0]].map((a) => (
            <article key={a.href}>
              <h3>
                <a href={a.href} target="_blank" rel="noreferrer">
                  {a.title} ↗
                </a>
              </h3>
              <p>{a.blurb}</p>
            </article>
          ))}
        </div>
        <p className="allwork">
          <Link href="/#writing">See the full selected writing list →</Link>
        </p>
      </section>
      <footer className="footer">
        <div className="shell footergrid">
          <div>
            <p className="eyebrow">The invitation</p>
            <h2>
              Understand the break.
              <br />
              <em>Then choose the form.</em>
            </h2>
          </div>
          <div className="contact">
            <p>
              This guided selection is the foundation for an exploratory conversation
              about Culturalyst's priorities, ecosystem knowledge, and opportunities
              for useful collaboration.
            </p>
            <Link href="/for/culturalyst/work">Continue to selected work →</Link>
            <a href="https://www.linkedin.com/in/rn-collins">
              Connect with RN ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
