import { NextResponse } from "next/server";
import { readJson, writeJson } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Media = { id: string; name: string; imageUrl: string; alt?: string; placement?: string; enabled?: boolean; createdAt?: number };

export async function POST(req: Request) {
  const form = await req.formData();
  const action = String(form.get("action") || "");
  const media = readJson<Media[]>("media.json");

  if (action === "add") {
    const item: Media = {
      id: String(Date.now()),
      name: String(form.get("name") || ""),
      imageUrl: String(form.get("imageUrl") || ""),
      alt: String(form.get("alt") || ""),
      placement: String(form.get("placement") || ""),
      enabled: form.has("enabled"),
      createdAt: Date.now(),
    };
    writeJson("media.json", [item, ...media]);
  } else if (action === "delete") {
    const id = String(form.get("id") || "");
    writeJson("media.json", media.filter((m) => m.id !== id));
  } else if (action === "edit") {
    const id = String(form.get("id") || "");
    const enabled = form.has("enabled");
    writeJson(
      "media.json",
      media.map((m) => (m.id === id ? {
        ...m,
        name: String(form.get("name") || m.name),
        imageUrl: String(form.get("imageUrl") || m.imageUrl),
        alt: String(form.get("alt") || m.alt),
        placement: String(form.get("placement") || m.placement),
        enabled,
      } : m))
    );
  }

  return NextResponse.redirect(new URL("/admin/management/media", req.url));
}