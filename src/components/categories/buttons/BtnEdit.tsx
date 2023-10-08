import { EditIcon } from "@/components/icons/EditIcon";
import { MouseEventHandler } from "react";

export function BtnEdit({
  handler,
}: {
  handler: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      className="pointer"
      onClick={handler}
      role="button"
      style={{ transform: "scale(0.94) translateY(1px)" }}
    >
      <EditIcon />
    </div>
  );
}
