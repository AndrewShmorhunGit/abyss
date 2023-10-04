import styles from "@/app/styles/categories.module.scss";
import { BtnPlus } from "./lib/BtnPlus";
import { BtnClose } from "./lib/BtnClose";
import { BtnEdit } from "./lib/BtnEdit";

export function Category({ category }: { category: string }) {
  return (
    <div className="space-between" style={{ gap: "0.4rem" }}>
      <div className={styles.category}>{category}</div>
      <BtnPlus
        handler={() => {
          console.log("hi");
        }}
      />
      <BtnEdit
        handler={() => {
          console.log("edit");
        }}
      />
      <BtnClose
        handler={() => {
          console.log("close");
        }}
      />
    </div>
  );
}
