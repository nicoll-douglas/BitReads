"use client";

import { searchForBook } from "../actions";
import type { SearchFormState } from "../types";
import { useActionState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

export default function Search() {
  const initial = { query: "", data: null };

  const [state, action, isPending] = useActionState<SearchFormState, FormData>(
    searchForBook,
    initial
  );

  return (
    <section aria-label="Search Books">
      <SearchForm actionState={state} action={action} isPending={isPending} />
      <SearchResults actionState={state} />
    </section>
  );
}
