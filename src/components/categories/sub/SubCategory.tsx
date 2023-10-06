"use client";
import styles from "@/app/styles/categories.module.scss";
import { RootSubConnection } from "../lib/Connections";
import { useState } from "react";
import { BtnEdit } from "../lib/BtnEdit";
import { BtnClose } from "../lib/BtnClose";
import { Modal } from "@/components/modal/Modal";
import { BtnPlus } from "../lib/BtnPlus";
import { SubCategories } from "./SubCategories";
import { SubRootWrapper } from "./SubRootWrapper";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";

export function SubCategory({
  category,
  palette,
  deleteCategory,
}: {
  category: string;
  palette: string;
  deleteCategory: (category: string) => void;
}) {
  const [isModal, setModal] = useState(false);
  const { state: isSubCategories, setState: setSubCategories } =
    useLocalStorageState(`${category}/sub/categories`);
  const [isAddSubCategory, setIsAddSubCategory] = useState(false);

  const condition =
    isSubCategories.length > 1 ||
    (isAddSubCategory && isSubCategories.length >= 1);

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
      <SubCategoryBlock />
      <SubRootWrapper isAddSubCategory={isAddSubCategory} condition={condition}>
        <RootSubConnection
          isSubCategories={isSubCategories}
          isAddSubCategory={isAddSubCategory}
        />
      </SubRootWrapper>
      {isSubCategories && (
        <SubCategories
          isSubCategories={isSubCategories}
          setSubCategories={setSubCategories}
          isAddSubCategory={isAddSubCategory}
          setIsAddSubCategory={setIsAddSubCategory}
          condition={condition}
          palette="lightgrey"
        />
      )}
    </div>
  );
}
