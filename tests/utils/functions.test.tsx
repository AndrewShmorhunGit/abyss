import { decreaseScale, increaseScale } from "@/utils/functions";

describe("increaseScale function", () => {
  it("should increase the scale if it matches an option", () => {
    const options = ["1", "2", "3"];
    const scale = ["2"];
    const expectedScale = ["3"];

    const result = increaseScale(scale, options);

    expect(result).toEqual(expectedScale);
  });

  it("should not change the scale if it doesn't match an option", () => {
    const options = ["1", "2", "3"];
    const scale = ["4"];

    const result = increaseScale(scale, options);

    expect(result).toEqual(scale);
  });

  it("should not change the scale if it's already at the maximum option", () => {
    const options = ["1", "2", "3"];
    const scale = ["3"];

    const result = increaseScale(scale, options);

    expect(result).toEqual(scale);
  });
});

describe("decreaseScale function", () => {
  it("should decrease the scale if it matches an option", () => {
    const options = ["1", "2", "3"];
    const scale = ["2"];
    const expectedScale = ["1"];

    const result = decreaseScale(scale, options);

    expect(result).toEqual(expectedScale);
  });

  it("should not change the scale if it doesn't match an option", () => {
    const options = ["1", "2", "3"];
    const scale = ["4"];

    const result = decreaseScale(scale, options);

    expect(result).toEqual(scale);
  });

  it("should not change the scale if it's already at the minimum option", () => {
    const options = ["1", "2", "3"];
    const scale = ["1"];

    const result = decreaseScale(scale, options);

    expect(result).toEqual(scale);
  });
});
