import type { Metadata } from "next";
import { business } from "./business";

const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: `${business.name} — Central Coast painters` };

export function pageMeta({ title, description, path, type = "website" }: { title: string; description: string; path: string; type?: "website" | "article" }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type, locale: "en_AU", siteName: business.name, images: [ogImage] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}
