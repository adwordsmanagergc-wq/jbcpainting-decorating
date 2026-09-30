import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { photo } from "@/lib/gallery";
import { PageHero } from "@/components/site/PageHero";
import { ServiceIcon } from "@/components/site/Icons";
import { CtaBanner } from "@/components/site/CtaBanner";

const title = "Painting Services Central Coast | JBC Painting & Decorating";
const description = "Interior, exterior, roof, commercial, strata & new-home painting on the Central Coast. Licensed Kariong painters using Dulux & Haymes. Call 0402 360 514.";

export const metadata: Metadata = pageMeta({ title, description, path: "/services" });

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]}
        eyebrow="Our services"
        title="Painting services for Central Coast homes & businesses"
        lead="One local team for every surface — prepared properly and finished with premium Dulux & Haymes paints."
        photo={photo("jbc-13-exterior-white-home.jpg")}
      />
      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group relative flex flex-col overflow-hidden rounded-3xl bg-forest p-8 text-white shadow-card transition-all hover:-translate-y-1 hover:shadow-lift md:p-10">
              <Image src={photo(s.image).src} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest via-forest/85 to-forest/40" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20 backdrop-blur"><ServiceIcon name={s.icon} className="h-7 w-7" /></span>
              <h2 className="relative mt-24 text-3xl font-semibold">{s.name}</h2>
              <p className="relative mt-3 text-lg text-white/85">{s.summary}</p>
              <ul className="relative mt-6 grid gap-2 text-sm text-white/75 sm:grid-cols-2">
                {s.includes.slice(0, 4).map((i) => <li key={i}>• {i}</li>)}
              </ul>
              <span className="relative mt-8 inline-flex items-center gap-2 font-semibold text-white">Explore {s.name.toLowerCase()} <ArrowUpRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
