import Link from "next/link";
import { LivePreview } from "./live-preview";
import { canPreview } from "../lib/site-preview";
import { shippedBuilds } from "../lib/builds";

/** Shipped public sites only. Held, probe, and client projects are already off this list. */
export function PreviewGrid() {
  const tiles = shippedBuilds.filter((build) => !build.linkHeld && canPreview(build.live));
  return (
    <section className="previewGridSection shell" aria-labelledby="preview-grid">
      <p className="eyebrow">{tiles.length} live sites you can open here</p>
      <h2 id="preview-grid">Every live site, as it looks today.</h2>
      <p className="previewGridIntro">
        Each preview is the live page today. All of NSAG is on one site.
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
