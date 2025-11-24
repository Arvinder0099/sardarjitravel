import Hero from "@/app/(components)/Hero";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Exclusive Travel Packages | Sardarji Travel Dubai",
  description: "Check out our latest travel packages and offers. Sardarji Travel & Tourism LLC brings you affordable and unforgettable trips from Dubai.",
};

export default function MoreUsefulServicesPage() {
  return (
    <main>
      <Hero
        title="More Useful Services"
        subtitle="Extra travel support you can count on"
        imageUrl="/visa images/Travel Insurance.jpeg"
        alt="More travel services"
        imageHeightClass="h-64 sm:h-80 md:h-[460px]"
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold text-slate-900">Services</h2>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-2">
            <li>Travel insurance (single trip and multi‑trip)</li>
            <li>Itinerary planning and destination guidance</li>
            <li>Document checks for visa applications</li>
            <li>Airport assistance (on request)</li>
            <li>Forex guidance and tips for travel budgeting</li>
          </ul>

          <div className="mt-10 border-t pt-8">
            <h3 className="text-xl font-semibold text-slate-900">Talk to us</h3>
            <p className="mt-2 text-slate-700">Share what you need and we’ll suggest the best options.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20want%20More%20Useful%20Travel%20Services.%20Please%20assist."
                target="_blank"
                className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
              >
                WhatsApp UAE
              </a>
              <a
                href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20want%20More%20Useful%20Travel%20Services.%20Please%20assist."
                target="_blank"
                className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-100"
              >
                WhatsApp India
              </a>
              <a
                href="mailto:info@sardarjitravel.ae?subject=More%20Useful%20Services"
                className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-100"
              >
                Email: info@sardarjitravel.ae
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}