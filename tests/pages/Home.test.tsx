import React from "react";
import { render } from "@testing-library/react";
import { Body } from "@/components/body/Body";
import { AppProvider } from "@/components/app/AppProvider";

describe("Body Component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <AppProvider>
        <Body />
      </AppProvider>
    );
    expect(container).toBeInTheDocument();
  });
});
