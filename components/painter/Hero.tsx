import Link from "next/link";
import { Suburb } from "@/lib/suburbs";
import { business } from "@/lib/business";

export function Hero({ suburb }: { suburb: Suburb }) {
  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/80 to-[#1a1a1a]/60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Painter in {suburb.name}
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-4 leading-relaxed">
            Professional painting and decorating services in {suburb.name}, NSW {suburb.postcode}.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
            {suburb.intro.split(". ")[0]}. Locally based on the Central Coast — free quotes, no obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={business.phoneHref}
              className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.6 5.1 2 2 0 0 1 3.6 2.93h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.5a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18l.19-1.08z" />
              </svg>
              Call {business.phone}
            </a>
            <Link
              href="/#contact"
              className="border-2 border-white/40 hover:border-white/80 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#4CAF50]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#4CAF50]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Free Quotes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#4CAF50]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Locally Owned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
