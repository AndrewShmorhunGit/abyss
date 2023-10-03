"use client";
import React from "react";
import { ListButton } from "./ListButton";
import { MinusButton } from "./MinusButton";
import { NavButton } from "./NavButton";
import { PlusButton } from "./PlusButton";
import { ScaleDropdown } from "./ScaleDropdown";
import { MainButtonsWrapper, ButtonsWrapper } from "./Wrappers";

export function ButtonsBlock() {
  const [isActive, setIsActive] = React.useState(true);
  const [isScale, setScale] = React.useState(100);
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
