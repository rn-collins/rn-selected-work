import Link from "next/link";
import { LivePreview } from "./live-preview";
import { canPreview } from "../lib/site-preview";
import { shippedBuilds } from "../lib/builds";

/** Shipped public sites only. Held, probe, and client projects are already off this list. */
export function PreviewGrid() {
  const tiles = shippedBuilds.filter((build) => !build.linkHeld && canPreview(build.live));
  return (
    <section className="previewGridSection shell" aria-labelledby="preview-grid">
      <p className="eyebrow">Public sites · {tiles.length} shipped</p>
      <h2 id="preview-grid">A window for every live build.</h2>
      <p className="previewGridIntro">
        Each window is the current public page. NSAG is one site, at nsag-site.vercel.app.
      </p>
      <div className="previewGrid">
        {tiles.map((build) => (
          <article key={build.repo}>
            <LivePreview url={build.live} title={build.title} compact />
            <h3>
              <Link href={`/builds/${build.repo}`}>{build.title}</Link>
            </h3>
            <a href={build.live} target="_blank" rel="noreferrer">
              Open the site ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
