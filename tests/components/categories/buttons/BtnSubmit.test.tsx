import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BtnSubmit } from "@/components/categories/buttons/BtnSubmit";

describe("BtnSubmit Component", () => {
  it("should render the submit button", () => {
    render(<BtnSubmit />);
    const submitButton = screen.getByTestId("submit-button");
    expect(submitButton).toBeInTheDocument();
  });

  it("should trigger the click event when clicked", () => {
    const handleClick = jest.fn();
    // @ts-ignore
    render(<BtnSubmit onClick={handleClick} />);
    const submitButton = screen.getByTestId("submit-button");
    userEvent.click(submitButton);
    expect(handleClick).toHaveBeenCalled();
  });

  it("should have the correct styles", () => {
    render(<BtnSubmit />);
    const submitButton = screen.getByTestId("submit-button");
    expect(submitButton).toHaveStyle("background: transparent");
  });

  it("should have the correct accessibility attributes", () => {
    render(<BtnSubmit />);
    const submitButton = screen.getByTestId("submit-button");
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toHaveAttribute("title", "Submit");
    expect(submitButton).toHaveAttribute("role", "button");
  });
});
