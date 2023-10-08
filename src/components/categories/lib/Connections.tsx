"use client";
import styles from "@/app/styles/categories.module.scss";
import { useCategoriesContext } from "@/providers/categories.context";
import { useThemeContext } from "@/providers/theme.context";

export function RootConnection() {
  const { isAddCategory, isCategories } = useCategoriesContext();
  if (isAddCategory || isCategories.length >= 1) {
    return (
      <div className="center">
        <div className={styles.connection_root}></div>
      </div>
    );
  }
}

export function Connection({ category }: { category: string }) {
  const { isCategories, condition } = useCategoriesContext();

  const position = isCategories.indexOf(category) + 1;

  if (isCategories.length > 0) {
    return (
      <div className="center">
        <div
          className={styles.connection}
          style={{
            height: condition ? "2rem" : "0rem",
            position: "relative",
          }}
        >
          <Cover position={position} length={isCategories.length} />
        </div>
      </div>
    );
  }
}

export function RootSubConnection({
  isSubCategories,
  isAddSubCategory,
}: {
  isSubCategories: string[];
  isAddSubCategory: boolean;
}) {
  if (isAddSubCategory || isSubCategories.length >= 1) {
    return (
      <div className="center">
        <div className={styles.connection_root}></div>
      </div>
    );
  }
}

export function SubConnection({
  isSubCategories,
  condition,
  subCategory,
}: {
  isSubCategories: string[];
  condition: boolean;
  subCategory: string;
}) {
  const position = isSubCategories.indexOf(subCategory) + 1;

  if (isSubCategories.length > 0) {
    return (
      <div className="center">
        <div
          className={styles.connection}
          style={{
            height: condition ? "2rem" : "0rem",
          }}
        >
          {/* <Cover position={position} length={isSubCategories.length} /> */}
        </div>
      </div>
    );
  }
}

export function Cover({
  position,
  length,
}: {
  position: number;
  length: number;
}) {
  const { isAddCategory } = useCategoriesContext();
  const { isLightTheme } = useThemeContext();
  const left = position === 1 && length > 1;
  const right = position === length && length > 1;

  // styles =

  if (left || right) {
    return (
      <div
        className={isLightTheme ? "cover" : "cover-dark"}
        style={{
          display: right && isAddCategory ? "none" : "block",
          right: right ? 0 : "",
          position: "absolute",
          top: 0,
          width: "100rem",
          height: "1px",
          transform: `translate(${left ? "-" : ""}100%,-1px) rotate(180deg)`,
        }}
      ></div>
    );
  }
}
