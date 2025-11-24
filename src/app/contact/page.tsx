export const dynamic = "force-dynamic";

export const metadata = {
  title: "Contact Sardarji Travel & Tourism LLC Dubai | Get in Touch",
  description: "Reach out to Sardarji Travel & Tourism LLC in Dubai for inquiries, bookings, and travel assistance. Your journey starts with us!",
};

import Hero from "@/app/(components)/Hero";

export default function ContactPage() {
  return (
    <main>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our travel experts"
        imageUrl="/admin-hero/contact-hero.jpeg"
        alt="Contact Sardarji Travel"
        imageHeightClass="h-64 sm:h-80 md:h-[460px]"
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h1 className="text-3xl font-bold text-slate-900">Contact Sardarji Travel & Tourism LLC</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            We're here to help you with all your travel and visa needs. Reach out to us via phone, email, or WhatsApp, and our team will respond promptly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Contact Information */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Office Address</h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">Sardarji Travel & Tourism LLC</p>
                  <p>Office No B10339, Plot No 94-0</p>
                  <p>Al Goze Third, Dubai, UAE</p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="font-semibold text-slate-900 mb-2">Phone</p>
                  <a href="tel:+971588448225" className="text-amber-600 hover:text-amber-700 font-semibold">
                    +971 588 448 225 (UAE)
                  </a>
                  <br />
                  <a href="tel:+918196904340" className="text-amber-600 hover:text-amber-700 font-semibold">
                    +91 81969 04340 (India)
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="font-semibold text-slate-900 mb-2">Email</p>
                  <a href="mailto:info@sardarjitravel.ae" className="text-amber-600 hover:text-amber-700 font-semibold">
                    info@sardarjitravel.ae
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="font-semibold text-slate-900 mb-3">Quick Contact</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://wa.me/971588448225?text=Hi%20Sardarji%2C%20I%20need%20visa%20assistance."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm text-white hover:bg-green-700"
                    >
                      WhatsApp UAE
                    </a>
                    <a
                      href="https://wa.me/918196904340?text=Hi%20Sardarji%2C%20I%20need%20visa%20assistance."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm text-white hover:bg-green-700"
                    >
                      WhatsApp India
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours & Services */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Office Hours</h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">Saturday - Thursday</p>
                  <p>09:00 AM - 06:00 PM (GST)</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Friday</p>
                  <p>09:00 AM - 01:00 PM (GST)</p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="font-semibold text-slate-900 mb-3">Our Services</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Dubai & UAE Visas</li>
                    <li>Visit Visas Worldwide</li>
                    <li>Flights & Hotels</li>
                    <li>Tour Packages</li>
                    <li>Travel Insurance</li>
                    <li>VFS Appointments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border border-amber-200">
            <h2 className="text-2xl font-semibold text-slate-900">Need Immediate Assistance?</h2>
            <p className="mt-2 text-slate-700">
              Our team is available to help you 24/7 via WhatsApp or phone. Don't hesitate to reach out!
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://wa.me/971588448225?text=Hi%20Sardarji%2C%20I%20need%20visa%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+971588448225"
                className="inline-flex items-center rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
