import { gbooks } from "@/services";
import type { SearchFormState } from "../types";
import { SEARCH_RESULTS_COUNT } from "../constants";

export default async function handleSearchParams(searchParams: {
  [key: string]: string | string[] | undefined;
}): Promise<SearchFormState> {
  const defaultState: SearchFormState = { query: "", data: null };

  const query = searchParams.query;
  const page = searchParams.page;

  if (Array.isArray(page) || Array.isArray(query)) return defaultState;
  if (!query) return defaultState;

  try {
    let index = 0;

    if (page) {
      const pageNumber = parseInt(page);
      if (!isNaN(pageNumber) && pageNumber > 0) {
        index = (pageNumber - 1) * SEARCH_RESULTS_COUNT;
      }
    }

    const results = await gbooks.methods.volumeSearch(query, {
      startIndex: index,
      maxResults: SEARCH_RESULTS_COUNT,
    });

    return { query, data: results };
  } catch (err) {
    console.log(err);
    return { ...defaultState, error: true };
  }
}
