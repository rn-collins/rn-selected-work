import { PreviewFrame } from "./preview-frame";
import { canPreview, hostOf } from "../lib/site-preview";

export function hasPreview(url: string) {
  return canPreview(url);
}

/**
 * Browser window for a public build that has a live URL.
 * A missing URL, a held link, or a host outside the public set renders nothing.
 */
export function LivePreview({
  url,
  title,
  compact = false,
}: {
  url: string;
  title: string;
  compact?: boolean;
}) {
  if (!url || !canPreview(url)) return null;
  return <PreviewFrame url={url} title={title} host={hostOf(url)} compact={compact} />;
}
