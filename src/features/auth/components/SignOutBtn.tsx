import { Button } from "@/components/atomic";
import { signOut } from "../actions";
import React from "react";

export default function SignOutBtn({
  className = "",
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <form action={signOut} role="presentation">
      <Button type="submit" className={`px-4 h-9 ${className}`}>
        Sign Out
      </Button>
    </form>
  );
}
