import {
  SearchProvider,
  SearchForm,
  SearchResults,
  PaginationBtns,
  handleInitialSearchParams,
} from "@/features/search-books";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BitReads | Explore",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const initialState = await handleInitialSearchParams(sp);

  return (
    <SearchProvider initialState={initialState}>
      <section aria-label="Search Books" className="flex-1 flex flex-col">
        <SearchForm />
        <SearchResults />
        <PaginationBtns />
      </section>
    </SearchProvider>
  );
}
