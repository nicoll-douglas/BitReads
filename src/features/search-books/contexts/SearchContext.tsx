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

export const SearchContext = createContext<SearchContextValue>(undefined);

export function SearchProvider({ children }: { children?: ReactNode }) {
  const [state, action, isPending] = useActionState<SearchFormState, FormData>(
    search,
    { query: "" }
  );
  const { query, page, error, data } = state;

  const [results, setResults] = useState<SearchResultsState>({
    error,
    data,
  });

  useEffect(() => {
    setResults({ data, error });
  }, [error, data]);

  const contextValue: SearchContextValue = {
    form: { query, page, action, isPending },
    results,
    setResults,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}
