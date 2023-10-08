"use client";
import React from "react";
import styles from "@/app/styles/categories.module.scss";
import { BtnClose } from "./lib/BtnClose";
import { BtnSubmit } from "./lib/BtnSubmit";
import { useCategoryForm } from "@/hooks/useCategoryForm";
import { Connection } from "./lib/Connections";

export function CategoryForm() {
  const { isAddCategory, setIsAddCategory, inputRef, handleSubmit, onChange } =
    useCategoryForm();

  if (isAddCategory)
    return (
      <div style={{ maxHeight: "0rem" }} data-testid="category-form">
        <Connection />
        <form onSubmit={handleSubmit} className="center gap">
          <input
            ref={inputRef}
            type="text"
            placeholder={"category name"}
            onChange={onChange}
            className={styles.input}
            data-testid="category-input"
          />
          <BtnClose
            handler={() => {
              setIsAddCategory(false);
            }}
          />
          <BtnSubmit />
        </form>
      </div>
    );
}
