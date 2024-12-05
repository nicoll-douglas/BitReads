import {
  useSearchParams as useNextSearchParams,
  useRouter,
  usePathname,
} from "next/navigation";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { useCallback } from "react";

type SearchParamsObject = { [key: string]: string };
type SearchParamSetter = (pairs: SearchParamsObject) => void;

export default function useSearchParams(
  options = { push: false }
): [ReadonlyURLSearchParams, SearchParamSetter] {
  const currentSearchParams = useNextSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  const setSearchParams = useCallback(
    (pairs: SearchParamsObject) => {
      const searchParams = new URLSearchParams(currentSearchParams);

      Object.entries(pairs).forEach(([key, value]) => {
        if (!value) {
          searchParams.delete(key);
        } else {
          searchParams.set(key, value);
        }
      });

      const newPath = `${pathname}?${searchParams.toString()}`;
      if (options.push) {
        push(newPath);
      } else {
        replace(newPath);
      }
    },
    [currentSearchParams, pathname, replace, push, options.push]
  );

  return [currentSearchParams, setSearchParams];
}
