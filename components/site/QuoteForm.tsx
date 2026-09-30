"use client";

import { useState } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { business } from "@/lib/business";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : null;

const serviceOptions = [
  "Interior painting",
  "Exterior painting",
  "Roof painting",
  "Commercial painting",
  "Strata painting",
  "New home / renovation",
  "Feature wall / decorative",
  "Not sure yet",
];

const field =
  "w-full rounded-xl border border-ink/10 bg-cream/60 px-4 py-3 text-ink placeholder:text-stone-400 outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/15";

export function QuoteForm({ defaultSuburb = "", defaultService = "" }: { defaultSuburb?: string; defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (data._gotcha) return;

    if (!FORM_ENDPOINT) {
      // No form backend configured — hand off to the visitor's email app.
      const body = `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nSuburb: ${data.suburb}\nService: ${data.service}\n\n${data.message}`;
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(`Quote request — ${data.suburb || "Central Coast"}`)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-white p-10 text-center shadow-lift">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand text-white">
          <Check className="h-8 w-8" />
        </span>
        <h3 className="text-2xl font-semibold">Thanks — we&rsquo;ll be in touch!</h3>
        <p className="text-stone">We usually reply within one business day. Need us sooner? Call <a className="font-semibold text-brand-700 underline" href={business.phoneHref}>{business.phone}</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-lift md:p-8" aria-label="Request a free painting quote">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Name *</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Phone *</span>
          <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} placeholder="04xx xxx xxx" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
          <input name="email" type="email" autoComplete="email" className={field} placeholder="you@email.com" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Suburb *</span>
          <input name="suburb" required defaultValue={defaultSuburb} autoComplete="address-level2" className={field} placeholder="e.g. Terrigal" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-ink">What needs painting?</span>
          <select name="service" defaultValue={defaultService} className={field}>
            <option value="">Select a service…</option>
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-ink">Project details</span>
          <textarea name="message" rows={4} className={`${field} resize-none`} placeholder="Rooms, size of home, timing, colours you like…" />
        </label>
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      </div>
      {status === "error" && (
        <p className="mt-4 text-sm text-red-700">Sorry, something went wrong. Please call us on <a href={business.phoneHref} className="underline">{business.phone}</a>.</p>
      )}
      <button type="submit" disabled={status === "sending"} className="btn-primary mt-6 w-full disabled:opacity-60">
        {status === "sending" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        {status === "sending" ? "Sending…" : "Get my free quote"}
      </button>
      <p className="mt-3 text-center text-xs text-stone-400">No obligation · Reply within 1 business day · We never share your details</p>
    </form>
  );
}
