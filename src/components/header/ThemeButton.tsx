"use client";
import styles from "@/app/styles/header.module.scss";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

export function ThemeButton() {
  const { state: isMode, setState: setMode } = useLocalStorageState<string>(
    "mode",
    "light"
  );

  useEffect(() => {
    if (isMode === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    isMode === "light" ? setMode("dark") : setMode("light");
    document.documentElement.classList.toggle("dark");
    console.log(isMode);
  };

  const style = {};

  return (
    <label className={styles.switch}>
      <input
        className="relative"
        type="checkbox"
        name="theme"
        checked={isMode === "light" ? false : true}
        onChange={toggleTheme}
      />

      <span className={styles.slider}></span>
      {isMode === "light" ? (
        <MdDarkMode
          style={{ position: "absolute", right: "0.5rem", top: "1rem" }}
          size={20}
        />
      ) : (
        <BsFillSunFill
          style={{ position: "absolute", left: "0.5rem", top: "1rem" }}
          size={20}
        />
      )}
    </label>
  );
}
