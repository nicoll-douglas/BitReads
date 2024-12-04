import {
  useSearchParams as useNextSearchParams,
  useRouter,
  usePathname,
} from "next/navigation";
import type { ReadonlyURLSearchParams } from "next/navigation";

type SearchParamsObject = { [key: string]: string | null };
type SearchParamSetter = (pairs: SearchParamsObject) => void;

export default function useSearchParams(): [
  ReadonlyURLSearchParams,
  SearchParamSetter
] {
  const currentSearchParams = useNextSearchParams();
  const searchParams = new URLSearchParams(currentSearchParams);

  const pathname = usePathname();
  const { replace } = useRouter();

  function setSearchParams(pairs: SearchParamsObject) {
    Object.entries(pairs).forEach(([key, value]) => {
      if (!value) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    });

    replace(`${pathname}?${searchParams.toString()}`);
  }

  return [currentSearchParams, setSearchParams];
}
