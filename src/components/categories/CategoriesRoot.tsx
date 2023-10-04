"use client";
import styles from "@/app/styles/categories.module.scss";
import { BtnPlus } from "./lib/BtnPlus";
import { useCategoriesContext } from "@/providers/categories.context";
import { RootConnection } from "./lib/Connections";

export function CategoriesRoot() {
  const { setIsAddCategory, isCategories } = useCategoriesContext();
  return (
    <div
      style={{
        borderBottom: isCategories.length > 1 ? "1px red solid" : "none",
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
