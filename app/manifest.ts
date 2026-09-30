import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JBC Painting & Decorating",
    short_name: "JBC Painting",
    description: "Painters based in Kariong NSW, servicing the Central Coast & Newcastle.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F2EA",
    theme_color: "#173526",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}
