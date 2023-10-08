"use client";
import styles from "@/app/styles/categories.module.scss";
import { useCategoriesContext } from "@/context/categories.context";

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

export function RootSubConnection({
  isSubCategories,
  isAddSubCategory,
}: {
  isSubCategories: string[];
  isAddSubCategory: boolean;
}) {
  if (isAddSubCategory || isSubCategories.length >= 1) {
    return (
      <div className="center">
        <div className={styles.connection_root}></div>
      </div>
    );
  }
}

export function SubConnection({
  isSubCategories,
  condition,
}: {
  isSubCategories: string[];
  condition: boolean;
}) {
  if (isSubCategories.length > 0) {
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
