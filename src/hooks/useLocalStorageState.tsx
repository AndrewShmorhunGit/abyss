import React from "react";

export function useLocalStorageState<T>(
  key: string,
  defaultValue: T | (() => T),
  {
    serialize = JSON.stringify,
    deserialize = JSON.parse,
  }: {
    serialize?: (value: T) => string;
    deserialize?: (value: string) => T;
  } = {}
) {
  const storage = global.localStorage;
  const [state, setState] = React.useState<T>(() => {
    if (storage) {
      const valueInLocalStorage = storage.getItem(key);
      if (valueInLocalStorage) {
        try {
          return deserialize(valueInLocalStorage);
        } catch (error) {
          storage.removeItem(key);
        }
      }
    }
    // @ts-ignore
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      storage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    storage.setItem(key, serialize(state));
  }, [key, state, serialize, storage]);

  return { state, setState };
}
