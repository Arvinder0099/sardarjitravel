"use client";
export const dynamic = "force-dynamic";
// Force rebuild with images - Nov 25, 2025

import { useEffect, useRef, useState, Fragment } from "react";

export default function Home() {
  const waRef = useRef<HTMLDivElement | null>(null);
  const [waOpen, setWaOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);
  const [sidebarDark, setSidebarDark] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'hero' | 'videos' | 'testimonials'>('hero');

  const heroSlides = [
    { type: "image", src: "/Slideshow/1.jpg" },
    { type: "image", src: "/Slideshow/2.jpg" },
    { type: "image", src: "/Slideshow/3.jpg" },
    { type: "image", src: "/Slideshow/4.jpg" },
    { type: "image", src: "/Slideshow/5.jpg" },
    { type: "image", src: "/Slideshow/6.jpg" },
    { type: "image", src: "/Slideshow/7.jpg" },
    { type: "image", src: "/Slideshow/8.jpg" },
    { type: "image", src: "/Slideshow/9.jpg" },
    { type: "image", src: "/Slideshow/10.jpg" },
    { type: "image", src: "/Slideshow/11.jpg" },
    { type: "image", src: "/Slideshow/12.jpg" },
  ];
  const [slide, setSlide] = useState(0);

  // Auto-advance slideshow continuously every 6s
  useEffect(() => {
    const id = setInterval(() => setSlide((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, [heroSlides.length]);

  const prevSlide = () => setSlide((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setSlide((i) => (i + 1) % heroSlides.length);

  const heroCaptions: { h: string; p: string }[] = [
    { h: "Desert Safari Adventure", p: "Dune bashing, camel ride, dinner & live shows" },
    { h: "Burj Khalifa – At the Top", p: "Prime and non‑prime tickets, instant confirmation" },
    { h: "Dubai City Tour", p: "Old & new Dubai highlights with photo stops" },
    { h: "Dhow & Marina Cruise", p: "Dinner cruises with skyline views" },
    { h: "Museum of the Future", p: "Immersive exhibits on innovation & AI" },
    { h: "Abu Dhabi City Tour", p: "Grand Mosque, Qasr Al Watan, Corniche" },
    { h: "Worldwide Visas", p: "UK, USA, Schengen, Asia, GCC and more" },
    { h: "Air Tickets & Hotels", p: "Dummy tickets & instant hotel confirmations" },
    { h: "Travel Insurance", p: "Schengen‑compliant policies issued fast" },
    { h: "VFS Appointments", p: "Quick scheduling assistance worldwide" },
  ];
  // Close WhatsApp popup when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!waRef.current) return;
      if (waRef.current.contains(e.target as Node)) return;
      setWaOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
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

  const testimonials = [
    { name: "Fatima R.", meta: "Dubai", text: "Got my 60‑day UAE visa approved in less than 24 hours. Seamless and stress‑free." },
    { name: "Vikram P.", meta: "Abu Dhabi", text: "They handled my Schengen appointment and documents end‑to‑end. Very professional." },
    { name: "Sara L.", meta: "Sharjah", text: "WhatsApp support was instant. Flight + hotel bundle was great value." },
    { name: "Jamal A.", meta: "Riyadh", text: "Family visa extension completed without exit. Highly recommend their team." },
    { name: "Emily N.", meta: "London", text: "Tour planning for Dubai was spot on. The itinerary fit our family perfectly." },
    { name: "Omar K.", meta: "Doha", text: "US visa renewal guidance saved me multiple trips. Excellent service." },
  ];

  useEffect(() => {
    const ids: Array<'hero' | 'videos' | 'testimonials'> = ['hero', 'videos', 'testimonials'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id as 'hero' | 'videos' | 'testimonials');
      },
      { threshold: [0.3, 0.5, 0.7] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="grid grid-cols-1 gap-6 px-0 lg:px-0 py-6">

        <div>
          {/* Hero */}
          <section id="hero" className="relative isolate h-[60vh] md:h-[68vh] flex items-center justify-center mb-6">
            <div className="w-full">
              <div className="relative w-full h-[60vh] md:h-[68vh] overflow-hidden rounded-xl ring-4 ring-white shadow-lg bg-white p-1">
                <div className="relative h-full w-full">
                  {heroSlides.map((s, i) => (
                    <img
                      key={s.src}
                      src={s.src}
                      alt={`Slideshow image ${i + 1}`}
                      className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                </div>
                {/* Auto-slideshow enabled; navigation buttons removed */}
              </div>

            </div>
          </section>
        
        <section id="shortcuts" className="py-16 bg白white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tours */}
              <a href="/tours" className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white block group" aria-label="Go to Tours">
                <div className="relative">
                  <img
                    src="/visa images/dubai tour thumbnail.jpeg"
                    alt="Dubai Tours"
                    className="h-40 md:h-48 w-full object-cover"
                    width="1200"
                    height="800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-base font-semibold text-slate-900">Dubai Tours</h3>
                </div>
              </a>
            
              {/* All Visas */}
              <a href="/visas" className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white block group" aria-label="Go to All Visas">
                <div className="relative">
                  <img
                    src="/home all visa/home all visa.jpeg"
                    alt="All Visas"
                    className="h-40 md:h-48 w-full object-cover"
                    width="1200"
                    height="800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-base font-semibold text-slate-900">All Visas</h3>
                </div>
              </a>
            
              {/* Air Tickets & Hotels */}
              <a href="/dummy-bookings" className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white block group" aria-label="Go to Air Tickets & Hotels">
                <div className="relative">
                  <img
                    src="/visa images/dummy ticket.jpg"
                    alt="Air Tickets & Hotels"
                    className="h-40 md:h-48 w-full object-cover"
                    width="1200"
                    height="800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-base font-semibold text-slate-900">Air Tickets & Hotels</h3>
                </div>
              </a>

              {/* Travel Insurance */}
              <a href="/services/air-hotel/travel-insurance" className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white block group" aria-label="Go to Travel Insurance">
                <div className="relative">
                  <img
                    src="/visa images/Travel Insurance.jpeg"
                    alt="Travel Insurance"
                    className="h-40 md:h-48 w-full object-cover"
                    width="1200"
                    height="800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-base font-semibold text-slate-900">Travel Insurance</h3>
                </div>
              </a>
            </div>
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
                  {/* Removed decorative left-side quote icon overlay from testimonial cards */}
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
    
        {/* Floating WhatsApp - collapsible */}
        <div className="fixed bottom-6 right-6 z-50" ref={waRef}>
          {waOpen && (
            <div className="mb-3 w-64 rounded-lg border border-slate-200 bg-white p-3 shadow-2xl">
              <div className="text-xs font-medium text-slate-500 mb-2">Chat on WhatsApp</div>
              <div className="space-y-2">
                <a
                  href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20need%20assistance%20with%20visa%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50"
                >
                  <span>WhatsApp UAE</span>
                  <span className="text-slate-500 text-xs">+971 588 448 225</span>
                </a>
                <a
                  href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20need%20assistance%20with%20visa%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50"
                >
                  <span>WhatsApp India</span>
                  <span className="text-slate-500 text-xs">+918196904340</span>
                </a>
              </div>
            </div>
          )}
          <button
            onClick={() => setWaOpen((v) => !v)}
            aria-expanded={waOpen}
            aria-label="Open WhatsApp options"
            className="inline-flex items-center gap-1 rounded-full bg-green-600 px-3 py-2 text-sm text-white shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.49 0 .15 5.34.15 11.9c0 2.1.55 4.16 1.59 5.97L0 24l6.3-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.06 21.2h-.01A9.3 9.3 0 0 1 7.03 19l-.34-.2-3.73.98 1-3.64-.22-.37A9.3 9.3 0 1 1 12.06 21.2Zm5.1-6.96c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.63.14-.19.28-.73.9-.9 1.09-.17.2-.33.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.2.05-.35-.02-.49-.07-.14-.63-1.52-.87-2.08-.23-.56-.47-.48-.63-.49h-.54c-.18 0-.49.07-.75.35-.26.28-.98.96-.98 2.35s1 2.72 1.14 2.9c.14.19 1.97 3.02 4.78 4.23.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33Z"/></svg>
            <span>WhatsApp</span>
          </button>
        </div>
    </div>
  </div>
</main>
  );
}
