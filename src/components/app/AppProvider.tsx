"use client";
import { CategoriesContextProvider } from "@/providers/categories.context";
import { ScaleContextProvider } from "@/providers/scale.context";
import { ThemeContextProvider } from "@/providers/theme.context";
import { TranslateContextProvider } from "@/providers/translate.context";
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
