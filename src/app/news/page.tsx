import Link from "next/link";

const posts = [
  {
    slug: "uae-visa-timelines-2025",
    title: "UAE Visit Visa Timelines in 2025",
    excerpt: "What to expect for 30/60/90 day visas this season and tips to get approvals faster.",
    date: "2025-09-01",
  },
  {
    slug: "schengen-appointment-tips",
    title: "Schengen Appointment Tips",
    excerpt: "Getting earlier slots and preparing the right documents for higher success.",
    date: "2025-08-20",
  },
  {
    slug: "us-visa-renewal-guide",
    title: "US Visa Renewal Guide",
    excerpt: "Who qualifies for renewal without interview and how to prepare your DS‑160.",
    date: "2025-08-05",
  },
];

export default function NewsIndex() {
  return (
    <main>
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-end justify-between">
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">News & Updates</h1>
            <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">RSS</Link>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <Link key={p.slug} href={`/news/${p.slug}`} className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow">
                <div className="text-xs text-slate-500">{new Date(p.date).toLocaleDateString()}</div>
                <h2 className="mt-1 text-lg font-semibold text-slate-900">{p.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                <div className="mt-3 text-amber-700 underline underline-offset-4">Read more</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
