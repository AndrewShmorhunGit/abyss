import { CategoryForm } from "@/components/categories/categories/CategoryForm";
import { CategoriesContextProvider } from "@/context/categories.context";
import { render, screen } from "@testing-library/react";

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

describe("CategoryForm Component", () => {
  it("renders CategoryForm when isAddCategory is true", () => {
    render(
      <CategoriesContextProvider>
        <CategoryForm />
      </CategoriesContextProvider>
    );

    const categoryForm = screen.getByTestId("category-form");
    expect(categoryForm).toBeInTheDocument();
  });

  it("does not render CategoryForm when isAddCategory is false", () => {
    // Mock the isAddCategory value to be false
    jest
      .spyOn(require("@/hooks/useCategoryForm"), "useCategoryForm")
      .mockReturnValue({
        isAddCategory: false,
      });

    render(
      <CategoriesContextProvider>
        <CategoryForm />
      </CategoriesContextProvider>
    );

    const categoryForm = screen.queryByTestId("category-form");
    expect(categoryForm).not.toBeInTheDocument();
  });
});
