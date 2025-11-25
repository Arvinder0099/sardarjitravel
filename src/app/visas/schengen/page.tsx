import Hero from "@/app/components/Hero";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function SchengenVisasPage() {
  const wappUAE = "https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20need%20help%20with%20Schengen%20visa.";

  // Local thumbnail images per Schengen country (fallback to generic Schengen image if missing)
  const COUNTRY_IMAGES: Record<string, string> = {
    denmark: "/visa images/denmark visa.jpeg",
    norway: "/visa images/norway visa.jpeg",
    france: "/visa images/france visa.jpeg",
    germany: "/visa images/germany visa.jpeg",
    greece: "/visa images/greece visa.jpeg",
    switzerland: "/visa images/switzerland visa.jpeg",
    spain: "/visa images/spain visa.jpeg",
    italy: "/visa images/italy visa.jpeg",
    hungary: "/visa images/Hungary visa.jpeg",
    austria: "/visa images/Austria visa.jpeg",
    finland: "/visa images/finland visa.jpeg",
    poland: "/visa images/Poland visa.jpeg",
    portugal: "/visa images/Portugal visa.jpeg",
    czech: "/visa images/czech republic visa.jpeg",
    sweden: "/visa images/sweden visa.jpeg",
    luxembourg: "/visa images/luxembourg visa.jpeg",
    malta: "/visa images/malta visa.jpeg",
    croatia: "/visa images/croatia visa.jpeg",
    slovakia: "/visa images/Schengen Visa.jpeg", // local asset not provided
    slovenia: "/visa images/slovenia visa.jpeg",
    latvia: "/visa images/latva visa.jpeg", // filename provided as 'latva'
    liechtenstein: "/visa images/liechtenstein visa.jpeg",
    lithuania: "/visa images/Schengen Visa.jpeg", // local asset not provided
    estonia: "/visa images/estonia visa.jpeg",
    bulgaria: "/visa images/bulgaria visa.jpeg",
    romania: "/visa images/romania visa.jpeg",
  };

  return (
    <main>
      <Hero
        title="Schengen Visa Services"
        subtitle="All Schengen countries · Appointments · Documents · Itinerary"
        imageUrl="/visa images/Schengen Visa.jpeg"
      />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          {/* Removed Schengen options and appointment/document/business cards as requested */}

          {/* Browse specific Schengen country pages */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900">Browse Schengen Country Pages</h2>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: "Denmark", slug: "denmark" },
                { name: "Norway", slug: "norway" },
                { name: "France", slug: "france" },
                { name: "Germany", slug: "germany" },
                { name: "Greece", slug: "greece" },
                { name: "Switzerland", slug: "switzerland" },
                { name: "Spain", slug: "spain" },
                { name: "Italy", slug: "italy" },
                { name: "Hungary", slug: "hungary" },
                { name: "Austria", slug: "austria" },
                { name: "Finland", slug: "finland" },
                { name: "Poland", slug: "poland" },
                { name: "Portugal", slug: "portugal" },
                { name: "Czech Republic", slug: "czech" },
                { name: "Sweden", slug: "sweden" },
                { name: "Luxembourg", slug: "luxembourg" },
                { name: "Malta", slug: "malta" },
                { name: "Croatia", slug: "croatia" },
                { name: "Slovakia", slug: "slovakia" },
                { name: "Slovenia", slug: "slovenia" },
                { name: "Latvia", slug: "latvia" },
                { name: "Liechtenstein", slug: "liechtenstein" },
                { name: "Lithuania", slug: "lithuania" },
                { name: "Estonia", slug: "estonia" },
                { name: "Bulgaria", slug: "bulgaria" },
                { name: "Romania", slug: "romania" },
              ].map((c) => {
                const img = COUNTRY_IMAGES[c.slug];
                const imageUrl = encodeURI(img ?? "/visa images/Schengen Visa.jpeg");
                return (
                  <Link key={c.slug} href={`/visas/country/${c.slug}`} className="rounded-md border border-slate-200 bg-white p-4 hover:shadow">
                    <div className="relative w-full h-40 rounded-md overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={`${c.name} visa`}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="mt-3">
                      <span className="text-slate-800">{c.name} Visit Visa</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-slate-900">Eligibility</h2>
              <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                <li>Purpose of travel and main country of stay are clearly defined.</li>
                <li>Travel medical insurance covering the entire stay (we can issue).</li>
                <li>Adequate funds and travel history per consulate requirements.</li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">Documents required</h3>
              <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                <li>Passport, recent photos, application form, and insurance.</li>
                <li>Flight and hotel proofs (we can arrange), itinerary, and cover letter.</li>
                <li>Bank statements, employment letter, and leave approvals where applicable.</li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">How to apply</h3>
              <ol className="mt-2 list-decimal list-inside text-slate-700 space-y-1">
                <li>Contact us to pick the correct Schengen country and get the checklist.</li>
                <li>We book the earliest appointment and prepare your documents.</li>
                <li>Attend the VFS/consulate appointment; submit biometrics if required.</li>
                <li>Receive the decision and passport as advised by the center.</li>
              </ol>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">FAQs</h3>
              <details className="mt-2 p-4 border border-slate-200 rounded-md bg-slate-50">
                <summary className="font-medium text-slate-900 cursor-pointer">Which country should I apply to?</summary>
                <p className="mt-2 text-slate-700">Apply to the country of main stay (most nights); if equal, apply to first entry. We'll help you choose correctly.</p>
              </details>
              <details className="mt-2 p-4 border border-slate-200 rounded-md bg-slate-50">
                <summary className="font-medium text-slate-900 cursor-pointer">How far in advance should I apply?</summary>
                <p className="mt-2 text-slate-700">Slots fill fast in peak seasons; applying 4–8 weeks in advance is recommended.</p>
              </details>
            </div>
            <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Start your Schengen visa</h3>
              <p className="mt-2 text-sm text-slate-600">Message our team for a tailored checklist and the earliest slot.</p>
              <div className="mt-4 flex gap-3 flex-wrap">
                <a href={wappUAE} target="_blank" className="inline-flex items-center rounded-md bg-green-600 px-5 py-3 text-white hover:bg-green-700">WhatsApp UAE</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          {/* Existing content: country list, eligibility, docs, process, FAQs */}

          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
              <ol className="mt-3 space-y-3 list-decimal list-inside text-slate-700">
                <li>WhatsApp or call us and share your travel plan.</li>
                <li>We confirm the right Schengen country, documents, and timeline.</li>
                <li>We prepare your file and help with appointment scheduling.</li>
                <li>Submit and track your application; get updates from us.</li>
              </ol>
            </div>
            <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Ready to apply?</h3>
              <p className="mt-2 text-sm text-slate-600">Chat with our visa experts now.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={wappUAE} target="_blank" className="inline-flex items-center rounded-md bg-green-600 px-5 py-3 text-white hover:bg-green-700">WhatsApp UAE</a>
                <a href="tel:+971588448225" className="inline-flex items-center rounded-md bg-amber-600 px-5 py-3 text-white hover:bg-amber-700">Call UAE</a>
                <a href="mailto:sardarjitravelsuae@gmail.com" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-slate-800 hover:bg-slate-100">Email</a>
                <Link href="/visas/prices/schengen" className="inline-flex items-center rounded-md border border-amber-700 px-5 py-3 text-amber-700 hover:bg-amber-50">View Schengen Prices</Link>
              </div>
            </aside>
          </div>

          <div className="mt-12">
            <Link href="/visas/prices/schengen" className="rounded-md border border-amber-700 px-4 py-2 text-amber-700 hover:bg-amber-50">View Schengen Prices</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
