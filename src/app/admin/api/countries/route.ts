import { NextResponse } from "next/server";
import { readJson, writeJson } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Country = { id: string; name: string; visaOptions?: string[] };

export async function POST(req: Request) {
  const form = await req.formData();
  const action = String(form.get("action") || "");
  const countries = readJson<Country[]>("countries.json");

  if (action === "add") {
    const item: Country = {
      id: String(Date.now()),
      name: String(form.get("name") || ""),
      visaOptions: String(form.get("visaOptions") || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };
    writeJson("countries.json", [item, ...countries]);
  } else if (action === "delete") {
    const id = String(form.get("id") || "");
    writeJson("countries.json", countries.filter((c) => c.id !== id));
  } else if (action === "edit") {
    const id = String(form.get("id") || "");
    writeJson(
      "countries.json",
      countries.map((c) => (c.id === id ? {
        ...c,
        name: String(form.get("name") || c.name),
        visaOptions: String(form.get("visaOptions") || (c.visaOptions ?? []).join(","))
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      } : c))
    );
  }

  return NextResponse.redirect(new URL("/admin/countries", req.url));
}