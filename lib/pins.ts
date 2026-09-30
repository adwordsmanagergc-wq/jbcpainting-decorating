import { allSuburbs } from "./areas";

export const pins = allSuburbs.map((s) => ({ name: s.name, slug: s.slug, lat: s.latitude, lng: s.longitude }));
