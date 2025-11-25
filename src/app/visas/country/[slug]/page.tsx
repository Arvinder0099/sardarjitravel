import Link from "next/link";
import Hero from "@/app/components/Hero";
export const runtime = "nodejs";

const DATA: Record<
  string,
  {
    name: string;
    processing: string;
    docs: string[];
  }
> = {
  uk: {
    name: "United Kingdom",
    processing: "5–10 working days (varies by center)",
    docs: [
      "Passport copy (valid 6+ months)",
      "UAE residency (if applicable)",
      "Photos per specification",
      "Bank statements and employment letter",
      "Hotel and flight plan (we can arrange)",
    ],
  },
  usa: {
    name: "United States",
    processing: "5–15 working days + interview availability",
    docs: [
      "Passport copy",
      "Photos per US spec",
      "Bank statements and ties to home country",
      "Itinerary/cover letter (we prepare)",
    ],
  },
  france: {
    name: "Schengen (France)",
    processing: "7–15 working days",
    docs: [
      "Passport copy",
      "Travel insurance (we can issue)",
      "Flight and hotel proof (we can arrange)",
      "Bank statements and employment letter",
    ],
  },
  germany: {
    name: "Schengen (Germany)",
    processing: "7–15 working days",
    docs: [
      "Passport copy",
      "Travel insurance",
      "Flight + hotel proof",
      "Bank statements and employer letter",
    ],
  },
  italy: {
    name: "Schengen (Italy)",
    processing: "7–15 working days",
    docs: [
      "Passport copy",
      "Travel insurance",
      "Flight + hotel plan",
      "Financial and employment proofs",
    ],
  },
  spain: {
    name: "Schengen (Spain)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Flight + hotel", "Financial proofs"],
  },
  netherlands: {
    name: "Netherlands",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Flight + hotel", "Financial proofs"],
  },
  denmark: {
    name: "Schengen (Denmark)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Travel insurance", "Flight + hotel proof", "Bank statements and employer letter"],
  },
  norway: {
    name: "Schengen (Norway)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Travel insurance", "Flight + hotel proof", "Financial and employment proofs"],
  },
  greece: {
    name: "Schengen (Greece)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance (we can issue)", "Flight + hotel proofs", "Bank statements and employer letter"],
  },
  switzerland: {
    name: "Schengen (Switzerland)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Travel insurance", "Flight + hotel proof", "Financial and employment proofs"],
  },
  hungary: {
    name: "Schengen (Hungary)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Itinerary & hotel", "Bank statements and employer letter"],
  },
  austria: {
    name: "Schengen (Austria)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Flight + hotel plan", "Financial and employment proofs"],
  },
  finland: {
    name: "Schengen (Finland)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Flight + hotel", "Bank statements and employer letter"],
  },
  poland: {
    name: "Schengen (Poland)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Itinerary & hotel", "Financial proofs"],
  },
  portugal: {
    name: "Schengen (Portugal)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Travel insurance", "Flight + hotel proof", "Bank statements and employer letter"],
  },
  czech: {
    name: "Schengen (Czech Republic)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Itinerary & hotel", "Financial and employment proofs"],
  },
  sweden: {
    name: "Schengen (Sweden)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Flight + hotel", "Financial proofs"],
  },
  luxembourg: {
    name: "Schengen (Luxembourg)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Flight + hotel", "Bank statements and employer letter"],
  },
  malta: {
    name: "Schengen (Malta)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Flight + hotel", "Financial proofs"],
  },
  croatia: {
    name: "Schengen (Croatia)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Flight + hotel proofs", "Bank statements and employer letter"],
  },
  slovakia: {
    name: "Schengen (Slovakia)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Flight + hotel", "Financial and employment proofs"],
  },
  slovenia: {
    name: "Schengen (Slovenia)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Flight + hotel", "Bank statements and employer letter"],
  },
  latvia: {
    name: "Schengen (Latvia)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Itinerary & hotel", "Financial proofs"],
  },
  liechtenstein: {
    name: "Schengen (Liechtenstein)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Flight + hotel", "Financial and employment proofs"],
  },
  lithuania: {
    name: "Schengen (Lithuania)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Flight + hotel", "Bank statements and employer letter"],
  },
  estonia: {
    name: "Schengen (Estonia)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Flight + hotel", "Financial proofs"],
  },
  bulgaria: {
    name: "Schengen (Bulgaria)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Flight + hotel", "Bank statements and employer letter"],
  },
  romania: {
    name: "Schengen (Romania)",
    processing: "7–15 working days",
    docs: ["Passport copy", "Insurance", "Itinerary & hotel", "Financial and employment proofs"],
  },
  turkey: {
    name: "Turkey",
    processing: "3–7 working days",
    docs: ["Passport copy", "Photo", "Travel plan", "Bank statements"],
  },
  japan: {
    name: "Japan",
    processing: "7–10 working days",
    docs: ["Passport copy", "Photo", "Itinerary", "Financial proofs"],
  },
  thailand: {
    name: "Thailand",
    processing: "2–5 working days",
    docs: ["Passport copy", "Photo", "Hotel + ticket plan", "Funds proof"],
  },
  kenya: {
    name: "Kenya",
    processing: "2–4 working days",
    docs: ["Passport copy", "Photo", "Travel plan"],
  },

  cyprus: {
    name: "Cyprus",
    processing: "7–10 working days",
    docs: ["Passport", "Photo", "Travel plan", "Financial proofs"],
  },

  australia: {
    name: "Australia",
    processing: "10–20 working days",
    docs: ["Passport", "Photo", "Funds", "Purpose of travel letter"],
  },
  saudi: {
    name: "Saudi Arabia",
    processing: "2–5 working days",
    docs: ["Passport", "Photo", "Hotel + tickets", "Insurance"],
  },
  uae: {
    name: "United Arab Emirates (Visit)",
    processing: "1–3 working days",
    docs: ["Passport copy", "Photo"],
  },
  // Added: New worldwide countries
  canada: {
    name: "Canada",
    processing: "10–20 working days (varies)",
    docs: ["Passport", "Photos", "Funds proof", "Itinerary/cover letter"],
  },
  "new-zealand": {
    name: "New Zealand",
    processing: "7–15 working days",
    docs: [
      "Passport copy (valid 6+ months)",
      "Recent photo per specification",
      "Bank statements and employment letter",
      "Travel plan (flights & hotel) — we can arrange",
    ],
  },
  peru: {
    name: "Peru",
    processing: "7–12 working days",
    docs: [
      "Passport copy",
      "Photo",
      "Flights & hotel plan",
      "Financial and employment proofs",
    ],
  },
  brazil: {
    name: "Brazil",
    processing: "6–12 working days",
    docs: ["Passport", "Photo", "Itinerary", "Financial proofs"],
  },
  mexico: {
    name: "Mexico",
    processing: "7–12 working days",
    docs: [
      "Passport copy",
      "Photo",
      "Travel itinerary",
      "Bank statements and ties to home country",
    ],
  },
  russia: {
    name: "Russia",
    processing: "7–15 working days",
    docs: [
      "Passport copy",
      "Photo",
      "Itinerary & hotel confirmation",
      "Funds proof and employer letter",
    ],
  },
  montenegro: {
    name: "Montenegro",
    processing: "7–12 working days",
    docs: [
      "Passport copy",
      "Photo",
      "Travel plan",
      "Financial and employment proofs",
    ],
  },
  ireland: {
    name: "Ireland",
    processing: "10–20 working days",
    docs: [
      "Passport copy",
      "Photo",
      "Travel insurance and itinerary",
      "Bank statements and employment letter",
    ],
  },
  colombia: {
    name: "Colombia",
    processing: "7–12 working days",
    docs: [
      "Passport copy",
      "Photo",
      "Travel plan",
      "Financial and employment proofs",
    ],
  },
  ghana: {
    name: "Ghana",
    processing: "7–10 working days",
    docs: ["Passport copy", "Photo", "Travel plan (flights & hotel)", "Bank statements and employment letter"],
  },
  "south-africa": {
    name: "South Africa",
    processing: "7–14 working days",
    docs: ["Passport copy", "Photo", "Bank statements", "Itinerary/cover letter", "Invitation letter (if applicable)"]
  },
  egypt: {
    name: "Egypt",
    processing: "5–10 working days",
    docs: ["Passport copy", "Photo", "Hotel & flight proofs", "Funds proof"],
  },
  morocco: {
    name: "Morocco",
    processing: "7–12 working days",
    docs: ["Passport copy", "Photo", "Travel plan", "Bank statements and employment letter"],
  },
  nigeria: {
    name: "Nigeria",
    processing: "5–10 working days",
    docs: ["Passport copy", "Photo", "Itinerary & hotel", "Financial and employment proofs"],
  },
  zimbabwe: {
    name: "Zimbabwe",
    processing: "7–12 working days",
    docs: ["Passport copy", "Photo", "Travel plan", "Bank statements"],
  },
  ethiopia: {
    name: "Ethiopia",
    processing: "3–7 working days",
    docs: ["Passport copy", "Photo", "Travel plan"],
  },
  "south-sudan": {
    name: "South Sudan",
    processing: "7–12 working days",
    docs: ["Passport copy", "Photo", "Itinerary & hotel", "Bank statements", "Invitation (if applicable)"]
  },
  tunisia: {
    name: "Tunisia",
    processing: "7–12 working days",
    docs: ["Passport copy", "Photo", "Travel plan", "Funding and employment proofs"],
  },
  algeria: {
    name: "Algeria",
    processing: "7–12 working days",
    docs: ["Passport copy", "Photo", "Hotel & flight", "Funds proof", "Invitation (if applicable)"]
  },
  uganda: {
    name: "Uganda",
    processing: "3–7 working days",
    docs: ["Passport copy", "Photo", "Travel plan"],
  },
  cameroon: {
    name: "Cameroon",
    processing: "7–12 working days",
    docs: ["Passport copy", "Photo", "Itinerary & hotel", "Financial proofs"],
  },
  "ivory-coast": {
    name: "Ivory Coast (Côte d’Ivoire)",
    processing: "7–12 working days",
    docs: ["Passport copy", "Photo", "Hotel & flight proofs", "Bank statements and employment letter"],
  },
  tanzania: {
    name: "Tanzania",
    processing: "3–7 working days",
    docs: ["Passport copy", "Photo", "Travel plan"],
  },
  gabon: {
    name: "Gabon",
    processing: "7–12 working days",
    docs: ["Passport copy", "Photo", "Itinerary & hotel", "Funds proof"],
  },
  guinea: {
    name: "Guinea",
    processing: "7–12 working days",
    docs: ["Passport copy", "Photo", "Travel plan", "Financial and employment proofs"],
  },
  zambia: {
    name: "Zambia",
    processing: "3–7 working days",
    docs: ["Passport copy", "Photo", "Travel plan"],
  },
  "dr-congo": {
    name: "DR Congo (Democratic Republic of the Congo)",
    processing: "7–12 working days",
    docs: ["Passport copy", "Photo", "Hotel & flight", "Bank statements", "Invitation (if applicable)"]
  },
};

