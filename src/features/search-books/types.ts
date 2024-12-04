import { gbooks } from "@/services";

export type SearchFormState = {
  query: string;
  data: gbooks.types.SearchResults | null;
  error?: boolean;
};
