import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Home, MapPin, PaintBucket, Receipt, Wind } from "lucide-react";
import { allSuburbs, getSuburb, isLakeMacquarie, isNewcastle, isSydneyNorth, regions } from "@/lib/areas";
import { business, reviews } from "@/lib/business";
import { services } from "@/lib/services";
import { heroForSlug, photosForSlug } from "@/lib/gallery";
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

  const newcastle = isNewcastle(suburb);
  const lakeMac = isLakeMacquarie(suburb);
  const sydney = isSydneyNorth(suburb);
  const { url } = getSuburbMetadata(suburb);
  const nearby = suburb.nearbySuburbs.map(getSuburb).filter((s) => s !== undefined);
  const sameRegion = allSuburbs.filter((s) => s.region === suburb.region && s.slug !== suburb.slug);
  const region = regions.find((r) => r.name === suburb.region);
  const [firstIntro, ...restIntro] = suburb.intro.split(/(?<=\.)\s+/);
  const strip = photosForSlug(suburb.slug, 4);
  const usps = suburb.uniqueSellingPoints.map((u) => {
    const [title, desc] = u.split(" — ");
    return { title, desc };
  });
  const testimonials = suburb.testimonials?.length
    ? suburb.testimonials.map((t) => ({ name: t.name, location: t.suburb, text: t.text }))
    : reviews.slice(0, 2);

  const glance = suburb.atAGlance && [
    { icon: Home, label: "Typical homes", value: suburb.atAGlance.homes },
    { icon: Wind, label: "Weather exposure", value: suburb.atAGlance.exposure },
    { icon: PaintBucket, label: "Recommended system", value: suburb.atAGlance.paintSystem },
    { icon: Receipt, label: "Typical job", value: suburb.atAGlance.typicalJob },
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `House painting in ${suburb.name}`,
          description: suburb.intro,
          url,
          area: `${suburb.name} NSW ${suburb.postcode}`,
        })}
      />
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Areas", href: "/areas" },
          ...(newcastle && suburb.slug !== "newcastle" ? [{ name: "Newcastle", href: "/painter/newcastle" }] : []),
          { name: `Painter ${suburb.name}`, href: `/painter/${suburb.slug}` },
        ]}
        eyebrow={`${suburb.region} · NSW ${suburb.postcode}`}
        title={<>Painter in <span className="italic text-brand-100">{suburb.name}</span></>}
        lead={`${firstIntro} Free on-site quotes, no obligation.`}
        photo={heroForSlug(suburb.slug)}
      />

      {glance && (
        <section className="relative z-10 -mt-8 md:-mt-10">
          <div className="container-x">
            <dl className="grid gap-px overflow-hidden rounded-3xl bg-ink/5 shadow-lift ring-1 ring-ink/5 sm:grid-cols-2 lg:grid-cols-4">
              {glance.map((g) => (
                <div key={g.label} className="bg-white p-6">
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-stone-400">
                    <g.icon className="h-4 w-4 text-brand" aria-hidden /> {g.label}
                  </dt>
                  <dd className="mt-2 font-medium leading-snug text-ink">{g.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Intro + sticky quote */}
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <span className="eyebrow">{newcastle ? "Newcastle painting projects" : "Local painters"}</span>
            <h2 className="h-section mt-4">House painters {newcastle ? "for" : "serving"} {suburb.name}</h2>
            <div className="prose-jbc mt-8">
              {restIntro.length > 0 && <p>{restIntro.join(" ")}</p>}
              {suburb.localContext.split("\n\n").filter(Boolean).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {strip.map((p) => (
                <Link key={p.src} href="/gallery" className="group relative aspect-square overflow-hidden rounded-2xl bg-cream-200">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 180px, 45vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </Link>
              ))}
            </div>
            <p className="mt-3 text-sm text-stone-400">Recent JBC projects · <Link href="/gallery" className="font-semibold text-brand-700 hover:underline">view the gallery</Link></p>

            <h3 className="mt-14 text-2xl font-semibold md:text-3xl">Why {suburb.name} homeowners choose JBC</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[...usps, { title: "Dulux & Haymes only", desc: "Premium Australian paints with manufacturer warranties" }, { title: "Workmanship guarantee", desc: "If it isn't right, we come back and fix it" }].map((u) => (
                <li key={u.title} className="card flex gap-4 p-5">
                  <Check className="mt-0.5 h-6 w-6 flex-none rounded-full bg-brand p-1 text-white" aria-hidden />
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
          <SectionHeading eyebrow="Services" title={`Painting services in ${suburb.name}`} lead={`From a single room to a full exterior and roof — available throughout ${suburb.name} and nearby suburbs.`} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group card flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-brand-700"><ServiceIcon name={s.icon} className="h-5 w-5" /></span>
                <h3 className="mt-5 font-sans text-lg font-semibold">{s.name}<span className="sr-only"> in {suburb.name}</span></h3>
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
          <SectionHeading eyebrow="Reviews" title={suburb.testimonials?.length ? `What ${suburb.name} customers say` : "What our customers say"} />
          <div className="mx-auto max-w-5xl [&>div]:lg:grid-cols-2">
            <Reviews items={testimonials} />
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
            <p className="lead mt-5">
              {newcastle
                ? "We book Newcastle work in scheduled project blocks from our Central Coast base, so your job gets our full crew from start to finish."
                : sydney
                ? "We head south over the Hawkesbury from our Kariong base and book each job as a dedicated block, so your home gets our full crew from start to finish."
                : lakeMac
                ? "We travel up the M1 from our Kariong base and book Lake Macquarie jobs as dedicated blocks, so your home gets our full crew from start to finish."
                : "We're based in Kariong and work right across the Central Coast — often in your street already."}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {nearby.map((n) => (
                <li key={n.slug}>
                  <Link href={`/painter/${n.slug}`} className="card flex items-center justify-between gap-3 px-5 py-4 font-semibold transition-colors hover:bg-brand hover:text-white">
                    <span className="flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden /> Painter {n.name}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <AreaMap pins={pins} activeSlug={suburb.slug} focusSlugs={[suburb.slug, ...suburb.nearbySuburbs]} height={460} />
        </div>

        {sameRegion.length > 0 && (
          <div className="container-x mt-20">
            <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-ink/5 md:p-10">
              <h2 className="text-2xl font-semibold">More {suburb.region} suburbs</h2>
              {region && <p className="mt-2 text-stone">{region.blurb}</p>}
              <ul className="mt-6 flex flex-wrap gap-2">
                {sameRegion.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/painter/${s.slug}`} className="inline-block rounded-full border border-ink/10 bg-cream px-3.5 py-1.5 text-sm font-medium text-ink/80 transition-colors hover:border-brand hover:bg-brand hover:text-white">
                      {s.name}
                    </Link>
                  </li>
                ))}
                <li><Link href="/areas" className="inline-block px-3.5 py-1.5 text-sm font-semibold text-brand-700 hover:underline">All {allSuburbs.length} areas →</Link></li>
              </ul>
            </div>
          </div>
        )}
      </section>

      <CtaBanner
        title={`Ready to transform your ${suburb.name} home?`}
        text={newcastle ? "Free, itemised quotes for Newcastle homes and businesses. Call to book an on-site inspection." : lakeMac ? "Free, itemised quotes for Lake Macquarie homes and businesses. Call to book an on-site inspection." : sydney ? `Free, itemised quotes for ${suburb.name} homes and businesses. Call to book an on-site inspection.` : undefined}
      />
    </>
  );
}
