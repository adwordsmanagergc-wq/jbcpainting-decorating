import { business } from "./business";

export function getSuburbMetadata(suburb: { slug: string; name: string; intro: string }) {
  const title = `Painter ${suburb.name} | Professional Painters ${suburb.name} NSW | JBC Painting`;
  const description = `Looking for a painter in ${suburb.name}? JBC Painting & Decorating provides expert interior, exterior & roof painting in ${suburb.name} NSW. Free quotes. Call ${business.phone}.`;
  const url = `${business.siteUrl}/painter/${suburb.slug}`;
  return { title, description, url };
}
