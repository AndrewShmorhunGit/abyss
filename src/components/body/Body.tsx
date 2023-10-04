import { BodyWrapper } from "./Wrappers";
import { Categories } from "../categories/Categories";
import { TranslateButtons } from "./TranslateButtons";

export function Body() {
  return (
    <BodyWrapper>
      <TranslateButtons />
      <Categories />
    </BodyWrapper>
  );
}
