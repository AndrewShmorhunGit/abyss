import React from "react";

import { CategoriesContainer } from "./CategoriesContainer";
import { CategoriesBox } from "./CategoriesBox";
import { CategoriesContent } from "./CategoriesContent";
import { CategoryRoot } from "./CategoryRoot";

export function Categories() {
  return (
    <CategoriesContainer>
      <CategoriesBox>
        <CategoryRoot />
        <CategoriesContent />
      </CategoriesBox>
    </CategoriesContainer>
  );
}
