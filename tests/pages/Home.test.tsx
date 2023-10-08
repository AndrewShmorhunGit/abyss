import React from "react";
import { render } from "@testing-library/react";
import { CategoriesPage } from "@/components/pages/CategoriesPage";
import { AppProvider } from "@/components/app/AppProvider";

describe("Body Component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <AppProvider>
        <CategoriesPage />
      </AppProvider>
    );
    expect(container).toBeInTheDocument();
  });
});
