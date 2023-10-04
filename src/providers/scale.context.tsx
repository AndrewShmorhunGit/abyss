"use client";
import { useScale } from "@/hooks/useScale";
import { IScaleParams } from "@/interfaces/IScale";
import { ReactNode, createContext, useContext } from "react";

export const ScaleContext = createContext<IScaleParams | null>(null);

export function ScaleContextProvider({ children }: { children: ReactNode }) {
  const { isActive, setIsActive, isScale, setScale } = useScale();

  return (
    <ScaleContext.Provider value={{ isActive, setIsActive, isScale, setScale }}>
      {children}
    </ScaleContext.Provider>
  );
}

export function useScaleContext() {
  const context = useContext(ScaleContext);
  if (!context) {
    throw new Error(
      "useScaleContext must be used within a ScaleContextProvider"
    );
  }
  return context;
}
