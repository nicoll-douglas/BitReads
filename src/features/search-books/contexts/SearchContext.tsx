"use client";

import {
  createContext,
  useState,
  useActionState,
  useEffect,
  ReactNode,
} from "react";
import type {
  SearchResultsState,
  SearchFormState,
  SearchContextValue,
} from "../types";
import { search } from "../actions";
import { useSearchParams } from "@/hooks";

export const SearchContext = createContext<SearchContextValue>(undefined);

export function SearchProvider({
  children,
  initialState,
}: {
  children?: ReactNode;
  initialState: SearchFormState;
}) {
  const [state, action, isPending] = useActionState<SearchFormState, FormData>(
    search,
    initialState
  );
  const { query, page, error, data } = state;

  const [results, setResults] = useState<SearchResultsState>({
    error,
    data,
    page,
  });

  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ query, page: results.page ? `${results.page}` : "" });
  }, [results, query, setSearchParams]);

  useEffect(() => {
    setResults({ data, error, page });
  }, [error, data, page]);

  const contextValue: SearchContextValue = {
    form: { query, action, isPending },
    results,
    setResults,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}
