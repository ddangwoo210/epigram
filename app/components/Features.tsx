import FeatureCards from "./FeatureCards";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.cards}><FeatureCards /></div>
      <div className={styles.summary}>
        <h3 className={styles.heading}>말한 내용을 간편하게 공유해보세요</h3>
        <p className={styles.desc}>나만의 감정일지를 생성하고 다른 사람들과 비교해보세요.</p>
      </div>
    </div>
  );
}