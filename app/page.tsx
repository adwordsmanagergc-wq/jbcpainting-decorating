"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Check,
  ChevronDown,
  Shield,
  Paintbrush,
  Home,
  Building2,
  Layers,
  Wallpaper,
  Hammer,
  Menu,
  X,
  MessageCircle,
  Loader2,
} from "lucide-react";

const logo =
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.08-(1).jpeg";

const carouselImages = [
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.15-(1).jpeg",
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.15-(2).jpeg",
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.14-(2).jpeg",
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.14-(3).jpeg",
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.15.jpeg",
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.14.jpeg",
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.10.jpeg",
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.14-(1).jpeg",
];

const services = [
  { icon: Home, title: "Interior Painting", desc: "Transform your living spaces with flawless interior finishes" },
  { icon: Building2, title: "Exterior Painting", desc: "Weather-resistant coatings that protect and beautify" },
  { icon: Layers, title: "Roof Painting", desc: "Extend your roof's life with professional restoration" },
  { icon: Paintbrush, title: "Decorative Finishes", desc: "Feature walls, textures, and specialty coatings" },
  { icon: Wallpaper, title: "Wallpapering", desc: "Expert installation for a perfect finish every time" },
  { icon: Building2, title: "Commercial Work", desc: "Minimal disruption, maximum impact for businesses" },
  { icon: Hammer, title: "New Builds", desc: "Premium finishes for new construction projects" },
  { icon: Home, title: "Repaints", desc: "Refresh and renew your existing paintwork" },
];

const benefits = [
  { title: "Free Quotes", desc: "No obligation quotes for all Central Coast projects" },
  { title: "Fully Licensed & Insured", desc: "Complete peace of mind with every job" },
  { title: "Premium Paints", desc: "We use only quality brands like Dulux and Taubmans" },
  { title: "Tidy Workmanship", desc: "We leave your property spotless when we're done" },
  { title: "On-Time Completion", desc: "Reliable scheduling you can count on" },
  { title: "Locally Owned", desc: "Proudly based in Kariong, servicing the Coast" },
];

const serviceAreas = [
  { name: "Kariong", slug: "kariong" },
  { name: "West Gosford", slug: "west-gosford" },
  { name: "Point Clare", slug: "point-clare" },
  { name: "Tascott", slug: "tascott" },
  { name: "Koolewong", slug: "koolewong" },
  { name: "Woy Woy Bay", slug: "woy-woy-bay" },
  { name: "Phegans Bay", slug: "phegans-bay" },
  { name: "Horsfield Bay", slug: "horsfield-bay" },
  { name: "Somersby", slug: "somersby" },
  { name: "Calga", slug: "calga" },
  { name: "Mooney Mooney Creek", slug: "mooney-mooney-creek" },
  { name: "Wondabyne", slug: "wondabyne" },
];

const testimonials = [
  { name: "Sarah M.", location: "Kariong", text: "JBC did an incredible job on our exterior. Professional, tidy, and the finish is flawless. Highly recommend!", rating: 5 },
  { name: "David & Lisa T.", location: "West Gosford", text: "From quote to completion, everything was smooth. Our interior looks brand new. Will definitely use again.", rating: 5 },
  { name: "Michael R.", location: "Point Clare", text: "Fantastic work on our roof painting. The team was professional and finished ahead of schedule.", rating: 5 },
  { name: "Jenny K.", location: "Tascott", text: "So happy with our feature wall! JBC understood exactly what we wanted and delivered beautifully.", rating: 5 },
];

