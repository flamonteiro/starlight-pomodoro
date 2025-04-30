import { HistoryIcon, HomeIcon, MoonIcon, SettingsIcon } from "lucide-react";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleTheme(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    // useEffect para efeitos colaterais
    // mudar icon
    // setar localStorage
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

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
        onClick={handleTheme}
      >
        <MoonIcon />
      </a>
    </nav>
  );
}
