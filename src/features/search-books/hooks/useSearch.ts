import { useContext } from "react";
import { SearchContext } from "../contexts";

export default function useSearch() {
  const value = useContext(SearchContext);

  if (!value) {
    throw new Error(
      "Search context must be consumed within the search provider."
    );
  }

  return value;
}
