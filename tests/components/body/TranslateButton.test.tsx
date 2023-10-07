import React from "react";
import { render } from "@testing-library/react";
import { TranslateButton } from "@/components/body/TranslateButton";

describe("TranslateButton", () => {
  it("should render the TranslateButton with the correct position", () => {
    const { container } = render(<TranslateButton position="top" />);

    // Ensure that the button is rendered with the correct classes
    const button = container.querySelector("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("center");
    expect(button).toHaveClass("absolute");
    expect(button).toHaveClass("top"); // Check if the "top" class is applied
  });
});
