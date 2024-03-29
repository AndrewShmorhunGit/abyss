"use client";
import { ReactNode } from "react";
import styles from "@/app/styles/categories.module.scss";
import { useScaleContext } from "@/context/scale.context";

export function CategoriesBox({
  children,
  forwardedRef,
}: {
  children: ReactNode;
  forwardedRef: React.RefObject<HTMLDivElement>;
}) {
  const { isScale } = useScaleContext();
  return (
    <div
      ref={forwardedRef}
      className={styles.box}
      style={{
        transform: `scale(${+isScale[0] / 100})`,
      }}
      data-testid="categories-box"
    >
      {children}
    </div>
  );
}
