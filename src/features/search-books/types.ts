import { gbooks } from "@/services";
import { Dispatch, SetStateAction } from "react";

export interface SearchResultsState {
  data?: gbooks.types.SearchResults;
  error?: boolean;
  page?: number;
}

export interface SearchFormState extends SearchResultsState {
  query: string;
}

export type SearchContextValue =
  | {
      form: {
        query: string;
        action: (payload: FormData) => void;
        isPending: boolean;
      };
      results: SearchResultsState;
      setResults: Dispatch<SetStateAction<SearchResultsState>>;
    }
  | undefined;
