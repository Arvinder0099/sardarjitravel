import { Eye, Tag } from "lucide-react";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Dubai Tours – Sardar Ji Travels",
  description:
    "Book Desert Safari, Burj Khalifa, City Tour, Dhow & Marina Cruise, Museum of the Future, Abu Dhabi City Tour.",
};
export default function DubaiToursPage() {
  const tours = [
    { t: "Desert Safari", slug: "desert-safari", d: "Dune bashing, camel ride, BBQ dinner, live shows." },
    { t: "Burj Khalifa – At the Top", slug: "burj-khalifa", d: "Observation deck tickets with optional time slots." },
    { t: "Dubai City Tour", slug: "dubai-city-tour", d: "Half-day or full-day guided highlights and photo stops." },
    { t: "Dhow Cruise (Dubai Creek)", slug: "dhow-cruise", d: "Traditional wooden boat dinner cruise with live entertainment." },
    { t: "Dubai Marina Cruise", slug: "dubai-marina-cruise", d: "Dinner cruise with skyline views." },
    { t: "Museum of the Future", slug: "museum-of-the-future", d: "Immersive exhibits on innovation, AI, and future living. Timed entry." },
    { t: "Abu Dhabi City Tour", slug: "abu-dhabi-city-tour", d: "Full-day highlights: Grand Mosque, Qasr Al Watan, Corniche, Heritage Village." },
  ];
  const thumbs: Record<string, string> = {
    "desert-safari": "/visa images/desert safari tour.jpg",
    "burj-khalifa": "/visa images/burj khalifa tour.jpg",
    "dubai-city-tour": "/visa images/dybai city tour.jpg",
    "dhow-cruise": "/visa images/Dhow Cruise Dubai!.jpeg",
    "dubai-marina-cruise": "/visa images/marina cruise tour.jpg",
    "museum-of-the-future": "/visa images/furture musem tour.jpg",
    "abu-dhabi-city-tour": "/visa images/abu dhabi city tour.jpg",
  };
  return (
    <main>
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">Dubai Tourism</h1>
          <div className="mt-8 grid grid-cols-1 gap-5">
            {tours.map((i) => (
              <div key={i.t} className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow">
                <div className="flex items-start gap-3">
                  {/* logo only before tour name, no thumbnail */}
                  <div className="flex-shrink-0 w-28 h-20 -ml-3 mr-3 overflow-hidden rounded-md">
                    <img
                      src={encodeURI(thumbs[i.slug] ?? "/Slideshow/1.jpg")}
                      alt={i.t}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-amber-700">Top pick</div>
                    <h2 className="mt-1 text-lg font-semibold text-slate-900">
                      <img src={encodeURI("/logo.jpg")} alt="Logo" className="inline-block w-8 h-8 mr-2 align-middle" />
                      {i.t}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">{i.d}</p>
                    <div className="mt-3 flex gap-3">
                      <a href={`/tours/dubai/${i.slug}`} className="inline-flex items-center rounded-md bg-amber-600 px-2 py-1 text-xs text-white hover:bg-amber-700" aria-label="View details">
                        <Eye size={12} className="mr-1" />
                        View details
                      </a>
                      <a href="/visas/prices/activities" className="inline-flex items-center rounded-md border border-amber-700 px-2 py-1 text-xs text-amber-700 hover:bg-amber-50">
                        <Tag size={12} className="mr-1" />
                        View Tourism Prices
                      </a>
                    </div>
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
