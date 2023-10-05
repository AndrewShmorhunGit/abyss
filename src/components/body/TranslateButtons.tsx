import { buttons } from "@/data/constants";
import { TranslateButton } from "./TranslateButton";

export function TranslateButtons() {
  return (
    <>
      {buttons.map((button) => (
        <TranslateButton key={button} position={button} />
      ))}
    </>
  );
}
