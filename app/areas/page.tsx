import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, MapPin } from "lucide-react";
import { pageMeta } from "@/lib/meta";
import { allSuburbs, centralCoastSuburbs, lakeMacquarieSuburbs, sydneyNorthSuburbs, suburbsByRegion } from "@/lib/areas";
import { pins } from "@/lib/pins";
import { photo } from "@/lib/gallery";
import { PageHero } from "@/components/site/PageHero";
import { AreaMap } from "@/components/site/AreaMap";
import { CtaBanner } from "@/components/site/CtaBanner";
import { JsonLd } from "@/components/site/JsonLd";
import { business } from "@/lib/business";

const title = "Service Areas | Hornsby to Newcastle Painters | JBC Painting";
const description = `Painters for ${allSuburbs.length} suburbs from Hornsby, Pittwater and the Hawkesbury, across the Central Coast and Lake Macquarie to Newcastle. Find yours and get a free quote.`;

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
        title="Painters from Hornsby to Newcastle"
        lead={`Based in Kariong, we paint homes and businesses in all ${centralCoastSuburbs.length} Central Coast suburbs, ${lakeMacquarieSuburbs.length} Lake Macquarie suburbs, ${sydneyNorthSuburbs.length} suburbs from the Hawkesbury River to Hornsby and Pittwater, and across Newcastle. Tap a region to see its suburbs.`}
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

          <div className="mt-16 space-y-4">
            {groups.map((g) => (
              <details key={g.region} id={toId(g.region)} className="group scroll-mt-40 overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink/5 open:ring-brand/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 md:p-7 [&::-webkit-details-marker]:hidden">
                  <span>
                    <h2 className="text-2xl font-semibold md:text-3xl">{g.region}</h2>
                    <span className="mt-1.5 block max-w-2xl text-sm text-stone md:text-base">{g.blurb}</span>
                  </span>
                  <span className="flex flex-none items-center gap-3">
                    <span className="hidden rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 sm:inline">{g.items.length} suburbs</span>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-cream text-ink transition-transform duration-300 group-open:rotate-180" aria-hidden>
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </span>
                </summary>
                <ul className="grid gap-3 border-t border-ink/5 bg-cream/60 p-6 sm:grid-cols-2 md:p-7 lg:grid-cols-4">
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
              </details>
            ))}
          </div>
          <script
            // Open the matching region when arriving via /areas#region or tapping a region chip.
            dangerouslySetInnerHTML={{
              __html:
                "(function(){function o(){var h=decodeURIComponent(location.hash.slice(1));if(!h)return;var d=document.getElementById(h);if(d&&d.tagName==='DETAILS'){d.open=true;d.scrollIntoView({block:'start'});}}window.addEventListener('hashchange',o);o();})();",
            }}
          />
          <p className="mx-auto mt-20 max-w-2xl text-center text-stone">Don&rsquo;t see your suburb? Call {business.phone}. If you&rsquo;re between Hornsby and Newcastle, we can almost certainly help.</p>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
