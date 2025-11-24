import Link from "next/link";
// (remove) import fs from "fs";
// (remove) import path from "path";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";

const PAGES: Record<string, { title: string; intro: string; bullets: string[]; docs?: string[]; imageUrl: string; eligibility?: string[]; steps?: string[]; notes?: string[] }> = {
  "transit-visa": {
    title: "Dubai Transit Visa Service",
    intro:
      "Transit visas for short layovers in the UAE. We assist with eligibility, documentation and quick issuance so your connection is worry‑free.",
    bullets: [
      "24/48/96‑hour options depending on itinerary",
      "Airline itinerary or ticket required",
      "Fast turnaround times",
    ],
    docs: ["Passport copy", "Confirmed ticket", "Photo"],
    imageUrl: "https://ext.same-assets.com/1035752913/984413966.jpeg",
    eligibility: [
      "Valid onward ticket to a third destination",
      "Passport valid for at least 6 months",
      "Nationality eligibility as per airline/immigration rules",
    ],
    steps: [
      "Share passport copy and onward ticket via WhatsApp",
      "We verify eligibility and confirm the timeline",
      "We submit your application and keep you updated",
      "Receive visa by email before your departure",
    ],
    notes: [
      "Transit visa duration depends on flight connection and nationality",
      "Some nationalities may not require a transit visa for short connections",
    ],
  },
  "visit-visa-extension-without-exit": {
    title: "UAE Visit Visa Extension Without Exit",
    intro:
      "Extend your stay in the UAE for another 30/60/90 days without exiting the country. We arrange the paperwork and keep you updated.",
    bullets: ["No exit required", "Multiple extension cycles possible", "Smooth processing"],
    docs: ["Passport copy", "Current visa", "Photo"],
    imageUrl: "https://ext.same-assets.com/1035752913/260756484.jpeg",
    eligibility: [
      "Current visit/tourist visa still valid at time of request",
      "No immigration violations or overstays",
    ],
    steps: [
      "Send passport copy and current visa",
      "Choose extension duration (30/60/90 days)",
      "We process the extension and share approval",
      "Receive your updated status and confirmation by email",
    ],
    notes: ["Overstay fines apply if you exceed the final validity; extend on time."],
  },
  "3-months": {
    title: "3 Months UAE Visa",
    intro: "Long‑stay visit visa for family visits and extended trips.",
    bullets: ["Single/multiple entry options", "Guidance on documentation", "Email delivery"],
    docs: ["Passport copy", "Photo"],
    imageUrl: "https://ext.same-assets.com/1035752913/1509137559.jpeg",
    eligibility: ["Passport valid for 6+ months", "Nationality rules apply"],
    steps: [
      "Share documents",
      "We confirm eligibility and submit",
      "Track updates via WhatsApp",
      "Get visa by email",
    ],
  },
  "30-days": {
    title: "30 Days UAE Visa",
    intro: "Short stay for tourism or visits.",
    bullets: ["Fast approvals", "Extendable inside UAE"],
    docs: ["Passport copy", "Photo"],
    imageUrl: "https://ext.same-assets.com/1035752913/1073896206.jpeg",
  },
  "60-days": {
    title: "60 Days UAE Visa",
    intro: "Flexible duration for visits.",
    bullets: ["Single/multiple entry", "Extendable"],
    docs: ["Passport copy", "Photo"],
    imageUrl: "https://ext.same-assets.com/1035752913/4230331401.jpeg",
  },
  "30-multiple-entry": {
    title: "30 Days Multiple Entry UAE Visa",
    intro: "Enter and exit multiple times during 30 days.",
    bullets: ["Ideal for short business trips", "Email delivery"],
    docs: ["Passport copy", "Photo"],
    imageUrl: "https://ext.same-assets.com/1035752913/4253814837.jpeg",
  },
  "60-multiple-entry": {
    title: "60 Days Multiple Entry UAE Visa",
    intro: "Enter and exit multiple times during 60 days.",
    bullets: ["Great flexibility", "Extendable"],
    docs: ["Passport copy", "Photo"],
    imageUrl: "https://ext.same-assets.com/1035752913/1440545848.jpeg",
  },
  "14-days": {
    title: "14 Days Dubai UAE Visa",
    intro: "Quick trip visa for brief stays.",
    bullets: ["Fast approvals", "Ideal for short visits"],
    docs: ["Passport copy", "Photo"],
    imageUrl: "https://ext.same-assets.com/1035752913/2221328244.jpeg",
  },

  "family-residence": {
    title: "UAE Family & Residence Visa",
    intro:
      "Sponsor family members for residence in the UAE. We guide you through entry permit, medicals, Emirates ID and stamping.",
    bullets: ["Spouse, children and parents (conditions apply)", "End‑to‑end assistance"],
    docs: ["Passport copy", "Attested certificates (where needed)", "Photo"],
    imageUrl: "https://ext.same-assets.com/1035752913/2174154671.jpeg",
  },
  "5-year-tourist": {
    title: "5 Years UAE Tourist Visa",
    intro: "Multi‑year multiple entry tourist visa to visit the UAE frequently.",
    bullets: ["Stay up to 90 days per visit (with possible extension)", "Perfect for frequent visitors"],
    docs: ["Passport copy", "Photo", "Bank statement as per rules"],
    imageUrl: "https://ext.same-assets.com/1035752913/333604389.jpeg",
  },
  "golden-visa": {
    title: "Golden Visa UAE Service",
    intro: "Long‑term residency for investors, professionals and achievers. We assess eligibility and handle documentation.",
    bullets: ["10‑year or 5‑year categories", "Eligibility evaluation", "Application management"],
    docs: ["Passport", "Proofs as per category"],
    imageUrl: "https://ext.same-assets.com/1035752913/1863783108.jpeg",
  },
  "change-renew": {
    title: "Dubai UAE Visa Extension, Change & Renew",
    intro: "Switch categories, renew, or extend your visa with our streamlined support.",
    bullets: ["Inside‑country changes", "Extensions without exit", "Fast processing"],
    docs: ["Passport copy", "Current visa"],
    imageUrl: "https://ext.same-assets.com/1035752913/260756484.jpeg",
  },
};

