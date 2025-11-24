import Link from "next/link";
import Hero from "@/app/components/Hero";
import { WORLDWIDE_COUNTRIES } from "@/lib/worldwide";

export const dynamic = "force-dynamic";

const countries = WORLDWIDE_COUNTRIES;

const wappUAE = "https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20need%20help%20with%20worldwide%20visit%20visas.";

export default function WorldVisasPage() {
  return (
    <main>
      <Hero
        title="Worldwide Visit Visas"
        subtitle={WORLDWIDE_COUNTRIES.map((c) => c.title).join(", ")}
        imageUrl="/visa images/usa wallpaper.jpeg"
        alt="Worldwide visas"
        imageHeightClass="h-[50vh] md:h-[60vh]"
      />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORLDWIDE_COUNTRIES.map((c) => (
              <div key={c.slug} className="rounded-lg border border-slate-200 bg-white hover:shadow">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                  <img
                    src={encodeURI(c.img ?? "/visa images/visa and services thumbnail.jpeg")}
                    alt={c.title}
                    className="h-full w-full object-cover"
                  />
                  
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-slate-900">{c.title}</h2>
                  <p className="mt-1 text-sm text-slate-600">Get guided support for your visit visa.</p>
                  <div className="mt-3 flex gap-3">
                    <Link href={`/visas/country/${c.slug}`} className="rounded bg-amber-700 px-3 py-2 text-sm font-medium text-white hover:bg-amber-800">View details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
