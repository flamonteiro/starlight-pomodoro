import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.footerLink} href="#">
        Entenda como funciona a técnica pomodoro
      </a>
      <p>Starlight Pomodoro © 2025</p>
    </footer>
  );
}
