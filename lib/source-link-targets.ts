/** Keep every source when an imported citation contains two joined URLs. */
export function sourceLinkTargets(raw: string): string[] {
  return raw.trim() ? raw.split(/\s+and\s+(?=https?:\/\/)/).map((url) => url.trim()) : [];
}
