"use client";
import React, { useState } from "react";
import styles from "./SignupForm.module.css";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 각각의 필드 토글 상태
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const validate = () => {
    if (!email || !password || !confirm) return "필수 입력값을 모두 채워주세요.";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "유효한 이메일을 입력해주세요.";
    if (password.length < 8) return "비밀번호는 최소 8자 이상이어야 합니다.";
    if (password !== confirm) return "비밀번호가 일치하지 않습니다.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const v = validate();
    if (v) { setError(v); return; }
    setLoading(true);
    try {
      // TODO: 실제 회원가입 API 호출
      await new Promise((r) => setTimeout(r, 1000));
      router.push("/login");
    } catch (err) {
      setError("회원가입에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.titleWrap}>
        <div className={styles.pageTitle}>회원가입</div>
      </div>

      <label className={styles.fieldLabel}>
        이메일
        <input
          className={styles.input}
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="이메일"
          autoComplete="email"
        />
      </label>

      {/* 비밀번호 */}
      <label className={styles.fieldLabel} style={{ position: "relative" }}>
        비밀번호
        <input
          className={styles.input}
          type={showPw ? "text" : "password"}
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="비밀번호"
          autoComplete="new-password"
        />
        <button
          type="button"
          className={styles.pwToggle}
          onClick={() => setShowPw((s) => !s)}
          aria-pressed={showPw}
          aria-label={showPw ? "비밀번호 숨기기" : "비밀번호 보기"}
        >
          {showPw ? "숨기기" : "보기"}
        </button>
      </label>

      {/* 비밀번호 확인 */}
      <label className={styles.fieldLabel} style={{ position: "relative" }}>
        비밀번호 확인
        <input
          className={styles.input}
          type={showConfirm ? "text" : "password"}
          placeholder="비밀번호 확인"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          aria-label="비밀번호 확인"
          autoComplete="new-password"
        />
        <button
          type="button"
          className={styles.pwToggle}
          onClick={() => setShowConfirm((s) => !s)}
          aria-pressed={showConfirm}
          aria-label={showConfirm ? "비밀번호 확인 숨기기" : "비밀번호 확인 보기"}
        >
          {showConfirm ? "숨기기" : "보기"}
        </button>
      </label>

      <label className={styles.fieldLabel}>
        닉네임
        <input
          className={styles.input}
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          aria-label="닉네임"
        />
      </label>

      {error && <div className={styles.error}>{error}</div>}

      <button className={styles.submit} type="submit" disabled={loading}>
        {loading ? "로딩..." : "가입하기"}
      </button>

      <div className={styles.helperRow}>
        <div className={styles.helper}>이미 계정이 있으신가요? <a href="/login" className={styles.link}>로그인</a></div>
      </div>

      <div className={styles.sepRow}>
        <div className={styles.sepLine} />
        <div className={styles.sepText}>간편 가입</div>
        <div className={styles.sepLine} />
      </div>

      <div className={styles.socials}>
        <button type="button" className={styles.socialBtn}>카카오</button>
        <button type="button" className={styles.socialBtn}>구글</button>
      </div>
    </form>
  );
}