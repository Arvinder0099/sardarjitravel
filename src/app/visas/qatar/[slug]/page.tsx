import Link from "next/link";
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

const IMG = encodeURI("/visa images/QATAR VISIT VISA hero image.jpg");
const localHeroThumbs: Record<string, string> = {
  "visit-visa": "QATAR.jpeg",
};

const PAGES: Record<string, PageEntry> = {
  "visit-visa": {
    title: "Qatar Visit Visa",
    subtitle: "Tourist/family visit — filing and guidance",
    imageUrl: IMG,
    highlights: [
      "Electronic or sponsor-based processing as per category",
      "Hotel and flight itinerary support",
      "Clear checklist and end-to-end guidance",
    ],
    eligibility: [
      "Valid passport (6+ months)",
      "Purpose of travel: tourism or family visit",
      "Compliant travel history",
    ],
    docs: [
      "Passport copy",
      "Recent photo",
      "Tentative hotel booking and flight itinerary (we can assist)",
      "Sponsor/Invitation (if applicable)",
      "Travel insurance if required",
    ],
    steps: [
      "Message us on WhatsApp to confirm eligibility and category",
      "Share documents securely and receive your checklist",
      "We prepare and submit your application",
      "Receive your visa and plan your travel",
    ],
    fees: ["Visa fee + service charges (confirmed after eligibility check)"],
    processing: "Typically 3–7 working days depending on category and nationality",
    faqs: [
      { q: "Do I need confirmed bookings?", a: "Tentative bookings are fine at the application stage. We can provide instant hotel/ticket vouchers if required." },
    ],
  },
};

export default function QatarSlugPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const entry = PAGES[slug];
  const hero = localHeroThumbs[slug] ? encodeURI(`/visa images/${localHeroThumbs[slug]}`) : IMG;
  if (!entry) {
    return (
      <main>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 pt-10">
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <h1 className="text-2xl font-bold text-slate-900">Qatar Visit Visa</h1>
              <p className="mt-1 text-slate-600">Select an option for full details</p>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <p className="text-slate-700">This page was not found. Please choose a category below.</p>
            <div className="mt-4">
              <Link href="/visas/qatar" className="text-amber-700 underline underline-offset-4">Back to Qatar visas</Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
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
            <Link href="/visas/qatar" className="hover:text-slate-900">Qatar visas</Link>
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
                <a href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20Qatar%20visit%20visa." className="block text-amber-700 underline underline-offset-4">WhatsApp UAE</a>
                <a href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20Qatar%20visit%20visa." className="block text-amber-700 underline underline-offset-4">WhatsApp India</a>
                <Link href="/visas/qatar" className="block text-slate-700 underline underline-offset-4">Back to Qatar visas</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}