import { SparkleIcon } from "lucide-react";

import styles from "./styles.module.css";
import "../../styles/theme.css";

export function Logo() {
  return (
    <div className={styles["logo-container"]}>
      <SparkleIcon className={styles["star-icon"]} />
      <span>Starlight</span>
    </div>
  );
}
