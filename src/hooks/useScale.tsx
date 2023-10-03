import { IScaleSettings } from "@/interfaces/IScale";
import React from "react";

export const useScale = (): IScaleSettings => {
  const [isActive, setIsActive] = React.useState(true);
  const [isScale, setScale] = React.useState(100);

  return { isScale, setScale, isActive, setIsActive };
};
