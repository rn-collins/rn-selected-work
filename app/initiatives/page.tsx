import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";
import { siteProperties } from "../../lib/site-properties";

export const metadata: Metadata = {
  title: "Initiatives",
  description:
    "Three long-running projects by RN Collins: Aloha AI, NSAG and Institutions of One, each with the tools built for it so far.",
  alternates: { canonical: "/initiatives" },
};

export default function Page() {
  const initiatives = siteProperties.filter(
    (property) => property.kind === "initiative" && property.public,
  );

  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">Initiatives</p>
        <h1>
          Three questions
          <br />
          <em>I keep working on.</em>
        </h1>
        <p>
          Some questions are bigger than one client project or one tool. These three
          projects give me a place to keep researching, testing, publishing and building
          around them.
        </p>
      </header>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">Why they exist</p>
          <div>
            <h2>A question that keeps recurring deserves somewhere to live.</h2>
            <p className="bigcopy">
              Consulting work ends, but the question under it usually comes back at another
              organization in a different form. Without a place to keep what I learned, the
              second project starts from nothing.
            </p>
            <p>
              Each initiative keeps the research, evidence, tools and builds in one place, so
              there’s something to bring the tenth time a question comes up. It also has to
              say what it has actually shown and what it has only proposed.
            </p>
          </div>
        </div>
      </section>

      <section className="canonicalSection shell">
        <div className="canonicalSectionHead">
          <div>
            <p className="eyebrow">Current initiatives</p>
            <h2>Three, and they are kept separate on purpose.</h2>
          </div>
          <p>Each page states what exists now and what is still being developed.</p>
        </div>
        <div className="canonicalCards">
          {initiatives.map((initiative) => (
            <article key={initiative.id}>
              <p className="eyebrow">{initiative.lifecycle.replace("-", " ")}</p>
              <h3>{initiative.name}</h3>
              <p>{initiative.purpose}</p>
              {initiative.evidenceBoundary && <small>{initiative.evidenceBoundary}</small>}
              {initiative.destination && (
                <Link href={initiative.destination}>See the work and current status →</Link>
              )}
            </article>
          ))}
        </div>
        <p className="rosterNote">
          The separation matters. Aloha AI may build infrastructure that implements NSAG
          work, but an Aloha AI tool is not an NSAG finding, and Institutions of One&rsquo;s
          candidate instruments do not inherit evidence from either. Initiatives that share
          an author do not share a warrant.
        </p>
      </section>
    </CanonicalPage>
  );
}
