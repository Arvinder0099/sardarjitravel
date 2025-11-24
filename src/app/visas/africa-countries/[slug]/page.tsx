import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "@/app/(components)/Hero";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const COUNTRY_NAMES: Record<string, string> = {
  "ghana": "Ghana",
  "south-africa": "South Africa",
  "egypt": "Egypt",
  "morocco": "Morocco",
  "nigeria": "Nigeria",
  "kenya": "Kenya",
  "zimbabwe": "Zimbabwe",
  "ethiopia": "Ethiopia",
  "south-sudan": "South Sudan",
  "tunisia": "Tunisia",
  "algeria": "Algeria",
  "uganda": "Uganda",
  "cameroon": "Cameroon",
  "ivory-coast": "Ivory Coast (Côte d’Ivoire)",
  "tanzania": "Tanzania",
  "gabon": "Gabon",
  "guinea": "Guinea",
  "zambia": "Zambia",
  "dr-congo": "DR Congo",
};

// Country-specific local images in /public/visa images with fallbacks
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

export default function AfricaCountryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const name = COUNTRY_NAMES[slug];
  if (!name) return notFound();

  const localImage = COUNTRY_IMAGES[slug];
  const imageUrl = localImage ? encodeURI(localImage) : encodeURI(COUNTRY_IMAGES.default);

  return (
    <main>
      <Hero
        title={`${name} – Visit Visa`}
        subtitle="Eligibility guidance, documents & application support"
        imageUrl={imageUrl}
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          {/* Heading above overview for clarity */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
            {name} – Visit Visa
          </h1>

          <div className="space-y-6">
            {/* Overview */}
            <div className="rounded-lg border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">Overview</h3>
              <p className="mt-2 text-slate-700">
                {name} visit visas are available for tourism, family visits and short business travel. Requirements
                depend on nationality, visa type and current policy updates. We assist with eligibility checks,
                document preparation and complete application handling.
              </p>
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
                <li>Confirm eligibility and your travel plan</li>
                <li>Gather required documents and photographs</li>
                <li>Complete the application (online or paper)</li>
                <li>Schedule appointment if required and attend with originals</li>
                <li>Submit application and track status</li>
              </ol>
              <div className="mt-4 flex gap-3">
                <Link href="https://wa.me/971506708007" className="rounded-md bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">
                  WhatsApp Now
                </Link>
                <Link href="/visas/prices/africa-visa-prices" className="rounded-md border border-amber-700 px-4 py-2 text-amber-700 hover:bg-amber-50">
                  View Africa Prices
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}