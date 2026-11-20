import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../../../components/canonical-page";
import { LabBook } from "../../../../../components/lab-book";
import { fnmAsPost, fnmBySlug } from "../../../../../lib/fnm-sources";

// Review copy of a Fat Nugs source page before its run date. Preview deployments and local builds only; the live
// site answers 404. Never indexed.
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Fat Nugs sources preview", robots: { index: false, follow: false } };

export default async function FnmPreview({ params }: { params: Promise<{ slug: string }> }) {
  if (process.env.VERCEL_ENV === "production") notFound();
  const a = fnmBySlug((await params).slug);
  if (!a) notFound();
  return (
    <CanonicalPage>
      <p className="shell" style={{ margin: "16px auto 0", padding: "10px 14px", background: "#FDF0C8", fontWeight: 700 }}>
        Preview for review only. Short link fn/{a.n}. This page opens on its article&apos;s run date, set by RN or Jessica.
      </p>
      <LabBook p={fnmAsPost(a)} brand="fnm" shortPath={`/fn/${a.n}`} page={`/sources/fnm/${a.slug}`} links={<p><a href="/sources">Every source, both brands</a></p>} />
    </CanonicalPage>
  );
}
