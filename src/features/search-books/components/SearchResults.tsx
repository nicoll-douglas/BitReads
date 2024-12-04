import BookPreview from "./BookPreview";
import { SearchFormState } from "../types";

export default function SearchResults({
  actionState,
}: {
  actionState: SearchFormState;
}) {
  const searchResults = actionState.data;
  const isError = actionState.error;

  return (
    <div className="w-full">
      {(searchResults || isError) && (
        <h2 className="mb-1" id="results-heading">
          Results:
        </h2>
      )}
      {searchResults && (
        <ul
          className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4"
          aria-labelledby="results-heading"
        >
          {searchResults.items?.map((props, index) => (
            <BookPreview index={index} key={index} {...props} />
          ))}
        </ul>
      )}
      {isError && (
        <p className="text-red-500">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
