import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../../components/canonical-page";
import { labIds } from "../../../../lib/sources-lab-rnc";

// Index of the RN Collins lab-book previews, for RN's review. Preview deployments and local builds only.
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "RN Collins sources previews", robots: { index: false, follow: false } };

export default function RncLabIndex() {
  if (process.env.VERCEL_ENV === "production") notFound();
  const all = labIds();
  return (
    <CanonicalPage>
      <div className="shell" style={{ padding: "24px 0 48px" }}>
        <h1>RN Collins sources, lab-book previews</h1>
        <p>{all.length} posts with a 16-section record, by post date. Review only; the live site keeps its current pages.</p>
        <ol>
          {all.map((e) => (
            <li key={e.id}><Link href={`/sources/preview/rnc/${e.id}`}>{e.title}</Link> <small>{e.date || "no date"} · {e.page || "no sources page yet"}</small></li>
          ))}
        </ol>
      </div>
    </CanonicalPage>
  );
}
