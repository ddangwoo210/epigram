
import React from "react";
export const metadata = { title: "회원가입 - Epigram" };

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body style={{ minHeight: "100vh", background: "var(--pale, #f3f6f8)" }}>
        <main style={{ display: "flex", justifyContent: "center", paddingTop: 48, paddingBottom: 48 }}>
          {children}
        </main>
      </body>
    </html>
  );
}