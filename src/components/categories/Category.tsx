import styles from "@/app/styles/categories.module.scss";
import { BtnPlus } from "./lib/BtnPlus";
import { BtnClose } from "./lib/BtnClose";
import { BtnEdit } from "./lib/BtnEdit";
import { Connection, RootSubConnection } from "./lib/Connections";
import { useCategoryOperations } from "@/hooks/useCategoryOperations";
import { Modal } from "../modal/Modal";
import { useState } from "react";
import { SubCategories } from "./sub/SubCategories";
import { SubRootWrapper } from "./sub/SubRootWrapper";

export function Category({
  category,
  palette,
}: {
  category: string;
  palette?: string;
}) {
  const { deleteCategory } = useCategoryOperations();

  const [isModal, setModal] = useState(false);
  const [isSubCategories, setSubCategories] = useState<string[]>([]);
  const [isAddSubCategory, setIsAddSubCategory] = useState(false);

  const condition =
    isSubCategories.length > 1 ||
    (isAddSubCategory && isSubCategories.length >= 1);

  function CategoryBlock() {
    return (
      <div className="center gap">
        <div className={styles.category} style={{ background: palette }}>
          {category}
        </div>
        <div className="center gap">
          <div className="relative">
            <BtnPlus
              handler={() => {
                setModal(!isModal);
              }}
            />
            {isModal && (
              <Modal
                setModal={setModal}
                setIsAddSubCategory={setIsAddSubCategory}
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
              deleteCategory(category);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="column" style={{ maxHeight: "0rem" }}>
      <Connection />
      <CategoryBlock />
      <SubRootWrapper isAddSubCategory={isAddSubCategory} condition={condition}>
        <RootSubConnection
          isSubCategories={isSubCategories}
          isAddSubCategory={isAddSubCategory}
        />
      </SubRootWrapper>
      {isSubCategories && (
        <SubCategories
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
