"use client";
import { AiOutlineMinus } from "react-icons/ai";
import styles from "@/app/styles/header.module.scss";
import { decreaseScale } from "@/utils/functions";
import { useScaleContext } from "@/context/scale.context";

export function MinusButton() {
  const { isScale, setScale } = useScaleContext();
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