const faqs = [
  { q: "How much does painting a house on the Central Coast cost?", a: "Costs vary depending on the size of your home, the condition of surfaces, and the type of paint used. We provide free, no-obligation quotes so you know exactly what to expect. Contact us for a personalised estimate." },
  { q: "Are you a licensed painter?", a: "Yes, JBC Painting & Decorating is fully licensed and compliant with all NSW regulations. We carry all necessary insurances for your peace of mind." },
  { q: "Do you offer free quotes in Kariong and surrounding areas?", a: "Absolutely! We offer free quotes throughout Kariong, Gosford, Woy Woy, and the entire Central Coast region. Simply give us a call or fill out our contact form." },
  { q: "What paint brands do you use?", a: "We use premium Australian brands including Dulux, Taubmans, and Solver. We're happy to discuss paint options and finishes to suit your preferences and budget." },
  { q: "How long does an interior repaint take?", a: "A typical 3-bedroom home takes 3-5 days depending on preparation required and the number of colours. We'll provide a clear timeline with your quote." },
  { q: "Do you do exterior and roof painting?", a: "Yes, we specialise in both exterior painting and roof restoration. We use weather-resistant coatings designed for Australian conditions." },
  { q: "Are you insured?", a: "Yes, we carry comprehensive public liability insurance and workers compensation coverage. You can request a copy of our certificates at any time." },
  { q: "Do you service Woy Woy, Gosford, and surrounding suburbs?", a: "Yes, we service the entire Central Coast including Gosford, Woy Woy, Terrigal, Erina, Umina Beach, and all surrounding suburbs." },
  { q: "How do I prepare for the painters arriving?", a: "We recommend moving small items and valuables away from walls. Our team will handle furniture covers and floor protection. We'll discuss specific preparation needs before starting." },
  { q: "Do you offer a workmanship warranty?", a: "Yes, all our work comes with a workmanship warranty. We stand behind the quality of our painting and will address any concerns promptly." },
];

const navItems = ["Services", "Areas", "Gallery", "FAQs", "Contact"];

