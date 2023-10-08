import { buttons } from "@/data/constants";
import { TranslateButton } from "./TranslateButton";

export function TranslateButtons() {
  return (
    <div data-testid="translate-buttons">
      {buttons.map((button) => (
        <TranslateButton key={button} position={button} />
      ))}
    </div>
  );
}
