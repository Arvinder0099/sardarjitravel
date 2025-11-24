"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { WORLDWIDE_COUNTRIES } from "@/lib/worldwide";

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const [uaeOpen, setUaeOpen] = useState(false);
  const [worldOpen, setWorldOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [gccOpen, setGccOpen] = useState(false);
  const [schengenOpen, setSchengenOpen] = useState(false);
  const [asiaOpen, setAsiaOpen] = useState(false);
  const [africaOpen, setAfricaOpen] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(e.target as Node)) {
        setDesktopMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="w-full max-w-none mx-auto px-4 min-h-20 h-auto py-2 flex items-center justify-between">
        <Link href="/" className="flex-1 min-w-0 sm:max-w-[60vw] md:max-w-[50vw] lg:max-w-[45vw] flex items-center gap-3">
          <img src="/logo.jpg" alt="Sardar ji Travel & Tourism LLC" width={80} height={80} className="shrink-0" />
          <span className="flex flex-col leading-tight">
            <span className="text-sm md:text-base font-semibold tracking-tight text-slate-900">Sardar ji Travel & Tourism LLC</span>
            <span className="text-xs md:text-sm font-semibold text-slate-900">Dubai</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4 text-sm text-slate-700 flex-nowrap">
          <Link href="/" prefetch={false} className="hover:text-slate-900">Home</Link>
          <div className="relative group">
            <button className="hover:text-slate-900" onClick={() => setDesktopMenuOpen((v) => !v)} aria-expanded={desktopMenuOpen}>Visas & Services</button>
            {desktopMenuOpen && (
              <div ref={desktopMenuRef} className="absolute left-1/2 -translate-x-[52%] top-full mt-3 w-[95vw] max-w-6xl rounded-lg border border-slate-200 bg-white p-6 shadow-xl">

              <div className="grid grid-cols-5 gap-6 text-left" onClick={(e) => { const link = (e.target as HTMLElement).closest('a'); if (link) setDesktopMenuOpen(false); }}>
                {/* Column: Dubai UAE Visas */}
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">Dubai UAE Visas</div>
                  <ul className="mt-3 space-y-2 text-slate-800">
                    <li><Link href="/visas/uae#durations" className="hover:text-amber-700">30 / 60 / 90 Days</Link></li>
                    <li><Link href="/visas/uae#multiple" className="hover:text-amber-700">Multiple Entry</Link></li>
                    <li><Link href="/visas/uae#extension" className="hover:text-amber-700">Visa Extension</Link></li>
                    <li><Link href="/visas/uae#5year" className="hover:text-amber-700">5-Year Tourist Visa</Link></li>
                    <li><Link href="/visas/uae#family" className="hover:text-amber-700">Family & Residence</Link></li>
                    <li><Link href="/visas/prices/dubai" className="hover:text-amber-700">Dubai Visa Prices</Link></li>
                  </ul>
                </div>
                {/* Column: Worldwide Visit Visas */}
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">Worldwide Visit Visas</div>
                  <ul className="mt-3 space-y-2 text-slate-800">
                    <li><Link href="/visas/prices/worldwide" className="hover:text-amber-700">Worldwide Visa Prices</Link></li>
                    {WORLDWIDE_COUNTRIES.map((c) => (
                      <li key={c.slug}>
                        <Link href={`/visas/country/${c.slug}`} prefetch={false} className="hover:text-amber-700">{c.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Column: Gulf / GCC Visas */}
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">Gulf / GCC Visas</div>
                  <ul className="mt-3 space-y-2 text-slate-800">
                    <li><Link href="/visas/saudi" className="hover:text-amber-700">Saudi Visa Services</Link></li>
                    <li><Link href="/visas/bahrain" className="hover:text-amber-700">Bahrain Visit Visa</Link></li>
                    <li><Link href="/visas/qatar" className="hover:text-amber-700">Qatar Visit Visa</Link></li>
                    <li><Link href="/visas/prices/gcc" className="hover:text-amber-700">Gulf / GCC Visa Prices</Link></li>
                  </ul>
                </div>
                {/* Column: Regions (Schengen / Asia / Africa) */}
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">Regions</div>
                  <ul className="mt-3 space-y-2 text-slate-800">
                    <li><Link href="/visas/schengen" className="hover:text-amber-700">Schengen</Link></li>
                    <li><Link href="/visas/asia" className="hover:text-amber-700">Asia</Link></li>
                    <li><Link href="/visas/prices/schengen" className="hover:text-amber-700">Schengen Visa Prices</Link></li>
                  </ul>
                </div>
                {/* More Services column removed as requested */}
              </div>
            </div>
            )}
          </div>
          <Link href="/visas" prefetch={false} className="hover:text-slate-900">All Visas</Link>
          <Link href="/tours" prefetch={false} className="hover:text-slate-900">Tours</Link>
          <Link href="/faq" prefetch={false} className="hover:text-slate-900">FAQ</Link>
          <Link href="#contact" className="hover:text-slate-900">Contact</Link>
          <div className="flex flex-col items-end leading-tight">
            <a href="tel:+971588448225" className="inline-flex items-center rounded-md bg-amber-600 px-4 py-2 text-white shadow hover:bg-amber-700 whitespace-nowrap shrink-0">Call +971 588 448 225</a>
            <a href="tel:+918196904340" className="mt-1 inline-flex items-center rounded-md bg-amber-600 px-4 py-2 text-white shadow hover:bg-amber-700 whitespace-nowrap shrink-0">India +918196904340</a>
          </div>
        </nav>

        {/* Mobile button to open right-side drawer */}
        <button
          className="md:hidden inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-800 shadow-sm hover:bg-slate-50"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/></svg>
          Menu
        </button>
      </div>

      {/* Mobile Right-side Options Drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[70]">
          {/* Backdrop */}
          <button
            aria-label="Close menu backdrop"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <div className="fixed right-0 top-0 h-screen w-screen bg-white shadow-2xl border-l border-slate-200 flex flex-col">
            <div className="flex items-center justify-between px-4 h-20 border-b border-slate-200">
              <div className="flex items-center gap-3">
                 <img src="/logo.jpg" alt="Sardar ji Travel & Tourism LLC" width={64} height={64} />
                 <span className="font-medium text-slate-900">Menu</span>
               </div>
              <button
                className="inline-flex items-center rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.41 4.29 19.7 2.88 18.29 9.17 12 2.88 5.71 4.29 4.3l6.3 6.29 6.3-6.29z"/></svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 pt-6 pb-4 text-slate-800">
              <div className="h-2" aria-hidden="true" />
              <div className="text-xs uppercase tracking-wider text-slate-500">Visas & Services</div>
              <Link href="/" className="mt-3 block rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Home</Link>
              {/* Accordion: Dubai UAE Visas */}
              <button
                className="mt-3 w-full flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50"
                onClick={() => setUaeOpen((v) => !v)}
                aria-expanded={uaeOpen}
              >
                <span className="font-medium">Dubai UAE Visas</span>
                <svg
                  className={`transition-transform ${uaeOpen ? 'rotate-180' : ''}`}
                  width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                ><path d="M7 10l5 5 5-5z"/></svg>
              </button>
              {uaeOpen && (
                <ul className="mt-2 ml-2 space-y-2">
                  <li><Link href="/visas/uae#durations" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>30 / 60 / 90 Days</Link></li>
                  <li><Link href="/visas/uae#multiple" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Multiple Entry</Link></li>
                  <li><Link href="/visas/uae#extension" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Visa Extension</Link></li>
                  <li><Link href="/visas/uae#5year" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>5-Year Tourist Visa</Link></li>
                  <li><Link href="/visas/uae#family" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Family & Residence</Link></li>
                  <li><Link href="/visas/prices/dubai" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Dubai Visa Prices</Link></li>
                </ul>
              )}

              {/* Accordion: Gulf / GCC Visas */}
              <button
                className="mt-3 w-full flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50"
                onClick={() => setGccOpen((v) => !v)}
                aria-expanded={gccOpen}
              >
                <span className="font-medium">Gulf / GCC Visas</span>
                <svg
                  className={`transition-transform ${gccOpen ? 'rotate-180' : ''}`}
                  width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                ><path d="M7 10l5 5 5-5z"/></svg>
              </button>
              {gccOpen && (
                <ul className="mt-2 ml-2 space-y-2">
                  <li><Link href="/visas/saudi" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Saudi Visa Services</Link></li>
                  <li><Link href="/visas/bahrain" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Bahrain Visit Visa</Link></li>
                  <li><Link href="/visas/qatar" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Qatar Visit Visa</Link></li>
                  <li><Link href="/visas/prices/gcc" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Gulf / GCC Visa Prices</Link></li>
                </ul>
              )}

              {/* Accordion: Worldwide Visit Visas */}
              <button
                className="mt-3 w-full flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50"
                onClick={() => setWorldOpen((v) => !v)}
                aria-expanded={worldOpen}
              >
                <span className="font-medium">Worldwide Visit Visas</span>
                <svg
                  className={`transition-transform ${worldOpen ? 'rotate-180' : ''}`}
                  width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                ><path d="M7 10l5 5 5-5z"/></svg>
              </button>
              {worldOpen && (
                <ul className="mt-2 ml-2 space-y-2">
                  <li><Link href="/visas/usa" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>USA</Link></li>
                  <li><Link href="/visas/country/uk" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>UK</Link></li>
                  <li><Link href="/visas/country/australia" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Australia</Link></li>
                  <li><Link href="/visas/country/canada" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Canada</Link></li>
                  <li><Link href="/visas/country/new-zealand" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>New Zealand</Link></li>
                  <li><Link href="/visas/country/peru" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Peru</Link></li>
                  <li><Link href="/visas/country/brazil" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Brazil</Link></li>
                  <li><Link href="/visas/country/mexico" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Mexico</Link></li>
                  <li><Link href="/visas/country/russia" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Russia</Link></li>
                  <li><Link href="/visas/country/montenegro" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Montenegro</Link></li>
                  <li><Link href="/visas/country/ireland" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Ireland</Link></li>
                  <li><Link href="/visas/country/colombia" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Colombia</Link></li>
                  <li><Link href="/visas/prices/worldwide" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Worldwide Visa Prices</Link></li>
                </ul>
              )}

              {/* Accordion: Schengen */}
              <button
                className="mt-3 w-full flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50"
                onClick={() => setSchengenOpen((v) => !v)}
                aria-expanded={schengenOpen}
              >
                <span className="font-medium">Schengen</span>
                <svg
                  className={`transition-transform ${schengenOpen ? 'rotate-180' : ''}`}
                  width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                ><path d="M7 10l5 5 5-5z"/></svg>
              </button>
              {schengenOpen && (
                <ul className="mt-2 ml-2 space-y-2">
                  <li><Link href="/visas/schengen" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Schengen Visa Services</Link></li>
                  <li><Link href="/visas/prices/schengen" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Schengen Visa Prices</Link></li>
                </ul>
              )}

              {/* Accordion: Asia */}
              <button
                className="mt-3 w-full flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50"
                onClick={() => setAsiaOpen((v) => !v)}
                aria-expanded={asiaOpen}
              >
                <span className="font-medium">Asia</span>
                <svg
                  className={`transition-transform ${asiaOpen ? 'rotate-180' : ''}`}
                  width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                ><path d="M7 10l5 5 5-5z"/></svg>
              </button>
              {asiaOpen && (
                <ul className="mt-2 ml-2 space-y-2">
                  <li><Link href="/visas/asia" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Asian Countries</Link></li>
                  <li><Link href="/visas/prices/asia" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Asia Visa Prices</Link></li>
                </ul>
              )}

              {/* Accordion: Africa */}
              <button
                className="mt-3 w-full flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50"
                onClick={() => setAfricaOpen((v) => !v)}
                aria-expanded={africaOpen}
              >
                <span className="font-medium">Africa</span>
                <svg
                  className={`transition-transform ${africaOpen ? 'rotate-180' : ''}`}
                  width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                ><path d="M7 10l5 5 5-5z"/></svg>
              </button>
              {africaOpen && (
                <ul className="mt-2 ml-2 space-y-2">
                  <li>
                    <Link
                      href="/visas/africa-countries"
                      className="block rounded-md px-3 py-2 hover:bg-slate-50"
                      onClick={() => setOpen(false)}
                    >
                      Africa
                    </Link>
                  </li>
                </ul>
              )}

              {/* Accordion: More Services */}
              <button
                className="mt-3 w-full flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50"
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
              >
                <span className="font-medium">More Services</span>
                <svg
                  className={`transition-transform ${moreOpen ? 'rotate-180' : ''}`}
                  width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                ><path d="M7 10l5 5 5-5z"/></svg>
              </button>
              {moreOpen && (
                <ul className="mt-2 ml-2 space-y-2">
                  <li><a href="#tickets-hotels" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Air Tickets & Hotels</a></li>
                  <li><a href="#tickets-hotels" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>Travel Insurance</a></li>
                  <li><a href="#vfs-appointments" className="block rounded-md px-3 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>VFS Appointments</a></li>
                </ul>
              )}

              {/* Quick Links */}
              <div className="mt-6 text-xs uppercase tracking-wider text-slate-500">Quick Links</div>
              <ul className="mt-3 space-y-2">
                <li><Link href="/visas" className="block rounded-md bg-slate-50 px-3 py-2 hover:bg-slate-100" onClick={() => setOpen(false)}>All Visas</Link></li>
                <li><Link href="/visas/prices" className="block rounded-md bg-slate-50 px-3 py-2 hover:bg-slate-100" onClick={() => setOpen(false)}>Visa Prices</Link></li>
                <li><Link href="/tours" className="block rounded-md bg-slate-50 px-3 py-2 hover:bg-slate-100" onClick={() => setOpen(false)}>Tours</Link></li>
                <li><Link href="/faq" className="block rounded-md bg-slate-50 px-3 py-2 hover:bg-slate-100" onClick={() => setOpen(false)}>FAQ</Link></li>
                  <li><a href="#contact" className="block rounded-md bg-slate-50 px-3 py-2 hover:bg-slate-100" onClick={() => setOpen(false)}>Contact</a></li>
              </ul>
            </div>
            <div className="border-t border-slate-200 p-4 space-y-3">
              <a href="tel:+971588448225" className="block w-full text-center rounded-md bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">Call +971 588 448 225</a>
              <a href="tel:+918196904340" className="block w-full text-center rounded-md bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">India +918196904340</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
