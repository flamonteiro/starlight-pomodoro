import {
  HistoryIcon,
  HomeIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTaskContext } from "../../contexts/TaskContext";

import styles from "./styles.module.css";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "light";
    return savedTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleTheme(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const { setState } = useTaskContext();

  function handleClick() {
    setState((prevState) => {
      return {
        ...prevState,
        formattedSecondsRemaining: "00:00",
      };
    });
  }

  return (
    <nav className={styles.menu}>
      <button onClick={handleClick}>Click</button>
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
        id="themeButton"
        className={styles.menuLink}
        href="#"
        aria-label="Change Theme"
        title="Theme"
        onClick={handleTheme}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
