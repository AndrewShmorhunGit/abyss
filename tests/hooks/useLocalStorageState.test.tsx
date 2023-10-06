import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { render } from "@testing-library/react";

describe("useLocalStorageState", () => {
  function TestComponent({ prop }: { prop: string }) {
    const { state, setState } = useLocalStorageState(prop, ["initialValue"]);

    const handleUpdate = () => {
      setState(["updatedValue"]);
    };

    return (
      <div>
        <div data-test-id="state-value">{state}</div>
        <button onClick={handleUpdate}>Update State</button>
      </div>
    );
  }

  it("should set and get a value from local storage", () => {
    const prop = "testKey";
    const { container } = render(<TestComponent prop={prop} />);

    // Initial value should be 'initialValue'
    expect(global.localStorage.getItem(prop)).toBe('["initialValue"]');

    // Update the state
    //@ts-ignore
    container.querySelector("button").click();

    // Value in local storage should be 'updatedValue'
    expect(global.localStorage.getItem(prop)).toBe('["updatedValue"]');

    // Reset the state
    //@ts-ignore
    container.querySelector("button").click();

    // Value in local storage should be 'initialValue' after reset
    expect(global.localStorage.getItem(prop)).toBe('["initialValue"]');
  });
});