const IMAGES: Record<string, string> = {
  // Worldwide
  uk: "/visa images/uk visa.jpeg",
  usa: "/visa images/usa b1 b2 visa.jpeg",
  canada: "/visa images/canada visa.jpeg",
  australia: "/visa images/Australia visa.jpeg",
  cyprus: "/visa images/Schengen Visa.jpeg", // fallback
  turkey: "/visa images/Turkey visa.jpeg",
  japan: "/visa images/japan.jpeg",
  thailand: "/visa images/thailand visa.jpeg",
  kenya: "/visa images/kenya visa.jpeg",
  brazil: "/visa images/Brazil visa.jpeg",
  uae: "/visa images/dubai thumbnail.jpeg",
  saudi: "/visa images/Saudi Arabia E-Visa.jpeg",

  // Schengen
  france: "/visa images/france visa.jpeg",
  germany: "/visa images/germany visa.jpeg",
  italy: "/visa images/italy visa.jpeg",
  spain: "/visa images/spain visa.jpeg",
  netherlands: "/visa images/Schengen Visa.jpeg", // fallback
  denmark: "/visa images/denmark visa.jpeg",
  norway: "/visa images/norway visa.jpeg",
  greece: "/visa images/greece visa.jpeg",
  switzerland: "/visa images/switzerland visa.jpeg",
  hungary: "/visa images/Hungary visa.jpeg",
  austria: "/visa images/Austria visa.jpeg",
  finland: "/visa images/finland visa.jpeg",
  poland: "/visa images/Poland visa.jpeg",
  portugal: "/visa images/Portugal visa.jpeg",
  czech: "/visa images/czech republic visa.jpeg",
  sweden: "/visa images/sweden visa.jpeg",
  luxembourg: "/visa images/luxembourg visa.jpeg",
  malta: "/visa images/malta visa.jpeg",
  croatia: "/visa images/croatia visa.jpeg",
  slovakia: "/visa images/Schengen Visa.jpeg", // fallback
  slovenia: "/visa images/slovenia visa.jpeg",
  latvia: "/visa images/latva visa.jpeg", // asset filename typed as 'latva'
  liechtenstein: "/visa images/liechtenstein visa.jpeg",
  lithuania: "/visa images/Schengen Visa.jpeg", // fallback
  estonia: "/visa images/estonia visa.jpeg",
  bulgaria: "/visa images/bulgaria visa.jpeg",
  romania: "/visa images/romania visa.jpeg",
  "south-africa": "/visa images/south africa visa.jpeg",
};


