import { IScaleParams } from "@/interfaces/IScale";
import React from "react";

export const useScale = (): IScaleParams => {
  const [isActive, setIsActive] = React.useState(false);
  const [isScale, setScale] = React.useState(100);

  return { isScale, setScale, isActive, setIsActive };
};
