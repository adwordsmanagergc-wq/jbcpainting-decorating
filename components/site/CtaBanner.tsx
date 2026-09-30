import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { business } from "@/lib/business";

export function CtaBanner({ title = "Ready for a finish you'll love?", text = "Free, no-obligation quotes across the Central Coast. Most quotes delivered within 48 hours." }: { title?: string; text?: string }) {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-forest px-6 py-14 text-white md:px-16 md:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-ochre/25 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
            <p className="mt-4 text-lg text-white/70">{text}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
            <Link href="/contact" className="btn-primary">Get a free quote <ArrowRight className="h-5 w-5" /></Link>
            <a href={business.phoneHref} className="btn-light"><Phone className="h-5 w-5" /> {business.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
