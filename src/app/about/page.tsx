export const dynamic = "force-dynamic";

export const metadata = {
  title: "About Sardarji Travel & Tourism LLC Dubai | Trusted Travel Experts",
  description: "Learn more about Sardarji Travel & Tourism LLC, Dubai. We offer expert travel solutions, personalized tours, and unmatched customer service.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h1 className="text-3xl font-bold text-slate-900">About Sardar Ji Travels</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            We provide end-to-end travel support: Dubai and worldwide visas, tour planning, instant hotel confirmations,
            travel insurance, and appointment assistance. Our team ensures fast responses and reliable guidance across all services.
          </p>
          <div className="mt-8">
            <a href="/visas" className="inline-flex items-center rounded-md bg-amber-600 px-3 py-1.5 text-sm text-white hover:bg-amber-700">Explore All Visas</a>
            <a href="/tours" className="ml-3 inline-flex items-center rounded-md bg-slate-900 px-3 py-1.5 text-sm text-white hover:bg-slate-800">View Tours</a>
          </div>
        </div>
      </section>
    </main>
  );
}