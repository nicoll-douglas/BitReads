import { Button, IconButton, ButtonProps } from "@/components/atomic";
import { signOut } from "../actions";
import React from "react";

interface SignOutBtnProps extends ButtonProps {
  formClassName?: string;
}

export default function SignOutBtn({
  formClassName = "",
  ...rest
}: SignOutBtnProps) {
  return (
    <form action={signOut} role="presentation" className={formClassName}>
      <Button type="submit" {...rest}>
        Sign Out
      </Button>
    </form>
  );
}

export function SignOutIconBtn({
  formClassName = "",
  ...rest
}: SignOutBtnProps) {
  return (
    <form action={signOut} role="presentation" className={formClassName}>
      <IconButton
        type="submit"
        aria-label="Sign Out"
        icon="/icons/exit-icon.svg"
        {...rest}
      />
    </form>
  );
}
