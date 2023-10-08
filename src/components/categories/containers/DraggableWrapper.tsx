"use client";
import { useDraggableCategories } from "@/hooks/useDraggableCategories";
import { ReactNode } from "react";
import { CategoriesBox } from "../categories/CategoriesBox";
import { CategoriesContainer } from "../categories/CategoriesContainer";

export function DraggableWrapper({ children }: { children: ReactNode }) {
  const { containerRef, boxRef } = useDraggableCategories();
  return (
    <CategoriesContainer forwardedRef={containerRef}>
      <CategoriesBox forwardedRef={boxRef}>{children}</CategoriesBox>
    </CategoriesContainer>
  );
}
