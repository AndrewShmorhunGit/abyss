import { links } from "@/data/constants";
import { ListButton } from "./ListButton";
import { MinusButton } from "./MinusButton";
import { NavButton } from "./NavButton";
import { PlusButton } from "./PlusButton";
import { ScaleDropdown } from "./ScaleDropdown";
import { MainButtonsWrapper, ButtonsWrapper } from "./Wrappers";
import Link from "next/link";
import { ThemeButton } from "./ThemeButton";

function Links() {
  return (
    <div className="center gap" style={{ gap: "1.2rem" }}>
      {links.map(({ icon, link }) => {
        return (
          <Link
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </Link>
        );
      })}
    </div>
  );
}

export function ButtonsBlock() {
  return (
    <MainButtonsWrapper>
      <ThemeButton />
      <Links />
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
