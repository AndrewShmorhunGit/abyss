import React from "react";
import { render, screen } from "@testing-library/react";
import { Categories } from "@/components/categories/Categories";
import { AppProvider } from "@/components/app/AppProvider";

describe("Categories", () => {
  it("should render the CategoriesRoot and CategoriesContent components", () => {
    // Render the Categories component
    render(
      <AppProvider>
        <Categories />
      </AppProvider>
    );

    // Find and assert the presence of the CategoriesRoot component
    const categoriesRoot = screen.getByTestId("categories-root");
    expect(categoriesRoot).toBeInTheDocument();

    // Find and assert the presence of the CategoriesContent component
    const categoriesContent = screen.getByTestId("categories-content");
    expect(categoriesContent).toBeInTheDocument();
  });
});
