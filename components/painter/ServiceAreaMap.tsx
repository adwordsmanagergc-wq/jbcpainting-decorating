import { Suburb } from "@/lib/suburbs";

export function ServiceAreaMap({ suburb }: { suburb: Suburb }) {
  const mapSrc = `https://maps.google.com/maps?q=${suburb.latitude},${suburb.longitude}&z=15&output=embed`;

  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Find Us in {suburb.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Based in Kariong, we service {suburb.name} and all surrounding areas on the Central Coast
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-md border border-gray-100">
          <iframe
            src={mapSrc}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${suburb.name}, NSW`}
          />
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            {suburb.name}, NSW {suburb.postcode} — Central Coast, Australia
          </p>
        </div>
      </div>
    </section>
  );
}
