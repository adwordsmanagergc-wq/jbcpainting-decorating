import { Quote } from "lucide-react";
import { Stars } from "./Icons";

type R = { name: string; location: string; text: string; service?: string };

export function Reviews({ items }: { items: R[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {items.map((r, i) => (
        <figure key={i} className="card relative flex flex-col p-7">
          <Quote className="absolute right-6 top-6 h-8 w-8 text-cream-300" aria-hidden />
          <Stars />
          <blockquote className="mt-4 flex-1 leading-relaxed text-ink/80">&ldquo;{r.text}&rdquo;</blockquote>
          <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-forest font-display text-sm font-semibold text-white">
              {r.name.charAt(0)}
            </span>
            <span>
              <span className="block font-semibold text-ink">{r.name}</span>
              <span className="block text-sm text-stone-400">
                {r.location}
                {r.service ? ` · ${r.service}` : ""}
              </span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
