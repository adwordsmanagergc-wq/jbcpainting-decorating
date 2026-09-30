import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { business } from "@/lib/business";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { CtaBanner } from "@/components/site/CtaBanner";
import { JsonLd } from "@/components/site/JsonLd";
import { ORG_ID } from "@/lib/schema";

const title = "House Painting Cost Central Coast (2026 Price Guide) | JBC";
const description =
  "Central Coast painting costs for 2026: interiors $18–$35/m², 3-bed interior $6k–$10.5k, exteriors $4.5k–$18k, roofs $3.5k–$8k. Local prices explained.";
const path = "/painting-cost-central-coast";
const updated = "2026-09-30";

export const metadata: Metadata = pageMeta({ title, description, path, type: "article" });

const tables = [
  {
    heading: "Interior painting costs",
    rows: [
      ["Interior walls (per m², standard condition)", "$18 – $35"],
      ["Ceilings (per m²)", "$15 – $28"],
      ["Doors (per side, incl. frame)", "$90 – $160"],
      ["Skirting boards (per linear metre)", "$8 – $15"],
      ["Single bedroom — walls only", "$450 – $850"],
      ["Single bedroom — walls, ceiling & trims", "$800 – $1,500"],
      ["Full interior — 3 bed home", "$6,000 – $10,500"],
      ["Full interior — 4 bed home", "$8,000 – $14,000"],
    ],
  },
  {
    heading: "Exterior painting costs",
    rows: [
      ["Rendered / bagged masonry (per m²)", "$20 – $45"],
      ["Weatherboard (per m²)", "$25 – $70"],
      ["Eaves, fascias & gutters only", "$2,000 – $4,500"],
      ["Single-storey 3 bed brick veneer (trims & eaves)", "$4,500 – $8,000"],
      ["Single-storey weatherboard 3–4 bed", "$8,000 – $14,000"],
      ["Double-storey rendered home", "$10,000 – $18,000+"],
    ],
  },
  {
    heading: "Roof painting costs",
    rows: [
      ["Small single-storey tile roof", "$3,500 – $5,500"],
      ["Average 4 bed tile roof (restore + paint)", "$5,000 – $8,000"],
      ["Metal / Colorbond roof repaint", "$4,000 – $7,500"],
    ],
  },
];

const factors = [
  { t: "Surface condition", d: "Flaking paint, cracks, rotten timber and water damage all add preparation time. Prep is usually 40–60% of the labour on an older Central Coast home." },
  { t: "Substrate", d: "Weatherboard costs more than brick or render because every board edge must be scraped, primed and cut in. Fibro needs sealing; bare timber needs priming." },
  { t: "Height & access", d: "Double-storey homes, steep blocks (common in Kariong, Point Clare and Terrigal) and waterfront access can require scaffolding or elevated work platforms." },
  { t: "Coastal exposure", d: "Homes close to the beach need premium UV and salt-resistant systems, and metal surfaces need rust treatment before painting." },
  { t: "Colour changes", d: "Going from dark to light (or vice versa) often needs an extra coat or tinted undercoat." },
  { t: "Paint quality", d: "Premium Dulux and Haymes paints cost more per litre but last years longer — cheaper paint is a false economy on the Coast." },
];

const faqs = [
  { question: "How much does it cost to paint a 3 bedroom house on the Central Coast?", answer: "A full interior repaint of a 3-bedroom home (walls, ceilings and trims) typically costs $6,000–$10,500 in 2026. A single-storey exterior repaint is typically $4,500–$8,000 for brick veneer and $8,000–$14,000 for weatherboard." },
  { question: "What is the hourly rate for a painter on the Central Coast?", answer: "Most Central Coast painters charge roughly $55–$85 per hour in 2026, but reputable painters usually quote a fixed price for the whole job so you know the total cost up front." },
  { question: "Is it cheaper to paint in winter?", answer: "Interior work can sometimes be scheduled sooner in the cooler months, but pricing is based on the work involved rather than the season. Exterior work is weather dependent all year." },
  { question: "Does the quote include paint?", answer: "Yes. JBC quotes include all premium Dulux or Haymes paint, primers, fillers, protection materials and labour. There are no hidden extras." },
  { question: "How can I reduce the cost of painting?", answer: "Move furniture and clear rooms before we arrive, keep the same colour where possible, combine interior and exterior work into one booking, and repaint before paint fails badly so less preparation is needed." },
];

