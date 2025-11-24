import { readJson, writeJson } from "@/lib/storage";
import Hero from "@/app/(components)/Hero";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Country = { id: string; name: string; visaOptions?: string[] };

export default function AdminCountries() {
  const countries = readJson<Country[]>("countries.json");

  return (
    <main>
      <Hero title="Visa Countries" subtitle="Add and edit countries list" imageUrl="/admin-hero/admin hero.jpeg" />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xl font-semibold text-slate-900">Add Country</h2>
          <form method="POST" action="/admin/api/countries" className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <input type="hidden" name="action" value="add" />
            <input name="name" required placeholder="Country Name" className="rounded border border-slate-300 p-2" />
            <input name="visaOptions" placeholder="Visa Options (comma separated)" className="rounded border border-slate-300 p-2" />
            <button className="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">Add</button>
          </form>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">Existing Countries</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b p-2 text-left">Name</th>
                  <th className="border-b p-2 text-left">Visa Options</th>
                  <th className="border-b p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((c) => (
                  <tr key={c.id} className="odd:bg-white even:bg-slate-50">
                    <td className="border-b p-2">{c.name}</td>
                    <td className="border-b p-2">{(c.visaOptions ?? []).join(", ")}</td>
                    <td className="border-b p-2">
                      <form method="POST" action="/admin/api/countries" className="inline mr-2">
                        <input type="hidden" name="action" value="delete" />
                        <input type="hidden" name="id" value={c.id} />
                        <button className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700">Delete</button>
                      </form>
                      <form method="POST" action="/admin/api/countries" className="inline-flex flex-wrap gap-2 align-middle">
                        <input type="hidden" name="action" value="edit" />
                        <input type="hidden" name="id" value={c.id} />
                        <input name="name" defaultValue={c.name} className="w-40 rounded border border-slate-300 p-1 text-xs" />
                        <input name="visaOptions" defaultValue={(c.visaOptions ?? []).join(", ")} className="w-64 rounded border border-slate-300 p-1 text-xs" />
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