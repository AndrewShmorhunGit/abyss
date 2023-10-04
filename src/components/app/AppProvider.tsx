import { ScaleContextProvider } from "@/providers/scale.context";
import { ReactNode } from "react";

export function AppProvider({ children }: { children: ReactNode }) {
  return <ScaleContextProvider>{children}</ScaleContextProvider>;
}
