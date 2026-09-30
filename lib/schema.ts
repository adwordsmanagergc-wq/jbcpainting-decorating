import { business } from "./business";
import { services } from "./services";
import { allSuburbs } from "./areas";

export const ORG_ID = `${business.siteUrl}/#business`;

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HousePainter", "LocalBusiness"],
    "@id": ORG_ID,
    name: business.name,
    alternateName: "JBC Painting",
    url: business.siteUrl,
    logo: business.logo,
    image: business.logo,
    telephone: business.phoneE164,
    email: business.email,
    description:
      "JBC Painting & Decorating is a licensed, insured Central Coast painter based in Kariong NSW with 20+ years' experience in interior, exterior, roof, commercial, strata and new-home painting using Dulux and Haymes paints.",
    priceRange: "$$",
    currenciesAccepted: "AUD",
    paymentAccepted: "Cash, Bank Transfer, Credit Card",
    taxID: `ABN ${business.abn}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.locality,
      addressRegion: business.region,
      postalCode: business.postcode,
      addressCountry: "AU",
    },
    geo: { "@type": "GeoCoordinates", latitude: business.geo.latitude, longitude: business.geo.longitude },
    openingHoursSpecification: business.openingHoursSpec.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      { "@type": "AdministrativeArea", name: "Central Coast, NSW" },
      ...allSuburbs.map((s) => ({ "@type": "Place", name: `${s.name} NSW ${s.postcode}` })),
    ],
    knowsAbout: ["Interior painting", "Exterior painting", "Roof painting", "Strata painting", "Commercial painting", "Colour consultation", "Lead-safe paint removal"],
    brand: [{ "@type": "Brand", name: "Dulux" }, { "@type": "Brand", name: "Haymes" }],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: `${business.siteUrl}/services/${s.slug}` },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${business.siteUrl}/#website`,
    url: business.siteUrl,
    name: business.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-AU",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${business.siteUrl}${it.href === "/" ? "" : it.href}`,
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; url: string; area: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Place", name: opts.area },
  };
}
