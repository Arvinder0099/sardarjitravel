import Link from "next/link";
import Hero from "../components/Hero";

export const dynamic = "force-dynamic";

export default function QatarVisasPage() {
  const wappUAE = "https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20Qatar%20visit%20visa.";
  const wappIN = "https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20Qatar%20visit%20visa.";
  const heroImg = encodeURI("/visa images/QATAR VISIT VISA hero image.jpg");
  const options = [
    { t: "Qatar Visit Visa", d: "Tourist/family visit guidance.", slug: "visit-visa" },
  ];
  const localThumbs: Record<string, string> = {
    "visit-visa": "QATAR.jpeg",
  };

  return (
    <main>
      <Hero
        title="Qatar Visit Visa"
        subtitle="Guidance for Qatar tourist/family visit visas"
        imageUrl={heroImg}
      />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {options.map((i) => (
              <Link key={i.slug} href={`/visas/qatar/${i.slug}`} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow overflow-hidden">
                <div className="flex items-center gap-4">
                  <img
                    src={localThumbs[i.slug] ? encodeURI(`/visa images/${localThumbs[i.slug]}`) : encodeURI(heroImg)}
                    alt={i.t}
                    className="w-16 h-16 object-cover rounded-md border border-slate-200"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-slate-900 break-words">{i.t}</h3>
                    <p className="mt-1 text-sm md:text-base text-slate-700 break-words">{i.d}</p>
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
                <li>We confirm eligibility, documents, and timeline.</li>
                <li>We prepare and file your Qatar visa application.</li>
                <li>Receive your visa and travel with confidence.</li>
              </ol>
            </div>
            <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Apply now</h3>
              <p className="mt-2 text-sm text-slate-600">Message us for instant assistance.</p>
              <div className="mt-3 space-x-4">
                <a href={wappUAE} className="text-amber-700 underline underline-offset-4">WhatsApp UAE</a>
                <a href={wappIN} className="text-amber-700 underline underline-offset-4">WhatsApp India</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
