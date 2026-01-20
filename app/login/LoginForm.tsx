"use client";
import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    setLoading(true);
    try {
      // TODO: 실제 인증 API 호출
      // 예: const res = await fetch('/api/auth/login', { method:'POST', body: JSON.stringify({email,password}) })
      // if (!res.ok) throw new Error('auth fail')
      await new Promise((r) => setTimeout(r, 800)); // 더미 대기

      // 성공 시 리다이렉트(예: 홈)
      router.push("/");
    } catch (err) {
      setError("로그인에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <strong style={{ fontSize: 16 }}>로그인</strong>
      </div>

      <label className={styles.label}>
        <input
          className={styles.input}
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="이메일"
        />
      </label>

      <label className={styles.label} style={{ position: "relative" }}>
        <input
          className={styles.input}
          type={showPw ? "text" : "password"}
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="비밀번호"
        />
        <button
          type="button"
          className={styles.pwToggle}
          onClick={() => setShowPw((s) => !s)}
          aria-label={showPw ? "비밀번호 숨기기" : "비밀번호 표시"}
        >
          {showPw ? "숨기기" : "보기"}
        </button>
      </label>

      {error && <div className={styles.error}>{error}</div>}

      <button className={styles.submit} type="submit" disabled={loading}>
        {loading ? "로딩..." : "로그인"}
      </button>

      <div className={styles.row}>
        <div className={styles.helper}>회원이 아니신가요? <a href="/signup" className={styles.link}>가입하기</a></div>
      </div>

      <div className={styles.sepRow}>
        <div className={styles.sepLine} />
        <div className={styles.sepText}>간편 로그인</div>
        <div className={styles.sepLine} />
      </div>

      <div className={styles.socials}>
        <button type="button" className={styles.socialBtn}>카카오</button>
        <button type="button" className={styles.socialBtn}>구글</button>
      </div>
    </form>
  );
}