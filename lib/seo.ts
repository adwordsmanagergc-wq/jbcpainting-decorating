import { business } from "./business";

export function getSuburbMetadata(suburb: { slug: string; name: string; postcode: string; region?: string }) {
  const newcastle = suburb.region === "Newcastle";
  const lakeMac = ["Morisset & Southern Lake", "Toronto & Western Lake", "Swansea & Eastern Lake"].includes(suburb.region ?? "");
  // Keyword-first title (<60 chars) matching "painter [suburb]" search intent
  const title =
    `Painter ${suburb.name} NSW ${suburb.postcode} | JBC Painting & Decorating`.length <= 62
      ? `Painter ${suburb.name} NSW ${suburb.postcode} | JBC Painting & Decorating`
      : `Painter ${suburb.name} NSW | JBC Painting & Decorating`;
  const description = lakeMac
    ? `Painter for ${suburb.name}, Lake Macquarie. Interior, exterior & roof painting with Dulux & Haymes. Licensed, insured, 20+ yrs. Free quotes: ${business.phone}.`
    : newcastle
    ? `House painter for ${suburb.name}. Interior, exterior & roof painting with Dulux & Haymes. Licensed, insured, 20+ yrs. Free itemised quotes: ${business.phone}.`
    : `Local painter in ${suburb.name}. Interior, exterior & roof painting with Dulux & Haymes. Licensed, insured, 5-star rated. Free quote: ${business.phone}.`;
  const path = `/painter/${suburb.slug}`;
  return { title, description, path, url: `${business.siteUrl}${path}` };
}
