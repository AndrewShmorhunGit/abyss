import { CategoriesContextProvider } from "@/providers/categories.context";
import { ScaleContextProvider } from "@/providers/scale.context";
import { TranslateContextProvider } from "@/providers/translate.context";
import { ReactNode } from "react";

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <TranslateContextProvider>
      <ScaleContextProvider>
        <CategoriesContextProvider>{children}</CategoriesContextProvider>
      </ScaleContextProvider>
    </TranslateContextProvider>
  );
}
