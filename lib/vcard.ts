import hub from "../data/links-hub.json";
import social from "../data/social-links.json";

// "Save contact" vCard for RN's card (/links, /connect, /work-with-me). Coordinator spec, Nov 22 (RN: "all"):
// name "RN Collins" only (never her legal name), no phone, every card email with its label, and the links for both
// brands. The emails live ONLY in the Vercel env var VCARD_EMAILS, as JSON [{"label":"...","email":"..."}], never
// in git. With no valid value the card is not offered: the routes 404 and the buttons are hidden.
type Mail = { label: string; email: string };

export function vcardEmails(): Mail[] {
  try {
    const v = JSON.parse(process.env.VCARD_EMAILS ?? "[]");
    return Array.isArray(v) ? v.filter((m) => m && typeof m.email === "string" && m.email.includes("@")) : [];
  } catch {
    return [];
  }
}

export const hasVcard = () => vcardEmails().length > 0;

const esc = (t: string) => t.replace(/\\/g, "\\\\").replace(/([,;])/g, "\\$1").replace(/\n/g, "\\n");

export function vcard() {
  const mails = vcardEmails();
  if (!mails.length) return null;
  const s = social as Record<"rn" | "aan", { accounts: { id: string; url: string }[] }>;
  const profiles = (["rn", "aan"] as const).flatMap((b) =>
    s[b].accounts.filter((a) => ["instagram", "tiktok", "youtube", "bluesky", "pinterest"].includes(a.id)));
  const lines = [
    "BEGIN:VCARD", "VERSION:3.0", "N:Collins;RN;;;", "FN:RN Collins",
    `TITLE:${esc(hub.title)}`,
    ...mails.flatMap((m, i) => [`item${i + 1}.EMAIL;TYPE=INTERNET,WORK:${m.email}`, `item${i + 1}.X-ABLabel:${esc(m.label)}`]),
    "URL;TYPE=WORK:https://rn-selected-work.vercel.app/links",
    "URL:https://askaneuroscientist.vercel.app",
    "URL:https://polymath-rn-collins.beehiiv.com",
    ...profiles.map((a) => `X-SOCIALPROFILE;TYPE=${a.id}:${a.url}`),
    ...profiles.map((a) => `URL:${a.url}`),
    "END:VCARD",
  ];
  return lines.join("\r\n") + "\r\n";
}

export function vcardResponse() {
  const body = vcard();
  if (!body) return new Response("Not found", { status: 404 });
  return new Response(body, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="RN-Collins.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
