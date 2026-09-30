"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business, navLinks } from "@/lib/business";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled || open ? "bg-cream/95 shadow-[0_1px_0_rgba(15,34,25,.08)] backdrop-blur" : "bg-cream"}`}>
      <div className="hidden bg-ink text-xs text-white/70 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <span>Locally owned in Kariong · Servicing the whole Central Coast &amp; Newcastle</span>
          <span>{business.hours}</span>
        </div>
      </div>
      <div className="container-x flex h-16 items-center justify-between gap-6 md:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label={`${business.name} — home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={business.logo} alt={`${business.name} logo`} className="h-10 w-auto rounded-md md:h-12" width={120} height={48} />
          <span className="hidden leading-tight xl:block">
            <span className="block font-display text-lg font-semibold">JBC Painting</span>
            <span className="block text-xs text-stone-400">&amp; Decorating · Central Coast</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${active ? "bg-ink/5 text-ink" : "text-ink/70 hover:text-ink"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={business.phoneHref} className="hidden items-center gap-2 px-3 font-semibold text-ink sm:flex">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand-700"><Phone className="h-4 w-4" /></span>
            {business.phone}
          </a>
          <Link href="/contact" className="btn-primary hidden !px-5 !py-2.5 !text-sm md:inline-flex">Free quote</Link>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-ink/5 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-ink/5 bg-cream lg:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-4">
            <Link href="/" className="rounded-xl px-3 py-3 text-lg font-medium hover:bg-ink/5">Home</Link>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="rounded-xl px-3 py-3 text-lg font-medium hover:bg-ink/5">{l.label}</Link>
            ))}
            <a href={business.phoneHref} className="btn-primary mt-4"><Phone className="h-5 w-5" /> Call {business.phone}</a>
          </div>
        </nav>
      )}
    </header>
  );
}
