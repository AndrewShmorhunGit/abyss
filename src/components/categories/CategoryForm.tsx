import React from "react";
import styles from "@/app/styles/categories.module.scss";
import { BtnClose } from "./lib/BtnClose";
import { BtnSubmit } from "./lib/BtnSubmit";
import { useCategoryForm } from "@/hooks/useCategoryForm";

export function CategoryForm() {
  const {
    isAddCategory,
    setIsAddCategory,
    isName,
    setName,
    inputRef,
    handleSubmit,
    onChange,
  } = useCategoryForm();

  if (isAddCategory)
    return (
      <form
        onSubmit={handleSubmit}
        className="center"
        style={{ gap: "0.8rem" }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={"Category Name"}
          onChange={onChange}
          className={styles.input}
        />
        <BtnClose
          handler={() => {
            setIsAddCategory(false);
          }}
        />

        <BtnSubmit />
      </form>
    );
}
