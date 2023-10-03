import { options } from "@/data/constants";

export function increaseScale(scale: number) {
  if (options.includes(scale)) {
    const current = options.indexOf(scale);
    if (current !== options.length - 1) {
      const newScale = options[current + 1];
      return newScale;
    }
    return scale;
  }
  return scale;
}

export function decreaseScale(scale: number) {
  if (options.includes(scale)) {
    const current = options.indexOf(scale);
    if (current !== 0) {
      const newScale = options[current - 1];
      return newScale;
    }
    return scale;
  }
  return scale;
}
