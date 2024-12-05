import type { SearchFormState } from "../types";
import { isValidPageParam, isValidQueryParam } from "../utils";
import getPage from "./getPage";

export default async function handleInitialSearchParams(params: {
  [key: string]: string | string[] | undefined;
}): Promise<SearchFormState> {
  const { query, page } = params;

  const [queryValid, queryValue] = isValidQueryParam(query);
  if (!queryValid) return { query: "" };

  const [pageValid, pageNumber] = isValidPageParam(page);

  return getPage(queryValue, pageValid ? pageNumber : 1);
}
