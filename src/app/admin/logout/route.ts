import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const res = NextResponse.redirect(new URL("/admin/login", req.url));
  res.cookies.set("admin_session", "", { path: "/", maxAge: 0, httpOnly: true, sameSite: "strict", secure: true });
  return res;
}