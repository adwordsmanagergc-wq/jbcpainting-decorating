import type { MetadataRoute } from "next";
import { allSuburbs } from "@/lib/areas";
import { services } from "@/lib/services";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.siteUrl;
  const lastModified = new Date();
  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${base}/areas`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...allSuburbs.map((s) => ({ url: `${base}/painter/${s.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${base}/painting-cost-central-coast`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
}
