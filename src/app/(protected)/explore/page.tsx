import {
  SearchProvider,
  SearchForm,
  SearchResults,
  PaginationBtns,
  handleInitialSearchParams,
  FooterLinks,
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
      <div className="flex-1 flex flex-col gap-4">
        <SearchForm />
        <SearchResults />
        <footer className="flex justify-between gap-8 w-full items-start lg:items-center">
          <FooterLinks />
          <PaginationBtns />
        </footer>
      </div>
    </SearchProvider>
  );
}
