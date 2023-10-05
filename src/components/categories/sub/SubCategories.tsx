import { SubCategory } from "./SubCategory";
import { SubCategoryForm } from "./SubCategoryForm";
import { SubConnection } from "../lib/Connections";

export function SubCategories({
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
  return (
    <div className="center" style={{ flexDirection: "row", gap: "5rem" }}>
      {isSubCategories.length !== 0 &&
        isSubCategories.map((sub, index) => {
          return (
            <div>
              <SubConnection
                isSubCategories={isSubCategories}
                condition={condition}
              />
              <SubCategory
                key={sub + index}
                category={sub}
                palette={"lightblue"}
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
