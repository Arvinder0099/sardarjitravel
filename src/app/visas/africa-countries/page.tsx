import Link from "next/link";
import Hero from "../components/Hero";

export const dynamic = "force-dynamic";

const AFRICA_COUNTRIES: { name: string; slug: string; info: string }[] = [
  { name: "Ghana", slug: "ghana", info: "Visit visa assistance, documents guidance and application support" },
  { name: "South Africa", slug: "south-africa", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Egypt", slug: "egypt", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Morocco", slug: "morocco", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Nigeria", slug: "nigeria", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Kenya", slug: "kenya", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Zimbabwe", slug: "zimbabwe", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Ethiopia", slug: "ethiopia", info: "Visit visa assistance, documents guidance and application support" },
  { name: "South Sudan", slug: "south-sudan", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Tunisia", slug: "tunisia", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Algeria", slug: "algeria", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Uganda", slug: "uganda", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Cameroon", slug: "cameroon", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Ivory Coast (Côte d’Ivoire)", slug: "ivory-coast", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Tanzania", slug: "tanzania", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Gabon", slug: "gabon", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Guinea", slug: "guinea", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Zambia", slug: "zambia", info: "Visit visa assistance, documents guidance and application support" },
  { name: "DR Congo", slug: "dr-congo", info: "Visit visa assistance, documents guidance and application support" },
];

const COUNTRY_IMAGES: Record<string, string> = {
  "ghana": "/visa images/Ghana visa.jpeg",
  "south-africa": "/visa images/south africa visa.jpeg",
  "egypt": "/visa images/egypt visa.jpeg",
  "morocco": "/visa images/Morocco visit visa.jpeg",
  "nigeria": "/visa images/nigeria visa.jpeg",
  "kenya": "/visa images/kenya visa.jpeg",
  // Filename provided as "zimbawe"
  "zimbabwe": "/visa images/zimbawe visa.jpeg",
  "ethiopia": "/visa images/ethiopia visa.jpeg",
  // Using Sudan image for South Sudan until specific asset is provided
  "south-sudan": "/visa images/Sudan visa.jpeg",
  "tunisia": "/visa images/Tunisia visa.jpeg",
  "algeria": "/visa images/algeria visa.jpeg",
  "uganda": "/visa images/Uganda visa.jpeg",
  "cameroon": "/visa images/Cameroon visa.jpeg",
  "ivory-coast": "/visa images/ivory coast visa.jpeg",
  "tanzania": "/visa images/Tanzania visa.jpeg",
  "gabon": "/visa images/Gabon visa.jpeg",
  "guinea": "/visa images/Guinea visa.jpeg",
  "zambia": "/visa images/zambia visa.jpeg",
  "dr-congo": "/visa images/dr congo visa.jpeg",
  default: "/visa images/visa and services thumbnail.jpeg",
};

export const metadata = {
  title: "Africa – Visit Visas",
  description: "Africa region visit visas: eligibility guidance, document preparation, and file processing support.",
};

export default function AfricaVisasPage() {
  return (
    <main>
      <Hero
        title="Africa – Visit Visas"
        subtitle="Ghana, South Africa, Egypt, Morocco, Nigeria, Kenya and more"
        imageUrl={encodeURI("/visa images/visa and services thumbnail.jpeg")}
      />
      {/* Slideshow video removed to keep video exclusively on homepage */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <p className="text-sm text-slate-600">Browse African visit visas below. Click "View details" to see full country-specific information inside the subpages.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AFRICA_COUNTRIES.map((c) => {
              const local = COUNTRY_IMAGES[c.slug];
              const imageUrl = encodeURI(local ?? COUNTRY_IMAGES.default);
              return (
                <div key={c.slug} className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow">
                  <div className="relative w-full h-40 rounded-md overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={`${c.name} visa`}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-3 text-sm text-amber-700">Visit Visa</div>
                  <h2 className="mt-1 text-lg font-semibold text-slate-900">{c.name}</h2>
                  <p className="mt-1 text-sm text-slate-600">{c.info}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link href={`/visas/africa-countries/${c.slug}`} className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-white hover:bg-green-700">View details</Link>
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
