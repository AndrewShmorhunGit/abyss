import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CategoriesContainer } from "@/components/categories/categories/CategoriesContainer";

describe("CategoriesContainer", () => {
  it("should render children with the correct class and data-testid", () => {
    // Define a ref for the component
    const forwardedRef = React.createRef<HTMLDivElement>();

    // Render the CategoriesContainer component with a child element
    render(
      <CategoriesContainer forwardedRef={forwardedRef}>
        <div data-testid="test-child">Test Child</div>
      </CategoriesContainer>
    );

    // Find and assert the presence of the child element
    const testChild = screen.getByTestId("test-child");
    expect(testChild).toBeInTheDocument();

    // Find the rendered div element and assert its class and data-testid
    const categoriesContainer = forwardedRef.current;
    expect(categoriesContainer).toHaveClass("center"); // Check for the 'center' class
    expect(categoriesContainer).toHaveClass("container"); // Check for the 'styles.container' class using the variable
    expect(categoriesContainer).toHaveAttribute("data-testid", "categories"); // Check for the data-testid attribute
  });
});
