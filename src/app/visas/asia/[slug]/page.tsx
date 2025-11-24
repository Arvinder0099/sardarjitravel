export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "@/app/components/Hero";

const COUNTRY_NAMES: Record<string, string> = {
  "malaysia": "Malaysia",
  "indonesia": "Indonesia",
  "china": "China",
  "japan": "Japan",
  "singapore": "Singapore",
  "hong-kong": "Hong Kong",
  "philippines": "Philippines",
  "jordan": "Jordan",
  "taiwan": "Taiwan",
  "turkey": "Turkey",
  "india": "India",
  "thailand": "Thailand",
  "south-korea": "South Korea",
  "sri-lanka": "Sri Lanka",
  "azerbaijan": "Azerbaijan",
  "cambodia": "Cambodia",
  "vietnam": "Vietnam",
  "pakistan": "Pakistan",
  "iran": "Iran",
  "iraq": "Iraq",
  "bangladesh": "Bangladesh",
  "nepal": "Nepal",
};

// Country-specific images in /public/visa images with fallbacks
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
  cambodia: "/visa images/combodia visa.jpeg", // filename is "combodia" in assets
  vietnam: "/visa images/vietnam visa.jpeg",
  pakistan: "/visa images/pakistan visa.jpeg",
  iran: "/visa images/iran visa.jpeg",
  iraq: "/visa images/iraq visa.jpeg",
  bangladesh: "/visa images/bangladesh visa.jpeg",
  nepal: "/visa images/nepal visa.jpeg",
};

export default function AsiaCountryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const name = COUNTRY_NAMES[slug];
  if (!name) return notFound();

  const localImage = COUNTRY_IMAGES[slug];
  const imageUrl = localImage ? encodeURI(localImage) : encodeURI("/visa images/asia thumbnail.jpeg");

  return (
    <main>
      <Hero
        title={`${name} – Visit Visa`}
        subtitle="Tourist, business and family visit visas"
        imageUrl={imageUrl}
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          {/* Country name heading placed above Overview as requested */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
            {name} – Visit Visa
          </h1>
          <div className="space-y-6">

            {/* Overview */}
            <div className="rounded-lg border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">Overview</h3>
              <p className="mt-2 text-slate-700">{name} visit visas are available for tourism and family visits. Requirements vary by nationality, visa type and recent policy updates. We assist with eligibility guidance, document preparation, and application submission.</p>
            </div>

            {/* Visa Types */}
            <div className="rounded-lg border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">Visa Types</h3>
              <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                <li>Tourist (short stay)</li>
                <li>Business (short stay)</li>
                <li>Family / Visit</li>
              </ul>
            </div>

            {/* Eligibility Requirements */}
            <div className="rounded-lg border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">Eligibility Requirements</h3>
              <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                <li>Valid passport with at least 6 months validity</li>
                <li>Clear travel purpose and itinerary</li>
                <li>Proof of funds and accommodation (hotel or host)</li>
              </ul>
            </div>

            {/* Required Documents */}
            <div className="rounded-lg border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">Required Documents</h3>
              <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                <li>Passport biodata page copy</li>
                <li>Recent passport-size photographs (per country specs)</li>
                <li>Travel plan: flight itinerary (if required) and hotel booking or host invitation</li>
                <li>Bank statements or proof of funds</li>
              </ul>
              <p className="mt-3 text-sm text-slate-600">Fees vary by nationality, visa type, and duration.</p>
            </div>

            {/* Next Steps */}
            <div className="rounded-lg border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">Next Steps</h3>
              <ol className="mt-2 list-decimal pl-5 text-slate-700 space-y-1">
                <li>Check your eligibility and confirm your travel plan</li>
                <li>Prepare required documents and photographs</li>
                <li>Complete the appropriate application (online or paper)</li>
                <li>Schedule appointment if required and attend with originals</li>
                <li>Submit application and track status</li>
              </ol>
              <div className="mt-4 flex gap-3">
                <Link href="https://wa.me/971506708007" className="rounded-md bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">
                  WhatsApp Now
                </Link>
                <Link href="/visas/prices/asia" className="rounded-md border border-amber-700 px-4 py-2 text-amber-700 hover:bg-amber-50">
                  View Asia Prices
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}