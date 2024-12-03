import { gb } from "@/services";

export type SearchFormState = {
  query: string;
  data: gb.types.SearchResults | null;
};
