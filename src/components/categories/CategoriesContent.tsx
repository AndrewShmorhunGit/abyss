"use client";
import { CategoryForm } from "./CategoryForm";
import { Category } from "./Category";
import { useCategoryForm } from "@/hooks/useCategoryForm";

export function CategoriesContent() {
  const { isCategories } = useCategoryForm();
  return (
    <div className="center" style={{ flexDirection: "row", gap: "5rem" }}>
      {isCategories.length !== 0 &&
        isCategories.map((category: string, index: number) => (
          <Category key={category + index} category={category} />
        ))}

      <CategoryForm />
    </div>
  );
}
