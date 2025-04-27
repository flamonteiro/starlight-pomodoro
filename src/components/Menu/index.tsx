import { HistoryIcon, HomeIcon, MoonIcon, SettingsIcon } from "lucide-react";

import styles from "./styles.module.css";

export function Menu() {
  return (
    <div className={styles["menu-container"]}>
      <a href="#" aria-label="Go to Home" title="Home">
        <HomeIcon />
      </a>
      <a href="#" aria-label="Go to History" title="History">
        <HistoryIcon />
      </a>
      <a href="#" aria-label="Go to Settings" title="Settings">
        <SettingsIcon />
      </a>
      <a href="#" aria-label="Change Theme" title="Theme">
        <MoonIcon />
      </a>
    </div>
  );
}
