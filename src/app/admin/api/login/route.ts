import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function getFields(req: Request): Promise<Record<string, string>> {
  try {
    const fd = await req.formData();
    const entries: [string, string][] = [];
    for (const [k, v] of fd.entries()) entries.push([k, String(v)]);
    return Object.fromEntries(entries);
  } catch {
    const ct = req.headers.get("content-type") || "";
    const body = await req.text();
    if (ct.includes("application/x-www-form-urlencoded")) {
      const params = new URLSearchParams(body);
      return Object.fromEntries(params.entries());
    }
    if (ct.includes("application/json")) {
      try {
        const obj = JSON.parse(body);
        return typeof obj === "object" && obj ? obj : {};
      } catch {}
    }
    return {};
  }
}

function buildRedirect(req: Request, path: string): URL {
  const url = new URL(path, req.url);
  const isDev = process.env.NODE_ENV !== "production";
  if (isDev && (url.hostname === "0.0.0.0" || url.hostname === "127.0.0.1")) {
    url.hostname = "localhost";
  }
  return url;
}

export async function POST(req: Request) {
  const fields = await getFields(req);
  const username = String(fields.username || "");
  const password = String(fields.password || "");
  const next = String(fields.next || "");

  const user = process.env.ADMIN_USER ?? "sardarji2025";
  const pass = process.env.ADMIN_PASS ?? "Sardarji1025";

  if (username === user && password === pass) {
    const redirectTo = next && next.startsWith("/admin") ? next : "/admin";
    const res = NextResponse.redirect(buildRedirect(req, redirectTo));
    const isProd = process.env.NODE_ENV === "production";
    res.cookies.set("admin_session", "active", {
      httpOnly: true,
      sameSite: "strict",
      secure: isProd,
      path: "/",
      maxAge: 60 * 60 * 8,
    });
    return res;
  }

  return NextResponse.redirect(buildRedirect(req, `/admin/login?error=${encodeURIComponent("Invalid credentials")}`));
}