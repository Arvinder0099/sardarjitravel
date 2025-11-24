import Hero from "@/app/(components)/Hero";
import { readJson } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Tour = { id: string; title: string; price: number; currency: string; description?: string; duration?: string; itinerary?: string; images?: string[]; enabled?: boolean };
type Country = { id: string; name: string; description?: string; images?: string[]; enabled?: boolean; visasEnabled?: boolean };

export default function ToursAndDestinationsManagerPage() {
  const tours = readJson<Tour[]>("tours.json");
  const countries = readJson<Country[]>("countries.json");

  return (
    <main>
      <Hero title="Tours & Destinations" subtitle="Manage tours and countries" imageUrl="/admin-hero/admin hero.jpeg" />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xl font-semibold text-slate-900">Add Tour</h2>
          <form method="POST" action="/admin/api/tours" className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <input type="hidden" name="action" value="add" />
            <input name="title" placeholder="Title" className="rounded border border-slate-300 p-2" />
            <input name="price" type="number" step="0.01" placeholder="Price" className="rounded border border-slate-300 p-2" />
            <input name="currency" placeholder="Currency" className="rounded border border-slate-300 p-2" />
            <textarea name="description" placeholder="Description" className="rounded border border-slate-300 p-2" />
            <input name="duration" placeholder="Duration (e.g., 3 days)" className="rounded border border-slate-300 p-2" />
            <textarea name="itinerary" placeholder="Itinerary" className="rounded border border-slate-300 p-2" />
            <input name="images" placeholder="Image URLs (comma separated)" className="rounded border border-slate-300 p-2" />
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" name="enabled" defaultChecked /> Enabled
            </label>
            <button className="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">Add Tour</button>
          </form>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">Existing Tours</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b p-2 text-left">Title</th>
                  <th className="border-b p-2 text-left">Price</th>
                  <th className="border-b p-2 text-left">Enabled</th>
                  <th className="border-b p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tours.map((t) => (
                  <tr key={t.id} className="border-t">
                    <td className="p-2">{t.title}</td>
                    <td className="p-2">{t.price} {t.currency}</td>
                    <td className="p-2">{t.enabled ? "Yes" : "No"}</td>
                    <td className="p-2">
                      <form method="POST" action="/admin/api/tours" className="flex flex-wrap items-center gap-2">
                        <input type="hidden" name="action" value="edit" />
                        <input type="hidden" name="id" value={t.id} />
                        <input name="title" defaultValue={t.title} placeholder="Title" className="rounded border border-slate-300 p-1" />
                        <input name="price" type="number" step="0.01" defaultValue={t.price} placeholder="Price" className="rounded border border-slate-300 p-1" />
                        <input name="currency" defaultValue={t.currency} placeholder="Currency" className="rounded border border-slate-300 p-1" />
                        <input name="images" defaultValue={(t.images || []).join(", ")} placeholder="Images (CSV)" className="rounded border border-slate-300 p-1" />
                        <label className="flex items-center gap-1 text-xs text-slate-700">
                          <input type="checkbox" name="enabled" defaultChecked={!!t.enabled} /> Enabled
                        </label>
                        <button className="rounded bg-blue-600 px-2 py-1 text-white hover:bg-blue-700">Save</button>
                      </form>
                      <form method="POST" action="/admin/api/tours" className="mt-2">
                        <input type="hidden" name="action" value="delete" />
                        <input type="hidden" name="id" value={t.id} />
                        <button className="rounded bg-red-600 px-2 py-1 text-white hover:bg-red-700">Delete</button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">Add Destination</h2>
          <form method="POST" action="/admin/api/destinations" className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <input type="hidden" name="action" value="add" />
            <input name="name" placeholder="Country name" className="rounded border border-slate-300 p-2" />
            <textarea name="description" placeholder="Description" className="rounded border border-slate-300 p-2" />
            <input name="images" placeholder="Image URLs (comma separated)" className="rounded border border-slate-300 p-2" />
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" name="enabled" defaultChecked /> Enabled
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" name="visasEnabled" defaultChecked /> Visas Enabled
            </label>
            <button className="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">Add Destination</button>
          </form>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">Existing Destinations</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b p-2 text-left">Name</th>
                  <th className="border-b p-2 text-left">Visas</th>
                  <th className="border-b p-2 text-left">Enabled</th>
                  <th className="border-b p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((c) => (
                  <tr key={c.id} className="border-t">
                    <td className="p-2">{c.name}</td>
                    <td className="p-2">{c.visasEnabled ? "Enabled" : "Disabled"}</td>
                    <td className="p-2">{c.enabled ? "Yes" : "No"}</td>
                    <td className="p-2">
                      <form method="POST" action="/admin/api/destinations" className="flex flex-wrap items-center gap-2">
                        <input type="hidden" name="action" value="edit" />
                        <input type="hidden" name="id" value={c.id} />
                        <input name="name" defaultValue={c.name} placeholder="Name" className="rounded border border-slate-300 p-1" />
                        <input name="images" defaultValue={(c.images || []).join(", ")} placeholder="Images (CSV)" className="rounded border border-slate-300 p-1" />
                        <label className="flex items-center gap-1 text-xs text-slate-700">
                          <input type="checkbox" name="enabled" defaultChecked={!!c.enabled} /> Enabled
                        </label>
                        <label className="flex items-center gap-1 text-xs text-slate-700">
                          <input type="checkbox" name="visasEnabled" defaultChecked={!!c.visasEnabled} /> Visas Enabled
                        </label>
                        <button className="rounded bg-blue-600 px-2 py-1 text-white hover:bg-blue-700">Save</button>
                      </form>
                      <form method="POST" action="/admin/api/destinations" className="mt-2">
                        <input type="hidden" name="action" value="delete" />
                        <input type="hidden" name="id" value={c.id} />
                        <button className="rounded bg-red-600 px-2 py-1 text-white hover:bg-red-700">Delete</button>
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