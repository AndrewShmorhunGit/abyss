import { AiFillCloseCircle } from "react-icons/ai";

export function BtnClose({ handler }: { handler: Function }) {
  return (
    <AiFillCloseCircle
      className="pointer"
      size={24}
      color={"red"}
      onClick={handler}
      title="close"
      role="button"
    />
  );
}
