"use client";

import { Link } from "@/components/atomic";
import { usePathname } from "next/navigation";
import { useSearchParams } from "@/hooks";

export default function PaginationBtns() {
  const pathname = usePathname();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const query = searchParams.get("query");

  if (!page || !query) return <></>;

  const pageNumber = parseInt(page);

  return (
    <div className="flex gap-4 p-4 items-center justify-center w-full">
      {pageNumber !== 1 && (
        <Link href={`${pathname}?query=${query}&page=${pageNumber - 1}`}>
          Previous
        </Link>
      )}
      <p>{page}</p>
      <Link href={`${pathname}?query=${query}&page=${pageNumber + 1}`}>
        Next
      </Link>
    </div>
  );
}
