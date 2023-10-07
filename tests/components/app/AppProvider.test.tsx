import React from "react";
import { render } from "@testing-library/react";
import { AppProvider } from "@/components/app/AppProvider";

describe("AppProvider", () => {
  it("should render the children components wrapped in context providers", () => {
    // Create a mock child component
    const ChildComponent = () => <div data-testid="child">Child Content</div>;

    // Render the AppProvider with the child component
    const { getByTestId } = render(
      <AppProvider>
        <ChildComponent />
      </AppProvider>
    );

    // Ensure that the child component is rendered
    expect(getByTestId("child")).toBeInTheDocument();
  });
});
