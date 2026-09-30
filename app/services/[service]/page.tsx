import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { business } from "@/lib/business";
import { photo, photosFor, serviceCategory } from "@/lib/gallery";
import { services, getService } from "@/lib/services";
import { allSuburbs } from "@/lib/areas";
import { serviceSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/meta";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceIcon } from "@/components/site/Icons";
import { Process } from "@/components/site/Process";
import { Faq } from "@/components/site/Faq";
import { QuoteForm } from "@/components/site/QuoteForm";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Gallery } from "@/components/site/Gallery";
import { JsonLd } from "@/components/site/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

type Props = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).service);
  if (!s) return {};
  const path = `/services/${s.slug}`;
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path });
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).service);
  if (!s) notFound();
  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd data={serviceSchema({ name: s.name, description: s.metaDescription, url: `${business.siteUrl}/services/${s.slug}`, area: "Central Coast & Newcastle, NSW" })} />
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: s.name, href: `/services/${s.slug}` }]}
        eyebrow={`${s.name} · Central Coast`}
        title={s.h1}
        lead={s.tagline}
        photo={photo(s.image)}
      />

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <div className="prose-jbc">
              {s.intro.map((p, i) => <p key={i} className={i === 0 ? "!text-xl !text-ink" : ""}>{p}</p>)}
            </div>

            <div className="card mt-10 p-7 md:p-9">
              <h2 className="text-2xl font-semibold">What&rsquo;s included</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.includes.map((i) => (
                  <li key={i} className="flex gap-3 text-ink/85"><Check className="mt-0.5 h-5 w-5 flex-none rounded-full bg-brand p-1 text-white" />{i}</li>
                ))}
              </ul>
            </div>

            {s.sections.map((sec) => (
              <div key={sec.heading} className="mt-12">
                <h2 className="text-2xl font-semibold md:text-3xl">{sec.heading}</h2>
                <p className="mt-4 text-[17px] leading-relaxed text-stone">{sec.body}</p>
              </div>
            ))}

            <div className="mt-12">
              <h2 className="text-2xl font-semibold md:text-3xl">{s.name} cost guide (2026)</h2>
              <p className="mt-3 text-stone">Typical Central Coast price ranges. Your free quote will be itemised for your exact home.</p>
              <div className="card mt-6 overflow-hidden">
                <table className="w-full text-left">
                  <caption className="sr-only">{s.name} prices on the Central Coast</caption>
                  <tbody className="divide-y divide-ink/5">
                    {s.priceGuide.map((p) => (
                      <tr key={p.item}><th scope="row" className="px-6 py-4 font-normal text-ink/80">{p.item}</th><td className="px-6 py-4 text-right font-semibold">{p.range}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Link href="/painting-cost-central-coast" className="mt-4 inline-block font-semibold text-brand-700 hover:underline">See the full painting cost guide →</Link>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 font-display text-2xl font-semibold">Get a free {s.name.toLowerCase()} quote</p>
            <QuoteForm defaultService="" />
          </aside>
        </div>
      </section>

      <section className="pb-20"><Gallery items={photosFor(serviceCategory[s.slug], 10)} /></section>

      <section className="section bg-forest">
        <div className="container-x">
          <SectionHeading dark eyebrow="Our process" title="How we work" />
          <Process dark />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <span className="eyebrow">FAQs</span>
            <h2 className="h-section mt-4">{s.name} FAQs</h2>
          </div>
          <Faq faqs={s.faqs} />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Where we work" title={`${s.name} across the Central Coast`} lead="Choose your suburb for local advice and FAQs." />
          <ul className="flex flex-wrap justify-center gap-2">
            {allSuburbs.map((sub) => (
              <li key={sub.slug}>
                <Link href={`/painter/${sub.slug}`} className="inline-block rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium hover:border-brand hover:bg-brand hover:text-white">
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-24 text-center text-2xl font-semibold md:text-3xl">Other painting services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="group card flex items-center gap-4 p-5 hover:shadow-lift">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-brand-50 text-brand-700"><ServiceIcon name={o.icon} className="h-5 w-5" /></span>
                <span className="flex-1 font-semibold">{o.name}</span>
                <ArrowUpRight className="h-4 w-4 text-brand-700" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
