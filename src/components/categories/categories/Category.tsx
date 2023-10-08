"use client";
import styles from "@/app/styles/categories.module.scss";
import { BtnPlus } from "../buttons/BtnPlus";
import { BtnClose } from "../buttons/BtnClose";
import { BtnEdit } from "../buttons/BtnEdit";
import { Connection, Cover, RootSubConnection } from "../lib/Connections";
import { useCategoryOperations } from "@/hooks/useCategoryOperations";
import { Modal } from "../../modal/Modal";
import { useState } from "react";
import { SubCategories } from "../sub-categories/SubCategories";
import { SubRootWrapper } from "../sub-categories/SubRootWrapper";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";

export function Category({
  category,
  palette,
}: {
  category: string;
  palette?: string;
}) {
  const { deleteCategory } = useCategoryOperations();

  const [isModal, setModal] = useState(false);
  const { state: isSubCategories, setState: setSubCategories } =
    useLocalStorageState<string[]>(`${category}/categories`, []);

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
      <Connection category={category} />
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
          palette="lightblue"
        />
      )}
    </div>
  );
}
