// Hero component import removed to ensure server-safe page without client-only imports
// Eye icon import removed

const COUNTRIES: { name: string; days: string; code: string }[] = [
  { name: "United Kingdom", days: "5–10 days", code: "UK" },
  { name: "United States", days: "5–15 days", code: "USA" },
  { name: "Schengen (France)", days: "7–15 days", code: "France" },
  { name: "Schengen (Germany)", days: "7–15 days", code: "Germany" },
  { name: "Schengen (Italy)", days: "7–15 days", code: "Italy" },
  { name: "Schengen (Spain)", days: "7–15 days", code: "Spain" },
  { name: "Netherlands", days: "7–15 days", code: "Netherlands" },
  { name: "Turkey", days: "3–7 days", code: "Turkey" },
  { name: "Japan", days: "7–10 days", code: "Japan" },
  { name: "Thailand", days: "2–5 days", code: "Thailand" },
  { name: "Kenya", days: "2–4 days", code: "Kenya" },
  { name: "South Africa", days: "7–14 days", code: "South-Africa" },
  { name: "Brazil", days: "6–12 days", code: "Brazil" },
  { name: "Cyprus", days: "7–10 days", code: "Cyprus" },
  { name: "Canada", days: "10–20 days", code: "Canada" },
  { name: "Australia", days: "10–20 days", code: "Australia" },
  { name: "Saudi Arabia", days: "2–5 days", code: "Saudi" },
  { name: "UAE (Visit)", days: "1–3 days", code: "UAE" },
];

// Country-specific scenic images for attractive cards
const IMAGES: Record<string, string> = {
  uk: "https://ext.same-assets.com/1035752913/4244343102.jpeg",
  usa: "/visa images/usa b1 b2 visa.jpeg",
  france: "/visa images/france visa.jpeg",
  germany: "/visa images/germany visa.jpeg",
  italy: "/visa images/italy visa.jpeg",
  spain: "/visa images/spain visa.jpeg",
  netherlands: "https://ext.same-assets.com/1035752913/246970301.jpeg",
  turkey: "/visa images/Turkey visa.jpeg",
  japan: "/visa images/japan.jpeg",
  thailand: "/visa images/thailand visa.jpeg",
  kenya: "https://ext.same-assets.com/1035752913/333604389.jpeg",
  "south-africa": "/visa images/south africa visa.jpeg",
  brazil: "https://ext.same-assets.com/1035752913/2754294483.jpeg",
  cyprus: "https://ext.same-assets.com/1035752913/984413966.jpeg",
  canada: "https://ext.same-assets.com/1035752913/333604389.jpeg",
  australia: "https://ext.same-assets.com/1035752913/2866358621.jpeg",
  saudi: "/visa images/Saudi Arabia E-Visa.jpeg",
  uae: "/visa images/dubai.jpeg",
};

// Removed server-side redirect to avoid prerender invariant errors
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Visit Visas – Countries",
  description: "Popular countries for visit visas with guidance and support.",
};

export default function CountriesGridPage() {
  const topCountries = [
    { href: "/visas/country/uk", title: "United Kingdom", img: IMAGES.uk, days: "5–10 days" },
    { href: "/visas/country/usa", title: "United States", img: IMAGES.usa, days: "5–15 days" },
    { href: "/visas/country/france", title: "France (Schengen)", img: IMAGES.france, days: "7–15 days" },
    { href: "/visas/country/germany", title: "Germany (Schengen)", img: IMAGES.germany, days: "7–15 days" },
    { href: "/visas/country/italy", title: "Italy (Schengen)", img: IMAGES.italy, days: "7–15 days" },
    { href: "/visas/country/spain", title: "Spain (Schengen)", img: IMAGES.spain, days: "7–15 days" },
    { href: "/visas/country/netherlands", title: "Netherlands (Schengen)", img: IMAGES.netherlands, days: "7–15 days" },
    { href: "/visas/country/turkey", title: "Turkey", img: IMAGES.turkey, days: "3–7 days" },
    { href: "/visas/country/japan", title: "Japan", img: IMAGES.japan, days: "7–10 days" },
    { href: "/visas/country/thailand", title: "Thailand", img: IMAGES.thailand, days: "2–5 days" },
    { href: "/visas/country/kenya", title: "Kenya", img: IMAGES.kenya, days: "2–4 days" },
    { href: "/visas/country/south-africa", title: "South Africa", img: IMAGES["south-africa"], days: "7–14 days" },
    { href: "/visas/country/brazil", title: "Brazil", img: IMAGES.brazil, days: "6–12 days" },
    { href: "/visas/country/cyprus", title: "Cyprus", img: IMAGES.cyprus, days: "7–10 days" },
    { href: "/visas/country/canada", title: "Canada", img: IMAGES.canada, days: "10–20 days" },
    { href: "/visas/country/australia", title: "Australia", img: IMAGES.australia, days: "10–20 days" },
    { href: "/visas/saudi/visit-visa", title: "Saudi Arabia", img: IMAGES.saudi, days: "2–5 days" },
    { href: "/visas/uae/visit-visa", title: "United Arab Emirates (Visit)", img: IMAGES.uae, days: "1–3 days" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl sm:text-4xl font-semibold text-slate-900">Visit Visas – Popular Countries</h1>
        <p className="mt-3 text-slate-700">Guidance, documents, application support and quick processing timelines.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topCountries.map((c) => (
            <a key={c.href} href={c.href} className="group block rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-sm">
              <div className="aspect-[16/9] bg-slate-100">
                <img
                  src={encodeURI(c.img)}
                  alt={c.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-slate-700">{c.title}</h3>
                  <span className="text-xs text-slate-500">{c.days}</span>
                </div>
                <p className="mt-1 text-sm text-slate-700">We help with eligibility, document prep and complete file processing.</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

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
  { name: "Ivory Coast", slug: "ivory-coast", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Tanzania", slug: "tanzania", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Gabon", slug: "gabon", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Guinea", slug: "guinea", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Zambia", slug: "zambia", info: "Visit visa assistance, documents guidance and application support" },
  { name: "DR Congo", slug: "dr-congo", info: "Visit visa assistance, documents guidance and application support" },
];

const ASIA_COUNTRIES: { name: string; slug: string; info: string }[] = [
  { name: "India", slug: "india", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Pakistan", slug: "pakistan", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Bangladesh", slug: "bangladesh", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Sri Lanka", slug: "sri-lanka", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Nepal", slug: "nepal", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Philippines", slug: "philippines", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Malaysia", slug: "malaysia", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Singapore", slug: "singapore", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Indonesia", slug: "indonesia", info: "Visit visa assistance, documents guidance and application support" },
  { name: "Vietnam", slug: "vietnam", info: "Visit visa assistance, documents guidance and application support" },
];
