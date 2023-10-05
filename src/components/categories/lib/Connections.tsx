"use client";
import { useCategoriesContext } from "@/providers/categories.context";

export function RootConnection() {
  const { isAddCategory, isCategories } = useCategoriesContext();
  if (isAddCategory || isCategories.length >= 1) {
    return (
      <div className="center">
        <div
          style={{
            height: "2rem",
            width: "1px",
            background: "lightgray",
            transform: "translateX(-1.6rem)",
          }}
        ></div>
      </div>
    );
  }
}

export function Connection() {
  const { isAddCategory, isCategories } = useCategoriesContext();
  if (isCategories.length > 0) {
    return (
      <div className="center">
        <div
          style={{
            height:
              isCategories.length > 1 ||
              (isAddCategory && isCategories.length >= 1)
                ? "2rem"
                : "0rem",
            width: "1px",
            background: "lightgray",
            transform: "translateX(-4rem)",
            transition: "height .4s linear",
          }}
        ></div>
      </div>
    );
  }
}
