import Hero from "@/app/(components)/Hero";
import { readJson } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Settings = { companyName?: string; emails?: string[]; logoUrl?: string; address?: string; phone?: string; whatsapp?: string; adminDisplayName?: string };

export default function SettingsPage() {
  const settings = readJson<Settings>("settings.json") || {};
  const emailsCsv = Array.isArray(settings.emails) ? settings.emails.join(", ") : "";

  return (
    <main>
      <Hero title="Admin Settings" subtitle="Manage configuration and preferences" imageUrl="/admin-hero/admin hero.jpeg" />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <form method="POST" action="/admin/api/settings" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <input type="hidden" name="action" value="save" />
            <input name="companyName" defaultValue={settings.companyName} placeholder="Company Name" className="rounded border border-slate-300 p-2" />
            <input name="emails" defaultValue={emailsCsv} placeholder="Emails (comma separated)" className="rounded border border-slate-300 p-2" />
            <input name="logoUrl" defaultValue={settings.logoUrl} placeholder="Logo URL" className="rounded border border-slate-300 p-2" />
            <input name="address" defaultValue={settings.address} placeholder="Address" className="rounded border border-slate-300 p-2" />
            <input name="phone" defaultValue={settings.phone} placeholder="Phone" className="rounded border border-slate-300 p-2" />
            <input name="whatsapp" defaultValue={settings.whatsapp} placeholder="WhatsApp" className="rounded border border-slate-300 p-2" />
            <input name="adminDisplayName" defaultValue={settings.adminDisplayName} placeholder="Admin Display Name" className="rounded border border-slate-300 p-2" />
            <button className="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">Save Settings</button>
          </form>
        </div>
      </section>
    </main>
  );
}