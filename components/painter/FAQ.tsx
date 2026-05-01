import { Suburb } from "@/lib/suburbs";

export function FAQ({ suburb }: { suburb: Suburb }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            FAQs About Painters in {suburb.name}
          </h2>
          <p className="text-lg text-gray-600">
            Common questions from {suburb.name} homeowners about our painting services
          </p>
        </div>

        <div className="space-y-3">
          {suburb.faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-[#FAFAF8] rounded-xl border border-gray-100 overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                <span className="font-medium text-[#1a1a1a] pr-4 text-sm md:text-base">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="px-6 pb-4 pt-1">
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
