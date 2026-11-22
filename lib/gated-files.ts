import { readFile } from "node:fs/promises";
import path from "node:path";
import { releasedSourcePost, sourcePost } from "./aan-sources";

// Files that belong to one post (chart CSVs, interactive pages) are served only once that post is released, the
// same gate as its sources page. They live under data/, not public/, so nothing can be fetched early by guessing
// the address. Preview deployments (VERCEL_ENV not "production") serve them for review, like /sources/preview/.
const ROOT = path.join(process.cwd(), "data");
const TYPES: Record<string, string> = {
  ".csv": "text/csv; charset=utf-8", ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".webp": "image/webp", ".woff2": "font/woff2", ".woff": "font/woff", ".mp3": "audio/mpeg",
};
// Metricool web analytics, RN Collins brand (cookieless; see components/metricool.tsx).
const METRICOOL = '<script>function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"942052526b50735b83e53bcddc0da7be"})});</script>';
const FAVICON = '<link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/favicon-v2.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest">';

export async function gatedFile(kind: "charts" | "interactives", slug: string, parts: string[], download = false) {
  const preview = process.env.VERCEL_ENV !== "production";
  if (!(preview ? sourcePost(slug) : releasedSourcePost(slug))) return new Response("Not found", { status: 404 });
  if (!/^[a-z0-9-]+$/.test(slug) || parts.some((p) => !/^[\w.-]+$/.test(p) || p.startsWith("."))) return new Response("Not found", { status: 404 });
  const file = path.join(ROOT, kind, slug, ...parts);
  if (!file.startsWith(path.join(ROOT, kind, slug) + path.sep)) return new Response("Not found", { status: 404 });
  let body: Buffer;
  try { body = await readFile(file); } catch { return new Response("Not found", { status: 404 }); }
  const ext = path.extname(file).toLowerCase();
  const headers: Record<string, string> = { "Content-Type": TYPES[ext] ?? "application/octet-stream", "Cache-Control": "public, max-age=3600" };
  if (download) headers["Content-Disposition"] = `attachment; filename="${slug}-${parts[parts.length - 1]}"`;
  if (ext === ".html") {
    // RN's rule: every page carries a favicon.
    let html = body.toString("utf8");
    if (!/rel="(shortcut )?icon"/.test(html)) html = /<head[^>]*>/i.test(html) ? html.replace(/<head[^>]*>/i, (m) => m + FAVICON) : html.replace(/<html[^>]*>/i, (m) => m + FAVICON);
    if (!html.includes("tracker.metricool.com")) html = /<\/body>/i.test(html) ? html.replace(/<\/body>/i, METRICOOL + "</body>") : html + METRICOOL;
    return new Response(html, { headers });
  }
  return new Response(new Uint8Array(body), { headers });
}
