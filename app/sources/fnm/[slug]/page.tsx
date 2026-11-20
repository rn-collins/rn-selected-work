import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../../components/canonical-page";
import { LabBook } from "../../../../components/lab-book";
import { fnmAsPost, fnmBySlug, fnmLive } from "../../../../lib/fnm-sources";

// A Fat Nugs article's source page, in the lab-book design (RN's source-page standard, Nov 20, 2026). It exists only
// once the article's run date has come (lib/fnm-sources.ts); before that the address is a 404.
export const dynamicParams = true;
export const revalidate = 3600;
export function generateStaticParams() { return []; }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = fnmBySlug((await params).slug);
  if (!fnmLive(a)) notFound();
  return { title: `Sources: ${a!.title}`, description: `Every source behind RN Collins's Fat Nugs Magazine article "${a!.title}", linked to the original.`,
    alternates: { canonical: `/sources/fnm/${a!.slug}` } };
}

export default async function FnmSources({ params }: { params: Promise<{ slug: string }> }) {
  const a = fnmBySlug((await params).slug);
  if (!fnmLive(a)) notFound();
  return (
    <CanonicalPage>
      <LabBook p={fnmAsPost(a!)} brand="fnm" shortPath={`/fn/${a!.n}`} page={`/sources/fnm/${a!.slug}`} links={<p><a href="/sources">Every source, both brands</a></p>} />
    </CanonicalPage>
  );
}
