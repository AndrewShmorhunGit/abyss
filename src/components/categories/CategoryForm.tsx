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
      <div style={{ maxHeight: "0rem" }}>
        <Connection />
        <form
          onSubmit={handleSubmit}
          className="center"
          style={{ gap: "0.4rem" }}
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
      </div>
    );
}
