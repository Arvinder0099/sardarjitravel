import Hero from "..\..\..\/components/Hero";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Travel Insurance – Schengen & Worldwide Coverage",
  description: "Issue compliant travel/medical insurance for Schengen, UK, USA, GCC and worldwide trips. Fast processing.",
};

export default function TravelInsurancePage() {
  return (
    <main>
      <Hero
        title="Travel Insurance / Medical Insurance"
        subtitle="Schengen-compliant and worldwide plans issued fast"
        imageUrl="/visa images/Travel Insurance.jpeg"
        alt="Travel Insurance"
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold text-slate-900">Coverage & Benefits</h2>
          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Schengen-compliant coverage limits and policy wording.</li>
            <li>Medical emergencies, hospitalization, and repatriation.</li>
            <li>Trip dates aligned to your itinerary and visa appointment.</li>
            <li>Instant policy issuance and PDF delivered by email/WhatsApp.</li>
          </ul>

          <h3 className="mt-10 text-xl font-semibold text-slate-900">Documents required</h3>
          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Passport copy</li>
            <li>Travel dates and destination countries</li>
            <li>Applicant full name, date of birth, and contact email</li>
          </ul>

          <div className="mt-10 border-t pt-8">
            <h3 className="text-xl font-semibold text-slate-900">Issue Your Policy</h3>
            <p className="mt-2 text-slate-700">Contact us and we will issue the right plan for your trip.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20need%20Travel%20Insurance%20for%20my%20visa%20application."
                target="_blank"
                className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
              >
                WhatsApp UAE
              </a>
              <a
                href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20need%20Travel%20Insurance%20for%20my%20visa%20application."
                target="_blank"
                className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-100"
              >
                WhatsApp India
              </a>
              <a
                href="mailto:info@sardarjitravel.ae?subject=Travel%20Insurance%20Request"
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
