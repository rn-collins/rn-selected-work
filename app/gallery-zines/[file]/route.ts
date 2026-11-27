import { readFile } from "node:fs/promises";
import path from "node:path";
import { zines } from "../../../lib/gallery";
import { hawaiiToday } from "../../../lib/releases";

// Zine covers, gated like the carousel slides: none can be fetched before its issue opens (Hawaii time).
export async function GET(_: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const z = zines.find((x) => `${x.id}.webp` === file);
  const preview = process.env.VERCEL_ENV !== "production";
  if (!z || (!preview && z.date > hawaiiToday())) return new Response("Not found", { status: 404 });
  try {
    const body = await readFile(path.join(process.cwd(), "data", "gallery-zines", file));
    return new Response(new Uint8Array(body), { headers: { "Content-Type": "image/webp", "Cache-Control": "public, max-age=3600" } });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
