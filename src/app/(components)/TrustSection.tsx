export default function TrustSection() {
  const logos = [
    { name: "IATA", text: "IATA", color: "#0d9488" },
    { name: "Dubai Tourism", text: "Dubai Tourism", color: "#1d4ed8" },
    { name: "Chamber", text: "Dubai Chamber", color: "#0f766e" },
    { name: "ISO", text: "ISO Certified", color: "#b45309" },
  ];
  return (
    <section aria-label="Trust and Certifications" className="bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center text-sm text-slate-500">Trusted by travelers and partners</div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {logos.map((l) => (
            <div
              key={l.name}
              className="flex items-center justify-center rounded-md border border-slate-200 bg-slate-50 py-4 text-slate-700"
              style={{ color: l.color }}
            >
              <span className="font-medium">{l.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
