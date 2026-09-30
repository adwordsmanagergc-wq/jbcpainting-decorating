const IMG_BASE = "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com";

export const business = {
  name: "JBC Painting & Decorating",
  shortName: "JBC Painting",
  phone: "0402 360 514",
  phoneE164: "+61402360514",
  phoneHref: "tel:0402360514",
  whatsapp: "https://wa.me/61402360514?text=Hi%20JBC%2C%20I%27d%20like%20a%20free%20quote",
  email: "info@jbcpainting.com.au",
  address: "Kariong, NSW 2250",
  locality: "Kariong",
  region: "NSW",
  postcode: "2250",
  geo: { latitude: -33.4396, longitude: 151.2940 },
  abn: "91 883 662 973",
  licenseNumber: "NSW Fair Trading Licensed",
  yearsExperience: "20+",
  hours: "Mon–Fri 7am–5pm · Sat 8am–2pm",
  openingHoursSpec: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "17:00" },
    { days: ["Saturday"], opens: "08:00", closes: "14:00" },
  ],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://jbcpainting.com.au",
  logo: `${IMG_BASE}/WhatsApp-Image-2026-05-01-at-19.04.08-(1).jpeg`,
};

/** Real project photos supplied by JBC. */
export const projectImages = [
  `${IMG_BASE}/WhatsApp-Image-2026-05-01-at-19.04.15-(1).jpeg`,
  `${IMG_BASE}/WhatsApp-Image-2026-05-01-at-19.04.15-(2).jpeg`,
  `${IMG_BASE}/WhatsApp-Image-2026-05-01-at-19.04.14-(2).jpeg`,
  `${IMG_BASE}/WhatsApp-Image-2026-05-01-at-19.04.14-(3).jpeg`,
  `${IMG_BASE}/WhatsApp-Image-2026-05-01-at-19.04.15.jpeg`,
  `${IMG_BASE}/WhatsApp-Image-2026-05-01-at-19.04.14.jpeg`,
  `${IMG_BASE}/WhatsApp-Image-2026-05-01-at-19.04.10.jpeg`,
  `${IMG_BASE}/WhatsApp-Image-2026-05-01-at-19.04.14-(1).jpeg`,
];

export const paintBrands = [
  { name: "Dulux", url: "https://www.dulux.com.au", logo: "/images/dulux-logo.webp" },
  { name: "Haymes Paint", url: "https://www.haymes.com.au", logo: "/images/haymes-logo.png" },
];

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Areas", href: "/areas" },
  { label: "Cost Guide", href: "/painting-cost-central-coast" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const reviews = [
  { name: "Sarah M.", location: "Kariong", text: "JBC did an incredible job on our exterior. Professional, tidy, and the finish is flawless. Highly recommend!", service: "Exterior painting" },
  { name: "David & Lisa T.", location: "West Gosford", text: "From quote to completion, everything was smooth. Our interior looks brand new. Will definitely use again.", service: "Interior repaint" },
  { name: "Michael R.", location: "Point Clare", text: "Fantastic work on our roof painting. The team was professional and finished ahead of schedule.", service: "Roof painting" },
  { name: "Jenny K.", location: "Tascott", text: "So happy with our feature wall! JBC understood exactly what we wanted and delivered beautifully.", service: "Feature wall" },
];
