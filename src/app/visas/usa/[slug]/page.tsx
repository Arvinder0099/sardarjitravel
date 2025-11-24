import Link from "next/link";
import Hero from "../../../components/Hero";
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

const IMG = encodeURI("/visa images/usa wallpaper.jpeg");
const localHeroThumbs: Record<string, string> = {
  "b1-b2": "usa b1 b2 visa.jpeg",
  renewals: "usa wallpaper.jpeg",
  esta: "usa wallpaper.jpeg",
  appointments: "usa wallpaper.jpeg",
  "document-review": "usa wallpaper.jpeg",
};

const PAGES: Record<string, PageEntry> = {
  "b1-b2": {
    title: "USA B1/B2 Visitor Visa",
    subtitle: "Tourism, visiting family/friends, and business meetings",
    imageUrl: IMG,
    highlights: [
      "DS‑160 completion and review",
      "VAC biometrics and consulate interview guidance",
      "Cover letter and itinerary proofs",
      "Rescheduling tips when slots are limited",
    ],
    eligibility: [
      "Valid passport (6+ months)",
      "Purpose of travel fits B1/B2 category",
      "Strong ties to home country (family, job, assets)",
      "Adequate funds and compliant travel history",
    ],
    docs: [
      "Passport copy",
      "Recent photo meeting US specifications",
      "Bank statements and employment letter",
      "Travel plan with tentative hotel and flight options",
      "Prior US visas and travel history (if any)",
    ],
    steps: [
      "Contact us via WhatsApp to confirm eligibility",
      "We prepare DS‑160 and your document checklist",
      "Book VAC biometrics and interview appointments",
      "Attend appointments with our guidance",
      "Track case status and collect passport/notification",
    ],
    fees: [
      "Visa fee (MRV) as per US consulate",
      "Service charges for file preparation and guidance",
    ],
    processing: "Depends on appointment availability and consulate workload",
    faqs: [
      {
        q: "What are common interview questions?",
        a: "Purpose of trip, travel dates, who is funding, employment and ties, previous travel history. We provide guidance to answer confidently and truthfully.",
      },
      {
        q: "Can I use tentative bookings?",
        a: "Yes, tentative hotel/flight plans are acceptable at application stage. We can arrange itinerary proofs as needed.",
      },
    ],
  },
  renewals: {
    title: "USA Visa Renewals (Interview Waiver / Drop‑Box)",
    subtitle: "Eligibility checks and document guidance",
    imageUrl: IMG,
    highlights: [
      "Interview waiver eligibility review",
      "Document set and checklist",
      "Slot booking for submission",
      "Status tracking and follow‑up",
    ],
    eligibility: [
      "Prior US visa in the same class (often within specific expiry window)",
      "Meets country‑specific drop‑box criteria",
      "No major breaches of previous visa conditions",
      "Valid passport and compliant photo",
    ],
    docs: [
      "Current passport and prior visa details",
      "Photo per US specification",
      "Employment/financial proofs as applicable",
      "DS‑160 confirmation and appointment confirmation",
    ],
    steps: [
      "Share your previous visa details for eligibility check",
      "We prepare DS‑160 and checklist",
      "Book drop‑box submission slot",
      "Submit documents and await processing",
      "Receive outcome and passport as guided",
    ],
    fees: [
      "Visa fee (MRV) as per US consulate",
      "Service charges for renewal preparation",
    ],
    processing: "Varies by center and workload; we advise timelines after review",
    faqs: [
      {
        q: "What if I don’t qualify for drop‑box?",
        a: "We proceed with regular appointment flow and interview preparation.",
      },
    ],
  },
  esta: {
    title: "ESTA (Visa Waiver Program)",
    subtitle: "Travel authorization for eligible nationalities",
    imageUrl: IMG,
    highlights: [
      "Online authorization for short visits",
      "Typically valid for 2 years (multiple entries)",
      "Fast processing for many applicants",
    ],
    eligibility: [
      "Passport from a Visa Waiver Program country",
      "Purpose fits tourism/business short stay",
      "No previous visa violations or travel bans",
    ],
    docs: [
      "Passport details",
      "Basic travel plan",
      "Contact information and eligibility responses",
    ],
    steps: [
      "Message us to confirm VWP eligibility",
      "We submit ESTA application",
      "Receive authorization confirmation",
      "Plan travel with hotel and flight options",
    ],
    fees: [
      "ESTA fee as per official schedule",
      "Service charges for application handling",
    ],
    processing: "Often within minutes to 72 hours",
    faqs: [
      {
        q: "Does ESTA guarantee entry?",
        a: "ESTA is an authorization to travel; final entry is decided by CBP at the port of entry.",
      },
      {
        q: "Can I extend an ESTA stay?",
        a: "ESTA has strict stay limits; extensions are generally not permitted.",
      },
    ],
  },
  appointments: {
    title: "Appointment Support (VAC & Consulate)",
    subtitle: "Slot booking, rescheduling tips, and center guidance",
    imageUrl: IMG,
    highlights: [
      "Earliest slot discovery",
      "Rescheduling alerts and tips",
      "Center selection guidance",
    ],
    eligibility: [
      "Completed DS‑160 with confirmation",
      "Valid passport and photo",
      "Compliance with consulate requirements",
    ],
    docs: [
      "DS‑160 confirmation",
      "Passport details",
      "Preferred travel dates and cities",
    ],
    steps: [
      "Share your preferred dates and location",
      "We find earliest slots and book appointments",
      "Advise on rescheduling tactics if needed",
      "Prepare for biometrics and interview",
    ],
    fees: [
      "Visa fee (MRV) payable online",
      "Service charges for appointment management",
    ],
    processing: "Subject to slot availability; we monitor for earlier dates",
    faqs: [
      {
        q: "Can you guarantee earlier slots?",
        a: "We cannot guarantee, but we actively monitor and guide you to improve chances of rescheduling to earlier dates.",
      },
    ],
  },
  "document-review": {
    title: "Document Review & Preparation",
    subtitle: "Cover letters, itinerary proofs, and supporting documents",
    imageUrl: IMG,
    highlights: [
      "Tailored cover letter drafting",
      "Hotel and flight itinerary proofs",
      "Checklist per your profile",
    ],
    eligibility: [
      "Applicants for B1/B2, renewals, or ESTA needing strong documentation",
      "Valid passport and travel plan",
      "Compliance with photo and format requirements",
    ],
    docs: [
      "Passport copy",
      "Employment/financial documents",
      "Travel plan details (dates, cities)",
      "Previous visa copies (if applicable)",
    ],
    steps: [
      "We assess your profile and goals",
      "Prepare cover letter and itinerary proofs",
      "Organize document set per checklist",
      "Final review and submission guidance",
    ],
    fees: [
      "Service charges depending on scope",
    ],
    processing: "Document preparation timelines shared after assessment",
    faqs: [
      {
        q: "Do you provide confirmed hotel/flight bookings?",
        a: "We provide itinerary proofs suitable for application. Confirmed bookings can be arranged on request.",
      },
    ],
  },
};

