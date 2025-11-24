import Link from "next/link";
import Hero from "@/app/(components)/Hero";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type PageEntry = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  highlights?: string[];
  eligibility: string[];
  docs: string[];
  steps: string[];
  fees?: string[];
  processing?: string;
  faqs?: { q: string; a: string }[];
  notes?: string[];
};

const IMG = encodeURI("/visa images/Riyadh Saudi Arabia.jpeg");
const localHeroThumbs: Record<string, string> = {
  tourist: "Saudi Arabia E-Visa.jpeg",
  umrah: "umrah visa.jpg",
  business: "saudi business visa.jpg",
  family: "saudi family visit visa.jpg",
  transit: "saudi transit visa.jpg",
};

const PAGES: Record<string, PageEntry> = {
  tourist: {
    title: "Saudi Tourist e‑Visa",
    subtitle: "Explore Saudi Arabia for leisure and events",
    imageUrl: IMG,
    highlights: [
      "Multiple‑entry for many nationalities",
      "Stay duration typically up to 90 days",
      "Electronic issuance for eligible applicants",
    ],
    eligibility: [
      "Valid passport (6+ months)",
      "Purpose of travel: tourism, leisure, events",
      "Previous compliance with visa rules",
    ],
    docs: [
      "Passport copy",
      "Recent passport‑size photo",
      "Tentative hotel booking and flight itinerary (we can assist)",
      "Travel insurance (if required)",
    ],
    steps: [
      "Message us on WhatsApp for instant eligibility check",
      "Share documents securely and receive your checklist",
      "We prepare your application and submit for processing",
      "Receive your e‑visa and travel with confidence",
    ],
    fees: [
      "Visa fee + service charges (provided after eligibility check)",
      "Optional hotel and ticket booking support",
    ],
    processing: "Typically 2–5 working days for eligible nationalities",
    faqs: [
      {
        q: "Is it multiple‑entry?",
        a: "For many nationalities, the tourist e‑visa is multiple‑entry. We confirm based on your passport.",
      },
      {
        q: "Do I need confirmed bookings?",
        a: "Tentative bookings are usually fine for application. We can provide instant hotel/ticket vouchers if required.",
      },
    ],
  },
  umrah: {
    title: "Umrah Visa & Packages",
    subtitle: "Hotels in Makkah & Madinah, ground transfers",
    imageUrl: IMG,
    highlights: [
      "Flexible dates during Umrah season",
      "Hotel options near Haram",
      "Family and group arrangements",
    ],
    eligibility: [
      "Valid passport (6+ months)",
      "Compliant travel history",
      "Required vaccinations (as per current guidance)",
    ],
    docs: [
      "Passport copy",
      "Recent photos",
      "Travel dates and city preferences",
      "Hotel and flight preferences (we will assist)",
    ],
    steps: [
      "WhatsApp us for a tailored plan and checklist",
      "Pick your hotels and transfers with our team",
      "We finalize the visa and travel confirmations",
      "Travel with full support for your Umrah",
    ],
    fees: [
      "Visa fee + service charges",
      "Hotel and transfers are quoted as per your selection",
    ],
    processing: "Visa timelines depend on season; we provide exact timelines when you share dates",
    faqs: [
      {
        q: "Can you arrange hotels near Haram?",
        a: "Yes, we provide options in Makkah & Madinah with instant confirmation.",
      },
      {
        q: "Do you handle group travel?",
        a: "We handle family and group arrangements including ground transfers.",
      },
    ],
  },
  business: {
    title: "Saudi Business Visa",
    subtitle: "Invitation letter and stamping guidance",
    imageUrl: IMG,
    highlights: [
      "Company invitation letter support",
      "Document review and scheduling",
      "Application tracking",
    ],
    eligibility: [
      "Official business purpose and invitation",
      "Valid passport",
      "Compliance with previous visas",
    ],
    docs: [
      "Passport, photos",
      "Company letter/invitation",
      "Travel plan and accommodation",
    ],
    steps: [
      "Share your invitation and company details",
      "We prepare and review your application",
      "Book appointments/stamping where applicable",
      "Track and receive your visa",
    ],
    fees: ["Visa fee + service charges (varies by category)", "Appointment fees if applicable"],
    processing: "Timelines vary by category; we confirm after reviewing invitation",
    faqs: [
      {
        q: "Can you help secure the invitation letter?",
        a: "We guide on invitation requirements; issuance remains with the host company.",
      },
    ],
  },
  family: {
    title: "Saudi Family Visit Visa",
    subtitle: "Approvals and documentation",
    imageUrl: IMG,
    highlights: ["Checklist for each relation", "Document translations where needed"],
    eligibility: [
      "Relationship proof",
      "Valid passports of applicant and host",
      "Host compliance and approvals",
    ],
    docs: [
      "Passports",
      "Photos",
      "Relationship proofs (marriage/birth certificates)",
      "Host invitation/approvals",
    ],
    steps: [
      "Chat with us and share relation details",
      "We prepare the application and required proofs",
      "Submit and track approvals",
      "Receive visa and plan travel",
    ],
    fees: ["Visa fee + service charges", "Translation/attestation if needed"],
    processing: "Depends on approvals; we provide timelines on review",
  },
  transit: {
    title: "Saudi Transit Visa",
    subtitle: "Short stays for transit",
    imageUrl: IMG,
    highlights: ["Clear checklist for transit", "Flexible support"],
    eligibility: [
      "Confirmed onward ticket",
      "Valid passport",
      "Transit eligibility based on route",
    ],
    docs: [
      "Passport",
      "Onward ticket",
      "Basic travel plan",
    ],
    steps: [
      "Share your route and dates",
      "We confirm transit eligibility and steps",
      "Prepare application and submit",
      "Receive confirmation and travel",
    ],
    fees: ["Visa fee + service charges"],
    processing: "Varies by itinerary; we confirm after review",
  },
};

