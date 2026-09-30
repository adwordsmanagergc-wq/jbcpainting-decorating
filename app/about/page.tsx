import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { Check } from "lucide-react";
import { business, reviews } from "@/lib/business";
import { photo } from "@/lib/gallery";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Process } from "@/components/site/Process";
import { Reviews } from "@/components/site/Reviews";
import { Brands } from "@/components/site/Brands";
import { CtaBanner } from "@/components/site/CtaBanner";

const title = "About Us | JBC Painting & Decorating, Kariong NSW";
const description = "Meet JBC Painting & Decorating — a locally owned Kariong painting business with 20+ years' experience on the Central Coast. Licensed, insured, Dulux & Haymes.";

export const metadata: Metadata = pageMeta({ title, description, path: "/about" });

const values = [
  "The person who quotes your job is accountable for the finish",
  "Honest, itemised quotes — no hidden extras",
  "Preparation done properly, never rushed",
  "Respect for your home, family and neighbours",
  "Premium Dulux & Haymes paints only",
  "Clear communication from start to finish",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]}
        eyebrow="About us"
        title="A local painting business, built on referrals"
        lead={`JBC Painting & Decorating is a Kariong-based painting company with ${business.yearsExperience} years' experience in residential, commercial, strata and new-home painting across the Central Coast.`}
        photo={photo("jbc-24-roof-painting-in-progress.jpg")}
      />
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="prose-jbc">
            <span className="eyebrow">Our story</span>
            <h2 className="h-section mb-8 mt-4">Painting the Central Coast for {`${business.yearsExperience} years`}</h2>
            <p>JBC started with a simple idea: do the job properly, treat every home like our own, and let the results speak for themselves. More than two decades later, most of our work still comes from word of mouth — neighbours, friends and repeat customers across Kariong, Gosford, the Peninsula and the coast.</p>
            <p>We know the Central Coast&rsquo;s conditions intimately — the salt air at Umina and Terrigal, the humid bushland gullies around Kariong and Somersby, and the mix of post-war fibro cottages, 70s brick veneers and modern rendered builds that make up our suburbs. That local knowledge shapes every paint system we specify.</p>
            <p>We&rsquo;re licensed with NSW Fair Trading, fully insured, and we use only Dulux and Haymes premium paints. Every job ends with a walkthrough — we don&rsquo;t leave until you&rsquo;re completely happy.</p>
          </div>
          <div className="card p-8 md:p-10">
            <h2 className="text-2xl font-semibold">What we stand for</h2>
            <ul className="mt-6 space-y-4">
              {values.map((v) => (
                <li key={v} className="flex gap-3"><Check className="mt-0.5 h-6 w-6 flex-none rounded-full bg-brand p-1 text-white" /><span className="text-ink/85">{v}</span></li>
              ))}
            </ul>
            <div className="mt-8 border-t border-ink/5 pt-8"><Brands /></div>
            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div><dt className="text-stone-400">ABN</dt><dd className="font-semibold">{business.abn}</dd></div>
              <div><dt className="text-stone-400">Licence</dt><dd className="font-semibold">{business.licenseNumber}</dd></div>
              <div><dt className="text-stone-400">Based in</dt><dd className="font-semibold">{business.address}</dd></div>
              <div><dt className="text-stone-400">Hours</dt><dd className="font-semibold">{business.hours}</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <section className="section bg-forest">
        <div className="container-x">
          <SectionHeading dark eyebrow="How we work" title="Our process" />
          <Process dark />
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Reviews" title="What our customers say" />
          <Reviews items={reviews} />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