export default function JBCPaintingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", suburb: "", service: "", message: "",
  });

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "JBC Painting & Decorating",
      "image": logo,
      "telephone": "+61402360514",
      "email": "info@jbcpainting.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kariong",
        "addressRegion": "NSW",
        "addressCountry": "AU",
      },
      "areaServed": serviceAreas.map((area) => ({ "@type": "Place", "name": area.name + ", NSW" })),
      "openingHours": "Mo-Fr 07:00-17:00, Sa 08:00-14:00",
      "priceRange": "$$",
    });
    document.head.appendChild(schema);
    return () => { document.head.removeChild(schema); };
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMobileMenuOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", phone: "", email: "", suburb: "", service: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3]" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <img src={logo} alt="JBC Painting & Decorating Logo" className="h-10 md:h-14 w-auto" />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-gray-700 hover:text-[#4CAF50] transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:0402360514" className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700">
                <Phone className="w-4 h-4 text-[#4CAF50]" />
                0402 360 514
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="hidden sm:block bg-[#4CAF50] hover:bg-[#1a1a1a] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </button>
              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-[#4CAF50] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href="tel:0402360514"
                  className="flex items-center gap-2 px-4 py-3 text-base font-medium text-gray-700 hover:text-[#4CAF50] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#4CAF50]" />
                  0402 360 514
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="mx-4 bg-[#4CAF50] hover:bg-[#1a1a1a] text-white px-4 py-3 rounded-lg text-base font-medium transition-colors"
                >
                  Get a Free Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative text-white py-20 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/80 to-[#1a1a1a]/60" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Painter & Decorator Central Coast
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
                Quality painting and decorating services in Kariong and surrounds. Transform your home with Central Coast's trusted house painters & decorators.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#3d8b40] hover:bg-[#d56a4f] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-lg"
                >
                  Get a Free Quote
                </button>
                <a
                  href="tel:0402360514"
                  className="border-2 border-white/40 hover:border-white/80 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#4CAF50]" />
                  <span>Licensed &amp; Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#4CAF50]" />
                  <span>Locally Owned</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span>5-Star Rated</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Work Carousel */}
        <section id="gallery" className="relative overflow-hidden bg-white py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Work
          </h2>
          <div className="carousel-track flex" style={{ animation: "scroll 30s linear infinite" }}>
            {[...carouselImages, ...carouselImages, ...carouselImages].map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-80 md:w-96 h-56 md:h-72 mx-2">
                <img
                  src={img}
                  alt={`JBC Painting work example ${(idx % carouselImages.length) + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-${carouselImages.length} * (24rem + 1rem))); }
            }
            .carousel-track { animation: scroll 30s linear infinite; }
            .carousel-track:hover { animation-play-state: paused; }
            @media (max-width: 768px) {
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-${carouselImages.length} * (20rem + 1rem))); }
              }
            }
          `}</style>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Painting Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive painting and decorating solutions for homes and businesses across the Central Coast
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="bg-[#FAFAF8] rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
                  <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose JBC */}
        <section className="py-20 md:py-28 bg-[#1a1a1a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why Choose JBC Painting &amp; Decorating
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Central Coast painters you can trust for quality workmanship and exceptional service
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section id="areas" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Areas We Service
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted painter servicing the Central Coast and surrounding suburbs
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {serviceAreas.map((area, idx) => (
                <Link key={idx} href={`/painter/${area.slug}`} className="bg-[#4CAF50]/10 text-[#4CAF50] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#4CAF50] hover:text-white transition-colors">
                  {area.name}
                </Link>
              ))}
            </div>

            <p className="text-center text-gray-500 mt-8 text-sm">
              Plus Gosford, Woy Woy, Terrigal, Erina, Umina Beach and more. Contact us to confirm we service your area.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                What Our Customers Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from homeowners across the Central Coast who trusted JBC with their painting projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-[#1a1a1a]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-20 md:py-28 bg-[#FAFAF8]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our painting services on the Central Coast
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-[#1a1a1a] pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 md:py-28 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get Your Free Quote
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Contact JBC Painting &amp; Decorating today for a no-obligation quote
              </p>
              <a
                href="tel:0402360514"
                className="inline-flex items-center gap-2 text-2xl font-bold text-[#4CAF50] hover:text-[#5a9469] transition-colors"
              >
                <Phone className="w-6 h-6" />
                0402 360 514
              </a>
            </div>

            {formStatus === "success" ? (
              <div className="bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Enquiry Sent!</h3>
                <p className="text-gray-300 mb-6">Thanks for getting in touch. We'll call you back within 1 business day.</p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 text-gray-900">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50] transition-colors outline-none"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50] transition-colors outline-none"
                      placeholder="0402 360 514"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50] transition-colors outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Suburb</label>
                    <input
                      type="text"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50] transition-colors outline-none"
                      placeholder="Kariong"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50] transition-colors outline-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="roof">Roof Painting</option>
                    <option value="decorative">Decorative Finishes</option>
                    <option value="wallpaper">Wallpapering</option>
                    <option value="commercial">Commercial Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50] transition-colors outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {formStatus === "error" && (
                  <p className="text-red-600 text-sm mb-4">
                    Something went wrong. Please call us directly on{" "}
                    <a href="tel:0402360514" className="underline">0402 360 514</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-[#4CAF50] hover:bg-[#1a1a1a] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Request Free Quote"
                  )}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a252f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <img src={logo} alt="JBC Painting & Decorating" className="h-12 w-auto mb-4" />
              <p className="text-gray-400 text-sm mb-4 max-w-md">
                Professional painting and decorating services for homes and businesses across the Central Coast. Quality workmanship, premium paints, exceptional service.
              </p>
              <p className="text-gray-500 text-xs">ABN: 91 883 662 973</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Service Areas</h4>
              <details className="group">
                <summary className="flex items-center gap-2 cursor-pointer text-sm text-gray-400 hover:text-white transition-colors list-none">
                  <span>View all 12 areas</span>
                  <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                </summary>
                <ul className="mt-3 space-y-1 text-sm text-gray-400 max-h-48 overflow-y-auto">
                  {serviceAreas.map((area) => (
                    <li key={area.slug}>
                      <Link href={`/painter/${area.slug}`} className="hover:text-white transition-colors">{area.name}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#4CAF50]" />
                  <a href="tel:0402360514" className="hover:text-white transition-colors">0402 360 514</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#4CAF50]" />
                  <a href="mailto:info@jbcpainting.com.au" className="hover:text-white transition-colors">info@jbcpainting.com.au</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#4CAF50]" />
                  <span>Kariong, NSW</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} JBC Painting &amp; Decorating. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating action buttons — call & WhatsApp */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/61402360514?text=Hi%20JBC%2C%20I%27d%20like%20a%20free%20quote"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>
        <a
          href="tel:0402360514"
          className="w-14 h-14 bg-[#4CAF50] hover:bg-[#3d8b40] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
