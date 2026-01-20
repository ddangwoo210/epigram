"use client";
import Link from "next/link";
import Avatar from "./Avatar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <div style={{ fontWeight: 700 }}>Epigram</div>
          <div style={{ fontSize: 12, color: "var(--muted, #7b8aa2)" }}>피드</div>
        </Link>

        <nav className={styles.actions}>
          <Avatar src="/images/avatar-default.png" size={36} />
          <a className={styles.navLink}></a>
        </nav>
      </div>
    </header>
  );
}