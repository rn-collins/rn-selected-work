import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";
import { projectCountLine } from "../../lib/builds";

export const metadata: Metadata = {
  title: "About RN Collins",
  description:
    "RN Collins, neuroscientist, content creator and analyst in Honolulu, Hawaiʻi. M.S. Anatomy & Neurobiology.",
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
          I’m RN Collins, a neuroscientist, content creator and analyst in Honolulu,
          Hawaiʻi, with an M.S. in Anatomy &amp; Neurobiology. I’m also a law student
          at Northeastern University School of Law (Class of 2029), where I chair
          FlexJD Interests for the Student Bar Association.
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
              There are {projectCountLine} across the practice:
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
              A link that opens isn’t the same as a source that says what I claim. So I check
              that every citation points to a real source and that the source actually says it,
              and every project runs checkers anyone can rerun on their own computer and get the
              same result. If a tool is out of date, the site says so. If a prototype is one
              screen, it says one screen. If a claim would need a study, I don’t make it.
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
