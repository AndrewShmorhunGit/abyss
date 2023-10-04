import { IoIosCheckmarkCircle } from "react-icons/io";

export function BtnSubmit() {
  return (
    <button
      type="submit"
      style={{
        background: "transparent",
        border: "none",
      }}
    >
      <IoIosCheckmarkCircle
        size={24}
        color={"green"}
        style={{ cursor: "pointer" }}
      />
    </button>
  );
}
