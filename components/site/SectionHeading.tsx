export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const a = align === "center" ? "mx-auto text-center items-center" : "items-start";
  return (
    <div className={`mb-12 flex max-w-3xl flex-col gap-4 md:mb-16 ${a}`}>
      {eyebrow && <span className={`eyebrow ${dark ? "!text-brand-100" : ""}`}>{eyebrow}</span>}
      <h2 className={`h-section ${dark ? "!text-white" : ""}`}>{title}</h2>
      {lead && <p className={`lead ${dark ? "!text-white/70" : ""}`}>{lead}</p>}
    </div>
  );
}
