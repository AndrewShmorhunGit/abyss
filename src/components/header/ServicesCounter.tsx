import styles from "@/app/styles/header.module.scss";
export function ServicesCounter() {
  return (
    <div className={`center ${styles.services}`}>
      <p>Services</p>
      <div className={styles.amount}>
        <span>0</span>
      </div>
    </div>
  );
}
