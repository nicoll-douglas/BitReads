"use client";

import * as A from "@/components/atomic";
import { useSearch } from "../hooks";
import { getPage } from "../actions";
import { SEARCH_RESULTS_COUNT } from "../constants";
import { useIsLoading } from "@/hooks";
import { useCallback } from "react";

export default function PaginationBtns() {
  const { results, setResults, form } = useSearch();
  const { page: currentPage, data } = results;

  const getPrevious = useCallback(async () => {
    if (!currentPage) return;
    const { data, error, page } = await getPage(form.query, currentPage - 1);
    setResults({ data, error, page });
  }, [currentPage, form.query, setResults]);

  const [_getPrevious, previousLoading] = useIsLoading(getPrevious);

  const getNext = useCallback(async () => {
    if (!currentPage) return;
    const { data, error, page } = await getPage(form.query, currentPage + 1);
    setResults({ data, error, page });
  }, [currentPage, form.query, setResults]);

  const [_getNext, nextLoading] = useIsLoading(getNext);

  if (!data) return;

  return (
    <div className="flex gap-4 py-4 mt-auto items-center justify-center w-full">
      {currentPage !== 1 && (
        <A.IconButton
          size="xs"
          icon="/icons/chevron-left.svg"
          aria-label="Previous"
          onClick={_getPrevious}
          isLoading={previousLoading}
          loader="sm"
        />
      )}
      <p>{currentPage}</p>
      {data.totalItems > SEARCH_RESULTS_COUNT && (
        <A.IconButton
          icon="/icons/chevron-right.svg"
          aria-label="Next"
          size="xs"
          onClick={_getNext}
          isLoading={nextLoading}
          loader="sm"
        />
      )}
    </div>
  );
}
