import type { Metadata, Viewport } from "next";
import QRCode from "qrcode";

// Full-screen QR code to /links, for RN to show on her phone (coordinator spec, Nov 22). Server-rendered SVG: no
// script, no trackers. Dark on light, with a quiet zone, so phone cameras read it from a lit screen.
export const metadata: Metadata = {
  title: "RN Collins: QR code",
  robots: { index: false, follow: false },
  alternates: { canonical: "/links/qr" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f3efe4" };

const TARGET = "https://rn-selected-work.vercel.app/links";

export default async function QrPage() {
  const svg = await QRCode.toString(TARGET, { type: "svg", errorCorrectionLevel: "M", margin: 2, color: { dark: "#17251d", light: "#ffffff" } });
  return (
    <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", background: "#f3efe4", color: "#17251d", padding: "6vmin", textAlign: "center" }}>
      <div style={{ width: "min(88vw, 70vh)" }}>
        <p style={{ font: "italic 800 clamp(30px, 9vw, 56px)/1 'Playfair Display', Georgia, serif", margin: "0 0 4vmin" }}>RN Collins</p>
        <div style={{ background: "#fff", border: "6px solid #17251d", boxShadow: "10px 10px 0 #d9ff4f", lineHeight: 0 }} role="img" aria-label="QR code for rn-selected-work.vercel.app/links" dangerouslySetInnerHTML={{ __html: svg }} />
        <p style={{ font: "500 14px 'IBM Plex Mono', monospace", letterSpacing: ".06em", margin: "4vmin 0 0" }}>rn-selected-work.vercel.app/links</p>
        <p style={{ margin: "3vmin 0 0" }}><a href="/links" style={{ color: "inherit" }}>Back to links</a></p>
      </div>
    </main>
  );
}
