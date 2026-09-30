import { suburbs, type Suburb } from "./suburbs";
import { moreSuburbs } from "./suburbs-more";

export const allSuburbs: Suburb[] = [...suburbs, ...moreSuburbs];

export function getSuburb(slug: string) {
  return allSuburbs.find((s) => s.slug === slug);
}

const regionMap: Record<string, string[]> = {
  "Kariong & Gosford": ["kariong", "west-gosford", "gosford", "east-gosford", "narara", "wyoming", "springfield", "somersby", "calga"],
  "Brisbane Water": ["point-clare", "tascott", "koolewong", "phegans-bay", "horsfield-bay", "woy-woy-bay", "mooney-mooney-creek", "wondabyne", "green-point", "saratoga", "kincumber"],
  "Woy Woy Peninsula": ["woy-woy", "umina-beach", "ettalong-beach", "pearl-beach"],
  "Coastal East": ["erina", "terrigal", "wamberal", "avoca-beach"],
};

export function suburbsByRegion() {
  const seen = new Set<string>();
  const groups = Object.entries(regionMap).map(([region, slugs]) => {
    const items = slugs.map(getSuburb).filter((s): s is Suburb => Boolean(s));
    items.forEach((s) => seen.add(s.slug));
    return { region, items };
  });
  const rest = allSuburbs.filter((s) => !seen.has(s.slug));
  if (rest.length) groups.push({ region: "More Central Coast", items: rest });
  return groups.filter((g) => g.items.length);
}
