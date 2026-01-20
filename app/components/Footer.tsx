import styles from "./Footer.module.css";

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>© {new Date().getFullYear()} Epigram. All rights reserved.</div>
      </div>
    </footer>
  );
}