export const dynamic = "force-dynamic";
export default function CountryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const entry = DATA[slug];
  const hero = encodeURI(IMAGES[slug] || "/visa images/visa and services thumbnail.jpeg");
  const whatsappUAE = `https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20${encodeURIComponent(
    entry?.name ?? slug
  )}%20visit%20visa.`;
  const whatsappIN = `https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20${encodeURIComponent(
    entry?.name ?? slug
  )}%20visit%20visa.`;

  if (!entry) {
    return (
      <main>
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <h1 className="text-3xl font-semibold text-slate-900">Country not found</h1>
            <p className="mt-2 text-slate-600">Return to the list of countries and pick another destination.</p>
            <div className="mt-4">
              <Link href="/visas/world" className="text-amber-700 underline underline-offset-4">
                Back to Worldwide Visas
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Hero
        title={`${entry.name} – Visit Visa`}
        subtitle="Checklist, documents, appointment and application support"
        imageUrl={hero}
      />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <nav className="text-sm text-slate-600">
            <Link href="/visas/world" className="hover:text-slate-900">
              Worldwide Visas
            </Link>
            <span> / </span>
            <span className="text-slate-900">{entry.name}</span>
          </nav>
          <div className="mt-6 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-slate-900">Documents required</h3>
              <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                {entry.docs.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">Steps to apply</h3>
              <ol className="mt-2 list-decimal list-inside text-slate-700 space-y-1">
                <li>Chat on WhatsApp or call us for a quick eligibility check.</li>
                <li>Share your documents securely and receive the checklist.</li>
                <li>We file your application and keep you updated.</li>
                <li>Receive your visa and travel with confidence.</li>
              </ol>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">Why apply with us</h3>
              <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                <li>Clear checklists and document review to avoid rejections</li>
                <li>Appointment booking and itinerary proofs when needed</li>
                <li>Transparent communication over WhatsApp and email</li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">FAQs</h3>
              {/* FAQ about processing time removed */}
              <details className="mt-2 p-4 border border-slate-200 rounded-md bg-slate-50">
                <summary className="font-medium text-slate-900 cursor-pointer">Will you book my appointment?</summary>
                <p className="mt-2 text-slate-700">Yes, we can help with appointment scheduling where applicable and advise on earlier slots when possible.</p>
              </details>
            </div>
            <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Apply now</h3>
              <p className="mt-2 text-sm text-slate-600">Speak to our visa experts instantly.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={whatsappUAE} target="_blank" className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">WhatsApp UAE</a>
                <a href={whatsappIN} target="_blank" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-100">WhatsApp India</a>
                <a href="tel:+971588448225" className="inline-flex items-center rounded-md bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">Call UAE</a>
              </div>
              <p className="mt-3 text-xs text-slate-500">Final requirements vary by nationality and purpose of travel.</p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
