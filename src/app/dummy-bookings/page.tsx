import Hero from "@/app/(components)/Hero";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Dummy Air Tickets & Hotel Bookings",
  description: "Visa support documents: confirmed-looking tickets and hotel vouchers for applications.",
};

export default function DummyBookingsPage() {
  return (
    <main>
      <Hero
        title="Dummy Air Tickets & Hotel Bookings"
        subtitle="Visa support documents • Ticket and hotel proof"
        imageUrl="/visa images/flight and hotel booking.jpg"
        alt="Dummy flight tickets and hotel bookings"
        imageHeightClass="h-64 sm:h-80 md:h-[460px]"
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold text-slate-900">About this service</h2>
          <p className="mt-3 text-slate-700">
            We provide visa support documents such as dummy air tickets (confirmed‑looking itineraries) and
            hotel vouchers when required for applications. These are designed to meet typical embassy/consulate
            checklist expectations.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-slate-900">What you receive</h3>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-2">
            <li>Ticket itinerary with PNR format (non‑travel proof)</li>
            <li>Hotel voucher with property details and dates</li>
            <li>Tailored to your travel window and destination</li>
            <li>Delivered quickly via WhatsApp and email</li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-slate-900">Notes</h3>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-2">
            <li>These are support documents for visa application purposes</li>
            <li>They are not actual paid tickets or guaranteed reservations</li>
            <li>Use only as per your consulate/embassy guidance</li>
          </ul>

          <div className="mt-10 border-t pt-8">
            <h3 className="text-xl font-semibold text-slate-900">Request Dummy Documents</h3>
            <p className="mt-2 text-slate-700">Share your travel dates and destination to prepare suitable proofs.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20need%20Dummy%20Air%20Tickets%20%26%20Hotel%20Bookings%20for%20visa%20application."
                target="_blank"
                className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
              >
                WhatsApp UAE
              </a>
              <a
                href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20need%20Dummy%20Air%20Tickets%20%26%20Hotel%20Bookings%20for%20visa%20application."
                target="_blank"
                className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-100"
              >
                WhatsApp India
              </a>
              <a
                href="mailto:info@sardarjitravel.ae?subject=Dummy%20Air%20Tickets%20%26%20Hotel%20Bookings"
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