import Hero from "@/app/components/Hero";

export const metadata = {
  title: "VFS Appointments – Scheduling Support",
  description: "We help you secure VFS appointments and prepare documents for faster, smoother processing.",
};

export default function VfsAppointmentsPage() {
  return (
    <main>
      <Hero
        title="VFS Appointments"
        subtitle="Quick scheduling support for embassies, consulates and VFS Global"
        imageUrl="/visa images/Vfs appointment.jpeg"
        alt="VFS Global appointment"
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold text-slate-900">What we do</h2>
          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Monitor slots and guide you to the earliest available appointment.</li>
            <li>Prepare document checklist specific to the country and visa type.</li>
            <li>Assist with travel insurance, hotel vouchers, and flight itineraries.</li>
            <li>WhatsApp support for rescheduling or follow-ups.</li>
          </ul>

          <h3 className="mt-10 text-xl font-semibold text-slate-900">Information needed</h3>
          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Full name, nationality, and passport copy</li>
            <li>Destination country and visa category (e.g., Schengen visit)</li>
            <li>Preferred city and tentative travel dates</li>
          </ul>

          <div className="mt-10 border-t pt-8">
            <h3 className="text-xl font-semibold text-slate-900">Get Appointment Help</h3>
            <p className="mt-2 text-slate-700">Message us to start the scheduling process.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20need%20help%20with%20a%20VFS%20appointment."
                target="_blank"
                className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
              >
                WhatsApp UAE
              </a>
              <a
                href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20need%20help%20with%20a%20VFS%20appointment."
                target="_blank"
                className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-100"
              >
                WhatsApp India
              </a>
              <a
                href="mailto:sardarjitravelsuae@gmail.com?subject=VFS%20Appointment%20Support"
                className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-100"
              >
                Email: sardarjitravelsuae@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
