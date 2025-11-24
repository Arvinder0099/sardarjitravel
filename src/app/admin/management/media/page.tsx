import Hero from "@/app/(components)/Hero";
import { readJson } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Media = { id: string; name: string; imageUrl: string; alt?: string; placement?: string; enabled?: boolean; createdAt?: number };

export default function MediaManagerPage() {
  const items = readJson<Media[]>("media.json");

  return (
    <main>
      <Hero title="Images & Banners" subtitle="Manage site visuals" imageUrl="/admin-hero/admin hero.jpeg" />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xl font-semibold text-slate-900">Add Media</h2>
          <form method="POST" action="/admin/api/media" className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <input type="hidden" name="action" value="add" />
            <input name="name" placeholder="Name" className="rounded border border-slate-300 p-2" />
            <input name="imageUrl" placeholder="Image URL" className="rounded border border-slate-300 p-2" />
            <input name="alt" placeholder="Alt text" className="rounded border border-slate-300 p-2" />
            <input name="placement" placeholder="Placement (e.g., hero, banner, sidebar)" className="rounded border border-slate-300 p-2" />
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" name="enabled" /> Enabled
            </label>
            <button className="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">Add</button>
          </form>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">Existing Media</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b p-2 text-left">Preview</th>
                  <th className="border-b p-2 text-left">Name</th>
                  <th className="border-b p-2 text-left">Placement</th>
                  <th className="border-b p-2 text-left">Enabled</th>
                  <th className="border-b p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((m) => (
                  <tr key={m.id} className="border-t">
                    <td className="p-2">
                      {m.imageUrl ? (
                        <img
                          src={encodeURI(m.imageUrl)}
                          alt={m.alt || m.name}
                          className="h-12 w-20 rounded object-cover"
                        />
                      ) : null}
                    </td>
                    <td className="p-2">{m.name}</td>
                    <td className="p-2">{m.placement}</td>
                    <td className="p-2">{m.enabled ? "Yes" : "No"}</td>
                    <td className="p-2">
                      <form method="POST" action="/admin/api/media" className="flex flex-wrap items-center gap-2">
                        <input type="hidden" name="action" value="edit" />
                        <input type="hidden" name="id" value={m.id} />
                        <input name="name" defaultValue={m.name} placeholder="Name" className="rounded border border-slate-300 p-1" />
                        <input name="imageUrl" defaultValue={m.imageUrl} placeholder="Image URL" className="rounded border border-slate-300 p-1" />
                        <input name="alt" defaultValue={m.alt} placeholder="Alt" className="rounded border border-slate-300 p-1" />
                        <input name="placement" defaultValue={m.placement} placeholder="Placement" className="rounded border border-slate-300 p-1" />
                        <label className="flex items-center gap-1 text-xs text-slate-700">
                          <input type="checkbox" name="enabled" defaultChecked={!!m.enabled} /> Enabled
                        </label>
                        <button className="rounded bg-blue-600 px-2 py-1 text-white hover:bg-blue-700">Save</button>
                      </form>
                      <form method="POST" action="/admin/api/media" className="mt-2">
                        <input type="hidden" name="action" value="delete" />
                        <input type="hidden" name="id" value={m.id} />
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