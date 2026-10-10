import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../components/canonical-page";
import { longDate, sourcePost, sourcePosts } from "../../../lib/aan-sources";
import { SourcesDetail, entryCount } from "../../../components/sources-detail";

export function generateStaticParams() {
  return sourcePosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = sourcePost((await params).slug);
  if (!p) return {};
  return {
    title: `Sources: ${p.title}`,
    description: `Every study, record and image behind the Ask a Neuroscientist post of ${longDate(p.date)}, "${p.title}", linked to the original.`,
    alternates: { canonical: `/sources/${p.slug}` },
    // Estate-wide page genre tag (see rn-estate-tools README): judged on completeness, not length.
    other: { "rn:kind": "reference", "rn:entries": String(entryCount(p)) },
  };
}

export default async function SourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const p = sourcePost((await params).slug);
  if (!p) notFound();
  return (
    <CanonicalPage>
      <SourcesDetail p={p} eyebrow="Ask a Neuroscientist · Sources" meta={`${p.series} · posted ${longDate(p.date)}`} backHref="/sources" backLabel="All posts and their sources" />
    </CanonicalPage>
  );
}
