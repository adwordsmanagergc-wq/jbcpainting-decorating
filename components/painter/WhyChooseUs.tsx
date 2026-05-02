import Link from "next/link";
import { Suburb } from "@/lib/suburbs";

const fixedBenefits = [
  "Licensed & Insured — NSW Fair Trading licensed with comprehensive public liability cover",
  "Premium Paints — We use Dulux & Haymes for a flawless, long-lasting finish",
  "Workmanship Warranty — we stand behind every job we complete",
];

const paintBrands = [
  {
    name: "Dulux",
    url: "https://www.dulux.com.au",
    logo: "/images/dulux-logo.svg",
    tagline: "Premium Interior & Exterior",
  },
  {
    name: "Haymes Paint",
    url: "https://www.haymes.com.au",
    logo: "/images/haymes-logo.svg",
    tagline: "Australian Made & Owned",
  },
];

function CheckCircle() {
  return (
    <div className="flex-shrink-0 w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}

export function WhyChooseUs({ suburb }: { suburb: Suburb }) {
  const allBenefits = [...suburb.uniqueSellingPoints, ...fixedBenefits];

  return (
    <section className="py-20 md:py-28 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Choose Our {suburb.name} Painters
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            JBC Painting & Decorating brings local knowledge and professional expertise to every job in {suburb.name}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBenefits.map((benefit, idx) => {
            const parts = benefit.split(" — ");
            const title = parts[0];
            const desc = parts[1] || "";
            return (
              <div key={idx} className="flex gap-4">
                <CheckCircle />
                <div>
                  <h3 className="text-lg font-semibold mb-1">{title}</h3>
                  {desc && <p className="text-gray-400 text-sm">{desc}</p>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Paint brands strip */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-center text-sm uppercase tracking-widest text-gray-400 mb-8 font-medium">
            Trusted Paint Brands We Use
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {paintBrands.map((brand) => (
              <Link
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#4CAF50]/40 rounded-xl px-6 py-4 transition-all group"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-10 w-auto rounded-lg object-contain"
                />
                <div className="text-left">
                  <p className="font-semibold text-white group-hover:text-[#4CAF50] transition-colors">{brand.name}</p>
                  <p className="text-xs text-gray-400">{brand.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
