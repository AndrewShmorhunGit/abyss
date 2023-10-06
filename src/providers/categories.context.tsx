"use client";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { ICategoryParams } from "@/interfaces/ICategory";
import { ReactNode, createContext, useContext, useState } from "react";

export const CategoriesContext = createContext<ICategoryParams | null>(null);

export function CategoriesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { state: isCategories, setState: setCategories } = useLocalStorageState<
    string[]
  >("categories", []);
  const [isName, setName] = useState("");
  const [isAddCategory, setIsAddCategory] = useState(false);
  const condition =
    isCategories.length > 1 || (isAddCategory && isCategories.length >= 1);
  return (
    <CategoriesContext.Provider
      value={{
        isCategories,
        setCategories,
        isAddCategory,
        setIsAddCategory,
        isName,
        setName,
        condition,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategoriesContext() {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error(
      "useCategoriesContext must be used within a ScaleContextProvider"
    );
  }
  return context;
}
