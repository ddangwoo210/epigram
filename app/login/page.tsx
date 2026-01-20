import React from "react";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "로그인 - Epigram",
  description: "Epigram 로그인 페이지",
};

export default function LoginPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--pale, #f3f6f8)" }}>
        <div style={{ width: "100%", maxWidth: 640, padding: "48px 24px", boxSizing: "border-box" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2l7 4v6l-7 4-7-4V6l7-4z" fill="#111827" />
                <path d="M12 10l7-4" stroke="#fff" strokeOpacity="0.06" />
              </svg>
              <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Epigram</h1>
            </div>
          </div>

          <div style={{ background: "var(--card, #ffffff)", borderRadius: 12, padding: 28, boxShadow: "0 6px 18px rgba(2,6,23,0.06)" }}>
            <LoginForm />
          </div>
        </div>
      </main>

      <footer style={{ padding: 28, textAlign: "center", color: "var(--muted, #7b8aa2)", fontSize: 13 }}>
        © {new Date().getFullYear()} Epigram
      </footer>
    </div>
  );
}