import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProject, projects } from "../../../lib/portfolio";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const p = getProject((await params).slug);
  return {
    title: p
      ? `${p.shortTitle} — Selected Work by RN Collins`
      : "Project not found",
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = getProject((await params).slug);
  if (!p)
    return (
      <main className="case shell">
        <p>Project not found.</p>
        <Link href="/">Return to selected work</Link>
      </main>
    );
  return (
    <main>
      <nav className="nav shell">
        <Link className="mark" href="/">
          RN<span>↗</span>
        </Link>
        <div className="navlinks">
          <Link href="/#work">All work</Link>
        </div>
      </nav>
      <article className="case shell">
        <p className="eyebrow">
          {p.kind} · {p.number}
        </p>
        <h1>{p.title}</h1>
        <p className="caseStatus">{p.status}</p>
        <p className="caseThesis">{p.thesis}</p>
        {p.image && (
          <div className="caseImage">
            <Image
              src={p.image}
              alt={p.imageAlt || "Project preview"}
              width={1200}
              height={630}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
        )}
        <div className="caseGrid">
          <CaseBlock label="What I noticed" text={p.noticed} />
          <CaseBlock label="What I researched" text={p.researched} />
          <CaseBlock label="What I built" text={p.built} />
          <CaseBlock label="Who it serves" text={p.serves} />
          <CaseBlock label="What it demonstrates" text={p.demonstrates} />
        </div>
        {p.evidenceNote && (
          <aside className="evidenceNote">
            <b>Evidence boundary</b>
            <p>{p.evidenceNote}</p>
          </aside>
        )}
        <div className="caseActions">
          {p.live && (
            <a
              className="button"
              href={p.live}
              target="_blank"
              rel="noreferrer"
            >
              Open live experience ↗
            </a>
          )}
          {p.repo && (
            <a
              className="button secondary"
              href={p.repo}
              target="_blank"
              rel="noreferrer"
            >
              Inspect technical source ↗
            </a>
          )}
          <Link className="textlink" href="/#work">
            Return to all work →
          </Link>
        </div>
      </article>
    </main>
  );
}
function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <section>
      <p className="eyebrow">{label}</p>
      <p>{text}</p>
    </section>
  );
}
