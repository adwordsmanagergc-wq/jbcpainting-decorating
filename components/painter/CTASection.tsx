import Link from "next/link";
import { Suburb } from "@/lib/suburbs";
import { business } from "@/lib/business";

export function CTASection({ suburb }: { suburb: Suburb }) {
  return (
    <section className="py-20 md:py-28 bg-[#1a1a1a] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to Transform Your {suburb.name} Home?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Get a free, no-obligation quote from JBC Painting & Decorating. We service {suburb.name} and all surrounding Central Coast suburbs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#4CAF50] hover:text-[#66bb69] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.6 5.1 2 2 0 0 1 3.6 2.93h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.5a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18l.19-1.08z" />
            </svg>
            {business.phone}
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${business.email}`}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {business.email}
          </a>
          <span className="hidden sm:block text-gray-600">|</span>
          <Link
            href="/#contact"
            className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          {business.licenseNumber} &nbsp;&bull;&nbsp; ABN: {business.abn} &nbsp;&bull;&nbsp; {business.address}
        </p>
      </div>
    </section>
  );
}