export default function SaudiVisaSlugPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const entry = PAGES[slug];
  const hero = localHeroThumbs[slug] ? encodeURI(`/visa images/${localHeroThumbs[slug]}`) : IMG;
  if (!entry) {
    return (
      <main>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 pt-10">
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <h1 className="text-2xl font-bold text-slate-900">Saudi Visa Services</h1>
              <p className="mt-2 text-slate-700">Find detailed information for each category</p>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <p className="text-slate-700">This page was not found. Please choose a category below.</p>
            <div className="mt-4">
              <Link href="/visas/saudi" className="text-amber-700 underline underline-offset-4">Back to Saudi visas</Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Hero
        title={entry.title}
        subtitle={entry.subtitle ?? "Saudi tourist, Umrah, business, family & transit"}
        imageUrl={hero}
      />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 pt-10">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
            <h1 className="text-2xl font-bold text-slate-900">{entry.title}</h1>
            {entry.subtitle ? (<p className="mt-2 text-slate-700">{entry.subtitle}</p>) : null}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <nav className="text-sm text-slate-600">
            <Link href="/visas/saudi" className="hover:text-slate-900">Saudi visas</Link>
            <span> / </span>
            <span className="text-slate-900">{entry.title}</span>
          </nav>
          <div className="mt-6 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">


              {entry.highlights?.length ? (
                <>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">Key highlights</h3>
                  <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                    {entry.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </>
              ) : null}

              <h3 className="mt-6 text-lg font-semibold text-slate-900">Eligibility</h3>
              <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                {entry.eligibility.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">Documents required</h3>
              <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                {entry.docs.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">Steps to apply</h3>
              <ol className="mt-2 list-decimal list-inside text-slate-700 space-y-1">
                {entry.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>

              {entry.fees?.length ? (
                <>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">Fees and charges</h3>
                  <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                    {entry.fees.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </>
              ) : null}

              {entry.faqs?.length ? (
                <>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">FAQs</h3>
                  <div className="mt-2 space-y-3">
                    {entry.faqs.map((f) => (
                      <div key={f.q} className="rounded-lg border border-slate-200 bg-white p-4">
                        <div className="font-medium text-slate-900">{f.q}</div>
                        <div className="mt-1 text-slate-700 text-sm">{f.a}</div>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}

              {entry.notes?.length ? (
                <>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">Notes</h3>
                  <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                    {entry.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
            <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Apply now</h3>
              <p className="mt-2 text-sm text-slate-600">Chat with our visa experts and receive the checklist.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20Saudi%20visa."
                  target="_blank"
                  className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                  WhatsApp UAE
                </a>
                <a
                  href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20Saudi%20visa."
                  target="_blank"
                  className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-100"
                >
                  WhatsApp India
                </a>
              </div>
              <div className="mt-4">
                <Link href="/visas/saudi" className="text-amber-700 underline underline-offset-4">Back to Saudi visas</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}