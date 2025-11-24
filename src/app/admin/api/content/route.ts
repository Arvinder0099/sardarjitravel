import { NextResponse } from "next/server";
import { readJson, writeJson } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Item = { id: string; title: string; summary?: string; content?: string; imageUrl?: string; published?: boolean; createdAt?: number };

const FILES: Record<string, string> = {
  blog: "blog.json",
  news: "news.json",
  promotions: "promotions.json",
};

export async function POST(req: Request) {
  const form = await req.formData();
  const action = String(form.get("action") || "");
  const type = String(form.get("type") || "");
  const file = FILES[type];
  if (!file) return NextResponse.json({ error: "Invalid type" }, { status: 400 });

  const items = readJson<Item[]>(file);

  if (action === "add") {
    const item: Item = {
      id: String(Date.now()),
      title: String(form.get("title") || ""),
      summary: String(form.get("summary") || ""),
      content: String(form.get("content") || ""),
      imageUrl: String(form.get("imageUrl") || ""),
      published: form.has("published"),
      createdAt: Date.now(),
    };
    writeJson(file, [item, ...items]);
  } else if (action === "delete") {
    const id = String(form.get("id") || "");
    writeJson(file, items.filter((i) => i.id !== id));
  } else if (action === "edit") {
    const id = String(form.get("id") || "");
    const published = form.has("published");
    writeJson(
      file,
      items.map((i) => (i.id === id ? {
        ...i,
        title: String(form.get("title") || i.title),
        summary: String(form.get("summary") || i.summary),
        content: String(form.get("content") || i.content),
        imageUrl: String(form.get("imageUrl") || i.imageUrl),
        published,
      } : i))
    );
  }

  return NextResponse.redirect(new URL("/admin/management/content", req.url));
}