import {
  SearchProvider,
  SearchForm,
  SearchResults,
  PaginationBtns,
} from "@/features/search-books";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BitReads | Explore",
};

export default async function Page() {
  return (
    <SearchProvider>
      <section aria-label="Search Books" className="flex-1 flex flex-col">
        <SearchForm />
        <SearchResults />
        <PaginationBtns />
      </section>
    </SearchProvider>
  );
}
