import { previewTarget } from "../../../lib/site-preview";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const PREVIEW_CSP = [
  "default-src 'none'",
  "style-src * 'unsafe-inline'",
  "img-src * data: blob:",
  "font-src * data:",
  "media-src *",
  "base-uri https:",
  "form-action 'none'",
  "script-src 'none'",
  "frame-src 'none'",
  "object-src 'none'",
  "connect-src 'none'",
].join("; ");

function escapeAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

/** Keep the server-rendered page and its CSS. Drop scripts so the preview cannot run as this origin. */
function present(html: string, baseHref: string): string {
  let out = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<script\b[^>]*\/?>/gi, "")
    .replace(/<meta\b[^>]*http-equiv=["']content-security-policy["'][^>]*>/gi, "")
    .replace(/<meta\b[^>]*http-equiv=["']Content-Security-Policy["'][^>]*>/gi, "")
    .replace(/<base\b[^>]*>/gi, "");
  const base = `<base href="${escapeAttr(baseHref)}">`;
  if (/<head\b[^>]*>/i.test(out)) {
    out = out.replace(/<head\b[^>]*>/i, (open) => `${open}${base}`);
  } else {
    out = `<head>${base}</head>${out}`;
  }
  return out;
}

export async function GET(request: Request) {
  const raw = new URL(request.url).searchParams.get("url") ?? "";
  const target = previewTarget(raw);
  if (!target) return new Response("Preview unavailable", { status: 404 });

  let upstream: Response;
  try {
    upstream = await fetch(target, {
      redirect: "follow",
      cache: "no-store",
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": "RNSelectedWorkPreview/1.0",
      },
      signal: AbortSignal.timeout(12000),
    });
  } catch {
    return new Response("Preview unavailable", { status: 502 });
  }

  const finalUrl = previewTarget(upstream.url);
  if (!finalUrl) return new Response("Preview unavailable", { status: 404 });
  const type = upstream.headers.get("content-type") ?? "";
  if (!upstream.ok || !/text\/html|application\/xhtml\+xml/i.test(type)) {
    return new Response("Preview unavailable", { status: 502 });
  }

  const html = await upstream.text();
  if (html.length > 1_500_000) return new Response("Preview unavailable", { status: 502 });

  return new Response(present(html, finalUrl.href), {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Security-Policy": PREVIEW_CSP,
      "Cache-Control": "public, max-age=120",
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag": "noindex",
      "Referrer-Policy": "no-referrer",
    },
  });
}
