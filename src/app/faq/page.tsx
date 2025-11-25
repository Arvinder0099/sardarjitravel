export const runtime = "nodejs";

const faqs = [
  {
    q: "How fast can I get a UAE visit visa?",
    a: "For many nationalities, approvals are possible within 24–48 hours. Timelines depend on immigration queue and your documents.",
  },
  {
    q: "Can I extend my UAE visa without exit?",
    a: "Yes, we can arrange extensions for 30/60/90 days without exit in many cases.",
  },
  {
    q: "Do you help with Schengen/USA/UK appointments?",
    a: "Yes, we assist with appointment booking, documentation and complete guidance.",
  },
  {
    q: "How do I start?",
    a: "Click WhatsApp UAE/India from any page or call +971 588 448 225. We will share the checklist and timeline.",
  },
];

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main>
      <script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">Frequently Asked Questions</h1>
          <div className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-slate-900 font-medium">
                  {f.q}
                  <span className="text-slate-400 group-open:rotate-180 transition">▾</span>
                </summary>
                <p className="mt-3 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
