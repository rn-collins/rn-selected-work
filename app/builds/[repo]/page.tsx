import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../components/canonical-page";
import { LivePreview, hasPreview } from "../../../components/live-preview";
import { VerifiedRecord } from "../../../components/verified-record";
import { builds, getBuild } from "../../../lib/builds";

export function generateStaticParams() {
  return builds.map((build) => ({ repo: build.repo }));
}

export async function generateMetadata({ params }: { params: Promise<{ repo: string }> }): Promise<Metadata> {
  const build = getBuild((await params).repo);
  if (!build) return {};
  return {
    title: `${build.title}: build record`,
    description: build.problem,
    alternates: { canonical: `/builds/${build.repo}` },
  };
}

export default async function BuildPage({ params }: { params: Promise<{ repo: string }> }) {
  const build = getBuild((await params).repo);
  if (!build) notFound();
  return (
    <CanonicalPage>
      <article className="case shell">
        <p className="eyebrow">Build record · {build.category}</p>
        <h1>{build.title}</h1>
        <p className="caseStatus">{build.status}</p>
        <p className="caseThesis">{build.problem}</p>
        {build.linkHeld ? (
          <p className="buildPreviewNote">The visual demonstration is held with the public link. {build.linkHeld}</p>
        ) : hasPreview(build.live) ? (
          <LivePreview url={build.live} title={build.title} />
        ) : (
          <p className="buildPreviewNote">
            This build has no public visual interface (it is a sign-in screen or a data endpoint), so there is no window to show.
          </p>
        )}
        <VerifiedRecord build={build} />
        <div className="caseActions">
          {!build.linkHeld && (
            <a className="button" href={build.live} target="_blank" rel="noreferrer">
              Open the build ↗
            </a>
          )}
          {build.repoUrl && (
            <a className="button secondary" href={build.repoUrl} target="_blank" rel="noreferrer">
              Inspect technical source ↗
            </a>
          )}
          {build.caseStudy && (
            <Link className="textlink" href={`/work/${build.caseStudy}`}>
              Read the case study →
            </Link>
          )}
          <Link className="textlink" href={`/builds#${build.category}`}>
            Return to the build index →
          </Link>
        </div>
      </article>
    </CanonicalPage>
  );
}
