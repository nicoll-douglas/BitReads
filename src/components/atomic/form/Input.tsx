"use client";

import React from "react";
import { useTheme, Themes } from "@/features/theme";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isInvalid?: boolean;
}

export default function Input({
  className,
  id,
  isInvalid,
  ...rest
}: InputProps) {
  const { theme } = useTheme();
  const focusClass =
    theme === Themes.B
      ? "focus-visible:border-blue-500"
      : "focus-visible:border-red-500";

  return (
    <input
      id={id}
      className={`p-1 border-black border-2 ${focusClass} ${
        isInvalid ? "border-red-500" : ""
      } ${className}`}
      spellCheck={false}
      {...rest}
    />
  );
}
