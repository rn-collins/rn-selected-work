import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";
import { builds } from "../../lib/builds";

export const metadata: Metadata = {
  title: "About RN",
  description:
    "Rayven-Nikkita (RN) Collins — researcher, systems designer, builder, neuroscientist and law student — and the method behind a cross-disciplinary practice.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">About RN</p>
        <h1>
          I follow the question
          <br />
          <em>across the boundaries.</em>
        </h1>
        <p>
          Rayven-Nikkita (RN) Collins is a researcher, systems designer, builder,
          neuroscientist and law student based in Honolulu, Hawaiʻi.
        </p>
      </header>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <figure className="caseImage portrait">
            <Image
              src="/rn-collins-portrait.svg"
              alt="Rayven-Nikkita (RN) Collins"
              width={1122}
              height={1402}
              sizes="(max-width: 800px) 100vw, 38vw"
              priority
            />
          </figure>
          <div>
            <p className="eyebrow">The throughline</p>
            <h2>I make difficult systems easier to see and use.</h2>
            <p className="bigcopy">
              The work crosses technology, law, neuroscience, governance, education,
              institutional design and public knowledge because the problems themselves
              cross those boundaries — and because a problem that has been cut to fit one
              discipline has usually had its most important part cut off.
            </p>
            <p>
              I may research an organisation, map what is breaking, draft the strategy,
              design the resource, build the tool, or facilitate the conversation. What
              stays consistent is the method: understand the system, find what actually
              matters, make it concrete, and create the next useful form. The form is
              chosen at the end. Choosing it at the start is how you get a deliverable
              nobody needed.
            </p>
          </div>
        </div>
      </section>

      <section className="canonicalBand">
        <div className="shell canonicalSplit">
          <p className="eyebrow">What that produces</p>
          <div>
            <h2>Not opinions about a field. Things that run in it.</h2>
            <p className="bigcopy">
              There are currently {builds.length} reachable builds across the practice:
              monitors that watch official sources and report their own staleness,
              research atlases that keep provenance attached, browser-local decision tools
              that state what they cannot decide for you, and public guides written for a
              named audience.
            </p>
            <p>
              The reason so much of it is browser-local and account-free is not modesty
              about the technology. It is that most of these tools ask someone to write
              down something they would not want transmitted — a claim they are unsure of,
              a governance gap in their own programme, a decision about a child. A tool
              that collects that in order to demonstrate its own sophistication has traded
              away the condition that made it usable.
            </p>
            <Link href="/builds">Read the complete build index →</Link>
          </div>
        </div>
      </section>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">How the work is disciplined</p>
          <div>
            <h2>A quality claim should be reproducible by someone who does not trust me.</h2>
            <p>
              An audit across six builds found the same failure each time: the prose was
              accurate and the pointer to the source was not. Real articles with fabricated
              identifiers. DOIs registered nowhere. A tobacco statute cited as the source of
              an employment protection that does not exist. None of that is catchable by a
              link checker, because a link checker only asks whether a URL returns 200 —
              not whether the source says what the citation claims it says.
            </p>
            <p>
              So the estate carries its own checkers, and the standard is that they run on
              someone else&rsquo;s machine and reach the same verdict. The same discipline
              governs the language here. Where a build reports itself stale, this site says
              stale. Where a prototype is one screen, it is described as one screen. Where a
              claim would need a study to support it, the claim is not made.
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
