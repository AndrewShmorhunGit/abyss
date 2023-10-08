import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { BtnPlus } from "@/components/categories/buttons/BtnPlus";

describe("BtnPlus Component", () => {
  describe("Rendering", () => {
    it("should render the plus button", () => {
      // Mock handler function
      const mockHandler = jest.fn();

      // Render the component with the mock handler
      render(<BtnPlus handler={mockHandler} />);

      // Find the plus button by role (button)
      const plusButton = screen.getByRole("button");

      // Assert that the plus button is visible
      expect(plusButton).toBeInTheDocument();

      // You can add more assertions here if needed
    });
  });

  describe("Click Event Handling", () => {
    it("should call the handler function when clicked", () => {
      // Mock handler function
      const mockHandler = jest.fn();

      // Render the component with the mock handler
      render(<BtnPlus handler={mockHandler} />);

      // Find the plus button by role (button)
      const plusButton = screen.getByRole("button");

      // Simulate a click event on the plus button
      fireEvent.click(plusButton);

      // Check if the mock handler function was called
      expect(mockHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe("Icon Properties", () => {
    it("should have the correct icon properties", () => {
      // Mock handler function
      const mockHandler = jest.fn();

      // Render the component with the mock handler
      render(<BtnPlus handler={mockHandler} />);

      // Find the plus icon by role (icon)
      const plusIcon = screen.getByRole("button");

      // Assert that the plus icon is visible
      expect(plusIcon).toBeInTheDocument();

      expect(plusIcon).toHaveAttribute("fill", "lightgrey");
    });
  });
});
