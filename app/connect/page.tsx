import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
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

      <footer className="footer">
        <div className="shell footergrid">
          <div><p className="eyebrow">RN Selected Works</p><h2>Research, writing,<br /><em>systems, and builds.</em></h2></div>
          <div className="contact"><a href={`mailto:${email}`}>{email}</a><a href="https://www.linkedin.com/in/rn-collins" target="_blank" rel="noreferrer">LinkedIn ↗</a><Link href="/">Return to RN Selected Works →</Link></div>
        </div>
      </footer>
    </main>
  );
}
