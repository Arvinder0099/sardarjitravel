import Hero from "@/app/(components)/Hero";

const prices = [
  { label: "30 Days UAE Visa (Change by Flight)", price: "1250 AED" },
  { label: "60 Days UAE Visa (Change by Flight)", price: "1450 AED" },
];

export const dynamic = "force-dynamic";

export default function DubaiChangeByFlightPrices() {
  return (
    <main>
      <Hero title="Visa Change / Extension / Renewal – By Flight" imageUrl={encodeURI("/visa images/VISA EXTENSION DUBAI VISA.jpeg")} subtitle="Select your extension duration." />
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