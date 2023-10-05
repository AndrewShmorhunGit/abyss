"use client";
import styles from "@/app/styles/categories.module.scss";
import { BtnPlus } from "./lib/BtnPlus";
import { useCategoriesContext } from "@/providers/categories.context";
import { RootConnection } from "./lib/Connections";
import { ReactNode } from "react";

export function CategoriesRoot() {
  const { setIsAddCategory } = useCategoriesContext();

  return (
    <RootWrapper>
      <div className="center gap" style={{ transform: "translateX(1.2rem)" }}>
        <div>
          <div className={styles.categories}>Categories</div>
        </div>
        <BtnPlus
          handler={() => {
            setIsAddCategory(true);
          }}
        />
      </div>
      <RootConnection />
    </RootWrapper>
  );
}

function RootWrapper({ children }: { children: ReactNode }) {
  const { isAddCategory, condition } = useCategoriesContext();
  return (
    <div
      style={{
        marginRight: isAddCategory ? "15.8rem" : "17rem",
        borderBottom: condition ? "1px lightgrey solid" : "none",
        marginLeft: "9rem",
      }}
    >
      {children}
    </div>
  );
}
