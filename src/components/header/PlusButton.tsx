import { AiOutlinePlus } from "react-icons/ai";
import styles from "@/app/styles/header.module.scss";
import { increaseScale } from "@/utils/functions";
import { IScaleOptions } from "@/interfaces/IScale";

export function PlusButton({ isScale, setScale }: IScaleOptions) {
  return (
    <button
      className={styles.btn}
      onClick={() => {
        setScale(increaseScale(isScale));
      }}
    >
      <AiOutlinePlus />
    </button>
  );
}
