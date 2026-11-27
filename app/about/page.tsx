import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";
import { builds } from "../../lib/builds";

export const metadata: Metadata = {
  title: "About RN Collins",
  description:
    "RN Collins, neuroscientist, knowledge content creator, and builder. Chair of FlexJD Interests, Student Bar Association, Northeastern University School of Law, Class of 2029.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">About RN</p>
        <h1>
          I follow a question
          <br />
          <em>wherever it leads.</em>
        </h1>
        <p>
          I’m RN Collins, a neuroscientist, knowledge content creator and builder
          in Honolulu, Hawaiʻi. I’m Chair of FlexJD Interests for the Student Bar
          Association at Northeastern University School of Law, Class of 2029.
        </p>
      </header>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <figure className="caseImage portrait">
            <Image
              src="/rn-collins-portrait.svg"
              alt="RN Collins"
              width={1122}
              height={1402}
              sizes="(max-width: 800px) 100vw, 38vw"
              priority
            />
          </figure>
          <div>
            <p className="eyebrow">What I do</p>
            <h2>I make confusing rules, science and tools easier to understand and use.</h2>
            <p className="bigcopy">
              My work crosses technology, law, neuroscience, education and public
              knowledge because the problems do. Cut a problem to fit one field and you
              usually cut off the part that matters most.
            </p>
            <p>
              I might research an organization, map what’s breaking, write the strategy,
              design a guide, build a tool or run the conversation. The method stays the
              same: learn how it actually works, find what matters, make it concrete, then
              make the next useful thing. I pick the format last. Picking it first is how
              you get a deliverable nobody needed.
            </p>
          </div>
        </div>
      </section>

      <section className="canonicalBand">
        <div className="shell canonicalSplit">
          <p className="eyebrow">What I’ve made</p>
          <div>
            <h2>Tools and guides you can open today.</h2>
            <p className="bigcopy">
              There are currently {builds.length} reachable builds across the practice:
              monitors that watch official sources and report their own staleness,
              research atlases that keep provenance attached, browser-local decision tools
              that state what they cannot decide for you, and public guides written for a
              named audience.
            </p>
            <p>
              Most of the tools run in your browser with no account. That’s on purpose:
              they ask people to write down things they wouldn’t want sent anywhere, like a
              claim they aren’t sure of, a gap in their own program or a decision about a
              child. A tool that collected that would stop being usable.
            </p>
            <Link href="/builds">See all the projects →</Link>
          </div>
        </div>
      </section>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">How I check my work</p>
          <div>
            <h2>Anyone should be able to check my work and get the same answer.</h2>
            <p>
              An audit across six builds found the same failure each time: the prose was
              accurate and the pointer to the source was not. Real articles with fabricated
              identifiers. DOIs registered nowhere. A tobacco statute cited as the source of
              an employment protection that does not exist. None of that is catchable by a
              link checker, because a link checker only asks whether a URL returns 200 —
              not whether the source says what the citation claims it says.
            </p>
            <p>
              So every project now runs checkers that anyone can run on their own computer
              and get the same result. I hold this site’s writing to the same rule. If a
              tool is out of date, the site says so. If a prototype is one screen, it says
              one screen. If a claim would need a study, I don’t make it.
            </p>
            <div className="canonicalActions">
              <Link className="button" href="/practice">See how the work is done →</Link>
              <Link className="button secondary" href="/contact">Bring me the problem →</Link>
            </div>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
