import { BodyWrapper } from "./Wrappers";
import { TranslateButton } from "./TranslateButton";
import { Categories } from "../categories/Categories";

// import styles from "@/app/styles/body.module.css";
export function Body() {
  return (
    <>
      <BodyWrapper>
        <TranslateButton position={"top"} />
        <TranslateButton position={"right"} />
        <TranslateButton position={"bottom"} />
        <TranslateButton position={"left"} />
        <Categories />
      </BodyWrapper>
    </>
  );
}
