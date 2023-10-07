import React from "react";
import { render } from "@testing-library/react";
import { BodyWrapper } from "@/components/body/Wrappers";

describe("BodyWrapper", () => {
  it("should render children with the appropriate class", () => {
    // Define some content to be rendered inside BodyWrapper
    const content = <div data-testid="content">Test Content</div>;

    // Render the BodyWrapper with the content
    render(<BodyWrapper>{content}</BodyWrapper>);

    // Ensure that the class on the wrapper div is as expected
    expect(
      (document.querySelector("[data-testid='content']") as HTMLDivElement)
        .parentElement
    ).toHaveClass("wrapper");

    // Ensure that the content is rendered
    expect(
      document.querySelector("[data-testid='content']")
    ).toBeInTheDocument();
  });
});
