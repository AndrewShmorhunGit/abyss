"use client";
import React from "react";

export function useLocalStorageState(
  key: string,
  defaultValue: string[] | string | number | Function = [],

  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const storage = global.localStorage;

  const [state, setState] = React.useState<string[]>([]);

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
