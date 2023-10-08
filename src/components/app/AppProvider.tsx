"use client";
import { CategoriesContextProvider } from "@/context/categories.context";
import { ScaleContextProvider } from "@/context/scale.context";
import { ThemeContextProvider } from "@/context/theme.context";
import { TranslateContextProvider } from "@/context/translate.context";
import { ReactNode } from "react";

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <TranslateContextProvider>
      <ScaleContextProvider>
        <ThemeContextProvider>
          <CategoriesContextProvider>{children}</CategoriesContextProvider>
        </ThemeContextProvider>
      </ScaleContextProvider>
    </TranslateContextProvider>
  );
}
