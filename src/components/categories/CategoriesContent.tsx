"use client";
import { CategoryForm } from "./CategoryForm";
import { Category } from "./Category";
import { useCategoriesContext } from "@/providers/categories.context";

export function CategoriesContent() {
  const { isCategories } = useCategoriesContext();
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
