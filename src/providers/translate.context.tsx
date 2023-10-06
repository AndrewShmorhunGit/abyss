"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export const TranslateContext = createContext<{
  isPosition: {
    x: number;
    y: number;
  };
  setPosition: Dispatch<
    SetStateAction<{
      x: number;
      y: number;
    }>
  >;
} | null>(null);

export function TranslateContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isPosition, setPosition] = useState({ x: 0, y: 0 });

  return (
    <TranslateContext.Provider value={{ isPosition, setPosition }}>
      {children}
    </TranslateContext.Provider>
  );
}

export function useTranslateContext() {
  const context = useContext(TranslateContext);
  if (!context) {
    throw new Error(
      "useTranslateContext must be used within a TranslateContextProvider"
    );
  }
  return context;
}
