"use client";

import BookPreview from "./BookPreview";
import { useSearch } from "../hooks";

export default function SearchResults() {
  const { results } = useSearch();

  return (
    <div className="w-full">
      {(results.data || results.error) && (
        <h2 className="mb-1" id="results-heading">
          Results:
        </h2>
      )}
      {results.data && (
        <>
          {results.data.items ? (
            <ul
              className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4"
              aria-labelledby="results-heading"
            >
              {results.data.items.map((props, index) => (
                <BookPreview index={index} key={index} {...props} />
              ))}
            </ul>
          ) : (
            <p>Nothing to show :(</p>
          )}
        </>
      )}
      {results.error && (
        <p className="text-red-500">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
