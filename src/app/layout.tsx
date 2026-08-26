import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import HeaderNav from "./HeaderNav";
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-3PGZSTSDYW";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sardarji Travel & Tourism LLC Dubai | Best Travel Agency in UAE",
  description: "Explore the UAE and beyond with Sardarji Travel & Tourism LLC. Book flights, tours, and holiday packages with Dubai's trusted travel agency.",
  openGraph: {
    title: "Sardarji Travel & Tourism LLC Dubai | Best Travel Agency in UAE",
    description: "Explore the UAE and beyond with Sardarji Travel & Tourism LLC. Book flights, tours, and holiday packages with Dubai's trusted travel agency.",
    url: "https://sardarjitravel.ae",
    siteName: "Sardarji Travel & Tourism LLC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sardarji Travel & Tourism LLC Dubai | Best Travel Agency in UAE",
    description: "Explore the UAE and beyond with Sardarji Travel & Tourism LLC. Book flights, tours, and holiday packages with Dubai's trusted travel agency.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const siteRole = h.get("x-site-role") || "public";
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        {/* Google Analytics Code */}
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);} 
      gtag('js', new Date());
      gtag('config', '${gaId}', { page_path: window.location.pathname });
    `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {siteRole !== "admin" ? <HeaderNav /> : null}
        {children}
        {siteRole !== "admin" ? (
          <section className="border-y border-slate-200 bg-white">
            <div className="mx-auto w-full max-w-none px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Ready to start your visa application?</h3>
                <p className="text-slate-600 text-sm">Chat with our experts on WhatsApp or call us for instant assistance.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20need%20visa%20assistance." target="_blank" className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm text-white hover:bg-green-700" aria-label="WhatsApp UAE">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.49 0 .15 5.34.15 11.9c0 2.1.55 4.16 1.59 5.97L0 24l6.3-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.06 21.2h-.01A9.3 9.3 0 0 1 7.03 19l-.34-.2-3.73.98 1-3.64-.22-.37A9.3 9.3 0 1 1 12.06 21.2Zm5.1-6.96c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.63.14-.19.28-.73.9-.9 1.09-.17.2-.33.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.2.05-.35-.02-.49-.07-.14-.63-1.52-.87-2.08-.23-.56-.47-.48-.63-.49h-.54c-.18 0-.49.07-.75.35-.26.28-.98.96-.98 2.35s1 2.72 1.14 2.9c.14.19 1.97 3.02 4.78 4.23.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33Z"/></svg>
                </a>
                <a href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20need%20visa%20assistance." target="_blank" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-800 hover:bg-slate-100" aria-label="WhatsApp India">WhatsApp India</a>
                <a href="tel:+971588448225" className="inline-flex items-center rounded-md bg-amber-600 px-3 py-1.5 text-sm text-white hover:bg-amber-700">Call Now</a>
              </div>
            </div>
          </section>
        ) : null}
        <footer id="contact" className="mt-0 border-t border-slate-200 bg-white">
          {siteRole !== "admin" ? (
          <div className="w-full max-w-none mx-auto px-4 py-10 grid sm:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-semibold tracking-tight text-slate-900">sardarji travel and tourism llc duabi</span>
              </div>
              <div className="mt-4 text-sm text-slate-700">
                <p>OFICE # 05, LEVEL M2, ZONEA2 BURJ AL NAHAR MALL</p>
                <p>DEIRA, DUBAI</p>
                <p className="mt-2">Email: <a href="mailto:info@sardarjitravel.ae" className="text-slate-900 hover:underline">info@sardarjitravel.ae</a></p>
                <p>UAE: <a href="tel:+971588448225" className="text-slate-900 hover:underline">+971 588 448 225</a></p>
                <p>India: <a href="tel:+918196904340" className="text-slate-900 hover:underline">+91 81969 04340</a></p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20need%20visa%20assistance." target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-green-600 px-3 py-1.5 text-sm text-white hover:bg-green-700" aria-label="WhatsApp UAE">WhatsApp UAE</a>
                  <a href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20need%20visa%20assistance." target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-800 hover:bg-slate-100" aria-label="WhatsApp India">WhatsApp India</a>
                  <a href="tel:+971588448225" className="inline-flex items-center rounded-md bg-amber-600 px-3 py-1.5 text-sm text-white hover:bg-amber-700">Call UAE</a>
                  <a href="tel:+918196904340" className="inline-flex items-center rounded-md bg-amber-600 px-3 py-1.5 text-sm text-white hover:bg-amber-700">Call India</a>
                  <a href="mailto:info@sardarjitravel.ae" className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-800 hover:bg-slate-100">Email</a>
                </div>
              </div>
            </div>
          </div>
          ) : null}
        </footer>

        {/* Homepage CTA placed below address & contact */}
        {siteRole !== "admin" ? (
          <section className="border-t border-slate-200 bg-white">
            <div className="w-full max-w-none mx-auto px-4 py-8">
              <div className="rounded-xl bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">Plan your next trip with us</h3>
                <p className="mt-1 text-slate-600">Explore Dubai tours and apply for UAE visas with fast processing and trusted support.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href="/tours" className="inline-flex items-center rounded-md bg-amber-600 px-3 py-1.5 text-sm text-white hover:bg-amber-700">Explore Tours</a>
                  <a href="/visas/uae" className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-800 hover:bg-slate-100">UAE Visas</a>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </body>
    </html>
  );
}
