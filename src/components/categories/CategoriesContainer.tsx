import { ReactNode } from "react";
import styles from "@/app/styles/categories.module.scss";

export function CategoriesContainer({
  children,
  forwardedRef,
}: {
  children: ReactNode;
  forwardedRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      ref={forwardedRef}
      className={`center${" " + styles.container}`}
      data-testid="categories"
    >
      {children}
    </div>
  );
}
