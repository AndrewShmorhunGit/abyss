"use client";
import { ReactNode } from "react";
import styles from "@/app/styles/categories.module.scss";
import { useScaleContext } from "@/providers/scale.context";

export function CategoriesContainer({ children }: { children: ReactNode }) {
  const { isScale } = useScaleContext();
  return (
    <div
      className={`center${" " + styles.container}`}
      style={{
        transform: `scale(${isScale / 100})`,
      }}
    >
      {children}
    </div>
  );
}
