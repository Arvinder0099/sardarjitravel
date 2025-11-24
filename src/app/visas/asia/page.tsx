import Link from "next/link";
import Hero from "../../components/Hero";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const COUNTRIES: { name: string; slug: string }[] = [
  { name: "Malaysia", slug: "malaysia" },
  { name: "Indonesia", slug: "indonesia" },
  { name: "China", slug: "china" },
  { name: "Japan", slug: "japan" },
  { name: "Singapore", slug: "singapore" },
  { name: "Hong Kong", slug: "hong-kong" },
  { name: "Philippines", slug: "philippines" },
  { name: "Jordan", slug: "jordan" },
  { name: "Taiwan", slug: "taiwan" },
  { name: "Turkey", slug: "turkey" },
  { name: "India", slug: "india" },
  { name: "Thailand", slug: "thailand" },
  { name: "South Korea", slug: "south-korea" },
  { name: "Sri Lanka", slug: "sri-lanka" },
  { name: "Azerbaijan", slug: "azerbaijan" },
  { name: "Cambodia", slug: "cambodia" },
  { name: "Vietnam", slug: "vietnam" },
  { name: "Pakistan", slug: "pakistan" },
  { name: "Iran", slug: "iran" },
  { name: "Iraq", slug: "iraq" },
  { name: "Bangladesh", slug: "bangladesh" },
  { name: "Nepal", slug: "nepal" },
];

// Map local thumbnail images for each country so cards show images
const COUNTRY_IMAGES: Record<string, string> = {
  malaysia: "/visa images/malaysia visa.jpeg",
  indonesia: "/visa images/indonesia visa.jpeg",
  china: "/visa images/china visa.jpeg",
  japan: "/visa images/japan.jpeg",
  singapore: "/visa images/singapore visa.jpg",
  "hong-kong": "/visa images/hong kong visa.jpeg",
  philippines: "/visa images/Philippines visa.jpeg",
  jordan: "/visa images/jordan visa.jpeg",
  taiwan: "/visa images/taiwan visa.jpeg",
  turkey: "/visa images/Turkey visa.jpeg",
  india: "/visa images/india visa.jpeg",
  thailand: "/visa images/thailand visa.jpeg",
  "south-korea": "/visa images/South Korea visa.jpeg",
  "sri-lanka": "/visa images/Sri Lanka visa.jpeg",
  azerbaijan: "/visa images/Azerbaijan visa.jpeg",
  cambodia: "/visa images/combodia visa.jpeg",
  vietnam: "/visa images/vietnam visa.jpeg",
  pakistan: "/visa images/pakistan visa.jpeg",
  iran: "/visa images/iran visa.jpeg",
  iraq: "/visa images/iraq visa.jpeg",
  bangladesh: "/visa images/bangladesh visa.jpeg",
  nepal: "/visa images/nepal visa.jpeg",
};

export default function AsiaVisasPage() {
  return (
    <main>
      <Hero
        title="Asia – Visit Visas"
        subtitle="Malaysia, Indonesia, China, Japan, Singapore and more"
        imageUrl={encodeURI("/visa images/asia thumbnail.jpeg")}
      />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 pt-10">
          
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <p className="text-sm text-slate-600">Browse Asian visit visas below. Click \"View details\" to see full country-specific information inside the subpages. Processing time is not displayed.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COUNTRIES.map((c) => {
              const img = COUNTRY_IMAGES[c.slug];
              const imageUrl = img ? encodeURI(img) : encodeURI("/visa images/asia thumbnail.jpeg");
              return (
                <div key={c.slug} className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow">
                  {/* Thumbnail image */}
                  <div className="relative w-full h-40 rounded-md overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={`${c.name} visa`}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-3 text-sm text-amber-700">Visit Visa</div>
                  <h2 className="mt-1 text-lg font-semibold text-slate-900">{c.name}</h2>
                  {/* Details button */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href={`/visas/asia/${c.slug}`} className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-white hover:bg-green-700">
                      View details
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
