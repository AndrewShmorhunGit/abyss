import { ReactNode } from "react";

export function SubRootWrapper({
  isAddSubCategory,
  condition,
  children,
}: {
  isAddSubCategory: boolean;
  condition: boolean;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        marginRight: isAddSubCategory ? "15.8rem" : "17rem",
        borderBottom: condition ? "1px lightgrey solid" : "none",
        marginLeft: "9rem",
        maxHeight: "2rem",
      }}
    >
      {children}
    </div>
  );
}
