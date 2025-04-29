import styles from "./styles.module.css";

import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { CirclePlayIcon } from "lucide-react";
import { Footer } from "../Footer";

export function MainForm() {
  return (
    <form className={styles.form} action="">
      <div className={styles.formRow}>
        <DefaultInput id="myInput" type="text" label="Nome da Task:" />
      </div>

      <div className={styles.formRow}>
        <span className={styles.nextCyclePreview}>
          Próximo ciclo é de <b>25min</b>
        </span>
      </div>

      <div className={styles.formRow}>
        <div className={styles.cycles}>
          <p>Ciclos:</p>
          <div className={styles.cycleDots}>
            <span className={styles.workTime}></span>
            <span className={styles.shortBreakTime}></span>
            <span className={styles.workTime}></span>
            <span className={styles.shortBreakTime}></span>
            <span className={styles.workTime}></span>
            <span className={styles.shortBreakTime}></span>
            <span className={styles.workTime}></span>
            <span className={styles.longBreakTime}></span>
          </div>
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.buttonContainer}>
          <DefaultButton>
            <CirclePlayIcon />
          </DefaultButton>
        </div>
      </div>

      <div className={styles.formRow}>
        <Footer></Footer>
      </div>
    </form>
  );
}
