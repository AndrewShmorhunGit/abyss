import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BtnClose } from "@/components/categories/lib/BtnClose";

describe("BtnClose", () => {
  it("should render the close button", () => {
    // Mock handler function
    const mockHandler = jest.fn();

    // Render the component with the mock handler
    render(<BtnClose handler={mockHandler} />);

    const closeButton = screen.getByTitle("close");

    // Assert that the close button is visible
    expect(closeButton).toBeInTheDocument();

    // Simulate a click event on the close button
    fireEvent.click(closeButton);

    // Check if the mock handler function was called
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
