import styles from "./StatsCard.module.css";

export default function StatsCard(){
  return (
    <div className={styles.root}>
      <div className={styles.pie}>🙂</div>
      <div>
        <div className={styles.label}>기쁨</div>
        <div className={styles.value}>38%</div>
      </div>
    </div>
  );
}