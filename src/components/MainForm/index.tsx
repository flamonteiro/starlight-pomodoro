import styles from "./styles.module.css";

import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { CirclePlayIcon } from "lucide-react";
import { Cycles } from "../Cycles";

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
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <div className={styles.buttonContainer}>
          <DefaultButton icon={<CirclePlayIcon />} color="purple" />
        </div>
      </div>
    </form>
  );
}
