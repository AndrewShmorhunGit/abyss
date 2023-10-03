import styles from "@/app/styles/header.module.scss";
export function ListButton() {
  return (
    <button className={styles.btn + " " + styles.primary}>List view</button>
  );
}
