import { suburbs, type Suburb } from "./suburbs";
import { moreSuburbs } from "./suburbs-more";
import { groupA } from "./suburbs/group-a";
import { groupB } from "./suburbs/group-b";
import { groupC } from "./suburbs/group-c";
import { groupD } from "./suburbs/group-d";
import { groupE } from "./suburbs/group-e";
import { groupF } from "./suburbs/group-f";
import { groupNewcastle } from "./suburbs/group-newcastle";

export const regions = [
  { name: "Gosford & Surrounds", blurb: "Our home turf — Kariong, Gosford CBD and the surrounding valleys, minutes from our base." },
  { name: "Brisbane Water", blurb: "Waterfront suburbs around Brisbane Water, from Point Clare and Tascott to Saratoga and Davistown." },
  { name: "Woy Woy Peninsula", blurb: "Flat, salt-exposed peninsula suburbs where coastal-grade paint systems are a must." },
  { name: "Bouddi Peninsula", blurb: "Bushland and beach villages from Killcare to Wagstaffe — access, BAL ratings and salt air all matter." },
  { name: "Terrigal & Coastal East", blurb: "Beachside and ridge-top homes from Erina to Forresters Beach and MacMasters." },
  { name: "The Entrance & Tuggerah Lakes", blurb: "Lakeside and coastal suburbs between Bateau Bay, Long Jetty and Berkeley Vale." },
  { name: "Wyong & Northern Corridor", blurb: "Established Wyong streets plus the fast-growing Warnervale and Hamlyn Terrace estates." },
  { name: "Budgewoi & Northern Lakes", blurb: "Lake and beach communities from Toukley and Norah Head to Lake Munmorah and Gwandalan." },
  { name: "Hinterland & Hawkesbury", blurb: "Acreage, farmhouses and river retreats across the Mangrove Mountain plateau, valleys and Hawkesbury." },
  { name: "Newcastle", blurb: "Heritage terraces, bungalows and coastal homes — projects scheduled from our Central Coast base." },
] as const;

const legacyRegion: Record<string, string> = {
  kariong: "Gosford & Surrounds", "west-gosford": "Gosford & Surrounds", gosford: "Gosford & Surrounds", "east-gosford": "Gosford & Surrounds",
  narara: "Gosford & Surrounds", wyoming: "Gosford & Surrounds", springfield: "Gosford & Surrounds", somersby: "Gosford & Surrounds",
  "point-clare": "Brisbane Water", tascott: "Brisbane Water", koolewong: "Brisbane Water", "phegans-bay": "Brisbane Water",
  "horsfield-bay": "Brisbane Water", "woy-woy-bay": "Brisbane Water", "green-point": "Brisbane Water", saratoga: "Brisbane Water", kincumber: "Brisbane Water",
  "woy-woy": "Woy Woy Peninsula", "umina-beach": "Woy Woy Peninsula", "ettalong-beach": "Woy Woy Peninsula", "pearl-beach": "Woy Woy Peninsula",
  erina: "Terrigal & Coastal East", terrigal: "Terrigal & Coastal East", wamberal: "Terrigal & Coastal East", "avoca-beach": "Terrigal & Coastal East",
  calga: "Hinterland & Hawkesbury", "mooney-mooney-creek": "Hinterland & Hawkesbury", wondabyne: "Hinterland & Hawkesbury",
};

export const allSuburbs: Suburb[] = [
  ...suburbs,
  ...moreSuburbs,
  ...groupA,
  ...groupB,
  ...groupC,
  ...groupD,
  ...groupE,
  ...groupF,
  ...groupNewcastle,
].map((s) => ({ ...s, region: s.region ?? legacyRegion[s.slug] ?? "Gosford & Surrounds" }));

export const centralCoastSuburbs = allSuburbs.filter((s) => s.region !== "Newcastle");

export function getSuburb(slug: string) {
  return allSuburbs.find((s) => s.slug === slug);
}

export function isNewcastle(s: Suburb) {
  return s.region === "Newcastle";
}

export function suburbsByRegion() {
  return regions
    .map((r) => ({
      region: r.name,
      blurb: r.blurb,
      items: allSuburbs.filter((s) => s.region === r.name).sort((a, b) => (a.slug === "newcastle" ? -1 : b.slug === "newcastle" ? 1 : a.name.localeCompare(b.name))),
    }))
    .filter((g) => g.items.length);
}
