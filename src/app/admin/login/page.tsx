"use client";
import { useState } from "react";

export default function AdminLogin({ searchParams }: { searchParams?: { next?: string; error?: string } }) {
  const errorParam = searchParams?.error;
  const error = errorParam && errorParam !== "false" ? errorParam : "";
  const next = searchParams?.next ?? "";
  const [showPwd, setShowPwd] = useState(false);
  const imgSrc = "/logo.jpg";

  return (
    <main>
      <section className="admin-login" style={{ background: "#cfdcff", minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <div className="wrapper" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="login-card" style={{ width: 900, maxWidth: "94vw", height: 520, background: "#fff", borderRadius: 25, display: "flex", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
            <div className="left" style={{ width: "45%", background: "#e6edff", display: "flex", justifyContent: "center", alignItems: "center", padding: 30 }}>
              <div
                style={{
                  width: "90%",
                  height: 320,
                  borderRadius: 15,
                  backgroundImage: `url(${imgSrc})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
              />
            </div>
            <div className="right" style={{ width: "55%", padding: "60px 50px" }}>
              <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 8 }}>Sign In</h2>
              {error && (<div style={{ marginTop: 8, marginBottom: 16, background: "#fee2e2", color: "#b91c1c", border: "1px solid #fecaca", borderRadius: 12, padding: "10px 12px", fontSize: 14 }}>{error}</div>)}
              <form method="POST" action="/admin/api/login">
                <label style={{ fontSize: 14, fontWeight: 500, marginBottom: 6, display: "block" }}>Username <span style={{ color: "red" }}>*</span></label>
                <input name="username" type="text" placeholder="Enter your username" required style={{ width: "100%", padding: 14, borderRadius: 12, border: "1px solid #ddd", fontSize: 15, marginBottom: 20 }} />
                <label style={{ fontSize: 14, fontWeight: 500, marginBottom: 6, display: "block" }}>Password <span style={{ color: "red" }}>*</span></label>
                <div className="password-wrapper" style={{ position: "relative" }}>
                  <input name="password" type={showPwd ? "text" : "password"} placeholder="Enter your password" required style={{ width: "100%", padding: 14, borderRadius: 12, border: "1px solid #ddd", fontSize: 15, marginBottom: 20, paddingRight: 40 }} />
                  <span className="eye" aria-label="Toggle password visibility" onClick={() => setShowPwd((v) => !v)} style={{ position: "absolute", right: 12, top: 13, cursor: "pointer", fontSize: 18, color: "#999" }}>👁️</span>
                </div>
                <input type="hidden" name="next" value={next} />
                        <button type="submit" className="primary" style={{ width: "100%", padding: 14, background: "#1a73ff", color: "#fff", fontSize: 17, border: "none", borderRadius: 12, marginTop: 5, cursor: "pointer" }}>Sign In</button>
                        <div style={{ marginTop: 12, fontSize: 12 }}>
                          <a href="/logo.jpg" target="_blank" rel="noreferrer" style={{ color: "#1a73ff" }}>Open image</a>
                        </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";