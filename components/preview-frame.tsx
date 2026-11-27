"use client";

function proxySrc(url: string) {
  return `/api/preview?url=${encodeURIComponent(url)}`;
}

/**
 * A direct iframe of these sites is blank. Their frame-ancestors rule names the
 * production portfolio host, and a blocked frame throws the same cross-origin
 * error as a frame that loaded, so the browser cannot tell the two apart.
 * /api/preview fetches the live public URL and serves that page here.
 */
export function PreviewFrame({
  url,
  title,
  host,
  compact = false,
}: {
  url: string;
  title: string;
  host: string;
  compact?: boolean;
}) {
  return (
    <section className={compact ? "buildPreview buildPreview--tile" : "buildPreview"} aria-label={`${title} preview`}>
      {compact ? null : (
        <div className="buildPreviewHeader">
          <div>
            <p className="eyebrow">Live preview</p>
            <h2>The site as it looks today</h2>
          </div>
          <a href={url} target="_blank" rel="noreferrer">
            Open full site ↗
          </a>
        </div>
      )}
      <div className="buildPreviewBrowser">
        <div className="buildPreviewChrome" aria-hidden="true">
          <span />
          <span />
          <span />
          <p>{host}</p>
        </div>
        <iframe
          src={proxySrc(url)}
          title={`Preview of ${title}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox=""
        />
      </div>
      {compact ? null : (
        <p className="buildPreviewNote">
          A live view of the site. Open it to use it.
        </p>
      )}
    </section>
  );
}
