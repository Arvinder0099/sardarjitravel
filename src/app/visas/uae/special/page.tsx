import Hero from "@/app/components/Hero";

export const metadata = {
  title: "Special Dubai Visa Services",
  description: "Change/renew inside UAE, without-exit options, expedited processing and guided support.",
};

export default function SpecialDubaiVisaPage() {
  return (
    <main>
      <Hero
        title="Special Dubai Visa Services"
        subtitle="Change / Renew inside UAE • Without Exit • Fast & Guided Processing"
        imageUrl="/visa images/dubai.jpeg"
        alt="Dubai visa services"
        imageHeightClass="h-64 sm:h-80 md:h-[460px]"
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
    
          <p className="mt-3 text-slate-700">
            We provide end-to-end assistance for special Dubai/UAE visa requirements. Whether you need to
            change or renew your visa inside the UAE, extend your stay without exit, or expedite processing,
            we guide you through every step with clear instructions and reliable support.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-slate-900">What we offer</h3>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-2">
            <li>Visa change / renewal inside UAE (no need to exit in eligible categories)</li>
            <li>Without-exit extension support (subject to current regulations)</li>
            <li>Short-term and long-term visit options (30 / 60 / 90 days and more)</li>
            <li>Multiple-entry options where available</li>
            <li>Document preparation and submission guidance</li>
            <li>Optional add‑ons: dummy tickets, hotel vouchers, and travel insurance</li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-slate-900">Documents required</h3>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-2">
            <li>Passport copy (clear scan)</li>
            <li>Recent photograph (white background preferred)</li>
            <li>Current visa copy / status (if inside UAE)</li>
            <li>Contact details and basic travel plan</li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-slate-900">Processing time & notes</h3>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-2">
            <li>Processing times vary by category and authority workload</li>
            <li>Government rules and fees may change without prior notice</li>
            <li>We provide transparent guidance on current options before you proceed</li>
          </ul>

          <div className="mt-10 border-t pt-8">
            <h3 className="text-xl font-semibold text-slate-900">Get Special Visa Support</h3>
            <p className="mt-2 text-slate-700">Message us with your current status and the service you need.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20need%20Special%20Dubai%20Visa%20Services.%20Please%20guide."
                target="_blank"
                className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
              >
                WhatsApp UAE
              </a>
              <a
                href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20need%20Special%20Dubai%20Visa%20Services.%20Please%20guide."
                target="_blank"
                className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-100"
              >
                WhatsApp India
              </a>
              <a
                href="mailto:info@sardarjitravel.ae?subject=Special%20Dubai%20Visa%20Services"
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
