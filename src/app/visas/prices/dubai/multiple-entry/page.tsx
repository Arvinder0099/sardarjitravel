import Hero from "@/app/components/Hero";

const prices = [
  { label: "30 Days UAE Multiple Entry", price: "750 AED" },
  { label: "60 Days UAE Multiple Entry", price: "1550 AED" },
  { label: "5 Years UAE Multiple Entry", price: "2850 AED" },
];

export default function DubaiMultipleEntryPrices() {
  return (
    <main>
      <Hero title="UAE Multiple Entry Visa Prices" imageUrl={encodeURI("/visa images/MULTIPLE 60 DAYS VISA DUBAI.jpg")} subtitle="Choose the duration that fits your travel plan." />
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-14">
          <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
            {prices.map((p) => (
              <li key={p.label} className="flex items-center justify-between p-4">
                <span className="text-slate-800">{p.label}</span>
                <span className="font-semibold text-slate-900">{p.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 text-sm text-slate-500">Note: Prices shown exclude any additional government charges where applicable.</div>
        </div>
      </section>
    </main>
  );
}
