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
  const [isSubCategories, setSubCategories] = useState<string[]>([]);
  return (
    <div className="column">
      <Connection />
      <div className="space-between gap">
        <div className={styles.category}>{category}</div>
        <div className="center gap">
          <div className="relative">
            <BtnPlus
              handler={() => {
                setModal(!isModal);
              }}
            />
            {isModal && <Modal setModal={setModal} />}
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
    </div>
  );
}
