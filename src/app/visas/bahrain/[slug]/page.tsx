import Link from "next/link";
import Hero from "@/app/components/Hero";
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

const IMG = encodeURI("/visa images/BAHRAIN VIST VISA.jpeg");
const localHeroThumbs: Record<string, string> = {
  "14-days-e-visa": "BAHRAIN 14 DAYS E VISA.jpg",
  "30-days-e-visa": "BAHRAIN 30 DAYS E VISA.jpg",
  "14-days-sponsor-visa": "BAHRAIN 14 DAY SPONSAR VISA.jpg",
  "30-days-sponsor-visa": "BAHRAIN 30 DAY SPONSAR VISA.jpg",
  "1-year-visa": "BHARAIN 1 YEAR VISA.jpg",
};

const PAGES: Record<string, PageEntry> = {
  "14-days-e-visa": {
    title: "Bahrain 14 Days e‑Visa",
    subtitle: "Fast tourist visit visa",
    imageUrl: IMG,
    highlights: [
      "Electronic (e‑visa) process",
      "Clear checklist and support",
      "Hotel/flight voucher assistance (if needed)",
    ],
    eligibility: [
      "Valid passport (6+ months)",
      "Tourist or short family visit purpose",
      "Compliant travel history",
    ],
    docs: [
      "Passport copy",
      "Recent photo",
      "Tentative hotel booking and flight itinerary (we can assist)",
      "Travel insurance if required",
    ],
    steps: [
      "Message us to confirm eligibility and category",
      "Share documents and receive your checklist",
      "We prepare and submit the e‑visa application",
      "Receive your e‑visa and plan travel",
    ],
    fees: ["Visa fee + service charges (confirmed after eligibility check)"],
    processing: "Typically 2–5 working days depending on nationality",
  },
  "30-days-e-visa": {
    title: "Bahrain 30 Days e‑Visa",
    subtitle: "Tourism or short term visit",
    imageUrl: IMG,
    highlights: [
      "Electronic (e‑visa) process",
      "Hotel/flight voucher assistance",
    ],
    eligibility: [
      "Valid passport (6+ months)",
      "Tourist or family visit purpose",
    ],
    docs: [
      "Passport copy",
      "Recent photo",
      "Hotel booking and flight itinerary (tentative ok)",
      "Travel insurance if required",
    ],
    steps: [
      "WhatsApp us for quick eligibility check",
      "Share documents securely",
      "We file and track your application",
      "Receive visa and finalize travel",
    ],
    fees: ["Visa fee + service charges"],
    processing: "Typically 3–7 working days",
  },
  "14-days-sponsor-visa": {
    title: "Bahrain 14 Days Sponsor Visa",
    subtitle: "Company or family sponsor process",
    imageUrl: IMG,
    highlights: ["Sponsor invitation/authorization as applicable"],
    eligibility: ["Valid passport (6+ months)", "Eligible sponsor/company/family"],
    docs: [
      "Passport copy",
      "Recent photo",
      "Sponsor letter/invitation/authorization (as applicable)",
      "Basic travel plan",
    ],
    steps: [
      "Message us to verify sponsor category",
      "Prepare sponsor and applicant documents",
      "We submit the application",
      "Receive visa and plan travel",
    ],
    fees: ["Visa fee + sponsor processing + service charges"],
    processing: "Varies by category and sponsor type",
  },
  "30-days-sponsor-visa": {
    title: "Bahrain 30 Days Sponsor Visa",
    subtitle: "With sponsor documentation",
    imageUrl: IMG,
    eligibility: ["Valid passport (6+ months)", "Eligible sponsor/company/family"],
    docs: [
      "Passport copy",
      "Recent photo",
      "Sponsor letter/invitation/authorization",
      "Tentative bookings (we can assist)",
    ],
    steps: [
      "Confirm eligibility and sponsor details",
      "Submit documents for review",
      "We file and track application",
      "Receive visa",
    ],
    fees: ["Visa fee + sponsor processing + service charges"],
    processing: "Typically 5–10 working days (varies)",
  },
  "1-year-visa": {
    title: "Bahrain 1 Year Visa",
    subtitle: "Long‑term visit options",
    imageUrl: IMG,
    highlights: ["Longer validity/entries depending on category"],
    eligibility: ["Valid passport", "Eligible category as per current rules"],
    docs: ["Passport copy", "Photo", "Sponsor/invitation if applicable"],
    steps: [
      "Connect on WhatsApp for assessment",
      "Share documents for review",
      "We advise correct route and file",
      "Receive visa and next steps",
    ],
    fees: ["Visa fee + service charges (category‑dependent)"],
    processing: "Timeline depends on category and approvals",
  },
};

export default function BahrainSlugPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const entry = PAGES[slug];
  const hero = localHeroThumbs[slug] ? encodeURI(`/visa images/${localHeroThumbs[slug]}`) : IMG;

  if (!entry) {
    return (
      <main>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <h1 className="text-2xl font-bold text-slate-900">Bahrain Visit Visa</h1>
              <p className="mt-1 text-slate-600">Select an option for full details</p>
            </div>
            <p className="mt-6 text-slate-700">This page was not found. Please choose a category below.</p>
            <div className="mt-4">
              <Link href="/visas/bahrain" className="text-amber-700 underline underline-offset-4">Back to Bahrain visas</Link>
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
        subtitle={entry.subtitle ?? "Bahrain e‑visas, sponsor visas and 1‑year options"}
        imageUrl={hero}
      />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 pt-10">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
            <h1 className="text-2xl font-bold text-slate-900">{entry.title}</h1>
            {entry.subtitle && <p className="mt-1 text-slate-600">{entry.subtitle}</p>}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <nav className="text-sm text-slate-600">
            <Link href="/visas/bahrain" className="hover:text-slate-900">Bahrain visas</Link>
            <span> / </span>
            <span className="text-slate-900">{entry.title}</span>
          </nav>
          <div className="mt-6 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">


              {entry.highlights && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-slate-900">Key highlights</h3>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
                    {entry.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-900">Eligibility</h3>
                <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
                  {entry.eligibility.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-900">Documents required</h3>
                <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
                  {entry.docs.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-900">Steps to apply</h3>
                <ol className="mt-3 space-y-2 list-decimal list-inside text-slate-700">
                  {entry.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>

              {entry.fees && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-slate-900">Fees and charges</h3>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
                    {entry.fees.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Processing time removed */}

              {entry.faqs && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-slate-900">FAQs</h3>
                  <div className="mt-3 space-y-4">
                    {entry.faqs.map((qa, i) => (
                      <div key={i}>
                        <p className="font-medium text-slate-900">{qa.q}</p>
                        <p className="mt-1 text-slate-700">{qa.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {entry.notes && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-slate-900">Important notes</h3>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
                    {entry.notes.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Apply now</h3>
              <p className="mt-2 text-sm text-slate-600">WhatsApp us for instant assistance and correct category selection.</p>
              <div className="mt-3 space-y-2">
                <a href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20Bahrain%20visa." className="block text-amber-700 underline underline-offset-4">WhatsApp UAE</a>
                <a href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20Bahrain%20visa." className="block text-amber-700 underline underline-offset-4">WhatsApp India</a>
                <Link href="/visas/bahrain" className="block text-slate-700 underline underline-offset-4">Back to Bahrain visas</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}