import { Suburb } from "@/lib/suburbs";

const serviceList = [
  {
    title: "Interior Painting",
    desc: "Transform your living spaces with flawless interior finishes that suit your style and lifestyle.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#4CAF50]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Exterior Painting",
    desc: "Weather-resistant coatings that protect your home and dramatically improve kerb appeal.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#4CAF50]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Roof Painting",
    desc: "Extend your roof's life with professional restoration and premium roof coatings.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#4CAF50]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Decorative Finishes",
    desc: "Feature walls, texture coatings, and specialty finishes that add character to any room.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#4CAF50]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Wallpapering",
    desc: "Expert wallpaper installation and removal for a perfect, seamless finish every time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#4CAF50]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    title: "New Builds & Repaints",
    desc: "Premium paint finishes for new construction and complete repaint projects across the Central Coast.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#4CAF50]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export function Services({ suburb }: { suburb: Suburb }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Painting Services in {suburb.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive painting and decorating solutions for homes and businesses in {suburb.name} and surrounding areas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAF8] rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">
                {service.desc} Available throughout {suburb.name}, NSW {suburb.postcode}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
