export interface Suburb {
  slug: string;
  name: string;
  postcode: string;
  latitude: number;
  longitude: number;
  intro: string;
  localContext: string;
  uniqueSellingPoints: string[];
  nearbySuburbs: string[];
  faqs: { question: string; answer: string }[];
  testimonials: { name: string; suburb: string; rating: number; text: string }[];
}

export const suburbs: Suburb[] = [
  {
    slug: "kariong",
    name: "Kariong",
    postcode: "2250",
    latitude: -33.4390,
    longitude: 151.2950,
    intro:
      "Kariong is one of the Central Coast's largest family suburbs, stretching across the hills above the M1 motorway with a diverse mix of 1970s brick veneer homes and newer estate developments. As JBC Painting & Decorating's home base, we know every street and cul-de-sac here. Whether your home is a classic brick rancher or a modern double-storey, we bring the right products and preparation to make it look its absolute best.",
    localContext:
      "Kariong's housing stock spans nearly five decades of construction, which means our painters regularly encounter everything from original 1970s texture-coat renders to smooth render on contemporary builds. The suburb sits at a slight elevation, and homes on the western edges catch prevailing winds that can accelerate paint weathering — particularly on south-facing walls. We factor in these micro-climatic conditions when recommending paint systems, always opting for flexible, breathable coatings that handle Kariong's temperature swings between seasons.\n\nWith local schools, shops and quick M1 access, Kariong continues to attract growing families who want to put their personal stamp on their properties. Feature walls, stylish colour updates, and full exterior repaints ahead of selling are among the most popular projects we complete here. Our local knowledge means we can advise on colour schemes that complement the bushland surrounds without clashing with neighbouring homes — a common concern in the tightly packed newer estates.",
    uniqueSellingPoints: [
      "Home base suburb — our team lives here and knows every street",
      "Experience with both 1970s brick veneer and modern render finishes",
      "Colour consultation tailored to Kariong's bushland palette",
      "Fast response times — we can often provide same-week quotes",
    ],
    nearbySuburbs: ["west-gosford", "somersby", "point-clare", "calga", "gosford"],
    faqs: [
      {
        question: "How much does it cost to repaint a brick veneer home in Kariong?",
        answer:
          "A typical 4-bedroom brick veneer in Kariong costs between $4,000 and $9,000 for a full exterior repaint, depending on the condition of existing paint, the number of storeys, and the complexity of trim work. We provide detailed, itemised quotes at no charge.",
      },
      {
        question: "Do you work on the newer estate homes in Kariong?",
        answer:
          "Absolutely. We work regularly in the newer Kariong estates. Modern rendered homes require different preparation to older brick, and our team uses the appropriate primers and top coats for long-lasting results.",
      },
      {
        question: "Can you help with colour selection for my Kariong home?",
        answer:
          "Yes, we offer complimentary colour consultation as part of our quoting process. We can walk through the Dulux and Haymes colour ranges and help you choose shades that suit the natural bushland setting and complement your roof and garden.",
      },
      {
        question: "How long does an exterior repaint take in Kariong?",
        answer:
          "For a standard 3–4 bedroom home in Kariong, allow 3–5 days. This includes high-pressure washing, surface repairs, masking, and two coats of top-quality exterior paint. Weather permitting, we aim to be as efficient as possible.",
      },
      {
        question: "Do you offer roof painting in Kariong?",
        answer:
          "Yes. Roof painting is a popular service in Kariong because many homes have older terracotta or cement tile roofs that have faded or become porous. We use specialist roof coatings that restore the tile's weather resistance and dramatically improve kerb appeal.",
      },
      {
        question: "Are you a licensed painter operating in Kariong?",
        answer:
          "JBC Painting & Decorating holds all required NSW Fair Trading licenses and carries comprehensive public liability insurance. We're happy to provide copies of certificates before any work commences.",
      },
      {
        question: "Can you paint interior rooms while I'm living in the house in Kariong?",
        answer:
          "Yes, we're experienced at working around families at home. We work in sections, use low-odour paints where requested, and ensure floors and furniture are fully protected. Most interior projects are completed with minimal disruption to your daily routine.",
      },
    ],
    testimonials: [
      {
        name: "Sarah M.",
        suburb: "Kariong",
        rating: 5,
        text: "JBC painted the exterior of our 1980s brick home in Kariong last spring and the transformation was remarkable. They patched all the old render cracks properly before painting, and the finish has held up perfectly through a full year of weather. Absolutely recommend.",
      },
      {
        name: "Craig & Bev H.",
        suburb: "Kariong",
        rating: 5,
        text: "We used JBC for a full interior repaint before listing our Kariong home for sale. They worked quickly, kept the place spotless, and the colours they suggested really made the spaces pop. Our real estate agent said it made a big difference to buyer interest.",
      },
    ],
  },
  {
    slug: "west-gosford",
    name: "West Gosford",
    postcode: "2250",
    latitude: -33.4260,
    longitude: 151.3190,
    intro:
      "West Gosford sits just west of the Gosford CBD and railway corridor, a suburb of older fibro and brick homes from the 1950s through to the 1970s, interspersed with light commercial premises along its main roads. The proximity to Gosford's amenities makes it popular with first-home buyers and downsizers who are often investing in refreshing older properties. JBC Painting & Decorating has worked extensively in West Gosford and understands the unique challenges these classic homes present.",
    localContext:
      "The housing stock in West Gosford is predominantly post-war construction, which means painters regularly encounter lead paint layers, chalky weathered coatings, and fibro sheeting that requires careful sealing before any topcoat is applied. Many of the older weatherboard and fibro homes here have not been painted in decades, and proper surface preparation — including oil-based sealers on bare fibro — is critical to achieving a durable finish. Our team is fully trained in the safe handling and stabilisation of lead-paint surfaces in line with NSW WorkCover guidelines.\n\nWest Gosford is also experiencing a renovation wave as buyers snap up the affordable older homes and modernise them. We're frequently brought in for complete makeovers: stripping old wallpaper, repainting throughout in contemporary palettes, and refreshing exteriors to give these cottages a new lease on life. The suburb's slightly lower elevation and urban heat-island effect mean exterior coatings need to be UV-resistant — we always recommend 100% acrylic systems for these properties.",
    uniqueSellingPoints: [
      "Specialist knowledge of fibro and weatherboard preparation in older homes",
      "Lead-paint safe work procedures for pre-1970s properties",
      "Interior renovation repaints including wallpaper removal",
      "Close to our Kariong base — fast scheduling and responsive service",
    ],
    nearbySuburbs: ["gosford", "kariong", "point-clare", "narara", "tascott"],
    faqs: [
      {
        question: "My West Gosford home has old fibro walls — can you paint over them?",
        answer:
          "Yes, fibro (asbestos cement sheeting) can be safely painted over once sealed correctly. We use an oil-based or specialist acrylic sealer on fibro to prevent moisture penetration and ensure the topcoat bonds properly. We do not cut, sand, or disturb the fibro — only surface-coat it.",
      },
      {
        question: "How do you handle lead paint in older West Gosford homes?",
        answer:
          "If a West Gosford home was built before 1970, lead paint is likely present. Our team follows NSW SafeWork guidelines: we test where we're unsure, contain dust with drop sheets and plastic sheeting, and use HEPA-filtered vacuums when light sanding is necessary. We do not dry-sand or use heat guns on suspected lead-paint surfaces.",
      },
      {
        question: "Can you strip old wallpaper and repaint in West Gosford?",
        answer:
          "Wallpaper removal is a service we offer as part of a full interior refresh. We score and steam-strip the paper, prepare the wall surface (skim-coating any damage), and then prime and paint. The result is a smooth, professional finish ready for your new colour.",
      },
      {
        question: "I'm renovating a 1960s home in West Gosford — where do I start with painting?",
        answer:
          "We recommend starting with the exterior to protect the structure, then moving inward. For older homes, the prep phase is the most important — repairing cracks, sealing porous surfaces, and priming bare timber. We'll walk you through a logical sequence and can stage the work to fit your renovation budget.",
      },
      {
        question: "Do you paint commercial premises in West Gosford?",
        answer:
          "Yes. West Gosford has a number of light commercial properties along its main strips, and we service these as well as residential homes. We can work outside business hours to minimise disruption.",
      },
      {
        question: "What's the best paint for a West Gosford weatherboard exterior?",
        answer:
          "For weatherboard exteriors we recommend a quality 100% acrylic exterior paint with a satin or semi-gloss sheen. This finish resists moisture, stays flexible as the timber expands and contracts, and is easy to clean. We'll prime all bare timber and fill any gaps in the boards before applying top coats.",
      },
    ],
    testimonials: [
      {
        name: "Helen R.",
        suburb: "West Gosford",
        rating: 5,
        text: "Our 1960s fibro cottage in West Gosford looked tired and patchy. JBC sealed everything properly and painted the exterior in a fresh off-white — it looks like a completely different house. They were knowledgeable about the older fibro and I felt confident they were doing it right.",
      },
      {
        name: "Mark & Jodie P.",
        suburb: "West Gosford",
        rating: 5,
        text: "We bought an older home in West Gosford and wanted a full interior refresh. JBC stripped the wallpaper in the hallway, repaired the walls, and painted the entire interior. The workmanship was excellent and they were respectful of our home throughout.",
      },
    ],
  },
  {
    slug: "point-clare",
    name: "Point Clare",
    postcode: "2250",
    latitude: -33.4430,
    longitude: 151.3280,
    intro:
      "Point Clare is a scenic waterfront suburb on the northern shores of Brisbane Water, where a mix of 1960s brick homes and classic weatherboard cottages sit alongside newer builds enjoying sweeping water views. The combination of tidal air, morning humidity, and intense summer sun creates a challenging environment for exterior paint — and that's exactly the environment JBC Painting & Decorating has spent years mastering on the Central Coast waterway. A professional painter in Point Clare understands that preparation and the right product specification make all the difference.",
    localContext:
      "The salt-laden air rolling off Brisbane Water accelerates the oxidation of metals and the chalking of exterior paints, so homes in Point Clare typically need repainting more frequently than those further inland. We always recommend marine-grade or high-performance acrylic coatings for exteriors here, along with rust-inhibiting primers on all metal flashings, gutters, and window frames. Homes on the lower streets — particularly those with water frontage — are especially vulnerable and benefit from more frequent maintenance cycles.\n\nPoint Clare's character is shaped by its variety of housing eras. Older homes on the waterfront often feature timber decks, fibro eaves, and single-skin brick walls that need specialist attention, while newer homes on the ridge have rendered exteriors requiring flexible coatings that won't crack with seasonal movement. The suburb's bushland backdrop means colour selection tends toward earthy, natural palettes that blend with the native vegetation — a preference we love working with.",
    uniqueSellingPoints: [
      "High-performance coatings specified for Brisbane Water salt-air exposure",
      "Rust-inhibiting systems for metal gutters and flashings near the waterfront",
      "Experience with both waterfront cottages and ridge-top rendered homes",
      "Colour advice aligned with Point Clare's natural water-and-bush aesthetic",
    ],
    nearbySuburbs: ["tascott", "west-gosford", "gosford", "kariong", "koolewong"],
    faqs: [
      {
        question: "How does living near Brisbane Water affect how often I need to paint?",
        answer:
          "Salt-laden coastal air in Point Clare accelerates paint degradation, particularly on south and west-facing walls. Homes within a few hundred metres of the water may need exterior repainting every 7–10 years rather than the 10–15 years typical for inland properties. Using a high-quality 100% acrylic exterior paint is the best defence.",
      },
      {
        question: "What paint do you recommend for a waterfront home in Point Clare?",
        answer:
          "For waterfront homes we specify Dulux Weathershield or Haymes Solashield — both are 100% acrylic, UV-resistant, and formulated for Australia's harsh coastal conditions. All bare metal should be primed with a zinc-phosphate rust inhibitor before top-coating.",
      },
      {
        question: "Can you paint timber decks and fences at Point Clare?",
        answer:
          "Yes. Deck and fence coatings are a popular service in Point Clare. We clean the timber with a suitable deck wash, allow it to dry, then apply a penetrating oil or quality deck paint depending on the species and existing finish. We advise on the best system for your specific timber type.",
      },
      {
        question: "Do you offer free quotes for homes in Point Clare?",
        answer:
          "Yes, we provide free on-site quotes throughout Point Clare and the surrounding Brisbane Water suburbs. We'll inspect the surfaces, note any preparation required, and provide a detailed written quote.",
      },
      {
        question: "My Point Clare home has rust staining on the gutters and fascia — can you fix this?",
        answer:
          "Rust on gutters and fascias is very common in Point Clare's salt-air environment. We remove loose rust, treat the metal with a rust converter, apply a zinc-phosphate primer, and then topcoat with a gloss paint rated for exterior metal. This process significantly extends the life of the metal before replacement is needed.",
      },
      {
        question: "How do you handle painting on stilted or elevated homes in Point Clare?",
        answer:
          "Several homes in Point Clare are elevated on stumps or stilts to capture water views. We use appropriate scaffolding or elevated work platforms as required, and all our work is carried out to NSW work-at-heights safety standards.",
      },
      {
        question: "What's the best time of year to paint an exterior in Point Clare?",
        answer:
          "Late summer through to autumn (February–May) is generally ideal on the Central Coast — temperatures are more stable, humidity drops, and there's less risk of afternoon storms interrupting the work. We avoid painting in direct midday sun and work in early morning and late afternoon to achieve the best film build.",
      },
    ],
    testimonials: [
      {
        name: "Michael R.",
        suburb: "Point Clare",
        rating: 5,
        text: "Our home is right on the waterfront in Point Clare and has suffered from salt corrosion on the gutters and window frames for years. JBC treated all the rust, primed everything properly, and painted the exterior beautifully. It's been two seasons and there's not a spot of rust in sight.",
      },
      {
        name: "Trish & Alan W.",
        suburb: "Point Clare",
        rating: 5,
        text: "Brilliant job on our 1970s brick home overlooking Brisbane Water. JBC advised on a colour palette that really suits the waterway setting, and the exterior finish looks stunning. Professional, tidy, and worth every cent.",
      },
    ],
  },
  {
    slug: "tascott",
    name: "Tascott",
    postcode: "2250",
    latitude: -33.4510,
    longitude: 151.3160,
    intro:
      "Tascott is a small, unhurried village on the western shore of Brisbane Water, one of those quiet pockets of the Central Coast that long-term residents fiercely love. Character homes — many of them older brick and fibro cottages — sit close together along narrow streets that wind down to the Tascott Wharf. Painting a home in Tascott is as much about preserving its charm as it is about protection from the elements.",
    localContext:
      "The waterside setting at Tascott means exterior paint systems need to perform in a salt-influenced environment, particularly for homes within a block of the waterfront. Many of the older cottages retain their original fibro wall cladding, and some have timber weatherboards that have not been touched in many years. Our painters approach these heritage-style homes with care — assessing the substrate carefully, sealing porous surfaces, and matching replacement timbers where needed before applying colour.\n\nThe tight street layout in Tascott also means vehicle access can be tricky, and we often set up on foot from the nearest parking area. This is simply part of working in a close-knit village like Tascott — our team takes it in stride. Residents here tend to prefer classic, understated colour palettes that reflect the village's heritage character, and we have a good eye for what works in this setting.",
    uniqueSellingPoints: [
      "Respect for Tascott's heritage character — we preserve, not just paint",
      "Specialist fibro and weatherboard preparation for older cottages",
      "Familiar with the suburb's access constraints and tight streetscapes",
      "Waterfront-rated coatings for Brisbane Water-facing homes",
    ],
    nearbySuburbs: ["point-clare", "koolewong", "west-gosford", "horsfield-bay"],
    faqs: [
      {
        question: "Can you paint the older fibro cottages common in Tascott?",
        answer:
          "Yes. Many Tascott homes feature original fibro cladding. We seal fibro with an appropriate oil or acrylic sealer prior to topcoating to prevent moisture ingress and ensure adhesion. We never sand or cut fibro — all work is surface-applied only.",
      },
      {
        question: "How do you handle access issues in Tascott's narrow streets?",
        answer:
          "We're experienced in working in Tascott's compact streetscape. Where vehicle access to a property is limited, we carry equipment by hand and plan our work accordingly. We'll discuss access during the quote so there are no surprises on the day.",
      },
      {
        question: "My Tascott cottage has peeling paint — how do you fix that before repainting?",
        answer:
          "Peeling paint is typically caused by moisture beneath the film or inadequate adhesion of the previous coat. We scrape all loose paint, sand edges to feather them, prime bare areas, and spot-fill as required before applying fresh topcoats. We don't just paint over the problem.",
      },
      {
        question: "Do you paint near the Tascott Wharf and waterfront properties?",
        answer:
          "Yes. Homes near Tascott Wharf are right on the water and benefit from high-performance marine-environment coatings. We specify appropriate systems and pay particular attention to metal components like gates, railings, and roofing iron.",
      },
      {
        question: "Can you help choose colours that suit the character of my Tascott cottage?",
        answer:
          "Absolutely. We enjoy working with heritage-style colour palettes — Federation greens, heritage creams, classic whites, and soft ochres. We'll bring sample boards and help you choose a scheme that honours the character of your cottage while meeting any local council guidelines.",
      },
      {
        question: "How do you protect the garden and footpath during painting in Tascott?",
        answer:
          "We use heavy-duty canvas drop sheets on all paving, driveways, and garden beds. Shrubs and plants close to the home are draped with lightweight covers. We take pride in leaving every job site as clean as we found it.",
      },
    ],
    testimonials: [
      {
        name: "Jenny K.",
        suburb: "Tascott",
        rating: 5,
        text: "Our old Tascott cottage needed a lot of love — peeling paint, some rotten timber, and fibro that hadn't been sealed in years. JBC tackled everything methodically and the finished result is beautiful. It looks like a proper heritage cottage again.",
      },
      {
        name: "Peter & Anne S.",
        suburb: "Tascott",
        rating: 5,
        text: "Very happy with the interior repaint JBC did for us in Tascott. They were respectful of our older home, patched and prepared properly, and the colour they helped us choose really brightened up the rooms. Highly recommend.",
      },
    ],
  },
  {
    slug: "koolewong",
    name: "Koolewong",
    postcode: "2256",
    latitude: -33.4680,
    longitude: 151.3170,
    intro:
      "Koolewong is a tiny hillside village tucked on the western bank of Brisbane Water, where steep blocks and direct waterway access define life here. With just a small number of homes, mostly older weatherboard and fibro dwellings clinging to the slopes, Koolewong demands painters who are comfortable with challenging terrain and who understand the demands of a full waterfront environment. JBC Painting & Decorating is the team for the job.",
    localContext:
      "The hillside topography of Koolewong presents very real challenges for exterior painting — ladders must be secured on sloped ground, and scaffolding is often the only safe option for upper-storey work. Many homes here have rear decks or verandahs literally over the water, where salt spray and humidity accelerate paint breakdown faster than almost anywhere else on the Central Coast. High-build, flexible coatings and thorough preparation are non-negotiable in Koolewong.\n\nThe small scale of the suburb also means strong community ties — residents here know each other and talk. JBC's reputation in Koolewong is built entirely on word-of-mouth, and we take that seriously. The homes are mostly modest in size but high in character, and owners typically take great pride in maintaining them. We approach each job with the same care whether it's a small fibro cottage or a larger home commanding impressive views over Brisbane Water.",
    uniqueSellingPoints: [
      "Experienced working on steep Koolewong blocks with appropriate safety equipment",
      "Marine-environment paint systems for homes directly over or near the water",
      "Over-water deck and verandah painting expertise",
      "Trusted by the local community — most of our work here comes via referral",
    ],
    nearbySuburbs: ["tascott", "point-clare", "woy-woy-bay", "horsfield-bay"],
    faqs: [
      {
        question: "How do you work safely on Koolewong's steep blocks?",
        answer:
          "Safety is our first concern on any sloped site. We use scaffolding with base plates that can be levelled on slopes, and all work at heights above 2 metres is done from a properly erected scaffold or with safety harnesses. We conduct a site-specific risk assessment before commencing any elevated work.",
      },
      {
        question: "My Koolewong home has a deck over the water — can you paint the underside?",
        answer:
          "Yes, painting the underside of over-water decks is something we've done in Koolewong. Access is usually by ladder from the water's edge or from a boat, and we'll discuss the safest and most practical method during the quote. Marine-grade coatings are essential for these areas.",
      },
      {
        question: "How often should a waterfront home in Koolewong be repainted?",
        answer:
          "Given Koolewong's direct Brisbane Water exposure, we recommend inspecting exterior paint every 5–7 years and touching up or fully repainting as needed. Timber and metal components may need attention more frequently. Annual inspection of gutters, downpipes, and flashings for rust is also a good habit.",
      },
      {
        question: "What causes paint to fail so quickly on my Koolewong home?",
        answer:
          "The main culprits are salt spray, persistent humidity, and UV intensity. Salt crystals draw moisture under paint films, causing blistering and peeling. Premium 100% acrylic coatings with appropriate primers, applied to a properly prepared surface, give the best longevity in Koolewong's conditions.",
      },
      {
        question: "Can you paint the timber jetty and boat shed at my Koolewong property?",
        answer:
          "We can paint the above-waterline portions of jetty structures, boat sheds, and associated outbuildings. We use products rated for wet and marine environments. For below-water structures, specialist marine antifouling products are needed — we can advise on appropriate tradespeople for those elements.",
      },
      {
        question: "Do you provide written quotes for Koolewong painting work?",
        answer:
          "Yes, all our quotes are provided in writing with a detailed breakdown of preparation, coats, and materials. There are no surprises — what we quote is what you pay unless the scope changes.",
      },
    ],
    testimonials: [
      {
        name: "Rob & Sonia F.",
        suburb: "Koolewong",
        rating: 5,
        text: "Getting painters to tackle our steep Koolewong block isn't easy, but JBC came out, assessed everything properly, and did a fantastic job on the exterior. They set up scaffold on the slope and worked safely throughout. The house looks amazing.",
      },
      {
        name: "Les N.",
        suburb: "Koolewong",
        rating: 5,
        text: "JBC repainted our waterfront verandah and deck in Koolewong. They used the right products for the salt-air exposure and the finish has held up brilliantly. Will be calling them again when the time comes.",
      },
    ],
  },
  {
    slug: "woy-woy-bay",
    name: "Woy Woy Bay",
    postcode: "2256",
    latitude: -33.4870,
    longitude: 151.3000,
    intro:
      "Woy Woy Bay is a secluded, bush-flanked bay community on the southern reaches of Brisbane Water — a place that feels a world away from the busy Pacific Highway, even though it's only a short drive away. The suburb's character comes from its mix of older fibro holiday shacks that have been slowly converted to permanent residences, newer purpose-built homes, and a dense bushland backdrop that shapes both the aesthetic and the maintenance challenges for any home here.",
    localContext:
      "The microclimate at Woy Woy Bay is distinct: the bay creates high ambient humidity on calm mornings, while the surrounding bush traps heat in summer and can channel strong westerly winds in winter. These conditions demand exterior paint systems that can handle wide temperature swings and high moisture cycles. We have found that homes in Woy Woy Bay benefit particularly from breathable acrylic coatings that allow trapped moisture to escape rather than blister the film from below.\n\nMany of the older holiday shacks in Woy Woy Bay were built with fibro sheeting and originally painted with oil-based coatings that have now fully oxidised. Converting these to a modern water-based acrylic system requires careful preparation: cleaning off chalky residue, priming with an oil-based alkyd for adhesion, then overcoating with acrylic. Our team knows this process well and has completed it many times in Woy Woy Bay and across the surrounding bay communities.",
    uniqueSellingPoints: [
      "Familiar with the fibro-to-acrylic conversion process on older holiday shacks",
      "High-humidity and bushland-edge paint specification expertise",
      "Sensitive to the bush setting — minimal disruption to gardens and surrounds",
      "Experience with both permanent residences and holiday home maintenance programs",
    ],
    nearbySuburbs: ["horsfield-bay", "phegans-bay", "koolewong", "wondabyne"],
    faqs: [
      {
        question: "My Woy Woy Bay holiday shack has chalky old paint — what needs to happen before repainting?",
        answer:
          "Chalky surfaces need a thorough high-pressure wash to remove the oxidised layer, followed by a test to confirm the old coating is stable. If the substrate is fibro, we'll apply an oil-based sealer before any acrylic topcoats. Getting this right is critical to long-term performance.",
      },
      {
        question: "Can you paint a home in Woy Woy Bay as part of a planned holiday-home maintenance program?",
        answer:
          "Yes. We work with a number of holiday homeowners on a scheduled maintenance basis — checking in every few years to touch up, repaint worn areas, or undertake full repaints. We can provide a written schedule and remind you when it's time. This approach keeps maintenance costs manageable.",
      },
      {
        question: "How does the bush setting affect colour choice for homes in Woy Woy Bay?",
        answer:
          "Homes in Woy Woy Bay sit in a bush and water context, so earthy greens, warm greys, soft stone tones, and natural white work beautifully. Strong statement colours can look jarring against the natural surrounds. We'll help you find a palette that enhances your home's connection to the landscape.",
      },
      {
        question: "Do you work with the high humidity conditions at Woy Woy Bay?",
        answer:
          "Yes. We time our painting around morning humidity, avoiding applying paint when the relative humidity is above 85% or when condensation is visible on surfaces. We monitor conditions throughout the day and won't compromise quality by painting in unfavourable weather.",
      },
      {
        question: "Can you paint window and door frames on older homes at Woy Woy Bay?",
        answer:
          "Timber window and door frames on older homes typically need sanding back to a sound surface, priming with an appropriate timber primer, and two top coats of gloss or semi-gloss. We check for rotten timber and can advise on repairs before painting.",
      },
      {
        question: "Is access difficult in Woy Woy Bay?",
        answer:
          "Woy Woy Bay is accessible by road, though some properties are on unsealed tracks or have limited parking. We assess access during the quote and plan accordingly. Our team is accustomed to working in off-road and bushland edge environments.",
      },
    ],
    testimonials: [
      {
        name: "Geoff & Karen L.",
        suburb: "Woy Woy Bay",
        rating: 5,
        text: "We've had JBC maintain our Woy Woy Bay holiday cottage for the past few years. They understand the conditions here perfectly and always use the right products. The cottage looks great all year round and we don't have to worry about paint issues when we're not there.",
      },
      {
        name: "Pam O.",
        suburb: "Woy Woy Bay",
        rating: 5,
        text: "Had the full exterior done on my Woy Woy Bay home last summer. JBC dealt with all the old chalky paint on the fibro, primed everything properly, and the new colour looks brilliant against the bush. Very thorough team.",
      },
    ],
  },
  {
    slug: "phegans-bay",
    name: "Phegans Bay",
    postcode: "2256",
    latitude: -33.4880,
    longitude: 151.3120,
    intro:
      "Phegans Bay is one of the most private and peaceful waterfront enclaves on the Central Coast — a small collection of homes tucked along a quiet bay off Brisbane Water, where the pace of life is unhurried and the natural setting takes centre stage. Homes here are predominantly older, modest in scale, and valued for their direct water access and seclusion. JBC Painting & Decorating provides personalised service to Phegans Bay residents who want quality painting with minimal fuss.",
    localContext:
      "The intimate scale of Phegans Bay means most residents know each other well, and a painter's reputation travels fast in this community. Homes here tend to be older in construction — some dating to the mid-20th century — and many have not had the benefit of a professional repaint in a long time. Our approach in Phegans Bay starts with a thorough condition assessment: we look at existing paint adhesion, note any timber rot or fibro damage, test for any suspect coatings, and develop a preparation plan before anything goes on the brush.\n\nThe waterfront setting creates the same salt-air challenges as elsewhere on Brisbane Water, but Phegans Bay's particularly sheltered aspect can actually trap moisture and slow drying times. We factor this into our scheduling, avoiding painting during humid morning periods and ensuring adequate drying time between coats. The long-term residents of Phegans Bay appreciate tradespeople who take time to do things right, and that's exactly what JBC Painting & Decorating delivers.",
    uniqueSellingPoints: [
      "Patient, thorough approach suited to Phegans Bay's older housing stock",
      "Comprehensive condition assessment before work begins",
      "Respectful of the community's quiet, private character",
      "Moisture-management expertise for Phegans Bay's sheltered bay conditions",
    ],
    nearbySuburbs: ["woy-woy-bay", "horsfield-bay", "koolewong", "wondabyne"],
    faqs: [
      {
        question: "How do I know if my Phegans Bay home needs a repaint or just a touch-up?",
        answer:
          "Signs that a full repaint is needed include widespread chalking or oxidisation, multiple areas of peeling or cracking, and loss of the original colour sheen across most surfaces. Localised issues like minor peeling at joins or on trim can often be addressed with a touch-up. We'll give you an honest assessment during the free quote.",
      },
      {
        question: "Can you paint the exterior of my Phegans Bay home without disturbing the garden?",
        answer:
          "Absolutely. We use drop sheets to protect all garden beds, lawns, and paving, and we take care when working near established plants and shrubs. We consider the garden as carefully as the house.",
      },
      {
        question: "What type of paint is best for the sheltered, humid conditions at Phegans Bay?",
        answer:
          "A breathable 100% acrylic exterior paint is our first choice for Phegans Bay. Breathable formulations allow moisture vapour to escape through the film, reducing the risk of blistering in humid conditions. We pair this with appropriate primers for the substrate — oil-based for fibro, quality acrylic for sound rendered brick.",
      },
      {
        question: "How long will a professional exterior repaint last on a Phegans Bay waterfront home?",
        answer:
          "With proper preparation and premium paints, you can expect 8–12 years from an exterior repaint in most conditions. Homes very close to the water may see some reduction in longevity due to salt exposure, but choosing the right product specification goes a long way to maximising durability.",
      },
      {
        question: "Do you offer interior painting at Phegans Bay as well?",
        answer:
          "Yes. We provide complete interior painting services throughout Phegans Bay — walls, ceilings, trim, doors, and feature walls. We use low-VOC paints where preferred and are happy to work around your schedule.",
      },
      {
        question: "Is there a minimum job size for work in Phegans Bay?",
        answer:
          "We don't impose a strict minimum, but we do need jobs to be practically viable given our travel from Kariong. Single-room paint jobs are generally best combined with other work. Contact us to discuss your project and we'll be upfront about whether it's a good fit.",
      },
    ],
    testimonials: [
      {
        name: "David & Lisa T.",
        suburb: "Phegans Bay",
        rating: 5,
        text: "We live in Phegans Bay and finding reliable tradespeople can be a challenge in a small community like ours. JBC was recommended by a neighbour and they absolutely delivered — great work on our exterior repaint, respectful of our garden, and very tidy. We've already recommended them to others on the bay.",
      },
      {
        name: "Brian C.",
        suburb: "Phegans Bay",
        rating: 5,
        text: "JBC did a thorough job on the interior of our Phegans Bay home. They properly prepared the walls, the ceilings are flawlessly painted, and the finish is excellent. Wouldn't hesitate to use them again.",
      },
    ],
  },
  {
    slug: "horsfield-bay",
    name: "Horsfield Bay",
    postcode: "2256",
    latitude: -33.4860,
    longitude: 151.3210,
    intro:
      "Horsfield Bay is a small, bush-fringed waterfront suburb sitting between the Woy Woy peninsula and the lower reaches of Brisbane Water. A blend of permanent residents and holiday home owners call this quiet bay home, with properties ranging from older fibro shacks updated over the decades through to contemporary homes built for the view. The bush setting and water proximity shape everything about painting in Horsfield Bay — from product selection to access logistics.",
    localContext:
      "Many of the older properties in Horsfield Bay were originally built as weekenders in the 1950s and 60s and have been progressively upgraded over the years. This means painters frequently encounter layered paint histories — multiple coats from different eras, some oil-based, some acrylic, all needing assessment before new coatings can be applied. Our team takes a systematic approach to this: careful visual inspection, adhesion tests, and scrape tests inform our prep plan before we commit a brush to the surface.\n\nThe combination of bush-edge and waterfront creates a unique paint durability challenge. Leaves and organic debris can trap moisture against painted surfaces, encouraging mould and algae growth, while salt air from the bay attacks coatings from the other direction. We recommend anti-mould additives in all exterior paints for Horsfield Bay properties, and suggest regular annual cleaning with a diluted bleach solution to maintain appearance between repaints.",
    uniqueSellingPoints: [
      "Systematic approach to multi-era paint histories in older Horsfield Bay homes",
      "Anti-mould coatings for bush-edge moisture management",
      "Experience with both fibro shacks and modern waterfront homes",
      "Tailored maintenance advice to extend intervals between repaints",
    ],
    nearbySuburbs: ["koolewong", "woy-woy-bay", "tascott", "phegans-bay"],
    faqs: [
      {
        question: "My Horsfield Bay home has multiple layers of old paint. How do you handle that?",
        answer:
          "Multiple paint layers are common in older Horsfield Bay homes. If the layers are stable, we can paint over them with appropriate preparation. If they're showing signs of failure, we'll recommend partial or full removal in affected areas. We'll assess this during the free quote and give you honest advice.",
      },
      {
        question: "How do you control mould on exterior walls at Horsfield Bay?",
        answer:
          "We wash all exterior surfaces with a fungicidal wash before painting to kill and remove mould spores. We then apply a mould-resistant exterior paint — Dulux Weathershield Maximum and similar products contain anti-mould agents that inhibit regrowth for years.",
      },
      {
        question: "Can you paint while I'm not at my Horsfield Bay holiday home?",
        answer:
          "Yes. We're accustomed to working at holiday properties when owners are away. We can collect a key, complete the work, and return it when done. We'll send photos of the completed work for your review.",
      },
      {
        question: "What's involved in repainting an older fibro home in Horsfield Bay?",
        answer:
          "Fibro painting starts with thorough cleaning, assessment of the existing coating, application of a suitable sealer, and then two coats of quality exterior paint. We do not disturb the fibro sheeting itself — all work is surface-applied and compliant with safe work guidelines.",
      },
      {
        question: "Do you paint fences and outbuildings in Horsfield Bay?",
        answer:
          "Yes, we paint timber and metal fences, boat sheds, garages, and outbuildings throughout Horsfield Bay. We treat these the same as main structures — appropriate prep, primer, and quality topcoats.",
      },
      {
        question: "How do you quote painting jobs at Horsfield Bay?",
        answer:
          "We visit the property in person for all quotes — we don't quote over the phone for exterior work because the substrate condition is too variable. We'll inspect, measure, note all preparation requirements, and provide a written quote within 48 hours.",
      },
    ],
    testimonials: [
      {
        name: "Neville & Cheryl B.",
        suburb: "Horsfield Bay",
        rating: 5,
        text: "JBC repainted our Horsfield Bay holiday house while we were back in Sydney. They sent us before-and-after photos and the result was brilliant — far better than we expected given the state the old paint was in. Great communication throughout.",
      },
      {
        name: "Sue G.",
        suburb: "Horsfield Bay",
        rating: 5,
        text: "The exterior of our permanent home in Horsfield Bay was getting badly affected by mould from the bush behind us. JBC treated it all properly, used the right mould-resistant paint, and it's been looking great for over 18 months now. Very professional.",
      },
    ],
  },
  {
    slug: "somersby",
    name: "Somersby",
    postcode: "2250",
    latitude: -33.3640,
    longitude: 151.2870,
    intro:
      "Somersby occupies a semi-rural stretch of the Central Coast's northern hinterland, where acreage properties and older farmhouses sit alongside the Australian Reptile Park and the mist-shrouded Somersby Falls. It's bushfire-prone country, and that shapes the way we approach exterior painting here — choosing products and colours that meet construction requirements while still achieving the aesthetic homeowners want. JBC Painting & Decorating understands the specific demands of painting in Somersby's environment.",
    localContext:
      "Properties in Somersby tend to be larger in land area than typical suburban homes, with farmhouses, rural-residential homes, and acreage sheds all requiring attention. Many of the farmhouses are older — some dating to the early 20th century — with corrugated iron roofing, weatherboard cladding, and wide verandahs that accumulate dirt and organic staining over time. A thorough high-pressure clean is invariably the starting point for any exterior repaint in Somersby.\n\nThe Bushfire Attack Level (BAL) rating of many Somersby properties is a genuine consideration when specifying exterior paints. We are familiar with the requirements and can specify compliant coatings where needed. Beyond compliance, Somersby homeowners generally value durable, low-maintenance finishes — the acreage lifestyle doesn't leave much time for frequent home maintenance, so paint systems need to earn their keep for a decade or more between repaints.",
    uniqueSellingPoints: [
      "Experience with farmhouses and rural-residential properties on large blocks",
      "Knowledge of bushfire zone paint requirements (BAL ratings)",
      "Specialist cleaning and preparation for heavily soiled rural surfaces",
      "Durable, low-maintenance paint systems suited to the working acreage lifestyle",
    ],
    nearbySuburbs: ["kariong", "calga", "west-gosford", "mooney-mooney-creek"],
    faqs: [
      {
        question: "Does my Somersby property need bushfire-resistant paint?",
        answer:
          "If your Somersby property has a Bushfire Attack Level (BAL) rating, certain construction materials and coatings may be specified. We can recommend paints that are used in BAL-rated environments, though the specific requirements depend on your BAL rating and council guidelines. Contact us to discuss your situation.",
      },
      {
        question: "How do you clean and prepare a very dirty or stained farmhouse exterior in Somersby?",
        answer:
          "Rural homes in Somersby often accumulate years of dust, mould, and organic staining. We start with a professional high-pressure wash using appropriate detergents. This step is crucial — painting over a dirty surface is one of the most common causes of premature paint failure.",
      },
      {
        question: "Can you paint corrugated iron roofing and outbuildings on acreage in Somersby?",
        answer:
          "Yes. Iron roofs and outbuildings are bread-and-butter work for us in Somersby. We clean the iron, treat any rust, prime with a suitable metal primer, and apply a quality roof paint. Outbuildings and sheds are treated the same way.",
      },
      {
        question: "Do you travel to rural properties in Somersby?",
        answer:
          "Yes. We regularly travel to Somersby and surrounding rural areas. Travel time and distance are factored into our quotes, and we're happy to explain the cost breakdown. We don't add hidden travel surcharges.",
      },
      {
        question: "How often do farmhouses in Somersby need to be repainted?",
        answer:
          "The exposed rural environment — UV intensity, dust, rain, and temperature extremes — can accelerate paint degradation. Expect to repaint every 8–12 years with quality products. Iron outbuildings may need attention more frequently. We can advise on a maintenance schedule during the quote.",
      },
      {
        question: "Can you paint the verandah boards and decking on my Somersby property?",
        answer:
          "Yes. Verandah boards and decking are a common feature on older Somersby farmhouses. We sand back or strip as required, prime bare timber, and apply quality deck paint or oil. Hardwood decking responds differently to pine, and we'll recommend the most appropriate system for your timber type.",
      },
    ],
    testimonials: [
      {
        name: "Graham & Pauline D.",
        suburb: "Somersby",
        rating: 5,
        text: "We have an older farmhouse on acreage in Somersby and it desperately needed attention — peeling weatherboards, a rusty iron roof, the works. JBC tackled the whole lot methodically over a week and a half. Exceptional preparation and the finished result is better than we've seen it in 20 years.",
      },
      {
        name: "Tony A.",
        suburb: "Somersby",
        rating: 5,
        text: "Quick, efficient, and very knowledgeable about painting in bushfire-prone areas. JBC advised on the right products for our BAL-rated Somersby property and did a beautiful job on the exterior. No hesitation in recommending them.",
      },
    ],
  },
  {
    slug: "calga",
    name: "Calga",
    postcode: "2250",
    latitude: -33.4200,
    longitude: 151.2270,
    intro:
      "Calga is as rural as the Central Coast gets — a scattering of hobby farms and rural properties tucked between the M1 motorway and the vast expanse of Dharug National Park. Properties here are far-flung, driveways are long, and homes are built to endure. JBC Painting & Decorating travels out to Calga regularly and brings the same standard of preparation and finish that we'd deliver in the middle of suburban Gosford.",
    localContext:
      "Rural properties in Calga tend to be simple in form — fibro or hardboard cladding, corrugated iron roofs, and wide outdoor entertaining areas — but they're exposed to intense UV from the unobstructed sky, heavy summer downpours, and dry westerly winds in winter. These conditions demand a simple but robust paint specification: proper cleaning, a quality alkyd or acrylic primer, and two good coats of a premium 100% acrylic exterior paint rated for Australian conditions.\n\nMany Calga landowners are practical people who want honest tradespeople and reliable results without fuss. We fit that model well. We'll tell you exactly what needs doing, why, and how much it will cost. We don't sell unnecessary work, but we also don't cut corners on preparation. Calga's isolated setting means we typically plan our work in efficient blocks to minimise travel — we'll often combine multiple jobs in the area on the same trip.",
    uniqueSellingPoints: [
      "Reliable travel to Calga and surrounding rural properties — no hidden travel fees",
      "Robust paint specifications for full rural UV and weather exposure",
      "Straight-talking approach suited to practical rural homeowners",
      "Efficient scheduling to minimise travel overheads",
    ],
    nearbySuburbs: ["somersby", "kariong", "mooney-mooney-creek", "west-gosford"],
    faqs: [
      {
        question: "Do you charge a travel fee to work on rural properties in Calga?",
        answer:
          "We include travel time to Calga in our quote pricing so there are no separate surprise charges. We'll be transparent about the total cost from the start.",
      },
      {
        question: "Can you paint corrugated iron farm sheds and outbuildings in Calga?",
        answer:
          "Yes. Iron sheds and outbuildings are standard work for us in rural areas. We clean the iron, treat rust with a rust converter, prime with a metal primer, and apply a quality top coat. A well-painted shed can add years to the structure's life.",
      },
      {
        question: "What's the best colour for a rural property exterior in Calga?",
        answer:
          "Darker colours — Colorbond-style tones like Monument, Ironstone, and Basalt — are popular in rural settings and tend to look appropriate in the bush landscape. Lighter creams and whites also work well against green bush backgrounds. We can show you samples on-site to help you decide.",
      },
      {
        question: "My Calga property has not been painted in many years — what's involved?",
        answer:
          "Long-neglected exteriors require a more intensive preparation phase: thorough high-pressure washing, removal of loose and flaking paint, repairs to any substrate damage, and priming. This prep phase is where the real work is, and it's what ensures the new coat lasts. We'll give you a realistic scope of work in our quote.",
      },
      {
        question: "Can you provide exterior painting for new rural builds in Calga?",
        answer:
          "Yes. New builds on rural properties in Calga are a service we provide. We work from the builder's specifications or help the owner develop a paint schedule if one doesn't exist. All new timber and metal elements are primed before topcoating.",
      },
      {
        question: "Do you paint fencing on rural properties in Calga?",
        answer:
          "Timber post-and-rail fencing can be painted or stained — though many rural owners prefer a penetrating oil or stain for fencing as it allows natural weathering and doesn't peel. We can discuss the best approach for your fence type.",
      },
    ],
    testimonials: [
      {
        name: "Frank & Marion T.",
        suburb: "Calga",
        rating: 5,
        text: "We were a bit worried about getting a painter to come all the way out to Calga without it costing a fortune. JBC was completely transparent, included travel in the quote, and did a fantastic job on our hobby farm house. Can't fault them.",
      },
      {
        name: "Donna R.",
        suburb: "Calga",
        rating: 5,
        text: "JBC painted our rural home and the main shed at our Calga property. They treated the rusty iron properly before painting and the shed has never looked better. Professional and reliable — exactly what you want from a rural tradesperson.",
      },
    ],
  },
  {
    slug: "mooney-mooney-creek",
    name: "Mooney Mooney Creek",
    postcode: "2250",
    latitude: -33.4000,
    longitude: 151.2600,
    intro:
      "Mooney Mooney Creek is a hidden gem — a tiny creek-side community tucked into a narrow valley near the Hawkesbury River, where the canopy closes overhead and the sound of running water is the constant background. The handful of homes here are primarily creek-side cottages and bush retreats, and they sit in one of the most distinctive and challenging painting environments on the Central Coast: deep shade, high humidity, and organic debris from the surrounding rainforest.",
    localContext:
      "The combination of dense tree cover and creek-side humidity makes Mooney Mooney Creek properties highly susceptible to mould and algae growth on exterior painted surfaces. Surfaces that are in permanent shade rarely dry fully, creating ideal conditions for biological fouling of paint films. Our approach here is to use specialist mould-resistant coatings and to recommend a regular cleaning program between repaints to manage regrowth.\n\nAccess to properties in Mooney Mooney Creek can be on unsealed tracks, and the valley's narrow roads require careful vehicle management. We've learned to plan our work in Mooney Mooney Creek carefully, staging materials and equipment efficiently. The beauty of the setting makes it a privilege to work in, and the owners of these creek-side retreats have a strong attachment to their unique properties — we respect that by working carefully and thoughtfully in this special environment.",
    uniqueSellingPoints: [
      "Specialist mould and algae management in deep-shade creek environments",
      "Experience navigating the access challenges of Mooney Mooney Creek's valley roads",
      "Breathable, anti-fungal coatings appropriate for high-humidity shaded sites",
      "Careful, respectful approach to working in this unique natural setting",
    ],
    nearbySuburbs: ["calga", "somersby", "kariong", "wondabyne"],
    faqs: [
      {
        question: "Why does my Mooney Mooney Creek home get so much mould on the painted walls?",
        answer:
          "The deep shade and persistent creek humidity in Mooney Mooney Creek create ideal conditions for mould spores to colonise paint surfaces. Surfaces that are in shade for most of the day never fully dry out, feeding the mould cycle. Using anti-fungal paint additives and mould-resistant topcoats significantly reduces regrowth.",
      },
      {
        question: "How do you treat existing mould on exterior walls before repainting at Mooney Mooney Creek?",
        answer:
          "We treat all affected surfaces with a fungicidal wash — typically a diluted bleach or commercial mould treatment — applied and left to dwell before high-pressure washing. This kills the mould at the surface. We then apply a mould-inhibiting primer before topcoating.",
      },
      {
        question: "Can you access my Mooney Mooney Creek property with a work vehicle?",
        answer:
          "We assess access during the quote visit. For properties on unsealed tracks or with limited access, we may need to carry equipment in by hand or use a smaller vehicle. We factor this into the project plan and keep you informed throughout.",
      },
      {
        question: "What paint is best for shaded exterior walls at Mooney Mooney Creek?",
        answer:
          "We recommend a 100% acrylic exterior paint with built-in anti-mould protection — products like Dulux Weathershield or Haymes Solashield. In particularly problematic areas, we add a fungicide to the topcoat for additional protection. A regular annual wash-down with a diluted solution will extend the appearance between repaints.",
      },
      {
        question: "How often does a creek-side home in Mooney Mooney Creek need repainting?",
        answer:
          "Expect to repaint exterior surfaces every 7–10 years, and to undertake a mould-management clean every 2–3 years in between. The right product and a small amount of ongoing maintenance makes a significant difference to the appearance and condition of your home.",
      },
      {
        question: "Do you provide free quotes for Mooney Mooney Creek properties?",
        answer:
          "Yes. We visit the property for all exterior quotes — remote bush properties have too many variables to quote remotely. We'll confirm access and scheduling when you contact us.",
      },
    ],
    testimonials: [
      {
        name: "Wendy & Ian P.",
        suburb: "Mooney Mooney Creek",
        rating: 5,
        text: "Our bush retreat at Mooney Mooney Creek had serious mould issues on the exterior — the shade from the canopy meant it never dried out properly. JBC treated everything before painting, used the right mould-resistant products, and the difference is remarkable. Well done.",
      },
      {
        name: "Colin M.",
        suburb: "Mooney Mooney Creek",
        rating: 5,
        text: "Getting a painter into Mooney Mooney Creek is not easy, but JBC made the effort and did a wonderful job on our creek-side cottage. They were careful on the access track and left the place immaculate.",
      },
    ],
  },
  {
    slug: "woy-woy",
    name: "Woy Woy",
    postcode: "2256",
    latitude: -33.4856,
    longitude: 151.3244,
    intro:
      "Woy Woy is the beating heart of the peninsula — a bustling railway town on the southern shore of Brisbane Water where fibro and weatherboard homes from the 1950s, 60s, and 70s line the streets, and a genuine sense of community runs deep. The salt-laden air drifting in off the waterway and the esplanade's proximity to the water make exterior paint longevity a real challenge, and it's one JBC Painting & Decorating has mastered across decades of work on the Peninsula. Whether it's a tired fibro cottage or a period brick home crying out for a modern colour refresh, we know exactly what's needed.",
    localContext:
      "The bulk of Woy Woy's housing stock was built during the post-war era, when fibro sheeting and weatherboard were the materials of choice for working families relocating from Sydney. Many of these homes have been painted and repainted over the decades with a mix of oil-based and acrylic coatings — layers that need careful assessment before anything new goes on. Our painters are well versed in surface preparation for multi-coat fibro homes: testing adhesion, sealing porous areas, feathering edges, and applying the right primer for the substrate. The results speak for themselves.\n\nThe waterfront esplanade and Brisbane Water foreshore create an environment where salt air is ever-present, accelerating chalking and corrosion on metal components like gutters, fascias, and window frames. We always specify rust-inhibiting primers on any exposed metal in Woy Woy and recommend high-performance 100% acrylic exterior coatings that resist UV and moisture in equal measure. The suburb also has a number of older commercial buildings along the main strip — shops and businesses that benefit from a professional repaint to stay competitive and appealing.",
    uniqueSellingPoints: [
      "Deep experience with 1950s–70s fibro and weatherboard homes on the Peninsula",
      "Salt-air rated exterior systems for Brisbane Water-adjacent properties",
      "Heritage-appropriate colour advice for Woy Woy's period streetscapes",
      "Commercial painting for the Woy Woy retail and business strip",
    ],
    nearbySuburbs: ["woy-woy-bay", "koolewong", "ettalong-beach", "umina-beach", "horsfield-bay"],
    faqs: [
      {
        question: "How does Woy Woy's waterfront location affect paint durability?",
        answer:
          "The salt air from Brisbane Water is one of the main factors that shortens paint life in Woy Woy. Salt particles settle on painted surfaces and draw moisture into the film, causing chalking, blistering, and peeling sooner than in inland areas. We address this by using premium 100% acrylic exterior coatings and ensuring all metal components are primed with a zinc-phosphate rust inhibitor before topcoating.",
      },
      {
        question: "My Woy Woy home is a fibro cottage from the 1960s — what's involved in repainting it?",
        answer:
          "Repainting an older fibro home starts with a thorough inspection of the existing coating and the fibro substrate. We high-pressure wash the exterior, assess adhesion, seal any porous areas with an appropriate primer, and feather all existing paint edges before applying fresh topcoats. We never sand or cut the fibro sheeting — only surface-applied work.",
      },
      {
        question: "Can you help with colours that suit the older character homes in Woy Woy?",
        answer:
          "Absolutely. Woy Woy has a strong heritage character and period-appropriate palettes — classic whites, warm creams, heritage greens, and soft ochres — suit the older streetscapes beautifully. We'll bring colour samples and discuss options that complement your roof colour, garden, and neighbourhood.",
      },
      {
        question: "Do you paint commercial properties on the Woy Woy main strip?",
        answer:
          "Yes. We service commercial and retail premises along the Woy Woy commercial corridor. We can schedule work outside business hours to minimise disruption to trading and deliver a professional, durable finish that stands up to foot traffic and UV exposure.",
      },
      {
        question: "How much does it cost to paint a fibro home exterior in Woy Woy?",
        answer:
          "For a typical 3–4 bedroom fibro home in Woy Woy, exterior repainting typically ranges from $3,800 to $8,500, depending on the size of the home, the condition of the existing surface, the number of storeys, and the extent of preparation required. We provide free, itemised written quotes.",
      },
      {
        question: "Are you licensed and insured for work in Woy Woy?",
        answer:
          "Yes. JBC Painting & Decorating holds all required NSW Fair Trading licences and carries comprehensive public liability insurance. We're happy to provide copies of our certificates before work commences on your Woy Woy property.",
      },
    ],
    testimonials: [
      {
        name: "Deborah & Alan F.",
        suburb: "Woy Woy",
        rating: 5,
        text: "Our fibro home in Woy Woy had been painted too many times without proper prep and was starting to peel badly. JBC came in, assessed everything thoroughly, and produced a beautiful result that has lasted two summers near the water without a hint of peeling. Highly recommend.",
      },
      {
        name: "Noel C.",
        suburb: "Woy Woy",
        rating: 5,
        text: "Needed the interior of my older Woy Woy home freshened up before I put it on the market. JBC were efficient, tidy, and chose a colour palette that genuinely made the rooms look bigger and brighter. The agent said the presentation made a real difference.",
      },
    ],
  },
  {
    slug: "terrigal",
    name: "Terrigal",
    postcode: "2260",
    latitude: -33.4478,
    longitude: 151.4453,
    intro:
      "Terrigal is the Central Coast's premier beachside suburb — a stretch of golden sand, upscale restaurants, and high-end real estate that draws visitors and property buyers from Sydney and beyond. The combination of luxury homes, holiday apartments, older weatherboard beach houses, and a thriving business strip along The Esplanade makes Terrigal one of the most diverse and rewarding suburbs for a professional painting contractor. JBC Painting & Decorating delivers the premium finishes that Terrigal's discerning property owners expect.",
    localContext:
      "Salt air and UV intensity are the defining environmental challenges for exterior paint in Terrigal. Homes within a few streets of the beach — particularly those facing north-east toward Terrigal Beach and The Haven — experience concentrated coastal exposure that can halve the lifespan of a poorly specified paint system. We always recommend marine-grade or high-performance exterior coatings for Terrigal properties, with appropriate rust-inhibiting primers on all metal surfaces including balcony railings, downpipes, and window frames. Getting the specification right from the start is far more cost-effective than dealing with premature failure.\n\nThe premium nature of Terrigal's property market means presentation is everything. Many homeowners here are running Airbnb and holiday rental properties that need to look impeccable year-round to stay competitive, and we've developed a reputation for delivering the crisp, high-quality finishes these properties require. The older weatherboard beach houses near the lagoon have their own character and charm — and their own set of preparation requirements — while the newer rendered homes and apartment buildings on the ridgeline call for flexible, crack-resistant coating systems. We're equally comfortable across both ends of the spectrum.",
    uniqueSellingPoints: [
      "Premium-finish expertise for Terrigal's high-end homes and holiday rentals",
      "Marine-grade exterior coatings for direct beach and coastal exposure",
      "Experience with both heritage weatherboard beach houses and modern rendered properties",
      "Commercial painting for Terrigal's restaurant and retail Esplanade strip",
    ],
    nearbySuburbs: ["wamberal", "avoca-beach", "erina", "kincumber"],
    faqs: [
      {
        question: "What exterior paint system do you recommend for a home near Terrigal Beach?",
        answer:
          "For homes within a few hundred metres of Terrigal Beach, we specify a premium 100% acrylic exterior paint such as Dulux Weathershield or Haymes Solashield, paired with a zinc-phosphate rust-inhibiting primer on all metal surfaces. These products are formulated to resist salt attack, UV degradation, and moisture intrusion — the three main enemies of coastal paint systems.",
      },
      {
        question: "How often should a holiday rental property in Terrigal be repainted?",
        answer:
          "Holiday rental properties in Terrigal benefit from more frequent refresh cycles than owner-occupied homes, simply because guest turnover creates more wear and the need to stay presentation-competitive. We typically see clients repainting interiors every 4–6 years and exteriors every 8–10 years, though coastal-facing facades may need attention sooner.",
      },
      {
        question: "Can you paint older weatherboard beach houses in Terrigal?",
        answer:
          "Yes, weatherboard beach houses are a specialty. We inspect the timber for rot, replace damaged boards where needed, sand back to a sound surface, apply a quality timber primer, and finish with two topcoats of a premium exterior paint. The result is a restored, durable finish that honours the character of these classic homes.",
      },
      {
        question: "Do you provide interior painting for apartments and units in Terrigal?",
        answer:
          "Yes. Apartments and holiday units in Terrigal are a regular part of our work. We use low-VOC interior paints where tenants or guests need to return quickly, and we can work to tight turnaround schedules to minimise rental vacancy.",
      },
      {
        question: "Can you paint the commercial premises along The Esplanade in Terrigal?",
        answer:
          "Absolutely. Restaurants, cafes, and retail premises along Terrigal's Esplanade strip benefit from a polished, well-maintained exterior. We schedule commercial work for after-hours or early morning to avoid disruption to trading, and we use durable commercial-grade coatings rated for high-traffic environments.",
      },
      {
        question: "Do you offer free quotes in Terrigal?",
        answer:
          "Yes. We provide free on-site quotes throughout Terrigal and the surrounding Central Coast suburbs. We'll assess the surfaces, discuss your goals, and deliver a detailed written quote within 48 hours of our visit.",
      },
    ],
    testimonials: [
      {
        name: "Belinda & James O.",
        suburb: "Terrigal",
        rating: 5,
        text: "We have a holiday rental in Terrigal that needed a full exterior repaint to stay competitive on Airbnb. JBC delivered a flawless finish using the right products for the coastal conditions. The property photographs beautifully now and bookings have noticeably improved.",
      },
      {
        name: "Gary W.",
        suburb: "Terrigal",
        rating: 5,
        text: "JBC painted our weatherboard beach house near Terrigal Lagoon and did a fantastic job. They replaced a couple of rotten boards, primed everything properly, and the colours they suggested really suit the beachside character of the home. Exceptional work.",
      },
    ],
  },
  {
    slug: "erina",
    name: "Erina",
    postcode: "2250",
    latitude: -33.4370,
    longitude: 151.3900,
    intro:
      "Erina is the commercial and residential engine room of the Central Coast — home to Erina Fair shopping centre, a major arterial road network, and a substantial residential population spread across both established 1970s-80s neighbourhoods and newer estate developments. The variety of housing eras and the significant commercial activity make Erina one of the most diverse painting markets on the Coast, and JBC Painting & Decorating is well equipped to handle every corner of it.",
    localContext:
      "The residential streets of Erina are dominated by brick veneer homes from the 1970s and 80s — solid, practical homes that now benefit greatly from a contemporary colour update. Many of these properties have original render on the brickwork that has crazed or become porous over time, requiring sealing before any new topcoat is applied. The elevated homes in Erina Heights present elevated perspectives and, in some cases, elevated access challenges, but the sweeping views make the effort worthwhile for both homeowners and the painting crew.\n\nErina's commercial precinct — anchored by Erina Fair and spread along Karalta Road and surrounds — offers significant opportunities for commercial and retail painting. Shop fronts, office buildings, and service premises all need regular maintenance to stay looking professional, and we have experience delivering these projects with minimal disruption to business operations. The suburb's proximity to Gosford CBD and its strong population growth mean new residential developments are also a growing part of the Erina painting landscape.",
    uniqueSellingPoints: [
      "Colour update expertise for Erina's 1970s and 80s brick veneer homes",
      "Commercial painting for the Erina Fair precinct and Karalta Road businesses",
      "Access experience for elevated Erina Heights properties",
      "New development painting for Erina's growing residential estates",
    ],
    nearbySuburbs: ["terrigal", "springfield", "east-gosford", "green-point", "wamberal"],
    faqs: [
      {
        question: "Can you update the colours on a 1970s brick veneer home in Erina?",
        answer:
          "Absolutely. A fresh colour scheme on an older Erina brick home is one of the most cost-effective ways to modernise its appearance. We clean and seal the render, repair any cracks, and apply a quality exterior paint in the colours of your choice. The transformation is often remarkable.",
      },
      {
        question: "My Erina home has old render that is cracking — do you repair it before painting?",
        answer:
          "Yes. Crazed or cracked render is a very common issue in Erina's older homes. We fill hairline cracks with a flexible exterior filler, apply a skim coat to broader areas where needed, prime the repaired sections, and then paint over the whole surface to achieve a consistent, durable finish.",
      },
      {
        question: "Do you paint commercial properties near Erina Fair?",
        answer:
          "Yes. We service commercial and retail properties throughout the Erina commercial precinct, including the Karalta Road corridor and surrounds. We plan commercial work carefully to minimise disruption, including after-hours scheduling where required.",
      },
      {
        question: "Can you paint a new house in one of Erina's newer estates?",
        answer:
          "Yes. New builds in Erina's growing residential estates are a regular part of our workload. We work from the builder's paint schedule or help develop one if needed. All new timber and metal elements are primed before topcoating, and we ensure full coverage in a sequence that suits the construction programme.",
      },
      {
        question: "How long does a full interior repaint take for a family home in Erina?",
        answer:
          "A standard 4-bedroom family home in Erina typically takes 4–6 days for a full interior repaint, covering walls, ceilings, and trim. This includes preparation, priming bare areas, and two coats of finish. We'll give you a clear timeline in the written quote.",
      },
      {
        question: "Do you offer free quotes in Erina?",
        answer:
          "Yes. We provide free on-site quotes across Erina and surrounding suburbs. We inspect the surfaces, note all preparation requirements, and provide a detailed written quote within 48 hours. There's no obligation to proceed.",
      },
    ],
    testimonials: [
      {
        name: "Karen & Phil M.",
        suburb: "Erina",
        rating: 5,
        text: "Our 1980s brick home in Erina was looking very dated. JBC repaired the render, updated the colour scheme, and the result looks like a completely different house. Neighbours have been stopping to ask who did the work. Couldn't be happier.",
      },
      {
        name: "Steve D.",
        suburb: "Erina",
        rating: 5,
        text: "I run a small business on Karalta Road and needed the shopfront repainted to a higher standard. JBC came in early morning, completed the work before we opened, and the finish is sharp and professional. Very happy with the result.",
      },
    ],
  },
  {
    slug: "umina-beach",
    name: "Umina Beach",
    postcode: "2257",
    latitude: -33.5232,
    longitude: 151.3097,
    intro:
      "Umina Beach is one of those rare suburbs where the laid-back beach lifestyle hasn't been polished away — a relaxed, community-oriented patch of the Woy Woy Peninsula where older fibro and weatherboard beach cottages sit alongside newer brick homes, and where the long sweep of Ocean Beach is just a short walk from most front doors. JBC Painting & Decorating understands the specific mix of older substrate challenges, salt-air coastal conditions, and renovation-driven demand that defines painting work in Umina Beach.",
    localContext:
      "Many of the homes in Umina Beach were originally built in the 1950s and 60s as modest holiday shacks — fibro-clad, simply built, and painted in whatever was available at the time. Decades of repainting, some professional and some far from it, have created the kind of layered paint histories that require careful assessment before any new work begins. Our team inspects adhesion, checks for compatibility between coating types, and develops a preparation plan specific to each home's history — not a one-size-fits-all approach. The result is a foundation that actually lasts.\n\nThe coastal environment at Umina Beach is demanding. The suburb faces directly east toward Ocean Beach, meaning homes on the beach-side streets experience full salt-spray exposure from the Pacific. Exterior coatings here need to be tough — 100% acrylic systems with genuine UV and moisture resistance are the minimum standard we specify. The growing trend of converting old holiday shacks into permanent residences also drives demand for full renovation paint jobs: stripping decades of old coatings, repairing substrates, and delivering a fresh finish that meets the expectations of year-round living.",
    uniqueSellingPoints: [
      "Specialist preparation for Umina Beach's older fibro holiday-cottage conversions",
      "Full-exposure coastal coatings for homes directly facing Ocean Beach",
      "Renovation repaints for shacks converted to permanent residences",
      "Palm Beach Road commercial painting for local businesses",
    ],
    nearbySuburbs: ["ettalong-beach", "woy-woy", "pearl-beach", "woy-woy-bay", "horsfield-bay"],
    faqs: [
      {
        question: "My Umina Beach cottage has multiple layers of old paint — what do you do about that?",
        answer:
          "Multiple paint layers on older Umina Beach fibro homes require a systematic approach. We assess adhesion across the entire surface, remove any areas that are failing, feather the edges of stable coatings, and apply appropriate primers before topcoating. Where the paint history is particularly complex, we may recommend a more thorough strip-back — we'll be honest about what's needed.",
      },
      {
        question: "How does the Ocean Beach exposure affect paint in Umina Beach?",
        answer:
          "Direct exposure to Ocean Beach salt spray is one of the harshest coastal environments on the Central Coast. Salt particles settle on painted surfaces and accelerate oxidation of metals and degradation of paint films. We use high-performance 100% acrylic exterior paints and zinc-phosphate primers on all metal components for Umina Beach homes facing the beach.",
      },
      {
        question: "We're converting our old Umina Beach shack to a permanent home — can you do the full repaint?",
        answer:
          "Yes, this is a project we love. Converting a holiday shack to a permanent residence often involves a comprehensive repaint — exterior and interior — as part of the renovation. We can work alongside other trades, stage the painting to suit the build sequence, and deliver a finish that's ready for year-round living.",
      },
      {
        question: "How much does it cost to repaint an older fibro home in Umina Beach?",
        answer:
          "For a typical older fibro cottage in Umina Beach, exterior repainting ranges from $3,500 to $8,000 depending on size, the condition of existing paint, and the extent of preparation needed. We provide free, itemised written quotes so you know exactly what you're getting.",
      },
      {
        question: "Can you paint fences and gates at my Umina Beach property?",
        answer:
          "Yes. Timber and metal fences, gates, and boundary structures are a common addition to a full exterior repaint in Umina Beach. We prepare and prime appropriately for each material type and use exterior coatings rated for coastal conditions.",
      },
      {
        question: "Do you paint the commercial premises on Palm Beach Road in Umina Beach?",
        answer:
          "Yes. We service commercial and retail properties along Palm Beach Road and the broader Umina Beach shopping strip. We can schedule commercial work for after-hours or quiet periods to avoid disrupting your trading day.",
      },
    ],
    testimonials: [
      {
        name: "Sharon & Brett K.",
        suburb: "Umina Beach",
        rating: 5,
        text: "We renovated our old Umina Beach holiday shack to make it our permanent home and JBC did the full exterior and interior repaint. They were professional throughout, handled the tricky old fibro with real expertise, and the finished result is something we're very proud of.",
      },
      {
        name: "Terry H.",
        suburb: "Umina Beach",
        rating: 5,
        text: "The salt air near Ocean Beach had really taken a toll on our exterior paint. JBC specified the right products for the coastal exposure, prepared everything properly, and the finish has held up beautifully through a full summer. Excellent work.",
      },
    ],
  },
  {
    slug: "wondabyne",
    name: "Wondabyne",
    postcode: "2256",
    latitude: -33.4917,
    longitude: 151.2556,
    intro:
      "Wondabyne is extraordinary — accessible only by train or boat, with no public road to the village, it sits on the western shore of the Hawkesbury River in a pocket of pristine bushland. The heritage cottages and bush retreats here are unlike anywhere else on the Central Coast, and painting them requires a painter who is prepared to bring every tool and drop of paint in by hand or by boat. JBC Painting & Decorating is one of the few painting services that will do exactly that.",
    localContext:
      "The logistical challenge of painting in Wondabyne is significant. Materials must be brought in either by train — with freight arrangements with NSW TrainLink — or by boat from nearby Mooney Mooney Creek or Mullet Creek. Our team plans Wondabyne jobs with military precision: pre-staging materials at the nearest access point, packing everything into manageable loads, and working efficiently over multiple days to complete jobs before equipment has to come back out.\n\nThe Hawkesbury River setting means salt air is ever-present, and the heritage cottages here — some dating to the early 20th century — have paint histories that are as unique as the setting. We've encountered everything from original lead-oil paints to layers of incompatible coatings. Our careful approach to preparation is especially important in Wondabyne, where re-mobilising to fix a problem would be both costly and inconvenient. We get it right the first time.",
    uniqueSellingPoints: [
      "One of the few painting services willing and equipped to work at Wondabyne",
      "Logistics expertise for no-road-access sites — train and boat access managed",
      "Comprehensive preparation focus — no shortcuts when re-mobilising is costly",
      "Experience with heritage cottages and early 20th-century paint substrates",
    ],
    nearbySuburbs: ["woy-woy-bay", "phegans-bay", "mooney-mooney-creek", "horsfield-bay"],
    faqs: [
      {
        question: "How do you get to Wondabyne to provide a painting service?",
        answer:
          "Wondabyne is accessible by train (request stop on the Sydney–Central Coast line) or by boat. For quoting, we travel by train. For the job itself, we arrange materials to come in by train freight or by boat, depending on the quantity and nature of the work.",
      },
      {
        question: "Does the no-road-access situation at Wondabyne make painting significantly more expensive?",
        answer:
          "There is a logistics component to Wondabyne jobs that isn't present in road-accessible suburbs. We build this into our quoted price transparently — you'll see the access allowance in the quote breakdown. We aim to keep it reasonable by planning trips efficiently.",
      },
      {
        question: "Can you paint a heritage cottage at Wondabyne?",
        answer:
          "Yes, and we enjoy the challenge. Heritage cottages at Wondabyne require careful attention to existing paint systems, substrate conditions, and appropriate colour matching where heritage compliance is involved. We'll assess the specific needs of your cottage and develop a plan that respects its character.",
      },
      {
        question: "What paint challenges are specific to the Hawkesbury River setting at Wondabyne?",
        answer:
          "The Hawkesbury River environment brings salt air, high humidity, and intense UV. Coatings here need to be highly breathable, UV-stable, and resistant to salt attack. We specify premium marine-environment exterior coatings and pay particular attention to timber detailing, metal flashings, and any exposed iron.",
      },
      {
        question: "How far in advance do I need to book a painting job at Wondabyne?",
        answer:
          "Given the logistics planning required for Wondabyne, we recommend booking at least 4–6 weeks in advance to allow time for materials procurement and scheduling. We'll confirm a detailed work plan with you before mobilising.",
      },
      {
        question: "Do you paint boat sheds and jetty structures at Wondabyne?",
        answer:
          "We can paint the above-waterline external surfaces of boat sheds, jetties, and associated structures. We use appropriate coatings for damp and splash-zone environments. For submerged or tidal-zone surfaces, antifouling products are needed and we'll advise accordingly.",
      },
    ],
    testimonials: [
      {
        name: "Rosemary V.",
        suburb: "Wondabyne",
        rating: 5,
        text: "Getting any tradesperson to Wondabyne is a feat in itself, so I was delighted that JBC was willing to come. They organised everything carefully, arrived on the train with all their gear, and did an absolutely beautiful job on our heritage cottage. Worth every cent.",
      },
      {
        name: "Andrew & Sue K.",
        suburb: "Wondabyne",
        rating: 5,
        text: "JBC painted the exterior of our Wondabyne bush retreat last autumn. They planned the whole logistics exercise, came in by train over two days, and the finish is outstanding. They clearly care about doing good work even when the access is challenging.",
      },
    ],
  },
];
