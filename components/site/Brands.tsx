import { paintBrands } from "@/lib/business";

export function Brands({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
      <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-white/50" : "text-stone-400"}`}>We use only</span>
      <span aria-hidden="true" className={`hidden h-8 w-px sm:block ${dark ? "bg-white/15" : "bg-stone-200"}`} />
      <div className="flex items-center gap-x-8">
        {paintBrands.map((b) => {
          const src = dark && b.logoOnDark ? b.logoOnDark : b.logo;
          const invert = dark && !b.logoOnDark;
          return (
            <a
              key={b.name}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${b.name} website`}
              className="opacity-90 transition duration-300 hover:-translate-y-0.5 hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${b.name} logo`}
                className={`${b.heightClass} w-auto object-contain ${invert ? "brightness-0 invert" : ""}`}
                loading="lazy"
                width={b.width}
                height={b.height}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
