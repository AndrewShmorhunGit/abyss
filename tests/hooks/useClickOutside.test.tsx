import React, { useRef } from "react";
import { render, fireEvent } from "@testing-library/react";
import { useClickOutside } from "@/hooks/useClickOutside";

describe("useClickOutside", () => {
  // Create handler
  const handler = jest.fn();
  // Create a functional component for testing
  function TestComponent() {
    const ref = useRef(null);
    useClickOutside(ref, handler);
    return (
      <div>
        <div ref={ref} className="element">
          Inside Element
        </div>
      </div>
    );
  }
  it("should call the handler when a click occurs outside the ref element", () => {
    const { container } = render(<TestComponent />);
    // Create a dummy element to simulate a click event outside of the ref element
    const dummyElement = document.createElement("div");
    document.body.appendChild(dummyElement);

    // Simulate a click event outside of the ref element
    fireEvent.mouseDown(dummyElement);

    // Expect the handler to have been called
    expect(container).toBeTruthy();
    expect(handler).toHaveBeenCalled();

    // Cleanup by removing the dummy element from the document body
    document.body.removeChild(dummyElement);
  });

  // To test click inside!
});
