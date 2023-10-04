"use client";
import React from "react";
import styles from "@/app/styles/header.module.scss";
import { Dropdown } from "./Dropdown";
import { IScaleParams } from "@/interfaces/IScale";
export function ScaleDropdown({
  isScale,
  setScale,
  isActive,
  setIsActive,
}: IScaleParams) {
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
