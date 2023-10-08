import { useCategoriesContext } from "@/context/categories.context";

export const useCategoryOperations = () => {
  const { setCategories, isCategories } = useCategoriesContext();

  const deleteCategory = (category: string) => {
    const newCategories = isCategories.filter(
      (isCategory) => isCategory !== category
    );
    setCategories(newCategories);
    localStorage.removeItem(`${category}/categories`);
  };

  return { deleteCategory };
};
