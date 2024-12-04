import { SearchResults } from "./types";
import { DEFAULT_SEARCH_FILTER, API_URL } from "./constants";

interface volumeSearchOptions {
  filter?: string;
  maxResults?: number;
}

export async function volumeSearch(
  query: string,
  options?: volumeSearchOptions
): Promise<SearchResults> {
  const response = await fetch(
    `${API_URL}/volumes?q=${encodeURIComponent(query)}&fields=${
      options?.filter || DEFAULT_SEARCH_FILTER
    }&maxResults=${options?.maxResults || 12}`,
    {
      headers: {
        "Accept-Encoding": "gzip",
        "User-Agent": "BitReads/1.0.0 (gzip)",
      },
    }
  );
  return response.json();
}
