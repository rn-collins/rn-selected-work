import previews from "../data/previews.json";
import { builds } from "./builds";

type Shot = { embed?: boolean; image?: string; captured?: string };
const shots = previews as Record<string, Shot>;

export function hostOf(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return "";
  }
}

/**
 * Public shipped and studio builds with a live URL.
 * Held links, probes, client work, duplicate NSAG hosts, and the Netherlands
 * field kit never enter this set: they are absent from `builds` or marked linkHeld.
 */
const previewHosts = new Set(
  builds.filter((build) => Boolean(build.live) && !build.linkHeld).map((build) => hostOf(build.live)),
);

export function canPreview(url: string): boolean {
  const host = hostOf(url);
  return host.length > 0 && previewHosts.has(host);
}

export function previewShot(url: string): { image: string; captured: string } | null {
  const shot = shots[hostOf(url)];
  if (!shot?.image || !shot.captured) return null;
  return { image: shot.image, captured: shot.captured };
}

/** https URL on an allowlisted public host, with no embedded credentials. */
export function previewTarget(raw: string): URL | null {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") return null;
  if (url.username || url.password) return null;
  if (!previewHosts.has(url.hostname)) return null;
  return url;
}
