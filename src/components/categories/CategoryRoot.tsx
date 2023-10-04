import { AiFillPlusCircle } from "react-icons/ai";

export function CategoryRoot({
  setIsAddCategory,
}: {
  setIsAddCategory: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="center" style={{ gap: "1.2rem" }}>
      <div
        style={{
          padding: "1.6rem 3.2rem",
          border: "dashed 1px grey",
          borderRadius: "0.8rem",
          fontSize: "1.6rem",
          fontWeight: 700,
        }}
      >
        Categories
      </div>
      <div>
        <AiFillPlusCircle
          size={24}
          fill={"lightgrey"}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIsAddCategory(true);
          }}
        />
      </div>
    </div>
  );
}
