"use client";

import * as A from "@/components/atomic";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  let details;

  switch (searchParams.get("error")) {
    case "Configuration":
      details = [
        "Oops!",
        "Something went wrong. If the issue persists, please contact us.",
      ];
      break;
    case "AccessDenied":
      details = ["Access Denied", "Access has been denied."];
      break;
    case "Verification":
      details = ["Oops!", "This link is either invalid or expired."];
      break;
    default:
      details = ["Oops!", "Something went wrong."];
  }

  return (
    <A.Card>
      <div className="p-4">
        <h1 className="text-3xl">{details[0]}</h1>
      </div>
      <div className="px-4 pb-4">
        <p>{details[1]}</p>
      </div>
    </A.Card>
  );
}
