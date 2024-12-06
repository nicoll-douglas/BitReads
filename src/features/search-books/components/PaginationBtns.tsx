"use client";

import * as A from "@/components/atomic";
import { useSearch } from "../hooks";
import { getPage } from "../actions";
import { useIsLoading } from "@/hooks";
import { useCallback } from "react";

export default function PaginationBtns() {
  const { results, setResults, form } = useSearch();
  const { page: currentPage, data, error } = results;

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

  if (!data || error) return;

  return (
    <div
      className="flex gap-4 items-center justify-center"
      role="group"
      aria-label="Pagination"
    >
      {currentPage !== 1 && (
        <A.IconButton
          size="xs"
          icon="/icons/arrow-left.svg"
          aria-label="Previous"
          onClick={_getPrevious}
          isLoading={previousLoading}
          loader="sm"
        />
      )}
      <p className="text-nowrap">{`Page ${currentPage}`}</p>
      {data.totalItems > 0 && (
        <A.IconButton
          icon="/icons/arrow-right.svg"
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
