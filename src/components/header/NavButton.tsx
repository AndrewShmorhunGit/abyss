"use client";
import styles from "@/app/styles/header.module.scss";
import { useTranslateContext } from "@/providers/translate.context";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

export function NavButton() {
  const { setPosition } = useTranslateContext();

  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    if (!intervalId) {
      const newIntervalId = setInterval(() => {
        setPosition({ x: 0, y: 0 });
      }, 10);
      setIntervalId(newIntervalId);
    }
  };

  const stopInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <button
      className={styles.btn}
      onClick={startInterval}
      onMouseLeave={stopInterval}
    >
      <FaLocationArrow />
    </button>
  );
}
