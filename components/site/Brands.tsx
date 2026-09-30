import { paintBrands } from "@/lib/business";

export function Brands({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
      <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-white/50" : "text-stone-400"}`}>We use only</span>
      {paintBrands.map((b) => (
        <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b.logo} alt={`${b.name} paint`} className="h-10 w-auto object-contain" loading="lazy" width={92} height={50} />
        </a>
      ))}
    </div>
  );
}
