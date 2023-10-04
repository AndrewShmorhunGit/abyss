import { CategoriesContent } from "./CategoriesContent";
import { CategoriesRoot } from "./CategoriesRoot";
import { DraggableWrapper } from "./DraggableWrapper";

export function Categories() {
  return (
    <DraggableWrapper>
      <CategoriesRoot />
      <CategoriesContent />
    </DraggableWrapper>
  );
}