export default function USASlugPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const entry = PAGES[slug];
  const hero = localHeroThumbs[slug] ? encodeURI(`/visa images/${localHeroThumbs[slug]}`) : IMG;
  if (!entry) {
    return (
      <main>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 pt-10">
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <h1 className="text-2xl font-bold text-slate-900">USA Visa Services</h1>
              <p className="mt-1 text-slate-600">Select an option for full details</p>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <p className="text-slate-700">This page was not found. Please choose a category below.</p>
            <div className="mt-4">
              <Link href="/visas/usa" className="text-amber-700 underline underline-offset-4">Back to USA visas</Link>
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
        subtitle={entry.subtitle ?? "B1/B2, renewals, ESTA, appointments and documents"}
        imageUrl={hero}
      />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 pt-10">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
            <h1 className="text-2xl font-bold text-slate-900">{entry.title}</h1>
            {entry.subtitle && (
              <p className="mt-1 text-slate-600">{entry.subtitle}</p>
            )}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <nav className="text-sm text-slate-600">
            <Link href="/visas/usa" className="hover:text-slate-900">USA visas</Link>
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
                  href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20US%20visa."
                  target="_blank"
                  className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                  WhatsApp UAE
                </a>
                <a
                  href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20US%20visa."
                  target="_blank"
                  className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-100"
                >
                  WhatsApp India
                </a>
              </div>
              <div className="mt-4">
                <Link href="/visas/usa" className="text-amber-700 underline underline-offset-4">Back to USA visas</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}