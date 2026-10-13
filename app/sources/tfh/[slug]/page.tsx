import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../../components/canonical-page";
import { SourcesDetail, entryCount } from "../../../../components/sources-detail";
import { PieceLinks } from "../../../../components/piece-links";
import { tfhId } from "../../../../lib/releases";
import { releasedTfhPost, tfhPostedSoFar } from "../../../../lib/tfh-sources";

// Only released sets (data/releases.json) are built. Any other address returns 404 until the set's release day;
// pages are rechecked hourly, and the daily cron (app/api/release-day) refreshes them all.
export const dynamicParams = true;
export const revalidate = 3600;

export function generateStaticParams() {
  return tfhPostedSoFar().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = releasedTfhPost((await params).slug);
  if (!p) notFound();
  return {
    title: `Sources: ${p.title}`,
    description: `The listing and sources behind RN Collins's Tech From Here post on "${p.title}" at Dutch Design Week 2026, linked to the originals.`,
    alternates: { canonical: `/sources/tfh/${p.slug}` },
    // Estate-wide page genre tag (see rn-estate-tools README): judged on completeness, not length.
    other: { "rn:kind": "reference", "rn:entries": String(entryCount(p)) },
  };
}

export default async function TfhSourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const p = releasedTfhPost((await params).slug);
  if (!p) notFound();
  const order = tfhPostedSoFar();
  const at = order.findIndex((q) => q.slug === p.slug);
  const ref = (q?: { slug: string; title: string }) => q && { href: `/sources/tfh/${q.slug}`, title: q.title };
  return (
    <CanonicalPage>
      <SourcesDetail p={p} eyebrow="Tech From Here: NL · Sources" meta={`${p.series} · Dutch Design Week 2026`} backHref="/sources/tfh" backLabel="All Tech From Here posts and their sources" intro="The work this post covers and every source it draws on, each linked to the original." social="rn"
        links={<PieceLinks id={tfhId(p.slug)} index={{ href: "/sources/tfh", title: "All Tech From Here posts and their sources" }} prev={ref(order[at - 1])} next={ref(at >= 0 ? order[at + 1] : undefined)} />} />
    </CanonicalPage>
  );
}
