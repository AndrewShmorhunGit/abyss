"use client";
import styles from "@/app/styles/categories.module.scss";
import { useCategoriesContext } from "@/providers/categories.context";

export function RootConnection() {
  const { isAddCategory, isCategories } = useCategoriesContext();
  if (isAddCategory || isCategories.length >= 1) {
    return (
      <div className="center">
        <div className={styles.connection_root}></div>
      </div>
    );
  }
}

export function Connection() {
  const { isCategories, condition } = useCategoriesContext();
  if (isCategories.length > 0) {
    return (
      <div className="center">
        <div
          className={styles.connection}
          style={{
            height: condition ? "2rem" : "0rem",
          }}
        ></div>
      </div>
    );
  }
}
