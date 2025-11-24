import Link from "next/link";
import Hero from "../components/Hero";

export const dynamic = "force-dynamic";

const localThumbs: Record<string, string> = {
  "b1-b2": "usa b1 b2 visa.jpeg",
  renewals: "usa wallpaper.jpeg",
  esta: "usa wallpaper.jpeg",
  appointments: "usa wallpaper.jpeg",
  "document-review": "usa wallpaper.jpeg",
};

export default function USAVisasPage() {
  const wappUAE = "https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20need%20help%20with%20US%20visa.";
  const heroImg = encodeURI("/visa images/usa wallpaper.jpeg");
  const options = [
    { t: "B1/B2 Visitor Visa", d: "Eligibility, DS‑160, interview prep.", slug: "b1-b2" },
    { t: "Renewals", d: "Eligibility checks and drop‑box guidance.", slug: "renewals" },
    { t: "ESTA", d: "Travel authorization for eligible nationalities.", slug: "esta" },
    { t: "Appointment Support", d: "Slot booking and rescheduling help.", slug: "appointments" },
    { t: "Document Review", d: "Cover letters, itinerary, and proofs.", slug: "document-review" },
  ];

  return (
    <main>
      <Hero
        title="USA Visa Services"
        subtitle="B1/B2 visitor visas, renewals, ESTA, appointment support"
        imageUrl={heroImg}
      />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {options.map((i) => (
              <Link
                key={i.slug}
                href={`/visas/usa/${i.slug}`}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow overflow-hidden"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={encodeURI(`/visa images/${localThumbs[i.slug] || "usa wallpaper.jpeg"}`)}
                    alt={i.t}
                    className="w-16 h-16 object-cover rounded-md border border-slate-200"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-slate-900 break-words">{i.t}</h3>
                    <p className="mt-1 text-sm md:text-base text-slate-700 break-words">{i.d}</p>
                    <div className="mt-2 underline underline-offset-4 text-amber-700">View details</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-slate-900">Eligibility</h2>
              <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                <li>Purpose of travel fits B1/B2/ESTA category (tourism, business meetings, visiting family).</li>
                <li>Strong ties to home country and adequate funds for the trip.</li>
                <li>Previous US travel history and compliance with conditions (if any).</li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">Documents required</h3>
              <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                <li>Passport valid 6+ months and recent photos meeting US specs.</li>
                <li>Bank statements, employment letters, and leave approvals where applicable.</li>
                <li>Travel plan with hotel and flight booking options (we can assist with proofs).</li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">How to apply</h3>
              <ol className="mt-2 list-decimal list-inside text-slate-700 space-y-1">
                <li>Chat with us on WhatsApp to confirm eligibility and get a tailored checklist.</li>
                <li>We prepare DS‑160, review documents, and schedule your appointment.</li>
                <li>Attend biometrics/interview with our guidance and tips.</li>
                <li>Track your case and receive your passport/confirmation as advised by VAC.</li>
              </ol>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">FAQs</h3>
              <details className="mt-2 p-4 border border-slate-200 rounded-md bg-slate-50">
                <summary className="font-medium text-slate-900 cursor-pointer">How long does it take?</summary>
                <p className="mt-2 text-slate-700">Timelines depend on appointment availability and nationality. We will suggest the earliest center and tips to reschedule when possible.</p>
              </details>
              <details className="mt-2 p-4 border border-slate-200 rounded-md bg-slate-50">
                <summary className="font-medium text-slate-900 cursor-pointer">Do I qualify for renewal without interview?</summary>
                <p className="mt-2 text-slate-700">Some nationalities and prior visa holders qualify for drop‑box. We'll check your last visa details and advise.</p>
              </details>
            </div>
            <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Start your US visa</h3>
              <p className="mt-2 text-sm text-slate-600">Message our team for the checklist and next steps.</p>
              <div className="mt-4 flex gap-3 flex-wrap">
                <a href={wappUAE} target="_blank" className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-white hover:bg-green-700">WhatsApp UAE</a>
                <a href="tel:+971588448225" className="inline-flex items-center rounded-md bg-amber-600 px-3 py-2 text-white hover:bg-amber-700">Call UAE</a>
                <a href="mailto:sardarjitravelsuae@gmail.com" className="inline-flex items-center rounded-md border border-slate-300 px-3 py-2 text-slate-800 hover:bg-slate-100">Email</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
