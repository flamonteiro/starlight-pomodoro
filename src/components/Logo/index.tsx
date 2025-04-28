import { SparkleIcon } from "lucide-react";

import styles from "./styles.module.css";
import "../../styles/theme.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <a href="#" className={styles.logoLink}>
        <SparkleIcon />
        <span>Starlight</span>
      </a>
    </div>
  );
}
