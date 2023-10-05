import styles from "@/app/styles/modal.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";
import React, { Dispatch, SetStateAction } from "react";

export function Modal({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
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
          handler={() => console.log("service")}
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
  handler: Function;
}) {
  return (
    <button
      className={styles.btn}
      onClick={() => {
        handler;
      }}
    >
      {title}
    </button>
  );
}
