import { NextResponse } from "next/server";
import { readJson, writeJson } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Tour = { id: string; title: string; price: number; currency: string; description?: string; duration?: string; itinerary?: string; images?: string[]; enabled?: boolean };

export async function POST(req: Request) {
  const form = await req.formData();
  const action = String(form.get("action") || "");
  const tours = readJson<Tour[]>("tours.json");

  if (action === "add") {
    const imagesCsv = String(form.get("images") || "");
    const item: Tour = {
      id: String(Date.now()),
      title: String(form.get("title") || ""),
      price: Number(form.get("price") || 0),
      currency: String(form.get("currency") || ""),
      description: String(form.get("description") || ""),
      duration: String(form.get("duration") || ""),
      itinerary: String(form.get("itinerary") || ""),
      images: imagesCsv.split(",").map((s) => s.trim()).filter(Boolean),
      enabled: form.has("enabled") ? true : true,
    };
    writeJson("tours.json", [item, ...tours]);
  } else if (action === "delete") {
    const id = String(form.get("id") || "");
    writeJson("tours.json", tours.filter((t) => t.id !== id));
  } else if (action === "edit") {
    const id = String(form.get("id") || "");
    const imagesCsv = String(form.get("images") || "");
    const enabled = form.has("enabled");
    writeJson(
      "tours.json",
      tours.map((t) => (t.id === id ? {
        ...t,
        title: String(form.get("title") || t.title),
        price: Number(form.get("price") || t.price),
        currency: String(form.get("currency") || t.currency),
        description: String(form.get("description") || t.description),
        duration: String(form.get("duration") || t.duration),
        itinerary: String(form.get("itinerary") || t.itinerary),
        images: imagesCsv ? imagesCsv.split(",").map((s) => s.trim()).filter(Boolean) : (t.images || []),
        enabled,
      } : t))
    );
  }

  return NextResponse.redirect(new URL("/admin/management/tours-and-destinations", req.url));
}