import { Button, IconButton } from "@/components/atomic";
import { signOut } from "../actions";
import React from "react";

export default function SignOutBtn({
  className = "",
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <form action={signOut} role="presentation">
      <Button type="submit" className={`px-4 hidden xl:flex h-9 ${className}`}>
        Sign Out
      </Button>
      <IconButton
        aria-label="Sign Out"
        icon={{ src: "/icons/exit-icon.svg", size: 4 }}
        className={`xl:hidden h-8 w-8 min-h-8 min-w-8 ${className}`}
      />
    </form>
  );
}
