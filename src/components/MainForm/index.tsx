import styles from "./styles.module.css";

import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { CirclePlayIcon } from "lucide-react";

export function MainForm() {
  return (
    <form className={styles.form} action="">
      <DefaultInput />
      <span className={styles.nextCyclePreview}>
        Próximo ciclo é de <b>25min</b>
      </span>
      <DefaultButton>
        <CirclePlayIcon />
      </DefaultButton>
    </form>
  );
}
