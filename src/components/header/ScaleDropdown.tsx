"use client";
import React from "react";
import styles from "@/app/styles/header.module.scss";
import { Dropdown } from "./Dropdown";
import { useScaleContext } from "@/providers/scale.context";

export function ScaleDropdown() {
  const { isActive, setIsActive, isScale, setScale } = useScaleContext();
  return (
    <div>
      <button
        className={styles.btn}
        onClick={() => (isActive ? "" : setIsActive(true))}
      >
        {isScale}%
      </button>
      {isActive && (
        <Dropdown
          isScale={isScale}
          setScale={setScale}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      )}
    </div>
  );
}
