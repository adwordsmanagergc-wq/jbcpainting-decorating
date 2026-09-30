import { business } from "@/lib/business";
import { services } from "@/lib/services";
import { suburbsByRegion } from "@/lib/areas";

export const dynamic = "force-static";

export function GET() {
  const base = business.siteUrl;
  const lines = [
    `# ${business.name}`,
    "",
    `> Licensed, insured house painters based in Kariong NSW 2250, servicing every suburb of the Central Coast of New South Wales, Australia, and taking on projects in Newcastle NSW. ${business.yearsExperience} years' experience. Uses Dulux and Haymes paints exclusively. Phone ${business.phone} · ${business.email} · ABN ${business.abn} · Hours ${business.hours}.`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.name}](${base}/services/${s.slug}): ${s.summary}`),
    "",
    "## Pricing (2026)",
    `- [Painting cost guide](${base}/painting-cost-central-coast): interior walls $18–$35/m²; full 3-bed interior $6,000–$10,500; single-storey exterior $4,500–$14,000; roof restoration $3,500–$8,000`,
    "",
    "## Service areas",
    ...suburbsByRegion().flatMap((g) => ["", `### ${g.region}`, ...g.items.map((s) => `- [Painter ${s.name} NSW ${s.postcode}](${base}/painter/${s.slug})`)]),
    "",
    "## More",
    `- [Project gallery](${base}/gallery)`,
    `- [About](${base}/about)`,
    `- [Request a free quote](${base}/contact)`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