export function generateStaticParams() {
  return [];
}

export default function UAEInnerPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const p = PAGES[slug];
  if (!p) {
    notFound();
  }

  const localHeroThumbs: Record<string, string> = {
    "transit-visa": "TANSIT VISA DUBAI.jpg",
    "visit-visa-extension-without-exit": "VISA EXTENSION DUBAI VISA.jpeg",
    "3-months": "3 MONTH VISA DUBAI.jpg",
    "30-days": "30 days visa dubai.jpg",
    "60-days": "60 DAYS VISA DUBAI.jpg",
    "30-multiple-entry": "MULTIPLE 30 DAYS DUBAI VISA.jpg",
    "60-multiple-entry": "MULTIPLE 60 DAYS VISA DUBAI.jpg",
    "14-days": "14 DAYS VISA DUBAI.jpg",
    "family-residence": "FAMILY RESIDENCE.jpg",
    "golden-visa": "GOLDEN VISA DUBAI.jpg",
    "change-renew": "VISA EXTENSION DUBAI VISA.jpeg",
  };

  const getHeroImage = (slug: string) => {
    const fname = localHeroThumbs[slug];
    if (fname) {
      return encodeURI(`/visa images/${fname}`);
    }
    return p.imageUrl || "/visa images/dubai.jpeg";
  };

  return (
    <main>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 pt-10">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
            <h1 className="text-2xl font-bold text-slate-900">{p.title}</h1>
            {p.intro ? (<p className="mt-2 text-slate-700">{p.intro}</p>) : null}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-slate-900">Highlights</h2>
              <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {p.eligibility && (
                <>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">Eligibility</h3>
                  <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                    {p.eligibility.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </>
              )}

              {p.docs && (
                <>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">Documents required</h3>
                  <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                    {p.docs.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Extra details sections */}
              <div className="mt-8 space-y-8">
                {/* Processing time section removed as per request */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Fees & inclusions</h3>
                  <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                    <li>Government and service fees vary by duration and entry type.</li>
                    <li>Our service includes checklist guidance, application filing and updates.</li>
                    <li>Optional add‑ons: travel insurance, dummy tickets and hotel vouchers.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Important notes</h3>
                  <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                    <li>Passport should be valid for at least 6 months at time of application.</li>
                    <li>Overstay fines apply; extend or exit before the final validity date.</li>
                    <li>Rules may change; we’ll confirm latest requirements when you contact us.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">FAQs</h3>
                  <ul className="mt-2 list-disc list-inside text-slate-700 space-y-2">
                    <li><span className="font-medium">Can I extend inside the UAE?</span> Yes, most visit visas can be extended without exit. Categories and nationality rules apply.</li>
                    <li><span className="font-medium">How do I receive my visa?</span> Approved visas are delivered by email. We’ll notify you on WhatsApp too.</li>
                    <li><span className="font-medium">Do I need confirmed tickets?</span> Transit visas require confirmed tickets; visit visas may need itinerary proofs.</li>
                  </ul>
                </div>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">How to apply</h3>
              <ol className="mt-2 list-decimal list-inside text-slate-700 space-y-1">
                {(p.steps || [
                  "Chat with us on WhatsApp to get the checklist",
                  "Share documents for verification",
                  "We submit your application and update you",
                  "Receive your visa via email",
                ]).map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>

              {p.notes && (
                <>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">Important notes</h3>
                  <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                    {p.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </>
              )}

              <div className="mt-6">
                <Link href="/visas/prices/dubai" className="inline-flex items-center rounded-md border border-amber-700 px-5 py-2 text-amber-700 hover:bg-amber-50">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-1"><path d="M20.12 7.78a2 2 0 0 0-2.83 0l-.64.64-1.06-1.06.64-.64a2 2 0 0 0-2.83-2.83l-9.9 9.9a2 2 0 0 0 0 2.83l3.53 3.53a2 2 0 0 0 2.83 0l9.9-9.9a2 2 0 0 0 0-2.83ZM6.88 19.47 3.35 15.94l9.2-9.2 3.53 3.53-9.2 9.2Z"/></svg>
                  View Dubai Prices
                </Link>
              </div>
            </div>
            <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Apply now</h3>
              <p className="mt-2 text-sm text-slate-600">Chat with our visa experts and receive the checklist.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20UAE%20visa." target="_blank" className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700" aria-label="WhatsApp UAE">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.49 0 .15 5.34.15 11.9c0 2.1.55 4.16 1.59 5.97L0 24l6.3-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.06 21.2h-.01A9.3 9.3 0 0 1 7.03 19l-.34-.2-3.73.98 1-3.64-.22-.37A9.3 9.3 0 1 1 12.06 21.2Zm5.1-6.96c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.63.14-.19.28-.73.9-.9 1.09-.17.2-.33.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.2.05-.35-.02-.49-.07-.14-.63-1.52-.87-2.08-.23-.56-.47-.48-.63-.49h-.54c-.18 0-.49.07-.75.35-.26.28-.98.96-.98 2.35s1 2.72 1.14 2.9c.14.19 1.97 3.02 4.78 4.23.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33Z"/></svg>
                </a>
                <a href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20UAE%20visa." target="_blank" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-100" aria-label="WhatsApp India">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.49 0 .15 5.34.15 11.9c0 2.1.55 4.16 1.59 5.97L0 24l6.3-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.06 21.2h-.01A9.3 9.3 0 0 1 7.03 19l-.34-.2-3.73.98 1-3.64-.22-.37A9.3 9.3 0 1 1 12.06 21.2Zm5.1-6.96c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.63.14-.19.28-.73.9-.9 1.09-.17.2-.33.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.2.05-.35-.02-.49-.07-.14-.63-1.52-.87-2.08-.23-.56-.47-.48-.63-.49h-.54c-.18 0-.49.07-.75.35-.26.28-.98.96-.98 2.35s1 2.72 1.14 2.9c.14.19 1.97 3.02 4.78 4.23.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33Z"/></svg>
                </a>
                <Link href="/visas/prices/dubai" className="inline-flex items-center rounded-md border border-amber-700 px-4 py-2 text-amber-700 hover:bg-amber-50">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-1"><path d="M20.12 7.78a2 2 0 0 0-2.83 0l-.64.64-1.06-1.06.64-.64a2 2 0 0 0-2.83-2.83l-9.9 9.9a2 2 0 0 0 0 2.83l3.53 3.53a2 2 0 0 0 2.83 0l9.9-9.9a2 2 0 0 0 0-2.83ZM6.88 19.47 3.35 15.94l9.2-9.2 3.53 3.53-9.2 9.2Z"/></svg>
                  View Dubai Prices
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
