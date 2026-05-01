import { MetadataRoute } from "next";
import { suburbs } from "@/lib/suburbs";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.siteUrl;
  const suburbPages = suburbs.map((s) => ({
    url: `${base}/painter/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    ...suburbPages,
  ];
}
