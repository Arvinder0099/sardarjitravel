import { readJson } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ViewEntry = { date: string; count: number };
type ClickEntry = { name: string; count: number };

type Analytics = { views?: ViewEntry[]; clicks?: ClickEntry[] };

function sumRange(entries: ViewEntry[], days: number) {
  const since = Date.now() - days * 24 * 60 * 60 * 1000;
  return entries
    .filter((e) => new Date(e.date).getTime() >= since)
    .reduce((acc, e) => acc + (e.count || 0), 0);
}

export default function AnalyticsPage() {
  const data = readJson<Analytics>("analytics.json") || {};
  const views = Array.isArray(data.views) ? data.views : [];
  const clicks = Array.isArray(data.clicks) ? data.clicks : [];

  const weekly = sumRange(views, 7);
  const monthly = sumRange(views, 30);
  const yearly = sumRange(views, 365);

  const topClicks = [...clicks]
    .sort((a, b) => (b.count || 0) - (a.count || 0))
    .slice(0, 10);

  return (
    <main>
      {/* Server-safe hero section */}
      <section className="relative">
        <div className="relative overflow-hidden h-[40vh] md:h-[50vh] border-b border-slate-200">
          <img
            src="/admin-hero/admin hero.jpeg"
            alt="Analytics"
            className="absolute inset-0 h-full w-full object-contain object-center"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="px-4 md:px-6 py-8 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Analytics
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-700">
            Weekly, monthly, yearly views and top clicks
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-sm text-slate-700">Views (7 days)</div>
              <div className="mt-1 text-2xl font-semibold text-slate-900">{weekly}</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-sm text-slate-700">Views (30 days)</div>
              <div className="mt-1 text-2xl font-semibold text-slate-900">{monthly}</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-sm text-slate-700">Views (365 days)</div>
              <div className="mt-1 text-2xl font-semibold text-slate-900">{yearly}</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-sm text-slate-700">Total clicks tracked</div>
              <div className="mt-1 text-2xl font-semibold text-slate-900">
                {clicks.reduce((a, c) => a + (c.count || 0), 0)}
              </div>
            </div>
          </div>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">Top selections</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b p-2 text-left">Name</th>
                  <th className="border-b p-2 text-left">Clicks</th>
                </tr>
              </thead>
              <tbody>
                {topClicks.map((c) => (
                  <tr key={c.name} className="border-t">
                    <td className="p-2">{c.name}</td>
                    <td className="p-2">{c.count}</td>
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