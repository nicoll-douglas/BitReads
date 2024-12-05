"use server";

import type { SearchFormState } from "../types";
import { SEARCH_RESULTS_COUNT } from "../constants";
import { gbooks } from "@/services";

export default async function getPage(
  query: string,
  page: number
): Promise<SearchFormState> {
  try {
    const data = await gbooks.methods.volumeSearch(query, {
      startIndex: (page - 1) * SEARCH_RESULTS_COUNT,
      maxResults: SEARCH_RESULTS_COUNT,
    });

    return { query, data, page };
  } catch (err) {
    console.log(err);
    return { query: "", error: true };
  }
}
