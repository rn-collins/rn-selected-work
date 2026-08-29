import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { builds } from "../../lib/builds";

export const metadata: Metadata = {
  alternates: { canonical: "/connect" },
  title: "Connect with RN",
  description: "Contact Rayven-Nikkita (RN) Collins and find her technology builds, selected work, and published writing.",
};

const email = "collins.ra@northeastern.edu";

export default function ConnectPage() {
  return (
    <main>
      <nav className="nav shell" aria-label="Portfolio navigation">
        <Link className="mark" href="/" aria-label="RN Selected Works home">RN<span>↗</span></Link>
        <div className="navlinks"><Link href="/#work">Work</Link><Link href="/writing">Writing</Link></div>
      </nav>

      <header className="connectHero shell">
        <div className="connectPortrait">
          <Image src="/rn-collins-portrait.svg" alt="Portrait of Rayven-Nikkita (RN) Collins" width={900} height={1125} priority sizes="(max-width: 800px) 100vw, 38vw" />
        </div>
        <div className="connectIdentity">
          <p className="eyebrow">Connect with RN</p>
          <h1>Rayven-Nikkita<br /><em>(RN) Collins</em></h1>
          <p className="connectRoles">Neuroscientist · Fractional Law Clerk · AI Technologist</p>
          <p className="connectPositioning">I work across—and in between—science, law, technology, culture, and institutions. I connect the dots, reveal the gaps, and build what is missing.</p>
          <div className="connectActions" aria-label="Contact options">
            <a className="button" href={`mailto:${email}`}>Email RN</a>
            <a className="button secondary" href="https://www.linkedin.com/in/rn-collins" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="button secondary" href="/rn-collins.vcf" download>Save contact</a>
          </div>
          <a className="connectEmail" href={`mailto:${email}`}>{email}</a>
        </div>
      </header>

      <section className="connectCredentials">
        <div className="shell">
          <p><strong>University of Pennsylvania</strong><span>B.A. Psychology</span></p>
          <p><strong>Boston University</strong><span>M.S. Anatomy &amp; Neurobiology</span></p>
          <p><strong>Northeastern Law</strong><span>J.D. Candidate, Class of 2029</span></p>
        </div>
      </section>

      <section className="connectSection shell">
        <div className="connectRoutes">
          <Link href="/#work"><span className="eyebrow">Technology, systems, and case studies</span><h2>Built by RN</h2><p>See the platforms, tools, institutional proposals, experiments, and client-facing work already organized in RN Selected Works.</p><b>See what I have built →</b></Link>
          <Link href="/writing"><span className="eyebrow">Editorial and published work</span><h2>Writing by RN</h2><p>Read RN’s reporting, analysis, and public scholarship across neuroscience, cannabis, law, technology, design, and institutions.</p><b>Read my work →</b></Link>
        </div>
      </section>

      <section className="connectSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">What I actually do</p>
          <div>
            <h2>Three disciplines, one habit.</h2>
            <p className="bigcopy">
              Neuroscience taught me to ask what observation would show the claim was
              wrong. Law taught me that a source either says the thing or it does not, and
              that the difference is where most arguments quietly fail. Building taught me
              that neither matters until someone can use the result on a Tuesday.
            </p>
            <p>
              In practice that means the work usually starts as research and ends as
              something that runs. There are {builds.length} reachable builds across the
              practice — regulatory monitors that report their own staleness rather than
              presenting a frozen snapshot as current, research atlases that keep
              provenance attached to every record, browser-local decision tools that state
              plainly what they cannot decide for you, and public guides written for one
              named audience at a time.
            </p>
            <p>
              The recurring commission is some version of the same thing: a field or an
              organisation is changing faster than anyone can brief it, and the people who
              have to decide are working from whichever fragment reached them last. The
              deliverable varies. The problem rarely does.
            </p>
            <Link href="/builds">See the complete build index →</Link>
          </div>
        </div>
      </section>

      <section className="connectSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">Working together</p>
          <div>
            <h2>Email, with the situation rather than the brief.</h2>
            <p>
              Email is the route that works; LinkedIn is fine for an introduction. What
              helps most in a first message is the situation itself — what keeps happening,
              who it affects, why it matters now, and what has already been tried. A brief
              is a hypothesis about the problem, and it is worth checking before anyone
              builds against it.
            </p>
            <p>
              Where a question needs a licensed professional in a specific jurisdiction, I
              will say so rather than build around it.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footergrid">
          <div><p className="eyebrow">RN Selected Works</p><h2>Research, writing,<br /><em>systems, and builds.</em></h2></div>
          <div className="contact"><a href={`mailto:${email}`}>{email}</a><a href="https://www.linkedin.com/in/rn-collins" target="_blank" rel="noreferrer">LinkedIn ↗</a><Link href="/">Return to RN Selected Works →</Link></div>
        </div>
      </footer>
    </main>
  );
}
