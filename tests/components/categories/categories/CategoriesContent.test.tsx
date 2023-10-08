import React from "react";
import { render, screen } from "@testing-library/react";
import { CategoriesContextProvider } from "@/context/categories.context";
import { CategoriesContent } from "@/components/categories/categories/CategoriesContent";

// Mock the useCategoryForm hook
jest.mock("@/hooks/useCategoryForm", () => ({
  useCategoryForm: jest.fn(() => ({
    isAddCategory: true,
    setIsAddCategory: jest.fn(),
    inputRef: { current: {} },
    handleSubmit: jest.fn(),
    onChange: jest.fn(),
  })),
}));

describe("CategoriesContent Component", () => {
  beforeEach(() => {
    // Reset the mock before each test
    jest.clearAllMocks();
  });

  it("renders CategoryForm when isCategories is not empty", () => {
    render(
      <CategoriesContextProvider>
        <CategoriesContent />
      </CategoriesContextProvider>
    );

    // Assuming isCategories is not empty, so CategoryForm should be rendered
    const categoryForm = screen.getByTestId("category-form");
    expect(categoryForm).toBeInTheDocument();
  });
});
