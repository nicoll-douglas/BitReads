"use client";

import { searchForBook } from "../actions";
import type { SearchFormState } from "../types";
import { useActionState } from "react";
import BookPreview from "./BookPreview";
import SearchForm from "./SearchForm";

export default function Search() {
  const initial = { query: "", data: null };

  const [state, action, isPending] = useActionState<SearchFormState, FormData>(
    searchForBook,
    initial
  );

  return (
    <section aria-label="Search Books">
      <SearchForm state={state} action={action} isPending={isPending} />
      {state.data && (
        <h2 className="mb-1" id="results-heading">
          Results:
        </h2>
      )}
      <ul
        className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4"
        aria-labelledby="results-heading"
      >
        {state.data?.items?.map((props, index) => (
          <BookPreview index={index} key={index} {...props} />
        ))}
      </ul>
    </section>
  );
}
