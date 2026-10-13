import { revalidatePath } from "next/cache";
import { hawaiiToday } from "../../../lib/releases";

// Daily release run. Vercel Cron (vercel.json "crons") calls this at 10:05 UTC, which is 00:05 in Hawaii, and it
// marks every page stale, so each page is rebuilt on its next visit against data/releases.json and that day's
// pieces appear with no hand edit. Pages also recheck themselves hourly (revalidate = 3600) if a run is missed.
// When CRON_SECRET is set in the Vercel project, only a request carrying it is accepted; without it, only the
// Vercel cron agent. A stray call can only refresh pages early, never show an unreleased piece.
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const ok = secret
    ? request.headers.get("authorization") === `Bearer ${secret}`
    : (request.headers.get("user-agent") ?? "").startsWith("vercel-cron/");
  if (!ok) return new Response("Not found", { status: 404 });
  revalidatePath("/", "layout");
  return Response.json({ refreshed: true, hawaiiDate: hawaiiToday() });
}
