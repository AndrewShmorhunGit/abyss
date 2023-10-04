"use client";
import React from "react";
import { CategoryForm } from "./CategoryForm";
import { CategoryRoot } from "./CategoryRoot";
import { Category } from "./Category";
import { useCategoryForm } from "@/hooks/useCategoryForm";

export function CategoriesContent() {
  const { isCategories } = useCategoryForm();
  return (
    <div className="center" style={{ flexDirection: "row", gap: "5rem" }}>
      {isCategories.length &&
        isCategories.map((category: string, index: number) => (
          <Category key={category + index} category={category} />
        ))}
      <CategoryForm />
    </div>
  );
}
