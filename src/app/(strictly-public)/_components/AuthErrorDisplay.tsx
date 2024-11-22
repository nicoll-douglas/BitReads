"use client";

import * as A from "@/components/atomic";
import { useSearchParams } from "next/navigation";

export default function AuthErrorDisplay() {
  const searchParams = useSearchParams();

  let message;

  switch (searchParams.get("error")) {
    case "Configuration":
      message =
        "Something went wrong. If the issue persists, please contact us.";
      break;
    case "AccessDenied":
      message = "Access has been denied.";
      break;
    case "Verification":
      message = "This link is either invalid or expired.";
      break;
    default:
      message = "Something went wrong.";
  }

  return (
    <A.Card>
      <div className="p-4">
        <h1 className="text-3xl">Oops!</h1>
      </div>
      <div className="px-4 pb-4">
        <p>{message}</p>
      </div>
    </A.Card>
  );
}
