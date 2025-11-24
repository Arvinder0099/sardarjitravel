import Link from "next/link";
import Hero from "../../components/Hero";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const metadata = {
  title: "GCC Visa Services | Saudi, Bahrain, Qatar",
  description:
    "Apply for GCC visas: Saudi, Bahrain, and Qatar. Tourist, business, family and transit visas with guidance and filing support.",
};

export default function GCCVisasPage() {
  const wappUAE = "https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20GCC%20visa.";
  const heroImg = encodeURI("/visa images/Riyadh Saudi Arabia.jpeg");
  const links = [
    { t: "Saudi Visa Services", d: "Tourist, Umrah, business, family & transit.", href: "/visas/saudi", slug: "saudi" },
    { t: "Bahrain Visit Visa", d: "14/30 days e‑visa, sponsor visas & 1‑year.", href: "/visas/bahrain", slug: "bahrain" },
    { t: "Qatar Visit Visa", d: "Guidance for Qatar visit visa.", href: "/visas/qatar", slug: "qatar" },
  ];
  const localThumbs: Record<string, string> = {
    saudi: "Saudi Arabia E-Visa.jpeg",
    bahrain: "dubai.jpeg",
    qatar: "dubai.jpeg",
  };

  return (
    <main>
      <Hero
        title="Gulf / GCC Visa Services"
        subtitle="Saudi, Bahrain, Qatar — e‑visas, sponsor visas, guidance & filing"
        imageUrl={heroImg}
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {links.map((i) => (
              <Link key={i.slug} href={i.href} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow">
                <div className="flex items-center gap-4">
                  <img
                    src={localThumbs[i.slug] ? encodeURI(`/visa images/${localThumbs[i.slug]}`) : encodeURI("/visa images/dubai.jpeg")}
                    alt={i.t}
                    className="w-16 h-16 object-cover rounded-md border border-slate-200"
                  />
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-slate-900">{i.t}</h3>
                    <p className="mt-1 text-sm md:text-base text-slate-700">{i.d}</p>
                    <div className="mt-2 underline underline-offset-4 text-amber-700">View</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
              <ol className="mt-3 space-y-3 list-decimal list-inside text-slate-700">
                <li>WhatsApp or call us and share your passport copy.</li>
                <li>We confirm eligibility, documents, and exact timeline.</li>
                <li>We file your visa and keep you updated step-by-step.</li>
                <li>Receive your visa via email and enjoy your trip.</li>
              </ol>
            </div>
            <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Ready to apply?</h3>
              <p className="mt-2 text-sm text-slate-600">Chat with our visa experts now.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={wappUAE} target="_blank" className="inline-flex items-center rounded-md bg-green-600 px-5 py-3 text-white hover:bg-green-700">WhatsApp UAE</a>
                <a href="tel:+971588448225" className="inline-flex items-center rounded-md bg-amber-600 px-5 py-3 text-white hover:bg-amber-700">Call UAE</a>
                <a href="mailto:info@sardarjitravel.ae" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-slate-800 hover:bg-slate-100">Email</a>
                <Link href="/visas/prices/gcc" className="inline-flex items-center rounded-md border border-amber-700 px-5 py-3 text-amber-700 hover:bg-amber-50">View GCC Prices</Link>
              </div>
            </aside>
          </div>

          <div className="mt-12">
            <Link href="/visas/prices/gcc" className="rounded-md border border-amber-700 px-4 py-2 text-amber-700 hover:bg-amber-50">View GCC Prices</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
