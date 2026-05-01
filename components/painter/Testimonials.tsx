import { Suburb } from "@/lib/suburbs";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-200"}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function Testimonials({ suburb }: { suburb: Suburb }) {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What {suburb.name} Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from homeowners in {suburb.name} and surrounding areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {suburb.testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < testimonial.rating} />
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-[#1a1a1a]">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.suburb}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-10 text-sm">
          Join our growing list of happy customers across {suburb.name} and the Central Coast
        </p>
      </div>
    </section>
  );
}
