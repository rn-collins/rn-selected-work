import sources from "../data/public-repositories.json";
const publicUrls = new Set<string>(sources.repositories);
const bySite = sources.sites as Record<string, string>;
function normalized(value: string): string {
  try { const url = new URL(value); return url.origin + url.pathname.replace(/\/+$/, ""); }
  catch { return ""; }
}
/** Only link repositories verified public by the source-link refresh. */
export function publicSourceLink(candidate?: string | null, live?: string | null): string | undefined {
  const url = candidate ? normalized(candidate) : live ? bySite[normalized(live)] : undefined;
  return url && publicUrls.has(url) ? url : undefined;
}
