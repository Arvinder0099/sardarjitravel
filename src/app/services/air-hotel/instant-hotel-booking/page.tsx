import Hero from "@/app/components/Hero";

export const metadata = {
  title: "Instant Hotel Booking & Confirmation – Sardar ji Travel & Tourism",
  description: "Instant hotel confirmation vouchers for visa applications worldwide. Get flight + hotel proof issued fast.",
};

export default function InstantHotelBookingPage() {
  return (
    <main>
      <Hero
        title="Instant Hotel Booking & Confirmation"
        subtitle="Visa application hotel vouchers issued instantly — worldwide"
        imageUrl="/visa images/flight and hotel booking.jpg"
        alt="Flight and hotel booking"
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold text-slate-900">What you get</h2>
          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Confirmed hotel voucher with your name, dates, and booking reference (PDF).</li>
            <li>Optional flight itinerary (dummy/provisional) matching your visa dates.</li>
            <li>Coverage for Schengen, UK, USA, GCC, and worldwide visa applications.</li>
            <li>Support by WhatsApp for updates or corrections.</li>
          </ul>

          <h3 className="mt-10 text-xl font-semibold text-slate-900">How it works</h3>
          <ol className="mt-4 list-decimal pl-6 text-slate-700 space-y-2">
            <li>Share travel dates, destination city, and full name (as per passport).</li>
            <li>We issue hotel confirmation instantly and send by email/WhatsApp.</li>
            <li>Need flight itinerary too? We provide matching itinerary on request.</li>
          </ol>

          <div className="mt-10 border-t pt-8">
            <h3 className="text-xl font-semibold text-slate-900">Contact & Booking</h3>
            <p className="mt-2 text-slate-700">Reach us for instant issuance via WhatsApp or email.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20need%20instant%20hotel%20booking%20confirmation."
                target="_blank"
                className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
              >
                WhatsApp UAE
              </a>
              <a
                href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20need%20instant%20hotel%20booking%20confirmation."
                target="_blank"
                className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-100"
              >
                WhatsApp India
              </a>
              <a
                href="mailto:info@sardarjitravel.ae?subject=Instant%20Hotel%20Booking%20Confirmation"
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
