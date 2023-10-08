import { AiFillPlusCircle } from "react-icons/ai";

export function BtnPlus({ handler }: { handler: Function }) {
  return (
    <div>
      <AiFillPlusCircle
        style={{ transform: " translateY(1px)" }}
        className="pointer"
        size={24}
        color={"lightgrey"}
        onClick={handler}
        role="button"
        data-testid="plus-button"
      />
    </div>
  );
}
