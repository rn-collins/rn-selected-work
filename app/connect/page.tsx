import type { Metadata } from "next";
import { hasVcard } from "../../lib/vcard";
import Image from "next/image";
import Link from "next/link";
import { SocialRow } from "../../components/social-row";
import { projectCountLine } from "../../lib/builds";

export const metadata: Metadata = {
  alternates: { canonical: "/connect" },
  title: "Connect with me",
  description: "How to reach me, RN Collins, with links to my tools and published writing.",
};

export default function ConnectPage() {
  return (
    <main>
      <nav className="nav shell" aria-label="Portfolio navigation">
        <Link className="mark" href="/" aria-label="RN Selected Work home">RN<span>↗</span></Link>
        <div className="navlinks"><Link href="/#work">Work</Link><Link href="/writing">Writing</Link></div>
      </nav>

      <header className="connectHero shell">
        <div className="connectPortrait">
          <Image src="/rn-collins-portrait.svg" alt="Portrait of RN Collins" width={900} height={1125} priority sizes="(max-width: 800px) 100vw, 38vw" />
        </div>
        <div className="connectIdentity">
          <p className="eyebrow">Connect with me</p>
          <h1>RN <em>Collins</em></h1>
          <p className="connectRoles">Neuroscientist, content creator and analyst. M.S. Anatomy &amp; Neurobiology.</p>
          <p className="connectPositioning">I work across science, law, technology and culture, and I build what’s missing between them.</p>
          <div className="connectActions" aria-label="Contact options">
            <a className="button" href="https://www.instagram.com/rn_collins/" target="_blank" rel="noreferrer">Instagram DM ↗</a>
            <a className="button secondary" href="https://www.linkedin.com/in/rn-collins" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            {hasVcard() && <a className="button secondary" href="/rn-collins.vcf" download>Save contact</a>}
          </div>
          <p className="dmLine">DMs are open on Instagram at @rn_collins.</p>
          <SocialRow set="rn" />
        </div>
      </header>

      <section className="connectCredentials">
        <div className="shell">
          <p><strong>University of Pennsylvania</strong><span>B.A. Psychology</span></p>
          <p><strong>Boston University</strong><span>M.S. Anatomy &amp; Neurobiology</span></p>
          <p><strong>Northeastern Law</strong><span>Chair of FlexJD Interests, Student Bar Association, Class of 2029</span></p>
        </div>
      </section>

      <section className="connectSection shell">
        <div className="connectRoutes">
          <Link href="/#work"><span className="eyebrow">Tools and case studies</span><h2>What I’ve built</h2><p>Tools, proposals and experiments I’ve built, each with its current status.</p><b>See what I have built →</b></Link>
          <Link href="/writing"><span className="eyebrow">Published writing</span><h2>My writing</h2><p>My reporting and research on neuroscience, cannabis, law, technology and design.</p><b>Read my work →</b></Link>
        </div>
      </section>

      <section className="connectSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">What I do</p>
          <div>
            <h2>What neuroscience, law and building taught me</h2>
            <p className="bigcopy">
              Neuroscience taught me to ask what observation would show the claim was
              wrong. Law taught me that a source either says the thing or it does not, and
              that the difference is where most arguments quietly fail. Building taught me
              that neither matters until someone can use the result on a Tuesday.
            </p>
            <p>
              In practice that means the work usually starts as research and ends as
              something that runs. There are {projectCountLine} across the
              practice: regulatory monitors that report their own staleness rather than
              presenting a frozen snapshot as current, research atlases that keep
              provenance attached to every record, browser-local decision tools that state
              plainly what they cannot decide for you, and public guides written for one
              named audience at a time.
            </p>
            <p>
              The job usually looks the same: a field or organization is changing faster
              than anyone can brief it, and the people deciding are working from whatever
              reached them last. The format changes. The problem rarely does.
            </p>
            <Link href="/builds">See everything I’ve built →</Link>
          </div>
        </div>
      </section>

      <section className="connectSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">Working together</p>
          <div>
            <h2>Start by describing the situation.</h2>
            <p>
              Instagram is fastest; LinkedIn is fine for an introduction. In a first
              message, tell me what keeps happening, who it affects, why it matters now and
              what you’ve tried. A brief is a guess about the problem, and it’s worth
              checking before anyone builds to it.
            </p>
            <p>
              If your question needs a licensed professional where you are, I’ll tell you.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footergrid">
          <div><p className="eyebrow">RN Selected Work</p><h2>Research, writing<br /><em>and tools.</em></h2></div>
          <div className="contact"><SocialRow set="rn" /><a href="https://www.linkedin.com/in/rn-collins" target="_blank" rel="noreferrer">LinkedIn ↗</a><Link href="/">Return to RN Selected Works →</Link></div>
        </div>
      </footer>
    </main>
  );
}
