import { Suburb } from "@/lib/suburbs";

export function LocalArea({ suburb }: { suburb: Suburb }) {
  const paragraphs = suburb.localContext.split("\n\n").filter(Boolean);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Painting in {suburb.name} — Local Expertise
          </h2>
          <div className="w-16 h-1 bg-[#4CAF50] mx-auto" />
        </div>

        <div className="prose prose-lg max-w-none">
          {paragraphs.map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
