import { gatedFile } from "../../../../lib/gated-files";

// A post's interactive page ("Try it yourself") and its own files. 404 until the post is released (lib/gated-files.ts).
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string; path: string[] }> }) {
  const { slug, path } = await params;
  return gatedFile("interactives", slug, path);
}
