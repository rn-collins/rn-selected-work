// Rule 6 (RN, Nov 28, 2026): on public pages RN is "I", never "RN" or "she/her" for herself. The sources data
// (data/sources-*.json, data/aan-sources.json) is written by the studio export and overwritten on every run, so it
// is not edited here. Instead this display filter turns its third-person labels, credits and captions into first
// person where they are rendered. Matching is exact and case-sensitive; citations such as "Collins, RN." and the
// name "RN Collins" are untouched. Apply it to visible text only, never to URLs. Longer phrases come first so a
// shorter one cannot match inside them.
const PHRASES: [string, string][] = [
  ["RN's camera footage behind this post, including her own line at the table", "My camera footage behind this post, including my own line at the table"],
  ["RN's camera footage behind this post", "My camera footage behind this post"],
  ["RN's spoken lines in this post, from her own camera", "My spoken lines in this post, from my own camera"],
  ["RN's phone photos and video behind this post", "My phone photos and video behind this post"],
  ["RN's video behind this post", "My video behind this post"],
  ["RN's own footage", "My own footage"],
  ["from RN's video at", "from my video at"],
];

// "Read RN's full article in X" → "Read my full article in X", whatever X is.
const ARTICLE = /Read RN's full article in /g;

// A phrase that opens a sentence keeps its capital ("My"); mid-sentence it is lower case ("my").
const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

export function firstPerson(text: string): string;
export function firstPerson(text: string | undefined): string | undefined;
export function firstPerson(text: string | undefined): string | undefined {
  if (!text || !text.includes("RN's")) return text;
  let out = text.replace(ARTICLE, "Read my full article in ");
  for (const [from, to] of PHRASES) {
    if (!out.includes(from)) continue;
    out = out.split(from).reduce((acc, part, i) => {
      if (i === 0) return part;
      const opensSentence = acc === "" || /[.!?:]\s*$/.test(acc) || /\(\s*$/.test(acc);
      return acc + (opensSentence ? to : lowerFirst(to)) + part;
    });
  }
  return out;
}
