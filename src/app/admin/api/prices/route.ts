import { NextResponse } from "next/server";
import { readJson, writeJson } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Price = { id: string; country: string; type: string; amount: number; currency: string };

export async function POST(req: Request) {
  const form = await req.formData();
  const action = String(form.get("action") || "");
  const prices = readJson<Price[]>("prices.json");

  if (action === "add") {
    const item: Price = {
      id: String(Date.now()),
      country: String(form.get("country") || ""),
      type: String(form.get("type") || ""),
      amount: Number(form.get("amount") || 0),
      currency: String(form.get("currency") || ""),
    };
    writeJson("prices.json", [item, ...prices]);
  } else if (action === "delete") {
    const id = String(form.get("id") || "");
    writeJson("prices.json", prices.filter((p) => p.id !== id));
  } else if (action === "edit") {
    const id = String(form.get("id") || "");
    writeJson(
      "prices.json",
      prices.map((p) => (p.id === id ? {
        ...p,
        country: String(form.get("country") || p.country),
        type: String(form.get("type") || p.type),
        amount: Number(form.get("amount") || p.amount),
        currency: String(form.get("currency") || p.currency),
      } : p))
    );
  }

  return NextResponse.redirect(new URL("/admin/prices", req.url));
}