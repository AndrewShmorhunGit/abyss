import React from "react";
import { render, screen } from "@testing-library/react";

import { ScaleContextProvider } from "@/providers/scale.context";
import { CategoriesBox } from "@/components/categories/CategoriesBox";
describe("CategoriesBox", () => {
  it("should render the children with the correct styles", () => {
    // Define a ref for the component
    const forwardedRef = React.createRef<HTMLDivElement>();

    // Render the CategoriesBox component with a ScaleProvider wrapping it
    render(
      <ScaleContextProvider>
        <CategoriesBox forwardedRef={forwardedRef}>
          <div data-testid="test-child">Test Child</div>
        </CategoriesBox>
      </ScaleContextProvider>
    );

    // Find and assert the presence of the child element
    const testChild = screen.getByTestId("test-child");
    expect(testChild).toBeInTheDocument();

    // Find the rendered div element and assert its style
    const categoriesBox = forwardedRef.current;
    expect(categoriesBox).toHaveStyle("transform: scale(1)");
    expect(categoriesBox).toHaveClass("box");
  });
});
