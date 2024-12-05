import {
  useSearchParams as useNextSearchParams,
  useRouter,
  usePathname,
} from "next/navigation";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { useCallback } from "react";

type SearchParamsObject = { [key: string]: string };
type SearchParamSetter = (pairs: SearchParamsObject) => void;
type useSearchParamsOptions = {
  push?: boolean;
  scroll?: boolean;
};

export default function useSearchParams({
  push: pushRoute = false,
  scroll = false,
}: useSearchParamsOptions): [ReadonlyURLSearchParams, SearchParamSetter] {
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
      if (pushRoute) {
        push(newPath, { scroll });
      } else {
        replace(newPath, { scroll });
      }
    },
    [currentSearchParams, pathname, replace, push, pushRoute, scroll]
  );

  return [currentSearchParams, setSearchParams];
}
