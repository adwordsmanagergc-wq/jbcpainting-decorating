import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/business";
import { businessSchema, websiteSchema } from "@/lib/schema";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileBar } from "@/components/site/MobileBar";
import { JsonLd } from "@/components/site/JsonLd";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap", axes: ["opsz"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const title = "Painter Central Coast | JBC Painting & Decorating — Kariong";
const description =
  "Licensed Central Coast painters in Kariong. Interior, exterior, roof & strata painting with Dulux & Haymes. 20+ years, 5-star rated. Free quote: 0402 360 514.";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: { default: title, template: "%s" },
  description,
  applicationName: business.name,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: business.name,
    locale: "en_AU",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  formatDetection: { telephone: true },
  other: { "geo.region": "AU-NSW", "geo.placename": "Kariong, Central Coast", "geo.position": `${business.geo.latitude};${business.geo.longitude}` },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173526",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${display.variable} ${sans.variable}`}>
      <body>
        <JsonLd data={[businessSchema(), websiteSchema()]} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
