"use client";

import * as A from "@/components/atomic";
import { useSearch } from "../hooks";

export default function SearchForm() {
  const { form } = useSearch();

  return (
    <form
      className="flex flex-col max-w-container.xs mb-4"
      action={form.action}
      aria-label="Search Books"
    >
      <A.form.Label htmlFor="search-books-input" required>
        Search Books:
      </A.form.Label>
      <div className="flex gap-1">
        <A.form.Input
          id="search-books-input"
          className="flex-1 w-full"
          name="query"
          required
          defaultValue={form.query}
        />
        <A.IconButton
          icon="/icons/search.svg"
          aria-label="Search"
          type="submit"
          isLoading={form.isPending}
        />
        <A.IconButton icon="/icons/filter.svg" aria-label="Filter" />
      </div>
    </form>
  );
}
