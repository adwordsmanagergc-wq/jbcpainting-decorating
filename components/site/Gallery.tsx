import { projectImages } from "@/lib/business";

export function Gallery({ caption = "Recent painting project by JBC Painting & Decorating on the Central Coast" }: { caption?: string }) {
  const imgs = [...projectImages, ...projectImages];
  return (
    <div className="group relative overflow-hidden" role="region" aria-label="Project gallery">
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {imgs.map((src, i) => (
          <figure key={i} className="h-60 w-80 flex-none overflow-hidden rounded-2xl bg-cream-200 md:h-80 md:w-[26rem]" aria-hidden={i >= projectImages.length}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={i < projectImages.length ? `${caption} — photo ${i + 1}` : ""}
              loading="lazy"
              decoding="async"
              width={416}
              height={320}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </figure>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent" />
    </div>
  );
}
