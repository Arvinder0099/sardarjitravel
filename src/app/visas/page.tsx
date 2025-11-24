import Link from "next/link";
import Hero from "@/app/(components)/Hero";

export const dynamic = "force-dynamic";

// Old All Visas options restored: UAE, GCC, Schengen, Worldwide, Asia, Africa
const items = [
  {
    href: "/visas/uae",
    title: "Dubai UAE Visas",
    desc: "Tourist, transit, extensions and special categories",
    img: "/visa images/dubai thumbnail.jpeg",
    tag: "UAE",
  },
  {
    href: "/visas/gcc",
    title: "GCC Visas",
    desc: "Saudi, Bahrain, Qatar and neighboring countries",
    img: "/visa images/saudi aarab thumbnail.jpeg",
    tag: "GCC",
  },
  {
    href: "/visas/schengen",
    title: "Schengen Visas",
    desc: "Appointments, documents and guidance for all Schengen states",
    img: "/visa images/schengen thumbnail.jpeg",
    tag: "Schengen",
  },
  {
    href: "/visas/world",
    title: "Worldwide Visit Visas",
    desc: "USA, UK, Canada and other popular destinations",
    img: "/visa images/usa wallpaper.jpeg",
    tag: "Worldwide",
  },
  {
    href: "/visas/asia",
    title: "Asia – Visit Visas",
    desc: "Malaysia, Indonesia, China, Japan, Singapore and more",
    img: "/visa images/asia thumbnail.jpeg",
    tag: "Asia",
  },
  {
    href: "/visas/africa-countries",
    title: "Africa – Visit Visas",
    desc: "Kenya, Tanzania, Uganda, South Africa and more",
    img: "/visa images/africa thumbnail.jpeg",
    tag: "Africa",
  },
];

export const metadata = {
  title: "Visas & Services – Sardar Ji Travels",
  description:
    "Dubai UAE visas, worldwide visas, VFS appointments, air tickets, hotel bookings, travel insurance, and more.",
};

export default function VisasIndex() {
  return (
    <main>
      <Hero
        title="Visas & Services"
        subtitle="Fast, trusted and hassle‑free help for UAE and worldwide"
        imageUrl="/visa images/visa and services thumbnail.jpeg"
      />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((i) => (
              <Link key={i.href} href={i.href} prefetch={false} className="rounded-lg border border-slate-200 bg-white hover:shadow">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={encodeURI(i.img)}
                    alt={i.title}
                    className="h-full w-full object-cover"
                  />
                  
                </div>
                <div className="p-5 text-center">
                  <h2 className="text-lg font-semibold text-slate-900">{i.title}</h2>
                  <p className="mt-1 text-sm text-slate-600">{i.desc}</p>
                  <div className="mt-3 text-amber-700 underline underline-offset-4">View</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
