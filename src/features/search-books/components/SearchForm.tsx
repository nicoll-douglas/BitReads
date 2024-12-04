import type { SearchFormState } from "../types";
import * as A from "@/components/atomic";

interface SearchFormProps {
  actionState: SearchFormState;
  action: (payload: FormData) => void;
  isPending: boolean;
}

export default function SearchForm({
  actionState,
  action,
  isPending,
}: SearchFormProps) {
  return (
    <form
      className="flex flex-col max-w-container.xs mb-4"
      action={action}
      aria-label="Search Books Form"
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
          defaultValue={actionState.query}
        />
        <A.IconButton
          icon="/icons/search.svg"
          aria-label="Search"
          type="submit"
          isLoading={isPending}
        />
        {/* <A.IconButton icon="/icons/filter.svg" aria-label="Filter" /> */}
      </div>
    </form>
  );
}
