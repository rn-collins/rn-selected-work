import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../../../components/canonical-page";
import { LabBook } from "../../../../../components/lab-book";
import { labPost } from "../../../../../lib/sources-lab-rnc";

// Review copy of an RN Collins sources page in the lab-book design, drawn from the package's 16-section record
// (lib/sources-lab-rnc.ts). Preview deployments and local builds only; the live site answers 404. Never indexed.
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "RN Collins sources preview", robots: { index: false, follow: false } };

export default async function RncLabPreview({ params }: { params: Promise<{ id: string }> }) {
  if (process.env.VERCEL_ENV === "production") notFound();
  const p = labPost((await params).id);
  if (!p) notFound();
  const page = p.slug.startsWith("rnc/") ? undefined : `/sources/${p.slug}`;
  return (
    <CanonicalPage>
      <p className="shell" style={{ margin: "16px auto 0", padding: "10px 14px", background: "#FDF0C8", fontWeight: 700 }}>
        Preview for review only. {page ? <>The live page for this post is {page}, which keeps its current design until RN approves this one.</> : <>This post has no sources page address yet.</>}
      </p>
      <LabBook p={p} brand="rnc" page={page} shortPath={page ?? `/sources/preview/rnc/${(await params).id}`}
        links={<p><Link href="/sources/preview/rnc">Every RN Collins lab-book preview</Link></p>} />
    </CanonicalPage>
  );
}
