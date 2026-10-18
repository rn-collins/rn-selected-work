/** Imported image provenance sometimes appends a human note to its URL. */
export function imageSourceLink(raw: string): { href: string; note: string } {
  // The import format is a URL followed by a parenthetical provenance note.
  // Require a complete trailing note; a filename such as "Kew (2).jpg" stays intact.
  const annotated = raw.trim().match(/^(https?:\/\/\S+)\s+(\([\s\S]*\))$/);
  const address = annotated ? annotated[1] : raw.trim();
  const note = annotated ? annotated[2] : "";
  if (!address) return { href: "", note };

  // A question mark in a Commons filename is part of the title, not a query.
  const commons = "https://commons.wikimedia.org/wiki/File:";
  if (address.startsWith(commons)) {
    const title = address.slice(commons.length);
    try {
      return { href: commons + encodeURIComponent(decodeURIComponent(title)), note };
    } catch {
      return { href: commons + encodeURIComponent(title), note };
    }
  }
  try {
    return { href: new URL(address).href, note };
  } catch {
    return { href: address, note };
  }
}
