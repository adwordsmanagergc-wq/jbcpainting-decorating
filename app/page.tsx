import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Clock, MapPin, Phone, ShieldCheck, Sparkles, Leaf, Award, Instagram, ChevronDown } from "lucide-react";
import Image from "next/image";
import { business, reviews } from "@/lib/business";
import { photo } from "@/lib/gallery";
import { services } from "@/lib/services";
import { suburbsByRegion, allSuburbs } from "@/lib/areas";
import { pins } from "@/lib/pins";
import { ServiceIcon, Stars, Swatches } from "@/components/site/Icons";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Brands } from "@/components/site/Brands";
import { Gallery } from "@/components/site/Gallery";
import { Process } from "@/components/site/Process";
import { Reviews } from "@/components/site/Reviews";
import { Faq } from "@/components/site/Faq";
import { QuoteForm } from "@/components/site/QuoteForm";
import { AreaMap } from "@/components/site/AreaMap";

const faqs = [
  { question: "How much does it cost to paint a house on the Central Coast?", answer: "As a 2026 guide, interior walls cost about $18–$35 per m². A full interior repaint of a 3-bedroom home (walls, ceilings and trims) is typically $6,000–$10,500, and a single-storey exterior repaint is usually $4,500–$14,000 depending on the substrate, condition and access. We provide free, itemised quotes so you know the exact cost up front." },
  { question: "Which suburbs do you service?", answer: `Every suburb on the Central Coast — from Patonga, Umina Beach and Woy Woy in the south, through Gosford, Erina and Terrigal, The Entrance and Wyong, up to Toukley, Budgewoi, Lake Munmorah and Gwandalan, plus the hinterland. North of that we cover Lake Macquarie, from Wyee and Morisset to Toronto, Swansea, Belmont and Warners Bay, and projects across Newcastle. South of the Hawkesbury we paint from Brooklyn, Berowra and Hornsby to Galston, Dural, Wisemans Ferry and Pittwater, from Mona Vale to Palm Beach. There are ${allSuburbs.length} suburb pages on this site with local advice for each.` },
  { question: "Are you licensed and insured?", answer: "Yes. JBC Painting & Decorating is licensed with NSW Fair Trading and carries full public liability insurance. We're happy to provide certificates before work begins." },
  { question: "What paint brands do you use?", answer: "We use Dulux and Haymes exclusively — two of Australia's most trusted premium paint brands, both with strong manufacturer warranties and coastal-grade exterior ranges." },
  { question: "How quickly can you quote and start?", answer: "Most on-site quotes are booked within a few days and written quotes are delivered within 48 hours. Start dates depend on the season, but we'll always give you a clear timeframe." },
  { question: "Do you offer a workmanship guarantee?", answer: "Yes. All work is covered by our workmanship guarantee, on top of the paint manufacturer's product warranty. If something isn't right, we come back and fix it." },
];

const stats = [
  { value: business.yearsExperience, label: "Years of experience" },
  { value: `${allSuburbs.length}+`, label: "Suburbs serviced" },
  { value: "5.0★", label: "Customer rating" },
  { value: "48hr", label: "Quote turnaround" },
];

const whyUs = [
  { icon: ShieldCheck, title: "Licensed & fully insured", text: "NSW Fair Trading licensed with public liability cover — certificates on request." },
  { icon: Leaf, title: "Coastal-grade paint systems", text: "Salt air, humidity and UV-resistant Dulux & Haymes systems specified for your exact location." },
  { icon: Sparkles, title: "Obsessive preparation", text: "Washing, sanding, filling and priming done properly — the secret to a finish that lasts." },
  { icon: Clock, title: "On time, every time", text: "We turn up when we say we will and keep you updated from quote to final walkthrough." },
  { icon: Check, title: "Spotless sites", text: "Furniture, floors and gardens protected. We leave your home cleaner than we found it." },
  { icon: Award, title: "Workmanship guarantee", text: "If anything isn't right, we come back and make it right. Simple." },
];

const hero = [
  photo("jbc-06-exterior-two-storey-facade.jpg"),
  photo("jbc-20-interior-living-room.jpg"),
  photo("jbc-12-exterior-heritage-cottage.jpg"),
];

