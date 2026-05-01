import { Suburb } from "@/lib/suburbs";

const fixedBenefits = [
  "Licensed & Insured — NSW Fair Trading licensed with comprehensive public liability cover",
  "Premium Paints — Dulux, Taubmans, and other leading Australian brands",
  "Workmanship Warranty — we stand behind every job we complete",
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
      </div>
    </section>
  );
}
