import { CategoriesContextProvider } from "@/providers/categories.context";
import { ScaleContextProvider } from "@/providers/scale.context";
import { ReactNode } from "react";

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ScaleContextProvider>
      <CategoriesContextProvider>{children}</CategoriesContextProvider>
    </ScaleContextProvider>
  );
}
