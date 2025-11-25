import Hero from "@/app/components/Hero";

const prices = [
  { label: "Ghana Visit Visa", price: "1200 AED" },
  { label: "South Africa Visit Visa", price: "950 AED" },
  { label: "Egypt Visit Visa", price: "750 AED" },
  { label: "Morocco Visit Visa", price: "750 AED" },
  { label: "Nigeria Visit Visa", price: "3000 AED" },
  { label: "Kenya Visit Visa", price: "850 AED" },
  { label: "Zimbabwe Visit Visa", price: "750 AED" },
  { label: "Ethiopia Visit Visa", price: "850 AED" },
  { label: "South Sudan Visit Visa", price: "850 AED" },
  { label: "Tunisia Visit Visa", price: "1300 AED" },
  { label: "Algeria Visit Visa", price: "650 AED" },
  { label: "Uganda Visit Visa", price: "750 AED" },
  { label: "Cameroon Visit Visa", price: "1500 AED" },
  { label: "Ivory Coast Visit Visa", price: "850 AED" },
  { label: "Tanzania Visit Visa", price: "750 AED" },
  { label: "Gabon Visit Visa", price: "1300 AED" },
  { label: "Guinea Visit Visa", price: "1200 AED" },
  { label: "Zambia Visit Visa", price: "550 AED" },
  { label: "DR Congo Visit Visa", price: "2000 AED" },
];

export default function AfricaPrices() {
  return (
    <main>
      <Hero title="African Countries – Visit Visa Prices" imageUrl={encodeURI("/visa images/africa thumbnail.jpeg")} />
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
