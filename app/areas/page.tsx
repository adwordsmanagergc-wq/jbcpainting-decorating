import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { pageMeta } from "@/lib/meta";
import { allSuburbs, centralCoastSuburbs, lakeMacquarieSuburbs, suburbsByRegion } from "@/lib/areas";
import { pins } from "@/lib/pins";
import { photo } from "@/lib/gallery";
import { PageHero } from "@/components/site/PageHero";
import { AreaMap } from "@/components/site/AreaMap";
import { CtaBanner } from "@/components/site/CtaBanner";
import { JsonLd } from "@/components/site/JsonLd";
import { business } from "@/lib/business";

const title = "Service Areas | Central Coast, Lake Macquarie & Newcastle Painters | JBC";
const description = `Painters for every Central Coast suburb — ${centralCoastSuburbs.length} local pages from Patonga to Gwandalan — plus ${lakeMacquarieSuburbs.length} Lake Macquarie suburbs and Newcastle. Find your suburb and get a free quote.`;

export const metadata: Metadata = pageMeta({ title, description, path: "/areas" });

const toId = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, "-");

export default function AreasPage() {
  const groups = suburbsByRegion();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "JBC Painting & Decorating service areas",
          numberOfItems: allSuburbs.length,
          itemListElement: allSuburbs.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: `Painter ${s.name}`, url: `${business.siteUrl}/painter/${s.slug}` })),
        }}
      />
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Areas", href: "/areas" }]}
        eyebrow="Service areas"
        title="Painters from the Central Coast to Newcastle"
        lead={`Based in Kariong, we paint homes and businesses in all ${centralCoastSuburbs.length} Central Coast suburbs, ${lakeMacquarieSuburbs.length} Lake Macquarie suburbs and across Newcastle. Find your suburb below for local advice, pricing and FAQs.`}
        photo={photo("jbc-22-exterior-queenslander.jpg")}
      />

      <nav aria-label="Regions" className="sticky top-16 z-30 border-b border-ink/5 bg-cream/95 backdrop-blur md:top-[116px]">
        <div className="container-x flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {groups.map((g) => (
            <a key={g.region} href={`#${toId(g.region)}`} className="flex-none rounded-full bg-white px-4 py-2 text-sm font-medium text-ink/80 ring-1 ring-ink/10 hover:bg-brand hover:text-white">
              {g.region} <span className="text-stone-400">{g.items.length}</span>
            </a>
          ))}
        </div>
      </nav>

      <section className="section">
        <div className="container-x">
          <AreaMap pins={pins} activeSlug="kariong" height={560} />

          <div className="mt-20 space-y-16">
            {groups.map((g) => (
              <section key={g.region} id={toId(g.region)} className="scroll-mt-40">
                <div className="flex flex-col justify-between gap-2 border-b border-ink/10 pb-5 md:flex-row md:items-end">
                  <div>
                    <h2 className="text-3xl font-semibold md:text-4xl">{g.region}</h2>
                    <p className="mt-2 max-w-2xl text-stone">{g.blurb}</p>
                  </div>
                  <span className="text-sm font-semibold text-stone-400">{g.items.length} suburbs</span>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {g.items.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/painter/${s.slug}`} className="group flex h-full items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-card ring-1 ring-ink/5 transition-all hover:-translate-y-0.5 hover:bg-forest hover:text-white">
                        <span className="flex items-center gap-2.5">
                          <MapPin className="h-4 w-4 flex-none text-brand group-hover:text-brand-100" aria-hidden />
                          <span>
                            <span className="block font-semibold">Painter {s.name}</span>
                            <span className="block text-xs text-stone-400 group-hover:text-white/60">NSW {s.postcode}</span>
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 flex-none opacity-40 group-hover:opacity-100" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="mx-auto mt-20 max-w-2xl text-center text-stone">Don&rsquo;t see your suburb? Call {business.phone} — if you&rsquo;re on the Central Coast or in Newcastle, we can almost certainly help.</p>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
