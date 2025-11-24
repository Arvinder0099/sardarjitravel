import Hero from "./Hero";

export default function Dashboard() {
  return (
    <main>
      <Hero title="Master Admin" subtitle="Manage your site content" imageUrl="/admin-hero/admin hero.jpeg" />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-semibold text-slate-900">Admin Dashboard</h2>
          <p className="mt-2 text-slate-600">Use the links below to manage your content:</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/admin/prices" className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow">
              <div className="text-sm text-amber-700">Manager</div>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Prices</h3>
              <p className="mt-1 text-sm text-slate-600">Add and remove visa prices</p>
            </a>
            <a href="/admin/tours" className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow">
              <div className="text-sm text-amber-700">Manager</div>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Tours</h3>
              <p className="mt-1 text-sm text-slate-600">Add and remove tours</p>
            </a>
            <a href="/admin/countries" className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow">
              <div className="text-sm text-amber-700">Manager</div>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Countries</h3>
              <p className="mt-1 text-sm text-slate-600">Manage countries and visa options</p>
            </a>
            <a href="/admin/management/tours-and-destinations" className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow">
              <div className="text-sm text-amber-700">Management</div>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Tours & Destinations</h3>
              <p className="mt-1 text-sm text-slate-600">Add, edit, delete tours and country visas; enable/disable</p>
            </a>
            <a href="/admin/management/content" className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow">
              <div className="text-sm text-amber-700">Management</div>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Content</h3>
              <p className="mt-1 text-sm text-slate-600">Manage blog posts, news, promotions</p>
            </a>
            <a href="/admin/management/media" className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow">
              <div className="text-sm text-amber-700">Management</div>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Images & Banners</h3>
              <p className="mt-1 text-sm text-slate-600">Upload and organize visuals</p>
            </a>
            <a href="/admin/analytics" className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow">
              <div className="text-sm text-amber-700">Reports</div>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Analytics</h3>
              <p className="mt-1 text-sm text-slate-600">Weekly, monthly, yearly views and top clicks</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}