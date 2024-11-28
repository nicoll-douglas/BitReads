import * as A from "@/components/atomic";

export default function SearchInput() {
  return (
    <form className="flex flex-col max-w-container.xs">
      <A.form.Label htmlFor="search-books-input">Search Books:</A.form.Label>
      <div className="flex gap-1">
        <A.form.Input id="search-books-input" className="flex-1 w-full" />
        <A.IconButton icon="/icons/search.svg" aria-label="Search" />
      </div>
    </form>
  );
}
