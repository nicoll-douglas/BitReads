import React from "react";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isInvalid?: boolean;
}

export default function Input({
  className,
  id,
  isInvalid,
  ...rest
}: InputProps) {
  return (
    <input
      id={id}
      className={`p-1 border-black border-2 ${
        isInvalid ? "border-red-500" : ""
      } ${className}`}
      spellCheck={false}
      {...rest}
    />
  );
}
