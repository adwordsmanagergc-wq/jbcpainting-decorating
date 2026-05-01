const steps = [
  {
    number: "01",
    title: "Free Consultation & Quote",
    desc: "We visit your property in person, assess the surfaces, discuss your vision, and provide a detailed written quote at no charge.",
  },
  {
    number: "02",
    title: "Surface Preparation",
    desc: "Thorough cleaning, scraping, sanding, filling, and priming. Our preparation is the foundation of every long-lasting paint job.",
  },
  {
    number: "03",
    title: "Premium Paint Application",
    desc: "We apply quality Australian paints using the right technique for every surface — brush, roller, or spray — for a flawless, even finish.",
  },
  {
    number: "04",
    title: "Quality Inspection",
    desc: "Our team reviews every surface in detail before we consider a job complete, touching up anything that doesn't meet our high standard.",
  },
  {
    number: "05",
    title: "Final Walkthrough",
    desc: "We walk through the completed work with you to ensure you're completely happy. We don't leave until you're satisfied.",
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Painting Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A clear, professional process from first contact to final finish — every time
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#4CAF50]/20 z-0" style={{ width: "calc(100% - 2rem)", left: "calc(50% + 2rem)" }} />
              )}
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow relative z-10 h-full">
                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mb-4 text-white font-bold text-sm">
                  {step.number}
                </div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2 text-base">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
