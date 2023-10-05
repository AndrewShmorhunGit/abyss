import { options } from "@/data/constants";

export function increaseScale(scale: string[]): string[] {
  if (options.includes(+scale[0])) {
    const current = options.indexOf(+scale[0]);
    if (current !== options.length - 1) {
      const newScale = options[current + 1];
      return [newScale + ""];
    }
    return scale;
  }
  return scale;
}

export function decreaseScale(scale: string[]): string[] {
  if (options.includes(+scale[0])) {
    const current = options.indexOf(+scale[0]);
    if (current !== 0) {
      const newScale = options[current - 1];
      return [newScale + ""];
    }
    return scale;
  }
  return scale;
}
