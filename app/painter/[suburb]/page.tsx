import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { allSuburbs, getSuburb } from "@/lib/areas";
import { business, projectImages } from "@/lib/business";
import { services } from "@/lib/services";
import { pins } from "@/lib/pins";
import { getSuburbMetadata } from "@/lib/seo";
import { pageMeta } from "@/lib/meta";
import { serviceSchema } from "@/lib/schema";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceIcon } from "@/components/site/Icons";
import { Process } from "@/components/site/Process";
import { Reviews } from "@/components/site/Reviews";
import { Faq } from "@/components/site/Faq";
import { QuoteForm } from "@/components/site/QuoteForm";
import { AreaMap } from "@/components/site/AreaMap";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Brands } from "@/components/site/Brands";
import { JsonLd } from "@/components/site/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return allSuburbs.map((s) => ({ suburb: s.slug }));
}

type Props = { params: Promise<{ suburb: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const suburb = getSuburb((await params).suburb);
  if (!suburb) return {};
  const { title, description, path } = getSuburbMetadata(suburb);
  return pageMeta({ title, description, path });
}

export default async function SuburbPage({ params }: Props) {
  const suburb = getSuburb((await params).suburb);
  if (!suburb) notFound();

  const { url } = getSuburbMetadata(suburb);
  const nearby = suburb.nearbySuburbs.map(getSuburb).filter((s) => s !== undefined);
  const [firstIntro, ...restIntro] = suburb.intro.split(/(?<=\.)\s+/);
  const img = projectImages[allSuburbs.indexOf(suburb) % projectImages.length];
  const usps = suburb.uniqueSellingPoints.map((u) => {
    const [title, desc] = u.split(" — ");
    return { title, desc };
  });

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Painting services in ${suburb.name}`,
          description: suburb.intro,
          url,
          area: `${suburb.name} NSW ${suburb.postcode}`,
        })}
      />
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Areas", href: "/areas" }, { name: `Painter ${suburb.name}`, href: `/painter/${suburb.slug}` }]}
        eyebrow={`${suburb.name} NSW ${suburb.postcode}`}
        title={<>Painter in <span className="italic text-brand-100">{suburb.name}</span></>}
        lead={`${firstIntro} Free quotes, no obligation.`}
        image={img}
        imageAlt={`House painting project near ${suburb.name} by JBC Painting & Decorating`}
      />

      {/* Intro + sticky quote */}
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <span className="eyebrow">Local painters</span>
            <h2 className="h-section mt-4">Trusted house painters serving {suburb.name}</h2>
            <div className="prose-jbc mt-8">
              {restIntro.length > 0 && <p>{restIntro.join(" ")}</p>}
              {suburb.localContext.split("\n\n").filter(Boolean).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h3 className="mt-12 text-2xl font-semibold">Why {suburb.name} homeowners choose JBC</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[...usps, { title: "Dulux & Haymes only", desc: "Premium Australian paints with manufacturer warranties" }, { title: "Workmanship guarantee", desc: "If it isn't right, we come back and fix it" }].map((u) => (
                <li key={u.title} className="card flex gap-4 p-5">
                  <Check className="mt-0.5 h-6 w-6 flex-none rounded-full bg-brand p-1 text-white" />
                  <span>
                    <span className="block font-semibold text-ink">{u.title}</span>
                    {u.desc && <span className="mt-1 block text-sm text-stone">{u.desc}</span>}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10"><Brands /></div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start" id="quote">
            <p className="mb-4 font-display text-2xl font-semibold">Free quote in {suburb.name}</p>
            <QuoteForm defaultSuburb={suburb.name} />
          </aside>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Services" title={`Painting services in ${suburb.name}`} lead={`Everything from a single room to a full exterior and roof — available throughout ${suburb.name} and surrounding suburbs.`} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group card flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-brand-700"><ServiceIcon name={s.icon} className="h-5 w-5" /></span>
                <h3 className="mt-5 font-sans text-lg font-semibold">{s.name} <span className="sr-only">in {suburb.name}</span></h3>
                <p className="mt-2 flex-1 text-sm text-stone">{s.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">Details <ArrowUpRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-forest">
        <div className="container-x">
          <SectionHeading dark eyebrow="Our process" title={`How we paint ${suburb.name} homes`} />
          <Process dark />
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Reviews" title={`What ${suburb.name} customers say`} />
          <div className="mx-auto max-w-5xl [&>div]:lg:grid-cols-2">
            <Reviews items={suburb.testimonials.map((t) => ({ name: t.name, location: t.suburb, text: t.text }))} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <span className="eyebrow">FAQs</span>
            <h2 className="h-section mt-4">Painter {suburb.name} FAQs</h2>
            <p className="lead mt-5">Common questions from {suburb.name} homeowners. Still unsure? Call <a className="font-semibold text-brand-700" href={business.phoneHref}>{business.phone}</a>.</p>
          </div>
          <Faq faqs={suburb.faqs} />
        </div>
      </section>

      {/* Map + nearby */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <span className="eyebrow">Nearby areas</span>
            <h2 className="h-section mt-4">Also painting near {suburb.name}</h2>
            <p className="lead mt-5">We&rsquo;re based just down the road in Kariong and work right across the Central Coast.</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {nearby.map((n) => (
                <li key={n.slug}>
                  <Link href={`/painter/${n.slug}`} className="card flex items-center justify-between gap-3 px-5 py-4 font-semibold transition-colors hover:bg-brand hover:text-white">
                    <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Painter {n.name}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/areas" className="mt-6 inline-block font-semibold text-brand-700 hover:underline">View all {allSuburbs.length} service areas →</Link>
          </div>
          <AreaMap pins={pins} activeSlug={suburb.slug} height={460} />
        </div>
      </section>

      <CtaBanner title={`Ready to transform your ${suburb.name} home?`} />
    </>
  );
}
