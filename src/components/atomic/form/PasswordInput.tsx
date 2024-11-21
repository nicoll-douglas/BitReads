"use client";

import Input, { InputProps } from "./Input";
import Image from "next/image";
import { useState } from "react";
import IconButton from "../IconButton";

export default function PasswordInput(props: InputProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="flex gap-1">
      <Input type={isVisible ? "text" : "password"} {...props} />
      {/* <button
        aria-label={isVisible ? "Hide password" : "Show password"}
        onClick={() => setIsVisible(!isVisible)}
        type="button"
        className="w-9 h-9 min-h-9 min-w-9 flex items-center justify-center border-2 bg-white border-black"
      >
        <Image
          src={`/icons/eye-${isVisible ? "open" : "closed"}.svg`}
          alt=""
          width={24}
          height={24}
        />
      </button> */}
      <IconButton
        icon={{
          src: `/icons/eye-${isVisible ? "open" : "closed"}.svg`,
          size: 6,
        }}
        onClick={() => setIsVisible(!isVisible)}
        type="button"
        aria-label={isVisible ? "Hide password" : "Show password"}
      />
    </div>
  );
}
