/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initial: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(initial);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      const storedValue = localStorage.getItem(key) || "";

      if (storedValue) {
        setValue(JSON.parse(storedValue));
      } else {
        localStorage[key] = JSON.stringify(initial);
      }

      return;
    }

    localStorage[key] = JSON.stringify(value);
  }, [value]);

  return [value, setValue];
}
