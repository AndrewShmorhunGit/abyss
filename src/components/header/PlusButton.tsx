"use client";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "@/app/styles/header.module.scss";
import { increaseScale } from "@/utils/functions";
import { useScaleContext } from "@/providers/scale.context";

export function PlusButton() {
  const { isScale, setScale } = useScaleContext();
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
