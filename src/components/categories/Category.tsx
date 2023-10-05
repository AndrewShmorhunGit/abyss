import styles from "@/app/styles/categories.module.scss";
import { BtnPlus } from "./lib/BtnPlus";
import { BtnClose } from "./lib/BtnClose";
import { BtnEdit } from "./lib/BtnEdit";
import { Connection } from "./lib/Connections";
import { useCategoryOperations } from "@/hooks/useCategoryOperations";
import { Modal } from "../modal/Modal";
import { useState } from "react";

export function Category({ category }: { category: string }) {
  const { deleteCategory } = useCategoryOperations();
  const [isModal, setModal] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Connection />
      <div className="space-between" style={{ gap: "0.4rem" }}>
        <div className={styles.category}>{category}</div>
        <div className="center" style={{ gap: "0.4rem" }}>
          <div style={{ position: "relative" }}>
            <BtnPlus
              handler={() => {
                setModal(!isModal);
              }}
            />
          </div>
          <BtnEdit
            handler={() => {
              console.log("edit");
            }}
          />
          <BtnClose
            handler={() => {
              deleteCategory(category);
            }}
          />
        </div>
      </div>
      {isModal && <Modal setModal={setModal} />}
    </div>
  );
}
