import React from "react";
import { ListButton } from "./ListButton";
import { MinusButton } from "./MinusButton";
import { NavButton } from "./NavButton";
import { PlusButton } from "./PlusButton";
import { ScaleDropdown } from "./ScaleDropdown";
import { MainButtonsWrapper, ButtonsWrapper } from "./Wrappers";

export function ButtonsBlock() {
  return (
    <MainButtonsWrapper>
      <ButtonsWrapper>
        <ListButton />
        <NavButton />
      </ButtonsWrapper>
      <ButtonsWrapper>
        <MinusButton />
        <ScaleDropdown />
        <PlusButton />
      </ButtonsWrapper>
    </MainButtonsWrapper>
  );
}
