import { SearchResults } from "./types";

const DEFAULT_SEARCH_FILTER =
  "totalItems,items(id,selfLink,volumeInfo(title,authors,publisher,publishedDate,imageLinks))";

export async function volumeSearch(
  query: string,
  filter = DEFAULT_SEARCH_FILTER
): Promise<SearchResults> {
  const response = await fetch(
    `${process.env.BOOKS_API_URL}/volumes?q=${encodeURIComponent(
      query
    )}&fields=${filter}`
  );
  return response.json();
}
