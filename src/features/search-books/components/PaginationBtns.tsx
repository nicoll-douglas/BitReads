"use client";

import * as A from "@/components/atomic";
import { useSearch } from "../hooks";
import { getPage } from "../actions";
import { SEARCH_RESULTS_COUNT } from "../constants";

export default function PaginationBtns() {
  const { results, setResults, form } = useSearch();
  const { page: currentPage, data } = results;
  if (!data) return;

  async function getPrevious() {
    if (!currentPage) return;
    const { data, error, page } = await getPage(form.query, currentPage - 1);
    setResults({ data, error, page });
  }

  async function getNext() {
    if (!currentPage) return;
    const { data, error, page } = await getPage(form.query, currentPage + 1);
    setResults({ data, error, page });
  }

  return (
    data?.items &&
    data.items.length > 0 && (
      <div className="flex gap-4 pt-4 my-auto items-center justify-center w-full">
        {currentPage !== 1 && (
          <A.IconButton
            size="xs"
            icon="/icons/chevron-left.svg"
            aria-label="Previous"
            onClick={getPrevious}
          />
        )}
        <p>{currentPage}</p>
        {data.items?.length === SEARCH_RESULTS_COUNT && (
          <A.IconButton
            icon="/icons/chevron-right.svg"
            aria-label="Next"
            size="xs"
            onClick={getNext}
          />
        )}
      </div>
    )
  );
}
