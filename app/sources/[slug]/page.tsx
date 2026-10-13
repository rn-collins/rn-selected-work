import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../components/canonical-page";
import { PieceLinks } from "../../../components/piece-links";
import { longDate, postedSoFar, releasedSourcePost } from "../../../lib/aan-sources";
import { aanId } from "../../../lib/releases";
import { SourcesDetail, entryCount } from "../../../components/sources-detail";

// Only released posts (data/releases.json) are built. Any other address returns 404 until the post's release day;
// pages are rechecked hourly, and the daily cron (app/api/release-day) refreshes them all.
export const dynamicParams = true;
export const revalidate = 3600;

export function generateStaticParams() {
  return postedSoFar().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = releasedSourcePost((await params).slug);
  if (!p) notFound();
  return {
    title: `Sources: ${p.title}`,
    description: `Every study, record and image behind the Ask a Neuroscientist post of ${longDate(p.date)}, "${p.title}", linked to the original.`,
    alternates: { canonical: `/sources/${p.slug}` },
    // Estate-wide page genre tag (see rn-estate-tools README): judged on completeness, not length.
    other: { "rn:kind": "reference", "rn:entries": String(entryCount(p)) },
  };
}

export default async function SourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const p = releasedSourcePost((await params).slug);
  if (!p) notFound();
  const order = postedSoFar();
  const at = order.findIndex((q) => q.slug === p.slug);
  const ref = (q?: { slug: string; title: string }) => q && { href: `/sources/${q.slug}`, title: q.title };
  return (
    <CanonicalPage>
      <SourcesDetail p={p} eyebrow="Ask a Neuroscientist · Sources" meta={`${p.series} · posted ${longDate(p.date)}`} backHref="/sources" backLabel="All posts and their sources"
        links={<PieceLinks id={aanId(p.slug)} index={{ href: "/sources", title: "All posts and their sources" }} prev={ref(order[at - 1])} next={ref(at >= 0 ? order[at + 1] : undefined)} />} />
    </CanonicalPage>
  );
}
