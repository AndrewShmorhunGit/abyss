"use client";
import React from "react";
import { useCategoriesContext } from "@/providers/categories.context";

export const useCategoryForm = () => {
  const {
    isCategories,
    setCategories,
    isAddCategory,
    setIsAddCategory,
    isName,
    setName,
  } = useCategoriesContext();

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAddCategory]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCategories([...isCategories, isName === "" ? "category" : isName]);
    setName("");
    setIsAddCategory(false);
    console.log("Category Name:", isName);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return {
    isCategories,
    setCategories,
    isAddCategory,
    setIsAddCategory,
    isName,
    setName,
    inputRef,
    handleSubmit,
    onChange,
  };
};
