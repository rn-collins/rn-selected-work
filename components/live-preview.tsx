import Image from "next/image";
import previews from "../data/previews.json";

type Preview = { embed: boolean; image: string; captured: string };
const table = previews as Record<string, Preview>;

function hostOf(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return "";
  }
}

export function hasPreview(url: string) {
  return Boolean(table[hostOf(url)]);
}

/**
 * The browser-window demonstration used on every build page.
 *
 * Most of the estate's sites forbid being shown inside another page
 * (X-Frame-Options / frame-ancestors), and an iframe of such a site renders
 * blank. data/previews.json records, per host, whether the site allows
 * embedding. Where it does, the window is the live site. Where it does not,
 * the window shows a dated screenshot of the same page.
 */
export function LivePreview({ url, title }: { url: string; title: string }) {
  const host = hostOf(url);
  const preview = table[host];
  const live = preview?.embed === true;
  if (!preview && !live) return null;
  const captured = preview
    ? new Date(`${preview.captured}T12:00:00Z`).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      })
    : "";
  return (
    <section className="buildPreview" aria-labelledby={`preview-${host}`}>
      <div className="buildPreviewHeader">
        <div>
          <p className="eyebrow">Controlled visual demonstration</p>
          <h2 id={`preview-${host}`}>{live ? "Current live interface" : "The interface, as it stands"}</h2>
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          Open full site ↗
        </a>
      </div>
      <div className="buildPreviewBrowser">
        <div className="buildPreviewChrome" aria-hidden="true">
          <span />
          <span />
          <span />
          <p>{host}</p>
        </div>
        {live ? (
          <iframe
            src={url}
            title={`Live preview of ${title}`}
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          <a className="buildPreviewShot" href={url} target="_blank" rel="noreferrer">
            <Image
              src={preview.image}
              alt={`Screenshot of the ${title} home page, captured ${captured}`}
              width={1440}
              height={900}
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </a>
        )}
      </div>
      <p className="buildPreviewNote">
        {live
          ? "This sandboxed preview shows the current public interface. Open the full site to use the build in its intended window."
          : `This site does not allow itself to be shown inside another page, so the window holds a screenshot captured ${captured}. Open the full site to use the build.`}
      </p>
    </section>
  );
}
