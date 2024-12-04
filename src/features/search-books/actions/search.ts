import type { SearchFormState } from "../types";
import getPage from "./getPage";

export default async function search(
  previousState: SearchFormState,
  formData: FormData
): Promise<SearchFormState> {
  const query = (formData.get("query") || "").toString();

  if (!query) return { query: "" };

  return getPage(query, 1);
}
