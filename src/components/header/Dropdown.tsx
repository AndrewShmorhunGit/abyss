import React from "react";
import styles from "@/app/styles/header.module.scss";
import { options } from "@/data/constants";
import { IScaleParams } from "@/interfaces/IScale";
import { useClickOutside } from "@/hooks/useClickOutside";

export function Dropdown({
  isScale,
  setScale,
  isActive,
  setIsActive,
}: IScaleParams) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, () => setIsActive(false));

  if (isActive) {
    return (
      <div ref={ref} className={isActive ? styles.dropdown : styles.hide}>
        <div>
          {options.map((option: number, index: number) => {
            return (
              <button
                key={index}
                className={styles.btn + " " + styles.hover}
                style={{
                  fontWeight: option === +isScale[0] ? 800 : 500,
                }}
                onClick={() => {
                  setIsActive(false);
                  setScale([option + ""]);
                }}
              >
                {option === +isScale[0]
                  ? option + "%" + " " + "✔"
                  : option + "%"}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
