import styles from "@/app/styles/header.module.scss";
import { ReactNode } from "react";

export function HeaderWrapper({ children }: { children: ReactNode }) {
  return <div className={`space-between ${styles.main}`}>{children}</div>;
}

export function ButtonsWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className="space-between"
      style={{ gap: "0.4rem", position: "relative", overflow: "visible" }}
    >
      {children}
    </div>
  );
}

export function MainButtonsWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="space-between" style={{ gap: "1.2rem" }}>
      {children}
    </div>
  );
}
