import { AiOutlineMinus } from "react-icons/ai";
import styles from "@/app/styles/header.module.scss";
import { decreaseScale } from "@/utils/functions";
import { IScaleOptions } from "@/interfaces/IScale";

export function MinusButton({ isScale, setScale }: IScaleOptions) {
  return (
    <button
      className={styles.btn}
      onClick={() => {
        setScale(decreaseScale(isScale));
      }}
    >
      <AiOutlineMinus />
    </button>
  );
}
