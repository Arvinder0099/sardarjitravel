export const dynamic = "force-dynamic";

import { Inter, Roboto_Mono } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${robotoMono.variable}`}>
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="mx-auto w-full max-w-none px-4 py-3 flex items-center justify-between">
          <a href="/admin" className="font-semibold text-slate-900">Admin</a>
          <nav className="flex gap-4 text-sm">
            <a href="/admin/prices" className="text-slate-700 hover:text-slate-900">Prices</a>
            <a href="/admin/tours" className="text-slate-700 hover:text-slate-900">Tours</a>
            <a href="/admin/countries" className="text-slate-700 hover:text-slate-900">Countries</a>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}