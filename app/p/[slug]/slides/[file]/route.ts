import { readFile } from "node:fs/promises";
import path from "node:path";
import { visiblePost } from "../../../../../lib/post-pages";

// Slide images sit under data/, behind the same gate as the page, so they cannot be fetched before release.
export async function GET(_: Request, { params }: { params: Promise<{ slug: string; file: string }> }) {
  const { slug, file } = await params;
  const post = visiblePost(slug);
  if (!post || !post.slides.some((s) => s.file === file)) return new Response("Not found", { status: 404 });
  const body = await readFile(path.join(process.cwd(), "data", "post-pages", post.slug, file));
  return new Response(new Uint8Array(body), { headers: { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=3600" } });
}
