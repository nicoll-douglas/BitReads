import { Button, IconButton } from "@/components/atomic";
import { signOut } from "../actions";
import React from "react";

export default function SignOutBtn() {
  return (
    <form action={signOut} role="presentation">
      <Button type="submit" className={`px-4 hidden xl:flex`} size="sm">
        Sign Out
      </Button>
      <IconButton
        aria-label="Sign Out"
        icon="/icons/exit-icon.svg"
        className={`xl:hidden`}
        size={"sm"}
      />
    </form>
  );
}
