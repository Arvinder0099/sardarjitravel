import { NextResponse } from "next/server";
import { readJson, writeJson } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Settings = { companyName?: string; emails?: string[]; logoUrl?: string; address?: string; phone?: string; whatsapp?: string; adminDisplayName?: string };

export async function POST(req: Request) {
  const form = await req.formData();
  const action = String(form.get("action") || "");
  if (action !== "save") return NextResponse.json({ error: "Invalid" }, { status: 400 });

  const existing = readJson<Settings>("settings.json");
  const emailsCsv = String(form.get("emails") || "");
  const next: Settings = {
    ...existing,
    companyName: String(form.get("companyName") || existing.companyName || ""),
    emails: emailsCsv.split(",").map((s) => s.trim()).filter(Boolean),
    logoUrl: String(form.get("logoUrl") || existing.logoUrl || ""),
    address: String(form.get("address") || existing.address || ""),
    phone: String(form.get("phone") || existing.phone || ""),
    whatsapp: String(form.get("whatsapp") || existing.whatsapp || ""),
    adminDisplayName: String(form.get("adminDisplayName") || existing.adminDisplayName || ""),
  };
  writeJson("settings.json", next);
  return NextResponse.redirect(new URL("/admin/settings", req.url));
}