import React from "react";
import { render } from "@testing-library/react";
import { TranslateButtons } from "@/components/categories/buttons/TranslateButtons";

describe("TranslateButtons", () => {
  // Define a mock array of button positions to match the constants
  const mockButtonPositions = ["top", "right", "bottom", "left"];
  it("should render TranslateButton components with correct props", () => {
    // Render the TranslateButtons component
    const { getAllByTestId } = render(<TranslateButtons />);

    // Get all rendered TranslateButton components
    const renderedButtons = getAllByTestId("translate-button");

    // Check if the correct number of buttons is rendered
    expect(renderedButtons).toHaveLength(mockButtonPositions.length);
  });
});
