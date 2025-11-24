import Hero from "..\..\..\../components/Hero";

export const dynamic = "force-dynamic";

const prices = [
  { label: "30 days UAE Visit Visa", price: "860 AED" },
  { label: "60 days UAE Visit Visa", price: "1355 AED" },
];

export default function DubaiAfricanPrices() {
  return (
    <main>
      <Hero title="Dubai Visa Prices for African Nationals" subtitle="Prices shown exclude any additional government charges where applicable." imageUrl={encodeURI("/visa images/africa thumbnail.jpeg")} />
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
