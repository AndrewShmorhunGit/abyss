import { ICategoryParams } from "@/interfaces/ICategory";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosCheckmarkCircle } from "react-icons/io";

export function CategoryForm({
  isCategories,
  setCategories,
  isAddCategory,
  setIsAddCategory,
  isName,
  setName,
}: ICategoryParams) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAddCategory]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCategories([...isCategories, isName]);
    setName("");
    setIsAddCategory(false);
    console.log("Category Name:", isName);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  if (isAddCategory)
    return (
      <form
        onSubmit={handleSubmit}
        className="center"
        style={{ gap: "0.8rem" }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={"Category Name"}
          onChange={onChange}
          style={{
            fontWeight: 600,
            textAlign: "center",
            padding: "1.2rem 2.4rem",
            width: "18rem",
            border: "solid lightgrey 1px",
          }}
        />
        <div>
          <AiFillCloseCircle
            size={24}
            color={"red"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsAddCategory(false);
            }}
          />
        </div>{" "}
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
      </form>
    );
}
