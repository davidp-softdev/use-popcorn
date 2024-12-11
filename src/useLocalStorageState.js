import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  // Persist watched list in local storage
  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value)); // state should be up to date
    },
    [value, key]
  );

  return [value, setValue];
}
