import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { business } from "@/lib/business";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { QuoteForm } from "@/components/site/QuoteForm";

const title = "Free Painting Quote | Contact JBC Painting & Decorating";
const description = "Request a free painting quote on the Central Coast. Call JBC Painting & Decorating on 0402 360 514, WhatsApp or send an enquiry — replies within 1 business day.";

export const metadata: Metadata = pageMeta({ title, description, path: "/contact" });

export default function ContactPage() {
  const items = [
    { icon: Phone, label: "Call", value: business.phone, href: business.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: "Message us", href: business.whatsapp },
    { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
    { icon: MapPin, label: "Based in", value: "Kariong · Servicing the Central Coast & Newcastle" },
    { icon: Clock, label: "Hours", value: business.hours },
  ];
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-100/70 blur-3xl" />
      <div className="container-x relative grid gap-14 py-12 md:py-20 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
          <h1 className="mt-8 text-5xl font-semibold leading-[1.05] md:text-6xl">Get your free <span className="italic text-brand-700">painting quote</span></h1>
          <p className="lead mt-6 max-w-lg">Tell us about your project and we&rsquo;ll be in touch within one business day to book a free on-site quote. Prefer to talk? Call us — you&rsquo;ll speak directly with the painter.</p>
          <ul className="mt-10 space-y-3">
            {items.map((i) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-brand-50 text-brand-700"><i.icon className="h-5 w-5" /></span>
                  <span><span className="block text-sm text-stone-400">{i.label}</span><span className="block font-semibold text-ink">{i.value}</span></span>
                </>
              );
              return (
                <li key={i.label}>
                  {i.href ? (
                    <a href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="card flex items-center gap-4 p-4 hover:shadow-lift">{inner}</a>
                  ) : (
                    <div className="flex items-center gap-4 p-4">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:pt-16"><QuoteForm /></div>
      </div>
    </section>
  );
}