export default function CostGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "House Painting Cost on the Central Coast — 2026 Price Guide",
          description,
          dateModified: updated,
          datePublished: "2026-05-01",
          author: { "@id": ORG_ID },
          publisher: { "@id": ORG_ID },
          mainEntityOfPage: `${business.siteUrl}${path}`,
        }}
      />
      <article>
        <header className="relative overflow-hidden bg-forest text-white">
          <div className="pointer-events-none absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/30 blur-3xl" />
          <div className="container-x relative max-w-4xl py-14 md:py-24">
            <Breadcrumbs dark items={[{ name: "Home", href: "/" }, { name: "Cost guide", href: path }]} />
            <p className="eyebrow mt-8 !text-brand-100">2026 price guide · Updated September 2026</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] md:text-6xl">How much does house painting cost on the Central Coast?</h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
              <strong className="text-white">Short answer:</strong> interior walls cost about <strong className="text-white">$18–$35 per m²</strong>, a full 3-bedroom interior is typically <strong className="text-white">$6,000–$10,500</strong>, single-storey exteriors range from <strong className="text-white">$4,500–$14,000</strong> depending on the cladding, and a roof restoration is usually <strong className="text-white">$3,500–$8,000</strong>.
            </p>
          </div>
        </header>

        <div className="container-x max-w-4xl py-16 md:py-24">
          <p className="text-lg leading-relaxed text-stone">
            These are real-world ranges based on the jobs JBC Painting &amp; Decorating quotes across Kariong, Gosford, the Woy Woy Peninsula, Erina and Terrigal. They include premium Dulux or Haymes paint, preparation and labour. Every home is different, so the only way to get an exact price is a free on-site quote.
          </p>

          {tables.map((t) => (
            <section key={t.heading} className="mt-14">
              <h2 className="text-3xl font-semibold">{t.heading}</h2>
              <div className="card mt-6 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-cream-200 text-sm">
                    <tr><th className="px-6 py-3 font-semibold">Item</th><th className="px-6 py-3 text-right font-semibold">Typical cost (2026)</th></tr>
                  </thead>
                  <tbody className="divide-y divide-ink/5">
                    {t.rows.map(([a, b]) => (
                      <tr key={a}><td className="px-6 py-4 text-ink/80">{a}</td><td className="px-6 py-4 text-right font-semibold">{b}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          <section className="mt-16">
            <h2 className="text-3xl font-semibold">What affects the price?</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {factors.map((f) => (
                <div key={f.t} className="card p-6">
                  <h3 className="font-sans text-lg font-semibold">{f.t}</h3>
                  <p className="mt-2 text-stone">{f.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-semibold">Why the cheapest quote often costs more</h2>
            <p className="mt-4 text-lg leading-relaxed text-stone">
              A low quote usually means skipped preparation, fewer coats or trade-grade paint. On the Central Coast — with salt air, humidity and strong UV — that shows up as peeling, chalking and mould within a couple of years. Compare quotes on the number of coats, the exact paint products, the preparation included and whether the painter is licensed and insured. Check any painter&rsquo;s licence on the{" "}
              <a href="https://www.service.nsw.gov.au/transaction/check-a-trade-licence" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline">NSW Government licence check</a>.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="mb-8 text-3xl font-semibold">Painting cost FAQs</h2>
            <Faq faqs={faqs} />
          </section>

          <p className="mt-12 text-stone">
            Looking for pricing on a specific job? See{" "}
            <Link href="/services/interior-painting" className="font-semibold text-brand-700 underline">interior painting</Link>,{" "}
            <Link href="/services/exterior-painting" className="font-semibold text-brand-700 underline">exterior painting</Link> or{" "}
            <Link href="/services/roof-painting" className="font-semibold text-brand-700 underline">roof painting</Link>, or{" "}
            <Link href="/contact" className="font-semibold text-brand-700 underline">request a free quote</Link>.
          </p>
        </div>
      </article>
      <CtaBanner title="Get an exact price for your home" />
    </>
  );
}
