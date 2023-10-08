"use client";
import styles from "@/app/styles/categories.module.scss";
import { BtnClose } from "../lib/BtnClose";
import { BtnSubmit } from "../lib/BtnSubmit";
import { SubConnection } from "../lib/Connections";
import React from "react";

export function SubCategoryForm({
  isSubCategories,
  setSubCategories,
  isAddSubCategory,
  setIsAddSubCategory,
  condition,
}: {
  isSubCategories: string[];
  setSubCategories: React.Dispatch<React.SetStateAction<string[]>>;
  isAddSubCategory: boolean;
  setIsAddSubCategory: React.Dispatch<React.SetStateAction<boolean>>;
  condition: boolean;
}) {
  const [isName, setName] = React.useState("");

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAddSubCategory]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubCategories([...isSubCategories, isName === "" ? "category" : isName]);
    setName("");
    setIsAddSubCategory(false);
    console.log("Category Name:", isName);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  if (isAddSubCategory)
    return (
      <div
        style={{
          maxHeight: "0rem",
          paddingRight: "2rem",
          transform: condition ? "translate(2rem,-1rem)" : "",
        }}
      >
        <SubConnection
          isSubCategories={isSubCategories}
          condition={condition}
          subCategory={""}
        />
        <form
          onSubmit={handleSubmit}
          className="center gap"
          style={{ transform: condition ? "translateX(-1.2rem)" : "" }}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder={"SubCategory"}
            onChange={onChange}
            className={styles.input}
          />
          <BtnClose
            handler={() => {
              setIsAddSubCategory(false);
            }}
          />
          <BtnSubmit />
        </form>
      </div>
    );
}
