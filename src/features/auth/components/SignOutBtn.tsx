import { Button, IconButton } from "@/components/atomic";
import { signOut } from "../actions";
import React from "react";

export default function SignOutBtn({
  className = "",
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <form action={signOut} role="presentation">
      <Button type="submit" className={`px-4 hidden xl:flex ${className}`}>
        Sign Out
      </Button>
      <IconButton
        aria-label="Sign Out"
        icon={{ src: "/icons/exit-icon.svg", size: 5 }}
        className={`xl:hidden ${className}`}
        size={8}
      />
    </form>
  );
}
