import { SearchResults } from "./types";
import { DEFAULT_SEARCH_FILTER, API_URL } from "./constants";

interface volumeSearchOptions {
  filter?: string;
  maxResults?: number;
  startIndex?: number;
}

export async function volumeSearch(
  query: string,
  options?: volumeSearchOptions
): Promise<SearchResults> {
  const target = `${API_URL}/volumes`;

  const params = `q=${encodeURIComponent(query)}&fields=${
    options?.filter || DEFAULT_SEARCH_FILTER
  }&maxResults=${options?.maxResults || 10}&startIndex=${
    options?.startIndex || 0
  }`;

  const url = `${target}?${params}`;

  const response = await fetch(url, {
    headers: {
      "Accept-Encoding": "gzip",
      "User-Agent": "BitReads/1.0.0 (gzip)",
    },
  });
  return response.json();
}
