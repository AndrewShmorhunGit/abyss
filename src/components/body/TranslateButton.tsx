import { RiArrowUpSLine } from "react-icons/ri";
import styles from "@/app/styles/body.module.scss";

export function TranslateButton({
  position,
}: {
  position: "top" | "right" | "bottom" | "left";
}) {
  return (
    <button className={`center absolute ${styles.btn} ${styles[position]}`}>
      <RiArrowUpSLine size={24} fill={"white"} />
    </button>
  );
}
