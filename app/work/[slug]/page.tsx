import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProject, projects } from "../../../lib/portfolio";
import { getPublicBuild, publicBuilds } from "../../../lib/public-builds";

export function generateStaticParams() {
  return [...projects, ...publicBuilds].map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const p = getProject(slug);
  const build = getPublicBuild(slug);
  return {
    title: p || build
      ? `${p?.shortTitle || build?.title} — Selected Work by RN Collins`
      : "Project not found",
    description: p?.summary || build?.purpose,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const p = getProject(slug);
  const build = getPublicBuild(slug);
  if (build) return <PublicBuildCase build={build} />;
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

function PublicBuildCase({ build }: { build: (typeof publicBuilds)[number] }) {
  return (
    <main>
      <nav className="nav shell" aria-label="Case study navigation">
        <Link className="mark" href="/">
          RN<span>↗</span>
        </Link>
        <div className="navlinks">
          <Link href="/#build-atlas">All builds</Link>
          <a href={build.live} target="_blank" rel="noreferrer">Open build ↗</a>
        </div>
      </nav>
      <article className="case shell">
        <p className="eyebrow">{build.category} · {build.practice}</p>
        <h1>{build.title}</h1>
        <p className="caseStatus">{build.status}</p>
        <p className="caseThesis">{build.purpose}</p>
        <div className="caseGrid">
          {build.noticed && <CaseBlock label="What I noticed" text={build.noticed} />}
          {build.researched && <CaseBlock label="What I researched" text={build.researched} />}
          <CaseBlock label="What exists" text={build.built} />
          <CaseBlock label="Who it serves" text={build.serves} />
          <CaseBlock label="What it demonstrates" text={build.demonstrates} />
          <CaseBlock
            label="Current evidence"
            text={build.evidence || "This portfolio record describes the verified public build and its current production destination. The underlying build remains subject to its own separate content, functional, responsive, accessibility, privacy, and release audit."}
          />
        </div>
        <div className="caseActions">
          <a className="button" href={build.live} target="_blank" rel="noreferrer">
            Open live build ↗
          </a>
          {build.source && (
            <a className="button secondary" href={build.source} target="_blank" rel="noreferrer">
              Inspect technical source ↗
            </a>
          )}
          {build.artifacts?.map((artifact) => (
            <a className="button secondary" href={artifact.href} target="_blank" rel="noreferrer" key={artifact.href}>
              {artifact.label} ↗
            </a>
          ))}
          <Link className="textlink" href="/#build-atlas">Return to all builds →</Link>
        </div>
      </article>
    </main>
  );
}
