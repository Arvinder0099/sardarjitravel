import Link from "next/link";

const POSTS: Record<string, { title: string; body: string; date: string }> = {
  "uae-visa-timelines-2025": {
    title: "UAE Visit Visa Timelines in 2025",
    date: "2025-09-01",
    body:
      "Approvals have remained fast for many nationalities. Planning your travel early and keeping your documents ready helps accelerate approvals.",
  },
  "schengen-appointment-tips": {
    title: "Schengen Appointment Tips",
    date: "2025-08-20",
    body:
      "Choose the member state of main stay, prepare complete proofs, and consider alternate centers for earlier availability.",
  },
  "us-visa-renewal-guide": {
    title: "US Visa Renewal Guide",
    date: "2025-08-05",
    body:
      "Check if you qualify for interview waiver. Fill DS‑160 carefully and keep your prior visa details handy.",
  },
};

// generateStaticParams disabled to prevent static prerendering

export default function NewsPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const p = POSTS[slug];
  if (!p) {
    return (
      <main>
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <h1 className="text-2xl font-semibold text-slate-900">Post not found</h1>
            <Link href="/news" className="text-amber-700 underline underline-offset-4">
              Back to News
            </Link>
          </div>
        </section>
      </main>
    );
  }
  return (
    <main>
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <nav className="text-sm text-slate-600">
            <Link href="/news" className="hover:text-slate-900">
              News
            </Link>{" "}
            <span>/</span>{" "}
            <span className="text-slate-900">{p.title}</span>
          </nav>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-slate-900">{p.title}</h1>
          <div className="text-xs text-slate-500">{new Date(p.date).toLocaleDateString()}</div>
          <article className="prose prose-slate max-w-none mt-6">
            <p>{p.body}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
