const steps = [
  { title: "Free on-site quote", desc: "We visit, measure, inspect surfaces and talk colours. You get a clear, itemised written quote — usually within 48 hours." },
  { title: "Protect & prepare", desc: "Furniture covered, floors and gardens protected. Then washing, scraping, filling, sanding and priming — done properly." },
  { title: "Premium paint, applied right", desc: "Two full coats of Dulux or Haymes, cut in by hand with sharp lines and an even, consistent sheen." },
  { title: "Walkthrough & clean-up", desc: "We inspect every surface with you, touch up anything you're not 100% happy with, and leave the site spotless." },
];

export function Process({ dark = false }: { dark?: boolean }) {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className={`relative rounded-3xl p-7 ${dark ? "bg-white/5 ring-1 ring-white/10" : "card"}`}>
          <span className={`font-display text-5xl font-semibold ${dark ? "text-ochre" : "text-brand"}`}>0{i + 1}</span>
          <h3 className={`mt-4 font-sans text-lg font-semibold ${dark ? "text-white" : "text-ink"}`}>{s.title}</h3>
          <p className={`mt-2 leading-relaxed ${dark ? "text-white/65" : "text-stone"}`}>{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}
