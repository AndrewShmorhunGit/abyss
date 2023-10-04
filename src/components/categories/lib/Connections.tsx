import { useCategoriesContext } from "@/providers/categories.context";

export function RootConnection() {
  const { isAddCategory, isCategories } = useCategoriesContext();
  if (isAddCategory || isCategories.length > 1) {
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
  const { isCategories } = useCategoriesContext();
  if (isCategories.length > 0) {
    return (
      <div className="center">
        <div
          style={{
            height: "2rem",
            width: "1px",
            background: "lightgray",
            transform: "translateX(-4rem)",
          }}
        ></div>
      </div>
    );
  }
}
