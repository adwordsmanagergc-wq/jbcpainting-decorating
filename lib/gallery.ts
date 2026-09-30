export type GalleryCategory = "Exterior" | "Interior" | "Roof" | "Commercial" | "Decks";

export interface Photo {
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

const p = (file: string, alt: string, category: GalleryCategory, width: number, height: number): Photo => ({
  src: `/images/gallery/${file}`,
  alt,
  category,
  width,
  height,
});

export const photos: Photo[] = [
  p("jbc-06-exterior-two-storey-facade.jpg", "Two-storey weatherboard facade repainted in grey and white with a navy front door", "Exterior", 1440, 1800),
  p("jbc-12-exterior-heritage-cottage.jpg", "Heritage cottage with white picket fence freshly painted by JBC", "Exterior", 1440, 1080),
  p("jbc-01-exterior-modern-home.jpg", "Modern single-storey home exterior painted in white and charcoal", "Exterior", 1440, 1080),
  p("jbc-13-exterior-white-home.jpg", "Rendered home repainted crisp white with dark window frames", "Exterior", 1440, 1799),
  p("jbc-26-exterior-white-brick-black-stairs.jpg", "Painted white brick home with black steel staircase and balustrade", "Exterior", 1440, 1438),
  p("jbc-22-exterior-queenslander.jpg", "Elevated Queenslander-style home with wraparound verandah repainted", "Exterior", 1440, 1436),
  p("jbc-07-exterior-two-storey-home.jpg", "New two-storey home exterior painted white with grey trims", "Exterior", 1440, 1405),
  p("jbc-15-exterior-deck-stairs.jpg", "Weatherboard home with painted deck stairs and balustrade", "Exterior", 1440, 1334),
  p("jbc-02-exterior-weatherboard-window.jpg", "Weatherboard wall and window frame prepared and painted white", "Exterior", 1440, 1080),
  p("jbc-18-exterior-sunroom.jpg", "Sunroom extension with painted weatherboards and window frames", "Exterior", 1440, 1436),
  p("jbc-08-exterior-garden-studio.jpg", "Garden studio painted white with decking and balustrade", "Exterior", 1440, 1080),
  p("jbc-09-exterior-home-carport.jpg", "Brick home with painted carport, fascias and eaves", "Exterior", 1440, 1080),
  p("jbc-21-exterior-modern-split-level.jpg", "Modern split-level home painted in white and grey", "Exterior", 750, 750),
  p("jbc-28-exterior-new-home-facade.jpg", "New home facade painted white with grey feature cladding", "Exterior", 726, 722),
  p("jbc-04-exterior-townhouses.jpg", "Two-storey townhouse complex exterior repaint", "Exterior", 1440, 1080),
  p("jbc-20-interior-living-room.jpg", "Bright living room with freshly painted white walls and timber floors", "Interior", 1440, 1440),
  p("jbc-03-interior-vaulted-ceiling-skylight.jpg", "Vaulted ceiling with exposed rafters and skylights painted white", "Interior", 1440, 1080),
  p("jbc-05-interior-staircase.jpg", "Grand staircase with painted walls and timber balustrade", "Interior", 1440, 1920),
  p("jbc-19-interior-timber-staircase.jpg", "Timber staircase with freshly painted walls and white trims", "Interior", 1440, 1440),
  p("jbc-27-interior-open-plan.jpg", "Open-plan interior with high ceilings painted white", "Interior", 749, 749),
  p("jbc-10-interior-hallway.jpg", "Hallway with crisp white walls, doors and architraves", "Interior", 1440, 1085),
  p("jbc-17-interior-window-trim.jpg", "Timber window frame and trims painted in satin enamel", "Interior", 1440, 1440),
  p("jbc-23-roof-green-colorbond.jpg", "Colorbond roof restored and recoated in green", "Roof", 1440, 1436),
  p("jbc-24-roof-painting-in-progress.jpg", "JBC painter applying roof coating to a metal roof", "Roof", 1440, 1440),
  p("jbc-11-commercial-restaurant-interior.jpg", "Restaurant interior with painted walls and exposed beams", "Commercial", 1440, 1080),
  p("jbc-14-commercial-club-interior.jpg", "Club gaming room interior repainted after hours", "Commercial", 1440, 1081),
  p("jbc-16-commercial-brick-building.jpg", "Commercial brick building with painted cladding and trims", "Commercial", 1440, 1440),
  p("jbc-25-deck-stain-finish.jpg", "Hardwood deck and pergola stained and sealed", "Decks", 1435, 1430),
];

export const photo = (file: string) => photos.find((x) => x.src.endsWith(file))!;

export const exteriorPhotos = photos.filter((x) => x.category === "Exterior");

/** Deterministic pick so each suburb page shows a different, stable set of photos. */
export function photosForSlug(slug: string, count = 4): Photo[] {
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const out: Photo[] = [];
  for (let i = 0; out.length < count; i++) {
    const cand = photos[(h + i * 7) % photos.length];
    if (!out.includes(cand)) out.push(cand);
  }
  return out;
}

export function heroForSlug(slug: string): Photo {
  let h = 0;
  for (const c of slug) h = (h * 17 + c.charCodeAt(0)) >>> 0;
  return exteriorPhotos[h % exteriorPhotos.length];
}

/** Photos for a category first, topped up with others so a strip always has enough. */
export function photosFor(category: GalleryCategory | undefined, min = 8): Photo[] {
  const first = category ? photos.filter((x) => x.category === category) : [];
  return [...first, ...photos.filter((x) => !first.includes(x))].slice(0, Math.max(min, first.length));
}

export const serviceCategory: Record<string, GalleryCategory> = {
  "interior-painting": "Interior",
  "exterior-painting": "Exterior",
  "roof-painting": "Roof",
  "commercial-painting": "Commercial",
  "strata-painting": "Exterior",
  "new-home-painting": "Exterior",
  "feature-walls-decorative-finishes": "Interior",
  "deck-staining": "Decks",
};
