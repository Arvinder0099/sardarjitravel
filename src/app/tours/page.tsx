export const dynamic = "force-dynamic";
export const metadata = {
  title: "Travel Services & Tour Packages | Sardarji Travel Dubai",
  description: "Discover our travel services including flights, hotel bookings, guided tours, and custom travel packages across UAE and worldwide.",
};

export default function ToursIndex() {
  const links = [
    { href: "/tours/dubai", title: "Dubai Tours", desc: "Desert Safari, Burj Khalifa, City Tour, Cruises" },
  ];

  return (
    <main>
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">Tours</h1>
          <p className="mt-3 text-slate-700">Discover top experiences and book your next adventure.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block rounded-lg border border-slate-200 bg-white p-5 hover:shadow" aria-label={l.title}>
                <div className="flex items-start gap-3">
                  <img src={encodeURI("/visa images/dubai tour thumbnail.jpeg")} alt="Tours" className="w-24 h-20 object-cover rounded-md" />
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">{l.title}</h2>
                    <p className="mt-1 text-sm text-slate-600">{l.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
