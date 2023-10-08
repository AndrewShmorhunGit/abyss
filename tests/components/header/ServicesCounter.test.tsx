import { ServicesCounter } from "@/components/header/ServicesCounter";
import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

// Mock the styles import
jest.mock("@/app/styles/header.module.scss", () => ({
  services: "mocked-services-class",
  amount: "mocked-amount-class",
}));

describe("ServicesCounter Component", () => {
  it("renders the component with the expected structure", () => {
    const { container } = render(<ServicesCounter />);

    // Check if the container has the "center" class
    expect(container.firstChild).toHaveClass("center");

    // Check if the container has the "mocked-services-class" class
    expect(container.firstChild).toHaveClass("mocked-services-class");

    // Check if the "Services" text is present
    expect(container).toHaveTextContent("Services");

    // Check if the amount container has the "mocked-amount-class" class
    const amountContainer = container.querySelector(".mocked-amount-class");
    expect(amountContainer).toBeInTheDocument();

    // Check if the "0" text is present inside the amount container
    expect(amountContainer).toHaveTextContent("0");
  });

  it("matches the snapshot", () => {
    const tree = renderer.create(<ServicesCounter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
