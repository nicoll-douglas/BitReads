import { useCallback, useEffect } from "react";

export default function useClickAway(
  elementSelector: string,
  cb: () => unknown
) {
  const regionSelector = `${elementSelector}, ${elementSelector} *`;

  const handleClickAway = useCallback(
    (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (e.target.matches(regionSelector)) return;
      cb();
    },
    [regionSelector, cb]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickAway);
    return () => document.removeEventListener("click", handleClickAway);
  }, [handleClickAway]);
}
