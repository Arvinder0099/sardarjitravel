import Hero from "@/app/(components)/Hero";

export const dynamic = "force-dynamic";

const prices = [
  { label: "USA Visit Visa", price: "2700 AED" },
  { label: "UK Visit Visa", price: "3500 AED" },
  { label: "Australia Visit Visa", price: "2800 AED" },
  { label: "Canada Visit Visa", price: "4500 AED" },
  { label: "New Zealand Visit Visa", price: "2600 AED" },
  { label: "Peru Visit Visa", price: "2500 AED" },
  { label: "Brazil Visit Visa", price: "2650 AED" },
  { label: "Mexico Visit Visa", price: "2550 AED" },
  { label: "Russia Visit Visa", price: "2800 AED" },
  { label: "Montenegro Visit Visa", price: "2500 AED" },
  { label: "Ireland Visit Visa", price: "2650 AED" },
  { label: "Colombia Visit Visa", price: "2500 AED" },
];

export default function WorldwidePrices() {
  return (
    <main>
      <Hero title="Worldwide Visit Visa – File Processing Price" imageUrl={encodeURI("/visa images/visa and services thumbnail.jpeg")} />
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
