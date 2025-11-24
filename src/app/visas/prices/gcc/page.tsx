import Link from "next/link";
import Hero from "@/app/(components)/Hero";
import { readJson } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Price = { id: string; country: string; type: string; amount: number; currency: string };

const items = [
  { href: "/visas/prices/gcc/saudi", title: "Saudi Arabia Visas", desc: "Business, Employment, Tourist for GCC Residents, Umrah" },
  { href: "/visas/prices/gcc/bahrain", title: "Bahrain Visit Visa", desc: "E‑visa & sponsor visas" },
  { href: "/visas/prices/gcc/qatar", title: "Qatar Visit Visa", desc: "Visit visa pricing" },
];

function isGccCountry(name: string) {
  const n = name.trim().toLowerCase();
  return [
    "saudi",
    "saudi arabia",
    "bahrain",
    "qatar",
    "kuwait",
    "oman",
    "uae",
    "united arab emirates",
  ].includes(n);
}

export default function GCCPrices() {
  const prices = readJson<Price[]>("prices.json");
  const gccPrices = prices.filter((p) => isGccCountry(p.country));

  return (
    <main>
      <Hero
        title="Gulf / GCC Visa Prices"
        subtitle="Saudi, Bahrain, Qatar and more"
        imageUrl={encodeURI("/visa images/Riyadh Saudi Arabia.jpeg")}
      />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-semibold text-slate-900">Current GCC Prices</h2>
          {gccPrices.length > 0 ? (
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border border-slate-200 text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b p-2 text-left">Country</th>
                    <th className="border-b p-2 text-left">Visa Type</th>
                    <th className="border-b p-2 text-left">Amount</th>
                    <th className="border-b p-2 text-left">Currency</th>
                  </tr>
                </thead>
                <tbody>
                  {gccPrices.map((p) => (
                    <tr key={p.id} className="odd:bg-white even:bg-slate-50">
                      <td className="border-b p-2">{p.country}</td>
                      <td className="border-b p-2">{p.type}</td>
                      <td className="border-b p-2">{p.amount}</td>
                      <td className="border-b p-2">{p.currency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-3 text-slate-700">No GCC prices have been added yet. Please add prices in the Master Admin under Prices, using country names like Saudi, Bahrain, Qatar, Kuwait, Oman, or UAE.</p>
          )}

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((i) => (
              <Link key={i.href} href={i.href} className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow">
                <div className="text-sm text-amber-700">Price</div>
                <h2 className="mt-1 text-lg font-semibold text-slate-900">{i.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{i.desc}</p>
                <div className="mt-3 text-amber-700 underline underline-offset-4">View</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
