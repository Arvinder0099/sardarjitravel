import Link from "next/link";
import Hero from "..\../components/Hero";

export const dynamic = "force-dynamic";

const items = [
  { href: "/visas/prices/dubai", title: "Dubai Visit Visa Price", desc: "Short term, African nationals, multiple entry, family residence, visa change & extensions" },
  { href: "/visas/prices/gcc", title: "Gulf / GCC Visa Price", desc: "Saudi, Bahrain, Qatar and more" },
  { href: "/visas/prices/worldwide", title: "Worldwide Visit Visa – File Processing Price", desc: "USA, UK, Australia, Canada, New Zealand, South America, more" },
  { href: "/visas/prices/schengen", title: "Schengen Countries – File Processing Price", desc: "All Schengen member states" },
  { href: "/visas/prices/asia", title: "Asian Countries – Visit Visa Prices", desc: "Malaysia, Indonesia, China, Japan, Singapore, India, etc." },
  { href: "/visas/prices/africa-visa-prices", title: "African Countries – Visit Visa Prices", desc: "Ghana, South Africa, Egypt, Morocco, Nigeria, Kenya, etc." },
  { href: "/visas/prices/activities", title: "Dubai Tourism Activities", desc: "Safari, cruises, yacht, Burj Khalifa, city tours, more" },
];

export default function PricesIndex() {
  return (
    <main>
      <Hero
        title="All Visa Prices"
        subtitle="Browse Dubai, GCC, Worldwide, Schengen, Asian & African visa prices."
        imageUrl={encodeURI("/visa images/visa and services thumbnail.jpeg")}
      />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((i) => (
              <Link key={i.href} href={i.href} className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow">
                <div className="text-sm text-amber-700">Price</div>
                <h2 className="mt-1 text-lg font-semibold text-slate-900">{i.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{i.desc}</p>
                <div className="mt-3 text-amber-700 underline underline-offset-4">View</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Removed duplicate
