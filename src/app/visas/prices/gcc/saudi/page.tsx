import Hero from "@/app/components/Hero";

const prices = [
  { label: "Business Visit Visa (Saudi)", price: "2500 AED" },
  { label: "Employment Visa – Saudi", price: "12000 AED" },
  { label: "Employment Visa – Qatar", price: "7000 AED" },
  { label: "Employment Visa – Oman", price: "7500 AED" },
  { label: "Employment Visa – Dubai", price: "6000 AED" },
  { label: "Tourist Visa for GCC Residents", price: "550 AED" },
  { label: "Umrah Visa", price: "650 AED" },
];

export default function GCCSaudiPrices() {
  return (
    <main>
      <Hero
        title="Saudi Arabia & GCC Visa Prices"
        subtitle="Business, Employment, GCC residents tourist & Umrah"
        imageUrl={encodeURI("/visa images/Saudi Arabia E-Visa.jpeg")}
      />
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
