import Link from "next/link";
import Hero from "..\..\../components/Hero";

export const dynamic = "force-dynamic";

const items = [
  { href: "/visas/prices/dubai/short-term", title: "Dubai Short Term Visa", desc: "30 / 60 / 90 days, Job Seeker, Remote Work" },
  { href: "/visas/prices/dubai/african-nationals", title: "Dubai Visa for African Nationals", desc: "30 / 60 days" },
  { href: "/visas/prices/dubai/multiple-entry", title: "UAE Multiple Entry Visa", desc: "30 / 60 days, 5 years" },
  { href: "/visas/prices/dubai/family-residence", title: "UAE Family Residence Visa", desc: "2 years sponsor & child visit" },
  { href: "/visas/prices/dubai/change-by-flight", title: "Visa Change / Extension / Renewal by Flight", desc: "30 / 60 days" },
  { href: "/visas/prices/dubai/inside-uae-extension", title: "Visa Change & Extension Inside UAE", desc: "1 Month extension without exit" },
];

export default function DubaiPricesIndex() {
  return (
    <main>
      <Hero title="Dubai Visit Visa Price" subtitle="Choose a category below" imageUrl={encodeURI("/visa images/dubai thumbnail.jpeg")} />
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
