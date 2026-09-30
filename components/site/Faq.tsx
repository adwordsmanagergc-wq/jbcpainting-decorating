import { Plus } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { faqSchema } from "@/lib/schema";

export function Faq({ faqs, schema = true }: { faqs: { question: string; answer: string }[]; schema?: boolean }) {
  return (
    <div className="divide-y divide-ink/10 rounded-3xl bg-white px-6 shadow-card ring-1 ring-ink/5 md:px-8">
      {schema && <JsonLd data={faqSchema(faqs)} />}
      {faqs.map((f, i) => (
        <details key={i} className="group py-5" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-base font-semibold text-ink md:text-lg [&::-webkit-details-marker]:hidden">
            <h3 className="font-sans">{f.question}</h3>
            <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-full bg-brand-50 text-brand-700 transition-transform group-open:rotate-45">
              <Plus className="h-4 w-4" aria-hidden />
            </span>
          </summary>
          <p className="mt-3 pr-12 leading-relaxed text-stone">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
