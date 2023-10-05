import styles from "@/app/styles/categories.module.scss";
import { RootSubConnection, SubConnection } from "../lib/Connections";
import { useState } from "react";
import { BtnEdit } from "../lib/BtnEdit";
import { BtnClose } from "../lib/BtnClose";
import { Modal } from "@/components/modal/Modal";
import { BtnPlus } from "../lib/BtnPlus";
import { SubCategories } from "./SubCategories";
import { SubCategoryForm } from "./SubCategoryForm";
import { SubRootWrapper } from "./SubRootWrapper";
export function SubCategory({
  category,
  palette,
}: {
  category: string;
  palette: string;
}) {
  const [isModalOne, setModalOne] = useState(false);
  const [isSubCategoriesOne, setSubCategoriesOne] = useState<string[]>([]);
  const [isAddSubCategoryOne, setIsAddSubCategoryOne] = useState(false);

  const conditionOne =
    isSubCategoriesOne.length > 1 ||
    (isAddSubCategoryOne && isSubCategoriesOne.length >= 1);

  function SubCategoryBlock() {
    return (
      <div className="center gap">
        <div className={styles.category} style={{ background: palette }}>
          {category}
        </div>

        <div className="center gap">
          <div className="relative">
            <BtnPlus
              handler={() => {
                setModalOne(!isModalOne);
              }}
            />
            {isModalOne && (
              <Modal
                setModal={setModalOne}
                setIsAddSubCategory={setIsAddSubCategoryOne}
              />
            )}
          </div>
          <BtnEdit
            handler={() => {
              console.log("edit");
            }}
          />
          <BtnClose
            handler={() => {
              console.log("delete");
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="column" style={{ maxHeight: "0rem" }}>
      <SubCategoryBlock />
      <SubRootWrapper
        isAddSubCategory={isAddSubCategoryOne}
        condition={conditionOne}
      >
        <RootSubConnection
          isSubCategories={isSubCategoriesOne}
          isAddSubCategory={isAddSubCategoryOne}
        />
      </SubRootWrapper>
      {isSubCategoriesOne && (
        <SubCategories
          isSubCategories={isSubCategoriesOne}
          setSubCategories={setSubCategoriesOne}
          isAddSubCategory={isAddSubCategoryOne}
          setIsAddSubCategory={setIsAddSubCategoryOne}
          condition={conditionOne}
        />
      )}
    </div>
  );
}
