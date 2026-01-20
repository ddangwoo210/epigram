import styles from "./FeatureCards.module.css";

const Card = ({ title, desc }:{title:string; desc:string}) => (
  <div className={styles.card}>
    <h4 className={styles.title}>{title}</h4>
    <p className={styles.desc}>{desc}</p>
  </div>
);

export default function FeatureCards(){
  return (
    <div className={styles.list}>
      <Card title="간편한 공유" desc="짧은 문장으로 감정을 기록하고 공유할 수 있어요."/>
      <Card title="감정 스티커" desc="이모지로 간단하게 현재 기분을 표현하세요."/>
      <Card title="패턴 시각화" desc="주기적으로 기록하면 감정 패턴을 확인할 수 있어요."/>
    </div>
  );
}