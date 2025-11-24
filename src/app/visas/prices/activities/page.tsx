import Hero from "@/app/(components)/Hero";

export const dynamic = "force-dynamic";

const prices = [
  { label: "Desert Safari (per person)", price: "90 AED" },
  { label: "Dhow Cruise (per person)", price: "35 AED" },
  { label: "Marina Cruise (per person)", price: "180 AED" },
  { label: "Yacht (per person)", price: "550 AED" },
  { label: "Burj Khalifa (per person)", price: "175 AED" },
  { label: "Dubai City Tour (per person)", price: "65 AED" },
  { label: "Abu Dhabi Tour (per person)", price: "160 AED" },
  { label: "Museum of the Future (per person)", price: "165 AED" },
];

export default function ActivitiesPrices() {
  return (
    <main>
      <Hero title="Dubai Tourism Activities – Prices" imageUrl={encodeURI("/visa images/dubai tour thumbnail.jpeg")} />
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
        </div>
      </section>
    </main>
  );
}
