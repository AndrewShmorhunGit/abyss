import { AiFillCloseCircle } from "react-icons/ai";

export function BtnClose({ handler }: { handler: Function }) {
  return (
    <div>
      <AiFillCloseCircle
        size={24}
        color={"orange"}
        style={{ cursor: "pointer" }}
        onClick={handler}
      />
    </div>
  );
}
