import styles from "./styles.module.css";

export function DefaultInput() {
  return (
    <>
      <label className={styles.label} htmlFor="">
        Nome da Task:
      </label>
      <input
        className={styles.input}
        type="text"
        placeholder="Digite Algo..."
      />
    </>
  );
}
