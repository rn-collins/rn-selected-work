import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../../components/canonical-page";
import { LabBook } from "../../../../components/lab-book";
import { sourcePost } from "../../../../lib/aan-sources";

// Review copy of a lab-book sources page before its post is released, so RN can approve the design on posts that are
// not out yet. It exists ONLY on preview deployments and local builds (VERCEL_ENV is not "production"): on the live
// site this address is a 404, so nothing opens ahead of its release. Never indexed.
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Sources preview", robots: { index: false, follow: false } };

export default async function SourcePreview({ params }: { params: Promise<{ slug: string }> }) {
  if (process.env.VERCEL_ENV === "production") notFound();
  const p = sourcePost((await params).slug);
  if (!p) notFound();
  return (
    <CanonicalPage>
      <p className="shell" style={{ margin: "16px auto 0", padding: "10px 14px", background: "#fdf0c8", fontWeight: 700 }}>
        Preview for review only. This page opens on rn-selected-work.vercel.app on the post&apos;s release day.
      </p>
      <LabBook p={p} links={<p>This post&apos;s links (Instagram, TikTok, the AaN page, previous and next) appear here once it is out.</p>} />
    </CanonicalPage>
  );
}
