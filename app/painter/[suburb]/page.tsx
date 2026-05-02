import { Metadata } from "next";
import { suburbs } from "@/lib/suburbs";
import { business } from "@/lib/business";
import { getSuburbMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/painter/Breadcrumbs";
import { JsonLd } from "@/components/painter/JsonLd";
import { Hero } from "@/components/painter/Hero";
import { Services } from "@/components/painter/Services";
import { WhyChooseUs } from "@/components/painter/WhyChooseUs";
import { Process } from "@/components/painter/Process";
import { LocalArea } from "@/components/painter/LocalArea";
import { Testimonials } from "@/components/painter/Testimonials";
import { FAQ } from "@/components/painter/FAQ";
import { ServiceAreaMap } from "@/components/painter/ServiceAreaMap";
import { CTASection } from "@/components/painter/CTASection";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return suburbs.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ suburb: string }> }): Promise<Metadata> {
  const { suburb: slugParam } = await params;
  const suburb = suburbs.find((s) => s.slug === slugParam);
  if (!suburb) return {};
  const { title, description, url } = getSuburbMetadata(suburb);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
    twitter: { card: "summary_large_image", title, description },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" as const, "max-video-preview": -1 },
    },
    keywords: [
      `painter ${suburb.name}`,
      `house painter ${suburb.name}`,
      `painters near me ${suburb.name}`,
      `${suburb.name} painting services`,
      `interior painter ${suburb.name}`,
      `exterior painter ${suburb.name}`,
      `roof painting ${suburb.name}`,
      `painter Central Coast`,
      `painting contractor ${suburb.name} NSW`,
    ],
  };
}

export default async function SuburbPage({ params }: { params: Promise<{ suburb: string }> }) {
  const { suburb: slugParam } = await params;
  const suburb = suburbs.find((s) => s.slug === slugParam);
  if (!suburb) notFound();

  const nearbyData = suburb.nearbySuburbs
    .map((slug) => suburbs.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <>
      <JsonLd suburb={suburb} />
      <Breadcrumbs suburb={suburb.name} />
      <main>
        <Hero suburb={suburb} />
        <Services suburb={suburb} />
        <WhyChooseUs suburb={suburb} />
        <Process />
        <LocalArea suburb={suburb} />
        <Testimonials suburb={suburb} />
        <FAQ suburb={suburb} />
        <ServiceAreaMap suburb={suburb} />
        {/* Nearby Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Painting Services Near {suburb.name}
            </h2>
            <p className="text-gray-600 mb-8">We also service these nearby areas on the Central Coast</p>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyData.map(
                (nearby) =>
                  nearby && (
                    <Link
                      key={nearby.slug}
                      href={`/painter/${nearby.slug}`}
                      className="bg-[#4CAF50]/10 text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                    >
                      Painter {nearby.name}
                    </Link>
                  )
              )}
              <Link
                href="/"
                className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                View All Areas
              </Link>
            </div>
          </div>
        </section>
        <CTASection suburb={suburb} />
      </main>
    </>
  );
}
