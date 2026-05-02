import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Painter Central Coast | JBC Painting & Decorating",
  description:
    "Central Coast painter servicing Kariong, Gosford, Woy Woy, Terrigal & surrounds. Interior, exterior & roof painting. Licensed, insured, 5-star rated. Free quotes — call 0402 360 514.",
  openGraph: {
    title: "Painter Central Coast | JBC Painting & Decorating",
    description:
      "Central Coast painter servicing Kariong, Gosford, Woy Woy, Terrigal & surrounds. Interior, exterior & roof painting. Licensed, insured, 5-star rated. Free quotes — call 0402 360 514.",
    url: "https://jbcpainting.com.au",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Painter Central Coast | JBC Painting & Decorating",
    description:
      "Central Coast painter servicing Kariong, Gosford, Woy Woy, Terrigal & surrounds. Interior, exterior & roof painting. Free quotes — call 0402 360 514.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  keywords: [
    "painter Central Coast",
    "house painter Central Coast",
    "painter Kariong",
    "painter Gosford",
    "painters near me Central Coast",
    "interior painter Central Coast",
    "exterior painter Central Coast",
    "roof painting Central Coast",
    "painting contractor Central Coast NSW",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4CAF50",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
