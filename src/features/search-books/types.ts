import { gbooks } from "@/services";
import { Dispatch, SetStateAction } from "react";

export interface SearchResultsState {
  data?: gbooks.types.SearchResults;
  error?: boolean;
}

export interface SearchFormState extends SearchResultsState {
  query: string;
  page?: number;
}

export type SearchContextValue =
  | {
      form: {
        query: string;
        page: number | undefined;
        action: (payload: FormData) => void;
        isPending: boolean;
      };
      results: SearchResultsState;
      setResults: Dispatch<SetStateAction<SearchResultsState>>;
    }
  | undefined;
