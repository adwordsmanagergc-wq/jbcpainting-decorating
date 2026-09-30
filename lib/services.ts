export type ServiceIcon = "home" | "building" | "roof" | "store" | "apartment" | "key" | "brush";

export interface Service {
  slug: string;
  name: string;
  icon: ServiceIcon;
  image: number;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  summary: string;
  intro: string[];
  includes: string[];
  sections: { heading: string; body: string }[];
  priceGuide: { item: string; range: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "interior-painting",
    name: "Interior Painting",
    icon: "home",
    image: 0,
    metaTitle: "Interior Painters Central Coast | Walls, Ceilings & Trims | JBC",
    metaDescription:
      "Interior painters on the Central Coast — walls, ceilings, doors & trims. Low-VOC Dulux & Haymes paints, spotless clean-up. Free quote: 0402 360 514.",
    h1: "Interior Painters on the Central Coast",
    tagline: "Crisp lines, smooth walls and a home that feels brand new.",
    summary: "Walls, ceilings, doors, trims and skirting — finished with low-odour Dulux & Haymes paints.",
    intro: [
      "A fresh interior repaint is the single most cost-effective way to lift how your home looks and feels. At JBC Painting & Decorating we treat every room like our own — furniture moved and covered, floors protected, and every crack filled and sanded before a drop of topcoat goes on.",
      "From single-room refreshes in Kariong to full top-to-bottom repaints of Terrigal beach houses, our interior painters deliver sharp cut-ins, an even sheen and a home that's left cleaner than we found it.",
    ],
    includes: [
      "Walls, ceilings, cornices & bulkheads",
      "Doors, frames, architraves & skirting boards",
      "Plaster patching, crack repair & sanding",
      "Stain-blocking & mould-resistant primers for wet areas",
      "Low-VOC / low-odour paint options for occupied homes",
      "Stairwells, voids & high ceilings",
      "Kitchen cabinet & built-in painting",
      "Full clean-up and furniture reset",
    ],
    sections: [
      {
        heading: "Preparation is 80% of the finish",
        body: "Most paint failures come from rushed prep. We wash down greasy kitchen walls, spot-prime stains, fill nail holes and settlement cracks, sand glossy trims so the new coat grips, and seal fresh plaster before painting. It's the unglamorous work that makes the difference between a job that looks good for a year and one that looks good for a decade.",
      },
      {
        heading: "The right sheen for every room",
        body: "Low-sheen washable finishes for living areas and bedrooms, flat ceiling white to hide imperfections, and semi-gloss or gloss enamel on trims and doors for durability. For bathrooms and laundries on the humid Central Coast we use mould-inhibiting paints designed for wet areas.",
      },
      {
        heading: "Painting around your life",
        body: "Most of our interior clients stay in their home while we work. We paint in stages, keep bedrooms usable overnight, and use low-odour paints so kids and pets aren't bothered. Rental and pre-sale repaints can be turned around fast to minimise vacancy.",
      },
    ],
    priceGuide: [
      { item: "Single bedroom (walls only)", range: "$450 – $850" },
      { item: "Walls, ceilings & trims — 3 bed home", range: "$6,000 – $10,500" },
      { item: "Walls, ceilings & trims — 4 bed home", range: "$8,000 – $14,000" },
      { item: "Per m² (walls, standard condition)", range: "$18 – $35" },
    ],
    faqs: [
      { question: "How long does an interior repaint take?", answer: "A single room is usually done in a day. A full 3-bedroom interior typically takes 4–6 working days depending on the amount of patching, the number of colours and whether ceilings and trims are included." },
      { question: "Do I need to move out while you paint?", answer: "No. We work room by room, protect furniture and floors, and use low-odour paints so you can stay comfortably at home throughout the job." },
      { question: "Which paint do you use for interiors?", answer: "We use premium Dulux (Wash&Wear) and Haymes (Ultra Premium) interior ranges — washable, low-VOC and backed by manufacturer warranties." },
      { question: "Can you paint over dark colours or feature walls?", answer: "Yes. We use a tinted sealer-undercoat to block out strong colours so your new colour covers evenly without needing excessive coats." },
    ],
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    icon: "building",
    image: 1,
    metaTitle: "Exterior House Painters Central Coast | JBC Painting",
    metaDescription:
      "Exterior house painting on the Central Coast — weatherboard, render, brick & fibro. Coastal-grade Dulux & Haymes systems. Free quote: 0402 360 514.",
    h1: "Exterior House Painting, Built for Coastal Conditions",
    tagline: "Salt air, humidity and harsh UV — we paint for the Coast.",
    summary: "Weatherboard, render, brick, fibro, eaves and fascias — with coatings made for salt air and UV.",
    intro: [
      "The Central Coast is tough on paint. Salt-laden sea breezes around Terrigal and Umina, humid bushland gullies in Kariong and Somersby, and fierce summer UV all break down low-grade coatings fast. Our exterior systems are chosen to stand up to exactly these conditions.",
      "Every exterior repaint starts with a thorough pressure wash, scraping of loose paint, timber repairs and gap filling, and the correct primer for each substrate — then two full coats of premium exterior acrylic.",
    ],
    includes: [
      "Pressure washing & mould treatment",
      "Weatherboard, fibro, render, brick & Hebel",
      "Eaves, fascias, gutters & downpipes",
      "Windows, doors, frames & security screens",
      "Timber repairs & flexible gap sealing",
      "Decks, balustrades & pergolas",
      "Fences & retaining walls",
      "Colour consultation for street appeal",
    ],
    sections: [
      {
        heading: "Coastal-grade paint systems",
        body: "Within a few kilometres of the ocean we specify premium 100% acrylic exterior paints such as Dulux Weathershield and Haymes Solashield — flexible, breathable, UV-stable and formulated to resist mould and salt. Metal surfaces get rust-inhibiting primers before topcoating.",
      },
      {
        heading: "Every substrate, prepared properly",
        body: "Bare weatherboard is primed with an oil-alkyd or acrylic timber primer, chalky surfaces are sealed with a binding primer, and cracked render is patched with a flexible filler. Older homes get lead-safe work practices in line with SafeWork NSW guidance.",
      },
      {
        heading: "Selling soon? Exterior paint pays",
        body: "Kerb appeal drives first impressions. A clean, well-chosen exterior colour scheme is one of the highest-return pre-sale improvements a Central Coast homeowner can make — and we can usually schedule pre-sale jobs around your agent's campaign dates.",
      },
    ],
    priceGuide: [
      { item: "Single-storey 3 bed, brick with trims", range: "$4,500 – $8,000" },
      { item: "Single-storey weatherboard, 3–4 bed", range: "$8,000 – $14,000" },
      { item: "Double-storey rendered home", range: "$10,000 – $18,000+" },
      { item: "Eaves, fascias & gutters only", range: "$2,000 – $4,500" },
    ],
    faqs: [
      { question: "How often should I repaint my exterior on the Central Coast?", answer: "With quality paint and proper prep, most exteriors last 8–12 years. Beachfront homes exposed to salt and wind may need a refresh of the most exposed elevations every 5–7 years." },
      { question: "What's the best time of year for exterior painting?", answer: "Spring and autumn are ideal, but we paint year-round. We monitor forecasts closely and avoid painting in rain, high humidity or temperatures outside the manufacturer's recommended range." },
      { question: "Can you paint render and brick?", answer: "Yes. Render and bagged brick are painted with a masonry sealer followed by two coats of premium exterior acrylic. Face brick can be painted too, although we'll talk through the pros and cons first." },
      { question: "Do you handle lead paint on older homes?", answer: "Homes built before 1970 may contain lead paint. We follow lead-safe practices — wet scraping, containment and HEPA vacuuming — and never dry-sand or burn off suspected lead paint." },
    ],
  },
  {
    slug: "roof-painting",
    name: "Roof Painting",
    icon: "roof",
    image: 2,
    metaTitle: "Roof Painting Central Coast | Tile & Metal Roofs | JBC",
    metaDescription:
      "Roof painting & restoration on the Central Coast — tile & Colorbond roofs. Pressure clean, repairs & membrane coatings. Free quote: 0402 360 514.",
    h1: "Roof Painting & Restoration on the Central Coast",
    tagline: "Add years to your roof — and instant street appeal.",
    summary: "Concrete tile, terracotta and metal roofs cleaned, repaired and recoated with membrane systems.",
    intro: [
      "A faded, mossy roof drags down the look of the whole house — and porous tiles let moisture in. Roof painting restores weather resistance and can dramatically lift the value and appeal of your property for a fraction of the cost of replacement.",
      "We high-pressure clean, treat moss and lichen, replace broken tiles, check pointing and flashings, then apply a primer/sealer and two coats of flexible roof membrane in the colour of your choice.",
    ],
    includes: [
      "High-pressure cleaning & moss/lichen treatment",
      "Broken tile replacement",
      "Ridge capping re-bedding & flexible re-pointing",
      "Primer / sealer on porous concrete tiles",
      "Two coats of roof membrane or metal roof paint",
      "Colorbond & Zincalume rust treatment",
      "Gutters, valleys & flashings checked",
      "Heat-reflective coating options",
    ],
    sections: [
      {
        heading: "Tile roofs",
        body: "Older concrete tiles become porous and chalky. After cleaning we apply a penetrating primer-sealer to bind the surface, then two coats of an elastomeric roof membrane that flexes with temperature changes and resists cracking.",
      },
      {
        heading: "Metal & Colorbond roofs",
        body: "Faded or chalking metal roofs are cleaned, rust spots are treated and primed, and the roof is recoated in a metal-specific acrylic that matches or refreshes the original Colorbond colour.",
      },
      {
        heading: "Cooler homes with reflective coatings",
        body: "Heat-reflective roof coatings bounce more of the summer sun away from your ceiling space, helping keep upstairs rooms cooler — a popular option for Central Coast homes with dark roofs.",
      },
    ],
    priceGuide: [
      { item: "Small single-storey tile roof", range: "$3,500 – $5,500" },
      { item: "Average 4 bed tile roof (restore + paint)", range: "$5,000 – $8,000" },
      { item: "Metal / Colorbond roof repaint", range: "$4,000 – $7,500" },
    ],
    faqs: [
      { question: "Is my roof suitable for painting?", answer: "Most concrete tile and metal roofs can be painted. Terracotta tiles are usually better cleaned and sealed rather than painted. We'll inspect and give an honest recommendation." },
      { question: "How long does a roof restoration take?", answer: "Typically 3–5 days for an average home, allowing for cleaning, repairs, drying time and two coats — weather dependent." },
      { question: "How long does a painted roof last?", answer: "A properly prepared roof coated with a quality membrane system generally lasts 10–15 years." },
    ],
  },
  {
    slug: "commercial-painting",
    name: "Commercial Painting",
    icon: "store",
    image: 3,
    metaTitle: "Commercial Painters Central Coast | JBC Painting",
    metaDescription:
      "Commercial painting on the Central Coast — offices, shops, cafés, medical & industrial sites. After-hours work, SWMS & full insurance. Free quote: 0402 360 514.",
    h1: "Commercial Painters for Central Coast Businesses",
    tagline: "Minimal disruption. Maximum impact.",
    summary: "Offices, shops, cafés, medical and industrial sites — after-hours scheduling available.",
    intro: [
      "Your premises are part of your brand. JBC Painting & Decorating helps Central Coast businesses in Gosford, Erina, Somersby and beyond look sharp — with scheduling built around your trading hours.",
      "We work nights and weekends where needed, provide Safe Work Method Statements, carry full public liability cover and keep sites tidy so staff and customers are never inconvenienced.",
    ],
    includes: [
      "Offices, showrooms & retail fit-outs",
      "Cafés, restaurants & hospitality venues",
      "Medical, dental & allied-health clinics",
      "Warehouses & light industrial units (Somersby, West Gosford)",
      "Line marking-ready floor coatings",
      "After-hours & weekend work",
      "SWMS, insurances & site inductions",
      "Brand-colour matching",
    ],
    sections: [
      {
        heading: "Scheduled around your business",
        body: "We plan staged works so you can keep trading. Retail and hospitality jobs are often done overnight or on closed days, and offices can be painted zone by zone.",
      },
      {
        heading: "Durable, compliant finishes",
        body: "High-traffic commercial areas need scrubbable, low-VOC coatings. We specify commercial-grade Dulux and Haymes systems, anti-graffiti coatings for exposed walls, and hygienic finishes for clinics and food premises.",
      },
    ],
    priceGuide: [
      { item: "Small office / shop interior", range: "$2,500 – $6,000" },
      { item: "Retail or café refresh (after-hours)", range: "$4,000 – $12,000" },
      { item: "Industrial unit exterior", range: "Quoted per site" },
    ],
    faqs: [
      { question: "Can you work after hours?", answer: "Yes. Nights, weekends and public holidays can be scheduled so your business keeps running without disruption." },
      { question: "Do you provide insurance certificates and SWMS?", answer: "Yes. We supply certificates of currency and Safe Work Method Statements before starting, and complete any site inductions required." },
    ],
  },
  {
    slug: "strata-painting",
    name: "Strata Painting",
    icon: "apartment",
    image: 4,
    metaTitle: "Strata Painters Central Coast | Units & Villas | JBC",
    metaDescription:
      "Strata painting for Central Coast units, villas & townhouses — common areas, stairwells & exteriors. Itemised quotes for committees. Call 0402 360 514.",
    h1: "Strata Painting for Owners' Corporations",
    tagline: "Clear quotes, clear communication, zero surprises.",
    summary: "Unit blocks, villas and townhouse complexes — common areas, stairwells and full exteriors.",
    intro: [
      "We work with strata managers and owners' committees across the Central Coast to maintain and refresh residential complexes — from villa groups in Kariong and Woy Woy to unit blocks in Gosford and Terrigal.",
      "Detailed scopes, itemised quotes for committee approval, resident notices and tidy, safe sites make us an easy contractor to work with.",
    ],
    includes: [
      "Full building exteriors",
      "Stairwells, lobbies & corridors",
      "Balconies, balustrades & handrails",
      "Garage doors & car parks",
      "Line marking & signage repaint",
      "Resident notices & staged access",
      "Itemised quotes for AGM approval",
      "Maintenance painting programs",
    ],
    sections: [
      {
        heading: "Built for committee approval",
        body: "Our quotes break down every element — walls, trims, balconies, stairwells — so committees can compare apples with apples and approve staged works if the budget requires it.",
      },
      {
        heading: "Respectful of residents",
        body: "We issue notices before work starts, keep access paths clear, and schedule noisy prep work at reasonable hours so residents are disturbed as little as possible.",
      },
    ],
    priceGuide: [
      { item: "Stairwell & common-area refresh", range: "$3,000 – $9,000" },
      { item: "Villa complex exterior (per villa)", range: "$4,000 – $7,500" },
      { item: "Unit block exterior", range: "Quoted per building" },
    ],
    faqs: [
      { question: "Can you quote for our next AGM?", answer: "Yes. We'll inspect the site and provide an itemised written quote in time for your committee meeting or AGM." },
      { question: "Do you work with strata managers?", answer: "Yes — we're happy to liaise directly with your strata manager for access, notices, insurances and invoicing." },
    ],
  },
  {
    slug: "new-home-painting",
    name: "New Home Painting",
    icon: "key",
    image: 5,
    metaTitle: "New Home Painters Central Coast | Builders | JBC",
    metaDescription:
      "Painting for new homes, extensions & renovations on the Central Coast. Reliable painters for builders & owner-builders. Call 0402 360 514.",
    h1: "New Home & Renovation Painting",
    tagline: "On time, on budget and ready for handover.",
    summary: "New builds, extensions and renovations — reliable painters for builders and owner-builders.",
    intro: [
      "Builders and owner-builders across the Central Coast trust JBC to turn up when scheduled and deliver a handover-ready finish. Fresh plasterboard, new timber and new render all need the right sealers and undercoats — we get it right the first time.",
      "Whether it's a knock-down rebuild in Point Clare, an extension in Erina or a granny flat in Umina Beach, we'll work to your build program.",
    ],
    includes: [
      "Sealing & painting new plasterboard",
      "Doors, frames, skirting & architraves",
      "New render & cladding exteriors",
      "Extensions & granny flats",
      "Touch-ups & defects before handover",
      "Work to builder schedules",
    ],
    sections: [
      {
        heading: "Reliable for builders",
        body: "We know a painter who doesn't show up holds up the whole job. We commit to dates, communicate early, and co-ordinate with other trades on site.",
      },
      {
        heading: "Owner-builders welcome",
        body: "Building your own home? We'll help you plan the painting stage, advise on colours and sheen levels, and handle prep through to final touch-ups.",
      },
    ],
    priceGuide: [
      { item: "New 3–4 bed home interior", range: "$9,000 – $16,000" },
      { item: "Extension or granny flat", range: "$3,000 – $8,000" },
    ],
    faqs: [
      { question: "Do you work for builders?", answer: "Yes, we regularly work for builders and owner-builders across the Central Coast and can supply all insurances and documentation." },
      { question: "Can you do touch-ups before handover?", answer: "Yes — we complete a full defects walk-through and touch-up so the home is handover-ready." },
    ],
  },
  {
    slug: "feature-walls-decorative-finishes",
    name: "Feature Walls & Decorative Finishes",
    icon: "brush",
    image: 6,
    metaTitle: "Feature Walls & Decorative Painting Central Coast | JBC Painting",
    metaDescription:
      "Feature walls, limewash, texture coatings & decorative paint finishes on the Central Coast. Colour consultation included. Free quote — call JBC on 0402 360 514.",
    h1: "Feature Walls & Decorative Finishes",
    tagline: "Colour and texture that gives your home character.",
    summary: "Feature walls, limewash, texture coatings and colour-blocking with free colour advice.",
    intro: [
      "Sometimes one wall changes everything. We create feature walls, colour-blocked arches, limewash and textured finishes, and elegant two-tone schemes that add warmth and personality to Central Coast homes.",
      "Not sure where to start? Our free colour consultation walks you through Dulux and Haymes palettes that suit your light, flooring and furnishings.",
    ],
    includes: [
      "Feature walls & accent colours",
      "Limewash & mineral-look finishes",
      "Texture coatings & render effects",
      "Colour-blocking, arches & murals-style shapes",
      "Kids' rooms & nurseries",
      "Free colour consultation",
    ],
    sections: [
      {
        heading: "Colour consultation included",
        body: "We bring swatches, look at how your light changes through the day, and help you choose colours that work with your floors, joinery and furniture — so there's no second-guessing once the paint is on the wall.",
      },
    ],
    priceGuide: [
      { item: "Standard feature wall", range: "$250 – $550" },
      { item: "Limewash / textured wall", range: "$600 – $1,500" },
    ],
    faqs: [
      { question: "Can you help me choose a colour?", answer: "Yes — colour consultation is included free with every quote. We'll bring samples and help you test them in your own light." },
      { question: "Are limewash finishes durable?", answer: "Modern limewash-look paints are durable for interiors and can be sealed in high-traffic areas. We'll recommend the right product for your space." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
