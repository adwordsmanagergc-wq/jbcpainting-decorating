import Link from "next/link";
import { Mail, MapPin, Phone, Clock, Instagram } from "lucide-react";
import { business } from "@/lib/business";
import { services } from "@/lib/services";
import { allSuburbs } from "@/lib/areas";
import { Swatches } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-20 text-white/70 md:pb-10">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={business.logo} alt={business.name} className="h-12 w-auto rounded-md" loading="lazy" width={120} height={48} />
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed">
              Licensed, insured Central Coast painters based in Kariong. {`${business.yearsExperience} years`} of interior, exterior, roof, strata and commercial painting with Dulux &amp; Haymes.
            </p>
            <Swatches className="mt-6" />
            <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center gap-2 font-semibold text-white hover:text-brand-100"><Instagram className="h-5 w-5" /> @jbc_painting_decorating</a>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-white">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white">{s.name}</Link></li>
              ))}
              <li><Link href="/painting-cost-central-coast" className="hover:text-white">Painting cost guide</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-white">Popular areas</h2>
            <ul className="mt-5 grid grid-cols-1 gap-3">
              {allSuburbs.slice(0, 10).map((s) => (
                <li key={s.slug}><Link href={`/painter/${s.slug}`} className="hover:text-white">Painter {s.name}</Link></li>
              ))}
              <li><Link href="/areas" className="font-semibold text-brand-100 hover:text-white">All {allSuburbs.length} areas →</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-white">Contact</h2>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 flex-none text-brand-100" /><a href={business.phoneHref} className="text-lg font-semibold text-white hover:underline">{business.phone}</a></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 flex-none text-brand-100" /><a href={`mailto:${business.email}`} className="hover:text-white">{business.email}</a></li>
              <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 flex-none text-brand-100" />Based in {business.address}<br />Servicing the NSW Central Coast</li>
              <li className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 flex-none text-brand-100" />{business.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {business.name} · ABN {business.abn} · {business.licenseNumber}</p>
          <p>
            Website by{" "}
            <a href="https://www.metatapdigital.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">MetaTap Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
