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
        }}
        aria-label={isVisible ? "Hide password" : "Show password"}
        onClick={() => setIsVisible(!isVisible)}
        type="button"
        // className="bg-white border-t-black border-b-black border-r-black border-l-black
        // active:border-t-black/50 active:border-r-black/50 active:border-l-black/50 active:border-b-black/50"
      />
    </div>
  );
}
