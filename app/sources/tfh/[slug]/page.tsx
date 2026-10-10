import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../../components/canonical-page";
import { SourcesDetail, entryCount } from "../../../../components/sources-detail";
import { tfhPost, tfhPosts } from "../../../../lib/tfh-sources";

export function generateStaticParams() {
  return tfhPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = tfhPost((await params).slug);
  if (!p) return {};
  return {
    title: `Sources: ${p.title}`,
    description: `The listing and sources behind RN Collins's Tech From Here post on "${p.title}" at Dutch Design Week 2026, linked to the originals.`,
    alternates: { canonical: `/sources/tfh/${p.slug}` },
    // Estate-wide page genre tag (see rn-estate-tools README): judged on completeness, not length.
    other: { "rn:kind": "reference", "rn:entries": String(entryCount(p)) },
  };
}

export default async function TfhSourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const p = tfhPost((await params).slug);
  if (!p) notFound();
  return (
    <CanonicalPage>
      <SourcesDetail p={p} eyebrow="Tech From Here: NL · Sources" meta={`${p.series} · Dutch Design Week 2026`} backHref="/sources/tfh" backLabel="All Tech From Here posts and their sources" intro="The work this post covers and every source it draws on, each linked to the original." />
    </CanonicalPage>
  );
}
