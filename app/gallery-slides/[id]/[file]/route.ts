import { readFile } from "node:fs/promises";
import path from "node:path";
import { carousels } from "../../../../lib/gallery";
import { hawaiiToday } from "../../../../lib/releases";

// The Gallery's carousel slides sit under data/gallery-slides, not public/, so a post's slides can't be fetched
// before its release day in Hawaii. Preview deployments serve them for review, like lib/gated-files.ts.
export async function GET(_: Request, { params }: { params: Promise<{ id: string; file: string }> }) {
  const { id, file } = await params;
  const c = carousels.find((x) => x.id === id);
  const preview = process.env.VERCEL_ENV !== "production";
  if (!c || !/^slide-\d{2}\.webp$/.test(file) || (!preview && c.date > hawaiiToday())) return new Response("Not found", { status: 404 });
  try {
    const body = await readFile(path.join(process.cwd(), "data", "gallery-slides", id, file));
    return new Response(new Uint8Array(body), { headers: { "Content-Type": "image/webp", "Cache-Control": "public, max-age=3600" } });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
