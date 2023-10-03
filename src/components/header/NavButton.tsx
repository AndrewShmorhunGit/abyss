import styles from "@/app/styles/header.module.scss";
import { FaLocationArrow } from "react-icons/fa";

export function NavButton() {
  return (
    <button className={styles.btn}>
      <FaLocationArrow />
    </button>
  );
}
