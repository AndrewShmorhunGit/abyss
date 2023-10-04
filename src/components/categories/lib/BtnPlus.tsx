import { AiFillPlusCircle } from "react-icons/ai";

export function BtnPlus({ handler }: { handler: Function }) {
  return (
    <div>
      <AiFillPlusCircle
        size={24}
        fill={"lightgrey"}
        style={{ cursor: "pointer" }}
        onClick={handler}
      />
    </div>
  );
}
