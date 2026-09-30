import { business } from "./business";

export function getSuburbMetadata(suburb: { slug: string; name: string; postcode: string; region?: string }) {
  const newcastle = suburb.region === "Newcastle";
  // Keyword-first title (<60 chars) matching "painter [suburb]" search intent
  const title =
    `Painter ${suburb.name} NSW ${suburb.postcode} | JBC Painting & Decorating`.length <= 62
      ? `Painter ${suburb.name} NSW ${suburb.postcode} | JBC Painting & Decorating`
      : `Painter ${suburb.name} NSW | JBC Painting & Decorating`;
  const description = newcastle
    ? `House painter for ${suburb.name}. Interior, exterior & roof painting with Dulux & Haymes. Licensed, insured, 20+ yrs. Free itemised quotes: ${business.phone}.`
    : `Local painter in ${suburb.name}. Interior, exterior & roof painting with Dulux & Haymes. Licensed, insured, 5-star rated. Free quote: ${business.phone}.`;
  const path = `/painter/${suburb.slug}`;
  return { title, description, path, url: `${business.siteUrl}${path}` };
}
