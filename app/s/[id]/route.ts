import { notFound, permanentRedirect } from "next/navigation";
import moved from "../../../data/aan-sources-redirects.json";
import { releasedSourcePost } from "../../../lib/aan-sources";

// Short link for a post's sources page, printed under its QR code: /s/<post id> answers 308 to /sources/<slug>
// once the post is released, and 404 before, so a short link never opens a page ahead of its post.
export const revalidate = 3600;

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id.toLowerCase();
  const slug = (moved as Record<string, string>)[id] ?? id;
  if (!releasedSourcePost(slug)) notFound();
  permanentRedirect(`/sources/${slug}`);
}
