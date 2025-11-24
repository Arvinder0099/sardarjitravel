import { readJson } from "@/lib/storage";
import Hero from "@/app/(components)/Hero";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Price = { id: string; country: string; type: string; amount: number; currency: string };

export default function AdminPrices() {
  const prices = readJson<Price[]>("prices.json");

  return (
    <main>
      <Hero title="Manage Prices" subtitle="Add, edit, and remove visa prices" imageUrl="/admin-hero/admin hero.jpeg" />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xl font-semibold text-slate-900">Add Price</h2>
          <form method="POST" action="/admin/api/prices" className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <input type="hidden" name="action" value="add" />
            <input name="country" required placeholder="Country" className="rounded border border-slate-300 p-2" />
            <input name="type" required placeholder="Visa Type" className="rounded border border-slate-300 p-2" />
            <input name="amount" required type="number" step="0.01" placeholder="Amount" className="rounded border border-slate-300 p-2" />
            <input name="currency" required placeholder="Currency" className="rounded border border-slate-300 p-2" />
            <button className="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">Add</button>
          </form>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">Existing Prices</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b p-2 text-left">Country</th>
                  <th className="border-b p-2 text-left">Type</th>
                  <th className="border-b p-2 text-left">Amount</th>
                  <th className="border-b p-2 text-left">Currency</th>
                  <th className="border-b p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((p) => (
                  <tr key={p.id} className="odd:bg-white even:bg-slate-50">
                    <td className="border-b p-2">{p.country}</td>
                    <td className="border-b p-2">{p.type}</td>
                    <td className="border-b p-2">{p.amount}</td>
                    <td className="border-b p-2">{p.currency}</td>
                    <td className="border-b p-2">
                      <form method="POST" action="/admin/api/prices" className="inline mr-2">
                        <input type="hidden" name="action" value="delete" />
                        <input type="hidden" name="id" value={p.id} />
                        <button className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700">Delete</button>
                      </form>
                      <form method="POST" action="/admin/api/prices" className="inline-flex flex-wrap gap-2 align-middle">
                        <input type="hidden" name="action" value="edit" />
                        <input type="hidden" name="id" value={p.id} />
                        <input name="country" defaultValue={p.country} className="w-28 rounded border border-slate-300 p-1 text-xs" />
                        <input name="type" defaultValue={p.type} className="w-28 rounded border border-slate-300 p-1 text-xs" />
                        <input name="amount" type="number" step="0.01" defaultValue={p.amount} className="w-20 rounded border border-slate-300 p-1 text-xs" />
                        <input name="currency" defaultValue={p.currency} className="w-20 rounded border border-slate-300 p-1 text-xs" />
                        <button className="rounded bg-amber-600 px-3 py-1 text-white text-xs hover:bg-amber-700">Save</button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}