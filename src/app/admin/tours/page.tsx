import { readJson } from "@/lib/storage";
import Hero from "@/app/(components)/Hero";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Tour = { id: string; title: string; price: number; currency: string; description?: string };

export default function AdminTours() {
  const tours = readJson<Tour[]>("tours.json");

  return (
    <main>
      <Hero title="Manage Tours" subtitle="Add, edit, and remove tours" imageUrl="/admin-hero/admin hero.jpeg" />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xl font-semibold text-slate-900">Add Tour</h2>
          <form method="POST" action="/admin/api/tours" className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <input type="hidden" name="action" value="add" />
            <input name="title" required placeholder="Title" className="rounded border border-slate-300 p-2" />
            <input name="price" required type="number" step="0.01" placeholder="Price" className="rounded border border-slate-300 p-2" />
            <input name="currency" required placeholder="Currency" className="rounded border border-slate-300 p-2" />
            <input name="description" placeholder="Description" className="rounded border border-slate-300 p-2" />
            <button className="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">Add</button>
          </form>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">Existing Tours</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b p-2 text-left">Title</th>
                  <th className="border-b p-2 text-left">Price</th>
                  <th className="border-b p-2 text-left">Currency</th>
                  <th className="border-b p-2 text-left">Description</th>
                  <th className="border-b p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tours.map((t) => (
                  <tr key={t.id} className="odd:bg-white even:bg-slate-50">
                    <td className="border-b p-2">{t.title}</td>
                    <td className="border-b p-2">{t.price}</td>
                    <td className="border-b p-2">{t.currency}</td>
                    <td className="border-b p-2">{t.description}</td>
                    <td className="border-b p-2">
                      <form method="POST" action="/admin/api/tours" className="inline mr-2">
                        <input type="hidden" name="action" value="delete" />
                        <input type="hidden" name="id" value={t.id} />
                        <button className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700">Delete</button>
                      </form>
                      <form method="POST" action="/admin/api/tours" className="inline-flex flex-wrap gap-2 align-middle">
                        <input type="hidden" name="action" value="edit" />
                        <input type="hidden" name="id" value={t.id} />
                        <input name="title" defaultValue={t.title} className="w-32 rounded border border-slate-300 p-1 text-xs" />
                        <input name="price" type="number" step="0.01" defaultValue={t.price} className="w-24 rounded border border-slate-300 p-1 text-xs" />
                        <input name="currency" defaultValue={t.currency} className="w-20 rounded border border-slate-300 p-1 text-xs" />
                        <input name="description" defaultValue={t.description} className="w-48 rounded border border-slate-300 p-1 text-xs" />
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