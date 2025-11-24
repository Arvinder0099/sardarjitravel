import Hero from "@/app/(components)/Hero";

export const dynamic = "force-dynamic";

const prices = [
  { label: "14 Days E‑Visa", price: "250 AED" },
  { label: "30 Days E‑Visa", price: "500 AED" },
  { label: "14 Days Sponsor Visa", price: "250 AED" },
  { label: "30 Days Sponsor Visa", price: "500 AED" },
  { label: "1 Year Visa", price: "1500 AED" },
];

export default function BahrainPrices() {
  return (
    <main>
      <Hero title="Bahrain Visit Visa Prices" imageUrl={encodeURI("/visa images/BAHRAIN 14 DAYS E VISA.jpg")} subtitle="E‑visa and sponsor categories" />
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
