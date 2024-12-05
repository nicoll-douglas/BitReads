"use client";

import { useState, useCallback } from "react";

type asyncFn = (...args: unknown[]) => Promise<unknown>;

export default function useIsLoading(func: asyncFn): [asyncFn, boolean] {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const wrapper: asyncFn = useCallback(
    async (...args) => {
      setIsLoading(true);
      const value = await func(...args);
      setIsLoading(false);
      return value;
    },
    [func]
  );

  return [wrapper, isLoading];
}
