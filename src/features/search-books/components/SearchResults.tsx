import { gbooks } from "@/services";
import BookPreview from "./BookPreview";

export default function SearchResults({
  results,
}: {
  results: gbooks.types.SearchResults | null;
}) {
  return (
    <div className="w-full">
      {results && (
        <h2 className="mb-1" id="results-heading">
          Results:
        </h2>
      )}
      <ul
        className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4"
        aria-labelledby="results-heading"
      >
        {results?.items?.map((props, index) => (
          <BookPreview index={index} key={index} {...props} />
        ))}
      </ul>
    </div>
  );
}
