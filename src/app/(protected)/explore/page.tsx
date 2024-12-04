import { Search, handleSearchParams } from "@/features/search-books";
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
  const initialState = await handleSearchParams(sp);

  return <Search initialState={initialState} />;
}
