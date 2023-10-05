import { useCategoriesContext } from "@/providers/categories.context";

export const useCategoryOperations = () => {
  const { setCategories, isCategories } = useCategoriesContext();

  const deleteCategory = (category: string) => {
    const categoryIndex = isCategories.indexOf(category);
    const newCategories = isCategories.filter(
      (isCategory) => isCategory !== category
    );
    setCategories(newCategories);
  };

  return { deleteCategory };
};
