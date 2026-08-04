const projects = [
  {
    number: "01",
    kind: "Community + ecosystem infrastructure",
    title: "Institutions of One / Ownership Platform",
    status: "Independent research platform · active development",
    thesis: "What changes when individual capability becomes portable, ownable institutional power?",
    copy: "A research platform that turns a structural question about creators and independent professionals into candidate measurement instruments, an evidence-governed observatory, longitudinal infrastructure, and participation pathways.",
    tags: ["Research architecture", "Evidence governance", "Assessment design"],
  },
  {
    number: "02",
    kind: "Community + ecosystem infrastructure",
    title: "FlexJD Resource Hub",
    status: "Community infrastructure · independently maintained",
    thesis: "Make fragmented institutional information usable without pretending it is official.",
    copy: "A mobile-first resource system for Northeastern Law's FlexJD community: verified opportunities, deadlines, campaigns, guides, correction pathways, privacy rules, and maintenance controls.",
    tags: ["Service design", "Source verification", "Community governance"],
    href: "https://github.com/rn-collins/flexjd-site",
  },
  {
    number: "03",
    kind: "Research + intelligence systems",
    title: "Psychedelic Operations Intelligence",
    status: "Private working system · selected view",
    thesis: "Turn a fast-moving legal and scientific field into operational intelligence.",
    copy: "A structured dashboard and database environment for organizing regulatory activity, scientific evidence, organizations, programs, and operational signals across psychedelic medicine and policy.",
    tags: ["Data architecture", "Field monitoring", "Decision support"],
  },
  {
    number: "04",
    kind: "Organization-specific concept build",
    title: "Buechler Pacific — Claude for the Field",
    status: "Independently initiated concept · not commissioned",
    thesis: "What would useful AI look like inside a real Hawaiʻi small business—not in a generic demo?",
    copy: "A tailored proof of concept developed from public information about Buechler Pacific, exploring how an AI assistant could support field knowledge, estimation, documentation, and continuity of expertise.",
    tags: ["Organizational research", "Workflow design", "AI prototyping"],
    href: "https://github.com/rn-collins/claude-smb-buechler",
  },
  {
    number: "05",
    kind: "Organization-specific concept build",
    title: "Keiki Robotics / Oʻahu AI",
    status: "Independently initiated concept · not commissioned",
    thesis: "Design an AI learning experience around Hawaiʻi's children, families, and educators.",
    copy: "A child-centered educational prototype built for a specific local context—translating emerging technology into an experience that can be understood, explored, and discussed by keiki and the adults supporting them.",
    tags: ["Learning experience", "Audience design", "Hawaiʻi context"],
    href: "https://github.com/rn-collins/keiki-robotics-oahu-ai",
  },
  {
    number: "06",
    kind: "Organization-specific concept build",
    title: "ThornCrest — Patent First Steps",
    status: "Independently initiated concept · not commissioned",
    thesis: "Help an inventor understand the next decision before asking them to become an IP expert.",
    copy: "A law-firm-specific service concept that combines public legal education, guided issue spotting, and a clearer pathway from an early invention question to an appropriate professional conversation.",
    tags: ["Legal service design", "Public education", "Guided intake"],
    href: "https://github.com/rn-collins/patent-first-steps-thorncrest",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Portfolio navigation">
        <a className="mark" href="#top" aria-label="RN Collins, top of page">RN<span>↗</span></a>
        <div className="navlinks"><a href="#work">Work</a><a href="#writing">Writing</a><a href="#approach">Approach</a></div>
      </nav>

      <header id="top" className="hero shell">
        <p className="eyebrow">Selected work · 2026</p>
        <h1>I work on questions<br/>too messy for a<br/><em>single discipline.</em></h1>
        <div className="herofoot">
          <p>Researcher, systems designer, builder, neuroscientist, and law student based on Oʻahu.</p>
          <p className="lede">I study who a system is built to recognize, resource, and reward—and turn what I learn into tools, infrastructure, explanations, and possible futures people can examine.</p>
        </div>
      </header>

      <section className="method" id="approach">
        <div className="shell methodgrid">
          <p className="eyebrow">How I work</p>
          <div className="steps" aria-label="Research to implementation process">
            <span><b>01</b> Study the system</span><i>→</i><span><b>02</b> Find the hidden constraint</span><i>→</i><span><b>03</b> Make it concrete</span><i>→</i><span><b>04</b> Build what can be tested</span>
          </div>
        </div>
      </section>

      <section id="work" className="work shell">
        <div className="sectionhead"><p className="eyebrow">Selected builds</p><p>Six projects. Three modes of practice.</p></div>
        <div className="projects">
          {projects.map((p) => (
            <article className="project" key={p.number}>
              <div className="projecttop"><span className="num">{p.number}</span><span className="kind">{p.kind}</span></div>
              <h2>{p.title}</h2>
              <p className="status">{p.status}</p>
              <p className="thesis">{p.thesis}</p>
              <p className="copy">{p.copy}</p>
              <div className="projectfoot"><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>{p.href && <a href={p.href} target="_blank" rel="noreferrer">Inspect project <span>↗</span></a>}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="advisory">
        <div className="shell advisorygrid">
          <div><p className="eyebrow">Selected advisory work</p><h2>Thinking before<br/>the build.</h2></div>
          <div className="advisoryitems">
            <article><h3>Inflection Radar</h3><p>An interactive public-source decision room that translates organizational research into an explorable pilot proposal, executive brief, report, and meeting instrument.</p><a href="https://github.com/rn-collins/inflection-radar-real-chemistry" target="_blank" rel="noreferrer">Explore the decision room ↗</a></article>
            <article><h3>Aloha Intelligence Institute</h3><p>An independently developed institutional-design proposal examining how a Hawaiʻi-focused AI institute could move from a legislative concept toward a mandate, governance model, stakeholder process, and implementation plan.</p><small>Prepared for consideration by Senator Stanley Chang's office. Not commissioned by or produced on behalf of the State of Hawaiʻi.</small></article>
          </div>
        </div>
      </section>

      <section id="writing" className="writing shell">
        <div className="sectionhead"><p className="eyebrow">Published work</p><p>Evidence translated without flattening it.</p></div>
        <div className="writinggrid">
          <a className="publication" href="https://cannabislaw.report/rn-collins-series-2-no-17-oversight-architecture-in-psychedelic-regulation/" target="_blank" rel="noreferrer"><span>Cannabis Law Report</span><h3>Law, policy, governance, oversight.</h3><p>Selected from extensive published series on cannabis and psychedelic regulation.</p><b>Read selected work ↗</b></a>
          <a className="publication coral" href="https://www.fatnugsmag.com/ask-a-neuroscientist-set-setting-and-structure-in-psychedelic-therapy-spaces/" target="_blank" rel="noreferrer"><span>Fat Nugs Magazine</span><h3>Ask a Neuroscientist.</h3><p>Brain science, cannabis, psychedelics, bodies, environments, and everyday life.</p><b>Read selected work ↗</b></a>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footergrid"><div><p className="eyebrow">A possible collaboration starts here</p><h2>What system are you<br/>trying to understand<br/><em>or change?</em></h2></div><div className="contact"><p>Rayven-Nikkita (RN) Collins<br/>Honolulu, Hawaiʻi</p><a href="https://www.linkedin.com/in/rn-collins" target="_blank" rel="noreferrer">Continue on LinkedIn ↗</a><p className="note">Aloha AI and RN Builds are currently in development. This page is a curated, accurate view of selected work.</p></div></div>
      </footer>
    </main>
  );
}
