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
      <section aria-label="Search Books">
        <SearchForm />
        <SearchResults />
        <PaginationBtns />
      </section>
    </SearchProvider>
  );
}
