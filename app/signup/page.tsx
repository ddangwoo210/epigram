import React from "react";
import SignupForm from "./SignupForm";

export const metadata = {
  title: "회원가입 - Epigram",
  description: "Epigram 회원가입 페이지",
};

export default function SignupPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      <main style={{
        flex: 1,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        background: "var(--pale, #f3f6f8)",
        paddingTop: 48,
        paddingBottom: 48
      }}>
        <div style={{ width: "100%", maxWidth: 540, padding: "40px 24px", boxSizing: "border-box" }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
            marginBottom: 8
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2l7 4v6l-7 4-7-4V6l7-4z" fill="#111827" />
            </svg>
            <div style={{ fontWeight: 700, fontSize: 20 }}>Epigram</div>
          </div>

          <div style={{
            background: "var(--card, #ffffff)",
            borderRadius: 12,
            padding: 28,
            boxShadow: "0 6px 18px rgba(2,6,23,0.04)",
            display: "flex",
            flexDirection: "column",
            gap: 12
          }}>
            <SignupForm />
          </div>
        </div>
      </main>

      <footer style={{ padding: 24, textAlign: "center", color: "var(--muted, #7b8aa2)", fontSize: 13 }}>
        © {new Date().getFullYear()} Epigram
      </footer>
    </div>
  );
}