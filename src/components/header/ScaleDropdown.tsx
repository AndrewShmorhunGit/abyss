"use client";
import React from "react";
import styles from "@/app/styles/header.module.scss";
import { Dropdown } from "./Dropdown";
import { IScaleSettings } from "@/interfaces/IScale";
export function ScaleDropdown({
  isScale,
  setScale,
  isActive,
  setIsActive,
}: IScaleSettings) {
  return (
    <div>
      <button className={styles.btn} onClick={() => setIsActive(!isActive)}>
        {isScale}%
      </button>
      <Dropdown
        isScale={isScale}
        setScale={setScale}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
}
