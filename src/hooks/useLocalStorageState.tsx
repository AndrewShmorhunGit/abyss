import React from "react";

export function useLocalStorageState(
  key: string,
  defaultValue: string[] | string = [],

  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = React.useState<string[]>(() => {
    const valueInLocalStorage = global.localStorage.getItem(key);
    if (valueInLocalStorage) {
      try {
        return deserialize(valueInLocalStorage);
      } catch (error) {
        global.localStorage.removeItem(key);
      }
    }
    return defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      global.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    global.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return { state, setState };
}
