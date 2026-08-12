import { ImageResponse } from "next/og";

export const alt = "RN Selected Work by Rayven-Nikkita Collins";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f3efe4",
        color: "#17251d",
        padding: "64px 72px",
        border: "24px solid #17251d",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", fontSize: 50, fontWeight: 800, letterSpacing: "-0.05em" }}>RN↗</div>
        <div style={{ display: "flex", fontSize: 22, letterSpacing: "0.16em", textTransform: "uppercase" }}>Selected Work · 2026</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontFamily: "serif", fontSize: 104, lineHeight: 0.92, letterSpacing: "-0.055em" }}>Questions too messy</div>
        <div style={{ display: "flex", fontFamily: "serif", fontSize: 104, lineHeight: 0.92, letterSpacing: "-0.055em", color: "#db5c48" }}>for a single discipline.</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 25 }}>
        <div style={{ display: "flex" }}>Rayven-Nikkita (RN) Collins</div>
        <div style={{ display: "flex" }}>Research · systems · working builds</div>
      </div>
    </div>,
    size,
  );
}
