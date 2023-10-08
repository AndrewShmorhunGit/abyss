import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppProvider } from "@/components/app/AppProvider";
import { DraggableWrapper } from "@/components/categories/containers/DraggableWrapper";

interface IDraggableValue {
  containerRef: { current: HTMLDivElement };
  boxRef: { current: HTMLDivElement };
}

describe("DraggableWrapper", () => {
  it("should render children with the correct references and styles", () => {
    // Mock the useDraggableCategories hook
    const useDraggableCategories = jest.fn((): IDraggableValue => {
      return {
        containerRef: { current: document.createElement("div") },
        boxRef: { current: document.createElement("div") },
      };
    });
    useDraggableCategories();
    // Render the DraggableWrapper component with a child element
    render(
      <AppProvider>
        <DraggableWrapper>
          <div data-testid="test-child">Test Child</div>
        </DraggableWrapper>
      </AppProvider>
    );

    // Find and assert the presence of the child element
    const testChild = screen.getByTestId("test-child");
    expect(testChild).toBeInTheDocument();

    // Find the rendered container and box elements and assert their references
    const categoriesContainer = screen.getByTestId("categories");
    const categoriesBox = screen.getByTestId("categories-box");
    expect(categoriesContainer).toBeInTheDocument();
    expect(categoriesBox).toBeInTheDocument();

    // Simulate user interaction with the component (if applicable)
    userEvent.click(testChild); // Example of a user interaction

    // Continue testing your component's behavior as needed
  });
});
