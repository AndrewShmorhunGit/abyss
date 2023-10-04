"use client";
import React, { Dispatch, SetStateAction } from "react";
import styles from "@/app/styles/body.module.scss";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { CategoryRoot } from "./CategoryRoot";
import { CategoryForm } from "./CategoryForm";

export function Categories() {
  const { state: isCategories, setState: setCategories } =
    useLocalStorageState("categories");
  const [isName, setName] = React.useState("");
  const [isAddCategory, setIsAddCategory] = React.useState(false);

  return (
    <div
      className={`center + ${styles.categories}`}
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "100vw",
        minHeight: "30rem",
        gap: "2.4rem",
      }}
    >
      <CategoryRoot setIsAddCategory={setIsAddCategory} />

      <div className="center" style={{ flexDirection: "row", gap: "5rem" }}>
        {isCategories &&
          isCategories.map((category: string, index: number) => {
            return (
              <div
                key={category + index}
                style={{
                  border: "solid 1px grey",
                  backgroundColor: "orange",
                  width: "20rem",
                }}
              >
                {category}
              </div>
            );
          })}
      </div>
      <CategoryForm
        isCategories={isCategories}
        setCategories={setCategories}
        isAddCategory={isAddCategory}
        setIsAddCategory={setIsAddCategory}
        isName={isName}
        setName={setName}
      />
    </div>
  );
}
