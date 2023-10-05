import { AiFillCloseCircle } from "react-icons/ai";

export function BtnClose({ handler }: { handler: Function }) {
  return (
    <div>
      <AiFillCloseCircle
        className="pointer"
        size={24}
        color={"red"}
        onClick={handler}
      />
    </div>
  );
}
