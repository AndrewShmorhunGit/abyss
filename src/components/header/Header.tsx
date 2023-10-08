import { ServicesCounter } from "./ServicesCounter";
import { HeaderWrapper } from "./containers/Wrappers";
import React from "react";
import { ButtonsBlock } from "./buttons/ButtonsBlock";

export function Header() {
  return (
    <HeaderWrapper>
      <ServicesCounter />
      <ButtonsBlock />
    </HeaderWrapper>
  );
}
