import styles from "./Testimonials.module.css";

const Item = ({text}:{text:string}) => (
  <div className={styles.card}>
    <p className={styles.text}>{text}</p>
  </div>
);

export default function Testimonials(){
  return (
    <div className={styles.list}>
      <Item text="오늘 내 감정을 적어보니 생각보다 마음이 가벼워졌어요."/>
      <Item text="작은 문장으로 정리하니 패턴을 볼 수 있었어요."/>
      <Item text="덕분에 매일 기록하는 습관이 생겼어요."/>
    </div>
  );
}