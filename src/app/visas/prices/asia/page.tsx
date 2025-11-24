import Hero from "..\..\..\/components/Hero";

export const dynamic = "force-dynamic";


const prices = [
  { label: "Malaysia Visit Visa", price: "550 AED" },
  { label: "Indonesia Visit Visa", price: "850 AED" },
  { label: "China Visit Visa", price: "750 AED" },
  { label: "Japan Visit Visa", price: "650 AED" },
  { label: "Singapore Visit Visa", price: "650 AED" },
  { label: "Hong Kong Visit Visa", price: "550 AED" },
  { label: "Philippines Visit Visa", price: "650 AED" },
  { label: "Jordan Visit Visa", price: "650 AED" },
  { label: "Taiwan Visit Visa", price: "1100 AED" },
  { label: "Turkey Visit Visa", price: "700 AED" },
  { label: "India Visit Visa", price: "750 AED" },
  { label: "Thailand Visit Visa", price: "TBD" },
  { label: "South Korea Visit Visa", price: "1250 AED" },
  { label: "Sri Lanka Visit Visa", price: "750 AED" },
  { label: "Azerbaijan Visit Visa", price: "280 AED" },
  { label: "Cambodia Visit Visa", price: "750 AED" },
  { label: "Vietnam Visit Visa", price: "850 AED" },
  { label: "Pakistan Visit Visa", price: "450 AED" },
  { label: "Uzbekistan Visit Visa", price: "850 AED" },
  { label: "Iran Visit Visa", price: "650 AED" },
  { label: "Iraq Visit Visa", price: "2700 AED" },
  { label: "Bangladesh Visit Visa", price: "650 AED" },
  { label: "Nepal Visit Visa", price: "750 AED" },
];

export default function AsiaPrices() {
  return (
    <main>
      <Hero title="Asian Countries – Visit Visa Prices" imageUrl={encodeURI("/visa images/asia thumbnail.jpeg")} />
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