export default function HomePage() {
  const regions = suburbsByRegion();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="container-x relative grid gap-14 pb-16 pt-10 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pb-24">
          <div>
            <a href="#reviews" className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm shadow-card ring-1 ring-ink/5">
              <Stars className="h-4 w-4" />
              <span className="font-medium">5-star rated Central Coast painters</span>
            </a>
            <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Painter &amp; Decorator on the <span className="brush-underline italic text-brand-700">Central Coast</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone md:text-xl">
              Based in Kariong, servicing the Central Coast &amp; Newcastle. Licensed and insured, with {`${business.yearsExperience} years`} of flawless interior, exterior and roof painting for homes and businesses.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#quote" className="btn-primary !px-8 !py-4 !text-lg">Get a free quote <ArrowRight className="h-5 w-5" /></Link>
              <a href={business.phoneHref} className="btn-ghost !px-8 !py-4 !text-lg"><Phone className="h-5 w-5 text-brand" /> {business.phone}</a>
            </div>
            <ul className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-3 text-[15px] text-ink/80">
              {["Free on-site quotes", "Licensed & insured", "Dulux & Haymes only", "Workmanship guarantee"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check className="h-5 w-5 flex-none rounded-full bg-brand p-1 text-white" /> {t}</li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="grid grid-cols-5 grid-rows-6 gap-3 md:gap-4" style={{ aspectRatio: "1 / 1" }}>
              {[
                { p: hero[0], cls: "col-span-3 row-span-6 rounded-[2rem] shadow-lift", sizes: "(min-width: 1024px) 380px, 60vw" },
                { p: hero[1], cls: "col-span-2 row-span-3 rounded-[1.5rem] shadow-card", sizes: "(min-width: 1024px) 250px, 40vw" },
                { p: hero[2], cls: "col-span-2 row-span-3 rounded-[1.5rem] shadow-card", sizes: "(min-width: 1024px) 250px, 40vw" },
              ].map(({ p, cls, sizes }, i) => (
                <div key={p.src} className={`relative overflow-hidden bg-cream-200 ${cls}`}>
                  <Image src={p.src} alt={p.alt} fill priority={i === 0} sizes={sizes} className="object-cover" />
                </div>
              ))}
            </div>
            <div className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-2xl bg-white p-4 pr-6 shadow-lift ring-1 ring-ink/5 md:-left-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest font-display text-lg font-semibold text-white">{business.yearsExperience}</span>
              <span className="text-sm leading-tight"><span className="block font-semibold text-ink">Years on the Coast</span><span className="text-stone-400">Locally owned in Kariong</span></span>
            </div>
            <div className="absolute -top-4 right-4 hidden rounded-2xl bg-white px-4 py-3 shadow-lift ring-1 ring-ink/5 sm:block">
              <Swatches />
              <p className="mt-2 text-xs font-medium text-stone">Free colour consultation</p>
            </div>
          </div>
        </div>

        <div className="border-y border-ink/5 bg-white/60">
          <div className="container-x flex flex-col items-start justify-between gap-6 py-6 md:flex-row md:items-center">
            <Brands />
            <dl className="grid w-full grid-cols-4 gap-4 md:w-auto md:gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-ink md:text-3xl">{s.value}</dd>
                  <dd className="text-[11px] leading-tight text-stone-400 md:text-xs">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title={<>Painting services for every <span className="italic text-brand-700">surface</span> &amp; property</>}
            lead="From a single feature wall to a full strata complex — one reliable local team, premium paints and meticulous preparation."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group relative flex min-h-[20rem] flex-col justify-between overflow-hidden rounded-3xl bg-forest p-7 text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
              >
                <Image src={photo(s.image).src} alt="" fill sizes={i === 0 ? "(min-width: 1024px) 400px, 100vw" : "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest via-forest/75 to-forest/25 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20 backdrop-blur">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                  </span>
                </div>
                <div className="relative mt-16">
                  <h3 className={`text-2xl font-semibold ${i === 0 ? "md:text-4xl" : ""}`}>{s.name}</h3>
                  <p className={`mt-3 leading-relaxed text-white/85 ${i === 0 ? "md:text-lg" : ""}`}>{s.summary}</p>
                </div>
                <span className="relative mt-6 inline-flex items-center gap-2 font-semibold text-white">
                  Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
            <Link href="#quote" className="group flex flex-col justify-between rounded-3xl border-2 border-dashed border-brand/30 p-7 transition-colors hover:border-brand hover:bg-brand-50">
              <div>
                <Swatches />
                <h3 className="mt-6 text-2xl font-semibold">Not sure what you need?</h3>
                <p className="mt-3 leading-relaxed text-stone">Book a free on-site consult. We&rsquo;ll inspect, advise on colours and give you an honest, itemised quote.</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-700">Book a free consult <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="pb-20 md:pb-28">
        <div className="container-x mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Recent work</span>
            <h2 className="h-section mt-3">Real homes. Real Central Coast results.</h2>
          </div>
          <div className="flex flex-wrap gap-6"><Link href="/gallery" className="font-semibold text-brand-700 hover:underline">View full gallery →</Link><a href={business.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline"><Instagram className="h-5 w-5" /> More on Instagram →</a></div>
        </div>
        <Gallery />
      </section>

      {/* WHY US */}
      <section className="section relative overflow-hidden bg-forest text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-brand/25 blur-3xl" />
        <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="eyebrow !text-brand-100">Why JBC</span>
            <h2 className="h-section mt-4 !text-white">The painter your neighbours recommend.</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              We&rsquo;re not a franchise or a lead-generation middleman. JBC is a local Kariong business — the person who quotes your job is the person accountable for the finish.
            </p>
            <div className="mt-10"><Brands dark /></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
                <w.icon className="h-7 w-7 text-ochre" aria-hidden />
                <h3 className="mt-4 font-sans text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-white/65">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="How it works" title="A simple, stress-free process" lead="Clear communication and zero surprises — from your first call to the final walkthrough." />
          <Process />
        </div>
      </section>

      {/* AREAS */}
      <section id="areas" className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <span className="eyebrow">Service areas</span>
            <h2 className="h-section mt-4">Every suburb from Hornsby to Newcastle</h2>
            <p className="lead mt-5">Based in Kariong, we paint homes from Hornsby, Pittwater and the Hawkesbury River, right across the Central Coast and Lake Macquarie, up to Newcastle. Open a region to find your suburb.</p>
            <div className="mt-8 divide-y divide-ink/10 overflow-hidden rounded-3xl bg-cream ring-1 ring-ink/5">
              {regions.map((g) => (
                <details key={g.region} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 transition-colors hover:bg-brand-50 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-2.5 font-semibold text-ink"><MapPin className="h-4 w-4 flex-none text-brand" aria-hidden /> {g.region}</span>
                    <span className="flex items-center gap-2 text-sm text-stone-400">
                      {g.items.length}
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" aria-hidden />
                    </span>
                  </summary>
                  <ul className="flex flex-wrap gap-2 px-5 pb-5">
                    {g.items.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/painter/${s.slug}`} className="inline-block rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-sm font-medium text-ink/80 transition-colors hover:border-brand hover:bg-brand hover:text-white">
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-28">
            <AreaMap pins={pins} activeSlug="kariong" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Reviews" title="Loved by Central Coast homeowners" lead="Every job ends with a walkthrough — we don't leave until you're 100% happy." />
          <Reviews items={reviews} />
        </div>
      </section>

      {/* COST + ABOUT (answer-first content for search & AI) */}
      <section className="section bg-cream-200/60">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Pricing guide</span>
            <h2 className="h-section mt-4">How much does a painter cost on the Central Coast?</h2>
            <p className="lead mt-5">Every home is different, but here are typical 2026 price ranges for jobs we complete across the Coast. Your quote is always free and itemised.</p>
            <Link href="/painting-cost-central-coast" className="btn-ghost mt-8">Read the full cost guide <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="card overflow-hidden">
            <table className="w-full text-left">
              <caption className="sr-only">Typical painting prices on the Central Coast, 2026</caption>
              <thead className="bg-forest text-sm text-white">
                <tr><th className="px-6 py-4 font-semibold">Job</th><th className="px-6 py-4 font-semibold">Typical cost</th></tr>
              </thead>
              <tbody className="divide-y divide-ink/5">
                {[
                  ["Interior walls (per m²)", "$18 – $35"],
                  ["Single bedroom", "$450 – $850"],
                  ["Full interior, 3 bed home", "$6,000 – $10,500"],
                  ["Exterior, single-storey brick", "$4,500 – $8,000"],
                  ["Exterior, weatherboard 3–4 bed", "$8,000 – $14,000"],
                  ["Roof restoration & paint", "$3,500 – $8,000"],
                ].map(([a, b]) => (
                  <tr key={a}><td className="px-6 py-4 text-ink/80">{a}</td><td className="px-6 py-4 font-semibold text-ink">{b}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <span className="eyebrow">FAQs</span>
            <h2 className="h-section mt-4">Questions, answered</h2>
            <p className="lead mt-5">Can&rsquo;t see your question? Call {business.phone} — you&rsquo;ll talk to the painter, not a call centre.</p>
          </div>
          <Faq faqs={faqs} />
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" className="section relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-brand/25 blur-3xl" />
        <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="eyebrow !text-brand-100">Free quote</span>
            <h2 className="h-section mt-4 !text-white">Let&rsquo;s talk about your project</h2>
            <p className="mt-5 text-lg text-white/70">Tell us a little about the job and we&rsquo;ll arrange a free on-site quote — usually within a few days.</p>
            <ul className="mt-10 space-y-5">
              <li><a href={business.phoneHref} className="flex items-center gap-4 text-2xl font-semibold hover:text-brand-100"><span className="grid h-12 w-12 place-items-center rounded-full bg-brand"><Phone className="h-5 w-5" /></span>{business.phone}</a></li>
              <li className="flex items-center gap-4 text-white/70"><span className="grid h-12 w-12 place-items-center rounded-full bg-white/10"><Clock className="h-5 w-5" /></span>{business.hours}</li>
              <li className="flex items-center gap-4 text-white/70"><span className="grid h-12 w-12 place-items-center rounded-full bg-white/10"><MapPin className="h-5 w-5" /></span>Based in Kariong · Servicing the Central Coast &amp; Newcastle</li>
            </ul>
          </div>
          <div className="text-ink"><QuoteForm /></div>
        </div>
      </section>
    </>
  );
}
