import { Phone, ShieldCheck, Clock, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Photo } from "@/lib/gallery";
import { business } from "@/lib/business";
import { Breadcrumbs } from "./Breadcrumbs";
import { Stars } from "./Icons";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  photo,
  children,
}: {
  crumbs: { name: string; href: string }[];
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  photo?: Photo;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <div className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand/30 blur-3xl" />
      <div className="container-x relative grid gap-12 py-12 md:py-20 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <Breadcrumbs items={crumbs} dark />
          {eyebrow && <p className="eyebrow mt-8 !text-brand-100">{eyebrow}</p>}
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] md:text-6xl">{title}</h1>
          {lead && <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{lead}</p>}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">Get a free quote</Link>
            <a href={business.phoneHref} className="btn-light"><Phone className="h-5 w-5" /> {business.phone}</a>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 text-sm text-white/80 sm:flex sm:flex-wrap sm:gap-8">
            <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-brand-100" /> Licensed &amp; insured</li>
            <li className="flex items-center gap-2"><Award className="h-5 w-5 text-brand-100" /> {`${business.yearsExperience} years`}</li>
            <li className="flex items-center gap-2"><Clock className="h-5 w-5 text-brand-100" /> Quotes in 48 hrs</li>
            <li className="flex items-center gap-2"><Stars className="h-4 w-4" /> 5-star rated</li>
          </ul>
          {children}
        </div>
        {photo && (
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-forest-700 shadow-lift ring-1 ring-white/10">
              <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} priority sizes="(min-width: 1024px) 560px, 100vw" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 text-ink shadow-lift">
              <p className="font-display text-3xl font-semibold text-brand">{business.yearsExperience}</p>
              <p className="text-sm text-stone">years painting the Coast</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
