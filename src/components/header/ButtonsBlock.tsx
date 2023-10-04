"use client";
import React from "react";
import { ListButton } from "./ListButton";
import { MinusButton } from "./MinusButton";
import { NavButton } from "./NavButton";
import { PlusButton } from "./PlusButton";
import { ScaleDropdown } from "./ScaleDropdown";
import { MainButtonsWrapper, ButtonsWrapper } from "./Wrappers";
import { useScale } from "@/hooks/useScale";

export function ButtonsBlock() {
  const { isActive, setIsActive, isScale, setScale } = useScale();
  return (
    <MainButtonsWrapper>
      <ButtonsWrapper>
        <ListButton />
        <NavButton />
      </ButtonsWrapper>
      <ButtonsWrapper>
        <MinusButton isScale={isScale} setScale={setScale} />
        <ScaleDropdown
          isScale={isScale}
          setScale={setScale}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        <PlusButton isScale={isScale} setScale={setScale} />
      </ButtonsWrapper>
    </MainButtonsWrapper>
  );
}
