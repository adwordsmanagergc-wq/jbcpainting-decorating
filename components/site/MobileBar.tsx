import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { business } from "@/lib/business";

/** Sticky call-to-action bar on phones; floating WhatsApp on larger screens. */
export function MobileBar() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[1fr_1fr_auto] gap-2 border-t border-ink/10 bg-cream/95 p-3 backdrop-blur md:hidden">
        <a href={business.phoneHref} className="btn !py-3 bg-ink text-white"><Phone className="h-4 w-4" /> Call now</a>
        <Link href="/contact" className="btn-primary !py-3">Free quote</Link>
        <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="btn !px-4 !py-3 bg-[#25D366] text-white" aria-label="Message us on WhatsApp">
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
      <a
        href={business.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-110 md:grid"
        aria-label="Message us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
