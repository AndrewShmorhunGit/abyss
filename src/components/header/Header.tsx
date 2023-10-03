import { ServicesCounter } from "./ServicesCounter";
import { HeaderWrapper } from "./Wrappers";
import React from "react";
import { ButtonsBlock } from "./ButtonsBlock";

export function Header() {
  return (
    <HeaderWrapper>
      <ServicesCounter />
      <ButtonsBlock />
    </HeaderWrapper>
  );
}
