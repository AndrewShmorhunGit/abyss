import { CategoriesContent } from "./CategoriesContent";
import { CategoriesRoot } from "./CategoriesRoot";
import { DraggableWrapper } from "../containers/DraggableWrapper";

export function Categories() {
  return (
    <DraggableWrapper>
      <CategoriesRoot />
      <CategoriesContent />
    </DraggableWrapper>
  );
}
