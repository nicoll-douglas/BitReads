import { SEARCH_RESULTS_COUNT } from "../constants";
import type { SearchFormState } from "../types";
import { gbooks } from "@/services";

export default async function searchForBook(
  previousState: SearchFormState,
  formData: FormData
) {
  const query = (formData.get("query") || "").toString();
  if (!query) return { query, data: null };

  try {
    const result = await gbooks.methods.volumeSearch(query, {
      maxResults: SEARCH_RESULTS_COUNT,
    });

    return { query, data: result };
  } catch (err) {
    console.log(err);
    return { query, data: null, error: true };
  }
}
