"use client";
import styles from "@/app/styles/categories.module.scss";
import { BtnPlus } from "./lib/BtnPlus";
import { useCategoriesContext } from "@/providers/categories.context";

export function CategoryRoot() {
  const { setIsAddCategory } = useCategoriesContext();
  return (
    <div className="center" style={{ gap: "1.2rem" }}>
      <div className={styles.categories}>Categories</div>
      <BtnPlus
        handler={() => {
          setIsAddCategory(true);
        }}
      />
    </div>
  );
}
