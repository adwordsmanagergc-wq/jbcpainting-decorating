"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryCategory, Photo } from "@/lib/gallery";

const filters: ("All" | GalleryCategory)[] = ["All", "Exterior", "Interior", "Roof", "Commercial", "Decks"];

export function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const shown = filter === "All" ? photos : photos.filter((p) => p.category === filter);

  useEffect(() => {
    if (open === null) dialog.current?.close();
    else if (!dialog.current?.open) dialog.current?.showModal();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open === null) return;
      if (e.key === "ArrowRight") setOpen((open + 1) % shown.length);
      if (e.key === "ArrowLeft") setOpen((open - 1 + shown.length) % shown.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, shown.length]);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${filter === f ? "bg-forest text-white" : "bg-white text-ink/70 ring-1 ring-ink/10 hover:text-ink"}`}
          >
            {f}
            <span className="ml-1.5 opacity-60">{f === "All" ? photos.length : photos.filter((p) => p.category === f).length}</span>
          </button>
        ))}
      </div>

      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {shown.map((p, i) => (
          <li key={p.src} className="break-inside-avoid">
            <button onClick={() => setOpen(i)} className="group relative block w-full overflow-hidden rounded-2xl bg-cream-200 text-left">
              <Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-12 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
                <span className="mb-1 inline-block rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold backdrop-blur">{p.category}</span>
                <span className="block">{p.alt}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialog.current && setOpen(null)}
        className="m-auto max-h-[92vh] w-[min(1100px,94vw)] overflow-visible bg-transparent p-0 backdrop:bg-ink/90"
      >
        {open !== null && shown[open] && (
          <figure className="relative">
            <Image src={shown[open].src} alt={shown[open].alt} width={shown[open].width} height={shown[open].height} sizes="94vw" className="mx-auto max-h-[82vh] w-auto rounded-2xl object-contain" />
            <figcaption className="mt-3 text-center text-white/80">{shown[open].alt}</figcaption>
            <button onClick={() => setOpen(null)} className="absolute -top-3 right-0 grid h-11 w-11 place-items-center rounded-full bg-white text-ink" aria-label="Close"><X className="h-5 w-5" /></button>
            <button onClick={() => setOpen((open - 1 + shown.length) % shown.length)} className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink" aria-label="Previous photo"><ChevronLeft className="h-5 w-5" /></button>
            <button onClick={() => setOpen((open + 1) % shown.length)} className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink" aria-label="Next photo"><ChevronRight className="h-5 w-5" /></button>
          </figure>
        )}
      </dialog>
    </>
  );
}
