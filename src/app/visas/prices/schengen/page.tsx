import Hero from "..\..\../components/Hero";

export const dynamic = "force-dynamic";

const prices = [
  { label: "Denmark Visit Visa", price: "2150 AED" },
  { label: "Norway Visit Visa", price: "2200 AED" },
  { label: "France Visit Visa", price: "2300 AED" },
  { label: "Germany Visit Visa", price: "2450 AED" },
  { label: "Iceland Visit Visa", price: "2250 AED" },
  { label: "Greece Visit Visa", price: "2170 AED" },
  { label: "Switzerland Visit Visa", price: "2380 AED" },
  { label: "Spain Visit Visa", price: "2500 AED" },
  { label: "Italy Visit Visa", price: "2460 AED" },
  { label: "Hungary Visit Visa", price: "2250 AED" },
  { label: "Austria Visit Visa", price: "2200 AED" },
  { label: "Finland Visit Visa", price: "2300 AED" },
  { label: "Poland Visit Visa", price: "2250 AED" },
  { label: "Portugal Visit Visa", price: "2150 AED" },
  { label: "Czech Visit Visa", price: "2150 AED" },
  { label: "Sweden Visit Visa", price: "2350 AED" },
  { label: "Luxembourg Visit Visa", price: "2250 AED" },
  { label: "Malta Visit Visa", price: "2100 AED" },
  { label: "Croatia Visit Visa", price: "2340 AED" },
  { label: "Slovakia Visit Visa", price: "2150 AED" },
  { label: "Slovenia Visit Visa", price: "2260 AED" },
  { label: "Latvia Visit Visa", price: "2200 AED" },
  { label: "Liechtenstein Visit Visa", price: "2250 AED" },
  { label: "Lithuania Visit Visa", price: "2500 AED" },
  { label: "Estonia Visit Visa", price: "2300 AED" },
  { label: "Bulgaria Visit Visa", price: "2400 AED" },
  { label: "Romania Visit Visa", price: "2350 AED" },
];

export default function SchengenPrices() {
  return (
    <main>
      <Hero title="Schengen Countries – File Processing Price" imageUrl="/visa images/Schengen Visa.jpeg" />
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
