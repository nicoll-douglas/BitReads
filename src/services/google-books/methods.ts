import { SearchResults } from "./types";

const DEFAULT_SEARCH_FILTER =
  "totalItems,items(id,selfLink,volumeInfo(title,authors,publisher,publishedDate,imageLinks))";

interface volumeSearchOptions {
  filter?: string;
  maxResults?: number;
}

export async function volumeSearch(
  query: string,
  options?: volumeSearchOptions
): Promise<SearchResults> {
  const response = await fetch(
    `${process.env.BOOKS_API_URL}/volumes?q=${encodeURIComponent(
      query
    )}&fields=${options?.filter || DEFAULT_SEARCH_FILTER}&maxResults=${
      options?.maxResults || 12
    }`,
    {
      headers: {
        "Accept-Encoding": "gzip",
        "User-Agent": "BitReads/1.0.0 (gzip)",
      },
    }
  );
  return response.json();
}
