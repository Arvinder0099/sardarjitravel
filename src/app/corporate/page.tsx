// Removed server-side redirect to avoid prerender invariant errors
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Corporate Travel Services – Moved",
  description: "This page has moved. Please visit our Visas & Services index.",
};

export default function CorporatePage() {
  return (
    <main>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h1 className="text-2xl font-semibold text-slate-900">Corporate Travel Services</h1>
            <p className="mt-2 text-slate-700">
              This page has moved. Please visit our Visas & Services index for the latest offerings.
            </p>
            <div className="mt-4 flex gap-3 flex-wrap">
              <a href="/visas/countries" className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
                Browse Visas by Country
              </a>
              <a href="/more-services" className="inline-flex items-center rounded-md border border-amber-700 px-4 py-2 text-amber-700 hover:bg-amber-50">
                More Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}