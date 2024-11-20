"use client";

import Input, { InputProps } from "./Input";
import { IconButton } from "@/components/atomic";
import { useState } from "react";

export default function PasswordInput(props: InputProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="flex gap-1">
      <Input type={isVisible ? "text" : "password"} {...props} />
      <IconButton
        icon={{
          src: `/icons/eye-${isVisible ? "closed" : "open"}.svg`,
          size: 6,
        }}
        aria-label={isVisible ? "Hide password" : "Show password"}
        onClick={() => setIsVisible(!isVisible)}
        type="button"
      />
    </div>
  );
}
