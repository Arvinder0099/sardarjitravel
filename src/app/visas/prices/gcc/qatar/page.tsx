import Hero from "..\..\..\../components/Hero";

export const dynamic = "force-dynamic";

const prices = [
  { label: "Qatar Visit Visa", price: "250 AED" },
];

export default function QatarPrices() {
  return (
    <main>
      <Hero title="Qatar Visit Visa Price" imageUrl={encodeURI("/visa images/QATAR VISIT VISA hero image.jpg")} />
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
