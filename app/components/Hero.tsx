import React from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <h1 id="hero-title" className={styles.title}>
        나만 갖고 있기엔 아까운 말이 있지 않나요?
      </h1>
      <p className={styles.lead}>다른 사람들과 감정을 공유해 보세요.</p>

      <div className={styles.cardWrap}>
        <div className={styles.card}>
          <p className={styles.cardText}>감정 기록을 시작해볼까요?</p>

          <div className={styles.cta}>
            <Link href="/login" className={styles.primary} aria-label="시작하기 (로그인 페이지로 이동)">
              시작하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}