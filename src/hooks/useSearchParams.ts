import {
  useSearchParams as useNextSearchParams,
  useRouter,
  usePathname,
} from "next/navigation";

export default function useSearchParams() {
  const currentSearchParams = useNextSearchParams();
  const searchParams = new URLSearchParams(currentSearchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  function setSearchParam(param: string, value: string | null) {
    if (param) {
      if (value) {
        searchParams.set(param, value);
        replace(`${pathname}?${searchParams.toString()}`);
        return;
      }

      searchParams.delete(param);
    }
  }

  return [currentSearchParams, setSearchParam];
}
