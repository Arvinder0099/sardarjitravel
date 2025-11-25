import Link from "next/link";
import Hero from "@/app/components/Hero";
import { Tag } from "lucide-react";

export const metadata = {
  title: "Dubai UAE Visas – Sardar Ji Travels",
  description:
    "Transit, 30/60/90 days, multiple entry visas, extensions, golden visa, family & residence services.",
};

export default function UAEVisasPage() {
  const wappUAE = "https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20UAE%20visa.";
  const wappIN = "https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20apply%20for%20a%20UAE%20visa.";
  const links = [
    { t: "Dubai Transit Visa Service", slug: "transit-visa" },
    { t: "UAE Visit Visa Extension Without Exit", slug: "visit-visa-extension-without-exit" },
    { t: "3 Months UAE Visa", slug: "3-months" },
    { t: "30 Days UAE Visa", slug: "30-days" },
    { t: "60 Days UAE Visa", slug: "60-days" },
    { t: "30 Days Multiple Entry UAE Visa", slug: "30-multiple-entry" },
    { t: "60 Days Multiple Entry UAE Visa", slug: "60-multiple-entry" },
    { t: "14 Days Dubai UAE Visa", slug: "14-days" },
    
    { t: "UAE Family & Residence Visa", slug: "family-residence" },
    { t: "5 Years UAE Tourist Visa", slug: "5-year-tourist" },
    { t: "Golden Visa UAE Service", slug: "golden-visa" },
    { t: "Dubai UAE Visa Extension, Change & Renew", slug: "change-renew" },
  ];
  const localThumbs: Record<string, string> = {
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
    // no local file for 5-year-tourist; will fall back to external or default
  };
  const thumbs: Record<string, string> = {
    "transit-visa": "https://ext.same-assets.com/1035752913/984413966.jpeg",
    "visit-visa-extension-without-exit": "https://ext.same-assets.com/1035752913/260756484.jpeg",
    "3-months": "https://ext.same-assets.com/1035752913/1509137559.jpeg",
    "30-days": "https://ext.same-assets.com/1035752913/1073896206.jpeg",
    "60-days": "https://ext.same-assets.com/1035752913/4230331401.jpeg",
    "30-multiple-entry": "https://ext.same-assets.com/1035752913/4253814837.jpeg",
    "60-multiple-entry": "https://ext.same-assets.com/1035752913/1440545848.jpeg",
    "14-days": "https://ext.same-assets.com/1035752913/2221328244.jpeg",
    "family-residence": "https://ext.same-assets.com/1035752913/2174154671.jpeg",
    "5-year-tourist": "https://ext.same-assets.com/1035752913/333604389.jpeg",
    "golden-visa": "https://ext.same-assets.com/1035752913/1863783108.jpeg",
    "change-renew": "https://ext.same-assets.com/1035752913/260756484.jpeg",
  };
  return (
    <main>
      <Hero
        title="Dubai UAE Visas"
        subtitle="30, 60, 90 days, multiple entry, extensions, 5-year tourist, family & residence"
        imageUrl="/visa images/dubai thumbnail.jpeg"
        alt="Dubai UAE skyline"
      />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {links.map((i) => (
              <Link key={i.slug} href={`/visas/uae/${i.slug}`} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow overflow-hidden">
                <div className="flex items-center gap-4">
                  <img
                    src={localThumbs[i.slug] ? encodeURI(`/visa images/${localThumbs[i.slug]}`) : (thumbs[i.slug] ?? "/visa images/dubai thumbnail.jpeg")}
                    alt={i.t}
                    className="w-16 h-16 object-cover rounded-md border border-slate-200"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-slate-900 break-words">{i.t}</h3>
                    <p className="mt-1 text-sm md:text-base text-slate-700 break-words">Learn more about documents and steps.</p>
                    <div className="mt-2 text-amber-700 underline underline-offset-4">View</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
              <ol className="mt-3 space-y-3 list-decimal list-inside text-slate-700">
                <li>WhatsApp or call us and share your passport copy.</li>
                <li>We confirm eligibility, documents, and exact timeline.</li>
                <li>We file your visa and keep you updated step-by-step.</li>
                <li>Receive your visa via email and enjoy your trip.</li>
              </ol>
            </div>
            <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Ready to apply?</h3>
              <p className="mt-2 text-sm text-slate-600">Chat with our visa experts now.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={wappUAE} target="_blank" className="inline-flex items-center rounded-md bg-green-600 px-5 py-3 text-white hover:bg-green-700" aria-label="WhatsApp UAE">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.49 0 .15 5.34.15 11.9c0 2.1.55 4.16 1.59 5.97L0 24l6.3-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.06 21.2h-.01A9.3 9.3 0 0 1 7.03 19l-.34-.2-3.73.98 1-3.64-.22-.37A9.3 9.3 0 1 1 12.06 21.2Zm5.1-6.96c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.63.14-.19.28-.73.9-.9 1.09-.17.2-.33.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.2.05-.35-.02-.49-.07-.14-.63-1.52-.87-2.08-.23-.56-.47-.48-.63-.49h-.54c-.18 0-.49.07-.75.35-.26.28-.98.96-.98 2.35s1 2.72 1.14 2.9c.14.19 1.97 3.02 4.78 4.23.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33Z"/></svg>
                </a>
                <a href="tel:+971588448225" className="inline-flex items-center rounded-md bg-amber-600 px-5 py-3 text-white hover:bg-amber-700">Call UAE</a>
                <a href="mailto:sardarjitravelsuae@gmail.com" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-slate-800 hover:bg-slate-100">Email</a>
                <Link href="/visas/prices/dubai" className="inline-flex items-center rounded-md border border-amber-700 px-5 py-3 text-amber-700 hover:bg-amber-50">
                  <Tag size={16} className="mr-1.5" />
                  View Dubai Prices
                </Link>
              </div>
            </aside>
          </div>

          <div className="mt-12">
            <Link href="/visas/prices/dubai" className="inline-flex items-center rounded-md border border-amber-700 px-4 py-2 text-amber-700 hover:bg-amber-50">
              <Tag size={14} className="mr-1.5" />
              View Dubai Prices
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
