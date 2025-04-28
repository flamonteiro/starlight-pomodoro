import { HistoryIcon, HomeIcon, MoonIcon, SettingsIcon } from "lucide-react";

import styles from "./styles.module.css";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Go to Home"
        title="Home"
      >
        <HomeIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Go to History"
        title="History"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Go to Settings"
        title="Settings"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Change Theme"
        title="Theme"
      >
        <MoonIcon />
      </a>
    </nav>
  );
}
