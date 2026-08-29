import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";
import { siteProperties } from "../../lib/site-properties";
import { builds } from "../../lib/builds";

export const metadata: Metadata = {
  title: "Initiatives",
  description:
    "Long-running questions that outlast any single engagement — Aloha AI, NSAG, and Institutions of One — each with the builds that currently exist under it.",
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
          Long-running questions.
          <br />
          <em>Work that keeps growing.</em>
        </h1>
        <p>
          Some questions are larger than one client engagement or one build. These
          initiatives give the practice a place to keep researching, testing, publishing
          and building around them.
        </p>
      </header>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">Why they exist</p>
          <div>
            <h2>A question that keeps recurring deserves somewhere to live.</h2>
            <p className="bigcopy">
              Consulting work ends. The question underneath it usually does not — it
              arrives again, at a different organisation, wearing different clothes, and
              the second engagement starts from nothing because the first one produced a
              deliverable rather than a body of work.
            </p>
            <p>
              An initiative is the correction. It holds the framework, the evidence, the
              instruments and the builds in one place across engagements, so the tenth time
              a question appears there is something to bring to it. It also creates an
              obligation the practice would otherwise avoid: an initiative has to say what
              it has actually established, and what it has only proposed.
            </p>
            <p>
              Each of these pages therefore lists its real deployments, drawn from the same
              generated inventory as the{" "}
              <Link href="/builds">build index</Link> — {builds.length} builds across the
              estate — with the same status lines. An initiative page cannot claim more
              than exists, because it is rendering the same data.
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
              <p className="eyebrow">{initiative.lifecycle}</p>
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
