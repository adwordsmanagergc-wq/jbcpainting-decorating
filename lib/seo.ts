import { business } from "./business";

export function getSuburbMetadata(suburb: { slug: string; name: string; intro: string }) {
  // Title: keyword-first, under 60 chars, matches "Painter [Suburb]" search intent
  const title = `Painter ${suburb.name} | JBC Painting & Decorating`;

  // Description: 150-160 chars, primary keyword early, USP, CTA
  const description = `Painter in ${suburb.name}? JBC Painting & Decorating delivers expert interior, exterior & roof painting across ${suburb.name} NSW. Licensed, insured & 5-star rated. Free quotes — call ${business.phone}.`;

  const url = `${business.siteUrl}/painter/${suburb.slug}`;
  return { title, description, url };
}
