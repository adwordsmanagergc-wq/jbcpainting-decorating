import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allSuburbs, suburbsByRegion } from "@/lib/areas";
import { pins } from "@/lib/pins";
import { PageHero } from "@/components/site/PageHero";
import { AreaMap } from "@/components/site/AreaMap";
import { CtaBanner } from "@/components/site/CtaBanner";
import { projectImages } from "@/lib/business";

const title = "Service Areas | Central Coast Painters | JBC Painting";
const description = `Kariong-based painters servicing ${allSuburbs.length}+ Central Coast suburbs — Gosford, Woy Woy, Umina, Terrigal, Erina, Kincumber, Avoca Beach & more. Find your local painter.`;

export const metadata: Metadata = pageMeta({ title, description, path: "/areas" });

export default function AreasPage() {
  const regions = suburbsByRegion();
  return (
    <>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Areas", href: "/areas" }]}
        eyebrow="Service areas"
        title="Your local Central Coast painters"
        lead={`From our base in Kariong we paint homes and businesses in ${allSuburbs.length}+ suburbs across Gosford, Brisbane Water, the Woy Woy Peninsula and the coast.`}
        image={projectImages[5]}
        imageAlt="Central Coast home painted by JBC"
      />
      <section className="section">
        <div className="container-x">
          <AreaMap pins={pins} activeSlug="kariong" height={560} />
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {regions.map((g) => (
              <div key={g.region}>
                <h2 className="text-2xl font-semibold">{g.region}</h2>
                <ul className="mt-5 space-y-2">
                  {g.items.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/painter/${s.slug}`} className="group flex items-center justify-between rounded-xl px-3 py-2 font-medium hover:bg-white hover:shadow-card">
                        <span>Painter {s.name} <span className="text-sm text-stone-400">{s.postcode}</span></span>
                        <ArrowUpRight className="h-4 w-4 text-brand-700 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-16 max-w-2xl text-center text-stone">Don&rsquo;t see your suburb? We regularly travel further across the Central Coast for larger projects — just call and ask.</p>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
