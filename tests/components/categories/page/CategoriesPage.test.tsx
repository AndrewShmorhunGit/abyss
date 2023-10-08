import { CategoriesPage } from "@/components/pages/CategoriesPage";
import { AppProvider } from "@/components/app/AppProvider";
import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Body", () => {
  it("should render child components and handle user interactions", () => {
    // Render the Body component
    render(
      <AppProvider>
        <CategoriesPage />
      </AppProvider>
    );

    // Find and assert the presence of the TranslateButtons component
    const translateButtons = screen.getByTestId("translate-buttons");
    expect(translateButtons).toBeInTheDocument();

    // Find and assert the presence of the Categories component
    const categories = screen.getByTestId("categories");
    expect(categories).toBeInTheDocument();

    // Simulate user interaction with TranslateButtons
    const translateButtonElements =
      within(translateButtons).getAllByRole("button");
    expect(translateButtonElements).toHaveLength(4); // Assuming there are 4 buttons

    // Click on the first translate button
    userEvent.click(translateButtonElements[0]);
  });
});
