import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BtnEdit } from "@/components/categories/buttons/BtnEdit";

describe("BtnEdit", () => {
  it("should render the edit button", () => {
    // Mock handler function
    const mockHandler = jest.fn();

    // Render the component with the mock handler
    render(<BtnEdit handler={mockHandler} />);

    // Find the edit button by role (button)
    const editButton = screen.getByRole("button");

    // Assert that the edit button is visible
    expect(editButton).toBeInTheDocument();

    // Simulate a click event on the edit button
    fireEvent.click(editButton);

    // Check if the mock handler function was called
    expect(mockHandler).toHaveBeenCalledTimes(1);

    // Find the EditIcon component by role (icon)
    const editIcon = screen.getByRole("icon");

    // Assert that the EditIcon is visible
    expect(editIcon).toBeInTheDocument();
  });
});
