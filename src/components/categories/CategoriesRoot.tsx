"use client";
import styles from "@/app/styles/categories.module.scss";
import { BtnPlus } from "./lib/BtnPlus";
import { useCategoriesContext } from "@/providers/categories.context";
import { RootConnection } from "./lib/Connections";

export function CategoriesRoot() {
  const { setIsAddCategory, isAddCategory, isCategories } =
    useCategoriesContext();
  const condition =
    isCategories.length > 1 || (isAddCategory && isCategories.length >= 1);
  return (
    <div
      style={{
        borderBottom: condition ? "1px lightgrey solid" : "none",
        marginLeft: "9rem",
        marginRight: isAddCategory ? "15.8rem" : "17rem",
      }}
    >
      <div className="center" style={{ gap: "0.4rem" }}>
        <div>
          <div className={styles.categories}>Categories</div>
        </div>
        <BtnPlus
          handler={() => {
            setIsAddCategory(true);
          }}
        />
      </div>
      <RootConnection />
    </div>
  );
}
