import { suburbs, type Suburb } from "./suburbs";
import { moreSuburbs } from "./suburbs-more";
import { groupA } from "./suburbs/group-a";
import { groupB } from "./suburbs/group-b";
import { groupC } from "./suburbs/group-c";
import { groupD } from "./suburbs/group-d";
import { groupE } from "./suburbs/group-e";
import { groupF } from "./suburbs/group-f";
import { groupNewcastle } from "./suburbs/group-newcastle";
import { groupSouth1 } from "./suburbs/group-south-1";
import { groupSouth2 } from "./suburbs/group-south-2";
import { groupSouth3 } from "./suburbs/group-south-3";
import { groupLm1 } from "./suburbs/group-lm-1";
import { groupLm2 } from "./suburbs/group-lm-2";
import { groupLm3 } from "./suburbs/group-lm-3";
import { groupLm4 } from "./suburbs/group-lm-4";
import { groupLm5 } from "./suburbs/group-lm-5";
import { groupLm6 } from "./suburbs/group-lm-6";

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
  { name: "Hawkesbury River & Hills", blurb: "River villages, water-access homes and acreage from Brooklyn and Dangar Island up to Wisemans Ferry, plus Galston, Arcadia and Dural." },
  { name: "Berowra to Hornsby", blurb: "Bush-edge ridgeline suburbs along the rail line from Berowra and Mount Kuring-gai down to Hornsby and Waitara." },
  { name: "Pittwater & Northern Beaches", blurb: "Beach, bay and island homes from Palm Beach and Avalon to Mona Vale, plus the Terrey Hills and Duffys Forest acreage." },
  { name: "Morisset & Southern Lake", blurb: "Lakeside villages, peninsula streets and acreage from Wyee and Morisset around to Wangi Wangi, the closest of the Lake Macquarie suburbs to our Kariong base." },
  { name: "Toronto & Western Lake", blurb: "Toronto, the western bays and the old mining towns from Teralba and Speers Point up to Cardiff, Edgeworth and West Wallsend." },
  { name: "Swansea & Eastern Lake", blurb: "Beach, channel and lakefront suburbs from Catherine Hill Bay and Swansea up through Belmont and Warners Bay to Charlestown's fringe." },
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
  ...groupSouth1,
  ...groupSouth2,
  ...groupSouth3,
  ...groupLm1,
  ...groupLm2,
  ...groupLm3,
  ...groupLm4,
  ...groupLm5,
  ...groupLm6,
  ...groupNewcastle,
].map((s) => ({ ...s, region: s.region ?? legacyRegion[s.slug] ?? "Gosford & Surrounds" }));

export const lakeMacquarieRegions = ["Morisset & Southern Lake", "Toronto & Western Lake", "Swansea & Eastern Lake"];

export function isLakeMacquarie(s: Suburb) {
  return lakeMacquarieRegions.includes(s.region ?? "");
}

export const sydneyRegions = ["Hawkesbury River & Hills", "Berowra to Hornsby", "Pittwater & Northern Beaches"];

export function isSydneyNorth(s: Suburb) {
  return sydneyRegions.includes(s.region ?? "");
}

export const centralCoastSuburbs = allSuburbs.filter((s) => s.region !== "Newcastle" && !isLakeMacquarie(s) && !isSydneyNorth(s));
export const sydneyNorthSuburbs = allSuburbs.filter((s) => isSydneyNorth(s));
export const lakeMacquarieSuburbs = allSuburbs.filter((s) => isLakeMacquarie(s));

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
