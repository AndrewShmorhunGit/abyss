import { IoIosCheckmarkCircle } from "react-icons/io";

export function BtnSubmit() {
  return (
    <button
      type="submit"
      style={{
        background: "transparent",
        border: "none",
      }}
      data-testid="submit-button"
      title="submit"
      role="button"
    >
      <IoIosCheckmarkCircle size={24} color={"green"} className="pointer" />
    </button>
  );
}
