import { ImageResponse } from "next/og";

export const alt = "JBC Painting & Decorating — Central Coast painters";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const swatches = ["#2E8B47", "#D68A3A", "#E4D7C3", "#8FB9A0", "#F7F2EA"];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#173526", color: "#fff", padding: 72 }}>
        <div style={{ display: "flex", fontSize: 28, color: "#D3E9D7", letterSpacing: 4, textTransform: "uppercase" }}>Kariong · Central Coast & Newcastle</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.02 }}>JBC Painting</div>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.02, color: "#D68A3A" }}>& Decorating</div>
          <div style={{ marginTop: 28, fontSize: 34, color: "rgba(255,255,255,.8)" }}>Interior · Exterior · Roof · Strata · Commercial</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex" }}>
            {swatches.map((c) => (
              <div key={c} style={{ width: 72, height: 20, background: c }} />
            ))}
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>0402 360 514</div>
        </div>
      </div>
    ),
    size,
  );
}
