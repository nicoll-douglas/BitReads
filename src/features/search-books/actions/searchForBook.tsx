"use server";

import type { SearchFormState } from "../types";
import { gb } from "@/services";

export default async function searchForBook(
  previousState: SearchFormState,
  formData: FormData
) {
  const query = (formData.get("query") || "").toString();

  try {
    const result = await gb.methods.volumeSearch(
      (formData.get("query") || '""').toString(),
      {
        maxResults: 18,
      }
    );

    return { query, data: result };
  } catch (err) {
    console.log(err);
  }

  return { query, data: null };
}
