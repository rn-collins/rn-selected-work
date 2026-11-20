import { gatedFile } from "../../../../lib/gated-files";

// A post's chart data as CSV, for the lab book's chart tab. 404 until the post is released (lib/gated-files.ts).
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string; file: string }> }) {
  const { slug, file } = await params;
  if (!file.endsWith(".csv")) return new Response("Not found", { status: 404 });
  return gatedFile("charts", slug, [file], true);
}
