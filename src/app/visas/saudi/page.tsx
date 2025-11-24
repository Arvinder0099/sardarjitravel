import Hero from "../components/Hero";
import Link from "next/link";

export const dynamic = "force-dynamic";

const localThumbs: Record<string, string> = {
  tourist: "Saudi Arabia E-Visa.jpeg",
  umrah: "umrah visa.jpg",
  business: "saudi business visa.jpg",
  family: "saudi family visit visa.jpg",
  transit: "saudi transit visa.jpg",
};

export default function SaudiVisasPage() {
  const wappUAE = "https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20want%20help%20with%20Saudi%20visa%20/Umrah.";
  return (
    <main>
      <Hero
        title="Saudi Visa Services & Umrah"
        subtitle="Tourist visas, Umrah visas & packages, business visas"
        imageUrl={encodeURI("/visa images/Riyadh Saudi Arabia.jpeg")}
      />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: "Saudi Tourist e‑Visa", d: "Quick e‑visa support with requirements.", slug: "tourist" },
              { t: "Umrah Visa & Packages", d: "Hotels in Makkah & Madinah, ground transfers.", slug: "umrah" },
              { t: "Business Visa", d: "Invitation letter and stamping guidance.", slug: "business" },
              { t: "Family Visit Visa", d: "Approvals and documentation.", slug: "family" },
              { t: "Saudi Transit", d: "Short stays for transit.", slug: "transit" },
            ].map((i) => (
              <Link key={i.slug} href={`/visas/saudi/${i.slug}`} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow overflow-hidden">
                <div className="flex items-center gap-4">
                  <img
                    src={localThumbs[i.slug] ? encodeURI(`/visa images/${localThumbs[i.slug]}`) : encodeURI("/visa images/Riyadh Saudi Arabia.jpeg")}
                    alt={i.t}
                    className="w-16 h-16 object-cover rounded-md border border-slate-200"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-slate-900 break-words">{i.t}</h3>
                    <p className="mt-1 text-sm md:text-base text-slate-700 break-words">{i.d}</p>
                    <div className="mt-2 underline underline-offset-4 text-amber-700">View details</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
              <ol className="mt-2 list-decimal list-inside text-slate-700 space-y-1">
                <li>WhatsApp or call us for quick eligibility check and requirements.</li>
                <li>Share your documents securely and receive a personalized checklist.</li>
                <li>We file your application and keep you updated step-by-step.</li>
                <li>Receive your visa and travel with confidence.</li>
              </ol>
            </div>
            <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Start your Saudi/Umrah visa</h3>
              <p className="mt-2 text-sm text-slate-600">Get a tailored checklist and timeline from our team.</p>
              <div className="mt-4 flex gap-3 flex-wrap">
                <a href={wappUAE} target="_blank" className="inline-flex items-center rounded-md bg-green-600 px-5 py-3 text-white hover:bg-green-700">WhatsApp UAE</a>
                <Link href="/visas/prices/gcc/saudi" className="inline-flex items-center rounded-md border border-amber-700 px-5 py-3 text-amber-700 hover:bg-amber-50">View Saudi & GCC Prices</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 pb-14">
          <Link href="/visas/prices/gcc/saudi" className="rounded-md border border-amber-700 px-4 py-2 text-amber-700 hover:bg-amber-50">View Saudi & GCC Prices</Link>
        </div>
      </section>
    </main>
  );
}
