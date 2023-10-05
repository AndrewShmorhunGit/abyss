import styles from "@/app/styles/modal.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";
import React, { Dispatch, SetStateAction } from "react";

export function Modal({
  setModal,
  setIsAddSubCategory,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
  setIsAddSubCategory: Dispatch<SetStateAction<boolean>>;
}) {
  const title = "What do you want to create?";
  const ref = React.useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, () => setModal(false));
  return (
    <div ref={ref} className={styles.modal}>
      <h3 className={styles.title}>{title}</h3>
      <div style={{ display: "flex", gap: "2rem" }}>
        <ModalButton
          title={"category"}
          handler={() => {
            setIsAddSubCategory(true);
            setModal(false);
          }}
        />
        <ModalButton title={"service"} handler={() => console.log("service")} />
      </div>
    </div>
  );
}

export function ModalButton({
  title,
  handler,
}: {
  title: string;
  handler: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={styles.btn} onClick={handler}>
      {title}
    </button>
  );
}
