import { AiFillPlusCircle } from "react-icons/ai";

export function BtnPlus({ handler }: { handler: Function }) {
  return (
    <div>
      <AiFillPlusCircle
        className="pointer"
        size={24}
        fill={"lightgrey"}
        onClick={handler}
      />
    </div>
  );
}
