import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Painter Central Coast | JBC Painting & Decorating Kariong",
  description:
    "Professional painter Central Coast. JBC Painting & Decorating provides quality house painting, interior & exterior painting services in Kariong, Gosford & surrounding suburbs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
