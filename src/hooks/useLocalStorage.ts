/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    setValue(
      key in localStorage
        ? JSON.parse(localStorage.getItem(key) || "")
        : initial
    );
  }, []);

  useEffect(() => {
    localStorage[key] = JSON.stringify(value);
  }, [value]);

  return { value, setValue };
}
