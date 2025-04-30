import styles from "./styles.module.css";

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <p>Ciclos:</p>
      <div className={styles.cycleDots}>
        <span className={`${styles.workTime} ${styles.cycleDot}`}></span>
        <span className={`${styles.shortBreakTime} ${styles.cycleDot}`}></span>
        <span className={`${styles.workTime} ${styles.cycleDot}`}></span>
        <span className={`${styles.shortBreakTime} ${styles.cycleDot}`}></span>
        <span className={`${styles.workTime} ${styles.cycleDot}`}></span>
        <span className={`${styles.shortBreakTime} ${styles.cycleDot}`}></span>
        <span className={`${styles.workTime} ${styles.cycleDot}`}></span>
        <span className={`${styles.longBreakTime} ${styles.cycleDot}`}></span>
      </div>
    </div>
  );
}
