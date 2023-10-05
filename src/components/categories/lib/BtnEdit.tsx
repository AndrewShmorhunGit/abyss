import { EditIcon } from "@/components/icons/EditIcon";
import { MouseEventHandler } from "react";

export function BtnEdit({
  handler,
}: {
  handler: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div className="pointer" onClick={handler}>
      <EditIcon />
    </div>
  );
}
