import { notFound, permanentRedirect } from "next/navigation";
import { fnmByNumber, fnmLive } from "../../../lib/fnm-sources";

// The short link printed under a Fat Nugs article's QR code: /fn/<n> answers 308 to the article's source page once
// its run date has come, and 404 before (lib/fnm-sources.ts). The number never changes.
export const revalidate = 3600;

export async function GET(_req: Request, { params }: { params: Promise<{ n: string }> }) {
  const a = fnmByNumber((await params).n);
  if (!fnmLive(a)) notFound();
  permanentRedirect(`/sources/fnm/${a!.slug}`);
}
