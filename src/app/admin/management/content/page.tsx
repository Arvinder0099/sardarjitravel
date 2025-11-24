import Hero from "@/app/(components)/Hero";
import { readJson } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Item = { id: string; title: string; summary?: string; content?: string; imageUrl?: string; published?: boolean; createdAt?: number };

function Section({ title, type, items }: { title: string; type: "blog"|"news"|"promotions"; items: Item[] }) {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <form method="POST" action="/admin/api/content" className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <input type="hidden" name="action" value="add" />
        <input type="hidden" name="type" value={type} />
        <input name="title" required placeholder="Title" className="rounded border border-slate-300 p-2" />
        <input name="summary" placeholder="Summary" className="rounded border border-slate-300 p-2" />
        <input name="imageUrl" placeholder="Image URL" className="rounded border border-slate-300 p-2" />
        <textarea name="content" placeholder="Content" className="rounded border border-slate-300 p-2 col-span-2" />
        <label className="flex items-center gap-2 text-sm text-slate-700"><input type="checkbox" name="published" /> Published</label>
        <button className="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">Add</button>
      </form>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full border border-slate-200 text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="border-b p-2 text-left">Title</th>
              <th className="border-b p-2 text-left">Published</th>
              <th className="border-b p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <tr key={it.id} className="odd:bg-white even:bg-slate-50">
                <td className="border-b p-2">{it.title}</td>
                <td className="border-b p-2">{it.published ? "Yes" : "No"}</td>
                <td className="border-b p-2">
                  <form method="POST" action="/admin/api/content" className="grid grid-cols-2 gap-2">
                    <input type="hidden" name="action" value="edit" />
                    <input type="hidden" name="type" value={type} />
                    <input type="hidden" name="id" value={it.id} />
                    <input name="title" defaultValue={it.title} placeholder="Title" className="rounded border border-slate-300 p-2" />
                    <input name="summary" defaultValue={it.summary} placeholder="Summary" className="rounded border border-slate-300 p-2" />
                    <input name="imageUrl" defaultValue={it.imageUrl} placeholder="Image URL" className="rounded border border-slate-300 p-2" />
                    <textarea name="content" defaultValue={it.content} placeholder="Content" className="rounded border border-slate-300 p-2 col-span-2" />
                    <label className="flex items-center gap-2 text-sm text-slate-700 col-span-2"><input type="checkbox" name="published" defaultChecked={it.published ?? false} /> Published</label>
                    <div className="col-span-2 flex gap-2">
                      <button className="rounded bg-slate-800 px-3 py-2 text-white hover:bg-slate-900">Save</button>
                      <form method="POST" action="/admin/api/content">
                        <input type="hidden" name="action" value="delete" />
                        <input type="hidden" name="type" value={type} />
                        <input type="hidden" name="id" value={it.id} />
                        <button className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700">Delete</button>
                      </form>
                    </div>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ManageContent() {
  const blog = readJson<Item[]>("blog.json");
  const news = readJson<Item[]>("news.json");
  const promotions = readJson<Item[]>("promotions.json");

  return (
    <main>
      <Hero title="Content Management" subtitle="Blog posts, news, and promotions" imageUrl="/admin-hero/admin hero.jpeg" />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <Section title="Blog Posts" type="blog" items={blog} />
          <Section title="News" type="news" items={news} />
          <Section title="Promotions" type="promotions" items={promotions} />
        </div>
      </section>
    </main>
  );
}