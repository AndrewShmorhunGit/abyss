import { SubCategory } from "./SubCategory";
import { SubCategoryForm } from "./SubCategoryForm";
import { SubConnection } from "../lib/Connections";

export function SubCategories({
  isSubCategories,
  setSubCategories,
  isAddSubCategory,
  setIsAddSubCategory,
  condition,
  palette,
}: {
  isSubCategories: string[];
  setSubCategories: React.Dispatch<React.SetStateAction<string[]>>;
  isAddSubCategory: boolean;
  setIsAddSubCategory: React.Dispatch<React.SetStateAction<boolean>>;
  condition: boolean;
  palette: string;
}) {
  const deleteCategory = (category: string) => {
    const newCategories = isSubCategories.filter(
      (isCategory) => isCategory !== category
    );
    setSubCategories(newCategories);
  };

  return (
    <div className="center" style={{ flexDirection: "row", gap: "5rem" }}>
      {isSubCategories.length !== 0 &&
        isSubCategories.map((sub, index) => {
          return (
            <div key={sub + index}>
              <SubConnection
                isSubCategories={isSubCategories}
                condition={condition}
              />
              <SubCategory
                category={sub}
                palette={palette}
                deleteCategory={deleteCategory}
              />
            </div>
          );
        })}
      {isAddSubCategory && (
        <SubCategoryForm
          isAddSubCategory={isAddSubCategory}
          setIsAddSubCategory={setIsAddSubCategory}
          isSubCategories={isSubCategories}
          setSubCategories={setSubCategories}
          condition={condition}
        />
      )}
    </div>
  );
}
