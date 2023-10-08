import { ReactNode } from "react";
import styles from "@/app/styles/body.module.scss";

export function PageWrapper({ children }: { children: ReactNode }) {
  return <div className={styles.wrapper}>{children}</div>;
}
