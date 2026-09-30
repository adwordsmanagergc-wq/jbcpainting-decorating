import Image from "next/image";
import { photos, type Photo } from "@/lib/gallery";

export function Gallery({ items = photos.slice(0, 14) }: { items?: Photo[] }) {
  const loop = [...items, ...items];
  return (
    <div className="group relative overflow-hidden" role="region" aria-label="Project gallery">
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {loop.map((p, i) => (
          <figure key={i} className="relative h-60 w-72 flex-none overflow-hidden rounded-2xl bg-cream-200 md:h-80 md:w-96" aria-hidden={i >= items.length}>
            <Image
              src={p.src}
              alt={i < items.length ? p.alt : ""}
              fill
              sizes="(min-width: 768px) 384px, 288px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </figure>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent" />
    </div>
  );
}
