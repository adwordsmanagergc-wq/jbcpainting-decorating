import type { Metadata } from "next";
import { Instagram } from "lucide-react";
import { business } from "@/lib/business";
import { photos, photo } from "@/lib/gallery";
import { pageMeta } from "@/lib/meta";
import { PageHero } from "@/components/site/PageHero";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { CtaBanner } from "@/components/site/CtaBanner";
import { JsonLd } from "@/components/site/JsonLd";
import { ORG_ID } from "@/lib/schema";

const title = "Painting Gallery | Central Coast Projects | JBC Painting";
const description = "See real JBC Painting & Decorating projects across the Central Coast — exterior repaints, interiors, roofs, decks and commercial work. Free quotes: 0402 360 514.";

export const metadata: Metadata = pageMeta({ title, description, path: "/gallery" });

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "JBC Painting & Decorating project gallery",
          url: `${business.siteUrl}/gallery`,
          author: { "@id": ORG_ID },
          image: photos.map((p) => ({ "@type": "ImageObject", contentUrl: `${business.siteUrl}${p.src}`, caption: p.alt, width: p.width, height: p.height })),
        }}
      />
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Gallery", href: "/gallery" }]}
        eyebrow="Our work"
        title="Real projects. Real Central Coast homes."
        lead={`${photos.length} recent jobs — exteriors, interiors, roofs, decks and commercial fit-outs. Every photo is our own work.`}
        photo={photo("jbc-26-exterior-white-brick-black-stairs.jpg")}
      />
      <section className="section">
        <div className="container-x">
          <GalleryGrid photos={photos} />
          <p className="mt-12 text-center">
            <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Instagram className="h-5 w-5" /> See more on Instagram</a>
          </p>
        </div>
      </section>
      <CtaBanner title="Want results like these?" />
    </>
  );
}
