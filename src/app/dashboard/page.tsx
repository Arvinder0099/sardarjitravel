"use client";
export const dynamic = "force-dynamic";
import { useEffect, useRef, useState } from "react";

export default function Dashboard() {
  // Option A: Use 10 static images placed in public/slideshow as 1.jpg ... 10.jpg
  const [cacheBust, setCacheBust] = useState(""); // avoid SSR/client mismatch by setting after mount
  const heroImages = Array.from({ length: 10 }).map((_, idx) =>
    idx === 0 ? `/Slideshow/1.jpg${cacheBust ? `?v=${cacheBust}` : ""}` : `/Slideshow/${idx + 1}.jpg`
  );
  const [slide, setSlide] = useState(0);
  // Disable auto-slide per request; keep images static until user taps dots
  // useEffect(() => {
  //   setCacheBust(String(Date.now()));
  //   const id = setInterval(() => setSlide((i) => (i + 1) % heroImages.length), 5000);
  //   return () => clearInterval(id);
  // }, []);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  // Keep slideshow static; only set cache bust once on mount
  useEffect(() => {
    setCacheBust(String(Date.now()));
  }, []);

  // Auto-scroll testimonials
  useEffect(() => {
    if (paused) return;
    const el = trackRef.current;
    if (!el) return;
    const id = setInterval(() => {
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + el.clientWidth;
      if (next >= max - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[42vh] md:h-[50vh] w-full flex items-center bg-white rounded-xl ring-4 ring-white shadow-lg p-2">
          <img
            src={heroImages[slide]}
            alt={`Slideshow image ${slide + 1}`}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setSlide(idx)}
              className={`h-2.5 w-2.5 rounded-full transition ${idx === slide ? "bg-amber-600" : "bg-white/70"}`}
            />
          ))}
        </div>
      </section>


      {/* Testimonials - auto scroll */}
      <section id="testimonials" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">What our travelers say</h2>
              <p className="mt-2 text-slate-600">Real feedback about our visa approvals, tours and support — unique to Sardar ji.</p>
            </div>
            <div className="hidden sm:block text-sm text-slate-600">Rated <span className="font-semibold text-slate-900">4.9/5</span> overall</div>
          </div>
          <div
            ref={trackRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="mt-8 flex snap-x snap-mandatory overflow-x-auto scroll-smooth gap-6 pr-4"
          >
            {testimonials.map((t) => (
              <figure key={t.name} className="snap-start min-w-[280px] sm:min-w-[360px] lg:min-w-[420px] relative rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
                {/* Decorative icon removed to keep testimonial card clean */}
                <div className="flex items-center gap-1 text-amber-600" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <blockquote className="mt-3 text-slate-800">{t.text}</blockquote>
                <figcaption className="mt-4 text-sm text-slate-600">
                  <span className="font-medium text-slate-900">{t.name}</span> • {t.meta}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const testimonials = [
    { name: "Fatima R.", meta: "Dubai", text: "Got my 60‑day UAE visa approved in less than 24 hours. Seamless and stress‑free." },
    { name: "Vikram P.", meta: "Abu Dhabi", text: "They handled my Schengen appointment and documents end‑to‑end. Very professional." },
    { name: "Sara L.", meta: "Sharjah", text: "WhatsApp support was instant. Flight + hotel bundle was great value." },
    { name: "Jamal A.", meta: "Riyadh", text: "Family visa extension completed without exit. Highly recommend their team." },
    { name: "Emily N.", meta: "London", text: "Tour planning for Dubai was spot on. The itinerary fit our family perfectly." },
    { name: "Omar K.", meta: "Doha", text: "US visa renewal guidance saved me multiple trips. Excellent service." },
  ];
