/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export default function useClickAway(
  elementSelector: string,
  cb: () => unknown
) {
  const regionSelector = `${elementSelector}, ${elementSelector} *`;

  function handleClickAway(e: MouseEvent) {
    if (!(e.target instanceof Element)) return;
    if (e.target.matches(regionSelector)) return;
    cb();
  }

  useEffect(() => {
    document.addEventListener("click", handleClickAway);
    return () => document.removeEventListener("click", handleClickAway);
  }, []);
}
