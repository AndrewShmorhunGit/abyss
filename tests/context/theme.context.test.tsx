import React from "react";
import { render } from "@testing-library/react";
import { ThemeContextProvider } from "@/context/theme.context";

// Mock the useTheme hook
jest.mock("@/hooks/useTheme", () => ({
  useTheme: jest.fn(() => ({
    isMode: "light", // Mocking the theme mode for testing purposes
    setMode: jest.fn(),
    toggleTheme: jest.fn(),
    checkTheme: true,
    isLightTheme: true,
  })),
}));

describe("ThemeContextProvider", () => {
  it("renders children when isMode is defined", () => {
    const { getByText } = render(
      <ThemeContextProvider>
        <div>Child Component</div>
      </ThemeContextProvider>
    );

    const childComponent = getByText("Child Component");
    expect(childComponent).toBeInTheDocument();
  });

  it("does not render children when isMode is undefined", () => {
    // Mock the useTheme hook to return undefined for isMode
    jest.spyOn(require("@/hooks/useTheme"), "useTheme").mockReturnValue({
      isMode: undefined,
    });

    const { queryByText } = render(
      <ThemeContextProvider>
        <div>Child Component</div>
      </ThemeContextProvider>
    );

    const childComponent = queryByText("Child Component");
    expect(childComponent).toBeNull();
  });
});
