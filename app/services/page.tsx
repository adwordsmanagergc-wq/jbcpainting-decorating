import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
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
            <Link key={s.slug} href={`/services/${s.slug}`} className="group card flex flex-col p-8 transition-all hover:-translate-y-1 hover:shadow-lift md:p-10">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-700"><ServiceIcon name={s.icon} className="h-7 w-7" /></span>
              <h2 className="mt-6 text-3xl font-semibold">{s.name}</h2>
              <p className="mt-3 text-lg text-stone">{s.summary}</p>
              <ul className="mt-6 grid gap-2 text-sm text-ink/75 sm:grid-cols-2">
                {s.includes.slice(0, 4).map((i) => <li key={i}>• {i}</li>)}
              </ul>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-700">Explore {s.name.toLowerCase()} <ArrowUpRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
