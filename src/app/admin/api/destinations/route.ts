import { NextResponse } from "next/server";
import { readJson, writeJson } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Country = { id: string; name: string; description?: string; images?: string[]; enabled?: boolean; visasEnabled?: boolean };

export async function POST(req: Request) {
  const form = await req.formData();
  const action = String(form.get("action") || "");
  const countries = readJson<Country[]>("countries.json");

  if (action === "add") {
    const imagesCsv = String(form.get("images") || "");
    const item: Country = {
      id: String(Date.now()),
      name: String(form.get("name") || ""),
      description: String(form.get("description") || ""),
      images: imagesCsv.split(",").map((s) => s.trim()).filter(Boolean),
      enabled: form.has("enabled") ? true : true,
      visasEnabled: form.has("visasEnabled") ? true : true,
    };
    writeJson("countries.json", [item, ...countries]);
  } else if (action === "delete") {
    const id = String(form.get("id") || "");
    writeJson("countries.json", countries.filter((c) => c.id !== id));
  } else if (action === "edit") {
    const id = String(form.get("id") || "");
    const imagesCsv = String(form.get("images") || "");
    const enabled = form.has("enabled");
    const visasEnabled = form.has("visasEnabled");
    writeJson(
      "countries.json",
      countries.map((c) => (c.id === id ? {
        ...c,
        name: String(form.get("name") || c.name),
        description: String(form.get("description") || c.description),
        images: imagesCsv ? imagesCsv.split(",").map((s) => s.trim()).filter(Boolean) : (c.images || []),
        enabled,
        visasEnabled,
      } : c))
    );
  }

  return NextResponse.redirect(new URL("/admin/management/tours-and-destinations", req.url));
}